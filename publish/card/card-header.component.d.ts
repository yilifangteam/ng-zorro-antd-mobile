import { TemplateRef } from '@angular/core';
export declare class CardHeaderComponent {
    prefixCls: string;
    thumb: string | TemplateRef<void>;
    thumbStyle: object;
    title: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
    cardBodyWrapper: boolean;
    constructor();
    isTemplateRef(value: any): boolean;
}
