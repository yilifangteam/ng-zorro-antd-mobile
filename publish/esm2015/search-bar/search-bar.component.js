import { Component, ViewEncapsulation, Input, Output, forwardRef, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../locale-provider/locale-provider.service';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["search"];
const _c1 = function (a0) { return { visibility: a0 }; };
export class SearchBarComponent {
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
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
SearchBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchBarComponent, selectors: [["SearchBar"], ["nzm-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElementRef = _t.first);
    } }, inputs: { defaultValue: "defaultValue", value: "value", placeholder: "placeholder", showCancelButton: "showCancelButton", cancelText: "cancelText", disabled: "disabled", maxLength: "maxLength", setFocus: "setFocus" }, outputs: { onSubmit: "onSubmit", onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur", onCancel: "onCancel", onClear: "onClear" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SearchBarComponent),
                multi: true
            }
        ])], decls: 12, vars: 36, consts: [["name", "myForm", "action", "#", 3, "ngClass", "submit"], [2, "box-sizing", "unset"], [3, "ngStyle"], [2, "outline", "none", 3, "name", "type", "disabled", "maxlength", "placeholder", "ngModel", "blur", "focus", "ngModelChange", "compositionstart", "compositionend"], ["search", ""], [2, "box-sizing", "content-box", "transition", "0s", 3, "ngClass", "click"], [1, "cancel", 3, "ngClass", "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵlistener("submit", function SearchBarComponent_Template_form_submit_0_listener($event) { return ctx.onSearchSubmit($event); });
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "span");
        ɵngcc0.ɵɵelement(4, "i");
        ɵngcc0.ɵɵelementStart(5, "span", 2);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 3, 4);
        ɵngcc0.ɵɵlistener("blur", function SearchBarComponent_Template_input_blur_7_listener() { return ctx.onSearchbarBlur(); })("focus", function SearchBarComponent_Template_input_focus_7_listener() { return ctx.onSearchbarFocus(); })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_7_listener($event) { return ctx.onSearchbarChange($event); })("compositionstart", function SearchBarComponent_Template_input_compositionstart_7_listener() { return ctx.onSetCompositionState(true); })("compositionend", function SearchBarComponent_Template_input_compositionend_7_listener() { return ctx.onSetCompositionState(false); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "a", 5);
        ɵngcc0.ɵɵlistener("click", function SearchBarComponent_Template_a_click_9_listener() { return ctx.onSearchbarClear(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 6);
        ɵngcc0.ɵɵlistener("click", function SearchBarComponent_Template_div_click_10_listener() { return ctx.onSearchbarCancel(); });
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph");
        ɵngcc0.ɵɵproperty("@cancelButtonState", ctx.showCancelButton ? "visible" : "hidden");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-container");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-icon");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-placeholder");
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(34, _c1, ctx.placeholder && !ctx.isComposing && !ctx.value ? "visible" : "hidden"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.placeholder, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-value");
        ɵngcc0.ɵɵproperty("name", "search")("type", "search")("disabled", ctx.disabled)("maxlength", ctx.maxLength)("placeholder", ctx.placeholder)("ngModel", ctx.value);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.clearCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.cancelCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.cancelText, " ");
    } }, directives: [ɵngcc2.ɵangular_packages_forms_forms_y, ɵngcc2.NgControlStatusGroup, ɵngcc2.NgForm, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc2.DefaultValueAccessor, ɵngcc2.MaxLengthValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], encapsulation: 2, data: { animation: [
            trigger('cancelButtonState', [
                state('visible', style({ width: '*' })),
                state('hidden', style({ width: '100%' })),
                transition('visible =>hidden', [animate(300, style({ width: '100%' }))]),
                transition('hidden => visible', [animate(300, style({ width: '*' }))])
            ])
        ] } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SearchBarComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.LocaleProviderService }]; }, { onSubmit: [{
            type: Output
        }], onChange: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onCancel: [{
            type: Output
        }], onClear: [{
            type: Output
        }], defaultValue: [{
            type: Input
        }], value: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], showCancelButton: [{
            type: Input
        }], cancelText: [{
            type: Input
        }], disabled: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], setFocus: [{
            type: Input
        }], inputElementRef: [{
            type: ViewChild,
            args: ['search', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFzQnpFLE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQW1IaEMsWUFBb0IsV0FBdUIsRUFBVSxlQUFzQztBQUFJLFFBQTNFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0FBQUMsUUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7QUFBQyxRQWxINUYsY0FBUyxHQUFXLFdBQVcsQ0FBQztBQUNsQyxRQUVFLGNBQVMsR0FBVztBQUN0QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsRUFBRSxJQUFJO0FBQ3RDLFNBQUcsQ0FBQztBQUNKLFFBQUUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7QUFDdEIsUUFDVSxrQkFBYSxHQUFXLEVBQUUsQ0FBQztBQUNyQyxRQUFVLFdBQU0sR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFBVSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUNwQyxRQUFVLHNCQUFpQixHQUFZLEtBQUssQ0FBQztBQUM3QyxRQUNVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFDVSxXQUFNLEdBQVksS0FBSyxDQUFDO0FBQ2xDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLGtCQUFhLEdBQVksS0FBSyxDQUFDO0FBQ3pDLFFBQVUscUJBQWdCLEdBQVksS0FBSyxDQUFDO0FBQzVDLFFBS1UscUJBQWdCLEdBQVksS0FBSyxDQUFDO0FBQzVDLFFBQVUsV0FBTSxHQUFRLEVBQUUsQ0FBQztBQUMzQixRQUFVLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUM5QyxRQXlFRSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNyQyxRQUNFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3JDLFFBQ0UsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7QUFDcEMsUUFDRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNuQyxRQUNFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3JDLFFBQ0UsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7QUFDcEMsUUFBVSxlQUFVLEdBQTRCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN6RCxRQUFVLGNBQVMsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3hELElBQ2dHLENBQUM7QUFDakcsSUFwRkUsSUFDSSxZQUFZLENBQUMsS0FBYTtBQUNoQyxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzRCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksS0FBSztBQUFLLFFBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxLQUFLLENBQUMsQ0FBUztBQUNyQixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNELFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxXQUFXO0FBQUssUUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxXQUFXLENBQUMsS0FBYTtBQUMvQixRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxnQkFBZ0I7QUFBSyxRQUN2QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksZ0JBQWdCLENBQUMsS0FBYztBQUNyQyxRQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFVBQVU7QUFBSyxRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFhO0FBQzlCLFFBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDL0IsWUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNoQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksU0FBUztBQUFLLFFBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksU0FBUyxDQUFDLEtBQWE7QUFDN0IsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksUUFBUSxDQUFDLEtBQUs7QUFDcEIsUUFBSSxJQUFJLEtBQUssRUFBRTtBQUNmLFlBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQzVCLGdCQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzNCLGdCQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25ELGdCQUFRLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDckMsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDaEMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUN0QyxnQkFBUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0IsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQWlCRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHO0FBQ25CLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDakMsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO0FBQ2hILFNBQUssQ0FBQztBQUNOLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRztBQUNyQixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsRUFBRSxJQUFJO0FBQ3hDLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxFQUMvQixJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hGLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ3BELFNBQUssQ0FBQztBQUNOLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRztBQUNwQixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7QUFDeEUsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztBQUNoRyxZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO0FBQy9ELFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ25GLFlBQU0sTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3BGLFlBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3JFLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUNuQyxnQkFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xELGFBQU87QUFDUCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUNoRCxZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakcsZ0JBQVEsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRyxnQkFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDMUUsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFDakIsUUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDdEIsUUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3ZFLGdCQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzVCLGdCQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGdCQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLGFBQU87QUFDUCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDcEMsUUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQjtBQUNsQixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsQ0FBQztBQUNyQixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxjQUFjLENBQUMsQ0FBQztBQUNsQixRQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDcEMsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQixRQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDakMsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QyxJQUFFLENBQUM7QUFDSCxJQUNFLGlCQUFpQjtBQUNuQixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDckIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCO0FBQ2xCLFFBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDakMsUUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQyxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxRQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQixRQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN2QixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDcEMsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLHFCQUFxQixDQUFDLFdBQW9CO0FBQzVDLFFBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbkMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsS0FBVTtBQUFJLFFBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNELFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsRUFBMkI7QUFBSSxRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUNFLGlCQUFpQixDQUFDLEVBQTJCO0FBQUksUUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEIsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN4RixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEUsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3hGLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFDakIsUUFBSSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQ25GLEdBQUcsSUFBSSxDQUFDLFNBQVMseUJBQXlCLENBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0SCxRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0YsUUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RyxJQUFFLENBQUM7QUFDSCxJQUNFLGtCQUFrQjtBQUNwQixRQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNIOzhDQXBSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJCQUEyQixrQkFDckM7Ozs7Ozs7Ozs7Ozt1ZkFBMEM7S0FDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7ZUFDckMsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLFdBQVcsRUFBRTtJQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7ZUFDakQsS0FBSyxFQUFFLElBQUk7SUFDWixrQkFDRixrQkFDRDtRQUFVLEVBQUUsc0JBQ1Y7S0FBTyxDQUFDLG1CQUFtQixFQUFFO1FBQzNCLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxRQUFRO0NBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7cUJBQ3pDLFVBQVUsQ0FBQztDQUFrQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQ3hFLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUN2RSxDQUFDLGtCQUNILGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0k7QUFBQztBQUE0QyxZQS9CaEQsVUFBVTtBQUNWLFlBS08scUJBQXFCO0FBQUc7QUFBRztBQUFzQyw4QkFzRHZFLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ2xDLDJCQUVGLEtBQUs7QUFDTixvQkFLQyxLQUFLO0FBQ04sMEJBUUMsS0FBSztBQUNOLCtCQU1DLEtBQUs7QUFDTix5QkFPQyxLQUFLO0FBQ04sdUJBU0MsS0FBSztBQUNOLHdCQU1DLEtBQUs7QUFDTix1QkFNQyxLQUFLO0FBQ04sdUJBYUMsTUFBTTtBQUNQLHVCQUNDLE1BQU07QUFDUCxzQkFDQyxNQUFNO0FBQ1AscUJBQ0MsTUFBTTtBQUNQLHVCQUNDLE1BQU07QUFDUCxzQkFDQyxNQUFNO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTZWFyY2hCYXIsIG56bS1zZWFyY2gtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaEJhckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NhbmNlbEJ1dHRvblN0YXRlJywgW1xuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IHdpZHRoOiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHsgd2lkdGg6ICcxMDAlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+aGlkZGVuJywgW2FuaW1hdGUoMzAwLCBzdHlsZSh7IHdpZHRoOiAnMTAwJScgfSkpXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFthbmltYXRlKDMwMCwgc3R5bGUoeyB3aWR0aDogJyonIH0pKV0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1zZWFyY2gnO1xuICBjbGVhckNsczogb2JqZWN0O1xuICB3cmFwQ2xzOiBvYmplY3Q7XG4gIGNhbmNlbENsczogb2JqZWN0ID0ge1xuICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2FuY2VsYF06IHRydWVcbiAgfTtcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2hvd0NhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jYW5jZWxUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX21heExlbmd0aDogbnVtYmVyO1xuICBwcml2YXRlIF9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc1N1Ym1pdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0N1c3RvbVRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNDbGVhckNsaWNraW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N5bnRoZXRpY1BoQ29udGFpbmVyUmVmOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfc3ludGhldGljUGhSZWY6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9yaWdodEJ0blJlZjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2lucHV0Q29udGFpbmVyUmVmOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfcmlnaHRCdG5Jbml0TWFyZ2luTGVmdDogc3RyaW5nO1xuICBwcml2YXRlIF9ibHVyRnJvbU9uQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF91bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGlucHV0RWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdiB8fCAnJztcbiAgICB0aGlzLmlucHV0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNob3dDYW5jZWxCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDYW5jZWxCdXR0b247XG4gIH1cbiAgc2V0IHNob3dDYW5jZWxCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2FuY2VsQnV0dG9uID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbFRleHQ7XG4gIH1cbiAgc2V0IGNhbmNlbFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9jYW5jZWxUZXh0ID0gdmFsdWU7XG4gICAgICB0aGlzLl9pc0N1c3RvbVRleHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhMZW5ndGg7XG4gIH1cbiAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNldEZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuZm9jdXNWYWx1ZSkge1xuICAgICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5fYmx1ckZyb21PbkNsZWFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblNlYXJjaGJhckZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ibHVyRnJvbU9uQ2xlYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNlYXJjaGJhckJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25DbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIG9uQ2hhbmdlRm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2xvY2FsZVByb3ZpZGVyOiBMb2NhbGVQcm92aWRlclNlcnZpY2UpIHt9XG5cbiAgc2V0Q2xhc3MoKSB7XG4gICAgdGhpcy53cmFwQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zdGFydGBdOiAhISh0aGlzLl9mb2N1cyB8fCAodGhpcy5fdmFsdWUgJiYgdGhpcy5fdmFsdWUubGVuZ3RoID4gMCkpICYmICF0aGlzLl9kaXNhYmxlZFxuICAgIH07XG4gICAgdGhpcy5jYW5jZWxDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNhbmNlbGBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jYW5jZWwtc2hvd2BdOlxuICAgICAgICB0aGlzLl9zaG93Q2FuY2VsQnV0dG9uIHx8IHRoaXMuX2ZvY3VzIHx8ICh0aGlzLl92YWx1ZSAmJiB0aGlzLl92YWx1ZS5sZW5ndGggPiAwKSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2FuY2VsLWFuaW1gXTogdGhpcy5fZm9jdXNcbiAgICB9O1xuICAgIHRoaXMuY2xlYXJDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNsZWFyYF06IHRoaXMuX3ZhbHVlICYmIHRoaXMuX3ZhbHVlLmxlbmd0aCA+IDAsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNsZWFyLXNob3dgXTogdGhpcy5fdmFsdWUgJiYgdGhpcy5fdmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5faXNTdWJtaXQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNsZWFyLWFjdGl2ZWBdOiB0aGlzLl9pc0NsZWFyQ2xpY2tpbmdcbiAgICB9O1xuICB9XG5cbiAgc2V0U3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0Q29udGFpbmVyUmVmLmNsYXNzTmFtZS5pbmRleE9mKGAke3RoaXMucHJlZml4Q2xzfS1zdGFydGApID4gLTEpIHtcbiAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHRoaXMuX3N5bnRoZXRpY1BoQ29udGFpbmVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgdGhpcy5fc3ludGhldGljUGhSZWYuc3R5bGUud2lkdGggPSBNYXRoLmNlaWwocmVhbFdpZHRoKSArICdweCc7XG4gICAgICBpZiAoIXRoaXMuX3Nob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgdGhpcy5fcmlnaHRCdG5SZWYuc3R5bGUubWFyZ2luUmlnaHQgPSAnMCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N5bnRoZXRpY1BoUmVmLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgaWYgKCF0aGlzLl9zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnRuSW5pdE1hcmdpbkxlZnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9yaWdodEJ0blJlZilbJ21hcmdpbi1sZWZ0J107XG4gICAgICAgIGNvbnN0IGJ0bk1hcmdpblJpZ2h0ID0gdGhpcy5fcmlnaHRCdG5SZWYub2Zmc2V0V2lkdGggKyBwYXJzZUludCh0aGlzLl9yaWdodEJ0bkluaXRNYXJnaW5MZWZ0LCAxMCk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnRuUmVmLnN0eWxlLm1hcmdpblJpZ2h0ID0gJy0nICsgYnRuTWFyZ2luUmlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoYmFyQmx1cigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghc2VsZi5fYmx1ckZyb21PbkNsZWFyICYmIHNlbGYuX3ZhbHVlID09PSAnJyAmJiBzZWxmLl9mb2N1cykge1xuICAgICAgICBzZWxmLl9mb2N1cyA9IGZhbHNlO1xuICAgICAgICBzZWxmLl92YWx1ZSA9ICcnO1xuICAgICAgICBzZWxmLm9uQmx1ci5lbWl0KCk7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3MoKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuX2JsdXJGcm9tT25DbGVhciA9IGZhbHNlO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIG9uU2VhcmNoYmFyRm9jdXMoKSB7XG4gICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuX2lzU3VibWl0ID0gZmFsc2U7XG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBvblNlYXJjaGJhckNoYW5nZShlKSB7XG4gICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZSk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGUpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG9uU2VhcmNoU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fdmFsdWUgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICB0aGlzLl9pc1N1Ym1pdCA9IHRydWU7XG4gICAgdGhpcy5vblN1Ym1pdC5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5fYmx1ckZyb21PbkNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIG9uU2VhcmNoYmFyQ2FuY2VsKCkge1xuICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBvblNlYXJjaGJhckNsZWFyKCkge1xuICAgIHRoaXMuX2JsdXJGcm9tT25DbGVhciA9IHRydWU7XG4gICAgdGhpcy5faXNDbGVhckNsaWNraW5nID0gdHJ1ZTtcbiAgICB0aGlzLm9uU2VhcmNoYmFyQ2hhbmdlKCcnKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICB0aGlzLl9pc0NsZWFyQ2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JsdXJGcm9tT25DbGVhciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0sIDEwMCk7XG4gICAgdGhpcy5vblNlYXJjaGJhckZvY3VzKCk7XG4gIH1cblxuICBvblNldENvbXBvc2l0aW9uU3RhdGUoaXNDb21wb3Npbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzQ29tcG9zaW5nID0gaXNDb21wb3Npbmc7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlci5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fdW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLl9sb2NhbGVQcm92aWRlci5nZXRMb2NhbGVTdWJPYmooJ1NlYXJjaEJhcicpO1xuICAgICAgdGhpcy5fY2FuY2VsVGV4dCA9IHRoaXMuX2lzQ3VzdG9tVGV4dCA/IHRoaXMuX2NhbmNlbFRleHQgOiB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0O1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3N5bnRoZXRpY1BoQ29udGFpbmVyUmVmID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBgJHt0aGlzLnByZWZpeENsc30tc3ludGhldGljLXBoLWNvbnRhaW5lcmBcbiAgICApWzBdO1xuICAgIHRoaXMuX3N5bnRoZXRpY1BoUmVmID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wcmVmaXhDbHN9LXN5bnRoZXRpYy1waGApWzBdO1xuICAgIHRoaXMuX3JpZ2h0QnRuUmVmID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbmNlbCcpWzBdO1xuICAgIHRoaXMuX2lucHV0Q29udGFpbmVyUmVmID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wcmVmaXhDbHN9YClbMF07XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19