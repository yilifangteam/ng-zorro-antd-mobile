import { OnInit, NgZone, Renderer2, OnChanges, OnDestroy, ElementRef, EventEmitter, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { ControlValueAccessor } from '@angular/forms';
export declare class PickerDirective implements OnDestroy, OnInit, OnChanges, ControlValueAccessor {
    private _viewContainerRef;
    private _elm;
    private _defaultOptions;
    private _cfr;
    private _renderer;
    private _zone;
    picker: ComponentRef<PickerComponent>;
    appendToBodyElement: HTMLElement;
    value: Array<any>;
    private _eventListeners;
    data: Array<any>;
    cols: Number;
    mask: boolean;
    title: string;
    visible: boolean;
    okText: string;
    dismissText: string;
    disabled: boolean;
    cascade: boolean;
    appendToBody: boolean;
    indicatorStyle: object;
    onVisibleChange: EventEmitter<boolean>;
    onPickerChange: EventEmitter<any>;
    onDismiss: EventEmitter<any>;
    onChange: (value: any[]) => void;
    onTouched: () => void;
    togglePicker(): void;
    constructor(_viewContainerRef: ViewContainerRef, _elm: ElementRef, _defaultOptions: PickerOptions, _cfr: ComponentFactoryResolver, _renderer: Renderer2, _zone: NgZone);
    ngOnInit(): void;
    ngOnChanges(value: any): void;
    ngOnDestroy(): void;
    private onDocumentClick;
    private showPicker;
    private hidePicker;
    writeValue(value: any[]): void;
    registerOnChange(fn: (value: any[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    isPickerDataEqual(data1: any, data2: any): any;
}
