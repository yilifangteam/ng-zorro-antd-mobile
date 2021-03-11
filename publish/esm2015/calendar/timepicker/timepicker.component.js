import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { zh_CN, en_US } from '../../locale-provider/locale';
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
CalendarTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarTimePicker, nzm-calendar-time-picker',
                template: "<div class=\"title\">{{ props.title }}</div>\n<DatePickerView\n  [ngStyle]=\"{ height: selfHeight, overflow: 'hidden' }\"\n  [mode]=\"props.mode\"\n  [value]=\"props.value\"\n  [locale]=\"props.datePickerViewLocale\"\n  [minDate]=\"getMinTime(props.value || props.defaultValue || undefined)\"\n  [maxDate]=\"getMaxTime(props.value || props.defaultValue || undefined)\"\n  (onValueChange)=\"onDateChange($event)\"\n></DatePickerView>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRNUQsTUFBTSxPQUFPLDJCQUEyQjtJQWtFdEM7UUFqRUEsaUJBQVksR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMzQyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksRUFBRSxNQUFNO1lBQ1osb0JBQW9CLEVBQUUsS0FBSztTQUNHLENBQUM7UUFFakMsVUFBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzNDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckMsSUFBSSxFQUFF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QUFFLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUNsQztZQUNBLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDbEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUF4R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELDhiQUEwQztnQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7d0JBb0JFLEtBQUs7b0JBYUwsS0FBSztvQkFJTCxLQUFLO3dCQUlMLEtBQUs7MkJBSUwsS0FBSzs4QkFJTCxLQUFLOzJCQUlMLEtBQUs7NEJBTUwsS0FBSzt5QkFLTCxXQUFXLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aF9DTiwgZW5fVVMgfSBmcm9tICcuLi8uLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlJztcbmltcG9ydCB7IENhbGVuZGFyVGltZVBpY2tlclByb3BzVHlwZSB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJUaW1lUGlja2VyLCBuem0tY2FsZW5kYXItdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUaW1lUGlja2VyQ29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDApLFxuICAgIG1heERhdGU6IG5ldyBEYXRlKDk5OTksIDExLCAzMSwgMjMsIDU5LCA1OSksXG4gICAgZGVmYXVsdFZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxLCA4KSxcbiAgICBtb2RlOiAndGltZScsXG4gICAgZGF0ZVBpY2tlclZpZXdMb2NhbGU6IHpoX0NOXG4gIH0gYXMgQ2FsZW5kYXJUaW1lUGlja2VyUHJvcHNUeXBlO1xuXG4gIHByb3BzID0ge1xuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDApLFxuICAgIG1heERhdGU6IG5ldyBEYXRlKDk5OTksIDExLCAzMSwgMjMsIDU5LCA1OSksXG4gICAgZGVmYXVsdFZhbHVlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxLCA4KSxcbiAgICBtb2RlOiAndGltZScsXG4gICAgZGF0ZVBpY2tlclZpZXdMb2NhbGU6IHpoX0NOXG4gIH0gYXMgQ2FsZW5kYXJUaW1lUGlja2VyUHJvcHNUeXBlO1xuXG4gIHNlbGZIZWlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgcHJvcHNEYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5sb2NhbGUgJiYgdGhpcy5wcm9wcy5sb2NhbGUudG9kYXkgPT09ICdUb2RheScpIHtcbiAgICAgIHRoaXMucHJvcHMuZGF0ZVBpY2tlclZpZXdMb2NhbGUgPSBlbl9VUztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kYXRlUGlja2VyVmlld0xvY2FsZSA9IHpoX0NOO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnRpdGxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwcmVmaXhDbHModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnByZWZpeENscyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwaWNrZXJQcmVmaXhDbHModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnBpY2tlclByZWZpeENscyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjbGllbnRIZWlnaHQodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmNsaWVudEhlaWdodCA9IHZhbHVlO1xuICAgIGNvbnN0IGhlaWdodCA9ICh2YWx1ZSAmJiAodmFsdWUgKiAzKSAvIDggLSA1MikgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHRoaXMuc2VsZkhlaWdodCA9IChoZWlnaHQgPiAxNjQgfHwgaGVpZ2h0IDwgMCA/IDE2NCA6IGhlaWdodCkgKyAncHgnO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvblZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRpbWUtcGlja2VyJylcbiAgdGltZVBpY2tlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uRGF0ZUNoYW5nZSA9IChkYXRlOiB7IGRhdGU6IERhdGU7IGluZGV4OiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25WYWx1ZUNoYW5nZSkge1xuICAgICAgb25WYWx1ZUNoYW5nZShkYXRlLmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1pblRpbWUoZGF0ZT86IERhdGUpIHtcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5wcm9wcy5taW5EYXRlIGFzIERhdGU7XG4gICAgaWYgKFxuICAgICAgIWRhdGUgfHxcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA+IG1pbkRhdGUuZ2V0RnVsbFllYXIoKSB8fFxuICAgICAgZGF0ZS5nZXRNb250aCgpID4gbWluRGF0ZS5nZXRNb250aCgpIHx8XG4gICAgICBkYXRlLmdldERhdGUoKSA+IG1pbkRhdGUuZ2V0RGF0ZSgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJvcHMubWluRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbkRhdGU7XG4gIH1cblxuICBnZXRNYXhUaW1lKGRhdGU/OiBEYXRlKSB7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMucHJvcHMubWF4RGF0ZSBhcyBEYXRlO1xuICAgIGlmIChcbiAgICAgICFkYXRlIHx8XG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPCBtYXhEYXRlLmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSA8IG1heERhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgZGF0ZS5nZXREYXRlKCkgPCBtYXhEYXRlLmdldERhdGUoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLm1heERhdGU7XG4gICAgfVxuICAgIHJldHVybiBtYXhEYXRlO1xuICB9XG59XG4iXX0=