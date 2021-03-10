import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { zh_CN, en_US } from '../../locale-provider/locale';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../date-picker-view/date-picker-view.component';
import * as ɵngcc2 from '@angular/common';

const _c0 = function (a0) { return { height: a0, overflow: "hidden" }; };
export class CalendarTimePickerComponent {
    constructor() {
        this.defaultProps = {
            minDate: new Date(0, 0, 0, 0, 0),
            maxDate: new Date(9999, 11, 31, 23, 59, 59),
            defaultValue: new Date(2000, 1, 1, 8),
            mode: 'time',
            datePickerViewLocale: zh_CN
        };
        this.props = {
            minDate: new Date(0, 0, 0, 0, 0),
            maxDate: new Date(9999, 11, 31, 23, 59, 59),
            defaultValue: new Date(2000, 1, 1, 8),
            mode: 'time',
            datePickerViewLocale: zh_CN
        };
        this.timePicker = true;
        this.onDateChange = (date) => {
            const { onValueChange } = this.props;
            if (onValueChange) {
                onValueChange(date.date);
            }
        };
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
        if (this.props.locale && this.props.locale.today === 'Today') {
            this.props.datePickerViewLocale = en_US;
        }
        else {
            this.props.datePickerViewLocale = zh_CN;
        }
    }
    set title(value) {
        this.props.title = value;
    }
    set value(value) {
        this.props.value = value;
    }
    set prefixCls(value) {
        this.props.prefixCls = value;
    }
    set defaultValue(value) {
        this.props.defaultValue = value;
    }
    set pickerPrefixCls(value) {
        this.props.pickerPrefixCls = value;
    }
    set clientHeight(value) {
        this.props.clientHeight = value;
        const height = (value && (value * 3) / 8 - 52) || Number.POSITIVE_INFINITY;
        this.selfHeight = (height > 164 || height < 0 ? 164 : height) + 'px';
    }
    set onValueChange(value) {
        this.props.onValueChange = value;
    }
    getMinTime(date) {
        const minDate = this.props.minDate;
        if (!date ||
            date.getFullYear() > minDate.getFullYear() ||
            date.getMonth() > minDate.getMonth() ||
            date.getDate() > minDate.getDate()) {
            return this.defaultProps.minDate;
        }
        return minDate;
    }
    getMaxTime(date) {
        const maxDate = this.props.maxDate;
        if (!date ||
            date.getFullYear() < maxDate.getFullYear() ||
            date.getMonth() < maxDate.getMonth() ||
            date.getDate() < maxDate.getDate()) {
            return this.defaultProps.maxDate;
        }
        return maxDate;
    }
}
CalendarTimePickerComponent.ɵfac = function CalendarTimePickerComponent_Factory(t) { return new (t || CalendarTimePickerComponent)(); };
CalendarTimePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarTimePickerComponent, selectors: [["CalendarTimePicker"], ["nzm-calendar-time-picker"]], hostVars: 2, hostBindings: function CalendarTimePickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("time-picker", ctx.timePicker);
    } }, inputs: { propsData: "propsData", title: "title", value: "value", prefixCls: "prefixCls", defaultValue: "defaultValue", pickerPrefixCls: "pickerPrefixCls", clientHeight: "clientHeight", onValueChange: "onValueChange" }, decls: 3, vars: 9, consts: [[1, "title"], [3, "ngStyle", "mode", "value", "locale", "minDate", "maxDate", "onValueChange"]], template: function CalendarTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "DatePickerView", 1);
        ɵngcc0.ɵɵlistener("onValueChange", function CalendarTimePickerComponent_Template_DatePickerView_onValueChange_2_listener($event) { return ctx.onDateChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.props.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.selfHeight))("mode", ctx.props.mode)("value", ctx.props.value)("locale", ctx.props.datePickerViewLocale)("minDate", ctx.getMinTime(ctx.props.value || ctx.props.defaultValue || undefined))("maxDate", ctx.getMaxTime(ctx.props.value || ctx.props.defaultValue || undefined));
    } }, directives: [ɵngcc1.DatePickerViewComponent, ɵngcc2.NgStyle], encapsulation: 2 });
