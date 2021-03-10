import { OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { PickerOptions } from './picker-options.provider';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { PickerRef } from './picker-ref.class';
import * as ɵngcc0 from '@angular/core';
export declare class PickerComponent<T = any, R = any> extends PickerRef<T, R> implements OnInit, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    options: PickerOptions;
    private _localeProviderService;
    transitionName: string;
    maskTransitionName: string;
    startY: number;
    differY: number;
    currentY: number;
    len: number;
    dom: any;
    index: number;
    maxY: number;
    lineHeight: number;
    dataForRender: any[];
    selectedTarget: any[];
    isMouseDown: boolean;
    Velocity: {
        record: (y: any) => void;
        getVelocity: (y: any) => number;
    };
    currentPicker: any;
    private _unsubscribe$;
    private _picker;
    panstart(event: any): void;
    panmove(event: any): void;
    panend(event: any): void;
    constructor(elementRef: ElementRef, options: PickerOptions, _localeProviderService: LocaleProviderService);
    onChange: (_: any[]) => void;
    init(): void;
    getInitValueIndex(dataTemp: any): void;
    reloadPicker(): void;
    generateArrayData(targetArr: any): any[];
    checkArrayDeep(parent: any, init?: boolean): void;
    ok(): void;
    combineReslut(): any[];
    cancel(): void;
    setTransitionName(): void;
    setCurrentSelected(target: any, index: any): void;
    getInstance(): PickerComponent;
    getElement(): HTMLElement;
    close(): void;
    destroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PickerComponent<any, any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PickerComponent<any, any>, "Picker", never, {}, {}, never, never>;
}

//# sourceMappingURL=picker.component.d.ts.map