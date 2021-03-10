import { Component, ElementRef, ViewEncapsulation, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { DatePickerOptions } from './date-picker-options.provider';
import { ToastService } from '../toast/toast.service';
import * as velocity from '../core/util/velocity';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker-options.provider';
import * as ɵngcc2 from '../toast/toast.service';
import * as ɵngcc3 from '../locale-provider/locale-provider.service';
import * as ɵngcc4 from '@angular/common';

const _c0 = ["picker"];
function DatePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("click", function DatePickerComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.cancel(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("am-picker-popup-mask ", ctx_r0.maskTransitionName, "");
} }
function DatePickerComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", val_r8.label ? val_r8.label : val_r8, " ");
} }
function DatePickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "div", 13);
    ɵngcc0.ɵɵelement(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "div", 15);
    ɵngcc0.ɵɵtemplate(4, DatePickerComponent_div_14_div_4_Template, 2, 2, "div", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r6);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", item_r5);
} }
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
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DatePickerOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ToastService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.LocaleProviderService)); };
DatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatePickerComponent, selectors: [["DatePicker"], ["nzm-date-picker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.picker = _t.first);
    } }, hostBindings: function DatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function DatePickerComponent_mousedown_HostBindingHandler($event) { return ctx.panstart($event); })("touchstart", function DatePickerComponent_touchstart_HostBindingHandler($event) { return ctx.panstart($event); })("mousemove", function DatePickerComponent_mousemove_HostBindingHandler($event) { return ctx.panmove($event); })("touchmove", function DatePickerComponent_touchmove_HostBindingHandler($event) { return ctx.panmove($event); })("mouseleave", function DatePickerComponent_mouseleave_HostBindingHandler($event) { return ctx.panend($event); })("mouseup", function DatePickerComponent_mouseup_HostBindingHandler($event) { return ctx.panend($event); })("touchend", function DatePickerComponent_touchend_HostBindingHandler($event) { return ctx.panend($event); });
    } }, decls: 15, vars: 8, consts: [[3, "class", "click", 4, "ngIf"], [2, "z-index", "1000"], [1, "am-picker-popup-content"], [1, "am-picker-popup-body"], [1, "am-picker-popup-header"], [1, "am-picker-popup-item", "am-picker-popup-header-left", 3, "click"], [1, "am-picker-popup-item", "am-picker-popup-title"], [1, "am-picker-popup-item", "am-picker-popup-header-right", 3, "click"], [1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [3, "click"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DatePickerComponent_div_0_Template, 1, 3, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵlistener("click", function DatePickerComponent_Template_div_click_6_listener() { return ctx.cancel(); });
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵlistener("click", function DatePickerComponent_Template_div_click_10_listener() { return ctx.ok(); });
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 8, 9);
        ɵngcc0.ɵɵtemplate(14, DatePickerComponent_div_14_Template, 5, 2, "div", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.mask);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("am-picker-popup ", ctx.transitionName, "");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.options.dismissText, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.options.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.options.okText, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dataWithStr);
    } }, directives: [ɵngcc4.NgIf, ɵngcc4.NgForOf], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'DatePicker, nzm-date-picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup {{ transitionName }}\" style=\"z-index: 1000\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">\n            {{ options.okText }}\n          </div>\n        </div>\n        <div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n          <div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\"></div>\n            <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n            <div class=\"am-picker-col-content\">\n              <div id=\"{{ i }}\" class=\"am-picker-col-item\" *ngFor=\"let val of item; let i = index\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DatePickerOptions }, { type: ɵngcc2.ToastService }, { type: ɵngcc3.LocaleProviderService }]; }, { panstart: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }, {
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], panmove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }, {
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], panend: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['touchend', ['$event']]
        }], picker: [{
            type: ViewChild,
            args: ['picker', { read: ViewContainerRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFNBQVMsRUFDVCxnQkFBZ0IsRUFHakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sS0FBSyxRQUFRLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxELE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQXlLakMsWUFDUyxVQUFzQixFQUN0QixPQUEwQixFQUMxQixLQUFtQixFQUNuQixxQkFBNEM7QUFDcEQsUUFKUSxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7QUFBQyxRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFjO0FBQUMsUUFDcEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtBQUN2RCxRQTdLRSxtQkFBYyxHQUFXLDRDQUE0QyxDQUFDO0FBQ3hFLFFBQUUsdUJBQWtCLEdBQVcsb0NBQW9DLENBQUM7QUFDcEUsUUFBRSxlQUFVLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FB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QUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQVEsTUFBTTtBQUNkLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLGdCQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDckMsb0JBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsaUJBQVM7QUFBQyxxQkFBSztBQUNmLG9CQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGlCQUFTO0FBQ1QsZ0JBQVEsTUFBTTtBQUNkLFlBQU0sS0FBSyxVQUFVO0FBQ3JCLGdCQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDckMsb0JBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsaUJBQVM7QUFBQyxxQkFBSztBQUNmLG9CQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGlCQUFTO0FBQ1QsZ0JBQVEsTUFBTTtBQUNkLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLGdCQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsZ0JBQVEsTUFBTTtBQUNkLFlBQU0sS0FBSyxPQUFPO0FBQ2xCLGdCQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsZ0JBQVEsTUFBTTtBQUNkLFlBQU07QUFDTixnQkFBUSxNQUFNO0FBQ2QsU0FBSztBQUNMLFFBQUksTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzlCLFFBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JELFlBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNsQyxnQkFBUSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEYsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztBQUNyQyxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVU7QUFDWixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLFFBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsWUFBTSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7QUFDeEMsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzFDLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTO0FBQ1gsUUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0UsUUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFDLGdCQUFRLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUNMLFFBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9FLFFBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUM3QixZQUFNLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQyxnQkFBUSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakMsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxRQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsUUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ25DLFFBQUksTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUMxQyxRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFFBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDeEMsWUFBTSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDbkUsZ0JBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3hDLFlBQU0sS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ25FLGdCQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtBQUN0SCxZQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2RyxZQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2RyxZQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUNuQixZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ2YsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNyQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLFlBQU0sSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDbkMsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNuQyxZQUFNLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtBQUN2QixnQkFBUSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUNwQyxnQkFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekMsZ0JBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztBQUMzRCxhQUFPO0FBQ1AsWUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDdkIsZ0JBQVEsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDcEMsZ0JBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pDLGdCQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7QUFDM0QsYUFBTztBQUNQLFlBQU0sSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsWUFBTSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFlBQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELGdCQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdEMsb0JBQVUsUUFBUSxDQUFDLEVBQUU7QUFDckIsd0JBQVksS0FBSyxDQUFDO0FBQ2xCLDRCQUFjLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JELDRCQUFjLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JELDRCQUFjLE1BQU07QUFDcEIsd0JBQVksS0FBSyxDQUFDO0FBQ2xCLDRCQUFjLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RCw0QkFBYyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEQsNEJBQWMsTUFBTTtBQUNwQix3QkFBWSxLQUFLLENBQUM7QUFDbEIsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDakQsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDakQsNEJBQWMsTUFBTTtBQUNwQix3QkFBWSxLQUFLLENBQUM7QUFDbEIsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEQsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEQsNEJBQWMsTUFBTTtBQUNwQix3QkFBWSxLQUFLLENBQUM7QUFDbEIsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDcEQsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDcEQsNEJBQWMsTUFBTTtBQUNwQix3QkFBWSxLQUFLLENBQUM7QUFDbEIsNEJBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5Qiw0QkFBYyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLDRCQUFjLE1BQU07QUFDcEIscUJBQVc7QUFDWCxpQkFBUztBQUFDLHFCQUFLO0FBQ2Ysb0JBQVUsUUFBUSxDQUFDLEVBQUU7QUFDckIsd0JBQVksS0FBSyxDQUFDO0FBQ2xCLDRCQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSTtBQUMzRCxvQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDdkQsb0NBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdDLDRCQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSTtBQUMzRCxvQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDdkQsb0NBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCw0QkFBYyxNQUFNO0FBQ3BCLHdCQUFZLEtBQUssQ0FBQztBQUNsQiw0QkFBYyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMvRCxnQ0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtBQUNwRyxvQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDdkQsb0NBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsNEJBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDL0QsZ0NBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7QUFDcEcsb0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELG9DQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3ZCLDRCQUFjLE1BQU07QUFDcEIsd0JBQVksS0FBSyxDQUFDO0FBQ2xCLDRCQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUN2RCxvQ0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQ3RHLG9DQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUN2RCxvQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Qiw0QkFBYyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMvRCxnQ0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7QUFDdkQsb0NBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtBQUN0RyxvQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDdkQsb0NBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3BFLDRCQUFjLE1BQU07QUFDcEIsd0JBQVksS0FBSyxDQUFDO0FBQ2xCLDRCQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDckksb0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztBQUN2RSxvQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Qiw0QkFBYyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQzNDLGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNqRSxvQ0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFO0FBQ3ZJLHdDQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDekUsd0NBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDekIsNkJBQWU7QUFBQyxpQ0FBSztBQUNyQixnQ0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDakUsb0NBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRTtBQUN2SSx3Q0FBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO0FBQ3pFLHdDQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3pCLDZCQUFlO0FBQ2YsNEJBQWMsTUFBTTtBQUNwQix3QkFBWSxLQUFLLENBQUM7QUFDbEIsNEJBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDL0QsZ0NBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRTtBQUNySSxvQ0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO0FBQ3ZFLG9DQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLDRCQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdDQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDckksb0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztBQUN2RSxvQ0FBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN2Qiw0QkFBYyxNQUFNO0FBQ3BCLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxnQkFBUSxnQkFBZ0IsRUFBRSxDQUFDO0FBQzNCLGFBQU87QUFDUCxZQUFNLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDO0FBQzFDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQ3RELFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUyxDQUFDLElBQWMsRUFBRSxJQUFjO0FBQUksUUFDMUMsSUFBSSxLQUFLLENBQUM7QUFDZCxRQUFJLElBQUksS0FBSyxDQUFDO0FBQ2QsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUUsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUUsUUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2pFLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTTtBQUNwQyxRQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixRQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsWUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDOUIsZ0JBQVEsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN2QixhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTO0FBQ1gsUUFBSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4QyxZQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLFlBQU0sTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFlBQU0sUUFBUSxPQUFPLEVBQUU7QUFDdkIsZ0JBQVEsS0FBSyxDQUFDO0FBQ2Qsb0JBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZHLG9CQUFVLE1BQU07QUFDaEIsZ0JBQVEsS0FBSyxDQUFDO0FBQ2Qsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckcsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDdEcsb0JBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RSxvQkFBVSxNQUFNO0FBQ2hCLGdCQUFRLEtBQUssQ0FBQztBQUNkLG9CQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDekUsd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZTtBQUNsQyw0QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDbEMsNEJBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsQyx3QkFBWSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hGLG9CQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEUsb0JBQVUsTUFBTTtBQUNoQixnQkFBUSxLQUFLLENBQUM7QUFDZCxvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsQyx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7QUFDbEMsNEJBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLDRCQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN6RSx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDbEMsd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO0FBQ2xDLDRCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsQyw0QkFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pCLG9CQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsb0JBQVUsTUFBTTtBQUNoQixnQkFBUSxLQUFLLENBQUM7QUFDZCxvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsQyx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7QUFDbEMsNEJBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLDRCQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN6RSx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDbEMsd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO0FBQ2xDLDRCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsQyw0QkFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pCLG9CQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsb0JBQVUsTUFBTTtBQUNoQixnQkFBUSxLQUFLLENBQUM7QUFDZCxvQkFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLG9CQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbEIsb0JBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsb0JBQVUsTUFBTTtBQUNoQixhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0FBQ3RDLFFBQUksTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFFBQUksTUFBTSxhQUFhLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLFFBQUksS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLGFBQWEsRUFBRTtBQUNuRCxZQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsWUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQ25ELFlBQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDckIsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUM1QixTQUFLO0FBQ0wsUUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtBQUNwRixZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQy9CLFNBQUs7QUFBQyxhQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO0FBQzNGLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDL0IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxRQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7QUFDckYsWUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtBQUN4RyxnQkFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUM1QyxhQUFPO0FBQUMsaUJBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDL0csZ0JBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDNUMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsYUFBTztBQUNQLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbkMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsRUFBRTtBQUNKLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFFBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZO0FBQ2QsUUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDcEIsUUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7QUFDMUUsWUFBTSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFlBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdFLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNyQyxnQkFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxhQUFPO0FBQ1AsWUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7QUFDN0IsaUJBQVMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsaUJBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2pCLGdCQUFVLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsWUFBUSxDQUFDLENBQUM7QUFDVixpQkFBUyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFELFFBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ3BFLFlBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDckMsZ0JBQVEsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ3BFLG9CQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxvQkFBVSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDNUMsb0JBQVUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQy9DLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM3QyxTQUFLO0FBQ0wsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxNQUFNO0FBQ1IsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCO0FBQ25CLFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyw0Q0FBNEMsQ0FBQztBQUN2RSxRQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQ0FBb0MsQ0FBQztBQUNuRSxRQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osSUFBRSxDQUFDO0FBQ0gsSUFDRSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU07QUFDMUMsUUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtBQUNuQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDdEIsUUFBSSxJQUFJLEdBQUcsRUFBRTtBQUNiLFlBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ILFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0gsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNqQixZQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsQixZQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsQixZQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNuQixZQUFNLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsWUFBTSxRQUFRLE9BQU8sRUFBRTtBQUN2QixnQkFBUSxLQUFLLENBQUM7QUFDZCxvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEgsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pILG9CQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEIsb0JBQVUsTUFBTTtBQUNoQixnQkFBUSxLQUFLLENBQUM7QUFDZCxvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDN0Msd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO0FBQ2xDLDRCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDN0MsNEJBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixvQkFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDN0Msd0JBQVksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoRixvQkFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLG9CQUFVLE1BQU07QUFDaEIsZ0JBQVEsS0FBSyxDQUFDO0FBQ2Qsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN6RSx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZTtBQUNsQyw0QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLDRCQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsb0JBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN6RSx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLHdCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZTtBQUNsQyw0QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLDRCQUFZLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakIsb0JBQVUsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwQixvQkFBVSxNQUFNO0FBQ2hCLGdCQUFRLEtBQUssQ0FBQztBQUNkLG9CQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDekUsd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUM3Qyx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7QUFDbEMsNEJBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUM3Qyw0QkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLG9CQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDekUsd0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUM3Qyx3QkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7QUFDbEMsNEJBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUM3Qyw0QkFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pCLG9CQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEIsb0JBQVUsTUFBTTtBQUNoQixhQUFPO0FBQ1AsWUFDTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELElBQUUsQ0FBQztBQUNILElBQ0UsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHO0FBQzlDLFFBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxRQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFJLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN2QixRQUFJLE1BQU0sYUFBYSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RixRQUNJLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxhQUFhLEVBQUU7QUFDbkUsWUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RCLFNBQUs7QUFDTCxRQUNJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDcEQsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUMvRCxnQkFBUSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMzQixnQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN6RCxhQUFPO0FBQ1AsWUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDakQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0UsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLFNBQUs7QUFDTCxRQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDM0QsWUFBTSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDekIsZ0JBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ25FLGdCQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoRSxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ILGdCQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDM0UsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN4RSxhQUFPO0FBQ1AsWUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNoQyxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQ2hDLGdCQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPO0FBQzlDLG9CQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzNCLHdCQUFjLE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNoQyxvQkFBWSxDQUFDLENBQUM7QUFDZCxvQkFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ2hCLFlBQU0sVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN0QixnQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxvQkFBVSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7QUFDN0Isd0JBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdFLHdCQUFZLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELHdCQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQztBQUNwSCxxQkFBVztBQUNYLGdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsWUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDWixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxjQUFjLENBQUMsS0FBSztBQUN0QixRQUFJLElBQ0UsS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO0FBQ2hDLFlBQU0sS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO0FBQ2hDLFlBQU0sS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTO0FBQzlCLFlBQU0sS0FBSyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQzNCO0FBQ04sWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BFLGdCQUFRLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxhQUFPO0FBQ1AsWUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsUUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUUsUUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDOUQsZ0JBQVEsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQzNDLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFDakIsUUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSDsrQ0EvdkJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsNkJBQTZCLGtCQUN2Qzs7Ozs7Ozs7bUJBQTJDLGtCQUMzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0VBQ0k7QUFBQztBQUE2QyxZQXJCakQsVUFBVTtBQUNWLFlBVU8saUJBQWlCO0FBQUksWUFDckIsWUFBWTtBQUFJLFlBRmhCLHFCQUFxQjtBQUFHO0FBQUc7QUFBdUMscUJBcUR4RSxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO0FBQzVDLHVCQUVGLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDcEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNuQyxzQkF1QkYsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2xDLHFCQVdGLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDckMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNsQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9kYXRlLXBpY2tlci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdmVsb2NpdHkgZnJvbSAnLi4vY29yZS91dGlsL3ZlbG9jaXR5JztcbmV4cG9ydCB0eXBlIERhdGVNb2RlID0gJ2RhdGUnIHwgJ3RpbWUnIHwgJ2RhdGV0aW1lJyB8ICd5ZWFyJyB8ICdtb250aCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0RhdGVQaWNrZXIsIG56bS1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgdHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1zbGlkZS11cC1lbnRlciBhbS1zbGlkZS11cC1lbnRlci1hY3RpdmUnO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1mYWRlLWVudGVyIGFtLWZhZGUtZW50ZXItYWN0aXZlJztcbiAgbW9kZVN3aXRjaDogbnVtYmVyW10gPSBbMSwgMSwgMSwgMSwgMSwgMV07XG4gIGxvY2FsTWluRGF0ZTogYW55W10gPSBbXTtcbiAgbG9jYWxNYXhEYXRlOiBhbnlbXSA9IFtdO1xuICBjdXJyZW50VGltZTogYW55W10gPSBbXTtcbiAgaW5kZXhBcnJheTogYW55ID0gW107XG4gIG1pbl9kYXRlOiBudW1iZXJbXSA9IFtdO1xuICBtYXhfZGF0ZTogbnVtYmVyW10gPSBbXTtcbiAgY3VycmVudF90aW1lOiBhbnlbXSA9IFtcbiAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSxcbiAgICBuZXcgRGF0ZSgpLmdldERhdGUoKSxcbiAgICBuZXcgRGF0ZSgpLmdldEhvdXJzKCksXG4gICAgbmV3IERhdGUoKS5nZXRNaW51dGVzKClcbiAgXTtcbiAgY2xvczogbnVtYmVyID0gMDtcbiAgcmVzdWx0QXJyOiBhbnkgPSBbXTtcbiAgcmVzdWx0RGF0ZTogRGF0ZTtcbiAgZGF0YTogYW55W10gPSBbXTtcbiAgZGF0YVdpdGhTdHI6IGFueVtdID0gW107XG4gIHN0YXJ0WTogbnVtYmVyID0gMDtcbiAgZGlmZmVyWTogbnVtYmVyID0gMDtcbiAgY3VycmVudFk6IG51bWJlciA9IDA7XG4gIGxlbjogbnVtYmVyID0gMDtcbiAgZG9tOiBhbnkgPSBudWxsO1xuICBpbmRleDogbnVtYmVyID0gMDtcbiAgbWF4WTogbnVtYmVyID0gMDtcbiAgbGluZUhlaWdodDogbnVtYmVyID0gMzQ7XG4gIHNlbGVjdGVkVGFyZ2V0OiBhbnlbXSA9IFtdO1xuICBpc01vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJyZW50UGlja2VyOiBhbnk7XG4gIGxvY2FsZU5ldzogYW55ID0ge307XG4gIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIFZlbG9jaXR5ID0gdmVsb2NpdHkuZ2V0VmVsb2NpdHkoKTtcbiAgZXJyb3JNZXNzYWdlID0gJyc7XG4gIGN1clRMZXNzVGhhbk1pbiA9IGZhbHNlO1xuICBjdXJUTW9yZVRoYW5NYXggPSBmYWxzZTtcbiAgbmdNb2RlbE9uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHt9O1xuICBuZ01vZGVsT25Ub3VjaGVkOiAoKSA9PiB7fTtcblxuICBAVmlld0NoaWxkKCdwaWNrZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcGlja2VyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICBwYW5zdGFydChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRvbSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdO1xuICAgIHRoaXMubGVuID0gdGhpcy5kb20uY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHRoaXMubWF4WSA9IC0odGhpcy5sZW4gLSAxKTtcblxuICAgIGlmICh0aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPT09ICd0cmFuc2xhdGVZKDBweCknKSB7XG4gICAgICB0aGlzLmN1cnJlbnRZID0gMDtcbiAgICAgIHRoaXMubWF4WSA9IC0odGhpcy5sZW4gLSAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRUYXJnZXQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS50YXJnZXRJZCA9PT0gZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50WSA9IGl0ZW0uY3VycmVudFk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBldiA9IHRoaXMuZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgIHRoaXMuc3RhcnRZID0gZXYuY2xpZW50WTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKVxuICBwYW5tb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbS1waWNrZXItY29sLW1hc2snKSB8fCAhdGhpcy5pc01vdXNlRG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGV2ID0gdGhpcy5nZXRFdmVudFRhcmdldChldmVudCk7XG4gICAgdGhpcy5kaWZmZXJZID0gZXYuY2xpZW50WSAtIHRoaXMuc3RhcnRZO1xuICAgIHRoaXMuVmVsb2NpdHkucmVjb3JkKHRoaXMuZGlmZmVyWSk7XG4gICAgdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMHMnO1xuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dGhpcy5jdXJyZW50WSAqIHRoaXMubGluZUhlaWdodCArIHRoaXMuZGlmZmVyWX1weClgO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICBwYW5lbmQoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FtLXBpY2tlci1jb2wtbWFzaycpIHx8ICF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGV2ID0gdGhpcy5nZXRFdmVudFRhcmdldChldmVudCk7XG4gICAgdGhpcy5kaWZmZXJZID0gZXYuY2xpZW50WSAtIHRoaXMuc3RhcnRZO1xuICAgIGxldCB0aW1lID0gMC4zO1xuICAgIGNvbnN0IHZlbG9jaXR5VGVtcCA9IHRoaXMuVmVsb2NpdHkuZ2V0VmVsb2NpdHkodGhpcy5kaWZmZXJZKSAqIDQ7XG4gICAgaWYgKHZlbG9jaXR5VGVtcCkge1xuICAgICAgdGhpcy5kaWZmZXJZID0gdmVsb2NpdHlUZW1wICogNDAgKyB0aGlzLmRpZmZlclk7XG4gICAgICB0aW1lID0gTWF0aC5hYnModmVsb2NpdHlUZW1wKSAqIDAuMTtcbiAgICB9XG4gICAgdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArICh0aW1lIDwgMC4zID8gMC4zIDogdGltZSkgKyAncyc7XG4gICAgaWYgKHRoaXMuZGlmZmVyWSA8PSAtdGhpcy5saW5lSGVpZ2h0IC8gMikge1xuICAgICAgdGhpcy5jdXJyZW50WSArPSBNYXRoLmZsb29yKHRoaXMuZGlmZmVyWSAvIHRoaXMubGluZUhlaWdodCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50WSA8PSB0aGlzLm1heFkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHRoaXMubWF4WTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlmZmVyWSA+PSB0aGlzLmxpbmVIZWlnaHQgLyAyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRZICs9IE1hdGguZmxvb3IodGhpcy5kaWZmZXJZIC8gdGhpcy5saW5lSGVpZ2h0KTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRZID49IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYXJnZXQubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGhhc0tleSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS50YXJnZXRJZCA9PT0gZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgaGFzS2V5ID0gdHJ1ZTtcbiAgICAgICAgICBpdGVtLnRhcmdldElkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICAgIGl0ZW0uY3VycmVudFkgPSB0aGlzLmN1cnJlbnRZO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBldmVudC50YXJnZXQuaWQsIGN1cnJlbnRZOiB0aGlzLmN1cnJlbnRZIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogZXZlbnQudGFyZ2V0LmlkLCBjdXJyZW50WTogdGhpcy5jdXJyZW50WSB9KTtcbiAgICB9XG4gICAgdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0aGlzLmN1cnJlbnRZICogdGhpcy5saW5lSGVpZ2h0fXB4KWA7XG4gICAgdGhpcy5pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5jdXJyZW50WSAvIDEpKTsgLy8g6K6w5b2V5b2T5YmN5L2N56e75Zyo5pWw57uE5Lit55qE57Si5byVLOW/hemhu+WPluaVtO+8jOWQpuWImeS8muWHuueOsOa1rueCueaVsFxuICAgIHRoaXMuY3VycmVudF90aW1lW3RoaXMuaW5kZXhBcnJheVtwYXJzZUludChldmVudC50YXJnZXQuaWQsIDApXV0gPSB0aGlzLnJlc3VsdEFycltcbiAgICAgIHRoaXMuaW5kZXhBcnJheVtwYXJzZUludChldmVudC50YXJnZXQuaWQsIDApXVxuICAgIF0gPSB0aGlzLmRhdGFbcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAwKV1bdGhpcy5pbmRleF07XG4gICAgaWYgKHRoaXMuanVkZ2VUaW1lKHRoaXMuY3VycmVudF90aW1lLCB0aGlzLm1heF9kYXRlKSkge1xuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMuY3VycmVudF90aW1lID1cbiAgICAgICAgdGhpcy5tYXhfZGF0ZS5zbGljZSgwLCB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3RpbWUnID8gdGhpcy5tb2RlU3dpdGNoLmxlbmd0aCA6IHRoaXMuaW5kZXhBcnJheS5sZW5ndGgpO1xuICAgICAgdGhpcy5yZXN1bHRBcnIgPSB0aGlzLmN1cnJlbnRfdGltZTtcbiAgICAgIHRoaXMub3B0aW9ucy5vblZhbHVlQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmhhbmRsZVJlc2x1dCgpLCBpbmRleDogZXZlbnQudGFyZ2V0LmlkIH0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMubmdNb2RlbE9uQ2hhbmdlKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmp1ZGdlVGltZSh0aGlzLm1pbl9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSkpIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRfdGltZSA9XG4gICAgICAgIHRoaXMubWluX2RhdGUuc2xpY2UoMCwgdGhpcy5vcHRpb25zLm1vZGUgPT09ICd0aW1lJyA/IHRoaXMubW9kZVN3aXRjaC5sZW5ndGggOiB0aGlzLmluZGV4QXJyYXkubGVuZ3RoKTtcbiAgICAgIHRoaXMucmVzdWx0QXJyID0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgIHRoaXMub3B0aW9ucy5vblZhbHVlQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmhhbmRsZVJlc2x1dCgpLCBpbmRleDogZXZlbnQudGFyZ2V0LmlkIH0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVOZ01vZGVsKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMubmdNb2RlbE9uQ2hhbmdlKHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudFNlbGVjdGVkKDAsIHRoaXMuZGlmZmVyWSA8IDAsIHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5vcHRpb25zLm9uVmFsdWVDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuaGFuZGxlUmVzbHV0KCksIGluZGV4OiBldmVudC50YXJnZXQuaWQgfSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVwZGF0ZU5nTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZU5nTW9kZWwodGhpcy5oYW5kbGVSZXNsdXQoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5uZ01vZGVsT25DaGFuZ2UodGhpcy5oYW5kbGVSZXNsdXQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIG9wdGlvbnM6IERhdGVQaWNrZXJPcHRpb25zLFxuICAgIHB1YmxpYyB0b2FzdDogVG9hc3RTZXJ2aWNlLFxuICAgIHB1YmxpYyBsb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZVxuICApIHt9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tUaW1lKCkgJiYgdGhpcy5vcHRpb25zLnNob3dFcnJvclRvYXN0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdC5mYWlsKHRoaXMuZXJyb3JNZXNzYWdlLCB0aGlzLm9wdGlvbnMuc2hvd0Vycm9yVG9hc3RJbnRlcnZhbCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgdGhpcy5pbml0UmVzdWx0KCk7XG4gICAgdGhpcy5pbml0UmVhZHkoKTtcbiAgICB0aGlzLmdldEluaXRWYWx1ZUluZGV4KCk7XG4gIH1cblxuICByZWxvYWRQaWNrZXIoKSB7XG4gICAgaWYgKCF0aGlzLnBpY2tlciB8fCB0aGlzLnBpY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFBpY2tlciA9IHRoaXMucGlja2VyLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5jdXJyZW50UGlja2VyICYmIHRoaXMuY3VycmVudFBpY2tlci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjNzJztcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uY3VycmVudFksIDApO1xuICAgICAgICAgIHNlbGYuY3VycmVudFBpY2tlci5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2luZGV4ICogc2VsZi5saW5lSGVpZ2h0fXB4KWA7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbG9jYWxlUHJvdmlkZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYub3B0aW9ucy5sb2NhbGUgfHwgc2VsZi5vcHRpb25zLmxvY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxmLmxvY2FsZVByb3ZpZGVyU2VydmljZS5zZXRMb2NhbGUoc2VsZi5vcHRpb25zLmxvY2FsZSk7XG4gICAgfVxuICAgIHNlbGYubG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbChzZWxmLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHNlbGYub3B0aW9ucy5sb2NhbGUgPSBzZWxmLmxvY2FsZVByb3ZpZGVyU2VydmljZS5nZXRMb2NhbGUoKTtcbiAgICAgIHNlbGYubG9jYWxlTmV3ID0gc2VsZi5sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlU3ViT2JqKCdEYXRlUGlja2VyJyk7XG4gICAgICBzZWxmLm9wdGlvbnMub2tUZXh0ID0gc2VsZi5sb2NhbGVOZXcub2tUZXh0O1xuICAgICAgc2VsZi5vcHRpb25zLmRpc21pc3NUZXh0ID0gc2VsZi5sb2NhbGVOZXcuZGlzbWlzc1RleHQ7XG4gICAgICBzZWxmLmluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyYW5zZm9ybURhdGVGb3JtYXQoZGF0ZTogRGF0ZSk6IGFueSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAneXl5eS1tbS1kZC1ISC1NTSdcbiAgICAgICAgLnJlcGxhY2UoJ3l5eXknLCBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ21tJywgZGF0ZS5nZXRNb250aCgpICsgMSArICcnKVxuICAgICAgICAucmVwbGFjZSgnZGQnLCBkYXRlLmdldERhdGUoKSArICcnKVxuICAgICAgICAucmVwbGFjZSgnSEgnLCBkYXRlLmdldEhvdXJzKCkgKyAnJylcbiAgICAgICAgLnJlcGxhY2UoJ01NJywgZGF0ZS5nZXRNaW51dGVzKCkgKyAnJyk7XG4gICAgfVxuICB9XG5cbiAgcHJlWmVybyh2YWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbCA8IDEwID8gJzAnICsgdmFsIDogdmFsICsgJyc7XG4gIH1cblxuICBnZXRJbml0VmFsdWVJbmRleCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0ID0gW107XG4gICAgdGhpcy5pbmRleEFycmF5Lm1hcCgoaW5kZXgsIGkpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtLCBqKSA9PiB7XG4gICAgICAgIGl0ZW0uZm9yRWFjaCgoaXRlbTEsIGspID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZVtpbmRleF0gPT09IGl0ZW0xICYmIGkgPT09IGopIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBgJHtpfWAsIGN1cnJlbnRZOiAtayB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWxvYWRQaWNrZXIoKTtcbiAgfVxuXG4gIGNoZWNrTW9kZShtb2RlKSB7XG4gICAgdGhpcy5tb2RlU3dpdGNoID0gWzEsIDEsIDEsIDEsIDEsIDFdO1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHRoaXMubW9kZVN3aXRjaCA9IFsxLCAxLCAxLCAwLCAwLCAwXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2UxMkhvdXJzKSB7XG4gICAgICAgICAgdGhpcy5tb2RlU3dpdGNoID0gWzAsIDAsIDAsIDEsIDEsIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubW9kZVN3aXRjaCA9IFswLCAwLCAwLCAxLCAxLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2UxMkhvdXJzKSB7XG4gICAgICAgICAgdGhpcy5tb2RlU3dpdGNoID0gWzEsIDEsIDEsIDEsIDEsIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubW9kZVN3aXRjaCA9IFsxLCAxLCAxLCAxLCAxLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICB0aGlzLm1vZGVTd2l0Y2ggPSBbMSwgMCwgMCwgMCwgMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICB0aGlzLm1vZGVTd2l0Y2ggPSBbMSwgMSwgMCwgMCwgMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHRlbXBJbmRleEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVTd2l0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLm1vZGVTd2l0Y2hbaV0gPiAwKSB7XG4gICAgICAgIHRlbXBJbmRleEFycmF5LnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xvcyA9IHRlbXBJbmRleEFycmF5W3RlbXBJbmRleEFycmF5Lmxlbmd0aCAtIDFdIC0gdGVtcEluZGV4QXJyYXlbMF0gKyAxO1xuICAgIHRoaXMuaW5kZXhBcnJheSA9IHRlbXBJbmRleEFycmF5O1xuICB9XG5cbiAgaW5pdFJlc3VsdCgpIHtcbiAgICB0aGlzLnJlc3VsdEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbG9zOyBpKyspIHtcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY3VycmVudFRpbWVbaV07XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09ICd0aW1lJykge1xuICAgICAgICB0aGlzLnJlc3VsdEFyciA9IHRoaXMuY3VycmVudFRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc3VsdEFyci5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tUaW1lKCkge1xuICAgIGNvbnN0IG1pbl9EYXRlID0gdGhpcy50cmFuc2Zvcm1EYXRlRm9ybWF0KHRoaXMub3B0aW9ucy5taW5EYXRlKS5zcGxpdCgnLScpO1xuICAgIGlmIChtaW5fRGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm1pbl9kYXRlID0gbWluX0RhdGUubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbWF4X0RhdGUgPSB0aGlzLnRyYW5zZm9ybURhdGVGb3JtYXQodGhpcy5vcHRpb25zLm1heERhdGUpLnNwbGl0KCctJyk7XG4gICAgaWYgKG1heF9EYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWF4X2RhdGUgPSBtYXhfRGF0ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBtaW5fZGF0ZSA9IHRoaXMubWluX2RhdGU7XG4gICAgY29uc3QgbWF4X2RhdGUgPSB0aGlzLm1heF9kYXRlO1xuICAgIGNvbnN0IGN1cnJlbnRfdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG4gICAgdGhpcy5sb2NhbE1pbkRhdGUgPSBbXTtcbiAgICBpZiAodGhpcy5sb2NhbE1pbkRhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZS5wdXNoKG1pbl9kYXRlW3RoaXMuaW5kZXhBcnJheVtpbmRleF1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2NhbE1heERhdGUgPSBbXTtcbiAgICBpZiAodGhpcy5sb2NhbE1heERhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZS5wdXNoKG1heF9kYXRlW3RoaXMuaW5kZXhBcnJheVtpbmRleF1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kZXhBcnJheS5sZW5ndGggPT09IHRoaXMubG9jYWxNaW5EYXRlLmxlbmd0aCAmJiB0aGlzLmxvY2FsTWluRGF0ZS5sZW5ndGggPT09IHRoaXMubG9jYWxNYXhEYXRlLmxlbmd0aCkge1xuICAgICAgY29uc3QgbWluVCA9IG5ldyBEYXRlKG1pbl9kYXRlWzBdLCBtaW5fZGF0ZVsxXSwgbWluX2RhdGVbMl0sIG1pbl9kYXRlWzNdLCBtaW5fZGF0ZVs0XSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgbWF4VCA9IG5ldyBEYXRlKG1heF9kYXRlWzBdLCBtYXhfZGF0ZVsxXSwgbWF4X2RhdGVbMl0sIG1heF9kYXRlWzNdLCBtYXhfZGF0ZVs0XSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgY3VyVCA9IG5ldyBEYXRlKFxuICAgICAgICBjdXJyZW50X3RpbWVbMF0sXG4gICAgICAgIGN1cnJlbnRfdGltZVsxXSxcbiAgICAgICAgY3VycmVudF90aW1lWzJdLFxuICAgICAgICBjdXJyZW50X3RpbWVbM10gfHwgMCxcbiAgICAgICAgY3VycmVudF90aW1lWzRdIHx8IDBcbiAgICAgICkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5jdXJUTGVzc1RoYW5NaW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VyVE1vcmVUaGFuTWF4ID0gZmFsc2U7XG4gICAgICBpZiAoY3VyVCA8IG1pblQpIHtcbiAgICAgICAgdGhpcy5jdXJUTGVzc1RoYW5NaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5taW5fZGF0ZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLmxvY2FsZU5ldy5jdXJUTGVzc3RoYW5NaW47XG4gICAgICB9XG4gICAgICBpZiAoY3VyVCA+IG1heFQpIHtcbiAgICAgICAgdGhpcy5jdXJUTW9yZVRoYW5NYXggPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5tYXhfZGF0ZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLmxvY2FsZU5ldy5jdXJUTW9yZXRoYW5NYXg7XG4gICAgICB9XG4gICAgICBsZXQgX2luZGV4QXJyYXlJbmRleCA9IDA7XG4gICAgICBsZXQgdGltZU1vZGVJbmRleCA9IHRoaXMub3B0aW9ucy5tb2RlID09PSAndGltZScgPyAzIDogMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlU3dpdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVTd2l0Y2hbaV0gPT09IDApIHtcbiAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgbWluX2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgIG1heF9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgbWluX2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICBtYXhfZGF0ZVtpXSA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBtaW5fZGF0ZVtpXSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICBtYXhfZGF0ZVtpXSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgbWluX2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgIG1heF9kYXRlW2ldID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgbWluX2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgbWF4X2RhdGVbaV0gPSBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIG1pbl9kYXRlW2ldID0gMDtcbiAgICAgICAgICAgICAgbWF4X2RhdGVbaV0gPSAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWluX2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXhdID49IDE5MDBcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF1cbiAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1heF9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XSA+PSAxOTAwXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1pbl9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4XSA+IDAgJiYgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPD0gMTJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF1cbiAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtYXhfZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPiAwICYmIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdIDw9IDEyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtaW5fZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPiAwICYmXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPD0gbmV3IERhdGUobWluX2RhdGVbMF0sIG1pbl9kYXRlWzFdLCAwKS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF1cbiAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtYXhfZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPiAwICYmXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPD0gbmV3IERhdGUobWF4X2RhdGVbMF0sIG1heF9kYXRlWzFdLCAwKS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF1cbiAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUobWF4X2RhdGVbMF0sIG1heF9kYXRlWzFdLCAwKS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1pbl9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPj0gMCAmJiB0aGlzLmxvY2FsTWluRGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPD0gMjNcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlMTJIb3Vycykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNYXhEYXRlW19pbmRleEFycmF5SW5kZXhdID0gbWF4X2RhdGVbaV0gPVxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdID49IDAgJiYgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdIDw9IDExXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIDogMTE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtYXhfZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPj0gMCAmJiB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPD0gMjNcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgOiAyMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleF0gPSBtaW5fZGF0ZVtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdID49IDAgJiYgdGhpcy5sb2NhbE1pbkRhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdIDw9IDU5XG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW19pbmRleEFycmF5SW5kZXggLSB0aW1lTW9kZUluZGV4XVxuICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4XSA9IG1heF9kYXRlW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPj0gMCAmJiB0aGlzLmxvY2FsTWF4RGF0ZVtfaW5kZXhBcnJheUluZGV4IC0gdGltZU1vZGVJbmRleF0gPD0gNTlcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbX2luZGV4QXJyYXlJbmRleCAtIHRpbWVNb2RlSW5kZXhdXG4gICAgICAgICAgICAgICAgICA6IDU5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2luZGV4QXJyYXlJbmRleCsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1pblQgPD0gY3VyVCAmJiBjdXJUIDw9IG1heFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5sb2NhbGVOZXcuZXJyb3JNZXNzYWdlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGp1ZGdlVGltZShhcnIxOiBudW1iZXJbXSwgYXJyMjogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICBsZXQgZGF0ZTE7XG4gICAgbGV0IGRhdGUyO1xuICAgIGRhdGUxID0gYXJyMS5zbGljZSgwLCAzKS5qb2luKCctJykgKyAnICcgKyBhcnIxLnNsaWNlKDMsIDUpLmpvaW4oJzonKTtcbiAgICBkYXRlMiA9IGFycjIuc2xpY2UoMCwgMykuam9pbignLScpICsgJyAnICsgYXJyMi5zbGljZSgzLCA1KS5qb2luKCc6Jyk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUxKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShkYXRlMikuZ2V0VGltZSgpO1xuICB9XG5cbiAganVkZ2VFcXVhbEFycmF5KGFycjEsIGFycjIsIGxlbmd0aCkge1xuICAgIGxldCBzdGF0dXMgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnIxW2ldICE9IGFycjJbaV0pIHtcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxuICBpbml0UmVhZHkoKSB7XG4gICAgbGV0IHJlYWxJZHggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbG9zOyBpKyspIHtcbiAgICAgIHJlYWxJZHggPSB0aGlzLmluZGV4QXJyYXlbaV07XG4gICAgICBsZXQgbWluID0gMDtcbiAgICAgIGxldCBtYXggPSAwO1xuICAgICAgY29uc3QgdGVtcEFycmF5ID0gW107XG4gICAgICBzd2l0Y2ggKHJlYWxJZHgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCB0aGlzLmxvY2FsTWluRGF0ZVtpXSwgdGhpcy5sb2NhbE1heERhdGVbaV0sIHRoaXMubG9jYWxlTmV3LnllYXIsIGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDEpID8gdGhpcy5sb2NhbE1pbkRhdGVbaV0gOiAxO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAxKSA/IHRoaXMubG9jYWxNYXhEYXRlW2ldIDogMTI7XG4gICAgICAgICAgdGhpcy5pbml0RGF0YSh0ZW1wQXJyYXksIG1pbiwgbWF4LCB0aGlzLmxvY2FsZU5ldy5tb250aCwgaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtaW4gPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1pbl9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgMilcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbaV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTGVzc1RoYW5NaW5cbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbaV1cbiAgICAgICAgICAgIDogMTtcbiAgICAgICAgICBtYXggPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgMilcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbaV1cbiAgICAgICAgICAgIDogbmV3IERhdGUodGhpcy5jdXJyZW50X3RpbWVbMF0sIHRoaXMuY3VycmVudF90aW1lWzFdLCAwKS5nZXREYXRlKCk7XG4gICAgICAgICAgdGhpcy5pbml0RGF0YSh0ZW1wQXJyYXksIG1pbiwgbWF4LCB0aGlzLmxvY2FsZU5ldy5kYXksIGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDMpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IHRoaXMuY3VyVExlc3NUaGFuTWluXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2ldXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgICAgbWF4ID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5tYXhfZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDMpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2ldXG4gICAgICAgICAgICA6IHRoaXMuY3VyVE1vcmVUaGFuTWF4XG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2ldXG4gICAgICAgICAgICA6IDIzO1xuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCBtaW4sIG1heCwgdGhpcy5sb2NhbGVOZXcuaG91ciwgaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtaW4gPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1pbl9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgNClcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbaV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTGVzc1RoYW5NaW5cbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbaV1cbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgICBtYXggPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1heF9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgNClcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbaV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTW9yZVRoYW5NYXhcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbaV1cbiAgICAgICAgICAgIDogNTk7XG4gICAgICAgICAgdGhpcy5pbml0RGF0YSh0ZW1wQXJyYXksIG1pbiwgbWF4LCB0aGlzLmxvY2FsZU5ldy5taW51dGUsIGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWluID0gMDtcbiAgICAgICAgICBtYXggPSAxO1xuICAgICAgICAgIHRoaXMuaW5pdERhdGEodGVtcEFycmF5LCBtaW4sIG1heCwgJ3VzZTEySG91cnMnLCBpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0RGF0YSh0ZW1wQXJyLCBtaW4sIG1heCwgc3RyLCBpZHgpIHtcbiAgICBjb25zdCBkYXRhV2l0aFN0ciA9IFtdO1xuICAgIGNvbnN0IGluY3JlYXNlVmFsdWUgPSBzdHIgPT09IHRoaXMubG9jYWxlTmV3Lm1pbnV0ZSA/IHRoaXMub3B0aW9ucy5taW51dGVTdGVwIDogMTtcbiAgICBmb3IgKG1pbjsgbWluIDwgbWF4ICsgMTsgbWluICs9IGluY3JlYXNlVmFsdWUpIHtcbiAgICAgIHRlbXBBcnIucHVzaChtaW4pO1xuICAgICAgZGF0YVdpdGhTdHIucHVzaChtaW4gKyBzdHIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IHRoaXMuaW5kZXhBcnJheS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5kYXRhV2l0aFN0ciA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IGlkeCAmJiB0aGlzLmRhdGFbaWR4XS50b1N0cmluZygpICE9PSB0ZW1wQXJyLnRvU3RyaW5nKCkpIHtcbiAgICAgIHRoaXMuZGF0YVtpZHhdID0gdGVtcEFycjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiBpZHggJiYgdGhpcy5kYXRhW2lkeF0udG9TdHJpbmcoKSA9PT0gdGVtcEFyci50b1N0cmluZygpKSB7XG4gICAgICB0aGlzLmRhdGFbaWR4XSA9IHRlbXBBcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKHRlbXBBcnIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmxvY2FsZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9ucy5sb2NhbGUubG9jYWxlID09PSAnemhfQ04nKSB7XG4gICAgICBpZiAodGhpcy5kYXRhV2l0aFN0ci5sZW5ndGggPiBpZHggJiYgdGhpcy5kYXRhV2l0aFN0cltpZHhdLnRvU3RyaW5nKCkgIT09IGRhdGFXaXRoU3RyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhpcy5kYXRhV2l0aFN0cltpZHhdID0gZGF0YVdpdGhTdHI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YVdpdGhTdHIubGVuZ3RoID4gaWR4ICYmIHRoaXMuZGF0YVdpdGhTdHJbaWR4XS50b1N0cmluZygpID09PSBkYXRhV2l0aFN0ci50b1N0cmluZygpKSB7XG4gICAgICAgIHRoaXMuZGF0YVdpdGhTdHJbaWR4XSA9IGRhdGFXaXRoU3RyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhV2l0aFN0ci5wdXNoKGRhdGFXaXRoU3RyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhV2l0aFN0ciA9IHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cblxuICBvaygpIHtcbiAgICB0aGlzLm9wdGlvbnMub25Pay5lbWl0KHRoaXMuaGFuZGxlUmVzbHV0KCkpO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgfVxuXG4gIGhhbmRsZVJlc2x1dCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tb2RlID09PSAnZGF0ZXRpbWUnIHx8IHRoaXMub3B0aW9ucy5tb2RlID09PSAndGltZScpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnJlc3VsdEFycjtcbiAgICAgIHJlc3VsdCA9IHRlbXAuc2xpY2UoMCwgMykuam9pbignLScpICsgJyAnICsgdGVtcC5zbGljZSgzLCA1KS5qb2luKCc6Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlc3VsdEFyci5sZW5ndGggPCAzKSB7XG4gICAgICAgIHRoaXMucmVzdWx0QXJyLnB1c2goJzEnKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0QXJyXG4gICAgICAgIC5zbGljZSgwLCAzKVxuICAgICAgICAubWFwKHYgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByZVplcm8ocGFyc2VJbnQodiwgMCkpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLScpO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdERhdGUgPSBuZXcgRGF0ZShyZXN1bHQucmVwbGFjZSgvLS9nLCAnLycpKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUuZ2V0VGltZSgpID4gdGhpcy5yZXN1bHREYXRlLmdldFRpbWUoKSkge1xuICAgICAgaWYgKHRoaXMucmVzdWx0QXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucmVzdWx0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMucmVzdWx0QXJyID0gWy4uLnRoaXMubWluX2RhdGVdO1xuICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnJlc3VsdEFycjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRfdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0RGF0ZSA9IHRoaXMub3B0aW9ucy5taW5EYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXN1bHREYXRlO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMub3B0aW9ucy5vbkRpc21pc3MuZW1pdCgpO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbk5hbWUgPSAnYW0tc2xpZGUtdXAtbGVhdmUgYW0tc2xpZGUtdXAtbGVhdmUtYWN0aXZlJztcbiAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9ICdhbS1mYWRlLWxlYXZlIGFtLWZhZGUtbGVhdmUtYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5oaWRlUGlja2VyKCk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRTZWxlY3RlZChjaGVja0lkeCwgc3RhLCBpbmRleFQpIHtcbiAgICBpZiAoY2hlY2tJZHggPj0gdGhpcy5jbG9zIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc3RhdHVzID0gbnVsbDtcbiAgICBpZiAoc3RhKSB7XG4gICAgICBzdGF0dXMgPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1pbl9kYXRlLCB0aGlzLnJlc3VsdEFyciwgdGhpcy5vcHRpb25zLm1vZGUgPT09ICd0aW1lJyA/IGNoZWNrSWR4ICsgNCA6IGNoZWNrSWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cyA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMucmVzdWx0QXJyLCB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3RpbWUnID8gY2hlY2tJZHggKyA0IDogY2hlY2tJZHggKyAxKTtcbiAgICB9XG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIGxldCBtaW4gPSAwO1xuICAgICAgbGV0IG1heCA9IDA7XG4gICAgICBsZXQgc3RyID0gJyc7XG4gICAgICBjb25zdCByZWFsSWR4ID0gdGhpcy5pbmRleEFycmF5W2NoZWNrSWR4XTtcbiAgICAgIHN3aXRjaCAocmVhbElkeCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDEpID8gdGhpcy5sb2NhbE1pbkRhdGVbY2hlY2tJZHggKyAxXSA6IDE7XG4gICAgICAgICAgbWF4ID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5tYXhfZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDEpID8gdGhpcy5sb2NhbE1heERhdGVbY2hlY2tJZHggKyAxXSA6IDEyO1xuICAgICAgICAgIHN0ciA9ICfmnIgnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDIpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTGVzc1RoYW5NaW5cbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiAxO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAyKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IG5ldyBEYXRlKHRoaXMuY3VycmVudF90aW1lWzBdLCB0aGlzLmN1cnJlbnRfdGltZVsxXSwgMCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgIHN0ciA9ICfml6UnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWluID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDMpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNaW5EYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTGVzc1RoYW5NaW5cbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICAgIG1heCA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMubWF4X2RhdGUsIHRoaXMuY3VycmVudF90aW1lLCAzKVxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWF4RGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IHRoaXMuY3VyVE1vcmVUaGFuTWF4XG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogMjM7XG4gICAgICAgICAgc3RyID0gJ+aXtic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtaW4gPSB0aGlzLmp1ZGdlRXF1YWxBcnJheSh0aGlzLm1pbl9kYXRlLCB0aGlzLmN1cnJlbnRfdGltZSwgNClcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1pbkRhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiB0aGlzLmN1clRMZXNzVGhhbk1pblxuICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluRGF0ZVtjaGVja0lkeCArIDFdXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgICAgbWF4ID0gdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5tYXhfZGF0ZSwgdGhpcy5jdXJyZW50X3RpbWUsIDQpXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxNYXhEYXRlW2NoZWNrSWR4ICsgMV1cbiAgICAgICAgICAgIDogdGhpcy5jdXJUTW9yZVRoYW5NYXhcbiAgICAgICAgICAgID8gdGhpcy5sb2NhbE1heERhdGVbY2hlY2tJZHggKyAxXVxuICAgICAgICAgICAgOiA1OTtcbiAgICAgICAgICBzdHIgPSAn5YiGJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0UmFuZ2VBcnIobWluLCBtYXgsIGluZGV4VCwgY2hlY2tJZHggKyAxLCBzdHIpO1xuICAgIH1cbiAgICB0aGlzLnNldEN1cnJlbnRTZWxlY3RlZChjaGVja0lkeCArIDEsIHN0YSwgaW5kZXhUKTtcbiAgfVxuXG4gIGluaXRSYW5nZUFycihtaW4sIG1heCwgaW5kZXhULCBjaGVja0lkeCwgc3RyKSB7XG4gICAgY29uc3QgcmVhbElkeCA9IHRoaXMuaW5kZXhBcnJheVtjaGVja0lkeF07XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IHRhcmdldExvbmcgPSAwO1xuICAgIGNvbnN0IGluY3JlYXNlVmFsdWUgPSBzdHIgPT09IHRoaXMubG9jYWxlTmV3Lm1pbnV0ZSA/IHRoaXMub3B0aW9ucy5taW51dGVTdGVwIDogMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gbWluOyBpbmRleCA8IG1heCArIDE7IGluZGV4ICs9IGluY3JlYXNlVmFsdWUpIHtcbiAgICAgIGFyci5wdXNoKGluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoYXJyLmluZGV4T2YodGhpcy5yZXN1bHRBcnJbcmVhbElkeF0pID09IC0xKSB7XG4gICAgICBpZiAoLXRoaXMuc2VsZWN0ZWRUYXJnZXRbY2hlY2tJZHhdLmN1cnJlbnRZID4gbWF4IC0gbWluKSB7XG4gICAgICAgIGluZGV4VCA9IG1heCAtIG1pbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldFtjaGVja0lkeF0uY3VycmVudFkgPSAtaW5kZXhUO1xuICAgICAgfVxuICAgICAgdGFyZ2V0TG9uZyA9IC1hcnIubGVuZ3RoICogdGhpcy5saW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRMb25nID0gLWFyci5pbmRleE9mKHRoaXMucmVzdWx0QXJyW3JlYWxJZHhdKSAqIHRoaXMubGluZUhlaWdodDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXRbY2hlY2tJZHhdLmN1cnJlbnRZID0gLWFyci5pbmRleE9mKHRoaXMucmVzdWx0QXJyW3JlYWxJZHhdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVtjaGVja0lkeF0udG9TdHJpbmcoKSAhPT0gYXJyLnRvU3RyaW5nKCkpIHtcbiAgICAgIGlmIChjaGVja0lkeCA+PSAzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudF90aW1lW3JlYWxJZHhdID0gLXRhcmdldExvbmcgLyB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHRoaXMucmVzdWx0QXJyW3JlYWxJZHhdID0gLXRhcmdldExvbmcgLyB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMuY3VycmVudF90aW1lLCB0aGlzLm1pbl9kYXRlLCByZWFsSWR4KSA/IHRoaXMubWluX2RhdGVbcmVhbElkeF0gOiAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRfdGltZVtyZWFsSWR4XSA9IC10YXJnZXRMb25nIC8gdGhpcy5saW5lSGVpZ2h0ICsgZGVsdGE7XG4gICAgICAgIHRoaXMucmVzdWx0QXJyW3JlYWxJZHhdID0gLXRhcmdldExvbmcgLyB0aGlzLmxpbmVIZWlnaHQgKyBkZWx0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhW2NoZWNrSWR4XSA9IGFycjtcbiAgICAgIHRoaXMuZGF0YVdpdGhTdHJbY2hlY2tJZHhdID1cbiAgICAgICAgdGhpcy5vcHRpb25zLmxvY2FsZS5sb2NhbGUgPT09ICd6aF9DTidcbiAgICAgICAgICA/IGFyci5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtICsgc3RyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IGFycjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoaSA+PSBjaGVja0lkeCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoaXRlbS5jdXJyZW50WSwgMCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIHRoaXMubGluZUhlaWdodH1weClgO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudFRhcmdldChldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8XG4gICAgICBldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJyB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ21vdXNldXAnIHx8XG4gICAgICBldmVudC50eXBlID09PSAnbW91c2VsZWF2ZSdcbiAgICApIHtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdKSB7XG4gICAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hlY2tNb2RlKHRoaXMub3B0aW9ucy5tb2RlKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJhbnNmb3JtRGF0ZUZvcm1hdCh0aGlzLm9wdGlvbnMudmFsdWUpLnNwbGl0KCctJyk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudF90aW1lID0gdGhpcy5jdXJyZW50VGltZSA9IHZhbHVlLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRfdGltZTtcbiAgICB9XG4gICAgdGhpcy5sb2NhbGVQcm92aWRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVsb2FkUGlja2VyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19