CalendarTimePickerComponent.ctorParameters = () => [];
CalendarTimePickerComponent.propDecorators = {
    propsData: [{ type: Input }],
    title: [{ type: Input }],
    value: [{ type: Input }],
    prefixCls: [{ type: Input }],
    defaultValue: [{ type: Input }],
    pickerPrefixCls: [{ type: Input }],
    clientHeight: [{ type: Input }],
    onValueChange: [{ type: Input }],
    timePicker: [{ type: HostBinding, args: ['class.time-picker',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarTimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarTimePicker, nzm-calendar-time-picker',
                template: "<div class=\"title\">{{ props.title }}</div>\n<DatePickerView\n  [ngStyle]=\"{ height: selfHeight, overflow: 'hidden' }\"\n  [mode]=\"props.mode\"\n  [value]=\"props.value\"\n  [locale]=\"props.datePickerViewLocale\"\n  [minDate]=\"getMinTime(props.value || props.defaultValue || undefined)\"\n  [maxDate]=\"getMaxTime(props.value || props.defaultValue || undefined)\"\n  (onValueChange)=\"onDateChange($event)\"\n></DatePickerView>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { timePicker: [{
            type: HostBinding,
            args: ['class.time-picker']
        }], propsData: [{
            type: Input
        }], title: [{
            type: Input
        }], value: [{
            type: Input
        }], prefixCls: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], pickerPrefixCls: [{
            type: Input
        }], clientHeight: [{
            type: Input
        }], onValueChange: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FsZW5kYXIvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBUTVELE1BQU0sT0FBTywyQkFBMkI7QUFDeEMsSUFpRUU7QUFBZ0IsUUFqRWhCLGlCQUFZLEdBQUc7QUFDakIsWUFBSSxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQyxZQUFJLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMvQyxZQUFJLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekMsWUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixZQUFJLG9CQUFvQixFQUFFLEtBQUs7QUFDL0IsU0FBa0MsQ0FBQztBQUNuQyxRQUNFLFVBQUssR0FBRztBQUNWLFlBQUksT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEMsWUFBSSxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDL0MsWUFBSSxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMs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Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aF9DTiwgZW5fVVMgfSBmcm9tICcuLi8uLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlJztcbmltcG9ydCB7IENhbGVuZGFyVGltZVBpY2tlclByb3BzVHlwZSB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJUaW1lUGlja2VyLCBuem0tY2FsZW5kYXItdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUaW1lUGlja2VyQ29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDApLFxuICAgIG1heERhdGU6IG5ldyBEYXRlKDk5OTksIDExLCAzMSwgMjMsIDU5LCA1OSksXG4gICAgZGVmYXVsdFZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxLCA4KSxcbiAgICBtb2RlOiAndGltZScsXG4gICAgZGF0ZVBpY2tlclZpZXdMb2NhbGU6IHpoX0NOXG4gIH0gYXMgQ2FsZW5kYXJUaW1lUGlja2VyUHJvcHNUeXBlO1xuXG4gIHByb3BzID0ge1xuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDApLFxuICAgIG1heERhdGU6IG5ldyBEYXRlKDk5OTksIDExLCAzMSwgMjMsIDU5LCA1OSksXG4gICAgZGVmYXVsdFZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxLCA4KSxcbiAgICBtb2RlOiAndGltZScsXG4gICAgZGF0ZVBpY2tlclZpZXdMb2NhbGU6IHpoX0NOXG4gIH0gYXMgQ2FsZW5kYXJUaW1lUGlja2VyUHJvcHNUeXBlO1xuXG4gIHNlbGZIZWlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgcHJvcHNEYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5sb2NhbGUgJiYgdGhpcy5wcm9wcy5sb2NhbGUudG9kYXkgPT09ICdUb2RheScpIHtcbiAgICAgIHRoaXMucHJvcHMuZGF0ZVBpY2tlclZpZXdMb2NhbGUgPSBlbl9VUztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kYXRlUGlja2VyVmlld0xvY2FsZSA9IHpoX0NOO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnRpdGxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwcmVmaXhDbHModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnByZWZpeENscyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwaWNrZXJQcmVmaXhDbHModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnBpY2tlclByZWZpeENscyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjbGllbnRIZWlnaHQodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmNsaWVudEhlaWdodCA9IHZhbHVlO1xuICAgIGNvbnN0IGhlaWdodCA9ICh2YWx1ZSAmJiAodmFsdWUgKiAzKSAvIDggLSA1MikgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHRoaXMuc2VsZkhlaWdodCA9IChoZWlnaHQgPiAxNjQgfHwgaGVpZ2h0IDwgMCA/IDE2NCA6IGhlaWdodCkgKyAncHgnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvblZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRpbWUtcGlja2VyJylcbiAgdGltZVBpY2tlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uRGF0ZUNoYW5nZSA9IChkYXRlOiB7IGRhdGU6IERhdGU7IGluZGV4OiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25WYWx1ZUNoYW5nZSkge1xuICAgICAgb25WYWx1ZUNoYW5nZShkYXRlLmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1pblRpbWUoZGF0ZT86IERhdGUpIHtcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5wcm9wcy5taW5EYXRlIGFzIERhdGU7XG4gICAgaWYgKFxuICAgICAgIWRhdGUgfHxcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA+IG1pbkRhdGUuZ2V0RnVsbFllYXIoKSB8fFxuICAgICAgZGF0ZS5nZXRNb250aCgpID4gbWluRGF0ZS5nZXRNb250aCgpIHx8XG4gICAgICBkYXRlLmdldERhdGUoKSA+IG1pbkRhdGUuZ2V0RGF0ZSgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJvcHMubWluRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbkRhdGU7XG4gIH1cblxuICBnZXRNYXhUaW1lKGRhdGU/OiBEYXRlKSB7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMucHJvcHMubWF4RGF0ZSBhcyBEYXRlO1xuICAgIGlmIChcbiAgICAgICFkYXRlIHx8XG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPCBtYXhEYXRlLmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSA8IG1heERhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgZGF0ZS5nZXREYXRlKCkgPCBtYXhEYXRlLmdldERhdGUoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLm1heERhdGU7XG4gICAgfVxuICAgIHJldHVybiBtYXhEYXRlO1xuICB9XG59XG4iXX0=