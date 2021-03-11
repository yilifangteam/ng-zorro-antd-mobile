import { CalendarTimePickerPropsType } from './PropsType';
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
}
