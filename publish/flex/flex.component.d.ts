import * as ɵngcc0 from '@angular/core';
export declare class FlexComponent {
    defaultProps: {
        prefixCls: string;
        align: string;
    };
    private _direction;
    private _wrap;
    private _justify;
    private _alignContent;
    set direction(value: any);
    set wrap(value: any);
    set justify(value: any);
    set align(value: any);
    set alignContent(value: any);
    amFlexbox: boolean;
    get amFlexboxDirRow(): boolean;
    get amFlexboxDirRowReverse(): boolean;
    get amFlexboxDirColumn(): boolean;
    get amFlexboxDirColumnReverse(): boolean;
    get amFlexboxNowrap(): boolean;
    get amFlexboxWrap(): boolean;
    get amFlexboxWrapReverse(): boolean;
    get amFlexboxJustifyStart(): boolean;
    get amFlexboxJustifyCenter(): boolean;
    get amFlexboxJustifyEnd(): boolean;
    get amFlexboxJustifyBetween(): boolean;
    get amFlexboxAlignAround(): boolean;
    get amFlexboxAlignStart(): boolean;
    get amFlexboxAlignCenter(): boolean;
    get amFlexboxAlignEnd(): boolean;
    get amFlexboxAlignBaseline(): boolean;
    get amFlexboxAlignStretch(): boolean;
    get amFlexboxAlignContentStart(): boolean;
    get amFlexboxAlignCotentCenter(): boolean;
    get amFlexboxAlignContentEnd(): boolean;
    get amFlexboxAlignContentBetween(): boolean;
    get amFlexboxAlignContentAround(): boolean;
    get amFlexboxAlignContentStretch(): boolean;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FlexComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FlexComponent, "Flex, nzm-flex", never, { "direction": "direction"; "wrap": "wrap"; "justify": "justify"; "align": "align"; "alignContent": "alignContent"; }, {}, never, ["*"]>;
}
export declare class FlexItemComponent {
    defaultProps: {
        prefixCls: string;
        align: string;
    };
    flexboxItem: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FlexItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FlexItemComponent, "FlexItem, nzm-flex-item", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=flex.component.d.ts.map