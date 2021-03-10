import { Component, forwardRef, ViewEncapsulation, Input, Output, HostBinding, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { mergeDateTime, isSameDate } from './util/index';
import { takeUntil } from 'rxjs/operators';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../locale-provider/locale-provider.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './header/header.component';
import * as ɵngcc4 from './datepicker/datepicker.component';
import * as ɵngcc5 from './timepicker/timepicker.component';
import * as ɵngcc6 from './shortcut-panel/shortcut-panel.component';
import * as ɵngcc7 from './confirm-panel/confirm-panel.component';
import * as ɵngcc8 from '../icon/icon.component';

function CalendarComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelement(1, "div");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("mask " + ctx_r0.maskAnimateClass);
} }
function CalendarComponent_span_1_CalendarTimePicker_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "CalendarTimePicker", 7);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("propsData", ctx_r4.props)("title", ctx_r4.state.timePickerTitle)("clientHeight", ctx_r4.state.clientHight)("prefixCls", ctx_r4.props.timePickerPrefixCls)("defaultValue", ctx_r4.props.defaultTimeValue)("pickerPrefixCls", ctx_r4.props.timePickerPickerPrefixCls)("value", ctx_r4.state.endDate ? ctx_r4.state.endDate : ctx_r4.state.startDate)("onValueChange", ctx_r4.onTimeChange);
} }
function CalendarComponent_span_1_CalendarShortcutPanel_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "CalendarShortcutPanel", 8);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r5.props.locale)("onSelect", ctx_r5.shortcutSelect);
} }
function CalendarComponent_span_1_CalendarConfirmPanel_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "CalendarConfirmPanel", 9);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("propsData", ctx_r6.props)("startDateTime", ctx_r6.state.startDate)("endDateTime", ctx_r6.state.endDate)("disableBtn", ctx_r6.state.disConfirmBtn)("formatStr", ctx_r6.props.pickTime ? ctx_r6.props.locale.dateTimeFormat : ctx_r6.props.locale.dateFormat)("onConfirm", ctx_r6.triggerConfirm);
} }
function CalendarComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelementStart(2, "CalendarHeader", 2);
    ɵngcc0.ɵɵlistener("onCancel", function CalendarComponent_span_1_Template_CalendarHeader_onCancel_2_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.triggerCancel(); })("onClear", function CalendarComponent_span_1_Template_CalendarHeader_onClear_2_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.triggerClear(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "CalendarDatePicker", 3);
    ɵngcc0.ɵɵtemplate(4, CalendarComponent_span_1_CalendarTimePicker_4_Template, 1, 8, "CalendarTimePicker", 4);
    ɵngcc0.ɵɵtemplate(5, CalendarComponent_span_1_CalendarShortcutPanel_5_Template, 1, 2, "CalendarShortcutPanel", 5);
    ɵngcc0.ɵɵtemplate(6, CalendarComponent_span_1_CalendarConfirmPanel_6_Template, 1, 6, "CalendarConfirmPanel", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("content animate " + ctx_r1.contentAnimateClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r1.props.locale)("closeIcon", _r2)("showClear", ctx_r1.showClear);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("propsData", ctx_r1.props)("endDate", ctx_r1.state.endDate)("startDate", ctx_r1.state.startDate)("onCellClick", ctx_r1.onSelectedDate)("onSelectHasDisableDate", ctx_r1.triggerSelectHasDisableDate)("onLayout", ctx_r1.setClientHeight);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.state.showTimePicker);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.props.showShortcut && !ctx_r1.state.showTimePicker);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.state.startDate);
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 10);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("type", "cross");
} }
export class CalendarComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.isShow = false;
        this.showClear = false;
        this.isSameDate = isSameDate;
        this.props = {
            visible: false,
            showHeader: true,
            locale: zhCN,
            pickTime: false,
            showShortcut: false,
            prefixCls: 'rmc-calendar',
            type: 'range',
            defaultTimeValue: new Date(2000, 0, 1, 8)
        };
        this.state = {
            showTimePicker: false,
            timePickerTitle: '',
            startDate: undefined,
            endDate: undefined,
            disConfirmBtn: true,
            clientHight: 0
        };
        this._unsubscribe$ = new Subject();
        this._dateModelTime = 0;
        this.onCancel = new EventEmitter();
        this.onConfirm = new EventEmitter();
        this.onSelectHasDisableDate = new EventEmitter();
        this.class = 'am-calendar';
        this.selectDate = (date, useDateTime = false, oldState = {}, props = this.props) => {
            if (!date) {
                return {};
            }
            let newState = {};
            const { type, pickTime, defaultTimeValue, locale = {} } = props;
            const newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
            const { startDate, endDate } = oldState;
            switch (type) {
                case 'one':
                    newState = Object.assign(Object.assign({}, newState), { startDate: newDate, disConfirmBtn: false });
                    if (pickTime) {
                        newState = Object.assign(Object.assign({}, newState), { timePickerTitle: locale.selectTime, showTimePicker: true });
                    }
                    break;
                case 'range':
                    if (!startDate || endDate) {
                        newState = Object.assign(Object.assign({}, newState), { startDate: newDate, endDate: undefined, disConfirmBtn: true });
                        if (pickTime) {
                            newState = Object.assign(Object.assign({}, newState), { timePickerTitle: locale.selectStartTime, showTimePicker: true });
                        }
                    }
                    else {
                        newState = Object.assign(Object.assign({}, newState), { timePickerTitle: +newDate >= +startDate || this.isSameDate(startDate, newDate)
                                ? locale.selectEndTime
                                : locale.selectStartTime, disConfirmBtn: false, endDate: pickTime && !useDateTime && (+newDate >= +startDate || this.isSameDate(startDate, newDate))
                                ? new Date(+mergeDateTime(newDate, startDate) + 3600000)
                                : newDate });
                    }
                    break;
            }
            this.writeModelData(date);
            return newState;
        };
        this.onSelectedDate = (date) => {
            const { startDate, endDate } = this.state;
            const { onSelect } = this.props;
            if (onSelect) {
                const value = onSelect(date, [startDate, endDate]);
                if (value) {
                    this.shortcutSelect(value[0], value[1]);
                    return;
                }
            }
            this.state = Object.assign(Object.assign({}, this.state), this.selectDate(date, false, { startDate, endDate }));
            this.showClear = !!this.state.startDate;
        };
        this.triggerSelectHasDisableDate = (date) => {
            this.triggerClear();
            if (this.onSelectHasDisableDate) {
                this.onSelectHasDisableDate.emit(date);
            }
        };
        this.onClose = () => {
            this.state = {
                showTimePicker: false,
                timePickerTitle: '',
                startDate: undefined,
                endDate: undefined,
                disConfirmBtn: true,
                clientHight: 0
            };
            this.showClear = !!this.state.startDate;
        };
        this.triggerConfirm = () => {
            const { startDate, endDate } = this.state;
            if (startDate && endDate && +startDate > +endDate) {
                this.onClose();
                return this.onConfirm && this.onConfirm.emit({ startDate: endDate, endDate: startDate });
            }
            if (this.onConfirm) {
                this.onConfirm.emit({ startDate, endDate });
            }
            this.onClose();
        };
        this.triggerClear = () => {
            // 清除数据做延迟，否则同步刷新数据导致报错
            setTimeout(() => {
                this.state = Object.assign(Object.assign({}, this.state), { startDate: undefined, endDate: undefined, showTimePicker: false });
                if (this.props.onClear) {
                    this.props.onClear();
                }
                this.showClear = !!this.state.startDate;
            }, 0);
        };
        this.onTimeChange = (date) => {
            const { startDate, endDate } = this.state;
            if (endDate) {
                this.state.endDate = date;
            }
            else if (startDate) {
                this.state.startDate = date;
            }
        };
        this.shortcutSelect = (startDate, endDate, props = this.props) => {
            this.state = Object.assign(Object.assign(Object.assign({}, this.state), { startDate, showTimePicker: false }), this.selectDate(endDate, true, { startDate }, props));
            this.showClear = !!this.state.startDate;
        };
        this.setClientHeight = (height) => {
            this.state.clientHight = height;
        };
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    set locale(value) {
        if (value === 'enUS') {
            this.props.locale = enUS;
        }
        else if (value === 'zhCN') {
            this.props.locale = zhCN;
        }
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
    set defaultTimeValue(value) {
        if (value) {
            this.props.defaultTimeValue = value;
        }
    }
    set prefixCls(value) {
        if (value) {
            this.props.prefixCls = value;
        }
    }
    set enterDirection(value) {
        this._enterDirection = value;
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-enter slideH-enter-active';
        }
        else {
            this.contentAnimateClass = 'slideV-enter slideV-enter-active';
        }
    }
    set visible(value) {
        this.props.visible = value;
        if (value === true || value === 'true') {
            this.showAnimation();
            this.isShow = true;
        }
        else {
            this.hideAnimation();
            setTimeout(() => {
                this.isShow = false;
            }, 300);
        }
    }
    set getDateExtra(value) {
        this.props.getDateExtra = value;
    }
    set defaultDate(value) {
        this.props.defaultDate = value;
    }
    set minDate(value) {
        this.props.minDate = value;
    }
    set maxDate(value) {
        this.props.maxDate = value;
    }
    set pickTime(value) {
        this.props.pickTime = value;
    }
    set type(value) {
        this.props.type = value;
    }
    set showShortcut(value) {
        this.props.showShortcut = value;
    }
    set rowSize(value) {
        this.props.rowSize = value;
    }
    set infinite(value) { }
    set defaultValue(value) {
        this.props.defaultValue = value;
        if (value) {
            this.receiveProps(this.props);
        }
    }
    set onSelect(value) {
        this.props.onSelect = value;
    }
    writeValue(value) {
        this._dateModelType = null;
        if (value && value instanceof Array) {
            if (value.length === 0) {
                console.error('[ng-zorro-antd-mobile]: calendar ngModel array need params!');
                return;
            }
            if (this.props.type === 'one' && value.length >= 2) {
                this._dateModelType = 1;
                console.error('[ng-zorro-antd-mobile]: type is one, but ngmodel has more than one param, just use first one');
                this.onSelectedDate(value[0]);
            }
            else if (value.length === 1) {
                this._dateModelType = 1;
                this.onSelectedDate(value[0]);
            }
            else {
                this._dateModelType = 2;
                this.onSelectedDate(value[0]);
                this.onSelectedDate(value[1]);
            }
        }
        else if (value && value instanceof Date) {
            this._dateModelType = 3;
            this.onSelectedDate(value);
        }
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    receiveProps(nextProps) {
        if (nextProps.visible && nextProps.defaultValue) {
            this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
        }
    }
    showAnimation() {
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-enter slideH-enter-active';
        }
        else {
            this.contentAnimateClass = 'slideV-enter slideV-enter-active';
        }
        this.maskAnimateClass = 'fade-enter fade-enter-active';
    }
    hideAnimation() {
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-leave slideH-leave-active';
        }
        else {
            this.contentAnimateClass = 'slideV-leave slideV-leave-active';
        }
        this.maskAnimateClass = 'fade-leave fade-leave-active';
    }
    writeModelData(date) {
        if (this._dateModelValue instanceof Array) {
            this._dateModelTime = this._dateModelValue.length;
        }
        else {
            this._dateModelTime = 0;
        }
        switch (this._dateModelType) {
            case 1:
                this._dateModelValue = [date];
                this.onChangeFn(this._dateModelValue);
                break;
            case 2:
                if (this._dateModelTime === 1) {
                    if (+date < +this._dateModelValue[0]) {
                        this._dateModelValue.unshift(date);
                    }
                    else {
                        this._dateModelValue.push(date);
                    }
                    this.onChangeFn(this._dateModelValue);
                }
                else {
                    this._dateModelValue = [];
                    this._dateModelValue.push(date);
                }
                break;
            case 3:
                this._dateModelValue = date;
                this.onChangeFn(this._dateModelValue);
                break;
            default:
                break;
        }
    }
    triggerCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
        this.onClose();
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }
    ngOnInit() {
        const defaultValue = this.props.defaultValue;
        if (defaultValue) {
            this.state = Object.assign(Object.assign({}, this.state), this.selectDate(defaultValue[1], true, { startDate: defaultValue[0] }, this.props));
        }
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this.props.locale = Object.assign({}, this._localeProviderService.getLocaleSubObj('Calendar'));
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
CalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["Calendar"], ["nzm-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CalendarDatePickerComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.datepicker = _t.first);
    } }, hostVars: 2, hostBindings: function CalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
    } }, inputs: { locale: "locale", defaultTimeValue: "defaultTimeValue", prefixCls: "prefixCls", enterDirection: "enterDirection", visible: "visible", getDateExtra: "getDateExtra", defaultDate: "defaultDate", minDate: "minDate", maxDate: "maxDate", pickTime: "pickTime", type: "type", showShortcut: "showShortcut", rowSize: "rowSize", infinite: "infinite", defaultValue: "defaultValue", onSelect: "onSelect" }, outputs: { onCancel: "onCancel", onConfirm: "onConfirm", onSelectHasDisableDate: "onSelectHasDisableDate" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }])], decls: 4, vars: 2, consts: [[4, "ngIf"], ["closeIconHtml", ""], [3, "locale", "closeIcon", "showClear", "onCancel", "onClear"], [3, "propsData", "endDate", "startDate", "onCellClick", "onSelectHasDisableDate", "onLayout"], [3, "propsData", "title", "clientHeight", "prefixCls", "defaultValue", "pickerPrefixCls", "value", "onValueChange", 4, "ngIf"], [3, "locale", "onSelect", 4, "ngIf"], [3, "propsData", "startDateTime", "endDateTime", "disableBtn", "formatStr", "onConfirm", 4, "ngIf"], [3, "propsData", "title", "clientHeight", "prefixCls", "defaultValue", "pickerPrefixCls", "value", "onValueChange"], [3, "locale", "onSelect"], [3, "propsData", "startDateTime", "endDateTime", "disableBtn", "formatStr", "onConfirm"], [3, "type"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarComponent_span_0_Template, 2, 3, "span", 0);
        ɵngcc0.ɵɵtemplate(1, CalendarComponent_span_1_Template, 7, 15, "span", 0);
        ɵngcc0.ɵɵtemplate(2, CalendarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isShow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isShow);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.CalendarHeaderComponent, ɵngcc4.CalendarDatePickerComponent, ɵngcc5.CalendarTimePickerComponent, ɵngcc6.CalendarShortcutPanelComponent, ɵngcc7.CalendarConfirmPanelComponent, ɵngcc8.IconComponent], encapsulation: 2 });
CalendarComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
CalendarComponent.propDecorators = {
    datepicker: [{ type: ViewChild, args: [CalendarDatePickerComponent,] }],
    locale: [{ type: Input }],
    defaultTimeValue: [{ type: Input }],
    prefixCls: [{ type: Input }],
    enterDirection: [{ type: Input }],
    visible: [{ type: Input }],
    getDateExtra: [{ type: Input }],
    defaultDate: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    pickTime: [{ type: Input }],
    type: [{ type: Input }],
    showShortcut: [{ type: Input }],
    rowSize: [{ type: Input }],
    infinite: [{ type: Input }],
    defaultValue: [{ type: Input }],
    onSelect: [{ type: Input }],
    onCancel: [{ type: Output }],
    onConfirm: [{ type: Output }],
    onSelectHasDisableDate: [{ type: Output }],
    class: [{ type: HostBinding, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{
                selector: 'Calendar, nzm-calendar',
                template: "<span *ngIf=\"isShow\">\n  <div class=\"{{ 'mask ' + maskAnimateClass }}\"></div>\n</span>\n<span *ngIf=\"isShow\">\n  <div class=\"{{ 'content animate ' + contentAnimateClass }}\">\n    <CalendarHeader\n      [locale]=\"props.locale\"\n      [closeIcon]=\"closeIconHtml\"\n      [showClear]=\"showClear\"\n      (onCancel)=\"triggerCancel()\"\n      (onClear)=\"triggerClear()\"\n    ></CalendarHeader>\n    <CalendarDatePicker\n      [propsData]=\"props\"\n      [endDate]=\"state.endDate\"\n      [startDate]=\"state.startDate\"\n      [onCellClick]=\"onSelectedDate\"\n      [onSelectHasDisableDate]=\"triggerSelectHasDisableDate\"\n      [onLayout]=\"setClientHeight\"\n    ></CalendarDatePicker>\n    <CalendarTimePicker\n      *ngIf=\"state.showTimePicker\"\n      [propsData]=\"props\"\n      [title]=\"state.timePickerTitle\"\n      [clientHeight]=\"state.clientHight\"\n      [prefixCls]=\"props.timePickerPrefixCls\"\n      [defaultValue]=\"props.defaultTimeValue\"\n      [pickerPrefixCls]=\"props.timePickerPickerPrefixCls\"\n      [value]=\"state.endDate ? state.endDate : state.startDate\"\n      [onValueChange]=\"onTimeChange\"\n    ></CalendarTimePicker>\n    <CalendarShortcutPanel\n      *ngIf=\"props.showShortcut && !state.showTimePicker\"\n      [locale]=\"props.locale\"\n      [onSelect]=\"shortcutSelect\"\n    ></CalendarShortcutPanel>\n    <CalendarConfirmPanel\n      *ngIf=\"state.startDate\"\n      [propsData]=\"props\"\n      [startDateTime]=\"state.startDate\"\n      [endDateTime]=\"state.endDate\"\n      [disableBtn]=\"state.disConfirmBtn\"\n      [formatStr]=\"props.pickTime ? props.locale.dateTimeFormat : props.locale.dateFormat\"\n      [onConfirm]=\"triggerConfirm\"\n    ></CalendarConfirmPanel>\n  </div>\n</span>\n<ng-template #closeIconHtml>\n  <Icon [type]=\"'cross'\"></Icon>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }]; }, { onCancel: [{
            type: Output
        }], onConfirm: [{
            type: Output
        }], onSelectHasDisableDate: [{
            type: Output
        }], class: [{
            type: HostBinding,
            args: ['class']
        }], locale: [{
            type: Input
        }], defaultTimeValue: [{
            type: Input
        }], prefixCls: [{
            type: Input
        }], enterDirection: [{
            type: Input
        }], visible: [{
            type: Input
        }], getDateExtra: [{
            type: Input
        }], defaultDate: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], pickTime: [{
            type: Input
        }], type: [{
            type: Input
        }], showShortcut: [{
            type: Input
        }], rowSize: [{
            type: Input
        }], infinite: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], onSelect: [{
            type: Input
        }], datepicker: [{
            type: ViewChild,
            args: [CalendarDatePickerComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFHVixpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxJQUFJLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEMsT0FBTyxJQUFJLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CL0IsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBMEkvQixZQUFvQixzQkFBNkM7QUFBSSxRQUFqRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO0FBQUMsUUF6SWxFLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDMUIsUUFFRSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQzdCLFFBQUUsZUFBVSxHQUFhLFVBQVUsQ0FBQztBQUNwQyxRQUNFLFVBQUssR0FBRztBQUNWLFlBQUksT0FBTyxFQUFFLEtBQUs7QUFDbEIsWUFBSSxVQUFVLEVBQUUsSUFBSTtBQUNwQixZQUFJLE1BQU0sRUFBRSxJQUFJO0FBQ2hCLFlBQUksUUFBUSxFQUFFLEtBQUs7QUFDbkIsWUFBSSxZQUFZLEVBQUUsS0FBSztBQUN2QixZQUFJLFNBQVMsRUFBRSxjQUFjO0FBQzdCLFlBQUksSUFBSSxFQUFFLE9BQU87QUFDakIsWUFBSSxnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0MsU0FBd0IsQ0FBQztBQUN6QixRQUNFLFVBQUssR0FBRztBQUNWLFlBQUksY0FBYyxFQUFFLEtBQUs7QUFDekIsWUFBSSxlQUFlLEVBQUUsRUFBRTtBQUN2QixZQUFJLFNBQVMsRUFBRSxTQUFTO0FBQ3hCLFlBQUksT0FBTyxFQUFFLFNBQVM7QUFDdEIsWUFBSSxhQUFhLEVBQUUsSUFBSTtBQUN2QixZQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLFNBQXdCLENBQUM7QUFDekIsUUFDVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDOUMsUUFHVSxtQkFBYyxHQUFXLENBQUMsQ0FBQztBQUNyQyxRQWlHRSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7QUFDeEQsUUFDRSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7QUFDekQsUUFDRSwyQkFBc0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUN0RSxRQUVFLFVBQUssR0FBVyxhQUFhLENBQUM7QUFDaEMsUUE0REUsZUFBVSxHQUFHLENBQ1gsSUFBVSxFQUNWLFdBQVcsR0FBRyxLQUFLLEVBQ25CLFdBQWlELEVBQUUsRUFDbkQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2xCLEVBQUU7QUFDTixZQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDZixnQkFBTSxPQUFPLEVBQXVCLENBQUM7QUFDckMsYUFBSztBQUNMLFlBQUksSUFBSSxRQUFRLEdBQUcsRUFBdUIsQ0FBQztBQUMzQyxZQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sR0FBRyxFQUF1QixFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3pGLFlBQUksTUFBTSxPQUFPLEdBQUcsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1RixZQUFJLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQzVDLFlBQ0ksUUFBUSxJQUFJLEVBQUU7QUFDbEIsZ0JBQU0sS0FBSyxLQUFLO0FBQ2hCLG9CQUFRLFFBQVEsbUNBQ0gsUUFBUSxLQUNYLFNBQVMsRUFBRSxPQUFPLEVBQ2xCLGFBQWEsRUFBRSxLQUFLLEdBQ3JCLENBQUM7QUFDVixvQkFBUSxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBVSxRQUFRLG1DQUNILFFBQVEsS0FDWCxlQUFlLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFDbEMsY0FBYyxFQUFFLElBQUksR0FDckIsQ0FBQztBQUNaLHFCQUFTO0FBQ1Qsb0JBQVEsTUFBTTtBQUNkLGdCQUNNLEtBQUssT0FBTztBQUNsQixvQkFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFBRTtBQUNuQyx3QkFBVSxRQUFRLG1DQUNILFFBQVEsS0FDWCxTQUFTLEVBQUUsT0FBTyxFQUNsQixPQUFPLEVBQUUsU0FBUyxFQUNsQixhQUFhLEVBQUUsSUFBSSxHQUNwQixDQUFDO0FBQ1osd0JBQVUsSUFBSSxRQUFRLEVBQUU7QUFDeEIsNEJBQVksUUFBUSxtQ0FDSCxRQUFRLEtBQ1gsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQ3ZDLGNBQWMsRUFBRSxJQUFJLEdBQ3JCLENBQUM7QUFDZCx5QkFBVztBQUNYLHFCQUFTO0FBQUMseUJBQUs7QUFDZix3QkFBVSxRQUFRLG1DQUNILFFBQVEsS0FDWCxlQUFlLEVBQ2IsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO0FBQzNFLGdDQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWE7QUFDdEMsZ0NBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUM1QixhQUFhLEVBQUUsS0FBSyxFQUNwQixPQUFPLEVBQ0wsUUFBUSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekcsZ0NBQWdCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3hFLGdDQUFnQixDQUFDLENBQUMsT0FBTyxHQUNkLENBQUM7QUFDWixxQkFBUztBQUNULG9CQUFRLE1BQU07QUFDZCxhQUFLO0FBQ0wsWUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFlBQUksT0FBTyxRQUFRLENBQUM7QUFDcEIsUUFBRSxDQUFDLENBQUE7QUFDSCxRQW1DRSxtQkFBYyxHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7QUFDbEMsWUFBSSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDOUMsWUFBSSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNwQyxZQUNJLElBQUksUUFBUSxFQUFFO0FBQ2xCLGdCQUFNLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6RCxnQkFBTSxJQUFJLEtBQUssRUFBRTtBQUNqQixvQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxvQkFBUSxPQUFPO0FBQ2YsaUJBQU87QUFDUCxhQUFLO0FBQ0wsWUFDSSxJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsS0FBSyxHQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUN4RCxDQUFDO0FBQ04sWUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUM1QyxRQUFFLENBQUMsQ0FBQTtBQUNILFFBQ0UsZ0NBQTJCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtBQUNqRCxZQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QixZQUFJLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO0FBQ3JDLGdCQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsYUFBSztBQUNMLFFBQUUsQ0FBQyxDQUFBO0FBQ0gsUUFDRSxZQUFPLEdBQUcsR0FBRyxFQUFFO0FBQ2pCLFlBQUksSUFBSSxDQUFDLEtBQUssR0FBRztBQUNqQixnQkFBTSxjQUFjLEVBQUUsS0FBSztBQUMzQixnQkFBTSxlQUFlLEVBQUUsRUFBRTtBQUN6QixnQkFBTSxTQUFTLEVBQUUsU0FBUztBQUMxQixnQkFBTSxPQUFPLEVBQUUsU0FBUztBQUN4QixnQkFBTSxhQUFhLEVBQUUsSUFBSTtBQUN6QixnQkFBTSxXQUFXLEVBQUUsQ0FBQztBQUNwQixhQUEwQixDQUFDO0FBQzNCLFlBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDNUMsUUFBRSxDQUFDLENBQUE7QUFDSCxRQUNFLG1CQUFjLEdBQUcsR0FBRyxFQUFFO0FBQ3hCLFlBQUksTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlDLFlBQUksSUFBSSxTQUFTLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3ZELGdCQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixnQkFBTSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQy9GLGFBQUs7QUFDTCxZQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN4QixnQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELGFBQUs7QUFDTCxZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNuQixRQUFFLENBQUMsQ0FBQTtBQUNILFFBV0UsaUJBQVksR0FBRyxHQUFHLEVBQUU7QUFDdEIsWUFBSSx1QkFBdUI7QUFDM0IsWUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ3BCLGdCQUFNLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUN2RSxDQUFDO0FBQ1IsZ0JBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUM5QixvQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdCLGlCQUFPO0FBQ1AsZ0JBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDOUMsWUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixRQUFFLENBQUMsQ0FBQTtBQUNILFFBQ0UsaUJBQVksR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO0FBQ2hDLFlBQUksTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlDLFlBQUksSUFBSSxPQUFPLEVBQUU7QUFDakIsZ0JBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLGFBQUs7QUFBQyxpQkFBSyxJQUFJLFNBQVMsRUFBRTtBQUMxQixnQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDbEMsYUFBSztBQUNMLFFBQUUsQ0FBQyxDQUFBO0FBQ0gsUUFDRSxtQkFBYyxHQUFHLENBQUMsU0FBZSxFQUFFLE9BQWEsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQzFFLFlBQUksSUFBSSxDQUFDLEtBQUssaURBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUN4RCxDQUFDO0FBQ04sWUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUM1QyxRQUFFLENBQUMsQ0FBQTtBQUNILFFBQ0Usb0JBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0FBQ3ZDLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLFFBQUUsQ0FBQyxDQUFBO0FBQ0gsUUFvQlUsZUFBVSxHQUF1QyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDcEUsUUFBVSxjQUFTLEdBQXVDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUNuRSxJQXJSc0UsQ0FBQztBQUN2RSxJQXZHRSxJQUNJLE1BQU0sQ0FBQyxLQUFLO0FBQ2xCLFFBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFNBQUs7QUFBQyxhQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUNqQyxZQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUMvQixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksZ0JBQWdCLENBQUMsS0FBSztBQUM1QixRQUFJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUMxQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFNBQVMsQ0FBQyxLQUFLO0FBQ3JCLFFBQUksSUFBSSxLQUFLLEVBQUU7QUFDZixZQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUNuQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLGNBQWMsQ0FBQyxLQUFLO0FBQzFCLFFBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDakMsUUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssWUFBWSxFQUFFO0FBQy9DLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtDQUFrQyxDQUFDO0FBQ3BFLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0NBQWtDLENBQUM7QUFDcEUsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxPQUFPLENBQUMsS0FBSztBQUNuQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUFJLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO0FBQzVDLFlBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDekIsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMzQixZQUFNLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDNUIsWUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDZCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFlBQVksQ0FBQyxLQUFLO0FBQ3hCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxXQUFXLENBQUMsS0FBSztBQUN2QixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksT0FBTyxDQUFDLEtBQUs7QUFDbkIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLE9BQU8sQ0FBQyxLQUFLO0FBQ25CLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxRQUFRLENBQUMsS0FBSztBQUNwQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNoQyxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksSUFBSSxDQUFDLEtBQUs7QUFDaEIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFlBQVksQ0FBQyxLQUFLO0FBQ3hCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxPQUFPLENBQUMsS0FBSztBQUNuQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksUUFBUSxDQUFDLEtBQUssSUFBRyxDQUFDO0FBQ3hCLElBQUUsSUFDSSxZQUFZLENBQUMsS0FBSztBQUN4QixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNwQyxRQUNJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVEsQ0FBQyxLQUFLO0FBQ3BCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUNILElBYUUsVUFBVSxDQUFDLEtBQWdDO0FBQUksUUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO0FBQ3pDLFlBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUM5QixnQkFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7QUFDckYsZ0JBQVEsT0FBTztBQUNmLGFBQU87QUFDUCxZQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzFELGdCQUFRLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEZBQThGLENBQUMsQ0FBQztBQUN0SCxnQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLGFBQU87QUFBQyxpQkFBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3JDLGdCQUFRLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDaEMsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxnQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLGFBQU87QUFDUCxTQUFLO0FBQUMsYUFBSyxJQUFJLEtBQUssSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO0FBQy9DLFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLEVBQXNDO0FBQUksUUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxFQUFjO0FBQUksUUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZLENBQUMsU0FBNEI7QUFDM0MsUUFBSSxJQUFJLFNBQVMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtBQUNyRCxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNGLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWE7QUFDZixRQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxZQUFZLEVBQUU7QUFDL0MsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0NBQWtDLENBQUM7QUFDcEUsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUNwRSxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsOEJBQThCLENBQUM7QUFDM0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhO0FBQ2YsUUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssWUFBWSxFQUFFO0FBQy9DLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtDQUFrQyxDQUFDO0FBQ3BFLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0NBQWtDLENBQUM7QUFDcEUsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLDhCQUE4QixDQUFDO0FBQzNELElBQUUsQ0FBQztBQUNILElBbUVFLGNBQWMsQ0FBQyxJQUFJO0FBQ3JCLFFBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxZQUFZLEtBQUssRUFBRTtBQUMvQyxZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7QUFDeEQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxRQUNJLFFBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUNqQyxZQUFNLEtBQUssQ0FBQztBQUNaLGdCQUFRLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxnQkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QyxnQkFBUSxNQUFNO0FBQ2QsWUFBTSxLQUFLLENBQUM7QUFDWixnQkFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssQ0FBQyxFQUFFO0FBQ3ZDLG9CQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2hELHdCQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLHFCQUFXO0FBQUMseUJBQUs7QUFDakIsd0JBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMscUJBQVc7QUFDWCxvQkFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNoRCxpQkFBUztBQUFDLHFCQUFLO0FBQ2Ysb0JBQVUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDcEMsb0JBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsaUJBQVM7QUFDVCxnQkFBUSxNQUFNO0FBQ2QsWUFBTSxLQUFLLENBQUM7QUFDWixnQkFBUSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUNwQyxnQkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QyxnQkFBUSxNQUFNO0FBQ2QsWUFBTTtBQUNOLGdCQUFRLE1BQU07QUFDZCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFvREUsYUFBYTtBQUNmLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUM3QixZQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFxQ0UsUUFBUTtBQUNWLFFBQUksTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDakQsUUFBSSxJQUFJLFlBQVksRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDdEYsQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDL0YsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxrQkFBSyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUF1QixDQUFDO0FBQzlHLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNIOzZDQWxhQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHdCQUF3QixrQkFDbEM7Ozs7Ozs7Oyt4Q0FBd0Msa0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO01BQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FDM0c7Ozs7Ozs7bVFBQ0k7QUFBQztBQUEyQyxZQXZCeEMscUJBQXFCO0FBQUc7QUFBRztBQUFxQyx5QkF3RHRFLFNBQVMsU0FBQywyQkFBMkI7QUFDbkMscUJBRUYsS0FBSztBQUNOLCtCQVVDLEtBQUs7QUFDTix3QkFLQyxLQUFLO0FBQ04sNkJBS0MsS0FBSztBQUNOLHNCQVFDLEtBQUs7QUFDTiwyQkFZQyxLQUFLO0FBQ04sMEJBR0MsS0FBSztBQUNOLHNCQUdDLEtBQUs7QUFDTixzQkFHQyxLQUFLO0FBQ04sdUJBR0MsS0FBSztBQUNOLG1CQUdDLEtBQUs7QUFDTiwyQkFHQyxLQUFLO0FBQ04sc0JBR0MsS0FBSztBQUNOLHVCQUdDLEtBQUs7QUFDTiwyQkFDQyxLQUFLO0FBQ04sdUJBT0MsS0FBSztBQUNOLHVCQUlDLE1BQU07QUFDUCx3QkFDQyxNQUFNO0FBQ1AscUNBQ0MsTUFBTTtBQUNQLG9CQUVDLFdBQVcsU0FBQyxPQUFPO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVNb2RlbHMgfSBmcm9tICcuL2RhdGUvRGF0YVR5cGVzJztcbmltcG9ydCB6aENOIGZyb20gJy4vbG9jYWxlL3poX0NOJztcbmltcG9ydCBlblVTIGZyb20gJy4vbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IENhbGVuZGFyUHJvcHNUeXBlIH0gZnJvbSAnLi9jYWxlbmRhci5wcm9wcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IG1lcmdlRGF0ZVRpbWUsIGlzU2FtZURhdGUgfSBmcm9tICcuL3V0aWwvaW5kZXgnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHsgQ2FsZW5kYXJQcm9wc1R5cGUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhclN0YXRlVHlwZSB7XG4gIHNob3dUaW1lUGlja2VyOiBib29sZWFuO1xuICB0aW1lUGlja2VyVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IERhdGU7XG4gIGVuZERhdGU/OiBEYXRlO1xuICBkaXNDb25maXJtQnRuPzogYm9vbGVhbjtcbiAgY2xpZW50SGlnaHQ/OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyLCBuem0tY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnRlbnRBbmltYXRlQ2xhc3M6IHN0cmluZztcbiAgbWFza0FuaW1hdGVDbGFzczogc3RyaW5nO1xuICBzaG93Q2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTYW1lRGF0ZTogRnVuY3Rpb24gPSBpc1NhbWVEYXRlO1xuXG4gIHByb3BzID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgbG9jYWxlOiB6aENOLFxuICAgIHBpY2tUaW1lOiBmYWxzZSxcbiAgICBzaG93U2hvcnRjdXQ6IGZhbHNlLFxuICAgIHByZWZpeENsczogJ3JtYy1jYWxlbmRhcicsXG4gICAgdHlwZTogJ3JhbmdlJyxcbiAgICBkZWZhdWx0VGltZVZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAwLCAxLCA4KVxuICB9IGFzIENhbGVuZGFyUHJvcHNUeXBlO1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dUaW1lUGlja2VyOiBmYWxzZSxcbiAgICB0aW1lUGlja2VyVGl0bGU6ICcnLFxuICAgIHN0YXJ0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGVuZERhdGU6IHVuZGVmaW5lZCxcbiAgICBkaXNDb25maXJtQnRuOiB0cnVlLFxuICAgIGNsaWVudEhpZ2h0OiAwXG4gIH0gYXMgQ2FsZW5kYXJTdGF0ZVR5cGU7XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfZW50ZXJEaXJlY3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0ZU1vZGVsVHlwZTogbnVtYmVyO1xuICBwcml2YXRlIF9kYXRlTW9kZWxWYWx1ZTogYW55O1xuICBwcml2YXRlIF9kYXRlTW9kZWxUaW1lOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50KVxuICBkYXRlcGlja2VyOiBDYWxlbmRhckRhdGVQaWNrZXJDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2VuVVMnKSB7XG4gICAgICB0aGlzLnByb3BzLmxvY2FsZSA9IGVuVVM7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3poQ04nKSB7XG4gICAgICB0aGlzLnByb3BzLmxvY2FsZSA9IHpoQ047XG4gICAgfVxuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFRpbWVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VGltZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwcmVmaXhDbHModmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMucHJlZml4Q2xzID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBlbnRlckRpcmVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2VudGVyRGlyZWN0aW9uID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VudGVyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY29udGVudEFuaW1hdGVDbGFzcyA9ICdzbGlkZUgtZW50ZXIgc2xpZGVILWVudGVyLWFjdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGVudEFuaW1hdGVDbGFzcyA9ICdzbGlkZVYtZW50ZXIgc2xpZGVWLWVudGVyLWFjdGl2ZSc7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy52aXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuc2hvd0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVBbmltYXRpb24oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGdldERhdGVFeHRyYSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZ2V0RGF0ZUV4dHJhID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5kZWZhdWx0RGF0ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtaW5EYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5taW5EYXRlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1heERhdGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm1heERhdGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGlja1RpbWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnBpY2tUaW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnR5cGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2hvd1Nob3J0Y3V0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5zaG93U2hvcnRjdXQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcm93U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMucm93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmZpbml0ZSh2YWx1ZSkge31cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb25TZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdEhhc0Rpc2FibGVEYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzczogc3RyaW5nID0gJ2FtLWNhbGVuZGFyJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgQXJyYXk8RGF0ZT4gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IG51bGw7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW25nLXpvcnJvLWFudGQtbW9iaWxlXTogY2FsZW5kYXIgbmdNb2RlbCBhcnJheSBuZWVkIHBhcmFtcyEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ29uZScgJiYgdmFsdWUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZy16b3Jyby1hbnRkLW1vYmlsZV06IHR5cGUgaXMgb25lLCBidXQgbmdtb2RlbCBoYXMgbW9yZSB0aGFuIG9uZSBwYXJhbSwganVzdCB1c2UgZmlyc3Qgb25lJyk7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDE7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDI7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlKHZhbHVlWzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDM7XG4gICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XG4gIH1cblxuICByZWNlaXZlUHJvcHMobmV4dFByb3BzOiBDYWxlbmRhclByb3BzVHlwZSkge1xuICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAmJiBuZXh0UHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLnNob3J0Y3V0U2VsZWN0KG5leHRQcm9wcy5kZWZhdWx0VmFsdWVbMF0sIG5leHRQcm9wcy5kZWZhdWx0VmFsdWVbMV0sIG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW50ZXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlSC1lbnRlciBzbGlkZUgtZW50ZXItYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlVi1lbnRlciBzbGlkZVYtZW50ZXItYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5tYXNrQW5pbWF0ZUNsYXNzID0gJ2ZhZGUtZW50ZXIgZmFkZS1lbnRlci1hY3RpdmUnO1xuICB9XG5cbiAgaGlkZUFuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW50ZXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlSC1sZWF2ZSBzbGlkZUgtbGVhdmUtYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlVi1sZWF2ZSBzbGlkZVYtbGVhdmUtYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5tYXNrQW5pbWF0ZUNsYXNzID0gJ2ZhZGUtbGVhdmUgZmFkZS1sZWF2ZS1hY3RpdmUnO1xuICB9XG5cbiAgc2VsZWN0RGF0ZSA9IChcbiAgICBkYXRlOiBEYXRlLFxuICAgIHVzZURhdGVUaW1lID0gZmFsc2UsXG4gICAgb2xkU3RhdGU6IHsgc3RhcnREYXRlPzogRGF0ZTsgZW5kRGF0ZT86IERhdGUgfSA9IHt9LFxuICAgIHByb3BzID0gdGhpcy5wcm9wc1xuICApID0+IHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiB7fSBhcyBDYWxlbmRhclN0YXRlVHlwZTtcbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0ge30gYXMgQ2FsZW5kYXJTdGF0ZVR5cGU7XG4gICAgY29uc3QgeyB0eXBlLCBwaWNrVGltZSwgZGVmYXVsdFRpbWVWYWx1ZSwgbG9jYWxlID0ge30gYXMgRGF0ZU1vZGVscy5Mb2NhbGUgfSA9IHByb3BzO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBwaWNrVGltZSAmJiAhdXNlRGF0ZVRpbWUgPyBtZXJnZURhdGVUaW1lKGRhdGUsIGRlZmF1bHRUaW1lVmFsdWUpIDogZGF0ZTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gb2xkU3RhdGU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ29uZSc6XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3RGF0ZSxcbiAgICAgICAgICBkaXNDb25maXJtQnRuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBpZiAocGlja1RpbWUpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgdGltZVBpY2tlclRpdGxlOiBsb2NhbGUuc2VsZWN0VGltZSxcbiAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICBpZiAoIXN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRpc0NvbmZpcm1CdG46IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChwaWNrVGltZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgICB0aW1lUGlja2VyVGl0bGU6IGxvY2FsZS5zZWxlY3RTdGFydFRpbWUsXG4gICAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgdGltZVBpY2tlclRpdGxlOlxuICAgICAgICAgICAgICArbmV3RGF0ZSA+PSArc3RhcnREYXRlIHx8IHRoaXMuaXNTYW1lRGF0ZShzdGFydERhdGUsIG5ld0RhdGUpXG4gICAgICAgICAgICAgICAgPyBsb2NhbGUuc2VsZWN0RW5kVGltZVxuICAgICAgICAgICAgICAgIDogbG9jYWxlLnNlbGVjdFN0YXJ0VGltZSxcbiAgICAgICAgICAgIGRpc0NvbmZpcm1CdG46IGZhbHNlLFxuICAgICAgICAgICAgZW5kRGF0ZTpcbiAgICAgICAgICAgICAgcGlja1RpbWUgJiYgIXVzZURhdGVUaW1lICYmICgrbmV3RGF0ZSA+PSArc3RhcnREYXRlIHx8IHRoaXMuaXNTYW1lRGF0ZShzdGFydERhdGUsIG5ld0RhdGUpKVxuICAgICAgICAgICAgICAgID8gbmV3IERhdGUoK21lcmdlRGF0ZVRpbWUobmV3RGF0ZSwgc3RhcnREYXRlKSArIDM2MDAwMDApXG4gICAgICAgICAgICAgICAgOiBuZXdEYXRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLndyaXRlTW9kZWxEYXRhKGRhdGUpO1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIHdyaXRlTW9kZWxEYXRhKGRhdGUpIHtcbiAgICBpZiAodGhpcy5fZGF0ZU1vZGVsVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVGltZSA9IHRoaXMuX2RhdGVNb2RlbFZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVGltZSA9IDA7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9kYXRlTW9kZWxUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlID0gW2RhdGVdO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy5fZGF0ZU1vZGVsVmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVNb2RlbFRpbWUgPT09IDEpIHtcbiAgICAgICAgICBpZiAoK2RhdGUgPCArdGhpcy5fZGF0ZU1vZGVsVmFsdWVbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlLnVuc2hpZnQoZGF0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlLnB1c2goZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLl9kYXRlTW9kZWxWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVmFsdWUgPSBbXTtcbiAgICAgICAgICB0aGlzLl9kYXRlTW9kZWxWYWx1ZS5wdXNoKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLl9kYXRlTW9kZWxWYWx1ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLl9kYXRlTW9kZWxWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RlZERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25TZWxlY3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb25TZWxlY3QoZGF0ZSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2hvcnRjdXRTZWxlY3QodmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4udGhpcy5zZWxlY3REYXRlKGRhdGUsIGZhbHNlLCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KVxuICAgIH07XG5cbiAgICB0aGlzLnNob3dDbGVhciA9ICEhdGhpcy5zdGF0ZS5zdGFydERhdGU7XG4gIH1cblxuICB0cmlnZ2VyU2VsZWN0SGFzRGlzYWJsZURhdGUgPSAoZGF0ZTogRGF0ZVtdKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VyQ2xlYXIoKTtcbiAgICBpZiAodGhpcy5vblNlbGVjdEhhc0Rpc2FibGVEYXRlKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0SGFzRGlzYWJsZURhdGUuZW1pdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VGltZVBpY2tlcjogZmFsc2UsXG4gICAgICB0aW1lUGlja2VyVGl0bGU6ICcnLFxuICAgICAgc3RhcnREYXRlOiB1bmRlZmluZWQsXG4gICAgICBlbmREYXRlOiB1bmRlZmluZWQsXG4gICAgICBkaXNDb25maXJtQnRuOiB0cnVlLFxuICAgICAgY2xpZW50SGlnaHQ6IDBcbiAgICB9IGFzIENhbGVuZGFyU3RhdGVUeXBlO1xuICAgIHRoaXMuc2hvd0NsZWFyID0gISF0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcbiAgfVxuXG4gIHRyaWdnZXJDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSAmJiArc3RhcnREYXRlID4gK2VuZERhdGUpIHtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIHRoaXMub25Db25maXJtICYmIHRoaXMub25Db25maXJtLmVtaXQoeyBzdGFydERhdGU6IGVuZERhdGUsIGVuZERhdGU6IHN0YXJ0RGF0ZSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Db25maXJtKSB7XG4gICAgICB0aGlzLm9uQ29uZmlybS5lbWl0KHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIHRyaWdnZXJDYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWwpIHtcbiAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICB9XG4gICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgaWYgKHRoaXMub25DYW5jZWwpIHtcbiAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJDbGVhciA9ICgpID0+IHtcbiAgICAvLyDmuIXpmaTmlbDmja7lgZrlu7bov5/vvIzlkKbliJnlkIzmraXliLfmlrDmlbDmja7lr7zoh7TmiqXplJlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLnsgc3RhcnREYXRlOiB1bmRlZmluZWQsIGVuZERhdGU6IHVuZGVmaW5lZCwgc2hvd1RpbWVQaWNrZXI6IGZhbHNlIH1cbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsZWFyKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGVhcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93Q2xlYXIgPSAhIXRoaXMuc3RhdGUuc3RhcnREYXRlO1xuICAgIH0sIDApO1xuICB9XG5cbiAgb25UaW1lQ2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5lbmREYXRlID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydERhdGUgPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIHNob3J0Y3V0U2VsZWN0ID0gKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSwgcHJvcHMgPSB0aGlzLnByb3BzKSA9PiB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi57IHN0YXJ0RGF0ZSwgc2hvd1RpbWVQaWNrZXI6IGZhbHNlIH0sXG4gICAgICAuLi50aGlzLnNlbGVjdERhdGUoZW5kRGF0ZSwgdHJ1ZSwgeyBzdGFydERhdGUgfSwgcHJvcHMpXG4gICAgfTtcbiAgICB0aGlzLnNob3dDbGVhciA9ICEhdGhpcy5zdGF0ZS5zdGFydERhdGU7XG4gIH1cblxuICBzZXRDbGllbnRIZWlnaHQgPSAoaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnN0YXRlLmNsaWVudEhpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udGhpcy5zZWxlY3REYXRlKGRlZmF1bHRWYWx1ZVsxXSwgdHJ1ZSwgeyBzdGFydERhdGU6IGRlZmF1bHRWYWx1ZVswXSB9LCB0aGlzLnByb3BzKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMucHJvcHMubG9jYWxlID0geyAuLi50aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlU3ViT2JqKCdDYWxlbmRhcicpIH0gYXMgRGF0ZU1vZGVscy5Mb2NhbGU7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkID0gKCkgPT4ge307XG59XG4iXX0=