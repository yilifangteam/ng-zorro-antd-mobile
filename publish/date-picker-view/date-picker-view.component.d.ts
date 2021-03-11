import { OnInit, OnChanges, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
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
}
