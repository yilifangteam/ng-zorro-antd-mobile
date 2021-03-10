import { OnInit, OnDestroy, ElementRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { ActionSheetRef } from './action-sheet-ref.class';
export declare class ActionSheetComponent<T = any, R = any> extends ActionSheetRef<T, R> implements OnInit, OnDestroy {
    private localeProviderService;
    elementRef: ElementRef;
    unsubscribe$: Subject<void>;
    option: any;
    constructor(localeProviderService: LocaleProviderService, elementRef: ElementRef);
    ngOnInit(): void;
    localeProvider(): void;
    onPress(index: any, rowIndex: number, event: any): void;
    showShare(option: any): {
        [x: string]: boolean;
    };
    setActiveClassName(option: any, suffix: any): string[];
    isNoTitle(value: string | TemplateRef<any>): boolean;
    isTemplateRef(value: any): boolean;
    isArray(options: any, value: any): boolean;
    getInstance(): ActionSheetComponent;
    getElement(): HTMLElement;
    close(): void;
    destroy(): void;
    ngOnDestroy(): void;
}
