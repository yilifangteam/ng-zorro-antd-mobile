import { OnInit, OnChanges, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import * as ɵngcc0 from '@angular/core';
export declare class DatePickerViewComponent extends DatePickerComponent implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor {
    mode: string;
    minDate: Date;
    maxDate: Date;
    value: Date;
    disabled: boolean;
    indicatorStyle: object;
    get locale(): any;
    set locale(value: any);
    showErrorToast: boolean;
    showErrorToastInterval: number;
    onValueChange: EventEmitter<any>;
    amPicker: boolean;
    reloadPicker(): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (_: Date) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    optionInit(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatePickerViewComponent, "DatePickerView, nzm-date-picker-view", never, { "mode": "mode"; "minDate": "minDate"; "maxDate": "maxDate"; "value": "value"; "disabled": "disabled"; "indicatorStyle": "indicatorStyle"; "showErrorToast": "showErrorToast"; "showErrorToastInterval": "showErrorToastInterval"; "locale": "locale"; }, { "onValueChange": "onValueChange"; }, never, never>;
}

//# sourceMappingURL=date-picker-view.component.d.ts.map