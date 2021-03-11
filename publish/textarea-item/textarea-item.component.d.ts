import { OnInit, EventEmitter, TemplateRef, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class TextareaItemComponent implements OnInit, AfterContentChecked, ControlValueAccessor {
    private element;
    private render;
    prefixCls: string;
    wrapCls: object;
    labelCls: object;
    controlCls: object;
    clearCls: object;
    hasCount: boolean;
    characterLength: number;
    isTitleString: boolean;
    maxLength: number;
    private _el;
    private _prefixListCls;
    private _value;
    private _defaultValue;
    private _placeholder;
    private _editable;
    private _disabled;
    private _clear;
    private _rows;
    private _count;
    private _autoHeight;
    private _error;
    private _labelNumber;
    private _name;
    private _title;
    private _focus;
    private _autoFocus;
    private _isClear;
    private _isClickingClear;
    textRef: any;
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
    get rows(): number;
    set rows(value: number);
    get error(): boolean;
    set error(value: boolean);
    set labelNumber(value: number);
    get count(): number;
    set count(value: number);
    get prefixListCls(): string;
    set prefixListCls(value: string);
    set name(value: string);
    set autoHeight(value: boolean);
    get title(): string | TemplateRef<any>;
    set title(value: string | TemplateRef<any>);
    set focus(value: any);
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    onChange: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onErrorClick: EventEmitter<any>;
    clsItem: boolean;
    clsDisabled: boolean;
    clsError: boolean;
    clsFocus: boolean;
    clsSingleLine: boolean;
    clsHasCount: boolean;
    constructor(element: ElementRef, render: Renderer2);
    _onChange: (_: any) => void;
    setCls(): void;
    setCharacterLength(): void;
    inputChange(e: any): void;
    inputFocus(value: any): void;
    inputBlur(value: any, event: any): void;
    clearInput(): void;
    errorClick(e: any): void;
    reAlignHeight(): void;
    countSymbols(text?: string): number;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
}
