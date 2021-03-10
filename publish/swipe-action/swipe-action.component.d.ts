import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class SwipeActionComponent implements OnInit, AfterViewInit, OnDestroy {
    prefixCls: string;
    wrapCls: object;
    private _swiping;
    private _openedLeft;
    private _openedRight;
    private _btnsLeftWidth;
    private _btnsRightWidth;
    private _needShowLeft;
    private _needShowRight;
    private _startX;
    leftBtnRef: any;
    rightBtnRef: any;
    content: any;
    cover: any;
    left: Array<object>;
    right: Array<object>;
    autoClose: boolean;
    disabled: boolean;
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    constructor();
    setClassMap(): void;
    onCloseSwipe: (ev: any) => void;
    close(): void;
    setBtnStyle(value: any): void;
    getContentEasing(value: any, limit: any): any;
    onTouchStart(e: any): void;
    onTouchMove(e: any): void;
    onTouchEnd(e: any): void;
    doOpenLeft(): void;
    doOpenRight(): void;
    onBtnClick(ev: any, btn: any): void;
    open(value: any, openedLeft: any, openedRight: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
