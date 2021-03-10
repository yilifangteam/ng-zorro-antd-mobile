import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class RadioItemComponent {
    private cdr;
    select$: Subject<RadioItemComponent>;
    prefixCls: string;
    private _checked;
    private _disabled;
    get checked(): boolean;
    set checked(value: boolean);
    name: string;
    value: string;
    arrow: string;
    thumb: string | TemplateRef<any>;
    wrap: boolean;
    error: boolean;
    multipleLine: boolean;
    platform: string;
    align: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    constructor(cdr: ChangeDetectorRef);
    onRadioItemClick(event: any): void;
    change(event: any): void;
    markForCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RadioItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RadioItemComponent, "RadioItem, nzm-radio-item", never, { "wrap": "wrap"; "error": "error"; "multipleLine": "multipleLine"; "platform": "platform"; "align": "align"; "disabled": "disabled"; "name": "name"; "value": "value"; "arrow": "arrow"; "thumb": "thumb"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=radio-item.component.d.ts.map