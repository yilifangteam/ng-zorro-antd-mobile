import { OnInit, EventEmitter } from '@angular/core';
import { RadioStatus } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class RadioComponent implements OnInit {
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
    onChange: EventEmitter<RadioStatus>;
    radioWrapper: boolean;
    onClick(event: any): void;
    constructor();
    updateValue(checkValue: boolean): void;
    ngOnInit(): void;
    private updateClassMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RadioComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RadioComponent, "[Radio], [nzm-radio]", never, { "checked": "checked"; "disabled": "disabled"; "name": "name"; "value": "value"; }, { "onChange": "onChange"; }, never, ["*"]>;
}

//# sourceMappingURL=radio.component.d.ts.map