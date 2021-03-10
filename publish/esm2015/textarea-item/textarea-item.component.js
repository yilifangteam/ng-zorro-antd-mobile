import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["text"];
function TextareaItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.labelCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
function TextareaItemComponent_div_1_ng_template_1_Template(rf, ctx) { }
function TextareaItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, TextareaItemComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.labelCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.title);
} }
function TextareaItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("click", function TextareaItemComponent_div_5_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.clearInput(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-clear");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.clearCls);
} }
function TextareaItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("click", function TextareaItemComponent_div_6_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.errorClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-error-extra");
} }
function TextareaItemComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-count");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.characterLength);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("/", ctx_r5.count, "\n");
} }
export class TextareaItemComponent {
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
TextareaItemComponent.ɵfac = function TextareaItemComponent_Factory(t) { return new (t || TextareaItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
TextareaItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TextareaItemComponent, selectors: [["TextareaItem"], ["nzm-textarea-item"]], viewQuery: function TextareaItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textRef = _t.first);
    } }, hostVars: 12, hostBindings: function TextareaItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-textarea-item", ctx.clsItem)("am-textarea-item-single-line", ctx.clsSingleLine)("am-textarea-disabled", ctx.clsDisabled)("am-textarea-error", ctx.clsError)("am-textarea-focus", ctx.clsFocus)("am-textarea-has-count", ctx.clsHasCount);
    } }, inputs: { value: "value", defaultValue: "defaultValue", placeholder: "placeholder", editable: "editable", disabled: "disabled", clear: "clear", rows: "rows", error: "error", labelNumber: "labelNumber", count: "count", prefixListCls: "prefixListCls", name: "name", autoHeight: "autoHeight", title: "title", focus: "focus", autoFocus: "autoFocus" }, outputs: { onChange: "onChange", onBlur: "onBlur", onFocus: "onFocus", onErrorClick: "onErrorClick" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextareaItemComponent),
                multi: true
            }
        ])], decls: 8, vars: 14, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "rows", "maxlength", "ngModel", "defaultValue", "placeholder", "disabled", "readOnly", "autofocus", "ngModelChange", "blur", "focus"], ["text", ""], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "ngClass", "click"], [3, "click"]], template: function TextareaItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TextareaItemComponent_div_0_Template, 2, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TextareaItemComponent_div_1_Template, 2, 2, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "textarea", 2, 3);
        ɵngcc0.ɵɵlistener("ngModelChange", function TextareaItemComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.value = $event; })("ngModelChange", function TextareaItemComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.inputChange($event); })("blur", function TextareaItemComponent_Template_textarea_blur_3_listener($event) { return ctx.inputBlur(ctx.value, $event); })("focus", function TextareaItemComponent_Template_textarea_focus_3_listener() { return ctx.inputFocus(ctx.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, TextareaItemComponent_div_5_Template, 1, 4, "div", 4);
        ɵngcc0.ɵɵtemplate(6, TextareaItemComponent_div_6_Template, 1, 3, "div", 5);
        ɵngcc0.ɵɵtemplate(7, TextareaItemComponent_span_7_Template, 4, 5, "span", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.title && ctx.isTitleString);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title && !ctx.isTitleString);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.controlCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("rows", ctx.rows)("maxlength", ctx.maxLength)("ngModel", ctx.value)("defaultValue", ctx.defaultValue)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("readOnly", !ctx.editable)("autofocus", ctx.autoFocus);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.clear && ctx.editable && !ctx.disabled && (ctx.value && ctx.value.length > 0));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasCount);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.DefaultValueAccessor, ɵngcc2.MaxLengthValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TextareaItemComponent, [{
        type: Component,
        args: [{
                selector: 'TextareaItem , nzm-textarea-item',
                template: "<div *ngIf=\"title && isTitleString\" [ngClass]=\"labelCls\">{{ title }}</div>\n<div *ngIf=\"title && !isTitleString\" [ngClass]=\"labelCls\">\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</div>\n<div [ngClass]=\"controlCls\">\n  <textarea\n    #text\n    [rows]=\"rows\"\n    [maxlength]=\"maxLength\"\n    [(ngModel)]=\"value\"\n    [defaultValue]=\"defaultValue\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [readOnly]=\"!editable\"\n    [autofocus]=\"autoFocus\"\n    (ngModelChange)=\"inputChange($event)\"\n    (blur)=\"inputBlur(value, $event)\"\n    (focus)=\"inputFocus(value)\"\n  ></textarea>\n</div>\n<div\n  *ngIf=\"clear && editable && !disabled && (value && value.length > 0)\"\n  class=\"{{ prefixCls }}-clear\"\n  [ngClass]=\"clearCls\"\n  (click)=\"clearInput()\"\n></div>\n<div *ngIf=\"error\" class=\"{{ prefixCls }}-error-extra\" (click)=\"errorClick($event)\"></div>\n<span *ngIf=\"hasCount\" class=\"{{ prefixCls }}-count\">\n  <span>{{ characterLength }}</span\n  >/{{ count }}\n</span>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextareaItemComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { onChange: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onErrorClick: [{
            type: Output
        }], clsItem: [{
            type: HostBinding,
            args: ['class.am-textarea-item']
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
        }], rows: [{
            type: Input
        }], error: [{
            type: Input
        }], labelNumber: [{
            type: Input
        }], count: [{
            type: Input
        }], prefixListCls: [{
            type: Input
        }], name: [{
            type: Input
        }], autoHeight: [{
            type: Input
        }], title: [{
            type: Input
        }], focus: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], clsSingleLine: [{
            type: HostBinding,
            args: ['class.am-textarea-item-single-line']
        }], clsDisabled: [{
            type: HostBinding,
            args: ['class.am-textarea-disabled']
        }], clsError: [{
            type: HostBinding,
            args: ['class.am-textarea-error']
        }], clsFocus: [{
            type: HostBinding,
            args: ['class.am-textarea-focus']
        }], clsHasCount: [{
            type: HostBinding,
            args: ['class.am-textarea-has-count']
        }], textRef: [{
            type: ViewChild,
            args: ['text', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGV4dGFyZWEtaXRlbS90ZXh0YXJlYS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFHVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXpFLE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQW1MbkMsWUFBb0IsT0FBbUIsRUFBVSxNQUFpQjtBQUNwRSxRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsUUFsTG5FLGNBQVMsR0FBVyxhQUFhLENBQUM7QUFDcEMsUUFNRSxrQkFBYSxHQUFZLElBQUksQ0FBQztBQUNoQyxRQUFFLGNBQVMsR0FBVyxRQUFRLENBQUM7QUFDL0IsUUFFVSxtQkFBYyxHQUFHLFNBQVMsQ0FBQztBQUNyQyxRQUNVLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0FBQ3JDLFFBQVUsaUJBQVksR0FBVyxFQUFFLENBQUM7QUFDcEMsUUFBVSxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQ3BDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbEMsUUFBVSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQzVCLFFBRVUsV0FBTSxHQUFZLEtBQUssQ0FBQztBQUNsQyxRQUFVLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0FBQ25DLFFBQVUsVUFBSyxHQUFXLEVBQUUsQ0FBQztB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TiwyQkFZQyxLQUFLO0FBQ04sMEJBUUMsS0FBSztBQUNOLHVCQU1DLEtBQUs7QUFDTix1QkFNQyxLQUFLO0FBQ04sb0JBT0MsS0FBSztBQUNOLG1CQU1DLEtBQUs7QUFDTixvQkFPQyxLQUFLO0FBQ04sMEJBT0MsS0FBSztBQUNOLG9CQUlDLEtBQUs7QUFDTiw0QkFRQyxLQUFLO0FBQ04sbUJBT0MsS0FBSztBQUNOLHlCQUlDLEtBQUs7QUFDTixvQkFHQyxLQUFLO0FBQ04sb0JBVUMsS0FBSztBQUNOLHdCQU1DLEtBQUs7QUFDTix1QkFNQyxNQUFNO0FBQ1AscUJBQ0MsTUFBTTtBQUNQLHNCQUNDLE1BQU07QUFDUCwyQkFDQyxNQUFNO0FBQ1Asc0JBRUMsV0FBVyxTQUFDLHdCQUF3QjtBQUNsQywwQkFDRixXQUFXLFNBQUMsNEJBQTRCO0FBQ3RDLHVCQUNGLFdBQVcsU0FBQyx5QkFBeUI7QUFDbkMsdUJBQ0YsV0FBVyxTQUFDLHlCQUF5QjtBQUNuQyw0QkFDRixXQUFXLFNBQUMsb0NBQW9DO0FBQzlDLDBCQUNGLFdBQVcsU0FBQyw2QkFBNkI7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGV4dGFyZWFJdGVtICwgbnptLXRleHRhcmVhLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGV4dGFyZWFJdGVtQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10ZXh0YXJlYSc7XG4gIHdyYXBDbHM6IG9iamVjdDtcbiAgbGFiZWxDbHM6IG9iamVjdDtcbiAgY29udHJvbENsczogb2JqZWN0O1xuICBjbGVhckNsczogb2JqZWN0O1xuICBoYXNDb3VudDogYm9vbGVhbjtcbiAgY2hhcmFjdGVyTGVuZ3RoOiBudW1iZXI7XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBtYXhMZW5ndGg6IG51bWJlciA9IEluZmluaXR5O1xuXG4gIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9wcmVmaXhMaXN0Q2xzID0gJ2FtLWxpc3QnO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcm93czogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfY291bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXV0b0hlaWdodDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGFiZWxOdW1iZXI6IG51bWJlciA9IDU7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNDbGlja2luZ0NsZWFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgndGV4dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRleHRSZWY7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB9XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gIH1cbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGFibGU7XG4gIH1cbiAgc2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdGFibGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgY2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFyO1xuICB9XG4gIHNldCBjbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsZWFyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJvd3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgfVxuICBzZXQgcm93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93cyA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGVycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxhYmVsTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYWJlbE51bWJlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG4gIHNldCBjb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICB0aGlzLnNldENoYXJhY3Rlckxlbmd0aCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwcmVmaXhMaXN0Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeExpc3RDbHM7XG4gIH1cbiAgc2V0IHByZWZpeExpc3RDbHModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeExpc3RDbHMgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHRoaXMuX25hbWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGF1dG9IZWlnaHQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvSGVpZ2h0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9jdXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuZm9jdXMpIHtcbiAgICAgIHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmlucHV0Rm9jdXMoJycpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkVycm9yQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10ZXh0YXJlYS1pdGVtJylcbiAgY2xzSXRlbTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtZGlzYWJsZWQnKVxuICBjbHNEaXNhYmxlZDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10ZXh0YXJlYS1lcnJvcicpXG4gIGNsc0Vycm9yOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRleHRhcmVhLWZvY3VzJylcbiAgY2xzRm9jdXM6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtaXRlbS1zaW5nbGUtbGluZScpXG4gIGNsc1NpbmdsZUxpbmU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtaGFzLWNvdW50JylcbiAgY2xzSGFzQ291bnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fZWwgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICBzZXRDbHMoKSB7XG4gICAgdGhpcy5oYXNDb3VudCA9IHRoaXMuX2NvdW50ID4gMCAmJiB0aGlzLl9yb3dzID4gMTtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5fcHJlZml4TGlzdENscyArICctaXRlbScpO1xuICAgIHRoaXMuY2xzU2luZ2xlTGluZSA9IHRoaXMuX3Jvd3MgPT09IDEgJiYgIXRoaXMuX2F1dG9IZWlnaHQ7XG4gICAgdGhpcy5jbHNEaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xuICAgIHRoaXMuY2xzRXJyb3IgPSB0aGlzLl9lcnJvcjtcbiAgICB0aGlzLmNsc0ZvY3VzID0gdGhpcy5fZm9jdXM7XG4gICAgdGhpcy5jbHNIYXNDb3VudCA9IHRoaXMuaGFzQ291bnQ7XG4gICAgdGhpcy5sYWJlbENscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWxgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtMmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtM2BdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMyxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNGBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNWBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtN2BdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gN1xuICAgIH07XG4gICAgdGhpcy5jb250cm9sQ2xzID0geyBbYCR7dGhpcy5wcmVmaXhDbHN9LWNvbnRyb2xgXTogdHJ1ZSB9O1xuICAgIHRoaXMuY2xlYXJDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNsZWFyLWFjdGl2ZWBdOiB0aGlzLl9pc0NsaWNraW5nQ2xlYXJcbiAgICB9O1xuICB9XG4gIHNldENoYXJhY3Rlckxlbmd0aCgpIHtcbiAgICB0aGlzLmNoYXJhY3Rlckxlbmd0aCA9IHRoaXMuY291bnRTeW1ib2xzKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAodGhpcy5fY291bnQgPiAwKSB7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuX2NvdW50IC0gdGhpcy5jaGFyYWN0ZXJMZW5ndGggKyAodGhpcy5fdmFsdWUgPyB0aGlzLl92YWx1ZS5sZW5ndGggOiAwKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgIHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJMZW5ndGgoKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIGlucHV0Rm9jdXModmFsdWUpIHtcbiAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkZvY3VzLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Qmx1cih2YWx1ZSwgZXZlbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgICAgdGhpcy5vbkJsdXIuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLl9pc0NsZWFyID0gZmFsc2U7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5faXNDbGlja2luZ0NsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UoJycpO1xuICAgICAgdGhpcy5pbnB1dEZvY3VzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX2lzQ2xpY2tpbmdDbGVhciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHMoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGVycm9yQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLm9uRXJyb3JDbGljaykge1xuICAgICAgdGhpcy5vbkVycm9yQ2xpY2suZW1pdChlKTtcbiAgICB9XG4gIH1cbiAgcmVBbGlnbkhlaWdodCgpIHtcbiAgICBjb25zdCB0ZXh0YXJlYURvbSA9IHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRleHRhcmVhRG9tLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRleHRhcmVhRG9tLnN0eWxlLmhlaWdodCA9IGAke3RleHRhcmVhRG9tLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cblxuICBjb3VudFN5bWJvbHModGV4dCA9ICcnKSB7XG4gICAgY29uc3QgcmVnZXhBc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18XFxuL2c7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleEFzdHJhbFN5bWJvbHMsICdfJykubGVuZ3RoO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2hhcmFjdGVyTGVuZ3RoKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRleHRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJMZW5ndGgoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5fYXV0b0hlaWdodCkge1xuICAgICAgdGhpcy5yZUFsaWduSGVpZ2h0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=