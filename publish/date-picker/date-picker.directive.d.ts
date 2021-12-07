import { OnInit, OnChanges, OnDestroy, EventEmitter, ComponentRef, SimpleChanges, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerOptions } from './date-picker-options.provider';
import { ControlValueAccessor } from '@angular/forms';
export declare class DatePickerDirective implements OnDestroy, OnChanges, OnInit, ControlValueAccessor {
    private _viewContainerRef;
    private _defaultOptions;
    private _cfr;
    picker: ComponentRef<DatePickerComponent>;
    appendToBodyElement: HTMLElement;
    private _eventListeners;
    private _ngModelOnChange;
    private _ngModelOnTouched;
    isOpen: boolean;
    mode: string;
    minDate: string;
    maxDate: string;
    use12Hours: boolean;
    minuteStep: number;
    value: Date;
    mask: boolean;
    title: string;
    okText: string;
    dismissText: string;
    disabled: boolean;
    locale: any;
    appendToBody: boolean;
    showErrorToast: boolean;
    showErrorToastInterval: number;
    onVisibleChange: EventEmitter<boolean>;
    onValueChange: EventEmitter<any>;
    onOk: EventEmitter<any>;
    onDismiss: EventEmitter<any>;
    togglePicker(): void;
    constructor(_viewContainerRef: ViewContainerRef, _defaultOptions: DatePickerOptions, _cfr: ComponentFactoryResolver);
    showPicker(): void;
    hidePicker(): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (_: Date) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}