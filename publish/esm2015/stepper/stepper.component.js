import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';
import * as ɵngcc3 from '@angular/forms';
export class StepperComponent {
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
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); };
StepperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StepperComponent, selectors: [["Stepper"], ["nzm-stepper"]], hostVars: 6, hostBindings: function StepperComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-stepper", ctx.clsStepper)("am-stepper-disabled", ctx.clsStpDisabled)("showNumber", ctx.clsShowNum);
    } }, inputs: { max: "max", min: "min", value: "value", step: "step", defaultValue: "defaultValue", disabled: "disabled", readOnly: "readOnly", showNumber: "showNumber" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => StepperComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 29, consts: [["role", "button", 2, "line-height", "28px", 3, "ngClass", "click"], [3, "type", "size"], [2, "outline", "none", 3, "disabled", "readonly", "autocomplete", "max", "min", "ngModel", "ngModelChange"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "span", 0);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_span_click_1_listener() { return ctx.onIncrease(); });
        ɵngcc0.ɵɵelement(2, "Icon", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 0);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_span_click_3_listener() { return ctx.onDecrease(); });
        ɵngcc0.ɵɵelement(4, "Icon", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵelementStart(6, "input", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function StepperComponent_Template_input_ngModelChange_6_listener($event) { return ctx.value = $event; })("ngModelChange", function StepperComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-handler-wrap");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-handler ", ctx.prefixCls, "-handler-up");
        ɵngcc0.ɵɵproperty("ngClass", ctx.upDisableCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("type", "plus")("size", "xxs");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-handler ", ctx.prefixCls, "-handler-down");
        ɵngcc0.ɵɵproperty("ngClass", ctx.downDisableCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("type", "minus")("size", "xxs");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("readonly", ctx.readOnly)("autocomplete", "off")("max", ctx.max)("min", ctx.min)("ngModel", ctx.value);
    } }, directives: [ɵngcc1.NgClass, ɵngcc2.IconComponent, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.NgModel], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepperComponent, [{
        type: Component,
        args: [{
                selector: 'Stepper, nzm-stepper',
                template: "<div class=\"{{ prefixCls }}-handler-wrap\">\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-up\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"upDisableCls\"\n    (click)=\"onIncrease()\"\n  >\n    <Icon [type]=\"'plus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n  <span\n    role=\"button\"\n    class=\"{{ prefixCls }}-handler {{ prefixCls }}-handler-down\"\n    style=\"line-height:28px;\"\n    [ngClass]=\"downDisableCls\"\n    (click)=\"onDecrease()\"\n  >\n    <Icon [type]=\"'minus'\" [size]=\"'xxs'\"> </Icon>\n  </span>\n</div>\n<div class=\"{{ prefixCls }}-input-wrap\">\n  <input\n    class=\"{{ prefixCls }}-input\"\n    style=\"outline:none\"\n    [disabled]=\"disabled\"\n    [readonly]=\"readOnly\"\n    [autocomplete]=\"'off'\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [(ngModel)]=\"value\"\n    (ngModelChange)=\"inputChange($event)\"\n  />\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => StepperComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { onChange: [{
            type: Output
        }], clsStepper: [{
            type: HostBinding,
            args: ['class.am-stepper']
        }], clsStpDisabled: [{
            type: HostBinding,
            args: ['class.am-stepper-disabled']
        }], clsShowNum: [{
            type: HostBinding,
            args: ['class.showNumber']
        }], max: [{
            type: Input
        }], min: [{
            type: Input
        }], value: [{
            type: Input
        }], step: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], showNumber: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQWF6RSxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUF1RjlCO0FBQWdCLFFBdEZoQixjQUFTLEdBQVcsWUFBWSxDQUFDO0FBQ25DLFFBSVUsU0FBSSxHQUFXLFFBQVEsQ0FBQztBQUNsQyxRQUFVLFNBQUksR0FBVyxDQUFDLFFBQVEsQ0FBQztBQUNuQyxRQUNVLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDNUIsUUFDVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLGdCQUFXLEdBQVksS0FBSyxDQUFDO0FBQ3ZDLFFBQVUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFBVSxrQkFBYSxHQUFZLEtBQUssQ0FBQztBQUN6QyxRQUFVLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFBVSxpQkFBWSxHQUFZLEtBQUssQ0FBQztBQUN4QyxRQTBERSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNyQyxRQUVFLGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDN0IsUUFDRSxtQkFBYyxHQUFZLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDM0MsUUFDRSxlQUFVLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUN6QyxRQUFVLGVBQVUsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3pELFFBQVUsY0FBUyxHQUE0QixHQUFHLEVBQUUsR0FBRSxDQUFDLENB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R0FBRyxFQUFFO0FBQUksUUFDbkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsSUFBRSxDQUFDO0FBQ0g7NENBeE9DLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7UUFBc0Isa0JBQ2hDOzs7Ozs7OztzTUFBdUMsa0JBQ3ZDLFNBQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUUsaUJBQWlCLDBCQUMxQixXQUFXLEVBQUU7U0FBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2tCQUMvQyxLQUFLLEVBQUUsSUFBSTtNQUNaLGtCQUNGLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzSkFDSTtBQUFDO0FBQTRDO0FBQ3ZDLGtCQWtCUixLQUFLO0FBQ04sa0JBTUMsS0FBSztBQUNOLG9CQU1DLEtBQUs7QUFDTixtQkFNQyxLQUFLO0FBQ04sMkJBR0MsS0FBSztBQUNOLHVCQU1DLEtBQUs7QUFDTix1QkFXQyxLQUFLO0FBQ04seUJBTUMsS0FBSztBQUNOLHVCQUlDLE1BQU07QUFDUCx5QkFFQyxXQUFXLFNBQUMsa0JBQWtCO0FBQzVCLDZCQUNGLFdBQVcsU0FBQywyQkFBMkI7QUFDckMseUJBQ0YsV0FBVyxTQUFDLGtCQUFrQjtBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIEhvc3RCaW5kaW5nLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1N0ZXBwZXIsIG56bS1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0ZXBwZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1zdGVwcGVyJztcbiAgdXBEaXNhYmxlQ2xzOiBvYmplY3Q7XG4gIGRvd25EaXNhYmxlQ2xzOiBvYmplY3Q7XG4gIHN0ZXBwZXJDbHM6IG9iamVjdDtcblxuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IEluZmluaXR5O1xuICBwcml2YXRlIF9taW46IG51bWJlciA9IC1JbmZpbml0eTtcbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfZGVmYXVsdFZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kb3duRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNVcENsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzRG93bkNsaWNrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cbiAgc2V0IG1pbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHN0ZXAodmFsdWUpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fZG93bkRpc2FibGVkID0gdmFsdWU7XG4gICAgICB0aGlzLl91cERpc2FibGVkID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5jbHNTdHBEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHk7XG4gIH1cbiAgc2V0IHJlYWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2hvd051bWJlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dOdW1iZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmNsc1Nob3dOdW0gPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXN0ZXBwZXInKVxuICBjbHNTdGVwcGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zdGVwcGVyLWRpc2FibGVkJylcbiAgY2xzU3RwRGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLl9kaXNhYmxlZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93TnVtYmVyJylcbiAgY2xzU2hvd051bTogYm9vbGVhbiA9IHRoaXMuX3Nob3dOdW1iZXI7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uSW5jcmVhc2UoKSB7XG4gICAgaWYgKCF0aGlzLl91cERpc2FibGVkKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMucGx1cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCk7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMuX3ZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnBsdXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApID4gdGhpcy5fbWF4KSB7XG4gICAgICAgIHRoaXMuX3VwRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWludXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApID49IHRoaXMuX21pbikge1xuICAgICAgICB0aGlzLl9kb3duRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzVXBDbGljayA9IHRydWU7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzVXBDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldENscygpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBvbkRlY3JlYXNlKCkge1xuICAgIGlmICghdGhpcy5fZG93bkRpc2FibGVkKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubWludXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLl92YWx1ZSk7XG4gICAgICBpZiAodGhpcy5taW51cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCkgPCB0aGlzLl9taW4pIHtcbiAgICAgICAgdGhpcy5fZG93bkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBsdXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApIDw9IHRoaXMuX21heCkge1xuICAgICAgICB0aGlzLl91cERpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0Rvd25DbGljayA9IHRydWU7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzRG93bkNsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudDtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlID8gK3ZhbHVlIDogMDtcbiAgICBpZiAodGhpcy5fdmFsdWUgPCB0aGlzLl9taW4pIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fbWluO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUgPiB0aGlzLl9tYXgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fbWF4O1xuICAgIH1cbiAgICB0aGlzLl91cERpc2FibGVkID0gdGhpcy5wbHVzKHRoaXMuX3ZhbHVlLCB0aGlzLl9zdGVwKSA+IHRoaXMuX21heCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLl9kb3duRGlzYWJsZWQgPSB0aGlzLm1pbnVzKHRoaXMuX3ZhbHVlLCB0aGlzLl9zdGVwKSA8IHRoaXMuX21pbiA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIHNldENscygpIHtcbiAgICB0aGlzLnVwRGlzYWJsZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taGFuZGxlci11cC1kaXNhYmxlZGBdOiB0aGlzLl91cERpc2FibGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1oYW5kbGVyLWFjdGl2ZWBdOiB0aGlzLl9pc1VwQ2xpY2tcbiAgICB9O1xuICAgIHRoaXMuZG93bkRpc2FibGVDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWhhbmRsZXItZG93bi1kaXNhYmxlZGBdOiB0aGlzLl9kb3duRGlzYWJsZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWhhbmRsZXItYWN0aXZlYF06IHRoaXMuX2lzRG93bkNsaWNrXG4gICAgfTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZG93bkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3VwRGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cERpc2FibGVkID0gdGhpcy5wbHVzKHRoaXMuX3ZhbHVlLCB0aGlzLl9zdGVwKSA+IHRoaXMuX21heCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuX2Rvd25EaXNhYmxlZCA9IHRoaXMubWludXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApIDwgdGhpcy5fbWluID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldENscygpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIHBsdXMobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChudW0xID09PSB1bmRlZmluZWQgfHwgbnVtMSA9PT0gbnVsbCB8fCBudW0yID09PSB1bmRlZmluZWQgfHwgbnVtMiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiYXNlTnVtID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHRoaXMuZGlnaXRMZW5ndGgobnVtMSksIHRoaXMuZGlnaXRMZW5ndGgobnVtMikpKTtcbiAgICByZXR1cm4gKHRoaXMudGltZXMobnVtMSwgYmFzZU51bSkgKyB0aGlzLnRpbWVzKG51bTIsIGJhc2VOdW0pKSAvIGJhc2VOdW07XG4gIH1cblxuICBtaW51cyhudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKG51bTEgPT09IHVuZGVmaW5lZCB8fCBudW0xID09PSBudWxsIHx8IG51bTIgPT09IHVuZGVmaW5lZCB8fCBudW0yID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJhc2VOdW0gPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgodGhpcy5kaWdpdExlbmd0aChudW0xKSwgdGhpcy5kaWdpdExlbmd0aChudW0yKSkpO1xuICAgIHJldHVybiAodGhpcy50aW1lcyhudW0xLCBiYXNlTnVtKSAtIHRoaXMudGltZXMobnVtMiwgYmFzZU51bSkpIC8gYmFzZU51bTtcbiAgfVxuXG4gIGRpZ2l0TGVuZ3RoKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBlU3BsaXQgPSBudW0udG9TdHJpbmcoKS5zcGxpdCgvW2VFXS8pO1xuICAgIGNvbnN0IGxlbiA9IChlU3BsaXRbMF0uc3BsaXQoJy4nKVsxXSB8fCAnJykubGVuZ3RoIC0gKyhlU3BsaXRbMV0gfHwgMCk7XG4gICAgcmV0dXJuIGxlbiA+IDAgPyBsZW4gOiAwO1xuICB9XG5cbiAgdGltZXMobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG51bTFDaGFuZ2VkID0gdGhpcy5mbG9hdFRvRml4ZWQobnVtMSk7XG4gICAgY29uc3QgbnVtMkNoYW5nZWQgPSB0aGlzLmZsb2F0VG9GaXhlZChudW0yKTtcbiAgICBjb25zdCBiYXNlTnVtID0gdGhpcy5kaWdpdExlbmd0aChudW0xKSArIHRoaXMuZGlnaXRMZW5ndGgobnVtMik7XG4gICAgY29uc3QgbGVmdFZhbHVlID0gbnVtMUNoYW5nZWQgKiBudW0yQ2hhbmdlZDtcbiAgICByZXR1cm4gbGVmdFZhbHVlIC8gTWF0aC5wb3coMTAsIGJhc2VOdW0pO1xuICB9XG5cbiAgZmxvYXRUb0ZpeGVkKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAobnVtLnRvU3RyaW5nKCkuaW5kZXhPZignZScpID09PSAtMSkge1xuICAgICAgcmV0dXJuIE51bWJlcihudW0udG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICB9XG4gICAgY29uc3QgZExlbiA9IHRoaXMuZGlnaXRMZW5ndGgobnVtKTtcbiAgICByZXR1cm4gZExlbiA+IDAgPyB0aGlzLnN0cmlwKG51bSAqIE1hdGgucG93KDEwLCBkTGVuKSkgOiBudW07XG4gIH1cblxuICBzdHJpcChudW06IG51bWJlciwgcHJlY2lzaW9uID0gMTIpOiBudW1iZXIge1xuICAgIHJldHVybiArcGFyc2VGbG9hdChudW0udG9QcmVjaXNpb24ocHJlY2lzaW9uKSk7XG4gIH1cbn1cbiJdfQ==