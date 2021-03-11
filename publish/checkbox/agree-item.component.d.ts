import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CheckboxStatus } from './PropsType';
export declare class AgreeItemComponent implements ControlValueAccessor {
    private cdr;
    prefixCls: string;
    checked: boolean;
    private _disabled;
    private _ngModelOnChange;
    private _ngModelOnTouched;
    name: string;
    value: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    onChange: EventEmitter<CheckboxStatus>;
    checkboxAgree: boolean;
    constructor(cdr: ChangeDetectorRef);
    change(event: any): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
}
