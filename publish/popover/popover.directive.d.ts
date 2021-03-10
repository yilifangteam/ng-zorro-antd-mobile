import { EventEmitter, ViewContainerRef, ComponentRef, OnDestroy, ElementRef, OnInit, ComponentFactoryResolver, Renderer2, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverOptions } from './popover-options.provider';
import * as ɵngcc0 from '@angular/core';
export declare class PopoverDirective implements OnInit, OnChanges, OnDestroy {
    private _viewContainerRef;
    private _elm;
    private _defaultOptions;
    private _cfr;
    private _renderer;
    popover: ComponentRef<PopoverComponent>;
    appendToBodyElement: HTMLElement;
    private _eventListeners;
    mask: boolean;
    showArrow: boolean;
    visible: boolean;
    placement: string;
    overlay: TemplateRef<any>;
    onVisibleChange: EventEmitter<boolean>;
    onSelect: EventEmitter<any>;
    appendToBody: boolean;
    className: string;
    autoClose: boolean;
    togglePopover(): void;
    constructor(_viewContainerRef: ViewContainerRef, _elm: ElementRef, _defaultOptions: PopoverOptions, _cfr: ComponentFactoryResolver, _renderer: Renderer2);
    positionMap(placement: any): string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onDocumentClick;
    private showPopover;
    private positionPopover;
    private hidePopover;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PopoverDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PopoverDirective, "[Popover], [nzm-popover]", never, { "mask": "mask"; "showArrow": "showArrow"; "visible": "visible"; "placement": "placement"; "overlay": "overlay"; "appendToBody": "appendToBody"; "className": "className"; "autoClose": "autoClose"; }, { "onVisibleChange": "onVisibleChange"; "onSelect": "onSelect"; }, never>;
}

//# sourceMappingURL=popover.directive.d.ts.map