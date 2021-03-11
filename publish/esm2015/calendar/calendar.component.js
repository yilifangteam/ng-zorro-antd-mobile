import { Component, forwardRef, ViewEncapsulation, Input, Output, HostBinding, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { mergeDateTime, isSameDate } from './util/index';
import { takeUntil } from 'rxjs/operators';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { Subject } from 'rxjs';
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
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'Calendar, nzm-calendar',
                template: "<span *ngIf=\"isShow\">\n  <div class=\"{{ 'mask ' + maskAnimateClass }}\"></div>\n</span>\n<span *ngIf=\"isShow\">\n  <div class=\"{{ 'content animate ' + contentAnimateClass }}\">\n    <CalendarHeader\n      [locale]=\"props.locale\"\n      [closeIcon]=\"closeIconHtml\"\n      [showClear]=\"showClear\"\n      (onCancel)=\"triggerCancel()\"\n      (onClear)=\"triggerClear()\"\n    ></CalendarHeader>\n    <CalendarDatePicker\n      [propsData]=\"props\"\n      [endDate]=\"state.endDate\"\n      [startDate]=\"state.startDate\"\n      [onCellClick]=\"onSelectedDate\"\n      [onSelectHasDisableDate]=\"triggerSelectHasDisableDate\"\n      [onLayout]=\"setClientHeight\"\n    ></CalendarDatePicker>\n    <CalendarTimePicker\n      *ngIf=\"state.showTimePicker\"\n      [propsData]=\"props\"\n      [title]=\"state.timePickerTitle\"\n      [clientHeight]=\"state.clientHight\"\n      [prefixCls]=\"props.timePickerPrefixCls\"\n      [defaultValue]=\"props.defaultTimeValue\"\n      [pickerPrefixCls]=\"props.timePickerPickerPrefixCls\"\n      [value]=\"state.endDate ? state.endDate : state.startDate\"\n      [onValueChange]=\"onTimeChange\"\n    ></CalendarTimePicker>\n    <CalendarShortcutPanel\n      *ngIf=\"props.showShortcut && !state.showTimePicker\"\n      [locale]=\"props.locale\"\n      [onSelect]=\"shortcutSelect\"\n    ></CalendarShortcutPanel>\n    <CalendarConfirmPanel\n      *ngIf=\"state.startDate\"\n      [propsData]=\"props\"\n      [startDateTime]=\"state.startDate\"\n      [endDateTime]=\"state.endDate\"\n      [disableBtn]=\"state.disConfirmBtn\"\n      [formatStr]=\"props.pickTime ? props.locale.dateTimeFormat : props.locale.dateFormat\"\n      [onConfirm]=\"triggerConfirm\"\n    ></CalendarConfirmPanel>\n  </div>\n</span>\n<ng-template #closeIconHtml>\n  <Icon [type]=\"'cross'\"></Icon>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBR1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sSUFBSSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xDLE9BQU8sSUFBSSxNQUFNLGdCQUFnQixDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBbUIvQixNQUFNLE9BQU8saUJBQWlCO0lBMEk1QixZQUFvQixzQkFBNkM7UUFBN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQXpJakUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBYSxVQUFVLENBQUM7UUFFbEMsVUFBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLGNBQWM7WUFDekIsSUFBSSxF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Z0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzNHOzs7WUF0QlEscUJBQXFCOzs7eUJBd0QzQixTQUFTLFNBQUMsMkJBQTJCO3FCQUdyQyxLQUFLOytCQVdMLEtBQUs7d0JBTUwsS0FBSzs2QkFNTCxLQUFLO3NCQVNMLEtBQUs7MkJBYUwsS0FBSzswQkFJTCxLQUFLO3NCQUlMLEtBQUs7c0JBSUwsS0FBSzt1QkFJTCxLQUFLO21CQUlMLEtBQUs7MkJBSUwsS0FBSztzQkFJTCxLQUFLO3VCQUlMLEtBQUs7MkJBRUwsS0FBSzt1QkFRTCxLQUFLO3VCQUtMLE1BQU07d0JBRU4sTUFBTTtxQ0FFTixNQUFNO29CQUdOLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVNb2RlbHMgfSBmcm9tICcuL2RhdGUvRGF0YVR5cGVzJztcbmltcG9ydCB6aENOIGZyb20gJy4vbG9jYWxlL3poX0NOJztcbmltcG9ydCBlblVTIGZyb20gJy4vbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IENhbGVuZGFyUHJvcHNUeXBlIH0gZnJvbSAnLi9jYWxlbmRhci5wcm9wcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IG1lcmdlRGF0ZVRpbWUsIGlzU2FtZURhdGUgfSBmcm9tICcuL3V0aWwvaW5kZXgnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHsgQ2FsZW5kYXJQcm9wc1R5cGUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhclN0YXRlVHlwZSB7XG4gIHNob3dUaW1lUGlja2VyOiBib29sZWFuO1xuICB0aW1lUGlja2VyVGl0bGU/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IERhdGU7XG4gIGVuZERhdGU/OiBEYXRlO1xuICBkaXNDb25maXJtQnRuPzogYm9vbGVhbjtcbiAgY2xpZW50SGlnaHQ/OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyLCBuem0tY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnRlbnRBbmltYXRlQ2xhc3M6IHN0cmluZztcbiAgbWFza0FuaW1hdGVDbGFzczogc3RyaW5nO1xuICBzaG93Q2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTYW1lRGF0ZTogRnVuY3Rpb24gPSBpc1NhbWVEYXRlO1xuXG4gIHByb3BzID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgbG9jYWxlOiB6aENOLFxuICAgIHBpY2tUaW1lOiBmYWxzZSxcbiAgICBzaG93U2hvcnRjdXQ6IGZhbHNlLFxuICAgIHByZWZpeENsczogJ3JtYy1jYWxlbmRhcicsXG4gICAgdHlwZTogJ3JhbmdlJyxcbiAgICBkZWZhdWx0VGltZVZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAwLCAxLCA4KVxuICB9IGFzIENhbGVuZGFyUHJvcHNUeXBlO1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dUaW1lUGlja2VyOiBmYWxzZSxcbiAgICB0aW1lUGlja2VyVGl0bGU6ICcnLFxuICAgIHN0YXJ0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGVuZERhdGU6IHVuZGVmaW5lZCxcbiAgICBkaXNDb25maXJtQnRuOiB0cnVlLFxuICAgIGNsaWVudEhpZ2h0OiAwXG4gIH0gYXMgQ2FsZW5kYXJTdGF0ZVR5cGU7XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfZW50ZXJEaXJlY3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0ZU1vZGVsVHlwZTogbnVtYmVyO1xuICBwcml2YXRlIF9kYXRlTW9kZWxWYWx1ZTogYW55O1xuICBwcml2YXRlIF9kYXRlTW9kZWxUaW1lOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50KVxuICBkYXRlcGlja2VyOiBDYWxlbmRhckRhdGVQaWNrZXJDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2VuVVMnKSB7XG4gICAgICB0aGlzLnByb3BzLmxvY2FsZSA9IGVuVVM7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3poQ04nKSB7XG4gICAgICB0aGlzLnByb3BzLmxvY2FsZSA9IHpoQ047XG4gICAgfVxuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFRpbWVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VGltZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwcmVmaXhDbHModmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMucHJlZml4Q2xzID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBlbnRlckRpcmVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2VudGVyRGlyZWN0aW9uID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VudGVyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuY29udGVudEFuaW1hdGVDbGFzcyA9ICdzbGlkZUgtZW50ZXIgc2xpZGVILWVudGVyLWFjdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGVudEFuaW1hdGVDbGFzcyA9ICdzbGlkZVYtZW50ZXIgc2xpZGVWLWVudGVyLWFjdGl2ZSc7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy52aXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuc2hvd0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVBbmltYXRpb24oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGdldERhdGVFeHRyYSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZ2V0RGF0ZUV4dHJhID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5kZWZhdWx0RGF0ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtaW5EYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5taW5EYXRlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1heERhdGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm1heERhdGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGlja1RpbWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnBpY2tUaW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnR5cGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2hvd1Nob3J0Y3V0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5zaG93U2hvcnRjdXQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcm93U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMucm93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmZpbml0ZSh2YWx1ZSkge31cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb25TZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdEhhc0Rpc2FibGVEYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzczogc3RyaW5nID0gJ2FtLWNhbGVuZGFyJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgQXJyYXk8RGF0ZT4gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IG51bGw7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW25nLXpvcnJvLWFudGQtbW9iaWxlXTogY2FsZW5kYXIgbmdNb2RlbCBhcnJheSBuZWVkIHBhcmFtcyEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ29uZScgJiYgdmFsdWUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZy16b3Jyby1hbnRkLW1vYmlsZV06IHR5cGUgaXMgb25lLCBidXQgbmdtb2RlbCBoYXMgbW9yZSB0aGFuIG9uZSBwYXJhbSwganVzdCB1c2UgZmlyc3Qgb25lJyk7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDE7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDI7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGUodmFsdWVbMF0pO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlKHZhbHVlWzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVHlwZSA9IDM7XG4gICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XG4gIH1cblxuICByZWNlaXZlUHJvcHMobmV4dFByb3BzOiBDYWxlbmRhclByb3BzVHlwZSkge1xuICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAmJiBuZXh0UHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLnNob3J0Y3V0U2VsZWN0KG5leHRQcm9wcy5kZWZhdWx0VmFsdWVbMF0sIG5leHRQcm9wcy5kZWZhdWx0VmFsdWVbMV0sIG5leHRQcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW50ZXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlSC1lbnRlciBzbGlkZUgtZW50ZXItYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlVi1lbnRlciBzbGlkZVYtZW50ZXItYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5tYXNrQW5pbWF0ZUNsYXNzID0gJ2ZhZGUtZW50ZXIgZmFkZS1lbnRlci1hY3RpdmUnO1xuICB9XG5cbiAgaGlkZUFuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW50ZXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlSC1sZWF2ZSBzbGlkZUgtbGVhdmUtYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50QW5pbWF0ZUNsYXNzID0gJ3NsaWRlVi1sZWF2ZSBzbGlkZVYtbGVhdmUtYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5tYXNrQW5pbWF0ZUNsYXNzID0gJ2ZhZGUtbGVhdmUgZmFkZS1sZWF2ZS1hY3RpdmUnO1xuICB9XG5cbiAgc2VsZWN0RGF0ZSA9IChcbiAgICBkYXRlOiBEYXRlLFxuICAgIHVzZURhdGVUaW1lID0gZmFsc2UsXG4gICAgb2xkU3RhdGU6IHsgc3RhcnREYXRlPzogRGF0ZTsgZW5kRGF0ZT86IERhdGUgfSA9IHt9LFxuICAgIHByb3BzID0gdGhpcy5wcm9wc1xuICApID0+IHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiB7fSBhcyBDYWxlbmRhclN0YXRlVHlwZTtcbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0ge30gYXMgQ2FsZW5kYXJTdGF0ZVR5cGU7XG4gICAgY29uc3QgeyB0eXBlLCBwaWNrVGltZSwgZGVmYXVsdFRpbWVWYWx1ZSwgbG9jYWxlID0ge30gYXMgRGF0ZU1vZGVscy5Mb2NhbGUgfSA9IHByb3BzO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBwaWNrVGltZSAmJiAhdXNlRGF0ZVRpbWUgPyBtZXJnZURhdGVUaW1lKGRhdGUsIGRlZmF1bHRUaW1lVmFsdWUpIDogZGF0ZTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gb2xkU3RhdGU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ29uZSc6XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3RGF0ZSxcbiAgICAgICAgICBkaXNDb25maXJtQnRuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBpZiAocGlja1RpbWUpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgdGltZVBpY2tlclRpdGxlOiBsb2NhbGUuc2VsZWN0VGltZSxcbiAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICBpZiAoIXN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRpc0NvbmZpcm1CdG46IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChwaWNrVGltZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgICB0aW1lUGlja2VyVGl0bGU6IGxvY2FsZS5zZWxlY3RTdGFydFRpbWUsXG4gICAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgdGltZVBpY2tlclRpdGxlOlxuICAgICAgICAgICAgICArbmV3RGF0ZSA+PSArc3RhcnREYXRlIHx8IHRoaXMuaXNTYW1lRGF0ZShzdGFydERhdGUsIG5ld0RhdGUpXG4gICAgICAgICAgICAgICAgPyBsb2NhbGUuc2VsZWN0RW5kVGltZVxuICAgICAgICAgICAgICAgIDogbG9jYWxlLnNlbGVjdFN0YXJ0VGltZSxcbiAgICAgICAgICAgIGRpc0NvbmZpcm1CdG46IGZhbHNlLFxuICAgICAgICAgICAgZW5kRGF0ZTpcbiAgICAgICAgICAgICAgcGlja1RpbWUgJiYgIXVzZURhdGVUaW1lICYmICgrbmV3RGF0ZSA+PSArc3RhcnREYXRlIHx8IHRoaXMuaXNTYW1lRGF0ZShzdGFydERhdGUsIG5ld0RhdGUpKVxuICAgICAgICAgICAgICAgID8gbmV3IERhdGUoK21lcmdlRGF0ZVRpbWUobmV3RGF0ZSwgc3RhcnREYXRlKSArIDM2MDAwMDApXG4gICAgICAgICAgICAgICAgOiBuZXdEYXRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLndyaXRlTW9kZWxEYXRhKGRhdGUpO1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIHdyaXRlTW9kZWxEYXRhKGRhdGUpIHtcbiAgICBpZiAodGhpcy5fZGF0ZU1vZGVsVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVGltZSA9IHRoaXMuX2RhdGVNb2RlbFZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0ZU1vZGVsVGltZSA9IDA7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9kYXRlTW9kZWxUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlID0gW2RhdGVdO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy5fZGF0ZU1vZGVsVmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVNb2RlbFRpbWUgPT09IDEpIHtcbiAgICAgICAgICBpZiAoK2RhdGUgPCArdGhpcy5fZGF0ZU1vZGVsVmFsdWVbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlLnVuc2hpZnQoZGF0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVNb2RlbFZhbHVlLnB1c2goZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLl9kYXRlTW9kZWxWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZU1vZGVsVmFsdWUgPSBbXTtcbiAgICAgICAgICB0aGlzLl9kYXRlTW9kZWxWYWx1ZS5wdXNoKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLl9kYXRlTW9kZWxWYWx1ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLl9kYXRlTW9kZWxWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RlZERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25TZWxlY3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb25TZWxlY3QoZGF0ZSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2hvcnRjdXRTZWxlY3QodmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4udGhpcy5zZWxlY3REYXRlKGRhdGUsIGZhbHNlLCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KVxuICAgIH07XG5cbiAgICB0aGlzLnNob3dDbGVhciA9ICEhdGhpcy5zdGF0ZS5zdGFydERhdGU7XG4gIH1cblxuICB0cmlnZ2VyU2VsZWN0SGFzRGlzYWJsZURhdGUgPSAoZGF0ZTogRGF0ZVtdKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VyQ2xlYXIoKTtcbiAgICBpZiAodGhpcy5vblNlbGVjdEhhc0Rpc2FibGVEYXRlKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0SGFzRGlzYWJsZURhdGUuZW1pdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VGltZVBpY2tlcjogZmFsc2UsXG4gICAgICB0aW1lUGlja2VyVGl0bGU6ICcnLFxuICAgICAgc3RhcnREYXRlOiB1bmRlZmluZWQsXG4gICAgICBlbmREYXRlOiB1bmRlZmluZWQsXG4gICAgICBkaXNDb25maXJtQnRuOiB0cnVlLFxuICAgICAgY2xpZW50SGlnaHQ6IDBcbiAgICB9IGFzIENhbGVuZGFyU3RhdGVUeXBlO1xuICAgIHRoaXMuc2hvd0NsZWFyID0gISF0aGlzLnN0YXRlLnN0YXJ0RGF0ZTtcbiAgfVxuXG4gIHRyaWdnZXJDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSAmJiArc3RhcnREYXRlID4gK2VuZERhdGUpIHtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIHRoaXMub25Db25maXJtICYmIHRoaXMub25Db25maXJtLmVtaXQoeyBzdGFydERhdGU6IGVuZERhdGUsIGVuZERhdGU6IHN0YXJ0RGF0ZSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Db25maXJtKSB7XG4gICAgICB0aGlzLm9uQ29uZmlybS5lbWl0KHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIHRyaWdnZXJDYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWwpIHtcbiAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICB9XG4gICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgaWYgKHRoaXMub25DYW5jZWwpIHtcbiAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJDbGVhciA9ICgpID0+IHtcbiAgICAvLyDmuIXpmaTmlbDmja7lgZrlu7bov5/vvIzlkKbliJnlkIzmraXliLfmlrDmlbDmja7lr7zoh7TmiqXplJlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLnsgc3RhcnREYXRlOiB1bmRlZmluZWQsIGVuZERhdGU6IHVuZGVmaW5lZCwgc2hvd1RpbWVQaWNrZXI6IGZhbHNlIH1cbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsZWFyKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGVhcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93Q2xlYXIgPSAhIXRoaXMuc3RhdGUuc3RhcnREYXRlO1xuICAgIH0sIDApO1xuICB9XG5cbiAgb25UaW1lQ2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5lbmREYXRlID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydERhdGUgPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIHNob3J0Y3V0U2VsZWN0ID0gKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSwgcHJvcHMgPSB0aGlzLnByb3BzKSA9PiB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi57IHN0YXJ0RGF0ZSwgc2hvd1RpbWVQaWNrZXI6IGZhbHNlIH0sXG4gICAgICAuLi50aGlzLnNlbGVjdERhdGUoZW5kRGF0ZSwgdHJ1ZSwgeyBzdGFydERhdGUgfSwgcHJvcHMpXG4gICAgfTtcbiAgICB0aGlzLnNob3dDbGVhciA9ICEhdGhpcy5zdGF0ZS5zdGFydERhdGU7XG4gIH1cblxuICBzZXRDbGllbnRIZWlnaHQgPSAoaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnN0YXRlLmNsaWVudEhpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udGhpcy5zZWxlY3REYXRlKGRlZmF1bHRWYWx1ZVsxXSwgdHJ1ZSwgeyBzdGFydERhdGU6IGRlZmF1bHRWYWx1ZVswXSB9LCB0aGlzLnByb3BzKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIHRoaXMucHJvcHMubG9jYWxlID0geyAuLi50aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlU3ViT2JqKCdDYWxlbmRhcicpIH0gYXMgRGF0ZU1vZGVscy5Mb2NhbGU7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoZGF0ZTogRGF0ZSB8IEFycmF5PERhdGU+KSA9PiB2b2lkID0gKCkgPT4ge307XG59XG4iXX0=