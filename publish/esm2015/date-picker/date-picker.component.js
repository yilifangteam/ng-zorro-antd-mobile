import { Component, ElementRef, ViewEncapsulation, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { DatePickerOptions } from './date-picker-options.provider';
import { ToastService } from '../toast/toast.service';
import * as velocity from '../core/util/velocity';
export class DatePickerComponent {
    constructor(elementRef, options, toast, localeProviderService) {
        this.elementRef = elementRef;
        this.options = options;
        this.toast = toast;
        this.localeProviderService = localeProviderService;
        this.transitionName = 'am-slide-up-enter am-slide-up-enter-active';
        this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        this.modeSwitch = [1, 1, 1, 1, 1, 1];
        this.localMinDate = [];
        this.localMaxDate = [];
        this.currentTime = [];
        this.indexArray = [];
        this.min_date = [];
        this.max_date = [];
        this.current_time = [
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            new Date().getHours(),
            new Date().getMinutes()
        ];
        this.clos = 0;
        this.resultArr = [];
        this.data = [];
        this.dataWithStr = [];
        this.startY = 0;
        this.differY = 0;
        this.currentY = 0;
        this.len = 0;
        this.dom = null;
        this.index = 0;
        this.maxY = 0;
        this.lineHeight = 34;
        this.selectedTarget = [];
        this.isMouseDown = false;
        this.localeNew = {};
        this.unsubscribe$ = new Subject();
        this.Velocity = velocity.getVelocity();
        this.errorMessage = '';
        this.curTLessThanMin = false;
        this.curTMoreThanMax = false;
    }
    panstart(event) {
        if (!event.target.classList.contains('am-picker-col-mask')) {
            return;
        }
        this.isMouseDown = true;
        event.preventDefault();
        this.dom = event.target.parentElement.children[2];
        this.len = this.dom.children.length;
        this.maxY = -(this.len - 1);
        if (this.dom.style.transform === 'translateY(0px)') {
            this.currentY = 0;
            this.maxY = -(this.len - 1);
        }
        else if (this.selectedTarget.length > 0) {
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    this.currentY = item.currentY;
                }
            });
        }
        const ev = this.getEventTarget(event);
        this.startY = ev.clientY;
    }
    panmove(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
            return;
        }
        event.preventDefault();
        const ev = this.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        this.Velocity.record(this.differY);
        this.dom.style.transition = 'transform 0s';
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
    }
    panend(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
            return;
        }
        this.isMouseDown = false;
        event.preventDefault();
        const ev = this.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        let time = 0.3;
        const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
        if (velocityTemp) {
            this.differY = velocityTemp * 40 + this.differY;
            time = Math.abs(velocityTemp) * 0.1;
        }
        this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
        if (this.differY <= -this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY <= this.maxY) {
                this.currentY = this.maxY;
            }
        }
        else if (this.differY >= this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY >= 0) {
                this.currentY = 0;
            }
        }
        if (this.selectedTarget.length > 0) {
            let hasKey = false;
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    hasKey = true;
                    item.targetId = event.target.id;
                    item.currentY = this.currentY;
                }
            });
            if (!hasKey) {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
        }
        else {
            this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
        }
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
        this.index = Math.floor(Math.abs(this.currentY / 1)); // 记录当前位移在数组中的索引,必须取整，否则会出现浮点数
        this.current_time[this.indexArray[parseInt(event.target.id, 0)]] = this.resultArr[this.indexArray[parseInt(event.target.id, 0)]] = this.data[parseInt(event.target.id, 0)][this.index];
        if (this.judgeTime(this.current_time, this.max_date)) {
            this.currentTime = this.current_time =
                this.max_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
            this.resultArr = this.current_time;
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
            this.init();
        }
        else if (this.judgeTime(this.min_date, this.current_time)) {
            this.currentTime = this.current_time =
                this.min_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
            this.resultArr = this.currentTime;
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
            this.init();
        }
        else {
            this.setCurrentSelected(0, this.differY < 0, this.index);
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
        }
    }
    init() {
        if (!this.checkTime() && this.options.showErrorToast) {
            setTimeout(() => {
                this.toast.fail(this.errorMessage, this.options.showErrorToastInterval);
            }, 0);
        }
        this.initResult();
        this.initReady();
        this.getInitValueIndex();
    }
    reloadPicker() {
        if (!this.picker || this.picker === undefined) {
            return;
        }
        this.currentPicker = this.picker.element.nativeElement;
        if (this.currentPicker && this.currentPicker.children.length > 0) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    localeProvider() {
        const self = this;
        if (self.options.locale || self.options.locale !== undefined) {
            self.localeProviderService.setLocale(self.options.locale);
        }
        self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
            self.options.locale = self.localeProviderService.getLocale();
            self.localeNew = self.localeProviderService.getLocaleSubObj('DatePicker');
            self.options.okText = self.localeNew.okText;
            self.options.dismissText = self.localeNew.dismissText;
            self.init();
        });
    }
    transformDateFormat(date) {
        if (!date) {
            return '';
        }
        else {
            return 'yyyy-mm-dd-HH-MM'
                .replace('yyyy', date.getFullYear() + '')
                .replace('mm', date.getMonth() + 1 + '')
                .replace('dd', date.getDate() + '')
                .replace('HH', date.getHours() + '')
                .replace('MM', date.getMinutes() + '');
        }
    }
    preZero(val) {
        return val < 10 ? '0' + val : val + '';
    }
    getInitValueIndex() {
        this.selectedTarget = [];
        this.indexArray.map((index, i) => {
            this.data.forEach((item, j) => {
                item.forEach((item1, k) => {
                    if (this.currentTime[index] === item1 && i === j) {
                        this.selectedTarget.push({ targetId: `${i}`, currentY: -k });
                    }
                });
            });
        });
        this.reloadPicker();
    }
    checkMode(mode) {
        this.modeSwitch = [1, 1, 1, 1, 1, 1];
        switch (mode) {
            case 'date':
                this.modeSwitch = [1, 1, 1, 0, 0, 0];
                break;
            case 'time':
                if (this.options.use12Hours) {
                    this.modeSwitch = [0, 0, 0, 1, 1, 1];
                }
                else {
                    this.modeSwitch = [0, 0, 0, 1, 1, 0];
                }
                break;
            case 'datetime':
                if (this.options.use12Hours) {
                    this.modeSwitch = [1, 1, 1, 1, 1, 1];
                }
                else {
                    this.modeSwitch = [1, 1, 1, 1, 1, 0];
                }
                break;
            case 'year':
                this.modeSwitch = [1, 0, 0, 0, 0];
                break;
            case 'month':
                this.modeSwitch = [1, 1, 0, 0, 0];
                break;
            default:
                break;
        }
        const tempIndexArray = [];
        for (let i = 0; i < this.modeSwitch.length; i++) {
            if (this.modeSwitch[i] > 0) {
                tempIndexArray.push(i);
            }
        }
        this.clos = tempIndexArray[tempIndexArray.length - 1] - tempIndexArray[0] + 1;
        this.indexArray = tempIndexArray;
    }
    initResult() {
        this.resultArr = [];
        for (let i = 0; i < this.clos; i++) {
            const res = this.currentTime[i];
            if (this.options.mode === 'time') {
                this.resultArr = this.currentTime;
            }
            else {
                this.resultArr.push(res);
            }
        }
    }
    checkTime() {
        const min_Date = this.transformDateFormat(this.options.minDate).split('-');
        if (min_Date.length > 0) {
            this.min_date = min_Date.map(item => {
                return parseInt(item, 0);
            });
        }
        const max_Date = this.transformDateFormat(this.options.maxDate).split('-');
        if (max_Date.length > 0) {
            this.max_date = max_Date.map(item => {
                return parseInt(item, 0);
            });
        }
        const min_date = this.min_date;
        const max_date = this.max_date;
        const current_time = this.currentTime;
        this.localMinDate = [];
        if (this.localMinDate.length === 0) {
            for (let index = 0; index < this.indexArray.length; index++) {
                this.localMinDate.push(min_date[this.indexArray[index]]);
            }
        }
        this.localMaxDate = [];
        if (this.localMaxDate.length === 0) {
            for (let index = 0; index < this.indexArray.length; index++) {
                this.localMaxDate.push(max_date[this.indexArray[index]]);
            }
        }
        if (this.indexArray.length === this.localMinDate.length && this.localMinDate.length === this.localMaxDate.length) {
            const minT = new Date(min_date[0], min_date[1], min_date[2], min_date[3], min_date[4]).getTime();
            const maxT = new Date(max_date[0], max_date[1], max_date[2], max_date[3], max_date[4]).getTime();
            const curT = new Date(current_time[0], current_time[1], current_time[2], current_time[3] || 0, current_time[4] || 0).getTime();
            this.curTLessThanMin = false;
            this.curTMoreThanMax = false;
            if (curT < minT) {
                this.curTLessThanMin = true;
                this.currentTime = this.min_date;
                this.errorMessage = this.localeNew.curTLessthanMin;
            }
            if (curT > maxT) {
                this.curTMoreThanMax = true;
                this.currentTime = this.max_date;
                this.errorMessage = this.localeNew.curTMorethanMax;
            }
            let _indexArrayIndex = 0;
            let timeModeIndex = this.options.mode === 'time' ? 3 : 0;
            for (let i = 0; i < this.modeSwitch.length; i++) {
                if (this.modeSwitch[i] === 0) {
                    switch (i) {
                        case 0:
                            min_date[i] = new Date().getFullYear();
                            max_date[i] = new Date().getFullYear();
                            break;
                        case 1:
                            min_date[i] = new Date().getMonth() + 1;
                            max_date[i] = new Date().getMonth() + 1;
                            break;
                        case 2:
                            min_date[i] = new Date().getDate();
                            max_date[i] = new Date().getDate();
                            break;
                        case 3:
                            min_date[i] = new Date().getHours();
                            max_date[i] = new Date().getHours();
                            break;
                        case 4:
                            min_date[i] = new Date().getMinutes();
                            max_date[i] = new Date().getMinutes();
                            break;
                        case 5:
                            min_date[i] = 0;
                            max_date[i] = 1;
                            break;
                    }
                }
                else {
                    switch (i) {
                        case 0:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] >= 1900
                                    ? this.localMinDate[_indexArrayIndex]
                                    : new Date().getFullYear();
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] >= 1900
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : new Date().getFullYear() + 1;
                            break;
                        case 1:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] > 0 && this.localMinDate[_indexArrayIndex] <= 12
                                    ? this.localMinDate[_indexArrayIndex]
                                    : 1;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] > 0 && this.localMaxDate[_indexArrayIndex] <= 12
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : 12;
                            break;
                        case 2:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] > 0 &&
                                    this.localMinDate[_indexArrayIndex] <= new Date(min_date[0], min_date[1], 0).getDate()
                                    ? this.localMinDate[_indexArrayIndex]
                                    : 1;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] > 0 &&
                                    this.localMaxDate[_indexArrayIndex] <= new Date(max_date[0], max_date[1], 0).getDate()
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : new Date(max_date[0], max_date[1], 0).getDate();
                            break;
                        case 3:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 23
                                    ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                                    : 0;
                            if (this.options.use12Hours) {
                                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                    this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 11
                                        ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                        : 11;
                            }
                            else {
                                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                    this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 23
                                        ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                        : 23;
                            }
                            break;
                        case 4:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 59
                                    ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                                    : 0;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 59
                                    ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                    : 59;
                            break;
                    }
                }
                _indexArrayIndex++;
            }
            return minT <= curT && curT <= maxT;
        }
        else {
            this.errorMessage = this.localeNew.errorMessage;
            return false;
        }
    }
    judgeTime(arr1, arr2) {
        let date1;
        let date2;
        date1 = arr1.slice(0, 3).join('-') + ' ' + arr1.slice(3, 5).join(':');
        date2 = arr2.slice(0, 3).join('-') + ' ' + arr2.slice(3, 5).join(':');
        return new Date(date1).getTime() > new Date(date2).getTime();
    }
    judgeEqualArray(arr1, arr2, length) {
        let status = true;
        for (let i = 0; i < length; i++) {
            if (arr1[i] != arr2[i]) {
                status = false;
            }
        }
        return status;
    }
    initReady() {
        let realIdx = 0;
        for (let i = 0; i < this.clos; i++) {
            realIdx = this.indexArray[i];
            let min = 0;
            let max = 0;
            const tempArray = [];
            switch (realIdx) {
                case 0:
                    this.initData(tempArray, this.localMinDate[i], this.localMaxDate[i], this.localeNew.year, i);
                    break;
                case 1:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[i] : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[i] : 12;
                    this.initData(tempArray, min, max, this.localeNew.month, i);
                    break;
                case 2:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 2)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 2)
                        ? this.localMaxDate[i]
                        : new Date(this.current_time[0], this.current_time[1], 0).getDate();
                    this.initData(tempArray, min, max, this.localeNew.day, i);
                    break;
                case 3:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 3)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 3)
                        ? this.localMaxDate[i]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[i]
                            : 23;
                    this.initData(tempArray, min, max, this.localeNew.hour, i);
                    break;
                case 4:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 4)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 4)
                        ? this.localMaxDate[i]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[i]
                            : 59;
                    this.initData(tempArray, min, max, this.localeNew.minute, i);
                    break;
                case 5:
                    min = 0;
                    max = 1;
                    this.initData(tempArray, min, max, 'use12Hours', i);
                    break;
            }
        }
    }
    initData(tempArr, min, max, str, idx) {
        const dataWithStr = [];
        const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
        for (min; min < max + 1; min += increaseValue) {
            tempArr.push(min);
            dataWithStr.push(min + str);
        }
        if (this.data.length > this.indexArray.length) {
            this.data = [];
            this.dataWithStr = [];
        }
        if (this.data.length > idx && this.data[idx].toString() !== tempArr.toString()) {
            this.data[idx] = tempArr;
        }
        else if (this.data.length > idx && this.data[idx].toString() === tempArr.toString()) {
            this.data[idx] = tempArr;
        }
        else {
            this.data.push(tempArr);
        }
        if (this.options.locale === undefined || this.options.locale.locale === 'zh_CN') {
            if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() !== dataWithStr.toString()) {
                this.dataWithStr[idx] = dataWithStr;
            }
            else if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() === dataWithStr.toString()) {
                this.dataWithStr[idx] = dataWithStr;
            }
            else {
                this.dataWithStr.push(dataWithStr);
            }
        }
        else {
            this.dataWithStr = this.data;
        }
    }
    ok() {
        this.options.onOk.emit(this.handleReslut());
        this.setTransitionName();
    }
    handleReslut() {
        let result = '';
        if (this.options.mode === 'datetime' || this.options.mode === 'time') {
            const temp = this.resultArr;
            result = temp.slice(0, 3).join('-') + ' ' + temp.slice(3, 5).join(':');
        }
        else {
            if (this.resultArr.length < 3) {
                this.resultArr.push('1');
            }
            result = this.resultArr
                .slice(0, 3)
                .map(v => {
                return this.preZero(parseInt(v, 0));
            })
                .join('-');
        }
        this.resultDate = new Date(result.replace(/-/g, '/'));
        if (this.options.minDate.getTime() > this.resultDate.getTime()) {
            if (this.resultArr.length > 0) {
                for (let index = 0; index < this.resultArr.length; index++) {
                    this.resultArr = [...this.min_date];
                    this.currentTime = this.resultArr;
                    this.current_time = this.currentTime;
                }
            }
            this.resultDate = this.options.minDate;
        }
        return this.resultDate;
    }
    cancel() {
        this.options.onDismiss.emit();
        this.setTransitionName();
    }
    setTransitionName() {
        this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
        this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
        setTimeout(() => {
            this.options.hidePicker();
        }, 200);
    }
    setCurrentSelected(checkIdx, sta, indexT) {
        if (checkIdx >= this.clos - 1) {
            return;
        }
        let status = null;
        if (sta) {
            status = this.judgeEqualArray(this.min_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
        }
        else {
            status = this.judgeEqualArray(this.max_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
        }
        if (!status) {
            let min = 0;
            let max = 0;
            let str = '';
            const realIdx = this.indexArray[checkIdx];
            switch (realIdx) {
                case 0:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[checkIdx + 1] : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[checkIdx + 1] : 12;
                    str = '月';
                    break;
                case 1:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 2)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 2)
                        ? this.localMaxDate[checkIdx + 1]
                        : new Date(this.current_time[0], this.current_time[1], 0).getDate();
                    str = '日';
                    break;
                case 2:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 3)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 3)
                        ? this.localMaxDate[checkIdx + 1]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[checkIdx + 1]
                            : 23;
                    str = '时';
                    break;
                case 3:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 4)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 4)
                        ? this.localMaxDate[checkIdx + 1]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[checkIdx + 1]
                            : 59;
                    str = '分';
                    break;
            }
            this.initRangeArr(min, max, indexT, checkIdx + 1, str);
        }
        this.setCurrentSelected(checkIdx + 1, sta, indexT);
    }
    initRangeArr(min, max, indexT, checkIdx, str) {
        const realIdx = this.indexArray[checkIdx];
        const arr = [];
        let targetLong = 0;
        const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
        for (let index = min; index < max + 1; index += increaseValue) {
            arr.push(index);
        }
        if (arr.indexOf(this.resultArr[realIdx]) == -1) {
            if (-this.selectedTarget[checkIdx].currentY > max - min) {
                indexT = max - min;
                this.selectedTarget[checkIdx].currentY = -indexT;
            }
            targetLong = -arr.length * this.lineHeight;
        }
        else {
            targetLong = -arr.indexOf(this.resultArr[realIdx]) * this.lineHeight;
            this.selectedTarget[checkIdx].currentY = -arr.indexOf(this.resultArr[realIdx]);
        }
        if (this.data[checkIdx].toString() !== arr.toString()) {
            if (checkIdx >= 3) {
                this.current_time[realIdx] = -targetLong / this.lineHeight;
                this.resultArr[realIdx] = -targetLong / this.lineHeight;
            }
            else {
                const delta = this.judgeEqualArray(this.current_time, this.min_date, realIdx) ? this.min_date[realIdx] : 1;
                this.current_time[realIdx] = -targetLong / this.lineHeight + delta;
                this.resultArr[realIdx] = -targetLong / this.lineHeight + delta;
            }
            this.data[checkIdx] = arr;
            this.dataWithStr[checkIdx] =
                this.options.locale.locale === 'zh_CN'
                    ? arr.map(item => {
                        return item + str;
                    })
                    : arr;
            setTimeout(() => {
                this.selectedTarget.forEach((item, i) => {
                    if (i >= checkIdx) {
                        this.currentPicker.children[i].children[2].style.transition = '';
                        const index = parseInt(item.currentY, 0);
                        this.currentPicker.children[i].children[2].style.transform = `translateY(${index * this.lineHeight}px)`;
                    }
                });
            }, 0);
        }
    }
    getEventTarget(event) {
        if (event.type === 'mousedown' ||
            event.type === 'mousemove' ||
            event.type === 'mouseup' ||
            event.type === 'mouseleave') {
            return event;
        }
        else {
            if (event && event.changedTouches && event.changedTouches[0]) {
                return event.changedTouches[0];
            }
            return null;
        }
    }
    ngOnInit() {
        this.checkMode(this.options.mode);
        const value = this.transformDateFormat(this.options.value).split('-');
        if (value.length > 1) {
            this.current_time = this.currentTime = value.map(item => {
                return parseInt(item, 0);
            });
        }
        else {
            this.currentTime = this.current_time;
        }
        this.localeProvider();
    }
    ngAfterViewInit() {
        this.reloadPicker();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'DatePicker, nzm-date-picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup {{ transitionName }}\" style=\"z-index: 1000\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">\n            {{ options.okText }}\n          </div>\n        </div>\n        <div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n          <div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\"></div>\n            <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n            <div class=\"am-picker-col-content\">\n              <div id=\"{{ i }}\" class=\"am-picker-col-item\" *ngFor=\"let val of item; let i = index\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DatePickerOptions },
    { type: ToastService },
    { type: LocaleProviderService }
];
DatePickerComponent.propDecorators = {
    picker: [{ type: ViewChild, args: ['picker', { read: ViewContainerRef },] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixTQUFTLEVBQ1QsZ0JBQWdCLEVBR2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBUWxELE1BQU0sT0FBTyxtQkFBbUI7SUF5SzlCLFlBQ1MsVUFBc0IsRUFDdEIsT0FBMEIsRUFDMUIsS0FBbUIsRUFDbkIscUJBQTRDO1FBSDVDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBNUtyRCxtQkFBYyxHQUFXLDRDQUE0QyxDQUFDO1FBQ3RFLHVCQUFrQixHQUFXLG9DQUFvQyxDQUFDO1FBQ2xFLGVBQVUsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIs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QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUE5dkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyx5N0NBQTJDO2dCQUMzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O1lBcEJDLFVBQVU7WUFXSCxpQkFBaUI7WUFDakIsWUFBWTtZQUZaLHFCQUFxQjs7O3FCQXFEM0IsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt1QkFHOUMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQXdCckMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVlwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3JDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDbEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyT3B0aW9ucyB9IGZyb20gJy4vZGF0ZS1waWNrZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHZlbG9jaXR5IGZyb20gJy4uL2NvcmUvdXRpbC92ZWxvY2l0eSc7XG5leHBvcnQgdHlwZSBEYXRlTW9kZSA9ICdkYXRlJyB8ICd0aW1lJyB8ICdkYXRldGltZScgfCAneWVhcicgfCAnbW9udGgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdEYXRlUGlja2VyLCBuem0tZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRyYW5zaXRpb25OYW1lOiBzdHJpbmcgPSAnYW0tc2xpZGUtdXAtZW50ZXIgYW0tc2xpZGUtdXAtZW50ZXItYWN0aXZlJztcbiAgbWFza1RyYW5zaXRpb25OYW1lOiBzdHJpbmcgPSAnYW0tZmFkZS1lbnRlciBhbS1mYWRlLWVudGVyLWFjdGl2ZSc7XG4gIG1vZGVTd2l0Y2g6IG51bWJlcltdID0gWzEsIDEsIDEsIDEsIDEsIDFdO1xuICBsb2NhbE1pbkRhdGU6IGFueVtdID0gW107XG4gIGxvY2FsTWF4RGF0ZTogYW55W10gPSBbXTtcbiAgY3VycmVudFRpbWU6IGFueVtdID0gW107XG4gIGluZGV4QXJyYXk6IGFueSA9IFtdO1xuICBtaW5fZGF0ZTogbnVtYmVyW10gPSBbXTtcbiAgbWF4X2RhdGU6IG51bWJlcltdID0gW107XG4gIGN1cnJlbnRfdGltZTogYW55W10gPSBbXG4gICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsXG4gICAgbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgbmV3IERhdGUoKS5nZXRIb3VycygpLFxuICAgIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpXG4gIF07XG4gIGNsb3M6IG51bWJlciA9IDA7XG4gIHJlc3VsdEFycjogYW55ID0gW107XG4gIHJlc3VsdERhdGU6IERhdGU7XG4gIGRhdGE6IGFueVtdID0gW107XG4gIGRhdGFXaXRoU3RyOiBhbnlbXSA9IFtdO1xuICBzdGFydFk6IG51bWJlciA9IDA7XG4gIGRpZmZlclk6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRZOiBudW1iZXIgPSAwO1xuICBsZW46IG51bWJlciA9IDA7XG4gIGRvbTogYW55ID0gbnVsbDtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG4gIG1heFk6IG51bWJlciA9IDA7XG4gIGxpbmVIZWlnaHQ6IG51bWJlciA9IDM0O1xuICBzZWxlY3RlZFRhcmdldDogYW55W10gPSBbXTtcbiAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VycmVudFBpY2tlcjogYW55O1xuICBsb2NhbGVOZXc6IGFueSA9IHt9O1xuICB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBWZWxvY2l0eSA9IHZlbG9jaXR5LmdldFZlbG9jaXR5KCk7XG4gIGVycm9yTWVzc2FnZSA9ICcnO1xuICBjdXJUTGVzc1RoYW5NaW4gPSBmYWxzZTtcbiAgY3VyVE1vcmVUaGFuTWF4ID0gZmFsc2U7XG4gIG5nTW9kZWxPbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB7fTtcbiAgbmdNb2RlbE9uVG91Y2hlZDogKCkgPT4ge307XG5cbiAgQFZpZXdDaGlsZCgncGlja2VyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHBpY2tlcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgcGFuc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FtLXBpY2tlci1jb2wtbWFzaycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kb20gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuZG9tLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG5cbiAgICBpZiAodGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID09PSAndHJhbnNsYXRlWSgwcHgpJykge1xuICAgICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gICAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0SWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFkgPSBpdGVtLmN1cnJlbnRZO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZXYgPSB0aGlzLmdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2LmNsaWVudFk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykgfHwgIXRoaXMuaXNNb3VzZURvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldiA9IHRoaXMuZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgIHRoaXMuZGlmZmVyWSA9IGV2LmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgICB0aGlzLlZlbG9jaXR5LnJlY29yZCh0aGlzLmRpZmZlclkpO1xuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDBzJztcbiAgICB0aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFkgKiB0aGlzLmxpbmVIZWlnaHQgKyB0aGlzLmRpZmZlcll9cHgpYDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbS1waWNrZXItY29sLW1hc2snKSB8fCAhdGhpcy5pc01vdXNlRG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldiA9IHRoaXMuZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgIHRoaXMuZGlmZmVyWSA9IGV2LmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBsZXQgdGltZSA9IDAuMztcbiAgICBjb25zdCB2ZWxvY2l0eVRlbXAgPSB0aGlzLlZlbG9jaXR5LmdldFZlbG9jaXR5KHRoaXMuZGlmZmVyWSkgKiA0O1xuICAgIGlmICh2ZWxvY2l0eVRlbXApIHtcbiAgICAgIHRoaXMuZGlmZmVyWSA9IHZlbG9jaXR5VGVtcCAqIDQwICsgdGhpcy5kaWZmZXJZO1xuICAgICAgdGltZSA9IE1hdGguYWJzKHZlbG9jaXR5VGVtcCkgKiAwLjE7XG4gICAgfVxuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyAodGltZSA8IDAuMyA/IDAuMyA6IHRpbWUpICsgJ3MnO1xuICAgIGlmICh0aGlzLmRpZmZlclkgPD0gLXRoaXMubGluZUhlaWdodCAvIDIpIHtcbiAgICAgIHRoaXMuY3VycmVudFkgKz0gTWF0aC5mbG9vcih0aGlzLmRpZmZlclkgLyB0aGlzLmxpbmVIZWlnaHQpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFkgPD0gdGhpcy5tYXhZKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB0aGlzLm1heFk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpZmZlclkgPj0gdGhpcy5saW5lSGVpZ2h0IC8gMikge1xuICAgICAgdGhpcy5jdXJyZW50WSArPSBNYXRoLmZsb29yKHRoaXMuZGlmZmVyWSAvIHRoaXMubGluZUhlaWdodCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50WSA+PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBoYXNLZXkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0SWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgaXRlbS50YXJnZXRJZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICBpdGVtLmN1cnJlbnRZID0gdGhpcy5jdXJyZW50WTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogZXZlbnQudGFyZ2V0LmlkLCBjdXJyZW50WTogdGhpcy5jdXJyZW50WSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5wdXNoKHsgdGFyZ2V0SWQ6IGV2ZW50LnRhcmdldC5pZCwgY3VycmVudFk6IHRoaXMuY3VycmVudFkgfSk7XG4gICAgfVxuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50WSAqIHRoaXMubGluZUhlaWdodH1weClgO1xuICAgIHRoaXMuaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuY3VycmVudFkgLyAxKSk7IC8vIOiusOW9leW9k+WJjeS9jeenu+WcqOaVsOe7hOS4reeahOe0ouW8lSzlv4Xpobvlj5bmlbTvvIzlkKbliJnkvJrlh7rnjrDmta7ngrnmlbBcbiAgICB0aGlzLmN1cnJlbnRfdGltZVt0aGlzLmluZGV4QXJyYXlbcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAwKV1dID0gdGhpcy5yZXN1bHRBcnJbXG4gICAgICB0aGlzLmluZGV4QXJyYXlbcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAwKV1cbiAgICBdID0gdGhpcy5kYXRhW3BhcnNlSW50KGV2ZW50LnRhcmdldC5pZCwgMCldW3RoaXMuaW5kZXhdO1xuICAgIGlmICh0aGlzLmp1ZGdlVGltZSh0aGlzLmN1cnJlbnRfdGltZSwgdGhpcy5tYXhfZGF0ZSkpIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRfdGltZSA9XG4gICAgICAgIHRoaXMubWF4X2RhdGUuc2xpY2UoMCwgdGhpcy5vcHRpb25zLm1vZGUgPT09ICd0aW1lJyA/IHRoaXMubW9kZVN3aXRjaC5sZW5ndGggOiB0aGlzLmluZGV4QXJyYXkubGVuZ3RoKTtcbiAgICAgIHRoaXMucmVzdWx0QXJyID0gdGhpcy5jdXJyZW50X3RpbWU7XG4gICAgICB0aGlzLm9wdGlvbnMub25WYWx1ZUNoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5oYW5kbGVSZXNsdXQoKSwgaW5kZXg6IGV2ZW50LnRhcmdldC5pZCB9KTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCh0aGlzLmhhbmRsZVJlc2x1dCgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLm5nTW9kZWxPbkNoYW5nZSh0aGlzLmhhbmRsZVJlc2x1dCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5qdWRnZVRpbWUodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50X3RpbWUgPVxuICAgICAgICB0aGlzLm1pbl9kYXRlLnNsaWNlKDAsIHRoaXMub3B0aW9ucy5tb2RlID09PSAndGltZScgPyB0aGlzLm1vZGVTd2l0Y2gubGVuZ3RoIDogdGhpcy5pbmRleEFycmF5Lmxlbmd0aCk7XG4gICAgICB0aGlzLnJlc3VsdEFyciA9IHRoaXMuY3VycmVudFRpbWU7XG4gICAgICB0aGlzLm9wdGlvbnMub25WYWx1ZUNoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5oYW5kbGVSZXNsdXQoKSwgaW5kZXg6IGV2ZW50LnRhcmdldC5pZCB9KTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCh0aGlzLmhhbmRsZVJlc2x1dCgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLm5nTW9kZWxPbkNoYW5nZSh0aGlzLmhhbmRsZVJlc2x1dCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRTZWxlY3RlZCgwLCB0aGlzLmRpZmZlclkgPCAwLCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMub3B0aW9ucy5vblZhbHVlQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmhhbmRsZVJlc2x1dCgpLCBpbmRleDogZXZlbnQudGFyZ2V0LmlkIH0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMubmdNb2RlbE9uQ2hhbmdlKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBvcHRpb25zOiBEYXRlUGlja2VyT3B0aW9ucyxcbiAgICBwdWJsaWMgdG9hc3Q6IFRvYXN0U2VydmljZSxcbiAgICBwdWJsaWMgbG9jYWxlUHJvdmlkZXJTZXJ2aWNlOiBMb2NhbGVQcm92aWRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrVGltZSgpICYmIHRoaXMub3B0aW9ucy5zaG93RXJyb3JUb2FzdCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9hc3QuZmFpbCh0aGlzLmVycm9yTWVzc2FnZSwgdGhpcy5vcHRpb25zLnNob3dFcnJvclRvYXN0SW50ZXJ2YWwpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFJlc3VsdCgpO1xuICAgIHRoaXMuaW5pdFJlYWR5KCk7XG4gICAgdGhpcy5nZXRJbml0VmFsdWVJbmRleCgpO1xuICB9XG5cbiAgcmVsb2FkUGlja2VyKCkge1xuICAgIGlmICghdGhpcy5waWNrZXIgfHwgdGhpcy5waWNrZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRQaWNrZXIgPSB0aGlzLnBpY2tlci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuY3VycmVudFBpY2tlciAmJiB0aGlzLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgc2VsZi5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4zcyc7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChpdGVtLmN1cnJlbnRZLCAwKTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIHNlbGYubGluZUhlaWdodH1weClgO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGxvY2FsZVByb3ZpZGVyKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLm9wdGlvbnMubG9jYWxlIHx8IHNlbGYub3B0aW9ucy5sb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZi5sb2NhbGVQcm92aWRlclNlcnZpY2Uuc2V0TG9jYWxlKHNlbGYub3B0aW9ucy5sb2NhbGUpO1xuICAgIH1cbiAgICBzZWxmLmxvY2FsZVByb3ZpZGVyU2VydmljZS5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwoc2VsZi51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICBzZWxmLm9wdGlvbnMubG9jYWxlID0gc2VsZi5sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlKCk7XG4gICAgICBzZWxmLmxvY2FsZU5ldyA9IHNlbGYubG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmdldExvY2FsZVN1Yk9iaignRGF0ZVBpY2tlcicpO1xuICAgICAgc2VsZi5vcHRpb25zLm9rVGV4dCA9IHNlbGYubG9jYWxlTmV3Lm9rVGV4dDtcbiAgICAgIHNlbGYub3B0aW9ucy5kaXNtaXNzVGV4dCA9IHNlbGYubG9jYWxlTmV3LmRpc21pc3NUZXh0O1xuICAgICAgc2VsZi5pbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRlRm9ybWF0KGRhdGU6IERhdGUpOiBhbnkge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3l5eXktbW0tZGQtSEgtTU0nXG4gICAgICAgIC5yZXBsYWNlKCd5eXl5JywgZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCdtbScsIGRhdGUuZ2V0TW9udGgoKSArIDEgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ2RkJywgZGF0ZS5nZXREYXRlKCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ0hIJywgZGF0ZS5nZXRIb3VycygpICsgJycpXG4gICAgICAgIC5yZXBsYWNlKCdNTScsIGRhdGUuZ2V0TWludXRlcygpICsgJycpO1xuICAgIH1cbiAgfVxuXG4gIHByZVplcm8odmFsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWwgPCAxMCA/ICcwJyArIHZhbCA6IHZhbCArICcnO1xuICB9XG5cbiAgZ2V0SW5pdFZhbHVlSW5kZXgoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IFtdO1xuICAgIHRoaXMuaW5kZXhBcnJheS5tYXAoKGluZGV4LCBpKSA9PiB7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSwgaikgPT4ge1xuICAgICAgICBpdGVtLmZvckVhY2goKGl0ZW0xLCBrKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWVbaW5kZXhdID09PSBpdGVtMSAmJiBpID09PSBqKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogYCR7aX1gLCBjdXJyZW50WTogLWsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVsb2FkUGlja2VyKCk7XG4gIH1cblxuICBjaGVja01vZGUobW9kZSkge1xuICAgIHRoaXMubW9kZVN3aXRjaCA9IFsxLCAxLCAxLCAxLCAxLCAxXTtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICB0aGlzLm1vZGVTd2l0Y2ggPSBbMSwgMSwgMSwgMCwgMCwgMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlMTJIb3Vycykge1xuICAgICAgICAgIHRoaXMubW9kZVN3aXRjaCA9IFswLCAwLCAwLCAxLCAxLCAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vZGVTd2l0Y2ggPSBbMCwgMCwgMCwgMSwgMSwgMF07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlMTJIb3Vycykge1xuICAgICAgICAgIHRoaXMubW9kZVN3aXRjaCA9IFsxLCAxLCAxLCAxLCAxLCAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vZGVTd2l0Y2ggPSBbMSwgMSwgMSwgMSwgMSwgMF07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgdGhpcy5tb2RlU3dpdGNoID0gWzEsIDAsIDAsIDAsIDBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgdGhpcy5tb2RlU3dpdGNoID0gWzEsIDEsIDAsIDAsIDBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wSW5kZXhBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlU3dpdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5tb2RlU3dpdGNoW2ldID4gMCkge1xuICAgICAgICB0ZW1wSW5kZXhBcnJheS5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsb3MgPSB0ZW1wSW5kZXhBcnJheVt0ZW1wSW5kZXhBcnJheS5sZW5ndGggLSAxXSAtIHRlbXBJbmRleEFycmF5WzBdICsgMTtcbiAgICB0aGlzLmluZGV4QXJyYXkgPSB0ZW1wSW5kZXhBcnJheTtcbiAgfVxuXG4gIGluaXRSZXN1bHQoKSB7XG4gICAgdGhpcy5yZXN1bHRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xvczsgaSsrKSB7XG4gICAgICBjb25zdCByZXMgPSB0aGlzLmN1cnJlbnRUaW1lW2ldO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RlID09PSAndGltZScpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRBcnIgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXN1bHRBcnIucHVzaChyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrVGltZSgpIHtcbiAgICBjb25zdCBtaW5fRGF0ZSA9IHRoaXMudHJhbnNmb3JtRGF0ZUZvcm1hdCh0aGlzLm9wdGlvbnMubWluRGF0ZSkuc3BsaXQoJy0nKTtcbiAgICBpZiAobWluX0RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5taW5fZGF0ZSA9IG1pbl9EYXRlLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1heF9EYXRlID0gdGhpcy50cmFuc2Zvcm1EYXRlRm9ybWF0KHRoaXMub3B0aW9ucy5tYXhEYXRlKS5zcGxpdCgnLScpO1xuICAgIGlmIChtYXhfRGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm1heF9kYXRlID0gbWF4X0RhdGUubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbWluX2RhdGUgPSB0aGlzLm1pbl9kYXRlO1xuICAgIGNvbnN0IG1heF9kYXRlID0gdGhpcy5tYXhfZGF0ZTtcbiAgICBjb25zdCBjdXJyZW50X3RpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgIHRoaXMubG9jYWxNaW5EYXRlID0gW107XG4gICAgaWYgKHRoaXMubG9jYWxNaW5EYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXhBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGUucHVzaChtaW5fZGF0ZVt0aGlzLmluZGV4QXJyYXlbaW5kZXhdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9jYWxNYXhEYXRlID0gW107XG4gICAgaWYgKHRoaXMubG9jYWxNYXhEYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXhBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5sb2NhbE1heERhdGUucHVzaChtYXhfZGF0ZVt0aGlzLmluZGV4QXJyYXlbaW5kZXhdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGV4QXJyYXkubGVuZ3RoID09PSB0aGlzLmxvY2FsTWluRGF0ZS5sZW5ndGggJiYgdGhpcy5sb2NhbE1pbkRhdGUubGVuZ3RoID09PSB0aGlzLmxvY2FsTWF4RGF0ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1pblQgPSBuZXcgRGF0ZShtaW5fZGF0ZVswXSwgbWluX2RhdGVbMV0sIG1pbl9kYXRlWzJdLCBtaW5fZGF0ZVszXSwgbWluX2RhdGVbNF0pLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IG1heFQgPSBuZXcgRGF0ZShtYXhfZGF0ZVswXSwgbWF4X2RhdGVbMV0sIG1heF9kYXRlWzJdLCBtYXhfZGF0ZVszXSwgbWF4X2RhdGVbNF0pLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGN1clQgPSBuZXcgRGF0ZShcbiAgICAgICAgY3VycmVudF90aW1lWzBdLFxuICAgICAgICBjdXJyZW50X3RpbWVbMV0sXG4gICAgICAgIGN1cnJlbnRfdGltZVsyXSxcbiAgICAgICAgY3VycmVudF90aW1lWzNdIHx8IDAsXG4gICAgICAgIGN1cnJlbnRfdGltZVs0XSB8fCAwXG4gICAgICApLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuY3VyVExlc3NUaGFuTWluID0gZmFsc2U7XG4gICAgICB0aGlzLmN1clRNb3JlVGhhbk1heCA9IGZhbHNlO1xuICAgICAgaWYgKGN1clQgPCBtaW5UKSB7XG4gICAgICAgIHRoaXMuY3VyVExlc3NUaGFuTWluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMubWluX2RhdGU7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5sb2NhbGVOZXcuY3VyVExlc3N0aGFuTWluO1xuICAgICAgfVxuICAgICAgaWYgKGN1clQgPiBtYXhUKSB7XG4gICAgICAgIHRoaXMuY3VyVE1vcmVUaGFuTWF4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMubWF4X2RhdGU7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5sb2NhbGVOZXcuY3VyVE1vcmV0aGFuTWF4O1xuICAgICAgfVxuICAgICAgbGV0IF9pbmRleEFycmF5SW5kZXggPSAwO1xuICAgICAgbGV0IHRpbWVNb2RlSW5kZXggPSB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3RpbWUnID8gMyA6IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZVN3aXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5tb2RlU3dpdGNoW2ldID09PSAwKSB7XG4gICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIG1pbl9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICBtYXhfZGF0ZVtpXSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIG1pbl9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgbWF4X2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgbWluX2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgbWF4X2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIG1pbl9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICBtYXhfZGF0ZVtpXSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIG1pbl9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgIG1heF9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBtaW5fZGF0ZVtpXSA9IDA7XG4gICAgICAgICAgICAgIG1heF9kYXRlW2ldID0gMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1pbl9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4XSA+PSAxOTAwXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtYXhfZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPj0gMTkwMFxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XVxuICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtaW5fZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPiAwICYmIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdIDw9IDEyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWF4X2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID4gMCAmJiB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XSA8PSAxMlxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XVxuICAgICAgICAgICAgICAgICAgOiAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWluX2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdID4gMCAmJlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdIDw9IG5ldyBEYXRlKG1pbl9kYXRlWzBdLCBtaW5fZGF0ZVsxXSwgMCkuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWF4X2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID4gMCAmJlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdIDw9IG5ldyBEYXRlKG1heF9kYXRlWzBdLCBtYXhfZGF0ZVsxXSwgMCkuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKG1heF9kYXRlWzBdLCBtYXhfZGF0ZVsxXSwgMCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtaW5fZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdID49IDAgJiYgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdIDw9IDIzXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XVxuICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZTEySG91cnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1heF9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XSA+PSAwICYmIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XSA8PSAxMVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICA6IDExO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWF4X2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdID49IDAgJiYgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdIDw9IDIzXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIDogMjM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWluX2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XSA+PSAwICYmIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XSA8PSA1OVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF1cbiAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtYXhfZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdID49IDAgJiYgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdIDw9IDU5XG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XVxuICAgICAgICAgICAgICAgICAgOiA1OTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9pbmRleEFycmF5SW5kZXgrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtaW5UIDw9IGN1clQgJiYgY3VyVCA8PSBtYXhUO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMubG9jYWxlTmV3LmVycm9yTWVzc2FnZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBqdWRnZVRpbWUoYXJyMTogbnVtYmVyW10sIGFycjI6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGUxO1xuICAgIGxldCBkYXRlMjtcbiAgICBkYXRlMSA9IGFycjEuc2xpY2UoMCwgMykuam9pbignLScpICsgJyAnICsgYXJyMS5zbGljZSgzLCA1KS5qb2luKCc6Jyk7XG4gICAgZGF0ZTIgPSBhcnIyLnNsaWNlKDAsIDMpLmpvaW4oJy0nKSArICcgJyArIGFycjIuc2xpY2UoMywgNSkuam9pbignOicpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlMSkuZ2V0VGltZSgpID4gbmV3IERhdGUoZGF0ZTIpLmdldFRpbWUoKTtcbiAgfVxuXG4gIGp1ZGdlRXF1YWxBcnJheShhcnIxLCBhcnIyLCBsZW5ndGgpIHtcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyMVtpXSAhPSBhcnIyW2ldKSB7XG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9XG5cbiAgaW5pdFJlYWR5KCkge1xuICAgIGxldCByZWFsSWR4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xvczsgaSsrKSB7XG4gICAgICByZWFsSWR4ID0gdGhpcy5pbmRleEFycmF5W2ldO1xuICAgICAgbGV0IG1pbiA9IDA7XG4gICAgICBsZXQgbWF4ID0gMDtcbiAgICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdO1xuICAgICAgc3dpdGNoIChyZWFsSWR4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLmluaXREYXRhKHRlbXBBcnJheSwgdGhpcy5sb2NhbE1pbkRhdGVbaV0sIHRoaXMubG9jYWxNYXhEYXRlW2ldLCB0aGlzLmxvY2FsZU5ldy55ZWFyLCBpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1pbiA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAxKSA/IHRoaXMubG9jYWxNaW5EYXRlW2ldIDogMTtcbiAgICAgICAgICBtYXggPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgMSkgPyB0aGlzLmxvY2FsTWF4RGF0ZVtpXSA6IDEyO1xuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCBtaW4sIG1heCwgdGhpcy5sb2NhbGVOZXcubW9udGgsIGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDIpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IHRoaXMuY3VyVExlc3NUaGFuTWluXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IDE7XG4gICAgICAgICAgbWF4ID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5tYXhfZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDIpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2ldXG4gICAgICAgICAgICA6IG5ldyBEYXRlKHRoaXMuY3VycmVudF90aW1lWzBdLCB0aGlzLmN1cnJlbnRfdGltZVsxXSwgMCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCBtaW4sIG1heCwgdGhpcy5sb2NhbGVOZXcuZGF5LCBpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1pbiA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAzKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtpXVxuICAgICAgICAgICAgOiB0aGlzLmN1clRMZXNzVGhhbk1pblxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtpXVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAzKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtpXVxuICAgICAgICAgICAgOiB0aGlzLmN1clRNb3JlVGhhbk1heFxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtpXVxuICAgICAgICAgICAgOiAyMztcbiAgICAgICAgICB0aGlzLmluaXREYXRhKHRlbXBBcnJheSwgbWluLCBtYXgsIHRoaXMubG9jYWxlTmV3LmhvdXIsIGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDQpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IHRoaXMuY3VyVExlc3NUaGFuTWluXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgICAgbWF4ID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5tYXhfZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDQpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2ldXG4gICAgICAgICAgICA6IHRoaXMuY3VyVE1vcmVUaGFuTWF4XG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2ldXG4gICAgICAgICAgICA6IDU5O1xuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCBtaW4sIG1heCwgdGhpcy5sb2NhbGVOZXcubWludXRlLCBpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1pbiA9IDA7XG4gICAgICAgICAgbWF4ID0gMTtcbiAgICAgICAgICB0aGlzLmluaXREYXRhKHRlbXBBcnJheSwgbWluLCBtYXgsICd1c2UxMkhvdXJzJywgaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdERhdGEodGVtcEFyciwgbWluLCBtYXgsIHN0ciwgaWR4KSB7XG4gICAgY29uc3QgZGF0YVdpdGhTdHIgPSBbXTtcbiAgICBjb25zdCBpbmNyZWFzZVZhbHVlID0gc3RyID09PSB0aGlzLmxvY2FsZU5ldy5taW51dGUgPyB0aGlzLm9wdGlvbnMubWludXRlU3RlcCA6IDE7XG4gICAgZm9yIChtaW47IG1pbiA8IG1heCArIDE7IG1pbiArPSBpbmNyZWFzZVZhbHVlKSB7XG4gICAgICB0ZW1wQXJyLnB1c2gobWluKTtcbiAgICAgIGRhdGFXaXRoU3RyLnB1c2gobWluICsgc3RyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiB0aGlzLmluZGV4QXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuZGF0YVdpdGhTdHIgPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiBpZHggJiYgdGhpcy5kYXRhW2lkeF0udG9TdHJpbmcoKSAhPT0gdGVtcEFyci50b1N0cmluZygpKSB7XG4gICAgICB0aGlzLmRhdGFbaWR4XSA9IHRlbXBBcnI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gaWR4ICYmIHRoaXMuZGF0YVtpZHhdLnRvU3RyaW5nKCkgPT09IHRlbXBBcnIudG9TdHJpbmcoKSkge1xuICAgICAgdGhpcy5kYXRhW2lkeF0gPSB0ZW1wQXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEucHVzaCh0ZW1wQXJyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhbGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbnMubG9jYWxlLmxvY2FsZSA9PT0gJ3poX0NOJykge1xuICAgICAgaWYgKHRoaXMuZGF0YVdpdGhTdHIubGVuZ3RoID4gaWR4ICYmIHRoaXMuZGF0YVdpdGhTdHJbaWR4XS50b1N0cmluZygpICE9PSBkYXRhV2l0aFN0ci50b1N0cmluZygpKSB7XG4gICAgICAgIHRoaXMuZGF0YVdpdGhTdHJbaWR4XSA9IGRhdGFXaXRoU3RyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGFXaXRoU3RyLmxlbmd0aCA+IGlkeCAmJiB0aGlzLmRhdGFXaXRoU3RyW2lkeF0udG9TdHJpbmcoKSA9PT0gZGF0YVdpdGhTdHIudG9TdHJpbmcoKSkge1xuICAgICAgICB0aGlzLmRhdGFXaXRoU3RyW2lkeF0gPSBkYXRhV2l0aFN0cjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVdpdGhTdHIucHVzaChkYXRhV2l0aFN0cik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVdpdGhTdHIgPSB0aGlzLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgb2soKSB7XG4gICAgdGhpcy5vcHRpb25zLm9uT2suZW1pdCh0aGlzLmhhbmRsZVJlc2x1dCgpKTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb25OYW1lKCk7XG4gIH1cblxuICBoYW5kbGVSZXNsdXQoKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ2RhdGV0aW1lJyB8fCB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3RpbWUnKSB7XG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5yZXN1bHRBcnI7XG4gICAgICByZXN1bHQgPSB0ZW1wLnNsaWNlKDAsIDMpLmpvaW4oJy0nKSArICcgJyArIHRlbXAuc2xpY2UoMywgNSkuam9pbignOicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZXN1bHRBcnIubGVuZ3RoIDwgMykge1xuICAgICAgICB0aGlzLnJlc3VsdEFyci5wdXNoKCcxJyk7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdEFyclxuICAgICAgICAuc2xpY2UoMCwgMylcbiAgICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcmVaZXJvKHBhcnNlSW50KHYsIDApKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJy0nKTtcbiAgICB9XG4gICAgdGhpcy5yZXN1bHREYXRlID0gbmV3IERhdGUocmVzdWx0LnJlcGxhY2UoLy0vZywgJy8nKSk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlLmdldFRpbWUoKSA+IHRoaXMucmVzdWx0RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgIGlmICh0aGlzLnJlc3VsdEFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnJlc3VsdEFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdEFyciA9IFsuLi50aGlzLm1pbl9kYXRlXTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5yZXN1bHRBcnI7XG4gICAgICAgICAgdGhpcy5jdXJyZW50X3RpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlc3VsdERhdGUgPSB0aGlzLm9wdGlvbnMubWluRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0RGF0ZTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm9wdGlvbnMub25EaXNtaXNzLmVtaXQoKTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb25OYW1lKCk7XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gJ2FtLXNsaWRlLXVwLWxlYXZlIGFtLXNsaWRlLXVwLWxlYXZlLWFjdGl2ZSc7XG4gICAgdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSAnYW0tZmFkZS1sZWF2ZSBhbS1mYWRlLWxlYXZlLWFjdGl2ZSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuaGlkZVBpY2tlcigpO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICBzZXRDdXJyZW50U2VsZWN0ZWQoY2hlY2tJZHgsIHN0YSwgaW5kZXhUKSB7XG4gICAgaWYgKGNoZWNrSWR4ID49IHRoaXMuY2xvcyAtIDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHN0YXR1cyA9IG51bGw7XG4gICAgaWYgKHN0YSkge1xuICAgICAgc3RhdHVzID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5yZXN1bHRBcnIsIHRoaXMub3B0aW9ucy5tb2RlID09PSAndGltZScgPyBjaGVja0lkeCArIDQgOiBjaGVja0lkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLnJlc3VsdEFyciwgdGhpcy5vcHRpb25zLm1vZGUgPT09ICd0aW1lJyA/IGNoZWNrSWR4ICsgNCA6IGNoZWNrSWR4ICsgMSk7XG4gICAgfVxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBsZXQgbWluID0gMDtcbiAgICAgIGxldCBtYXggPSAwO1xuICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgY29uc3QgcmVhbElkeCA9IHRoaXMuaW5kZXhBcnJheVtjaGVja0lkeF07XG4gICAgICBzd2l0Y2ggKHJlYWxJZHgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIG1pbiA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAxKSA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV0gOiAxO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAxKSA/IHRoaXMubG9jYWxNYXhEYXRlW2NoZWNrSWR4ICsgMV0gOiAxMjtcbiAgICAgICAgICBzdHIgPSAn5pyIJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1pbiA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAyKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IHRoaXMuY3VyVExlc3NUaGFuTWluXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogMTtcbiAgICAgICAgICBtYXggPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgMilcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRfdGltZVswXSwgdGhpcy5jdXJyZW50X3RpbWVbMV0sIDApLmdldERhdGUoKTtcbiAgICAgICAgICBzdHIgPSAn5pelJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1pbiA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAzKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IHRoaXMuY3VyVExlc3NUaGFuTWluXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBtYXggPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgMylcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiB0aGlzLmN1clRNb3JlVGhhbk1heFxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IDIzO1xuICAgICAgICAgIHN0ciA9ICfml7YnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDQpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTGVzc1RoYW5NaW5cbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCA0KVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IHRoaXMuY3VyVE1vcmVUaGFuTWF4XG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogNTk7XG4gICAgICAgICAgc3RyID0gJ+WIhic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdFJhbmdlQXJyKG1pbiwgbWF4LCBpbmRleFQsIGNoZWNrSWR4ICsgMSwgc3RyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDdXJyZW50U2VsZWN0ZWQoY2hlY2tJZHggKyAxLCBzdGEsIGluZGV4VCk7XG4gIH1cblxuICBpbml0UmFuZ2VBcnIobWluLCBtYXgsIGluZGV4VCwgY2hlY2tJZHgsIHN0cikge1xuICAgIGNvbnN0IHJlYWxJZHggPSB0aGlzLmluZGV4QXJyYXlbY2hlY2tJZHhdO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGxldCB0YXJnZXRMb25nID0gMDtcbiAgICBjb25zdCBpbmNyZWFzZVZhbHVlID0gc3RyID09PSB0aGlzLmxvY2FsZU5ldy5taW51dGUgPyB0aGlzLm9wdGlvbnMubWludXRlU3RlcCA6IDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IG1pbjsgaW5kZXggPCBtYXggKyAxOyBpbmRleCArPSBpbmNyZWFzZVZhbHVlKSB7XG4gICAgICBhcnIucHVzaChpbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKGFyci5pbmRleE9mKHRoaXMucmVzdWx0QXJyW3JlYWxJZHhdKSA9PSAtMSkge1xuICAgICAgaWYgKC10aGlzLnNlbGVjdGVkVGFyZ2V0W2NoZWNrSWR4XS5jdXJyZW50WSA+IG1heCAtIG1pbikge1xuICAgICAgICBpbmRleFQgPSBtYXggLSBtaW47XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXRbY2hlY2tJZHhdLmN1cnJlbnRZID0gLWluZGV4VDtcbiAgICAgIH1cbiAgICAgIHRhcmdldExvbmcgPSAtYXJyLmxlbmd0aCAqIHRoaXMubGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0TG9uZyA9IC1hcnIuaW5kZXhPZih0aGlzLnJlc3VsdEFycltyZWFsSWR4XSkgKiB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0W2NoZWNrSWR4XS5jdXJyZW50WSA9IC1hcnIuaW5kZXhPZih0aGlzLnJlc3VsdEFycltyZWFsSWR4XSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFbY2hlY2tJZHhdLnRvU3RyaW5nKCkgIT09IGFyci50b1N0cmluZygpKSB7XG4gICAgICBpZiAoY2hlY2tJZHggPj0gMykge1xuICAgICAgICB0aGlzLmN1cnJlbnRfdGltZVtyZWFsSWR4XSA9IC10YXJnZXRMb25nIC8gdGhpcy5saW5lSGVpZ2h0O1xuICAgICAgICB0aGlzLnJlc3VsdEFycltyZWFsSWR4XSA9IC10YXJnZXRMb25nIC8gdGhpcy5saW5lSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLmN1cnJlbnRfdGltZSwgdGhpcy5taW5fZGF0ZSwgcmVhbElkeCkgPyB0aGlzLm1pbl9kYXRlW3JlYWxJZHhdIDogMTtcbiAgICAgICAgdGhpcy5jdXJyZW50X3RpbWVbcmVhbElkeF0gPSAtdGFyZ2V0TG9uZyAvIHRoaXMubGluZUhlaWdodCArIGRlbHRhO1xuICAgICAgICB0aGlzLnJlc3VsdEFycltyZWFsSWR4XSA9IC10YXJnZXRMb25nIC8gdGhpcy5saW5lSGVpZ2h0ICsgZGVsdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YVtjaGVja0lkeF0gPSBhcnI7XG4gICAgICB0aGlzLmRhdGFXaXRoU3RyW2NoZWNrSWR4XSA9XG4gICAgICAgIHRoaXMub3B0aW9ucy5sb2NhbGUubG9jYWxlID09PSAnemhfQ04nXG4gICAgICAgICAgPyBhcnIubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbSArIHN0cjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBhcnI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPj0gY2hlY2tJZHgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpY2tlci5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uY3VycmVudFksIDApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7aW5kZXggKiB0aGlzLmxpbmVIZWlnaHR9cHgpYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRUYXJnZXQoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScgfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdtb3VzZXVwJyB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnXG4gICAgKSB7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrTW9kZSh0aGlzLm9wdGlvbnMubW9kZSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyYW5zZm9ybURhdGVGb3JtYXQodGhpcy5vcHRpb25zLnZhbHVlKS5zcGxpdCgnLScpO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRfdGltZSA9IHRoaXMuY3VycmVudFRpbWUgPSB2YWx1ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAwKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50X3RpbWU7XG4gICAgfVxuICAgIHRoaXMubG9jYWxlUHJvdmlkZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbG9hZFBpY2tlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==