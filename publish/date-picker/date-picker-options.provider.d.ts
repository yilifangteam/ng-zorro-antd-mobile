import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface DatePickerOptionsInterface {
    mode: string;
    value: Date;
    minDate: Date;
    maxDate: Date;
    use12Hours: boolean;
    minuteStep: Number;
    locale: any;
    disabled: boolean;
    mask: boolean;
    title: string;
    okText: string;
    dismissText: string;
    appendToBody: boolean;
    showErrorToast: boolean;
    showErrorToastInterval: number;
}
export declare class DatePickerOptions implements DatePickerOptionsInterface {
    mode: string;
    value: Date;
    minDate: Date;
    maxDate: Date;
    use12Hours: boolean;
    minuteStep: number;
    data: any[];
    mask: boolean;
    title: string;
    okText: string;
    dismissText: string;
    disabled: boolean;
    locale: any;
    appendToBody: boolean;
    showErrorToast: boolean;
    showErrorToastInterval: number;
    onOk: EventEmitter<any>;
    onDismiss: EventEmitter<any>;
    onValueChange: EventEmitter<any>;
    onChange: EventEmitter<any>;
    hidePicker: () => void;
    updateNgModel?: (value: Date) => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DatePickerOptions>;
}

//# sourceMappingURL=date-picker-options.provider.d.ts.map