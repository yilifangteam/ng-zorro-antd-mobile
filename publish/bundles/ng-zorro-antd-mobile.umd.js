(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/animations'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('@angular/cdk/observers')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd-mobile', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/animations', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/platform-browser', '@angular/cdk/observers'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-zorro-antd-mobile'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.animations, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.platformBrowser, global.ng.cdk.observers));
}(this, (function (exports, i0, common, forms, rxjs, operators, animations, i2, portal, platformBrowser, observers) { 'use strict';

    var ActivityIndicatorComponent = /** @class */ (function () {
        function ActivityIndicatorComponent() {
            this.prefixCls = 'am-activity-indicator';
            this.spinnerClass = {};
            this._size = 'small';
            this._toast = false;
            this._animating = true;
            this.clsActIndicator = true;
        }
        Object.defineProperty(ActivityIndicatorComponent.prototype, "animating", {
            get: function () {
                return this._animating;
            },
            set: function (v) {
                this._animating = v;
                this.setClass();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivityIndicatorComponent.prototype, "size", {
            set: function (v) {
                this._size = v;
                this.setClass();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivityIndicatorComponent.prototype, "toast", {
            get: function () {
                return this._toast;
            },
            set: function (v) {
                this._toast = v;
                this.setClass();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivityIndicatorComponent.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (v) {
                this._text = v;
            },
            enumerable: false,
            configurable: true
        });
        ActivityIndicatorComponent.prototype.setClass = function () {
            var _a;
            if (this._animating) {
                this.clsActIndicator = true;
                this.clsActIndicatorToast = !!this._toast;
                this.clsActIndicatorLg = this._size === 'large';
                this.clsActIndicatorSm = this._size === 'small';
                this.spinnerClass = (_a = {},
                    _a[this.prefixCls + "-spinner"] = true,
                    _a[this.prefixCls + "-spinner-lg"] = !!this._toast || this._size === 'large',
                    _a);
            }
            else {
                this.clsActIndicator = false;
                this.clsActIndicatorLg = false;
                this.clsActIndicatorSm = false;
                this.clsActIndicatorToast = false;
            }
        };
        ActivityIndicatorComponent.prototype.ngOnInit = function () {
            this.setClass();
        };
        return ActivityIndicatorComponent;
    }());
    ActivityIndicatorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ActivityIndicator , nzm-ctivity-indicator',
                    template: "<div *ngIf=\"animating && toast && text && text.length > 0\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-hidden=\"'true'\"></span>\n    <span class=\"{{ prefixCls }}-toast\">{{ text }}</span>\n  </div>\n</div>\n<div *ngIf=\"animating && toast && !text\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-label=\"'Loading'\"></span>\n  </div>\n</div>\n<div *ngIf=\"animating && !toast && text && text.length > 0\">\n  <span [ngClass]=\"spinnerClass\" aria-hidden=\"true\"></span>\n  <span class=\"{{ prefixCls }}-tip\">{{ text }}</span>\n</div>\n<div *ngIf=\"animating && !toast && !text\">\n  <span [ngClass]=\"spinnerClass\" aria-label=\"'loading'\"></span>\n</div>\n"
                },] }
    ];
    ActivityIndicatorComponent.ctorParameters = function () { return []; };
    ActivityIndicatorComponent.propDecorators = {
        animating: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        toast: [{ type: i0.Input }],
        text: [{ type: i0.Input }],
        clsActIndicator: [{ type: i0.HostBinding, args: ['class.am-activity-indicator',] }],
        clsActIndicatorToast: [{ type: i0.HostBinding, args: ['class.am-activity-indicator-toast',] }],
        clsActIndicatorLg: [{ type: i0.HostBinding, args: ['class.am-activity-indicator-lg',] }],
        clsActIndicatorSm: [{ type: i0.HostBinding, args: ['class.am-activity-indicator-sm',] }]
    };

    var ActivityIndicatorModule = /** @class */ (function () {
        function ActivityIndicatorModule() {
        }
        return ActivityIndicatorModule;
    }());
    ActivityIndicatorModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [ActivityIndicatorComponent],
                    declarations: [ActivityIndicatorComponent],
                    imports: [common.CommonModule, forms.FormsModule]
                },] }
    ];

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.full = false;
            this.cardWrapper = true;
        }
        Object.defineProperty(CardComponent.prototype, "cardFull", {
            get: function () {
                return this.full;
            },
            enumerable: false,
            configurable: true
        });
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Card, nzm-card',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        full: [{ type: i0.Input }],
        cardWrapper: [{ type: i0.HostBinding, args: ['class.am-card',] }],
        cardFull: [{ type: i0.HostBinding, args: ['class.am-card-full',] }]
    };

    var CardHeaderComponent = /** @class */ (function () {
        function CardHeaderComponent() {
            this.prefixCls = 'am-card-header';
            this.thumb = null;
            this.thumbStyle = null;
            this.title = null;
            this.extra = null;
            this.cardBodyWrapper = true;
        }
        CardHeaderComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return CardHeaderComponent;
    }());
    CardHeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CardHeader, nzm-card-header',
                    template: "<div class=\"{{ prefixCls }}-content\">\n  <img *ngIf=\"thumb && !isTemplateRef(thumb)\" src=\"{{ thumb }}\" [ngStyle]=\"thumbStyle\" />\n  <ng-container *ngIf=\"thumb && isTemplateRef(thumb)\" [ngTemplateOutlet]=\"thumb\"></ng-container>\n  <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CardHeaderComponent.ctorParameters = function () { return []; };
    CardHeaderComponent.propDecorators = {
        thumb: [{ type: i0.Input }],
        thumbStyle: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        extra: [{ type: i0.Input }],
        cardBodyWrapper: [{ type: i0.HostBinding, args: ['class.am-card-header',] }]
    };

    var CardBodyComponent = /** @class */ (function () {
        function CardBodyComponent() {
            this.cardBodyWrapper = true;
        }
        return CardBodyComponent;
    }());
    CardBodyComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CardBody, nzm-card-body',
                    template: "\n    <ng-content></ng-content>\n  ",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CardBodyComponent.ctorParameters = function () { return []; };
    CardBodyComponent.propDecorators = {
        cardBodyWrapper: [{ type: i0.HostBinding, args: ['class.am-card-body',] }]
    };

    var CardFooterComponent = /** @class */ (function () {
        function CardFooterComponent() {
            this.prefixCls = 'am-card-footer';
            this.content = null;
            this.extra = null;
            this.cardFooterWrapper = true;
        }
        CardFooterComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return CardFooterComponent;
    }());
    CardFooterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CardFooter, nzm-card-footer',
                    template: "<div class=\"{{ prefixCls }}-content\">\n  <ng-container *ngIf=\"!isTemplateRef(content); else contentTemplate\">{{ content }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #contentTemplate>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CardFooterComponent.ctorParameters = function () { return []; };
    CardFooterComponent.propDecorators = {
        content: [{ type: i0.Input }],
        extra: [{ type: i0.Input }],
        cardFooterWrapper: [{ type: i0.HostBinding, args: ['class.am-card-footer',] }]
    };

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
                    exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
                },] }
    ];

    var BadgeComponent = /** @class */ (function () {
        function BadgeComponent(_ref, render) {
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
        Object.defineProperty(BadgeComponent.prototype, "size", {
            set: function (v) {
                this._size = v;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (v) {
                this._text = v;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "corner", {
            set: function (v) {
                this._corner = v;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "dot", {
            get: function () {
                return this._dot;
            },
            set: function (v) {
                this._dot = v;
                if (this._dot) {
                    this._text = '';
                }
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "overflowCount", {
            set: function (v) {
                this._overflowCount = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "hot", {
            set: function (v) {
                this._hot = v;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "setStyle", {
            set: function (v) {
                this.style = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BadgeComponent.prototype, "className", {
            set: function (v) {
                var _this = this;
                this._setClass = v;
                var clsArr = this._setClass.split(' ');
                clsArr.forEach(function (cls) {
                    _this.render.addClass(_this._ref.nativeElement, cls);
                });
            },
            enumerable: false,
            configurable: true
        });
        BadgeComponent.prototype.setCls = function () {
            var _a;
            this.scrollNumberCls = (_a = {},
                _a[this.prefixCls + "-dot"] = this._dot,
                _a[this.prefixCls + "-dot-large"] = this._dot && this._size === 'large',
                _a[this.prefixCls + "-text"] = !this._dot && !this._corner,
                _a[this.prefixCls + "-corner"] = this._corner,
                _a[this.prefixCls + "-corner-large"] = this._corner && this._size === 'large',
                _a);
            this.clsBadgeWrp = !this._children;
            this.clsBadgeCornerWrp = this._corner;
            this.clsBadgeHot = !!this._hot;
            this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
        };
        BadgeComponent.prototype.ngOnChanges = function () {
            if (typeof this._text === 'number' && this._text > this._overflowCount) {
                this._text = this._overflowCount + '+';
            }
        };
        BadgeComponent.prototype.ngOnInit = function () {
            this.setCls();
        };
        BadgeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                if (_this._ref.nativeElement.children.length > 1 ||
                    (_this._ref.nativeElement.children.length === 1 && !_this.dot && !_this.text)) {
                    _this._children = true;
                    _this.setCls();
                }
            }, 10);
        };
        return BadgeComponent;
    }());
    BadgeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Badge, nzm-badge',
                    template: "<ng-content></ng-content>\n<sup *ngIf=\"dot || text\" [ngClass]=\"scrollNumberCls\" [ngStyle]=\"style\">\n  <span>{{ text }}</span>\n</sup>\n"
                },] }
    ];
    BadgeComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    BadgeComponent.propDecorators = {
        size: [{ type: i0.Input }],
        text: [{ type: i0.Input }],
        corner: [{ type: i0.Input }],
        dot: [{ type: i0.Input }],
        overflowCount: [{ type: i0.Input }],
        hot: [{ type: i0.Input }],
        setStyle: [{ type: i0.Input }],
        className: [{ type: i0.Input }],
        clsBadge: [{ type: i0.HostBinding, args: ['class.am-badge',] }],
        clsBadgeWrp: [{ type: i0.HostBinding, args: ['class.am-badge-not-a-wrapper',] }],
        clsBadgeCornerWrp: [{ type: i0.HostBinding, args: ['class.am-badge-corner-wrapper',] }],
        clsBadgeHot: [{ type: i0.HostBinding, args: ['class.am-badge-hot',] }],
        clsBadgeCornerWrpLg: [{ type: i0.HostBinding, args: ['class.am-badge-corner-wrapper-large',] }]
    };

    var BadgeModule = /** @class */ (function () {
        function BadgeModule() {
        }
        return BadgeModule;
    }());
    BadgeModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [BadgeComponent],
                    declarations: [BadgeComponent],
                    imports: [common.CommonModule, forms.FormsModule]
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
        return value instanceof i0.TemplateRef;
    }

    var InputItemComponent = /** @class */ (function () {
        function InputItemComponent(element, render) {
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
            this.onChange = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
            this.onFocus = new i0.EventEmitter();
            this.onErrorClick = new i0.EventEmitter();
            this.onExtraClick = new i0.EventEmitter();
            this.clsItem = true;
            this.clsDisabled = this._disabled;
            this.clsError = this._error;
            this.clsFocus = this._focus;
            this.clsAndroid = this._focus;
            this._onChange = function (_) { };
            this._el = element.nativeElement;
        }
        Object.defineProperty(InputItemComponent.prototype, "nzRequired", {
            get: function () {
                return this._nzRequired;
            },
            set: function (value) {
                this._nzRequired = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                if (typeof v === 'undefined' || v === null) {
                    this._value = '';
                }
                else {
                    this._value = v;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "defaultValue", {
            get: function () {
                return this._defaultValue;
            },
            set: function (value) {
                this._defaultValue = value;
                if (!this._value) {
                    this._value = this._defaultValue;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (value) {
                this._placeholder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "editable", {
            get: function () {
                return this._editable;
            },
            set: function (value) {
                this._editable = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.clsDisabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "clear", {
            get: function () {
                return this._clear;
            },
            set: function (value) {
                this._clear = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "maxLength", {
            get: function () {
                return this._maxLength;
            },
            set: function (value) {
                this._maxLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "error", {
            get: function () {
                return this._error;
            },
            set: function (value) {
                this._error = value;
                this.clsError = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "extra", {
            get: function () {
                return this._extra;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.ngTemplate = true;
                }
                else {
                    this.ngTemplate = false;
                }
                this._extra = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "labelNumber", {
            set: function (value) {
                this._labelNumber = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "updatePlaceholder", {
            set: function (value) {
                this._updatePlaceholder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "prefixListCls", {
            get: function () {
                return this._prefixListCls;
            },
            set: function (value) {
                this._prefixListCls = value;
                this.render.addClass(this._el, value + '-item');
                this.render.addClass(this._el, value + '-item-middle');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "moneyKeyboardAlign", {
            get: function () {
                return this._moneyKeyboardAlign;
            },
            set: function (value) {
                this._moneyKeyboardAlign = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "locale", {
            set: function (value) {
                this._locale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "fontColor", {
            get: function () {
                return this._fontColor;
            },
            set: function (value) {
                this._fontColor = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "focus", {
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputItemComponent.prototype, "content", {
            get: function () {
                return this._content;
            },
            set: function (value) {
                this._content = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        InputItemComponent.prototype.setCls = function () {
            var _a, _b;
            if (this.lableRef &&
                (this.lableRef.nativeElement.children.length > 0 ||
                    (this.lableRef.nativeElement && this.lableRef.nativeElement.innerText !== '') ||
                    this._content != undefined)) {
                this.labelCls = (_a = {},
                    _a[this.prefixCls + "-label"] = true,
                    _a[this.prefixCls + "-label-required"] = this.nzRequired,
                    _a[this.prefixCls + "-label-2"] = this._labelNumber === 2,
                    _a[this.prefixCls + "-label-3"] = this._labelNumber === 3,
                    _a[this.prefixCls + "-label-4"] = this._labelNumber === 4,
                    _a[this.prefixCls + "-label-5"] = this._labelNumber === 5,
                    _a[this.prefixCls + "-label-6"] = this._labelNumber === 6,
                    _a[this.prefixCls + "-label-7"] = this._labelNumber === 7,
                    _a);
            }
            this.controlCls = (_b = {}, _b[this.prefixCls + "-control"] = true, _b);
        };
        InputItemComponent.prototype.inputChange = function (inputValue) {
            var _this = this;
            // 'compositionend' is earlier than ngModelChange, Therefore use timer to make ngModelChange runs after 'compositionend' event
            setTimeout(function () {
                if (_this.compositionFilter && _this._inputLock && _this.inputType === 'text') {
                    return;
                }
                var value = inputValue;
                switch (_this.inputType) {
                    case 'bankCard':
                        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                        break;
                    case 'phone':
                        value = value.replace(/\D/g, '').substring(0, 11);
                        var valueLen = value.length;
                        if (valueLen > 3 && valueLen < 8) {
                            value = value.substr(0, 3) + " " + value.substr(3);
                        }
                        else if (valueLen >= 8) {
                            value = value.substr(0, 3) + " " + value.substr(3, 4) + " " + value.substr(7);
                        }
                        break;
                    case 'number':
                        value = value.replace(/\D/g, '');
                        break;
                }
                if (_this.inputType !== 'text') {
                    _this._value = value;
                }
                _this._onChange(_this._value);
                _this.onChange.emit(_this._value);
            }, 0);
        };
        InputItemComponent.prototype.compositionStart = function () {
            this._inputLock = true;
        };
        InputItemComponent.prototype.compositionEnd = function () {
            this._inputLock = false;
        };
        InputItemComponent.prototype.inputFocus = function (value) {
            var _this = this;
            if (!this._editable && document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
            setTimeout(function () {
                _this._focus = true;
                _this.clsFocus = true;
                _this.clsAndroid = true;
            }, 100);
            this.onFocus.emit(value);
        };
        InputItemComponent.prototype.inputBlur = function (value) {
            var _this = this;
            setTimeout(function () {
                if (!_this._isClear) {
                    _this._focus = false;
                    _this.clsFocus = false;
                    _this.clsAndroid = false;
                    _this.onBlur.emit(value);
                }
                _this._isClear = false;
            }, 100);
        };
        InputItemComponent.prototype.clearInput = function () {
            if (this._type !== 'password' && this._updatePlaceholder) {
                this._placeholder = this._value;
            }
            this._value = '';
            this.onChange.emit(this._value);
            this._onChange(this._value);
            this._isClear = true;
            this.inputFocus(this._value);
        };
        InputItemComponent.prototype.errorClick = function (e) {
            if (this.onErrorClick) {
                this.onErrorClick.emit(e);
            }
        };
        InputItemComponent.prototype.extraClick = function (e) {
            if (this.onExtraClick) {
                this.onExtraClick.emit(e);
            }
        };
        InputItemComponent.prototype.writeValue = function (value) {
            if (typeof value === undefined || value === null) {
                this._value = '';
            }
            else {
                this._value = value;
            }
        };
        InputItemComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        InputItemComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        InputItemComponent.prototype.registerOnTouched = function (fn) { };
        InputItemComponent.prototype.ngOnInit = function () {
            this.setCls();
            this.render.addClass(this._el, this._prefixListCls + '-item');
            this.render.addClass(this._el, this._prefixListCls + '-item-middle');
        };
        InputItemComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.setCls();
            }, 0);
        };
        return InputItemComponent;
    }());
    InputItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'InputItem, nzm-input-item',
                    template: "<div class=\"{{ prefixListCls }}-line\">\n  <div #lableContent [ngClass]=\"labelCls\">\n    <ng-template *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-template>\n    <ng-container *ngIf=\"!isTemplateRef(content)\">{{ content }}</ng-container>\n  </div>\n  <div [ngClass]=\"controlCls\">\n    <CustomInput\n      *ngIf=\"type === 'money'\"\n      [value]=\"value\"\n      [defaultValue]=\"defaultValue\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [editable]=\"editable\"\n      [fontColor]=\"fontColor\"\n      [moneyKeyboardAlign]=\"moneyKeyboardAlign\"\n      [setFocus]=\"setFocus\"\n      [maxLength]=\"maxLength\"\n      (onChange)=\"inputChange($event)\"\n      (onBlur)=\"inputBlur(value)\"\n      (onFocus)=\"inputFocus(value)\"\n    >\n    </CustomInput>\n    <div *ngIf=\"type !== 'money'\">\n      <input\n        #inputElement\n        style=\"outline:none\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        [defaultValue]=\"defaultValue\"\n        [placeholder]=\"placeholder\"\n        [disabled]=\"disabled\"\n        [readOnly]=\"!editable\"\n        [autofocus]=\"autoFocus\"\n        [maxlength]=\"maxLength\"\n        [pattern]=\"pattern\"\n        [style.color]=\"fontColor\"\n        (ngModelChange)=\"inputChange($event)\"\n        (compositionstart)=\"compositionStart()\"\n        (compositionend)=\"compositionEnd()\"\n        (blur)=\"inputBlur(value)\"\n        (focus)=\"inputFocus(value)\"\n      />\n    </div>\n  </div>\n  <div\n    *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n    class=\"{{ prefixCls }}-clear\"\n    (click)=\"clearInput()\"\n  ></div>\n  <div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n  <div *ngIf=\"extra !== ''\" class=\"{{ prefixCls }}-extra\" (click)=\"extraClick($event)\">\n    <ng-container *ngIf=\"!ngTemplate\">{{ extra }}</ng-container>\n    <ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n</div>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return InputItemComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    InputItemComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    InputItemComponent.propDecorators = {
        lableRef: [{ type: i0.ViewChild, args: ['lableContent', { static: true },] }],
        inputElementRef: [{ type: i0.ViewChild, args: ['inputElement',] }],
        nzRequired: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        editable: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        clear: [{ type: i0.Input }],
        maxLength: [{ type: i0.Input }],
        error: [{ type: i0.Input }],
        extra: [{ type: i0.Input }],
        labelNumber: [{ type: i0.Input }],
        updatePlaceholder: [{ type: i0.Input }],
        prefixListCls: [{ type: i0.Input }],
        name: [{ type: i0.Input }],
        moneyKeyboardAlign: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        fontColor: [{ type: i0.Input }],
        focus: [{ type: i0.Input }],
        content: [{ type: i0.Input }],
        compositionFilter: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onBlur: [{ type: i0.Output }],
        onFocus: [{ type: i0.Output }],
        onErrorClick: [{ type: i0.Output }],
        onExtraClick: [{ type: i0.Output }],
        clsItem: [{ type: i0.HostBinding, args: ['class.am-input-item',] }],
        clsDisabled: [{ type: i0.HostBinding, args: ['class.am-input-disabled',] }],
        clsError: [{ type: i0.HostBinding, args: ['class.am-input-error',] }],
        clsFocus: [{ type: i0.HostBinding, args: ['class.am-input-focus',] }],
        clsAndroid: [{ type: i0.HostBinding, args: ['class.am-input-android,',] }]
    };

    var LOCAL_PROVIDER_TOKEN = new i0.InjectionToken('locale-provider-token');

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
        Picker: Picker,
        DatePicker: DatePicker,
        DatePickerView: DatePickerView,
        Menu: Menu,
        Calendar: zhCN,
        SearchBar: SearchBar,
        InputItem: InputItem,
        Pagination: Pagination,
        PullToRefresh: PullToRefresh,
        ActionSheet: ActionSheet
    };

    var LocaleProviderService = /** @class */ (function () {
        function LocaleProviderService(locale) {
            this._locale = undefined;
            this._change = new rxjs.BehaviorSubject(this._locale);
            this.setLocale(locale || zh_CN);
        }
        Object.defineProperty(LocaleProviderService.prototype, "localeChange", {
            get: function () {
                return this._change.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        LocaleProviderService.prototype.getLocaleValue = function (keyPath) {
            var content = this._getObjectPath(this._locale, keyPath);
            if (typeof content === 'string') {
                return content;
            }
            return '';
        };
        LocaleProviderService.prototype.getLocaleSubObj = function (keyPath) {
            var content = this._getObjectPath(this._locale, keyPath);
            if (typeof content === 'object') {
                return content;
            }
            return null;
        };
        LocaleProviderService.prototype.setLocale = function (locale) {
            if (!locale || (this._locale && this._locale.locale === locale.locale)) {
                return;
            }
            this._locale = locale;
            this._change.next(locale);
        };
        LocaleProviderService.prototype.getLocaleId = function () {
            return this._locale && this._locale.locale ? this._locale.locale : '';
        };
        LocaleProviderService.prototype.getLocale = function () {
            return this._locale;
        };
        LocaleProviderService.prototype._getObjectPath = function (obj, path) {
            var res = obj;
            var paths = path.split('.');
            var depth = paths.length;
            var index = 0;
            while (res && index < depth) {
                res = res[paths[index++]];
            }
            return index === depth ? res : null;
        };
        return LocaleProviderService;
    }());
    LocaleProviderService.decorators = [
        { type: i0.Injectable }
    ];
    LocaleProviderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [LOCAL_PROVIDER_TOKEN,] }] }
    ]; };
    function LOCALE_PROVIDER_SERVICE_FACTORY(exist, locale) {
        return exist || new LocaleProviderService(locale);
    }
    var LOCALE_PROVIDER_SERVICE_PROVIDER = {
        provide: LocaleProviderService,
        useFactory: LOCALE_PROVIDER_SERVICE_FACTORY,
        deps: [[new i0.Optional(), new i0.SkipSelf(), LocaleProviderService], LOCAL_PROVIDER_TOKEN]
    };

    var CustomKeyboardComponent = /** @class */ (function () {
        function CustomKeyboardComponent(_localeProvider) {
            this._localeProvider = _localeProvider;
            this.prefixCls = 'am-number-keyboard';
            this.okText = '';
            this._locale = {};
            this._unsubscribe$ = new rxjs.Subject();
            this.onClick = new i0.EventEmitter();
        }
        CustomKeyboardComponent.prototype.tdClick = function (e) {
            this.onClick.emit(e);
        };
        CustomKeyboardComponent.prototype.ngOnInit = function () {
            var _a, _b;
            var _this = this;
            this.wrapCls = (_a = {},
                _a[this.prefixCls + "-item"] = true,
                _a);
            this.wrapperCls = (_b = {},
                _b[this.prefixCls + "-wrapper"] = true,
                _b);
            this._localeProvider.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                _this._locale = _this._localeProvider.getLocaleSubObj('InputItem');
                _this.okText = _this._locale.confirmLabel;
            });
        };
        CustomKeyboardComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return CustomKeyboardComponent;
    }());
    CustomKeyboardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CustomKeyboard',
                    template: "<div [ngClass]=\"wrapperCls\">\n  <table>\n    <tbody>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(1)\">1</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(2)\">2</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(3)\">3</td>\n        <td class=\"keyboard-delete\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('delete')\"></td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(4)\">4</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(5)\">5</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(6)\">6</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(7)\">7</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(8)\">8</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(9)\">9</td>\n        <td class=\"keyboard-confirm\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('confirm')\">{{ okText }}</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick('.')\">.</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(0)\">0</td>\n        <td class=\"keyboard-hide\" [ngClass]=\"wrapCls\" (click)=\"tdClick('hide')\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [LocaleProviderService]
                },] }
    ];
    CustomKeyboardComponent.ctorParameters = function () { return [
        { type: LocaleProviderService }
    ]; };
    CustomKeyboardComponent.propDecorators = {
        onClick: [{ type: i0.Output }]
    };

    var CustomInputService = /** @class */ (function () {
        function CustomInputService(_appRef, _cfr) {
            this._appRef = _appRef;
            this._cfr = _cfr;
            CustomInputService.appRef = this._appRef;
            CustomInputService._inputCompFactory = this._cfr.resolveComponentFactory(CustomKeyboardComponent);
        }
        CustomInputService.getShowStatus = function () {
            return CustomInputService.isShow;
        };
        CustomInputService.showKeyboard = function () {
            var _a;
            var _this = this;
            if (!this.isShow) {
                if (this.compRef) {
                    this.compRef.instance.wrapperCls = (_a = {},
                        _a["am-number-keyboard-wrapper"] = true,
                        _a);
                }
                else {
                    var container = document.querySelector("#" + this._keyboardPrefixCls + "-container");
                    if (!container) {
                        container = document.createElement('div');
                        container.setAttribute('id', this._keyboardPrefixCls + "-container");
                        document.body.appendChild(container);
                        container.appendChild(document.createElement(CustomInputService._inputCompFactory.selector));
                        this.compRef = this.appRef.bootstrap(CustomInputService._inputCompFactory);
                        this.compRef.instance.onClick.subscribe(function (e) {
                            _this.clickValue = e;
                        });
                    }
                }
                this.isShow = true;
            }
        };
        CustomInputService.hideKeyboard = function () {
            var _a;
            if (this.compRef && this.isShow) {
                this.isShow = false;
                this.compRef.instance.wrapperCls = (_a = {},
                    _a["am-number-keyboard-wrapper"] = true,
                    _a["am-number-keyboard-wrapper-hide"] = true,
                    _a);
            }
        };
        return CustomInputService;
    }());
    CustomInputService.compRef = null;
    CustomInputService.appRef = null;
    CustomInputService.isShow = false;
    CustomInputService.clickValue = null;
    CustomInputService._inputCompFactory = null;
    CustomInputService._keyboardPrefixCls = 'am-number-keyboard';
    CustomInputService.decorators = [
        { type: i0.Injectable }
    ];
    CustomInputService.ctorParameters = function () { return [
        { type: i0.ApplicationRef },
        { type: i0.ComponentFactoryResolver }
    ]; };

    var CustomInputComponent = /** @class */ (function () {
        function CustomInputComponent(_ref, _customInputService, _ngZone) {
            var _this = this;
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
            this.onChange = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
            this.onFocus = new i0.EventEmitter();
            this.clsFakeContainer = true;
            this.inputFocus = function () {
                _this.removeBlurListener();
                var focus = _this.focus;
                if (!focus || _this._setFocus) {
                    _this.onInputFocus();
                }
                setTimeout(function () {
                    _this.addBlurListener();
                }, 50);
            };
            this.doBlur = function (ev) {
                var value = _this._value;
                // 点击是否是组件本身
                var parentFound = false;
                // 点击目标是否是custom-input
                var isInput = false;
                // 点击目标是否是custom-keyboard
                var isKeyboard = false;
                var isClear = false;
                var target = ev.target;
                while (target && target !== null && !parentFound) {
                    if (target === _this._ref.nativeElement) {
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
                    _this.focus = true;
                }
                else if (isInput) {
                    _this._setFocus = false;
                    _this.focus = false;
                    _this.onBlur.emit(_this._value);
                }
                if (_this.focus && isKeyboard) {
                    _this.focus = true;
                    _this.onKeyboardClick(CustomInputService.clickValue);
                }
                if (!parentFound && !isInput && !isKeyboard && !isClear && !_this._setFocus) {
                    _this.focus = false;
                    _this._setFocus = false;
                    _this.onBlur.emit(_this._value);
                    CustomInputService.hideKeyboard();
                }
                _this.setFakeInputCls();
            };
            this.removeBlurListener = function () {
                document.removeEventListener('click', _this.doBlur, false);
            };
            this.addBlurListener = function () {
                document.addEventListener('click', _this.doBlur, false);
            };
            this.onInputBlur = function (value) {
                _this.focus = false;
                _this.setFakeInputCls();
                _this.onBlur.emit(_this._value);
                CustomInputService.hideKeyboard();
            };
            this.onInputFocus = function () {
                _this.onFocus.emit(_this._value);
                _this.focus = true;
                _this._setFocus = false;
                _this.setFakeInputCls();
                setTimeout(function () {
                    CustomInputService.showKeyboard();
                }, 100);
            };
            this.setFakeInputCls = function () {
                var _a;
                _this.fakeInputCls = (_a = {},
                    _a["fake-input"] = true,
                    _a['fake-input-disabled'] = _this._disabled,
                    _a['focus'] = _this.focus,
                    _a);
            };
            this.setContainerCls = function () {
                _this.clsFakeContainerLeft = _this._moneyKeyboardAlign === 'left';
            };
            this.onKeyboardClick = function (keyboardItemValue) {
                var valueAfterChange;
                // 删除键
                if (keyboardItemValue === 'delete') {
                    valueAfterChange = _this._value.substring(0, _this._value.length - 1);
                    _this.onChange.emit(valueAfterChange);
                    // 确认键
                }
                else if (keyboardItemValue === 'confirm') {
                    valueAfterChange = _this._value;
                    _this.onChange.emit(valueAfterChange);
                    _this.onInputBlur(_this._value);
                    // 收起键
                }
                else if (keyboardItemValue === 'hide') {
                    valueAfterChange = _this._value;
                    _this.onInputBlur(valueAfterChange);
                }
                else {
                    if (_this._maxLength !== undefined &&
                        +_this._maxLength >= 0 &&
                        (_this._value + keyboardItemValue).length > _this._maxLength) {
                        valueAfterChange = (_this._value + keyboardItemValue).substr(0, _this._maxLength);
                        _this.onChange.emit(valueAfterChange);
                    }
                    else {
                        valueAfterChange = _this._value + keyboardItemValue;
                        _this.onChange.emit(valueAfterChange);
                    }
                }
                _this._ngZone.run(function () {
                    _this._value = valueAfterChange;
                });
            };
        }
        Object.defineProperty(CustomInputComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                if (typeof v === 'undefined' || v === null) {
                    this._value = '';
                }
                else if (this._maxLength !== undefined && this._maxLength >= 0) {
                    this._value = v.toString().substr(0, this._maxLength);
                }
                else {
                    this._value = v.toString();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "defaultValue", {
            set: function (value) {
                this._defaultValue = value;
                if (!this._value) {
                    this._value = this._defaultValue.toString();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "maxLength", {
            set: function (value) {
                this._maxLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (value) {
                this._placeholder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "editable", {
            set: function (value) {
                this._editable = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "disabled", {
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "fontColor", {
            get: function () {
                return this._fontColor;
            },
            set: function (value) {
                this._fontColor = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "moneyKeyboardAlign", {
            set: function (value) {
                this._moneyKeyboardAlign = value;
                this.setContainerCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomInputComponent.prototype, "setFocus", {
            set: function (value) {
                if (value) {
                    this._setFocus = value.focus;
                    if (this._setFocus) {
                        this.inputFocus();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        CustomInputComponent.prototype.onFakeInputClick = function () {
            if (this._preventKeyboard) {
                return;
            }
            this.inputFocus();
        };
        CustomInputComponent.prototype.ngOnInit = function () {
            this._preventKeyboard = this._disabled || !this._editable;
            this.setFakeInputCls();
            this.setContainerCls();
        };
        CustomInputComponent.prototype.ngOnDestroy = function () {
            this.removeBlurListener();
            if (CustomInputService) {
                CustomInputService.hideKeyboard();
                CustomInputService.compRef = null;
            }
            var container = document.querySelector("#" + this.keyboardPrefixCls + "-container");
            if (container) {
                container.remove();
            }
        };
        return CustomInputComponent;
    }());
    CustomInputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CustomInput',
                    template: "<div *ngIf=\"value === ''\" class=\"fake-input-placeholder\">\n  {{ placeholder }}\n</div>\n<div [ngClass]=\"fakeInputCls\" [style.color]=\"fontColor\" (click)=\"onFakeInputClick()\">\n  {{ value }}\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [CustomInputService]
                },] }
    ];
    CustomInputComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: CustomInputService },
        { type: i0.NgZone }
    ]; };
    CustomInputComponent.propDecorators = {
        value: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        maxLength: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        editable: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        fontColor: [{ type: i0.Input }],
        moneyKeyboardAlign: [{ type: i0.Input }],
        setFocus: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onBlur: [{ type: i0.Output }],
        onFocus: [{ type: i0.Output }],
        clsFakeContainer: [{ type: i0.HostBinding, args: ['class.fake-input-container',] }],
        clsFakeContainerLeft: [{ type: i0.HostBinding, args: ['class.fake-input-container-left',] }]
    };

    var InputItemModule = /** @class */ (function () {
        function InputItemModule() {
        }
        return InputItemModule;
    }());
    InputItemModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                    declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                    imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule]
                },] }
    ];

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(_elementRef, _render) {
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
            this.onClick = new i0.EventEmitter();
            this._el = this._elementRef.nativeElement;
            this._render.addClass(this._el, this.prefixCls);
            this._className = this._el.className;
        }
        Object.defineProperty(ButtonComponent.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._size = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "loading", {
            get: function () {
                return this._loading;
            },
            set: function (value) {
                this._loading = value;
                if (this._el.querySelector('icon')) {
                    var icon = this._el.querySelector('icon');
                    icon.style.display = value ? '' : 'none';
                }
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "inline", {
            get: function () {
                return this._inline;
            },
            set: function (value) {
                this._inline = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.ngTemplate = true;
                    this._icon = value;
                }
                else {
                    this.ngTemplate = false;
                    this._icon = value;
                    this.setClassMap();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "className", {
            set: function (v) {
                this._className = this._className + ' ' + v;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        ButtonComponent.prototype.touchStart = function (event) {
            if (this._disabled) {
                return;
            }
            this._active = true;
            this.setClassMap();
        };
        ButtonComponent.prototype.touchEnd = function (event) {
            if (this._disabled) {
                return;
            }
            this._active = false;
            this.setClassMap();
        };
        ButtonComponent.prototype.click = function (event) {
            if (this._disabled) {
                return;
            }
            this.onClick.emit();
        };
        ButtonComponent.prototype.isTemplateRef = function (value) {
            if (value) {
                return value instanceof i0.TemplateRef;
            }
            return false;
        };
        ButtonComponent.prototype.ngAfterViewInit = function () {
            if (this._el.querySelector('img')) {
                var amSize = this._size === 'small' ? 'am-icon-xxs' : 'am-icon-md';
                this._el.querySelector('img').setAttribute('class', "am-icon " + this.prefixCls + "-icon " + amSize);
                this._render.addClass(this._el, this.prefixCls + "-icon");
            }
        };
        ButtonComponent.prototype.setClassMap = function () {
            this.iconType = this._loading ? 'loading' : this._icon;
            this._classList = [
                this._type && this.prefixCls + "-" + this._type,
                this._size === 'small' && this.prefixCls + "-" + this._size,
                this._disabled && this.prefixCls + "-disabled",
                this._loading && this.prefixCls + "-loading",
                this.iconType && this.prefixCls + "-icon",
                this._active && this.prefixCls + "-active",
                this._inline && this.prefixCls + "-inline"
            ].filter(function (item) {
                return !!item;
            });
            this._el.className = this._className + ' ' + this._classList.join(' ');
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[Button], nzm-button',
                    encapsulation: i0.ViewEncapsulation.None,
                    template: "<Icon\n  *ngIf=\"!ngTemplate\"\n  class=\"{{ prefixCls }}-icon\"\n  [type]=\"iconType\"\n  [size]=\"size === 'small' ? 'xxs' : 'md'\"\n></Icon>\n<ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"icon\"></ng-template>\n<ng-content select=\"img\"></ng-content>\n<div class=\"{{ prefixCls }}-content\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n</div>\n"
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    ButtonComponent.propDecorators = {
        type: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        inline: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        className: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }],
        touchStart: [{ type: i0.HostListener, args: ['touchstart', ['$event'],] }, { type: i0.HostListener, args: ['mousedown', ['$event'],] }],
        touchEnd: [{ type: i0.HostListener, args: ['touchend', ['$event'],] }, { type: i0.HostListener, args: ['mouseup', ['$event'],] }, { type: i0.HostListener, args: ['touchmove', ['$event'],] }, { type: i0.HostListener, args: ['mousemove', ['$event'],] }, { type: i0.HostListener, args: ['touchcancel', ['$event'],] }],
        click: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
    };

    /* tslint:disable:max-line-length */
    var svgSprite = function (contents) { return "\n<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"https://www.w3.org/1999/xlink\"\n  id=\"__ANTD_MOBILE_SVG_SPRITE_NODE__\"\n  style=\"position:absolute;width:0;height:0\"\n>\n  <defs>\n    " + contents + "\n  </defs>\n</svg>\n"; };
    var ɵ0 = svgSprite;
    var IconHandler = /** @class */ (function () {
        function IconHandler() {
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
        IconHandler.prototype.renderSvgSprite = function () {
            var _this = this;
            var symbols = Object.keys(this.icons)
                .map(function (iconName) {
                var svgContent = _this.icons[iconName].split('svg')[1];
                return "<symbol id=" + iconName + svgContent + "symbol>";
            })
                .join('');
            return svgSprite(symbols);
        };
        IconHandler.prototype.load = function () {
            if (!document) {
                return;
            }
            var existing = document.getElementById('__ANTD_MOBILE_SVG_SPRITE_NODE__');
            var mountNode = document.body;
            if (!existing) {
                mountNode.insertAdjacentHTML('afterbegin', this.renderSvgSprite());
            }
        };
        return IconHandler;
    }());
    IconHandler.decorators = [
        { type: i0.Injectable }
    ];
    IconHandler.ctorParameters = function () { return []; };

    var IconComponent = /** @class */ (function () {
        function IconComponent(_iconHandler) {
            this._iconHandler = _iconHandler;
            this.clsMap = {};
            this._type = '';
            this._size = 'md';
            this._src = '';
            this.color = '';
            this._iconHandler.load();
        }
        Object.defineProperty(IconComponent.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "src", {
            get: function () {
                return this._src;
            },
            set: function (value) {
                this._src = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._size = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        IconComponent.prototype.setClsMap = function () {
            var _a;
            this.clsMap = (_a = {},
                _a["am-icon-" + this._type] = true,
                _a["am-icon-" + this._size] = true,
                _a);
        };
        return IconComponent;
    }());
    IconComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Icon, nzm-icon',
                    template: "<svg *ngIf=\"type\" class=\"am-icon\" [ngClass]=\"clsMap\" [ngStyle]=\"{ color: color }\">\n  <use xmlns:xlink=\"https://www.w3.org/1999/xlink\" attr.xlink:href=\"#{{ type }}\"></use>\n</svg>\n<img *ngIf=\"src\" src=\"{{ src }}\" class=\"am-icon\" [ngClass]=\"clsMap\" />\n<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [IconHandler]
                },] }
    ];
    IconComponent.ctorParameters = function () { return [
        { type: IconHandler }
    ]; };
    IconComponent.propDecorators = {
        color: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        src: [{ type: i0.Input }],
        size: [{ type: i0.Input }]
    };

    var IconModule = /** @class */ (function () {
        function IconModule() {
        }
        return IconModule;
    }());
    IconModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [IconComponent],
                    declarations: [IconComponent]
                },] }
    ];

    var WingBlankComponent = /** @class */ (function () {
        function WingBlankComponent() {
            this.prefixCls = 'am-wingblank';
            this.size = 'lg';
            this.amWingBlank = true;
        }
        Object.defineProperty(WingBlankComponent.prototype, "amWingBlnkSm", {
            get: function () {
                return this.size === 'sm';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WingBlankComponent.prototype, "amWingBlnkMd", {
            get: function () {
                return this.size === 'md';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WingBlankComponent.prototype, "amWingBlnkLg", {
            get: function () {
                return this.size === 'lg';
            },
            enumerable: false,
            configurable: true
        });
        return WingBlankComponent;
    }());
    WingBlankComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'WingBlank, nzm-wingblank',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    WingBlankComponent.ctorParameters = function () { return []; };
    WingBlankComponent.propDecorators = {
        size: [{ type: i0.Input }],
        amWingBlank: [{ type: i0.HostBinding, args: ['class.am-wingblank',] }],
        amWingBlnkSm: [{ type: i0.HostBinding, args: ['class.am-wingblank-sm',] }],
        amWingBlnkMd: [{ type: i0.HostBinding, args: ['class.am-wingblank-md',] }],
        amWingBlnkLg: [{ type: i0.HostBinding, args: ['class.am-wingblank-lg',] }]
    };

    var WingBlankModule = /** @class */ (function () {
        function WingBlankModule() {
        }
        return WingBlankModule;
    }());
    WingBlankModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [WingBlankComponent],
                    exports: [WingBlankComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    var WhiteSpaceComponent = /** @class */ (function () {
        function WhiteSpaceComponent() {
            this.prefixCls = 'am-whitespace';
            this.size = 'md';
            this.amWhiteSpace = true;
        }
        Object.defineProperty(WhiteSpaceComponent.prototype, "amWhitespaceXs", {
            get: function () {
                return this.size === 'xs';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WhiteSpaceComponent.prototype, "amWhitespaceSm", {
            get: function () {
                return this.size === 'sm';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WhiteSpaceComponent.prototype, "amWhitespaceMd", {
            get: function () {
                return this.size === 'md';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WhiteSpaceComponent.prototype, "amWhitespaceLg", {
            get: function () {
                return this.size === 'lg';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WhiteSpaceComponent.prototype, "amWhitespaceXl", {
            get: function () {
                return this.size === 'xl';
            },
            enumerable: false,
            configurable: true
        });
        return WhiteSpaceComponent;
    }());
    WhiteSpaceComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'WhiteSpace, nzm-whitespace',
                    template: ""
                },] }
    ];
    WhiteSpaceComponent.ctorParameters = function () { return []; };
    WhiteSpaceComponent.propDecorators = {
        size: [{ type: i0.Input }],
        amWhiteSpace: [{ type: i0.HostBinding, args: ['class.am-whitespace',] }],
        amWhitespaceXs: [{ type: i0.HostBinding, args: ['class.am-whitespace-xs',] }],
        amWhitespaceSm: [{ type: i0.HostBinding, args: ['class.am-whitespace-sm',] }],
        amWhitespaceMd: [{ type: i0.HostBinding, args: ['class.am-whitespace-md',] }],
        amWhitespaceLg: [{ type: i0.HostBinding, args: ['class.am-whitespace-lg',] }],
        amWhitespaceXl: [{ type: i0.HostBinding, args: ['class.am-whitespace-xl',] }]
    };

    var WhiteSpaceModule = /** @class */ (function () {
        function WhiteSpaceModule() {
        }
        return WhiteSpaceModule;
    }());
    WhiteSpaceModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [WhiteSpaceComponent],
                    exports: [WhiteSpaceComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    var ListComponent = /** @class */ (function () {
        function ListComponent() {
            this.defaultProps = {
                prefixCls: 'am-list'
            };
            this.renderHeaderType = '';
            this.renderFooterType = '';
            this._renderHeader = '';
            this._renderFooter = '';
            this._className = '';
        }
        Object.defineProperty(ListComponent.prototype, "className", {
            set: function (value) {
                this._className = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "renderHeader", {
            get: function () {
                return this._renderHeader;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.renderHeaderType = 'templateRef';
                }
                else {
                    this.renderHeaderType = typeof value;
                }
                this._renderHeader = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "renderFooter", {
            get: function () {
                return this._renderFooter;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.renderFooterType = 'templateRef';
                }
                else {
                    this.renderFooterType = typeof value;
                }
                this._renderFooter = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "hostClassName", {
            get: function () {
                return 'am-list ' + this._className;
            },
            enumerable: false,
            configurable: true
        });
        return ListComponent;
    }());
    ListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'List, nzm-list',
                    template: "<div\n  *ngIf=\"renderHeader && renderHeaderType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-header\"\n  [innerHTML]=\"renderHeader\"\n></div>\n<div *ngIf=\"renderHeader && renderHeaderType === 'function'\" class=\"{{ defaultProps.prefixCls }}-header\">\n  {{ renderHeader() }}\n</div>\n<ng-template *ngIf=\"renderHeader && renderHeaderType === 'templateRef'\" [ngTemplateOutlet]=\"renderHeader\">\n</ng-template>\n<div class=\"{{ defaultProps.prefixCls }}-body\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"renderFooter && renderFooterType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-footer\"\n  [innerHTML]=\"renderFooter\"\n></div>\n<div *ngIf=\"renderFooter && renderFooterType === 'function'\" class=\"{{ defaultProps.prefixCls }}-footer\">\n  {{ renderFooter() }}\n</div>\n<ng-template *ngIf=\"renderFooter && renderFooterType === 'templateRef'\" [ngTemplateOutlet]=\"renderFooter\">\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        className: [{ type: i0.Input }],
        renderHeader: [{ type: i0.Input }],
        renderFooter: [{ type: i0.Input }],
        hostClassName: [{ type: i0.HostBinding, args: ['class',] }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ListItemComponent = /** @class */ (function () {
        function ListItemComponent() {
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
            this._extraTip = '';
            this.onClick = new i0.EventEmitter();
        }
        Object.defineProperty(ListItemComponent.prototype, "extra", {
            get: function () {
                return this._extra;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this._extra_component = true;
                    this._extra = value;
                }
                else {
                    this._extra_component = false;
                    this._extra_title = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "extra_component", {
            get: function () {
                return this._extra_component;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "extra_title", {
            get: function () {
                return this._extra_title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "extraTip", {
            get: function () {
                return this._extraTip;
            },
            set: function (v) {
                this._extraTip = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "className", {
            set: function (value) {
                this._className = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "arrow", {
            get: function () {
                return this._arrow;
            },
            set: function (value) {
                this._arrow = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "multipleLine", {
            set: function (value) {
                this.defaultProps.multipleLine = value === '' ? true : value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "error", {
            set: function (value) {
                this.defaultProps.error = value === '' ? true : value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "wrap", {
            set: function (value) {
                this.defaultProps.wrap = value === '' ? true : value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "align", {
            set: function (value) {
                this.defaultProps.align = value;
                this.setClsMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "platform", {
            set: function (value) {
                this.defaultProps.platform = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "disabled", {
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "thumb", {
            get: function () {
                return this._thumb;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this._thumb_component = true;
                    this._thumb = value;
                }
                else {
                    this._thumb_component = false;
                    this._thumb_src = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "thumb_component", {
            get: function () {
                return this._thumb_component;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "thumb_src", {
            get: function () {
                return this._thumb_src;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemComponent.prototype, "bingClassName", {
            get: function () {
                return this.wrapCls;
            },
            enumerable: false,
            configurable: true
        });
        ListItemComponent.prototype.click = function (event) {
            this.onItemClick(event);
        };
        ListItemComponent.prototype.start = function () {
            if (!this._disabled && this.onClick.observers.length > 0) {
                this._active = true;
                this.setClsMap();
            }
        };
        ListItemComponent.prototype.move = function () {
            if (!this._disabled && this.onClick.observers.length > 0) {
                this._active = false;
                this.setClsMap();
            }
        };
        ListItemComponent.prototype.end = function () {
            if (!this._disabled && this.onClick.observers.length > 0) {
                this._active = false;
                this.setClsMap();
            }
        };
        ListItemComponent.prototype.mouse_start = function () {
            if (!this._disabled && this.onClick.observers.length > 0) {
                this._active = true;
                this.setClsMap();
            }
        };
        ListItemComponent.prototype.mouse_end = function () {
            if (!this._disabled && this.onClick.observers.length > 0) {
                this._active = false;
                this.setClsMap();
            }
        };
        ListItemComponent.prototype.setClsMap = function () {
            var e_1, _a, _b, _c, _d, _e, _f;
            var classNameList = this._className.split(' ');
            var classNameObj = {};
            this.wrapCls = '';
            try {
                for (var classNameList_1 = __values(classNameList), classNameList_1_1 = classNameList_1.next(); !classNameList_1_1.done; classNameList_1_1 = classNameList_1.next()) {
                    var value = classNameList_1_1.value;
                    if (value) {
                        classNameObj = Object.assign(Object.assign({}, classNameObj), (_b = {}, _b["" + value] = true, _b));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (classNameList_1_1 && !classNameList_1_1.done && (_a = classNameList_1.return)) _a.call(classNameList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var wrapClsObj = Object.assign((_c = {}, _c[this.defaultProps.prefixCls + "-item"] = true, _c[this.defaultProps.prefixCls + "-item-disabled"] = this._disabled, _c[this.defaultProps.prefixCls + "-item-active"] = this._active, _c[this.defaultProps.prefixCls + "-item-error"] = this.defaultProps.error, _c[this.defaultProps.prefixCls + "-item-top"] = this.defaultProps.align === 'top', _c[this.defaultProps.prefixCls + "-item-middle"] = this.defaultProps.align === 'middle', _c[this.defaultProps.prefixCls + "-item-bottom"] = this.defaultProps.align === 'bottom', _c), classNameObj);
            for (var key in wrapClsObj) {
                if (wrapClsObj[key]) {
                    this.wrapCls += " " + key;
                }
            }
            this.rippleCls = (_d = {},
                _d[this.defaultProps.prefixCls + "-ripple"] = true,
                _d[this.defaultProps.prefixCls + "-ripple-animate"] = this.rippleClicked,
                _d);
            this.lineCls = (_e = {},
                _e[this.defaultProps.prefixCls + "-line"] = true,
                _e[this.defaultProps.prefixCls + "-line-multiple"] = this.defaultProps.multipleLine,
                _e[this.defaultProps.prefixCls + "-line-wrap"] = this.defaultProps.wrap,
                _e);
            this.arrowCls = (_f = {},
                _f[this.defaultProps.prefixCls + "-arrow"] = true,
                _f[this.defaultProps.prefixCls + "-arrow-horizontal"] = this._arrow === 'horizontal',
                _f[this.defaultProps.prefixCls + "-arrow-vertical"] = this._arrow === 'down' || this._arrow === 'up',
                _f[this.defaultProps.prefixCls + "-arrow-vertical-up"] = this._arrow === 'up',
                _f);
        };
        ListItemComponent.prototype.onItemClick = function (ev) {
            var _this = this;
            var isAndroid = this.defaultProps.platform === 'android';
            if (isAndroid) {
                if (this.debounceTimeout) {
                    clearTimeout(this.debounceTimeout);
                    this.debounceTimeout = null;
                }
                var Item = ev.currentTarget;
                var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                var ClientRect = ev.currentTarget.getBoundingClientRect();
                var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
                var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
                var coverRippleStyle = {
                    width: RippleWidth + "px",
                    height: RippleWidth + "px",
                    left: pointX + "px",
                    top: pointY + "px"
                };
                this.defaultProps.rippleStyle = coverRippleStyle;
                this.rippleClicked = true;
                this.setClsMap();
                this.debounceTimeout = setTimeout(function () {
                    _this.rippleClicked = false;
                    _this.defaultProps.rippleStyle = { display: 'none' };
                    _this.setClsMap();
                }, 1000);
            }
            this.onClick.emit(ev);
        };
        ListItemComponent.prototype.ngOnInit = function () {
            this.defaultProps.rippleStyle = { display: 'none' };
            this.setClsMap();
        };
        ListItemComponent.prototype.ngOnDestroy = function () {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        };
        return ListItemComponent;
    }());
    ListItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ListItem, nzm-list-item',
                    template: "<div *ngIf=\"thumb_src && !thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <img src=\"{{ thumb_src }}\" />\n</div>\n<div *ngIf=\"thumb && thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <ng-template [ngTemplateOutlet]=\"thumb\"></ng-template>\n</div>\n<div [ngClass]=\"lineCls\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <ng-content></ng-content>\n  </div>\n  <div *ngIf=\"extra_title && !extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\" [innerHTML]=\"extra_title\">\n  </div>\n  <div *ngIf=\"extra && extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\">\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n  <div *ngIf=\"!extra_title && !extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\" [innerHTML]=\"extraTip\">\n\n  </div>\n  <div *ngIf=\"arrow\" [ngClass]=\"arrowCls\" aria-hidden=\"true\"></div>\n</div>\n<div [ngClass]=\"rippleCls\" [ngStyle]=\"defaultProps.rippleStyle\"></div>",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ListItemComponent.ctorParameters = function () { return []; };
    ListItemComponent.propDecorators = {
        extra: [{ type: i0.Input }],
        extraTip: [{ type: i0.Input }],
        className: [{ type: i0.Input }],
        arrow: [{ type: i0.Input }],
        multipleLine: [{ type: i0.Input }],
        error: [{ type: i0.Input }],
        wrap: [{ type: i0.Input }],
        align: [{ type: i0.Input }],
        platform: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        thumb: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }],
        bingClassName: [{ type: i0.HostBinding, args: ['class',] }],
        click: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
        start: [{ type: i0.HostListener, args: ['touchstart',] }],
        move: [{ type: i0.HostListener, args: ['touchmove',] }],
        end: [{ type: i0.HostListener, args: ['touchend',] }],
        mouse_start: [{ type: i0.HostListener, args: ['mousedown',] }],
        mouse_end: [{ type: i0.HostListener, args: ['mouseup',] }]
    };

    var BriefComponent = /** @class */ (function () {
        function BriefComponent() {
            this.defaultProps = {
                prefixCls: 'am-list'
            };
        }
        return BriefComponent;
    }());
    BriefComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Brief, nzm-brief',
                    template: "<div class=\"{{ defaultProps.prefixCls }}-brief\">\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];

    var ListModule = /** @class */ (function () {
        function ListModule() {
        }
        return ListModule;
    }());
    ListModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, forms.FormsModule],
                    exports: [ListComponent, ListItemComponent, BriefComponent],
                    declarations: [ListComponent, ListItemComponent, BriefComponent]
                },] }
    ];

    var NZ_BUTTON_DIRECTIVES = [ButtonComponent];
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: NZ_BUTTON_DIRECTIVES,
                    exports: NZ_BUTTON_DIRECTIVES,
                    imports: [common.CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
                },] }
    ];

    var SwitchComponent = /** @class */ (function () {
        function SwitchComponent() {
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
            this.onChange = new i0.EventEmitter();
            this.onClick = new i0.EventEmitter();
            this.dispaly = true;
        }
        Object.defineProperty(SwitchComponent.prototype, "color", {
            set: function (value) {
                this._color = value;
                this.colorStyle = { background: this._color };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SwitchComponent.prototype, "platform", {
            set: function (value) {
                this.wrapCls = value === 'android' ? this.prefixCls + "-android" : this.prefixCls;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SwitchComponent.prototype, "checked", {
            set: function (value) {
                this.switchChecked = value;
                this.checkboxCls = {
                    'checkbox-disabled': this._disabled,
                    'checkbox-active': this.switchChecked,
                    'checkbox-inactive': !this.switchChecked
                };
                this.colorStyle = { background: value ? this._color : '' };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SwitchComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.checkboxCls = {
                    'checkbox-disabled': value,
                    'checkbox-active': this.switchChecked,
                    'checkbox-inactive': !this.switchChecked
                };
            },
            enumerable: false,
            configurable: true
        });
        SwitchComponent.prototype.changeSwitch = function (checkedValue) {
            this.onChanged(checkedValue);
            this.switchChecked = checkedValue;
            this.checkboxCls = {
                'checkbox-disabled': this._disabled,
                'checkbox-active': this.switchChecked,
                'checkbox-inactive': !this.switchChecked
            };
            this.colorStyle = { background: checkedValue ? this._color : '' };
            this.onChange.emit(checkedValue);
        };
        SwitchComponent.prototype.click = function () {
            this.onClick.emit(this.switchChecked);
        };
        SwitchComponent.prototype.writeValue = function (value) {
            this.switchChecked = value;
        };
        SwitchComponent.prototype.registerOnChange = function (fn) {
            this.onChanged = fn;
        };
        SwitchComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return SwitchComponent;
    }());
    SwitchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Switch, nzm-switch',
                    template: "<label class=\"{{ prefixCls }}\" [ngClass]=\"wrapCls\">\n  <input\n    #switchValue\n    type=\"checkbox\"\n    name=\"name\"\n    class=\"{{ prefixCls }}-checkbox\"\n    [checked]=\"switchChecked\"\n    [value]=\"switchChecked\"\n    [disabled]=\"disabled\"\n    (change)=\"changeSwitch(switchValue.checked)\"\n  />\n  <div class=\"checkbox\" [ngClass]=\"checkboxCls\" [ngStyle]=\"colorStyle\" (click)=\"click()\"></div>\n</label>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return SwitchComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        color: [{ type: i0.Input }],
        name: [{ type: i0.Input }],
        platform: [{ type: i0.Input }],
        checked: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onClick: [{ type: i0.Output }],
        dispaly: [{ type: i0.HostBinding, args: ['style.display',] }]
    };

    var SwitchModule = /** @class */ (function () {
        function SwitchModule() {
        }
        return SwitchModule;
    }());
    SwitchModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [SwitchComponent],
                    declarations: [SwitchComponent],
                    imports: [common.CommonModule, WingBlankModule]
                },] }
    ];

    var SearchBarComponent = /** @class */ (function () {
        function SearchBarComponent(_elementRef, _localeProvider) {
            var _a;
            this._elementRef = _elementRef;
            this._localeProvider = _localeProvider;
            this.prefixCls = 'am-search';
            this.cancelCls = (_a = {},
                _a[this.prefixCls + "-cancel"] = true,
                _a);
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
            this._unsubscribe$ = new rxjs.Subject();
            this.onSubmit = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
            this.onFocus = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
            this.onCancel = new i0.EventEmitter();
            this.onClear = new i0.EventEmitter();
            this.onChangeFn = function () { };
            this.onTouchFn = function () { };
        }
        Object.defineProperty(SearchBarComponent.prototype, "defaultValue", {
            set: function (value) {
                this._defaultValue = value;
                this._value = value;
                this.inputElementRef.nativeElement.value = this._value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v || '';
                this.inputElementRef.nativeElement.value = this._value;
                this.setClass();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (value) {
                this._placeholder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "showCancelButton", {
            get: function () {
                return this._showCancelButton;
            },
            set: function (value) {
                this._showCancelButton = value;
                this.setClass();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "cancelText", {
            get: function () {
                return this._cancelText;
            },
            set: function (value) {
                if (value !== undefined) {
                    this._cancelText = value;
                    this._isCustomText = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "maxLength", {
            get: function () {
                return this._maxLength;
            },
            set: function (value) {
                this._maxLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarComponent.prototype, "setFocus", {
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        SearchBarComponent.prototype.setClass = function () {
            var _a, _b, _c;
            this.wrapCls = (_a = {},
                _a["" + this.prefixCls] = true,
                _a[this.prefixCls + "-start"] = !!(this._focus || (this._value && this._value.length > 0)) && !this._disabled,
                _a);
            this.cancelCls = (_b = {},
                _b[this.prefixCls + "-cancel"] = true,
                _b[this.prefixCls + "-cancel-show"] = this._showCancelButton || this._focus || (this._value && this._value.length > 0),
                _b[this.prefixCls + "-cancel-anim"] = this._focus,
                _b);
            this.clearCls = (_c = {},
                _c[this.prefixCls + "-clear"] = this._value && this._value.length > 0,
                _c[this.prefixCls + "-clear-show"] = this._value && this._value.length > 0 && !this._isSubmit,
                _c[this.prefixCls + "-clear-active"] = this._isClearClicking,
                _c);
        };
        SearchBarComponent.prototype.setStyle = function () {
            if (this._inputContainerRef.className.indexOf(this.prefixCls + "-start") > -1) {
                var realWidth = this._syntheticPhContainerRef.getBoundingClientRect().width;
                this._syntheticPhRef.style.width = Math.ceil(realWidth) + 'px';
                if (!this._showCancelButton) {
                    this._rightBtnRef.style.marginRight = '0';
                }
            }
            else {
                this._syntheticPhRef.style.width = '100%';
                if (!this._showCancelButton) {
                    this._rightBtnInitMarginLeft = window.getComputedStyle(this._rightBtnRef)['margin-left'];
                    var btnMarginRight = this._rightBtnRef.offsetWidth + parseInt(this._rightBtnInitMarginLeft, 10);
                    this._rightBtnRef.style.marginRight = '-' + btnMarginRight + 'px';
                }
            }
        };
        SearchBarComponent.prototype.onSearchbarBlur = function () {
            var self = this;
            setTimeout(function () {
                if (!self._blurFromOnClear && self._value === '' && self._focus) {
                    self._focus = false;
                    self._value = '';
                    self.onBlur.emit();
                    self.setClass();
                }
                self._blurFromOnClear = false;
            }, 50);
        };
        SearchBarComponent.prototype.onSearchbarFocus = function () {
            this._focus = true;
            this._isSubmit = false;
            this.onFocus.emit();
            this.setClass();
        };
        SearchBarComponent.prototype.onSearchbarChange = function (e) {
            this._focus = true;
            this._value = e;
            this.onChange.emit(e);
            this.onChangeFn(e);
            this.setClass();
        };
        SearchBarComponent.prototype.onSearchSubmit = function (e) {
            e.preventDefault();
            this._value = e.target[0].value;
            this._isSubmit = true;
            this.onSubmit.emit(this._value);
            this.setClass();
            this._blurFromOnClear = true;
            this.inputElementRef.nativeElement.blur();
        };
        SearchBarComponent.prototype.onSearchbarCancel = function () {
            this._focus = false;
            this._value = '';
            this.onCancel.emit();
            this.setClass();
        };
        SearchBarComponent.prototype.onSearchbarClear = function () {
            var _this = this;
            this._blurFromOnClear = true;
            this._isClearClicking = true;
            this.onSearchbarChange('');
            this.inputElementRef.nativeElement.focus();
            this.onClear.emit(this._value);
            this.setClass();
            setTimeout(function () {
                _this._value = '';
                _this._isClearClicking = false;
                _this._blurFromOnClear = false;
                _this.setClass();
            }, 100);
            this.onSearchbarFocus();
        };
        SearchBarComponent.prototype.onSetCompositionState = function (isComposing) {
            this.isComposing = isComposing;
        };
        SearchBarComponent.prototype.writeValue = function (value) {
            this._value = value || '';
            this.inputElementRef.nativeElement.value = this._value;
            this.setClass();
        };
        SearchBarComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        SearchBarComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchFn = fn;
        };
        SearchBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setClass();
            this._localeProvider.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                _this.locale = _this._localeProvider.getLocaleSubObj('SearchBar');
                _this._cancelText = _this._isCustomText ? _this._cancelText : _this.locale.cancelText;
            });
        };
        SearchBarComponent.prototype.ngAfterViewInit = function () {
            this._syntheticPhContainerRef = this._elementRef.nativeElement.getElementsByClassName(this.prefixCls + "-synthetic-ph-container")[0];
            this._syntheticPhRef = this._elementRef.nativeElement.getElementsByClassName(this.prefixCls + "-synthetic-ph")[0];
            this._rightBtnRef = this._elementRef.nativeElement.getElementsByClassName('cancel')[0];
            this._inputContainerRef = this._elementRef.nativeElement.getElementsByClassName("" + this.prefixCls)[0];
        };
        SearchBarComponent.prototype.ngAfterViewChecked = function () {
            this.setStyle();
        };
        SearchBarComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return SearchBarComponent;
    }());
    SearchBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SearchBar, nzm-search-bar',
                    template: "<form name=\"myForm\" class=\"{{ prefixCls }}\" [ngClass]=\"wrapCls\" action=\"#\" (submit)=\"onSearchSubmit($event)\">\n  <div class=\"{{ prefixCls }}-input\">\n    <div\n      class=\"{{ prefixCls }}-synthetic-ph\"\n      style=\"box-sizing:unset\"\n      [@cancelButtonState]=\"showCancelButton ? 'visible' : 'hidden'\"\n    >\n      <span class=\"{{ prefixCls }}-synthetic-ph-container\">\n        <i class=\"{{ prefixCls }}-synthetic-ph-icon\"></i>\n        <span\n          class=\"{{ prefixCls }}-synthetic-ph-placeholder\"\n          [ngStyle]=\"{ visibility: placeholder && !isComposing && !value ? 'visible' : 'hidden' }\"\n        >\n          {{ placeholder }}\n        </span>\n      </span>\n    </div>\n    <input\n      #search\n      class=\"{{ prefixCls }}-value\"\n      style=\"outline:none;\"\n      [name]=\"'search'\"\n      [type]=\"'search'\"\n      [disabled]=\"disabled\"\n      [maxlength]=\"maxLength\"\n      [placeholder]=\"placeholder\"\n      [ngModel]=\"value\"\n      (blur)=\"onSearchbarBlur()\"\n      (focus)=\"onSearchbarFocus()\"\n      (ngModelChange)=\"onSearchbarChange($event)\"\n      (compositionstart)=\"onSetCompositionState(true)\"\n      (compositionend)=\"onSetCompositionState(false)\"\n    />\n    <a [ngClass]=\"clearCls\" style=\"box-sizing: content-box;transition: 0s\" (click)=\"onSearchbarClear()\"></a>\n  </div>\n  <div class=\"cancel\" [ngClass]=\"cancelCls\" (click)=\"onSearchbarCancel()\">\n    {{ cancelText }}\n  </div>\n</form>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return SearchBarComponent; }),
                            multi: true
                        }
                    ],
                    animations: [
                        animations.trigger('cancelButtonState', [
                            animations.state('visible', animations.style({ width: '*' })),
                            animations.state('hidden', animations.style({ width: '100%' })),
                            animations.transition('visible =>hidden', [animations.animate(300, animations.style({ width: '100%' }))]),
                            animations.transition('hidden => visible', [animations.animate(300, animations.style({ width: '*' }))])
                        ])
                    ]
                },] }
    ];
    SearchBarComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: LocaleProviderService }
    ]; };
    SearchBarComponent.propDecorators = {
        inputElementRef: [{ type: i0.ViewChild, args: ['search', { static: true },] }],
        defaultValue: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        showCancelButton: [{ type: i0.Input }],
        cancelText: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        maxLength: [{ type: i0.Input }],
        setFocus: [{ type: i0.Input }],
        onSubmit: [{ type: i0.Output }],
        onChange: [{ type: i0.Output }],
        onFocus: [{ type: i0.Output }],
        onBlur: [{ type: i0.Output }],
        onCancel: [{ type: i0.Output }],
        onClear: [{ type: i0.Output }]
    };

    var LocaleProviderPipe = /** @class */ (function () {
        function LocaleProviderPipe(_locale) {
            this._locale = _locale;
        }
        LocaleProviderPipe.prototype.transform = function (keyPath) {
            return this._locale.getLocaleValue(keyPath);
        };
        return LocaleProviderPipe;
    }());
    LocaleProviderPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'localeProvider'
                },] }
    ];
    LocaleProviderPipe.ctorParameters = function () { return [
        { type: LocaleProviderService }
    ]; };

    var ɵ0$1 = zh_CN;
    var LocaleProviderModule = /** @class */ (function () {
        function LocaleProviderModule() {
        }
        return LocaleProviderModule;
    }());
    LocaleProviderModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [LocaleProviderPipe],
                    exports: [LocaleProviderPipe],
                    providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: ɵ0$1 }, LOCALE_PROVIDER_SERVICE_PROVIDER]
                },] }
    ];

    var SearchBarModule = /** @class */ (function () {
        function SearchBarModule() {
        }
        return SearchBarModule;
    }());
    SearchBarModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [SearchBarComponent],
                    declarations: [SearchBarComponent],
                    imports: [common.CommonModule, forms.FormsModule, LocaleProviderModule]
                },] }
    ];

    var StepperComponent = /** @class */ (function () {
        function StepperComponent() {
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
            this.onChange = new i0.EventEmitter();
            this.clsStepper = true;
            this.clsStpDisabled = this._disabled;
            this.clsShowNum = this._showNumber;
            this.onChangeFn = function () { };
            this.onTouchFn = function () { };
        }
        Object.defineProperty(StepperComponent.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (value) {
                this._max = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "min", {
            get: function () {
                return this._min;
            },
            set: function (value) {
                this._min = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "step", {
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "defaultValue", {
            set: function (value) {
                if (value) {
                    this._defaultValue = value;
                    this._value = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                if (value) {
                    this._downDisabled = value;
                    this._upDisabled = value;
                }
                this._disabled = value;
                this.clsStpDisabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "readOnly", {
            get: function () {
                return this._readOnly;
            },
            set: function (value) {
                this._readOnly = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepperComponent.prototype, "showNumber", {
            set: function (value) {
                this._showNumber = value;
                this.clsShowNum = value;
            },
            enumerable: false,
            configurable: true
        });
        StepperComponent.prototype.onIncrease = function () {
            var _this = this;
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
                setTimeout(function () {
                    _this._isUpClick = false;
                    _this.setCls();
                }, 100);
            }
        };
        StepperComponent.prototype.onDecrease = function () {
            var _this = this;
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
                setTimeout(function () {
                    _this._isDownClick = false;
                    _this.setCls();
                }, 100);
            }
        };
        StepperComponent.prototype.inputChange = function (event) {
            var value = event;
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
        };
        StepperComponent.prototype.setCls = function () {
            var _a, _b;
            this.upDisableCls = (_a = {},
                _a[this.prefixCls + "-handler-up-disabled"] = this._upDisabled,
                _a[this.prefixCls + "-handler-active"] = this._isUpClick,
                _a);
            this.downDisableCls = (_b = {},
                _b[this.prefixCls + "-handler-down-disabled"] = this._downDisabled,
                _b[this.prefixCls + "-handler-active"] = this._isDownClick,
                _b);
        };
        StepperComponent.prototype.ngOnChanges = function () {
            if (this._disabled) {
                this._downDisabled = true;
                this._upDisabled = true;
            }
            else {
                this._upDisabled = this.plus(this._value, this._step) > this._max ? true : false;
                this._downDisabled = this.minus(this._value, this._step) < this._min ? true : false;
            }
            this.setCls();
        };
        StepperComponent.prototype.writeValue = function (value) {
            this._value = value;
            this.ngOnChanges();
        };
        StepperComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        StepperComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchFn = fn;
        };
        StepperComponent.prototype.plus = function (num1, num2) {
            if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
                return;
            }
            var baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
            return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
        };
        StepperComponent.prototype.minus = function (num1, num2) {
            if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
                return;
            }
            var baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
            return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
        };
        StepperComponent.prototype.digitLength = function (num) {
            var eSplit = num.toString().split(/[eE]/);
            var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
            return len > 0 ? len : 0;
        };
        StepperComponent.prototype.times = function (num1, num2) {
            var num1Changed = this.floatToFixed(num1);
            var num2Changed = this.floatToFixed(num2);
            var baseNum = this.digitLength(num1) + this.digitLength(num2);
            var leftValue = num1Changed * num2Changed;
            return leftValue / Math.pow(10, baseNum);
        };
        StepperComponent.prototype.floatToFixed = function (num) {
            if (num.toString().indexOf('e') === -1) {
                return Number(num.toString().replace('.', ''));
            }
            var dLen = this.digitLength(num);
            return dLen > 0 ? this.strip(num * Math.pow(10, dLen)) : num;
        };
        StepperComponent.prototype.strip = function (num, precision) {
            if (precision === void 0) { precision = 12; }
            return +parseFloat(num.toPrecision(precision));
        };
        return StepperComponent;
    }());
    StepperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Stepper, nzm-stepper',
                    template: "<div class=\"{{ prefixCls }}-handler-wrap\">\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-up\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"upDisableCls\"\n    (click)=\"onIncrease()\"\n  >\n    <Icon [type]=\"'plus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-down\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"downDisableCls\"\n    (click)=\"onDecrease()\"\n  >\n    <Icon [type]=\"'minus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n</div>\n<div class=\"{{ prefixCls }}-input-wrap\">\n  <input\n    class=\"{{ prefixCls }}-input\"\n    style=\"outline:none\"\n    [disabled]=\"disabled\"\n    [readonly]=\"readOnly\"\n    [autocomplete]=\"'off'\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [(ngModel)]=\"value\"\n    (ngModelChange)=\"inputChange($event)\"\n  />\n</div>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return StepperComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        max: [{ type: i0.Input }],
        min: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        step: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        readOnly: [{ type: i0.Input }],
        showNumber: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        clsStepper: [{ type: i0.HostBinding, args: ['class.am-stepper',] }],
        clsStpDisabled: [{ type: i0.HostBinding, args: ['class.am-stepper-disabled',] }],
        clsShowNum: [{ type: i0.HostBinding, args: ['class.showNumber',] }]
    };

    var StepperModule = /** @class */ (function () {
        function StepperModule() {
        }
        return StepperModule;
    }());
    StepperModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [StepperComponent],
                    declarations: [StepperComponent],
                    imports: [common.CommonModule, forms.FormsModule, IconModule]
                },] }
    ];

    var StepComponent = /** @class */ (function () {
        function StepComponent(_el) {
            var _a;
            this._el = _el;
            this.prefixCls = 'am-steps';
            this.stepItemCls = {};
            this.iconCls = (_a = {},
                _a[this.prefixCls + "-icon"] = true,
                _a);
            this.isIconString = true;
            this.outStatus = 'process';
            this.isCustomStatus = false;
            this.isCustomIcon = false;
            this.title = null;
            this.description = null;
            this._currentIndex = 0;
            this.clsStepItem = true;
        }
        Object.defineProperty(StepComponent.prototype, "status", {
            get: function () {
                return this._status;
            },
            set: function (value) {
                if (value) {
                    this._status = value;
                    this.isCustomStatus = true;
                    this.setIcon();
                    this.setClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepComponent.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                if (value) {
                    this._icon = value;
                    this.isCustomIcon = true;
                    this.setClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepComponent.prototype, "currentIndex", {
            set: function (current) {
                this._currentIndex = current;
                if (!this.isCustomStatus) {
                    this._status = current > this.stepNumber ? exports.StepStatusEnum.FINISH : current === this.stepNumber ?
                        this.outStatus || '' : exports.StepStatusEnum.WAIT;
                    this.setIcon();
                    this.setClass();
                }
            },
            enumerable: false,
            configurable: true
        });
        StepComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        StepComponent.prototype.setClass = function () {
            var _a;
            this.stepItemCls = (_a = {},
                _a[this.prefixCls + "-item-" + this.status] = true,
                _a[this.prefixCls + "-item-custom"] = this.isCustomIcon || (this.icon && this._currentIndex !== this.stepNumber),
                _a);
        };
        StepComponent.prototype.setIcon = function () {
            if (!this.isCustomIcon) {
                switch (this._status) {
                    case exports.StepStatusEnum.FINISH:
                        this._icon = 'check-circle-o';
                        break;
                    case exports.StepStatusEnum.ERROR:
                        this._icon = 'cross-circle-o';
                        break;
                    case exports.StepStatusEnum.WAIT:
                        this._icon = 'ellipsis';
                        break;
                    default:
                        break;
                }
            }
        };
        StepComponent.prototype.ngOnInit = function () { };
        return StepComponent;
    }());
    StepComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Step, nzm-step',
                    template: "<div [ngClass]=\"stepItemCls\">\n  <div class=\"{{ prefixCls }}-item-tail\">\n    {{ tailContent }}\n  </div>\n  <div class=\"{{ prefixCls }}-item-icon\">\n    <span *ngIf=\"isTemplateRef(icon)\" [ngClass]=\"iconCls\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && (status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\">\n      <Icon [type]=\"icon\" [size]=\"iconSize\"> </Icon>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && !(status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\"\n      >{{ stepNumber }}\n    </span>\n  </div>\n  <div class=\"{{ prefixCls }}-item-content\">\n    <div class=\"{{ prefixCls }}-item-title\">\n      <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n    </div>\n    <div *ngIf=\"description\" class=\"{{ prefixCls }}-item-description\">\n      <ng-container *ngIf=\"!isTemplateRef(description); else descriptionTemplate\">{{ description }}</ng-container>\n    </div>\n  </div>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"description\"></ng-template>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return StepComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    StepComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    StepComponent.propDecorators = {
        status: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        description: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        clsStepItem: [{ type: i0.HostBinding, args: ['class.am-steps-item',] }]
    };
    exports.StepStatusEnum = void 0;
    (function (StepStatusEnum) {
        StepStatusEnum["WAIT"] = "wait";
        StepStatusEnum["PROCESS"] = "process";
        StepStatusEnum["FINISH"] = "finish";
        StepStatusEnum["ERROR"] = "error";
    })(exports.StepStatusEnum || (exports.StepStatusEnum = {}));
    exports.StepDirectionEnum = void 0;
    (function (StepDirectionEnum) {
        StepDirectionEnum["VERTICAL"] = "vertical";
        StepDirectionEnum["HORIZONTAL"] = "horizontal";
    })(exports.StepDirectionEnum || (exports.StepDirectionEnum = {}));

    var StepsComponent = /** @class */ (function () {
        function StepsComponent(_elf, _render) {
            this._elf = _elf;
            this._render = _render;
            this.prefixCls = 'am-steps';
            this._current = 0;
            this._status = exports.StepStatusEnum.PROCESS;
            this._direction = exports.StepDirectionEnum.VERTICAL;
            this.clsSteps = true;
        }
        Object.defineProperty(StepsComponent.prototype, "current", {
            set: function (value) {
                if (value >= 0) {
                    this._current = value;
                    if (this.stepItems) {
                        this.setStepStyle();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepsComponent.prototype, "size", {
            set: function (value) {
                this._size = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepsComponent.prototype, "status", {
            set: function (value) {
                this._status = value;
                if (this.stepItems) {
                    this.setStepStyle();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StepsComponent.prototype, "direction", {
            set: function (value) {
                this._direction = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        StepsComponent.prototype.setStepStyle = function () {
            var itemCount = this.stepItems.length;
            var itemArr = this.stepItems['_results'];
            for (var index = 0; index < itemCount; index++) {
                var step = itemArr[index];
                step.stepNumber = index + 1;
                step.outStatus = this._status;
                step.currentIndex = this._current + 1;
                step.iconSize = this._size === 'small' ? (this._status === exports.StepStatusEnum.WAIT ? 'xxs' : 'xs') : 'md';
                if (index < itemCount - 1 && itemArr[index + 1].status === exports.StepStatusEnum.ERROR) {
                    step.stepItemCls = step.stepItemCls
                        ? Object.assign(step.stepItemCls, { 'error-tail': true })
                        : { 'error-tail': true };
                }
            }
        };
        StepsComponent.prototype.setCls = function () {
            if (this._direction === exports.StepDirectionEnum.HORIZONTAL) {
                this.clsStepsLabelVtl = true;
                this.clsStepsHztl = true;
                this.clsStepsVtl = false;
            }
            else if (this._direction === exports.StepDirectionEnum.VERTICAL) {
                this.clsStepsVtl = true;
                this.clsStepsHztl = false;
            }
            if (this._size === 'small') {
                this.clsStepsSmall = true;
            }
            else {
                this.clsStepsSmall = false;
            }
        };
        StepsComponent.prototype.ngOnInit = function () {
            this.setCls();
        };
        StepsComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.setStepStyle();
            }, 0);
            this.stepItems.changes.subscribe(function (change) {
                setTimeout(function () {
                    _this.setStepStyle();
                }, 0);
            });
        };
        return StepsComponent;
    }());
    StepsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Steps,nzm-steps',
                    template: "<ng-content></ng-content>\n"
                },] }
    ];
    StepsComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    StepsComponent.propDecorators = {
        stepItems: [{ type: i0.ContentChildren, args: [StepComponent,] }],
        current: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        status: [{ type: i0.Input }],
        direction: [{ type: i0.Input }],
        clsSteps: [{ type: i0.HostBinding, args: ['class.am-steps',] }],
        clsStepsSmall: [{ type: i0.HostBinding, args: ['class.am-steps-small',] }],
        clsStepsLabelVtl: [{ type: i0.HostBinding, args: ['class.am-steps-label-vertical',] }],
        clsStepsVtl: [{ type: i0.HostBinding, args: ['class.am-steps-vertical',] }],
        clsStepsHztl: [{ type: i0.HostBinding, args: ['class.am-steps-horizontal',] }]
    };

    var StepsModule = /** @class */ (function () {
        function StepsModule() {
        }
        return StepsModule;
    }());
    StepsModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [StepsComponent, StepComponent],
                    declarations: [StepsComponent, StepComponent],
                    imports: [common.CommonModule, forms.FormsModule, IconModule]
                },] }
    ];

    var CarouselSlideComponent = /** @class */ (function () {
        function CarouselSlideComponent() {
            this.container = true;
            this.height = 'auto';
            this.overflow = 'hidden';
        }
        return CarouselSlideComponent;
    }());
    CarouselSlideComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CarouselSlide, nzm-carousel-slide',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CarouselSlideComponent.propDecorators = {
        container: [{ type: i0.HostBinding, args: ['class.am-carousel-container',] }],
        width: [{ type: i0.HostBinding, args: ['style.width.px',] }],
        height: [{ type: i0.HostBinding, args: ['style.height',] }],
        left: [{ type: i0.HostBinding, args: ['style.left.px',] }],
        top: [{ type: i0.HostBinding, args: ['style.top.px',] }],
        margin: [{ type: i0.HostBinding, args: ['style.margin',] }],
        overflow: [{ type: i0.HostBinding, args: ['style.overflow',] }]
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

    var CarouselComponent = /** @class */ (function () {
        function CarouselComponent(_ele) {
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
            this.afterChange = new i0.EventEmitter();
            this.beforeChange = new i0.EventEmitter();
            this.carouselWrapper = true;
            this.carouselwrap = true;
        }
        Object.defineProperty(CarouselComponent.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (value) {
                if (typeof value === 'undefined') {
                    value = 0;
                }
                this._selectedIndex = Math.abs(value);
                if (this._nodeArr.length > 0) {
                    this.carousel(1);
                }
            },
            enumerable: false,
            configurable: true
        });
        CarouselComponent.prototype.panstart = function (event) {
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
        };
        CarouselComponent.prototype.panmove = function (event) {
            event.stopPropagation();
            if (!this._dragging || !this._isMouseDown) {
                return;
            }
            var direction = this.swipeDirection(this.touchObject.startX, getEventTarget(event).pageX, this.touchObject.startY, getEventTarget(event).pageY).direction;
            if (direction === 0) {
                return;
            }
            var length = this.vertical
                ? Math.abs(getEventTarget(event).pageY - this.touchObject.startY)
                : Math.abs(getEventTarget(event).pageX - this.touchObject.startX);
            var offset = -this.touchObject.direction * length - this.currentSelectedIndex * this._rationWidth;
            this.touchObject = {
                startX: this.touchObject.startX,
                startY: this.touchObject.startY,
                endX: getEventTarget(event).pageX,
                endY: getEventTarget(event).pageY,
                length: length,
                direction: direction,
                offset: offset
            };
            if (direction !== 0) {
                this.setSlideStyles(this.currentSelectedIndex, this.touchObject.direction);
            }
            this.getListStyles(offset);
        };
        CarouselComponent.prototype.panend = function (event) {
            var _this = this;
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
            setTimeout(function () {
                _this.startTimer();
            }, this.speed);
        };
        CarouselComponent.prototype.cancel = function () {
            var _this = this;
            setTimeout(function () {
                _this.startTimer();
            }, this.speed);
        };
        CarouselComponent.prototype.resize = function () {
            var _this = this;
            if (this._resizeTimer) {
                clearTimeout(this._resizeTimer);
            }
            this._resizeTimer = setTimeout(function () {
                _this.ngAfterViewInit();
                clearTimeout(_this._resizeTimer);
            }, 200);
        };
        CarouselComponent.prototype.initCarouselSize = function () {
            var nativeElement = this._ele.nativeElement;
            this.slideHeight = nativeElement.querySelector('carouselslide').clientHeight;
            this._currentSlideHeight = this.slideHeight * this.slideWidth;
            this._currentSlideWidth = nativeElement.clientWidth;
            this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
            this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
        };
        CarouselComponent.prototype.carouselInit = function (items) {
            var _this = this;
            this.infinite = this.infinite || true;
            this._nodeArr = items['_results'];
            var shouldDragging = this._nodeArr.length > 1;
            this._dragging = this.dragging && shouldDragging ? true : false;
            if (this._nodeArr.length > 1) {
                this.lastIndex = this._nodeArr.length - 1;
                setTimeout(function () {
                    _this._nodeArr.forEach(function (v, index) {
                        v.width = _this.vertical ? 'auto' : _this._rationWidth - _this.cellSpacing;
                        v.left = _this.vertical ? 0 : index === _this.lastIndex ? -_this._rationWidth : index * _this._rationWidth;
                        v.top = _this.vertical ? (index === _this.lastIndex ? -_this._rationWidth : index * _this._rationWidth) : 0;
                        v.margin = _this.vertical ? _this.cellSpacing / 2 + "px auto" : "auto " + _this.cellSpacing / 2 + "px";
                    });
                    _this.startTimer();
                }, 0);
            }
            else if (this._nodeArr.length === 1) {
                setTimeout(function () {
                    _this._nodeArr.forEach(function (v) {
                        v.width = _this.vertical ? 'auto' : _this._rationWidth - _this.cellSpacing;
                        v.left = 0;
                        v.top = 0;
                        v.margin = "auto " + _this.cellSpacing / 2 + "px";
                    });
                }, 0);
            }
        };
        CarouselComponent.prototype.startTimer = function () {
            var _this = this;
            if (!this.autoplay) {
                return;
            }
            this.stopTimer();
            this._timer = this.autoplayInterval
                ? setInterval(function () {
                    if (document.getElementsByTagName('carousel').length === 0) {
                        return;
                    }
                    _this.carousel(1);
                }, this.autoplayInterval)
                : 0;
        };
        CarouselComponent.prototype.stopTimer = function () {
            clearInterval(this._timer);
        };
        CarouselComponent.prototype.carousel = function (moveDirection) {
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
        };
        CarouselComponent.prototype.moveUp = function () {
            this.gotoCarousel(this.getAfterNode(false));
        };
        CarouselComponent.prototype.moveDown = function () {
            this.gotoCarousel(this.getAfterNode(true));
        };
        CarouselComponent.prototype.moveLeft = function () {
            this.gotoCarousel(this.getAfterNode(false));
        };
        CarouselComponent.prototype.moveRight = function () {
            this.gotoCarousel(this.getAfterNode(true));
        };
        CarouselComponent.prototype.getAfterNode = function (pre) {
            var _this = this;
            var nextIndex;
            if (pre) {
                if (this.currentSelectedIndex <= 0) {
                    this.getListStyles(this._rationWidth);
                    setTimeout(function () {
                        _this._nodeArr.forEach(function (v, tempIndex) {
                            if (tempIndex === 0) {
                                v.left = _this.vertical ? 0 : _this._nodeArr.length * _this._rationWidth;
                                v.top = _this.vertical ? _this._nodeArr.length * _this._rationWidth : 0;
                            }
                            else {
                                v.left = _this.vertical ? 0 : tempIndex * _this._rationWidth;
                                v.top = _this.vertical ? tempIndex * _this._rationWidth : 0;
                            }
                        });
                        _this.getListStyles(-_this._rationWidth * (_this.items.length - 1));
                    }, this.speed);
                    nextIndex = !this.infinite ? null : this.lastIndex;
                    this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
                    return nextIndex;
                }
                nextIndex = this.currentSelectedIndex - 1;
                this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
                this._nodeArr.forEach(function (v, tempIndex) {
                    if (0 === tempIndex && nextIndex === _this._nodeArr.length - 2) {
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
        };
        CarouselComponent.prototype.caculateDirectionLeftCurrentIndex = function () {
            var previousIndex = this.currentSelectedIndex;
            this.currentSelectedIndex = (previousIndex + 1) % this.items.length;
        };
        CarouselComponent.prototype.caculateDirectionRightCurrentIndex = function () {
            if (this.currentSelectedIndex === 0) {
                this.currentSelectedIndex = this.items.length;
            }
            var previousIndex = this.currentSelectedIndex;
            this.currentSelectedIndex = (previousIndex - 1) % this.items.length;
        };
        CarouselComponent.prototype.gotoCarousel = function (afterIndex) {
            var _this = this;
            if (afterIndex === null) {
                return;
            }
            this.getCurrentIndex();
            if (afterIndex === 0) {
                setTimeout(function () {
                    _this._nodeArr.forEach(function (v, index) {
                        if (index === _this._nodeArr.length - 1) {
                            v.left = _this.vertical ? 0 : -_this._rationWidth;
                            v.top = _this.vertical ? -_this._rationWidth : 0;
                        }
                        else {
                            v.left = _this.vertical ? 0 : index * _this._rationWidth;
                            v.top = _this.vertical ? index * _this._rationWidth : 0;
                        }
                    });
                    _this.startTimer();
                    _this.getListStyles(0);
                }, this.speed);
            }
            this.currentSelectedIndex = afterIndex;
            this.afterChange.emit(this.currentSelectedIndex);
        };
        CarouselComponent.prototype.getCurrentIndex = function () {
            if (this.touchObject.direction === 1) {
                this.caculateDirectionLeftCurrentIndex();
            }
            else {
                this.caculateDirectionRightCurrentIndex();
            }
        };
        CarouselComponent.prototype.setSlideStyles = function (index, direction, xDist) {
            var _this = this;
            if (xDist === void 0) { xDist = 0; }
            if (direction === 1) {
                this._nodeArr.forEach(function (v, tempIndex) {
                    if (index < _this._nodeArr.length && index - 1 === tempIndex) {
                        if (xDist === 0 || xDist > _this._spaceWidth) {
                            v.left = _this.vertical ? 0 : (_this._nodeArr.length + tempIndex) * _this._rationWidth;
                            v.top = _this.vertical ? (_this._nodeArr.length + tempIndex) * _this._rationWidth : 0;
                        }
                    }
                    else if (_this._nodeArr.length - 1 === tempIndex && index !== 2) {
                        if (xDist === 0 || xDist > _this._spaceWidth) {
                            v.left = _this.vertical ? 0 : (_this._nodeArr.length - 1) * _this._rationWidth;
                            v.top = _this.vertical ? (_this._nodeArr.length - 1) * _this._rationWidth : 0;
                        }
                    }
                    else if (index === _this._nodeArr.length - 1 && tempIndex === 1 && _this.autoplay) {
                        v.left = _this.vertical ? 0 : (_this._nodeArr.length + tempIndex) * _this._rationWidth;
                        v.top = _this.vertical ? tempIndex * _this._rationWidth : 0;
                    }
                    else if (index === _this._nodeArr.length - 1 && tempIndex === 0 && !_this.autoplay) {
                        v.left = _this.vertical ? 0 : (_this._nodeArr.length + tempIndex) * _this._rationWidth;
                        v.top = _this.vertical ? tempIndex * _this._rationWidth : 0;
                    }
                });
            }
            else if (direction === -1) {
                this._nodeArr.forEach(function (v, tempIndex) {
                    if (index === 0 && _this._nodeArr.length - 1 === tempIndex) {
                        v.left = _this.vertical ? 0 : direction * _this._rationWidth;
                        v.top = _this.vertical ? direction * _this._rationWidth : 0;
                    }
                    else if (index === _this._nodeArr.length - 2 && index + 1 === tempIndex) {
                        v.left = _this.vertical ? 0 : direction * _this._rationWidth;
                        v.top = _this.vertical ? direction * _this._rationWidth : 0;
                    }
                    else if (index === 1 && 0 === tempIndex) {
                        v.left = _this.vertical ? 0 : direction * _this._rationWidth * tempIndex;
                        v.top = _this.vertical ? direction * _this._rationWidth : 0;
                    }
                    else if (index > 1) {
                        v.left = _this.vertical ? 0 : tempIndex * _this._rationWidth;
                        v.top = _this.vertical ? tempIndex * _this._rationWidth : 0;
                    }
                });
            }
        };
        CarouselComponent.prototype.getListStyles = function (offset) {
            if (offset === void 0) { offset = 0; }
            var positionOffset = offset +
                (this.vertical
                    ? (this.slideHeight - this._currentSlideHeight) / 2
                    : (this._currentSlideWidth - this._rationWidth) / 2) -
                this.cellSpacing;
            this.style = {
                height: this._currentSlideHeight + 'px',
                width: '100%',
                transform: this.vertical
                    ? "translate3d(0px, " + positionOffset + "px, 0px)"
                    : "translate3d(" + positionOffset + "px, 0px, 0px)",
                margin: this.vertical ? (this.cellSpacing / 2) * -1 + "px 0px" : "0px " + (this.cellSpacing / 2) * -1 + "px"
            };
        };
        CarouselComponent.prototype.swipeDirection = function (x1, x2, y1, y2) {
            var xDist = x1 - x2;
            var yDist = y1 - y2;
            var r = Math.atan2(yDist, xDist);
            var swipeAngle = Math.round((r * 180) / Math.PI);
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
        };
        Object.defineProperty(CarouselComponent.prototype, "page", {
            get: function () {
                return this.dots ? this.currentSelectedIndex : 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "pageCount", {
            get: function () {
                return this.dots ? this.items.length : 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "dotindicatorStatus", {
            get: function () {
                return this.dots ? this.items.length > 1 : this.dots;
            },
            enumerable: false,
            configurable: true
        });
        CarouselComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.touchObject = { direction: 1 };
            this._transition = "transform " + this.speed / 1000 + "s";
            this.items.changes.subscribe(function (items) {
                _this.carouselInit(items);
            });
            this.initCarouselSize();
            if (!this._resizeTimer) {
                this.selectedIndex = this.items.length - 1 < this.selectedIndex ? 0 : this.selectedIndex;
                setTimeout(function () {
                    _this.currentSelectedIndex = _this.selectedIndex;
                }, 0);
            }
            var selectedIndex = this._resizeTimer ? this.currentSelectedIndex : this.selectedIndex;
            var index = this.items.length > 1 ? (this.items.length - 1 === selectedIndex ? -1 : selectedIndex) : 0;
            this.getListStyles(-index * this._rationWidth);
            this.carouselInit(this.items);
            var nativeElement = this._ele.nativeElement;
            var targetNode = nativeElement.querySelector('carouselslide');
            var config = { attributes: true, childList: true, subtree: true };
            var callback = function (mutationsList) {
                var e_1, _a;
                try {
                    for (var mutationsList_1 = __values(mutationsList), mutationsList_1_1 = mutationsList_1.next(); !mutationsList_1_1.done; mutationsList_1_1 = mutationsList_1.next()) {
                        var mutation = mutationsList_1_1.value;
                        if (mutation.type == 'attributes') {
                            if (_this.slideHeight !== nativeElement.querySelector('carouselslide').clientHeight) {
                                _this.initCarouselSize();
                                _this.getListStyles(-index * _this._rationWidth);
                                _this.carouselInit(_this.items);
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (mutationsList_1_1 && !mutationsList_1_1.done && (_a = mutationsList_1.return)) _a.call(mutationsList_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            };
            if (this._observer) {
                this._observer.disconnect();
            }
            this._observer = new MutationObserver(callback);
            this._observer.observe(targetNode, config);
        };
        CarouselComponent.prototype.ngOnDestroy = function () {
            this._observer.disconnect();
            this._observer = null;
            this.stopTimer();
        };
        return CarouselComponent;
    }());
    CarouselComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Carousel, nzm-carousel',
                    encapsulation: i0.ViewEncapsulation.None,
                    template: "<div class=\"slider-frame\" [ngStyle]=\"{ overflow: frameOverflow }\">\n  <ul class=\"slider-list\" [ngStyle]=\"style\">\n    <ng-content></ng-content>\n  </ul>\n</div>\n<DotIndicator\n  *ngIf=\"dotindicatorStatus\"\n  class=\"am-carousel-wrap-dot\"\n  [page]=\"page\"\n  [dotStyle]=\"dotStyle\"\n  [pageCount]=\"pageCount\"\n  [dotActiveStyle]=\"dotActiveStyle\"\n></DotIndicator>\n"
                },] }
    ];
    CarouselComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    CarouselComponent.propDecorators = {
        items: [{ type: i0.ContentChildren, args: [CarouselSlideComponent,] }],
        speed: [{ type: i0.Input }],
        dots: [{ type: i0.Input }],
        vertical: [{ type: i0.Input }],
        autoplay: [{ type: i0.Input }],
        autoplayInterval: [{ type: i0.Input }],
        infinite: [{ type: i0.Input }],
        dotStyle: [{ type: i0.Input }],
        dotActiveStyle: [{ type: i0.Input }],
        frameOverflow: [{ type: i0.Input }],
        cellSpacing: [{ type: i0.Input }],
        slideWidth: [{ type: i0.Input }],
        swipeSpeed: [{ type: i0.Input }],
        dragging: [{ type: i0.Input }],
        selectedIndex: [{ type: i0.Input }],
        afterChange: [{ type: i0.Output }],
        beforeChange: [{ type: i0.Output }],
        carouselWrapper: [{ type: i0.HostBinding, args: ['class.am-carousel',] }],
        carouselwrap: [{ type: i0.HostBinding, args: ['class.carousel',] }],
        panstart: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }, { type: i0.HostListener, args: ['touchstart', ['$event'],] }],
        panmove: [{ type: i0.HostListener, args: ['mousemove', ['$event'],] }, { type: i0.HostListener, args: ['touchmove', ['$event'],] }],
        panend: [{ type: i0.HostListener, args: ['mouseleave', ['$event'],] }, { type: i0.HostListener, args: ['mouseup', ['$event'],] }, { type: i0.HostListener, args: ['touchend', ['$event'],] }],
        cancel: [{ type: i0.HostListener, args: ['touchcancel',] }],
        resize: [{ type: i0.HostListener, args: ['window:resize',] }]
    };

    var DotIndicatorComponent = /** @class */ (function () {
        function DotIndicatorComponent() {
            this.items = [];
            this._page = 0;
            this._pageCount = 0;
            this.dotStyle = {};
            this.dotActiveStyle = {};
            this.dotColor = 'white';
            this.dotIndicator = true;
        }
        Object.defineProperty(DotIndicatorComponent.prototype, "page", {
            set: function (p) {
                this._page = p;
                this.updateSelected();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DotIndicatorComponent.prototype, "pageCount", {
            set: function (p) {
                this._pageCount = p || 0;
                this.updateItems();
            },
            enumerable: false,
            configurable: true
        });
        DotIndicatorComponent.prototype.updateItems = function () {
            this.items = new Array(this._pageCount);
            for (var i = 0; i < this._pageCount; i++) {
                this.items[i] = { active: i == this._page };
            }
        };
        DotIndicatorComponent.prototype.updateSelected = function () {
            if (this.items.length != this._pageCount) {
                return this.updateItems();
            }
            if (this.items.length == 0) {
                return;
            }
            for (var i = 0; i < this._pageCount; i++) {
                this.items[i].active = false;
            }
            this.items[this._page].active = true;
        };
        return DotIndicatorComponent;
    }());
    DotIndicatorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'DotIndicator, nzm-dot-indicator',
                    template: "<div class=\"am-carousel-wrap\">\n  <div *ngFor=\"let item of items\" class=\"am-carousel-wrap-dot\" [class.am-carousel-wrap-dot-active]=\"item.active\">\n    <span [ngStyle]=\"item.active ? dotActiveStyle : dotStyle\"></span>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    DotIndicatorComponent.propDecorators = {
        page: [{ type: i0.Input }],
        pageCount: [{ type: i0.Input }],
        dotStyle: [{ type: i0.Input }],
        dotActiveStyle: [{ type: i0.Input }],
        dotColor: [{ type: i0.Input }],
        dotIndicator: [{ type: i0.HostBinding, args: ['class.dot-indicator',] }]
    };

    var CarouselModule = /** @class */ (function () {
        function CarouselModule() {
        }
        return CarouselModule;
    }());
    CarouselModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent],
                    exports: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent]
                },] }
    ];

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            var _a;
            this.prefixCls = 'am-checkbox';
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-checked"] = false,
                _a[this.prefixCls + "-disabled"] = false,
                _a);
            this._checked = false;
            this._disabled = false;
            this.onChange = new i0.EventEmitter();
            this.checkBoxWrapper = true;
        }
        Object.defineProperty(CheckboxComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (value) {
                this._checked = value;
                this.updateClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CheckboxComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.updateClassMap();
            },
            enumerable: false,
            configurable: true
        });
        CheckboxComponent.prototype.onClick = function (event) {
            event.preventDefault();
            if (!this._disabled) {
                this.updateValue(!this.checked);
            }
        };
        CheckboxComponent.prototype.updateValue = function (value) {
            this.checked = value;
            this.onChange.emit({
                name: this.name,
                value: this.value,
                checked: value
            });
        };
        CheckboxComponent.prototype.ngOnInit = function () {
            this.updateClassMap();
        };
        CheckboxComponent.prototype.updateClassMap = function () {
            var _a;
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-checked"] = this.checked,
                _a[this.prefixCls + "-disabled"] = this.disabled,
                _a);
        };
        return CheckboxComponent;
    }());
    CheckboxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[Checkbox], [nzm-checkbox]',
                    template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"checkbox\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                    preserveWhitespaces: false,
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        name: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        checked: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        checkBoxWrapper: [{ type: i0.HostBinding, args: ['class.am-checkbox-wrapper',] }],
        onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
    };

    var AgreeItemComponent = /** @class */ (function () {
        function AgreeItemComponent(cdr) {
            this.cdr = cdr;
            this.prefixCls = 'am-checkbox';
            this.checked = false;
            this._disabled = false;
            this.onChange = new i0.EventEmitter();
            this.checkboxAgree = true;
        }
        Object.defineProperty(AgreeItemComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AgreeItemComponent.prototype.change = function (event) {
            this.checked = event.checked;
            this._ngModelOnChange(event.checked);
            this.onChange.emit(event);
        };
        AgreeItemComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        AgreeItemComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        AgreeItemComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        return AgreeItemComponent;
    }());
    AgreeItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'AgreeItem, nzm-agree-item',
                    template: "<label\n  Checkbox\n  class=\"{{ prefixCls }}-agree-label\"\n  [name]=\"name\"\n  [value]=\"value\"\n  [checked]=\"checked\"\n  [disabled]=\"disabled\"\n  (onChange)=\"change($event)\"\n>\n  <ng-content></ng-content>\n</label>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return AgreeItemComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    AgreeItemComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef }
    ]; };
    AgreeItemComponent.propDecorators = {
        name: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        checkboxAgree: [{ type: i0.HostBinding, args: ['class.am-checkbox-agree',] }]
    };

    var CheckboxItemComponent = /** @class */ (function () {
        function CheckboxItemComponent(cdr) {
            this.cdr = cdr;
            this.prefixCls = 'am-checkbox';
            this.checked = false;
            this._disabled = false;
            this.wrap = false;
            this.error = false;
            this.multipleLine = false;
            this.platform = 'ios';
            this.align = 'middle';
            this.onChange = new i0.EventEmitter();
        }
        Object.defineProperty(CheckboxItemComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        CheckboxItemComponent.prototype.onCheckboxClick = function (event) { };
        CheckboxItemComponent.prototype.change = function (event) {
            this.checked = event.checked;
            this._ngModelOnChange(event.checked);
            this.onChange.emit(event);
        };
        CheckboxItemComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        CheckboxItemComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        CheckboxItemComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        return CheckboxItemComponent;
    }());
    CheckboxItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CheckboxItem, nzm-checkbox-item',
                    template: "<ListItem\n  [className]=\"'am-checkbox-item ' + (disabled ? 'am-checkbox-item-disabled' : '')\"\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"extra\"\n  [thumb]=\"checkbox\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  (onClick)=\"onCheckboxClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #checkbox>\n  <label Checkbox [name]=\"name\" [value]=\"value\" [checked]=\"checked\" [disabled]=\"disabled\" (onChange)=\"change($event)\">\n  </label>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return CheckboxItemComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    CheckboxItemComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef }
    ]; };
    CheckboxItemComponent.propDecorators = {
        name: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        arrow: [{ type: i0.Input }],
        extra: [{ type: i0.Input }],
        wrap: [{ type: i0.Input }],
        error: [{ type: i0.Input }],
        multipleLine: [{ type: i0.Input }],
        platform: [{ type: i0.Input }],
        align: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }]
    };

    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        return CheckboxModule;
    }());
    CheckboxModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, forms.FormsModule, ListModule],
                    declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
                    exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
                },] }
    ];

    var RadioComponent = /** @class */ (function () {
        function RadioComponent() {
            var _a;
            this.prefixCls = 'am-radio';
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-checked"] = this.checked,
                _a[this.prefixCls + "-disabled"] = this.disabled,
                _a);
            this._checked = false;
            this._disabled = false;
            this.onChange = new i0.EventEmitter();
            this.radioWrapper = true;
        }
        Object.defineProperty(RadioComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (value) {
                this._checked = value;
                this.updateClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RadioComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.updateClassMap();
            },
            enumerable: false,
            configurable: true
        });
        RadioComponent.prototype.onClick = function (event) {
            event.preventDefault();
            if (!this._disabled && !this._checked) {
                this.updateValue(true);
            }
        };
        RadioComponent.prototype.updateValue = function (checkValue) {
            this.checked = checkValue;
            this.onChange.emit({
                name: this.name,
                value: this.value
            });
        };
        RadioComponent.prototype.ngOnInit = function () {
            this.updateClassMap();
        };
        RadioComponent.prototype.updateClassMap = function () {
            var _a;
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-checked"] = this.checked,
                _a[this.prefixCls + "-disabled"] = this.disabled,
                _a);
        };
        return RadioComponent;
    }());
    RadioComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[Radio], [nzm-radio]',
                    template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"radio\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                    preserveWhitespaces: false,
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    RadioComponent.ctorParameters = function () { return []; };
    RadioComponent.propDecorators = {
        name: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        checked: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        radioWrapper: [{ type: i0.HostBinding, args: ['class.am-radio-wrapper',] }],
        onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
    };

    var RadioItemComponent = /** @class */ (function () {
        function RadioItemComponent(cdr) {
            this.cdr = cdr;
            this.select$ = new rxjs.Subject();
            this.prefixCls = 'am-radio';
            this._checked = false;
            this._disabled = false;
            this.wrap = false;
            this.error = false;
            this.multipleLine = false;
            this.platform = 'ios';
            this.align = 'middle';
        }
        Object.defineProperty(RadioItemComponent.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (value) {
                this._checked = value;
                this.cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RadioItemComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        RadioItemComponent.prototype.onRadioItemClick = function (event) { };
        RadioItemComponent.prototype.change = function (event) {
            if (!this.disabled && !this.checked) {
                this.select$.next(this);
            }
        };
        RadioItemComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        return RadioItemComponent;
    }());
    RadioItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'RadioItem, nzm-radio-item',
                    template: "<ListItem\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"radio\"\n  [thumb]=\"thumb\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  [className]=\"'am-radio-item ' + (disabled ? 'am-radio-item-disabled' : '')\"\n  (onClick)=\"onRadioItemClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #radio>\n  <label\n    Radio\n    [name]=\"name\"\n    [value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    (onChange)=\"change($event)\"\n  ></label>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    RadioItemComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef }
    ]; };
    RadioItemComponent.propDecorators = {
        name: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        arrow: [{ type: i0.Input }],
        thumb: [{ type: i0.Input }],
        wrap: [{ type: i0.Input }],
        error: [{ type: i0.Input }],
        multipleLine: [{ type: i0.Input }],
        platform: [{ type: i0.Input }],
        align: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }]
    };

    var RADIO_ITEM_GROUP_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return RadioItemGroupComponent; }),
        multi: true
    };
    var RadioItemGroupComponent = /** @class */ (function () {
        function RadioItemGroupComponent(cdr) {
            this.cdr = cdr;
            this.destroy$ = new rxjs.Subject();
            this.onChange = new i0.EventEmitter();
        }
        RadioItemGroupComponent.prototype.updateChildrenStatus = function () {
            var _this = this;
            if (this.radioItems && typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
                Promise.resolve().then(function () {
                    _this.radioItems.forEach(function (radioItem) {
                        radioItem.checked = radioItem.value === _this.selectedValue;
                        radioItem.markForCheck();
                    });
                });
            }
        };
        RadioItemGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.radioItems.changes
                .pipe(operators.startWith(null), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateChildrenStatus();
                if (_this.selectSubscription) {
                    _this.selectSubscription.unsubscribe();
                }
                _this.selectSubscription = rxjs.merge.apply(void 0, __spread(_this.radioItems.map(function (radioItem) { return radioItem.select$; }))).pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (radioItem) {
                    if (typeof _this.selectedValue !== 'undefined' && null !== _this.selectedValue) {
                        _this.selectedValue = radioItem.value;
                        _this._ngModelOnChange(radioItem.value);
                        _this.updateChildrenStatus();
                        if (_this.onChange) {
                            _this.onChange.emit({ name: radioItem.name, value: radioItem.value });
                        }
                    }
                });
            });
        };
        RadioItemGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        RadioItemGroupComponent.prototype.writeValue = function (value) {
            if (typeof value !== 'undefined' && null !== value) {
                this.selectedValue = value;
                this.updateChildrenStatus();
                this.cdr.markForCheck();
            }
        };
        RadioItemGroupComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        RadioItemGroupComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        return RadioItemGroupComponent;
    }());
    RadioItemGroupComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'RadioItemGroup, nzm-radio-item-group',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
                },] }
    ];
    RadioItemGroupComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef }
    ]; };
    RadioItemGroupComponent.propDecorators = {
        radioItems: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return RadioItemComponent; }),] }],
        onChange: [{ type: i0.Output }]
    };

    var RadioModule = /** @class */ (function () {
        function RadioModule() {
        }
        return RadioModule;
    }());
    RadioModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, forms.FormsModule, ListModule],
                    declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
                    exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
                },] }
    ];

    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
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
        Object.defineProperty(ProgressComponent.prototype, "percent", {
            get: function () {
                return this._percent;
            },
            set: function (value) {
                this._percent = value;
                if (value > 100) {
                    this._exceedance = true;
                }
                else {
                    this._exceedance = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressComponent.prototype, "value", {
            get: function () {
                return this.percent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressComponent.prototype, "fixOuter", {
            get: function () {
                return 'fixed' === this.position;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressComponent.prototype, "hideOuter", {
            get: function () {
                return !this.unfilled && !this._exceedance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressComponent.prototype, "exceedance", {
            get: function () {
                return this._exceedance;
            },
            enumerable: false,
            configurable: true
        });
        return ProgressComponent;
    }());
    ProgressComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Progress, nzm-progress',
                    template: "<div\n  class=\"{{ prefixCls }}-bar\"\n  [ngStyle]=\"barStyle\"\n  [style.width.%]=\"percent <= 100 ? percent : 10000 / percent\"\n></div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ProgressComponent.ctorParameters = function () { return []; };
    ProgressComponent.propDecorators = {
        unfilled: [{ type: i0.Input }],
        position: [{ type: i0.Input }],
        barStyle: [{ type: i0.Input }],
        percent: [{ type: i0.Input }],
        max: [{ type: i0.HostBinding, args: ['attr.max',] }],
        value: [{ type: i0.HostBinding, args: ['attr.value',] }],
        amProgress: [{ type: i0.HostBinding, args: ['class.am-progress',] }],
        outer: [{ type: i0.HostBinding, args: ['class.am-progress-outer',] }],
        fixOuter: [{ type: i0.HostBinding, args: ['class.am-progress-fixed-outer',] }],
        hideOuter: [{ type: i0.HostBinding, args: ['class.am-progress-hide-outer',] }],
        exceedance: [{ type: i0.HostBinding, args: ['class.am-progress-exceedance',] }]
    };

    var ProgressModule = /** @class */ (function () {
        function ProgressModule() {
        }
        return ProgressModule;
    }());
    ProgressModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [ProgressComponent],
                    exports: [ProgressComponent]
                },] }
    ];

    var AccordionService = /** @class */ (function () {
        function AccordionService() {
            this.accordion = false;
        }
        AccordionService.prototype.getComponent = function (component) {
            this.accordion = component.accordion;
            this.component = component;
        };
        return AccordionService;
    }());
    AccordionService.decorators = [
        { type: i0.Injectable }
    ];

    var AccordionGroupComponent = /** @class */ (function () {
        function AccordionGroupComponent(_accordionService, _cdr) {
            this._accordionService = _accordionService;
            this._cdr = _cdr;
            this.isShowChild = true;
            this.isOpened = false;
            this.disabled = false;
            this.onOpen = new i0.EventEmitter();
            this.onClose = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
            this.isTemplateRef = isTemplateRef;
            this.amItem = true;
            this.isActive = this.isOpened;
            this.addon = true;
        }
        AccordionGroupComponent.prototype.checkAndToggle = function () {
            this.toggle();
        };
        Object.defineProperty(AccordionGroupComponent.prototype, "slide", {
            get: function () {
                return this.isOpened ? 'down' : 'up';
            },
            enumerable: false,
            configurable: true
        });
        AccordionGroupComponent.prototype.toggle = function () {
            if (this.disabled) {
                return;
            }
            this.isShowChild = true;
            var isOpenedBeforeWeChange = this.isOpened;
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
        };
        AccordionGroupComponent.prototype.openOnInitialization = function () {
            var _this = this;
            setTimeout(function () {
                _this.isOpened = true;
                _this._cdr.detectChanges();
            }, 0);
        };
        AccordionGroupComponent.prototype.slideAnimationDoen = function (event) {
            var _this = this;
            if (event.fromState === 'down' && event.toState === 'up') {
                setTimeout(function () {
                    _this.isShowChild = false;
                }, 0);
            }
        };
        return AccordionGroupComponent;
    }());
    AccordionGroupComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'AccordionPanel, nzm-accordion-panel',
                    template: "<div\n  role=\"tab\"\n  class=\"am-accordion-header\"\n  data-scale=\"true\"\n  [attr.aria-expanded]=\"isOpened\"\n  (click)=\"checkAndToggle()\"\n>\n  <i class=\"arrow\"></i>\n  <ng-container *ngIf=\"!isTemplateRef(header)\">{{ header }}</ng-container>\n  <ng-template *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"header\"></ng-template>\n</div>\n<div\n  role=\"tabpanel\"\n  class=\"am-accordion-content\"\n  [ngClass]=\"{ 'am-accordion-content-active': isOpened }\"\n  [@slide]=\"slide\"\n  (@slide.done)=\"slideAnimationDoen($event)\"\n>\n  <div *ngIf=\"isShowChild\" class=\"am-accordion-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    animations: [
                        animations.trigger('slide', [
                            animations.state('up', animations.style({ height: 0 })),
                            animations.state('down', animations.style({ height: '*' })),
                            animations.transition('down => up', [animations.animate(200, animations.style({ height: 0 }))]),
                            animations.transition('up => down', [
                                animations.animate(200, animations.style({
                                    height: '*'
                                }))
                            ])
                        ])
                    ]
                },] }
    ];
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: AccordionService },
        { type: i0.ChangeDetectorRef }
    ]; };
    AccordionGroupComponent.propDecorators = {
        key: [{ type: i0.Input }],
        header: [{ type: i0.Input }],
        isOpened: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onOpen: [{ type: i0.Output }],
        onClose: [{ type: i0.Output }],
        onChange: [{ type: i0.Output }],
        amItem: [{ type: i0.HostBinding, args: ['class.am-accordion-item',] }],
        isActive: [{ type: i0.HostBinding, args: ['class.am-accordion-item-active',] }],
        addon: [{ type: i0.HostBinding, args: ['class.addon',] }]
    };

    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent(_accordionService) {
            this._accordionService = _accordionService;
            this.isFirstChange = true;
            this.expandAll = false;
            this.openAnimation = {};
            this.accordion = false;
            this.onChange = new i0.EventEmitter();
            this.amAccordion = true;
            this._accordionService.getComponent(this);
        }
        AccordionComponent.prototype.click = function () {
            var _this = this;
            var result = [];
            this.groups.toArray().forEach(function (group) {
                if (group.isOpened) {
                    if (_this.accordion) {
                        result = group.key;
                    }
                    else {
                        result.push(group.key);
                    }
                }
            });
            this.onChange.emit(result);
        };
        AccordionComponent.prototype.closeAll = function () {
            this.groups.toArray().forEach(function (group) {
                group.isOpened = false;
            });
        };
        AccordionComponent.prototype.init = function () {
            var _this = this;
            if (this.expandAll && this.groups && this.groups.length > 0) {
                this._oldGroups = this.groups.toArray();
                this._oldGroups.forEach(function (group) {
                    group.openOnInitialization();
                });
                this._subscription = this.groups.changes.subscribe(function (change) {
                    var newGroups = _this.groups.toArray().filter(function (group) {
                        return _this._oldGroups.indexOf(group) === -1;
                    });
                    newGroups.forEach(function (group) {
                        group.openOnInitialization();
                    });
                    _this._oldGroups = _this.groups.toArray();
                });
            }
            var currentActiveKey = [];
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
                this.groups.forEach(function (group, index) {
                    currentActiveKey.forEach(function (key) {
                        if (index === parseInt(key, 0)) {
                            setTimeout(function () {
                                group.isOpened = true;
                                group.openOnInitialization();
                            }, 0);
                        }
                    });
                });
            }
        };
        AccordionComponent.prototype.toArray = function (activeKey) {
            var currentActiveKey = activeKey;
            if (!Array.isArray(currentActiveKey)) {
                currentActiveKey = currentActiveKey !== undefined && currentActiveKey !== '' ? [currentActiveKey] : [];
            }
            return currentActiveKey;
        };
        AccordionComponent.prototype.ngOnChanges = function (changes) {
            if (changes.accordion) {
                this._accordionService.getComponent(this);
            }
            if (changes.expandAll || changes.accordion) {
                this.init();
            }
        };
        AccordionComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.groups && this.groups.length > 0) {
                this.init();
            }
            else {
                this.groupsSubscription = this.groups.changes.subscribe(function (group) {
                    if (_this.isFirstChange) {
                        _this.init();
                    }
                    _this.isFirstChange = false;
                });
            }
        };
        AccordionComponent.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
            if (this.groupsSubscription) {
                this.groupsSubscription.unsubscribe();
            }
        };
        return AccordionComponent;
    }());
    AccordionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Accordion, nzm-accordion',
                    template: "<ng-content></ng-content>\n",
                    providers: [AccordionService]
                },] }
    ];
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionService }
    ]; };
    AccordionComponent.propDecorators = {
        groups: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return AccordionGroupComponent; }),] }],
        expandAll: [{ type: i0.Input }],
        activeKey: [{ type: i0.Input }],
        defaultActiveKey: [{ type: i0.Input }],
        openAnimation: [{ type: i0.Input }],
        accordion: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        amAccordion: [{ type: i0.HostBinding, args: ['class.am-accordion',] }],
        click: [{ type: i0.HostListener, args: ['click',] }]
    };

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        return AccordionModule;
    }());
    AccordionModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, WhiteSpaceModule],
                    declarations: [AccordionComponent, AccordionGroupComponent],
                    exports: [AccordionComponent, AccordionGroupComponent]
                },] }
    ];

    function insertKeyFrame(rule, className) {
        var style = document.createElement('style');
        style.setAttribute('class', className);
        style.innerHTML = rule;
        document.body.appendChild(style);
    }
    function deleteKeyFrame(className) {
        var styleDom = document.getElementsByClassName(className);
        while (styleDom.length > 0) {
            styleDom[0].remove();
        }
    }
    function getWidthHeight() {
        var w = window;
        var d = document;
        var e = d.documentElement;
        var g = d.getElementsByTagName('body')[0];
        return {
            width: w.innerWidth || e.clientWidth || g.clientWidth,
            height: w.innerHeight || e.clientHeight || g.clientHeight
        };
    }
    function getTextWidth(text, font) {
        var _dom = document.createElement('div');
        _dom.innerHTML = text;
        _dom.style.position = 'absolute';
        _dom.style.left = '-9999';
        _dom.style.whiteSpace = 'nowrap';
        _dom.style.fontSize = font;
        document.body.appendChild(_dom);
        var _w = _dom.clientWidth + 10;
        document.body.removeChild(_dom);
        return _w;
    }

    var NoticeBarComponent = /** @class */ (function () {
        function NoticeBarComponent(_iconHandler) {
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
            this.onClick = new i0.EventEmitter();
            this._iconHandler.load();
        }
        Object.defineProperty(NoticeBarComponent.prototype, "option", {
            get: function () {
                return this._option;
            },
            set: function (value) {
                Object.assign(this._option, value);
                this.dataProcess();
                if (this._option.scrolling) {
                    this.marqueeScroll = 'scrolling';
                }
                else {
                    this.marqueeScroll = 'scrolling-stop';
                }
            },
            enumerable: false,
            configurable: true
        });
        NoticeBarComponent.prototype.click = function () {
            this.onClick.emit(this._option.mode);
            if (this._option.mode === 'closable') {
                this.visiable = false;
            }
        };
        NoticeBarComponent.prototype.dataProcess = function () {
            this.visiable = true;
            this.style = {
                width: '200%'
            };
            this._width = getTextWidth(this._option.content, this._option.fontSize);
            if (getWidthHeight().width < this._width) {
                var count = this._option.marqueeProps.loop ? 'infinite' : 1;
                var animationName = "noticebarmarquee_" + this._width;
                this.style = {
                    width: this._width * 2 + 'px',
                    'animation-name': animationName,
                    'animation-delay': this._option.marqueeProps.leading + "ms",
                    'animation-duration': (((1 / this._option.marqueeProps.fps) * this._width) / getWidthHeight().width) *
                        1000 + "s",
                    'animation-iteration-count': "" + count
                };
                this.marqueeScroll = 'scrolling';
                this.insetKeyframe(animationName);
            }
            else {
                this.marqueeScroll = 'scrolling-stop';
            }
        };
        NoticeBarComponent.prototype.insetKeyframe = function (animationName) {
            insertKeyFrame("@keyframes " + animationName + " {\n      0% { left: 0px; }\n      100% { left: -" + this._width + "px }\n    }", 'notice_bar_animation_cls');
            insertKeyFrame("@-webkit-keyframes " + animationName + " {\n      0% { left: 0px; }\n      100% { left: -" + this._width + "px }\n    }", 'notice_bar_animation_cls');
            insertKeyFrame("@-moz-keyframes " + animationName + " {\n      0% { left: 0px; }\n      100% { left: -" + this._width + "px }\n    }", 'notice_bar_animation_cls');
            insertKeyFrame("@-o-keyframes " + animationName + " {\n      0% { left: 0px; }\n      100% { left: -" + this._width + "px }\n    }", 'notice_bar_animation_cls');
        };
        NoticeBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            document.addEventListener('touchstart', function () {
                _this.marqueeScroll = 'scrolling-stop';
            });
            document.addEventListener('touchend', function () {
                _this.marqueeScroll = 'scrolling';
            });
        };
        NoticeBarComponent.prototype.ngOnDestroy = function () {
            deleteKeyFrame('notice_bar_animation_cls');
        };
        return NoticeBarComponent;
    }());
    NoticeBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'NoticeBar, nzm-notice-bar',
                    template: "<div role=\"alert\" *ngIf=\"visiable\" class=\"am-notice-bar\" (click)=\"click()\">\n  <div *ngIf=\"option.icon !== null\" class=\"am-notice-bar-icon\">\n    <ng-template [ngTemplateOutlet]=\"option.icon || voice\"></ng-template>\n  </div>\n  <div class=\"am-notice-bar-content\">\n    <div class=\"marquee\">\n      <div [ngClass]=\"marqueeScroll\" [ngStyle]=\"style\">\n        <span>{{ option.content }}</span>\n        <span>{{ option.content }}</span>\n      </div>\n    </div>\n  </div>\n  <div role=\"button\" *ngIf=\"option.mode && option.action !== null\" class=\"am-notice-bar-operation\">\n    <ng-template *ngIf=\"option.mode === 'closable'\" [ngTemplateOutlet]=\"option.action || cross\"></ng-template>\n    <ng-template *ngIf=\"option.mode === 'link'\" [ngTemplateOutlet]=\"option.action || right\"></ng-template>\n  </div>\n</div>\n\n<ng-template #voice>\n  <Icon [type]=\"'voice'\" [size]=\"'xxs'\"></Icon>\n</ng-template>\n<ng-template #cross>\n  <Icon [type]=\"'cross'\" [size]=\"'md'\"></Icon>\n</ng-template>\n<ng-template #right>\n  <Icon [type]=\"'right'\" [size]=\"'md'\"></Icon>\n</ng-template>\n",
                    providers: [IconHandler]
                },] }
    ];
    NoticeBarComponent.ctorParameters = function () { return [
        { type: IconHandler }
    ]; };
    NoticeBarComponent.propDecorators = {
        option: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }]
    };

    var NoticeBarModule = /** @class */ (function () {
        function NoticeBarModule() {
        }
        return NoticeBarModule;
    }());
    NoticeBarModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [IconModule, common.CommonModule, forms.FormsModule],
                    declarations: [NoticeBarComponent],
                    exports: [NoticeBarComponent],
                    providers: []
                },] }
    ];

    var ToastComponent = /** @class */ (function () {
        function ToastComponent(_zone) {
            this._zone = _zone;
            this.prefixCls = 'am-toast';
            this.isContentString = true;
            this.transitionName = 'am-fade-enter am-fade-enter-active';
            this._iconType = '';
            this._content = '';
            this.mask = true;
            this.position = 'middle';
        }
        Object.defineProperty(ToastComponent.prototype, "content", {
            get: function () {
                return this._content;
            },
            set: function (value) {
                var _this = this;
                if (value instanceof i0.TemplateRef) {
                    this.isContentString = false;
                }
                else {
                    this.isContentString = true;
                }
                this._zone.run(function () {
                    _this._content = value;
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ToastComponent.prototype, "iconType", {
            get: function () {
                return this._iconType;
            },
            set: function (value) {
                var _this = this;
                this._zone.run(function () {
                    _this._iconType = value;
                });
            },
            enumerable: false,
            configurable: true
        });
        return ToastComponent;
    }());
    ToastComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Toast',
                    encapsulation: i0.ViewEncapsulation.None,
                    template: "<div class=\"{{ prefixCls }}-notice {{ prefixCls }}-notice-closable {{ transitionName }}\">\n  <div class=\"{{ prefixCls }}-notice-content\">\n    <div role=\"alert\" *ngIf=\"iconType\" class=\"{{ prefixCls }}-text {{ prefixCls }}-text-icon\" aria-live=\"assertive\">\n      <Icon [type]=\"iconType\" [size]=\"'lg'\"></Icon>\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n    </div>\n    <div *ngIf=\"!iconType\" class=\"{{ prefixCls }}-text\" role=\"alert\" aria-live=\"assertive\">\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n      <ng-template *ngIf=\"!isContentString\" [ngTemplateOutlet]=\"content\"></ng-template>\n    </div>\n  </div>\n  <a class=\"{{ prefixCls }}-notice-close\">\n    <span class=\"{{ prefixCls }}-notice-close-x\"></span>\n  </a>\n</div>\n",
                    host: {
                        '[class.am-toast]': 'true',
                        '[class.am-toast-mask]': 'mask',
                        '[class.am-toast-mask-top]': "mask && position === 'top'",
                        '[class.am-toast-mask-middle]': "mask && position === 'middle'",
                        '[class.am-toast-mask-bottom]': "mask && position === 'bottom'",
                        '[class.am-toast-nomask]': '!mask',
                        '[class.am-toast-nomask-top]': "!mask && position === 'top'",
                        '[class.am-toast-nomask-middle]': "!mask && position === 'middle'",
                        '[class.am-toast-nomask-bottom]': "!mask && position === 'bottom'"
                    }
                },] }
    ];
    ToastComponent.ctorParameters = function () { return [
        { type: i0.NgZone }
    ]; };
    ToastComponent.propDecorators = {
        mask: [{ type: i0.Input }],
        content: [{ type: i0.Input }],
        iconType: [{ type: i0.Input }],
        position: [{ type: i0.Input }]
    };

    var ToastOptions = /** @class */ (function () {
        function ToastOptions() {
        }
        return ToastOptions;
    }());
    ToastOptions.decorators = [
        { type: i0.Injectable }
    ];

    var ToastService = /** @class */ (function () {
        function ToastService(_appRef, _cfr, _zone) {
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
        ToastService.prototype._initConfig = function (config, options) {
            var props = {};
            var optionalParams = ['content', 'iconType', 'mask', 'position'];
            config = Object.assign(options, config);
            optionalParams.forEach(function (key) {
                if (config[key] !== undefined) {
                    props[key] = config[key];
                }
            });
            var iconType = {
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
        };
        ToastService.prototype.notice = function (config, type, timeInterval, onClose, mask, position) {
            var _this = this;
            if (timeInterval === void 0) { timeInterval = 2000; }
            if (mask === void 0) { mask = true; }
            if (position === void 0) { position = 'middle'; }
            // 如果已经存在，在没有遮罩层的情况下，会响应别的toast，需要清除原来的
            if (this.compRef) {
                this.hide();
            }
            var options = new ToastOptions();
            options.iconType = type;
            options.mask = mask;
            options.position = position;
            var props = this._initConfig(config, options);
            this.insertElement = document.body.insertBefore(document.createElement(this.toastCompFactory.selector), document.body.firstChild);
            var instance;
            var subject;
            this.compRef = this._appRef.bootstrap(this.toastCompFactory);
            instance = this.compRef.instance;
            subject = instance.subject;
            if (timeInterval) {
                this.timeout = setTimeout(function () {
                    if (onClose) {
                        onClose();
                    }
                    _this.hide();
                }, timeInterval);
            }
            Object.assign(instance, props);
            return subject;
        };
        /**
         * Open info dialog
         */
        ToastService.prototype.info = function (content, timeInterval, onClose, mask, position) {
            var config = Object.assign({
                iconType: 'info',
                content: content
            });
            return this.notice(config, 'info', timeInterval, onClose, mask, position);
        };
        /**
         * Open success dialog
         */
        ToastService.prototype.success = function (content, timeInterval, onClose, mask, position) {
            var config = Object.assign({
                iconType: 'success',
                content: content
            });
            return this.notice(config, 'success', timeInterval, onClose, mask, position);
        };
        ToastService.prototype.show = function (content, timeInterval, mask, position) {
            var config = Object.assign({
                iconType: 'info',
                content: content
            });
            return this.notice(config, 'info', timeInterval, function () { }, mask, position);
        };
        ToastService.prototype.fail = function (content, timeInterval, onClose, mask, position) {
            var config = Object.assign({
                iconType: 'fail',
                content: content
            });
            return this.notice(config, 'fail', timeInterval, onClose, mask, position);
        };
        ToastService.prototype.offline = function (content, timeInterval, onClose, mask, position) {
            var config = Object.assign({
                iconType: 'offline',
                content: content
            });
            return this.notice(config, 'offline', timeInterval, onClose, mask, position);
        };
        ToastService.prototype.loading = function (content, timeInterval, onClose, mask, position) {
            var config = Object.assign({
                iconType: 'loading',
                content: content
            });
            return this.notice(config, 'loading', timeInterval, onClose, mask, position);
        };
        ToastService.prototype.hide = function () {
            var _this = this;
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.compRef) {
                this._zone.run(function () {
                    _this.compRef.destroy();
                    document.body.removeChild(_this.insertElement);
                });
                this.compRef = null;
                this.insertElement = null;
            }
        };
        return ToastService;
    }());
    ToastService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] },
        { type: i0.Injectable }
    ];
    ToastService.ctorParameters = function () { return [
        { type: i0.ApplicationRef },
        { type: i0.ComponentFactoryResolver },
        { type: i0.NgZone }
    ]; };

    var ToastModule = /** @class */ (function () {
        function ToastModule() {
        }
        return ToastModule;
    }());
    ToastModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule, WingBlankModule],
                    exports: [ToastComponent],
                    declarations: [ToastComponent],
                    providers: [ToastService]
                },] }
    ];

    var ModalBaseOptions = /** @class */ (function () {
        function ModalBaseOptions() {
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
        return ModalBaseOptions;
    }());
    var ModalOptions = /** @class */ (function (_super) {
        __extends(ModalOptions, _super);
        function ModalOptions() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.transitionName = 'am-fade';
            _this.maskTransitionName = 'am-fade';
            return _this;
        }
        return ModalOptions;
    }(ModalBaseOptions));
    ModalOptions.decorators = [
        { type: i0.Injectable }
    ];
    var AlertOptions = /** @class */ (function (_super) {
        __extends(AlertOptions, _super);
        function AlertOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AlertOptions;
    }(ModalBaseOptions));
    AlertOptions.decorators = [
        { type: i0.Injectable }
    ];
    var Action = /** @class */ (function () {
        function Action() {
        }
        return Action;
    }());
    Action.decorators = [
        { type: i0.Injectable }
    ];

    var ModalRef = /** @class */ (function () {
        function ModalRef() {
        }
        return ModalRef;
    }());

    var ModalComponent = /** @class */ (function (_super) {
        __extends(ModalComponent, _super);
        function ModalComponent(option, elementRef) {
            var _this = _super.call(this) || this;
            _this.option = option;
            _this.elementRef = elementRef;
            _this.autoFocus = { focus: true, date: new Date() };
            _this.transitionName = '';
            _this.maskTransitionName = '';
            _this.wrapCls = {};
            _this.cls = {};
            _this.btnGroupClass = {};
            _this.data = {
                text: '',
                password: ''
            };
            _this.onClose = new i0.EventEmitter();
            _this.afterOpenEmitter = new i0.EventEmitter();
            _this.afterCloseEmitter = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(ModalComponent.prototype, "title", {
            set: function (value) {
                this.option.title = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "closable", {
            set: function (value) {
                this.option.closable = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "maskClosable", {
            set: function (value) {
                this.option.maskClosable = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "popup", {
            set: function (value) {
                this.option.popup = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "animationType", {
            set: function (value) {
                this.option.animationType = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "transparent", {
            set: function (value) {
                this.option.transparent = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "footer", {
            set: function (value) {
                this.option.footer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "platform", {
            set: function (value) {
                this.option.platform = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "className", {
            set: function (value) {
                this.option.className = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "wrapClassName", {
            set: function (value) {
                this.option.wrapClassName = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "actions", {
            set: function (value) {
                this.option.footer = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "defaultValue", {
            set: function (value) {
                this.option.defaultValue = value !== undefined ? value : ['', ''];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "type", {
            set: function (value) {
                this.option.type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "placeholders", {
            set: function (value) {
                this.option.placeholders = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "operation", {
            set: function (value) {
                this.option.operation = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        ModalComponent.prototype.panend = function (event) {
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
        };
        ModalComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        ModalComponent.prototype.isNoTitle = function (value) {
            return value === '' || value === null || value === undefined;
        };
        ModalComponent.prototype.setTransitionName = function (visible) {
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
        };
        ModalComponent.prototype.setActiveName = function (name) {
            return name.length > 0 ? name + "-enter " + name + "-enter-active" : null;
        };
        ModalComponent.prototype.setLeaveActiveName = function (name) {
            return name.length > 0 ? name + "-leave " + name + "-leave-active" : null;
        };
        ModalComponent.prototype.setClassMap = function () {
            var _a, _b, _c;
            this.wrapCls = (_a = {},
                _a[this.option.wrapClassName] = true,
                _a[this.option.prefixCls + "-wrap-popup"] = this.option.popup,
                _a);
            this.cls = (_b = {},
                _b[this.option.className] = true,
                _b[this.option.prefixCls + "-transparent"] = this.option.transparent,
                _b[this.option.prefixCls + "-popup"] = this.option.popup,
                _b[this.option.prefixCls + "-popup-" + this.option.animationType] = this.option.popup && this.option.animationType,
                _b[this.option.prefixCls + "-android"] = this.option.platform === 'android',
                _b);
            this.btnGroupClass = (_c = {},
                _c[this.option.prefixCls + "-button-group-" + (this.option.footer.length === 2 && !this.option.operation ? 'h' : 'v')] = true,
                _c[this.option.prefixCls + "-button-group-" + (this.option.operation ? 'operation' : 'normal')] = true,
                _c);
        };
        ModalComponent.prototype.inputChange = function (type, value) {
            this.data[type] = value;
        };
        ModalComponent.prototype.leaveAnimation = function () {
            var _this = this;
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
            setTimeout(function () {
                _this.option.visible = false;
                if (_this.onChanged) {
                    _this.onChanged(_this.option.visible);
                }
            }, 200);
        };
        ModalComponent.prototype.writeValue = function (value) {
            if (value) {
                this.option.visible = value;
            }
            this.setTransitionName(value);
        };
        ModalComponent.prototype.registerOnChange = function (fn) {
            this.onChanged = fn;
        };
        ModalComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        Object.defineProperty(ModalComponent.prototype, "afterOpen", {
            get: function () {
                return this.afterOpenEmitter.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "afterClose", {
            get: function () {
                return this.afterCloseEmitter.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        ModalComponent.prototype.getInstance = function () {
            return this;
        };
        ModalComponent.prototype.getElement = function () {
            return this.elementRef && this.elementRef.nativeElement;
        };
        ModalComponent.prototype.close = function () {
            if (this.option.closeWithAnimation) {
                this.option.closeWithAnimation();
            }
            else {
                this.onClose.emit();
                this.leaveAnimation();
            }
        };
        ModalComponent.prototype.triggerOk = function () {
            if (this.option.footer.length > 1) {
                var button = this.option.footer[1];
                button.onPress();
            }
        };
        ModalComponent.prototype.triggerCancel = function () {
            if (this.option.footer.length > 0) {
                var button = this.option.footer[0];
                button.onPress();
            }
        };
        ModalComponent.prototype.destroy = function () {
            this.close();
        };
        return ModalComponent;
    }(ModalRef));
    ModalComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Modal',
                    template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        ModalOptions,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return ModalComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    ModalComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: i0.ElementRef }
    ]; };
    ModalComponent.propDecorators = {
        title: [{ type: i0.Input }],
        closable: [{ type: i0.Input }],
        maskClosable: [{ type: i0.Input }],
        popup: [{ type: i0.Input }],
        animationType: [{ type: i0.Input }],
        transparent: [{ type: i0.Input }],
        footer: [{ type: i0.Input }],
        platform: [{ type: i0.Input }],
        className: [{ type: i0.Input }],
        wrapClassName: [{ type: i0.Input }],
        actions: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        placeholders: [{ type: i0.Input }],
        operation: [{ type: i0.Input }],
        onClose: [{ type: i0.Output }],
        afterOpenEmitter: [{ type: i0.Output }],
        afterCloseEmitter: [{ type: i0.Output }],
        panend: [{ type: i0.HostListener, args: ['mouseup', ['$event'],] }, { type: i0.HostListener, args: ['touchend', ['$event'],] }]
    };
    var ModalServiceComponent = /** @class */ (function (_super) {
        __extends(ModalServiceComponent, _super);
        function ModalServiceComponent(option, elementRef) {
            var _this = _super.call(this, option, elementRef) || this;
            _this.option = option;
            _this.elementRef = elementRef;
            _this.setTransitionName(_this.option.visible);
            return _this;
        }
        return ModalServiceComponent;
    }(ModalComponent));
    ModalServiceComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ModalService',
                    template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ModalServiceComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: i0.ElementRef }
    ]; };

    var PopupService = /** @class */ (function () {
        function PopupService(_overlay) {
            this._overlay = _overlay;
            this.overlay = null;
            this.overlayRef = null;
            this.currentServiceName = null;
            this.serviceArray = [];
            this.overlay = this._overlay;
        }
        PopupService.prototype.showPopup = function (component, childInjector, hasBackdrop, positionStrategy) {
            var _this = this;
            if (positionStrategy === void 0) { positionStrategy = this.overlay
                .position()
                .global()
                .centerVertically()
                .centerHorizontally(); }
            var overlayConfig = new i2.OverlayConfig();
            overlayConfig.hasBackdrop = hasBackdrop;
            overlayConfig.positionStrategy = positionStrategy;
            this.overlayRef = this.overlay.create(overlayConfig);
            this.overlayRef.backdropClick().subscribe(function () {
                _this.hidePopup();
            });
            return this.overlayRef.attach(new portal.ComponentPortal(component, undefined, childInjector));
        };
        PopupService.prototype.hidePopup = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
            }
        };
        return PopupService;
    }());
    PopupService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] },
        { type: i0.Injectable }
    ];
    PopupService.ctorParameters = function () { return [
        { type: i2.Overlay }
    ]; };

    var ModalService = /** @class */ (function (_super) {
        __extends(ModalService, _super);
        function ModalService() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.modalRef = null;
            return _this;
        }
        ModalService.prototype._initConfig = function (config, options) {
            var props = new ModalBaseOptions();
            var optionalParams = [
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
            var self = this;
            config = Object.assign(options, config, {
                close: function () {
                    if (config.maskClosable || config.closable) {
                        self.closeWithAnimation();
                    }
                }
            }, {
                closeWithAnimation: function () {
                    self.closeWithAnimation();
                }
            });
            optionalParams.forEach(function (key) {
                if (config[key] !== undefined) {
                    props[key] = config[key];
                }
            });
            return props;
        };
        ModalService.prototype._open = function (props) {
            var childInjector = i0.Injector.create([
                {
                    provide: ModalOptions,
                    useValue: props
                }
            ]);
            this.modalRef = this.showPopup(ModalServiceComponent, childInjector);
            return this.modalRef && this.modalRef.instance;
        };
        ModalService.prototype.closeWithAnimation = function () {
            var _this = this;
            var options = new ModalBaseOptions();
            this.modalRef.instance.transitionName = options.transitionName + "-leave " + options.transitionName + "-leave-active";
            this.modalRef.instance.maskTransitionName = options.maskTransitionName + "-leave " + options.maskTransitionName + "-leave-active";
            setTimeout(function () {
                _this.close();
            }, 200);
        };
        ModalService.prototype.alert = function (title, message, actions, platform) {
            var options = new AlertOptions();
            options.visible = true;
            options.transparent = true;
            options.closable = false;
            options.maskClosable = false;
            options.platform = 'ios';
            var footer = getFooter.call(this, actions);
            var config = Object.assign({
                title: title,
                message: message,
                footer: footer,
                actions: footer,
                platform: platform ? platform : 'ios'
            });
            var props = this._initConfig(config, options);
            return this._open(props);
        };
        ModalService.prototype.prompt = function (title, message, callbackOrActions, type, defaultValue, placeholders, platform) {
            var _this = this;
            var options = new ModalOptions();
            options.visible = true;
            options.transparent = true;
            options.closable = false;
            options.maskClosable = false;
            options.className = 'am-modal-alert-content';
            options.defaultValue = defaultValue || ['', ''];
            options.placeholders = placeholders;
            (options.type = type ? type : 'default'), (options.platform = platform ? platform : 'ios');
            function getArgs(self, func) {
                var text, password;
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
            var actions;
            if (typeof callbackOrActions === 'function') {
                actions = [
                    { text: 'Cancel' },
                    {
                        text: 'OK',
                        onPress: function () {
                            getArgs(_this, callbackOrActions);
                        }
                    }
                ];
            }
            else {
                actions = callbackOrActions.map(function (item) {
                    return {
                        text: item.text,
                        onPress: function () {
                            if (item.onPress) {
                                return getArgs(_this, item.onPress);
                            }
                        }
                    };
                });
            }
            var footer = getFooter.call(this, actions);
            var config = Object.assign({
                title: title,
                message: message,
                type: type ? type : 'default',
                footer: footer,
                actions: footer,
                platform: platform ? platform : 'ios'
            });
            var props = this._initConfig(config, options);
            return this._open(props);
        };
        ModalService.prototype.operation = function (actions, platform) {
            var options = new ModalOptions();
            options.visible = true;
            options.transparent = true;
            options.closable = false;
            options.maskClosable = false;
            options.operation = true;
            options.className = 'am-modal-operation';
            var footer = getFooter.call(this, actions);
            var config = Object.assign({
                footer: footer,
                actions: footer,
                platform: platform ? platform : 'ios'
            });
            var props = this._initConfig(config, options);
            return this._open(props);
        };
        ModalService.prototype.close = function () {
            this.hidePopup();
        };
        return ModalService;
    }(PopupService));
    ModalService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] },
        { type: i0.Injectable }
    ];
    function getFooter(actions) {
        var _this = this;
        var action = actions ? actions : [{ text: 'OK', onPress: function () { } }];
        return action.map(function (button) {
            var orginPress = button.onPress || function () { };
            button.onPress = function () {
                var res = orginPress();
                if (res && res.then) {
                    res.then(function () {
                        _this.closeWithAnimation();
                    });
                }
                else {
                    _this.closeWithAnimation();
                }
            };
            return button;
        });
    }

    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        return ModalModule;
    }());
    ModalModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        ListModule,
                        WingBlankModule,
                        WhiteSpaceModule,
                        ButtonModule,
                        InputItemModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        i2.OverlayModule
                    ],
                    exports: [ModalComponent, ModalServiceComponent],
                    declarations: [ModalComponent, ModalServiceComponent],
                    providers: [AlertOptions, ModalService, PopupService]
                },] }
    ];

    var PopoverOptions = /** @class */ (function () {
        function PopoverOptions() {
            this.showArrow = false;
            this.mask = false;
            this.placement = 'bottom';
            this.appendToBody = false;
            this.className = '';
            this.autoClose = true;
        }
        return PopoverOptions;
    }());
    PopoverOptions.decorators = [
        { type: i0.Injectable }
    ];

    var PopoverComponentOptions = /** @class */ (function (_super) {
        __extends(PopoverComponentOptions, _super);
        function PopoverComponentOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PopoverComponentOptions;
    }(PopoverOptions));
    PopoverComponentOptions.decorators = [
        { type: i0.Injectable }
    ];

    var PopoverComponent = /** @class */ (function () {
        function PopoverComponent(options) {
            this.options = options;
            this.defaultProps = {
                prefixCls: 'am-popover'
            };
            this.maskCls = {};
            this.popoverCls = {};
        }
        PopoverComponent.prototype.setClassMap = function () {
            var _a, _b;
            this.maskCls = (_a = {},
                _a[this.defaultProps.prefixCls + "-mask"] = this.options.mask,
                _a[this.defaultProps.prefixCls + "-mask-hidden"] = !this.options.mask,
                _a);
            this.popoverCls = (_b = {},
                _b["" + this.defaultProps.prefixCls] = true,
                _b[this.defaultProps.prefixCls + "-placement-" + this.options.placement] = true,
                _b[this.defaultProps.prefixCls + "-" + this.options.className] = true,
                _b);
        };
        PopoverComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        PopoverComponent.prototype.ngAfterViewInit = function () {
            this.options.onAfterViewInit();
        };
        return PopoverComponent;
    }());
    PopoverComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Popover',
                    template: "<ng-content></ng-content>\n<div [ngClass]=\"maskCls\" (click)=\"options.hidePopover()\"></div>\n<div [ngClass]=\"popoverCls\" style=\"color: currentcolor;\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <div *ngIf=\"options.showArrow\" class=\"{{ defaultProps.prefixCls }}-arrow\"></div>\n    <div class=\"{{ defaultProps.prefixCls }}-inner\">\n      <div class=\"{{ defaultProps.prefixCls }}-inner-wrapper\">\n        <ng-template [ngTemplateOutlet]=\"options.overlay\" [ngTemplateOutletContext]=\"{ options: options }\">\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    PopoverComponent.ctorParameters = function () { return [
        { type: PopoverComponentOptions }
    ]; };

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
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    }
    function getOffset(element) {
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
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
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = getOffsetParent(element);
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
        var hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
        var targetElStyles = getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
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

    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer) {
            this._viewContainerRef = _viewContainerRef;
            this._elm = _elm;
            this._defaultOptions = _defaultOptions;
            this._cfr = _cfr;
            this._renderer = _renderer;
            this._eventListeners = [];
            this.onVisibleChange = new i0.EventEmitter(true);
            this.onSelect = new i0.EventEmitter();
        }
        PopoverDirective.prototype.togglePopover = function () {
            if (!this.popover) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        };
        PopoverDirective.prototype.positionMap = function (placement) {
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
        };
        PopoverDirective.prototype.ngOnInit = function () { };
        PopoverDirective.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.visible && changes.visible.currentValue) {
                setTimeout(function () {
                    _this.showPopover();
                }, 0);
            }
            else {
                setTimeout(function () {
                    _this.hidePopover();
                }, 0);
            }
        };
        PopoverDirective.prototype.ngOnDestroy = function () {
            this.hidePopover();
        };
        PopoverDirective.prototype.onDocumentClick = function (event) {
            if (this.popover &&
                !this._elm.nativeElement.contains(event.target) &&
                !this.popover.location.nativeElement.contains(event.target)) {
                this.hidePopover();
            }
        };
        PopoverDirective.prototype.showPopover = function () {
            var _this = this;
            if (!this.popover) {
                setTimeout(function () {
                    _this._eventListeners = [
                        _this._renderer.listen('document', 'click', function (event) { return _this.onDocumentClick(event); }),
                        _this._renderer.listen('document', 'touchend', function (event) { return _this.onDocumentClick(event); }),
                        _this._renderer.listen('window', 'resize', function () { return _this.positionPopover(); })
                    ];
                });
                var options_1 = new PopoverComponentOptions();
                options_1.placement = this.placement;
                Object.assign(options_1, this._defaultOptions, {
                    hidePopover: function (event) {
                        _this.hidePopover();
                    },
                    onAfterViewInit: function () {
                        _this.positionPopover();
                        var children = document.getElementsByClassName('am-popover-inner-wrapper')[0].children;
                        if (children.length > 0) {
                            var _loop_1 = function (i) {
                                children[i].id = "" + i;
                                children[i].addEventListener('click', function () {
                                    if (_this.onSelect) {
                                        _this.onSelect.emit(children[i]);
                                        if (options_1.autoClose) {
                                            _this.hidePopover();
                                        }
                                    }
                                }, false);
                            };
                            // 首先我们检查它是否包含子节点
                            for (var i = 0; i < children.length; i++) {
                                _loop_1(i);
                            }
                        }
                    }
                });
                var optionalParams = [
                    'mask',
                    'showArrow',
                    'placement',
                    'appendToBody',
                    'overlay',
                    'className',
                    'autoClose'
                ];
                optionalParams.forEach(function (param) {
                    if (typeof _this[param] !== 'undefined') {
                        options_1[param] = _this[param];
                    }
                });
                var componentFactory = this._cfr.resolveComponentFactory(PopoverComponent);
                var childInjector = i0.Injector.create([
                    {
                        provide: PopoverComponentOptions,
                        useValue: options_1
                    }
                ], this._viewContainerRef.parentInjector);
                this.popover = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
                if (options_1.appendToBody) {
                    this.appendToBodyElement = document.body.appendChild(this.popover.location.nativeElement);
                }
                this.onVisibleChange.emit(true);
            }
        };
        PopoverDirective.prototype.positionPopover = function () {
            if (this.popover) {
                var popoverElement = this.popover.location.nativeElement.children[1];
                var popoverPosition = getPositionElements(this._elm.nativeElement, popoverElement, this.positionMap(this.placement) || this._defaultOptions.placement, this.appendToBody || this._defaultOptions.appendToBody);
                if (this.placement === 'landScape') {
                    this._renderer.setStyle(popoverElement, 'top', popoverPosition.top + "px");
                    this._renderer.setStyle(popoverElement, 'left', "0px");
                    this._renderer.setStyle(popoverElement, 'width', window.innerWidth + "px");
                    this._renderer.setStyle(popoverElement, 'max-height', window.innerHeight - popoverPosition.height + "px");
                }
                else if (this.placement === 'fullScreen') {
                    this._renderer.setStyle(popoverElement, 'top', 0 + "px");
                    this._renderer.setStyle(popoverElement, 'left', "0px");
                    this._renderer.setStyle(popoverElement, 'width', window.innerWidth + "px");
                    this._renderer.setStyle(popoverElement, 'max-height', window.innerHeight - popoverPosition.height + "px");
                }
                else {
                    this._renderer.setStyle(popoverElement, 'top', popoverPosition.top + "px");
                    this._renderer.setStyle(popoverElement, 'left', popoverPosition.left + "px");
                }
            }
        };
        PopoverDirective.prototype.hidePopover = function () {
            if (this.appendToBodyElement) {
                document.body.removeChild(this.appendToBodyElement);
                this.appendToBodyElement = null;
            }
            if (this.popover) {
                this.popover.destroy();
                delete this.popover;
                this.onVisibleChange.emit(false);
                this._eventListeners.forEach(function (fn) { return fn(); });
                this._eventListeners = [];
            }
        };
        return PopoverDirective;
    }());
    PopoverDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[Popover], [nzm-popover]',
                    providers: [PopoverOptions]
                },] }
    ];
    PopoverDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef },
        { type: i0.ElementRef },
        { type: PopoverOptions },
        { type: i0.ComponentFactoryResolver },
        { type: i0.Renderer2 }
    ]; };
    PopoverDirective.propDecorators = {
        mask: [{ type: i0.Input }],
        showArrow: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        placement: [{ type: i0.Input }],
        overlay: [{ type: i0.Input }],
        onVisibleChange: [{ type: i0.Output }],
        onSelect: [{ type: i0.Output }],
        appendToBody: [{ type: i0.Input }],
        className: [{ type: i0.Input }],
        autoClose: [{ type: i0.Input }],
        togglePopover: [{ type: i0.HostListener, args: ['click',] }]
    };

    function PopoverOptionsFactory(userOptions) {
        var options = new PopoverOptions();
        Object.assign(options, userOptions);
        return options;
    }
    var PopoverModule = /** @class */ (function () {
        function PopoverModule() {
        }
        return PopoverModule;
    }());
    PopoverModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [PopoverDirective, PopoverComponent],
                    imports: [common.CommonModule],
                    exports: [PopoverDirective, PopoverComponent]
                },] }
    ];

    var NavBarComponent = /** @class */ (function () {
        function NavBarComponent() {
            this.defaultProps = {
                prefixCls: 'am-navbar',
                mode: 'dark',
                onLeftClick: function () { }
            };
            this.navbarCls = {};
            this.isIconString = true;
            this.isLeftContentString = true;
            this.isRightContentString = true;
            this.onLeftClick = new i0.EventEmitter();
            this.amNavbar = true;
        }
        Object.defineProperty(NavBarComponent.prototype, "mode", {
            set: function (value) {
                this.defaultProps.mode = value;
                this.amNavbarLight = this.defaultProps.mode === 'light';
                this.amNavbardark = this.defaultProps.mode === 'dark';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavBarComponent.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.isIconString = false;
                }
                else {
                    this.isIconString = true;
                }
                this._icon = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavBarComponent.prototype, "leftContent", {
            get: function () {
                return this._leftContent;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.isLeftContentString = false;
                }
                else {
                    this.isLeftContentString = true;
                }
                this._leftContent = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavBarComponent.prototype, "rightContent", {
            get: function () {
                return this._rightContent;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this.isRightContentString = false;
                }
                else {
                    this.isRightContentString = true;
                }
                this._rightContent = value;
            },
            enumerable: false,
            configurable: true
        });
        NavBarComponent.prototype.click = function (event) {
            this.onLeftClick.emit(event);
        };
        return NavBarComponent;
    }());
    NavBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Navbar, nzm-nav-bar',
                    template: "<div role=\"button\" class=\"{{ defaultProps.prefixCls }}-left\" (click)=\"click($event)\">\n  <ng-template *ngIf=\"!isLeftContentString\" [ngTemplateOutlet]=\"leftContent\"></ng-template>\n  <span *ngIf=\"icon\" class=\"{{ defaultProps.prefixCls }}-left-icon\" aria-hidden=\"true\">\n    <Icon *ngIf=\"isIconString\" [type]=\"icon\"></Icon>\n    <ng-template *ngIf=\"!isIconString\" [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  {{ isLeftContentString ? leftContent : null }}\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-title\">\n  <ng-content></ng-content>\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-right\">\n  {{ isRightContentString ? rightContent : null }}\n  <ng-template *ngIf=\"!isRightContentString\" [ngTemplateOutlet]=\"rightContent\"></ng-template>\n</div>\n"
                },] }
    ];
    NavBarComponent.ctorParameters = function () { return []; };
    NavBarComponent.propDecorators = {
        mode: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        leftContent: [{ type: i0.Input }],
        rightContent: [{ type: i0.Input }],
        onLeftClick: [{ type: i0.Output }],
        amNavbar: [{ type: i0.HostBinding, args: ['class.am-navbar',] }],
        amNavbarLight: [{ type: i0.HostBinding, args: ['class.am-navbar-light',] }],
        amNavbardark: [{ type: i0.HostBinding, args: ['class.am-navbar-dark',] }]
    };

    var NavBarModule = /** @class */ (function () {
        function NavBarModule() {
        }
        return NavBarModule;
    }());
    NavBarModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule],
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

    var mergeDateTime = function (date, time) {
        date = date || new Date();
        if (!time) {
            return date;
        }
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
    };
    var formatDate = function (date, format, locale) {
        var week = locale && locale.week;
        var o = {
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
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return format;
    };
    var isSameDate = function (day_one, day_two) {
        if (!day_one || !day_two) {
            console.error('isSameDate function need two params');
            return 'need two params';
        }
        var compareDate = day_one.getDate() === day_two.getDate();
        var compareMonth = day_one.getMonth() === day_two.getMonth();
        var compareYear = day_one.getFullYear() === day_two.getFullYear();
        return compareDate && compareMonth && compareYear;
    };

    exports.DateModels = void 0;
    (function (DateModels) {
        var SelectType;
        (function (SelectType) {
            SelectType[SelectType["None"] = 0] = "None";
            SelectType[SelectType["Single"] = 1] = "Single";
            SelectType[SelectType["All"] = 2] = "All";
            SelectType[SelectType["Only"] = 3] = "Only";
            SelectType[SelectType["Start"] = 4] = "Start";
            SelectType[SelectType["Middle"] = 5] = "Middle";
            SelectType[SelectType["End"] = 6] = "End";
        })(SelectType = DateModels.SelectType || (DateModels.SelectType = {}));
    })(exports.DateModels || (exports.DateModels = {}));

    var CalendarDatePickerBaseComponent = /** @class */ (function () {
        function CalendarDatePickerBaseComponent() {
            var _this = this;
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
            this.getDateWithoutTime = function (date) {
                if (!date) {
                    return 0;
                }
                return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
            };
            this.genWeekData = function (firstDate) {
                var minDateTime = _this.getDateWithoutTime(_this.props.minDate);
                var maxDateTime = _this.getDateWithoutTime(_this.props.maxDate) || Number.POSITIVE_INFINITY;
                var weeks = [];
                var nextMonth = _this.getMonthDate(firstDate, 1).firstDate;
                var currentDay = firstDate;
                var currentWeek = [];
                weeks.push(currentWeek);
                var startWeekday = currentDay.getDay();
                if (startWeekday > 0) {
                    for (var i = 0; i < startWeekday; i++) {
                        currentWeek.push({});
                    }
                }
                while (currentDay < nextMonth) {
                    if (currentWeek.length === 7) {
                        currentWeek = [];
                        weeks.push(currentWeek);
                    }
                    var dayOfMonth = currentDay.getDate();
                    var tick = +currentDay;
                    currentWeek.push({
                        tick: tick,
                        dayOfMonth: dayOfMonth,
                        selected: exports.DateModels.SelectType.None,
                        isFirstOfMonth: dayOfMonth === 1,
                        isLastOfMonth: false,
                        outOfDate: tick < minDateTime || tick > maxDateTime
                    });
                    currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
                }
                currentWeek[currentWeek.length - 1].isLastOfMonth = true;
                return weeks;
            };
            this.selectDateRange = function (startDate, endDate, clear) {
                if (clear === void 0) { clear = false; }
                var _a = _this.props, getDateExtra = _a.getDateExtra, type = _a.type, onSelectHasDisableDate = _a.onSelectHasDisableDate;
                if (type === 'one') {
                    endDate = undefined;
                }
                var time1 = _this.getDateWithoutTime(startDate), time2 = _this.getDateWithoutTime(endDate);
                var startDateTick = !time2 || time1 < time2 ? time1 : time2;
                var endDateTick = time2 && time1 > time2 ? time1 : time2;
                var startMonthDate = _this.getMonthDate(new Date(startDateTick)).firstDate;
                var endMonthDate = endDateTick ? new Date(endDateTick) : _this.getMonthDate(new Date(startDateTick)).lastDate;
                var unuseable = [], needUpdate = false;
                _this.state.months
                    .filter(function (m) {
                    return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
                })
                    .forEach(function (m) {
                    m.weeks.forEach(function (w) { return w
                        .filter(function (d) {
                        if (!endDateTick) {
                            return d.tick && _this.inDate(startDateTick, d.tick);
                        }
                        else {
                            return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
                        }
                    })
                        .forEach(function (d) {
                        var oldValue = d.selected;
                        if (clear) {
                            d.selected = exports.DateModels.SelectType.None;
                        }
                        else {
                            var info = (getDateExtra && getDateExtra(new Date(d.tick))) || {};
                            if (d.outOfDate || info.disable) {
                                unuseable.push(d.tick);
                            }
                            if (_this.inDate(startDateTick, d.tick)) {
                                if (type === 'one') {
                                    d.selected = exports.DateModels.SelectType.Single;
                                }
                                else if (!endDateTick) {
                                    d.selected = exports.DateModels.SelectType.Only;
                                }
                                else if (startDateTick !== endDateTick) {
                                    d.selected = exports.DateModels.SelectType.Start;
                                }
                                else {
                                    d.selected = exports.DateModels.SelectType.All;
                                }
                            }
                            else if (_this.inDate(endDateTick, d.tick)) {
                                d.selected = exports.DateModels.SelectType.End;
                            }
                            else {
                                d.selected = exports.DateModels.SelectType.Middle;
                            }
                        }
                        needUpdate = needUpdate || d.selected !== oldValue;
                    }); });
                    if (needUpdate && m.componentRef) {
                        m.componentRef.updateWeeks();
                    }
                });
                if (unuseable.length > 0) {
                    if (onSelectHasDisableDate) {
                        onSelectHasDisableDate(unuseable.map(function (tick) { return new Date(tick); }));
                    }
                    else {
                        console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
                    }
                }
            };
            this.computeVisible = function (clientHeight, scrollTop) {
                var needUpdate = false;
                var MAX_VIEW_PORT = clientHeight * 2;
                var MIN_VIEW_PORT = clientHeight;
                // 大缓冲区外过滤规则
                var filterFunc = function (vm) { return vm.y &&
                    vm.height &&
                    (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT); };
                if (_this.props.infiniteOpt && _this.visibleMonth.length > 12) {
                    _this.visibleMonth = _this.visibleMonth.filter(filterFunc).sort(function (a, b) { return +a.firstDate - +b.firstDate; });
                }
                // 当小缓冲区不满时填充
                if (_this.visibleMonth.length > 0) {
                    var last = _this.visibleMonth[_this.visibleMonth.length - 1];
                    if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
                        var lastIndex = _this.state.months.indexOf(last);
                        for (var i = 1; i <= 2; i++) {
                            var index = lastIndex + i;
                            if (index < _this.state.months.length && _this.visibleMonth.indexOf(_this.state.months[index]) < 0) {
                                _this.visibleMonth.push(_this.state.months[index]);
                            }
                            else {
                                if (_this.canLoadNext()) {
                                    _this.genMonthData(undefined, 1);
                                }
                            }
                        }
                        needUpdate = true;
                    }
                    var first = _this.visibleMonth[0];
                    if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
                        var firstIndex = _this.state.months.indexOf(first);
                        for (var i = 1; i <= 2; i++) {
                            var index = firstIndex - i;
                            if (index >= 0 && _this.visibleMonth.indexOf(_this.state.months[index]) < 0) {
                                _this.visibleMonth.unshift(_this.state.months[index]);
                                needUpdate = true;
                            }
                        }
                    }
                }
                else if (_this.state.months.length > 0) {
                    _this.visibleMonth = _this.state.months.filter(filterFunc);
                    needUpdate = true;
                }
                return needUpdate;
            };
            this.createOnScroll = function () {
                // let timer: any;
                var clientHeight = 0, scrollTop = 0;
                return function (data) {
                    var client = data.client, top = data.top;
                    clientHeight = client;
                    scrollTop = top;
                    _this.computeVisible(clientHeight, scrollTop);
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
            this.baseOnCellClick = function (day) {
                if (!day.tick) {
                    return;
                }
                if (_this.props.onCellClick) {
                    _this.props.onCellClick(new Date(day.tick));
                }
            };
        }
        CalendarDatePickerBaseComponent.prototype.init = function () {
            var _a = this.props, _b = _a.initalMonths, initalMonths = _b === void 0 ? 6 : _b, defaultDate = _a.defaultDate;
            for (var i = 0; i < initalMonths; i++) {
                if (this.canLoadNext()) {
                    this.genMonthData(defaultDate, i);
                }
            }
            this.visibleMonth = __spread(this.state.months);
        };
        CalendarDatePickerBaseComponent.prototype.receiveProps = function (oldValue, newValue) {
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
        };
        CalendarDatePickerBaseComponent.prototype.getMonthDate = function (date, addMonth) {
            if (date === void 0) { date = new Date(); }
            if (addMonth === void 0) { addMonth = 0; }
            var y = date.getFullYear(), m = date.getMonth();
            return {
                firstDate: new Date(y, m + addMonth, 1),
                lastDate: new Date(y, m + 1 + addMonth, 0)
            };
        };
        CalendarDatePickerBaseComponent.prototype.canLoadPrev = function () {
            var minDate = this.props.minDate;
            return (!minDate ||
                this.state.months.length <= 0 ||
                +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate);
        };
        CalendarDatePickerBaseComponent.prototype.canLoadNext = function () {
            var maxDate = this.props.maxDate;
            return (!maxDate ||
                this.state.months.length <= 0 ||
                +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate);
        };
        CalendarDatePickerBaseComponent.prototype.genMonthData = function (date, addMonth) {
            if (addMonth === void 0) { addMonth = 0; }
            if (!date) {
                date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
            }
            if (!date) {
                date = new Date();
            }
            var locale = this.props.locale;
            var _a = this.getMonthDate(date, addMonth), firstDate = _a.firstDate, lastDate = _a.lastDate;
            var weeks = this.genWeekData(firstDate);
            var title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
            var data = {
                title: title,
                firstDate: firstDate,
                lastDate: lastDate,
                weeks: weeks
            };
            data.component = this.genMonthComponent(data);
            if (addMonth >= 0) {
                this.state.months.push(data);
            }
            else {
                this.state.months.unshift(data);
            }
            var _b = this.props, startDate = _b.startDate, endDate = _b.endDate;
            if (startDate) {
                this.selectDateRange(startDate, endDate);
            }
            return data;
        };
        CalendarDatePickerBaseComponent.prototype.inDate = function (date, tick) {
            return date <= tick && tick < date + 24 * 3600000;
        };
        return CalendarDatePickerBaseComponent;
    }());

    var CalendarDatePickerComponent = /** @class */ (function (_super) {
        __extends(CalendarDatePickerComponent, _super);
        function CalendarDatePickerComponent() {
            var _this = _super.call(this) || this;
            _this.transform = '';
            _this._initDelta = 0;
            _this._lastY = 0;
            _this._delta = _this._initDelta;
            _this.amCalendar = true;
            _this.datePicker = true;
            _this.genMonthComponent = function (data) {
                if (!data) {
                    return;
                }
                return {
                    monthData: data,
                    locale: _this.props.locale,
                    rowSize: _this.props.rowSize,
                    onCellClick: _this.baseOnCellClick,
                    getDateExtra: _this.props.getDateExtra,
                    ref: function (dom) {
                        data.componentRef = dom || data.componentRef || undefined;
                        data.updateLayout = function () {
                            _this.computeHeight(data, dom);
                        };
                        data.updateLayout();
                    }
                };
            };
            _this.computeHeight = function (data, singleMonth) {
                if (singleMonth && singleMonth.wrapperDivDOM) {
                    if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
                        setTimeout(function () { return _this.computeHeight(data, singleMonth); }, 500);
                        return;
                    }
                    data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
                    data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
                }
            };
            _this.setLayout = function (dom) {
                if (dom) {
                    var onLayout = _this.props.onLayout;
                    if (onLayout) {
                        onLayout(dom.clientHeight);
                    }
                    var scrollHandler_1 = _this.createOnScroll();
                    dom.onscroll = function (evt) {
                        scrollHandler_1({
                            client: dom.clientHeight,
                            full: evt.currentTarget.clientHeight,
                            top: evt.currentTarget.scrollTop
                        });
                    };
                }
            };
            _this.setPanel = function (dom) {
                _this._panel = dom;
            };
            return _this;
        }
        Object.defineProperty(CalendarDatePickerComponent.prototype, "onCellClick", {
            set: function (value) {
                this.props.onCellClick = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarDatePickerComponent.prototype, "endDate", {
            set: function (value) {
                var oldProps = Object.assign({}, this.props);
                this.props.endDate = value;
                this.receiveProps(oldProps, this.props);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarDatePickerComponent.prototype, "startDate", {
            set: function (value) {
                var oldProps = Object.assign({}, this.props);
                this.props.startDate = value;
                this.receiveProps(oldProps, this.props);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarDatePickerComponent.prototype, "propsData", {
            set: function (value) {
                this.props = Object.assign(Object.assign({}, this.props), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarDatePickerComponent.prototype, "onSelectHasDisableDate", {
            set: function (value) {
                this.props.onSelectHasDisableDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarDatePickerComponent.prototype, "onLayout", {
            set: function (value) {
                this.props.onLayout = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarDatePickerComponent.prototype.onTouchStart = function (event) {
            this._lastY = event.touches[0].screenY || event.touches[0].pageY;
            this._delta = this._initDelta;
        };
        CalendarDatePickerComponent.prototype.onTouchMove = function (event) {
            var ele = event.currentTarget;
            var isReachTop = ele.scrollTop === 0;
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
                this.setTransform(this._panel.style, "translate3d(0," + this._delta + "px,0)");
            }
        };
        CalendarDatePickerComponent.prototype.onTouchEnd = function (event) {
            this.onFinish();
        };
        CalendarDatePickerComponent.prototype.onFinish = function () {
            var _this = this;
            if (this._delta > 40 && this.canLoadPrev()) {
                this.genMonthData(this.state.months[0].firstDate, -1);
                this.visibleMonth = this.state.months.slice(0, this.props.initalMonths);
                this.state.months.forEach(function (m) {
                    if (m.updateLayout) {
                        m.updateLayout();
                    }
                });
            }
            this.setTransform(this._panel.style, "translate3d(0,0,0)");
            this.setTransition(this._panel.style, '.3s');
            setTimeout(function () {
                if (_this._panel) {
                    _this.setTransition(_this._panel.style, '');
                }
            }, 300);
        };
        CalendarDatePickerComponent.prototype.setTransform = function (nodeStyle, value) {
            this.transform = value;
            nodeStyle.transform = value;
            nodeStyle.webkitTransform = value;
        };
        CalendarDatePickerComponent.prototype.setTransition = function (nodeStyle, value) {
            nodeStyle.transition = value;
            nodeStyle.webkitTransition = value;
        };
        CalendarDatePickerComponent.prototype.ngOnInit = function () {
            this.init();
            this.setLayout(this.layoutDom.nativeElement);
            this.setPanel(this.panelDom.nativeElement);
        };
        return CalendarDatePickerComponent;
    }(CalendarDatePickerBaseComponent));
    CalendarDatePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarDatePicker, nzm-calendar-date-picker',
                    template: "<CalendarWeekPanel [locale]=\"props.locale\"></CalendarWeekPanel>\n<div\n  #layout\n  class=\"wrapper\"\n  style=\"overflow-x:hidden;overflow-y:visible;-webkit-overflow-scrolling:touch;\"\n  (touchstart)=\"onTouchStart($event)\"\n  (touchmove)=\"onTouchMove($event)\"\n  (touchend)=\"onTouchEnd($event)\"\n>\n  <div #panel [ngStyle]=\"{ transform: transform }\">\n    <div *ngIf=\"canLoadPrev()\" class=\"load-tip\">{{ props.locale.loadPrevMonth }}</div>\n    <div class=\"months\">\n      <CalendarSingleMonth\n        *ngFor=\"let item of visibleMonth; let i = index\"\n        style=\"display: block;\"\n        [data]=\"item.component\"\n      ></CalendarSingleMonth>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarDatePickerComponent.ctorParameters = function () { return []; };
    CalendarDatePickerComponent.propDecorators = {
        layoutDom: [{ type: i0.ViewChild, args: ['layout', { static: true },] }],
        panelDom: [{ type: i0.ViewChild, args: ['panel', { static: true },] }],
        onCellClick: [{ type: i0.Input }],
        endDate: [{ type: i0.Input }],
        startDate: [{ type: i0.Input }],
        propsData: [{ type: i0.Input }],
        onSelectHasDisableDate: [{ type: i0.Input }],
        onLayout: [{ type: i0.Input }],
        amCalendar: [{ type: i0.HostBinding, args: ['class.am-calendar',] }],
        datePicker: [{ type: i0.HostBinding, args: ['class.date-picker',] }]
    };

    var CalendarComponent = /** @class */ (function () {
        function CalendarComponent(_localeProviderService) {
            var _this = this;
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
            this._unsubscribe$ = new rxjs.Subject();
            this._dateModelTime = 0;
            this.onCancel = new i0.EventEmitter();
            this.onConfirm = new i0.EventEmitter();
            this.onSelectHasDisableDate = new i0.EventEmitter();
            this.class = 'am-calendar';
            this.selectDate = function (date, useDateTime, oldState, props) {
                if (useDateTime === void 0) { useDateTime = false; }
                if (oldState === void 0) { oldState = {}; }
                if (props === void 0) { props = _this.props; }
                if (!date) {
                    return {};
                }
                var newState = {};
                var type = props.type, pickTime = props.pickTime, defaultTimeValue = props.defaultTimeValue, _a = props.locale, locale = _a === void 0 ? {} : _a;
                var newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
                var startDate = oldState.startDate, endDate = oldState.endDate;
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
                            newState = Object.assign(Object.assign({}, newState), { timePickerTitle: +newDate >= +startDate || _this.isSameDate(startDate, newDate)
                                    ? locale.selectEndTime
                                    : locale.selectStartTime, disConfirmBtn: false, endDate: pickTime && !useDateTime && (+newDate >= +startDate || _this.isSameDate(startDate, newDate))
                                    ? new Date(+mergeDateTime(newDate, startDate) + 3600000)
                                    : newDate });
                        }
                        break;
                }
                _this.writeModelData(date);
                return newState;
            };
            this.onSelectedDate = function (date) {
                var _a = _this.state, startDate = _a.startDate, endDate = _a.endDate;
                var onSelect = _this.props.onSelect;
                if (onSelect) {
                    var value = onSelect(date, [startDate, endDate]);
                    if (value) {
                        _this.shortcutSelect(value[0], value[1]);
                        return;
                    }
                }
                _this.state = Object.assign(Object.assign({}, _this.state), _this.selectDate(date, false, { startDate: startDate, endDate: endDate }));
                _this.showClear = !!_this.state.startDate;
            };
            this.triggerSelectHasDisableDate = function (date) {
                _this.triggerClear();
                if (_this.onSelectHasDisableDate) {
                    _this.onSelectHasDisableDate.emit(date);
                }
            };
            this.onClose = function () {
                _this.state = {
                    showTimePicker: false,
                    timePickerTitle: '',
                    startDate: undefined,
                    endDate: undefined,
                    disConfirmBtn: true,
                    clientHight: 0
                };
                _this.showClear = !!_this.state.startDate;
            };
            this.triggerConfirm = function () {
                var _a = _this.state, startDate = _a.startDate, endDate = _a.endDate;
                if (startDate && endDate && +startDate > +endDate) {
                    _this.onClose();
                    return _this.onConfirm && _this.onConfirm.emit({ startDate: endDate, endDate: startDate });
                }
                if (_this.onConfirm) {
                    _this.onConfirm.emit({ startDate: startDate, endDate: endDate });
                }
                _this.onClose();
            };
            this.triggerClear = function () {
                // 清除数据做延迟，否则同步刷新数据导致报错
                setTimeout(function () {
                    _this.state = Object.assign(Object.assign({}, _this.state), { startDate: undefined, endDate: undefined, showTimePicker: false });
                    if (_this.props.onClear) {
                        _this.props.onClear();
                    }
                    _this.showClear = !!_this.state.startDate;
                }, 0);
            };
            this.onTimeChange = function (date) {
                var _a = _this.state, startDate = _a.startDate, endDate = _a.endDate;
                if (endDate) {
                    _this.state.endDate = date;
                }
                else if (startDate) {
                    _this.state.startDate = date;
                }
            };
            this.shortcutSelect = function (startDate, endDate, props) {
                if (props === void 0) { props = _this.props; }
                _this.state = Object.assign(Object.assign(Object.assign({}, _this.state), { startDate: startDate, showTimePicker: false }), _this.selectDate(endDate, true, { startDate: startDate }, props));
                _this.showClear = !!_this.state.startDate;
            };
            this.setClientHeight = function (height) {
                _this.state.clientHight = height;
            };
            this.onChangeFn = function () { };
            this.onTouchFn = function () { };
        }
        Object.defineProperty(CalendarComponent.prototype, "locale", {
            set: function (value) {
                if (value === 'enUS') {
                    this.props.locale = Calendar;
                }
                else if (value === 'zhCN') {
                    this.props.locale = zhCN;
                }
                this._unsubscribe$.next();
                this._unsubscribe$.complete();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "defaultTimeValue", {
            set: function (value) {
                if (value) {
                    this.props.defaultTimeValue = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "prefixCls", {
            set: function (value) {
                if (value) {
                    this.props.prefixCls = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "enterDirection", {
            set: function (value) {
                this._enterDirection = value;
                if (this._enterDirection === 'horizontal') {
                    this.contentAnimateClass = 'slideH-enter slideH-enter-active';
                }
                else {
                    this.contentAnimateClass = 'slideV-enter slideV-enter-active';
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "visible", {
            set: function (value) {
                var _this = this;
                this.props.visible = value;
                if (value === true || value === 'true') {
                    this.showAnimation();
                    this.isShow = true;
                }
                else {
                    this.hideAnimation();
                    setTimeout(function () {
                        _this.isShow = false;
                    }, 300);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "getDateExtra", {
            set: function (value) {
                this.props.getDateExtra = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "defaultDate", {
            set: function (value) {
                this.props.defaultDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "minDate", {
            set: function (value) {
                this.props.minDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "maxDate", {
            set: function (value) {
                this.props.maxDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "pickTime", {
            set: function (value) {
                this.props.pickTime = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "type", {
            set: function (value) {
                this.props.type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "showShortcut", {
            set: function (value) {
                this.props.showShortcut = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "rowSize", {
            set: function (value) {
                this.props.rowSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "infinite", {
            set: function (value) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "defaultValue", {
            set: function (value) {
                this.props.defaultValue = value;
                if (value) {
                    this.receiveProps(this.props);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarComponent.prototype, "onSelect", {
            set: function (value) {
                this.props.onSelect = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarComponent.prototype.writeValue = function (value) {
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
        };
        CalendarComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        CalendarComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchFn = fn;
        };
        CalendarComponent.prototype.receiveProps = function (nextProps) {
            if (nextProps.visible && nextProps.defaultValue) {
                this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
            }
        };
        CalendarComponent.prototype.showAnimation = function () {
            if (this._enterDirection === 'horizontal') {
                this.contentAnimateClass = 'slideH-enter slideH-enter-active';
            }
            else {
                this.contentAnimateClass = 'slideV-enter slideV-enter-active';
            }
            this.maskAnimateClass = 'fade-enter fade-enter-active';
        };
        CalendarComponent.prototype.hideAnimation = function () {
            if (this._enterDirection === 'horizontal') {
                this.contentAnimateClass = 'slideH-leave slideH-leave-active';
            }
            else {
                this.contentAnimateClass = 'slideV-leave slideV-leave-active';
            }
            this.maskAnimateClass = 'fade-leave fade-leave-active';
        };
        CalendarComponent.prototype.writeModelData = function (date) {
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
        };
        CalendarComponent.prototype.triggerCancel = function () {
            if (this.props.onCancel) {
                this.props.onCancel();
            }
            this.onClose();
            if (this.onCancel) {
                this.onCancel.emit();
            }
        };
        CalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            var defaultValue = this.props.defaultValue;
            if (defaultValue) {
                this.state = Object.assign(Object.assign({}, this.state), this.selectDate(defaultValue[1], true, { startDate: defaultValue[0] }, this.props));
            }
            this._localeProviderService.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                _this.props.locale = Object.assign({}, _this._localeProviderService.getLocaleSubObj('Calendar'));
            });
        };
        CalendarComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return CalendarComponent;
    }());
    CalendarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Calendar, nzm-calendar',
                    template: "<span *ngIf=\"isShow\">\n  <div class=\"{{ 'mask ' + maskAnimateClass }}\"></div>\n</span>\n<span *ngIf=\"isShow\">\n  <div class=\"{{ 'content animate ' + contentAnimateClass }}\">\n    <CalendarHeader\n      [locale]=\"props.locale\"\n      [closeIcon]=\"closeIconHtml\"\n      [showClear]=\"showClear\"\n      (onCancel)=\"triggerCancel()\"\n      (onClear)=\"triggerClear()\"\n    ></CalendarHeader>\n    <CalendarDatePicker\n      [propsData]=\"props\"\n      [endDate]=\"state.endDate\"\n      [startDate]=\"state.startDate\"\n      [onCellClick]=\"onSelectedDate\"\n      [onSelectHasDisableDate]=\"triggerSelectHasDisableDate\"\n      [onLayout]=\"setClientHeight\"\n    ></CalendarDatePicker>\n    <CalendarTimePicker\n      *ngIf=\"state.showTimePicker\"\n      [propsData]=\"props\"\n      [title]=\"state.timePickerTitle\"\n      [clientHeight]=\"state.clientHight\"\n      [prefixCls]=\"props.timePickerPrefixCls\"\n      [defaultValue]=\"props.defaultTimeValue\"\n      [pickerPrefixCls]=\"props.timePickerPickerPrefixCls\"\n      [value]=\"state.endDate ? state.endDate : state.startDate\"\n      [onValueChange]=\"onTimeChange\"\n    ></CalendarTimePicker>\n    <CalendarShortcutPanel\n      *ngIf=\"props.showShortcut && !state.showTimePicker\"\n      [locale]=\"props.locale\"\n      [onSelect]=\"shortcutSelect\"\n    ></CalendarShortcutPanel>\n    <CalendarConfirmPanel\n      *ngIf=\"state.startDate\"\n      [propsData]=\"props\"\n      [startDateTime]=\"state.startDate\"\n      [endDateTime]=\"state.endDate\"\n      [disableBtn]=\"state.disConfirmBtn\"\n      [formatStr]=\"props.pickTime ? props.locale.dateTimeFormat : props.locale.dateFormat\"\n      [onConfirm]=\"triggerConfirm\"\n    ></CalendarConfirmPanel>\n  </div>\n</span>\n<ng-template #closeIconHtml>\n  <Icon [type]=\"'cross'\"></Icon>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: i0.forwardRef(function () { return CalendarComponent; }), multi: true }]
                },] }
    ];
    CalendarComponent.ctorParameters = function () { return [
        { type: LocaleProviderService }
    ]; };
    CalendarComponent.propDecorators = {
        datepicker: [{ type: i0.ViewChild, args: [CalendarDatePickerComponent,] }],
        locale: [{ type: i0.Input }],
        defaultTimeValue: [{ type: i0.Input }],
        prefixCls: [{ type: i0.Input }],
        enterDirection: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        getDateExtra: [{ type: i0.Input }],
        defaultDate: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        pickTime: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        showShortcut: [{ type: i0.Input }],
        rowSize: [{ type: i0.Input }],
        infinite: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        onSelect: [{ type: i0.Input }],
        onCancel: [{ type: i0.Output }],
        onConfirm: [{ type: i0.Output }],
        onSelectHasDisableDate: [{ type: i0.Output }],
        class: [{ type: i0.HostBinding, args: ['class',] }]
    };

    var CalendarHeaderComponent = /** @class */ (function () {
        function CalendarHeaderComponent() {
            this.closeIcon_component = false;
            this._closeIcon = 'X';
            this.onCancel = new i0.EventEmitter();
            this.onClear = new i0.EventEmitter();
            this.header = true;
        }
        Object.defineProperty(CalendarHeaderComponent.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            set: function (value) {
                this._locale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarHeaderComponent.prototype, "closeIcon", {
            get: function () {
                return this._closeIcon;
            },
            set: function (value) {
                if (value instanceof i0.TemplateRef) {
                    this._closeIcon = value;
                    this.closeIcon_component = true;
                }
                else {
                    this._closeIcon = value;
                    this.closeIcon_component = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarHeaderComponent.prototype, "showClear", {
            get: function () {
                return this._showClear;
            },
            set: function (value) {
                this._showClear = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarHeaderComponent.prototype.triggerCancel = function () {
            if (this.onCancel) {
                this.onCancel.emit();
            }
        };
        CalendarHeaderComponent.prototype.triggerClear = function () {
            if (this.onClear) {
                this.onClear.emit();
            }
        };
        return CalendarHeaderComponent;
    }());
    CalendarHeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarHeader, nzm-calendar-header',
                    template: "<span *ngIf=\"!closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\" [innerHTML]=\"closeIcon\"></span>\n<span *ngIf=\"closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\">\n  <ng-template [ngTemplateOutlet]=\"closeIcon\"></ng-template>\n</span>\n<span class=\"title\">{{ title || locale.title }}</span>\n<span *ngIf=\"showClear\" class=\"right\" (click)=\"triggerClear()\">{{ clearIcon || locale.clear }}</span>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarHeaderComponent.ctorParameters = function () { return []; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: i0.Input }],
        closeIcon: [{ type: i0.Input }],
        showClear: [{ type: i0.Input }],
        onCancel: [{ type: i0.Output }],
        onClear: [{ type: i0.Output }],
        header: [{ type: i0.HostBinding, args: ['class.header',] }]
    };

    var CalendarWeekPanelComponent = /** @class */ (function () {
        function CalendarWeekPanelComponent() {
            this.week = ['日', '一', '二', '三', '四', '五', '六'];
            this.weekPanel = true;
        }
        Object.defineProperty(CalendarWeekPanelComponent.prototype, "locale", {
            set: function (value) {
                this._locale = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarWeekPanelComponent.prototype.ngOnInit = function () {
            this.week = this._locale.week;
        };
        return CalendarWeekPanelComponent;
    }());
    CalendarWeekPanelComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarWeekPanel, nzm-calendar-week-panel',
                    template: "<div class=\"cell cell-grey\">{{ week[0] }}</div>\n<div class=\"cell\">{{ week[1] }}</div>\n<div class=\"cell\">{{ week[2] }}</div>\n<div class=\"cell\">{{ week[3] }}</div>\n<div class=\"cell\">{{ week[4] }}</div>\n<div class=\"cell\">{{ week[5] }}</div>\n<div class=\"cell cell-grey\">{{ week[6] }}</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarWeekPanelComponent.ctorParameters = function () { return []; };
    CalendarWeekPanelComponent.propDecorators = {
        locale: [{ type: i0.Input }],
        weekPanel: [{ type: i0.HostBinding, args: ['class.week-panel',] }]
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
        Calendar: Calendar,
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

    var CalendarTimePickerComponent = /** @class */ (function () {
        function CalendarTimePickerComponent() {
            var _this = this;
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
            this.onDateChange = function (date) {
                var onValueChange = _this.props.onValueChange;
                if (onValueChange) {
                    onValueChange(date.date);
                }
            };
        }
        Object.defineProperty(CalendarTimePickerComponent.prototype, "propsData", {
            set: function (value) {
                this.props = Object.assign(Object.assign({}, this.props), value);
                if (this.props.locale && this.props.locale.today === 'Today') {
                    this.props.datePickerViewLocale = en_US;
                }
                else {
                    this.props.datePickerViewLocale = zh_CN;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "title", {
            set: function (value) {
                this.props.title = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "value", {
            set: function (value) {
                this.props.value = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "prefixCls", {
            set: function (value) {
                this.props.prefixCls = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "defaultValue", {
            set: function (value) {
                this.props.defaultValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "pickerPrefixCls", {
            set: function (value) {
                this.props.pickerPrefixCls = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "clientHeight", {
            set: function (value) {
                this.props.clientHeight = value;
                var height = (value && (value * 3) / 8 - 52) || Number.POSITIVE_INFINITY;
                this.selfHeight = (height > 164 || height < 0 ? 164 : height) + 'px';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarTimePickerComponent.prototype, "onValueChange", {
            set: function (value) {
                this.props.onValueChange = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarTimePickerComponent.prototype.getMinTime = function (date) {
            var minDate = this.props.minDate;
            if (!date ||
                date.getFullYear() > minDate.getFullYear() ||
                date.getMonth() > minDate.getMonth() ||
                date.getDate() > minDate.getDate()) {
                return this.defaultProps.minDate;
            }
            return minDate;
        };
        CalendarTimePickerComponent.prototype.getMaxTime = function (date) {
            var maxDate = this.props.maxDate;
            if (!date ||
                date.getFullYear() < maxDate.getFullYear() ||
                date.getMonth() < maxDate.getMonth() ||
                date.getDate() < maxDate.getDate()) {
                return this.defaultProps.maxDate;
            }
            return maxDate;
        };
        return CalendarTimePickerComponent;
    }());
    CalendarTimePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarTimePicker, nzm-calendar-time-picker',
                    template: "<div class=\"title\">{{ props.title }}</div>\n<DatePickerView\n  [ngStyle]=\"{ height: selfHeight, overflow: 'hidden' }\"\n  [mode]=\"props.mode\"\n  [value]=\"props.value\"\n  [locale]=\"props.datePickerViewLocale\"\n  [minDate]=\"getMinTime(props.value || props.defaultValue || undefined)\"\n  [maxDate]=\"getMaxTime(props.value || props.defaultValue || undefined)\"\n  (onValueChange)=\"onDateChange($event)\"\n></DatePickerView>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarTimePickerComponent.ctorParameters = function () { return []; };
    CalendarTimePickerComponent.propDecorators = {
        propsData: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        prefixCls: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        pickerPrefixCls: [{ type: i0.Input }],
        clientHeight: [{ type: i0.Input }],
        onValueChange: [{ type: i0.Input }],
        timePicker: [{ type: i0.HostBinding, args: ['class.time-picker',] }]
    };

    var DatePickerOptions = /** @class */ (function () {
        function DatePickerOptions() {
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
            this.onOk = new i0.EventEmitter();
            this.onDismiss = new i0.EventEmitter();
            this.onValueChange = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
        }
        return DatePickerOptions;
    }());
    DatePickerOptions.decorators = [
        { type: i0.Injectable }
    ];

    function getVelocity() {
        return (function (minInterval, maxInterval) {
            if (minInterval === void 0) { minInterval = 30; }
            if (maxInterval === void 0) { maxInterval = 100; }
            var _time = 0;
            var _y = 0;
            var _velocity = 0;
            var recorder = {
                record: function (y) {
                    var now = +new Date();
                    _velocity = (y - _y) / (now - _time);
                    if (now - _time >= minInterval) {
                        _velocity = now - _time <= maxInterval ? _velocity : 0;
                        _y = y;
                        _time = now;
                    }
                },
                getVelocity: function (y) {
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

    var DatePickerComponent = /** @class */ (function () {
        function DatePickerComponent(elementRef, options, toast, localeProviderService) {
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
            this.unsubscribe$ = new rxjs.Subject();
            this.Velocity = getVelocity();
            this.errorMessage = '';
            this.curTLessThanMin = false;
            this.curTMoreThanMax = false;
        }
        DatePickerComponent.prototype.panstart = function (event) {
            var _this = this;
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
                this.selectedTarget.forEach(function (item) {
                    if (item.targetId === event.target.id) {
                        _this.currentY = item.currentY;
                    }
                });
            }
            var ev = this.getEventTarget(event);
            this.startY = ev.clientY;
        };
        DatePickerComponent.prototype.panmove = function (event) {
            if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
                return;
            }
            event.preventDefault();
            var ev = this.getEventTarget(event);
            this.differY = ev.clientY - this.startY;
            this.Velocity.record(this.differY);
            this.dom.style.transition = 'transform 0s';
            this.dom.style.transform = "translateY(" + (this.currentY * this.lineHeight + this.differY) + "px)";
        };
        DatePickerComponent.prototype.panend = function (event) {
            var _this = this;
            if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown) {
                return;
            }
            this.isMouseDown = false;
            event.preventDefault();
            var ev = this.getEventTarget(event);
            this.differY = ev.clientY - this.startY;
            var time = 0.3;
            var velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
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
                var hasKey_1 = false;
                this.selectedTarget.forEach(function (item) {
                    if (item.targetId === event.target.id) {
                        hasKey_1 = true;
                        item.targetId = event.target.id;
                        item.currentY = _this.currentY;
                    }
                });
                if (!hasKey_1) {
                    this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
                }
            }
            else {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
            this.dom.style.transform = "translateY(" + this.currentY * this.lineHeight + "px)";
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
        };
        DatePickerComponent.prototype.init = function () {
            var _this = this;
            if (!this.checkTime() && this.options.showErrorToast) {
                setTimeout(function () {
                    _this.toast.fail(_this.errorMessage, _this.options.showErrorToastInterval);
                }, 0);
            }
            this.initResult();
            this.initReady();
            this.getInitValueIndex();
        };
        DatePickerComponent.prototype.reloadPicker = function () {
            if (!this.picker || this.picker === undefined) {
                return;
            }
            this.currentPicker = this.picker.element.nativeElement;
            if (this.currentPicker && this.currentPicker.children.length > 0) {
                var self_1 = this;
                setTimeout(function () {
                    self_1.selectedTarget.forEach(function (item, i) {
                        self_1.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                        var index = parseInt(item.currentY, 0);
                        self_1.currentPicker.children[i].children[2].style.transform = "translateY(" + index * self_1.lineHeight + "px)";
                    });
                }, 0);
            }
        };
        DatePickerComponent.prototype.localeProvider = function () {
            var self = this;
            if (self.options.locale || self.options.locale !== undefined) {
                self.localeProviderService.setLocale(self.options.locale);
            }
            self.localeProviderService.localeChange.pipe(operators.takeUntil(self.unsubscribe$)).subscribe(function (_) {
                self.options.locale = self.localeProviderService.getLocale();
                self.localeNew = self.localeProviderService.getLocaleSubObj('DatePicker');
                self.options.okText = self.localeNew.okText;
                self.options.dismissText = self.localeNew.dismissText;
                self.init();
            });
        };
        DatePickerComponent.prototype.transformDateFormat = function (date) {
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
        };
        DatePickerComponent.prototype.preZero = function (val) {
            return val < 10 ? '0' + val : val + '';
        };
        DatePickerComponent.prototype.getInitValueIndex = function () {
            var _this = this;
            this.selectedTarget = [];
            this.indexArray.map(function (index, i) {
                _this.data.forEach(function (item, j) {
                    item.forEach(function (item1, k) {
                        if (_this.currentTime[index] === item1 && i === j) {
                            _this.selectedTarget.push({ targetId: "" + i, currentY: -k });
                        }
                    });
                });
            });
            this.reloadPicker();
        };
        DatePickerComponent.prototype.checkMode = function (mode) {
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
            var tempIndexArray = [];
            for (var i = 0; i < this.modeSwitch.length; i++) {
                if (this.modeSwitch[i] > 0) {
                    tempIndexArray.push(i);
                }
            }
            this.clos = tempIndexArray[tempIndexArray.length - 1] - tempIndexArray[0] + 1;
            this.indexArray = tempIndexArray;
        };
        DatePickerComponent.prototype.initResult = function () {
            this.resultArr = [];
            for (var i = 0; i < this.clos; i++) {
                var res = this.currentTime[i];
                if (this.options.mode === 'time') {
                    this.resultArr = this.currentTime;
                }
                else {
                    this.resultArr.push(res);
                }
            }
        };
        DatePickerComponent.prototype.checkTime = function () {
            var min_Date = this.transformDateFormat(this.options.minDate).split('-');
            if (min_Date.length > 0) {
                this.min_date = min_Date.map(function (item) {
                    return parseInt(item, 0);
                });
            }
            var max_Date = this.transformDateFormat(this.options.maxDate).split('-');
            if (max_Date.length > 0) {
                this.max_date = max_Date.map(function (item) {
                    return parseInt(item, 0);
                });
            }
            var min_date = this.min_date;
            var max_date = this.max_date;
            var current_time = this.currentTime;
            this.localMinDate = [];
            if (this.localMinDate.length === 0) {
                for (var index = 0; index < this.indexArray.length; index++) {
                    this.localMinDate.push(min_date[this.indexArray[index]]);
                }
            }
            this.localMaxDate = [];
            if (this.localMaxDate.length === 0) {
                for (var index = 0; index < this.indexArray.length; index++) {
                    this.localMaxDate.push(max_date[this.indexArray[index]]);
                }
            }
            if (this.indexArray.length === this.localMinDate.length && this.localMinDate.length === this.localMaxDate.length) {
                var minT = new Date(min_date[0], min_date[1], min_date[2], min_date[3], min_date[4]).getTime();
                var maxT = new Date(max_date[0], max_date[1], max_date[2], max_date[3], max_date[4]).getTime();
                var curT = new Date(current_time[0], current_time[1], current_time[2], current_time[3] || 0, current_time[4] || 0).getTime();
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
                var _indexArrayIndex = 0;
                var timeModeIndex = this.options.mode === 'time' ? 3 : 0;
                for (var i = 0; i < this.modeSwitch.length; i++) {
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
        };
        DatePickerComponent.prototype.judgeTime = function (arr1, arr2) {
            var date1;
            var date2;
            date1 = arr1.slice(0, 3).join('-') + ' ' + arr1.slice(3, 5).join(':');
            date2 = arr2.slice(0, 3).join('-') + ' ' + arr2.slice(3, 5).join(':');
            return new Date(date1).getTime() > new Date(date2).getTime();
        };
        DatePickerComponent.prototype.judgeEqualArray = function (arr1, arr2, length) {
            var status = true;
            for (var i = 0; i < length; i++) {
                if (arr1[i] != arr2[i]) {
                    status = false;
                }
            }
            return status;
        };
        DatePickerComponent.prototype.initReady = function () {
            var realIdx = 0;
            for (var i = 0; i < this.clos; i++) {
                realIdx = this.indexArray[i];
                var min = 0;
                var max = 0;
                var tempArray = [];
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
        };
        DatePickerComponent.prototype.initData = function (tempArr, min, max, str, idx) {
            var dataWithStr = [];
            var increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
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
        };
        DatePickerComponent.prototype.ok = function () {
            this.options.onOk.emit(this.handleReslut());
            this.setTransitionName();
        };
        DatePickerComponent.prototype.handleReslut = function () {
            var _this = this;
            var result = '';
            if (this.options.mode === 'datetime' || this.options.mode === 'time') {
                var temp = this.resultArr;
                result = temp.slice(0, 3).join('-') + ' ' + temp.slice(3, 5).join(':');
            }
            else {
                if (this.resultArr.length < 3) {
                    this.resultArr.push('1');
                }
                result = this.resultArr
                    .slice(0, 3)
                    .map(function (v) {
                    return _this.preZero(parseInt(v, 0));
                })
                    .join('-');
            }
            this.resultDate = new Date(result.replace(/-/g, '/'));
            if (this.options.minDate.getTime() > this.resultDate.getTime()) {
                if (this.resultArr.length > 0) {
                    for (var index = 0; index < this.resultArr.length; index++) {
                        this.resultArr = __spread(this.min_date);
                        this.currentTime = this.resultArr;
                        this.current_time = this.currentTime;
                    }
                }
                this.resultDate = this.options.minDate;
            }
            return this.resultDate;
        };
        DatePickerComponent.prototype.cancel = function () {
            this.options.onDismiss.emit();
            this.setTransitionName();
        };
        DatePickerComponent.prototype.setTransitionName = function () {
            var _this = this;
            this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
            this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
            setTimeout(function () {
                _this.options.hidePicker();
            }, 200);
        };
        DatePickerComponent.prototype.setCurrentSelected = function (checkIdx, sta, indexT) {
            if (checkIdx >= this.clos - 1) {
                return;
            }
            var status = null;
            if (sta) {
                status = this.judgeEqualArray(this.min_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
            }
            else {
                status = this.judgeEqualArray(this.max_date, this.resultArr, this.options.mode === 'time' ? checkIdx + 4 : checkIdx + 1);
            }
            if (!status) {
                var min = 0;
                var max = 0;
                var str = '';
                var realIdx = this.indexArray[checkIdx];
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
        };
        DatePickerComponent.prototype.initRangeArr = function (min, max, indexT, checkIdx, str) {
            var _this = this;
            var realIdx = this.indexArray[checkIdx];
            var arr = [];
            var targetLong = 0;
            var increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
            for (var index = min; index < max + 1; index += increaseValue) {
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
                    var delta = this.judgeEqualArray(this.current_time, this.min_date, realIdx) ? this.min_date[realIdx] : 1;
                    this.current_time[realIdx] = -targetLong / this.lineHeight + delta;
                    this.resultArr[realIdx] = -targetLong / this.lineHeight + delta;
                }
                this.data[checkIdx] = arr;
                this.dataWithStr[checkIdx] =
                    this.options.locale.locale === 'zh_CN'
                        ? arr.map(function (item) {
                            return item + str;
                        })
                        : arr;
                setTimeout(function () {
                    _this.selectedTarget.forEach(function (item, i) {
                        if (i >= checkIdx) {
                            _this.currentPicker.children[i].children[2].style.transition = '';
                            var index = parseInt(item.currentY, 0);
                            _this.currentPicker.children[i].children[2].style.transform = "translateY(" + index * _this.lineHeight + "px)";
                        }
                    });
                }, 0);
            }
        };
        DatePickerComponent.prototype.getEventTarget = function (event) {
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
        };
        DatePickerComponent.prototype.ngOnInit = function () {
            this.checkMode(this.options.mode);
            var value = this.transformDateFormat(this.options.value).split('-');
            if (value.length > 1) {
                this.current_time = this.currentTime = value.map(function (item) {
                    return parseInt(item, 0);
                });
            }
            else {
                this.currentTime = this.current_time;
            }
            this.localeProvider();
        };
        DatePickerComponent.prototype.ngAfterViewInit = function () {
            this.reloadPicker();
        };
        DatePickerComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        return DatePickerComponent;
    }());
    DatePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'DatePicker, nzm-date-picker',
                    template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup {{ transitionName }}\" style=\"z-index: 1000\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">\n            {{ options.okText }}\n          </div>\n        </div>\n        <div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n          <div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\"></div>\n            <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n            <div class=\"am-picker-col-content\">\n              <div id=\"{{ i }}\" class=\"am-picker-col-item\" *ngFor=\"let val of item; let i = index\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    DatePickerComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: DatePickerOptions },
        { type: ToastService },
        { type: LocaleProviderService }
    ]; };
    DatePickerComponent.propDecorators = {
        picker: [{ type: i0.ViewChild, args: ['picker', { read: i0.ViewContainerRef },] }],
        panstart: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }, { type: i0.HostListener, args: ['touchstart', ['$event'],] }],
        panmove: [{ type: i0.HostListener, args: ['mousemove', ['$event'],] }, { type: i0.HostListener, args: ['touchmove', ['$event'],] }],
        panend: [{ type: i0.HostListener, args: ['mouseleave', ['$event'],] }, { type: i0.HostListener, args: ['mouseup', ['$event'],] }, { type: i0.HostListener, args: ['touchend', ['$event'],] }]
    };

    var DatePickerViewComponent = /** @class */ (function (_super) {
        __extends(DatePickerViewComponent, _super);
        function DatePickerViewComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.mode = 'date';
            _this.minDate = new Date(2000, 5, 1, 0, 0, 0);
            _this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
            _this.value = new Date();
            _this.disabled = false;
            _this.indicatorStyle = {};
            _this.showErrorToast = true;
            _this.showErrorToastInterval = 2000;
            _this.onValueChange = new i0.EventEmitter();
            _this.amPicker = true;
            return _this;
        }
        Object.defineProperty(DatePickerViewComponent.prototype, "locale", {
            get: function () {
                return this.options.locale;
            },
            set: function (value) {
                this.options.locale = value;
                this.unsubscribe$.next();
                this.unsubscribe$.complete();
            },
            enumerable: false,
            configurable: true
        });
        DatePickerViewComponent.prototype.reloadPicker = function () {
            if (this.currentPicker) {
                var self_1 = this;
                setTimeout(function () {
                    self_1.selectedTarget.forEach(function (item, i) {
                        self_1.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                        var index = parseInt(item.currentY, 0);
                        self_1.currentPicker.children[i].children[2].style.transform = "translateY(" + index * self_1.lineHeight + "px)";
                    });
                }, 0);
            }
        };
        DatePickerViewComponent.prototype.writeValue = function (value) {
            if (value) {
                this.value = value;
                this.optionInit();
                this.init();
            }
        };
        DatePickerViewComponent.prototype.registerOnChange = function (fn) {
            this.ngModelOnChange = fn;
        };
        DatePickerViewComponent.prototype.registerOnTouched = function (fn) {
            this.ngModelOnTouched = fn;
        };
        DatePickerViewComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        DatePickerViewComponent.prototype.optionInit = function () {
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
            var value = this.transformDateFormat(this.options.value).split('-');
            if (value.length > 0) {
                this.currentTime = value.map(function (item) {
                    return parseInt(item, 0);
                });
            }
        };
        DatePickerViewComponent.prototype.ngOnInit = function () {
            this.optionInit();
            this.localeProvider();
        };
        DatePickerViewComponent.prototype.ngAfterViewInit = function () {
            this.currentPicker = this.elementRef.nativeElement;
            this.reloadPicker();
        };
        DatePickerViewComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value) {
                this.options.value = changes.value.currentValue;
                var value = this.transformDateFormat(this.options.value).split('-');
                if (value.length > 0) {
                    this.currentTime = value.map(function (item) {
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
        };
        return DatePickerViewComponent;
    }(DatePickerComponent));
    DatePickerViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'DatePickerView, nzm-date-picker-view',
                    template: "<div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n  <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"indicatorStyle\"></div>\n  <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n  <div class=\"am-picker-col-content\">\n    <div id=\"{{ i }}\" *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\">\n      {{ val.label ? val.label : val }}\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return DatePickerViewComponent; }),
                            multi: true
                        },
                        DatePickerOptions
                    ]
                },] }
    ];
    DatePickerViewComponent.propDecorators = {
        mode: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        indicatorStyle: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        showErrorToast: [{ type: i0.Input }],
        showErrorToastInterval: [{ type: i0.Input }],
        onValueChange: [{ type: i0.Output }],
        amPicker: [{ type: i0.HostBinding, args: ['class.am-picker',] }]
    };

    var DatePickerDirective = /** @class */ (function () {
        function DatePickerDirective(_viewContainerRef, _defaultOptions, _cfr) {
            this._viewContainerRef = _viewContainerRef;
            this._defaultOptions = _defaultOptions;
            this._cfr = _cfr;
            this._eventListeners = [];
            this.minuteStep = 1;
            this.value = new Date();
            this.onVisibleChange = new i0.EventEmitter(true);
            this.onValueChange = new i0.EventEmitter();
            this.onOk = new i0.EventEmitter();
            this.onDismiss = new i0.EventEmitter();
        }
        DatePickerDirective.prototype.togglePicker = function () {
            if (!this.picker) {
                this.showPicker();
            }
            else {
                this.hidePicker();
            }
        };
        DatePickerDirective.prototype.showPicker = function () {
            var _this = this;
            if (!this.picker && !this.disabled) {
                setTimeout(function () {
                    _this._eventListeners = [];
                });
                var options_1 = new DatePickerOptions();
                Object.assign(options_1, this._defaultOptions, {
                    hidePicker: function (event) {
                        _this.hidePicker();
                    },
                    updateNgModel: function (value) {
                        if (_this._ngModelOnChange) {
                            _this.value = value;
                            _this._ngModelOnChange(value);
                        }
                    }
                });
                var optionalParams = [
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
                optionalParams.forEach(function (param) {
                    if (typeof _this[param] !== 'undefined') {
                        options_1[param] = _this[param];
                    }
                });
                var componentFactory = this._cfr.resolveComponentFactory(DatePickerComponent);
                var childInjector = i0.Injector.create([
                    {
                        provide: DatePickerOptions,
                        useValue: options_1
                    }
                ]);
                this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
                if (options_1.appendToBody) {
                    this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
                }
                this.onVisibleChange.emit(true);
            }
        };
        DatePickerDirective.prototype.hidePicker = function () {
            if (this.appendToBodyElement) {
                document.body.removeChild(this.appendToBodyElement);
                this.appendToBodyElement = null;
            }
            if (this.picker) {
                this.picker.destroy();
                delete this.picker;
                this.onVisibleChange.emit(false);
                this._eventListeners.forEach(function (fn) { return fn(); });
                this._eventListeners = [];
            }
        };
        DatePickerDirective.prototype.writeValue = function (value) {
            this.value = value;
        };
        DatePickerDirective.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        DatePickerDirective.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        DatePickerDirective.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        DatePickerDirective.prototype.ngOnInit = function () {
            this.onVisibleChange.emit(false);
        };
        DatePickerDirective.prototype.ngOnChanges = function (changes) {
            if (changes.isOpen) {
                if (changes.isOpen.currentValue === true) {
                    this.showPicker();
                }
                else {
                    this.hidePicker();
                }
            }
        };
        DatePickerDirective.prototype.ngOnDestroy = function () {
            this.hidePicker();
        };
        return DatePickerDirective;
    }());
    DatePickerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[DatePicker]',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return DatePickerDirective; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    DatePickerDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef },
        { type: DatePickerOptions },
        { type: i0.ComponentFactoryResolver }
    ]; };
    DatePickerDirective.propDecorators = {
        isOpen: [{ type: i0.Input }],
        mode: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        use12Hours: [{ type: i0.Input }],
        minuteStep: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        mask: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        okText: [{ type: i0.Input }],
        dismissText: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        appendToBody: [{ type: i0.Input }],
        showErrorToast: [{ type: i0.Input }],
        showErrorToastInterval: [{ type: i0.Input }],
        onVisibleChange: [{ type: i0.Output }],
        onValueChange: [{ type: i0.Output }],
        onOk: [{ type: i0.Output }],
        onDismiss: [{ type: i0.Output }],
        togglePicker: [{ type: i0.HostListener, args: ['click',] }]
    };

    var DatePickerModule = /** @class */ (function () {
        function DatePickerModule() {
        }
        return DatePickerModule;
    }());
    DatePickerModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, LocaleProviderModule, ToastModule, forms.FormsModule],
                    exports: [DatePickerComponent, DatePickerDirective],
                    declarations: [DatePickerComponent, DatePickerDirective],
                    providers: [DatePickerOptions]
                },] }
    ];

    var DatePickerViewModule = /** @class */ (function () {
        function DatePickerViewModule() {
        }
        return DatePickerViewModule;
    }());
    DatePickerViewModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, forms.FormsModule],
                    exports: [DatePickerViewComponent],
                    declarations: [DatePickerViewComponent]
                },] }
    ];

    var CalendarSingleMonthComponent = /** @class */ (function () {
        function CalendarSingleMonthComponent(_elementRef) {
            var _this = this;
            this._elementRef = _elementRef;
            this.props = {
                rowSize: 'normal'
            };
            this.state = {
                weekComponents: []
            };
            this.singleMonth = true;
            this.genWeek = function (weeksData, index) {
                var _a = _this.props, getDateExtra = _a.getDateExtra, monthData = _a.monthData, onCellClick = _a.onCellClick, locale = _a.locale, rowSize = _a.rowSize;
                var rowCls = 'row';
                var weeksDataList = [];
                if (rowSize === 'xl') {
                    rowCls += ' row-xl';
                }
                weeksData.forEach(function (day, dayOfWeek) {
                    var extra = (getDateExtra && getDateExtra(new Date(day.tick))) || {};
                    var info = extra.info;
                    var disable = extra.disable || day.outOfDate;
                    var cls = 'date';
                    var lCls = 'left';
                    var rCls = 'right';
                    var infoCls = 'info';
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
                        var styleType = day.selected;
                        switch (styleType) {
                            case exports.DateModels.SelectType.Only:
                                info = locale.begin;
                                infoCls += ' date-selected';
                                break;
                            case exports.DateModels.SelectType.All:
                                info = locale.begin_over;
                                infoCls += ' date-selected';
                                break;
                            case exports.DateModels.SelectType.Start:
                                info = locale.begin;
                                infoCls += ' date-selected';
                                if (dayOfWeek === 6 || day.isLastOfMonth) {
                                    styleType = exports.DateModels.SelectType.All;
                                }
                                break;
                            case exports.DateModels.SelectType.Middle:
                                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                    if (day.isLastOfMonth || dayOfWeek === 6) {
                                        styleType = exports.DateModels.SelectType.All;
                                    }
                                    else {
                                        styleType = exports.DateModels.SelectType.Start;
                                    }
                                }
                                else if (dayOfWeek === 6 || day.isLastOfMonth) {
                                    styleType = exports.DateModels.SelectType.End;
                                }
                                break;
                            case exports.DateModels.SelectType.End:
                                info = locale.over;
                                infoCls += ' date-selected';
                                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                    styleType = exports.DateModels.SelectType.All;
                                }
                                break;
                        }
                        switch (styleType) {
                            case exports.DateModels.SelectType.Single:
                            case exports.DateModels.SelectType.Only:
                            case exports.DateModels.SelectType.All:
                                cls += ' selected-single';
                                break;
                            case exports.DateModels.SelectType.Start:
                                cls += ' selected-start';
                                rCls += ' date-selected';
                                break;
                            case exports.DateModels.SelectType.Middle:
                                cls += ' selected-middle';
                                lCls += ' date-selected';
                                rCls += ' date-selected';
                                break;
                            case exports.DateModels.SelectType.End:
                                cls += ' selected-end';
                                lCls += ' date-selected';
                                break;
                        }
                    }
                    weeksDataList[dayOfWeek] = {
                        lCls: lCls,
                        cls: cls,
                        day: day,
                        rCls: rCls,
                        infoCls: infoCls,
                        info: info,
                        extra: extra,
                        disable: disable,
                        onCellClick: onCellClick,
                        monthData: monthData
                    };
                });
                _this.state.weekComponents[index] = {
                    index: index,
                    rowCls: rowCls,
                    weeksDataList: weeksDataList
                };
            };
            this.updateWeeks = function (monthData) {
                (monthData || _this.props.monthData).weeks.forEach(function (week, index) {
                    _this.genWeek(week, index);
                });
            };
            this.setWarpper = function (dom) {
                _this.wrapperDivDOM = dom;
            };
        }
        Object.defineProperty(CalendarSingleMonthComponent.prototype, "data", {
            set: function (value) {
                this.props = Object.assign(Object.assign({}, this.props), value);
            },
            enumerable: false,
            configurable: true
        });
        CalendarSingleMonthComponent.prototype.onClickCell = function (item) {
            if (!item.disable && item.onCellClick) {
                item.onCellClick(item.day, item.monthData);
            }
        };
        CalendarSingleMonthComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setWarpper(this._elementRef.nativeElement);
            this.props.monthData.weeks.forEach(function (week, index) {
                _this.genWeek(week, index);
            });
        };
        CalendarSingleMonthComponent.prototype.ngAfterViewInit = function () {
            this.ref = this.props.ref;
            this.ref(this);
        };
        return CalendarSingleMonthComponent;
    }());
    CalendarSingleMonthComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarSingleMonth, nzm-single-month',
                    template: "<div class=\"month-title\">\n  {{ props.monthData.title }}\n</div>\n<div class=\"date\">\n  <div *ngFor=\"let row of state.weekComponents; let i = index\" [ngClass]=\"row.rowCls\">\n    <div\n      *ngFor=\"let cell of row.weeksDataList; let j = index\"\n      class=\"{{ 'cell ' + ((cell.extra && cell.extra.cellCls) || '') }}\"\n      (click)=\"onClickCell(cell)\"\n    >\n      <div *ngIf=\"row.extra && row.extra.cellRender\">test</div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" class=\"date-wrapper\">\n        <span [ngClass]=\"cell.lCls\"></span>\n        <div [ngClass]=\"cell.cls\">\n          {{ (cell.day && cell.day.dayOfMonth) || '' }}\n        </div>\n        <span [ngClass]=\"cell.rCls\"></span>\n      </div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" [ngClass]=\"cell.infoCls\">\n        {{ cell.info }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarSingleMonthComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    CalendarSingleMonthComponent.propDecorators = {
        data: [{ type: i0.Input }],
        singleMonth: [{ type: i0.HostBinding, args: ['class.single-month',] }]
    };

    var CalendarConfirmPanelComponent = /** @class */ (function () {
        function CalendarConfirmPanelComponent() {
            var _this = this;
            this.props = {
                formatStr: 'yyyy-MM-dd hh:mm'
            };
            this.confirmPane = true;
            this.triggerConfirm = function () {
                var _a = _this.props, onConfirm = _a.onConfirm, disableBtn = _a.disableBtn;
                if (!disableBtn) {
                    onConfirm();
                }
            };
        }
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "propsData", {
            set: function (value) {
                this.props = Object.assign(Object.assign({}, this.props), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "disableBtn", {
            set: function (value) {
                this.props.disableBtn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "formatStr", {
            set: function (value) {
                this.props.formatStr = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "startDateTime", {
            set: function (value) {
                this.props.startDateTime = value;
                this.formatTime();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "endDateTime", {
            set: function (value) {
                this.props.endDateTime = value;
                this.formatTime();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarConfirmPanelComponent.prototype, "onConfirm", {
            set: function (value) {
                this.props.onConfirm = value;
            },
            enumerable: false,
            configurable: true
        });
        CalendarConfirmPanelComponent.prototype.formatTime = function () {
            var _a = this.props, type = _a.type, locale = _a.locale, disableBtn = _a.disableBtn;
            var _b = this.props, startDateTime = _b.startDateTime, endDateTime = _b.endDateTime;
            if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
                var tmp = startDateTime;
                startDateTime = endDateTime;
                endDateTime = tmp;
            }
            this.startTimeStr = startDateTime ? this.selfFormatDate(startDateTime) : locale.noChoose;
            this.endTimeStr = endDateTime ? this.selfFormatDate(endDateTime) : locale.noChoose;
            var btnCls = disableBtn ? 'button button-disable' : 'button';
            if (type === 'one') {
                btnCls += ' button-full';
            }
            this.btnCls = btnCls;
        };
        CalendarConfirmPanelComponent.prototype.selfFormatDate = function (date) {
            var _a = this.props, _b = _a.formatStr, formatStr = _b === void 0 ? '' : _b, locale = _a.locale;
            return formatDate(date, formatStr, locale);
        };
        return CalendarConfirmPanelComponent;
    }());
    CalendarConfirmPanelComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarConfirmPanel, nzm-calendar-confirm-panel',
                    template: "<div *ngIf=\"props.type === 'range'\" class=\"info\">\n  <p>\n    {{ props.locale.start }}: <span class=\"{{ !props.startDateTime ? 'grey' : '' }}\">{{ startTimeStr }}</span>\n  </p>\n  <p>\n    {{ props.locale.end }}: <span class=\"{{ !props.endDateTime ? 'grey' : '' }}\">{{ endTimeStr }}</span>\n  </p>\n</div>\n<div [ngClass]=\"btnCls\" (click)=\"triggerConfirm()\">\n  {{ props.locale.confirm }}\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarConfirmPanelComponent.ctorParameters = function () { return []; };
    CalendarConfirmPanelComponent.propDecorators = {
        propsData: [{ type: i0.Input }],
        disableBtn: [{ type: i0.Input }],
        formatStr: [{ type: i0.Input }],
        startDateTime: [{ type: i0.Input }],
        endDateTime: [{ type: i0.Input }],
        onConfirm: [{ type: i0.Input }],
        confirmPane: [{ type: i0.HostBinding, args: ['class.confirm-panel',] }]
    };

    var CalendarShortcutPanelComponent = /** @class */ (function () {
        function CalendarShortcutPanelComponent() {
            var _this = this;
            this.props = {};
            this.shortcutPanel = true;
            this.onClick = function (type) {
                var onSelect = _this.props.onSelect;
                var today = new Date();
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
        Object.defineProperty(CalendarShortcutPanelComponent.prototype, "locale", {
            set: function (value) {
                this.props.locale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CalendarShortcutPanelComponent.prototype, "onSelect", {
            set: function (value) {
                this.props.onSelect = value;
            },
            enumerable: false,
            configurable: true
        });
        return CalendarShortcutPanelComponent;
    }());
    CalendarShortcutPanelComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'CalendarShortcutPanel, nzm-calendar-shortcut-panel',
                    template: "<div class=\"item\" (click)=\"onClick('today')\">{{ props.locale.today }}</div>\n<div class=\"item\" (click)=\"onClick('yesterday')\">{{ props.locale.yesterday }}</div>\n<div class=\"item\" (click)=\"onClick('lastweek')\">{{ props.locale.lastWeek }}</div>\n<div class=\"item\" (click)=\"onClick('lastmonth')\">{{ props.locale.lastMonth }}</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    CalendarShortcutPanelComponent.ctorParameters = function () { return []; };
    CalendarShortcutPanelComponent.propDecorators = {
        locale: [{ type: i0.Input }],
        onSelect: [{ type: i0.Input }],
        shortcutPanel: [{ type: i0.HostBinding, args: ['class.shortcut-panel',] }]
    };

    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        return CalendarModule;
    }());
    CalendarModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
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

    var PopoverItemComponent = /** @class */ (function () {
        function PopoverItemComponent(_elementRef) {
            this._elementRef = _elementRef;
            this.defaultProps = {
                prefixCls: 'am-popover',
                disabled: false
            };
            this.isActive = false;
            this.select = new i0.EventEmitter();
            this.amPopoverItem = true;
        }
        Object.defineProperty(PopoverItemComponent.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                this._icon = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverItemComponent.prototype, "style", {
            get: function () {
                return this._style;
            },
            set: function (value) {
                this._style = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverItemComponent.prototype, "disabled", {
            set: function (value) {
                this.defaultProps.disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverItemComponent.prototype, "amPopoverItemActive", {
            get: function () {
                return this.isActive;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverItemComponent.prototype, "amPopoverItemDisabled", {
            get: function () {
                return this.defaultProps.disabled;
            },
            enumerable: false,
            configurable: true
        });
        PopoverItemComponent.prototype.touchStart = function (e) {
            this.select.emit();
            this.isActive = true;
        };
        PopoverItemComponent.prototype.ngAfterContentInit = function () { };
        return PopoverItemComponent;
    }());
    PopoverItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'PopoverItem, nzm-popover-item',
                    template: "<div class=\"{{ defaultProps.prefixCls }}-item-container\">\n  <span class=\"{{ defaultProps.prefixCls }}-item-icon\" aria-hidden=\"true\">\n    <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  <span class=\"{{ defaultProps.prefixCls }}-item-content\">\n    <ng-content></ng-content>\n  </span>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    PopoverItemComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    PopoverItemComponent.propDecorators = {
        icon: [{ type: i0.Input }],
        style: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        select: [{ type: i0.Output }],
        amPopoverItem: [{ type: i0.HostBinding, args: ['class.am-popover-item',] }],
        amPopoverItemActive: [{ type: i0.HostBinding, args: ['class.am-popover-item-active',] }],
        amPopoverItemDisabled: [{ type: i0.HostBinding, args: ['class.am-popover-item-disabled',] }],
        touchStart: [{ type: i0.HostListener, args: ['touchstart', ['$event'],] }, { type: i0.HostListener, args: ['mousedown', ['$event'],] }]
    };

    var PopoverItemModule = /** @class */ (function () {
        function PopoverItemModule() {
        }
        return PopoverItemModule;
    }());
    PopoverItemModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule],
                    exports: [PopoverItemComponent],
                    declarations: [PopoverItemComponent]
                },] }
    ];

    var FlexComponent = /** @class */ (function () {
        function FlexComponent() {
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
        Object.defineProperty(FlexComponent.prototype, "direction", {
            set: function (value) {
                this._direction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "wrap", {
            set: function (value) {
                this._wrap = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "justify", {
            set: function (value) {
                this._justify = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "align", {
            set: function (value) {
                this.defaultProps.align = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "alignContent", {
            set: function (value) {
                this._alignContent = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxDirRow", {
            get: function () {
                return this._direction === 'row';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxDirRowReverse", {
            get: function () {
                return this._direction === 'row-reverse';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxDirColumn", {
            get: function () {
                return this._direction === 'column';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxDirColumnReverse", {
            get: function () {
                return this._direction === 'column-reverse';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxNowrap", {
            get: function () {
                return this._wrap === 'nowrap';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxWrap", {
            get: function () {
                return this._wrap === 'wrap';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxWrapReverse", {
            get: function () {
                return this._wrap === 'wrap-reverse';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxJustifyStart", {
            get: function () {
                return this._justify === 'start';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxJustifyCenter", {
            get: function () {
                return this._justify === 'center';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxJustifyEnd", {
            get: function () {
                return this._justify === 'end';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxJustifyBetween", {
            get: function () {
                return this._justify === 'between';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignAround", {
            get: function () {
                return this._justify === 'around';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignStart", {
            get: function () {
                return this.defaultProps.align === 'start';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignCenter", {
            get: function () {
                return this.defaultProps.align === 'center';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignEnd", {
            get: function () {
                return this.defaultProps.align === 'end';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignBaseline", {
            get: function () {
                return this.defaultProps.align === 'baseline';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignStretch", {
            get: function () {
                return this.defaultProps.align === 'stretch';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignContentStart", {
            get: function () {
                return this._alignContent === 'start';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignCotentCenter", {
            get: function () {
                return this._alignContent === 'center';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignContentEnd", {
            get: function () {
                return this._alignContent === 'end';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignContentBetween", {
            get: function () {
                return this._alignContent === 'between';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignContentAround", {
            get: function () {
                return this._alignContent === 'around';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexComponent.prototype, "amFlexboxAlignContentStretch", {
            get: function () {
                return this._alignContent === 'stretch';
            },
            enumerable: false,
            configurable: true
        });
        return FlexComponent;
    }());
    FlexComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Flex, nzm-flex',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    FlexComponent.ctorParameters = function () { return []; };
    FlexComponent.propDecorators = {
        direction: [{ type: i0.Input }],
        wrap: [{ type: i0.Input }],
        justify: [{ type: i0.Input }],
        align: [{ type: i0.Input }],
        alignContent: [{ type: i0.Input }],
        amFlexbox: [{ type: i0.HostBinding, args: ['class.am-flexbox',] }],
        amFlexboxDirRow: [{ type: i0.HostBinding, args: ['class.am-flexbox-dir-row',] }],
        amFlexboxDirRowReverse: [{ type: i0.HostBinding, args: ['class.am-flexbox-dir-row-reverse',] }],
        amFlexboxDirColumn: [{ type: i0.HostBinding, args: ['class.am-flexbox-dir-column',] }],
        amFlexboxDirColumnReverse: [{ type: i0.HostBinding, args: ['class.am-flexbox-dir-column-reverse',] }],
        amFlexboxNowrap: [{ type: i0.HostBinding, args: ['class.am-flexbox-nowrap',] }],
        amFlexboxWrap: [{ type: i0.HostBinding, args: ['class.am-flexbox-wrap',] }],
        amFlexboxWrapReverse: [{ type: i0.HostBinding, args: ['class.am-flexbox-wrap-reverse',] }],
        amFlexboxJustifyStart: [{ type: i0.HostBinding, args: ['class.am-flexbox-justify-start',] }],
        amFlexboxJustifyCenter: [{ type: i0.HostBinding, args: ['class.am-flexbox-justify-center',] }],
        amFlexboxJustifyEnd: [{ type: i0.HostBinding, args: ['class.am-flexbox-justify-end',] }],
        amFlexboxJustifyBetween: [{ type: i0.HostBinding, args: ['class.am-flexbox-justify-between',] }],
        amFlexboxAlignAround: [{ type: i0.HostBinding, args: ['class.am-flexbox-justify-around',] }],
        amFlexboxAlignStart: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-start',] }],
        amFlexboxAlignCenter: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-center',] }],
        amFlexboxAlignEnd: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-end',] }],
        amFlexboxAlignBaseline: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-baseline',] }],
        amFlexboxAlignStretch: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-stretch',] }],
        amFlexboxAlignContentStart: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-start',] }],
        amFlexboxAlignCotentCenter: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-center',] }],
        amFlexboxAlignContentEnd: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-end',] }],
        amFlexboxAlignContentBetween: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-between',] }],
        amFlexboxAlignContentAround: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-around',] }],
        amFlexboxAlignContentStretch: [{ type: i0.HostBinding, args: ['class.am-flexbox-align-content-stretch',] }]
    };
    var FlexItemComponent = /** @class */ (function () {
        function FlexItemComponent() {
            this.defaultProps = {
                prefixCls: 'am-flexbox',
                align: 'center'
            };
            this.flexboxItem = true;
        }
        return FlexItemComponent;
    }());
    FlexItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'FlexItem, nzm-flex-item',
                    template: "\n    <ng-content></ng-content>\n  ",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    FlexItemComponent.propDecorators = {
        flexboxItem: [{ type: i0.HostBinding, args: ['class.am-flexbox-item',] }]
    };

    var FlexModule = /** @class */ (function () {
        function FlexModule() {
        }
        return FlexModule;
    }());
    FlexModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [FlexComponent, FlexItemComponent],
                    declarations: [FlexComponent, FlexItemComponent]
                },] }
    ];

    var GridComponent = /** @class */ (function () {
        function GridComponent() {
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
            this.onClick = new i0.EventEmitter();
            this.amGrid = true;
        }
        Object.defineProperty(GridComponent.prototype, "columnNum", {
            get: function () {
                return this.defaultProps.columnNum;
            },
            set: function (value) {
                if (typeof value === 'number') {
                    this.defaultProps.columnNum = value;
                    this.init();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "carouselMaxRow", {
            get: function () {
                return this.defaultProps.carouselMaxRow;
            },
            set: function (value) {
                if (typeof value === 'number') {
                    this.defaultProps.carouselMaxRow = value;
                    this.init();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "isCarousel", {
            get: function () {
                return this.defaultProps.isCarousel;
            },
            set: function (value) {
                this.defaultProps.isCarousel = value;
                this.init();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "data", {
            set: function (value) {
                this._data = value;
                this.init();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "amGridSquare", {
            get: function () {
                return true === this.square;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "amGridLine", {
            get: function () {
                return true === this.hasLine;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GridComponent.prototype, "amGridCarousel", {
            get: function () {
                return true === this.isCarousel;
            },
            enumerable: false,
            configurable: true
        });
        GridComponent.prototype.getContentType = function (value) {
            if ((value.indexOf('http') >= 0 || value.indexOf('assets') >= 0) && value.indexOf('<') < 0) {
                return 'url';
            }
            else if (value.indexOf('<') >= 0) {
                return 'innerHTML';
            }
            else if (value instanceof i0.TemplateRef) {
                return 'TemplateRef';
            }
            else {
                return 'icon';
            }
        };
        GridComponent.prototype.init = function () {
            var dataLength = (this._data && this._data.length) || 0;
            var rowCount = Math.ceil(dataLength / this.columnNum);
            var rowsArr;
            if (this.defaultProps.isCarousel) {
                if (rowCount % this.carouselMaxRow !== 0) {
                    rowCount = rowCount + this.carouselMaxRow - (rowCount % this.carouselMaxRow);
                }
                var pageCount = Math.ceil(rowCount / this.carouselMaxRow);
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
        };
        GridComponent.prototype.getCarouselData = function (rowsArr, pageCount, rowCount) {
            var pagesArr = [];
            for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                var pageRows = [];
                for (var ii = 0; ii < this.carouselMaxRow; ii++) {
                    var rowIndex = pageIndex * this.carouselMaxRow + ii;
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
        };
        GridComponent.prototype.getRows = function (rowCount, dataLength) {
            var columnNum = this.columnNum;
            var rowArr = new Array();
            for (var i = 0; i < rowCount; i++) {
                rowArr[i] = new Array();
                for (var j = 0; j < columnNum; j++) {
                    var dataIndex = i * columnNum + j;
                    if (dataIndex < dataLength) {
                        rowArr[i][j] = this._data[dataIndex];
                    }
                    else {
                        rowArr[i][j] = null;
                    }
                }
            }
            return rowArr;
        };
        GridComponent.prototype.click = function (data, index) {
            var outputData = {
                data: data,
                index: index
            };
            this.onClick.emit(outputData);
        };
        GridComponent.prototype.ngOnInit = function () {
            var _a;
            this.itemCls = (_a = {},
                _a[this.defaultProps.prefixCls + "-item"] = true,
                _a[this.defaultProps.prefixCls + "-active-item"] = false,
                _a);
        };
        return GridComponent;
    }());
    GridComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Grid, nzm-grid',
                    template: "<ng-container *ngIf=\"!isCarousel\">\n  <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n    <FlexItem\n      TouchFeedbackDirective\n      *ngFor=\"let subItem of item; let j = index\"\n      [ngClass]=\"itemCls\"\n      [ngStyle]=\"itemStyle\"\n      [className]=\"['am-grid-item-active']\"\n      [activeStyle]=\"activeStyle\"\n    >\n      <div\n        *ngIf=\"subItem !== null\"\n        class=\"{{ defaultProps.prefixCls }}-item-content\"\n        (click)=\"click(subItem, i * columnNum + j)\"\n      >\n        <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-{{ columnNum }}\">\n          <img\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'url'\"\n            src=\"{{ subItem.icon }}\"\n            class=\"{{ defaultProps.prefixCls }}-icon\"\n          />\n          <Icon\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'icon'\"\n            [type]=\"subItem.icon\"\n            [size]=\"subItem.size\"\n          ></Icon>\n          <div\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'innerHTML'\"\n            [innerHTML]=\"subItem.icon | safeHTML\"\n          ></div>\n          <ng-template\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'TemplateRef'\"\n            [ngTemplateOutlet]=\"subItem.icon\"\n          ></ng-template>\n          <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n        </div>\n      </div>\n      <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n    </FlexItem>\n  </Flex>\n  <ng-content></ng-content>\n</ng-container>\n\n<Carousel\n  *ngIf=\"isCarousel && carouselDataTmp.length > 0\"\n  [autoplay]=\"false\"\n  [infinite]=\"true\"\n  [selectedIndex]=\"0\"\n  [autoplayInterval]=\"3000\"\n  [dots]=\"carouselProps.dots\"\n  [dragging]=\"carouselProps.dragging\"\n>\n  <CarouselSlide\n    *ngFor=\"let gridData of carouselDataTmp\"\n    class=\"{{ defaultProps.prefixCls }}-carousel-page\"\n    style=\"display: block;\"\n  >\n    <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n      <FlexItem\n        TouchFeedbackDirective\n        *ngFor=\"let subItem of item; let j = index\"\n        class=\"{{ defaultProps.prefixCls }}-item\"\n        [ngStyle]=\"itemStyle\"\n        [className]=\"['am-grid-item-active']\"\n      >\n        <div\n          *ngIf=\"subItem !== null\"\n          class=\"{{ defaultProps.prefixCls }}-item-content\"\n          (click)=\"click(subItem, i * columnNum + j)\"\n        >\n          <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-4\">\n            <img class=\"{{ defaultProps.prefixCls }}-icon\" src=\"{{ subItem.icon }}\" />\n            <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n          </div>\n        </div>\n        <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n      </FlexItem>\n    </Flex>\n  </CarouselSlide>\n</Carousel>\n"
                },] }
    ];
    GridComponent.ctorParameters = function () { return []; };
    GridComponent.propDecorators = {
        columnNum: [{ type: i0.Input }],
        carouselMaxRow: [{ type: i0.Input }],
        itemStyle: [{ type: i0.Input }],
        square: [{ type: i0.Input }],
        hasLine: [{ type: i0.Input }],
        isCarousel: [{ type: i0.Input }],
        activeStyle: [{ type: i0.Input }],
        data: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }],
        amGrid: [{ type: i0.HostBinding, args: ['class.am-grid',] }],
        amGridSquare: [{ type: i0.HostBinding, args: ['class.am-grid-square',] }],
        amGridLine: [{ type: i0.HostBinding, args: ['class.am-grid-line',] }],
        amGridCarousel: [{ type: i0.HostBinding, args: ['class.am-grid-carousel',] }]
    };

    var INTERFACE_TOKEN = new i0.InjectionToken('InterfaceToken');
    var TouchFeedbackDirective = /** @class */ (function () {
        function TouchFeedbackDirective(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this.activeStyle = true;
            this.clickStart = new i0.EventEmitter();
            this.clickEnd = new i0.EventEmitter();
        }
        TouchFeedbackDirective.prototype.addClass = function (className) {
            this._renderer.addClass(this._elementRef.nativeElement, className);
        };
        TouchFeedbackDirective.prototype.removeClass = function (className) {
            this._renderer.removeClass(this._elementRef.nativeElement, className);
        };
        TouchFeedbackDirective.prototype.ngOnInit = function () {
            this._className = this.className;
        };
        TouchFeedbackDirective.prototype.touchStart = function () {
            if (this.activeStyle) {
                this.addClass(this._className);
                this.clickStart.emit();
            }
        };
        TouchFeedbackDirective.prototype.touchEnd = function () {
            if (this.activeStyle) {
                this.removeClass(this._className);
                this.clickEnd.emit();
            }
        };
        return TouchFeedbackDirective;
    }());
    TouchFeedbackDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[TouchFeedbackDirective]'
                },] }
    ];
    TouchFeedbackDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    TouchFeedbackDirective.propDecorators = {
        className: [{ type: i0.Input }],
        activeStyle: [{ type: i0.Input }],
        clickStart: [{ type: i0.Output }],
        clickEnd: [{ type: i0.Output }],
        touchStart: [{ type: i0.HostListener, args: ['touchstart',] }, { type: i0.HostListener, args: ['mousedown',] }],
        touchEnd: [{ type: i0.HostListener, args: ['touchend',] }, { type: i0.HostListener, args: ['mouseup',] }]
    };

    var TouchFeedbackModule = /** @class */ (function () {
        function TouchFeedbackModule() {
        }
        return TouchFeedbackModule;
    }());
    TouchFeedbackModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [TouchFeedbackDirective],
                    declarations: [TouchFeedbackDirective]
                },] }
    ];

    var SafeHTMLPipe = /** @class */ (function () {
        function SafeHTMLPipe(_sanitized) {
            this._sanitized = _sanitized;
        }
        SafeHTMLPipe.prototype.transform = function (value) {
            return this._sanitized.bypassSecurityTrustHtml(value);
        };
        return SafeHTMLPipe;
    }());
    SafeHTMLPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'safeHTML' },] }
    ];
    SafeHTMLPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var NgZorroAntdMobilePipesModule = /** @class */ (function () {
        function NgZorroAntdMobilePipesModule() {
        }
        return NgZorroAntdMobilePipesModule;
    }());
    NgZorroAntdMobilePipesModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [SafeHTMLPipe],
                    exports: [SafeHTMLPipe]
                },] }
    ];

    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        return GridModule;
    }());
    GridModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [FlexModule, IconModule, common.CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
                    exports: [GridComponent],
                    declarations: [GridComponent]
                },] }
    ];

    var ActionSheetRef = /** @class */ (function () {
        function ActionSheetRef() {
        }
        return ActionSheetRef;
    }());

    var ActionSheetComponent = /** @class */ (function (_super) {
        __extends(ActionSheetComponent, _super);
        function ActionSheetComponent(localeProviderService, elementRef) {
            var _this = _super.call(this) || this;
            _this.localeProviderService = localeProviderService;
            _this.elementRef = elementRef;
            _this.unsubscribe$ = new rxjs.Subject();
            return _this;
        }
        ActionSheetComponent.prototype.ngOnInit = function () {
            this.localeProvider();
        };
        ActionSheetComponent.prototype.localeProvider = function () {
            var self = this;
            if (self.option.locale || self.option.locale !== undefined) {
                self.localeProviderService.setLocale(self.option.locale);
            }
            self.localeProviderService.localeChange.pipe(operators.takeUntil(self.unsubscribe$)).subscribe(function (_) {
                if (self.option.cancelButtonText) {
                    self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj('ActionSheet')['dismissText'];
                }
            });
        };
        ActionSheetComponent.prototype.onPress = function (index, rowIndex, event) {
            if (rowIndex === void 0) { rowIndex = 0; }
        };
        ActionSheetComponent.prototype.showShare = function (option) {
            var _a;
            var cls = (_a = {}, _a[option.prefixCls + "-share"] = option.flag === 'SHARE', _a);
            return cls;
        };
        ActionSheetComponent.prototype.setActiveClassName = function (option, suffix) {
            return [option.prefixCls + "-" + suffix + "-active"];
        };
        ActionSheetComponent.prototype.isNoTitle = function (value) {
            return value === '' || value === null || value === undefined;
        };
        ActionSheetComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        ActionSheetComponent.prototype.isArray = function (options, value) {
            if (options.length > 0 && value) {
                return value instanceof Array;
            }
            return false;
        };
        ActionSheetComponent.prototype.getInstance = function () {
            return this;
        };
        ActionSheetComponent.prototype.getElement = function () {
            return this.elementRef && this.elementRef.nativeElement;
        };
        ActionSheetComponent.prototype.close = function () {
            if (this.option.close) {
                this.option.close();
            }
        };
        ActionSheetComponent.prototype.destroy = function () {
            this.close();
        };
        ActionSheetComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        return ActionSheetComponent;
    }(ActionSheetRef));
    ActionSheetComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ActionSheet',
                    template: "<div class=\"{{ option.prefixCls }}-mask {{ option.maskTransitionName }}\"></div>\n<div\n  role=\"dialog\"\n  class=\"{{ option.prefixCls }}-wrap {{ option.transitionName }}\"\n  (click)=\"option.maskClose(-1, 0, $event)\"\n>\n  <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"showShare(option)\">\n    <div class=\"{{ option.prefixCls }}-content\">\n      <button aria-label=\"Close\" class=\"{{ option.prefixCls }}-close\">\n        <span class=\"{{ option.prefixCls }}-close-x\"></span>\n      </button>\n      <div class=\"{{ option.prefixCls }}-body\">\n        <div>\n          <ng-container *ngIf=\"!isNoTitle(option.title)\">\n            <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n            <h3 *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</h3>\n          </ng-container>\n          <ng-container *ngIf=\"!isNoTitle(option.message)\">\n            <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n            <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-message\">\n              {{ option.message }}\n            </div>\n          </ng-container>\n          <ng-container [ngSwitch]=\"option.flag\">\n            <div *ngSwitchCase=\"'NORMAL'\" class=\"{{ option.prefixCls }}-button-list\" role=\"group\">\n              <ng-container *ngFor=\"let item of option.options; let i = index\">\n                <div\n                  TouchFeedbackDirective\n                  class=\"{{ option.prefixCls }}-button-list-item\"\n                  [className]=\"setActiveClassName(option, 'button-list-item')\"\n                >\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex !== i && option.cancelButtonIndex !== i\"\n                    class=\"{{ option.prefixCls }}-button-list-item\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-destructive-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.cancelButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-cancel-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                    <span class=\"{{ option.prefixCls }}-cancel-button-mask\"></span>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div *ngSwitchCase=\"'SHARE'\" class=\"{{ option.prefixCls }}-share {{ option.prefixCls }}-share-content\">\n              <div *ngIf=\"!isArray(option.options, option.options[0])\" class=\"{{ option.prefixCls }}-share-list\">\n                <ng-container *ngFor=\"let item of option.options; let i = index\">\n                  <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, 0, $event)\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                      <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                      <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                    </div>\n                    <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                  </div>\n                </ng-container>\n              </div>\n              <ng-container *ngIf=\"isArray(option.options, option.options[0])\">\n                <div\n                  *ngFor=\"let items of option.options; let rowIndex = index\"\n                  class=\"{{ option.prefixCls }}-share-list\"\n                >\n                  <ng-container *ngFor=\"let item of items; let i = index\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, rowIndex, $event)\">\n                      <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                        <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                        <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                      </div>\n                      <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                    </div>\n                  </ng-container>\n                </div>\n              </ng-container>\n              <div\n                TouchFeedbackDirective\n                [className]=\"setActiveClassName(option, 'share-cancel-button')\"\n                class=\"{{ option.prefixCls }}-share-cancel-button\"\n              >\n                {{ option.cancelButtonText }}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ActionSheetComponent.ctorParameters = function () { return [
        { type: LocaleProviderService },
        { type: i0.ElementRef }
    ]; };

    var ActionSheetOptions = /** @class */ (function () {
        function ActionSheetOptions() {
            this.prefixCls = 'am-action-sheet';
            this.maskClosable = true;
            this.transitionName = 'am-slide-up';
            this.maskTransitionName = 'am-fade';
        }
        return ActionSheetOptions;
    }());
    ActionSheetOptions.decorators = [
        { type: i0.Injectable }
    ];
    var ShareOption = /** @class */ (function () {
        function ShareOption() {
        }
        return ShareOption;
    }());
    ShareOption.decorators = [
        { type: i0.Injectable }
    ];
    var ShareActionSheetWithOptions = /** @class */ (function (_super) {
        __extends(ShareActionSheetWithOptions, _super);
        function ShareActionSheetWithOptions() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.cancelButtonText = 'Cancel';
            return _this;
        }
        return ShareActionSheetWithOptions;
    }(ActionSheetOptions));
    ShareActionSheetWithOptions.decorators = [
        { type: i0.Injectable }
    ];
    var ActionSheetWithOptions = /** @class */ (function (_super) {
        __extends(ActionSheetWithOptions, _super);
        function ActionSheetWithOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ActionSheetWithOptions;
    }(ActionSheetOptions));
    ActionSheetWithOptions.decorators = [
        { type: i0.Injectable }
    ];

    var NORMAL = 'NORMAL';
    var SHARE = 'SHARE';
    function noop() { }
    var ActionSheetService = /** @class */ (function (_super) {
        __extends(ActionSheetService, _super);
        function ActionSheetService() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.compRef = null;
            _this._actionSheetCompFactory = null;
            _this.appRef = null;
            _this.comRef = null;
            _this.instance = null;
            return _this;
        }
        ActionSheetService.prototype._initConfig = function (config, options) {
            if (options === void 0) { options = {}; }
            var props = new ActionSheetOptions();
            var optionalParams = [
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
            var self = this;
            config = Object.assign(options, config, {
                close: function () {
                    if (config.maskClosable) {
                        self.closeWithAnimation(config.transitionName, config.maskTransitionName);
                    }
                }
            });
            optionalParams.forEach(function (key) {
                if (config[key] !== undefined) {
                    props[key] = config[key];
                }
            });
            return props;
        };
        ActionSheetService.prototype._open = function (props) {
            this.comRef = this.showPopup(ActionSheetComponent);
            this.comRef.instance.option = props;
            return this.comRef && this.comRef.instance;
        };
        ActionSheetService.prototype.createActionSheet = function (flag, config, callback) {
            var options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
            var transitionName = config.transitionName ? config.transitionName : options.transitionName;
            options.transitionName = transitionName + "-enter " + transitionName + "-enter-active";
            var maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
            options.maskTransitionName = maskTransitionName + "-enter " + maskTransitionName + "-enter-active";
            var props = this._initConfig(config, options);
            Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : function () { } });
            var self = this;
            function cb(index, rowIndex, event) {
                if (rowIndex === void 0) { rowIndex = 0; }
                event.stopPropagation();
                var res = callback(index, rowIndex);
                if (res && res.then) {
                    res.then(function () {
                        self.closeWithAnimation(transitionName, maskTransitionName);
                    });
                }
                else {
                    self.closeWithAnimation(transitionName, maskTransitionName);
                }
            }
            return this._open(props);
        };
        ActionSheetService.prototype.closeWithAnimation = function (transitionName, maskTransitionName) {
            var _this = this;
            this.comRef.instance.option.transitionName = transitionName + "-leave " + transitionName + "-leave-active";
            this.comRef.instance.option.maskTransitionName = maskTransitionName + "-leave " + maskTransitionName + "-leave-active";
            setTimeout(function () {
                _this.close();
            }, 200);
        };
        ActionSheetService.prototype.showActionSheetWithOptions = function (config, callback) {
            if (callback === void 0) { callback = noop; }
            return this.createActionSheet(NORMAL, config, callback);
        };
        ActionSheetService.prototype.showShareActionSheetWithOptions = function (config, callback) {
            if (callback === void 0) { callback = noop; }
            return this.createActionSheet(SHARE, config, callback);
        };
        ActionSheetService.prototype.close = function () {
            this.hidePopup();
        };
        return ActionSheetService;
    }(PopupService));
    ActionSheetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActionSheetService_Factory() { return new ActionSheetService(i0.ɵɵinject(i2.Overlay)); }, token: ActionSheetService, providedIn: "root" });
    ActionSheetService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var ActionSheetModule = /** @class */ (function () {
        function ActionSheetModule() {
        }
        return ActionSheetModule;
    }());
    ActionSheetModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        i2.OverlayModule,
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

    var SegmentedControlComponent = /** @class */ (function () {
        function SegmentedControlComponent() {
            this.prefixCls = 'am-segment';
            this.tintColor = '#2DB7F5';
            this.disabled = false;
            this.selectedIndex = 0;
            this.onChange = new i0.EventEmitter();
            this.role = 'tablist';
            this.amSegment = true;
        }
        Object.defineProperty(SegmentedControlComponent.prototype, "amDisabled", {
            get: function () {
                return this.disabled;
            },
            enumerable: false,
            configurable: true
        });
        SegmentedControlComponent.prototype.onClick = function (index, value) {
            if (!this.disabled && index !== this.selectedIndex) {
                this.selectedIndex = index;
                this.onChange.emit({ selectedIndex: index, value: value });
            }
        };
        return SegmentedControlComponent;
    }());
    SegmentedControlComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SegmentedControl, nz-segmented-control',
                    template: "<div\n  role=\"tab\"\n  *ngFor=\"let value of values; let i = index\"\n  class=\"{{ prefixCls }}-item\"\n  [ngClass]=\"{ 'am-segment-item-selected': i === selectedIndex }\"\n  [ngStyle]=\"{\n    'border-color': tintColor,\n    color: i === selectedIndex ? '#fff' : tintColor,\n    'background-color': i === selectedIndex ? tintColor : 'transparent'\n  }\"\n  (click)=\"onClick(i, value)\"\n>\n  <div\n    class=\"{{ prefixCls }}-item-inner\"\n    [ngStyle]=\"{ 'background-color': i === selectedIndex ? tintColor : 'transparent' }\"\n  ></div>\n  {{ value }}\n</div>\n"
                },] }
    ];
    SegmentedControlComponent.ctorParameters = function () { return []; };
    SegmentedControlComponent.propDecorators = {
        tintColor: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        selectedIndex: [{ type: i0.Input }],
        values: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        role: [{ type: i0.HostBinding, args: ['attr.role',] }],
        amSegment: [{ type: i0.HostBinding, args: ['class.am-segment',] }],
        amDisabled: [{ type: i0.HostBinding, args: ['class.am-segment-disabled',] }]
    };

    var SegmentedControlModule = /** @class */ (function () {
        function SegmentedControlModule() {
        }
        return SegmentedControlModule;
    }());
    SegmentedControlModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [SegmentedControlComponent],
                    exports: [SegmentedControlComponent]
                },] }
    ];

    var TextareaItemComponent = /** @class */ (function () {
        function TextareaItemComponent(element, render) {
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
            this.onChange = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
            this.onFocus = new i0.EventEmitter();
            this.onErrorClick = new i0.EventEmitter();
            this.clsItem = true;
            this._onChange = function (_) { };
            this._el = element.nativeElement;
        }
        Object.defineProperty(TextareaItemComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                if (typeof v === 'undefined' || v === null) {
                    this._value = '';
                }
                else {
                    this._value = v;
                }
                this.textRef.nativeElement.value = this._value;
                this._onChange(this._value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "defaultValue", {
            get: function () {
                return this._defaultValue;
            },
            set: function (value) {
                this._defaultValue = value;
                this._value = this._defaultValue;
                this.textRef.nativeElement.value = this._value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (value) {
                this._placeholder = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "editable", {
            get: function () {
                return this._editable;
            },
            set: function (value) {
                this._editable = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "clear", {
            get: function () {
                return this._clear;
            },
            set: function (value) {
                this._clear = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "rows", {
            get: function () {
                return this._rows;
            },
            set: function (value) {
                this._rows = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "error", {
            get: function () {
                return this._error;
            },
            set: function (value) {
                this._error = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "labelNumber", {
            set: function (value) {
                this._labelNumber = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "count", {
            get: function () {
                return this._count;
            },
            set: function (value) {
                this._count = value;
                this.setCls();
                this.setCharacterLength();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "prefixListCls", {
            get: function () {
                return this._prefixListCls;
            },
            set: function (value) {
                this._prefixListCls = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "name", {
            set: function (value) {
                this._name = value;
                this.textRef.nativeElement.name = this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "autoHeight", {
            set: function (value) {
                this._autoHeight = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
                this.isTitleString = true;
                if (typeof value !== 'string') {
                    this.isTitleString = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "focus", {
            set: function (value) {
                if (value && value.focus) {
                    this.textRef.nativeElement.focus();
                    this.inputFocus('');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextareaItemComponent.prototype, "autoFocus", {
            get: function () {
                return this._autoFocus;
            },
            set: function (value) {
                this._autoFocus = value;
            },
            enumerable: false,
            configurable: true
        });
        TextareaItemComponent.prototype.setCls = function () {
            var _a, _b, _c;
            this.hasCount = this._count > 0 && this._rows > 1;
            this.render.addClass(this._el, this._prefixListCls + '-item');
            this.clsSingleLine = this._rows === 1 && !this._autoHeight;
            this.clsDisabled = this._disabled;
            this.clsError = this._error;
            this.clsFocus = this._focus;
            this.clsHasCount = this.hasCount;
            this.labelCls = (_a = {},
                _a[this.prefixCls + "-label"] = true,
                _a[this.prefixCls + "-label-2"] = this._labelNumber === 2,
                _a[this.prefixCls + "-label-3"] = this._labelNumber === 3,
                _a[this.prefixCls + "-label-4"] = this._labelNumber === 4,
                _a[this.prefixCls + "-label-5"] = this._labelNumber === 5,
                _a[this.prefixCls + "-label-6"] = this._labelNumber === 6,
                _a[this.prefixCls + "-label-7"] = this._labelNumber === 7,
                _a);
            this.controlCls = (_b = {}, _b[this.prefixCls + "-control"] = true, _b);
            this.clearCls = (_c = {},
                _c[this.prefixCls + "-clear-active"] = this._isClickingClear,
                _c);
        };
        TextareaItemComponent.prototype.setCharacterLength = function () {
            this.characterLength = this.countSymbols(this._value);
            if (this._count > 0) {
                this.maxLength = this._count - this.characterLength + (this._value ? this._value.length : 0);
            }
        };
        TextareaItemComponent.prototype.inputChange = function (e) {
            this._value = e;
            this.textRef.nativeElement.value = this._value;
            this.setCharacterLength();
            this._onChange(this._value);
            this.onChange.emit(this._value);
        };
        TextareaItemComponent.prototype.inputFocus = function (value) {
            this._focus = true;
            this.setCls();
            if (value !== undefined) {
                this.onFocus.emit(value);
            }
        };
        TextareaItemComponent.prototype.inputBlur = function (value, event) {
            var _this = this;
            setTimeout(function () {
                _this._focus = false;
                _this.setCls();
                _this.onBlur.emit(value);
                _this._isClear = false;
            }, 100);
        };
        TextareaItemComponent.prototype.clearInput = function () {
            var _this = this;
            this._isClickingClear = true;
            this.setCls();
            setTimeout(function () {
                _this._value = '';
                _this.inputChange('');
                _this.inputFocus(_this._value);
                _this._isClickingClear = false;
                _this.setCls();
            }, 100);
        };
        TextareaItemComponent.prototype.errorClick = function (e) {
            if (this.onErrorClick) {
                this.onErrorClick.emit(e);
            }
        };
        TextareaItemComponent.prototype.reAlignHeight = function () {
            var textareaDom = this.textRef.nativeElement;
            textareaDom.style.height = '';
            textareaDom.style.height = textareaDom.scrollHeight + "px";
        };
        TextareaItemComponent.prototype.countSymbols = function (text) {
            if (text === void 0) { text = ''; }
            var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
            return text.replace(regexAstralSymbols, '_').length;
        };
        TextareaItemComponent.prototype.writeValue = function (value) {
            if (typeof value === 'undefined' || value === null) {
                this._value = '';
            }
            else {
                this._value = value;
            }
            this.setCharacterLength();
        };
        TextareaItemComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        TextareaItemComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        TextareaItemComponent.prototype.registerOnTouched = function (fn) { };
        TextareaItemComponent.prototype.ngOnInit = function () {
            this.textRef.nativeElement.value = this._value;
            this.setCls();
            this.setCharacterLength();
        };
        TextareaItemComponent.prototype.ngAfterContentChecked = function () {
            if (this._autoHeight) {
                this.reAlignHeight();
            }
        };
        return TextareaItemComponent;
    }());
    TextareaItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'TextareaItem , nzm-textarea-item',
                    template: "<div *ngIf=\"title && isTitleString\" [ngClass]=\"labelCls\">{{ title }}</div>\n<div *ngIf=\"title && !isTitleString\" [ngClass]=\"labelCls\">\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</div>\n<div [ngClass]=\"controlCls\">\n  <textarea\n    #text\n    [rows]=\"rows\"\n    [maxlength]=\"maxLength\"\n    [(ngModel)]=\"value\"\n    [defaultValue]=\"defaultValue\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [readOnly]=\"!editable\"\n    [autofocus]=\"autoFocus\"\n    (ngModelChange)=\"inputChange($event)\"\n    (blur)=\"inputBlur(value, $event)\"\n    (focus)=\"inputFocus(value)\"\n  ></textarea>\n</div>\n<div\n  *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n  class=\"{{ prefixCls }}-clear\"\n  [ngClass]=\"clearCls\"\n  (click)=\"clearInput()\"\n></div>\n<div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n<span *ngIf=\"hasCount\" class=\"{{ prefixCls }}-count\">\n  <span>{{ characterLength }}</span\n  >/{{ count }}\n</span>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return TextareaItemComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    TextareaItemComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    TextareaItemComponent.propDecorators = {
        textRef: [{ type: i0.ViewChild, args: ['text', { static: true },] }],
        value: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        editable: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        clear: [{ type: i0.Input }],
        rows: [{ type: i0.Input }],
        error: [{ type: i0.Input }],
        labelNumber: [{ type: i0.Input }],
        count: [{ type: i0.Input }],
        prefixListCls: [{ type: i0.Input }],
        name: [{ type: i0.Input }],
        autoHeight: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        focus: [{ type: i0.Input }],
        autoFocus: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onBlur: [{ type: i0.Output }],
        onFocus: [{ type: i0.Output }],
        onErrorClick: [{ type: i0.Output }],
        clsItem: [{ type: i0.HostBinding, args: ['class.am-textarea-item',] }],
        clsDisabled: [{ type: i0.HostBinding, args: ['class.am-textarea-disabled',] }],
        clsError: [{ type: i0.HostBinding, args: ['class.am-textarea-error',] }],
        clsFocus: [{ type: i0.HostBinding, args: ['class.am-textarea-focus',] }],
        clsSingleLine: [{ type: i0.HostBinding, args: ['class.am-textarea-item-single-line',] }],
        clsHasCount: [{ type: i0.HostBinding, args: ['class.am-textarea-has-count',] }]
    };

    var TextareaItemModule = /** @class */ (function () {
        function TextareaItemModule() {
        }
        return TextareaItemModule;
    }());
    TextareaItemModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [TextareaItemComponent],
                    declarations: [TextareaItemComponent],
                    imports: [common.CommonModule, forms.FormsModule]
                },] }
    ];

    var TabPaneComponent = /** @class */ (function () {
        function TabPaneComponent() {
            this.isTitleString = true;
        }
        Object.defineProperty(TabPaneComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this.isTitleString = !(value instanceof i0.TemplateRef);
                this._title = value;
            },
            enumerable: false,
            configurable: true
        });
        return TabPaneComponent;
    }());
    TabPaneComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'TabPane, nzm-tab-pane',
                    template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
                },] }
    ];
    TabPaneComponent.ctorParameters = function () { return []; };
    TabPaneComponent.propDecorators = {
        content: [{ type: i0.ViewChild, args: ['content', { static: true },] }],
        title: [{ type: i0.Input }]
    };

    var TabsComponent = /** @class */ (function () {
        function TabsComponent() {
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
            this.onChange = new i0.EventEmitter();
            this.onTabClick = new i0.EventEmitter();
            this.amTabs = true;
            this.amTabsTop = true;
            this.amTabsLeft = false;
            this.amTabsRight = false;
            this.amTabsBottom = false;
            this.amTabsVertical = false;
            this.amTabsHorizontal = true;
        }
        Object.defineProperty(TabsComponent.prototype, "activeTab", {
            get: function () {
                return this.selectedKey;
            },
            set: function (value) {
                this.keyToSelect = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "tabBarPosition", {
            get: function () {
                return this._tabBarPosition;
            },
            set: function (position) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "tabDirection", {
            get: function () {
                return this._tabDirection;
            },
            set: function (direction) {
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
            },
            enumerable: false,
            configurable: true
        });
        TabsComponent.prototype.clickTab = function (index) {
            if (this.selectedKey !== index) {
                this.keyToSelect = index;
                this.onTabClick.emit({ index: this.keyToSelect });
            }
        };
        TabsComponent.prototype.getCurrentTabPanes = function () {
            return this.tabPanesContent || this.tabPanes;
        };
        TabsComponent.prototype.onTouchStart = function (event) {
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
        };
        TabsComponent.prototype.onTouchMove = function (event) {
            if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
                if ('horizontal' === this._tabDirection) {
                    var distance = event.changedTouches[0].clientX - this._startPosition;
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
                    var distance = event.changedTouches[0].clientY - this._startPosition;
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
        };
        TabsComponent.prototype.onTouchEnd = function (event) {
            if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
                if ('horizontal' === this._tabDirection) {
                    var distance = event.changedTouches[0].clientX - this._startPosition;
                    var distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
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
                    var distance = event.changedTouches[0].clientY - this._startPosition;
                    var distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
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
        };
        TabsComponent.prototype.ngAfterContentInit = function () {
            this.selectTabPane(this.keyToSelect);
            this.selectedKey = this.keyToSelect;
        };
        TabsComponent.prototype.ngDoCheck = function () {
            if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
                this.selectTabPane(this.keyToSelect);
                this.selectedKey = this.keyToSelect;
                this.onChange.emit({ index: this.selectedKey });
            }
        };
        TabsComponent.prototype.selectTabPane = function (index) {
            if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
                var actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
                if ('horizontal' === this._tabDirection) {
                    this.paneMoveStyle = 'translate3d(-' + actualKeyToSelect * 100 + '%, 0, 0 )';
                }
                else if ('vertical' === this._tabDirection) {
                    this.paneMoveStyle = 'translate3d(0, -' + actualKeyToSelect * 100 + '%, 0 )';
                }
            }
        };
        TabsComponent.prototype.getVelocity = function (deltaDistance, deltaTime) {
            return Math.abs(deltaDistance / deltaTime);
        };
        return TabsComponent;
    }());
    TabsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Tabs, nzm-tabs',
                    template: "<ng-container>\n  <ng-template\n    *ngIf=\"'top' === tabBarPosition || 'left' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  >\n  </ng-template>\n  <div\n    #TabContent\n    class=\"{{ prefixCls }}-content-wrap\"\n    [ngClass]=\"{ 'am-tabs-content-wrap-animated': animated }\"\n    [ngStyle]=\"{ transform: paneMoveStyle, webkitTransform: paneMoveStyle }\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <div\n      tab-pane-body\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      [content]=\"tabPane.content\"\n      [active]=\"i === selectedKey\"\n      [prerender]=\"\n        prerenderingSiblingsNumber < 0 ||\n        (selectedKey - i <= prerenderingSiblingsNumber && selectedKey - i + prerenderingSiblingsNumber >= 0)\n      \"\n    ></div>\n  </div>\n  <ng-template\n    *ngIf=\"'bottom' === tabBarPosition || 'right' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  ></ng-template>\n</ng-container>\n\n<ng-template #renderDefaultTabBar>\n  <DefaultTabBar\n    #DefaultTabBar\n    [page]=\"page\"\n    [animated]=\"animated\"\n    [activeTab]=\"selectedKey\"\n    [tabTitleSize]=\"tabTitleSize\"\n    [tabBarPosition]=\"tabBarPosition\"\n    [tabBarUnderlineStyle]=\"tabBarUnderlineStyle\"\n    [tabBarBackgroundColor]=\"tabBarBackgroundColor\"\n  >\n    <div\n      #TabTitle\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      class=\"{{ prefixCls }}-default-bar-tab\"\n      [ngClass]=\"{\n        'am-tabs-default-bar-tab-active': i === selectedKey,\n        'am-tabs-default-bar-tab-disabled': tabPane.disabled\n      }\"\n      [ngStyle]=\"tabBarTextStyle\"\n      [style.color]=\"i === selectedKey ? tabBarActiveTextColor : tabBarInactiveTextColor\"\n      (click)=\"clickTab(i)\"\n    >\n      <ng-container *ngIf=\"tabPane.isTitleString; else titleTemplate\">\n        {{ tabPane.title }}\n      </ng-container>\n      <ng-template #titleTemplate>\n        <ng-template [ngTemplateOutlet]=\"tabPane.title\"></ng-template>\n      </ng-template>\n    </div>\n  </DefaultTabBar>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    TabsComponent.ctorParameters = function () { return []; };
    TabsComponent.propDecorators = {
        tabPanes: [{ type: i0.ContentChildren, args: [TabPaneComponent, { descendants: false },] }],
        tabContent: [{ type: i0.ViewChild, args: ['TabContent', { static: true },] }],
        defaultTabBar: [{ type: i0.ViewChild, args: ['DefaultTabBar',] }],
        page: [{ type: i0.Input }],
        swipeable: [{ type: i0.Input }],
        useOnPan: [{ type: i0.Input }],
        animated: [{ type: i0.Input }],
        tabBarUnderlineStyle: [{ type: i0.Input }],
        distanceToChangeTab: [{ type: i0.Input }],
        tabTitleSize: [{ type: i0.Input }],
        tabBarActiveTextColor: [{ type: i0.Input }],
        tabBarInactiveTextColor: [{ type: i0.Input }],
        renderTabBar: [{ type: i0.Input }],
        tabBarBackgroundColor: [{ type: i0.Input }],
        prerenderingSiblingsNumber: [{ type: i0.Input }],
        tabBarTextStyle: [{ type: i0.Input }],
        tabPanesContent: [{ type: i0.Input }],
        activeTab: [{ type: i0.Input }],
        tabBarPosition: [{ type: i0.Input }],
        tabDirection: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onTabClick: [{ type: i0.Output }],
        amTabs: [{ type: i0.HostBinding, args: ['class.am-tabs',] }],
        amTabsTop: [{ type: i0.HostBinding, args: ['class.am-tabs-top',] }],
        amTabsLeft: [{ type: i0.HostBinding, args: ['class.am-tabs-left',] }],
        amTabsRight: [{ type: i0.HostBinding, args: ['class.am-tabs-right',] }],
        amTabsBottom: [{ type: i0.HostBinding, args: ['class.am-tabs-bottom',] }],
        amTabsVertical: [{ type: i0.HostBinding, args: ['class.am-tabs-vertical',] }],
        amTabsHorizontal: [{ type: i0.HostBinding, args: ['class.am-tabs-horizontal',] }]
    };

    var TabPaneBodyComponent = /** @class */ (function () {
        function TabPaneBodyComponent() {
            this._prerender = false;
            this.active = false;
            this.loaded = false;
            this.paneWrap = true;
        }
        Object.defineProperty(TabPaneBodyComponent.prototype, "prerender", {
            get: function () {
                return this._prerender;
            },
            set: function (value) {
                this._prerender = value;
                if (value) {
                    this.loaded = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabPaneBodyComponent.prototype, "wrapActive", {
            get: function () {
                return this.active;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabPaneBodyComponent.prototype, "wrapInactive", {
            get: function () {
                return !this.active;
            },
            enumerable: false,
            configurable: true
        });
        TabPaneBodyComponent.prototype.ngOnInit = function () { };
        return TabPaneBodyComponent;
    }());
    TabPaneBodyComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[tab-pane-body]',
                    template: "<ng-container *ngIf=\"loaded || prerender\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-container>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    TabPaneBodyComponent.ctorParameters = function () { return []; };
    TabPaneBodyComponent.propDecorators = {
        active: [{ type: i0.Input }],
        loaded: [{ type: i0.Input }],
        content: [{ type: i0.Input }],
        prerender: [{ type: i0.Input }],
        paneWrap: [{ type: i0.HostBinding, args: ['class.am-tabs-pane-wrap',] }],
        wrapActive: [{ type: i0.HostBinding, args: ['class.am-tabs-pane-wrap-active',] }],
        wrapInactive: [{ type: i0.HostBinding, args: ['class.am-tabs-pane-wrap-inactive',] }]
    };

    var DefaultTabBarComponent = /** @class */ (function () {
        function DefaultTabBarComponent(_renderer, _ref) {
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
            this.getTabSize = function (page, tabLength) { return 100 / Math.min(page, tabLength); };
        }
        Object.defineProperty(DefaultTabBarComponent.prototype, "activeTab", {
            get: function () {
                return this.selectedKey;
            },
            set: function (index) {
                if (index !== this.selectedKey) {
                    this.selectedKey = index;
                    if (this.tabTitles && this.tabTitles.length > 0) {
                        this.setTabBarStyleCenter();
                        this.setInkBarStatus(this.selectedKey);
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DefaultTabBarComponent.prototype.onTouchStart = function (event) {
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
        };
        DefaultTabBarComponent.prototype.onTouchMove = function (event) {
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
        };
        DefaultTabBarComponent.prototype.onTouchEnd = function () {
            if ((this.tabTitleSize > 0 &&
                this.tabTitleSize * this.tabTitles.length >
                    ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                        ? this.tabsBarSwipe.nativeElement.offsetWidth
                        : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
                (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
                this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
            }
        };
        DefaultTabBarComponent.prototype.onContentChange = function () {
            this.setTabsStyle();
            this.setInkBarStatus(this.selectedKey);
        };
        DefaultTabBarComponent.prototype.ngAfterContentInit = function () {
            this.setTabsStyle();
            this.setTabBarStyleCenter();
            this.setInkBarStatus(this.selectedKey);
        };
        DefaultTabBarComponent.prototype.setTabsStyle = function () {
            var _this = this;
            if (this.tabTitles && this.tabTitles.length > 0) {
                if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                    this.tabTitles.forEach(function (tabTitle) {
                        _this._renderer.setStyle(tabTitle.nativeElement, 'width', _this.tabTitleSize > 0 ? _this.tabTitleSize + 'px' : _this.getTabSize(_this.page, _this.tabTitles.length) + '%');
                    });
                }
                else {
                    this.tabTitles.forEach(function (tabTitle) {
                        _this._renderer.setStyle(tabTitle.nativeElement, 'height', _this.tabTitleSize > 0 ? _this.tabTitleSize + 'px' : _this.getTabSize(_this.page, _this.tabTitles.length) + '%');
                    });
                }
            }
        };
        DefaultTabBarComponent.prototype.setTabBarStyleCenter = function () {
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
        };
        DefaultTabBarComponent.prototype.setInkBarStatus = function (key) {
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
        };
        DefaultTabBarComponent.prototype.setTabBarNavSwipingPosition = function (swipingDistance, swipingItemLength, viewportLength) {
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
        };
        DefaultTabBarComponent.prototype.setTabBarNavSwipedPosition = function (swipingItemLength, viewportLength) {
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
        };
        return DefaultTabBarComponent;
    }());
    DefaultTabBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'DefaultTabBar, nzm-default-tab-bar',
                    template: "<div\n  class=\"{{ prefixCls }} {{ prefixCls }}-{{ tabBarPosition }}\"\n  [ngClass]=\"{ 'am-tabs-default-bar-animated': animated }\"\n  [ngStyle]=\"{ backgroundColor: tabBarBackgroundColor || '#FFF' }\"\n>\n  <div *ngIf=\"showPrev\" class=\"{{ prefixCls }}-prevpage\"></div>\n  <div\n    #TabsBarSwipe\n    class=\"{{ prefixCls }}-content\"\n    [ngStyle]=\"tabsBarStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (cdkObserveContent)=\"onContentChange()\"\n  >\n    <ng-content></ng-content>\n    <div class=\"{{ prefixCls }}-underline\" [ngStyle]=\"inkBarStyle\"></div>\n  </div>\n  <div *ngIf=\"showNext\" class=\"{{ prefixCls }}-nextpage\"></div>\n</div>\n"
                },] }
    ];
    DefaultTabBarComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: i0.ChangeDetectorRef }
    ]; };
    DefaultTabBarComponent.propDecorators = {
        tabTitles: [{ type: i0.ContentChildren, args: ['TabTitle',] }],
        tabsBarSwipe: [{ type: i0.ViewChild, args: ['TabsBarSwipe', { static: true },] }],
        page: [{ type: i0.Input }],
        animated: [{ type: i0.Input }],
        tabBarUnderlineStyle: [{ type: i0.Input }],
        tabBarBackgroundColor: [{ type: i0.Input }],
        tabTitleSize: [{ type: i0.Input }],
        tabBarPosition: [{ type: i0.Input }],
        activeTab: [{ type: i0.Input }],
        tabBarWrap: [{ type: i0.HostBinding, args: ['class.am-tabs-tab-bar-wrap',] }]
    };

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        return TabsModule;
    }());
    TabsModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, observers.ObserversModule],
                    declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                    exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                    providers: []
                },] }
    ];

    var TabBarItemComponent = /** @class */ (function (_super) {
        __extends(TabBarItemComponent, _super);
        function TabBarItemComponent() {
            var _this = _super.call(this) || this;
            _this.prefixCls = 'am-tab-bar-tab';
            _this.selected = false;
            _this.tintColor = '#108ee9';
            _this.unselectedTintColor = '#888';
            _this.key = '';
            _this.dot = false;
            _this.badge = null;
            _this.icon = null;
            _this.selectedIcon = null;
            return _this;
        }
        TabBarItemComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return TabBarItemComponent;
    }(TabPaneComponent));
    TabBarItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'TabBarItem, nzm-tab-bar-item',
                    template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #tabBarTab>\n  <div class=\"{{ prefixCls }}-icon\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    <Badge *ngIf=\"badge\" className=\"{{ prefixCls }}-badge tab-badge\" [text]=\"badge\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <Badge className=\"{{ prefixCls }}-badge tab-badge\" [dot]=\"dot\" *ngIf=\"dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <ng-container *ngIf=\"!badge && !dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </ng-container>\n  </div>\n  <p class=\"{{ prefixCls }}-title\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    {{ title }}\n  </p>\n</ng-template>\n\n<ng-template #domTemplate>\n  <ng-template [ngTemplateOutlet]=\"selected ? selectedIcon : icon\"></ng-template>\n</ng-template>\n\n<ng-template #imgTemplate>\n  <img src=\"{{ selected ? selectedIcon : icon }}\" alt=\"{{ title }}\" />\n</ng-template>\n"
                },] }
    ];
    TabBarItemComponent.ctorParameters = function () { return []; };
    TabBarItemComponent.propDecorators = {
        tabBarTab: [{ type: i0.ViewChild, args: ['tabBarTab', { static: true },] }],
        key: [{ type: i0.Input }],
        dot: [{ type: i0.Input }],
        badge: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        selectedIcon: [{ type: i0.Input }]
    };

    var TabBarComponent = /** @class */ (function () {
        function TabBarComponent() {
            this.prefixCls = 'am-tab-bar';
            this._activeTab = 0;
            this._tintColor = '#108ee9';
            this._unselectedTintColor = '#888';
            this.hidden = false;
            this.prerenderingSiblingsNumber = -1;
            this.barTintColor = 'white';
            this.tabBarPosition = 'bottom';
            this.onPress = new i0.EventEmitter();
            this.tabBar = true;
        }
        Object.defineProperty(TabBarComponent.prototype, "activeTab", {
            get: function () {
                return this._activeTab;
            },
            set: function (tab) {
                this._activeTab = tab;
                if (this.tabBarItems && this.tabBarItems.length > 0) {
                    this.selectTabBarItem(tab);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabBarComponent.prototype, "tintColor", {
            get: function () {
                return this._tintColor;
            },
            set: function (color) {
                var _this = this;
                this._tintColor = color;
                if (this.tabBarItems && this.tabBarItems.length > 0) {
                    this.tabBarItems.forEach(function (tabBarItem) {
                        tabBarItem.tintColor = _this._tintColor;
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabBarComponent.prototype, "unselectedTintColor", {
            get: function () {
                return this._unselectedTintColor;
            },
            set: function (color) {
                var _this = this;
                this._unselectedTintColor = color;
                if (this.tabBarItems && this.tabBarItems.length > 0) {
                    this.tabBarItems.forEach(function (tabBarItem) {
                        tabBarItem.unselectedTintColor = _this._unselectedTintColor;
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        TabBarComponent.prototype.selectTabBarItem = function (index) {
            if (this.tabBarItems && this.tabBarItems.length > 0) {
                this.tabBarItems.forEach(function (tabBarItem) {
                    tabBarItem.selected = false;
                });
                this.tabBarItems.toArray()[index].selected = true;
            }
        };
        TabBarComponent.prototype.tabBarTabOnPress = function (pressParam) {
            this.onPress.emit(pressParam);
        };
        TabBarComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.tabBarItems && this.tabBarItems.length > 0) {
                this.tabBarItems.forEach(function (tabBarItem) {
                    tabBarItem.tintColor = _this._tintColor;
                    tabBarItem.unselectedTintColor = _this._unselectedTintColor;
                });
            }
            this.selectTabBarItem(this.activeTab);
        };
        return TabBarComponent;
    }());
    TabBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'TabBar, nzm-tab-bar',
                    template: "<Tabs\n  [animated]=\"false\"\n  [useOnPan]=\"false\"\n  [swipeable]=\"false\"\n  [activeTab]=\"activeTab\"\n  [renderTabBar]=\"TabBarBar\"\n  [tabDirection]=\"'horizontal'\"\n  [tabPanesContent]=\"tabBarItems\"\n  [tabBarPosition]=\"tabBarPosition\"\n  [prerenderingSiblingsNumber]=\"prerenderingSiblingsNumber\"\n></Tabs>\n\n<ng-template #TabBarBar>\n  <div class=\"am-tabs-tab-bar-wrap\">\n    <div\n      class=\"{{ prefixCls }}-bar\"\n      [ngClass]=\"{\n        'am-tab-bar-bar-hidden-top': 'top' === tabBarPosition && hidden,\n        'am-tab-bar-bar-hidden-bottom': 'bottom' === tabBarPosition && hidden\n      }\"\n      [style.background-color]=\"barTintColor\"\n    >\n      <div\n        class=\"am-tab-bar-tab\"\n        *ngFor=\"let tabBarItem of tabBarItems; let i = index\"\n        (click)=\"tabBarTabOnPress({ index: i, key: tabBarItem.key, title: tabBarItem.title })\"\n      >\n        <ng-container [ngTemplateOutlet]=\"tabBarItem.tabBarTab\"></ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
                },] }
    ];
    TabBarComponent.ctorParameters = function () { return []; };
    TabBarComponent.propDecorators = {
        tabBarItems: [{ type: i0.ContentChildren, args: [TabBarItemComponent, { descendants: true },] }],
        hidden: [{ type: i0.Input }],
        prerenderingSiblingsNumber: [{ type: i0.Input }],
        activeTab: [{ type: i0.Input }],
        barTintColor: [{ type: i0.Input }],
        tabBarPosition: [{ type: i0.Input }],
        tintColor: [{ type: i0.Input }],
        unselectedTintColor: [{ type: i0.Input }],
        onPress: [{ type: i0.Output }],
        tabBar: [{ type: i0.HostBinding, args: ['class.am-tab-bar',] }]
    };

    var TabBarModule = /** @class */ (function () {
        function TabBarModule() {
        }
        return TabBarModule;
    }());
    TabBarModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, TabsModule, BadgeModule],
                    exports: [TabBarComponent, TabBarItemComponent],
                    declarations: [TabBarComponent, TabBarItemComponent],
                    providers: []
                },] }
    ];

    var PickerOptions = /** @class */ (function () {
        function PickerOptions() {
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
            this.onDismiss = new i0.EventEmitter();
            this.onPickerChange = new i0.EventEmitter();
            this.indicatorStyle = {};
        }
        return PickerOptions;
    }());
    PickerOptions.decorators = [
        { type: i0.Injectable }
    ];

    var PickerRef = /** @class */ (function () {
        function PickerRef() {
        }
        return PickerRef;
    }());

    var PickerComponent = /** @class */ (function (_super) {
        __extends(PickerComponent, _super);
        function PickerComponent(elementRef, options, _localeProviderService) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.options = options;
            _this._localeProviderService = _localeProviderService;
            _this.transitionName = 'am-slide-up-enter am-slide-up-enter-active';
            _this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
            _this.startY = 0;
            _this.differY = 0;
            _this.currentY = 0;
            _this.len = 0;
            _this.dom = null;
            _this.index = 0;
            _this.maxY = 0;
            _this.lineHeight = 34;
            _this.dataForRender = [];
            _this.selectedTarget = [];
            _this.isMouseDown = false;
            _this.Velocity = getVelocity();
            _this._unsubscribe$ = new rxjs.Subject();
            _this.onChange = function (_) { };
            return _this;
        }
        PickerComponent.prototype.panstart = function (event) {
            var _this = this;
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
                this.selectedTarget.forEach(function (item) {
                    if (item.targetId === event.target.id) {
                        _this.currentY = item.currentY;
                    }
                });
            }
            this.startY = getEventTarget(event).clientY;
        };
        PickerComponent.prototype.panmove = function (event) {
            if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
                return;
            }
            event.preventDefault();
            var ev = getEventTarget(event);
            this.differY = ev.clientY - this.startY;
            this.Velocity.record(this.differY);
            this.dom.style.transition = 'transform 0s';
            this.dom.style.transform = "translateY(" + (this.currentY * this.lineHeight + this.differY) + "px)";
        };
        PickerComponent.prototype.panend = function (event) {
            var _this = this;
            if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
                return;
            }
            this.isMouseDown = false;
            event.preventDefault();
            var ev = getEventTarget(event);
            this.differY = ev.clientY - this.startY;
            var time = 0.3;
            var velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
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
                var hasKey_1 = false;
                this.selectedTarget.forEach(function (item) {
                    if (item.targetId === event.target.id) {
                        hasKey_1 = true;
                        item.targetId = event.target.id;
                        item.currentY = _this.currentY;
                    }
                    else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && _this.options.cascade) {
                        item.currentY = 0;
                    }
                });
                if (!hasKey_1) {
                    this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
                }
            }
            else {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
            this.dom.style.transform = "translateY(" + this.currentY * this.lineHeight + "px)";
            this.index = Math.floor(Math.abs(this.currentY / 1));
            this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
            if (this.options.value !== this.combineReslut()) {
                this.options.onPickerChange.emit(this.combineReslut());
                this.onChange(this.combineReslut());
            }
        };
        PickerComponent.prototype.init = function () {
            if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
                this.dataForRender.push(this.generateArrayData(this.options.data));
            }
            if (this.options.value.length > 0) {
                this.getInitValueIndex(this.dataForRender);
            }
            else {
                this.checkArrayDeep(this.options.data[0]);
                for (var index = 0; index < this.dataForRender.length; index++) {
                    this.selectedTarget.push({ targetId: "" + index, currentY: 0 });
                }
            }
        };
        PickerComponent.prototype.getInitValueIndex = function (dataTemp) {
            var self = this;
            self.selectedTarget = [];
            self.options.value.forEach(function (element, i) {
                dataTemp.forEach(function (item, j) {
                    item.forEach(function (item1, k) {
                        if ((element === item1.label || element === item1.value || element === item1) && i === j) {
                            self.checkArrayDeep(self.dataForRender[i][k], false);
                            self.selectedTarget.push({ targetId: "" + i, currentY: -k });
                        }
                    });
                });
            });
        };
        PickerComponent.prototype.reloadPicker = function () {
            if (!this._picker || this._picker === undefined) {
                return;
            }
            this.currentPicker = this._picker.element.nativeElement;
            if (this.currentPicker && this.currentPicker.children.length > 0) {
                var self_1 = this;
                setTimeout(function () {
                    self_1.selectedTarget.forEach(function (item, i) {
                        self_1.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                        var index = parseInt(item.currentY, 0);
                        self_1.currentPicker.children[i].children[2].style.transform = "translateY(" + index * self_1.lineHeight + "px)";
                    });
                }, 0);
            }
        };
        PickerComponent.prototype.generateArrayData = function (targetArr) {
            var tempArr = [];
            if (targetArr instanceof Array) {
                targetArr.forEach(function (item, i) {
                    if (item instanceof Array) {
                        var keys = Object.keys(item);
                        var element_1 = {};
                        keys.forEach(function (key) {
                            element_1[key] = targetArr[i][key] || targetArr[i];
                        });
                        tempArr.push(element_1);
                    }
                    else {
                        tempArr.push(item);
                    }
                });
                return tempArr;
            }
            return [];
        };
        PickerComponent.prototype.checkArrayDeep = function (parent, init) {
            if (init === void 0) { init = true; }
            if (parent instanceof Object && parent.children && parent.children.length > 0) {
                if (this.generateArrayData(parent.children).length > 0 && this.dataForRender.length < this.options.cols) {
                    var hasValue_1 = false;
                    this.dataForRender.filter(function (item, index) {
                        if (JSON.stringify(item) === JSON.stringify(parent.children)) {
                            hasValue_1 = true;
                        }
                    });
                    if (!hasValue_1) {
                        this.dataForRender.push(this.generateArrayData(parent.children));
                    }
                    if (init) {
                        this.checkArrayDeep(parent.children[0]);
                    }
                }
            }
        };
        PickerComponent.prototype.ok = function () {
            if (this.options.updateNgModel) {
                this.options.updateNgModel(this.combineReslut());
            }
            if (this.options.confirm) {
                this.options.confirm(this.combineReslut());
            }
            this.setTransitionName();
        };
        PickerComponent.prototype.combineReslut = function () {
            var result = [];
            var self = this;
            self.selectedTarget.forEach(function (item) {
                if (self.dataForRender.length > 0 && self.dataForRender.length >= parseInt(item.targetId, 0) + 1) {
                    var curItem = self.dataForRender[parseInt(item.targetId, 0)][-item.currentY];
                    if (curItem !== undefined) {
                        result.push(curItem);
                    }
                }
            });
            return result;
        };
        PickerComponent.prototype.cancel = function () {
            this.setTransitionName();
            this.options.onDismiss.emit();
            if (this.options.cancel) {
                this.options.cancel();
            }
        };
        PickerComponent.prototype.setTransitionName = function () {
            var _this = this;
            this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
            this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
            setTimeout(function () {
                _this.options.hidePicker();
            }, 200);
        };
        PickerComponent.prototype.setCurrentSelected = function (target, index) {
            var _this = this;
            if (!this.options.cascade) {
                return;
            }
            var a = this.dataForRender.slice(0, target + 1);
            this.dataForRender = a;
            this.checkArrayDeep(this.dataForRender[target][index]);
            if (this.selectedTarget.length > 0 && this.selectedTarget.length < this.dataForRender.length) {
                for (var i = 0; i < this.dataForRender.length; i++) {
                    if (i > target) {
                        if (i < this.selectedTarget.length) {
                            this.selectedTarget[i] = { targetId: "" + i, currentY: 0 };
                        }
                        else {
                            this.selectedTarget.push({ targetId: "" + i, currentY: 0 });
                        }
                    }
                }
            }
            setTimeout(function () {
                _this.dataForRender.forEach(function (item, i) {
                    if (target !== "" + i && i > target) {
                        _this._picker.element.nativeElement.children[i].children[2].style.transition = 'transform .3s';
                        _this._picker.element.nativeElement.children[i].children[2].style.transform = 'translateY(0px)';
                    }
                });
            }, 0);
        };
        PickerComponent.prototype.getInstance = function () {
            return this;
        };
        PickerComponent.prototype.getElement = function () {
            return this.elementRef && this.elementRef.nativeElement;
        };
        PickerComponent.prototype.close = function () {
            if (this.options.hidePicker) {
                this.options.hidePicker();
            }
        };
        PickerComponent.prototype.destroy = function () {
            this.close();
        };
        PickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.init();
            this._localeProviderService.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                var locale = _this._localeProviderService.getLocaleSubObj('Picker');
                _this.options.okText = _this.options.okText === '确定' ? locale.okText : _this.options.okText;
                _this.options.dismissText = _this.options.dismissText === '取消' ? locale.dismissText : _this.options.dismissText;
            });
        };
        PickerComponent.prototype.ngAfterViewInit = function () {
            this.reloadPicker();
        };
        PickerComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return PickerComponent;
    }(PickerRef));
    PickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Picker',
                    template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup am-picker-popup-wrap {{ transitionName }}\" style=\" min-height: 280px\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">{{ options.okText }}</div>\n        </div>\n        <div class=\"am-picker\" style=\"flex-direction: row; align-items: center;\" #picker>\n          <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"options.indicatorStyle\"></div>\n            <div class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\" id=\"{{ i }}\"></div>\n            <div class=\"am-picker-col-content\">\n              <div *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\" id=\"{{ i }}\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    PickerComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: PickerOptions },
        { type: LocaleProviderService }
    ]; };
    PickerComponent.propDecorators = {
        _picker: [{ type: i0.ViewChild, args: ['picker', { read: i0.ViewContainerRef, static: true },] }],
        panstart: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }, { type: i0.HostListener, args: ['touchstart', ['$event'],] }],
        panmove: [{ type: i0.HostListener, args: ['mousemove', ['$event'],] }, { type: i0.HostListener, args: ['touchmove', ['$event'],] }],
        panend: [{ type: i0.HostListener, args: ['mouseup', ['$event'],] }, { type: i0.HostListener, args: ['mouseleave', ['$event'],] }, { type: i0.HostListener, args: ['touchend', ['$event'],] }]
    };

    var PickerDirective = /** @class */ (function () {
        function PickerDirective(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer, _zone) {
            this._viewContainerRef = _viewContainerRef;
            this._elm = _elm;
            this._defaultOptions = _defaultOptions;
            this._cfr = _cfr;
            this._renderer = _renderer;
            this._zone = _zone;
            this._eventListeners = [];
            this.onVisibleChange = new i0.EventEmitter(true);
            this.onPickerChange = new i0.EventEmitter();
            this.onDismiss = new i0.EventEmitter();
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
        }
        PickerDirective.prototype.togglePicker = function () {
            if (!this.picker) {
                this.showPicker();
            }
            else {
                this.hidePicker();
            }
        };
        PickerDirective.prototype.ngOnInit = function () {
            this.onVisibleChange.emit(false);
        };
        PickerDirective.prototype.ngOnChanges = function (value) {
            if (value.cols && this.picker) {
                this.picker.instance.options.cols = value.cols.currentValue;
            }
            if (value.data && this.picker) {
                if (!this.isPickerDataEqual(this.picker.instance.options.data, value.data.currentValue)) {
                    this.picker.instance.options.data = value.data.currentValue;
                    this.showPicker();
                }
            }
        };
        PickerDirective.prototype.ngOnDestroy = function () {
            this.hidePicker();
        };
        PickerDirective.prototype.onDocumentClick = function (event) {
            if (this.picker &&
                !this._elm.nativeElement.contains(event.target) &&
                !this.picker.location.nativeElement.contains(event.target)) {
                this.hidePicker();
            }
        };
        PickerDirective.prototype.showPicker = function () {
            var _this = this;
            if (this.picker) {
                this._zone.run(function () {
                    _this.picker.instance.init();
                });
            }
            else if (!this.picker && !this.disabled) {
                setTimeout(function () {
                    _this._eventListeners = [
                        _this._renderer.listen('document', 'click', function (event) { return _this.onDocumentClick(event); }),
                        _this._renderer.listen('document', 'touchend', function (event) { return _this.onDocumentClick(event); })
                    ];
                });
                var options_1 = new PickerOptions();
                Object.assign(options_1, this._defaultOptions, {
                    hidePicker: function (event) {
                        _this.hidePicker();
                    },
                    updateNgModel: function (value) {
                        _this.value = value;
                        _this.onChange(value);
                    }
                });
                var optionalParams = [
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
                optionalParams.forEach(function (param) {
                    if (typeof _this[param] !== 'undefined') {
                        options_1[param] = _this[param];
                    }
                });
                var componentFactory = this._cfr.resolveComponentFactory(PickerComponent);
                var childInjector = i0.Injector.create([
                    {
                        provide: PickerOptions,
                        useValue: options_1
                    }
                ]);
                this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
                if (options_1.appendToBody) {
                    this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
                }
                this.onVisibleChange.emit(true);
            }
        };
        PickerDirective.prototype.hidePicker = function () {
            if (this.appendToBodyElement) {
                document.body.removeChild(this.appendToBodyElement);
                this.appendToBodyElement = null;
            }
            if (this.picker) {
                this.picker.destroy();
                delete this.picker;
                this.onVisibleChange.emit(false);
                this._eventListeners.forEach(function (fn) { return fn(); });
                this._eventListeners = [];
            }
        };
        PickerDirective.prototype.writeValue = function (value) {
            this.value = Array.isArray(value) ? value : [];
            if (this.picker) {
                this.picker.instance.options.value = this.value;
                this.showPicker();
                this.picker.instance.reloadPicker();
            }
        };
        PickerDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PickerDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        PickerDirective.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        PickerDirective.prototype.isPickerDataEqual = function (data1, data2) {
            if (!data1 && !data2) {
                return true;
            }
            if (!Array.isArray(data1) || !Array.isArray(data2) || data1.length !== data2.length) {
                return false;
            }
            for (var i = 0; i < data1.length; i++) {
                var item1 = data1[i];
                var item2 = data2[i];
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
        };
        return PickerDirective;
    }());
    PickerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[Picker], [nzm-picker]',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return PickerDirective; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    PickerDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef },
        { type: i0.ElementRef },
        { type: PickerOptions },
        { type: i0.ComponentFactoryResolver },
        { type: i0.Renderer2 },
        { type: i0.NgZone }
    ]; };
    PickerDirective.propDecorators = {
        data: [{ type: i0.Input }],
        cols: [{ type: i0.Input }],
        mask: [{ type: i0.Input }],
        title: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        okText: [{ type: i0.Input }],
        dismissText: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        cascade: [{ type: i0.Input }],
        appendToBody: [{ type: i0.Input }],
        indicatorStyle: [{ type: i0.Input }],
        onVisibleChange: [{ type: i0.Output }],
        onPickerChange: [{ type: i0.Output }],
        onDismiss: [{ type: i0.Output }],
        togglePicker: [{ type: i0.HostListener, args: ['click',] }]
    };

    var PickerService = /** @class */ (function (_super) {
        __extends(PickerService, _super);
        function PickerService() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.comRef = null;
            _this.defaultOptions = new PickerOptions();
            return _this;
        }
        PickerService.prototype.showPicker = function (config, confirmCallback, cancelCallback) {
            var _this = this;
            if (config === void 0) { config = this.defaultOptions; }
            var options = new PickerOptions();
            Object.assign(options, config, {
                hidePicker: function (event) {
                    _this.hidePicker();
                },
                confirm: function (event) {
                    if (confirmCallback) {
                        confirmCallback(event);
                    }
                },
                cancel: function () {
                    if (cancelCallback) {
                        cancelCallback();
                    }
                }
            });
            var childInjector = i0.Injector.create([
                {
                    provide: PickerOptions,
                    useValue: options
                }
            ]);
            this.comRef = this.showPopup(PickerComponent, childInjector);
            return this.comRef && this.comRef.instance;
        };
        PickerService.prototype.hidePicker = function () {
            this.hidePopup();
        };
        return PickerService;
    }(PopupService));
    PickerService.decorators = [
        { type: i0.Injectable }
    ];

    var PickerModule = /** @class */ (function () {
        function PickerModule() {
        }
        return PickerModule;
    }());
    PickerModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, i2.OverlayModule],
                    exports: [PickerComponent, PickerDirective],
                    declarations: [PickerComponent, PickerDirective],
                    providers: [PickerOptions, PopupService, PickerService]
                },] }
    ];

    var PickerViewComponent = /** @class */ (function (_super) {
        __extends(PickerViewComponent, _super);
        function PickerViewComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            _this.cols = 3;
            _this.indicatorStyle = {};
            _this.itemStyle = {};
            return _this;
        }
        PickerViewComponent.prototype.pickerViewInit = function () {
            this.options.data = this.data;
            this.options.cols = this.cols;
            this.options.cascade = this.cascade;
            this.init();
        };
        PickerViewComponent.prototype.init = function () {
            var _this = this;
            this.selectedTarget = [];
            if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
                this.dataForRender.push(this.generateArrayData(this.options.data));
            }
            if (this.options.value.length > 0) {
                this.getInitValueIndex(this.dataForRender);
            }
            else {
                for (var index = 0; index < this.dataForRender.length; index++) {
                    this.selectedTarget.push({ targetId: "" + index, currentY: 0 });
                }
            }
            setTimeout(function () {
                _this.reloadPicker();
            });
        };
        PickerViewComponent.prototype.writeValue = function (value) {
            if (value) {
                this.options.value = value;
                this.init();
            }
        };
        PickerViewComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PickerViewComponent.prototype.registerOnTouched = function (fn) { };
        PickerViewComponent.prototype.ngOnInit = function () {
            this.pickerViewInit();
        };
        PickerViewComponent.prototype.ngOnChanges = function (changes) {
            if (changes.cols) {
                this.dataForRender = [];
            }
            if (changes.data || changes.cols) {
                this.pickerViewInit();
            }
        };
        PickerViewComponent.prototype.ngAfterViewInit = function () {
            this.currentPicker = this.elementRef.nativeElement;
            this.reloadPicker();
        };
        return PickerViewComponent;
    }(PickerComponent));
    PickerViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'PickerView, nzm-picker-view',
                    template: "<div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n  <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n    <div #indicator class=\"am-picker-col-indicator \" [ngStyle]=\"indicatorStyle\"></div>\n    <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n    <div class=\"am-picker-col-content\">\n      <div *ngFor=\"let val of item; let i = index\" id=\"{{ i }}\" class=\"am-picker-col-item\" [ngStyle]=\"itemStyle\">\n        {{ val.label ? val.label : val }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return PickerViewComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    PickerViewComponent.propDecorators = {
        data: [{ type: i0.Input }],
        cols: [{ type: i0.Input }],
        cascade: [{ type: i0.Input }],
        indicatorStyle: [{ type: i0.Input }],
        itemStyle: [{ type: i0.Input }]
    };

    var PickerViewModule = /** @class */ (function () {
        function PickerViewModule() {
        }
        return PickerViewModule;
    }());
    PickerViewModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [forms.FormsModule, common.CommonModule, PickerModule, LocaleProviderModule],
                    exports: [PickerViewComponent],
                    declarations: [PickerViewComponent]
                },] }
    ];

    var ImagePickerComponent = /** @class */ (function () {
        function ImagePickerComponent() {
            this.prefixCls = 'am-image-picker';
            this.flexEl = [];
            this._accept = 'image/*';
            this._count = 4;
            this._selectable = true;
            this._files = [];
            this._multiple = false;
            this.capture = false;
            this.disableDelete = false;
            this.onFail = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
            this.onImageClick = new i0.EventEmitter();
            this.onAddImageClick = new i0.EventEmitter();
        }
        Object.defineProperty(ImagePickerComponent.prototype, "files", {
            get: function () {
                return this._files;
            },
            set: function (value) {
                this._files = value;
                this.sortItem();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImagePickerComponent.prototype, "accept", {
            get: function () {
                return this._accept;
            },
            set: function (value) {
                this._accept = value;
                this.sortItem();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImagePickerComponent.prototype, "length", {
            get: function () {
                return this._count;
            },
            set: function (value) {
                if (value > 0) {
                    this._count = value;
                }
                else {
                    this._count = 4;
                }
                this.sortItem();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImagePickerComponent.prototype, "multiple", {
            get: function () {
                return this._multiple;
            },
            set: function (value) {
                this._multiple = value;
                this.sortItem();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImagePickerComponent.prototype, "selectable", {
            get: function () {
                return this._selectable;
            },
            set: function (value) {
                this._selectable = value;
                this.sortItem();
            },
            enumerable: false,
            configurable: true
        });
        ImagePickerComponent.prototype.sortItem = function () {
            var _this = this;
            if (!this._files) {
                return;
            }
            var count = parseInt('' + this._count, 10);
            if (count <= 0) {
                count = 4;
            }
            var allEl = this._files.map(function (item) {
                return {
                    type: 'img',
                    backgroundImage: 'url(' + item.url + ')',
                    transform: 'rotate(' + _this.getRotation(item.orientation) + 'deg)'
                };
            });
            if (this._selectable) {
                allEl.push({
                    type: 'select',
                    backgroundImage: '',
                    transform: ''
                });
            }
            var length = allEl.length;
            if (length !== 0 && length % count !== 0) {
                var blankCount = count - (length % count);
                var fillBlankEl = [];
                for (var i = 0; i < blankCount; i++) {
                    fillBlankEl.push({
                        type: 'white',
                        backgroundImage: '',
                        transform: ''
                    });
                }
                allEl = allEl.concat(fillBlankEl);
            }
            this.flexEl = [];
            for (var i = 0; i < allEl.length / count; i++) {
                var rowEl = allEl.slice(i * count, i * count + count);
                this.flexEl.push(rowEl);
            }
        };
        ImagePickerComponent.prototype.addImage = function (imgItem) {
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
        };
        ImagePickerComponent.prototype.removeImage = function (index) {
            this._files.splice(index, 1);
            this.sortItem();
            this.onChange.emit({
                files: this._files,
                operationType: 'remove',
                index: index
            });
        };
        ImagePickerComponent.prototype.imageClick = function (index) {
            this.onImageClick.emit({
                index: index,
                files: this._files
            });
        };
        ImagePickerComponent.prototype.addImageClick = function (e) {
            this.onAddImageClick.emit(e);
        };
        ImagePickerComponent.prototype.parseFile = function (file, index) {
            var _this = this;
            var reader = new FileReader();
            reader.onload = function (e) {
                var dataURL = e.target.result;
                if (!dataURL) {
                    _this.onFail.emit("Fail to get the " + index + " image");
                    return;
                }
                var orientation = 1;
                _this.getOrientation(file, function (res) {
                    // -2: not jpeg , -1: not defined
                    if (res > 0) {
                        orientation = res;
                    }
                    _this.addImage({
                        url: dataURL,
                        orientation: orientation,
                        file: file
                    });
                });
            };
            reader.readAsDataURL(file);
        };
        ImagePickerComponent.prototype.fileChange = function (event) {
            var fileList = event.target.files;
            if (fileList && fileList.length) {
                for (var i = 0; i < fileList.length; i++) {
                    this.parseFile(fileList[i], i);
                }
            }
        };
        ImagePickerComponent.prototype.getRotation = function (orientation) {
            if (orientation === void 0) { orientation = 1; }
            var imgRotation = 0;
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
        };
        // https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
        ImagePickerComponent.prototype.getOrientation = function (file, callback) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var view = new DataView(e.target.result);
                if (view.getUint16(0, false) !== 0xffd8) {
                    return callback(-2);
                }
                var length = view.byteLength;
                var offset = 2;
                while (offset < length) {
                    var marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xffe1) {
                        var tmp = view.getUint32((offset += 2), false);
                        if (tmp !== 0x45786966) {
                            return callback(-1);
                        }
                        var little = view.getUint16((offset += 6), false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        var tags = view.getUint16(offset, little);
                        offset += 2;
                        for (var i = 0; i < tags; i++) {
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
        };
        return ImagePickerComponent;
    }());
    ImagePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ImagePicker, nzm-image-picker',
                    template: "<div class=\"{{ prefixCls }}-list\" role=\"group\">\n  <Flex *ngFor=\"let rowItem of flexEl; let i = index\">\n    <FlexItem *ngFor=\"let item of rowItem; let j = index\">\n      <div *ngIf=\"item && 'img' === item.type && item.backgroundImage\" class=\"{{ prefixCls }}-item\">\n        <div\n          role=\"button\"\n          *ngIf=\"!disableDelete\"\n          aria-label=\"Click and Remove this image\"\n          class=\"{{ prefixCls }}-item-remove\"\n          (click)=\"removeImage(i * length + j)\"\n        ></div>\n        <div\n          role=\"button\"\n          aria-label=\"Image can be clicked\"\n          class=\"{{ prefixCls }}-item-content\"\n          [ngStyle]=\"{ 'background-image': item.backgroundImage, transform: item.transform }\"\n          (click)=\"imageClick(i * length + j)\"\n        ></div>\n      </div>\n      <div\n        role=\"button\"\n        aria-label=\"Choose and add image\"\n        *ngIf=\"item && 'select' === item.type\"\n        class=\"{{ prefixCls }}-item {{ prefixCls }}-upload-btn\"\n        (click)=\"addImageClick($event)\"\n      >\n        <input\n          #fileSelectorInput\n          type=\"file\"\n          [accept]=\"accept\"\n          [multiple]=\"multiple\"\n          [attr.capture]=\"capture ? capture : null\"\n          (change)=\"fileChange($event)\"\n        />\n      </div>\n      <div *ngIf=\"item && 'white' === item.type\" class=\"{{ prefixCls }}-item-white\"></div>\n    </FlexItem>\n  </Flex>\n</div>\n"
                },] }
    ];
    ImagePickerComponent.ctorParameters = function () { return []; };
    ImagePickerComponent.propDecorators = {
        _fileSelectorInput: [{ type: i0.ViewChild, args: ['fileSelectorInput', { read: i0.ViewContainerRef },] }],
        capture: [{ type: i0.Input }],
        disableDelete: [{ type: i0.Input }],
        files: [{ type: i0.Input }],
        accept: [{ type: i0.Input }],
        length: [{ type: i0.Input }],
        multiple: [{ type: i0.Input }],
        selectable: [{ type: i0.Input }],
        onFail: [{ type: i0.Output }],
        onChange: [{ type: i0.Output }],
        onImageClick: [{ type: i0.Output }],
        onAddImageClick: [{ type: i0.Output }]
    };

    var ImagePickerModule = /** @class */ (function () {
        function ImagePickerModule() {
        }
        return ImagePickerModule;
    }());
    ImagePickerModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ImagePickerComponent],
                    exports: [ImagePickerComponent],
                    imports: [common.CommonModule, FlexModule]
                },] }
    ];

    var ResultComponent = /** @class */ (function () {
        function ResultComponent() {
            this.prefixCls = 'am-result';
            this.isTitleString = true;
            this.isMessageString = true;
            this.onButtonClick = new i0.EventEmitter();
            this.role = 'alert';
            this.amResult = true;
        }
        Object.defineProperty(ResultComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                if (this.isTemplateRef(value)) {
                    this.isTitleString = false;
                }
                else {
                    this.isTitleString = true;
                }
                this._title = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResultComponent.prototype, "message", {
            get: function () {
                return this._message;
            },
            set: function (value) {
                if (this.isTemplateRef(value)) {
                    this.isMessageString = false;
                }
                else {
                    this.isMessageString = true;
                }
                this._message = value;
            },
            enumerable: false,
            configurable: true
        });
        ResultComponent.prototype.buttonClick = function (event) {
            this.onButtonClick.emit(event);
        };
        ResultComponent.prototype.isTemplateRef = function (value) {
            if (value) {
                return value instanceof i0.TemplateRef;
            }
            return false;
        };
        return ResultComponent;
    }());
    ResultComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Result, nzm-result',
                    template: "<div *ngIf=\"img\" class=\"{{ prefixCls }}-pic\">\n  <ng-template [ngTemplateOutlet]=\"img\"></ng-template>\n</div>\n<div *ngIf=\"!img && imgUrl\" class=\"{{ prefixCls }}-pic\" [ngStyle]=\"{ backgroundImage: 'url(' + imgUrl + ')' }\"></div>\n<div *ngIf=\"title\" class=\"{{ prefixCls }}-title\">\n  <ng-template *ngIf=\"!isTitleString\" [ngTemplateOutlet]=\"title\"></ng-template>\n  <span *ngIf=\"isTitleString\">{{ title }}</span>\n</div>\n<div [ngClass]=\"prefixCls + '-message'\">\n  <ng-template *ngIf=\"!isMessageString\" [ngTemplateOutlet]=\"message\"></ng-template>\n  <span *ngIf=\"isMessageString\">{{ message }}</span>\n</div>\n<div *ngIf=\"buttonText\" class=\"{{ prefixCls }}-button\">\n  <a Button [type]=\"buttonType\" (click)=\"buttonClick($event)\">\n    {{ buttonText }}\n  </a>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    ResultComponent.ctorParameters = function () { return []; };
    ResultComponent.propDecorators = {
        title: [{ type: i0.Input }],
        imgUrl: [{ type: i0.Input }],
        buttonText: [{ type: i0.Input }],
        buttonType: [{ type: i0.Input }],
        img: [{ type: i0.Input }],
        message: [{ type: i0.Input }],
        onButtonClick: [{ type: i0.Output }],
        role: [{ type: i0.HostBinding, args: ['attr.role',] }],
        amResult: [{ type: i0.HostBinding, args: ['class.am-result',] }]
    };

    var ResultModule = /** @class */ (function () {
        function ResultModule() {
        }
        return ResultModule;
    }());
    ResultModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ResultComponent],
                    exports: [ResultComponent],
                    imports: [common.CommonModule, IconModule]
                },] }
    ];

    var RangeComponent = /** @class */ (function () {
        function RangeComponent(_elf) {
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
            this.onChange = new i0.EventEmitter();
            this.onAfterChange = new i0.EventEmitter();
            this.amWrapper = true;
            this._ngModelOnChange = function () { };
            this._ngModelOnTouched = function () { };
        }
        Object.defineProperty(RangeComponent.prototype, "min", {
            get: function () {
                return this._min;
            },
            set: function (value) {
                this._min = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (value) {
                this._max = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "step", {
            get: function () {
                return this._step;
            },
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "defaultValue", {
            set: function (value) {
                this._defaultValue = value;
                this._value = this._defaultValue;
                this.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "marks", {
            get: function () {
                return this._marks;
            },
            set: function (value) {
                this._marks = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "dots", {
            get: function () {
                return this._dots;
            },
            set: function (value) {
                this._dots = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "included", {
            get: function () {
                return this._included;
            },
            set: function (value) {
                this._included = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "count", {
            set: function (value) {
                this._count = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "allowCross", {
            set: function (value) {
                this._allowCross = value;
                this.setValueBound();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "pushable", {
            set: function (value) {
                this._pushable = value;
                if (this.verifyPushable()) {
                    this.setValueBound();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "handleStyle", {
            get: function () {
                return this._handleStyle;
            },
            set: function (value) {
                this._handleStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "trackStyle", {
            get: function () {
                return this._trackStyle;
            },
            set: function (value) {
                this._trackStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangeComponent.prototype, "railStyle", {
            get: function () {
                return this._railStyle;
            },
            set: function (value) {
                this._railStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        RangeComponent.prototype.setCls = function () {
            var _a;
            this.sliderCls = (_a = {},
                _a[this.prefixCls + "-disabled"] = this._disabled,
                _a);
        };
        RangeComponent.prototype.initialValue = function () {
            var minTemp = this._min;
            if (!this.verifyPushable()) {
                this._pushable = 0;
                console.warn('pushable设置无效，已大于有些value间隔，被强制设为0');
            }
            var initialValue = Array.apply(null, Array(this._count + 1)).map(function () {
                return minTemp;
            });
            this._defaultValue = this._defaultValue !== undefined ? this._defaultValue : initialValue;
            this._value = this._value !== undefined ? this._value : this._defaultValue;
            // 验证count值
            this._count = this._value.length - 1;
            // 验证value区间
            for (var i = 0; i < this._value.length; i++) {
                if (this._value[i] < this._min) {
                    this._value[i] = this._min;
                }
                else if (this._value[i] > this._max) {
                    this._value[i] = this._max;
                }
            }
            if (this._count > 0) {
                this.upperBound = Math.max.apply(Math, __spread(this._value));
                this.lowerBound = Math.min.apply(Math, __spread(this._value));
            }
        };
        RangeComponent.prototype.handleChange = function (e, i) {
            var temp = __spread(this._value);
            temp[i] = e;
            this.upperBound = Math.max.apply(Math, __spread(temp));
            this.lowerBound = Math.min.apply(Math, __spread(temp));
            this.setTrackStyle(temp);
            this.onChange.emit(temp);
        };
        RangeComponent.prototype.handleAfterChange = function (e, i) {
            var _this = this;
            setTimeout(function () {
                _this._value[i] = e;
                _this.upperBound = Math.max.apply(Math, __spread(_this._value));
                _this.lowerBound = Math.min.apply(Math, __spread(_this._value));
                _this.setTrackStyle(_this._value);
                _this.onAfterChange.emit(_this._value);
                _this._ngModelOnChange(_this._value);
                _this.setValueBound();
            }, 0);
        };
        RangeComponent.prototype.setTrackStyle = function (value) {
            if (value && value.length === this._count + 1) {
                value.sort(function (a, b) { return a - b; });
                for (var i = 0; i < this._count; i++) {
                    this.offset[i] = (value[i] * 100) / (this._max - this._min);
                    this.length[i] = ((value[i + 1] - value[i]) * 100) / (this._max - this._min);
                }
            }
        };
        RangeComponent.prototype.setValueBound = function () {
            this.maxBound = [];
            this.minBound = [];
            if ((this._allowCross && this._pushable === undefined) || this._handleCount <= 1) {
                for (var i = 0; i < this._handleCount; i++) {
                    this.maxBound[i] = this._max;
                    this.minBound[i] = this._min;
                }
            }
            else {
                if (this._pushable === undefined) {
                    this._pushable = 0;
                }
                for (var i = 0; i < this._handleCount; i++) {
                    this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
                    this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
                }
            }
        };
        RangeComponent.prototype.verifyPushable = function () {
            for (var i = 1; i < this._handleCount; i++) {
                var diff = this._value[i] - this._value[i - 1];
                if (diff < this._pushable) {
                    return false;
                }
            }
            return true;
        };
        RangeComponent.prototype.writeValue = function (value) {
            this.setValue(value, true);
        };
        RangeComponent.prototype.setValue = function (value, isWriteValue) {
            if (isWriteValue === void 0) { isWriteValue = false; }
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
        };
        RangeComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        RangeComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        RangeComponent.prototype.ngOnInit = function () {
            this.initialValue();
            this.setValueBound();
            this._handleCount = this._count + 1;
            this.setCls();
            var sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
            this.sliderLength = sliderCoords.width;
            this.sliderStart = sliderCoords.left;
        };
        return RangeComponent;
    }());
    RangeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Range , nzm-range',
                    template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    *ngFor=\"let off of offset; let i = index\"\n    [className]=\"'am-slider-track'\"\n    [included]=\"included\"\n    [style]=\"trackStyle[i]\"\n    [offset]=\"off\"\n    [length]=\"length[i]\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderSteps>\n  <SliderHandle\n    *ngFor=\"let val of value; let i = index\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [maxBound]=\"maxBound[i]\"\n    [minBound]=\"minBound[i]\"\n    [value]=\"val\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [sliderLength]=\"sliderLength\"\n    [sliderStart]=\"sliderStart\"\n    [handleStyle]=\"handleStyle[i]\"\n    (onChange)=\"handleChange($event, i)\"\n    (onAfterChange)=\"handleAfterChange($event, i)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderMarks>\n</div>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return RangeComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    RangeComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    RangeComponent.propDecorators = {
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        step: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        marks: [{ type: i0.Input }],
        dots: [{ type: i0.Input }],
        included: [{ type: i0.Input }],
        count: [{ type: i0.Input }],
        allowCross: [{ type: i0.Input }],
        pushable: [{ type: i0.Input }],
        handleStyle: [{ type: i0.Input }],
        trackStyle: [{ type: i0.Input }],
        railStyle: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onAfterChange: [{ type: i0.Output }],
        amWrapper: [{ type: i0.HostBinding, args: ['class.am-slider-wrapper',] }]
    };

    var SliderComponent = /** @class */ (function () {
        function SliderComponent(_elf) {
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
            this.onAfterChange = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
            this.amSliderWrapper = true;
            this._ngModelOnChange = function () { };
            this._ngModelOnTouched = function () { };
        }
        Object.defineProperty(SliderComponent.prototype, "min", {
            get: function () {
                return this._min;
            },
            set: function (value) {
                this._min = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (value) {
                this._max = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "step", {
            get: function () {
                return this._step;
            },
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "defaultValue", {
            set: function (value) {
                this._defaultValue = value;
                this.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
                this.setCls();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "marks", {
            get: function () {
                return this._marks;
            },
            set: function (value) {
                this._marks = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "dots", {
            get: function () {
                return this._dots;
            },
            set: function (value) {
                this._dots = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "included", {
            get: function () {
                return this._included;
            },
            set: function (value) {
                this._included = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "handleStyle", {
            get: function () {
                return this._handleStyle;
            },
            set: function (value) {
                this._handleStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "trackStyle", {
            get: function () {
                return this._trackStyle;
            },
            set: function (value) {
                this._trackStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderComponent.prototype, "railStyle", {
            get: function () {
                return this._railStyle;
            },
            set: function (value) {
                this._railStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        SliderComponent.prototype.setCls = function () {
            var _a;
            this.sliderCls = (_a = {},
                _a[this.prefixCls + "-disabled"] = this._disabled,
                _a);
        };
        SliderComponent.prototype.handleChange = function (e) {
            var _this = this;
            setTimeout(function () {
                _this.setTrack(e);
                _this._value = e;
            }, 10);
            this.onChange.emit(e);
            this._ngModelOnChange(e);
        };
        SliderComponent.prototype.handleAfterChange = function (e) {
            var _this = this;
            setTimeout(function () {
                _this.setTrack(e);
                _this._value = e;
            }, 10);
            this.onAfterChange.emit(e);
        };
        SliderComponent.prototype.valueRange = function () {
            if (this._value < this._min) {
                this._value = this._min;
            }
            if (this._value > this._max) {
                this._value = this._max;
            }
        };
        SliderComponent.prototype.ngOnInit = function () {
            this.setCls();
            this.setValue(this._value);
            var sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
            this.sliderLength = sliderCoords.width;
            this.sliderStart = sliderCoords.left;
        };
        SliderComponent.prototype.writeValue = function (value) {
            this.setValue(value, true);
        };
        SliderComponent.prototype.setValue = function (value, isWriteValue) {
            if (isWriteValue === void 0) { isWriteValue = false; }
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
        };
        SliderComponent.prototype.setTrack = function (e) {
            this.offset = 0;
            this.length = ((e - this._min) * 100) / (this._max - this._min);
        };
        SliderComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        SliderComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        return SliderComponent;
    }());
    SliderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Slider , nzm-slider',
                    template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    [className]=\"'am-slider-track'\"\n    [style]=\"trackStyle\"\n    [offset]=\"offset\"\n    [length]=\"length\"\n    [included]=\"included\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderSteps>\n  <SliderHandle\n    [max]=\"max\"\n    [min]=\"min\"\n    [value]=\"value\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [handleStyle]=\"handleStyle\"\n    [sliderStart]=\"sliderStart\"\n    [sliderLength]=\"sliderLength\"\n    (onChange)=\"handleChange($event)\"\n    (onAfterChange)=\"handleAfterChange($event)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderMarks>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return SliderComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    SliderComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    SliderComponent.propDecorators = {
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        step: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        defaultValue: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        marks: [{ type: i0.Input }],
        dots: [{ type: i0.Input }],
        included: [{ type: i0.Input }],
        handleStyle: [{ type: i0.Input }],
        trackStyle: [{ type: i0.Input }],
        railStyle: [{ type: i0.Input }],
        onAfterChange: [{ type: i0.Output }],
        onChange: [{ type: i0.Output }],
        amSliderWrapper: [{ type: i0.HostBinding, args: ['class.am-slider-wrapper',] }]
    };

    var SliderHandleComponent = /** @class */ (function () {
        function SliderHandleComponent(_elf, _sanitizer) {
            var _this = this;
            this._elf = _elf;
            this._sanitizer = _sanitizer;
            this._disabled = false;
            this._marks = {};
            this._isDraging = false;
            this.onChange = new i0.EventEmitter();
            this.onAfterChange = new i0.EventEmitter();
            this.mouseDown = function (event) {
                if (!_this._disabled && _this.isMouseTarget(event)) {
                    _this._startX = event.clientX;
                    _this._handleStatus = 'start';
                    _this._isDraging = true;
                    document.addEventListener('mousemove', _this.mouseMove, false);
                    document.addEventListener('mouseup', _this.mouseUp, false);
                    _this.pauseEvent(event);
                }
            };
            this.mouseMove = function (event) {
                if (!_this._disabled && _this._isDraging) {
                    _this.pauseEvent(event);
                    var pos = event.clientX;
                    _this._value = Math.round(_this.calcValueByPos(pos));
                    _this.left = _this.calcOffset(_this._value);
                    if (_this._oldValue !== _this._value) {
                        _this._oldValue = _this._value;
                        _this.onChange.emit(_this._value);
                    }
                }
            };
            this.mouseUp = function (event) {
                if (!_this._disabled && _this._isDraging) {
                    _this._handleStatus = 'end';
                    _this._isDraging = false;
                    var pos = event.clientX;
                    _this._value = Math.round(_this.calcValueByPos(pos));
                    _this.left = _this.calcOffset(_this._value);
                    _this.onAfterChange.emit(_this._value);
                }
            };
        }
        Object.defineProperty(SliderHandleComponent.prototype, "min", {
            set: function (value) {
                this._min = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "max", {
            set: function (value) {
                this._max = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "minBound", {
            set: function (value) {
                this._minBound = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "maxBound", {
            set: function (value) {
                this._maxBound = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "step", {
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "value", {
            set: function (value) {
                this._value = value;
                if (this._value) {
                    this.left = this.calcOffset(this._value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "disabled", {
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "sliderLength", {
            set: function (value) {
                this._sliderLength = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "sliderStart", {
            set: function (value) {
                this._sliderStart = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderHandleComponent.prototype, "handleStyle", {
            get: function () {
                return this._handleStyle;
            },
            set: function (value) {
                this._handleStyle = value;
            },
            enumerable: false,
            configurable: true
        });
        /* 手势操作 */
        SliderHandleComponent.prototype.panstart = function (event) {
            // event.preventDefault();
            if (!this._disabled) {
                this._startX = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
                this._handleStatus = 'start';
                this._isDraging = true;
            }
        };
        SliderHandleComponent.prototype.panmove = function (event) {
            event.preventDefault();
            if (!this._disabled && this._isDraging) {
                var pos = event.changedTouches[0].clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                if (this._oldValue !== this._value) {
                    this._oldValue = this._value;
                    this.onChange.emit(this._value);
                }
            }
        };
        SliderHandleComponent.prototype.panend = function (event) {
            event.preventDefault();
            if (!this._disabled && this._isDraging) {
                this._handleStatus = 'end';
                this._isDraging = false;
                var pos = event.changedTouches[0].clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                this.onAfterChange.emit(this._value);
            }
        };
        SliderHandleComponent.prototype.calcValueByPos = function (pos) {
            var offset = pos - this._sliderStart;
            var value = this.calcValue(offset);
            if (value <= this._minBound) {
                value = this._minBound;
            }
            if (value >= this._maxBound) {
                value = this._maxBound;
            }
            var closestPoint = this.getClosestPoint(value);
            return this._step === null ? closestPoint : parseFloat(closestPoint.toFixed(this.getPrecision(this._step)));
        };
        SliderHandleComponent.prototype.calcValue = function (offset) {
            var ratio = Math.abs(Math.max(offset, 0) / this._sliderLength);
            var value = ratio * (this._max - this._min) + this._min;
            return value;
        };
        SliderHandleComponent.prototype.getClosestPoint = function (val) {
            var points = Object.keys(this._marks).map(parseFloat);
            if (this._step !== null) {
                var closestStep = Math.round((val - this._min) / this._step) * this._step + this._min;
                points.push(closestStep);
            }
            var diffs = points.map(function (point) {
                return Math.abs(val - point);
            });
            return points[diffs.indexOf(Math.min.apply(Math, this.toConsumableArray(diffs)))];
        };
        SliderHandleComponent.prototype.getPrecision = function (step) {
            var stepString = step.toString();
            var precision = 0;
            if (stepString.indexOf('.') >= 0) {
                precision = stepString.length - stepString.indexOf('.') - 1;
            }
            return precision;
        };
        SliderHandleComponent.prototype.calcOffset = function (value) {
            var ratio = (value - this._min) / (this._max - this._min);
            return ratio * 100;
        };
        SliderHandleComponent.prototype.pauseEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        SliderHandleComponent.prototype.isMouseTarget = function (event) {
            var target = event.target;
            var parentFound = false;
            while (target !== null && !parentFound) {
                if (target === this._elf.nativeElement) {
                    parentFound = true;
                }
                target = target.parentElement;
            }
            return parentFound;
        };
        SliderHandleComponent.prototype.toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
                var arr2 = Array(arr.length);
                for (var i = 0; i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }
        };
        SliderHandleComponent.prototype.ngOnInit = function () {
            var self = this;
            this._elf.nativeElement.addEventListener('mousedown', this.mouseDown, false);
            this._handleOffsetX = this._elf.nativeElement.getBoundingClientRect().x;
            this.left = this.calcOffset(this._value);
            this._minBound = this._minBound === undefined ? this._min : this._minBound;
            this._maxBound = this._maxBound === undefined ? this._max : this._maxBound;
        };
        SliderHandleComponent.prototype.ngOnDestroy = function () {
            document.removeEventListener('mousemove', this.mouseMove, false);
            document.removeEventListener('mouseup', this.mouseUp, false);
        };
        return SliderHandleComponent;
    }());
    SliderHandleComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SliderHandle, nzm-slider-handle',
                    template: "<div role=\"slider\" class=\"am-slider-handle\" [ngStyle]=\"handleStyle\" [style.left.%]=\"left\"></div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SliderHandleComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: platformBrowser.DomSanitizer }
    ]; };
    SliderHandleComponent.propDecorators = {
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        minBound: [{ type: i0.Input }],
        maxBound: [{ type: i0.Input }],
        step: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        sliderLength: [{ type: i0.Input }],
        sliderStart: [{ type: i0.Input }],
        handleStyle: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onAfterChange: [{ type: i0.Output }],
        panstart: [{ type: i0.HostListener, args: ['touchstart', ['$event'],] }],
        panmove: [{ type: i0.HostListener, args: ['touchmove', ['$event'],] }],
        panend: [{ type: i0.HostListener, args: ['touchend', ['$event'],] }]
    };

    var SliderMarksComponent = /** @class */ (function () {
        function SliderMarksComponent(_elf) {
            this._elf = _elf;
            this.markArray = [];
            this._min = 0;
            this._max = 100;
            this._marks = {};
            this._included = true;
            this._className = 'am-slider-mark';
            this.onChange = new i0.EventEmitter();
            this.onAfterChange = new i0.EventEmitter();
        }
        Object.defineProperty(SliderMarksComponent.prototype, "min", {
            set: function (value) {
                if (value && value <= this._max) {
                    this._min = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "max", {
            set: function (value) {
                if (value && value >= this._min) {
                    this._max = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "marks", {
            set: function (value) {
                this._marks = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "included", {
            set: function (value) {
                this._included = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "upperBound", {
            set: function (value) {
                if (value && value !== this._upperBound) {
                    this._upperBound = value;
                    this.setActiveCls();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "lowerBound", {
            set: function (value) {
                if (value && value !== this.lowerBound) {
                    this._lowerBound = value;
                    this.setActiveCls();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderMarksComponent.prototype, "class", {
            get: function () {
                return this._className;
            },
            enumerable: false,
            configurable: true
        });
        SliderMarksComponent.prototype.getMarks = function (marksKeys) {
            var _this = this;
            this.markArray = [];
            marksKeys
                .map(parseFloat)
                .sort(function (a, b) { return a - b; })
                .map(function (point) {
                var _a;
                var markItem = {
                    markLabel: '',
                    point: '',
                    className: {},
                    style: {}
                };
                var markPoint = _this._marks[point];
                var markPointIsObject = typeof markPoint === 'object';
                var markLabel = markPointIsObject ? markPoint.label : markPoint;
                if (!markLabel && markLabel !== 0) {
                    return null;
                }
                var isActive = (!_this._included && point === _this._upperBound) ||
                    (_this._included && point <= _this._upperBound && point >= _this._lowerBound);
                var markClassName = (_a = {},
                    _a[_this._className + "-text"] = true,
                    _a[_this._className + "-text-active"] = isActive,
                    _a);
                var bottomStyle = {
                    marginBottom: '-50%',
                    bottom: ((point - _this._min) / _this._range) * 100 + "%"
                };
                var leftStyle = {
                    width: _this._markWidth + "%",
                    marginLeft: -_this._markWidth / 2 + "%",
                    left: ((point - _this._min) / _this._range) * 100 + "%"
                };
                var style = leftStyle;
                var markStyle = markPointIsObject ? Object.assign(Object.assign({}, style), markPoint.style) : style;
                markItem.markLabel = markLabel;
                markItem.point = point;
                markItem.className = Object.keys(markClassName).join(' ');
                markItem.style = markStyle;
                _this.markArray.push(markItem);
            });
        };
        SliderMarksComponent.prototype.setActiveCls = function () {
            var _a;
            for (var i = 0; i < this.markArray.length; i++) {
                var point = this.markArray[i].point;
                var isActive = (!this._included && point === this._upperBound) ||
                    (this._included && point <= this._upperBound && point >= this._lowerBound);
                this.markArray[i].className = (_a = {},
                    _a[this._className + "-text"] = true,
                    _a[this._className + "-text-active"] = isActive,
                    _a);
            }
        };
        SliderMarksComponent.prototype.setMarksLable = function () {
            for (var i = 0; i < this.markArray.length; i++) {
                var markEle = this._elf.nativeElement.getElementsByClassName(this._className + '-text')[i];
                markEle.innerHTML = this.markArray[i].markLabel;
            }
        };
        SliderMarksComponent.prototype.ngOnInit = function () {
            var marksKeys = Object.keys(this._marks);
            var marksCount = marksKeys.length;
            var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
            this._markWidth = unit * 0.9;
            this._range = this._max - this._min;
            this.getMarks(marksKeys);
        };
        SliderMarksComponent.prototype.ngAfterViewInit = function () {
            this.setMarksLable();
        };
        return SliderMarksComponent;
    }());
    SliderMarksComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SliderMarks, nzm-slider-marks',
                    template: "<span *ngFor=\"let item of markArray\" [ngClass]=\"item.className\" [ngStyle]=\"item.style\"> </span>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SliderMarksComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    SliderMarksComponent.propDecorators = {
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        marks: [{ type: i0.Input }],
        included: [{ type: i0.Input }],
        upperBound: [{ type: i0.Input }],
        lowerBound: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onAfterChange: [{ type: i0.Output }],
        class: [{ type: i0.HostBinding }]
    };

    var SliderStepsComponent = /** @class */ (function () {
        function SliderStepsComponent(_elf) {
            this._elf = _elf;
            this.prefixCls = 'am-slider';
            this.stepArray = [];
            this._min = 0;
            this._max = 100;
            this._marks = {};
            this._included = true;
            this._dots = false;
        }
        Object.defineProperty(SliderStepsComponent.prototype, "min", {
            set: function (value) {
                if (value && value <= this._max) {
                    this._min = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "max", {
            set: function (value) {
                if (value && value >= this._min) {
                    this._max = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "marks", {
            set: function (value) {
                this._marks = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "step", {
            set: function (value) {
                this._step = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "included", {
            set: function (value) {
                this._included = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "dots", {
            set: function (value) {
                this._dots = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "upperBound", {
            set: function (value) {
                if (value !== undefined && value !== this._upperBound) {
                    this._upperBound = value;
                    this.setActiveCls();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "lowerBound", {
            set: function (value) {
                if (value !== undefined && value !== this.lowerBound) {
                    this._lowerBound = value;
                    this.setActiveCls();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderStepsComponent.prototype, "class", {
            get: function () {
                return 'am-slider-step';
            },
            enumerable: false,
            configurable: true
        });
        SliderStepsComponent.prototype.calPoints = function () {
            var points = Object.keys(this._marks).map(parseFloat);
            if (this._dots) {
                for (var i = this._min; i <= this._max; i = i + this._step) {
                    if (points.indexOf(i) < 0) {
                        points.push(i);
                    }
                }
            }
            return points;
        };
        SliderStepsComponent.prototype.getSteps = function (points) {
            var _this = this;
            var range = this._max - this._min;
            this.stepArray = [];
            points.map(function (point) {
                var _a;
                var stepItem = {
                    stepStyle: {},
                    stepClass: {},
                    point: null
                };
                var offset = (Math.abs(point - _this._min) / range) * 100 + "%";
                var isActived = (!_this._included && point === _this._upperBound) ||
                    (_this._included && point <= _this._upperBound && point >= _this._lowerBound);
                var style = Object.assign({ left: offset }, _this._dotStyle);
                if (isActived) {
                    style = Object.assign(Object.assign({}, style), _this._activeDotStyle);
                }
                var pointClassName = (_a = {},
                    _a[_this.prefixCls + "-dot"] = true,
                    _a[_this.prefixCls + "-dot-active"] = isActived,
                    _a);
                stepItem.point = point;
                stepItem.stepStyle = style;
                stepItem.stepClass = pointClassName;
                _this.stepArray.push(stepItem);
            });
        };
        SliderStepsComponent.prototype.setActiveCls = function () {
            var _a;
            for (var i = 0; i < this.stepArray.length; i++) {
                var point = this.stepArray[i].point;
                var isActived = (!this._included && point === this._upperBound) ||
                    (this._included && point <= this._upperBound && point >= this._lowerBound);
                this.stepArray[i].stepClass = (_a = {},
                    _a[this.prefixCls + "-dot"] = true,
                    _a[this.prefixCls + "-dot-active"] = isActived,
                    _a);
            }
        };
        SliderStepsComponent.prototype.ngOnInit = function () {
            var points = this.calPoints();
            this.getSteps(points);
        };
        return SliderStepsComponent;
    }());
    SliderStepsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SliderSteps, nzm-slider-steps',
                    template: "<span *ngFor=\"let item of stepArray\" [ngClass]=\"item.stepClass\" [ngStyle]=\"item.stepStyle\"> </span>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SliderStepsComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    SliderStepsComponent.propDecorators = {
        min: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        marks: [{ type: i0.Input }],
        step: [{ type: i0.Input }],
        included: [{ type: i0.Input }],
        dots: [{ type: i0.Input }],
        upperBound: [{ type: i0.Input }],
        lowerBound: [{ type: i0.Input }],
        class: [{ type: i0.HostBinding }]
    };

    var SliderTrackComponent = /** @class */ (function () {
        function SliderTrackComponent(_elf, _sanitizer) {
            this._elf = _elf;
            this._sanitizer = _sanitizer;
            this.prefixCls = 'am-slider';
            this._included = true;
        }
        Object.defineProperty(SliderTrackComponent.prototype, "className", {
            get: function () {
                return this._className;
            },
            set: function (value) {
                this._className = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderTrackComponent.prototype, "included", {
            get: function () {
                return this._included;
            },
            set: function (value) {
                this._included = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderTrackComponent.prototype, "offset", {
            set: function (value) {
                this._offset = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderTrackComponent.prototype, "length", {
            set: function (value) {
                this._length = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SliderTrackComponent.prototype, "style", {
            set: function (value) {
                this._style = value;
            },
            enumerable: false,
            configurable: true
        });
        SliderTrackComponent.prototype.ngOnChanges = function () {
            var positonStyle = {
                left: this._offset + "%",
                width: this._length + "%"
            };
            this.elStyle = Object.assign(Object.assign({}, this._style), positonStyle);
        };
        return SliderTrackComponent;
    }());
    SliderTrackComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SliderTrack, nzm-slider-track',
                    template: "<div *ngIf=\"included\" [ngClass]=\"className\" [ngStyle]=\"elStyle\"></div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SliderTrackComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: platformBrowser.DomSanitizer }
    ]; };
    SliderTrackComponent.propDecorators = {
        className: [{ type: i0.Input }],
        included: [{ type: i0.Input }],
        offset: [{ type: i0.Input }],
        length: [{ type: i0.Input }],
        style: [{ type: i0.Input }]
    };

    var SliderModule = /** @class */ (function () {
        function SliderModule() {
        }
        return SliderModule;
    }());
    SliderModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
                    declarations: [
                        SliderComponent,
                        SliderHandleComponent,
                        SliderMarksComponent,
                        SliderStepsComponent,
                        SliderTrackComponent
                    ],
                    imports: [common.CommonModule]
                },] }
    ];

    var RangeModule = /** @class */ (function () {
        function RangeModule() {
        }
        return RangeModule;
    }());
    RangeModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [RangeComponent],
                    declarations: [RangeComponent],
                    imports: [common.CommonModule, SliderModule]
                },] }
    ];

    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent(_localeProviderService) {
            this._localeProviderService = _localeProviderService;
            this.prefixCls = 'am-pagination';
            this.hasSetLocale = false;
            this._locale = {
                prevText: '',
                nextText: ''
            };
            this._unsubscribe$ = new rxjs.Subject();
            this.mode = 'button';
            this.current = 1;
            this.total = 0;
            this.simple = false;
            this.disabled = false;
            this.onChange = new i0.EventEmitter();
        }
        Object.defineProperty(PaginationComponent.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            set: function (v) {
                this._locale = v;
                this.hasSetLocale = true;
                this._unsubscribe$.next();
                this._unsubscribe$.complete();
            },
            enumerable: false,
            configurable: true
        });
        PaginationComponent.prototype.isTemplateRef = function (key) {
            return key instanceof i0.TemplateRef;
        };
        PaginationComponent.prototype.onClick = function (p) {
            this.current = p;
            this.onChange.emit(p);
        };
        PaginationComponent.prototype.getNumber = function (p) {
            return new Array(p);
        };
        PaginationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._localeProviderService.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                if (!_this.hasSetLocale) {
                    _this._locale = _this._localeProviderService.getLocaleSubObj('Pagination');
                }
            });
        };
        PaginationComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return PaginationComponent;
    }());
    PaginationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Pagination, nzm-pagination',
                    template: "<div class=\"{{ prefixCls }} {{ prefixCls }}-align-center\">\n  <Flex *ngIf=\"mode === 'button'\">\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-prev\">\n      <a Button [inline]=\"true\" [disabled]=\"current <= 1 || disabled\" (onClick)=\"onClick(current - 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.prevText)\">\n          {{ locale.prevText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.prevText)\" [ngTemplateOutlet]=\"locale.prevText\"></ng-template>\n      </a>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap\" aria-live=\"assertive\" *ngIf=\"!simple\">\n      <span class=\"active\">{{ current }}</span\n      >/\n      <span>{{ total }}</span>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-next\">\n      <a Button [inline]=\"true\" [disabled]=\"current >= total || disabled\" (onClick)=\"onClick(current + 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.nextText)\">\n          {{ locale.nextText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.nextText)\" [ngTemplateOutlet]=\"locale.nextText\"></ng-template>\n      </a>\n    </FlexItem>\n  </Flex>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'number'\">\n    <span class=\"active\">{{ current }}</span\n    >/<span>{{ total }}</span>\n  </div>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'pointer'\">\n    <div\n      *ngFor=\"let number of getNumber(total); let i = index\"\n      class=\"{{ prefixCls }}-wrap-dot {{ current === i + 1 ? prefixCls + '-wrap-dot-active' : '' }}\"\n    >\n      <span></span>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    PaginationComponent.ctorParameters = function () { return [
        { type: LocaleProviderService }
    ]; };
    PaginationComponent.propDecorators = {
        mode: [{ type: i0.Input }],
        current: [{ type: i0.Input }],
        total: [{ type: i0.Input }],
        simple: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }]
    };

    var PaginationModule = /** @class */ (function () {
        function PaginationModule() {
        }
        return PaginationModule;
    }());
    PaginationModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule],
                    declarations: [PaginationComponent],
                    exports: [PaginationComponent]
                },] }
    ];

    var TagComponent = /** @class */ (function () {
        function TagComponent() {
            this.prefixCls = 'am-tag';
            this.closed = false;
            this.wrapCls = {};
            this._small = false;
            this._closable = false;
            this._selected = false;
            this._disabled = false;
            this.onChange = new i0.EventEmitter();
            this.onClose = new i0.EventEmitter();
            this.afterClose = new i0.EventEmitter();
        }
        Object.defineProperty(TagComponent.prototype, "small", {
            get: function () {
                return this._small;
            },
            set: function (v) {
                this._small = v;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TagComponent.prototype, "closable", {
            get: function () {
                return this._closable;
            },
            set: function (v) {
                this._closable = v;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TagComponent.prototype, "selected", {
            set: function (v) {
                this._selected = v;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TagComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (v) {
                this._disabled = v;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        TagComponent.prototype.onClick = function () {
            if (this._disabled) {
                return;
            }
            this._selected = !this._selected;
            this.onChange.emit(this._selected);
            this.setClassMap();
        };
        TagComponent.prototype.onTagClose = function () {
            this.onClose.emit();
            this.closed = true;
            this.afterClose.emit();
        };
        TagComponent.prototype.setClassMap = function () {
            var _a;
            this.wrapCls = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-normal"] = !this._disabled && (!this._selected || this._small || this._closable),
                _a[this.prefixCls + "-small"] = this._small,
                _a[this.prefixCls + "-active"] = this._selected && !this._disabled && !this._small && !this._closable,
                _a[this.prefixCls + "-disabled"] = this._disabled,
                _a[this.prefixCls + "-closable"] = this._closable,
                _a);
        };
        TagComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        return TagComponent;
    }());
    TagComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Tag, nzm-tag',
                    template: "<div *ngIf=\"!closed\" [ngClass]=\"wrapCls\" (click)=\"onClick()\">\n  <div class=\"{{ prefixCls }}-text\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"closable && !disabled && !small\"\n    role=\"button\"\n    class=\"{{ prefixCls }}-close\"\n    aria-label=\"remove tag\"\n    (click)=\"onTagClose()\"\n  >\n    <Icon aria-hidden=\"true\" [type]=\"'cross-circle'\" [size]=\"'xs'\"></Icon>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    TagComponent.ctorParameters = function () { return []; };
    TagComponent.propDecorators = {
        small: [{ type: i0.Input }],
        closable: [{ type: i0.Input }],
        selected: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onClose: [{ type: i0.Output }],
        afterClose: [{ type: i0.Output }]
    };

    var TagModule = /** @class */ (function () {
        function TagModule() {
        }
        return TagModule;
    }());
    TagModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule],
                    declarations: [TagComponent],
                    exports: [TagComponent]
                },] }
    ];

    var MenuComponent = /** @class */ (function () {
        function MenuComponent(_localeProviderService) {
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
            this._unsubscribe$ = new rxjs.Subject();
            this.level = 2;
            this.value = [];
            this.height = document.documentElement.clientHeight / 2;
            this.multiSelect = false;
            this.onChange = new i0.EventEmitter();
            this.onOk = new i0.EventEmitter();
            this.onCancel = new i0.EventEmitter();
        }
        Object.defineProperty(MenuComponent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (v) {
                this._data = v;
                this.initData();
            },
            enumerable: false,
            configurable: true
        });
        MenuComponent.prototype.onMenuOk = function () {
            this.onOk.emit(this.value);
        };
        MenuComponent.prototype.onMenuCancel = function () {
            this.onCancel.emit();
        };
        MenuComponent.prototype.getNewFsv = function () {
            var firstValue = '';
            if (this.value && this.value.length) {
                firstValue = this.value[0];
            }
            else if (this._data && this._data.length && !this._data[0].isLeaf) {
                firstValue = this._data[0].value;
            }
            return firstValue;
        };
        MenuComponent.prototype.onClickFirstLevelItem = function (dataItem) {
            this.firstLevelSelectValue = dataItem.value;
            if (dataItem.isLeaf && this.onChange) {
                this.onChange.emit([dataItem.value]);
            }
            this.initData();
        };
        MenuComponent.prototype.onClickSubMenuItem = function (dataItem) {
            var _this = this;
            this.value = this.getSelectValue(dataItem);
            this.initData();
            setTimeout(function () {
                _this.onChange.emit(_this.value);
            }, 300);
        };
        MenuComponent.prototype.getSelectValue = function (dataItem) {
            if (this.multiSelect) {
                if (this.value && this.value.length > 0) {
                    if (this.level === 2 && this.value[0] !== this.firstLevelSelectValue) {
                        return [this.firstLevelSelectValue, [dataItem.value]];
                    }
                    else {
                        if (this.level == 1) {
                            var chosenValues = Array.from(this.value);
                            var existIndex = chosenValues.indexOf(dataItem.value);
                            if (existIndex === -1) {
                                chosenValues.push(dataItem.value);
                            }
                            else {
                                chosenValues.splice(existIndex, 1);
                            }
                            return chosenValues;
                        }
                        else {
                            var chosenValues = Array.from(this.value[1]);
                            var existIndex = chosenValues.indexOf(dataItem.value);
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
        };
        MenuComponent.prototype.initData = function () {
            var _this = this;
            this.subMenuData = this._data;
            if (this.level === 2) {
                var parent = this._data;
                if (this.firstLevelSelectValue && this.firstLevelSelectValue !== '') {
                    parent = this._data.filter(function (dataItem) { return dataItem.value === _this.firstLevelSelectValue; });
                }
                if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                    this.subMenuData = parent[0].children;
                }
                else {
                    this.subMenuData = [];
                }
            }
            var subValue = (this.value && this.value.length > 0 && __spread(this.value)) || [];
            if (this.level === 2 && subValue.length > 1) {
                subValue.shift();
                if (this.multiSelect) {
                    subValue = subValue[0];
                }
            }
            this.subSelInitItem = this.subMenuData
                .filter(function (dataItem) { return subValue.indexOf(dataItem.value) !== -1; })
                .map(function (item) {
                return item.value;
            });
            var parentValue = this.value && this.value.length > 1 && this.level === 2 ? this.value[0] : null;
            this.showSelect = true;
            if (this.level === 2 && parentValue !== this.firstLevelSelectValue) {
                this.showSelect = false;
            }
        };
        MenuComponent.prototype.getClass = function (dataItem) {
            return this.dataItemSelected(dataItem) ? this.prefixCls + '-selected' : '';
        };
        MenuComponent.prototype.dataItemSelected = function (dataItem) {
            return dataItem.value === this.firstLevelSelectValue;
        };
        MenuComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._localeProviderService.localeChange.pipe(operators.takeUntil(this._unsubscribe$)).subscribe(function (_) {
                _this.locale = _this._localeProviderService.getLocaleSubObj('Menu');
            });
            this.firstLevelSelectValue = this.getNewFsv();
            this.heightStyle = {
                height: this.height + 'px'
            };
            this.initData();
        };
        MenuComponent.prototype.ngOnDestroy = function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        return MenuComponent;
    }());
    MenuComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Menu, nzm-menu',
                    template: "<Flex class=\"{{ prefixCls }}\" [ngStyle]=\"heightStyle\" [direction]=\"'column'\" [align]=\"'stretch'\">\n  <Flex class=\"{{ menuSelectContanerPrefixCls }}\" [align]=\"'start'\">\n    <FlexItem *ngIf=\"level == 2\">\n      <List role=\"tablist\">\n        <ListItem\n          role=\"tab\"\n          *ngFor=\"let dataItem of data; let i = index\"\n          [className]=\"getClass(dataItem)\"\n          (click)=\"onClickFirstLevelItem(dataItem)\"\n        >\n          {{ dataItem.label }}\n        </ListItem>\n      </List>\n    </FlexItem>\n\n    <FlexItem role=\"tabpanel\" aria-hidden=\"false\" class=\"{{ menuSelectContanerPrefixCls }}-submenu\">\n      <SubMenu\n        [subMenuPrefixCls]=\"subMenuPrefixCls\"\n        [radioPrefixCls]=\"radioPrefixCls\"\n        [subMenuData]=\"subMenuData\"\n        [selItem]=\"subSelInitItem\"\n        [showSelect]=\"showSelect\"\n        [multiSelect]=\"multiSelect\"\n        (onSel)=\"onClickSubMenuItem($event)\"\n      >\n      </SubMenu>\n    </FlexItem>\n  </Flex>\n\n  <div *ngIf=\"multiSelect\" class=\"{{ multiSelectMenuBtnsCls }}\">\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" (onClick)=\"onMenuCancel()\">\n      {{ locale.cancelText }}\n    </a>\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" [type]=\"'primary'\" (onClick)=\"onMenuOk()\">\n      {{ locale.okText }}\n    </a>\n  </div>\n</Flex>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    MenuComponent.ctorParameters = function () { return [
        { type: LocaleProviderService }
    ]; };
    MenuComponent.propDecorators = {
        data: [{ type: i0.Input }],
        level: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        height: [{ type: i0.Input }],
        multiSelect: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }],
        onOk: [{ type: i0.Output }],
        onCancel: [{ type: i0.Output }]
    };

    var SubMenuComponent = /** @class */ (function () {
        function SubMenuComponent() {
            this.prefixCls = 'am-sub-menu';
            this.onSel = new i0.EventEmitter();
        }
        Object.defineProperty(SubMenuComponent.prototype, "subMenuPrefixCls", {
            get: function () {
                return this._subMenuPrefixCls;
            },
            set: function (v) {
                this._subMenuPrefixCls = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SubMenuComponent.prototype, "subMenuData", {
            get: function () {
                return this._subMenuData;
            },
            set: function (v) {
                this._subMenuData = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SubMenuComponent.prototype, "multiSelect", {
            get: function () {
                return this._multiSelect;
            },
            set: function (v) {
                this._multiSelect = v;
            },
            enumerable: false,
            configurable: true
        });
        SubMenuComponent.prototype.onClick = function (dataItem) {
            this.onSel.emit(dataItem);
        };
        SubMenuComponent.prototype.selected = function (dataItem) {
            return this.showSelect && (this.selItem.length > 0 && this.selItem.indexOf(dataItem.value) !== -1);
        };
        SubMenuComponent.prototype.getClass = function (dataItem) {
            var name = this.radioPrefixCls + '-item ';
            name += this.selected(dataItem) ? this._subMenuPrefixCls + '-item-selected' : '';
            name += dataItem.disabled ? this._subMenuPrefixCls + '-item-disabled' : '';
            return name;
        };
        SubMenuComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this._subMenuData.map(function (item) {
                item.checked = _this.selected(item);
            });
        };
        return SubMenuComponent;
    }());
    SubMenuComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SubMenu, nzm-sub-menu',
                    template: "<List class=\"{{ subMenuPrefixCls }}\" style=\"padding: 0\">\n  <ListItem\n    *ngFor=\"let dataItem of subMenuData; let i = index\"\n    key=\"i\"\n    [className]=\"getClass(dataItem)\"\n    [extra]=\"extra\"\n  >\n    {{ dataItem.label }}\n\n    <ng-template #extra>\n      <label\n        Radio\n        *ngIf=\"!multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n      <label\n        Checkbox\n        *ngIf=\"multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n    </ng-template>\n  </ListItem>\n</List>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SubMenuComponent.ctorParameters = function () { return []; };
    SubMenuComponent.propDecorators = {
        onSel: [{ type: i0.Output }],
        radioPrefixCls: [{ type: i0.Input }],
        showSelect: [{ type: i0.Input }],
        selItem: [{ type: i0.Input }],
        subMenuPrefixCls: [{ type: i0.Input }],
        subMenuData: [{ type: i0.Input }],
        multiSelect: [{ type: i0.Input }]
    };

    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        return MenuModule;
    }());
    MenuModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        FlexModule,
                        ListModule,
                        RadioModule,
                        CheckboxModule,
                        ButtonModule,
                        LocaleProviderModule,
                        forms.FormsModule
                    ],
                    exports: [MenuComponent, SubMenuComponent],
                    declarations: [MenuComponent, SubMenuComponent]
                },] }
    ];

    var DrawerComponent = /** @class */ (function () {
        function DrawerComponent(_el) {
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
            this.onOpenChange = new i0.EventEmitter();
            this.am = true;
            this.left = this._position === 'left';
            this.right = this._position === 'right';
            this.top = this._position == 'top';
            this.bottom = this._position == 'bottom';
            this.dockedCls = this._docked;
            this.openCls = this._open;
        }
        Object.defineProperty(DrawerComponent.prototype, "docked", {
            get: function () {
                return this._docked;
            },
            set: function (v) {
                this._docked = v;
                this.dockedCls = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DrawerComponent.prototype, "open", {
            get: function () {
                return this._open;
            },
            set: function (v) {
                this._open = v;
                this.openCls = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DrawerComponent.prototype, "position", {
            set: function (v) {
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
            },
            enumerable: false,
            configurable: true
        });
        DrawerComponent.prototype.onOverlayClicked = function () {
            if (this._open) {
                this.onOpenChange.emit(true);
            }
        };
        DrawerComponent.prototype.isTouching = function () {
            return this.touchIdentifier !== null;
        };
        DrawerComponent.prototype.onTouchStart = function (event) {
            var touch = event.changedTouches[0];
            this.touchIdentifier = touch.identifier;
            this.touchStartX = touch.clientX;
            this.touchStartY = touch.clientY;
            this.touchCurrentX = touch.clientX;
            this.touchCurrentY = touch.clientY;
        };
        DrawerComponent.prototype.onTouchMove = function (ev) {
            for (var ind = 0; ind < ev.changedTouches.length; ind++) {
                if (ev.changedTouches[ind].identifier === this.touchIdentifier) {
                    this.touchCurrentX = ev.changedTouches[ind].clientX;
                    this.touchCurrentY = ev.changedTouches[ind].clientY;
                    break;
                }
            }
            this.update();
        };
        DrawerComponent.prototype.onTouchEnd = function () {
            var touchWidth = this.touchSidebarWidth();
            if (!this._open && touchWidth > this.dragToggleDistance) {
                this.onOpenChange.emit(!this._open);
            }
            var touchHeight = this.touchSidebarHeight();
            if (!this._open && touchHeight > this.dragToggleDistance) {
                this.onOpenChange.emit(!this._open);
            }
            this.touchIdentifier = null;
            this.touchStartX = null;
            this.touchStartY = null;
            this.touchCurrentX = null;
            this.touchCurrentY = null;
            this.update();
        };
        DrawerComponent.prototype.saveSidebarSize = function () {
            var sidebar = this._el.nativeElement.querySelector('#sidebar');
            var dragHandle = this._el.nativeElement.querySelector('#dragHandle');
            var width = sidebar.offsetWidth;
            var height = sidebar.offsetHeight;
            var sidebarTop = this.getOffset(sidebar).top;
            var dragHandleTop = this.getOffset(dragHandle).top;
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
        };
        DrawerComponent.prototype.touchSidebarWidth = function () {
            if (this._position === 'right') {
                return Math.min(window.innerWidth - this.touchCurrentX, this.sidebarWidth);
            }
            if (this._position === 'left') {
                return Math.min(this.touchCurrentX, this.sidebarWidth);
            }
        };
        DrawerComponent.prototype.touchSidebarHeight = function () {
            if (this._position === 'bottom') {
                return Math.min(this._el.nativeElement.offsetHeight - this.touchCurrentY + this._el.nativeElement.offsetTop, this.sidebarHeight);
            }
            if (this._position === 'top') {
                return Math.min(this.touchCurrentY - this.dragHandleTop, this.sidebarHeight);
            }
        };
        DrawerComponent.prototype.renderStyle = function (_a) {
            var sidebarStyle = _a.sidebarStyle, isTouching = _a.isTouching, overlayStyle = _a.overlayStyle, contentStyle = _a.contentStyle;
            if (this._position === 'right' || this._position === 'left') {
                sidebarStyle.transform = "translateX(0%)";
                sidebarStyle.WebkitTransform = "translateX(0%)";
                if (isTouching) {
                    var percentage = this.touchSidebarWidth() / this.sidebarWidth;
                    // slide open to what we dragged
                    if (this._position === 'right') {
                        sidebarStyle.transform = "translateX(" + (1 - percentage) * 100 + "%)";
                        sidebarStyle.WebkitTransform = "translateX(" + (1 - percentage) * 100 + "%)";
                    }
                    if (this._position === 'left') {
                        sidebarStyle.transform = "translateX(-" + (1 - percentage) * 100 + "%)";
                        sidebarStyle.WebkitTransform = "translateX(-" + (1 - percentage) * 100 + "%)";
                    }
                    overlayStyle.opacity = percentage;
                    overlayStyle.visibility = 'visible';
                }
                if (contentStyle) {
                    contentStyle[this._position] = this.sidebarWidth + "px";
                }
            }
            if (this._position === 'top' || this._position === 'bottom') {
                sidebarStyle.transform = "translateY(0%)";
                sidebarStyle.WebkitTransform = "translateY(0%)";
                if (isTouching) {
                    var percentage = this.touchSidebarHeight() / this.sidebarHeight;
                    if (this._position === 'bottom') {
                        sidebarStyle.transform = "translateY(" + (1 - percentage) * 100 + "%)";
                        sidebarStyle.WebkitTransform = "translateY(" + (1 - percentage) * 100 + "%)";
                    }
                    if (this._position === 'top') {
                        sidebarStyle.transform = "translateY(-" + (1 - percentage) * 100 + "%)";
                        sidebarStyle.WebkitTransform = "translateY(-" + (1 - percentage) * 100 + "%)";
                    }
                    overlayStyle.opacity = percentage;
                    overlayStyle.visibility = 'visible';
                }
                if (contentStyle) {
                    contentStyle[this._position] = this.sidebarHeight + "px";
                }
            }
        };
        DrawerComponent.prototype.update = function () {
            var sidebarStyle = Object.assign({}, this.sidebarStyle);
            var contentStyle = Object.assign({}, this.contentStyle);
            var overlayStyle = Object.assign({}, this.overlayStyle);
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
        };
        DrawerComponent.prototype.getOffset = function (ele) {
            var el = ele;
            var _x = 0;
            var _y = 0;
            while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return { top: _y, left: _x };
        };
        DrawerComponent.prototype.ngAfterViewChecked = function () {
            if (!this.isTouching()) {
                this.saveSidebarSize();
            }
        };
        DrawerComponent.prototype.ngOnChanges = function () {
            this.update();
        };
        return DrawerComponent;
    }());
    DrawerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'Drawer, nzm-drawer',
                    template: "<div class=\"am-drawer-sidebar\" [ngStyle]=\"sidebarStyleFinal\" id=\"sidebar\">\n  <ng-template [ngTemplateOutlet]=\"sidebar\"></ng-template>\n</div>\n<div\n  role=\"presentation\"\n  class=\"{{ prefixCls }}-overlay\"\n  ref=\"overlay\"\n  [ngStyle]=\"overlayStyleFinal\"\n  (click)=\"onOverlayClicked()\"\n></div>\n<div class=\"{{ prefixCls }}-content\" [ngStyle]=\"contentStyleFinal\" ref=\"content\">\n  <div\n    *ngIf=\"touch && touchSupported && !open && !docked && enableDragHandle\"\n    id=\"dragHandle\"\n    class=\"{{ prefixCls }}-draghandle\"\n    [ngStyle]=\"dragHandleStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (touchcancle)=\"onTouchEnd()\"\n  ></div>\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    DrawerComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    DrawerComponent.propDecorators = {
        sidebar: [{ type: i0.Input }],
        sidebarStyle: [{ type: i0.Input }],
        contentStyle: [{ type: i0.Input }],
        overlayStyle: [{ type: i0.Input }],
        dragHandleStyle: [{ type: i0.Input }],
        transitions: [{ type: i0.Input }],
        touch: [{ type: i0.Input }],
        enableDragHandle: [{ type: i0.Input }],
        dragToggleDistance: [{ type: i0.Input }],
        docked: [{ type: i0.Input }],
        open: [{ type: i0.Input }],
        position: [{ type: i0.Input }],
        onOpenChange: [{ type: i0.Output }],
        am: [{ type: i0.HostBinding, args: ['class.am-drawer',] }],
        left: [{ type: i0.HostBinding, args: ['class.am-drawer-left',] }],
        right: [{ type: i0.HostBinding, args: ['class.am-drawer-right',] }],
        top: [{ type: i0.HostBinding, args: ['class.am-drawer-top',] }],
        bottom: [{ type: i0.HostBinding, args: ['class.am-drawer-bottom',] }],
        dockedCls: [{ type: i0.HostBinding, args: ['class.am-drawer-docked',] }],
        openCls: [{ type: i0.HostBinding, args: ['class.am-drawer-open',] }]
    };

    var DrawerModule = /** @class */ (function () {
        function DrawerModule() {
        }
        return DrawerModule;
    }());
    DrawerModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [DrawerComponent],
                    exports: [DrawerComponent]
                },] }
    ];

    var SwipeActionComponent = /** @class */ (function () {
        function SwipeActionComponent() {
            var _this = this;
            this.prefixCls = 'am-swipe';
            this.wrapCls = {};
            this._swiping = false;
            this._openedLeft = false;
            this._openedRight = false;
            this.left = [];
            this.right = [];
            this.autoClose = false;
            this.disabled = false;
            this.onOpen = new i0.EventEmitter();
            this.onClose = new i0.EventEmitter();
            this.onCloseSwipe = function (ev) {
                if (!(_this._openedLeft || _this._openedRight)) {
                    return;
                }
                var pNode = ev.target.closest("." + _this.prefixCls + "-actions");
                if (!pNode) {
                    _this.close();
                }
            };
        }
        SwipeActionComponent.prototype.setClassMap = function () {
            var _a;
            this.wrapCls = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-swiping"] = this._swiping,
                _a);
        };
        SwipeActionComponent.prototype.close = function () {
            if (this._openedLeft || this._openedRight) {
                this.onClose.emit();
            }
            this.setBtnStyle(0);
            this._openedLeft = false;
            this._openedRight = false;
        };
        SwipeActionComponent.prototype.setBtnStyle = function (value) {
            if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
                this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
                this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
            }
            var limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
            var contentLeft = this.getContentEasing(value, limit);
            this.content.nativeElement.style.left = contentLeft + "px";
            this.cover.nativeElement.style.display = Math.abs(value) > 0 ? 'block' : 'none';
            this.cover.nativeElement.style.left = contentLeft + "px";
        };
        SwipeActionComponent.prototype.getContentEasing = function (value, limit) {
            return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
        };
        SwipeActionComponent.prototype.onTouchStart = function (e) {
            this._startX = e.changedTouches[0].clientX;
            this._swiping = true;
        };
        SwipeActionComponent.prototype.onTouchMove = function (e) {
            var deltaX = e.changedTouches[0].clientX - this._startX;
            this._needShowRight = deltaX < -5 && this.right.length > 0;
            this._needShowLeft = deltaX > 5 && this.left.length > 0;
            if (this.leftBtnRef) {
                this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? 'hidden' : 'visible';
            }
            if (this.rightBtnRef) {
                this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? 'hidden' : 'visible';
            }
            this.setBtnStyle(deltaX);
        };
        SwipeActionComponent.prototype.onTouchEnd = function (e) {
            var deltaX = e.changedTouches[0].clientX - this._startX;
            var needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
            var needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;
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
        };
        SwipeActionComponent.prototype.doOpenLeft = function () {
            this.open(this._btnsLeftWidth, true, false);
        };
        SwipeActionComponent.prototype.doOpenRight = function () {
            this.open(-this._btnsRightWidth, false, true);
        };
        SwipeActionComponent.prototype.onBtnClick = function (ev, btn) {
            var onPress = btn.onPress;
            if (onPress) {
                onPress(ev);
            }
            if (this.autoClose) {
                this.close();
            }
        };
        SwipeActionComponent.prototype.open = function (value, openedLeft, openedRight) {
            this.onOpen.emit();
            this._openedLeft = openedLeft;
            this._openedRight = openedRight;
            this.setBtnStyle(value);
        };
        SwipeActionComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        SwipeActionComponent.prototype.ngAfterViewInit = function () {
            this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
            this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
            document.body.addEventListener('touchstart', this.onCloseSwipe, true);
        };
        SwipeActionComponent.prototype.ngOnDestroy = function () {
            document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
        };
        return SwipeActionComponent;
    }());
    SwipeActionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'SwipeAction, nzm-swipe-action',
                    template: "<div *ngIf=\"(left.length != 0 || right.length != 0) && !disabled\" [ngClass]=\"wrapCls\">\n  <div class=\"{{ prefixCls }}-cover\" #coverRef></div>\n  <div *ngIf=\"left && left.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-left\" #leftBtnRef>\n    <div\n      *ngFor=\"let btn of left\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"right && right.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-right\" #rightBtnRef>\n    <div\n      *ngFor=\"let btn of right\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"{{ prefixCls }}-content\"\n    #contentRef\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  </div>\n</div>\n<div *ngIf=\"!((left.length != 0 || right.length != 0) && !disabled)\" class=\"{{ prefixCls }}-content\" #contentRef>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n",
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    SwipeActionComponent.ctorParameters = function () { return []; };
    SwipeActionComponent.propDecorators = {
        leftBtnRef: [{ type: i0.ViewChild, args: ['leftBtnRef',] }],
        rightBtnRef: [{ type: i0.ViewChild, args: ['rightBtnRef',] }],
        content: [{ type: i0.ViewChild, args: ['contentRef',] }],
        cover: [{ type: i0.ViewChild, args: ['coverRef',] }],
        left: [{ type: i0.Input }],
        right: [{ type: i0.Input }],
        autoClose: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        onOpen: [{ type: i0.Output }],
        onClose: [{ type: i0.Output }]
    };

    var SwipeActionModule = /** @class */ (function () {
        function SwipeActionModule() {
        }
        return SwipeActionModule;
    }());
    SwipeActionModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [SwipeActionComponent],
                    declarations: [SwipeActionComponent],
                    providers: []
                },] }
    ];

    var PullToRefreshComponent = /** @class */ (function () {
        function PullToRefreshComponent(ele) {
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
            this.onRefresh = new i0.EventEmitter();
            this.refresh = true;
            this.container = true;
            this.refreshUp = this._direction === 'up' || this._direction === '';
            this.refreshDown = this._direction === 'down' || this._direction === '';
        }
        Object.defineProperty(PullToRefreshComponent.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                this._direction = value;
                this.refreshUp = this._direction === 'up' || this._direction === '';
                this.refreshDown = this._direction === 'down' || this._direction === '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PullToRefreshComponent.prototype, "headerIndicator", {
            get: function () {
                return this._headerIndicator;
            },
            set: function (value) {
                Object.assign(this._headerIndicator, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PullToRefreshComponent.prototype, "footerIndicator", {
            get: function () {
                return this._footerIndicator;
            },
            set: function (value) {
                Object.assign(this._footerIndicator, value);
            },
            enumerable: false,
            configurable: true
        });
        PullToRefreshComponent.prototype.touchstart = function (e) {
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
        };
        PullToRefreshComponent.prototype.touchmove = function (e) {
            if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
                if (this.ele.nativeElement.scrollTop > 0) {
                    return;
                }
                var distanceY = e.changedTouches[0].clientY - this.startY;
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
                var distanceY = e.changedTouches[0].clientY - this.startY;
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
        };
        PullToRefreshComponent.prototype.touchend = function (e) {
            var _this = this;
            if (!this.startY || this.state.drag === false) {
                return;
            }
            var distanceY = e.changedTouches[0].clientY - this.startY;
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
                setTimeout(function () {
                    _this.state.currentState = 'finish';
                    if (_this._ngModelOnChange) {
                        _this._ngModelOnChange(_this.state);
                    }
                    if (_this._direction === 'down' || (_this._direction === '' && !_this._endReach)) {
                        _this.onRefresh.emit('down');
                    }
                    else {
                        _this.translateY(-_this.distanceToRefresh - 1);
                        _this.onRefresh.emit('up');
                    }
                    setTimeout(function () {
                        _this.state.currentState = 'deactivate';
                        if (_this._ngModelOnChange) {
                            _this._ngModelOnChange(_this.state);
                        }
                        _this.translateY(0);
                    }, 0);
                }, 500);
            }
            else {
                this.translateY(0);
            }
        };
        PullToRefreshComponent.prototype.touchcancel = function () {
            this.translateY(0);
        };
        PullToRefreshComponent.prototype.scroll = function (evt) {
            var _this = this;
            this._endTime = Date.now();
            var contentOffset = evt.target.scrollTop;
            this._lastContentOffset = contentOffset;
            if (this._direction === '') {
                if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight === evt.target.scrollHeight) {
                    setTimeout(function () {
                        _this._endReach = true;
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
                setTimeout(function () {
                    if (_this.endReachedRefresh) {
                        _this.onRefresh.emit('endReachedRefresh');
                    }
                    if (_this.refreshing) {
                        _this.state.currentState = 'finish';
                        if (_this._ngModelOnChange) {
                            _this._ngModelOnChange(_this.state);
                        }
                    }
                }, 500);
            }
            else {
                setTimeout(function () {
                    if (_this.refreshing) {
                        _this.state.currentState = 'finish';
                        if (_this._ngModelOnChange) {
                            _this._ngModelOnChange(_this.state);
                        }
                    }
                }, 500);
            }
        };
        PullToRefreshComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        PullToRefreshComponent.prototype.translateY = function (distanceY) {
            this.transtionCls = 'am-pull-to-refresh-transition';
            this.style = {
                '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
                transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
            };
        };
        PullToRefreshComponent.prototype.writeValue = function (value) {
            if (value !== null) {
                this.state = value;
            }
        };
        PullToRefreshComponent.prototype.registerOnChange = function (fn) {
            this._ngModelOnChange = fn;
        };
        PullToRefreshComponent.prototype.registerOnTouched = function (fn) {
            this._ngModelOnTouched = fn;
        };
        return PullToRefreshComponent;
    }());
    PullToRefreshComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'PullToRefresh, nzm-pull-to-refresh',
                    template: "<div class=\"am-pull-to-refresh-content-wrapper\">\n  <div class=\"am-pull-to-refresh-content\" [ngClass]=\"transtionCls\" [ngStyle]=\"style\">\n    <div *ngIf=\"refreshDown\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(headerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"headerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(headerIndicator[state.currentState])\">{{\n        headerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n    <div #pullToRefresh>\n      <ng-content></ng-content>\n      <div\n        *ngIf=\"direction === 'down' && endReachedRefresh\"\n        class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\"\n      >\n        <ng-template\n          *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n          [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n        ></ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n          footerIndicator[state.currentState]\n        }}</ng-container>\n      </div>\n    </div>\n    <div *ngIf=\"refreshUp\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n        footerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return PullToRefreshComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    PullToRefreshComponent.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    PullToRefreshComponent.propDecorators = {
        _pullToRefresh: [{ type: i0.ViewChild, args: ['pullToRefresh', { read: i0.ViewContainerRef, static: true },] }],
        distanceToRefresh: [{ type: i0.Input }],
        damping: [{ type: i0.Input }],
        endReachedRefresh: [{ type: i0.Input }],
        refreshing: [{ type: i0.Input }],
        direction: [{ type: i0.Input }],
        headerIndicator: [{ type: i0.Input }],
        footerIndicator: [{ type: i0.Input }],
        onRefresh: [{ type: i0.Output }],
        refresh: [{ type: i0.HostBinding, args: ['class.am-pull-to-refresh',] }],
        container: [{ type: i0.HostBinding, args: ['class.super-container',] }],
        refreshUp: [{ type: i0.HostBinding, args: ['class.am-pull-to-refresh-up',] }],
        refreshDown: [{ type: i0.HostBinding, args: ['class.am-pull-to-refresh-down',] }],
        touchstart: [{ type: i0.HostListener, args: ['touchstart', ['$event'],] }],
        touchmove: [{ type: i0.HostListener, args: ['touchmove', ['$event'],] }],
        touchend: [{ type: i0.HostListener, args: ['touchend', ['$event'],] }],
        touchcancel: [{ type: i0.HostListener, args: ['touchcancel',] }],
        scroll: [{ type: i0.HostListener, args: ['scroll', ['$event'],] }]
    };

    var PullToRefreshModule = /** @class */ (function () {
        function PullToRefreshModule() {
        }
        return PullToRefreshModule;
    }());
    PullToRefreshModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, IconModule, forms.FormsModule, forms.ReactiveFormsModule],
                    exports: [PullToRefreshComponent],
                    declarations: [PullToRefreshComponent]
                },] }
    ];

    var NgZorroAntdMobileModule = /** @class */ (function () {
        function NgZorroAntdMobileModule() {
        }
        NgZorroAntdMobileModule.forRoot = function () {
            return {
                ngModule: NgZorroAntdMobileModule
            };
        };
        return NgZorroAntdMobileModule;
    }());
    NgZorroAntdMobileModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionGroupComponent = AccordionGroupComponent;
    exports.AccordionModule = AccordionModule;
    exports.AccordionService = AccordionService;
    exports.Action = Action;
    exports.ActionSheet = ActionSheetService;
    exports.ActionSheetComponent = ActionSheetComponent;
    exports.ActionSheetModule = ActionSheetModule;
    exports.ActionSheetOptions = ActionSheetOptions;
    exports.ActionSheetRef = ActionSheetRef;
    exports.ActionSheetService = ActionSheetService;
    exports.ActionSheetWithOptions = ActionSheetWithOptions;
    exports.ActivityIndicatorComponent = ActivityIndicatorComponent;
    exports.ActivityIndicatorModule = ActivityIndicatorModule;
    exports.AgreeItemComponent = AgreeItemComponent;
    exports.AlertOptions = AlertOptions;
    exports.BadgeComponent = BadgeComponent;
    exports.BadgeModule = BadgeModule;
    exports.BriefComponent = BriefComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CalendarComponent = CalendarComponent;
    exports.CalendarConfirmPanelComponent = CalendarConfirmPanelComponent;
    exports.CalendarDatePickerComponent = CalendarDatePickerComponent;
    exports.CalendarHeaderComponent = CalendarHeaderComponent;
    exports.CalendarModule = CalendarModule;
    exports.CalendarShortcutPanelComponent = CalendarShortcutPanelComponent;
    exports.CalendarSingleMonthComponent = CalendarSingleMonthComponent;
    exports.CalendarTimePickerComponent = CalendarTimePickerComponent;
    exports.CalendarWeekPanelComponent = CalendarWeekPanelComponent;
    exports.CardBodyComponent = CardBodyComponent;
    exports.CardComponent = CardComponent;
    exports.CardFooterComponent = CardFooterComponent;
    exports.CardHeaderComponent = CardHeaderComponent;
    exports.CardModule = CardModule;
    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.CarouselSlideComponent = CarouselSlideComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxItemComponent = CheckboxItemComponent;
    exports.CheckboxModule = CheckboxModule;
    exports.CustomInputComponent = CustomInputComponent;
    exports.CustomInputService = CustomInputService;
    exports.CustomKeyboardComponent = CustomKeyboardComponent;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatePickerDirective = DatePickerDirective;
    exports.DatePickerModule = DatePickerModule;
    exports.DatePickerOptions = DatePickerOptions;
    exports.DatePickerViewComponent = DatePickerViewComponent;
    exports.DatePickerViewModule = DatePickerViewModule;
    exports.DefaultTabBarComponent = DefaultTabBarComponent;
    exports.DotIndicatorComponent = DotIndicatorComponent;
    exports.DrawerComponent = DrawerComponent;
    exports.DrawerModule = DrawerModule;
    exports.FlexComponent = FlexComponent;
    exports.FlexItemComponent = FlexItemComponent;
    exports.FlexModule = FlexModule;
    exports.GridComponent = GridComponent;
    exports.GridModule = GridModule;
    exports.IconComponent = IconComponent;
    exports.IconModule = IconModule;
    exports.ImagePickerComponent = ImagePickerComponent;
    exports.ImagePickerModule = ImagePickerModule;
    exports.InputItemComponent = InputItemComponent;
    exports.InputItemModule = InputItemModule;
    exports.LOCAL_PROVIDER_TOKEN = LOCAL_PROVIDER_TOKEN;
    exports.ListComponent = ListComponent;
    exports.ListItemComponent = ListItemComponent;
    exports.ListModule = ListModule;
    exports.LocaleProviderModule = LocaleProviderModule;
    exports.LocaleProviderPipe = LocaleProviderPipe;
    exports.LocaleProviderService = LocaleProviderService;
    exports.MenuComponent = MenuComponent;
    exports.MenuModule = MenuModule;
    exports.Modal = ModalService;
    exports.ModalBaseOptions = ModalBaseOptions;
    exports.ModalComponent = ModalComponent;
    exports.ModalModule = ModalModule;
    exports.ModalOptions = ModalOptions;
    exports.ModalRef = ModalRef;
    exports.ModalService = ModalService;
    exports.ModalServiceComponent = ModalServiceComponent;
    exports.NavBarComponent = NavBarComponent;
    exports.NavBarModule = NavBarModule;
    exports.NgZorroAntdMobileModule = NgZorroAntdMobileModule;
    exports.NgZorroAntdMobilePipesModule = NgZorroAntdMobilePipesModule;
    exports.NoticeBarComponent = NoticeBarComponent;
    exports.NoticeBarModule = NoticeBarModule;
    exports.PaginationComponent = PaginationComponent;
    exports.PaginationModule = PaginationModule;
    exports.Picker = PickerService;
    exports.PickerComponent = PickerComponent;
    exports.PickerDirective = PickerDirective;
    exports.PickerModule = PickerModule;
    exports.PickerOptions = PickerOptions;
    exports.PickerRef = PickerRef;
    exports.PickerService = PickerService;
    exports.PickerViewComponent = PickerViewComponent;
    exports.PickerViewModule = PickerViewModule;
    exports.PopoverComponent = PopoverComponent;
    exports.PopoverComponentOptions = PopoverComponentOptions;
    exports.PopoverDirective = PopoverDirective;
    exports.PopoverItemComponent = PopoverItemComponent;
    exports.PopoverItemModule = PopoverItemModule;
    exports.PopoverModule = PopoverModule;
    exports.PopoverOptions = PopoverOptions;
    exports.PopoverOptionsFactory = PopoverOptionsFactory;
    exports.ProgressComponent = ProgressComponent;
    exports.ProgressModule = ProgressModule;
    exports.PullToRefreshComponent = PullToRefreshComponent;
    exports.PullToRefreshModule = PullToRefreshModule;
    exports.RadioComponent = RadioComponent;
    exports.RadioItemComponent = RadioItemComponent;
    exports.RadioItemGroupComponent = RadioItemGroupComponent;
    exports.RadioModule = RadioModule;
    exports.RangeComponent = RangeComponent;
    exports.RangeModule = RangeModule;
    exports.ResultComponent = ResultComponent;
    exports.ResultModule = ResultModule;
    exports.SafeHTMLPipe = SafeHTMLPipe;
    exports.SearchBarComponent = SearchBarComponent;
    exports.SearchBarModule = SearchBarModule;
    exports.SegmentedControlComponent = SegmentedControlComponent;
    exports.SegmentedControlModule = SegmentedControlModule;
    exports.ShareActionSheetWithOptions = ShareActionSheetWithOptions;
    exports.ShareOption = ShareOption;
    exports.SliderComponent = SliderComponent;
    exports.SliderHandleComponent = SliderHandleComponent;
    exports.SliderMarksComponent = SliderMarksComponent;
    exports.SliderModule = SliderModule;
    exports.SliderStepsComponent = SliderStepsComponent;
    exports.SliderTrackComponent = SliderTrackComponent;
    exports.StepComponent = StepComponent;
    exports.StepperComponent = StepperComponent;
    exports.StepperModule = StepperModule;
    exports.StepsComponent = StepsComponent;
    exports.StepsModule = StepsModule;
    exports.SubMenuComponent = SubMenuComponent;
    exports.SwipeActionComponent = SwipeActionComponent;
    exports.SwipeActionModule = SwipeActionModule;
    exports.SwitchComponent = SwitchComponent;
    exports.SwitchModule = SwitchModule;
    exports.TabBarComponent = TabBarComponent;
    exports.TabBarItemComponent = TabBarItemComponent;
    exports.TabBarModule = TabBarModule;
    exports.TabPaneBodyComponent = TabPaneBodyComponent;
    exports.TabPaneComponent = TabPaneComponent;
    exports.TabsComponent = TabsComponent;
    exports.TabsModule = TabsModule;
    exports.TagComponent = TagComponent;
    exports.TagModule = TagModule;
    exports.TextareaItemComponent = TextareaItemComponent;
    exports.TextareaItemModule = TextareaItemModule;
    exports.Toast = ToastService;
    exports.ToastComponent = ToastComponent;
    exports.ToastModule = ToastModule;
    exports.ToastOptions = ToastOptions;
    exports.ToastService = ToastService;
    exports.WhiteSpaceComponent = WhiteSpaceComponent;
    exports.WhiteSpaceModule = WhiteSpaceModule;
    exports.WingBlankComponent = WingBlankComponent;
    exports.WingBlankModule = WingBlankModule;
    exports.da_DK = da_DK;
    exports.en_US = en_US;
    exports.formatDate = formatDate;
    exports.mergeDateTime = mergeDateTime;
    exports.ru_RU = ru_RU;
    exports.sv_SE = sv_SE;
    exports.zh_CN = zh_CN;
    exports.ɵa = RADIO_ITEM_GROUP_VALUE_ACCESSOR;
    exports.ɵb = NZ_BUTTON_DIRECTIVES;
    exports.ɵc = LOCALE_PROVIDER_SERVICE_FACTORY;
    exports.ɵd = LOCALE_PROVIDER_SERVICE_PROVIDER;
    exports.ɵe = IconHandler;
    exports.ɵf = TouchFeedbackModule;
    exports.ɵg = TouchFeedbackDirective;
    exports.ɵh = PopupService;
    exports.ɵi = CalendarDatePickerBaseComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-mobile.umd.js.map
