import { TemplateRef } from '@angular/core';
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
}
export declare class ShareOption {
    icon: string | TemplateRef<any>;
    title: string;
}
export declare class ShareActionSheetWithOptions extends ActionSheetOptions {
    options: ShareOption[] | ShareOption[][];
    cancelButtonText?: string;
}
export declare class ActionSheetWithOptions extends ActionSheetOptions {
    options: string[];
}
export declare type ActionCallBack = (index: number, rowIndex?: number) => PromiseLike<any> | void;
