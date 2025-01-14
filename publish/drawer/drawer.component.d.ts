import { EventEmitter, ElementRef, OnChanges, AfterViewChecked } from '@angular/core';
export declare class DrawerComponent implements AfterViewChecked, OnChanges {
    private _el;
    prefixCls: string;
    sidebarStyleFinal: {
        [k: string]: any;
    };
    contentStyleFinal: {
        [k: string]: any;
    };
    overlayStyleFinal: {
        [k: string]: any;
    };
    sidebarWidth: number;
    sidebarHeight: number;
    sidebarTop: number;
    dragHandleTop: number;
    touchIdentifier: number;
    touchStartX: number;
    touchStartY: number;
    touchCurrentX: number;
    touchCurrentY: number;
    touchSupported: boolean;
    private _docked;
    private _open;
    private _position;
    sidebar: any;
    sidebarStyle: {
        [k: string]: any;
    };
    contentStyle: {
        [k: string]: any;
    };
    overlayStyle: {
        [k: string]: any;
    };
    dragHandleStyle: {
        [k: string]: any;
    };
    transitions: boolean;
    touch: boolean;
    enableDragHandle: boolean;
    dragToggleDistance: number;
    get docked(): boolean;
    set docked(v: boolean);
    get open(): boolean;
    set open(v: boolean);
    set position(v: any);
    onOpenChange: EventEmitter<any>;
    am: boolean;
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
    dockedCls: boolean;
    openCls: boolean;
    constructor(_el: ElementRef);
    onOverlayClicked(): void;
    isTouching(): boolean;
    onTouchStart(event: any): void;
    onTouchMove(ev: any): void;
    onTouchEnd(): void;
    saveSidebarSize(): void;
    touchSidebarWidth(): number;
    touchSidebarHeight(): number;
    renderStyle({ sidebarStyle, isTouching, overlayStyle, contentStyle }: {
        sidebarStyle: any;
        isTouching: any;
        overlayStyle: any;
        contentStyle: any;
    }): void;
    update(): void;
    getOffset(ele: any): {
        top: number;
        left: number;
    };
    ngAfterViewChecked(): void;
    ngOnChanges(): void;
}
