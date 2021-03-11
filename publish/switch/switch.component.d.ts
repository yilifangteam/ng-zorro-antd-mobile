import { EventEmitter } from '@angular/core';
export declare class SwitchComponent {
    prefixCls: string;
    wrapCls: string;
    checkboxCls: {
        'checkbox-disabled': boolean;
        'checkbox-active': boolean;
        'checkbox-inactive': boolean;
    };
    colorStyle: {};
    switchChecked: boolean;
    private _color;
    private _disabled;
    private onChanged;
    private onTouched;
    set color(value: any);
    name: string;
    set platform(value: string);
    set checked(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    onChange: EventEmitter<boolean>;
    onClick: EventEmitter<boolean>;
    dispaly: boolean;
    constructor();
    changeSwitch(checkedValue: any): void;
    click(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
}
