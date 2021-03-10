import { Component, Input, Output, EventEmitter, ViewChild, HostBinding, Renderer2, ElementRef, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isTemplateRef } from '../core/util/check';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './custom-input/custom-input.component';
import * as ɵngcc3 from '@angular/forms';

const _c0 = ["lableContent"];
const _c1 = ["inputElement"];
function InputItemComponent_3_ng_template_0_Template(rf, ctx) { }
function InputItemComponent_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, InputItemComponent_3_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.content);
} }
function InputItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.content);
} }
function InputItemComponent_CustomInput_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "CustomInput", 6);
    ɵngcc0.ɵɵlistener("onChange", function InputItemComponent_CustomInput_6_Template_CustomInput_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.inputChange($event); })("onBlur", function InputItemComponent_CustomInput_6_Template_CustomInput_onBlur_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.inputBlur(ctx_r11.value); })("onFocus", function InputItemComponent_CustomInput_6_Template_CustomInput_onFocus_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.inputFocus(ctx_r12.value); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r3.value)("defaultValue", ctx_r3.defaultValue)("placeholder", ctx_r3.placeholder)("disabled", ctx_r3.disabled)("editable", ctx_r3.editable)("fontColor", ctx_r3.fontColor)("moneyKeyboardAlign", ctx_r3.moneyKeyboardAlign)("setFocus", ctx_r3.setFocus)("maxLength", ctx_r3.maxLength);
} }
function InputItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 7, 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function InputItemComponent_div_7_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.value = $event; })("ngModelChange", function InputItemComponent_div_7_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.inputChange($event); })("compositionstart", function InputItemComponent_div_7_Template_input_compositionstart_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.compositionStart(); })("compositionend", function InputItemComponent_div_7_Template_input_compositionend_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.compositionEnd(); })("blur", function InputItemComponent_div_7_Template_input_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.inputBlur(ctx_r19.value); })("focus", function InputItemComponent_div_7_Template_input_focus_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.inputFocus(ctx_r20.value); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("color", ctx_r4.fontColor);
    ɵngcc0.ɵɵproperty("type", ctx_r4.type)("name", ctx_r4.name)("required", ctx_r4.required)("ngModel", ctx_r4.value)("defaultValue", ctx_r4.defaultValue)("placeholder", ctx_r4.placeholder)("disabled", ctx_r4.disabled)("readOnly", !ctx_r4.editable)("autofocus", ctx_r4.autoFocus)("maxlength", ctx_r4.maxLength)("pattern", ctx_r4.pattern);
} }
function InputItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("click", function InputItemComponent_div_8_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.clearInput(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-clear");
} }
function InputItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("click", function InputItemComponent_div_9_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.errorClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-error-extra");
} }
function InputItemComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r25.extra);
} }
function InputItemComponent_div_10_2_ng_template_0_Template(rf, ctx) { }
function InputItemComponent_div_10_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, InputItemComponent_div_10_2_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r26.extra);
} }
function InputItemComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("click", function InputItemComponent_div_10_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.extraClick($event); });
    ɵngcc0.ɵɵtemplate(1, InputItemComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, InputItemComponent_div_10_2_Template, 1, 1, undefined, 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r7.prefixCls, "-extra");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.ngTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.ngTemplate);
} }
export class InputItemComponent {
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
InputItemComponent.ɵfac = function InputItemComponent_Factory(t) { return new (t || InputItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
InputItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputItemComponent, selectors: [["InputItem"], ["nzm-input-item"]], viewQuery: function InputItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
        ɵngcc0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lableRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElementRef = _t.first);
    } }, hostVars: 10, hostBindings: function InputItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-input-item", ctx.clsItem)("am-input-disabled", ctx.clsDisabled)("am-input-error", ctx.clsError)("am-input-focus", ctx.clsFocus)("am-input-android,", ctx.clsAndroid);
    } }, inputs: { compositionFilter: "compositionFilter", nzRequired: "nzRequired", type: "type", value: "value", defaultValue: "defaultValue", placeholder: "placeholder", editable: "editable", disabled: "disabled", clear: "clear", maxLength: "maxLength", error: "error", extra: "extra", labelNumber: "labelNumber", updatePlaceholder: "updatePlaceholder", prefixListCls: "prefixListCls", name: "name", moneyKeyboardAlign: "moneyKeyboardAlign", locale: "locale", fontColor: "fontColor", focus: "focus", content: "content" }, outputs: { onChange: "onChange", onBlur: "onBlur", onFocus: "onFocus", onErrorClick: "onErrorClick", onExtraClick: "onExtraClick" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputItemComponent),
                multi: true
            }
        ])], decls: 11, vars: 12, consts: [[3, "ngClass"], ["lableContent", ""], [4, "ngIf"], [3, "value", "defaultValue", "placeholder", "disabled", "editable", "fontColor", "moneyKeyboardAlign", "setFocus", "maxLength", "onChange", "onBlur", "onFocus", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "value", "defaultValue", "placeholder", "disabled", "editable", "fontColor", "moneyKeyboardAlign", "setFocus", "maxLength", "onChange", "onBlur", "onFocus"], [2, "outline", "none", 3, "type", "name", "required", "ngModel", "defaultValue", "placeholder", "disabled", "readOnly", "autofocus", "maxlength", "pattern", "ngModelChange", "compositionstart", "compositionend", "blur", "focus"], ["inputElement", ""], [3, "click"]], template: function InputItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(3, InputItemComponent_3_Template, 1, 1, undefined, 2);
        ɵngcc0.ɵɵtemplate(4, InputItemComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 0);
        ɵngcc0.ɵɵtemplate(6, InputItemComponent_CustomInput_6_Template, 1, 9, "CustomInput", 3);
        ɵngcc0.ɵɵtemplate(7, InputItemComponent_div_7_Template, 3, 13, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, InputItemComponent_div_8_Template, 1, 3, "div", 4);
        ɵngcc0.ɵɵtemplate(9, InputItemComponent_div_9_Template, 1, 3, "div", 4);
        ɵngcc0.ɵɵtemplate(10, InputItemComponent_div_10_Template, 3, 5, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixListCls, "-line");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.labelCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.content));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.content));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.controlCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === "money");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type !== "money");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.clear && ctx.editable && !ctx.disabled && (ctx.value && ctx.value.length > 0));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extra !== "");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.CustomInputComponent, ɵngcc3.DefaultValueAccessor, ɵngcc3.RequiredValidator, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc3.MaxLengthValidator, ɵngcc3.PatternValidator], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputItemComponent, [{
        type: Component,
        args: [{
                selector: 'InputItem, nzm-input-item',
                template: "<div class=\"{{ prefixListCls }}-line\">\n  <div #lableContent [ngClass]=\"labelCls\">\n    <ng-template *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-template>\n    <ng-container *ngIf=\"!isTemplateRef(content)\">{{ content }}</ng-container>\n  </div>\n  <div [ngClass]=\"controlCls\">\n    <CustomInput\n      *ngIf=\"type === 'money'\"\n      [value]=\"value\"\n      [defaultValue]=\"defaultValue\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [editable]=\"editable\"\n      [fontColor]=\"fontColor\"\n      [moneyKeyboardAlign]=\"moneyKeyboardAlign\"\n      [setFocus]=\"setFocus\"\n      [maxLength]=\"maxLength\"\n      (onChange)=\"inputChange($event)\"\n      (onBlur)=\"inputBlur(value)\"\n      (onFocus)=\"inputFocus(value)\"\n    >\n    </CustomInput>\n    <div *ngIf=\"type !== 'money'\">\n      <input\n        #inputElement\n        style=\"outline:none\"\n        [type]=\"type\"\n        [name]=\"name\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        [defaultValue]=\"defaultValue\"\n        [placeholder]=\"placeholder\"\n        [disabled]=\"disabled\"\n        [readOnly]=\"!editable\"\n        [autofocus]=\"autoFocus\"\n        [maxlength]=\"maxLength\"\n        [pattern]=\"pattern\"\n        [style.color]=\"fontColor\"\n        (ngModelChange)=\"inputChange($event)\"\n        (compositionstart)=\"compositionStart()\"\n        (compositionend)=\"compositionEnd()\"\n        (blur)=\"inputBlur(value)\"\n        (focus)=\"inputFocus(value)\"\n      />\n    </div>\n  </div>\n  <div\n    *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n    class=\"{{ prefixCls }}-clear\"\n    (click)=\"clearInput()\"\n  ></div>\n  <div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n  <div *ngIf=\"extra !== ''\" class=\"{{ prefixCls }}-extra\" (click)=\"extraClick($event)\">\n    <ng-container *ngIf=\"!ngTemplate\">{{ extra }}</ng-container>\n    <ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputItemComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { compositionFilter: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onErrorClick: [{
            type: Output
        }], onExtraClick: [{
            type: Output
        }], clsItem: [{
            type: HostBinding,
            args: ['class.am-input-item']
        }], clsDisabled: [{
            type: HostBinding,
            args: ['class.am-input-disabled']
        }], clsError: [{
            type: HostBinding,
            args: ['class.am-input-error']
        }], clsFocus: [{
            type: HostBinding,
            args: ['class.am-input-focus']
        }], clsAndroid: [{
            type: HostBinding,
            args: ['class.am-input-android,']
        }], nzRequired: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], editable: [{
            type: Input
        }], disabled: [{
            type: Input
        }], clear: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], error: [{
            type: Input
        }], extra: [{
            type: Input
        }], labelNumber: [{
            type: Input
        }], updatePlaceholder: [{
            type: Input
        }], prefixListCls: [{
            type: Input
        }], name: [{
            type: Input
        }], moneyKeyboardAlign: [{
            type: Input
        }], locale: [{
            type: Input
        }], fontColor: [{
            type: Input
        }], focus: [{
            type: Input
        }], content: [{
            type: Input
        }], lableRef: [{
            type: ViewChild,
            args: ['lableContent', { static: true }]
        }], inputElementRef: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQtaXRlbS9pbnB1dC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25ELE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQThPaEMsWUFBb0IsT0FBbUIsRUFBVSxNQUFpQjtBQUNwRSxRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsUUE3T25FLGNBQVMsR0FBVyxVQUFVLENBQUM7QUFDakMsUUFHRSxhQUFRLEdBQVcsRUFBRSxDQUFDO0FBQ3hCLFFBQUUsWUFBTyxHQUFXLEVBQUUsQ0FBQztBQUN2QixRQUFFLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDN0IsUUFBRSxjQUFTLEdBQWlCLE1BQU0sQ0FBQztBQUNuQyxRQUFFLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDOUIsUUFBRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztBQUNoQyxRQUVVLFVBQUssR0FBaUIsTUFBTSxDQUFDO0FBQ3ZDLFFBQ1Usa0JBQWEsR0FBVyxFQUFFLENBQUM7QUFDckMsUUFBVSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUNwQyxRQUFVLGNBQVMs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QyxLQUFLO0FBQ04sb0JBT0MsS0FBSztBQUNOLHdCQU1DLEtBQUs7QUFDTixvQkFNQyxLQUFLO0FBQ04sb0JBT0MsS0FBSztBQUNOLDBCQVdDLEtBQUs7QUFDTixnQ0FJQyxLQUFLO0FBQ04sNEJBR0MsS0FBSztBQUNOLG1CQVFDLEtBQUs7QUFDTixpQ0FNQyxLQUFLO0FBQ04scUJBTUMsS0FBSztBQUNOLHdCQUdDLEtBQUs7QUFDTixvQkFNQyxLQUFLO0FBQ04sc0JBWUMsS0FBSztBQUNOLGdDQVFDLEtBQUs7QUFBSyx1QkFFVixNQUFNO0FBQ1AscUJBQ0MsTUFBTTtBQUNQLHNCQUNDLE1BQU07QUFDUCwyQkFDQyxNQUFNO0FBQ1AsMkJBQ0MsTUFBTTtBQUNQLHNCQUVDLFdBQVcsU0FBQyxxQkFBcUI7QUFDL0IsMEJBQ0YsV0FBVyxTQUFDLHlCQUF5QjtBQUNuQyx1QkFDRixXQUFXLFNBQUMsc0JBQXNCO0FBQ2hDLHVCQUNGLFdBQVcsU0FBQyxzQkFBc0I7QUFDaEMseUJBQ0YsV0FBVyxTQUFDLHlCQUF5QjtBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyVmlld0luaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOem1JbnB1dFR5cGUgfSBmcm9tICcuL2lucHV0LWl0ZW0uZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdJbnB1dEl0ZW0sIG56bS1pbnB1dC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0SXRlbUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0taW5wdXQnO1xuICB3cmFwQ2xzOiBvYmplY3Q7XG4gIGxhYmVsQ2xzOiBvYmplY3Q7XG4gIGNvbnRyb2xDbHM6IG9iamVjdDtcbiAgc2V0Rm9jdXM6IG9iamVjdCA9IHt9O1xuICBwYXR0ZXJuOiBzdHJpbmcgPSAnJztcbiAgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIGlucHV0VHlwZTogTnptSW5wdXRUeXBlID0gJ3RleHQnO1xuICBuZ1RlbXBsYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xuXG4gIHByaXZhdGUgX2VsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdHlwZTogTnptSW5wdXRUeXBlID0gJ3RleHQnO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2V4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG4gIHByaXZhdGUgX2xhYmVsTnVtYmVyOiBudW1iZXIgPSAxMDtcbiAgcHJpdmF0ZSBfdXBkYXRlUGxhY2Vob2xkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcHJlZml4TGlzdENsczogc3RyaW5nID0gJ2FtLWxpc3QnO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX21vbmV5S2V5Ym9hcmRBbGlnbjogc3RyaW5nID0gJ3JpZ2h0JztcbiAgcHJpdmF0ZSBfbG9jYWxlO1xuICBwcml2YXRlIF9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0NsZWFyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2ZvbnRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG4gIHByaXZhdGUgX2lucHV0TG9jayA9IGZhbHNlO1xuICBwcml2YXRlIF9uelJlcXVpcmVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnbGFibGVDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbGFibGVSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpXG4gIGlucHV0RWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpSZXF1aXJlZDtcbiAgfVxuICBzZXQgbnpSZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX256UmVxdWlyZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IE56bUlucHV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IE56bUlucHV0VHlwZSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlucHV0VHlwZSA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSAnYmFua0NhcmQnIHx8IHZhbHVlID09PSAncGhvbmUnKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSAndGVsJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZGlnaXQnIHx8IHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl90eXBlID0gJ251bWJlcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMucGF0dGVybiA9ICdbMC05XSonO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHY6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGVmYXVsdFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgfVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGFibGU7XG4gIH1cbiAgc2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdGFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNsc0Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbGVhcjtcbiAgfVxuICBzZXQgY2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbGVhciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TGVuZ3RoO1xuICB9XG4gIHNldCBtYXhMZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heExlbmd0aCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBlcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gIH1cbiAgc2V0IGVycm9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXJyb3IgPSB2YWx1ZTtcbiAgICB0aGlzLmNsc0Vycm9yID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGV4dHJhKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9leHRyYTtcbiAgfVxuICBzZXQgZXh0cmEodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5uZ1RlbXBsYXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZ1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2V4dHJhID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxhYmVsTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYWJlbE51bWJlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZVBsYWNlaG9sZGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdXBkYXRlUGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcHJlZml4TGlzdENscygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXhMaXN0Q2xzO1xuICB9XG4gIHNldCBwcmVmaXhMaXN0Q2xzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXhMaXN0Q2xzID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHZhbHVlICsgJy1pdGVtJyk7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHZhbHVlICsgJy1pdGVtLW1pZGRsZScpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbW9uZXlLZXlib2FyZEFsaWduKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vbmV5S2V5Ym9hcmRBbGlnbjtcbiAgfVxuICBzZXQgbW9uZXlLZXlib2FyZEFsaWduKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb25leUtleWJvYXJkQWxpZ24gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udENvbG9yO1xuICB9XG4gIHNldCBmb250Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRDb2xvciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb2N1cyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5mb2N1cykge1xuICAgICAgdGhpcy5hdXRvRm9jdXMgPSB2YWx1ZS5mb2N1cztcbiAgICAgIGlmICh0aGlzLl90eXBlID09PSAnbW9uZXknKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMuaW5wdXRGb2N1cygnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG4gIHNldCBjb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cblxuICBASW5wdXQoKSBjb21wb3NpdGlvbkZpbHRlciA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uRXJyb3JDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uRXh0cmFDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWlucHV0LWl0ZW0nKVxuICBjbHNJdGVtOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1pbnB1dC1kaXNhYmxlZCcpXG4gIGNsc0Rpc2FibGVkOiBib29sZWFuID0gdGhpcy5fZGlzYWJsZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0taW5wdXQtZXJyb3InKVxuICBjbHNFcnJvcjogYm9vbGVhbiA9IHRoaXMuX2Vycm9yO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWlucHV0LWZvY3VzJylcbiAgY2xzRm9jdXM6IGJvb2xlYW4gPSB0aGlzLl9mb2N1cztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1pbnB1dC1hbmRyb2lkLCcpXG4gIGNsc0FuZHJvaWQ6IGJvb2xlYW4gPSB0aGlzLl9mb2N1cztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9lbCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIHNldENscygpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmxhYmxlUmVmICYmXG4gICAgICAodGhpcy5sYWJsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgKHRoaXMubGFibGVSZWYubmF0aXZlRWxlbWVudCAmJiB0aGlzLmxhYmxlUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0ICE9PSAnJykgfHxcbiAgICAgICAgdGhpcy5fY29udGVudCAhPSB1bmRlZmluZWQpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhYmVsQ2xzID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhYmVsYF06IHRydWUsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtcmVxdWlyZWRgXTogdGhpcy5uelJlcXVpcmVkLFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhYmVsLTJgXTogdGhpcy5fbGFiZWxOdW1iZXIgPT09IDIsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtM2BdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMyxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYWJlbC00YF06IHRoaXMuX2xhYmVsTnVtYmVyID09PSA0LFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhYmVsLTVgXTogdGhpcy5fbGFiZWxOdW1iZXIgPT09IDUsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNixcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYWJlbC03YF06IHRoaXMuX2xhYmVsTnVtYmVyID09PSA3XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xDbHMgPSB7IFtgJHt0aGlzLnByZWZpeENsc30tY29udHJvbGBdOiB0cnVlIH07XG4gIH1cblxuICBpbnB1dENoYW5nZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICAvLyAnY29tcG9zaXRpb25lbmQnIGlzIGVhcmxpZXIgdGhhbiBuZ01vZGVsQ2hhbmdlLCBUaGVyZWZvcmUgdXNlIHRpbWVyIHRvIG1ha2UgbmdNb2RlbENoYW5nZSBydW5zIGFmdGVyICdjb21wb3NpdGlvbmVuZCcgZXZlbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbXBvc2l0aW9uRmlsdGVyICYmIHRoaXMuX2lucHV0TG9jayAmJiB0aGlzLmlucHV0VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICBzd2l0Y2ggKHRoaXMuaW5wdXRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2JhbmtDYXJkJzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykucmVwbGFjZSgvKC4uLi4pKD89LikvZywgJyQxICcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpLnN1YnN0cmluZygwLCAxMSk7XG4gICAgICAgICAgY29uc3QgdmFsdWVMZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgaWYgKHZhbHVlTGVuID4gMyAmJiB2YWx1ZUxlbiA8IDgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWUuc3Vic3RyKDAsIDMpfSAke3ZhbHVlLnN1YnN0cigzKX1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVMZW4gPj0gOCkge1xuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZS5zdWJzdHIoMCwgMyl9ICR7dmFsdWUuc3Vic3RyKDMsIDQpfSAke3ZhbHVlLnN1YnN0cig3KX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnB1dFR5cGUgIT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGNvbXBvc2l0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5faW5wdXRMb2NrID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvc2l0aW9uRW5kKCkge1xuICAgIHRoaXMuX2lucHV0TG9jayA9IGZhbHNlO1xuICB9XG5cbiAgaW5wdXRGb2N1cyh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5fZWRpdGFibGUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgICB0aGlzLmNsc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xzQW5kcm9pZCA9IHRydWU7XG4gICAgfSwgMTAwKTtcbiAgICB0aGlzLm9uRm9jdXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBpbnB1dEJsdXIodmFsdWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNDbGVhcikge1xuICAgICAgICB0aGlzLl9mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xzQW5kcm9pZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzQ2xlYXIgPSBmYWxzZTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gJ3Bhc3N3b3JkJyAmJiB0aGlzLl91cGRhdGVQbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLl9pc0NsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Rm9jdXModGhpcy5fdmFsdWUpO1xuICB9XG5cbiAgZXJyb3JDbGljayhlKSB7XG4gICAgaWYgKHRoaXMub25FcnJvckNsaWNrKSB7XG4gICAgICB0aGlzLm9uRXJyb3JDbGljay5lbWl0KGUpO1xuICAgIH1cbiAgfVxuXG4gIGV4dHJhQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLm9uRXh0cmFDbGljaykge1xuICAgICAgdGhpcy5vbkV4dHJhQ2xpY2suZW1pdChlKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5fcHJlZml4TGlzdENscyArICctaXRlbScpO1xuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLl9wcmVmaXhMaXN0Q2xzICsgJy1pdGVtLW1pZGRsZScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRDbHMoKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19