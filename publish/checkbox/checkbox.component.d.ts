import { OnInit, EventEmitter } from '@angular/core';
import { CheckboxOnChangeEvent } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class CheckboxComponent implements OnInit {
    prefixCls: string;
    classMap: object;
    private _checked;
    private _disabled;
    name: string;
    value: string;
    get checked(): boolean;
    set checked(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    onChange: EventEmitter<CheckboxOnChangeEvent>;
    checkBoxWrapper: boolean;
    onClick(event: any): void;
    constructor();
    updateValue(value: boolean): void;
    ngOnInit(): void;
    private updateClassMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckboxComponent, "[Checkbox], [nzm-checkbox]", never, { "checked": "checked"; "disabled": "disabled"; "name": "name"; "value": "value"; }, { "onChange": "onChange"; }, never, ["*"]>;
}

//# sourceMappingURL=checkbox.component.d.ts.map