import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInN0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWF6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBdUYzQjtRQXRGQSxjQUFTLEdBQVcsWUFBWSxDQUFDO1FBS3pCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsU0FBSSxHQUFXLENBQUMsUUFBUSxDQUFDO1FBRXpCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUEyRHRDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR25DLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWMsR0FBWSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRXpDLGVBQVUsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9CLGVBQVUsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQy9DLGNBQVMsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFwRWhCLElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFB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QUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUF2T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDg1QkFBdUM7Z0JBQ3ZDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O2tCQW9CRSxLQUFLO2tCQU9MLEtBQUs7b0JBT0wsS0FBSzttQkFPTCxLQUFLOzJCQUlMLEtBQUs7dUJBT0wsS0FBSzt1QkFZTCxLQUFLO3lCQU9MLEtBQUs7dUJBS0wsTUFBTTt5QkFHTixXQUFXLFNBQUMsa0JBQWtCOzZCQUU5QixXQUFXLFNBQUMsMkJBQTJCO3lCQUV2QyxXQUFXLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgSG9zdEJpbmRpbmcsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnU3RlcHBlciwgbnptLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RlcHBlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXN0ZXBwZXInO1xuICB1cERpc2FibGVDbHM6IG9iamVjdDtcbiAgZG93bkRpc2FibGVDbHM6IG9iamVjdDtcbiAgc3RlcHBlckNsczogb2JqZWN0O1xuXG4gIHByaXZhdGUgX21heDogbnVtYmVyID0gSW5maW5pdHk7XG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gLUluZmluaXR5O1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF91cERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rvd25EaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc1VwQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNEb3duQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc3RlcCh2YWx1ZSkge1xuICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9kb3duRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3VwRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNsc1N0cERpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgfVxuICBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWFkT25seSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzaG93TnVtYmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd051bWJlciA9IHZhbHVlO1xuICAgIHRoaXMuY2xzU2hvd051bSA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tc3RlcHBlcicpXG4gIGNsc1N0ZXBwZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXN0ZXBwZXItZGlzYWJsZWQnKVxuICBjbHNTdHBEaXNhYmxlZDogYm9vbGVhbiA9IHRoaXMuX2Rpc2FibGVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3dOdW1iZXInKVxuICBjbHNTaG93TnVtOiBib29sZWFuID0gdGhpcy5fc2hvd051bWJlcjtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hGbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25JbmNyZWFzZSgpIHtcbiAgICBpZiAoIXRoaXMuX3VwRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5wbHVzKHRoaXMuX3ZhbHVlLCB0aGlzLl9zdGVwKTtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy5fdmFsdWUpO1xuICAgICAgaWYgKHRoaXMucGx1cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCkgPiB0aGlzLl9tYXgpIHtcbiAgICAgICAgdGhpcy5fdXBEaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5taW51cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCkgPj0gdGhpcy5fbWluKSB7XG4gICAgICAgIHRoaXMuX2Rvd25EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNVcENsaWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5faXNVcENsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVjcmVhc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9kb3duRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5taW51cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCk7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMuX3ZhbHVlKTtcbiAgICAgIGlmICh0aGlzLm1pbnVzKHRoaXMuX3ZhbHVlLCB0aGlzLl9zdGVwKSA8IHRoaXMuX21pbikge1xuICAgICAgICB0aGlzLl9kb3duRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGx1cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCkgPD0gdGhpcy5fbWF4KSB7XG4gICAgICAgIHRoaXMuX3VwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzRG93bkNsaWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5faXNEb3duQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRDbHMoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50O1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgPyArdmFsdWUgOiAwO1xuICAgIGlmICh0aGlzLl92YWx1ZSA8IHRoaXMuX21pbikge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9taW47XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSA+IHRoaXMuX21heCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9tYXg7XG4gICAgfVxuICAgIHRoaXMuX3VwRGlzYWJsZWQgPSB0aGlzLnBsdXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApID4gdGhpcy5fbWF4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuX2Rvd25EaXNhYmxlZCA9IHRoaXMubWludXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApIDwgdGhpcy5fbWluID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy5fdmFsdWUpO1xuICB9XG5cbiAgc2V0Q2xzKCkge1xuICAgIHRoaXMudXBEaXNhYmxlQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1oYW5kbGVyLXVwLWRpc2FibGVkYF06IHRoaXMuX3VwRGlzYWJsZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWhhbmRsZXItYWN0aXZlYF06IHRoaXMuX2lzVXBDbGlja1xuICAgIH07XG4gICAgdGhpcy5kb3duRGlzYWJsZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taGFuZGxlci1kb3duLWRpc2FibGVkYF06IHRoaXMuX2Rvd25EaXNhYmxlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taGFuZGxlci1hY3RpdmVgXTogdGhpcy5faXNEb3duQ2xpY2tcbiAgICB9O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kb3duRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdXBEaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwRGlzYWJsZWQgPSB0aGlzLnBsdXModGhpcy5fdmFsdWUsIHRoaXMuX3N0ZXApID4gdGhpcy5fbWF4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5fZG93bkRpc2FibGVkID0gdGhpcy5taW51cyh0aGlzLl92YWx1ZSwgdGhpcy5fc3RlcCkgPCB0aGlzLl9taW4gPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xuICB9XG5cbiAgcGx1cyhudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKG51bTEgPT09IHVuZGVmaW5lZCB8fCBudW0xID09PSBudWxsIHx8IG51bTIgPT09IHVuZGVmaW5lZCB8fCBudW0yID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJhc2VOdW0gPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgodGhpcy5kaWdpdExlbmd0aChudW0xKSwgdGhpcy5kaWdpdExlbmd0aChudW0yKSkpO1xuICAgIHJldHVybiAodGhpcy50aW1lcyhudW0xLCBiYXNlTnVtKSArIHRoaXMudGltZXMobnVtMiwgYmFzZU51bSkpIC8gYmFzZU51bTtcbiAgfVxuXG4gIG1pbnVzKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAobnVtMSA9PT0gdW5kZWZpbmVkIHx8IG51bTEgPT09IG51bGwgfHwgbnVtMiA9PT0gdW5kZWZpbmVkIHx8IG51bTIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYmFzZU51bSA9IE1hdGgucG93KDEwLCBNYXRoLm1heCh0aGlzLmRpZ2l0TGVuZ3RoKG51bTEpLCB0aGlzLmRpZ2l0TGVuZ3RoKG51bTIpKSk7XG4gICAgcmV0dXJuICh0aGlzLnRpbWVzKG51bTEsIGJhc2VOdW0pIC0gdGhpcy50aW1lcyhudW0yLCBiYXNlTnVtKSkgLyBiYXNlTnVtO1xuICB9XG5cbiAgZGlnaXRMZW5ndGgobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGVTcGxpdCA9IG51bS50b1N0cmluZygpLnNwbGl0KC9bZUVdLyk7XG4gICAgY29uc3QgbGVuID0gKGVTcGxpdFswXS5zcGxpdCgnLicpWzFdIHx8ICcnKS5sZW5ndGggLSArKGVTcGxpdFsxXSB8fCAwKTtcbiAgICByZXR1cm4gbGVuID4gMCA/IGxlbiA6IDA7XG4gIH1cblxuICB0aW1lcyhudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgbnVtMUNoYW5nZWQgPSB0aGlzLmZsb2F0VG9GaXhlZChudW0xKTtcbiAgICBjb25zdCBudW0yQ2hhbmdlZCA9IHRoaXMuZmxvYXRUb0ZpeGVkKG51bTIpO1xuICAgIGNvbnN0IGJhc2VOdW0gPSB0aGlzLmRpZ2l0TGVuZ3RoKG51bTEpICsgdGhpcy5kaWdpdExlbmd0aChudW0yKTtcbiAgICBjb25zdCBsZWZ0VmFsdWUgPSBudW0xQ2hhbmdlZCAqIG51bTJDaGFuZ2VkO1xuICAgIHJldHVybiBsZWZ0VmFsdWUgLyBNYXRoLnBvdygxMCwgYmFzZU51bSk7XG4gIH1cblxuICBmbG9hdFRvRml4ZWQobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChudW0udG9TdHJpbmcoKS5pbmRleE9mKCdlJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKG51bS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgIH1cbiAgICBjb25zdCBkTGVuID0gdGhpcy5kaWdpdExlbmd0aChudW0pO1xuICAgIHJldHVybiBkTGVuID4gMCA/IHRoaXMuc3RyaXAobnVtICogTWF0aC5wb3coMTAsIGRMZW4pKSA6IG51bTtcbiAgfVxuXG4gIHN0cmlwKG51bTogbnVtYmVyLCBwcmVjaXNpb24gPSAxMik6IG51bWJlciB7XG4gICAgcmV0dXJuICtwYXJzZUZsb2F0KG51bS50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgfVxufVxuIl19