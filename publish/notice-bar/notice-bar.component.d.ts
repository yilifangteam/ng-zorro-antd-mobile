import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { IconHandler } from '../core/util/icon';
export declare class NoticeBarComponent implements OnInit, OnDestroy {
    private _iconHandler;
    visiable: boolean;
    marqueeScroll: string;
    style: {};
    private _width;
    private _option;
    get option(): {
        mode: string;
        icon: string;
        action: string;
        content: string;
        fontSize: string;
        scrolling: boolean;
        marqueeProps: {
            loop: boolean;
            leading: number;
            trailing: number;
            fps: number;
            style: {};
        };
    };
    set option(value: {
        mode: string;
        icon: string;
        action: string;
        content: string;
        fontSize: string;
        scrolling: boolean;
        marqueeProps: {
            loop: boolean;
            leading: number;
            trailing: number;
            fps: number;
            style: {};
        };
    });
    onClick: EventEmitter<any>;
    constructor(_iconHandler: IconHandler);
    click(): void;
    dataProcess(): void;
    insetKeyframe(animationName: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
