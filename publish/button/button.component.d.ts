import { ElementRef, EventEmitter, Renderer2, TemplateRef, AfterViewInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonComponent implements AfterViewInit {
    private _elementRef;
    private _render;
    prefixCls: string;
    ngTemplate: boolean;
    iconType: any;
    private _el;
    private _className;
    private _classList;
    private _type;
    private _size;
    private _loading;
    private _active;
    private _inline;
    private _disabled;
    private _icon;
    private _userAgent;
    get type(): string;
    get size(): string;
    get disabled(): boolean;
    get loading(): boolean;
    get inline(): boolean;
    get icon(): string | TemplateRef<any>;
    set icon(value: string | TemplateRef<any>);
    set className(v: any);
    onClick: EventEmitter<any>;
    touchStart(event: any): void;
    touchEnd(event: any): void;
    click(event: any): void;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    isTemplateRef(value: any): boolean;
    set type(value: string);
    set disabled(value: boolean);
    set loading(value: boolean);
    set size(value: string);
    set inline(value: boolean);
    ngAfterViewInit(): void;
    private setClassMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ButtonComponent, "[Button], nzm-button", never, { "type": "type"; "size": "size"; "disabled": "disabled"; "loading": "loading"; "inline": "inline"; "icon": "icon"; "className": "className"; }, { "onClick": "onClick"; }, never, ["img", "*"]>;
}

//# sourceMappingURL=button.component.d.ts.map