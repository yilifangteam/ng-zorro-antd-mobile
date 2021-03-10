import * as ɵngcc0 from '@angular/core';
export declare type PositionType = 'normal' | 'fixed';
export declare class ProgressComponent {
    prefixCls: string;
    private _percent;
    private _exceedance;
    unfilled: boolean;
    position: PositionType;
    barStyle: object;
    get percent(): number;
    set percent(value: number);
    max: number;
    get value(): number;
    amProgress: boolean;
    outer: boolean;
    get fixOuter(): boolean;
    get hideOuter(): boolean;
    get exceedance(): boolean;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProgressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProgressComponent, "Progress, nzm-progress", never, { "unfilled": "unfilled"; "position": "position"; "barStyle": "barStyle"; "percent": "percent"; }, {}, never, never>;
}

//# sourceMappingURL=progress.component.d.ts.map