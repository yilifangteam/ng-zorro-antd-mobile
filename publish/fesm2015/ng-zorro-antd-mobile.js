import { Component, Input, HostBinding, NgModule, ViewEncapsulation, TemplateRef, ElementRef, Renderer2, EventEmitter, forwardRef, ViewChild, Output, InjectionToken, Injectable, Inject, Optional, SkipSelf, ApplicationRef, ComponentFactoryResolver, NgZone, HostListener, Pipe, ContentChildren, ChangeDetectionStrategy, ChangeDetectorRef, Injector, Directive, ViewContainerRef, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subject, merge } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DomSanitizer } from '@angular/platform-browser';
import { ObserversModule } from '@angular/cdk/observers';

class ActivityIndicatorComponent {
    constructor() {
        this.prefixCls = 'am-activity-indicator';
        this.spinnerClass = {};
        this._size = 'small';
        this._toast = false;
        this._animating = true;
        this.clsActIndicator = true;
    }
    get animating() {
        return this._animating;
    }
    set animating(v) {
        this._animating = v;
        this.setClass();
    }
    set size(v) {
        this._size = v;
        this.setClass();
    }
    get toast() {
        return this._toast;
    }
    set toast(v) {
        this._toast = v;
        this.setClass();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
    }
    setClass() {
        if (this._animating) {
            this.clsActIndicator = true;
            this.clsActIndicatorToast = !!this._toast;
            this.clsActIndicatorLg = this._size === 'large';
            this.clsActIndicatorSm = this._size === 'small';
            this.spinnerClass = {
                [`${this.prefixCls}-spinner`]: true,
                [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === 'large'
            };
        }
        else {
            this.clsActIndicator = false;
            this.clsActIndicatorLg = false;
            this.clsActIndicatorSm = false;
            this.clsActIndicatorToast = false;
        }
    }
    ngOnInit() {
        this.setClass();
    }
}
ActivityIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ActivityIndicator , nzm-ctivity-indicator',
                template: "<div *ngIf=\"animating && toast && text && text.length > 0\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-hidden=\"'true'\"></span>\n    <span class=\"{{ prefixCls }}-toast\">{{ text }}</span>\n  </div>\n</div>\n<div *ngIf=\"animating && toast && !text\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-label=\"'Loading'\"></span>\n  </div>\n</div>\n<div *ngIf=\"animating && !toast && text && text.length > 0\">\n  <span [ngClass]=\"spinnerClass\" aria-hidden=\"true\"></span>\n  <span class=\"{{ prefixCls }}-tip\">{{ text }}</span>\n</div>\n<div *ngIf=\"animating && !toast && !text\">\n  <span [ngClass]=\"spinnerClass\" aria-label=\"'loading'\"></span>\n</div>\n"
            },] }
];
ActivityIndicatorComponent.ctorParameters = () => [];
ActivityIndicatorComponent.propDecorators = {
    animating: [{ type: Input }],
    size: [{ type: Input }],
    toast: [{ type: Input }],
    text: [{ type: Input }],
    clsActIndicator: [{ type: HostBinding, args: ['class.am-activity-indicator',] }],
    clsActIndicatorToast: [{ type: HostBinding, args: ['class.am-activity-indicator-toast',] }],
    clsActIndicatorLg: [{ type: HostBinding, args: ['class.am-activity-indicator-lg',] }],
    clsActIndicatorSm: [{ type: HostBinding, args: ['class.am-activity-indicator-sm',] }]
};

class ActivityIndicatorModule {
}
ActivityIndicatorModule.decorators = [
    { type: NgModule, args: [{
                exports: [ActivityIndicatorComponent],
                declarations: [ActivityIndicatorComponent],
                imports: [CommonModule, FormsModule]
            },] }
];

class CardComponent {
    constructor() {
        this.full = false;
        this.cardWrapper = true;
    }
    get cardFull() {
        return this.full;
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'Card, nzm-card',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    full: [{ type: Input }],
    cardWrapper: [{ type: HostBinding, args: ['class.am-card',] }],
    cardFull: [{ type: HostBinding, args: ['class.am-card-full',] }]
};

class CardHeaderComponent {
    constructor() {
        this.prefixCls = 'am-card-header';
        this.thumb = null;
        this.thumbStyle = null;
        this.title = null;
        this.extra = null;
        this.cardBodyWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'CardHeader, nzm-card-header',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <img *ngIf=\"thumb && !isTemplateRef(thumb)\" src=\"{{ thumb }}\" [ngStyle]=\"thumbStyle\" />\n  <ng-container *ngIf=\"thumb && isTemplateRef(thumb)\" [ngTemplateOutlet]=\"thumb\"></ng-container>\n  <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardHeaderComponent.ctorParameters = () => [];
CardHeaderComponent.propDecorators = {
    thumb: [{ type: Input }],
    thumbStyle: [{ type: Input }],
    title: [{ type: Input }],
    extra: [{ type: Input }],
    cardBodyWrapper: [{ type: HostBinding, args: ['class.am-card-header',] }]
};

class CardBodyComponent {
    constructor() {
        this.cardBodyWrapper = true;
    }
}
CardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'CardBody, nzm-card-body',
                template: `
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None
            },] }
];
CardBodyComponent.ctorParameters = () => [];
CardBodyComponent.propDecorators = {
    cardBodyWrapper: [{ type: HostBinding, args: ['class.am-card-body',] }]
};

class CardFooterComponent {
    constructor() {
        this.prefixCls = 'am-card-footer';
        this.content = null;
        this.extra = null;
        this.cardFooterWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'CardFooter, nzm-card-footer',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <ng-container *ngIf=\"!isTemplateRef(content); else contentTemplate\">{{ content }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #contentTemplate>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardFooterComponent.ctorParameters = () => [];
CardFooterComponent.propDecorators = {
    content: [{ type: Input }],
    extra: [{ type: Input }],
    cardFooterWrapper: [{ type: HostBinding, args: ['class.am-card-footer',] }]
};

class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
                exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
            },] }
];

class BadgeComponent {
    constructor(_ref, render) {
        this._ref = _ref;
        this.render = render;
        this.prefixCls = 'am-badge';
        this.scrollNumberCls = {};
        this.style = {};
        this._size = 'small';
        this._dot = false;
        this._hot = false;
        this._corner = false;
        this._children = false;
        this._overflowCount = 99;
        this.clsBadge = true;
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    set size(v) {
        this._size = v;
        this.setCls();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
        this.setCls();
    }
    set corner(v) {
        this._corner = v;
        this.setCls();
    }
    get dot() {
        return this._dot;
    }
    set dot(v) {
        this._dot = v;
        if (this._dot) {
            this._text = '';
        }
        this.setCls();
    }
    set overflowCount(v) {
        this._overflowCount = v;
    }
    set hot(v) {
        this._hot = v;
        this.setCls();
    }
    set setStyle(v) {
        this.style = v;
    }
    set className(v) {
        this._setClass = v;
        const clsArr = this._setClass.split(' ');
        clsArr.forEach(cls => {
            this.render.addClass(this._ref.nativeElement, cls);
        });
    }
    setCls() {
        this.scrollNumberCls = {
            [`${this.prefixCls}-dot`]: this._dot,
            [`${this.prefixCls}-dot-large`]: this._dot && this._size === 'large',
            [`${this.prefixCls}-text`]: !this._dot && !this._corner,
            [`${this.prefixCls}-corner`]: this._corner,
            [`${this.prefixCls}-corner-large`]: this._corner && this._size === 'large'
        };
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    ngOnChanges() {
        if (typeof this._text === 'number' && this._text > this._overflowCount) {
            this._text = this._overflowCount + '+';
        }
    }
    ngOnInit() {
        this.setCls();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this._ref.nativeElement.children.length > 1 ||
                (this._ref.nativeElement.children.length === 1 && !this.dot && !this.text)) {
                this._children = true;
                this.setCls();
            }
        }, 10);
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Badge, nzm-badge',
                template: "<ng-content></ng-content>\n<sup *ngIf=\"dot || text\" [ngClass]=\"scrollNumberCls\" [ngStyle]=\"style\">\n  <span>{{ text }}</span>\n</sup>\n"
            },] }
];
BadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BadgeComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    corner: [{ type: Input }],
    dot: [{ type: Input }],
    overflowCount: [{ type: Input }],
    hot: [{ type: Input }],
    setStyle: [{ type: Input }],
    className: [{ type: Input }],
    clsBadge: [{ type: HostBinding, args: ['class.am-badge',] }],
    clsBadgeWrp: [{ type: HostBinding, args: ['class.am-badge-not-a-wrapper',] }],
    clsBadgeCornerWrp: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper',] }],
    clsBadgeHot: [{ type: HostBinding, args: ['class.am-badge-hot',] }],
    clsBadgeCornerWrpLg: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper-large',] }]
};

class BadgeModule {
}
BadgeModule.decorators = [
    { type: NgModule, args: [{
                exports: [BadgeComponent],
                declarations: [BadgeComponent],
                imports: [CommonModule, FormsModule]
            },] }
];

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:no-any
function isTemplateRef(value) {
    return value instanceof TemplateRef;
}

class InputItemComponent {
    constructor(element, render) {
        this.element = element;
        this.render = render;
        this.prefixCls = 'am-input';
        this.setFocus = {};
        this.pattern = '';
        this.autoFocus = false;
        this.inputType = 'text';
        this.ngTemplate = false;
        this.isTemplateRef = isTemplateRef;
        this._type = 'text';
        this._defaultValue = '';
        this._placeholder = '';
        this._editable = true;
        this._disabled = false;
        this._clear = false;
        this._error = false;
        this._extra = '';
        this._labelNumber = 10;
        this._updatePlaceholder = false;
        this._prefixListCls = 'am-list';
        this._moneyKeyboardAlign = 'right';
        this._focus = false;
        this._isClear = false;
        this._content = '';
        this._inputLock = false;
        this._nzRequired = false;
        this.compositionFilter = true;
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onErrorClick = new EventEmitter();
        this.onExtraClick = new EventEmitter();
        this.clsItem = true;
        this.clsDisabled = this._disabled;
        this.clsError = this._error;
        this.clsFocus = this._focus;
        this.clsAndroid = this._focus;
        this._onChange = (_) => { };
        this._el = element.nativeElement;
    }
    get nzRequired() {
        return this._nzRequired;
    }
    set nzRequired(value) {
        this._nzRequired = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        if (value && value.length > 0) {
            this.inputType = value;
            if (value === 'bankCard' || value === 'phone') {
                this._type = 'tel';
            }
            else if (value === 'password') {
                this._type = 'password';
            }
            else if (value === 'digit' || value === 'number') {
                this._type = 'number';
            }
            else {
                this._type = value;
            }
            if (value === 'number') {
                this.pattern = '[0-9]*';
            }
        }
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (typeof v === 'undefined' || v === null) {
            this._value = '';
        }
        else {
            this._value = v;
        }
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set defaultValue(value) {
        this._defaultValue = value;
        if (!this._value) {
            this._value = this._defaultValue;
        }
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get editable() {
        return this._editable;
    }
    set editable(value) {
        this._editable = value;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.clsDisabled = value;
    }
    get clear() {
        return this._clear;
    }
    set clear(value) {
        this._clear = value;
    }
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(value) {
        this._maxLength = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
        this.clsError = value;
    }
    get extra() {
        return this._extra;
    }
    set extra(value) {
        if (value instanceof TemplateRef) {
            this.ngTemplate = true;
        }
        else {
            this.ngTemplate = false;
        }
        this._extra = value;
    }
    set labelNumber(value) {
        this._labelNumber = value;
        this.setCls();
    }
    set updatePlaceholder(value) {
        this._updatePlaceholder = value;
    }
    get prefixListCls() {
        return this._prefixListCls;
    }
    set prefixListCls(value) {
        this._prefixListCls = value;
        this.render.addClass(this._el, value + '-item');
        this.render.addClass(this._el, value + '-item-middle');
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get moneyKeyboardAlign() {
        return this._moneyKeyboardAlign;
    }
    set moneyKeyboardAlign(value) {
        this._moneyKeyboardAlign = value;
    }
    set locale(value) {
        this._locale = value;
    }
    get fontColor() {
        return this._fontColor;
    }
    set fontColor(value) {
        this._fontColor = value;
    }
    set focus(value) {
        if (value && value.focus) {
            this.autoFocus = value.focus;
            if (this._type === 'money') {
                this.setFocus = value;
            }
            else if (this.inputElementRef) {
                this._focus = true;
                this.inputElementRef.nativeElement.focus();
                this.inputFocus('');
            }
        }
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this.setCls();
    }
    setCls() {
        if (this.lableRef &&
            (this.lableRef.nativeElement.children.length > 0 ||
                (this.lableRef.nativeElement && this.lableRef.nativeElement.innerText !== '') ||
                this._content != undefined)) {
            this.labelCls = {
                [`${this.prefixCls}-label`]: true,
                [`${this.prefixCls}-label-required`]: this.nzRequired,
                [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
                [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
                [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
                [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
                [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
                [`${this.prefixCls}-label-7`]: this._labelNumber === 7
            };
        }
        this.controlCls = { [`${this.prefixCls}-control`]: true };
    }
    inputChange(inputValue) {
        // 'compositionend' is earlier than ngModelChange, Therefore use timer to make ngModelChange runs after 'compositionend' event
        setTimeout(() => {
            if (this.compositionFilter && this._inputLock && this.inputType === 'text') {
                return;
            }
            let value = inputValue;
            switch (this.inputType) {
                case 'bankCard':
                    value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    value = value.replace(/\D/g, '').substring(0, 11);
                    const valueLen = value.length;
                    if (valueLen > 3 && valueLen < 8) {
                        value = `${value.substr(0, 3)} ${value.substr(3)}`;
                    }
                    else if (valueLen >= 8) {
                        value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
                    }
                    break;
                case 'number':
                    value = value.replace(/\D/g, '');
                    break;
            }
            if (this.inputType !== 'text') {
                this._value = value;
            }
            this._onChange(this._value);
            this.onChange.emit(this._value);
        }, 0);
    }
    compositionStart() {
        this._inputLock = true;
    }
    compositionEnd() {
        this._inputLock = false;
    }
    inputFocus(value) {
        if (!this._editable && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        setTimeout(() => {
            this._focus = true;
            this.clsFocus = true;
            this.clsAndroid = true;
        }, 100);
        this.onFocus.emit(value);
    }
    inputBlur(value) {
        setTimeout(() => {
            if (!this._isClear) {
                this._focus = false;
                this.clsFocus = false;
                this.clsAndroid = false;
                this.onBlur.emit(value);
            }
            this._isClear = false;
        }, 100);
    }
    clearInput() {
        if (this._type !== 'password' && this._updatePlaceholder) {
            this._placeholder = this._value;
        }
        this._value = '';
        this.onChange.emit(this._value);
        this._onChange(this._value);
        this._isClear = true;
        this.inputFocus(this._value);
    }
    errorClick(e) {
        if (this.onErrorClick) {
            this.onErrorClick.emit(e);
        }
    }
    extraClick(e) {
        if (this.onExtraClick) {
            this.onExtraClick.emit(e);
        }
    }
    writeValue(value) {
        if (typeof value === undefined || value === null) {
            this._value = '';
        }
        else {
            this._value = value;
        }
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) { }
    ngOnInit() {
        this.setCls();
        this.render.addClass(this._el, this._prefixListCls + '-item');
        this.render.addClass(this._el, this._prefixListCls + '-item-middle');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setCls();
        }, 0);
    }
}
InputItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'InputItem, nzm-input-item',
                template: "<div class=\"{{ prefixListCls }}-line\">\n  <div #lableContent [ngClass]=\"labelCls\">\n    <ng-template *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-template>\n    <ng-container *ngIf=\"!isTemplateRef(content)\">{{ content }}</ng-container>\n  </div>\n  <div [ngClass]=\"controlCls\">\n    <CustomInput\n      *ngIf=\"type === 'money'\"\n      [value]=\"value\"\n      [defaultValue]=\"defaultValue\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [editable]=\"editable\"\n      [fontColor]=\"fontColor\"\n      [moneyKeyboardAlign]=\"moneyKeyboardAlign\"\n      [setFocus]=\"setFocus\"\n      [maxLength]=\"maxLength\"\n      (onChange)=\"inputChange($event)\"\n      (onBlur)=\"inputBlur(value)\"\n      (onFocus)=\"inputFocus(value)\"\n    >\n    </CustomInput>\n    <div *ngIf=\"type !== 'money'\">\n      <input\n        #inputElement\n        style=\"outline:none\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        [defaultValue]=\"defaultValue\"\n        [placeholder]=\"placeholder\"\n        [disabled]=\"disabled\"\n        [readOnly]=\"!editable\"\n        [autofocus]=\"autoFocus\"\n        [maxlength]=\"maxLength\"\n        [pattern]=\"pattern\"\n        [style.color]=\"fontColor\"\n        (ngModelChange)=\"inputChange($event)\"\n        (compositionstart)=\"compositionStart()\"\n        (compositionend)=\"compositionEnd()\"\n        (blur)=\"inputBlur(value)\"\n        (focus)=\"inputFocus(value)\"\n      />\n    </div>\n  </div>\n  <div\n    *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n    class=\"{{ prefixCls }}-clear\"\n    (click)=\"clearInput()\"\n  ></div>\n  <div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n  <div *ngIf=\"extra !== ''\" class=\"{{ prefixCls }}-extra\" (click)=\"extraClick($event)\">\n    <ng-container *ngIf=\"!ngTemplate\">{{ extra }}</ng-container>\n    <ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputItemComponent),
                        multi: true
                    }
                ]
            },] }
];
InputItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
InputItemComponent.propDecorators = {
    lableRef: [{ type: ViewChild, args: ['lableContent', { static: true },] }],
    inputElementRef: [{ type: ViewChild, args: ['inputElement',] }],
    nzRequired: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    editable: [{ type: Input }],
    disabled: [{ type: Input }],
    clear: [{ type: Input }],
    maxLength: [{ type: Input }],
    error: [{ type: Input }],
    extra: [{ type: Input }],
    labelNumber: [{ type: Input }],
    updatePlaceholder: [{ type: Input }],
    prefixListCls: [{ type: Input }],
    name: [{ type: Input }],
    moneyKeyboardAlign: [{ type: Input }],
    locale: [{ type: Input }],
    fontColor: [{ type: Input }],
    focus: [{ type: Input }],
    content: [{ type: Input }],
    compositionFilter: [{ type: Input }],
    onChange: [{ type: Output }],
    onBlur: [{ type: Output }],
    onFocus: [{ type: Output }],
    onErrorClick: [{ type: Output }],
    onExtraClick: [{ type: Output }],
    clsItem: [{ type: HostBinding, args: ['class.am-input-item',] }],
    clsDisabled: [{ type: HostBinding, args: ['class.am-input-disabled',] }],
    clsError: [{ type: HostBinding, args: ['class.am-input-error',] }],
    clsFocus: [{ type: HostBinding, args: ['class.am-input-focus',] }],
    clsAndroid: [{ type: HostBinding, args: ['class.am-input-android,',] }]
};

const LOCAL_PROVIDER_TOKEN = new InjectionToken('locale-provider-token');

var Picker = {
    okText: '确定',
    dismissText: '取消',
    extra: '请选择'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/zh_CN';
var DatePicker = {
    errorMessage: '当前时间与设定最大或最小日期格式不一致',
    curTMorethanMax: '当前时间大于设定最大日期',
    curTLessthanMin: '当前时间小于设定最小日期',
    okText: '确定',
    dismissText: '取消',
    extra: '请选择',
    // DatePickerLocale,
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分',
    am: '上午',
    pm: '下午'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/zh_CN';
var DatePickerView = {
    okText: '确定',
    dismissText: '取消',
    extra: '请选择',
    // DatePickerLocale,
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分',
    am: '上午',
    pm: '下午'
};

var Menu = {
    okText: '确定',
    cancelText: '取消'
};

// 同步自 'rmc-calendar/lib/locale/zh_CN';
var zhCN = {
    title: '日期选择',
    today: '今天',
    month: '月',
    year: '年',
    am: '上午',
    pm: '下午',
    dateTimeFormat: 'yyyy年MM月dd日 星期w hh:mm',
    dateFormat: 'yyyy年MM月dd日 星期w',
    noChoose: '未选择',
    week: ['日', '一', '二', '三', '四', '五', '六'],
    clear: '清除',
    selectTime: '选择时间',
    selectStartTime: '选择开始时间',
    selectEndTime: '选择结束时间',
    start: '开始',
    end: '结束',
    begin: '起',
    over: '止',
    begin_over: '起/止',
    confirm: '确认',
    monthTitle: 'yyyy年MM月',
    loadPrevMonth: '加载上一个月',
    yesterday: '昨天',
    lastWeek: '近一周',
    lastMonth: '近一个月'
};

var SearchBar = {
    cancelText: '取消'
};

var InputItem = {
    confirmLabel: '确定',
    backspaceLabel: '退格',
    cancelKeyboardLabel: '收起键盘'
};

var Pagination = {
    prevText: '上一页',
    nextText: '下一页'
};

var PullToRefresh = {
    activateText: '松开立即刷新',
    deactivateText: '下拉可以刷新',
    finishText: '完成刷新'
};

var ActionSheet = {
    dismissText: '取消'
};

var zh_CN = {
    locale: 'zh_CN',
    Picker,
    DatePicker,
    DatePickerView,
    Menu,
    Calendar: zhCN,
    SearchBar,
    InputItem,
    Pagination,
    PullToRefresh,
    ActionSheet
};

class LocaleProviderService {
    constructor(locale) {
        this._locale = undefined;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    get localeChange() {
        return this._change.asObservable();
    }
    getLocaleValue(keyPath) {
        const content = this._getObjectPath(this._locale, keyPath);
        if (typeof content === 'string') {
            return content;
        }
        return '';
    }
    getLocaleSubObj(keyPath) {
        const content = this._getObjectPath(this._locale, keyPath);
        if (typeof content === 'object') {
            return content;
        }
        return null;
    }
    setLocale(locale) {
        if (!locale || (this._locale && this._locale.locale === locale.locale)) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    getLocaleId() {
        return this._locale && this._locale.locale ? this._locale.locale : '';
    }
    getLocale() {
        return this._locale;
    }
    _getObjectPath(obj, path) {
        let res = obj;
        const paths = path.split('.');
        const depth = paths.length;
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
LocaleProviderService.decorators = [
    { type: Injectable }
];
LocaleProviderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LOCAL_PROVIDER_TOKEN,] }] }
];
function LOCALE_PROVIDER_SERVICE_FACTORY(exist, locale) {
    return exist || new LocaleProviderService(locale);
}
const LOCALE_PROVIDER_SERVICE_PROVIDER = {
    provide: LocaleProviderService,
    useFactory: LOCALE_PROVIDER_SERVICE_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LocaleProviderService], LOCAL_PROVIDER_TOKEN]
};

class CustomKeyboardComponent {
    constructor(_localeProvider) {
        this._localeProvider = _localeProvider;
        this.prefixCls = 'am-number-keyboard';
        this.okText = '';
        this._locale = {};
        this._unsubscribe$ = new Subject();
        this.onClick = new EventEmitter();
    }
    tdClick(e) {
        this.onClick.emit(e);
    }
    ngOnInit() {
        this.wrapCls = {
            [`${this.prefixCls}-item`]: true
        };
        this.wrapperCls = {
            [`${this.prefixCls}-wrapper`]: true
        };
        this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this._locale = this._localeProvider.getLocaleSubObj('InputItem');
            this.okText = this._locale.confirmLabel;
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
CustomKeyboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'CustomKeyboard',
                template: "<div [ngClass]=\"wrapperCls\">\n  <table>\n    <tbody>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(1)\">1</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(2)\">2</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(3)\">3</td>\n        <td class=\"keyboard-delete\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('delete')\"></td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(4)\">4</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(5)\">5</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(6)\">6</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(7)\">7</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(8)\">8</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(9)\">9</td>\n        <td class=\"keyboard-confirm\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('confirm')\">{{ okText }}</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick('.')\">.</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(0)\">0</td>\n        <td class=\"keyboard-hide\" [ngClass]=\"wrapCls\" (click)=\"tdClick('hide')\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [LocaleProviderService]
            },] }
];
CustomKeyboardComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
CustomKeyboardComponent.propDecorators = {
    onClick: [{ type: Output }]
};

class CustomInputService {
    constructor(_appRef, _cfr) {
        this._appRef = _appRef;
        this._cfr = _cfr;
        CustomInputService.appRef = this._appRef;
        CustomInputService._inputCompFactory = this._cfr.resolveComponentFactory(CustomKeyboardComponent);
    }
    static getShowStatus() {
        return CustomInputService.isShow;
    }
    static showKeyboard() {
        if (!this.isShow) {
            if (this.compRef) {
                this.compRef.instance.wrapperCls = {
                    [`am-number-keyboard-wrapper`]: true
                };
            }
            else {
                let container = document.querySelector(`#${this._keyboardPrefixCls}-container`);
                if (!container) {
                    container = document.createElement('div');
                    container.setAttribute('id', `${this._keyboardPrefixCls}-container`);
                    document.body.appendChild(container);
                    container.appendChild(document.createElement(CustomInputService._inputCompFactory.selector));
                    this.compRef = this.appRef.bootstrap(CustomInputService._inputCompFactory);
                    this.compRef.instance.onClick.subscribe(e => {
                        this.clickValue = e;
                    });
                }
            }
            this.isShow = true;
        }
    }
    static hideKeyboard() {
        if (this.compRef && this.isShow) {
            this.isShow = false;
            this.compRef.instance.wrapperCls = {
                [`am-number-keyboard-wrapper`]: true,
                [`am-number-keyboard-wrapper-hide`]: true
            };
        }
    }
}
CustomInputService.compRef = null;
CustomInputService.appRef = null;
CustomInputService.isShow = false;
CustomInputService.clickValue = null;
CustomInputService._inputCompFactory = null;
CustomInputService._keyboardPrefixCls = 'am-number-keyboard';
CustomInputService.decorators = [
    { type: Injectable }
];
CustomInputService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver }
];

class CustomInputComponent {
    constructor(_ref, _customInputService, _ngZone) {
        this._ref = _ref;
        this._customInputService = _customInputService;
        this._ngZone = _ngZone;
        this.keyboardPrefixCls = 'am-number-keyboard';
        this.focus = false;
        this._value = '';
        this._defaultValue = '';
        this._placeholder = '';
        this._editable = true;
        this._disabled = false;
        this._setFocus = false;
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.clsFakeContainer = true;
        this.inputFocus = () => {
            this.removeBlurListener();
            const focus = this.focus;
            if (!focus || this._setFocus) {
                this.onInputFocus();
            }
            setTimeout(() => {
                this.addBlurListener();
            }, 50);
        };
        this.doBlur = ev => {
            const value = this._value;
            // 点击是否是组件本身
            let parentFound = false;
            // 点击目标是否是custom-input
            let isInput = false;
            // 点击目标是否是custom-keyboard
            let isKeyboard = false;
            let isClear = false;
            let target = ev.target;
            while (target && target !== null && !parentFound) {
                if (target === this._ref.nativeElement) {
                    parentFound = true;
                }
                if (target.localName === 'custominput') {
                    isInput = true;
                }
                if (target.localName === 'customkeyboard') {
                    isKeyboard = true;
                }
                if (target.className.indexOf('am-input-clear') >= 0) {
                    isClear = true;
                }
                target = target.parentElement;
            }
            // 当点击目标是本身的时候，获取焦点、不隐藏keyboard
            // 当点击目标不是本身但是其他的custom-input时，失去焦点、不隐藏keyboard
            // 当点击目标是keyboard时，不失去焦点，不隐藏keyboard
            if (parentFound) {
                this.focus = true;
            }
            else if (isInput) {
                this._setFocus = false;
                this.focus = false;
                this.onBlur.emit(this._value);
            }
            if (this.focus && isKeyboard) {
                this.focus = true;
                this.onKeyboardClick(CustomInputService.clickValue);
            }
            if (!parentFound && !isInput && !isKeyboard && !isClear && !this._setFocus) {
                this.focus = false;
                this._setFocus = false;
                this.onBlur.emit(this._value);
                CustomInputService.hideKeyboard();
            }
            this.setFakeInputCls();
        };
        this.removeBlurListener = () => {
            document.removeEventListener('click', this.doBlur, false);
        };
        this.addBlurListener = () => {
            document.addEventListener('click', this.doBlur, false);
        };
        this.onInputBlur = value => {
            this.focus = false;
            this.setFakeInputCls();
            this.onBlur.emit(this._value);
            CustomInputService.hideKeyboard();
        };
        this.onInputFocus = () => {
            this.onFocus.emit(this._value);
            this.focus = true;
            this._setFocus = false;
            this.setFakeInputCls();
            setTimeout(() => {
                CustomInputService.showKeyboard();
            }, 100);
        };
        this.setFakeInputCls = () => {
            this.fakeInputCls = {
                [`fake-input`]: true,
                ['fake-input-disabled']: this._disabled,
                ['focus']: this.focus
            };
        };
        this.setContainerCls = () => {
            this.clsFakeContainerLeft = this._moneyKeyboardAlign === 'left';
        };
        this.onKeyboardClick = keyboardItemValue => {
            let valueAfterChange;
            // 删除键
            if (keyboardItemValue === 'delete') {
                valueAfterChange = this._value.substring(0, this._value.length - 1);
                this.onChange.emit(valueAfterChange);
                // 确认键
            }
            else if (keyboardItemValue === 'confirm') {
                valueAfterChange = this._value;
                this.onChange.emit(valueAfterChange);
                this.onInputBlur(this._value);
                // 收起键
            }
            else if (keyboardItemValue === 'hide') {
                valueAfterChange = this._value;
                this.onInputBlur(valueAfterChange);
            }
            else {
                if (this._maxLength !== undefined &&
                    +this._maxLength >= 0 &&
                    (this._value + keyboardItemValue).length > this._maxLength) {
                    valueAfterChange = (this._value + keyboardItemValue).substr(0, this._maxLength);
                    this.onChange.emit(valueAfterChange);
                }
                else {
                    valueAfterChange = this._value + keyboardItemValue;
                    this.onChange.emit(valueAfterChange);
                }
            }
            this._ngZone.run(() => {
                this._value = valueAfterChange;
            });
        };
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (typeof v === 'undefined' || v === null) {
            this._value = '';
        }
        else if (this._maxLength !== undefined && this._maxLength >= 0) {
            this._value = v.toString().substr(0, this._maxLength);
        }
        else {
            this._value = v.toString();
        }
    }
    set defaultValue(value) {
        this._defaultValue = value;
        if (!this._value) {
            this._value = this._defaultValue.toString();
        }
    }
    set maxLength(value) {
        this._maxLength = value;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    set editable(value) {
        this._editable = value;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get fontColor() {
        return this._fontColor;
    }
    set fontColor(value) {
        this._fontColor = value;
    }
    set moneyKeyboardAlign(value) {
        this._moneyKeyboardAlign = value;
        this.setContainerCls();
    }
    set setFocus(value) {
        if (value) {
            this._setFocus = value.focus;
            if (this._setFocus) {
                this.inputFocus();
            }
        }
    }
    onFakeInputClick() {
        if (this._preventKeyboard) {
            return;
        }
        this.inputFocus();
    }
    ngOnInit() {
        this._preventKeyboard = this._disabled || !this._editable;
        this.setFakeInputCls();
        this.setContainerCls();
    }
    ngOnDestroy() {
        this.removeBlurListener();
        if (CustomInputService) {
            CustomInputService.hideKeyboard();
            CustomInputService.compRef = null;
        }
        const container = document.querySelector(`#${this.keyboardPrefixCls}-container`);
        if (container) {
            container.remove();
        }
    }
}
CustomInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'CustomInput',
                template: "<div *ngIf=\"value === ''\" class=\"fake-input-placeholder\">\n  {{ placeholder }}\n</div>\n<div [ngClass]=\"fakeInputCls\" [style.color]=\"fontColor\" (click)=\"onFakeInputClick()\">\n  {{ value }}\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [CustomInputService]
            },] }
];
CustomInputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CustomInputService },
    { type: NgZone }
];
CustomInputComponent.propDecorators = {
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    maxLength: [{ type: Input }],
    placeholder: [{ type: Input }],
    editable: [{ type: Input }],
    disabled: [{ type: Input }],
    fontColor: [{ type: Input }],
    moneyKeyboardAlign: [{ type: Input }],
    setFocus: [{ type: Input }],
    onChange: [{ type: Output }],
    onBlur: [{ type: Output }],
    onFocus: [{ type: Output }],
    clsFakeContainer: [{ type: HostBinding, args: ['class.fake-input-container',] }],
    clsFakeContainerLeft: [{ type: HostBinding, args: ['class.fake-input-container-left',] }]
};

class InputItemModule {
}
InputItemModule.decorators = [
    { type: NgModule, args: [{
                exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                imports: [CommonModule, FormsModule, ReactiveFormsModule]
            },] }
];

class ButtonComponent {
    constructor(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.prefixCls = 'am-button';
        this.ngTemplate = false;
        this._className = '';
        this._classList = [];
        this._size = 'large';
        this._loading = false;
        this._active = false;
        this._inline = false;
        this._disabled = false;
        this._icon = '';
        this._userAgent = navigator.userAgent || navigator.vendor || window.opera;
        this.onClick = new EventEmitter();
        this._el = this._elementRef.nativeElement;
        this._render.addClass(this._el, this.prefixCls);
        this._className = this._el.className;
    }
    get type() {
        return this._type;
    }
    get size() {
        return this._size;
    }
    get disabled() {
        return this._disabled;
    }
    get loading() {
        return this._loading;
    }
    get inline() {
        return this._inline;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.ngTemplate = true;
            this._icon = value;
        }
        else {
            this.ngTemplate = false;
            this._icon = value;
            this.setClassMap();
        }
    }
    set className(v) {
        this._className = this._className + ' ' + v;
        this.setClassMap();
    }
    touchStart(event) {
        if (this._disabled) {
            return;
        }
        this._active = true;
        this.setClassMap();
    }
    touchEnd(event) {
        if (this._disabled) {
            return;
        }
        this._active = false;
        this.setClassMap();
    }
    click(event) {
        if (this._disabled) {
            return;
        }
        this.onClick.emit();
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    set disabled(value) {
        this._disabled = value;
        this.setClassMap();
    }
    set loading(value) {
        this._loading = value;
        if (this._el.querySelector('icon')) {
            const icon = this._el.querySelector('icon');
            icon.style.display = value ? '' : 'none';
        }
        this.setClassMap();
    }
    set size(value) {
        this._size = value;
        this.setClassMap();
    }
    set inline(value) {
        this._inline = value;
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this._el.querySelector('img')) {
            const amSize = this._size === 'small' ? 'am-icon-xxs' : 'am-icon-md';
            this._el.querySelector('img').setAttribute('class', `am-icon ${this.prefixCls}-icon ${amSize}`);
            this._render.addClass(this._el, `${this.prefixCls}-icon`);
        }
    }
    setClassMap() {
        this.iconType = this._loading ? 'loading' : this._icon;
        this._classList = [
            this._type && `${this.prefixCls}-${this._type}`,
            this._size === 'small' && `${this.prefixCls}-${this._size}`,
            this._disabled && `${this.prefixCls}-disabled`,
            this._loading && `${this.prefixCls}-loading`,
            this.iconType && `${this.prefixCls}-icon`,
            this._active && `${this.prefixCls}-active`,
            this._inline && `${this.prefixCls}-inline`
        ].filter(item => {
            return !!item;
        });
        this._el.className = this._className + ' ' + this._classList.join(' ');
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[Button], nzm-button',
                encapsulation: ViewEncapsulation.None,
                template: "<Icon\n  *ngIf=\"!ngTemplate\"\n  class=\"{{ prefixCls }}-icon\"\n  [type]=\"iconType\"\n  [size]=\"size === 'small' ? 'xxs' : 'md'\"\n></Icon>\n<ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"icon\"></ng-template>\n<ng-content select=\"img\"></ng-content>\n<div class=\"{{ prefixCls }}-content\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n</div>\n"
            },] }
];
ButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    loading: [{ type: Input }],
    inline: [{ type: Input }],
    icon: [{ type: Input }],
    className: [{ type: Input }],
    onClick: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }],
    touchEnd: [{ type: HostListener, args: ['touchend', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }, { type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchcancel', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/* tslint:disable:max-line-length */
const svgSprite = contents => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink"
  id="__ANTD_MOBILE_SVG_SPRITE_NODE__"
  style="position:absolute;width:0;height:0"
>
  <defs>
    ${contents}
  </defs>
</svg>
`;
const ɵ0 = svgSprite;
class IconHandler {
    constructor() {
        this.contents = [];
        // both minified by https://github.com/svg/svgo
        this.icons = {
            check: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
            'check-circle': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
            'check-circle-o': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
            cross: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
            'cross-circle': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
            'cross-circle-o': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
            // Todo: simplify direction to 2, use css transform
            left: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
            right: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
            down: '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
            up: '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
            loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
            search: '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
            ellipsis: '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
            'ellipsis-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
            'exclamation-circle': '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
            'info-circle': '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
            'question-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
            voice: '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
            plus: '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
            minus: '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
            dislike: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
            fail: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
            success: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
        };
    }
    renderSvgSprite() {
        const symbols = Object.keys(this.icons)
            .map(iconName => {
            const svgContent = this.icons[iconName].split('svg')[1];
            return `<symbol id=${iconName}${svgContent}symbol>`;
        })
            .join('');
        return svgSprite(symbols);
    }
    load() {
        if (!document) {
            return;
        }
        const existing = document.getElementById('__ANTD_MOBILE_SVG_SPRITE_NODE__');
        const mountNode = document.body;
        if (!existing) {
            mountNode.insertAdjacentHTML('afterbegin', this.renderSvgSprite());
        }
    }
}
IconHandler.decorators = [
    { type: Injectable }
];
IconHandler.ctorParameters = () => [];

class IconComponent {
    constructor(_iconHandler) {
        this._iconHandler = _iconHandler;
        this.clsMap = {};
        this._type = '';
        this._size = 'md';
        this._src = '';
        this.color = '';
        this._iconHandler.load();
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.setClsMap();
    }
    get src() {
        return this._src;
    }
    set src(value) {
        this._src = value;
        this.setClsMap();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this.setClsMap();
    }
    setClsMap() {
        this.clsMap = {
            [`am-icon-${this._type}`]: true,
            [`am-icon-${this._size}`]: true
        };
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'Icon, nzm-icon',
                template: "<svg *ngIf=\"type\" class=\"am-icon\" [ngClass]=\"clsMap\" [ngStyle]=\"{ color: color }\">\n  <use xmlns:xlink=\"https://www.w3.org/1999/xlink\" attr.xlink:href=\"#{{ type }}\"></use>\n</svg>\n<img *ngIf=\"src\" src=\"{{ src }}\" class=\"am-icon\" [ngClass]=\"clsMap\" />\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [IconHandler]
            },] }
];
IconComponent.ctorParameters = () => [
    { type: IconHandler }
];
IconComponent.propDecorators = {
    color: [{ type: Input }],
    type: [{ type: Input }],
    src: [{ type: Input }],
    size: [{ type: Input }]
};

class IconModule {
}
IconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [IconComponent],
                declarations: [IconComponent]
            },] }
];

class WingBlankComponent {
    constructor() {
        this.prefixCls = 'am-wingblank';
        this.size = 'lg';
        this.amWingBlank = true;
    }
    get amWingBlnkSm() {
        return this.size === 'sm';
    }
    get amWingBlnkMd() {
        return this.size === 'md';
    }
    get amWingBlnkLg() {
        return this.size === 'lg';
    }
}
WingBlankComponent.decorators = [
    { type: Component, args: [{
                selector: 'WingBlank, nzm-wingblank',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
WingBlankComponent.ctorParameters = () => [];
WingBlankComponent.propDecorators = {
    size: [{ type: Input }],
    amWingBlank: [{ type: HostBinding, args: ['class.am-wingblank',] }],
    amWingBlnkSm: [{ type: HostBinding, args: ['class.am-wingblank-sm',] }],
    amWingBlnkMd: [{ type: HostBinding, args: ['class.am-wingblank-md',] }],
    amWingBlnkLg: [{ type: HostBinding, args: ['class.am-wingblank-lg',] }]
};

class WingBlankModule {
}
WingBlankModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WingBlankComponent],
                exports: [WingBlankComponent],
                imports: [CommonModule]
            },] }
];

class WhiteSpaceComponent {
    constructor() {
        this.prefixCls = 'am-whitespace';
        this.size = 'md';
        this.amWhiteSpace = true;
    }
    get amWhitespaceXs() {
        return this.size === 'xs';
    }
    get amWhitespaceSm() {
        return this.size === 'sm';
    }
    get amWhitespaceMd() {
        return this.size === 'md';
    }
    get amWhitespaceLg() {
        return this.size === 'lg';
    }
    get amWhitespaceXl() {
        return this.size === 'xl';
    }
}
WhiteSpaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'WhiteSpace, nzm-whitespace',
                template: ``
            },] }
];
WhiteSpaceComponent.ctorParameters = () => [];
WhiteSpaceComponent.propDecorators = {
    size: [{ type: Input }],
    amWhiteSpace: [{ type: HostBinding, args: ['class.am-whitespace',] }],
    amWhitespaceXs: [{ type: HostBinding, args: ['class.am-whitespace-xs',] }],
    amWhitespaceSm: [{ type: HostBinding, args: ['class.am-whitespace-sm',] }],
    amWhitespaceMd: [{ type: HostBinding, args: ['class.am-whitespace-md',] }],
    amWhitespaceLg: [{ type: HostBinding, args: ['class.am-whitespace-lg',] }],
    amWhitespaceXl: [{ type: HostBinding, args: ['class.am-whitespace-xl',] }]
};

class WhiteSpaceModule {
}
WhiteSpaceModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WhiteSpaceComponent],
                exports: [WhiteSpaceComponent],
                imports: [CommonModule]
            },] }
];

class ListComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list'
        };
        this.renderHeaderType = '';
        this.renderFooterType = '';
        this._renderHeader = '';
        this._renderFooter = '';
        this._className = '';
    }
    set className(value) {
        this._className = value;
    }
    get renderHeader() {
        return this._renderHeader;
    }
    set renderHeader(value) {
        if (value instanceof TemplateRef) {
            this.renderHeaderType = 'templateRef';
        }
        else {
            this.renderHeaderType = typeof value;
        }
        this._renderHeader = value;
    }
    get renderFooter() {
        return this._renderFooter;
    }
    set renderFooter(value) {
        if (value instanceof TemplateRef) {
            this.renderFooterType = 'templateRef';
        }
        else {
            this.renderFooterType = typeof value;
        }
        this._renderFooter = value;
    }
    get hostClassName() {
        return 'am-list ' + this._className;
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'List, nzm-list',
                template: "<div\n  *ngIf=\"renderHeader && renderHeaderType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-header\"\n  [innerHTML]=\"renderHeader\"\n></div>\n<div *ngIf=\"renderHeader && renderHeaderType === 'function'\" class=\"{{ defaultProps.prefixCls }}-header\">\n  {{ renderHeader() }}\n</div>\n<ng-template *ngIf=\"renderHeader && renderHeaderType === 'templateRef'\" [ngTemplateOutlet]=\"renderHeader\">\n</ng-template>\n<div class=\"{{ defaultProps.prefixCls }}-body\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"renderFooter && renderFooterType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-footer\"\n  [innerHTML]=\"renderFooter\"\n></div>\n<div *ngIf=\"renderFooter && renderFooterType === 'function'\" class=\"{{ defaultProps.prefixCls }}-footer\">\n  {{ renderFooter() }}\n</div>\n<ng-template *ngIf=\"renderFooter && renderFooterType === 'templateRef'\" [ngTemplateOutlet]=\"renderFooter\">\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    className: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderFooter: [{ type: Input }],
    hostClassName: [{ type: HostBinding, args: ['class',] }]
};

class ListItemComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list',
            align: 'middle',
            error: false,
            multipleLine: false,
            wrap: false,
            platform: 'ios',
            rippleStyle: {}
        };
        this.arrowCls = {};
        this.lineCls = {};
        this.wrapCls = '';
        this.rippleCls = {};
        this.rippleClicked = false;
        this._thumb_component = false;
        this._thumb_src = '';
        this._extra_component = false;
        this._extra_title = '';
        this._arrow = '';
        this._disabled = false;
        this._className = '';
        this._active = false;
        this.onClick = new EventEmitter();
    }
    get extra() {
        return this._extra;
    }
    get extra_component() {
        return this._extra_component;
    }
    get extra_title() {
        return this._extra_title;
    }
    set extra(value) {
        if (value instanceof TemplateRef) {
            this._extra_component = true;
            this._extra = value;
        }
        else {
            this._extra_component = false;
            this._extra_title = value;
        }
    }
    set className(value) {
        this._className = value;
        this.setClsMap();
    }
    get arrow() {
        return this._arrow;
    }
    set arrow(value) {
        this._arrow = value;
        this.setClsMap();
    }
    set multipleLine(value) {
        this.defaultProps.multipleLine = value === '' ? true : value;
        this.setClsMap();
    }
    set error(value) {
        this.defaultProps.error = value === '' ? true : value;
        this.setClsMap();
    }
    set wrap(value) {
        this.defaultProps.wrap = value === '' ? true : value;
        this.setClsMap();
    }
    set align(value) {
        this.defaultProps.align = value;
        this.setClsMap();
    }
    set platform(value) {
        this.defaultProps.platform = value;
    }
    set disabled(value) {
        if (typeof value === 'boolean') {
            this._disabled = value;
        }
        else {
            if (value === 'true') {
                this._disabled = true;
            }
            else {
                this._disabled = false;
            }
        }
        this.setClsMap();
    }
    get thumb() {
        return this._thumb;
    }
    get thumb_component() {
        return this._thumb_component;
    }
    get thumb_src() {
        return this._thumb_src;
    }
    set thumb(value) {
        if (value instanceof TemplateRef) {
            this._thumb_component = true;
            this._thumb = value;
        }
        else {
            this._thumb_component = false;
            this._thumb_src = value;
        }
    }
    get bingClassName() {
        return this.wrapCls;
    }
    click(event) {
        this.onItemClick(event);
    }
    start() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = true;
            this.setClsMap();
        }
    }
    move() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    end() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    mouse_start() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = true;
            this.setClsMap();
        }
    }
    mouse_end() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    setClsMap() {
        const classNameList = this._className.split(' ');
        let classNameObj = {};
        this.wrapCls = '';
        for (const value of classNameList) {
            if (value) {
                classNameObj = Object.assign(Object.assign({}, classNameObj), { [`${value}`]: true });
            }
        }
        const wrapClsObj = Object.assign({ [`${this.defaultProps.prefixCls}-item`]: true, [`${this.defaultProps.prefixCls}-item-disabled`]: this._disabled, [`${this.defaultProps.prefixCls}-item-active`]: this._active, [`${this.defaultProps.prefixCls}-item-error`]: this.defaultProps.error, [`${this.defaultProps.prefixCls}-item-top`]: this.defaultProps.align === 'top', [`${this.defaultProps.prefixCls}-item-middle`]: this.defaultProps.align === 'middle', [`${this.defaultProps.prefixCls}-item-bottom`]: this.defaultProps.align === 'bottom' }, classNameObj);
        for (const key in wrapClsObj) {
            if (wrapClsObj[key]) {
                this.wrapCls += ` ${key}`;
            }
        }
        this.rippleCls = {
            [`${this.defaultProps.prefixCls}-ripple`]: true,
            [`${this.defaultProps.prefixCls}-ripple-animate`]: this.rippleClicked
        };
        this.lineCls = {
            [`${this.defaultProps.prefixCls}-line`]: true,
            [`${this.defaultProps.prefixCls}-line-multiple`]: this.defaultProps.multipleLine,
            [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap
        };
        this.arrowCls = {
            [`${this.defaultProps.prefixCls}-arrow`]: true,
            [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === 'horizontal',
            [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === 'down' || this._arrow === 'up',
            [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === 'up'
        };
    }
    onItemClick(ev) {
        const isAndroid = this.defaultProps.platform === 'android';
        if (isAndroid) {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            const Item = ev.currentTarget;
            const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
            const ClientRect = ev.currentTarget.getBoundingClientRect();
            const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
            const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
            const coverRippleStyle = {
                width: `${RippleWidth}px`,
                height: `${RippleWidth}px`,
                left: `${pointX}px`,
                top: `${pointY}px`
            };
            this.defaultProps.rippleStyle = coverRippleStyle;
            this.rippleClicked = true;
            this.setClsMap();
            this.debounceTimeout = setTimeout(() => {
                this.rippleClicked = false;
                this.defaultProps.rippleStyle = { display: 'none' };
                this.setClsMap();
            }, 1000);
        }
        this.onClick.emit(ev);
    }
    ngOnInit() {
        this.defaultProps.rippleStyle = { display: 'none' };
        this.setClsMap();
    }
    ngOnDestroy() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
    }
}
ListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ListItem, nzm-list-item',
                template: "<div *ngIf=\"thumb_src && !thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <img src=\"{{ thumb_src }}\" />\n</div>\n<div *ngIf=\"thumb && thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <ng-template [ngTemplateOutlet]=\"thumb\"></ng-template>\n</div>\n<div [ngClass]=\"lineCls\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"extra_title && !extra_component\"\n    class=\"{{ defaultProps.prefixCls }}-extra\"\n    [innerHTML]=\"extra_title\"\n  ></div>\n  <div *ngIf=\"extra && extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\">\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n  <div *ngIf=\"arrow\" [ngClass]=\"arrowCls\" aria-hidden=\"true\"></div>\n</div>\n<div [ngClass]=\"rippleCls\" [ngStyle]=\"defaultProps.rippleStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    extra: [{ type: Input }],
    className: [{ type: Input }],
    arrow: [{ type: Input }],
    multipleLine: [{ type: Input }],
    error: [{ type: Input }],
    wrap: [{ type: Input }],
    align: [{ type: Input }],
    platform: [{ type: Input }],
    disabled: [{ type: Input }],
    thumb: [{ type: Input }],
    onClick: [{ type: Output }],
    bingClassName: [{ type: HostBinding, args: ['class',] }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }],
    start: [{ type: HostListener, args: ['touchstart',] }],
    move: [{ type: HostListener, args: ['touchmove',] }],
    end: [{ type: HostListener, args: ['touchend',] }],
    mouse_start: [{ type: HostListener, args: ['mousedown',] }],
    mouse_end: [{ type: HostListener, args: ['mouseup',] }]
};

class BriefComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list'
        };
    }
}
BriefComponent.decorators = [
    { type: Component, args: [{
                selector: 'Brief, nzm-brief',
                template: "<div class=\"{{ defaultProps.prefixCls }}-brief\">\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];

class ListModule {
}
ListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                exports: [ListComponent, ListItemComponent, BriefComponent],
                declarations: [ListComponent, ListItemComponent, BriefComponent]
            },] }
];

const NZ_BUTTON_DIRECTIVES = [ButtonComponent];
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: NZ_BUTTON_DIRECTIVES,
                exports: NZ_BUTTON_DIRECTIVES,
                imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
            },] }
];

class SwitchComponent {
    constructor() {
        this.prefixCls = 'am-switch';
        this.wrapCls = 'am-switch';
        this.checkboxCls = {
            'checkbox-disabled': false,
            'checkbox-active': false,
            'checkbox-inactive': true
        };
        this.colorStyle = {};
        this.switchChecked = false;
        this._color = '';
        this._disabled = false;
        this.onChanged = Function.prototype;
        this.onTouched = Function.prototype;
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.dispaly = true;
    }
    set color(value) {
        this._color = value;
        this.colorStyle = { background: this._color };
    }
    set platform(value) {
        this.wrapCls = value === 'android' ? `${this.prefixCls}-android` : this.prefixCls;
    }
    set checked(value) {
        this.switchChecked = value;
        this.checkboxCls = {
            'checkbox-disabled': this._disabled,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
        this.colorStyle = { background: value ? this._color : '' };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.checkboxCls = {
            'checkbox-disabled': value,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
    }
    changeSwitch(checkedValue) {
        this.onChanged(checkedValue);
        this.switchChecked = checkedValue;
        this.checkboxCls = {
            'checkbox-disabled': this._disabled,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
        this.colorStyle = { background: checkedValue ? this._color : '' };
        this.onChange.emit(checkedValue);
    }
    click() {
        this.onClick.emit(this.switchChecked);
    }
    writeValue(value) {
        this.switchChecked = value;
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'Switch, nzm-switch',
                template: "<label class=\"{{ prefixCls }}\" [ngClass]=\"wrapCls\">\n  <input\n    #switchValue\n    type=\"checkbox\"\n    name=\"name\"\n    class=\"{{ prefixCls }}-checkbox\"\n    [checked]=\"switchChecked\"\n    [value]=\"switchChecked\"\n    [disabled]=\"disabled\"\n    (change)=\"changeSwitch(switchValue.checked)\"\n  />\n  <div class=\"checkbox\" [ngClass]=\"checkboxCls\" [ngStyle]=\"colorStyle\" (click)=\"click()\"></div>\n</label>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SwitchComponent),
                        multi: true
                    }
                ]
            },] }
];
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    color: [{ type: Input }],
    name: [{ type: Input }],
    platform: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    onClick: [{ type: Output }],
    dispaly: [{ type: HostBinding, args: ['style.display',] }]
};

class SwitchModule {
}
SwitchModule.decorators = [
    { type: NgModule, args: [{
                exports: [SwitchComponent],
                declarations: [SwitchComponent],
                imports: [CommonModule, WingBlankModule]
            },] }
];

class SearchBarComponent {
    constructor(_elementRef, _localeProvider) {
        this._elementRef = _elementRef;
        this._localeProvider = _localeProvider;
        this.prefixCls = 'am-search';
        this.cancelCls = {
            [`${this.prefixCls}-cancel`]: true
        };
        this.isComposing = false;
        this._defaultValue = '';
        this._value = '';
        this._placeholder = '';
        this._showCancelButton = false;
        this._disabled = false;
        this._focus = false;
        this._isSubmit = false;
        this._isCustomText = false;
        this._isClearClicking = false;
        this._blurFromOnClear = false;
        this.locale = {};
        this._unsubscribe$ = new Subject();
        this.onSubmit = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this._value = value;
        this.inputElementRef.nativeElement.value = this._value;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v || '';
        this.inputElementRef.nativeElement.value = this._value;
        this.setClass();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get showCancelButton() {
        return this._showCancelButton;
    }
    set showCancelButton(value) {
        this._showCancelButton = value;
        this.setClass();
    }
    get cancelText() {
        return this._cancelText;
    }
    set cancelText(value) {
        if (value !== undefined) {
            this._cancelText = value;
            this._isCustomText = true;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(value) {
        this._maxLength = value;
    }
    set setFocus(value) {
        if (value) {
            if (value.focusValue) {
                this._focus = true;
                this.inputElementRef.nativeElement.focus();
                this._blurFromOnClear = true;
                this.onSearchbarFocus();
            }
            else {
                this._blurFromOnClear = false;
                this.onSearchbarBlur();
            }
        }
    }
    setClass() {
        this.wrapCls = {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-start`]: !!(this._focus || (this._value && this._value.length > 0)) && !this._disabled
        };
        this.cancelCls = {
            [`${this.prefixCls}-cancel`]: true,
            [`${this.prefixCls}-cancel-show`]: this._showCancelButton || this._focus || (this._value && this._value.length > 0),
            [`${this.prefixCls}-cancel-anim`]: this._focus
        };
        this.clearCls = {
            [`${this.prefixCls}-clear`]: this._value && this._value.length > 0,
            [`${this.prefixCls}-clear-show`]: this._value && this._value.length > 0 && !this._isSubmit,
            [`${this.prefixCls}-clear-active`]: this._isClearClicking
        };
    }
    setStyle() {
        if (this._inputContainerRef.className.indexOf(`${this.prefixCls}-start`) > -1) {
            const realWidth = this._syntheticPhContainerRef.getBoundingClientRect().width;
            this._syntheticPhRef.style.width = Math.ceil(realWidth) + 'px';
            if (!this._showCancelButton) {
                this._rightBtnRef.style.marginRight = '0';
            }
        }
        else {
            this._syntheticPhRef.style.width = '100%';
            if (!this._showCancelButton) {
                this._rightBtnInitMarginLeft = window.getComputedStyle(this._rightBtnRef)['margin-left'];
                const btnMarginRight = this._rightBtnRef.offsetWidth + parseInt(this._rightBtnInitMarginLeft, 10);
                this._rightBtnRef.style.marginRight = '-' + btnMarginRight + 'px';
            }
        }
    }
    onSearchbarBlur() {
        const self = this;
        setTimeout(() => {
            if (!self._blurFromOnClear && self._value === '' && self._focus) {
                self._focus = false;
                self._value = '';
                self.onBlur.emit();
                self.setClass();
            }
            self._blurFromOnClear = false;
        }, 50);
    }
    onSearchbarFocus() {
        this._focus = true;
        this._isSubmit = false;
        this.onFocus.emit();
        this.setClass();
    }
    onSearchbarChange(e) {
        this._focus = true;
        this._value = e;
        this.onChange.emit(e);
        this.onChangeFn(e);
        this.setClass();
    }
    onSearchSubmit(e) {
        e.preventDefault();
        this._value = e.target[0].value;
        this._isSubmit = true;
        this.onSubmit.emit(this._value);
        this.setClass();
        this._blurFromOnClear = true;
        this.inputElementRef.nativeElement.blur();
    }
    onSearchbarCancel() {
        this._focus = false;
        this._value = '';
        this.onCancel.emit();
        this.setClass();
    }
    onSearchbarClear() {
        this._blurFromOnClear = true;
        this._isClearClicking = true;
        this.onSearchbarChange('');
        this.inputElementRef.nativeElement.focus();
        this.onClear.emit(this._value);
        this.setClass();
        setTimeout(() => {
            this._value = '';
            this._isClearClicking = false;
            this._blurFromOnClear = false;
            this.setClass();
        }, 100);
        this.onSearchbarFocus();
    }
    onSetCompositionState(isComposing) {
        this.isComposing = isComposing;
    }
    writeValue(value) {
        this._value = value || '';
        this.inputElementRef.nativeElement.value = this._value;
        this.setClass();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    ngOnInit() {
        this.setClass();
        this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this.locale = this._localeProvider.getLocaleSubObj('SearchBar');
            this._cancelText = this._isCustomText ? this._cancelText : this.locale.cancelText;
        });
    }
    ngAfterViewInit() {
        this._syntheticPhContainerRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}-synthetic-ph-container`)[0];
        this._syntheticPhRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}-synthetic-ph`)[0];
        this._rightBtnRef = this._elementRef.nativeElement.getElementsByClassName('cancel')[0];
        this._inputContainerRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}`)[0];
    }
    ngAfterViewChecked() {
        this.setStyle();
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
SearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'SearchBar, nzm-search-bar',
                template: "<form name=\"myForm\" class=\"{{ prefixCls }}\" [ngClass]=\"wrapCls\" action=\"#\" (submit)=\"onSearchSubmit($event)\">\n  <div class=\"{{ prefixCls }}-input\">\n    <div\n      class=\"{{ prefixCls }}-synthetic-ph\"\n      style=\"box-sizing:unset\"\n      [@cancelButtonState]=\"showCancelButton ? 'visible' : 'hidden'\"\n    >\n      <span class=\"{{ prefixCls }}-synthetic-ph-container\">\n        <i class=\"{{ prefixCls }}-synthetic-ph-icon\"></i>\n        <span\n          class=\"{{ prefixCls }}-synthetic-ph-placeholder\"\n          [ngStyle]=\"{ visibility: placeholder && !isComposing && !value ? 'visible' : 'hidden' }\"\n        >\n          {{ placeholder }}\n        </span>\n      </span>\n    </div>\n    <input\n      #search\n      class=\"{{ prefixCls }}-value\"\n      style=\"outline:none;\"\n      [name]=\"'search'\"\n      [type]=\"'search'\"\n      [disabled]=\"disabled\"\n      [maxlength]=\"maxLength\"\n      [placeholder]=\"placeholder\"\n      [ngModel]=\"value\"\n      (blur)=\"onSearchbarBlur()\"\n      (focus)=\"onSearchbarFocus()\"\n      (ngModelChange)=\"onSearchbarChange($event)\"\n      (compositionstart)=\"onSetCompositionState(true)\"\n      (compositionend)=\"onSetCompositionState(false)\"\n    />\n    <a [ngClass]=\"clearCls\" style=\"box-sizing: content-box;transition: 0s\" (click)=\"onSearchbarClear()\"></a>\n  </div>\n  <div class=\"cancel\" [ngClass]=\"cancelCls\" (click)=\"onSearchbarCancel()\">\n    {{ cancelText }}\n  </div>\n</form>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchBarComponent),
                        multi: true
                    }
                ],
                animations: [
                    trigger('cancelButtonState', [
                        state('visible', style({ width: '*' })),
                        state('hidden', style({ width: '100%' })),
                        transition('visible =>hidden', [animate(300, style({ width: '100%' }))]),
                        transition('hidden => visible', [animate(300, style({ width: '*' }))])
                    ])
                ]
            },] }
];
SearchBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: LocaleProviderService }
];
SearchBarComponent.propDecorators = {
    inputElementRef: [{ type: ViewChild, args: ['search', { static: true },] }],
    defaultValue: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    showCancelButton: [{ type: Input }],
    cancelText: [{ type: Input }],
    disabled: [{ type: Input }],
    maxLength: [{ type: Input }],
    setFocus: [{ type: Input }],
    onSubmit: [{ type: Output }],
    onChange: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onCancel: [{ type: Output }],
    onClear: [{ type: Output }]
};

class LocaleProviderPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(keyPath) {
        return this._locale.getLocaleValue(keyPath);
    }
}
LocaleProviderPipe.decorators = [
    { type: Pipe, args: [{
                name: 'localeProvider'
            },] }
];
LocaleProviderPipe.ctorParameters = () => [
    { type: LocaleProviderService }
];

const ɵ0$1 = zh_CN;
class LocaleProviderModule {
}
LocaleProviderModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [LocaleProviderPipe],
                exports: [LocaleProviderPipe],
                providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: ɵ0$1 }, LOCALE_PROVIDER_SERVICE_PROVIDER]
            },] }
];

class SearchBarModule {
}
SearchBarModule.decorators = [
    { type: NgModule, args: [{
                exports: [SearchBarComponent],
                declarations: [SearchBarComponent],
                imports: [CommonModule, FormsModule, LocaleProviderModule]
            },] }
];

class StepperComponent {
    constructor() {
        this.prefixCls = 'am-stepper';
        this._max = Infinity;
        this._min = -Infinity;
        this._step = 1;
        this._disabled = false;
        this._readOnly = false;
        this._showNumber = false;
        this._upDisabled = false;
        this._downDisabled = false;
        this._isUpClick = false;
        this._isDownClick = false;
        this.onChange = new EventEmitter();
        this.clsStepper = true;
        this.clsStpDisabled = this._disabled;
        this.clsShowNum = this._showNumber;
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    set step(value) {
        this._step = value;
    }
    set defaultValue(value) {
        if (value) {
            this._defaultValue = value;
            this._value = value;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value) {
            this._downDisabled = value;
            this._upDisabled = value;
        }
        this._disabled = value;
        this.clsStpDisabled = value;
    }
    get readOnly() {
        return this._readOnly;
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    set showNumber(value) {
        this._showNumber = value;
        this.clsShowNum = value;
    }
    onIncrease() {
        if (!this._upDisabled) {
            this._value = this.plus(this._value, this._step);
            this.onChange.emit(this._value);
            this.onChangeFn(this._value);
            if (this.plus(this._value, this._step) > this._max) {
                this._upDisabled = true;
            }
            if (this.minus(this._value, this._step) >= this._min) {
                this._downDisabled = false;
            }
            this._isUpClick = true;
            this.setCls();
            setTimeout(() => {
                this._isUpClick = false;
                this.setCls();
            }, 100);
        }
    }
    onDecrease() {
        if (!this._downDisabled) {
            this._value = this.minus(this._value, this._step);
            this.onChange.emit(this._value);
            this.onChangeFn(this._value);
            if (this.minus(this._value, this._step) < this._min) {
                this._downDisabled = true;
            }
            if (this.plus(this._value, this._step) <= this._max) {
                this._upDisabled = false;
            }
            this._isDownClick = true;
            this.setCls();
            setTimeout(() => {
                this._isDownClick = false;
                this.setCls();
            }, 100);
        }
    }
    inputChange(event) {
        const value = event;
        this._value = value ? +value : 0;
        if (this._value < this._min) {
            this._value = this._min;
        }
        if (this._value > this._max) {
            this._value = this._max;
        }
        this._upDisabled = this.plus(this._value, this._step) > this._max ? true : false;
        this._downDisabled = this.minus(this._value, this._step) < this._min ? true : false;
        this.setCls();
        this.onChange.emit(this._value);
        this.onChangeFn(this._value);
    }
    setCls() {
        this.upDisableCls = {
            [`${this.prefixCls}-handler-up-disabled`]: this._upDisabled,
            [`${this.prefixCls}-handler-active`]: this._isUpClick
        };
        this.downDisableCls = {
            [`${this.prefixCls}-handler-down-disabled`]: this._downDisabled,
            [`${this.prefixCls}-handler-active`]: this._isDownClick
        };
    }
    ngOnChanges() {
        if (this._disabled) {
            this._downDisabled = true;
            this._upDisabled = true;
        }
        else {
            this._upDisabled = this.plus(this._value, this._step) > this._max ? true : false;
            this._downDisabled = this.minus(this._value, this._step) < this._min ? true : false;
        }
        this.setCls();
    }
    writeValue(value) {
        this._value = value;
        this.ngOnChanges();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    plus(num1, num2) {
        if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
            return;
        }
        const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
        return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
    }
    minus(num1, num2) {
        if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
            return;
        }
        const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
        return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
    }
    digitLength(num) {
        const eSplit = num.toString().split(/[eE]/);
        const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
        return len > 0 ? len : 0;
    }
    times(num1, num2) {
        const num1Changed = this.floatToFixed(num1);
        const num2Changed = this.floatToFixed(num2);
        const baseNum = this.digitLength(num1) + this.digitLength(num2);
        const leftValue = num1Changed * num2Changed;
        return leftValue / Math.pow(10, baseNum);
    }
    floatToFixed(num) {
        if (num.toString().indexOf('e') === -1) {
            return Number(num.toString().replace('.', ''));
        }
        const dLen = this.digitLength(num);
        return dLen > 0 ? this.strip(num * Math.pow(10, dLen)) : num;
    }
    strip(num, precision = 12) {
        return +parseFloat(num.toPrecision(precision));
    }
}
StepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'Stepper, nzm-stepper',
                template: "<div class=\"{{ prefixCls }}-handler-wrap\">\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-up\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"upDisableCls\"\n    (click)=\"onIncrease()\"\n  >\n    <Icon [type]=\"'plus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-down\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"downDisableCls\"\n    (click)=\"onDecrease()\"\n  >\n    <Icon [type]=\"'minus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n</div>\n<div class=\"{{ prefixCls }}-input-wrap\">\n  <input\n    class=\"{{ prefixCls }}-input\"\n    style=\"outline:none\"\n    [disabled]=\"disabled\"\n    [readonly]=\"readOnly\"\n    [autocomplete]=\"'off'\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [(ngModel)]=\"value\"\n    (ngModelChange)=\"inputChange($event)\"\n  />\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => StepperComponent),
                        multi: true
                    }
                ]
            },] }
];
StepperComponent.ctorParameters = () => [];
StepperComponent.propDecorators = {
    max: [{ type: Input }],
    min: [{ type: Input }],
    value: [{ type: Input }],
    step: [{ type: Input }],
    defaultValue: [{ type: Input }],
    disabled: [{ type: Input }],
    readOnly: [{ type: Input }],
    showNumber: [{ type: Input }],
    onChange: [{ type: Output }],
    clsStepper: [{ type: HostBinding, args: ['class.am-stepper',] }],
    clsStpDisabled: [{ type: HostBinding, args: ['class.am-stepper-disabled',] }],
    clsShowNum: [{ type: HostBinding, args: ['class.showNumber',] }]
};

class StepperModule {
}
StepperModule.decorators = [
    { type: NgModule, args: [{
                exports: [StepperComponent],
                declarations: [StepperComponent],
                imports: [CommonModule, FormsModule, IconModule]
            },] }
];

class StepComponent {
    constructor(_el) {
        this._el = _el;
        this.prefixCls = 'am-steps';
        this.stepItemCls = {};
        this.iconCls = {
            [`${this.prefixCls}-icon`]: true
        };
        this.isIconString = true;
        this.outStatus = 'process';
        this.isCustomStatus = false;
        this.isCustomIcon = false;
        this.title = null;
        this.description = null;
        this._currentIndex = 0;
        this.clsStepItem = true;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        if (value) {
            this._status = value;
            this.isCustomStatus = true;
            this.setIcon();
            this.setClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value) {
            this._icon = value;
            this.isCustomIcon = true;
            this.setClass();
        }
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.stepNumber ? StepStatusEnum.FINISH : current === this.stepNumber ?
                this.outStatus || '' : StepStatusEnum.WAIT;
            this.setIcon();
            this.setClass();
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    setClass() {
        this.stepItemCls = {
            [`${this.prefixCls}-item-${this.status}`]: true,
            [`${this.prefixCls}-item-custom`]: this.isCustomIcon || (this.icon && this._currentIndex !== this.stepNumber)
        };
    }
    setIcon() {
        if (!this.isCustomIcon) {
            switch (this._status) {
                case StepStatusEnum.FINISH:
                    this._icon = 'check-circle-o';
                    break;
                case StepStatusEnum.ERROR:
                    this._icon = 'cross-circle-o';
                    break;
                case StepStatusEnum.WAIT:
                    this._icon = 'ellipsis';
                    break;
                default:
                    break;
            }
        }
    }
    ngOnInit() { }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'Step, nzm-step',
                template: "<div [ngClass]=\"stepItemCls\">\n  <div class=\"{{ prefixCls }}-item-tail\">\n    {{ tailContent }}\n  </div>\n  <div class=\"{{ prefixCls }}-item-icon\">\n    <span *ngIf=\"isTemplateRef(icon)\" [ngClass]=\"iconCls\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && (status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\">\n      <Icon [type]=\"icon\" [size]=\"iconSize\"> </Icon>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && !(status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\"\n      >{{ stepNumber }}\n    </span>\n  </div>\n  <div class=\"{{ prefixCls }}-item-content\">\n    <div class=\"{{ prefixCls }}-item-title\">\n      <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n    </div>\n    <div *ngIf=\"description\" class=\"{{ prefixCls }}-item-description\">\n      <ng-container *ngIf=\"!isTemplateRef(description); else descriptionTemplate\">{{ description }}</ng-container>\n    </div>\n  </div>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"description\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => StepComponent),
                        multi: true
                    }
                ]
            },] }
];
StepComponent.ctorParameters = () => [
    { type: ElementRef }
];
StepComponent.propDecorators = {
    status: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    icon: [{ type: Input }],
    clsStepItem: [{ type: HostBinding, args: ['class.am-steps-item',] }]
};
var StepStatusEnum;
(function (StepStatusEnum) {
    StepStatusEnum["WAIT"] = "wait";
    StepStatusEnum["PROCESS"] = "process";
    StepStatusEnum["FINISH"] = "finish";
    StepStatusEnum["ERROR"] = "error";
})(StepStatusEnum || (StepStatusEnum = {}));
var StepDirectionEnum;
(function (StepDirectionEnum) {
    StepDirectionEnum["VERTICAL"] = "vertical";
    StepDirectionEnum["HORIZONTAL"] = "horizontal";
})(StepDirectionEnum || (StepDirectionEnum = {}));

class StepsComponent {
    constructor(_elf, _render) {
        this._elf = _elf;
        this._render = _render;
        this.prefixCls = 'am-steps';
        this._current = 0;
        this._status = StepStatusEnum.PROCESS;
        this._direction = StepDirectionEnum.VERTICAL;
        this.clsSteps = true;
    }
    set current(value) {
        if (value >= 0) {
            this._current = value;
            if (this.stepItems) {
                this.setStepStyle();
            }
        }
    }
    set size(value) {
        this._size = value;
        this.setCls();
    }
    set status(value) {
        this._status = value;
        if (this.stepItems) {
            this.setStepStyle();
        }
    }
    set direction(value) {
        this._direction = value;
        this.setCls();
    }
    setStepStyle() {
        const itemCount = this.stepItems.length;
        const itemArr = this.stepItems['_results'];
        for (let index = 0; index < itemCount; index++) {
            const step = itemArr[index];
            step.stepNumber = index + 1;
            step.outStatus = this._status;
            step.currentIndex = this._current + 1;
            step.iconSize = this._size === 'small' ? (this._status === StepStatusEnum.WAIT ? 'xxs' : 'xs') : 'md';
            if (index < itemCount - 1 && itemArr[index + 1].status === StepStatusEnum.ERROR) {
                step.stepItemCls = step.stepItemCls
                    ? Object.assign(step.stepItemCls, { 'error-tail': true })
                    : { 'error-tail': true };
            }
        }
    }
    setCls() {
        if (this._direction === StepDirectionEnum.HORIZONTAL) {
            this.clsStepsLabelVtl = true;
            this.clsStepsHztl = true;
            this.clsStepsVtl = false;
        }
        else if (this._direction === StepDirectionEnum.VERTICAL) {
            this.clsStepsVtl = true;
            this.clsStepsHztl = false;
        }
        if (this._size === 'small') {
            this.clsStepsSmall = true;
        }
        else {
            this.clsStepsSmall = false;
        }
    }
    ngOnInit() {
        this.setCls();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.setStepStyle();
        }, 0);
        this.stepItems.changes.subscribe(change => {
            setTimeout(() => {
                this.setStepStyle();
            }, 0);
        });
    }
}
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'Steps,nzm-steps',
                template: "<ng-content></ng-content>\n"
            },] }
];
StepsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
StepsComponent.propDecorators = {
    stepItems: [{ type: ContentChildren, args: [StepComponent,] }],
    current: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    direction: [{ type: Input }],
    clsSteps: [{ type: HostBinding, args: ['class.am-steps',] }],
    clsStepsSmall: [{ type: HostBinding, args: ['class.am-steps-small',] }],
    clsStepsLabelVtl: [{ type: HostBinding, args: ['class.am-steps-label-vertical',] }],
    clsStepsVtl: [{ type: HostBinding, args: ['class.am-steps-vertical',] }],
    clsStepsHztl: [{ type: HostBinding, args: ['class.am-steps-horizontal',] }]
};

class StepsModule {
}
StepsModule.decorators = [
    { type: NgModule, args: [{
                exports: [StepsComponent, StepComponent],
                declarations: [StepsComponent, StepComponent],
                imports: [CommonModule, FormsModule, IconModule]
            },] }
];

class CarouselSlideComponent {
    constructor() {
        this.container = true;
        this.height = 'auto';
        this.overflow = 'hidden';
    }
}
CarouselSlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'CarouselSlide, nzm-carousel-slide',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CarouselSlideComponent.propDecorators = {
    container: [{ type: HostBinding, args: ['class.am-carousel-container',] }],
    width: [{ type: HostBinding, args: ['style.width.px',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    left: [{ type: HostBinding, args: ['style.left.px',] }],
    top: [{ type: HostBinding, args: ['style.top.px',] }],
    margin: [{ type: HostBinding, args: ['style.margin',] }],
    overflow: [{ type: HostBinding, args: ['style.overflow',] }]
};

function getEventTarget(event) {
    if (event.type === 'mousedown' ||
        event.type === 'mousemove' ||
        event.type === 'mouseup' ||
        event.type === 'mouseleave') {
        return event;
    }
    else {
        if (event && event.changedTouches && event.changedTouches[0]) {
            return event.changedTouches[0];
        }
    }
}

class CarouselComponent {
    constructor(_ele) {
        this._ele = _ele;
        this.style = {
            height: 'auto',
            width: '100%',
            transform: 'translate3d(0px, 0px, 0px)',
            margin: ''
        };
        this.lastIndex = 0;
        this.currentSelectedIndex = 0;
        this._nodeArr = [];
        this._isMouseDown = false;
        this._rationWidth = 0;
        this._currentSlideWidth = 0;
        this._currentSlideHeight = 0;
        this._transition = '';
        this._spaceWidth = 0;
        this._dragging = true;
        this._selectedIndex = 0;
        this.speed = 500;
        this.dots = true;
        this.vertical = false;
        this.autoplay = false;
        this.autoplayInterval = 3000;
        this.infinite = false;
        this.dotStyle = {};
        this.dotActiveStyle = {};
        this.frameOverflow = 'hidden';
        this.cellSpacing = 0;
        this.slideWidth = 1;
        this.swipeSpeed = 12;
        this.dragging = true;
        this.afterChange = new EventEmitter();
        this.beforeChange = new EventEmitter();
        this.carouselWrapper = true;
        this.carouselwrap = true;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        if (typeof value === 'undefined') {
            value = 0;
        }
        this._selectedIndex = Math.abs(value);
        if (this._nodeArr.length > 0) {
            this.carousel(1);
        }
    }
    panstart(event) {
        event.stopPropagation();
        if (!this._dragging) {
            return;
        }
        this.stopTimer();
        this._isMouseDown = true;
        this.touchObject = {
            startX: getEventTarget(event).pageX,
            startY: getEventTarget(event).pageY,
            direction: this.touchObject.direction
        };
    }
    panmove(event) {
        event.stopPropagation();
        if (!this._dragging || !this._isMouseDown) {
            return;
        }
        const { direction } = this.swipeDirection(this.touchObject.startX, getEventTarget(event).pageX, this.touchObject.startY, getEventTarget(event).pageY);
        if (direction === 0) {
            return;
        }
        const length = this.vertical
            ? Math.abs(getEventTarget(event).pageY - this.touchObject.startY)
            : Math.abs(getEventTarget(event).pageX - this.touchObject.startX);
        const offset = -this.touchObject.direction * length - this.currentSelectedIndex * this._rationWidth;
        this.touchObject = {
            startX: this.touchObject.startX,
            startY: this.touchObject.startY,
            endX: getEventTarget(event).pageX,
            endY: getEventTarget(event).pageY,
            length,
            direction,
            offset
        };
        if (direction !== 0) {
            this.setSlideStyles(this.currentSelectedIndex, this.touchObject.direction);
        }
        this.getListStyles(offset);
    }
    panend(event) {
        event.stopPropagation();
        if (!this._dragging || !this._isMouseDown || !this.touchObject.length || this.touchObject.length === undefined) {
            this._isMouseDown = false;
            return;
        }
        this._isMouseDown = false;
        if (this.touchObject.length > this.swipeSpeed) {
            this.carousel(this.touchObject.direction);
        }
        else {
            this.getListStyles(this.touchObject.direction * this.touchObject.length + this.touchObject.offset);
            this.style['transition'] = this._transition;
        }
        setTimeout(() => {
            this.startTimer();
        }, this.speed);
    }
    cancel() {
        setTimeout(() => {
            this.startTimer();
        }, this.speed);
    }
    resize() {
        if (this._resizeTimer) {
            clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = setTimeout(() => {
            this.ngAfterViewInit();
            clearTimeout(this._resizeTimer);
        }, 200);
    }
    initCarouselSize() {
        const nativeElement = this._ele.nativeElement;
        this.slideHeight = nativeElement.querySelector('carouselslide').clientHeight;
        this._currentSlideHeight = this.slideHeight * this.slideWidth;
        this._currentSlideWidth = nativeElement.clientWidth;
        this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
        this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
    }
    carouselInit(items) {
        this.infinite = this.infinite || true;
        this._nodeArr = items['_results'];
        const shouldDragging = this._nodeArr.length > 1;
        this._dragging = this.dragging && shouldDragging ? true : false;
        if (this._nodeArr.length > 1) {
            this.lastIndex = this._nodeArr.length - 1;
            setTimeout(() => {
                this._nodeArr.forEach((v, index) => {
                    v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
                    v.left = this.vertical ? 0 : index === this.lastIndex ? -this._rationWidth : index * this._rationWidth;
                    v.top = this.vertical ? (index === this.lastIndex ? -this._rationWidth : index * this._rationWidth) : 0;
                    v.margin = this.vertical ? `${this.cellSpacing / 2}px auto` : `auto ${this.cellSpacing / 2}px`;
                });
                this.startTimer();
            }, 0);
        }
        else if (this._nodeArr.length === 1) {
            setTimeout(() => {
                this._nodeArr.forEach(v => {
                    v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
                    v.left = 0;
                    v.top = 0;
                    v.margin = `auto ${this.cellSpacing / 2}px`;
                });
            }, 0);
        }
    }
    startTimer() {
        if (!this.autoplay) {
            return;
        }
        this.stopTimer();
        this._timer = this.autoplayInterval
            ? setInterval(() => {
                if (document.getElementsByTagName('carousel').length === 0) {
                    return;
                }
                this.carousel(1);
            }, this.autoplayInterval)
            : 0;
    }
    stopTimer() {
        clearInterval(this._timer);
    }
    carousel(moveDirection) {
        if (this.vertical) {
            if (moveDirection === 1) {
                this.moveUp();
            }
            else if (moveDirection === -1) {
                this.moveDown();
            }
        }
        else {
            if (moveDirection === 1) {
                this.moveLeft();
            }
            else if (moveDirection === -1) {
                this.moveRight();
            }
        }
        this.style['transition'] = this._transition;
    }
    moveUp() {
        this.gotoCarousel(this.getAfterNode(false));
    }
    moveDown() {
        this.gotoCarousel(this.getAfterNode(true));
    }
    moveLeft() {
        this.gotoCarousel(this.getAfterNode(false));
    }
    moveRight() {
        this.gotoCarousel(this.getAfterNode(true));
    }
    getAfterNode(pre) {
        let nextIndex;
        if (pre) {
            if (this.currentSelectedIndex <= 0) {
                this.getListStyles(this._rationWidth);
                setTimeout(() => {
                    this._nodeArr.forEach((v, tempIndex) => {
                        if (tempIndex === 0) {
                            v.left = this.vertical ? 0 : this._nodeArr.length * this._rationWidth;
                            v.top = this.vertical ? this._nodeArr.length * this._rationWidth : 0;
                        }
                        else {
                            v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
                            v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                        }
                    });
                    this.getListStyles(-this._rationWidth * (this.items.length - 1));
                }, this.speed);
                nextIndex = !this.infinite ? null : this.lastIndex;
                this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
                return nextIndex;
            }
            nextIndex = this.currentSelectedIndex - 1;
            this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
            this._nodeArr.forEach((v, tempIndex) => {
                if (0 === tempIndex && nextIndex === this._nodeArr.length - 2) {
                    v.left = 0;
                    v.top = 0;
                }
            });
            this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
            return nextIndex;
        }
        else {
            if (this.currentSelectedIndex >= this.lastIndex) {
                this.setSlideStyles(this.currentSelectedIndex, 1);
                this.getListStyles(-(this.lastIndex + 1) * this._rationWidth);
                nextIndex = !this.infinite ? null : 0;
                this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
                return nextIndex;
            }
            nextIndex = this.currentSelectedIndex + 1;
            this.setSlideStyles(this.currentSelectedIndex, 1);
            this.getListStyles(-nextIndex * this._rationWidth);
            this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
            return nextIndex;
        }
    }
    caculateDirectionLeftCurrentIndex() {
        const previousIndex = this.currentSelectedIndex;
        this.currentSelectedIndex = (previousIndex + 1) % this.items.length;
    }
    caculateDirectionRightCurrentIndex() {
        if (this.currentSelectedIndex === 0) {
            this.currentSelectedIndex = this.items.length;
        }
        const previousIndex = this.currentSelectedIndex;
        this.currentSelectedIndex = (previousIndex - 1) % this.items.length;
    }
    gotoCarousel(afterIndex) {
        if (afterIndex === null) {
            return;
        }
        this.getCurrentIndex();
        if (afterIndex === 0) {
            setTimeout(() => {
                this._nodeArr.forEach((v, index) => {
                    if (index === this._nodeArr.length - 1) {
                        v.left = this.vertical ? 0 : -this._rationWidth;
                        v.top = this.vertical ? -this._rationWidth : 0;
                    }
                    else {
                        v.left = this.vertical ? 0 : index * this._rationWidth;
                        v.top = this.vertical ? index * this._rationWidth : 0;
                    }
                });
                this.startTimer();
                this.getListStyles(0);
            }, this.speed);
        }
        this.currentSelectedIndex = afterIndex;
        this.afterChange.emit(this.currentSelectedIndex);
    }
    getCurrentIndex() {
        if (this.touchObject.direction === 1) {
            this.caculateDirectionLeftCurrentIndex();
        }
        else {
            this.caculateDirectionRightCurrentIndex();
        }
    }
    setSlideStyles(index, direction, xDist = 0) {
        if (direction === 1) {
            this._nodeArr.forEach((v, tempIndex) => {
                if (index < this._nodeArr.length && index - 1 === tempIndex) {
                    if (xDist === 0 || xDist > this._spaceWidth) {
                        v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                        v.top = this.vertical ? (this._nodeArr.length + tempIndex) * this._rationWidth : 0;
                    }
                }
                else if (this._nodeArr.length - 1 === tempIndex && index !== 2) {
                    if (xDist === 0 || xDist > this._spaceWidth) {
                        v.left = this.vertical ? 0 : (this._nodeArr.length - 1) * this._rationWidth;
                        v.top = this.vertical ? (this._nodeArr.length - 1) * this._rationWidth : 0;
                    }
                }
                else if (index === this._nodeArr.length - 1 && tempIndex === 1 && this.autoplay) {
                    v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
                else if (index === this._nodeArr.length - 1 && tempIndex === 0 && !this.autoplay) {
                    v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
            });
        }
        else if (direction === -1) {
            this._nodeArr.forEach((v, tempIndex) => {
                if (index === 0 && this._nodeArr.length - 1 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index === this._nodeArr.length - 2 && index + 1 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index === 1 && 0 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth * tempIndex;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index > 1) {
                    v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
            });
        }
    }
    getListStyles(offset = 0) {
        const positionOffset = offset +
            (this.vertical
                ? (this.slideHeight - this._currentSlideHeight) / 2
                : (this._currentSlideWidth - this._rationWidth) / 2) -
            this.cellSpacing;
        this.style = {
            height: this._currentSlideHeight + 'px',
            width: '100%',
            transform: this.vertical
                ? `translate3d(0px, ${positionOffset}px, 0px)`
                : `translate3d(${positionOffset}px, 0px, 0px)`,
            margin: this.vertical ? `${(this.cellSpacing / 2) * -1}px 0px` : `0px ${(this.cellSpacing / 2) * -1}px`
        };
    }
    swipeDirection(x1, x2, y1, y2) {
        const xDist = x1 - x2;
        const yDist = y1 - y2;
        const r = Math.atan2(yDist, xDist);
        let swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return {
                direction: 1,
                xDist: xDist
            };
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return {
                direction: 1,
                xDist: xDist
            };
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return {
                direction: -1,
                xDist: xDist
            };
        }
        if (this.vertical === true) {
            if (swipeAngle >= 35 + 33 && swipeAngle <= 135) {
                return {
                    direction: 1,
                    xDist: xDist
                };
            }
            else {
                return {
                    direction: -1,
                    xDist: xDist
                };
            }
        }
        return {
            direction: 0,
            xDist: xDist
        };
    }
    get page() {
        return this.dots ? this.currentSelectedIndex : 0;
    }
    get pageCount() {
        return this.dots ? this.items.length : 0;
    }
    get dotindicatorStatus() {
        return this.dots ? this.items.length > 1 : this.dots;
    }
    ngAfterViewInit() {
        this.touchObject = { direction: 1 };
        this._transition = `transform ${this.speed / 1000}s`;
        this.items.changes.subscribe(items => {
            this.carouselInit(items);
        });
        this.initCarouselSize();
        if (!this._resizeTimer) {
            this.selectedIndex = this.items.length - 1 < this.selectedIndex ? 0 : this.selectedIndex;
            setTimeout(() => {
                this.currentSelectedIndex = this.selectedIndex;
            }, 0);
        }
        const selectedIndex = this._resizeTimer ? this.currentSelectedIndex : this.selectedIndex;
        const index = this.items.length > 1 ? (this.items.length - 1 === selectedIndex ? -1 : selectedIndex) : 0;
        this.getListStyles(-index * this._rationWidth);
        this.carouselInit(this.items);
        const nativeElement = this._ele.nativeElement;
        const targetNode = nativeElement.querySelector('carouselslide');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type == 'attributes') {
                    if (this.slideHeight !== nativeElement.querySelector('carouselslide').clientHeight) {
                        this.initCarouselSize();
                        this.getListStyles(-index * this._rationWidth);
                        this.carouselInit(this.items);
                    }
                }
            }
        };
        if (this._observer) {
            this._observer.disconnect();
        }
        this._observer = new MutationObserver(callback);
        this._observer.observe(targetNode, config);
    }
    ngOnDestroy() {
        this._observer.disconnect();
        this._observer = null;
        this.stopTimer();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'Carousel, nzm-carousel',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"slider-frame\" [ngStyle]=\"{ overflow: frameOverflow }\">\n  <ul class=\"slider-list\" [ngStyle]=\"style\">\n    <ng-content></ng-content>\n  </ul>\n</div>\n<DotIndicator\n  *ngIf=\"dotindicatorStatus\"\n  class=\"am-carousel-wrap-dot\"\n  [page]=\"page\"\n  [dotStyle]=\"dotStyle\"\n  [pageCount]=\"pageCount\"\n  [dotActiveStyle]=\"dotActiveStyle\"\n></DotIndicator>\n"
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];
CarouselComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [CarouselSlideComponent,] }],
    speed: [{ type: Input }],
    dots: [{ type: Input }],
    vertical: [{ type: Input }],
    autoplay: [{ type: Input }],
    autoplayInterval: [{ type: Input }],
    infinite: [{ type: Input }],
    dotStyle: [{ type: Input }],
    dotActiveStyle: [{ type: Input }],
    frameOverflow: [{ type: Input }],
    cellSpacing: [{ type: Input }],
    slideWidth: [{ type: Input }],
    swipeSpeed: [{ type: Input }],
    dragging: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    afterChange: [{ type: Output }],
    beforeChange: [{ type: Output }],
    carouselWrapper: [{ type: HostBinding, args: ['class.am-carousel',] }],
    carouselwrap: [{ type: HostBinding, args: ['class.carousel',] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }],
    cancel: [{ type: HostListener, args: ['touchcancel',] }],
    resize: [{ type: HostListener, args: ['window:resize',] }]
};

class DotIndicatorComponent {
    constructor() {
        this.items = [];
        this._page = 0;
        this._pageCount = 0;
        this.dotStyle = {};
        this.dotActiveStyle = {};
        this.dotColor = 'white';
        this.dotIndicator = true;
    }
    set page(p) {
        this._page = p;
        this.updateSelected();
    }
    set pageCount(p) {
        this._pageCount = p || 0;
        this.updateItems();
    }
    updateItems() {
        this.items = new Array(this._pageCount);
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i] = { active: i == this._page };
        }
    }
    updateSelected() {
        if (this.items.length != this._pageCount) {
            return this.updateItems();
        }
        if (this.items.length == 0) {
            return;
        }
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i].active = false;
        }
        this.items[this._page].active = true;
    }
}
DotIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'DotIndicator, nzm-dot-indicator',
                template: "<div class=\"am-carousel-wrap\">\n  <div *ngFor=\"let item of items\" class=\"am-carousel-wrap-dot\" [class.am-carousel-wrap-dot-active]=\"item.active\">\n    <span [ngStyle]=\"item.active ? dotActiveStyle : dotStyle\"></span>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DotIndicatorComponent.propDecorators = {
    page: [{ type: Input }],
    pageCount: [{ type: Input }],
    dotStyle: [{ type: Input }],
    dotActiveStyle: [{ type: Input }],
    dotColor: [{ type: Input }],
    dotIndicator: [{ type: HostBinding, args: ['class.dot-indicator',] }]
};

class CarouselModule {
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent],
                exports: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent]
            },] }
];

class CheckboxComponent {
    constructor() {
        this.prefixCls = 'am-checkbox';
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: false,
            [`${this.prefixCls}-disabled`]: false
        };
        this._checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.checkBoxWrapper = true;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.updateClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.updateClassMap();
    }
    onClick(event) {
        event.preventDefault();
        if (!this._disabled) {
            this.updateValue(!this.checked);
        }
    }
    updateValue(value) {
        this.checked = value;
        this.onChange.emit({
            name: this.name,
            value: this.value,
            checked: value
        });
    }
    ngOnInit() {
        this.updateClassMap();
    }
    updateClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
        };
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: '[Checkbox], [nzm-checkbox]',
                template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"checkbox\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    checkBoxWrapper: [{ type: HostBinding, args: ['class.am-checkbox-wrapper',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class AgreeItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.prefixCls = 'am-checkbox';
        this.checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.checkboxAgree = true;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    change(event) {
        this.checked = event.checked;
        this._ngModelOnChange(event.checked);
        this.onChange.emit(event);
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
AgreeItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'AgreeItem, nzm-agree-item',
                template: "<label\n  Checkbox\n  class=\"{{ prefixCls }}-agree-label\"\n  [name]=\"name\"\n  [value]=\"value\"\n  [checked]=\"checked\"\n  [disabled]=\"disabled\"\n  (onChange)=\"change($event)\"\n>\n  <ng-content></ng-content>\n</label>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AgreeItemComponent),
                        multi: true
                    }
                ]
            },] }
];
AgreeItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
AgreeItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    checkboxAgree: [{ type: HostBinding, args: ['class.am-checkbox-agree',] }]
};

class CheckboxItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.prefixCls = 'am-checkbox';
        this.checked = false;
        this._disabled = false;
        this.wrap = false;
        this.error = false;
        this.multipleLine = false;
        this.platform = 'ios';
        this.align = 'middle';
        this.onChange = new EventEmitter();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    onCheckboxClick(event) { }
    change(event) {
        this.checked = event.checked;
        this._ngModelOnChange(event.checked);
        this.onChange.emit(event);
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
CheckboxItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'CheckboxItem, nzm-checkbox-item',
                template: "<ListItem\n  [className]=\"'am-checkbox-item ' + (disabled ? 'am-checkbox-item-disabled' : '')\"\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"extra\"\n  [thumb]=\"checkbox\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  (onClick)=\"onCheckboxClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #checkbox>\n  <label Checkbox [name]=\"name\" [value]=\"value\" [checked]=\"checked\" [disabled]=\"disabled\" (onChange)=\"change($event)\">\n  </label>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxItemComponent),
                        multi: true
                    }
                ]
            },] }
];
CheckboxItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    arrow: [{ type: Input }],
    extra: [{ type: Input }],
    wrap: [{ type: Input }],
    error: [{ type: Input }],
    multipleLine: [{ type: Input }],
    platform: [{ type: Input }],
    align: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }]
};

class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ListModule],
                declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
                exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
            },] }
];

class RadioComponent {
    constructor() {
        this.prefixCls = 'am-radio';
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
        };
        this._checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.radioWrapper = true;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.updateClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.updateClassMap();
    }
    onClick(event) {
        event.preventDefault();
        if (!this._disabled && !this._checked) {
            this.updateValue(true);
        }
    }
    updateValue(checkValue) {
        this.checked = checkValue;
        this.onChange.emit({
            name: this.name,
            value: this.value
        });
    }
    ngOnInit() {
        this.updateClassMap();
    }
    updateClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
        };
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: '[Radio], [nzm-radio]',
                template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"radio\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
RadioComponent.ctorParameters = () => [];
RadioComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    radioWrapper: [{ type: HostBinding, args: ['class.am-radio-wrapper',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class RadioItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.select$ = new Subject();
        this.prefixCls = 'am-radio';
        this._checked = false;
        this._disabled = false;
        this.wrap = false;
        this.error = false;
        this.multipleLine = false;
        this.platform = 'ios';
        this.align = 'middle';
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.cdr.markForCheck();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.cdr.markForCheck();
    }
    onRadioItemClick(event) { }
    change(event) {
        if (!this.disabled && !this.checked) {
            this.select$.next(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'RadioItem, nzm-radio-item',
                template: "<ListItem\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"radio\"\n  [thumb]=\"thumb\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  [className]=\"'am-radio-item ' + (disabled ? 'am-radio-item-disabled' : '')\"\n  (onClick)=\"onRadioItemClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #radio>\n  <label\n    Radio\n    [name]=\"name\"\n    [value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    (onChange)=\"change($event)\"\n  ></label>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
RadioItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    arrow: [{ type: Input }],
    thumb: [{ type: Input }],
    wrap: [{ type: Input }],
    error: [{ type: Input }],
    multipleLine: [{ type: Input }],
    platform: [{ type: Input }],
    align: [{ type: Input }],
    disabled: [{ type: Input }]
};

const RADIO_ITEM_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioItemGroupComponent),
    multi: true
};
class RadioItemGroupComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = new EventEmitter();
    }
    updateChildrenStatus() {
        if (this.radioItems && typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
            Promise.resolve().then(() => {
                this.radioItems.forEach(radioItem => {
                    radioItem.checked = radioItem.value === this.selectedValue;
                    radioItem.markForCheck();
                });
            });
        }
    }
    ngAfterContentInit() {
        this.radioItems.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radioItems.map(radioItem => radioItem.select$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(radioItem => {
                if (typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
                    this.selectedValue = radioItem.value;
                    this._ngModelOnChange(radioItem.value);
                    this.updateChildrenStatus();
                    if (this.onChange) {
                        this.onChange.emit({ name: radioItem.name, value: radioItem.value });
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        if (typeof value !== 'undefined' && null !== value) {
            this.selectedValue = value;
            this.updateChildrenStatus();
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
RadioItemGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'RadioItemGroup, nzm-radio-item-group',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
            },] }
];
RadioItemGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemGroupComponent.propDecorators = {
    radioItems: [{ type: ContentChildren, args: [forwardRef(() => RadioItemComponent),] }],
    onChange: [{ type: Output }]
};

class RadioModule {
}
RadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ListModule],
                declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
                exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
            },] }
];

class ProgressComponent {
    constructor() {
        this.prefixCls = 'am-progress';
        this._percent = 0;
        this._exceedance = false;
        this.unfilled = true;
        this.position = 'fixed';
        this.barStyle = {};
        this.max = 100;
        this.amProgress = true;
        this.outer = true;
    }
    get percent() {
        return this._percent;
    }
    set percent(value) {
        this._percent = value;
        if (value > 100) {
            this._exceedance = true;
        }
        else {
            this._exceedance = false;
        }
    }
    get value() {
        return this.percent;
    }
    get fixOuter() {
        return 'fixed' === this.position;
    }
    get hideOuter() {
        return !this.unfilled && !this._exceedance;
    }
    get exceedance() {
        return this._exceedance;
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'Progress, nzm-progress',
                template: "<div\n  class=\"{{ prefixCls }}-bar\"\n  [ngStyle]=\"barStyle\"\n  [style.width.%]=\"percent <= 100 ? percent : 10000 / percent\"\n></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    unfilled: [{ type: Input }],
    position: [{ type: Input }],
    barStyle: [{ type: Input }],
    percent: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }],
    value: [{ type: HostBinding, args: ['attr.value',] }],
    amProgress: [{ type: HostBinding, args: ['class.am-progress',] }],
    outer: [{ type: HostBinding, args: ['class.am-progress-outer',] }],
    fixOuter: [{ type: HostBinding, args: ['class.am-progress-fixed-outer',] }],
    hideOuter: [{ type: HostBinding, args: ['class.am-progress-hide-outer',] }],
    exceedance: [{ type: HostBinding, args: ['class.am-progress-exceedance',] }]
};

class ProgressModule {
}
ProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressComponent],
                exports: [ProgressComponent]
            },] }
];

class AccordionService {
    constructor() {
        this.accordion = false;
    }
    getComponent(component) {
        this.accordion = component.accordion;
        this.component = component;
    }
}
AccordionService.decorators = [
    { type: Injectable }
];

class AccordionGroupComponent {
    constructor(_accordionService, _cdr) {
        this._accordionService = _accordionService;
        this._cdr = _cdr;
        this.isShowChild = true;
        this.isOpened = false;
        this.disabled = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onChange = new EventEmitter();
        this.isTemplateRef = isTemplateRef;
        this.amItem = true;
        this.isActive = this.isOpened;
        this.addon = true;
    }
    checkAndToggle() {
        this.toggle();
    }
    get slide() {
        return this.isOpened ? 'down' : 'up';
    }
    toggle() {
        if (this.disabled) {
            return;
        }
        this.isShowChild = true;
        const isOpenedBeforeWeChange = this.isOpened;
        if (this._accordionService.accordion) {
            this._accordionService.component.closeAll();
        }
        this.isOpened = !isOpenedBeforeWeChange;
        if (this.isOpened) {
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
        this.onChange.emit(this.isOpened);
    }
    openOnInitialization() {
        setTimeout(() => {
            this.isOpened = true;
            this._cdr.detectChanges();
        }, 0);
    }
    slideAnimationDoen(event) {
        if (event.fromState === 'down' && event.toState === 'up') {
            setTimeout(() => {
                this.isShowChild = false;
            }, 0);
        }
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'AccordionPanel, nzm-accordion-panel',
                template: "<div\n  role=\"tab\"\n  class=\"am-accordion-header\"\n  data-scale=\"true\"\n  [attr.aria-expanded]=\"isOpened\"\n  (click)=\"checkAndToggle()\"\n>\n  <i class=\"arrow\"></i>\n  <ng-container *ngIf=\"!isTemplateRef(header)\">{{ header }}</ng-container>\n  <ng-template *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"header\"></ng-template>\n</div>\n<div\n  role=\"tabpanel\"\n  class=\"am-accordion-content\"\n  [ngClass]=\"{ 'am-accordion-content-active': isOpened }\"\n  [@slide]=\"slide\"\n  (@slide.done)=\"slideAnimationDoen($event)\"\n>\n  <div *ngIf=\"isShowChild\" class=\"am-accordion-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('slide', [
                        state('up', style({ height: 0 })),
                        state('down', style({ height: '*' })),
                        transition('down => up', [animate(200, style({ height: 0 }))]),
                        transition('up => down', [
                            animate(200, style({
                                height: '*'
                            }))
                        ])
                    ])
                ]
            },] }
];
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: ChangeDetectorRef }
];
AccordionGroupComponent.propDecorators = {
    key: [{ type: Input }],
    header: [{ type: Input }],
    isOpened: [{ type: Input }],
    disabled: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onChange: [{ type: Output }],
    amItem: [{ type: HostBinding, args: ['class.am-accordion-item',] }],
    isActive: [{ type: HostBinding, args: ['class.am-accordion-item-active',] }],
    addon: [{ type: HostBinding, args: ['class.addon',] }]
};

class AccordionComponent {
    constructor(_accordionService) {
        this._accordionService = _accordionService;
        this.isFirstChange = true;
        this.expandAll = false;
        this.openAnimation = {};
        this.accordion = false;
        this.onChange = new EventEmitter();
        this.amAccordion = true;
        this._accordionService.getComponent(this);
    }
    click() {
        let result = [];
        this.groups.toArray().forEach(group => {
            if (group.isOpened) {
                if (this.accordion) {
                    result = group.key;
                }
                else {
                    result.push(group.key);
                }
            }
        });
        this.onChange.emit(result);
    }
    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }
    init() {
        if (this.expandAll && this.groups && this.groups.length > 0) {
            this._oldGroups = this.groups.toArray();
            this._oldGroups.forEach(group => {
                group.openOnInitialization();
            });
            this._subscription = this.groups.changes.subscribe(change => {
                const newGroups = this.groups.toArray().filter(group => {
                    return this._oldGroups.indexOf(group) === -1;
                });
                newGroups.forEach(group => {
                    group.openOnInitialization();
                });
                this._oldGroups = this.groups.toArray();
            });
        }
        let currentActiveKey = [];
        if (this.activeKey && this.activeKey.length > 0) {
            currentActiveKey = this.toArray(this.activeKey);
            if (this.accordion) {
                currentActiveKey = currentActiveKey.slice(0, 1);
            }
        }
        else if (this.defaultActiveKey) {
            currentActiveKey = [this.defaultActiveKey];
        }
        if (this.groups && this.groups.length > 0) {
            this.groups.forEach((group, index) => {
                currentActiveKey.forEach(key => {
                    if (index === parseInt(key, 0)) {
                        setTimeout(() => {
                            group.isOpened = true;
                            group.openOnInitialization();
                        }, 0);
                    }
                });
            });
        }
    }
    toArray(activeKey) {
        let currentActiveKey = activeKey;
        if (!Array.isArray(currentActiveKey)) {
            currentActiveKey = currentActiveKey !== undefined && currentActiveKey !== '' ? [currentActiveKey] : [];
        }
        return currentActiveKey;
    }
    ngOnChanges(changes) {
        if (changes.accordion) {
            this._accordionService.getComponent(this);
        }
        if (changes.expandAll || changes.accordion) {
            this.init();
        }
    }
    ngAfterContentInit() {
        if (this.groups && this.groups.length > 0) {
            this.init();
        }
        else {
            this.groupsSubscription = this.groups.changes.subscribe(group => {
                if (this.isFirstChange) {
                    this.init();
                }
                this.isFirstChange = false;
            });
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this.groupsSubscription) {
            this.groupsSubscription.unsubscribe();
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'Accordion, nzm-accordion',
                template: "<ng-content></ng-content>\n",
                providers: [AccordionService]
            },] }
];
AccordionComponent.ctorParameters = () => [
    { type: AccordionService }
];
AccordionComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [forwardRef(() => AccordionGroupComponent),] }],
    expandAll: [{ type: Input }],
    activeKey: [{ type: Input }],
    defaultActiveKey: [{ type: Input }],
    openAnimation: [{ type: Input }],
    accordion: [{ type: Input }],
    onChange: [{ type: Output }],
    amAccordion: [{ type: HostBinding, args: ['class.am-accordion',] }],
    click: [{ type: HostListener, args: ['click',] }]
};

class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, WhiteSpaceModule],
                declarations: [AccordionComponent, AccordionGroupComponent],
                exports: [AccordionComponent, AccordionGroupComponent]
            },] }
];

function insertKeyFrame(rule, className) {
    const style = document.createElement('style');
    style.setAttribute('class', className);
    style.innerHTML = rule;
    document.body.appendChild(style);
}
function deleteKeyFrame(className) {
    const styleDom = document.getElementsByClassName(className);
    while (styleDom.length > 0) {
        styleDom[0].remove();
    }
}
function getWidthHeight() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    return {
        width: w.innerWidth || e.clientWidth || g.clientWidth,
        height: w.innerHeight || e.clientHeight || g.clientHeight
    };
}
function getTextWidth(text, font) {
    const _dom = document.createElement('div');
    _dom.innerHTML = text;
    _dom.style.position = 'absolute';
    _dom.style.left = '-9999';
    _dom.style.whiteSpace = 'nowrap';
    _dom.style.fontSize = font;
    document.body.appendChild(_dom);
    const _w = _dom.clientWidth + 10;
    document.body.removeChild(_dom);
    return _w;
}

class NoticeBarComponent {
    constructor(_iconHandler) {
        this._iconHandler = _iconHandler;
        this.visiable = false;
        this.marqueeScroll = 'scrolling';
        this.style = {};
        this._option = {
            mode: '',
            icon: '',
            action: '',
            content: '',
            fontSize: '14px',
            scrolling: true,
            marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} }
        };
        this.onClick = new EventEmitter();
        this._iconHandler.load();
    }
    get option() {
        return this._option;
    }
    set option(value) {
        Object.assign(this._option, value);
        this.dataProcess();
        if (this._option.scrolling) {
            this.marqueeScroll = 'scrolling';
        }
        else {
            this.marqueeScroll = 'scrolling-stop';
        }
    }
    click() {
        this.onClick.emit(this._option.mode);
        if (this._option.mode === 'closable') {
            this.visiable = false;
        }
    }
    dataProcess() {
        this.visiable = true;
        this.style = {
            width: '200%'
        };
        this._width = getTextWidth(this._option.content, this._option.fontSize);
        if (getWidthHeight().width < this._width) {
            const count = this._option.marqueeProps.loop ? 'infinite' : 1;
            let animationName = `noticebarmarquee_${this._width}`;
            this.style = {
                width: this._width * 2 + 'px',
                'animation-name': animationName,
                'animation-delay': `${this._option.marqueeProps.leading}ms`,
                'animation-duration': `${(((1 / this._option.marqueeProps.fps) * this._width) / getWidthHeight().width) *
                    1000}s`,
                'animation-iteration-count': `${count}`
            };
            this.marqueeScroll = 'scrolling';
            this.insetKeyframe(animationName);
        }
        else {
            this.marqueeScroll = 'scrolling-stop';
        }
    }
    insetKeyframe(animationName) {
        insertKeyFrame(`@keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        insertKeyFrame(`@-webkit-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        insertKeyFrame(`@-moz-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        insertKeyFrame(`@-o-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
    }
    ngOnInit() {
        document.addEventListener('touchstart', () => {
            this.marqueeScroll = 'scrolling-stop';
        });
        document.addEventListener('touchend', () => {
            this.marqueeScroll = 'scrolling';
        });
    }
    ngOnDestroy() {
        deleteKeyFrame('notice_bar_animation_cls');
    }
}
NoticeBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'NoticeBar, nzm-notice-bar',
                template: "<div role=\"alert\" *ngIf=\"visiable\" class=\"am-notice-bar\" (click)=\"click()\">\n  <div *ngIf=\"option.icon !== null\" class=\"am-notice-bar-icon\">\n    <ng-template [ngTemplateOutlet]=\"option.icon || voice\"></ng-template>\n  </div>\n  <div class=\"am-notice-bar-content\">\n    <div class=\"marquee\">\n      <div [ngClass]=\"marqueeScroll\" [ngStyle]=\"style\">\n        <span>{{ option.content }}</span>\n        <span>{{ option.content }}</span>\n      </div>\n    </div>\n  </div>\n  <div role=\"button\" *ngIf=\"option.mode && option.action !== null\" class=\"am-notice-bar-operation\">\n    <ng-template *ngIf=\"option.mode === 'closable'\" [ngTemplateOutlet]=\"option.action || cross\"></ng-template>\n    <ng-template *ngIf=\"option.mode === 'link'\" [ngTemplateOutlet]=\"option.action || right\"></ng-template>\n  </div>\n</div>\n\n<ng-template #voice>\n  <Icon [type]=\"'voice'\" [size]=\"'xxs'\"></Icon>\n</ng-template>\n<ng-template #cross>\n  <Icon [type]=\"'cross'\" [size]=\"'md'\"></Icon>\n</ng-template>\n<ng-template #right>\n  <Icon [type]=\"'right'\" [size]=\"'md'\"></Icon>\n</ng-template>\n",
                providers: [IconHandler]
            },] }
];
NoticeBarComponent.ctorParameters = () => [
    { type: IconHandler }
];
NoticeBarComponent.propDecorators = {
    option: [{ type: Input }],
    onClick: [{ type: Output }]
};

class NoticeBarModule {
}
NoticeBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [IconModule, CommonModule, FormsModule],
                declarations: [NoticeBarComponent],
                exports: [NoticeBarComponent],
                providers: []
            },] }
];

class ToastComponent {
    constructor(_zone) {
        this._zone = _zone;
        this.prefixCls = 'am-toast';
        this.isContentString = true;
        this.transitionName = 'am-fade-enter am-fade-enter-active';
        this._iconType = '';
        this._content = '';
        this.mask = true;
        this.position = 'middle';
    }
    get content() {
        return this._content;
    }
    set content(value) {
        if (value instanceof TemplateRef) {
            this.isContentString = false;
        }
        else {
            this.isContentString = true;
        }
        this._zone.run(() => {
            this._content = value;
        });
    }
    get iconType() {
        return this._iconType;
    }
    set iconType(value) {
        this._zone.run(() => {
            this._iconType = value;
        });
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'Toast',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"{{ prefixCls }}-notice {{ prefixCls }}-notice-closable {{ transitionName }}\">\n  <div class=\"{{ prefixCls }}-notice-content\">\n    <div role=\"alert\" *ngIf=\"iconType\" class=\"{{ prefixCls }}-text {{ prefixCls }}-text-icon\" aria-live=\"assertive\">\n      <Icon [type]=\"iconType\" [size]=\"'lg'\"></Icon>\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n    </div>\n    <div *ngIf=\"!iconType\" class=\"{{ prefixCls }}-text\" role=\"alert\" aria-live=\"assertive\">\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n      <ng-template *ngIf=\"!isContentString\" [ngTemplateOutlet]=\"content\"></ng-template>\n    </div>\n  </div>\n  <a class=\"{{ prefixCls }}-notice-close\">\n    <span class=\"{{ prefixCls }}-notice-close-x\"></span>\n  </a>\n</div>\n",
                host: {
                    '[class.am-toast]': 'true',
                    '[class.am-toast-mask]': 'mask',
                    '[class.am-toast-mask-top]': `mask && position === 'top'`,
                    '[class.am-toast-mask-middle]': `mask && position === 'middle'`,
                    '[class.am-toast-mask-bottom]': `mask && position === 'bottom'`,
                    '[class.am-toast-nomask]': '!mask',
                    '[class.am-toast-nomask-top]': `!mask && position === 'top'`,
                    '[class.am-toast-nomask-middle]': `!mask && position === 'middle'`,
                    '[class.am-toast-nomask-bottom]': `!mask && position === 'bottom'`
                }
            },] }
];
ToastComponent.ctorParameters = () => [
    { type: NgZone }
];
ToastComponent.propDecorators = {
    mask: [{ type: Input }],
    content: [{ type: Input }],
    iconType: [{ type: Input }],
    position: [{ type: Input }]
};

class ToastOptions {
}
ToastOptions.decorators = [
    { type: Injectable }
];

class ToastService {
    constructor(_appRef, _cfr, _zone) {
        this._appRef = _appRef;
        this._cfr = _cfr;
        this._zone = _zone;
        this.timeout = null;
        this.zone = null;
        this.compRef = null;
        this.insertElement = null;
        this.toastCompFactory = null;
        this.appRef = null;
        this.zone = this._zone;
        this.appRef = this._appRef;
        this.toastCompFactory = this._cfr.resolveComponentFactory(ToastComponent);
    }
    _initConfig(config, options) {
        const props = {};
        const optionalParams = ['content', 'iconType', 'mask', 'position'];
        config = Object.assign(options, config);
        optionalParams.forEach(key => {
            if (config[key] !== undefined) {
                props[key] = config[key];
            }
        });
        const iconType = {
            info: '',
            success: 'success',
            fail: 'fail',
            offline: 'dislike',
            loading: 'loading'
        }[options.iconType];
        props['iconType'] = iconType;
        props['mask'] = options.mask;
        props['position'] = options.position;
        return props;
    }
    notice(config, type, timeInterval = 2000, onClose, mask = true, position = 'middle') {
        // 如果已经存在，在没有遮罩层的情况下，会响应别的toast，需要清除原来的
        if (this.compRef) {
            this.hide();
        }
        const options = new ToastOptions();
        options.iconType = type;
        options.mask = mask;
        options.position = position;
        const props = this._initConfig(config, options);
        this.insertElement = document.body.insertBefore(document.createElement(this.toastCompFactory.selector), document.body.firstChild);
        let instance;
        let subject;
        this.compRef = this._appRef.bootstrap(this.toastCompFactory);
        instance = this.compRef.instance;
        subject = instance.subject;
        if (timeInterval) {
            this.timeout = setTimeout(() => {
                if (onClose) {
                    onClose();
                }
                this.hide();
            }, timeInterval);
        }
        Object.assign(instance, props);
        return subject;
    }
    /**
     * Open info dialog
     */
    info(content, timeInterval, onClose, mask, position) {
        const config = Object.assign({
            iconType: 'info',
            content: content
        });
        return this.notice(config, 'info', timeInterval, onClose, mask, position);
    }
    /**
     * Open success dialog
     */
    success(content, timeInterval, onClose, mask, position) {
        const config = Object.assign({
            iconType: 'success',
            content: content
        });
        return this.notice(config, 'success', timeInterval, onClose, mask, position);
    }
    show(content, timeInterval, mask, position) {
        const config = Object.assign({
            iconType: 'info',
            content: content
        });
        return this.notice(config, 'info', timeInterval, () => { }, mask, position);
    }
    fail(content, timeInterval, onClose, mask, position) {
        const config = Object.assign({
            iconType: 'fail',
            content: content
        });
        return this.notice(config, 'fail', timeInterval, onClose, mask, position);
    }
    offline(content, timeInterval, onClose, mask, position) {
        const config = Object.assign({
            iconType: 'offline',
            content: content
        });
        return this.notice(config, 'offline', timeInterval, onClose, mask, position);
    }
    loading(content, timeInterval, onClose, mask, position) {
        const config = Object.assign({
            iconType: 'loading',
            content: content
        });
        return this.notice(config, 'loading', timeInterval, onClose, mask, position);
    }
    hide() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.compRef) {
            this._zone.run(() => {
                this.compRef.destroy();
                document.body.removeChild(this.insertElement);
            });
            this.compRef = null;
            this.insertElement = null;
        }
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
    { type: Injectable }
];
ToastService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: NgZone }
];

class ToastModule {
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule, WingBlankModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                providers: [ToastService]
            },] }
];

class ModalBaseOptions {
    constructor() {
        this.visible = false;
        this.focus = true;
        this.prefixCls = 'am-modal';
        this.animated = true;
        this.closable = false;
        this.maskClosable = true;
        this.transparent = false;
        this.popup = false;
        this.animationType = 'slide-down';
        this.footer = [];
        this.platform = 'ios';
        this.defaultValue = [];
        this.placeholders = [];
        this.transitionName = 'am-zoom';
        this.maskTransitionName = 'am-fade';
    }
}
class ModalOptions extends ModalBaseOptions {
    constructor() {
        super(...arguments);
        this.transitionName = 'am-fade';
        this.maskTransitionName = 'am-fade';
    }
}
ModalOptions.decorators = [
    { type: Injectable }
];
class AlertOptions extends ModalBaseOptions {
}
AlertOptions.decorators = [
    { type: Injectable }
];
class Action {
}
Action.decorators = [
    { type: Injectable }
];

class ModalRef {
}

class ModalComponent extends ModalRef {
    constructor(option, elementRef) {
        super();
        this.option = option;
        this.elementRef = elementRef;
        this.autoFocus = { focus: true, date: new Date() };
        this.transitionName = '';
        this.maskTransitionName = '';
        this.wrapCls = {};
        this.cls = {};
        this.btnGroupClass = {};
        this.data = {
            text: '',
            password: ''
        };
        this.onClose = new EventEmitter();
        this.afterOpenEmitter = new EventEmitter();
        this.afterCloseEmitter = new EventEmitter();
    }
    set title(value) {
        this.option.title = value;
    }
    set closable(value) {
        this.option.closable = value;
    }
    set maskClosable(value) {
        this.option.maskClosable = value;
    }
    set popup(value) {
        this.option.popup = value;
        this.setClassMap();
    }
    set animationType(value) {
        this.option.animationType = value;
        this.setClassMap();
    }
    set transparent(value) {
        this.option.transparent = value;
        this.setClassMap();
    }
    set footer(value) {
        this.option.footer = value;
    }
    set platform(value) {
        this.option.platform = value;
        this.setClassMap();
    }
    set className(value) {
        this.option.className = value;
        this.setClassMap();
    }
    set wrapClassName(value) {
        this.option.wrapClassName = value;
        this.setClassMap();
    }
    set actions(value) {
        this.option.footer = value;
        this.setClassMap();
    }
    set defaultValue(value) {
        this.option.defaultValue = value !== undefined ? value : ['', ''];
    }
    set type(value) {
        this.option.type = value;
    }
    set placeholders(value) {
        this.option.placeholders = value;
    }
    set operation(value) {
        this.option.operation = value;
        this.setClassMap();
    }
    panend(event) {
        if (this.option.closable || this.option.maskClosable) {
            if ((event && event.target && event.target.getAttribute('role') === 'dialog') ||
                event.target.getAttribute('role') === 'close') {
                event.preventDefault();
                event.stopPropagation();
                if (this.option.close) {
                    this.option.close();
                }
                else {
                    this.onClose.emit();
                    this.leaveAnimation();
                }
            }
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    setTransitionName(visible) {
        if (!visible) {
            this.leaveAnimation();
        }
        else {
            if (this.option.animated) {
                if (this.option.transparent) {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-fade');
                    }
                }
                else {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-slide-up');
                    }
                }
                if (this.option.popup) {
                    this.transitionName =
                        this.option.animationType === 'slide-up'
                            ? this.setActiveName('am-slide-up')
                            : this.setActiveName('am-slide-down');
                    this.maskTransitionName = this.setActiveName('am-fade');
                }
            }
            this.setClassMap();
        }
    }
    setActiveName(name) {
        return name.length > 0 ? `${name}-enter ${name}-enter-active` : null;
    }
    setLeaveActiveName(name) {
        return name.length > 0 ? `${name}-leave ${name}-leave-active` : null;
    }
    setClassMap() {
        this.wrapCls = {
            [this.option.wrapClassName]: true,
            [`${this.option.prefixCls}-wrap-popup`]: this.option.popup
        };
        this.cls = {
            [this.option.className]: true,
            [`${this.option.prefixCls}-transparent`]: this.option.transparent,
            [`${this.option.prefixCls}-popup`]: this.option.popup,
            [`${this.option.prefixCls}-popup-${this.option.animationType}`]: this.option.popup && this.option.animationType,
            [`${this.option.prefixCls}-android`]: this.option.platform === 'android'
        };
        this.btnGroupClass = {
            [`${this.option.prefixCls}-button-group-${this.option.footer.length === 2 && !this.option.operation ? 'h' : 'v'}`]: true,
            [`${this.option.prefixCls}-button-group-${this.option.operation ? 'operation' : 'normal'}`]: true
        };
    }
    inputChange(type, value) {
        this.data[type] = value;
    }
    leaveAnimation() {
        if (this.option.animated) {
            if (this.option.transparent) {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-fade');
                }
            }
            else {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-slide-up');
                }
            }
            if (this.option.popup) {
                this.transitionName =
                    this.option.animationType === 'slide-up'
                        ? this.setLeaveActiveName('am-slide-up')
                        : this.setLeaveActiveName('am-slide-down');
                this.maskTransitionName = this.setLeaveActiveName('am-fade');
            }
        }
        setTimeout(() => {
            this.option.visible = false;
            if (this.onChanged) {
                this.onChanged(this.option.visible);
            }
        }, 200);
    }
    writeValue(value) {
        if (value) {
            this.option.visible = value;
        }
        this.setTransitionName(value);
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    get afterOpen() {
        return this.afterOpenEmitter.asObservable();
    }
    get afterClose() {
        return this.afterCloseEmitter.asObservable();
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.closeWithAnimation) {
            this.option.closeWithAnimation();
        }
        else {
            this.onClose.emit();
            this.leaveAnimation();
        }
    }
    triggerOk() {
        if (this.option.footer.length > 1) {
            const button = this.option.footer[1];
            button.onPress();
        }
    }
    triggerCancel() {
        if (this.option.footer.length > 0) {
            const button = this.option.footer[0];
            button.onPress();
        }
    }
    destroy() {
        this.close();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'Modal',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    ModalOptions,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ModalComponent),
                        multi: true
                    }
                ]
            },] }
];
ModalComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    title: [{ type: Input }],
    closable: [{ type: Input }],
    maskClosable: [{ type: Input }],
    popup: [{ type: Input }],
    animationType: [{ type: Input }],
    transparent: [{ type: Input }],
    footer: [{ type: Input }],
    platform: [{ type: Input }],
    className: [{ type: Input }],
    wrapClassName: [{ type: Input }],
    actions: [{ type: Input }],
    defaultValue: [{ type: Input }],
    type: [{ type: Input }],
    placeholders: [{ type: Input }],
    operation: [{ type: Input }],
    onClose: [{ type: Output }],
    afterOpenEmitter: [{ type: Output }],
    afterCloseEmitter: [{ type: Output }],
    panend: [{ type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};
class ModalServiceComponent extends ModalComponent {
    constructor(option, elementRef) {
        super(option, elementRef);
        this.option = option;
        this.elementRef = elementRef;
        this.setTransitionName(this.option.visible);
    }
}
ModalServiceComponent.decorators = [
    { type: Component, args: [{
                selector: 'ModalService',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ModalServiceComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];

class PopupService {
    constructor(_overlay) {
        this._overlay = _overlay;
        this.overlay = null;
        this.overlayRef = null;
        this.currentServiceName = null;
        this.serviceArray = [];
        this.overlay = this._overlay;
    }
    showPopup(component, childInjector, hasBackdrop, positionStrategy = this.overlay
        .position()
        .global()
        .centerVertically()
        .centerHorizontally()) {
        let overlayConfig = new OverlayConfig();
        overlayConfig.hasBackdrop = hasBackdrop;
        overlayConfig.positionStrategy = positionStrategy;
        this.overlayRef = this.overlay.create(overlayConfig);
        this.overlayRef.backdropClick().subscribe(() => {
            this.hidePopup();
        });
        return this.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
    }
    hidePopup() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
}
PopupService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
    { type: Injectable }
];
PopupService.ctorParameters = () => [
    { type: Overlay }
];

class ModalService extends PopupService {
    constructor() {
        super(...arguments);
        this.modalRef = null;
    }
    _initConfig(config, options) {
        const props = new ModalBaseOptions();
        const optionalParams = [
            'visible',
            'focus',
            'prefixCls',
            'animated',
            'closable',
            'maskClosable',
            'onClose',
            'transparent',
            'popup',
            'animationType',
            'title',
            'footer',
            'platform',
            'className',
            'wrapClassName',
            'message',
            'actions',
            'callbackOrActions',
            'type',
            'defaultValue',
            'placeholders',
            'operation',
            'transitionName',
            'maskTransitionName',
            'close',
            'closeWithAnimation'
        ];
        const self = this;
        config = Object.assign(options, config, {
            close: () => {
                if (config.maskClosable || config.closable) {
                    self.closeWithAnimation();
                }
            }
        }, {
            closeWithAnimation: () => {
                self.closeWithAnimation();
            }
        });
        optionalParams.forEach(key => {
            if (config[key] !== undefined) {
                props[key] = config[key];
            }
        });
        return props;
    }
    _open(props) {
        const childInjector = Injector.create([
            {
                provide: ModalOptions,
                useValue: props
            }
        ]);
        this.modalRef = this.showPopup(ModalServiceComponent, childInjector);
        return this.modalRef && this.modalRef.instance;
    }
    closeWithAnimation() {
        const options = new ModalBaseOptions();
        this.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
        this.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${options.maskTransitionName}-leave-active`;
        setTimeout(() => {
            this.close();
        }, 200);
    }
    alert(title, message, actions, platform) {
        const options = new AlertOptions();
        options.visible = true;
        options.transparent = true;
        options.closable = false;
        options.maskClosable = false;
        options.platform = 'ios';
        const footer = getFooter.call(this, actions);
        const config = Object.assign({
            title: title,
            message: message,
            footer: footer,
            actions: footer,
            platform: platform ? platform : 'ios'
        });
        const props = this._initConfig(config, options);
        return this._open(props);
    }
    prompt(title, message, callbackOrActions, type, defaultValue, placeholders, platform) {
        const options = new ModalOptions();
        options.visible = true;
        options.transparent = true;
        options.closable = false;
        options.maskClosable = false;
        options.className = 'am-modal-alert-content';
        options.defaultValue = defaultValue || ['', ''];
        options.placeholders = placeholders;
        (options.type = type ? type : 'default'), (options.platform = platform ? platform : 'ios');
        function getArgs(self, func) {
            let text, password;
            if (self.modalRef) {
                text = self.modalRef.instance.data.text || options.defaultValue[0];
                password = self.modalRef.instance.data.password || options.defaultValue[1];
            }
            else {
                text = options.defaultValue[0];
                password = options.defaultValue[1];
            }
            if (type === 'login-password') {
                return func(text, password);
            }
            else if (type === 'secure-text') {
                return func(password);
            }
            return func(text);
        }
        let actions;
        if (typeof callbackOrActions === 'function') {
            actions = [
                { text: 'Cancel' },
                {
                    text: 'OK',
                    onPress: () => {
                        getArgs(this, callbackOrActions);
                    }
                }
            ];
        }
        else {
            actions = callbackOrActions.map(item => {
                return {
                    text: item.text,
                    onPress: () => {
                        if (item.onPress) {
                            return getArgs(this, item.onPress);
                        }
                    }
                };
            });
        }
        const footer = getFooter.call(this, actions);
        const config = Object.assign({
            title: title,
            message: message,
            type: type ? type : 'default',
            footer: footer,
            actions: footer,
            platform: platform ? platform : 'ios'
        });
        const props = this._initConfig(config, options);
        return this._open(props);
    }
    operation(actions, platform) {
        const options = new ModalOptions();
        options.visible = true;
        options.transparent = true;
        options.closable = false;
        options.maskClosable = false;
        options.operation = true;
        options.className = 'am-modal-operation';
        const footer = getFooter.call(this, actions);
        const config = Object.assign({
            footer: footer,
            actions: footer,
            platform: platform ? platform : 'ios'
        });
        const props = this._initConfig(config, options);
        return this._open(props);
    }
    close() {
        this.hidePopup();
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
    { type: Injectable }
];
function getFooter(actions) {
    let action = actions ? actions : [{ text: 'OK', onPress: () => { } }];
    return action.map((button) => {
        const orginPress = button.onPress || function () { };
        button.onPress = () => {
            const res = orginPress();
            if (res && res.then) {
                res.then(() => {
                    this.closeWithAnimation();
                });
            }
            else {
                this.closeWithAnimation();
            }
        };
        return button;
    });
}

class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ListModule,
                    WingBlankModule,
                    WhiteSpaceModule,
                    ButtonModule,
                    InputItemModule,
                    FormsModule,
                    ReactiveFormsModule,
                    OverlayModule
                ],
                exports: [ModalComponent, ModalServiceComponent],
                declarations: [ModalComponent, ModalServiceComponent],
                providers: [AlertOptions, ModalService, PopupService]
            },] }
];

class PopoverOptions {
    constructor() {
        this.showArrow = false;
        this.mask = false;
        this.placement = 'bottom';
        this.appendToBody = false;
        this.className = '';
        this.autoClose = true;
    }
}
PopoverOptions.decorators = [
    { type: Injectable }
];

class PopoverComponentOptions extends PopoverOptions {
}
PopoverComponentOptions.decorators = [
    { type: Injectable }
];

class PopoverComponent {
    constructor(options) {
        this.options = options;
        this.defaultProps = {
            prefixCls: 'am-popover'
        };
        this.maskCls = {};
        this.popoverCls = {};
    }
    setClassMap() {
        this.maskCls = {
            [`${this.defaultProps.prefixCls}-mask`]: this.options.mask,
            [`${this.defaultProps.prefixCls}-mask-hidden`]: !this.options.mask
        };
        this.popoverCls = {
            [`${this.defaultProps.prefixCls}`]: true,
            [`${this.defaultProps.prefixCls}-placement-${this.options.placement}`]: true,
            [`${this.defaultProps.prefixCls}-${this.options.className}`]: true
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'Popover',
                template: "<ng-content></ng-content>\n<div [ngClass]=\"maskCls\" (click)=\"options.hidePopover()\"></div>\n<div [ngClass]=\"popoverCls\" style=\"color: currentcolor;\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <div *ngIf=\"options.showArrow\" class=\"{{ defaultProps.prefixCls }}-arrow\"></div>\n    <div class=\"{{ defaultProps.prefixCls }}-inner\">\n      <div class=\"{{ defaultProps.prefixCls }}-inner-wrapper\">\n        <ng-template [ngTemplateOutlet]=\"options.overlay\" [ngTemplateOutletContext]=\"{ options: options }\">\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PopoverComponent.ctorParameters = () => [
    { type: PopoverComponentOptions }
];

function getAllStyles(element) {
    return window.getComputedStyle(element);
}
function getStyle(element, prop) {
    return getAllStyles(element)[prop];
}
function isStaticPositioned(element) {
    return (getStyle(element, 'position') || 'static') === 'static';
}
function getOffsetParent(element) {
    let offsetParentEl = element.offsetParent || document.documentElement;
    while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
        offsetParentEl = offsetParentEl.offsetParent;
    }
    return offsetParentEl || document.documentElement;
}
function getOffset(element) {
    let elBcr = element.getBoundingClientRect();
    let viewportOffset = {
        top: window.pageYOffset - document.documentElement.clientTop,
        left: window.pageXOffset - document.documentElement.clientLeft
    };
    let elOffset = {
        height: elBcr.height || element.offsetHeight,
        width: elBcr.width || element.offsetWidth,
        top: elBcr.top + viewportOffset.top,
        bottom: elBcr.bottom + viewportOffset.top,
        left: elBcr.left + viewportOffset.left,
        right: elBcr.right + viewportOffset.left
    };
    return elOffset;
}
function getPosition(element) {
    let elPosition;
    let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
    if (getStyle(element, 'position') === 'fixed') {
        elPosition = element.getBoundingClientRect();
    }
    else {
        let offsetParentEl = getOffsetParent(element);
        elPosition = getOffset(element);
        if (offsetParentEl !== document.documentElement) {
            parentOffset = getOffset(offsetParentEl);
        }
        parentOffset.top += offsetParentEl.clientTop;
        parentOffset.left += offsetParentEl.clientLeft;
    }
    elPosition.top -= parentOffset.top;
    elPosition.bottom -= parentOffset.top;
    elPosition.left -= parentOffset.left;
    elPosition.right -= parentOffset.left;
    return elPosition;
}
function getPositionElements(hostElement, targetElement, placement, appendToBody) {
    let hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
    let targetElStyles = getAllStyles(targetElement);
    let targetElBCR = targetElement.getBoundingClientRect();
    let placementPrimary = placement.split('-')[0] || 'top';
    let placementSecondary = placement.split('-')[1] || 'center';
    let targetElPosition = {
        height: targetElBCR.height || targetElement.offsetHeight,
        width: targetElBCR.width || targetElement.offsetWidth,
        top: 0,
        bottom: targetElBCR.height || targetElement.offsetHeight,
        left: 0,
        right: targetElBCR.width || targetElement.offsetWidth
    };
    switch (placementPrimary) {
        case 'top':
            targetElPosition.top =
                hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
            break;
        case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height;
            break;
        case 'left':
            targetElPosition.left =
                hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
            break;
        case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width;
            break;
    }
    switch (placementSecondary) {
        case 'top':
            targetElPosition.top = hostElPosition.top;
            break;
        case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;
        case 'left':
            targetElPosition.left = hostElPosition.left;
            break;
        case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;
        case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            }
            else {
                targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }
            break;
    }
    targetElPosition.top = Math.round(targetElPosition.top);
    targetElPosition.bottom = Math.round(targetElPosition.bottom);
    targetElPosition.left = Math.round(targetElPosition.left);
    targetElPosition.right = Math.round(targetElPosition.right);
    return targetElPosition;
}

class PopoverDirective {
    constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer) {
        this._viewContainerRef = _viewContainerRef;
        this._elm = _elm;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._eventListeners = [];
        this.onVisibleChange = new EventEmitter(true);
        this.onSelect = new EventEmitter();
    }
    togglePopover() {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    }
    positionMap(placement) {
        switch (placement) {
            case 'topLeft':
                return 'top-left';
            case 'topRight':
                return 'top-right';
            case 'bottomLeft':
                return 'bottom-left';
            case 'bottomRight':
                return 'bottom-right';
            case 'leftTop':
                return 'left-top';
            case 'leftBottom':
                return 'left-bottom';
            case 'rightTop':
                return 'right-top';
            case 'rightBottom':
                return 'right-bottom';
            case 'fullScreen':
            case 'landScape':
                return 'bottom';
            default:
                return placement;
        }
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            setTimeout(() => {
                this.showPopover();
            }, 0);
        }
        else {
            setTimeout(() => {
                this.hidePopover();
            }, 0);
        }
    }
    ngOnDestroy() {
        this.hidePopover();
    }
    onDocumentClick(event) {
        if (this.popover &&
            !this._elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target)) {
            this.hidePopover();
        }
    }
    showPopover() {
        if (!this.popover) {
            setTimeout(() => {
                this._eventListeners = [
                    this._renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('window', 'resize', () => this.positionPopover())
                ];
            });
            const options = new PopoverComponentOptions();
            options.placement = this.placement;
            Object.assign(options, this._defaultOptions, {
                hidePopover: (event) => {
                    this.hidePopover();
                },
                onAfterViewInit: () => {
                    this.positionPopover();
                    const children = document.getElementsByClassName('am-popover-inner-wrapper')[0].children;
                    if (children.length > 0) {
                        // 首先我们检查它是否包含子节点
                        for (let i = 0; i < children.length; i++) {
                            children[i].id = `${i}`;
                            children[i].addEventListener('click', () => {
                                if (this.onSelect) {
                                    this.onSelect.emit(children[i]);
                                    if (options.autoClose) {
                                        this.hidePopover();
                                    }
                                }
                            }, false);
                        }
                    }
                }
            });
            const optionalParams = [
                'mask',
                'showArrow',
                'placement',
                'appendToBody',
                'overlay',
                'className',
                'autoClose'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(PopoverComponent);
            const childInjector = Injector.create([
                {
                    provide: PopoverComponentOptions,
                    useValue: options
                }
            ], this._viewContainerRef.parentInjector);
            this.popover = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                this.appendToBodyElement = document.body.appendChild(this.popover.location.nativeElement);
            }
            this.onVisibleChange.emit(true);
        }
    }
    positionPopover() {
        if (this.popover) {
            const popoverElement = this.popover.location.nativeElement.children[1];
            const popoverPosition = getPositionElements(this._elm.nativeElement, popoverElement, this.positionMap(this.placement) || this._defaultOptions.placement, this.appendToBody || this._defaultOptions.appendToBody);
            if (this.placement === 'landScape') {
                this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
                this._renderer.setStyle(popoverElement, 'left', `0px`);
                this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
                this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
            }
            else if (this.placement === 'fullScreen') {
                this._renderer.setStyle(popoverElement, 'top', `${0}px`);
                this._renderer.setStyle(popoverElement, 'left', `0px`);
                this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
                this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
            }
            else {
                this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
                this._renderer.setStyle(popoverElement, 'left', `${popoverPosition.left}px`);
            }
        }
    }
    hidePopover() {
        if (this.appendToBodyElement) {
            document.body.removeChild(this.appendToBodyElement);
            this.appendToBodyElement = null;
        }
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.onVisibleChange.emit(false);
            this._eventListeners.forEach(fn => fn());
            this._eventListeners = [];
        }
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Popover], [nzm-popover]',
                providers: [PopoverOptions]
            },] }
];
PopoverDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: PopoverOptions },
    { type: ComponentFactoryResolver },
    { type: Renderer2 }
];
PopoverDirective.propDecorators = {
    mask: [{ type: Input }],
    showArrow: [{ type: Input }],
    visible: [{ type: Input }],
    placement: [{ type: Input }],
    overlay: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onSelect: [{ type: Output }],
    appendToBody: [{ type: Input }],
    className: [{ type: Input }],
    autoClose: [{ type: Input }],
    togglePopover: [{ type: HostListener, args: ['click',] }]
};

function PopoverOptionsFactory(userOptions) {
    const options = new PopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
class PopoverModule {
}
PopoverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PopoverDirective, PopoverComponent],
                imports: [CommonModule],
                exports: [PopoverDirective, PopoverComponent]
            },] }
];

class NavBarComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-navbar',
            mode: 'dark',
            onLeftClick: () => { }
        };
        this.navbarCls = {};
        this.isIconString = true;
        this.isLeftContentString = true;
        this.isRightContentString = true;
        this.onLeftClick = new EventEmitter();
        this.amNavbar = true;
    }
    set mode(value) {
        this.defaultProps.mode = value;
        this.amNavbarLight = this.defaultProps.mode === 'light';
        this.amNavbardark = this.defaultProps.mode === 'dark';
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.isIconString = false;
        }
        else {
            this.isIconString = true;
        }
        this._icon = value;
    }
    get leftContent() {
        return this._leftContent;
    }
    set leftContent(value) {
        if (value instanceof TemplateRef) {
            this.isLeftContentString = false;
        }
        else {
            this.isLeftContentString = true;
        }
        this._leftContent = value;
    }
    get rightContent() {
        return this._rightContent;
    }
    set rightContent(value) {
        if (value instanceof TemplateRef) {
            this.isRightContentString = false;
        }
        else {
            this.isRightContentString = true;
        }
        this._rightContent = value;
    }
    click(event) {
        this.onLeftClick.emit(event);
    }
}
NavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'Navbar, nzm-nav-bar',
                template: "<div role=\"button\" class=\"{{ defaultProps.prefixCls }}-left\" (click)=\"click($event)\">\n  <ng-template *ngIf=\"!isLeftContentString\" [ngTemplateOutlet]=\"leftContent\"></ng-template>\n  <span *ngIf=\"icon\" class=\"{{ defaultProps.prefixCls }}-left-icon\" aria-hidden=\"true\">\n    <Icon *ngIf=\"isIconString\" [type]=\"icon\"></Icon>\n    <ng-template *ngIf=\"!isIconString\" [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  {{ isLeftContentString ? leftContent : null }}\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-title\">\n  <ng-content></ng-content>\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-right\">\n  {{ isRightContentString ? rightContent : null }}\n  <ng-template *ngIf=\"!isRightContentString\" [ngTemplateOutlet]=\"rightContent\"></ng-template>\n</div>\n"
            },] }
];
NavBarComponent.ctorParameters = () => [];
NavBarComponent.propDecorators = {
    mode: [{ type: Input }],
    icon: [{ type: Input }],
    leftContent: [{ type: Input }],
    rightContent: [{ type: Input }],
    onLeftClick: [{ type: Output }],
    amNavbar: [{ type: HostBinding, args: ['class.am-navbar',] }],
    amNavbarLight: [{ type: HostBinding, args: ['class.am-navbar-light',] }],
    amNavbardark: [{ type: HostBinding, args: ['class.am-navbar-dark',] }]
};

class NavBarModule {
}
NavBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule],
                exports: [NavBarComponent],
                declarations: [NavBarComponent]
            },] }
];

// 同步自 'rmc-calendar/lib/locale/en_US';
var Calendar = {
    title: 'Calendar',
    today: 'Today',
    month: 'Month',
    year: 'Year',
    am: 'AM',
    pm: 'PM',
    dateTimeFormat: 'MM/dd/yyyy w hh:mm',
    dateFormat: 'yyyy/MM/dd w',
    noChoose: 'No Choose',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'],
    clear: 'Clear',
    selectTime: 'Select Time',
    selectStartTime: 'Select Start Time',
    selectEndTime: 'Select End Time',
    start: 'Start',
    end: 'End',
    begin: 'Start',
    over: 'End',
    begin_over: 'S/E',
    confirm: 'Confirm',
    monthTitle: 'yyyy/MM',
    loadPrevMonth: 'Load Prev Month',
    yesterday: 'Yesterday',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month'
};

const mergeDateTime = (date, time) => {
    date = date || new Date();
    if (!time) {
        return date;
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
};
const formatDate = (date, format, locale) => {
    const week = locale && locale.week;
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'w+': week && week[date.getDay()],
        S: date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};
const isSameDate = (day_one, day_two) => {
    if (!day_one || !day_two) {
        console.error('isSameDate function need two params');
        return 'need two params';
    }
    const compareDate = day_one.getDate() === day_two.getDate();
    const compareMonth = day_one.getMonth() === day_two.getMonth();
    const compareYear = day_one.getFullYear() === day_two.getFullYear();
    return compareDate && compareMonth && compareYear;
};

var DateModels;
(function (DateModels) {
    let SelectType;
    (function (SelectType) {
        SelectType[SelectType["None"] = 0] = "None";
        SelectType[SelectType["Single"] = 1] = "Single";
        SelectType[SelectType["All"] = 2] = "All";
        SelectType[SelectType["Only"] = 3] = "Only";
        SelectType[SelectType["Start"] = 4] = "Start";
        SelectType[SelectType["Middle"] = 5] = "Middle";
        SelectType[SelectType["End"] = 6] = "End";
    })(SelectType = DateModels.SelectType || (DateModels.SelectType = {}));
})(DateModels || (DateModels = {}));

class CalendarDatePickerBaseComponent {
    constructor() {
        this.props = {
            prefixCls: 'rmc-calendar',
            infinite: false,
            infiniteOpt: false,
            defaultDate: new Date(),
            initalMonths: 6,
            locale: zhCN
        };
        this.state = {
            months: []
        };
        this.visibleMonth = [];
        this.getDateWithoutTime = (date) => {
            if (!date) {
                return 0;
            }
            return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };
        this.genWeekData = (firstDate) => {
            const minDateTime = this.getDateWithoutTime(this.props.minDate);
            const maxDateTime = this.getDateWithoutTime(this.props.maxDate) || Number.POSITIVE_INFINITY;
            const weeks = [];
            const nextMonth = this.getMonthDate(firstDate, 1).firstDate;
            let currentDay = firstDate;
            let currentWeek = [];
            weeks.push(currentWeek);
            let startWeekday = currentDay.getDay();
            if (startWeekday > 0) {
                for (let i = 0; i < startWeekday; i++) {
                    currentWeek.push({});
                }
            }
            while (currentDay < nextMonth) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }
                const dayOfMonth = currentDay.getDate();
                const tick = +currentDay;
                currentWeek.push({
                    tick,
                    dayOfMonth,
                    selected: DateModels.SelectType.None,
                    isFirstOfMonth: dayOfMonth === 1,
                    isLastOfMonth: false,
                    outOfDate: tick < minDateTime || tick > maxDateTime
                });
                currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
            }
            currentWeek[currentWeek.length - 1].isLastOfMonth = true;
            return weeks;
        };
        this.selectDateRange = (startDate, endDate, clear = false) => {
            const { getDateExtra, type, onSelectHasDisableDate } = this.props;
            if (type === 'one') {
                endDate = undefined;
            }
            const time1 = this.getDateWithoutTime(startDate), time2 = this.getDateWithoutTime(endDate);
            const startDateTick = !time2 || time1 < time2 ? time1 : time2;
            const endDateTick = time2 && time1 > time2 ? time1 : time2;
            const startMonthDate = this.getMonthDate(new Date(startDateTick)).firstDate;
            const endMonthDate = endDateTick ? new Date(endDateTick) : this.getMonthDate(new Date(startDateTick)).lastDate;
            let unuseable = [], needUpdate = false;
            this.state.months
                .filter(m => {
                return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
            })
                .forEach(m => {
                m.weeks.forEach(w => w
                    .filter(d => {
                    if (!endDateTick) {
                        return d.tick && this.inDate(startDateTick, d.tick);
                    }
                    else {
                        return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
                    }
                })
                    .forEach(d => {
                    const oldValue = d.selected;
                    if (clear) {
                        d.selected = DateModels.SelectType.None;
                    }
                    else {
                        const info = (getDateExtra && getDateExtra(new Date(d.tick))) || {};
                        if (d.outOfDate || info.disable) {
                            unuseable.push(d.tick);
                        }
                        if (this.inDate(startDateTick, d.tick)) {
                            if (type === 'one') {
                                d.selected = DateModels.SelectType.Single;
                            }
                            else if (!endDateTick) {
                                d.selected = DateModels.SelectType.Only;
                            }
                            else if (startDateTick !== endDateTick) {
                                d.selected = DateModels.SelectType.Start;
                            }
                            else {
                                d.selected = DateModels.SelectType.All;
                            }
                        }
                        else if (this.inDate(endDateTick, d.tick)) {
                            d.selected = DateModels.SelectType.End;
                        }
                        else {
                            d.selected = DateModels.SelectType.Middle;
                        }
                    }
                    needUpdate = needUpdate || d.selected !== oldValue;
                }));
                if (needUpdate && m.componentRef) {
                    m.componentRef.updateWeeks();
                }
            });
            if (unuseable.length > 0) {
                if (onSelectHasDisableDate) {
                    onSelectHasDisableDate(unuseable.map(tick => new Date(tick)));
                }
                else {
                    console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
                }
            }
        };
        this.computeVisible = (clientHeight, scrollTop) => {
            let needUpdate = false;
            const MAX_VIEW_PORT = clientHeight * 2;
            const MIN_VIEW_PORT = clientHeight;
            // 大缓冲区外过滤规则
            const filterFunc = (vm) => vm.y &&
                vm.height &&
                (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT);
            if (this.props.infiniteOpt && this.visibleMonth.length > 12) {
                this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate);
            }
            // 当小缓冲区不满时填充
            if (this.visibleMonth.length > 0) {
                const last = this.visibleMonth[this.visibleMonth.length - 1];
                if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
                    const lastIndex = this.state.months.indexOf(last);
                    for (let i = 1; i <= 2; i++) {
                        const index = lastIndex + i;
                        if (index < this.state.months.length && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
                            this.visibleMonth.push(this.state.months[index]);
                        }
                        else {
                            if (this.canLoadNext()) {
                                this.genMonthData(undefined, 1);
                            }
                        }
                    }
                    needUpdate = true;
                }
                const first = this.visibleMonth[0];
                if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
                    const firstIndex = this.state.months.indexOf(first);
                    for (let i = 1; i <= 2; i++) {
                        const index = firstIndex - i;
                        if (index >= 0 && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
                            this.visibleMonth.unshift(this.state.months[index]);
                            needUpdate = true;
                        }
                    }
                }
            }
            else if (this.state.months.length > 0) {
                this.visibleMonth = this.state.months.filter(filterFunc);
                needUpdate = true;
            }
            return needUpdate;
        };
        this.createOnScroll = () => {
            // let timer: any;
            let clientHeight = 0, scrollTop = 0;
            return (data) => {
                const { client, top } = data;
                clientHeight = client;
                scrollTop = top;
                this.computeVisible(clientHeight, scrollTop);
                // 以上方法目前无问题，如果后续有性能问题，改用如下方法，但以下方法会导致刷新稍微延迟现象
                // if (timer) {
                //   return;
                // }
                //
                // timer = setTimeout(() => {
                //   timer = undefined;
                //
                //   if (this.computeVisible(clientHeight, scrollTop)) {
                //     console.log('update dom');
                //   }
                // }, 50);
            };
        };
        this.baseOnCellClick = (day) => {
            if (!day.tick) {
                return;
            }
            if (this.props.onCellClick) {
                this.props.onCellClick(new Date(day.tick));
            }
        };
    }
    init() {
        const { initalMonths = 6, defaultDate } = this.props;
        for (let i = 0; i < initalMonths; i++) {
            if (this.canLoadNext()) {
                this.genMonthData(defaultDate, i);
            }
        }
        this.visibleMonth = [...this.state.months];
    }
    receiveProps(oldValue, newValue) {
        if (oldValue && newValue) {
            if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
                if (oldValue.startDate) {
                    this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
                }
                if (newValue.startDate) {
                    this.selectDateRange(newValue.startDate, newValue.endDate);
                }
            }
        }
    }
    getMonthDate(date = new Date(), addMonth = 0) {
        const y = date.getFullYear(), m = date.getMonth();
        return {
            firstDate: new Date(y, m + addMonth, 1),
            lastDate: new Date(y, m + 1 + addMonth, 0)
        };
    }
    canLoadPrev() {
        const { minDate } = this.props;
        return (!minDate ||
            this.state.months.length <= 0 ||
            +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate);
    }
    canLoadNext() {
        const { maxDate } = this.props;
        return (!maxDate ||
            this.state.months.length <= 0 ||
            +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate);
    }
    genMonthData(date, addMonth = 0) {
        if (!date) {
            date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
        }
        if (!date) {
            date = new Date();
        }
        const { locale } = this.props;
        const { firstDate, lastDate } = this.getMonthDate(date, addMonth);
        const weeks = this.genWeekData(firstDate);
        const title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
        const data = {
            title,
            firstDate,
            lastDate,
            weeks
        };
        data.component = this.genMonthComponent(data);
        if (addMonth >= 0) {
            this.state.months.push(data);
        }
        else {
            this.state.months.unshift(data);
        }
        const { startDate, endDate } = this.props;
        if (startDate) {
            this.selectDateRange(startDate, endDate);
        }
        return data;
    }
    inDate(date, tick) {
        return date <= tick && tick < date + 24 * 3600000;
    }
}

class CalendarDatePickerComponent extends CalendarDatePickerBaseComponent {
    constructor() {
        super();
        this.transform = '';
        this._initDelta = 0;
        this._lastY = 0;
        this._delta = this._initDelta;
        this.amCalendar = true;
        this.datePicker = true;
        this.genMonthComponent = (data) => {
            if (!data) {
                return;
            }
            return {
                monthData: data,
                locale: this.props.locale,
                rowSize: this.props.rowSize,
                onCellClick: this.baseOnCellClick,
                getDateExtra: this.props.getDateExtra,
                ref: dom => {
                    data.componentRef = dom || data.componentRef || undefined;
                    data.updateLayout = () => {
                        this.computeHeight(data, dom);
                    };
                    data.updateLayout();
                }
            };
        };
        this.computeHeight = (data, singleMonth) => {
            if (singleMonth && singleMonth.wrapperDivDOM) {
                if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
                    setTimeout(() => this.computeHeight(data, singleMonth), 500);
                    return;
                }
                data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
                data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
            }
        };
        this.setLayout = (dom) => {
            if (dom) {
                const { onLayout } = this.props;
                if (onLayout) {
                    onLayout(dom.clientHeight);
                }
                const scrollHandler = this.createOnScroll();
                dom.onscroll = evt => {
                    scrollHandler({
                        client: dom.clientHeight,
                        full: evt.currentTarget.clientHeight,
                        top: evt.currentTarget.scrollTop
                    });
                };
            }
        };
        this.setPanel = (dom) => {
            this._panel = dom;
        };
    }
    set onCellClick(value) {
        this.props.onCellClick = value;
    }
    set endDate(value) {
        const oldProps = Object.assign({}, this.props);
        this.props.endDate = value;
        this.receiveProps(oldProps, this.props);
    }
    set startDate(value) {
        const oldProps = Object.assign({}, this.props);
        this.props.startDate = value;
        this.receiveProps(oldProps, this.props);
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    set onSelectHasDisableDate(value) {
        this.props.onSelectHasDisableDate = value;
    }
    set onLayout(value) {
        this.props.onLayout = value;
    }
    onTouchStart(event) {
        this._lastY = event.touches[0].screenY || event.touches[0].pageY;
        this._delta = this._initDelta;
    }
    onTouchMove(event) {
        const ele = event.currentTarget;
        const isReachTop = ele.scrollTop === 0;
        if (isReachTop) {
            this._delta = (event.touches[0].screenY || event.touches[0].pageY) - this._lastY;
            if (this._delta > 0) {
                event.preventDefault();
                if (this._delta > 80) {
                    this._delta = 80;
                }
            }
            else {
                this._delta = 0;
            }
            this.setTransform(this._panel.style, `translate3d(0,${this._delta}px,0)`);
        }
    }
    onTouchEnd(event) {
        this.onFinish();
    }
    onFinish() {
        if (this._delta > 40 && this.canLoadPrev()) {
            this.genMonthData(this.state.months[0].firstDate, -1);
            this.visibleMonth = this.state.months.slice(0, this.props.initalMonths);
            this.state.months.forEach(m => {
                if (m.updateLayout) {
                    m.updateLayout();
                }
            });
        }
        this.setTransform(this._panel.style, `translate3d(0,0,0)`);
        this.setTransition(this._panel.style, '.3s');
        setTimeout(() => {
            if (this._panel) {
                this.setTransition(this._panel.style, '');
            }
        }, 300);
    }
    setTransform(nodeStyle, value) {
        this.transform = value;
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
    }
    setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
    }
    ngOnInit() {
        this.init();
        this.setLayout(this.layoutDom.nativeElement);
        this.setPanel(this.panelDom.nativeElement);
    }
}
CalendarDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarDatePicker, nzm-calendar-date-picker',
                template: "<CalendarWeekPanel [locale]=\"props.locale\"></CalendarWeekPanel>\n<div\n  #layout\n  class=\"wrapper\"\n  style=\"overflow-x:hidden;overflow-y:visible;-webkit-overflow-scrolling:touch;\"\n  (touchstart)=\"onTouchStart($event)\"\n  (touchmove)=\"onTouchMove($event)\"\n  (touchend)=\"onTouchEnd($event)\"\n>\n  <div #panel [ngStyle]=\"{ transform: transform }\">\n    <div *ngIf=\"canLoadPrev()\" class=\"load-tip\">{{ props.locale.loadPrevMonth }}</div>\n    <div class=\"months\">\n      <CalendarSingleMonth\n        *ngFor=\"let item of visibleMonth; let i = index\"\n        style=\"display: block;\"\n        [data]=\"item.component\"\n      ></CalendarSingleMonth>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarDatePickerComponent.ctorParameters = () => [];
CalendarDatePickerComponent.propDecorators = {
    layoutDom: [{ type: ViewChild, args: ['layout', { static: true },] }],
    panelDom: [{ type: ViewChild, args: ['panel', { static: true },] }],
    onCellClick: [{ type: Input }],
    endDate: [{ type: Input }],
    startDate: [{ type: Input }],
    propsData: [{ type: Input }],
    onSelectHasDisableDate: [{ type: Input }],
    onLayout: [{ type: Input }],
    amCalendar: [{ type: HostBinding, args: ['class.am-calendar',] }],
    datePicker: [{ type: HostBinding, args: ['class.date-picker',] }]
};

class CalendarComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.isShow = false;
        this.showClear = false;
        this.isSameDate = isSameDate;
        this.props = {
            visible: false,
            showHeader: true,
            locale: zhCN,
            pickTime: false,
            showShortcut: false,
            prefixCls: 'rmc-calendar',
            type: 'range',
            defaultTimeValue: new Date(2000, 0, 1, 8)
        };
        this.state = {
            showTimePicker: false,
            timePickerTitle: '',
            startDate: undefined,
            endDate: undefined,
            disConfirmBtn: true,
            clientHight: 0
        };
        this._unsubscribe$ = new Subject();
        this._dateModelTime = 0;
        this.onCancel = new EventEmitter();
        this.onConfirm = new EventEmitter();
        this.onSelectHasDisableDate = new EventEmitter();
        this.class = 'am-calendar';
        this.selectDate = (date, useDateTime = false, oldState = {}, props = this.props) => {
            if (!date) {
                return {};
            }
            let newState = {};
            const { type, pickTime, defaultTimeValue, locale = {} } = props;
            const newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
            const { startDate, endDate } = oldState;
            switch (type) {
                case 'one':
                    newState = Object.assign(Object.assign({}, newState), { startDate: newDate, disConfirmBtn: false });
                    if (pickTime) {
                        newState = Object.assign(Object.assign({}, newState), { timePickerTitle: locale.selectTime, showTimePicker: true });
                    }
                    break;
                case 'range':
                    if (!startDate || endDate) {
                        newState = Object.assign(Object.assign({}, newState), { startDate: newDate, endDate: undefined, disConfirmBtn: true });
                        if (pickTime) {
                            newState = Object.assign(Object.assign({}, newState), { timePickerTitle: locale.selectStartTime, showTimePicker: true });
                        }
                    }
                    else {
                        newState = Object.assign(Object.assign({}, newState), { timePickerTitle: +newDate >= +startDate || this.isSameDate(startDate, newDate)
                                ? locale.selectEndTime
                                : locale.selectStartTime, disConfirmBtn: false, endDate: pickTime && !useDateTime && (+newDate >= +startDate || this.isSameDate(startDate, newDate))
                                ? new Date(+mergeDateTime(newDate, startDate) + 3600000)
                                : newDate });
                    }
                    break;
            }
            this.writeModelData(date);
            return newState;
        };
        this.onSelectedDate = (date) => {
            const { startDate, endDate } = this.state;
            const { onSelect } = this.props;
            if (onSelect) {
                const value = onSelect(date, [startDate, endDate]);
                if (value) {
                    this.shortcutSelect(value[0], value[1]);
                    return;
                }
            }
            this.state = Object.assign(Object.assign({}, this.state), this.selectDate(date, false, { startDate, endDate }));
            this.showClear = !!this.state.startDate;
        };
        this.triggerSelectHasDisableDate = (date) => {
            this.triggerClear();
            if (this.onSelectHasDisableDate) {
                this.onSelectHasDisableDate.emit(date);
            }
        };
        this.onClose = () => {
            this.state = {
                showTimePicker: false,
                timePickerTitle: '',
                startDate: undefined,
                endDate: undefined,
                disConfirmBtn: true,
                clientHight: 0
            };
            this.showClear = !!this.state.startDate;
        };
        this.triggerConfirm = () => {
            const { startDate, endDate } = this.state;
            if (startDate && endDate && +startDate > +endDate) {
                this.onClose();
                return this.onConfirm && this.onConfirm.emit({ startDate: endDate, endDate: startDate });
            }
            if (this.onConfirm) {
                this.onConfirm.emit({ startDate, endDate });
            }
            this.onClose();
        };
        this.triggerClear = () => {
            // 清除数据做延迟，否则同步刷新数据导致报错
            setTimeout(() => {
                this.state = Object.assign(Object.assign({}, this.state), { startDate: undefined, endDate: undefined, showTimePicker: false });
                if (this.props.onClear) {
                    this.props.onClear();
                }
                this.showClear = !!this.state.startDate;
            }, 0);
        };
        this.onTimeChange = (date) => {
            const { startDate, endDate } = this.state;
            if (endDate) {
                this.state.endDate = date;
            }
            else if (startDate) {
                this.state.startDate = date;
            }
        };
        this.shortcutSelect = (startDate, endDate, props = this.props) => {
            this.state = Object.assign(Object.assign(Object.assign({}, this.state), { startDate, showTimePicker: false }), this.selectDate(endDate, true, { startDate }, props));
            this.showClear = !!this.state.startDate;
        };
        this.setClientHeight = (height) => {
            this.state.clientHight = height;
        };
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    set locale(value) {
        if (value === 'enUS') {
            this.props.locale = Calendar;
        }
        else if (value === 'zhCN') {
            this.props.locale = zhCN;
        }
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
    set defaultTimeValue(value) {
        if (value) {
            this.props.defaultTimeValue = value;
        }
    }
    set prefixCls(value) {
        if (value) {
            this.props.prefixCls = value;
        }
    }
    set enterDirection(value) {
        this._enterDirection = value;
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-enter slideH-enter-active';
        }
        else {
            this.contentAnimateClass = 'slideV-enter slideV-enter-active';
        }
    }
    set visible(value) {
        this.props.visible = value;
        if (value === true || value === 'true') {
            this.showAnimation();
            this.isShow = true;
        }
        else {
            this.hideAnimation();
            setTimeout(() => {
                this.isShow = false;
            }, 300);
        }
    }
    set getDateExtra(value) {
        this.props.getDateExtra = value;
    }
    set defaultDate(value) {
        this.props.defaultDate = value;
    }
    set minDate(value) {
        this.props.minDate = value;
    }
    set maxDate(value) {
        this.props.maxDate = value;
    }
    set pickTime(value) {
        this.props.pickTime = value;
    }
    set type(value) {
        this.props.type = value;
    }
    set showShortcut(value) {
        this.props.showShortcut = value;
    }
    set rowSize(value) {
        this.props.rowSize = value;
    }
    set infinite(value) { }
    set defaultValue(value) {
        this.props.defaultValue = value;
        if (value) {
            this.receiveProps(this.props);
        }
    }
    set onSelect(value) {
        this.props.onSelect = value;
    }
    writeValue(value) {
        this._dateModelType = null;
        if (value && value instanceof Array) {
            if (value.length === 0) {
                console.error('[ng-zorro-antd-mobile]: calendar ngModel array need params!');
                return;
            }
            if (this.props.type === 'one' && value.length >= 2) {
                this._dateModelType = 1;
                console.error('[ng-zorro-antd-mobile]: type is one, but ngmodel has more than one param, just use first one');
                this.onSelectedDate(value[0]);
            }
            else if (value.length === 1) {
                this._dateModelType = 1;
                this.onSelectedDate(value[0]);
            }
            else {
                this._dateModelType = 2;
                this.onSelectedDate(value[0]);
                this.onSelectedDate(value[1]);
            }
        }
        else if (value && value instanceof Date) {
            this._dateModelType = 3;
            this.onSelectedDate(value);
        }
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    receiveProps(nextProps) {
        if (nextProps.visible && nextProps.defaultValue) {
            this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
        }
    }
    showAnimation() {
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-enter slideH-enter-active';
        }
        else {
            this.contentAnimateClass = 'slideV-enter slideV-enter-active';
        }
        this.maskAnimateClass = 'fade-enter fade-enter-active';
    }
    hideAnimation() {
        if (this._enterDirection === 'horizontal') {
            this.contentAnimateClass = 'slideH-leave slideH-leave-active';
        }
        else {
            this.contentAnimateClass = 'slideV-leave slideV-leave-active';
        }
        this.maskAnimateClass = 'fade-leave fade-leave-active';
    }
    writeModelData(date) {
        if (this._dateModelValue instanceof Array) {
            this._dateModelTime = this._dateModelValue.length;
        }
        else {
            this._dateModelTime = 0;
        }
        switch (this._dateModelType) {
            case 1:
                this._dateModelValue = [date];
                this.onChangeFn(this._dateModelValue);
                break;
            case 2:
                if (this._dateModelTime === 1) {
                    if (+date < +this._dateModelValue[0]) {
                        this._dateModelValue.unshift(date);
                    }
                    else {
                        this._dateModelValue.push(date);
                    }
                    this.onChangeFn(this._dateModelValue);
                }
                else {
                    this._dateModelValue = [];
                    this._dateModelValue.push(date);
                }
                break;
            case 3:
                this._dateModelValue = date;
                this.onChangeFn(this._dateModelValue);
                break;
            default:
                break;
        }
    }
    triggerCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
        this.onClose();
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }
    ngOnInit() {
        const defaultValue = this.props.defaultValue;
        if (defaultValue) {
            this.state = Object.assign(Object.assign({}, this.state), this.selectDate(defaultValue[1], true, { startDate: defaultValue[0] }, this.props));
        }
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this.props.locale = Object.assign({}, this._localeProviderService.getLocaleSubObj('Calendar'));
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'Calendar, nzm-calendar',
                template: "<span *ngIf=\"isShow\">\n  <div class=\"{{ 'mask ' + maskAnimateClass }}\"></div>\n</span>\n<span *ngIf=\"isShow\">\n  <div class=\"{{ 'content animate ' + contentAnimateClass }}\">\n    <CalendarHeader\n      [locale]=\"props.locale\"\n      [closeIcon]=\"closeIconHtml\"\n      [showClear]=\"showClear\"\n      (onCancel)=\"triggerCancel()\"\n      (onClear)=\"triggerClear()\"\n    ></CalendarHeader>\n    <CalendarDatePicker\n      [propsData]=\"props\"\n      [endDate]=\"state.endDate\"\n      [startDate]=\"state.startDate\"\n      [onCellClick]=\"onSelectedDate\"\n      [onSelectHasDisableDate]=\"triggerSelectHasDisableDate\"\n      [onLayout]=\"setClientHeight\"\n    ></CalendarDatePicker>\n    <CalendarTimePicker\n      *ngIf=\"state.showTimePicker\"\n      [propsData]=\"props\"\n      [title]=\"state.timePickerTitle\"\n      [clientHeight]=\"state.clientHight\"\n      [prefixCls]=\"props.timePickerPrefixCls\"\n      [defaultValue]=\"props.defaultTimeValue\"\n      [pickerPrefixCls]=\"props.timePickerPickerPrefixCls\"\n      [value]=\"state.endDate ? state.endDate : state.startDate\"\n      [onValueChange]=\"onTimeChange\"\n    ></CalendarTimePicker>\n    <CalendarShortcutPanel\n      *ngIf=\"props.showShortcut && !state.showTimePicker\"\n      [locale]=\"props.locale\"\n      [onSelect]=\"shortcutSelect\"\n    ></CalendarShortcutPanel>\n    <CalendarConfirmPanel\n      *ngIf=\"state.startDate\"\n      [propsData]=\"props\"\n      [startDateTime]=\"state.startDate\"\n      [endDateTime]=\"state.endDate\"\n      [disableBtn]=\"state.disConfirmBtn\"\n      [formatStr]=\"props.pickTime ? props.locale.dateTimeFormat : props.locale.dateFormat\"\n      [onConfirm]=\"triggerConfirm\"\n    ></CalendarConfirmPanel>\n  </div>\n</span>\n<ng-template #closeIconHtml>\n  <Icon [type]=\"'cross'\"></Icon>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }]
            },] }
];
CalendarComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
CalendarComponent.propDecorators = {
    datepicker: [{ type: ViewChild, args: [CalendarDatePickerComponent,] }],
    locale: [{ type: Input }],
    defaultTimeValue: [{ type: Input }],
    prefixCls: [{ type: Input }],
    enterDirection: [{ type: Input }],
    visible: [{ type: Input }],
    getDateExtra: [{ type: Input }],
    defaultDate: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    pickTime: [{ type: Input }],
    type: [{ type: Input }],
    showShortcut: [{ type: Input }],
    rowSize: [{ type: Input }],
    infinite: [{ type: Input }],
    defaultValue: [{ type: Input }],
    onSelect: [{ type: Input }],
    onCancel: [{ type: Output }],
    onConfirm: [{ type: Output }],
    onSelectHasDisableDate: [{ type: Output }],
    class: [{ type: HostBinding, args: ['class',] }]
};

class CalendarHeaderComponent {
    constructor() {
        this.closeIcon_component = false;
        this._closeIcon = 'X';
        this.onCancel = new EventEmitter();
        this.onClear = new EventEmitter();
        this.header = true;
    }
    get locale() {
        return this._locale;
    }
    set locale(value) {
        this._locale = value;
    }
    get closeIcon() {
        return this._closeIcon;
    }
    set closeIcon(value) {
        if (value instanceof TemplateRef) {
            this._closeIcon = value;
            this.closeIcon_component = true;
        }
        else {
            this._closeIcon = value;
            this.closeIcon_component = false;
        }
    }
    get showClear() {
        return this._showClear;
    }
    set showClear(value) {
        this._showClear = value;
    }
    triggerCancel() {
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }
    triggerClear() {
        if (this.onClear) {
            this.onClear.emit();
        }
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarHeader, nzm-calendar-header',
                template: "<span *ngIf=\"!closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\" [innerHTML]=\"closeIcon\"></span>\n<span *ngIf=\"closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\">\n  <ng-template [ngTemplateOutlet]=\"closeIcon\"></ng-template>\n</span>\n<span class=\"title\">{{ title || locale.title }}</span>\n<span *ngIf=\"showClear\" class=\"right\" (click)=\"triggerClear()\">{{ clearIcon || locale.clear }}</span>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarHeaderComponent.ctorParameters = () => [];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    closeIcon: [{ type: Input }],
    showClear: [{ type: Input }],
    onCancel: [{ type: Output }],
    onClear: [{ type: Output }],
    header: [{ type: HostBinding, args: ['class.header',] }]
};

class CalendarWeekPanelComponent {
    constructor() {
        this.week = ['日', '一', '二', '三', '四', '五', '六'];
        this.weekPanel = true;
    }
    set locale(value) {
        this._locale = value;
    }
    ngOnInit() {
        this.week = this._locale.week;
    }
}
CalendarWeekPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarWeekPanel, nzm-calendar-week-panel',
                template: "<div class=\"cell cell-grey\">{{ week[0] }}</div>\n<div class=\"cell\">{{ week[1] }}</div>\n<div class=\"cell\">{{ week[2] }}</div>\n<div class=\"cell\">{{ week[3] }}</div>\n<div class=\"cell\">{{ week[4] }}</div>\n<div class=\"cell\">{{ week[5] }}</div>\n<div class=\"cell cell-grey\">{{ week[6] }}</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarWeekPanelComponent.ctorParameters = () => [];
CalendarWeekPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    weekPanel: [{ type: HostBinding, args: ['class.week-panel',] }]
};

var Picker$1 = {
    okText: 'Ok',
    dismissText: 'Cancel',
    extra: 'please select'
};

// import  DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePicker$1 = {
    okText: 'OK',
    dismissText: 'Cancel',
    extra: 'please select',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

// import  DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePickerView$1 = {
    okText: 'OK',
    dismissText: 'Cancel',
    extra: 'please select',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

var Menu$1 = {
    okText: 'Ok',
    cancelText: 'Cancel'
};

var SearchBar$1 = {
    cancelText: 'Cancel'
};

var InputItem$1 = {
    confirmLabel: 'Done',
    backspaceLabel: 'Backspace',
    cancelKeyboardLabel: 'CancelKeyboard'
};

var Pagination$1 = {
    prevText: 'Prev',
    nextText: 'Next'
};

var PullToRefresh$1 = {
    activateText: 'Refresh immediately after release',
    deactivateText: 'Pull down to refresh',
    finishText: 'Finish refresh'
};

var ActionSheet$1 = {
    dismissText: 'Cancel'
};

var en_US = {
    locale: 'en_US',
    Picker: Picker$1,
    DatePicker: DatePicker$1,
    DatePickerView: DatePickerView$1,
    Menu: Menu$1,
    Calendar,
    SearchBar: SearchBar$1,
    InputItem: InputItem$1,
    Pagination: Pagination$1,
    PullToRefresh: PullToRefresh$1,
    ActionSheet: ActionSheet$1
};

var Picker$2 = {
    okText: 'Ок',
    dismissText: 'Отмена',
    extra: ''
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePicker$2 = {
    okText: 'Ок',
    dismissText: 'Отмена',
    extra: '',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePickerView$2 = {
    okText: 'Ок',
    dismissText: 'Отмена',
    extra: '',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

var Menu$2 = {
    okText: 'Ок',
    cancelText: 'Отмена'
};

var SearchBar$2 = {
    cancelText: 'Отмена'
};

var InputItem$2 = {
    confirmLabel: 'Ок',
    backspaceLabel: 'возврат на одну позицию',
    cancelKeyboardLabel: 'Отменить клавиатуру'
};

var Pagination$2 = {
    prevText: 'Назад',
    nextText: 'Вперёд'
};

var PullToRefresh$2 = {
    activateText: 'Обновить сразу после выпуска',
    deactivateText: 'Потяните вниз, чтобы обновить',
    finishText: 'Завершить обновление'
};

var ActionSheet$2 = {
    dismissText: 'Отмена'
};

var ru_RU = {
    locale: 'ru_RU',
    Picker: Picker$2,
    DatePicker: DatePicker$2,
    DatePickerView: DatePickerView$2,
    Menu: Menu$2,
    // Calendar,
    SearchBar: SearchBar$2,
    InputItem: InputItem$2,
    Pagination: Pagination$2,
    PullToRefresh: PullToRefresh$2,
    ActionSheet: ActionSheet$2
};

var Picker$3 = {
    okText: 'Ok',
    dismissText: 'Avbryt',
    extra: 'vänligen välj'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePicker$3 = {
    okText: 'Ok',
    dismissText: 'Avbryt',
    extra: 'vänligen välj',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePickerView$3 = {
    okText: 'Ok',
    dismissText: 'Avbryt',
    extra: 'vänligen välj',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

var Menu$3 = {
    okText: 'Ok',
    cancelText: 'Avbryt'
};

var SearchBar$3 = {
    cancelText: 'Avbryt'
};

var InputItem$3 = {
    confirmLabel: 'Ok',
    backspaceLabel: 'Backspace',
    cancelKeyboardLabel: 'CancelKeyboard'
};

var Pagination$3 = {
    prevText: 'Föreg',
    nextText: 'Nästa'
};

var PullToRefresh$3 = {
    activateText: 'Uppdatera omedelbart efter utsläpp',
    deactivateText: 'Dra ner för att uppdatera',
    finishText: 'Avsluta uppdateringen'
};

var ActionSheet$3 = {
    dismissText: 'Avbryt'
};

var sv_SE = {
    locale: 'sv_SE',
    Picker: Picker$3,
    DatePicker: DatePicker$3,
    DatePickerView: DatePickerView$3,
    Menu: Menu$3,
    // Calendar,
    SearchBar: SearchBar$3,
    InputItem: InputItem$3,
    Pagination: Pagination$3,
    PullToRefresh: PullToRefresh$3,
    ActionSheet: ActionSheet$3
};

var Picker$4 = {
    okText: 'Ok',
    dismissText: 'Annuller',
    extra: 'Vælg venligst'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePicker$4 = {
    okText: 'Ok',
    dismissText: 'Annuller',
    extra: 'Vælg venligst',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

// import DatePickerLocale from 'rmc-date-picker/lib/locale/en_US';
var DatePickerView$4 = {
    okText: 'Ok',
    dismissText: 'Annuller',
    extra: 'Vælg venligst',
    // DatePickerLocale,
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
};

var Menu$4 = {
    okText: 'Ok',
    cancelText: 'Annuller'
};

// 同步自 'rmc-calendar/lib/locale/en_US';
var Calendar$1 = {
    title: 'Kalender',
    today: 'I dag',
    month: 'Måned',
    year: 'År',
    am: 'AM',
    pm: 'PM',
    dateTimeFormat: 'dd/MM/yyyy w hh:mm',
    dateFormat: 'dd/MM/yyyy w',
    noChoose: 'Intet valgt',
    week: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    clear: 'Fjern',
    selectTime: 'Vælg tidspunkt',
    selectStartTime: 'Vælg starttidspunkt',
    selectEndTime: 'Vælg sluttidspunkt',
    start: 'Start',
    end: 'Slut',
    begin: 'Start',
    over: 'Slut',
    begin_over: 'Start/Stop',
    confirm: 'Bekræft',
    monthTitle: 'MM yyyy',
    loadPrevMonth: 'Indlæs forrige måned',
    yesterday: 'I går',
    lastWeek: 'Sidste uge',
    lastMonth: 'Sidste måned'
};

var SearchBar$4 = {
    cancelText: 'Annuller'
};

var InputItem$4 = {
    confirmLabel: 'Ok',
    backspaceLabel: 'Backspace',
    cancelKeyboardLabel: 'CancelKeyboard'
};

var Pagination$4 = {
    prevText: 'Forrige',
    nextText: 'Næste'
};

var PullToRefresh$4 = {
    activateText: 'Opdater umiddelbart efter slip',
    deactivateText: 'Træk ned for at opdatere',
    finishText: 'Afslut opdatering'
};

var ActionSheet$4 = {
    dismissText: 'Annuller'
};

var da_DK = {
    locale: 'da_DK',
    Picker: Picker$4,
    DatePicker: DatePicker$4,
    DatePickerView: DatePickerView$4,
    Menu: Menu$4,
    Calendar: Calendar$1,
    SearchBar: SearchBar$4,
    InputItem: InputItem$4,
    Pagination: Pagination$4,
    PullToRefresh: PullToRefresh$4,
    ActionSheet: ActionSheet$4
};

class CalendarTimePickerComponent {
    constructor() {
        this.defaultProps = {
            minDate: new Date(0, 0, 0, 0, 0),
            maxDate: new Date(9999, 11, 31, 23, 59, 59),
            defaultValue: new Date(2000, 1, 1, 8),
            mode: 'time',
            datePickerViewLocale: zh_CN
        };
        this.props = {
            minDate: new Date(0, 0, 0, 0, 0),
            maxDate: new Date(9999, 11, 31, 23, 59, 59),
            defaultValue: new Date(2000, 1, 1, 8),
            mode: 'time',
            datePickerViewLocale: zh_CN
        };
        this.timePicker = true;
        this.onDateChange = (date) => {
            const { onValueChange } = this.props;
            if (onValueChange) {
                onValueChange(date.date);
            }
        };
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
        if (this.props.locale && this.props.locale.today === 'Today') {
            this.props.datePickerViewLocale = en_US;
        }
        else {
            this.props.datePickerViewLocale = zh_CN;
        }
    }
    set title(value) {
        this.props.title = value;
    }
    set value(value) {
        this.props.value = value;
    }
    set prefixCls(value) {
        this.props.prefixCls = value;
    }
    set defaultValue(value) {
        this.props.defaultValue = value;
    }
    set pickerPrefixCls(value) {
        this.props.pickerPrefixCls = value;
    }
    set clientHeight(value) {
        this.props.clientHeight = value;
        const height = (value && (value * 3) / 8 - 52) || Number.POSITIVE_INFINITY;
        this.selfHeight = (height > 164 || height < 0 ? 164 : height) + 'px';
    }
    set onValueChange(value) {
        this.props.onValueChange = value;
    }
    getMinTime(date) {
        const minDate = this.props.minDate;
        if (!date ||
            date.getFullYear() > minDate.getFullYear() ||
            date.getMonth() > minDate.getMonth() ||
            date.getDate() > minDate.getDate()) {
            return this.defaultProps.minDate;
        }
        return minDate;
    }
    getMaxTime(date) {
        const maxDate = this.props.maxDate;
        if (!date ||
            date.getFullYear() < maxDate.getFullYear() ||
            date.getMonth() < maxDate.getMonth() ||
            date.getDate() < maxDate.getDate()) {
            return this.defaultProps.maxDate;
        }
        return maxDate;
    }
}
CalendarTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarTimePicker, nzm-calendar-time-picker',
                template: "<div class=\"title\">{{ props.title }}</div>\n<DatePickerView\n  [ngStyle]=\"{ height: selfHeight, overflow: 'hidden' }\"\n  [mode]=\"props.mode\"\n  [value]=\"props.value\"\n  [locale]=\"props.datePickerViewLocale\"\n  [minDate]=\"getMinTime(props.value || props.defaultValue || undefined)\"\n  [maxDate]=\"getMaxTime(props.value || props.defaultValue || undefined)\"\n  (onValueChange)=\"onDateChange($event)\"\n></DatePickerView>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarTimePickerComponent.ctorParameters = () => [];
CalendarTimePickerComponent.propDecorators = {
    propsData: [{ type: Input }],
    title: [{ type: Input }],
    value: [{ type: Input }],
    prefixCls: [{ type: Input }],
    defaultValue: [{ type: Input }],
    pickerPrefixCls: [{ type: Input }],
    clientHeight: [{ type: Input }],
    onValueChange: [{ type: Input }],
    timePicker: [{ type: HostBinding, args: ['class.time-picker',] }]
};

class DatePickerOptions {
    constructor() {
        this.mode = 'date';
        this.value = new Date();
        this.minDate = new Date(2000, 6, 1, 0, 0, 0);
        this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
        this.use12Hours = false;
        this.minuteStep = 1;
        this.data = [];
        this.mask = true;
        this.title = '';
        this.okText = '确定';
        this.dismissText = '取消';
        this.disabled = false;
        this.appendToBody = false;
        this.showErrorToast = true;
        this.showErrorToastInterval = 2000;
        this.onOk = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onValueChange = new EventEmitter();
        this.onChange = new EventEmitter();
    }
}
DatePickerOptions.decorators = [
    { type: Injectable }
];

function getVelocity() {
    return ((minInterval = 30, maxInterval = 100) => {
        let _time = 0;
        let _y = 0;
        let _velocity = 0;
        const recorder = {
            record: y => {
                const now = +new Date();
                _velocity = (y - _y) / (now - _time);
                if (now - _time >= minInterval) {
                    _velocity = now - _time <= maxInterval ? _velocity : 0;
                    _y = y;
                    _time = now;
                }
            },
            getVelocity: y => {
                if (y !== _y) {
                    recorder.record(y);
                }
                return _velocity;
            }
        };
        return recorder;
    })();
}

var velocity = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getVelocity: getVelocity
});

class DatePickerComponent {
    constructor(elementRef, options, toast, localeProviderService) {
        this.elementRef = elementRef;
        this.options = options;
        this.toast = toast;
        this.localeProviderService = localeProviderService;
        this.transitionName = 'am-slide-up-enter am-slide-up-enter-active';
        this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        this.modeSwitch = [1, 1, 1, 1, 1, 1];
        this.localMinDate = [];
        this.localMaxDate = [];
        this.currentTime = [];
        this.indexArray = [];
        this.min_date = [];
        this.max_date = [];
        this.current_time = [
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            new Date().getHours(),
            new Date().getMinutes()
        ];
        this.clos = 0;
        this.resultArr = [];
        this.data = [];
        this.dataWithStr = [];
        this.startY = 0;
        this.differY = 0;
        this.currentY = 0;
        this.len = 0;
        this.dom = null;
        this.index = 0;
        this.maxY = 0;
        this.lineHeight = 34;
        this.selectedTarget = [];
        this.isMouseDown = false;
        this.localeNew = {};
        this.unsubscribe$ = new Subject();
        this.Velocity = getVelocity();
        this.errorMessage = '';
        this.curTLessThanMin = false;
        this.curTMoreThanMax = false;
    }
    panstart(event) {
        if (!event.target.classList.contains('am-picker-col-mask')) {
            return;
        }
        this.isMouseDown = true;
        event.preventDefault();
        this.dom = event.target.parentElement.children[2];
        this.len = this.dom.children.length;
        this.maxY = -(this.len - 1);
        if (this.dom.style.transform === 'translateY(0px)') {
            this.currentY = 0;
            this.maxY = -(this.len - 1);
        }
        else if (this.selectedTarget.length > 0) {
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    this.currentY = item.currentY;
                }
            });
        }
        const ev = this.getEventTarget(event);
        this.startY = ev.clientY;
    }
    panmove(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
            return;
        }
        event.preventDefault();
        const ev = this.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        this.Velocity.record(this.differY);
        this.dom.style.transition = 'transform 0s';
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
    }
    panend(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
            return;
        }
        this.isMouseDown = false;
        event.preventDefault();
        const ev = this.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        let time = 0.3;
        const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
        if (velocityTemp) {
            this.differY = velocityTemp * 40 + this.differY;
            time = Math.abs(velocityTemp) * 0.1;
        }
        this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
        if (this.differY <= -this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY <= this.maxY) {
                this.currentY = this.maxY;
            }
        }
        else if (this.differY >= this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY >= 0) {
                this.currentY = 0;
            }
        }
        if (this.selectedTarget.length > 0) {
            let hasKey = false;
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    hasKey = true;
                    item.targetId = event.target.id;
                    item.currentY = this.currentY;
                }
            });
            if (!hasKey) {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
        }
        else {
            this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
        }
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
        this.index = Math.floor(Math.abs(this.currentY / 1)); // 记录当前位移在数组中的索引,必须取整，否则会出现浮点数
        this.current_time[this.indexArray[parseInt(event.target.id, 0)]] = this.resultArr[this.indexArray[parseInt(event.target.id, 0)]] = this.data[parseInt(event.target.id, 0)][this.index];
        if (this.judgeTime(this.current_time, this.max_date)) {
            this.currentTime = this.current_time =
                this.max_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
            this.resultArr = this.current_time;
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
            this.init();
        }
        else if (this.judgeTime(this.min_date, this.current_time)) {
            this.currentTime = this.current_time =
                this.min_date.slice(0, this.options.mode === 'time' ? this.modeSwitch.length : this.indexArray.length);
            this.resultArr = this.currentTime;
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
            this.init();
        }
        else {
            this.setCurrentSelected(0, this.differY < 0, this.index);
            this.options.onValueChange.emit({ date: this.handleReslut(), index: event.target.id });
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.handleReslut());
            }
            if (this.ngModelOnChange) {
                this.ngModelOnChange(this.handleReslut());
            }
        }
    }
    init() {
        if (!this.checkTime() && this.options.showErrorToast) {
            setTimeout(() => {
                this.toast.fail(this.errorMessage, this.options.showErrorToastInterval);
            }, 0);
        }
        this.initResult();
        this.initReady();
        this.getInitValueIndex();
    }
    reloadPicker() {
        if (!this.picker || this.picker === undefined) {
            return;
        }
        this.currentPicker = this.picker.element.nativeElement;
        if (this.currentPicker && this.currentPicker.children.length > 0) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    localeProvider() {
        const self = this;
        if (self.options.locale || self.options.locale !== undefined) {
            self.localeProviderService.setLocale(self.options.locale);
        }
        self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
            self.options.locale = self.localeProviderService.getLocale();
            self.localeNew = self.localeProviderService.getLocaleSubObj('DatePicker');
            self.options.okText = self.localeNew.okText;
            self.options.dismissText = self.localeNew.dismissText;
            self.init();
        });
    }
    transformDateFormat(date) {
        if (!date) {
            return '';
        }
        else {
            return 'yyyy-mm-dd-HH-MM'
                .replace('yyyy', date.getFullYear() + '')
                .replace('mm', date.getMonth() + 1 + '')
                .replace('dd', date.getDate() + '')
                .replace('HH', date.getHours() + '')
                .replace('MM', date.getMinutes() + '');
        }
    }
    preZero(val) {
        return val < 10 ? '0' + val : val + '';
    }
    getInitValueIndex() {
        this.selectedTarget = [];
        this.indexArray.map((index, i) => {
            this.data.forEach((item, j) => {
                item.forEach((item1, k) => {
                    if (this.currentTime[index] === item1 && i === j) {
                        this.selectedTarget.push({ targetId: `${i}`, currentY: -k });
                    }
                });
            });
        });
        this.reloadPicker();
    }
    checkMode(mode) {
        this.modeSwitch = [1, 1, 1, 1, 1, 1];
        switch (mode) {
            case 'date':
                this.modeSwitch = [1, 1, 1, 0, 0, 0];
                break;
            case 'time':
                if (this.options.use12Hours) {
                    this.modeSwitch = [0, 0, 0, 1, 1, 1];
                }
                else {
                    this.modeSwitch = [0, 0, 0, 1, 1, 0];
                }
                break;
            case 'datetime':
                if (this.options.use12Hours) {
                    this.modeSwitch = [1, 1, 1, 1, 1, 1];
                }
                else {
                    this.modeSwitch = [1, 1, 1, 1, 1, 0];
                }
                break;
            case 'year':
                this.modeSwitch = [1, 0, 0, 0, 0];
                break;
            case 'month':
                this.modeSwitch = [1, 1, 0, 0, 0];
                break;
            default:
                break;
        }
        const tempIndexArray = [];
        for (let i = 0; i < this.modeSwitch.length; i++) {
            if (this.modeSwitch[i] > 0) {
                tempIndexArray.push(i);
            }
        }
        this.clos = tempIndexArray[tempIndexArray.length - 1] - tempIndexArray[0] + 1;
        this.indexArray = tempIndexArray;
    }
    initResult() {
        this.resultArr = [];
        for (let i = 0; i < this.clos; i++) {
            const res = this.currentTime[i];
            if (this.options.mode === 'time') {
                this.resultArr = this.currentTime;
            }
            else {
                this.resultArr.push(res);
            }
        }
    }
    checkTime() {
        const min_Date = this.transformDateFormat(this.options.minDate).split('-');
        if (min_Date.length > 0) {
            this.min_date = min_Date.map(item => {
                return parseInt(item, 0);
            });
        }
        const max_Date = this.transformDateFormat(this.options.maxDate).split('-');
        if (max_Date.length > 0) {
            this.max_date = max_Date.map(item => {
                return parseInt(item, 0);
            });
        }
        const min_date = this.min_date;
        const max_date = this.max_date;
        const current_time = this.currentTime;
        this.localMinDate = [];
        if (this.localMinDate.length === 0) {
            for (let index = 0; index < this.indexArray.length; index++) {
                this.localMinDate.push(min_date[this.indexArray[index]]);
            }
        }
        this.localMaxDate = [];
        if (this.localMaxDate.length === 0) {
            for (let index = 0; index < this.indexArray.length; index++) {
                this.localMaxDate.push(max_date[this.indexArray[index]]);
            }
        }
        if (this.indexArray.length === this.localMinDate.length && this.localMinDate.length === this.localMaxDate.length) {
            const minT = new Date(min_date[0], min_date[1], min_date[2], min_date[3], min_date[4]).getTime();
            const maxT = new Date(max_date[0], max_date[1], max_date[2], max_date[3], max_date[4]).getTime();
            const curT = new Date(current_time[0], current_time[1], current_time[2], current_time[3] || 0, current_time[4] || 0).getTime();
            this.curTLessThanMin = false;
            this.curTMoreThanMax = false;
            if (curT < minT) {
                this.curTLessThanMin = true;
                this.currentTime = this.min_date;
                this.errorMessage = this.localeNew.curTLessthanMin;
            }
            if (curT > maxT) {
                this.curTMoreThanMax = true;
                this.currentTime = this.max_date;
                this.errorMessage = this.localeNew.curTMorethanMax;
            }
            let _indexArrayIndex = 0;
            let timeModeIndex = this.options.mode === 'time' ? 3 : 0;
            for (let i = 0; i < this.modeSwitch.length; i++) {
                if (this.modeSwitch[i] === 0) {
                    switch (i) {
                        case 0:
                            min_date[i] = new Date().getFullYear();
                            max_date[i] = new Date().getFullYear();
                            break;
                        case 1:
                            min_date[i] = new Date().getMonth() + 1;
                            max_date[i] = new Date().getMonth() + 1;
                            break;
                        case 2:
                            min_date[i] = new Date().getDate();
                            max_date[i] = new Date().getDate();
                            break;
                        case 3:
                            min_date[i] = new Date().getHours();
                            max_date[i] = new Date().getHours();
                            break;
                        case 4:
                            min_date[i] = new Date().getMinutes();
                            max_date[i] = new Date().getMinutes();
                            break;
                        case 5:
                            min_date[i] = 0;
                            max_date[i] = 1;
                            break;
                    }
                }
                else {
                    switch (i) {
                        case 0:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] >= 1900
                                    ? this.localMinDate[_indexArrayIndex]
                                    : new Date().getFullYear();
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] >= 1900
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : new Date().getFullYear() + 1;
                            break;
                        case 1:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] > 0 && this.localMinDate[_indexArrayIndex] <= 12
                                    ? this.localMinDate[_indexArrayIndex]
                                    : 1;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] > 0 && this.localMaxDate[_indexArrayIndex] <= 12
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : 12;
                            break;
                        case 2:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex] > 0 &&
                                    this.localMinDate[_indexArrayIndex] <= new Date(min_date[0], min_date[1], 0).getDate()
                                    ? this.localMinDate[_indexArrayIndex]
                                    : 1;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex] > 0 &&
                                    this.localMaxDate[_indexArrayIndex] <= new Date(max_date[0], max_date[1], 0).getDate()
                                    ? this.localMaxDate[_indexArrayIndex]
                                    : new Date(max_date[0], max_date[1], 0).getDate();
                            break;
                        case 3:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 23
                                    ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                                    : 0;
                            if (this.options.use12Hours) {
                                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                    this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 11
                                        ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                        : 11;
                            }
                            else {
                                this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                    this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 23
                                        ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                        : 23;
                            }
                            break;
                        case 4:
                            this.localMinDate[_indexArrayIndex] = min_date[i] =
                                this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 59
                                    ? this.localMinDate[_indexArrayIndex - timeModeIndex]
                                    : 0;
                            this.localMaxDate[_indexArrayIndex] = max_date[i] =
                                this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 59
                                    ? this.localMaxDate[_indexArrayIndex - timeModeIndex]
                                    : 59;
                            break;
                    }
                }
                _indexArrayIndex++;
            }
            return minT <= curT && curT <= maxT;
        }
        else {
            this.errorMessage = this.localeNew.errorMessage;
            return false;
        }
    }
    judgeTime(arr1, arr2) {
        let date1;
        let date2;
        date1 = arr1.slice(0, 3).join('-') + ' ' + arr1.slice(3, 5).join(':');
        date2 = arr2.slice(0, 3).join('-') + ' ' + arr2.slice(3, 5).join(':');
        return new Date(date1).getTime() > new Date(date2).getTime();
    }
    judgeEqualArray(arr1, arr2, length) {
        let status = true;
        for (let i = 0; i < length; i++) {
            if (arr1[i] != arr2[i]) {
                status = false;
            }
        }
        return status;
    }
    initReady() {
        let realIdx = 0;
        for (let i = 0; i < this.clos; i++) {
            realIdx = this.indexArray[i];
            let min = 0;
            let max = 0;
            const tempArray = [];
            switch (realIdx) {
                case 0:
                    this.initData(tempArray, this.localMinDate[i], this.localMaxDate[i], this.localeNew.year, i);
                    break;
                case 1:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[i] : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[i] : 12;
                    this.initData(tempArray, min, max, this.localeNew.month, i);
                    break;
                case 2:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 2)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 2)
                        ? this.localMaxDate[i]
                        : new Date(this.current_time[0], this.current_time[1], 0).getDate();
                    this.initData(tempArray, min, max, this.localeNew.day, i);
                    break;
                case 3:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 3)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 3)
                        ? this.localMaxDate[i]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[i]
                            : 23;
                    this.initData(tempArray, min, max, this.localeNew.hour, i);
                    break;
                case 4:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 4)
                        ? this.localMinDate[i]
                        : this.curTLessThanMin
                            ? this.localMinDate[i]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 4)
                        ? this.localMaxDate[i]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[i]
                            : 59;
                    this.initData(tempArray, min, max, this.localeNew.minute, i);
                    break;
                case 5:
                    min = 0;
                    max = 1;
                    this.initData(tempArray, min, max, 'use12Hours', i);
                    break;
            }
        }
    }
    initData(tempArr, min, max, str, idx) {
        const dataWithStr = [];
        const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
        for (min; min < max + 1; min += increaseValue) {
            tempArr.push(min);
            dataWithStr.push(min + str);
        }
        if (this.data.length > this.indexArray.length) {
            this.data = [];
            this.dataWithStr = [];
        }
        if (this.data.length > idx && this.data[idx].toString() !== tempArr.toString()) {
            this.data[idx] = tempArr;
        }
        else if (this.data.length > idx && this.data[idx].toString() === tempArr.toString()) {
            this.data[idx] = tempArr;
        }
        else {
            this.data.push(tempArr);
        }
        if (this.options.locale === undefined || this.options.locale.locale === 'zh_CN') {
            if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() !== dataWithStr.toString()) {
                this.dataWithStr[idx] = dataWithStr;
            }
            else if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() === dataWithStr.toString()) {
                this.dataWithStr[idx] = dataWithStr;
            }
            else {
                this.dataWithStr.push(dataWithStr);
            }
        }
        else {
            this.dataWithStr = this.data;
        }
    }
    ok() {
        this.options.onOk.emit(this.handleReslut());
        this.setTransitionName();
    }
    handleReslut() {
        let result = '';
        if (this.options.mode === 'datetime' || this.options.mode === 'time') {
            const temp = this.resultArr;
            result = temp.slice(0, 3).join('-') + ' ' + temp.slice(3, 5).join(':');
        }
        else {
            if (this.resultArr.length < 3) {
                this.resultArr.push('1');
            }
            result = this.resultArr
                .slice(0, 3)
                .map(v => {
                return this.preZero(parseInt(v, 0));
            })
                .join('-');
        }
        this.resultDate = new Date(result.replace(/-/g, '/'));
        if (this.options.minDate.getTime() > this.resultDate.getTime()) {
            if (this.resultArr.length > 0) {
                for (let index = 0; index < this.resultArr.length; index++) {
                    this.resultArr = [...this.min_date];
                    this.currentTime = this.resultArr;
                    this.current_time = this.currentTime;
                }
            }
            this.resultDate = this.options.minDate;
        }
        return this.resultDate;
    }
    cancel() {
        this.options.onDismiss.emit();
        this.setTransitionName();
    }
    setTransitionName() {
        this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
        this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
        setTimeout(() => {
            this.options.hidePicker();
        }, 200);
    }
    setCurrentSelected(checkIdx, sta, indexT) {
        if (checkIdx >= this.clos - 1) {
            return;
        }
        let status = null;
        if (sta) {
            status = this.judgeEqualArray(this.min_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
        }
        else {
            status = this.judgeEqualArray(this.max_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
        }
        if (!status) {
            let min = 0;
            let max = 0;
            let str = '';
            const realIdx = this.indexArray[checkIdx];
            switch (realIdx) {
                case 0:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[checkIdx + 1] : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[checkIdx + 1] : 12;
                    str = '月';
                    break;
                case 1:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 2)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 1;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 2)
                        ? this.localMaxDate[checkIdx + 1]
                        : new Date(this.current_time[0], this.current_time[1], 0).getDate();
                    str = '日';
                    break;
                case 2:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 3)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 3)
                        ? this.localMaxDate[checkIdx + 1]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[checkIdx + 1]
                            : 23;
                    str = '时';
                    break;
                case 3:
                    min = this.judgeEqualArray(this.min_date, this.current_time, 4)
                        ? this.localMinDate[checkIdx + 1]
                        : this.curTLessThanMin
                            ? this.localMinDate[checkIdx + 1]
                            : 0;
                    max = this.judgeEqualArray(this.max_date, this.current_time, 4)
                        ? this.localMaxDate[checkIdx + 1]
                        : this.curTMoreThanMax
                            ? this.localMaxDate[checkIdx + 1]
                            : 59;
                    str = '分';
                    break;
            }
            this.initRangeArr(min, max, indexT, checkIdx + 1, str);
        }
        this.setCurrentSelected(checkIdx + 1, sta, indexT);
    }
    initRangeArr(min, max, indexT, checkIdx, str) {
        const realIdx = this.indexArray[checkIdx];
        const arr = [];
        let targetLong = 0;
        const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
        for (let index = min; index < max + 1; index += increaseValue) {
            arr.push(index);
        }
        if (arr.indexOf(this.resultArr[realIdx]) == -1) {
            if (-this.selectedTarget[checkIdx].currentY > max - min) {
                indexT = max - min;
                this.selectedTarget[checkIdx].currentY = -indexT;
            }
            targetLong = -arr.length * this.lineHeight;
        }
        else {
            targetLong = -arr.indexOf(this.resultArr[realIdx]) * this.lineHeight;
            this.selectedTarget[checkIdx].currentY = -arr.indexOf(this.resultArr[realIdx]);
        }
        if (this.data[checkIdx].toString() !== arr.toString()) {
            if (checkIdx >= 3) {
                this.current_time[realIdx] = -targetLong / this.lineHeight;
                this.resultArr[realIdx] = -targetLong / this.lineHeight;
            }
            else {
                const delta = this.judgeEqualArray(this.current_time, this.min_date, realIdx) ? this.min_date[realIdx] : 1;
                this.current_time[realIdx] = -targetLong / this.lineHeight + delta;
                this.resultArr[realIdx] = -targetLong / this.lineHeight + delta;
            }
            this.data[checkIdx] = arr;
            this.dataWithStr[checkIdx] =
                this.options.locale.locale === 'zh_CN'
                    ? arr.map(item => {
                        return item + str;
                    })
                    : arr;
            setTimeout(() => {
                this.selectedTarget.forEach((item, i) => {
                    if (i >= checkIdx) {
                        this.currentPicker.children[i].children[2].style.transition = '';
                        const index = parseInt(item.currentY, 0);
                        this.currentPicker.children[i].children[2].style.transform = `translateY(${index * this.lineHeight}px)`;
                    }
                });
            }, 0);
        }
    }
    getEventTarget(event) {
        if (event.type === 'mousedown' ||
            event.type === 'mousemove' ||
            event.type === 'mouseup' ||
            event.type === 'mouseleave') {
            return event;
        }
        else {
            if (event && event.changedTouches && event.changedTouches[0]) {
                return event.changedTouches[0];
            }
            return null;
        }
    }
    ngOnInit() {
        this.checkMode(this.options.mode);
        const value = this.transformDateFormat(this.options.value).split('-');
        if (value.length > 1) {
            this.current_time = this.currentTime = value.map(item => {
                return parseInt(item, 0);
            });
        }
        else {
            this.currentTime = this.current_time;
        }
        this.localeProvider();
    }
    ngAfterViewInit() {
        this.reloadPicker();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'DatePicker, nzm-date-picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup {{ transitionName }}\" style=\"z-index: 1000\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">\n            {{ options.okText }}\n          </div>\n        </div>\n        <div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n          <div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\"></div>\n            <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n            <div class=\"am-picker-col-content\">\n              <div id=\"{{ i }}\" class=\"am-picker-col-item\" *ngFor=\"let val of item; let i = index\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DatePickerOptions },
    { type: ToastService },
    { type: LocaleProviderService }
];
DatePickerComponent.propDecorators = {
    picker: [{ type: ViewChild, args: ['picker', { read: ViewContainerRef },] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};

class DatePickerViewComponent extends DatePickerComponent {
    constructor() {
        super(...arguments);
        this.mode = 'date';
        this.minDate = new Date(2000, 5, 1, 0, 0, 0);
        this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
        this.value = new Date();
        this.disabled = false;
        this.indicatorStyle = {};
        this.showErrorToast = true;
        this.showErrorToastInterval = 2000;
        this.onValueChange = new EventEmitter();
        this.amPicker = true;
    }
    get locale() {
        return this.options.locale;
    }
    set locale(value) {
        this.options.locale = value;
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    reloadPicker() {
        if (this.currentPicker) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    writeValue(value) {
        if (value) {
            this.value = value;
            this.optionInit();
            this.init();
        }
    }
    registerOnChange(fn) {
        this.ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this.ngModelOnTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    optionInit() {
        this.options.mode = this.mode;
        this.options.minDate = this.minDate;
        this.options.maxDate = this.maxDate;
        this.options.disabled = this.disabled;
        this.options.locale = this.locale;
        this.options.value = this.value;
        this.options.showErrorToast = this.showErrorToast;
        this.options.showErrorToastInterval = this.showErrorToastInterval;
        this.options.onValueChange = this.onValueChange;
        this.checkMode(this.options.mode);
        const value = this.transformDateFormat(this.options.value).split('-');
        if (value.length > 0) {
            this.currentTime = value.map(item => {
                return parseInt(item, 0);
            });
        }
    }
    ngOnInit() {
        this.optionInit();
        this.localeProvider();
    }
    ngAfterViewInit() {
        this.currentPicker = this.elementRef.nativeElement;
        this.reloadPicker();
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.options.value = changes.value.currentValue;
            const value = this.transformDateFormat(this.options.value).split('-');
            if (value.length > 0) {
                this.currentTime = value.map(item => {
                    return parseInt(item, 0);
                });
            }
            if (!this.judgeEqualArray(this.currentTime, this.resultArr, this.resultArr.length) ||
                this.judgeEqualArray(this.currentTime, this.min_date, this.currentTime.length) ||
                this.judgeTime(this.currentTime, this.max_date)) {
                this.optionInit();
                this.init();
            }
        }
        if (changes.mode || changes.minDate || changes.maxDate || changes.disabled || changes.locale) {
            this.optionInit();
            this.init();
        }
    }
}
DatePickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'DatePickerView, nzm-date-picker-view',
                template: "<div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n  <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"indicatorStyle\"></div>\n  <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n  <div class=\"am-picker-col-content\">\n    <div id=\"{{ i }}\" *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\">\n      {{ val.label ? val.label : val }}\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerViewComponent),
                        multi: true
                    },
                    DatePickerOptions
                ]
            },] }
];
DatePickerViewComponent.propDecorators = {
    mode: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    locale: [{ type: Input }],
    showErrorToast: [{ type: Input }],
    showErrorToastInterval: [{ type: Input }],
    onValueChange: [{ type: Output }],
    amPicker: [{ type: HostBinding, args: ['class.am-picker',] }]
};

class DatePickerDirective {
    constructor(_viewContainerRef, _defaultOptions, _cfr) {
        this._viewContainerRef = _viewContainerRef;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._eventListeners = [];
        this.minuteStep = 1;
        this.value = new Date();
        this.onVisibleChange = new EventEmitter(true);
        this.onValueChange = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onDismiss = new EventEmitter();
    }
    togglePicker() {
        if (!this.picker) {
            this.showPicker();
        }
        else {
            this.hidePicker();
        }
    }
    showPicker() {
        if (!this.picker && !this.disabled) {
            setTimeout(() => {
                this._eventListeners = [];
            });
            const options = new DatePickerOptions();
            Object.assign(options, this._defaultOptions, {
                hidePicker: (event) => {
                    this.hidePicker();
                },
                updateNgModel: (value) => {
                    if (this._ngModelOnChange) {
                        this.value = value;
                        this._ngModelOnChange(value);
                    }
                }
            });
            const optionalParams = [
                'mode',
                'minDate',
                'maxDate',
                'minuteStep',
                'value',
                'mask',
                'title',
                'okText',
                'dismissText',
                'disabled',
                'locale',
                'appendToBody',
                'showErrorToast',
                'showErrorToastInterval',
                'onOk',
                'onDismiss',
                'onValueChange'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(DatePickerComponent);
            const childInjector = Injector.create([
                {
                    provide: DatePickerOptions,
                    useValue: options
                }
            ]);
            this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
            }
            this.onVisibleChange.emit(true);
        }
    }
    hidePicker() {
        if (this.appendToBodyElement) {
            document.body.removeChild(this.appendToBodyElement);
            this.appendToBodyElement = null;
        }
        if (this.picker) {
            this.picker.destroy();
            delete this.picker;
            this.onVisibleChange.emit(false);
            this._eventListeners.forEach(fn => fn());
            this._eventListeners = [];
        }
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnInit() {
        this.onVisibleChange.emit(false);
    }
    ngOnChanges(changes) {
        if (changes.isOpen) {
            if (changes.isOpen.currentValue === true) {
                this.showPicker();
            }
            else {
                this.hidePicker();
            }
        }
    }
    ngOnDestroy() {
        this.hidePicker();
    }
}
DatePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[DatePicker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerDirective),
                        multi: true
                    }
                ]
            },] }
];
DatePickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: DatePickerOptions },
    { type: ComponentFactoryResolver }
];
DatePickerDirective.propDecorators = {
    isOpen: [{ type: Input }],
    mode: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    use12Hours: [{ type: Input }],
    minuteStep: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    title: [{ type: Input }],
    okText: [{ type: Input }],
    dismissText: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    appendToBody: [{ type: Input }],
    showErrorToast: [{ type: Input }],
    showErrorToastInterval: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onValueChange: [{ type: Output }],
    onOk: [{ type: Output }],
    onDismiss: [{ type: Output }],
    togglePicker: [{ type: HostListener, args: ['click',] }]
};

class DatePickerModule {
}
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
                exports: [DatePickerComponent, DatePickerDirective],
                declarations: [DatePickerComponent, DatePickerDirective],
                providers: [DatePickerOptions]
            },] }
];

class DatePickerViewModule {
}
DatePickerViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
                exports: [DatePickerViewComponent],
                declarations: [DatePickerViewComponent]
            },] }
];

class CalendarSingleMonthComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.props = {
            rowSize: 'normal'
        };
        this.state = {
            weekComponents: []
        };
        this.singleMonth = true;
        this.genWeek = (weeksData, index) => {
            const { getDateExtra, monthData, onCellClick, locale, rowSize } = this.props;
            let rowCls = 'row';
            let weeksDataList = [];
            if (rowSize === 'xl') {
                rowCls += ' row-xl';
            }
            weeksData.forEach((day, dayOfWeek) => {
                const extra = (getDateExtra && getDateExtra(new Date(day.tick))) || {};
                let info = extra.info;
                const disable = extra.disable || day.outOfDate;
                let cls = 'date';
                let lCls = 'left';
                let rCls = 'right';
                let infoCls = 'info';
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    cls += ' grey';
                }
                if (disable) {
                    cls += ' disable';
                }
                else if (info) {
                    cls += ' important';
                }
                if (day.selected) {
                    cls += ' date-selected';
                    let styleType = day.selected;
                    switch (styleType) {
                        case DateModels.SelectType.Only:
                            info = locale.begin;
                            infoCls += ' date-selected';
                            break;
                        case DateModels.SelectType.All:
                            info = locale.begin_over;
                            infoCls += ' date-selected';
                            break;
                        case DateModels.SelectType.Start:
                            info = locale.begin;
                            infoCls += ' date-selected';
                            if (dayOfWeek === 6 || day.isLastOfMonth) {
                                styleType = DateModels.SelectType.All;
                            }
                            break;
                        case DateModels.SelectType.Middle:
                            if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                if (day.isLastOfMonth || dayOfWeek === 6) {
                                    styleType = DateModels.SelectType.All;
                                }
                                else {
                                    styleType = DateModels.SelectType.Start;
                                }
                            }
                            else if (dayOfWeek === 6 || day.isLastOfMonth) {
                                styleType = DateModels.SelectType.End;
                            }
                            break;
                        case DateModels.SelectType.End:
                            info = locale.over;
                            infoCls += ' date-selected';
                            if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                styleType = DateModels.SelectType.All;
                            }
                            break;
                    }
                    switch (styleType) {
                        case DateModels.SelectType.Single:
                        case DateModels.SelectType.Only:
                        case DateModels.SelectType.All:
                            cls += ' selected-single';
                            break;
                        case DateModels.SelectType.Start:
                            cls += ' selected-start';
                            rCls += ' date-selected';
                            break;
                        case DateModels.SelectType.Middle:
                            cls += ' selected-middle';
                            lCls += ' date-selected';
                            rCls += ' date-selected';
                            break;
                        case DateModels.SelectType.End:
                            cls += ' selected-end';
                            lCls += ' date-selected';
                            break;
                    }
                }
                weeksDataList[dayOfWeek] = {
                    lCls,
                    cls,
                    day,
                    rCls,
                    infoCls,
                    info,
                    extra,
                    disable,
                    onCellClick: onCellClick,
                    monthData
                };
            });
            this.state.weekComponents[index] = {
                index: index,
                rowCls,
                weeksDataList
            };
        };
        this.updateWeeks = (monthData) => {
            (monthData || this.props.monthData).weeks.forEach((week, index) => {
                this.genWeek(week, index);
            });
        };
        this.setWarpper = (dom) => {
            this.wrapperDivDOM = dom;
        };
    }
    set data(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    onClickCell(item) {
        if (!item.disable && item.onCellClick) {
            item.onCellClick(item.day, item.monthData);
        }
    }
    ngOnInit() {
        this.setWarpper(this._elementRef.nativeElement);
        this.props.monthData.weeks.forEach((week, index) => {
            this.genWeek(week, index);
        });
    }
    ngAfterViewInit() {
        this.ref = this.props.ref;
        this.ref(this);
    }
}
CalendarSingleMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarSingleMonth, nzm-single-month',
                template: "<div class=\"month-title\">\n  {{ props.monthData.title }}\n</div>\n<div class=\"date\">\n  <div *ngFor=\"let row of state.weekComponents; let i = index\" [ngClass]=\"row.rowCls\">\n    <div\n      *ngFor=\"let cell of row.weeksDataList; let j = index\"\n      class=\"{{ 'cell ' + ((cell.extra && cell.extra.cellCls) || '') }}\"\n      (click)=\"onClickCell(cell)\"\n    >\n      <div *ngIf=\"row.extra && row.extra.cellRender\">test</div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" class=\"date-wrapper\">\n        <span [ngClass]=\"cell.lCls\"></span>\n        <div [ngClass]=\"cell.cls\">\n          {{ (cell.day && cell.day.dayOfMonth) || '' }}\n        </div>\n        <span [ngClass]=\"cell.rCls\"></span>\n      </div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" [ngClass]=\"cell.infoCls\">\n        {{ cell.info }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarSingleMonthComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalendarSingleMonthComponent.propDecorators = {
    data: [{ type: Input }],
    singleMonth: [{ type: HostBinding, args: ['class.single-month',] }]
};

class CalendarConfirmPanelComponent {
    constructor() {
        this.props = {
            formatStr: 'yyyy-MM-dd hh:mm'
        };
        this.confirmPane = true;
        this.triggerConfirm = () => {
            const { onConfirm, disableBtn } = this.props;
            if (!disableBtn) {
                onConfirm();
            }
        };
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    set disableBtn(value) {
        this.props.disableBtn = value;
    }
    set formatStr(value) {
        this.props.formatStr = value;
    }
    set startDateTime(value) {
        this.props.startDateTime = value;
        this.formatTime();
    }
    set endDateTime(value) {
        this.props.endDateTime = value;
        this.formatTime();
    }
    set onConfirm(value) {
        this.props.onConfirm = value;
    }
    formatTime() {
        const { type, locale, disableBtn } = this.props;
        let { startDateTime, endDateTime } = this.props;
        if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
            const tmp = startDateTime;
            startDateTime = endDateTime;
            endDateTime = tmp;
        }
        this.startTimeStr = startDateTime ? this.selfFormatDate(startDateTime) : locale.noChoose;
        this.endTimeStr = endDateTime ? this.selfFormatDate(endDateTime) : locale.noChoose;
        let btnCls = disableBtn ? 'button button-disable' : 'button';
        if (type === 'one') {
            btnCls += ' button-full';
        }
        this.btnCls = btnCls;
    }
    selfFormatDate(date) {
        const { formatStr = '', locale } = this.props;
        return formatDate(date, formatStr, locale);
    }
}
CalendarConfirmPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarConfirmPanel, nzm-calendar-confirm-panel',
                template: "<div *ngIf=\"props.type === 'range'\" class=\"info\">\n  <p>\n    {{ props.locale.start }}: <span class=\"{{ !props.startDateTime ? 'grey' : '' }}\">{{ startTimeStr }}</span>\n  </p>\n  <p>\n    {{ props.locale.end }}: <span class=\"{{ !props.endDateTime ? 'grey' : '' }}\">{{ endTimeStr }}</span>\n  </p>\n</div>\n<div [ngClass]=\"btnCls\" (click)=\"triggerConfirm()\">\n  {{ props.locale.confirm }}\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarConfirmPanelComponent.ctorParameters = () => [];
CalendarConfirmPanelComponent.propDecorators = {
    propsData: [{ type: Input }],
    disableBtn: [{ type: Input }],
    formatStr: [{ type: Input }],
    startDateTime: [{ type: Input }],
    endDateTime: [{ type: Input }],
    onConfirm: [{ type: Input }],
    confirmPane: [{ type: HostBinding, args: ['class.confirm-panel',] }]
};

class CalendarShortcutPanelComponent {
    constructor() {
        this.props = {};
        this.shortcutPanel = true;
        this.onClick = (type) => {
            const { onSelect } = this.props;
            const today = new Date();
            switch (type) {
                case 'today':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'yesterday':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12));
                    break;
                case 'lastweek':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'lastmonth':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
            }
        };
    }
    set locale(value) {
        this.props.locale = value;
    }
    set onSelect(value) {
        this.props.onSelect = value;
    }
}
CalendarShortcutPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarShortcutPanel, nzm-calendar-shortcut-panel',
                template: "<div class=\"item\" (click)=\"onClick('today')\">{{ props.locale.today }}</div>\n<div class=\"item\" (click)=\"onClick('yesterday')\">{{ props.locale.yesterday }}</div>\n<div class=\"item\" (click)=\"onClick('lastweek')\">{{ props.locale.lastWeek }}</div>\n<div class=\"item\" (click)=\"onClick('lastmonth')\">{{ props.locale.lastMonth }}</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarShortcutPanelComponent.ctorParameters = () => [];
CalendarShortcutPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    onSelect: [{ type: Input }],
    shortcutPanel: [{ type: HostBinding, args: ['class.shortcut-panel',] }]
};

class CalendarModule {
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
                declarations: [
                    CalendarComponent,
                    CalendarHeaderComponent,
                    CalendarWeekPanelComponent,
                    CalendarDatePickerComponent,
                    CalendarTimePickerComponent,
                    CalendarSingleMonthComponent,
                    CalendarConfirmPanelComponent,
                    CalendarShortcutPanelComponent
                ],
                exports: [
                    CalendarComponent,
                    CalendarHeaderComponent,
                    CalendarWeekPanelComponent,
                    CalendarDatePickerComponent,
                    CalendarTimePickerComponent,
                    CalendarSingleMonthComponent,
                    CalendarConfirmPanelComponent,
                    CalendarShortcutPanelComponent
                ]
            },] }
];

class PopoverItemComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.defaultProps = {
            prefixCls: 'am-popover',
            disabled: false
        };
        this.isActive = false;
        this.select = new EventEmitter();
        this.amPopoverItem = true;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
    }
    get style() {
        return this._style;
    }
    set style(value) {
        this._style = value;
    }
    set disabled(value) {
        this.defaultProps.disabled = value;
    }
    get amPopoverItemActive() {
        return this.isActive;
    }
    get amPopoverItemDisabled() {
        return this.defaultProps.disabled;
    }
    touchStart(e) {
        this.select.emit();
        this.isActive = true;
    }
    ngAfterContentInit() { }
}
PopoverItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'PopoverItem, nzm-popover-item',
                template: "<div class=\"{{ defaultProps.prefixCls }}-item-container\">\n  <span class=\"{{ defaultProps.prefixCls }}-item-icon\" aria-hidden=\"true\">\n    <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  <span class=\"{{ defaultProps.prefixCls }}-item-content\">\n    <ng-content></ng-content>\n  </span>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PopoverItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
PopoverItemComponent.propDecorators = {
    icon: [{ type: Input }],
    style: [{ type: Input }],
    disabled: [{ type: Input }],
    select: [{ type: Output }],
    amPopoverItem: [{ type: HostBinding, args: ['class.am-popover-item',] }],
    amPopoverItemActive: [{ type: HostBinding, args: ['class.am-popover-item-active',] }],
    amPopoverItemDisabled: [{ type: HostBinding, args: ['class.am-popover-item-disabled',] }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }]
};

class PopoverItemModule {
}
PopoverItemModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule],
                exports: [PopoverItemComponent],
                declarations: [PopoverItemComponent]
            },] }
];

class FlexComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        // _wrapCls = {};
        this._direction = '';
        this._justify = '';
        this._alignContent = '';
        this.amFlexbox = true;
    }
    set direction(value) {
        this._direction = value;
    }
    set wrap(value) {
        this._wrap = value;
    }
    set justify(value) {
        this._justify = value;
    }
    set align(value) {
        this.defaultProps.align = value;
    }
    set alignContent(value) {
        this._alignContent = value;
    }
    get amFlexboxDirRow() {
        return this._direction === 'row';
    }
    get amFlexboxDirRowReverse() {
        return this._direction === 'row-reverse';
    }
    get amFlexboxDirColumn() {
        return this._direction === 'column';
    }
    get amFlexboxDirColumnReverse() {
        return this._direction === 'column-reverse';
    }
    get amFlexboxNowrap() {
        return this._wrap === 'nowrap';
    }
    get amFlexboxWrap() {
        return this._wrap === 'wrap';
    }
    get amFlexboxWrapReverse() {
        return this._wrap === 'wrap-reverse';
    }
    get amFlexboxJustifyStart() {
        return this._justify === 'start';
    }
    get amFlexboxJustifyCenter() {
        return this._justify === 'center';
    }
    get amFlexboxJustifyEnd() {
        return this._justify === 'end';
    }
    get amFlexboxJustifyBetween() {
        return this._justify === 'between';
    }
    get amFlexboxAlignAround() {
        return this._justify === 'around';
    }
    get amFlexboxAlignStart() {
        return this.defaultProps.align === 'start';
    }
    get amFlexboxAlignCenter() {
        return this.defaultProps.align === 'center';
    }
    get amFlexboxAlignEnd() {
        return this.defaultProps.align === 'end';
    }
    get amFlexboxAlignBaseline() {
        return this.defaultProps.align === 'baseline';
    }
    get amFlexboxAlignStretch() {
        return this.defaultProps.align === 'stretch';
    }
    get amFlexboxAlignContentStart() {
        return this._alignContent === 'start';
    }
    get amFlexboxAlignCotentCenter() {
        return this._alignContent === 'center';
    }
    get amFlexboxAlignContentEnd() {
        return this._alignContent === 'end';
    }
    get amFlexboxAlignContentBetween() {
        return this._alignContent === 'between';
    }
    get amFlexboxAlignContentAround() {
        return this._alignContent === 'around';
    }
    get amFlexboxAlignContentStretch() {
        return this._alignContent === 'stretch';
    }
}
FlexComponent.decorators = [
    { type: Component, args: [{
                selector: 'Flex, nzm-flex',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
FlexComponent.ctorParameters = () => [];
FlexComponent.propDecorators = {
    direction: [{ type: Input }],
    wrap: [{ type: Input }],
    justify: [{ type: Input }],
    align: [{ type: Input }],
    alignContent: [{ type: Input }],
    amFlexbox: [{ type: HostBinding, args: ['class.am-flexbox',] }],
    amFlexboxDirRow: [{ type: HostBinding, args: ['class.am-flexbox-dir-row',] }],
    amFlexboxDirRowReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-row-reverse',] }],
    amFlexboxDirColumn: [{ type: HostBinding, args: ['class.am-flexbox-dir-column',] }],
    amFlexboxDirColumnReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-column-reverse',] }],
    amFlexboxNowrap: [{ type: HostBinding, args: ['class.am-flexbox-nowrap',] }],
    amFlexboxWrap: [{ type: HostBinding, args: ['class.am-flexbox-wrap',] }],
    amFlexboxWrapReverse: [{ type: HostBinding, args: ['class.am-flexbox-wrap-reverse',] }],
    amFlexboxJustifyStart: [{ type: HostBinding, args: ['class.am-flexbox-justify-start',] }],
    amFlexboxJustifyCenter: [{ type: HostBinding, args: ['class.am-flexbox-justify-center',] }],
    amFlexboxJustifyEnd: [{ type: HostBinding, args: ['class.am-flexbox-justify-end',] }],
    amFlexboxJustifyBetween: [{ type: HostBinding, args: ['class.am-flexbox-justify-between',] }],
    amFlexboxAlignAround: [{ type: HostBinding, args: ['class.am-flexbox-justify-around',] }],
    amFlexboxAlignStart: [{ type: HostBinding, args: ['class.am-flexbox-align-start',] }],
    amFlexboxAlignCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-center',] }],
    amFlexboxAlignEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-end',] }],
    amFlexboxAlignBaseline: [{ type: HostBinding, args: ['class.am-flexbox-align-baseline',] }],
    amFlexboxAlignStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-stretch',] }],
    amFlexboxAlignContentStart: [{ type: HostBinding, args: ['class.am-flexbox-align-content-start',] }],
    amFlexboxAlignCotentCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-content-center',] }],
    amFlexboxAlignContentEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-content-end',] }],
    amFlexboxAlignContentBetween: [{ type: HostBinding, args: ['class.am-flexbox-align-content-between',] }],
    amFlexboxAlignContentAround: [{ type: HostBinding, args: ['class.am-flexbox-align-content-around',] }],
    amFlexboxAlignContentStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-content-stretch',] }]
};
class FlexItemComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        this.flexboxItem = true;
    }
}
FlexItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'FlexItem, nzm-flex-item',
                template: `
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None
            },] }
];
FlexItemComponent.propDecorators = {
    flexboxItem: [{ type: HostBinding, args: ['class.am-flexbox-item',] }]
};

class FlexModule {
}
FlexModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [FlexComponent, FlexItemComponent],
                declarations: [FlexComponent, FlexItemComponent]
            },] }
];

class GridComponent {
    constructor() {
        this.wrapCls = {};
        this.itemCls = {};
        this.carouselProps = {
            dots: false,
            dragging: false
        };
        this.defaultProps = {
            data: [],
            hasLine: true,
            isCarousel: false,
            columnNum: 4,
            carouselMaxRow: 2,
            prefixCls: 'am-grid',
            square: true,
            itemStyle: {}
        };
        this.carouselData = [];
        this.carouselDataTmp = [];
        this.gridData = [];
        this._data = [];
        this.itemStyle = {};
        this.square = true;
        this.hasLine = true;
        this.activeStyle = true;
        this.onClick = new EventEmitter();
        this.amGrid = true;
    }
    get columnNum() {
        return this.defaultProps.columnNum;
    }
    set columnNum(value) {
        if (typeof value === 'number') {
            this.defaultProps.columnNum = value;
            this.init();
        }
    }
    get carouselMaxRow() {
        return this.defaultProps.carouselMaxRow;
    }
    set carouselMaxRow(value) {
        if (typeof value === 'number') {
            this.defaultProps.carouselMaxRow = value;
            this.init();
        }
    }
    get isCarousel() {
        return this.defaultProps.isCarousel;
    }
    set isCarousel(value) {
        this.defaultProps.isCarousel = value;
        this.init();
    }
    set data(value) {
        this._data = value;
        this.init();
    }
    get amGridSquare() {
        return true === this.square;
    }
    get amGridLine() {
        return true === this.hasLine;
    }
    get amGridCarousel() {
        return true === this.isCarousel;
    }
    getContentType(value) {
        if ((value.indexOf('http') >= 0 || value.indexOf('assets') >= 0) && value.indexOf('<') < 0) {
            return 'url';
        }
        else if (value.indexOf('<') >= 0) {
            return 'innerHTML';
        }
        else if (value instanceof TemplateRef) {
            return 'TemplateRef';
        }
        else {
            return 'icon';
        }
    }
    init() {
        const dataLength = (this._data && this._data.length) || 0;
        let rowCount = Math.ceil(dataLength / this.columnNum);
        let rowsArr;
        if (this.defaultProps.isCarousel) {
            if (rowCount % this.carouselMaxRow !== 0) {
                rowCount = rowCount + this.carouselMaxRow - (rowCount % this.carouselMaxRow);
            }
            const pageCount = Math.ceil(rowCount / this.carouselMaxRow);
            rowsArr = this.getRows(rowCount, dataLength);
            if (pageCount <= 1) {
                this.carouselProps = {
                    dots: false,
                    dragging: false
                };
            }
            else {
                this.carouselProps = {
                    dots: true,
                    dragging: true
                };
            }
            this.carouselDataTmp = this.getCarouselData(rowsArr, pageCount, rowCount);
        }
        else {
            this.gridData = this.getRows(rowCount, dataLength);
        }
    }
    getCarouselData(rowsArr, pageCount, rowCount) {
        const pagesArr = [];
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
            const pageRows = [];
            for (let ii = 0; ii < this.carouselMaxRow; ii++) {
                const rowIndex = pageIndex * this.carouselMaxRow + ii;
                if (rowIndex < rowCount) {
                    pageRows.push(rowsArr[rowIndex]);
                }
                else {
                    // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                    pageRows.push(null);
                }
            }
            pagesArr.push(pageRows);
        }
        return pagesArr;
    }
    getRows(rowCount, dataLength) {
        const columnNum = this.columnNum;
        const rowArr = new Array();
        for (let i = 0; i < rowCount; i++) {
            rowArr[i] = new Array();
            for (let j = 0; j < columnNum; j++) {
                const dataIndex = i * columnNum + j;
                if (dataIndex < dataLength) {
                    rowArr[i][j] = this._data[dataIndex];
                }
                else {
                    rowArr[i][j] = null;
                }
            }
        }
        return rowArr;
    }
    click(data, index) {
        const outputData = {
            data: data,
            index: index
        };
        this.onClick.emit(outputData);
    }
    ngOnInit() {
        this.itemCls = {
            [`${this.defaultProps.prefixCls}-item`]: true,
            [`${this.defaultProps.prefixCls}-active-item`]: false
        };
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'Grid, nzm-grid',
                template: "<ng-container *ngIf=\"!isCarousel\">\n  <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n    <FlexItem\n      TouchFeedbackDirective\n      *ngFor=\"let subItem of item; let j = index\"\n      [ngClass]=\"itemCls\"\n      [ngStyle]=\"itemStyle\"\n      [className]=\"['am-grid-item-active']\"\n      [activeStyle]=\"activeStyle\"\n    >\n      <div\n        *ngIf=\"subItem !== null\"\n        class=\"{{ defaultProps.prefixCls }}-item-content\"\n        (click)=\"click(subItem, i * columnNum + j)\"\n      >\n        <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-{{ columnNum }}\">\n          <img\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'url'\"\n            src=\"{{ subItem.icon }}\"\n            class=\"{{ defaultProps.prefixCls }}-icon\"\n          />\n          <Icon\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'icon'\"\n            [type]=\"subItem.icon\"\n            [size]=\"subItem.size\"\n          ></Icon>\n          <div\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'innerHTML'\"\n            [innerHTML]=\"subItem.icon | safeHTML\"\n          ></div>\n          <ng-template\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'TemplateRef'\"\n            [ngTemplateOutlet]=\"subItem.icon\"\n          ></ng-template>\n          <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n        </div>\n      </div>\n      <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n    </FlexItem>\n  </Flex>\n  <ng-content></ng-content>\n</ng-container>\n\n<Carousel\n  *ngIf=\"isCarousel && carouselDataTmp.length > 0\"\n  [autoplay]=\"false\"\n  [infinite]=\"true\"\n  [selectedIndex]=\"0\"\n  [autoplayInterval]=\"3000\"\n  [dots]=\"carouselProps.dots\"\n  [dragging]=\"carouselProps.dragging\"\n>\n  <CarouselSlide\n    *ngFor=\"let gridData of carouselDataTmp\"\n    class=\"{{ defaultProps.prefixCls }}-carousel-page\"\n    style=\"display: block;\"\n  >\n    <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n      <FlexItem\n        TouchFeedbackDirective\n        *ngFor=\"let subItem of item; let j = index\"\n        class=\"{{ defaultProps.prefixCls }}-item\"\n        [ngStyle]=\"itemStyle\"\n        [className]=\"['am-grid-item-active']\"\n      >\n        <div\n          *ngIf=\"subItem !== null\"\n          class=\"{{ defaultProps.prefixCls }}-item-content\"\n          (click)=\"click(subItem, i * columnNum + j)\"\n        >\n          <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-4\">\n            <img class=\"{{ defaultProps.prefixCls }}-icon\" src=\"{{ subItem.icon }}\" />\n            <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n          </div>\n        </div>\n        <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n      </FlexItem>\n    </Flex>\n  </CarouselSlide>\n</Carousel>\n"
            },] }
];
GridComponent.ctorParameters = () => [];
GridComponent.propDecorators = {
    columnNum: [{ type: Input }],
    carouselMaxRow: [{ type: Input }],
    itemStyle: [{ type: Input }],
    square: [{ type: Input }],
    hasLine: [{ type: Input }],
    isCarousel: [{ type: Input }],
    activeStyle: [{ type: Input }],
    data: [{ type: Input }],
    onClick: [{ type: Output }],
    amGrid: [{ type: HostBinding, args: ['class.am-grid',] }],
    amGridSquare: [{ type: HostBinding, args: ['class.am-grid-square',] }],
    amGridLine: [{ type: HostBinding, args: ['class.am-grid-line',] }],
    amGridCarousel: [{ type: HostBinding, args: ['class.am-grid-carousel',] }]
};

const INTERFACE_TOKEN = new InjectionToken('InterfaceToken');
class TouchFeedbackDirective {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.activeStyle = true;
        this.clickStart = new EventEmitter();
        this.clickEnd = new EventEmitter();
    }
    addClass(className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }
    removeClass(className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
    ngOnInit() {
        this._className = this.className;
    }
    touchStart() {
        if (this.activeStyle) {
            this.addClass(this._className);
            this.clickStart.emit();
        }
    }
    touchEnd() {
        if (this.activeStyle) {
            this.removeClass(this._className);
            this.clickEnd.emit();
        }
    }
}
TouchFeedbackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[TouchFeedbackDirective]'
            },] }
];
TouchFeedbackDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TouchFeedbackDirective.propDecorators = {
    className: [{ type: Input }],
    activeStyle: [{ type: Input }],
    clickStart: [{ type: Output }],
    clickEnd: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart',] }, { type: HostListener, args: ['mousedown',] }],
    touchEnd: [{ type: HostListener, args: ['touchend',] }, { type: HostListener, args: ['mouseup',] }]
};

class TouchFeedbackModule {
}
TouchFeedbackModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [TouchFeedbackDirective],
                declarations: [TouchFeedbackDirective]
            },] }
];

class SafeHTMLPipe {
    constructor(_sanitized) {
        this._sanitized = _sanitized;
    }
    transform(value) {
        return this._sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHTML' },] }
];
SafeHTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class NgZorroAntdMobilePipesModule {
}
NgZorroAntdMobilePipesModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [SafeHTMLPipe],
                exports: [SafeHTMLPipe]
            },] }
];

class GridModule {
}
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
                exports: [GridComponent],
                declarations: [GridComponent]
            },] }
];

class ActionSheetRef {
}

class ActionSheetComponent extends ActionSheetRef {
    constructor(localeProviderService, elementRef) {
        super();
        this.localeProviderService = localeProviderService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
    }
    ngOnInit() {
        this.localeProvider();
    }
    localeProvider() {
        const self = this;
        if (self.option.locale || self.option.locale !== undefined) {
            self.localeProviderService.setLocale(self.option.locale);
        }
        self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
            if (self.option.cancelButtonText) {
                self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj('ActionSheet')['dismissText'];
            }
        });
    }
    onPress(index, rowIndex = 0, event) { }
    showShare(option) {
        const cls = { [`${option.prefixCls}-share`]: option.flag === 'SHARE' };
        return cls;
    }
    setActiveClassName(option, suffix) {
        return [`${option.prefixCls}-${suffix}-active`];
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isArray(options, value) {
        if (options.length > 0 && value) {
            return value instanceof Array;
        }
        return false;
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.close) {
            this.option.close();
        }
    }
    destroy() {
        this.close();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ActionSheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ActionSheet',
                template: "<div class=\"{{ option.prefixCls }}-mask {{ option.maskTransitionName }}\"></div>\n<div\n  role=\"dialog\"\n  class=\"{{ option.prefixCls }}-wrap {{ option.transitionName }}\"\n  (click)=\"option.maskClose(-1, 0, $event)\"\n>\n  <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"showShare(option)\">\n    <div class=\"{{ option.prefixCls }}-content\">\n      <button aria-label=\"Close\" class=\"{{ option.prefixCls }}-close\">\n        <span class=\"{{ option.prefixCls }}-close-x\"></span>\n      </button>\n      <div class=\"{{ option.prefixCls }}-body\">\n        <div>\n          <ng-container *ngIf=\"!isNoTitle(option.title)\">\n            <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n            <h3 *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</h3>\n          </ng-container>\n          <ng-container *ngIf=\"!isNoTitle(option.message)\">\n            <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n            <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-message\">\n              {{ option.message }}\n            </div>\n          </ng-container>\n          <ng-container [ngSwitch]=\"option.flag\">\n            <div *ngSwitchCase=\"'NORMAL'\" class=\"{{ option.prefixCls }}-button-list\" role=\"group\">\n              <ng-container *ngFor=\"let item of option.options; let i = index\">\n                <div\n                  TouchFeedbackDirective\n                  class=\"{{ option.prefixCls }}-button-list-item\"\n                  [className]=\"setActiveClassName(option, 'button-list-item')\"\n                >\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex !== i && option.cancelButtonIndex !== i\"\n                    class=\"{{ option.prefixCls }}-button-list-item\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-destructive-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.cancelButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-cancel-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                    <span class=\"{{ option.prefixCls }}-cancel-button-mask\"></span>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div *ngSwitchCase=\"'SHARE'\" class=\"{{ option.prefixCls }}-share {{ option.prefixCls }}-share-content\">\n              <div *ngIf=\"!isArray(option.options, option.options[0])\" class=\"{{ option.prefixCls }}-share-list\">\n                <ng-container *ngFor=\"let item of option.options; let i = index\">\n                  <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, 0, $event)\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                      <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                      <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                    </div>\n                    <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                  </div>\n                </ng-container>\n              </div>\n              <ng-container *ngIf=\"isArray(option.options, option.options[0])\">\n                <div\n                  *ngFor=\"let items of option.options; let rowIndex = index\"\n                  class=\"{{ option.prefixCls }}-share-list\"\n                >\n                  <ng-container *ngFor=\"let item of items; let i = index\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, rowIndex, $event)\">\n                      <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                        <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                        <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                      </div>\n                      <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                    </div>\n                  </ng-container>\n                </div>\n              </ng-container>\n              <div\n                TouchFeedbackDirective\n                [className]=\"setActiveClassName(option, 'share-cancel-button')\"\n                class=\"{{ option.prefixCls }}-share-cancel-button\"\n              >\n                {{ option.cancelButtonText }}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ActionSheetComponent.ctorParameters = () => [
    { type: LocaleProviderService },
    { type: ElementRef }
];

class ActionSheetOptions {
    constructor() {
        this.prefixCls = 'am-action-sheet';
        this.maskClosable = true;
        this.transitionName = 'am-slide-up';
        this.maskTransitionName = 'am-fade';
    }
}
ActionSheetOptions.decorators = [
    { type: Injectable }
];
class ShareOption {
}
ShareOption.decorators = [
    { type: Injectable }
];
class ShareActionSheetWithOptions extends ActionSheetOptions {
    constructor() {
        super(...arguments);
        this.cancelButtonText = 'Cancel';
    }
}
ShareActionSheetWithOptions.decorators = [
    { type: Injectable }
];
class ActionSheetWithOptions extends ActionSheetOptions {
}
ActionSheetWithOptions.decorators = [
    { type: Injectable }
];

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() { }
class ActionSheetService extends PopupService {
    constructor() {
        super(...arguments);
        this.compRef = null;
        this._actionSheetCompFactory = null;
        this.appRef = null;
        this.comRef = null;
        this.instance = null;
    }
    _initConfig(config, options = {}) {
        const props = new ActionSheetOptions();
        const optionalParams = [
            'prefixCls',
            'maskClosable',
            'cancelButtonText',
            'cancelButtonIndex',
            'destructiveButtonIndex',
            'title',
            'message',
            'className',
            'transitionName',
            'maskTransitionName',
            'options',
            'locale',
            'close'
        ];
        const self = this;
        config = Object.assign(options, config, {
            close: () => {
                if (config.maskClosable) {
                    self.closeWithAnimation(config.transitionName, config.maskTransitionName);
                }
            }
        });
        optionalParams.forEach(key => {
            if (config[key] !== undefined) {
                props[key] = config[key];
            }
        });
        return props;
    }
    _open(props) {
        this.comRef = this.showPopup(ActionSheetComponent);
        this.comRef.instance.option = props;
        return this.comRef && this.comRef.instance;
    }
    createActionSheet(flag, config, callback) {
        const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
        const transitionName = config.transitionName ? config.transitionName : options.transitionName;
        options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
        const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
        options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
        const props = this._initConfig(config, options);
        Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => { } });
        const self = this;
        function cb(index, rowIndex = 0, event) {
            event.stopPropagation();
            const res = callback(index, rowIndex);
            if (res && res.then) {
                res.then(() => {
                    self.closeWithAnimation(transitionName, maskTransitionName);
                });
            }
            else {
                self.closeWithAnimation(transitionName, maskTransitionName);
            }
        }
        return this._open(props);
    }
    closeWithAnimation(transitionName, maskTransitionName) {
        this.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
        this.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
        setTimeout(() => {
            this.close();
        }, 200);
    }
    showActionSheetWithOptions(config, callback = noop) {
        return this.createActionSheet(NORMAL, config, callback);
    }
    showShareActionSheetWithOptions(config, callback = noop) {
        return this.createActionSheet(SHARE, config, callback);
    }
    close() {
        this.hidePopup();
    }
}
ActionSheetService.ɵprov = ɵɵdefineInjectable({ factory: function ActionSheetService_Factory() { return new ActionSheetService(ɵɵinject(Overlay)); }, token: ActionSheetService, providedIn: "root" });
ActionSheetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

class ActionSheetModule {
}
ActionSheetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    NgZorroAntdMobilePipesModule,
                    ListModule,
                    WhiteSpaceModule,
                    WingBlankModule,
                    LocaleProviderModule,
                    TouchFeedbackModule
                ],
                declarations: [ActionSheetComponent],
                exports: [ActionSheetComponent],
                providers: [PopupService, ActionSheetService]
            },] }
];

class SegmentedControlComponent {
    constructor() {
        this.prefixCls = 'am-segment';
        this.tintColor = '#2DB7F5';
        this.disabled = false;
        this.selectedIndex = 0;
        this.onChange = new EventEmitter();
        this.role = 'tablist';
        this.amSegment = true;
    }
    get amDisabled() {
        return this.disabled;
    }
    onClick(index, value) {
        if (!this.disabled && index !== this.selectedIndex) {
            this.selectedIndex = index;
            this.onChange.emit({ selectedIndex: index, value: value });
        }
    }
}
SegmentedControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'SegmentedControl, nz-segmented-control',
                template: "<div\n  role=\"tab\"\n  *ngFor=\"let value of values; let i = index\"\n  class=\"{{ prefixCls }}-item\"\n  [ngClass]=\"{ 'am-segment-item-selected': i === selectedIndex }\"\n  [ngStyle]=\"{\n    'border-color': tintColor,\n    color: i === selectedIndex ? '#fff' : tintColor,\n    'background-color': i === selectedIndex ? tintColor : 'transparent'\n  }\"\n  (click)=\"onClick(i, value)\"\n>\n  <div\n    class=\"{{ prefixCls }}-item-inner\"\n    [ngStyle]=\"{ 'background-color': i === selectedIndex ? tintColor : 'transparent' }\"\n  ></div>\n  {{ value }}\n</div>\n"
            },] }
];
SegmentedControlComponent.ctorParameters = () => [];
SegmentedControlComponent.propDecorators = {
    tintColor: [{ type: Input }],
    disabled: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    values: [{ type: Input }],
    onChange: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amSegment: [{ type: HostBinding, args: ['class.am-segment',] }],
    amDisabled: [{ type: HostBinding, args: ['class.am-segment-disabled',] }]
};

class SegmentedControlModule {
}
SegmentedControlModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SegmentedControlComponent],
                exports: [SegmentedControlComponent]
            },] }
];

class TextareaItemComponent {
    constructor(element, render) {
        this.element = element;
        this.render = render;
        this.prefixCls = 'am-textarea';
        this.isTitleString = true;
        this.maxLength = Infinity;
        this._prefixListCls = 'am-list';
        this._defaultValue = '';
        this._placeholder = '';
        this._editable = true;
        this._disabled = false;
        this._clear = false;
        this._rows = 1;
        this._error = false;
        this._labelNumber = 5;
        this._name = '';
        this._focus = false;
        this._autoFocus = false;
        this._isClear = false;
        this._isClickingClear = false;
        this.onChange = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onErrorClick = new EventEmitter();
        this.clsItem = true;
        this._onChange = (_) => { };
        this._el = element.nativeElement;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (typeof v === 'undefined' || v === null) {
            this._value = '';
        }
        else {
            this._value = v;
        }
        this.textRef.nativeElement.value = this._value;
        this._onChange(this._value);
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this._value = this._defaultValue;
        this.textRef.nativeElement.value = this._value;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get editable() {
        return this._editable;
    }
    set editable(value) {
        this._editable = value;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.setCls();
    }
    get clear() {
        return this._clear;
    }
    set clear(value) {
        this._clear = value;
    }
    get rows() {
        return this._rows;
    }
    set rows(value) {
        this._rows = value;
        this.setCls();
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
        this.setCls();
    }
    set labelNumber(value) {
        this._labelNumber = value;
        this.setCls();
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
        this.setCls();
        this.setCharacterLength();
    }
    get prefixListCls() {
        return this._prefixListCls;
    }
    set prefixListCls(value) {
        this._prefixListCls = value;
        this.setCls();
    }
    set name(value) {
        this._name = value;
        this.textRef.nativeElement.name = this._name;
    }
    set autoHeight(value) {
        this._autoHeight = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.isTitleString = true;
        if (typeof value !== 'string') {
            this.isTitleString = false;
        }
    }
    set focus(value) {
        if (value && value.focus) {
            this.textRef.nativeElement.focus();
            this.inputFocus('');
        }
    }
    get autoFocus() {
        return this._autoFocus;
    }
    set autoFocus(value) {
        this._autoFocus = value;
    }
    setCls() {
        this.hasCount = this._count > 0 && this._rows > 1;
        this.render.addClass(this._el, this._prefixListCls + '-item');
        this.clsSingleLine = this._rows === 1 && !this._autoHeight;
        this.clsDisabled = this._disabled;
        this.clsError = this._error;
        this.clsFocus = this._focus;
        this.clsHasCount = this.hasCount;
        this.labelCls = {
            [`${this.prefixCls}-label`]: true,
            [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
            [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
            [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
            [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
            [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
            [`${this.prefixCls}-label-7`]: this._labelNumber === 7
        };
        this.controlCls = { [`${this.prefixCls}-control`]: true };
        this.clearCls = {
            [`${this.prefixCls}-clear-active`]: this._isClickingClear
        };
    }
    setCharacterLength() {
        this.characterLength = this.countSymbols(this._value);
        if (this._count > 0) {
            this.maxLength = this._count - this.characterLength + (this._value ? this._value.length : 0);
        }
    }
    inputChange(e) {
        this._value = e;
        this.textRef.nativeElement.value = this._value;
        this.setCharacterLength();
        this._onChange(this._value);
        this.onChange.emit(this._value);
    }
    inputFocus(value) {
        this._focus = true;
        this.setCls();
        if (value !== undefined) {
            this.onFocus.emit(value);
        }
    }
    inputBlur(value, event) {
        setTimeout(() => {
            this._focus = false;
            this.setCls();
            this.onBlur.emit(value);
            this._isClear = false;
        }, 100);
    }
    clearInput() {
        this._isClickingClear = true;
        this.setCls();
        setTimeout(() => {
            this._value = '';
            this.inputChange('');
            this.inputFocus(this._value);
            this._isClickingClear = false;
            this.setCls();
        }, 100);
    }
    errorClick(e) {
        if (this.onErrorClick) {
            this.onErrorClick.emit(e);
        }
    }
    reAlignHeight() {
        const textareaDom = this.textRef.nativeElement;
        textareaDom.style.height = '';
        textareaDom.style.height = `${textareaDom.scrollHeight}px`;
    }
    countSymbols(text = '') {
        const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
        return text.replace(regexAstralSymbols, '_').length;
    }
    writeValue(value) {
        if (typeof value === 'undefined' || value === null) {
            this._value = '';
        }
        else {
            this._value = value;
        }
        this.setCharacterLength();
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) { }
    ngOnInit() {
        this.textRef.nativeElement.value = this._value;
        this.setCls();
        this.setCharacterLength();
    }
    ngAfterContentChecked() {
        if (this._autoHeight) {
            this.reAlignHeight();
        }
    }
}
TextareaItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'TextareaItem , nzm-textarea-item',
                template: "<div *ngIf=\"title && isTitleString\" [ngClass]=\"labelCls\">{{ title }}</div>\n<div *ngIf=\"title && !isTitleString\" [ngClass]=\"labelCls\">\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</div>\n<div [ngClass]=\"controlCls\">\n  <textarea\n    #text\n    [rows]=\"rows\"\n    [maxlength]=\"maxLength\"\n    [(ngModel)]=\"value\"\n    [defaultValue]=\"defaultValue\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [readOnly]=\"!editable\"\n    [autofocus]=\"autoFocus\"\n    (ngModelChange)=\"inputChange($event)\"\n    (blur)=\"inputBlur(value, $event)\"\n    (focus)=\"inputFocus(value)\"\n  ></textarea>\n</div>\n<div\n  *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n  class=\"{{ prefixCls }}-clear\"\n  [ngClass]=\"clearCls\"\n  (click)=\"clearInput()\"\n></div>\n<div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n<span *ngIf=\"hasCount\" class=\"{{ prefixCls }}-count\">\n  <span>{{ characterLength }}</span\n  >/{{ count }}\n</span>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextareaItemComponent),
                        multi: true
                    }
                ]
            },] }
];
TextareaItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TextareaItemComponent.propDecorators = {
    textRef: [{ type: ViewChild, args: ['text', { static: true },] }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    editable: [{ type: Input }],
    disabled: [{ type: Input }],
    clear: [{ type: Input }],
    rows: [{ type: Input }],
    error: [{ type: Input }],
    labelNumber: [{ type: Input }],
    count: [{ type: Input }],
    prefixListCls: [{ type: Input }],
    name: [{ type: Input }],
    autoHeight: [{ type: Input }],
    title: [{ type: Input }],
    focus: [{ type: Input }],
    autoFocus: [{ type: Input }],
    onChange: [{ type: Output }],
    onBlur: [{ type: Output }],
    onFocus: [{ type: Output }],
    onErrorClick: [{ type: Output }],
    clsItem: [{ type: HostBinding, args: ['class.am-textarea-item',] }],
    clsDisabled: [{ type: HostBinding, args: ['class.am-textarea-disabled',] }],
    clsError: [{ type: HostBinding, args: ['class.am-textarea-error',] }],
    clsFocus: [{ type: HostBinding, args: ['class.am-textarea-focus',] }],
    clsSingleLine: [{ type: HostBinding, args: ['class.am-textarea-item-single-line',] }],
    clsHasCount: [{ type: HostBinding, args: ['class.am-textarea-has-count',] }]
};

class TextareaItemModule {
}
TextareaItemModule.decorators = [
    { type: NgModule, args: [{
                exports: [TextareaItemComponent],
                declarations: [TextareaItemComponent],
                imports: [CommonModule, FormsModule]
            },] }
];

class TabPaneComponent {
    constructor() {
        this.isTitleString = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
}
TabPaneComponent.decorators = [
    { type: Component, args: [{
                selector: 'TabPane, nzm-tab-pane',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            },] }
];
TabPaneComponent.ctorParameters = () => [];
TabPaneComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content', { static: true },] }],
    title: [{ type: Input }]
};

class TabsComponent {
    constructor() {
        this.prefixCls = 'am-tabs';
        this.selectedKey = 0;
        this.keyToSelect = 0;
        this.paneMoveStyle = 'translate3d(0, 0, 0)';
        this._startTime = 0;
        this._startPosition = 0;
        this._velocityThreshold = 0.3;
        this._tabDirection = 'horizontal';
        this._tabBarPosition = 'top';
        this.page = 5;
        this.swipeable = true;
        this.useOnPan = true;
        this.animated = true;
        this.distanceToChangeTab = 0.3;
        this.tabTitleSize = 0;
        this.tabBarActiveTextColor = '';
        this.tabBarInactiveTextColor = '';
        this.renderTabBar = null;
        this.tabBarBackgroundColor = '#FFF';
        this.prerenderingSiblingsNumber = -1;
        this.tabBarTextStyle = {};
        /** should be removed when https://github.com/angular/angular/issues/20810 resolved **/
        this.tabPanesContent = null;
        this.onChange = new EventEmitter();
        this.onTabClick = new EventEmitter();
        this.amTabs = true;
        this.amTabsTop = true;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        this.amTabsVertical = false;
        this.amTabsHorizontal = true;
    }
    get activeTab() {
        return this.selectedKey;
    }
    set activeTab(value) {
        this.keyToSelect = value;
    }
    get tabBarPosition() {
        return this._tabBarPosition;
    }
    set tabBarPosition(position) {
        this._tabBarPosition = position;
        switch (position) {
            case 'top':
                this.amTabsTop = true;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'left':
                this.amTabsTop = false;
                this.amTabsLeft = true;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'bottom':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = true;
                break;
            case 'right':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = true;
                this.amTabsBottom = false;
                break;
            default:
                break;
        }
    }
    get tabDirection() {
        return this._tabDirection;
    }
    set tabDirection(direction) {
        this._tabDirection = direction;
        switch (direction) {
            case 'horizontal':
                this.amTabsHorizontal = true;
                this.amTabsVertical = false;
                break;
            case 'vertical':
                this.amTabsHorizontal = false;
                this.amTabsVertical = true;
                break;
            default:
                break;
        }
    }
    clickTab(index) {
        if (this.selectedKey !== index) {
            this.keyToSelect = index;
            this.onTabClick.emit({ index: this.keyToSelect });
        }
    }
    getCurrentTabPanes() {
        return this.tabPanesContent || this.tabPanes;
    }
    onTouchStart(event) {
        this._startTime = event.timeStamp;
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            }
            else if ('vertical' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
            }
        }
    }
    onTouchMove(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                // velocity 小于阈值才认为是pan操作
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px), 0, 0 )';
                }
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(0, calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px, 0 )';
                }
            }
        }
    }
    onTouchEnd(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(-' + this.selectedKey * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(0, -' + this.selectedKey * 100 + '%, 0 )';
            }
        }
    }
    ngAfterContentInit() {
        this.selectTabPane(this.keyToSelect);
        this.selectedKey = this.keyToSelect;
    }
    ngDoCheck() {
        if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            this.selectTabPane(this.keyToSelect);
            this.selectedKey = this.keyToSelect;
            this.onChange.emit({ index: this.selectedKey });
        }
    }
    selectTabPane(index) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            const actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
            if ('horizontal' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(-' + actualKeyToSelect * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(0, -' + actualKeyToSelect * 100 + '%, 0 )';
            }
        }
    }
    getVelocity(deltaDistance, deltaTime) {
        return Math.abs(deltaDistance / deltaTime);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'Tabs, nzm-tabs',
                template: "<ng-container>\n  <ng-template\n    *ngIf=\"'top' === tabBarPosition || 'left' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  >\n  </ng-template>\n  <div\n    #TabContent\n    class=\"{{ prefixCls }}-content-wrap\"\n    [ngClass]=\"{ 'am-tabs-content-wrap-animated': animated }\"\n    [ngStyle]=\"{ transform: paneMoveStyle, webkitTransform: paneMoveStyle }\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <div\n      tab-pane-body\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      [content]=\"tabPane.content\"\n      [active]=\"i === selectedKey\"\n      [prerender]=\"\n        prerenderingSiblingsNumber < 0 ||\n        (selectedKey - i <= prerenderingSiblingsNumber && selectedKey - i + prerenderingSiblingsNumber >= 0)\n      \"\n    ></div>\n  </div>\n  <ng-template\n    *ngIf=\"'bottom' === tabBarPosition || 'right' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  ></ng-template>\n</ng-container>\n\n<ng-template #renderDefaultTabBar>\n  <DefaultTabBar\n    #DefaultTabBar\n    [page]=\"page\"\n    [animated]=\"animated\"\n    [activeTab]=\"selectedKey\"\n    [tabTitleSize]=\"tabTitleSize\"\n    [tabBarPosition]=\"tabBarPosition\"\n    [tabBarUnderlineStyle]=\"tabBarUnderlineStyle\"\n    [tabBarBackgroundColor]=\"tabBarBackgroundColor\"\n  >\n    <div\n      #TabTitle\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      class=\"{{ prefixCls }}-default-bar-tab\"\n      [ngClass]=\"{\n        'am-tabs-default-bar-tab-active': i === selectedKey,\n        'am-tabs-default-bar-tab-disabled': tabPane.disabled\n      }\"\n      [ngStyle]=\"tabBarTextStyle\"\n      [style.color]=\"i === selectedKey ? tabBarActiveTextColor : tabBarInactiveTextColor\"\n      (click)=\"clickTab(i)\"\n    >\n      <ng-container *ngIf=\"tabPane.isTitleString; else titleTemplate\">\n        {{ tabPane.title }}\n      </ng-container>\n      <ng-template #titleTemplate>\n        <ng-template [ngTemplateOutlet]=\"tabPane.title\"></ng-template>\n      </ng-template>\n    </div>\n  </DefaultTabBar>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TabsComponent.ctorParameters = () => [];
TabsComponent.propDecorators = {
    tabPanes: [{ type: ContentChildren, args: [TabPaneComponent, { descendants: false },] }],
    tabContent: [{ type: ViewChild, args: ['TabContent', { static: true },] }],
    defaultTabBar: [{ type: ViewChild, args: ['DefaultTabBar',] }],
    page: [{ type: Input }],
    swipeable: [{ type: Input }],
    useOnPan: [{ type: Input }],
    animated: [{ type: Input }],
    tabBarUnderlineStyle: [{ type: Input }],
    distanceToChangeTab: [{ type: Input }],
    tabTitleSize: [{ type: Input }],
    tabBarActiveTextColor: [{ type: Input }],
    tabBarInactiveTextColor: [{ type: Input }],
    renderTabBar: [{ type: Input }],
    tabBarBackgroundColor: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    tabBarTextStyle: [{ type: Input }],
    tabPanesContent: [{ type: Input }],
    activeTab: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tabDirection: [{ type: Input }],
    onChange: [{ type: Output }],
    onTabClick: [{ type: Output }],
    amTabs: [{ type: HostBinding, args: ['class.am-tabs',] }],
    amTabsTop: [{ type: HostBinding, args: ['class.am-tabs-top',] }],
    amTabsLeft: [{ type: HostBinding, args: ['class.am-tabs-left',] }],
    amTabsRight: [{ type: HostBinding, args: ['class.am-tabs-right',] }],
    amTabsBottom: [{ type: HostBinding, args: ['class.am-tabs-bottom',] }],
    amTabsVertical: [{ type: HostBinding, args: ['class.am-tabs-vertical',] }],
    amTabsHorizontal: [{ type: HostBinding, args: ['class.am-tabs-horizontal',] }]
};

class TabPaneBodyComponent {
    constructor() {
        this._prerender = false;
        this.active = false;
        this.loaded = false;
        this.paneWrap = true;
    }
    get prerender() {
        return this._prerender;
    }
    set prerender(value) {
        this._prerender = value;
        if (value) {
            this.loaded = true;
        }
    }
    get wrapActive() {
        return this.active;
    }
    get wrapInactive() {
        return !this.active;
    }
    ngOnInit() { }
}
TabPaneBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[tab-pane-body]',
                template: "<ng-container *ngIf=\"loaded || prerender\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TabPaneBodyComponent.ctorParameters = () => [];
TabPaneBodyComponent.propDecorators = {
    active: [{ type: Input }],
    loaded: [{ type: Input }],
    content: [{ type: Input }],
    prerender: [{ type: Input }],
    paneWrap: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap',] }],
    wrapActive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-active',] }],
    wrapInactive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-inactive',] }]
};

class DefaultTabBarComponent {
    constructor(_renderer, _ref) {
        this._renderer = _renderer;
        this._ref = _ref;
        this.prefixCls = 'am-tabs-default-bar';
        this.inkBarStyle = {};
        this.tabsBarStyle = {};
        this.showPrev = false;
        this.showNext = false;
        this.selectedKey = 0;
        this.inkBarOffSet = 0;
        this.inkBarLength = 0;
        this.tabBarNavSwipedPosition = 0;
        this.tabBarNavSwipingPosition = 0;
        this._startPosition = 0;
        this.page = 5;
        this.animated = true;
        this.tabBarBackgroundColor = '#FFF';
        this.tabTitleSize = 0;
        this.tabBarPosition = 'top';
        this.tabBarWrap = true;
        this.getTabSize = (page, tabLength) => 100 / Math.min(page, tabLength);
    }
    get activeTab() {
        return this.selectedKey;
    }
    set activeTab(index) {
        if (index !== this.selectedKey) {
            this.selectedKey = index;
            if (this.tabTitles && this.tabTitles.length > 0) {
                this.setTabBarStyleCenter();
                this.setInkBarStatus(this.selectedKey);
            }
        }
    }
    onTouchStart(event) {
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            }
            else {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
            }
        }
    }
    onTouchMove(event) {
        event.preventDefault();
        event.stopPropagation();
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.setTabBarNavSwipingPosition(event.changedTouches[0].clientX - this._startPosition, this.tabTitles.first.nativeElement.offsetWidth, this.tabsBarSwipe.nativeElement.offsetWidth);
                this.tabsBarStyle = {
                    transition: '0ms',
                    transform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)',
                    webkitTransform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)'
                };
            }
            else {
                this.setTabBarNavSwipingPosition(event.changedTouches[0].clientY - this._startPosition, this.tabTitles.first.nativeElement.offsetHeight, this.tabsBarSwipe.nativeElement.offsetHeight);
                this.tabsBarStyle = {
                    transition: '0ms',
                    transform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)',
                    webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)'
                };
            }
        }
    }
    onTouchEnd() {
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
        }
    }
    onContentChange() {
        this.setTabsStyle();
        this.setInkBarStatus(this.selectedKey);
    }
    ngAfterContentInit() {
        this.setTabsStyle();
        this.setTabBarStyleCenter();
        this.setInkBarStatus(this.selectedKey);
    }
    setTabsStyle() {
        if (this.tabTitles && this.tabTitles.length > 0) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.tabTitles.forEach((tabTitle) => {
                    this._renderer.setStyle(tabTitle.nativeElement, 'width', this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%');
                });
            }
            else {
                this.tabTitles.forEach((tabTitle) => {
                    this._renderer.setStyle(tabTitle.nativeElement, 'height', this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%');
                });
            }
        }
    }
    setTabBarStyleCenter() {
        if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
            this.setTabBarNavSwipedPosition(this.tabTitleSize > 0
                ? this.tabTitleSize
                : this.tabsBarSwipe.nativeElement.offsetWidth / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetWidth);
            this.tabsBarStyle = {
                transform: 'translate3d(' + this.tabBarNavSwipedPosition + 'px, 0px, 0px)',
                webkitTransform: 'translate3d(' + this.tabBarNavSwipedPosition + ', 0px, 0px)'
            };
        }
        else {
            this.setTabBarNavSwipedPosition(this.tabTitleSize > 0
                ? this.tabTitleSize
                : this.tabsBarSwipe.nativeElement.offsetHeight / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetHeight);
            this.tabsBarStyle = {
                transform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)',
                webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)'
            };
        }
    }
    setInkBarStatus(key) {
        if (this.tabTitles && this.tabTitles.length > 0) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetLeft;
                this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.width;
                this.inkBarStyle = {
                    width: this.inkBarLength,
                    left: this.tabTitleSize > 0
                        ? this.selectedKey * this.tabTitleSize + 'px'
                        : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
                };
                Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
            }
            else {
                this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetTop;
                this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.height;
                this.inkBarStyle = {
                    height: this.inkBarLength,
                    top: this.tabTitleSize > 0
                        ? this.selectedKey * this.tabTitleSize + 'px'
                        : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
                };
                Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
            }
            this._ref.detectChanges();
        }
    }
    setTabBarNavSwipingPosition(swipingDistance, swipingItemLength, viewportLength) {
        if (this.tabBarNavSwipedPosition + swipingDistance > 0) {
            this.tabBarNavSwipingPosition = 0;
        }
        else if (this.tabBarNavSwipedPosition + swipingDistance <
            viewportLength - swipingItemLength * this.tabTitles.length) {
            this.tabBarNavSwipingPosition = viewportLength - swipingItemLength * this.tabTitles.length;
            this.showNext = false;
        }
        else {
            this.tabBarNavSwipingPosition = this.tabBarNavSwipedPosition + swipingDistance;
            this.showNext = true;
        }
        if (this.tabBarNavSwipingPosition < 0) {
            this.showPrev = true;
        }
        else {
            this.showPrev = false;
        }
    }
    setTabBarNavSwipedPosition(swipingItemLength, viewportLength) {
        if (this.selectedKey * swipingItemLength + this.tabBarNavSwipedPosition <= 0) {
            if (0 === this.selectedKey) {
                this.tabBarNavSwipedPosition = 0;
            }
            else {
                this.tabBarNavSwipedPosition = (1 - this.selectedKey) * swipingItemLength;
            }
        }
        else if ((this.selectedKey + 1) * swipingItemLength >= viewportLength - this.tabBarNavSwipedPosition) {
            if (this.tabTitles.length - 1 === this.selectedKey) {
                this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 1) * swipingItemLength;
            }
            else {
                this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 2) * swipingItemLength;
            }
        }
        if (this.tabBarNavSwipedPosition < 0) {
            this.showPrev = true;
        }
        else {
            this.showPrev = false;
        }
        if (this.tabBarNavSwipedPosition + swipingItemLength * this.tabTitles.length - viewportLength > 0) {
            this.showNext = true;
        }
        else {
            this.showNext = false;
        }
    }
}
DefaultTabBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'DefaultTabBar, nzm-default-tab-bar',
                template: "<div\n  class=\"{{ prefixCls }} {{ prefixCls }}-{{ tabBarPosition }}\"\n  [ngClass]=\"{ 'am-tabs-default-bar-animated': animated }\"\n  [ngStyle]=\"{ backgroundColor: tabBarBackgroundColor || '#FFF' }\"\n>\n  <div *ngIf=\"showPrev\" class=\"{{ prefixCls }}-prevpage\"></div>\n  <div\n    #TabsBarSwipe\n    class=\"{{ prefixCls }}-content\"\n    [ngStyle]=\"tabsBarStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (cdkObserveContent)=\"onContentChange()\"\n  >\n    <ng-content></ng-content>\n    <div class=\"{{ prefixCls }}-underline\" [ngStyle]=\"inkBarStyle\"></div>\n  </div>\n  <div *ngIf=\"showNext\" class=\"{{ prefixCls }}-nextpage\"></div>\n</div>\n"
            },] }
];
DefaultTabBarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
DefaultTabBarComponent.propDecorators = {
    tabTitles: [{ type: ContentChildren, args: ['TabTitle',] }],
    tabsBarSwipe: [{ type: ViewChild, args: ['TabsBarSwipe', { static: true },] }],
    page: [{ type: Input }],
    animated: [{ type: Input }],
    tabBarUnderlineStyle: [{ type: Input }],
    tabBarBackgroundColor: [{ type: Input }],
    tabTitleSize: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    activeTab: [{ type: Input }],
    tabBarWrap: [{ type: HostBinding, args: ['class.am-tabs-tab-bar-wrap',] }]
};

class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ObserversModule],
                declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                providers: []
            },] }
];

class TabBarItemComponent extends TabPaneComponent {
    constructor() {
        super();
        this.prefixCls = 'am-tab-bar-tab';
        this.selected = false;
        this.tintColor = '#108ee9';
        this.unselectedTintColor = '#888';
        this.key = '';
        this.dot = false;
        this.badge = null;
        this.icon = null;
        this.selectedIcon = null;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
TabBarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'TabBarItem, nzm-tab-bar-item',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #tabBarTab>\n  <div class=\"{{ prefixCls }}-icon\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    <Badge *ngIf=\"badge\" className=\"{{ prefixCls }}-badge tab-badge\" [text]=\"badge\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <Badge className=\"{{ prefixCls }}-badge tab-badge\" [dot]=\"dot\" *ngIf=\"dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <ng-container *ngIf=\"!badge && !dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </ng-container>\n  </div>\n  <p class=\"{{ prefixCls }}-title\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    {{ title }}\n  </p>\n</ng-template>\n\n<ng-template #domTemplate>\n  <ng-template [ngTemplateOutlet]=\"selected ? selectedIcon : icon\"></ng-template>\n</ng-template>\n\n<ng-template #imgTemplate>\n  <img src=\"{{ selected ? selectedIcon : icon }}\" alt=\"{{ title }}\" />\n</ng-template>\n"
            },] }
];
TabBarItemComponent.ctorParameters = () => [];
TabBarItemComponent.propDecorators = {
    tabBarTab: [{ type: ViewChild, args: ['tabBarTab', { static: true },] }],
    key: [{ type: Input }],
    dot: [{ type: Input }],
    badge: [{ type: Input }],
    icon: [{ type: Input }],
    selectedIcon: [{ type: Input }]
};

class TabBarComponent {
    constructor() {
        this.prefixCls = 'am-tab-bar';
        this._activeTab = 0;
        this._tintColor = '#108ee9';
        this._unselectedTintColor = '#888';
        this.hidden = false;
        this.prerenderingSiblingsNumber = -1;
        this.barTintColor = 'white';
        this.tabBarPosition = 'bottom';
        this.onPress = new EventEmitter();
        this.tabBar = true;
    }
    get activeTab() {
        return this._activeTab;
    }
    set activeTab(tab) {
        this._activeTab = tab;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.selectTabBarItem(tab);
        }
    }
    get tintColor() {
        return this._tintColor;
    }
    set tintColor(color) {
        this._tintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
            });
        }
    }
    get unselectedTintColor() {
        return this._unselectedTintColor;
    }
    set unselectedTintColor(color) {
        this._unselectedTintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
    }
    selectTabBarItem(index) {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.selected = false;
            });
            this.tabBarItems.toArray()[index].selected = true;
        }
    }
    tabBarTabOnPress(pressParam) {
        this.onPress.emit(pressParam);
    }
    ngAfterContentInit() {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
        this.selectTabBarItem(this.activeTab);
    }
}
TabBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'TabBar, nzm-tab-bar',
                template: "<Tabs\n  [animated]=\"false\"\n  [useOnPan]=\"false\"\n  [swipeable]=\"false\"\n  [activeTab]=\"activeTab\"\n  [renderTabBar]=\"TabBarBar\"\n  [tabDirection]=\"'horizontal'\"\n  [tabPanesContent]=\"tabBarItems\"\n  [tabBarPosition]=\"tabBarPosition\"\n  [prerenderingSiblingsNumber]=\"prerenderingSiblingsNumber\"\n></Tabs>\n\n<ng-template #TabBarBar>\n  <div class=\"am-tabs-tab-bar-wrap\">\n    <div\n      class=\"{{ prefixCls }}-bar\"\n      [ngClass]=\"{\n        'am-tab-bar-bar-hidden-top': 'top' === tabBarPosition && hidden,\n        'am-tab-bar-bar-hidden-bottom': 'bottom' === tabBarPosition && hidden\n      }\"\n      [style.background-color]=\"barTintColor\"\n    >\n      <div\n        class=\"am-tab-bar-tab\"\n        *ngFor=\"let tabBarItem of tabBarItems; let i = index\"\n        (click)=\"tabBarTabOnPress({ index: i, key: tabBarItem.key, title: tabBarItem.title })\"\n      >\n        <ng-container [ngTemplateOutlet]=\"tabBarItem.tabBarTab\"></ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
            },] }
];
TabBarComponent.ctorParameters = () => [];
TabBarComponent.propDecorators = {
    tabBarItems: [{ type: ContentChildren, args: [TabBarItemComponent, { descendants: true },] }],
    hidden: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    activeTab: [{ type: Input }],
    barTintColor: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tintColor: [{ type: Input }],
    unselectedTintColor: [{ type: Input }],
    onPress: [{ type: Output }],
    tabBar: [{ type: HostBinding, args: ['class.am-tab-bar',] }]
};

class TabBarModule {
}
TabBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TabsModule, BadgeModule],
                exports: [TabBarComponent, TabBarItemComponent],
                declarations: [TabBarComponent, TabBarItemComponent],
                providers: []
            },] }
];

class PickerOptions {
    constructor() {
        this.data = [];
        this.value = [];
        this.cols = 3;
        this.mask = true;
        this.title = '';
        this.okText = '确定';
        this.dismissText = '取消';
        this.disabled = false;
        this.cascade = true;
        this.appendToBody = false;
        this.onDismiss = new EventEmitter();
        this.onPickerChange = new EventEmitter();
        this.indicatorStyle = {};
    }
}
PickerOptions.decorators = [
    { type: Injectable }
];

class PickerRef {
}

class PickerComponent extends PickerRef {
    constructor(elementRef, options, _localeProviderService) {
        super();
        this.elementRef = elementRef;
        this.options = options;
        this._localeProviderService = _localeProviderService;
        this.transitionName = 'am-slide-up-enter am-slide-up-enter-active';
        this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        this.startY = 0;
        this.differY = 0;
        this.currentY = 0;
        this.len = 0;
        this.dom = null;
        this.index = 0;
        this.maxY = 0;
        this.lineHeight = 34;
        this.dataForRender = [];
        this.selectedTarget = [];
        this.isMouseDown = false;
        this.Velocity = getVelocity();
        this._unsubscribe$ = new Subject();
        this.onChange = (_) => { };
    }
    panstart(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || this.options.disabled) {
            return;
        }
        this.isMouseDown = true;
        event.preventDefault();
        this.dom = getEventTarget(event).target.parentElement.children[2];
        this.len = this.dom.children.length;
        this.maxY = -(this.len - 1);
        if (this.dom.style.transform === 'translateY(0px)') {
            this.currentY = 0;
            this.maxY = -(this.len - 1);
        }
        else if (this.selectedTarget.length > 0) {
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    this.currentY = item.currentY;
                }
            });
        }
        this.startY = getEventTarget(event).clientY;
    }
    panmove(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
            return;
        }
        event.preventDefault();
        const ev = getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        this.Velocity.record(this.differY);
        this.dom.style.transition = 'transform 0s';
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
    }
    panend(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
            return;
        }
        this.isMouseDown = false;
        event.preventDefault();
        const ev = getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        let time = 0.3;
        const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
        if (velocity) {
            this.differY = velocityTemp * 40 + this.differY;
            time = Math.abs(velocityTemp) * 0.1;
        }
        this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
        if (this.differY <= -this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY <= this.maxY) {
                this.currentY = this.maxY;
            }
        }
        else if (this.differY >= this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY >= 0) {
                this.currentY = 0;
            }
        }
        if (this.selectedTarget.length > 0) {
            let hasKey = false;
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    hasKey = true;
                    item.targetId = event.target.id;
                    item.currentY = this.currentY;
                }
                else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
                    item.currentY = 0;
                }
            });
            if (!hasKey) {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
        }
        else {
            this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
        }
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
        this.index = Math.floor(Math.abs(this.currentY / 1));
        this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
        if (this.options.value !== this.combineReslut()) {
            this.options.onPickerChange.emit(this.combineReslut());
            this.onChange(this.combineReslut());
        }
    }
    init() {
        if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
            this.dataForRender.push(this.generateArrayData(this.options.data));
        }
        if (this.options.value.length > 0) {
            this.getInitValueIndex(this.dataForRender);
        }
        else {
            this.checkArrayDeep(this.options.data[0]);
            for (let index = 0; index < this.dataForRender.length; index++) {
                this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
            }
        }
    }
    getInitValueIndex(dataTemp) {
        const self = this;
        self.selectedTarget = [];
        self.options.value.forEach((element, i) => {
            dataTemp.forEach((item, j) => {
                item.forEach((item1, k) => {
                    if ((element === item1.label || element === item1.value || element === item1) && i === j) {
                        self.checkArrayDeep(self.dataForRender[i][k], false);
                        self.selectedTarget.push({ targetId: `${i}`, currentY: -k });
                    }
                });
            });
        });
    }
    reloadPicker() {
        if (!this._picker || this._picker === undefined) {
            return;
        }
        this.currentPicker = this._picker.element.nativeElement;
        if (this.currentPicker && this.currentPicker.children.length > 0) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    generateArrayData(targetArr) {
        const tempArr = [];
        if (targetArr instanceof Array) {
            targetArr.forEach((item, i) => {
                if (item instanceof Array) {
                    const keys = Object.keys(item);
                    const element = {};
                    keys.forEach(key => {
                        element[key] = targetArr[i][key] || targetArr[i];
                    });
                    tempArr.push(element);
                }
                else {
                    tempArr.push(item);
                }
            });
            return tempArr;
        }
        return [];
    }
    checkArrayDeep(parent, init = true) {
        if (parent instanceof Object && parent.children && parent.children.length > 0) {
            if (this.generateArrayData(parent.children).length > 0 && this.dataForRender.length < this.options.cols) {
                let hasValue = false;
                this.dataForRender.filter((item, index) => {
                    if (JSON.stringify(item) === JSON.stringify(parent.children)) {
                        hasValue = true;
                    }
                });
                if (!hasValue) {
                    this.dataForRender.push(this.generateArrayData(parent.children));
                }
                if (init) {
                    this.checkArrayDeep(parent.children[0]);
                }
            }
        }
    }
    ok() {
        if (this.options.updateNgModel) {
            this.options.updateNgModel(this.combineReslut());
        }
        if (this.options.confirm) {
            this.options.confirm(this.combineReslut());
        }
        this.setTransitionName();
    }
    combineReslut() {
        const result = [];
        const self = this;
        self.selectedTarget.forEach(item => {
            if (self.dataForRender.length > 0 && self.dataForRender.length >= parseInt(item.targetId, 0) + 1) {
                const curItem = self.dataForRender[parseInt(item.targetId, 0)][-item.currentY];
                if (curItem !== undefined) {
                    result.push(curItem);
                }
            }
        });
        return result;
    }
    cancel() {
        this.setTransitionName();
        this.options.onDismiss.emit();
        if (this.options.cancel) {
            this.options.cancel();
        }
    }
    setTransitionName() {
        this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
        this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
        setTimeout(() => {
            this.options.hidePicker();
        }, 200);
    }
    setCurrentSelected(target, index) {
        if (!this.options.cascade) {
            return;
        }
        const a = this.dataForRender.slice(0, target + 1);
        this.dataForRender = a;
        this.checkArrayDeep(this.dataForRender[target][index]);
        if (this.selectedTarget.length > 0 && this.selectedTarget.length < this.dataForRender.length) {
            for (let i = 0; i < this.dataForRender.length; i++) {
                if (i > target) {
                    if (i < this.selectedTarget.length) {
                        this.selectedTarget[i] = { targetId: `${i}`, currentY: 0 };
                    }
                    else {
                        this.selectedTarget.push({ targetId: `${i}`, currentY: 0 });
                    }
                }
            }
        }
        setTimeout(() => {
            this.dataForRender.forEach((item, i) => {
                if (target !== `${i}` && i > target) {
                    this._picker.element.nativeElement.children[i].children[2].style.transition = 'transform .3s';
                    this._picker.element.nativeElement.children[i].children[2].style.transform = 'translateY(0px)';
                }
            });
        }, 0);
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.options.hidePicker) {
            this.options.hidePicker();
        }
    }
    destroy() {
        this.close();
    }
    ngOnInit() {
        this.init();
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            const locale = this._localeProviderService.getLocaleSubObj('Picker');
            this.options.okText = this.options.okText === '确定' ? locale.okText : this.options.okText;
            this.options.dismissText = this.options.dismissText === '取消' ? locale.dismissText : this.options.dismissText;
        });
    }
    ngAfterViewInit() {
        this.reloadPicker();
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
PickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'Picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup am-picker-popup-wrap {{ transitionName }}\" style=\" min-height: 280px\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">{{ options.okText }}</div>\n        </div>\n        <div class=\"am-picker\" style=\"flex-direction: row; align-items: center;\" #picker>\n          <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"options.indicatorStyle\"></div>\n            <div class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\" id=\"{{ i }}\"></div>\n            <div class=\"am-picker-col-content\">\n              <div *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\" id=\"{{ i }}\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: PickerOptions },
    { type: LocaleProviderService }
];
PickerComponent.propDecorators = {
    _picker: [{ type: ViewChild, args: ['picker', { read: ViewContainerRef, static: true },] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};

class PickerDirective {
    constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer, _zone) {
        this._viewContainerRef = _viewContainerRef;
        this._elm = _elm;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._zone = _zone;
        this._eventListeners = [];
        this.onVisibleChange = new EventEmitter(true);
        this.onPickerChange = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    togglePicker() {
        if (!this.picker) {
            this.showPicker();
        }
        else {
            this.hidePicker();
        }
    }
    ngOnInit() {
        this.onVisibleChange.emit(false);
    }
    ngOnChanges(value) {
        if (value.cols && this.picker) {
            this.picker.instance.options.cols = value.cols.currentValue;
        }
        if (value.data && this.picker) {
            if (!this.isPickerDataEqual(this.picker.instance.options.data, value.data.currentValue)) {
                this.picker.instance.options.data = value.data.currentValue;
                this.showPicker();
            }
        }
    }
    ngOnDestroy() {
        this.hidePicker();
    }
    onDocumentClick(event) {
        if (this.picker &&
            !this._elm.nativeElement.contains(event.target) &&
            !this.picker.location.nativeElement.contains(event.target)) {
            this.hidePicker();
        }
    }
    showPicker() {
        if (this.picker) {
            this._zone.run(() => {
                this.picker.instance.init();
            });
        }
        else if (!this.picker && !this.disabled) {
            setTimeout(() => {
                this._eventListeners = [
                    this._renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event))
                ];
            });
            const options = new PickerOptions();
            Object.assign(options, this._defaultOptions, {
                hidePicker: (event) => {
                    this.hidePicker();
                },
                updateNgModel: (value) => {
                    this.value = value;
                    this.onChange(value);
                }
            });
            const optionalParams = [
                'data',
                'value',
                'cols',
                'mask',
                'title',
                'okText',
                'dismissText',
                'disabled',
                'cascade',
                'appendToBody',
                'indicatorStyle',
                'onPickerChange',
                'onVisibleChange',
                'onDismiss'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(PickerComponent);
            const childInjector = Injector.create([
                {
                    provide: PickerOptions,
                    useValue: options
                }
            ]);
            this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
            }
            this.onVisibleChange.emit(true);
        }
    }
    hidePicker() {
        if (this.appendToBodyElement) {
            document.body.removeChild(this.appendToBodyElement);
            this.appendToBodyElement = null;
        }
        if (this.picker) {
            this.picker.destroy();
            delete this.picker;
            this.onVisibleChange.emit(false);
            this._eventListeners.forEach(fn => fn());
            this._eventListeners = [];
        }
    }
    writeValue(value) {
        this.value = Array.isArray(value) ? value : [];
        if (this.picker) {
            this.picker.instance.options.value = this.value;
            this.showPicker();
            this.picker.instance.reloadPicker();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    isPickerDataEqual(data1, data2) {
        if (!data1 && !data2) {
            return true;
        }
        if (!Array.isArray(data1) || !Array.isArray(data2) || data1.length !== data2.length) {
            return false;
        }
        for (let i = 0; i < data1.length; i++) {
            const item1 = data1[i];
            const item2 = data2[i];
            if ((item1 && !item2) || (!item1 && item2)) {
                return false;
            }
            if (item1.value !== item2.value) {
                return false;
            }
            if (item1.label !== item2.label) {
                return false;
            }
            if (item1.children && item2.children) {
                return this.isPickerDataEqual(item1.children, item2.children);
            }
        }
        return true;
    }
}
PickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Picker], [nzm-picker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PickerDirective),
                        multi: true
                    }
                ]
            },] }
];
PickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: PickerOptions },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NgZone }
];
PickerDirective.propDecorators = {
    data: [{ type: Input }],
    cols: [{ type: Input }],
    mask: [{ type: Input }],
    title: [{ type: Input }],
    visible: [{ type: Input }],
    okText: [{ type: Input }],
    dismissText: [{ type: Input }],
    disabled: [{ type: Input }],
    cascade: [{ type: Input }],
    appendToBody: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onPickerChange: [{ type: Output }],
    onDismiss: [{ type: Output }],
    togglePicker: [{ type: HostListener, args: ['click',] }]
};

class PickerService extends PopupService {
    constructor() {
        super(...arguments);
        this.comRef = null;
        this.defaultOptions = new PickerOptions();
    }
    showPicker(config = this.defaultOptions, confirmCallback, cancelCallback) {
        const options = new PickerOptions();
        Object.assign(options, config, {
            hidePicker: (event) => {
                this.hidePicker();
            },
            confirm: (event) => {
                if (confirmCallback) {
                    confirmCallback(event);
                }
            },
            cancel: () => {
                if (cancelCallback) {
                    cancelCallback();
                }
            }
        });
        const childInjector = Injector.create([
            {
                provide: PickerOptions,
                useValue: options
            }
        ]);
        this.comRef = this.showPopup(PickerComponent, childInjector);
        return this.comRef && this.comRef.instance;
    }
    hidePicker() {
        this.hidePopup();
    }
}
PickerService.decorators = [
    { type: Injectable }
];

class PickerModule {
}
PickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule],
                exports: [PickerComponent, PickerDirective],
                declarations: [PickerComponent, PickerDirective],
                providers: [PickerOptions, PopupService, PickerService]
            },] }
];

class PickerViewComponent extends PickerComponent {
    constructor() {
        super(...arguments);
        this.data = [];
        this.cols = 3;
        this.indicatorStyle = {};
        this.itemStyle = {};
    }
    pickerViewInit() {
        this.options.data = this.data;
        this.options.cols = this.cols;
        this.options.cascade = this.cascade;
        this.init();
    }
    init() {
        this.selectedTarget = [];
        if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
            this.dataForRender.push(this.generateArrayData(this.options.data));
        }
        if (this.options.value.length > 0) {
            this.getInitValueIndex(this.dataForRender);
        }
        else {
            for (let index = 0; index < this.dataForRender.length; index++) {
                this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
            }
        }
        setTimeout(() => {
            this.reloadPicker();
        });
    }
    writeValue(value) {
        if (value) {
            this.options.value = value;
            this.init();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    ngOnInit() {
        this.pickerViewInit();
    }
    ngOnChanges(changes) {
        if (changes.cols) {
            this.dataForRender = [];
        }
        if (changes.data || changes.cols) {
            this.pickerViewInit();
        }
    }
    ngAfterViewInit() {
        this.currentPicker = this.elementRef.nativeElement;
        this.reloadPicker();
    }
}
PickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'PickerView, nzm-picker-view',
                template: "<div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n  <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n    <div #indicator class=\"am-picker-col-indicator \" [ngStyle]=\"indicatorStyle\"></div>\n    <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n    <div class=\"am-picker-col-content\">\n      <div *ngFor=\"let val of item; let i = index\" id=\"{{ i }}\" class=\"am-picker-col-item\" [ngStyle]=\"itemStyle\">\n        {{ val.label ? val.label : val }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PickerViewComponent),
                        multi: true
                    }
                ]
            },] }
];
PickerViewComponent.propDecorators = {
    data: [{ type: Input }],
    cols: [{ type: Input }],
    cascade: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    itemStyle: [{ type: Input }]
};

class PickerViewModule {
}
PickerViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
                exports: [PickerViewComponent],
                declarations: [PickerViewComponent]
            },] }
];

class ImagePickerComponent {
    constructor() {
        this.prefixCls = 'am-image-picker';
        this.flexEl = [];
        this._accept = 'image/*';
        this._count = 4;
        this._selectable = true;
        this._files = [];
        this._multiple = false;
        this.capture = false;
        this.disableDelete = false;
        this.onFail = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onImageClick = new EventEmitter();
        this.onAddImageClick = new EventEmitter();
    }
    get files() {
        return this._files;
    }
    set files(value) {
        this._files = value;
        this.sortItem();
    }
    get accept() {
        return this._accept;
    }
    set accept(value) {
        this._accept = value;
        this.sortItem();
    }
    get length() {
        return this._count;
    }
    set length(value) {
        if (value > 0) {
            this._count = value;
        }
        else {
            this._count = 4;
        }
        this.sortItem();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = value;
        this.sortItem();
    }
    get selectable() {
        return this._selectable;
    }
    set selectable(value) {
        this._selectable = value;
        this.sortItem();
    }
    sortItem() {
        if (!this._files) {
            return;
        }
        let count = parseInt('' + this._count, 10);
        if (count <= 0) {
            count = 4;
        }
        let allEl = this._files.map(item => {
            return {
                type: 'img',
                backgroundImage: 'url(' + item.url + ')',
                transform: 'rotate(' + this.getRotation(item.orientation) + 'deg)'
            };
        });
        if (this._selectable) {
            allEl.push({
                type: 'select',
                backgroundImage: '',
                transform: ''
            });
        }
        const length = allEl.length;
        if (length !== 0 && length % count !== 0) {
            const blankCount = count - (length % count);
            const fillBlankEl = [];
            for (let i = 0; i < blankCount; i++) {
                fillBlankEl.push({
                    type: 'white',
                    backgroundImage: '',
                    transform: ''
                });
            }
            allEl = allEl.concat(fillBlankEl);
        }
        this.flexEl = [];
        for (let i = 0; i < allEl.length / count; i++) {
            const rowEl = allEl.slice(i * count, i * count + count);
            this.flexEl.push(rowEl);
        }
    }
    addImage(imgItem) {
        this._files.push({
            type: 'img',
            url: imgItem.url,
            orientation: imgItem.orientation
        });
        this.sortItem();
        this.onChange.emit({
            files: this._files,
            operationType: 'add',
            index: this._files.length - 1
        });
    }
    removeImage(index) {
        this._files.splice(index, 1);
        this.sortItem();
        this.onChange.emit({
            files: this._files,
            operationType: 'remove',
            index: index
        });
    }
    imageClick(index) {
        this.onImageClick.emit({
            index: index,
            files: this._files
        });
    }
    addImageClick(e) {
        this.onAddImageClick.emit(e);
    }
    parseFile(file, index) {
        const reader = new FileReader();
        reader.onload = e => {
            const dataURL = e.target.result;
            if (!dataURL) {
                this.onFail.emit(`Fail to get the ${index} image`);
                return;
            }
            let orientation = 1;
            this.getOrientation(file, res => {
                // -2: not jpeg , -1: not defined
                if (res > 0) {
                    orientation = res;
                }
                this.addImage({
                    url: dataURL,
                    orientation,
                    file
                });
            });
        };
        reader.readAsDataURL(file);
    }
    fileChange(event) {
        const fileList = event.target.files;
        if (fileList && fileList.length) {
            for (let i = 0; i < fileList.length; i++) {
                this.parseFile(fileList[i], i);
            }
        }
    }
    getRotation(orientation = 1) {
        let imgRotation = 0;
        switch (orientation) {
            case 3:
                imgRotation = 180;
                break;
            case 6:
                imgRotation = 90;
                break;
            case 8:
                imgRotation = 270;
                break;
            default:
        }
        return imgRotation;
    }
    // https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
    getOrientation(file, callback) {
        const reader = new FileReader();
        reader.onload = e => {
            const view = new DataView(e.target.result);
            if (view.getUint16(0, false) !== 0xffd8) {
                return callback(-2);
            }
            const length = view.byteLength;
            let offset = 2;
            while (offset < length) {
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xffe1) {
                    const tmp = view.getUint32((offset += 2), false);
                    if (tmp !== 0x45786966) {
                        return callback(-1);
                    }
                    const little = view.getUint16((offset += 6), false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                        if (view.getUint16(offset + i * 12, little) === 0x0112) {
                            return callback(view.getUint16(offset + i * 12 + 8, little));
                        }
                    }
                }
                else if ((marker & 0xff00) !== 0xff00) {
                    break;
                }
                else {
                    offset += view.getUint16(offset, false);
                }
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }
}
ImagePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ImagePicker, nzm-image-picker',
                template: "<div class=\"{{ prefixCls }}-list\" role=\"group\">\n  <Flex *ngFor=\"let rowItem of flexEl; let i = index\">\n    <FlexItem *ngFor=\"let item of rowItem; let j = index\">\n      <div *ngIf=\"item && 'img' === item.type && item.backgroundImage\" class=\"{{ prefixCls }}-item\">\n        <div\n          role=\"button\"\n          *ngIf=\"!disableDelete\"\n          aria-label=\"Click and Remove this image\"\n          class=\"{{ prefixCls }}-item-remove\"\n          (click)=\"removeImage(i * length + j)\"\n        ></div>\n        <div\n          role=\"button\"\n          aria-label=\"Image can be clicked\"\n          class=\"{{ prefixCls }}-item-content\"\n          [ngStyle]=\"{ 'background-image': item.backgroundImage, transform: item.transform }\"\n          (click)=\"imageClick(i * length + j)\"\n        ></div>\n      </div>\n      <div\n        role=\"button\"\n        aria-label=\"Choose and add image\"\n        *ngIf=\"item && 'select' === item.type\"\n        class=\"{{ prefixCls }}-item {{ prefixCls }}-upload-btn\"\n        (click)=\"addImageClick($event)\"\n      >\n        <input\n          #fileSelectorInput\n          type=\"file\"\n          [accept]=\"accept\"\n          [multiple]=\"multiple\"\n          [attr.capture]=\"capture ? capture : null\"\n          (change)=\"fileChange($event)\"\n        />\n      </div>\n      <div *ngIf=\"item && 'white' === item.type\" class=\"{{ prefixCls }}-item-white\"></div>\n    </FlexItem>\n  </Flex>\n</div>\n"
            },] }
];
ImagePickerComponent.ctorParameters = () => [];
ImagePickerComponent.propDecorators = {
    _fileSelectorInput: [{ type: ViewChild, args: ['fileSelectorInput', { read: ViewContainerRef },] }],
    capture: [{ type: Input }],
    disableDelete: [{ type: Input }],
    files: [{ type: Input }],
    accept: [{ type: Input }],
    length: [{ type: Input }],
    multiple: [{ type: Input }],
    selectable: [{ type: Input }],
    onFail: [{ type: Output }],
    onChange: [{ type: Output }],
    onImageClick: [{ type: Output }],
    onAddImageClick: [{ type: Output }]
};

class ImagePickerModule {
}
ImagePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ImagePickerComponent],
                exports: [ImagePickerComponent],
                imports: [CommonModule, FlexModule]
            },] }
];

class ResultComponent {
    constructor() {
        this.prefixCls = 'am-result';
        this.isTitleString = true;
        this.isMessageString = true;
        this.onButtonClick = new EventEmitter();
        this.role = 'alert';
        this.amResult = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (this.isTemplateRef(value)) {
            this.isTitleString = false;
        }
        else {
            this.isTitleString = true;
        }
        this._title = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (this.isTemplateRef(value)) {
            this.isMessageString = false;
        }
        else {
            this.isMessageString = true;
        }
        this._message = value;
    }
    buttonClick(event) {
        this.onButtonClick.emit(event);
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
}
ResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'Result, nzm-result',
                template: "<div *ngIf=\"img\" class=\"{{ prefixCls }}-pic\">\n  <ng-template [ngTemplateOutlet]=\"img\"></ng-template>\n</div>\n<div *ngIf=\"!img && imgUrl\" class=\"{{ prefixCls }}-pic\" [ngStyle]=\"{ backgroundImage: 'url(' + imgUrl + ')' }\"></div>\n<div *ngIf=\"title\" class=\"{{ prefixCls }}-title\">\n  <ng-template *ngIf=\"!isTitleString\" [ngTemplateOutlet]=\"title\"></ng-template>\n  <span *ngIf=\"isTitleString\">{{ title }}</span>\n</div>\n<div [ngClass]=\"prefixCls + '-message'\">\n  <ng-template *ngIf=\"!isMessageString\" [ngTemplateOutlet]=\"message\"></ng-template>\n  <span *ngIf=\"isMessageString\">{{ message }}</span>\n</div>\n<div *ngIf=\"buttonText\" class=\"{{ prefixCls }}-button\">\n  <a Button [type]=\"buttonType\" (click)=\"buttonClick($event)\">\n    {{ buttonText }}\n  </a>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ResultComponent.ctorParameters = () => [];
ResultComponent.propDecorators = {
    title: [{ type: Input }],
    imgUrl: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonType: [{ type: Input }],
    img: [{ type: Input }],
    message: [{ type: Input }],
    onButtonClick: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amResult: [{ type: HostBinding, args: ['class.am-result',] }]
};

class ResultModule {
}
ResultModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ResultComponent],
                exports: [ResultComponent],
                imports: [CommonModule, IconModule]
            },] }
];

class RangeComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.offset = [];
        this.length = [];
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._defaultValue = [0, 0, 0];
        this._disabled = false;
        this._marks = {};
        this._dots = false;
        this._included = true;
        this._count = 1;
        this._allowCross = true;
        this._handleStyle = [];
        this._trackStyle = [];
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
        this.amWrapper = true;
        this._ngModelOnChange = () => { };
        this._ngModelOnTouched = () => { };
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.setValue(value);
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this._value = this._defaultValue;
        this.setValue(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get marks() {
        return this._marks;
    }
    set marks(value) {
        this._marks = value;
    }
    get dots() {
        return this._dots;
    }
    set dots(value) {
        this._dots = value;
    }
    get included() {
        return this._included;
    }
    set included(value) {
        this._included = value;
    }
    set count(value) {
        this._count = value;
    }
    set allowCross(value) {
        this._allowCross = value;
        this.setValueBound();
    }
    set pushable(value) {
        this._pushable = value;
        if (this.verifyPushable()) {
            this.setValueBound();
        }
    }
    get handleStyle() {
        return this._handleStyle;
    }
    set handleStyle(value) {
        this._handleStyle = value;
    }
    get trackStyle() {
        return this._trackStyle;
    }
    set trackStyle(value) {
        this._trackStyle = value;
    }
    get railStyle() {
        return this._railStyle;
    }
    set railStyle(value) {
        this._railStyle = value;
    }
    setCls() {
        this.sliderCls = {
            [`${this.prefixCls}-disabled`]: this._disabled
        };
    }
    initialValue() {
        const minTemp = this._min;
        if (!this.verifyPushable()) {
            this._pushable = 0;
            console.warn('pushable设置无效，已大于有些value间隔，被强制设为0');
        }
        const initialValue = Array.apply(null, Array(this._count + 1)).map(function () {
            return minTemp;
        });
        this._defaultValue = this._defaultValue !== undefined ? this._defaultValue : initialValue;
        this._value = this._value !== undefined ? this._value : this._defaultValue;
        // 验证count值
        this._count = this._value.length - 1;
        // 验证value区间
        for (let i = 0; i < this._value.length; i++) {
            if (this._value[i] < this._min) {
                this._value[i] = this._min;
            }
            else if (this._value[i] > this._max) {
                this._value[i] = this._max;
            }
        }
        if (this._count > 0) {
            this.upperBound = Math.max(...this._value);
            this.lowerBound = Math.min(...this._value);
        }
    }
    handleChange(e, i) {
        let temp = [...this._value];
        temp[i] = e;
        this.upperBound = Math.max(...temp);
        this.lowerBound = Math.min(...temp);
        this.setTrackStyle(temp);
        this.onChange.emit(temp);
    }
    handleAfterChange(e, i) {
        setTimeout(() => {
            this._value[i] = e;
            this.upperBound = Math.max(...this._value);
            this.lowerBound = Math.min(...this._value);
            this.setTrackStyle(this._value);
            this.onAfterChange.emit(this._value);
            this._ngModelOnChange(this._value);
            this.setValueBound();
        }, 0);
    }
    setTrackStyle(value) {
        if (value && value.length === this._count + 1) {
            value.sort((a, b) => a - b);
            for (let i = 0; i < this._count; i++) {
                this.offset[i] = (value[i] * 100) / (this._max - this._min);
                this.length[i] = ((value[i + 1] - value[i]) * 100) / (this._max - this._min);
            }
        }
    }
    setValueBound() {
        this.maxBound = [];
        this.minBound = [];
        if ((this._allowCross && this._pushable === undefined) || this._handleCount <= 1) {
            for (let i = 0; i < this._handleCount; i++) {
                this.maxBound[i] = this._max;
                this.minBound[i] = this._min;
            }
        }
        else {
            if (this._pushable === undefined) {
                this._pushable = 0;
            }
            for (let i = 0; i < this._handleCount; i++) {
                this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
                this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
            }
        }
    }
    verifyPushable() {
        for (let i = 1; i < this._handleCount; i++) {
            const diff = this._value[i] - this._value[i - 1];
            if (diff < this._pushable) {
                return false;
            }
        }
        return true;
    }
    writeValue(value) {
        this.setValue(value, true);
    }
    setValue(value, isWriteValue = false) {
        if (value) {
            this._value = value;
            this._handleCount = this._value.length + 1;
            this.initialValue();
            this.setValueBound();
            this.setCls();
            this.setTrackStyle(this._value);
            if (isWriteValue) {
                this._ngModelOnChange(this._value);
            }
            else {
                this.onAfterChange.emit(this._value);
            }
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
    ngOnInit() {
        this.initialValue();
        this.setValueBound();
        this._handleCount = this._count + 1;
        this.setCls();
        const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
        this.sliderLength = sliderCoords.width;
        this.sliderStart = sliderCoords.left;
    }
}
RangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Range , nzm-range',
                template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    *ngFor=\"let off of offset; let i = index\"\n    [className]=\"'am-slider-track'\"\n    [included]=\"included\"\n    [style]=\"trackStyle[i]\"\n    [offset]=\"off\"\n    [length]=\"length[i]\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderSteps>\n  <SliderHandle\n    *ngFor=\"let val of value; let i = index\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [maxBound]=\"maxBound[i]\"\n    [minBound]=\"minBound[i]\"\n    [value]=\"val\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [sliderLength]=\"sliderLength\"\n    [sliderStart]=\"sliderStart\"\n    [handleStyle]=\"handleStyle[i]\"\n    (onChange)=\"handleChange($event, i)\"\n    (onAfterChange)=\"handleAfterChange($event, i)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderMarks>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RangeComponent),
                        multi: true
                    }
                ]
            },] }
];
RangeComponent.ctorParameters = () => [
    { type: ElementRef }
];
RangeComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    disabled: [{ type: Input }],
    marks: [{ type: Input }],
    dots: [{ type: Input }],
    included: [{ type: Input }],
    count: [{ type: Input }],
    allowCross: [{ type: Input }],
    pushable: [{ type: Input }],
    handleStyle: [{ type: Input }],
    trackStyle: [{ type: Input }],
    railStyle: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    amWrapper: [{ type: HostBinding, args: ['class.am-slider-wrapper',] }]
};

class SliderComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.offset = 0;
        this.length = 0;
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._defaultValue = 0;
        this._disabled = false;
        this._marks = {};
        this._dots = false;
        this._included = true;
        this._trackStyle = {};
        this.onAfterChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.amSliderWrapper = true;
        this._ngModelOnChange = () => { };
        this._ngModelOnTouched = () => { };
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.setValue(value);
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this.setValue(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.setCls();
    }
    get marks() {
        return this._marks;
    }
    set marks(value) {
        this._marks = value;
    }
    get dots() {
        return this._dots;
    }
    set dots(value) {
        this._dots = value;
    }
    get included() {
        return this._included;
    }
    set included(value) {
        this._included = value;
    }
    get handleStyle() {
        return this._handleStyle;
    }
    set handleStyle(value) {
        this._handleStyle = value;
    }
    get trackStyle() {
        return this._trackStyle;
    }
    set trackStyle(value) {
        this._trackStyle = value;
    }
    get railStyle() {
        return this._railStyle;
    }
    set railStyle(value) {
        this._railStyle = value;
    }
    setCls() {
        this.sliderCls = {
            [`${this.prefixCls}-disabled`]: this._disabled
        };
    }
    handleChange(e) {
        setTimeout(() => {
            this.setTrack(e);
            this._value = e;
        }, 10);
        this.onChange.emit(e);
        this._ngModelOnChange(e);
    }
    handleAfterChange(e) {
        setTimeout(() => {
            this.setTrack(e);
            this._value = e;
        }, 10);
        this.onAfterChange.emit(e);
    }
    valueRange() {
        if (this._value < this._min) {
            this._value = this._min;
        }
        if (this._value > this._max) {
            this._value = this._max;
        }
    }
    ngOnInit() {
        this.setCls();
        this.setValue(this._value);
        const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
        this.sliderLength = sliderCoords.width;
        this.sliderStart = sliderCoords.left;
    }
    writeValue(value) {
        this.setValue(value, true);
    }
    setValue(value, isWriteValue = false) {
        if (value === 0 || value) {
            this._value = value;
        }
        else {
            this._value = this._defaultValue;
        }
        this.valueRange();
        this.setTrack(this._value);
        if (isWriteValue) {
            this._ngModelOnChange(this._value);
        }
        else {
            this.onAfterChange.emit(this._value);
        }
    }
    setTrack(e) {
        this.offset = 0;
        this.length = ((e - this._min) * 100) / (this._max - this._min);
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'Slider , nzm-slider',
                template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    [className]=\"'am-slider-track'\"\n    [style]=\"trackStyle\"\n    [offset]=\"offset\"\n    [length]=\"length\"\n    [included]=\"included\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderSteps>\n  <SliderHandle\n    [max]=\"max\"\n    [min]=\"min\"\n    [value]=\"value\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [handleStyle]=\"handleStyle\"\n    [sliderStart]=\"sliderStart\"\n    [sliderLength]=\"sliderLength\"\n    (onChange)=\"handleChange($event)\"\n    (onAfterChange)=\"handleAfterChange($event)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderMarks>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SliderComponent),
                        multi: true
                    }
                ]
            },] }
];
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    disabled: [{ type: Input }],
    marks: [{ type: Input }],
    dots: [{ type: Input }],
    included: [{ type: Input }],
    handleStyle: [{ type: Input }],
    trackStyle: [{ type: Input }],
    railStyle: [{ type: Input }],
    onAfterChange: [{ type: Output }],
    onChange: [{ type: Output }],
    amSliderWrapper: [{ type: HostBinding, args: ['class.am-slider-wrapper',] }]
};

class SliderHandleComponent {
    constructor(_elf, _sanitizer) {
        this._elf = _elf;
        this._sanitizer = _sanitizer;
        this._disabled = false;
        this._marks = {};
        this._isDraging = false;
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
        this.mouseDown = event => {
            if (!this._disabled && this.isMouseTarget(event)) {
                this._startX = event.clientX;
                this._handleStatus = 'start';
                this._isDraging = true;
                document.addEventListener('mousemove', this.mouseMove, false);
                document.addEventListener('mouseup', this.mouseUp, false);
                this.pauseEvent(event);
            }
        };
        this.mouseMove = event => {
            if (!this._disabled && this._isDraging) {
                this.pauseEvent(event);
                const pos = event.clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                if (this._oldValue !== this._value) {
                    this._oldValue = this._value;
                    this.onChange.emit(this._value);
                }
            }
        };
        this.mouseUp = event => {
            if (!this._disabled && this._isDraging) {
                this._handleStatus = 'end';
                this._isDraging = false;
                const pos = event.clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                this.onAfterChange.emit(this._value);
            }
        };
    }
    set min(value) {
        this._min = value;
    }
    set max(value) {
        this._max = value;
    }
    set minBound(value) {
        this._minBound = value;
    }
    set maxBound(value) {
        this._maxBound = value;
    }
    set step(value) {
        this._step = value;
    }
    set value(value) {
        this._value = value;
        if (this._value) {
            this.left = this.calcOffset(this._value);
        }
    }
    set disabled(value) {
        this._disabled = value;
    }
    set sliderLength(value) {
        this._sliderLength = value;
    }
    set sliderStart(value) {
        this._sliderStart = value;
    }
    get handleStyle() {
        return this._handleStyle;
    }
    set handleStyle(value) {
        this._handleStyle = value;
    }
    /* 手势操作 */
    panstart(event) {
        // event.preventDefault();
        if (!this._disabled) {
            this._startX = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            this._handleStatus = 'start';
            this._isDraging = true;
        }
    }
    panmove(event) {
        event.preventDefault();
        if (!this._disabled && this._isDraging) {
            const pos = event.changedTouches[0].clientX;
            this._value = Math.round(this.calcValueByPos(pos));
            this.left = this.calcOffset(this._value);
            if (this._oldValue !== this._value) {
                this._oldValue = this._value;
                this.onChange.emit(this._value);
            }
        }
    }
    panend(event) {
        event.preventDefault();
        if (!this._disabled && this._isDraging) {
            this._handleStatus = 'end';
            this._isDraging = false;
            const pos = event.changedTouches[0].clientX;
            this._value = Math.round(this.calcValueByPos(pos));
            this.left = this.calcOffset(this._value);
            this.onAfterChange.emit(this._value);
        }
    }
    calcValueByPos(pos) {
        const offset = pos - this._sliderStart;
        let value = this.calcValue(offset);
        if (value <= this._minBound) {
            value = this._minBound;
        }
        if (value >= this._maxBound) {
            value = this._maxBound;
        }
        const closestPoint = this.getClosestPoint(value);
        return this._step === null ? closestPoint : parseFloat(closestPoint.toFixed(this.getPrecision(this._step)));
    }
    calcValue(offset) {
        const ratio = Math.abs(Math.max(offset, 0) / this._sliderLength);
        const value = ratio * (this._max - this._min) + this._min;
        return value;
    }
    getClosestPoint(val) {
        const points = Object.keys(this._marks).map(parseFloat);
        if (this._step !== null) {
            const closestStep = Math.round((val - this._min) / this._step) * this._step + this._min;
            points.push(closestStep);
        }
        const diffs = points.map(function (point) {
            return Math.abs(val - point);
        });
        return points[diffs.indexOf(Math.min.apply(Math, this.toConsumableArray(diffs)))];
    }
    getPrecision(step) {
        const stepString = step.toString();
        let precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }
        return precision;
    }
    calcOffset(value) {
        const ratio = (value - this._min) / (this._max - this._min);
        return ratio * 100;
    }
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    isMouseTarget(event) {
        let target = event.target;
        let parentFound = false;
        while (target !== null && !parentFound) {
            if (target === this._elf.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        return parentFound;
    }
    toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            const arr2 = Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        }
    }
    ngOnInit() {
        const self = this;
        this._elf.nativeElement.addEventListener('mousedown', this.mouseDown, false);
        this._handleOffsetX = this._elf.nativeElement.getBoundingClientRect().x;
        this.left = this.calcOffset(this._value);
        this._minBound = this._minBound === undefined ? this._min : this._minBound;
        this._maxBound = this._maxBound === undefined ? this._max : this._maxBound;
    }
    ngOnDestroy() {
        document.removeEventListener('mousemove', this.mouseMove, false);
        document.removeEventListener('mouseup', this.mouseUp, false);
    }
}
SliderHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderHandle, nzm-slider-handle',
                template: "<div role=\"slider\" class=\"am-slider-handle\" [ngStyle]=\"handleStyle\" [style.left.%]=\"left\"></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SliderHandleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
SliderHandleComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    minBound: [{ type: Input }],
    maxBound: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    sliderLength: [{ type: Input }],
    sliderStart: [{ type: Input }],
    handleStyle: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    panstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['touchend', ['$event'],] }]
};

class SliderMarksComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.markArray = [];
        this._min = 0;
        this._max = 100;
        this._marks = {};
        this._included = true;
        this._className = 'am-slider-mark';
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
    }
    set min(value) {
        if (value && value <= this._max) {
            this._min = value;
        }
    }
    set max(value) {
        if (value && value >= this._min) {
            this._max = value;
        }
    }
    set marks(value) {
        this._marks = value;
    }
    set included(value) {
        this._included = value;
    }
    set upperBound(value) {
        if (value && value !== this._upperBound) {
            this._upperBound = value;
            this.setActiveCls();
        }
    }
    set lowerBound(value) {
        if (value && value !== this.lowerBound) {
            this._lowerBound = value;
            this.setActiveCls();
        }
    }
    get class() {
        return this._className;
    }
    getMarks(marksKeys) {
        this.markArray = [];
        marksKeys
            .map(parseFloat)
            .sort((a, b) => a - b)
            .map(point => {
            const markItem = {
                markLabel: '',
                point: '',
                className: {},
                style: {}
            };
            const markPoint = this._marks[point];
            const markPointIsObject = typeof markPoint === 'object';
            const markLabel = markPointIsObject ? markPoint.label : markPoint;
            if (!markLabel && markLabel !== 0) {
                return null;
            }
            const isActive = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            const markClassName = {
                [`${this._className}-text`]: true,
                [`${this._className}-text-active`]: isActive
            };
            const bottomStyle = {
                marginBottom: '-50%',
                bottom: `${((point - this._min) / this._range) * 100}%`
            };
            const leftStyle = {
                width: `${this._markWidth}%`,
                marginLeft: `${-this._markWidth / 2}%`,
                left: `${((point - this._min) / this._range) * 100}%`
            };
            const style = leftStyle;
            const markStyle = markPointIsObject ? Object.assign(Object.assign({}, style), markPoint.style) : style;
            markItem.markLabel = markLabel;
            markItem.point = point;
            markItem.className = Object.keys(markClassName).join(' ');
            markItem.style = markStyle;
            this.markArray.push(markItem);
        });
    }
    setActiveCls() {
        for (let i = 0; i < this.markArray.length; i++) {
            const point = this.markArray[i].point;
            const isActive = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            this.markArray[i].className = {
                [`${this._className}-text`]: true,
                [`${this._className}-text-active`]: isActive
            };
        }
    }
    setMarksLable() {
        for (let i = 0; i < this.markArray.length; i++) {
            const markEle = this._elf.nativeElement.getElementsByClassName(this._className + '-text')[i];
            markEle.innerHTML = this.markArray[i].markLabel;
        }
    }
    ngOnInit() {
        const marksKeys = Object.keys(this._marks);
        const marksCount = marksKeys.length;
        const unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
        this._markWidth = unit * 0.9;
        this._range = this._max - this._min;
        this.getMarks(marksKeys);
    }
    ngAfterViewInit() {
        this.setMarksLable();
    }
}
SliderMarksComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderMarks, nzm-slider-marks',
                template: "<span *ngFor=\"let item of markArray\" [ngClass]=\"item.className\" [ngStyle]=\"item.style\"> </span>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SliderMarksComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderMarksComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    marks: [{ type: Input }],
    included: [{ type: Input }],
    upperBound: [{ type: Input }],
    lowerBound: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    class: [{ type: HostBinding }]
};

class SliderStepsComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.stepArray = [];
        this._min = 0;
        this._max = 100;
        this._marks = {};
        this._included = true;
        this._dots = false;
    }
    set min(value) {
        if (value && value <= this._max) {
            this._min = value;
        }
    }
    set max(value) {
        if (value && value >= this._min) {
            this._max = value;
        }
    }
    set marks(value) {
        this._marks = value;
    }
    set step(value) {
        this._step = value;
    }
    set included(value) {
        this._included = value;
    }
    set dots(value) {
        this._dots = value;
    }
    set upperBound(value) {
        if (value !== undefined && value !== this._upperBound) {
            this._upperBound = value;
            this.setActiveCls();
        }
    }
    set lowerBound(value) {
        if (value !== undefined && value !== this.lowerBound) {
            this._lowerBound = value;
            this.setActiveCls();
        }
    }
    get class() {
        return 'am-slider-step';
    }
    calPoints() {
        const points = Object.keys(this._marks).map(parseFloat);
        if (this._dots) {
            for (let i = this._min; i <= this._max; i = i + this._step) {
                if (points.indexOf(i) < 0) {
                    points.push(i);
                }
            }
        }
        return points;
    }
    getSteps(points) {
        const range = this._max - this._min;
        this.stepArray = [];
        points.map(point => {
            const stepItem = {
                stepStyle: {},
                stepClass: {},
                point: null
            };
            const offset = `${(Math.abs(point - this._min) / range) * 100}%`;
            const isActived = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            let style = Object.assign({ left: offset }, this._dotStyle);
            if (isActived) {
                style = Object.assign(Object.assign({}, style), this._activeDotStyle);
            }
            const pointClassName = {
                [`${this.prefixCls}-dot`]: true,
                [`${this.prefixCls}-dot-active`]: isActived
            };
            stepItem.point = point;
            stepItem.stepStyle = style;
            stepItem.stepClass = pointClassName;
            this.stepArray.push(stepItem);
        });
    }
    setActiveCls() {
        for (let i = 0; i < this.stepArray.length; i++) {
            const point = this.stepArray[i].point;
            const isActived = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            this.stepArray[i].stepClass = {
                [`${this.prefixCls}-dot`]: true,
                [`${this.prefixCls}-dot-active`]: isActived
            };
        }
    }
    ngOnInit() {
        const points = this.calPoints();
        this.getSteps(points);
    }
}
SliderStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderSteps, nzm-slider-steps',
                template: "<span *ngFor=\"let item of stepArray\" [ngClass]=\"item.stepClass\" [ngStyle]=\"item.stepStyle\"> </span>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SliderStepsComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderStepsComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    marks: [{ type: Input }],
    step: [{ type: Input }],
    included: [{ type: Input }],
    dots: [{ type: Input }],
    upperBound: [{ type: Input }],
    lowerBound: [{ type: Input }],
    class: [{ type: HostBinding }]
};

class SliderTrackComponent {
    constructor(_elf, _sanitizer) {
        this._elf = _elf;
        this._sanitizer = _sanitizer;
        this.prefixCls = 'am-slider';
        this._included = true;
    }
    get className() {
        return this._className;
    }
    set className(value) {
        this._className = value;
    }
    get included() {
        return this._included;
    }
    set included(value) {
        this._included = value;
    }
    set offset(value) {
        this._offset = value;
    }
    set length(value) {
        this._length = value;
    }
    set style(value) {
        this._style = value;
    }
    ngOnChanges() {
        const positonStyle = {
            left: `${this._offset}%`,
            width: `${this._length}%`
        };
        this.elStyle = Object.assign(Object.assign({}, this._style), positonStyle);
    }
}
SliderTrackComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderTrack, nzm-slider-track',
                template: "<div *ngIf=\"included\" [ngClass]=\"className\" [ngStyle]=\"elStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SliderTrackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
SliderTrackComponent.propDecorators = {
    className: [{ type: Input }],
    included: [{ type: Input }],
    offset: [{ type: Input }],
    length: [{ type: Input }],
    style: [{ type: Input }]
};

class SliderModule {
}
SliderModule.decorators = [
    { type: NgModule, args: [{
                exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
                declarations: [
                    SliderComponent,
                    SliderHandleComponent,
                    SliderMarksComponent,
                    SliderStepsComponent,
                    SliderTrackComponent
                ],
                imports: [CommonModule]
            },] }
];

class RangeModule {
}
RangeModule.decorators = [
    { type: NgModule, args: [{
                exports: [RangeComponent],
                declarations: [RangeComponent],
                imports: [CommonModule, SliderModule]
            },] }
];

class PaginationComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.prefixCls = 'am-pagination';
        this.hasSetLocale = false;
        this._locale = {
            prevText: '',
            nextText: ''
        };
        this._unsubscribe$ = new Subject();
        this.mode = 'button';
        this.current = 1;
        this.total = 0;
        this.simple = false;
        this.disabled = false;
        this.onChange = new EventEmitter();
    }
    get locale() {
        return this._locale;
    }
    set locale(v) {
        this._locale = v;
        this.hasSetLocale = true;
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
    isTemplateRef(key) {
        return key instanceof TemplateRef;
    }
    onClick(p) {
        this.current = p;
        this.onChange.emit(p);
    }
    getNumber(p) {
        return new Array(p);
    }
    ngOnInit() {
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            if (!this.hasSetLocale) {
                this._locale = this._localeProviderService.getLocaleSubObj('Pagination');
            }
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'Pagination, nzm-pagination',
                template: "<div class=\"{{ prefixCls }} {{ prefixCls }}-align-center\">\n  <Flex *ngIf=\"mode === 'button'\">\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-prev\">\n      <a Button [inline]=\"true\" [disabled]=\"current <= 1 || disabled\" (onClick)=\"onClick(current - 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.prevText)\">\n          {{ locale.prevText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.prevText)\" [ngTemplateOutlet]=\"locale.prevText\"></ng-template>\n      </a>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap\" aria-live=\"assertive\" *ngIf=\"!simple\">\n      <span class=\"active\">{{ current }}</span\n      >/\n      <span>{{ total }}</span>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-next\">\n      <a Button [inline]=\"true\" [disabled]=\"current >= total || disabled\" (onClick)=\"onClick(current + 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.nextText)\">\n          {{ locale.nextText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.nextText)\" [ngTemplateOutlet]=\"locale.nextText\"></ng-template>\n      </a>\n    </FlexItem>\n  </Flex>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'number'\">\n    <span class=\"active\">{{ current }}</span\n    >/<span>{{ total }}</span>\n  </div>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'pointer'\">\n    <div\n      *ngFor=\"let number of getNumber(total); let i = index\"\n      class=\"{{ prefixCls }}-wrap-dot {{ current === i + 1 ? prefixCls + '-wrap-dot-active' : '' }}\"\n    >\n      <span></span>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PaginationComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
PaginationComponent.propDecorators = {
    mode: [{ type: Input }],
    current: [{ type: Input }],
    total: [{ type: Input }],
    simple: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    onChange: [{ type: Output }]
};

class PaginationModule {
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule],
                declarations: [PaginationComponent],
                exports: [PaginationComponent]
            },] }
];

class TagComponent {
    constructor() {
        this.prefixCls = 'am-tag';
        this.closed = false;
        this.wrapCls = {};
        this._small = false;
        this._closable = false;
        this._selected = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.afterClose = new EventEmitter();
    }
    get small() {
        return this._small;
    }
    set small(v) {
        this._small = v;
        this.setClassMap();
    }
    get closable() {
        return this._closable;
    }
    set closable(v) {
        this._closable = v;
        this.setClassMap();
    }
    set selected(v) {
        this._selected = v;
        this.setClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(v) {
        this._disabled = v;
        this.setClassMap();
    }
    onClick() {
        if (this._disabled) {
            return;
        }
        this._selected = !this._selected;
        this.onChange.emit(this._selected);
        this.setClassMap();
    }
    onTagClose() {
        this.onClose.emit();
        this.closed = true;
        this.afterClose.emit();
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-normal`]: !this._disabled && (!this._selected || this._small || this._closable),
            [`${this.prefixCls}-small`]: this._small,
            [`${this.prefixCls}-active`]: this._selected && !this._disabled && !this._small && !this._closable,
            [`${this.prefixCls}-disabled`]: this._disabled,
            [`${this.prefixCls}-closable`]: this._closable
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'Tag, nzm-tag',
                template: "<div *ngIf=\"!closed\" [ngClass]=\"wrapCls\" (click)=\"onClick()\">\n  <div class=\"{{ prefixCls }}-text\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"closable && !disabled && !small\"\n    role=\"button\"\n    class=\"{{ prefixCls }}-close\"\n    aria-label=\"remove tag\"\n    (click)=\"onTagClose()\"\n  >\n    <Icon aria-hidden=\"true\" [type]=\"'cross-circle'\" [size]=\"'xs'\"></Icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TagComponent.ctorParameters = () => [];
TagComponent.propDecorators = {
    small: [{ type: Input }],
    closable: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    afterClose: [{ type: Output }]
};

class TagModule {
}
TagModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule],
                declarations: [TagComponent],
                exports: [TagComponent]
            },] }
];

class MenuComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.prefixCls = 'am-menu';
        this.subMenuPrefixCls = 'am-sub-menu';
        this.radioPrefixCls = 'am-radio';
        this.multiSelectMenuBtnsCls = 'am-multi-select-btns';
        this.menuSelectContanerPrefixCls = 'am-menu-select-container';
        this.locale = {
            okText: '',
            cancelText: ''
        };
        this._data = [];
        this._unsubscribe$ = new Subject();
        this.level = 2;
        this.value = [];
        this.height = document.documentElement.clientHeight / 2;
        this.multiSelect = false;
        this.onChange = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
    }
    get data() {
        return this._data;
    }
    set data(v) {
        this._data = v;
        this.initData();
    }
    onMenuOk() {
        this.onOk.emit(this.value);
    }
    onMenuCancel() {
        this.onCancel.emit();
    }
    getNewFsv() {
        let firstValue = '';
        if (this.value && this.value.length) {
            firstValue = this.value[0];
        }
        else if (this._data && this._data.length && !this._data[0].isLeaf) {
            firstValue = this._data[0].value;
        }
        return firstValue;
    }
    onClickFirstLevelItem(dataItem) {
        this.firstLevelSelectValue = dataItem.value;
        if (dataItem.isLeaf && this.onChange) {
            this.onChange.emit([dataItem.value]);
        }
        this.initData();
    }
    onClickSubMenuItem(dataItem) {
        this.value = this.getSelectValue(dataItem);
        this.initData();
        setTimeout(() => {
            this.onChange.emit(this.value);
        }, 300);
    }
    getSelectValue(dataItem) {
        if (this.multiSelect) {
            if (this.value && this.value.length > 0) {
                if (this.level === 2 && this.value[0] !== this.firstLevelSelectValue) {
                    return [this.firstLevelSelectValue, [dataItem.value]];
                }
                else {
                    if (this.level == 1) {
                        const chosenValues = Array.from(this.value);
                        const existIndex = chosenValues.indexOf(dataItem.value);
                        if (existIndex === -1) {
                            chosenValues.push(dataItem.value);
                        }
                        else {
                            chosenValues.splice(existIndex, 1);
                        }
                        return chosenValues;
                    }
                    else {
                        const chosenValues = Array.from(this.value[1]);
                        const existIndex = chosenValues.indexOf(dataItem.value);
                        if (existIndex === -1) {
                            chosenValues.push(dataItem.value);
                        }
                        else {
                            chosenValues.splice(existIndex, 1);
                        }
                        return [this.firstLevelSelectValue, chosenValues];
                    }
                }
            }
            else {
                return this.level === 2 ? [this.firstLevelSelectValue, [dataItem.value]] : [dataItem.value];
            }
        }
        return this.level === 2 ? [this.firstLevelSelectValue, dataItem.value] : [dataItem.value];
    }
    initData() {
        this.subMenuData = this._data;
        if (this.level === 2) {
            let parent = this._data;
            if (this.firstLevelSelectValue && this.firstLevelSelectValue !== '') {
                parent = this._data.filter(dataItem => dataItem.value === this.firstLevelSelectValue);
            }
            if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                this.subMenuData = parent[0].children;
            }
            else {
                this.subMenuData = [];
            }
        }
        let subValue = (this.value && this.value.length > 0 && [...this.value]) || [];
        if (this.level === 2 && subValue.length > 1) {
            subValue.shift();
            if (this.multiSelect) {
                subValue = subValue[0];
            }
        }
        this.subSelInitItem = this.subMenuData
            .filter(dataItem => subValue.indexOf(dataItem.value) !== -1)
            .map(item => {
            return item.value;
        });
        const parentValue = this.value && this.value.length > 1 && this.level === 2 ? this.value[0] : null;
        this.showSelect = true;
        if (this.level === 2 && parentValue !== this.firstLevelSelectValue) {
            this.showSelect = false;
        }
    }
    getClass(dataItem) {
        return this.dataItemSelected(dataItem) ? this.prefixCls + '-selected' : '';
    }
    dataItemSelected(dataItem) {
        return dataItem.value === this.firstLevelSelectValue;
    }
    ngOnInit() {
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this.locale = this._localeProviderService.getLocaleSubObj('Menu');
        });
        this.firstLevelSelectValue = this.getNewFsv();
        this.heightStyle = {
            height: this.height + 'px'
        };
        this.initData();
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'Menu, nzm-menu',
                template: "<Flex class=\"{{ prefixCls }}\" [ngStyle]=\"heightStyle\" [direction]=\"'column'\" [align]=\"'stretch'\">\n  <Flex class=\"{{ menuSelectContanerPrefixCls }}\" [align]=\"'start'\">\n    <FlexItem *ngIf=\"level == 2\">\n      <List role=\"tablist\">\n        <ListItem\n          role=\"tab\"\n          *ngFor=\"let dataItem of data; let i = index\"\n          [className]=\"getClass(dataItem)\"\n          (click)=\"onClickFirstLevelItem(dataItem)\"\n        >\n          {{ dataItem.label }}\n        </ListItem>\n      </List>\n    </FlexItem>\n\n    <FlexItem role=\"tabpanel\" aria-hidden=\"false\" class=\"{{ menuSelectContanerPrefixCls }}-submenu\">\n      <SubMenu\n        [subMenuPrefixCls]=\"subMenuPrefixCls\"\n        [radioPrefixCls]=\"radioPrefixCls\"\n        [subMenuData]=\"subMenuData\"\n        [selItem]=\"subSelInitItem\"\n        [showSelect]=\"showSelect\"\n        [multiSelect]=\"multiSelect\"\n        (onSel)=\"onClickSubMenuItem($event)\"\n      >\n      </SubMenu>\n    </FlexItem>\n  </Flex>\n\n  <div *ngIf=\"multiSelect\" class=\"{{ multiSelectMenuBtnsCls }}\">\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" (onClick)=\"onMenuCancel()\">\n      {{ locale.cancelText }}\n    </a>\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" [type]=\"'primary'\" (onClick)=\"onMenuOk()\">\n      {{ locale.okText }}\n    </a>\n  </div>\n</Flex>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
MenuComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
MenuComponent.propDecorators = {
    data: [{ type: Input }],
    level: [{ type: Input }],
    value: [{ type: Input }],
    height: [{ type: Input }],
    multiSelect: [{ type: Input }],
    onChange: [{ type: Output }],
    onOk: [{ type: Output }],
    onCancel: [{ type: Output }]
};

class SubMenuComponent {
    constructor() {
        this.prefixCls = 'am-sub-menu';
        this.onSel = new EventEmitter();
    }
    get subMenuPrefixCls() {
        return this._subMenuPrefixCls;
    }
    set subMenuPrefixCls(v) {
        this._subMenuPrefixCls = v;
    }
    get subMenuData() {
        return this._subMenuData;
    }
    set subMenuData(v) {
        this._subMenuData = v;
    }
    get multiSelect() {
        return this._multiSelect;
    }
    set multiSelect(v) {
        this._multiSelect = v;
    }
    onClick(dataItem) {
        this.onSel.emit(dataItem);
    }
    selected(dataItem) {
        return this.showSelect && (this.selItem.length > 0 && this.selItem.indexOf(dataItem.value) !== -1);
    }
    getClass(dataItem) {
        let name = this.radioPrefixCls + '-item ';
        name += this.selected(dataItem) ? this._subMenuPrefixCls + '-item-selected' : '';
        name += dataItem.disabled ? this._subMenuPrefixCls + '-item-disabled' : '';
        return name;
    }
    ngOnChanges(changes) {
        this._subMenuData.map(item => {
            item.checked = this.selected(item);
        });
    }
}
SubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'SubMenu, nzm-sub-menu',
                template: "<List class=\"{{ subMenuPrefixCls }}\" style=\"padding: 0\">\n  <ListItem\n    *ngFor=\"let dataItem of subMenuData; let i = index\"\n    key=\"i\"\n    [className]=\"getClass(dataItem)\"\n    [extra]=\"extra\"\n  >\n    {{ dataItem.label }}\n\n    <ng-template #extra>\n      <label\n        Radio\n        *ngIf=\"!multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n      <label\n        Checkbox\n        *ngIf=\"multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n    </ng-template>\n  </ListItem>\n</List>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SubMenuComponent.ctorParameters = () => [];
SubMenuComponent.propDecorators = {
    onSel: [{ type: Output }],
    radioPrefixCls: [{ type: Input }],
    showSelect: [{ type: Input }],
    selItem: [{ type: Input }],
    subMenuPrefixCls: [{ type: Input }],
    subMenuData: [{ type: Input }],
    multiSelect: [{ type: Input }]
};

class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FlexModule,
                    ListModule,
                    RadioModule,
                    CheckboxModule,
                    ButtonModule,
                    LocaleProviderModule,
                    FormsModule
                ],
                exports: [MenuComponent, SubMenuComponent],
                declarations: [MenuComponent, SubMenuComponent]
            },] }
];

class DrawerComponent {
    constructor(_el) {
        this._el = _el;
        this.prefixCls = 'am-drawer';
        this.sidebarStyleFinal = {};
        this.contentStyleFinal = {};
        this.overlayStyleFinal = {};
        this.sidebarWidth = 0;
        this.sidebarHeight = 0;
        this.sidebarTop = 0;
        this.dragHandleTop = 0;
        this.touchIdentifier = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchCurrentX = null;
        this.touchCurrentY = null;
        this.touchSupported = typeof window === 'object' && 'ontouchstart' in window;
        this._docked = false;
        this._open = false;
        this._position = 'left';
        this.sidebarStyle = {};
        this.contentStyle = {};
        this.overlayStyle = {};
        this.dragHandleStyle = {};
        this.transitions = true;
        this.touch = true;
        this.enableDragHandle = false;
        this.dragToggleDistance = 30;
        this.onOpenChange = new EventEmitter();
        this.am = true;
        this.left = this._position === 'left';
        this.right = this._position === 'right';
        this.top = this._position == 'top';
        this.bottom = this._position == 'bottom';
        this.dockedCls = this._docked;
        this.openCls = this._open;
    }
    get docked() {
        return this._docked;
    }
    set docked(v) {
        this._docked = v;
        this.dockedCls = v;
    }
    get open() {
        return this._open;
    }
    set open(v) {
        this._open = v;
        this.openCls = v;
    }
    set position(v) {
        this._position = v;
        this.right = false;
        this.left = false;
        this.top = false;
        this.bottom = false;
        switch (v) {
            case 'right':
                this.right = true;
                break;
            case 'left':
                this.left = true;
                break;
            case 'top':
                this.top = true;
                break;
            case 'bottom':
                this.bottom = true;
                break;
        }
    }
    onOverlayClicked() {
        if (this._open) {
            this.onOpenChange.emit(true);
        }
    }
    isTouching() {
        return this.touchIdentifier !== null;
    }
    onTouchStart(event) {
        const touch = event.changedTouches[0];
        this.touchIdentifier = touch.identifier;
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.touchCurrentX = touch.clientX;
        this.touchCurrentY = touch.clientY;
    }
    onTouchMove(ev) {
        for (let ind = 0; ind < ev.changedTouches.length; ind++) {
            if (ev.changedTouches[ind].identifier === this.touchIdentifier) {
                this.touchCurrentX = ev.changedTouches[ind].clientX;
                this.touchCurrentY = ev.changedTouches[ind].clientY;
                break;
            }
        }
        this.update();
    }
    onTouchEnd() {
        const touchWidth = this.touchSidebarWidth();
        if (!this._open && touchWidth > this.dragToggleDistance) {
            this.onOpenChange.emit(!this._open);
        }
        const touchHeight = this.touchSidebarHeight();
        if (!this._open && touchHeight > this.dragToggleDistance) {
            this.onOpenChange.emit(!this._open);
        }
        this.touchIdentifier = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchCurrentX = null;
        this.touchCurrentY = null;
        this.update();
    }
    saveSidebarSize() {
        const sidebar = this._el.nativeElement.querySelector('#sidebar');
        const dragHandle = this._el.nativeElement.querySelector('#dragHandle');
        const width = sidebar.offsetWidth;
        const height = sidebar.offsetHeight;
        const sidebarTop = this.getOffset(sidebar).top;
        const dragHandleTop = this.getOffset(dragHandle).top;
        if (width !== this.sidebarWidth) {
            this.sidebarWidth = width;
        }
        if (height !== this.sidebarHeight) {
            this.sidebarHeight = height;
        }
        if (sidebarTop !== this.sidebarTop) {
            this.sidebarTop = sidebarTop;
        }
        if (dragHandleTop !== this.dragHandleTop) {
            this.dragHandleTop = dragHandleTop;
        }
    }
    touchSidebarWidth() {
        if (this._position === 'right') {
            return Math.min(window.innerWidth - this.touchCurrentX, this.sidebarWidth);
        }
        if (this._position === 'left') {
            return Math.min(this.touchCurrentX, this.sidebarWidth);
        }
    }
    touchSidebarHeight() {
        if (this._position === 'bottom') {
            return Math.min(this._el.nativeElement.offsetHeight - this.touchCurrentY + this._el.nativeElement.offsetTop, this.sidebarHeight);
        }
        if (this._position === 'top') {
            return Math.min(this.touchCurrentY - this.dragHandleTop, this.sidebarHeight);
        }
    }
    renderStyle({ sidebarStyle, isTouching, overlayStyle, contentStyle }) {
        if (this._position === 'right' || this._position === 'left') {
            sidebarStyle.transform = `translateX(0%)`;
            sidebarStyle.WebkitTransform = `translateX(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarWidth() / this.sidebarWidth;
                // slide open to what we dragged
                if (this._position === 'right') {
                    sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`;
                }
                if (this._position === 'left') {
                    sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`;
                }
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this._position] = `${this.sidebarWidth}px`;
            }
        }
        if (this._position === 'top' || this._position === 'bottom') {
            sidebarStyle.transform = `translateY(0%)`;
            sidebarStyle.WebkitTransform = `translateY(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarHeight() / this.sidebarHeight;
                if (this._position === 'bottom') {
                    sidebarStyle.transform = `translateY(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(${(1 - percentage) * 100}%)`;
                }
                if (this._position === 'top') {
                    sidebarStyle.transform = `translateY(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(-${(1 - percentage) * 100}%)`;
                }
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this._position] = `${this.sidebarHeight}px`;
            }
        }
    }
    update() {
        const sidebarStyle = Object.assign({}, this.sidebarStyle);
        const contentStyle = Object.assign({}, this.contentStyle);
        const overlayStyle = Object.assign({}, this.overlayStyle);
        if (this.isTouching()) {
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: true,
                contentStyle: undefined,
                overlayStyle: overlayStyle
            });
        }
        else if (this._docked) {
            this.dockedCls = true;
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: undefined,
                contentStyle: contentStyle,
                overlayStyle: undefined
            });
        }
        else if (this._open) {
            this.openCls = true;
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: undefined,
                contentStyle: undefined,
                overlayStyle: undefined
            });
            overlayStyle.opacity = 1;
            overlayStyle.visibility = 'visible';
        }
        if (this.isTouching() || !this.transitions) {
            sidebarStyle.transition = 'none';
            sidebarStyle.WebkitTransition = 'none';
            contentStyle.transition = 'none';
            overlayStyle.transition = 'none';
        }
        this.sidebarStyleFinal = sidebarStyle;
        this.contentStyleFinal = contentStyle;
        this.overlayStyleFinal = overlayStyle;
    }
    getOffset(ele) {
        let el = ele;
        let _x = 0;
        let _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
    ngAfterViewChecked() {
        if (!this.isTouching()) {
            this.saveSidebarSize();
        }
    }
    ngOnChanges() {
        this.update();
    }
}
DrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'Drawer, nzm-drawer',
                template: "<div class=\"am-drawer-sidebar\" [ngStyle]=\"sidebarStyleFinal\" id=\"sidebar\">\n  <ng-template [ngTemplateOutlet]=\"sidebar\"></ng-template>\n</div>\n<div\n  role=\"presentation\"\n  class=\"{{ prefixCls }}-overlay\"\n  ref=\"overlay\"\n  [ngStyle]=\"overlayStyleFinal\"\n  (click)=\"onOverlayClicked()\"\n></div>\n<div class=\"{{ prefixCls }}-content\" [ngStyle]=\"contentStyleFinal\" ref=\"content\">\n  <div\n    *ngIf=\"touch && touchSupported && !open && !docked && enableDragHandle\"\n    id=\"dragHandle\"\n    class=\"{{ prefixCls }}-draghandle\"\n    [ngStyle]=\"dragHandleStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (touchcancle)=\"onTouchEnd()\"\n  ></div>\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DrawerComponent.ctorParameters = () => [
    { type: ElementRef }
];
DrawerComponent.propDecorators = {
    sidebar: [{ type: Input }],
    sidebarStyle: [{ type: Input }],
    contentStyle: [{ type: Input }],
    overlayStyle: [{ type: Input }],
    dragHandleStyle: [{ type: Input }],
    transitions: [{ type: Input }],
    touch: [{ type: Input }],
    enableDragHandle: [{ type: Input }],
    dragToggleDistance: [{ type: Input }],
    docked: [{ type: Input }],
    open: [{ type: Input }],
    position: [{ type: Input }],
    onOpenChange: [{ type: Output }],
    am: [{ type: HostBinding, args: ['class.am-drawer',] }],
    left: [{ type: HostBinding, args: ['class.am-drawer-left',] }],
    right: [{ type: HostBinding, args: ['class.am-drawer-right',] }],
    top: [{ type: HostBinding, args: ['class.am-drawer-top',] }],
    bottom: [{ type: HostBinding, args: ['class.am-drawer-bottom',] }],
    dockedCls: [{ type: HostBinding, args: ['class.am-drawer-docked',] }],
    openCls: [{ type: HostBinding, args: ['class.am-drawer-open',] }]
};

class DrawerModule {
}
DrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DrawerComponent],
                exports: [DrawerComponent]
            },] }
];

class SwipeActionComponent {
    constructor() {
        this.prefixCls = 'am-swipe';
        this.wrapCls = {};
        this._swiping = false;
        this._openedLeft = false;
        this._openedRight = false;
        this.left = [];
        this.right = [];
        this.autoClose = false;
        this.disabled = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onCloseSwipe = ev => {
            if (!(this._openedLeft || this._openedRight)) {
                return;
            }
            const pNode = ev.target.closest(`.${this.prefixCls}-actions`);
            if (!pNode) {
                this.close();
            }
        };
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-swiping`]: this._swiping
        };
    }
    close() {
        if (this._openedLeft || this._openedRight) {
            this.onClose.emit();
        }
        this.setBtnStyle(0);
        this._openedLeft = false;
        this._openedRight = false;
    }
    setBtnStyle(value) {
        if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
            this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
            this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        }
        const limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
        const contentLeft = this.getContentEasing(value, limit);
        this.content.nativeElement.style.left = `${contentLeft}px`;
        this.cover.nativeElement.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        this.cover.nativeElement.style.left = `${contentLeft}px`;
    }
    getContentEasing(value, limit) {
        return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
    }
    onTouchStart(e) {
        this._startX = e.changedTouches[0].clientX;
        this._swiping = true;
    }
    onTouchMove(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        this._needShowRight = deltaX < -5 && this.right.length > 0;
        this._needShowLeft = deltaX > 5 && this.left.length > 0;
        if (this.leftBtnRef) {
            this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? 'hidden' : 'visible';
        }
        if (this.rightBtnRef) {
            this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? 'hidden' : 'visible';
        }
        this.setBtnStyle(deltaX);
    }
    onTouchEnd(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        const needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
        const needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;
        if (needOpenRight) {
            this.doOpenRight();
        }
        else if (needOpenLeft) {
            this.doOpenLeft();
        }
        else {
            this.close();
        }
        this._swiping = false;
        this._needShowLeft = false;
        this._needShowRight = false;
    }
    doOpenLeft() {
        this.open(this._btnsLeftWidth, true, false);
    }
    doOpenRight() {
        this.open(-this._btnsRightWidth, false, true);
    }
    onBtnClick(ev, btn) {
        const onPress = btn.onPress;
        if (onPress) {
            onPress(ev);
        }
        if (this.autoClose) {
            this.close();
        }
    }
    open(value, openedLeft, openedRight) {
        this.onOpen.emit();
        this._openedLeft = openedLeft;
        this._openedRight = openedRight;
        this.setBtnStyle(value);
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
        this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        document.body.addEventListener('touchstart', this.onCloseSwipe, true);
    }
    ngOnDestroy() {
        document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
    }
}
SwipeActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'SwipeAction, nzm-swipe-action',
                template: "<div *ngIf=\"(left.length != 0 || right.length != 0) && !disabled\" [ngClass]=\"wrapCls\">\n  <div class=\"{{ prefixCls }}-cover\" #coverRef></div>\n  <div *ngIf=\"left && left.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-left\" #leftBtnRef>\n    <div\n      *ngFor=\"let btn of left\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"right && right.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-right\" #rightBtnRef>\n    <div\n      *ngFor=\"let btn of right\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"{{ prefixCls }}-content\"\n    #contentRef\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  </div>\n</div>\n<div *ngIf=\"!((left.length != 0 || right.length != 0) && !disabled)\" class=\"{{ prefixCls }}-content\" #contentRef>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SwipeActionComponent.ctorParameters = () => [];
SwipeActionComponent.propDecorators = {
    leftBtnRef: [{ type: ViewChild, args: ['leftBtnRef',] }],
    rightBtnRef: [{ type: ViewChild, args: ['rightBtnRef',] }],
    content: [{ type: ViewChild, args: ['contentRef',] }],
    cover: [{ type: ViewChild, args: ['coverRef',] }],
    left: [{ type: Input }],
    right: [{ type: Input }],
    autoClose: [{ type: Input }],
    disabled: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }]
};

class SwipeActionModule {
}
SwipeActionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [SwipeActionComponent],
                declarations: [SwipeActionComponent],
                providers: []
            },] }
];

class PullToRefreshComponent {
    constructor(ele) {
        this.ele = ele;
        this.transtionCls = {};
        this.style = {
            '-webkit-transform': 'translate3d( 0, 0, 0 )',
            transform: 'translate3d( 0, 0, 0 )'
        };
        this.state = {
            currentState: 'deactivate',
            drag: false
        };
        this._headerIndicator = {
            activate: '松开立即刷新',
            deactivate: '下拉可以刷新',
            release: '刷新中。。。',
            finish: '完成刷新'
        };
        this._footerIndicator = {
            activate: '松开立即刷新',
            deactivate: '上拉可以刷新',
            release: '刷新中。。。',
            finish: '完成刷新'
        };
        this._startTime = 0;
        this._endTime = 0;
        this._endReach = false;
        this._direction = '';
        this._clientHeight = 0;
        this._currentContentHeight = 0;
        this._lastContentOffset = 0;
        this.distanceToRefresh = 25; //触发刷新距离
        this.damping = 100; // 下拉的最大距离
        this.endReachedRefresh = false;
        this.refreshing = false;
        this.onRefresh = new EventEmitter();
        this.refresh = true;
        this.container = true;
        this.refreshUp = this._direction === 'up' || this._direction === '';
        this.refreshDown = this._direction === 'down' || this._direction === '';
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
        this.refreshUp = this._direction === 'up' || this._direction === '';
        this.refreshDown = this._direction === 'down' || this._direction === '';
    }
    get headerIndicator() {
        return this._headerIndicator;
    }
    set headerIndicator(value) {
        Object.assign(this._headerIndicator, value);
    }
    get footerIndicator() {
        return this._footerIndicator;
    }
    set footerIndicator(value) {
        Object.assign(this._footerIndicator, value);
    }
    touchstart(e) {
        this._startTime = Date.now();
        if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
            if (this.ele.nativeElement.scrollTop > 0) {
                this.startY = undefined;
                return;
            }
            this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
            this.state.drag = undefined;
        }
        else {
            this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
            this._clientHeight = this._pullToRefresh.element.nativeElement.clientHeight;
            this._currentContentHeight = this.ele.nativeElement.clientHeight;
        }
        this.transtionCls = '';
    }
    touchmove(e) {
        if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
            if (this.ele.nativeElement.scrollTop > 0) {
                return;
            }
            let distanceY = e.changedTouches[0].clientY - this.startY;
            this.state.drag = distanceY >= 0;
            if (this.state.drag) {
                // 禁止滚动
                if (e.cancelable) {
                    e.preventDefault();
                }
            }
            else {
                return;
            }
            if (distanceY > this.damping) {
                //当超过设定阈值是，缓慢增加
                distanceY = (distanceY / (distanceY + this.damping)) * this.damping * 2;
            }
            else if (distanceY < 0) {
                distanceY = 0;
            }
            if (distanceY > this.distanceToRefresh) {
                this.state.currentState = 'activate';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            this.style = {
                '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
                transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
            };
        }
        else {
            let distanceY = e.changedTouches[0].clientY - this.startY;
            //向上拉动的时候，如果当前窗口内容没有滚到最后，则不实现拖动的动作；向下滚动不实现拖动动作
            if (Math.abs(this._lastContentOffset) < this._clientHeight - this._currentContentHeight - this.distanceToRefresh ||
                distanceY > 0) {
                // 滚动
                this.state.drag = false;
            }
            else {
                // 上拉
                this.state.drag = true;
            }
            if (this.state.drag) {
                // 禁止滚动
                if (e.cancelable) {
                    e.preventDefault();
                }
            }
            else {
                return;
            }
            //如果滑动到底部了，滑动距离随着拉动的距离增加缓慢增加
            distanceY = -(distanceY / (distanceY - this.damping)) * this.damping;
            if (Math.abs(distanceY) > this.distanceToRefresh) {
                this.state.currentState = 'activate';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            this.style = {
                '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
                transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
            };
        }
    }
    touchend(e) {
        if (!this.startY || this.state.drag === false) {
            return;
        }
        const distanceY = e.changedTouches[0].clientY - this.startY;
        if (Math.abs(distanceY) >= this.distanceToRefresh) {
            this.state.currentState = 'release';
            if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
                this.translateY(this.distanceToRefresh + 1);
            }
            else {
                this.translateY(-this.distanceToRefresh - 1);
            }
            if (this._ngModelOnChange) {
                this._ngModelOnChange(this.state);
            }
            setTimeout(() => {
                this.state.currentState = 'finish';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
                if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
                    this.onRefresh.emit('down');
                }
                else {
                    this.translateY(-this.distanceToRefresh - 1);
                    this.onRefresh.emit('up');
                }
                setTimeout(() => {
                    this.state.currentState = 'deactivate';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                    this.translateY(0);
                }, 0);
            }, 500);
        }
        else {
            this.translateY(0);
        }
    }
    touchcancel() {
        this.translateY(0);
    }
    scroll(evt) {
        this._endTime = Date.now();
        const contentOffset = evt.target.scrollTop;
        this._lastContentOffset = contentOffset;
        if (this._direction === '') {
            if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight === evt.target.scrollHeight) {
                setTimeout(() => {
                    this._endReach = true;
                }, 100);
            }
            else {
                this._endReach = false;
            }
        }
        if (!this.endReachedRefresh || this._direction !== 'down') {
            return;
        }
        if (contentOffset > 0 &&
            evt.target.scrollTop + this.ele.nativeElement.clientHeight > evt.target.scrollHeight - this.distanceToRefresh &&
            this._endTime - this._startTime >= 100) {
            this._startTime = this._endTime;
            if (this.refreshing) {
                this.state.currentState = 'release';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            setTimeout(() => {
                if (this.endReachedRefresh) {
                    this.onRefresh.emit('endReachedRefresh');
                }
                if (this.refreshing) {
                    this.state.currentState = 'finish';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                }
            }, 500);
        }
        else {
            setTimeout(() => {
                if (this.refreshing) {
                    this.state.currentState = 'finish';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                }
            }, 500);
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    translateY(distanceY) {
        this.transtionCls = 'am-pull-to-refresh-transition';
        this.style = {
            '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
            transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
        };
    }
    writeValue(value) {
        if (value !== null) {
            this.state = value;
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
PullToRefreshComponent.decorators = [
    { type: Component, args: [{
                selector: 'PullToRefresh, nzm-pull-to-refresh',
                template: "<div class=\"am-pull-to-refresh-content-wrapper\">\n  <div class=\"am-pull-to-refresh-content\" [ngClass]=\"transtionCls\" [ngStyle]=\"style\">\n    <div *ngIf=\"refreshDown\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(headerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"headerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(headerIndicator[state.currentState])\">{{\n        headerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n    <div #pullToRefresh>\n      <ng-content></ng-content>\n      <div\n        *ngIf=\"direction === 'down' && endReachedRefresh\"\n        class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\"\n      >\n        <ng-template\n          *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n          [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n        ></ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n          footerIndicator[state.currentState]\n        }}</ng-container>\n      </div>\n    </div>\n    <div *ngIf=\"refreshUp\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n        footerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PullToRefreshComponent),
                        multi: true
                    }
                ]
            },] }
];
PullToRefreshComponent.ctorParameters = () => [
    { type: ElementRef }
];
PullToRefreshComponent.propDecorators = {
    _pullToRefresh: [{ type: ViewChild, args: ['pullToRefresh', { read: ViewContainerRef, static: true },] }],
    distanceToRefresh: [{ type: Input }],
    damping: [{ type: Input }],
    endReachedRefresh: [{ type: Input }],
    refreshing: [{ type: Input }],
    direction: [{ type: Input }],
    headerIndicator: [{ type: Input }],
    footerIndicator: [{ type: Input }],
    onRefresh: [{ type: Output }],
    refresh: [{ type: HostBinding, args: ['class.am-pull-to-refresh',] }],
    container: [{ type: HostBinding, args: ['class.super-container',] }],
    refreshUp: [{ type: HostBinding, args: ['class.am-pull-to-refresh-up',] }],
    refreshDown: [{ type: HostBinding, args: ['class.am-pull-to-refresh-down',] }],
    touchstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    touchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
    touchend: [{ type: HostListener, args: ['touchend', ['$event'],] }],
    touchcancel: [{ type: HostListener, args: ['touchcancel',] }],
    scroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};

class PullToRefreshModule {
}
PullToRefreshModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
                exports: [PullToRefreshComponent],
                declarations: [PullToRefreshComponent]
            },] }
];

class NgZorroAntdMobileModule {
    static forRoot() {
        return {
            ngModule: NgZorroAntdMobileModule
        };
    }
}
NgZorroAntdMobileModule.decorators = [
    { type: NgModule, args: [{
                providers: [],
                exports: [
                    ActivityIndicatorModule,
                    CardModule,
                    TabsModule,
                    TabBarModule,
                    ButtonModule,
                    SwitchModule,
                    SearchBarModule,
                    StepperModule,
                    StepsModule,
                    CheckboxModule,
                    ProgressModule,
                    SegmentedControlModule,
                    BadgeModule,
                    CarouselModule,
                    ActionSheetModule,
                    AccordionModule,
                    NoticeBarModule,
                    IconModule,
                    ToastModule,
                    RadioModule,
                    ModalModule,
                    PopoverModule,
                    PopoverItemModule,
                    NavBarModule,
                    ListModule,
                    CalendarModule,
                    InputItemModule,
                    FlexModule,
                    GridModule,
                    RangeModule,
                    SliderModule,
                    TextareaItemModule,
                    NgZorroAntdMobilePipesModule,
                    PickerModule,
                    PickerViewModule,
                    ImagePickerModule,
                    ResultModule,
                    WhiteSpaceModule,
                    WingBlankModule,
                    LocaleProviderModule,
                    NgZorroAntdMobilePipesModule,
                    PaginationModule,
                    TagModule,
                    MenuModule,
                    DatePickerModule,
                    DatePickerViewModule,
                    DrawerModule,
                    PullToRefreshModule,
                    SwipeActionModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionGroupComponent, AccordionModule, AccordionService, Action, ActionSheetService as ActionSheet, ActionSheetComponent, ActionSheetModule, ActionSheetOptions, ActionSheetRef, ActionSheetService, ActionSheetWithOptions, ActivityIndicatorComponent, ActivityIndicatorModule, AgreeItemComponent, AlertOptions, BadgeComponent, BadgeModule, BriefComponent, ButtonComponent, ButtonModule, CalendarComponent, CalendarConfirmPanelComponent, CalendarDatePickerComponent, CalendarHeaderComponent, CalendarModule, CalendarShortcutPanelComponent, CalendarSingleMonthComponent, CalendarTimePickerComponent, CalendarWeekPanelComponent, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, CardModule, CarouselComponent, CarouselModule, CarouselSlideComponent, CheckboxComponent, CheckboxItemComponent, CheckboxModule, CustomInputComponent, CustomInputService, CustomKeyboardComponent, DateModels, DatePickerComponent, DatePickerDirective, DatePickerModule, DatePickerOptions, DatePickerViewComponent, DatePickerViewModule, DefaultTabBarComponent, DotIndicatorComponent, DrawerComponent, DrawerModule, FlexComponent, FlexItemComponent, FlexModule, GridComponent, GridModule, IconComponent, IconModule, ImagePickerComponent, ImagePickerModule, InputItemComponent, InputItemModule, LOCAL_PROVIDER_TOKEN, ListComponent, ListItemComponent, ListModule, LocaleProviderModule, LocaleProviderPipe, LocaleProviderService, MenuComponent, MenuModule, ModalService as Modal, ModalBaseOptions, ModalComponent, ModalModule, ModalOptions, ModalRef, ModalService, ModalServiceComponent, NavBarComponent, NavBarModule, NgZorroAntdMobileModule, NgZorroAntdMobilePipesModule, NoticeBarComponent, NoticeBarModule, PaginationComponent, PaginationModule, PickerService as Picker, PickerComponent, PickerDirective, PickerModule, PickerOptions, PickerRef, PickerService, PickerViewComponent, PickerViewModule, PopoverComponent, PopoverComponentOptions, PopoverDirective, PopoverItemComponent, PopoverItemModule, PopoverModule, PopoverOptions, PopoverOptionsFactory, ProgressComponent, ProgressModule, PullToRefreshComponent, PullToRefreshModule, RadioComponent, RadioItemComponent, RadioItemGroupComponent, RadioModule, RangeComponent, RangeModule, ResultComponent, ResultModule, SafeHTMLPipe, SearchBarComponent, SearchBarModule, SegmentedControlComponent, SegmentedControlModule, ShareActionSheetWithOptions, ShareOption, SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderModule, SliderStepsComponent, SliderTrackComponent, StepComponent, StepDirectionEnum, StepStatusEnum, StepperComponent, StepperModule, StepsComponent, StepsModule, SubMenuComponent, SwipeActionComponent, SwipeActionModule, SwitchComponent, SwitchModule, TabBarComponent, TabBarItemComponent, TabBarModule, TabPaneBodyComponent, TabPaneComponent, TabsComponent, TabsModule, TagComponent, TagModule, TextareaItemComponent, TextareaItemModule, ToastService as Toast, ToastComponent, ToastModule, ToastOptions, ToastService, WhiteSpaceComponent, WhiteSpaceModule, WingBlankComponent, WingBlankModule, da_DK, en_US, formatDate, mergeDateTime, ru_RU, sv_SE, zh_CN, RADIO_ITEM_GROUP_VALUE_ACCESSOR as ɵa, NZ_BUTTON_DIRECTIVES as ɵb, LOCALE_PROVIDER_SERVICE_FACTORY as ɵc, LOCALE_PROVIDER_SERVICE_PROVIDER as ɵd, IconHandler as ɵe, TouchFeedbackModule as ɵf, TouchFeedbackDirective as ɵg, PopupService as ɵh, CalendarDatePickerBaseComponent as ɵi };
//# sourceMappingURL=ng-zorro-antd-mobile.js.map
