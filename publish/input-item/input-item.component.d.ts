import { AfterViewInit, EventEmitter, OnInit, Renderer2, ElementRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { isTemplateRef } from '../core/util/check';
import { NzmInputType } from './input-item.definitions';
export declare class InputItemComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private element;
    private render;
    prefixCls: string;
    wrapCls: object;
    labelCls: object;
    controlCls: object;
    setFocus: object;
    pattern: string;
    autoFocus: boolean;
    inputType: NzmInputType;
    ngTemplate: boolean;
    isTemplateRef: typeof isTemplateRef;
    private _el;
    private _type;
    private _value;
    private _defaultValue;
    private _placeholder;
    private _editable;
    private _disabled;
    private _clear;
    private _maxLength;
    private _error;
    private _extra;
    private _labelNumber;
    private _updatePlaceholder;
    private _prefixListCls;
    private _name;
    private _moneyKeyboardAlign;
    private _locale;
    private _focus;
    private _isClear;
    private _fontColor;
    private _content;
    private _inputLock;
    private _nzRequired;
    lableRef: ElementRef;
    inputElementRef: ElementRef;
    get nzRequired(): boolean;
    set nzRequired(value: boolean);
    get type(): NzmInputType;
    set type(value: NzmInputType);
    get value(): string;
    set value(v: string);
    get defaultValue(): string;
    set defaultValue(value: string);
    get placeholder(): string;
    set placeholder(value: string);
    get editable(): boolean;
    set editable(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    get clear(): boolean;
    set clear(value: boolean);
    get maxLength(): number;
    set maxLength(value: number);
    get error(): boolean;
    set error(value: boolean);
    get extra(): string | TemplateRef<any>;
    set extra(value: string | TemplateRef<any>);
    set labelNumber(value: number);
    set updatePlaceholder(value: boolean);
    get prefixListCls(): string;
    set prefixListCls(value: string);
    get name(): string;
    set name(value: string);
    get moneyKeyboardAlign(): string;
    set moneyKeyboardAlign(value: string);
    set locale(value: any);
    get fontColor(): string;
    set fontColor(value: string);
    set focus(value: any);
    get content(): string | TemplateRef<any>;
    set content(value: string | TemplateRef<any>);
    compositionFilter: boolean;
    onChange: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onErrorClick: EventEmitter<any>;
    onExtraClick: EventEmitter<any>;
    clsItem: boolean;
    clsDisabled: boolean;
    clsError: boolean;
    clsFocus: boolean;
    clsAndroid: boolean;
    constructor(element: ElementRef, render: Renderer2);
    _onChange: (_: any) => void;
    setCls(): void;
    inputChange(inputValue: string): void;
    compositionStart(): void;
    compositionEnd(): void;
    inputFocus(value: any): void;
    inputBlur(value: any): void;
    clearInput(): void;
    errorClick(e: any): void;
    extraClick(e: any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
