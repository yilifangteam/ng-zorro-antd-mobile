import { OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { ControlValueAccessor } from '@angular/forms';
export declare class PickerViewComponent extends PickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
    options: any;
    data: Array<any>;
    cols: number;
    cascade: boolean;
    indicatorStyle: object;
    itemStyle: object;
    pickerViewInit(): void;
    init(): void;
    writeValue(value: any[]): void;
    registerOnChange(fn: (_: any[]) => void): void;
    registerOnTouched(fn: any[]): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
