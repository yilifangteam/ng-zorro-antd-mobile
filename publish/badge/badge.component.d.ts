import { OnInit, OnChanges, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
export declare class BadgeComponent implements OnChanges, OnInit, AfterViewInit {
    private _ref;
    private render;
    prefixCls: string;
    scrollNumberCls: object;
    style: object;
    private _text;
    private _setClass;
    private _size;
    private _dot;
    private _hot;
    private _corner;
    private _children;
    private _overflowCount;
    set size(v: string);
    get text(): string;
    set text(v: string);
    set corner(v: boolean);
    get dot(): boolean;
    set dot(v: boolean);
    set overflowCount(v: number);
    set hot(v: boolean);
    set setStyle(v: object);
    set className(v: string);
    clsBadge: boolean;
    clsBadgeWrp: boolean;
    clsBadgeCornerWrp: boolean;
    clsBadgeHot: boolean;
    clsBadgeCornerWrpLg: boolean;
    constructor(_ref: ElementRef, render: Renderer2);
    setCls(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
