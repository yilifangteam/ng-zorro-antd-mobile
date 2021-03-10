import { Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, HostBinding, NgZone } from '@angular/core';
import { CustomInputService } from './custom-input.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './custom-input.service';
import * as ɵngcc2 from '@angular/common';

function CustomInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
} }
export class CustomInputComponent {
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
CustomInputComponent.ɵfac = function CustomInputComponent_Factory(t) { return new (t || CustomInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CustomInputService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CustomInputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CustomInputComponent, selectors: [["CustomInput"]], hostVars: 4, hostBindings: function CustomInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("fake-input-container", ctx.clsFakeContainer)("fake-input-container-left", ctx.clsFakeContainerLeft);
    } }, inputs: { value: "value", defaultValue: "defaultValue", maxLength: "maxLength", placeholder: "placeholder", editable: "editable", disabled: "disabled", fontColor: "fontColor", moneyKeyboardAlign: "moneyKeyboardAlign", setFocus: "setFocus" }, outputs: { onChange: "onChange", onBlur: "onBlur", onFocus: "onFocus" }, features: [ɵngcc0.ɵɵProvidersFeature([CustomInputService])], decls: 3, vars: 5, consts: [["class", "fake-input-placeholder", 4, "ngIf"], [3, "ngClass", "click"], [1, "fake-input-placeholder"]], template: function CustomInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CustomInputComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function CustomInputComponent_Template_div_click_1_listener() { return ctx.onFakeInputClick(); });
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.value === "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("color", ctx.fontColor);
        ɵngcc0.ɵɵproperty("ngClass", ctx.fakeInputCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, "\n");
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomInputComponent, [{
        type: Component,
        args: [{
                selector: 'CustomInput',
                template: "<div *ngIf=\"value === ''\" class=\"fake-input-placeholder\">\n  {{ placeholder }}\n</div>\n<div [ngClass]=\"fakeInputCls\" [style.color]=\"fontColor\" (click)=\"onFakeInputClick()\">\n  {{ value }}\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [CustomInputService]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CustomInputService }, { type: ɵngcc0.NgZone }]; }, { onChange: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], clsFakeContainer: [{
            type: HostBinding,
            args: ['class.fake-input-container']
        }], clsFakeContainerLeft: [{
            type: HostBinding,
            args: ['class.fake-input-container-left']
        }], value: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], editable: [{
            type: Input
        }], disabled: [{
            type: Input
        }], fontColor: [{
            type: Input
        }], moneyKeyboardAlign: [{
            type: Input
        }], setFocus: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9pbnB1dC1pdGVtL2N1c3RvbS1pbnB1dC9jdXN0b20taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVE1RCxNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUF3RmxDLFlBQW9CLElBQWdCLEVBQVUsbUJBQXVDLEVBQVUsT0FBZTtBQUFJLFFBQTlGLFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7QUFBQyxRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxRQXZGL0csc0JBQWlCLEdBQVcsb0JBQW9CLENBQUM7QUFDbkQsUUFDRSxVQUFLLEdBQVksS0FBSyxDQUFDO0FBQ3pCLFFBQ1UsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUM5QixRQUFVLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0FBQ3JDLFFBQVUsaUJBQVksR0FBVyxFQUFFLENBQUM7QUFDcEMsUUFDVSxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQ3BDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFpRUUsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3hELFFBQ0UsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3RELFFBQ0UsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3ZELFFBRUUscUJBQWdCLEdBQVksSUFBSSxD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LHFCQUNDLE1BQU07QUFDUCxzQkFDQyxNQUFNO0FBQ1AsK0JBRUMsV0FBVyxTQUFDLDRCQUE0QjtBQUN0QyxtQ0FDRixXQUFXLFNBQUMsaUNBQWlDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RCaW5kaW5nLFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21JbnB1dFNlcnZpY2UgfSBmcm9tICcuL2N1c3RvbS1pbnB1dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ3VzdG9tSW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbQ3VzdG9tSW5wdXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAga2V5Ym9hcmRQcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1udW1iZXIta2V5Ym9hcmQnO1xuICBmYWtlSW5wdXRDbHM6IG9iamVjdDtcbiAgZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX2VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2V0Rm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcHJldmVudEtleWJvYXJkOiBib29sZWFuO1xuICBwcml2YXRlIF9tb25leUtleWJvYXJkQWxpZ246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udENvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9tYXhMZW5ndGggPj0gMCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2LnRvU3RyaW5nKCkuc3Vic3RyKDAsIHRoaXMuX21heExlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdi50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2RlZmF1bHRWYWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbWF4TGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VkaXRhYmxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9mb250Q29sb3I7XG4gIH1cbiAgc2V0IGZvbnRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udENvbG9yID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1vbmV5S2V5Ym9hcmRBbGlnbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9uZXlLZXlib2FyZEFsaWduID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDb250YWluZXJDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2V0Rm9jdXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldEZvY3VzID0gdmFsdWUuZm9jdXM7XG4gICAgICBpZiAodGhpcy5fc2V0Rm9jdXMpIHtcbiAgICAgICAgdGhpcy5pbnB1dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWtlLWlucHV0LWNvbnRhaW5lcicpXG4gIGNsc0Zha2VDb250YWluZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZha2UtaW5wdXQtY29udGFpbmVyLWxlZnQnKVxuICBjbHNGYWtlQ29udGFpbmVyTGVmdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2N1c3RvbUlucHV0U2VydmljZTogQ3VzdG9tSW5wdXRTZXJ2aWNlLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBvbkZha2VJbnB1dENsaWNrKCkge1xuICAgIGlmICh0aGlzLl9wcmV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEZvY3VzKCk7XG4gIH1cblxuICBpbnB1dEZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQmx1ckxpc3RlbmVyKCk7XG4gICAgY29uc3QgZm9jdXMgPSB0aGlzLmZvY3VzO1xuICAgIGlmICghZm9jdXMgfHwgdGhpcy5fc2V0Rm9jdXMpIHtcbiAgICAgIHRoaXMub25JbnB1dEZvY3VzKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGRCbHVyTGlzdGVuZXIoKTtcbiAgICB9LCA1MCk7XG4gIH1cblxuICBkb0JsdXIgPSBldiA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAvLyDngrnlh7vmmK/lkKbmmK/nu4Tku7bmnKzouqtcbiAgICBsZXQgcGFyZW50Rm91bmQgPSBmYWxzZTtcbiAgICAvLyDngrnlh7vnm67moIfmmK/lkKbmmK9jdXN0b20taW5wdXRcbiAgICBsZXQgaXNJbnB1dCA9IGZhbHNlO1xuICAgIC8vIOeCueWHu+ebruagh+aYr+WQpuaYr2N1c3RvbS1rZXlib2FyZFxuICAgIGxldCBpc0tleWJvYXJkID0gZmFsc2U7XG4gICAgbGV0IGlzQ2xlYXIgPSBmYWxzZTtcbiAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBudWxsICYmICFwYXJlbnRGb3VuZCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5fcmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50Rm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdjdXN0b21pbnB1dCcpIHtcbiAgICAgICAgaXNJbnB1dCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2N1c3RvbWtleWJvYXJkJykge1xuICAgICAgICBpc0tleWJvYXJkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ2FtLWlucHV0LWNsZWFyJykgPj0gMCkge1xuICAgICAgICBpc0NsZWFyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICAvLyDlvZPngrnlh7vnm67moIfmmK/mnKzouqvnmoTml7blgJnvvIzojrflj5bnhKbngrnjgIHkuI3pmpDol49rZXlib2FyZFxuICAgIC8vIOW9k+eCueWHu+ebruagh+S4jeaYr+acrOi6q+S9huaYr+WFtuS7lueahGN1c3RvbS1pbnB1dOaXtu+8jOWkseWOu+eEpueCueOAgeS4jemakOiXj2tleWJvYXJkXG4gICAgLy8g5b2T54K55Ye755uu5qCH5piva2V5Ym9hcmTml7bvvIzkuI3lpLHljrvnhKbngrnvvIzkuI3pmpDol49rZXlib2FyZFxuICAgIGlmIChwYXJlbnRGb3VuZCkge1xuICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpc0lucHV0KSB7XG4gICAgICB0aGlzLl9zZXRGb2N1cyA9IGZhbHNlO1xuICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkJsdXIuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzICYmIGlzS2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgICAgdGhpcy5vbktleWJvYXJkQ2xpY2soQ3VzdG9tSW5wdXRTZXJ2aWNlLmNsaWNrVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoIXBhcmVudEZvdW5kICYmICFpc0lucHV0ICYmICFpc0tleWJvYXJkICYmICFpc0NsZWFyICYmICF0aGlzLl9zZXRGb2N1cykge1xuICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2V0Rm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMub25CbHVyLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgQ3VzdG9tSW5wdXRTZXJ2aWNlLmhpZGVLZXlib2FyZCgpO1xuICAgIH1cbiAgICB0aGlzLnNldEZha2VJbnB1dENscygpO1xuICB9XG5cbiAgcmVtb3ZlQmx1ckxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb0JsdXIsIGZhbHNlKTtcbiAgfVxuXG4gIGFkZEJsdXJMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9CbHVyLCBmYWxzZSk7XG4gIH1cblxuICBvbklucHV0Qmx1ciA9IHZhbHVlID0+IHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZXRGYWtlSW5wdXRDbHMoKTtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICBDdXN0b21JbnB1dFNlcnZpY2UuaGlkZUtleWJvYXJkKCk7XG4gIH1cblxuICBvbklucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgdGhpcy5vbkZvY3VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuX3NldEZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZXRGYWtlSW5wdXRDbHMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIEN1c3RvbUlucHV0U2VydmljZS5zaG93S2V5Ym9hcmQoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgc2V0RmFrZUlucHV0Q2xzID0gKCkgPT4ge1xuICAgIHRoaXMuZmFrZUlucHV0Q2xzID0ge1xuICAgICAgW2BmYWtlLWlucHV0YF06IHRydWUsXG4gICAgICBbJ2Zha2UtaW5wdXQtZGlzYWJsZWQnXTogdGhpcy5fZGlzYWJsZWQsXG4gICAgICBbJ2ZvY3VzJ106IHRoaXMuZm9jdXNcbiAgICB9O1xuICB9XG5cbiAgc2V0Q29udGFpbmVyQ2xzID0gKCkgPT4ge1xuICAgIHRoaXMuY2xzRmFrZUNvbnRhaW5lckxlZnQgPSB0aGlzLl9tb25leUtleWJvYXJkQWxpZ24gPT09ICdsZWZ0JztcbiAgfVxuXG4gIG9uS2V5Ym9hcmRDbGljayA9IGtleWJvYXJkSXRlbVZhbHVlID0+IHtcbiAgICBsZXQgdmFsdWVBZnRlckNoYW5nZTtcbiAgICAvLyDliKDpmaTplK5cbiAgICBpZiAoa2V5Ym9hcmRJdGVtVmFsdWUgPT09ICdkZWxldGUnKSB7XG4gICAgICB2YWx1ZUFmdGVyQ2hhbmdlID0gdGhpcy5fdmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuX3ZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHZhbHVlQWZ0ZXJDaGFuZ2UpO1xuICAgICAgLy8g56Gu6K6k6ZSuXG4gICAgfSBlbHNlIGlmIChrZXlib2FyZEl0ZW1WYWx1ZSA9PT0gJ2NvbmZpcm0nKSB7XG4gICAgICB2YWx1ZUFmdGVyQ2hhbmdlID0gdGhpcy5fdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodmFsdWVBZnRlckNoYW5nZSk7XG4gICAgICB0aGlzLm9uSW5wdXRCbHVyKHRoaXMuX3ZhbHVlKTtcbiAgICAgIC8vIOaUtui1t+mUrlxuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRJdGVtVmFsdWUgPT09ICdoaWRlJykge1xuICAgICAgdmFsdWVBZnRlckNoYW5nZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5vbklucHV0Qmx1cih2YWx1ZUFmdGVyQ2hhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9tYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICArdGhpcy5fbWF4TGVuZ3RoID49IDAgJiZcbiAgICAgICAgKHRoaXMuX3ZhbHVlICsga2V5Ym9hcmRJdGVtVmFsdWUpLmxlbmd0aCA+IHRoaXMuX21heExlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlQWZ0ZXJDaGFuZ2UgPSAodGhpcy5fdmFsdWUgKyBrZXlib2FyZEl0ZW1WYWx1ZSkuc3Vic3RyKDAsIHRoaXMuX21heExlbmd0aCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZUFmdGVyQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlQWZ0ZXJDaGFuZ2UgPSB0aGlzLl92YWx1ZSArIGtleWJvYXJkSXRlbVZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodmFsdWVBZnRlckNoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZUFmdGVyQ2hhbmdlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcHJldmVudEtleWJvYXJkID0gdGhpcy5fZGlzYWJsZWQgfHwgIXRoaXMuX2VkaXRhYmxlO1xuICAgIHRoaXMuc2V0RmFrZUlucHV0Q2xzKCk7XG4gICAgdGhpcy5zZXRDb250YWluZXJDbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlQmx1ckxpc3RlbmVyKCk7XG4gICAgaWYgKEN1c3RvbUlucHV0U2VydmljZSkge1xuICAgICAgQ3VzdG9tSW5wdXRTZXJ2aWNlLmhpZGVLZXlib2FyZCgpO1xuICAgICAgQ3VzdG9tSW5wdXRTZXJ2aWNlLmNvbXBSZWYgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmtleWJvYXJkUHJlZml4Q2xzfS1jb250YWluZXJgKTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=