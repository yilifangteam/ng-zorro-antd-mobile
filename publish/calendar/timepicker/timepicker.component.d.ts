import { CalendarTimePickerPropsType } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarTimePickerComponent {
    defaultProps: CalendarTimePickerPropsType;
    props: CalendarTimePickerPropsType;
    selfHeight: string;
    set propsData(value: any);
    set title(value: any);
    set value(value: any);
    set prefixCls(value: any);
    set defaultValue(value: any);
    set pickerPrefixCls(value: any);
    set clientHeight(value: any);
    set onValueChange(value: any);
    timePicker: boolean;
    constructor();
    onDateChange: (date: {
        date: Date;
        index: number;
    }) => void;
    getMinTime(date?: Date): Date;
    getMaxTime(date?: Date): Date;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarTimePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarTimePickerComponent, "CalendarTimePicker, nzm-calendar-time-picker", never, { "propsData": "propsData"; "title": "title"; "value": "value"; "prefixCls": "prefixCls"; "defaultValue": "defaultValue"; "pickerPrefixCls": "pickerPrefixCls"; "clientHeight": "clientHeight"; "onValueChange": "onValueChange"; }, {}, never, never>;
}

//# sourceMappingURL=timepicker.component.d.ts.map