import { AfterContentInit, ElementRef, TemplateRef, EventEmitter } from '@angular/core';
export declare class PopoverItemComponent implements AfterContentInit {
    private _elementRef;
    defaultProps: {
        prefixCls: string;
        disabled: boolean;
    };
    isActive: boolean;
    private _style;
    private _icon;
    get icon(): TemplateRef<any>;
    set icon(value: TemplateRef<any>);
    get style(): any;
    set style(value: any);
    set disabled(value: any);
    select: EventEmitter<any>;
    amPopoverItem: boolean;
    get amPopoverItemActive(): boolean;
    get amPopoverItemDisabled(): boolean;
    touchStart(e: any): void;
    constructor(_elementRef: ElementRef);
    ngAfterContentInit(): void;
}
