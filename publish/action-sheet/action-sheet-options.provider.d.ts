import { TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ActionSheetOptions {
    prefixCls?: string;
    maskClosable?: boolean;
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
    title?: string | TemplateRef<any>;
    message?: string | TemplateRef<any>;
    className?: string;
    transitionName?: string;
    maskTransitionName?: string;
    locale?: any;
    close?: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActionSheetOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActionSheetOptions>;
}
export declare class ShareOption {
    icon: string | TemplateRef<any>;
    title: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShareOption, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ShareOption>;
}
export declare class ShareActionSheetWithOptions extends ActionSheetOptions {
    options: ShareOption[] | ShareOption[][];
    cancelButtonText?: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShareActionSheetWithOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ShareActionSheetWithOptions>;
}
export declare class ActionSheetWithOptions extends ActionSheetOptions {
    options: string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActionSheetWithOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActionSheetWithOptions>;
}
export declare type ActionCallBack = (index: number, rowIndex?: number) => PromiseLike<any> | void;

//# sourceMappingURL=action-sheet-options.provider.d.ts.map