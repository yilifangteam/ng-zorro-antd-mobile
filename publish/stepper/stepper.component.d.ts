import { EventEmitter, OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class StepperComponent implements OnChanges, ControlValueAccessor {
    prefixCls: string;
    upDisableCls: object;
    downDisableCls: object;
    stepperCls: object;
    private _max;
    private _min;
    private _value;
    private _step;
    private _defaultValue;
    private _disabled;
    private _readOnly;
    private _showNumber;
    private _upDisabled;
    private _downDisabled;
    private _isUpClick;
    private _isDownClick;
    get max(): number;
    set max(value: number);
    get min(): number;
    set min(value: number);
    get value(): number;
    set value(v: number);
    set step(value: any);
    set defaultValue(value: any);
    get disabled(): boolean;
    set disabled(value: boolean);
    get readOnly(): boolean;
    set readOnly(value: boolean);
    set showNumber(value: boolean);
    onChange: EventEmitter<any>;
    clsStepper: boolean;
    clsStpDisabled: boolean;
    clsShowNum: boolean;
    private onChangeFn;
    private onTouchFn;
    constructor();
    onIncrease(): void;
    onDecrease(): void;
    inputChange(event: any): void;
    setCls(): void;
    ngOnChanges(): void;
    writeValue(value: number): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: (value: number) => void): void;
    plus(num1: number, num2: number): number;
    minus(num1: number, num2: number): number;
    digitLength(num: number): number;
    times(num1: number, num2: number): number;
    floatToFixed(num: number): number;
    strip(num: number, precision?: number): number;
}
