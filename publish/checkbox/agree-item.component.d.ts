import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CheckboxStatus } from './PropsType';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgreeItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgreeItemComponent, "AgreeItem, nzm-agree-item", never, { "disabled": "disabled"; "name": "name"; "value": "value"; }, { "onChange": "onChange"; }, never, ["*"]>;
}

//# sourceMappingURL=agree-item.component.d.ts.map