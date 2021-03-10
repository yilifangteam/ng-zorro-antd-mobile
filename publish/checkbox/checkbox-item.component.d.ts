import { EventEmitter, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CheckboxStatus } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class CheckboxItemComponent implements ControlValueAccessor {
    private cdr;
    prefixCls: string;
    checked: boolean;
    private _disabled;
    private _ngModelOnChange;
    private _ngModelOnTouched;
    name: string;
    value: string;
    arrow: string;
    extra: string | TemplateRef<any>;
    wrap: boolean;
    error: boolean;
    multipleLine: boolean;
    platform: string;
    align: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    onChange: EventEmitter<CheckboxStatus>;
    constructor(cdr: ChangeDetectorRef);
    onCheckboxClick(event: any): void;
    change(event: any): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckboxItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckboxItemComponent, "CheckboxItem, nzm-checkbox-item", never, { "wrap": "wrap"; "error": "error"; "multipleLine": "multipleLine"; "platform": "platform"; "align": "align"; "disabled": "disabled"; "name": "name"; "value": "value"; "arrow": "arrow"; "extra": "extra"; }, { "onChange": "onChange"; }, never, ["*"]>;
}

//# sourceMappingURL=checkbox-item.component.d.ts.map