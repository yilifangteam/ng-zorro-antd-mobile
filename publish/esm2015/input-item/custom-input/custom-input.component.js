import { Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, HostBinding, NgZone } from '@angular/core';
import { CustomInputService } from './custom-input.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiaW5wdXQtaXRlbS9jdXN0b20taW5wdXQvY3VzdG9tLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVE1RCxNQUFNLE9BQU8sb0JBQW9CO0lBd0YvQixZQUFvQixJQUFnQixFQUFVLG1CQUF1QyxFQUFVLE9BQWU7UUFBMUYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBdkY5RyxzQkFBaUIsR0FBVyxvQkFBb0IsQ0FBQztRQUVqRCxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRWYsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWtFbkMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHckQscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBYWpDLGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsTUFBTSxLQUFL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QUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xDLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFDRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixZQUFZLENBQUMsQ0FBQztRQUNqRixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQXhQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDROQUE0QztnQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hDOzs7WUFqQkMsVUFBVTtZQVVILGtCQUFrQjtZQUZ6QixNQUFNOzs7b0JBMEJMLEtBQUs7MkJBYUwsS0FBSzt3QkFPTCxLQUFLOzBCQUlMLEtBQUs7dUJBT0wsS0FBSzt1QkFJTCxLQUFLO3dCQUlMLEtBQUs7aUNBT0wsS0FBSzt1QkFLTCxLQUFLO3VCQVNMLE1BQU07cUJBRU4sTUFBTTtzQkFFTixNQUFNOytCQUdOLFdBQVcsU0FBQyw0QkFBNEI7bUNBRXhDLFdBQVcsU0FBQyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0QmluZGluZyxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tSW5wdXRTZXJ2aWNlIH0gZnJvbSAnLi9jdXN0b20taW5wdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0N1c3RvbUlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW0N1c3RvbUlucHV0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGtleWJvYXJkUHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tbnVtYmVyLWtleWJvYXJkJztcbiAgZmFrZUlucHV0Q2xzOiBvYmplY3Q7XG4gIGZvY3VzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21heExlbmd0aDogbnVtYmVyO1xuICBwcml2YXRlIF9lZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NldEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3ByZXZlbnRLZXlib2FyZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbW9uZXlLZXlib2FyZEFsaWduOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodjogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fbWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdi50b1N0cmluZygpLnN1YnN0cigwLCB0aGlzLl9tYXhMZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHYudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9kZWZhdWx0VmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZWRpdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0YWJsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udENvbG9yO1xuICB9XG4gIHNldCBmb250Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRDb2xvciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtb25leUtleWJvYXJkQWxpZ24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vbmV5S2V5Ym9hcmRBbGlnbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNldEZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRGb2N1cyA9IHZhbHVlLmZvY3VzO1xuICAgICAgaWYgKHRoaXMuX3NldEZvY3VzKSB7XG4gICAgICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmFrZS1pbnB1dC1jb250YWluZXInKVxuICBjbHNGYWtlQ29udGFpbmVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWtlLWlucHV0LWNvbnRhaW5lci1sZWZ0JylcbiAgY2xzRmFrZUNvbnRhaW5lckxlZnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jdXN0b21JbnB1dFNlcnZpY2U6IEN1c3RvbUlucHV0U2VydmljZSwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgb25GYWtlSW5wdXRDbGljaygpIHtcbiAgICBpZiAodGhpcy5fcHJldmVudEtleWJvYXJkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgaW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnJlbW92ZUJsdXJMaXN0ZW5lcigpO1xuICAgIGNvbnN0IGZvY3VzID0gdGhpcy5mb2N1cztcbiAgICBpZiAoIWZvY3VzIHx8IHRoaXMuX3NldEZvY3VzKSB7XG4gICAgICB0aGlzLm9uSW5wdXRGb2N1cygpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYWRkQmx1ckxpc3RlbmVyKCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgZG9CbHVyID0gZXYgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgLy8g54K55Ye75piv5ZCm5piv57uE5Lu25pys6LqrXG4gICAgbGV0IHBhcmVudEZvdW5kID0gZmFsc2U7XG4gICAgLy8g54K55Ye755uu5qCH5piv5ZCm5pivY3VzdG9tLWlucHV0XG4gICAgbGV0IGlzSW5wdXQgPSBmYWxzZTtcbiAgICAvLyDngrnlh7vnm67moIfmmK/lkKbmmK9jdXN0b20ta2V5Ym9hcmRcbiAgICBsZXQgaXNLZXlib2FyZCA9IGZhbHNlO1xuICAgIGxldCBpc0NsZWFyID0gZmFsc2U7XG4gICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldDtcbiAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldCAhPT0gbnVsbCAmJiAhcGFyZW50Rm91bmQpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuX3JlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudEZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnY3VzdG9taW5wdXQnKSB7XG4gICAgICAgIGlzSW5wdXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdjdXN0b21rZXlib2FyZCcpIHtcbiAgICAgICAgaXNLZXlib2FyZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdhbS1pbnB1dC1jbGVhcicpID49IDApIHtcbiAgICAgICAgaXNDbGVhciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgLy8g5b2T54K55Ye755uu5qCH5piv5pys6Lqr55qE5pe25YCZ77yM6I635Y+W54Sm54K544CB5LiN6ZqQ6JePa2V5Ym9hcmRcbiAgICAvLyDlvZPngrnlh7vnm67moIfkuI3mmK/mnKzouqvkvYbmmK/lhbbku5bnmoRjdXN0b20taW5wdXTml7bvvIzlpLHljrvnhKbngrnjgIHkuI3pmpDol49rZXlib2FyZFxuICAgIC8vIOW9k+eCueWHu+ebruagh+aYr2tleWJvYXJk5pe277yM5LiN5aSx5Y6754Sm54K577yM5LiN6ZqQ6JePa2V5Ym9hcmRcbiAgICBpZiAocGFyZW50Rm91bmQpIHtcbiAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXNJbnB1dCkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMub25CbHVyLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1cyAmJiBpc0tleWJvYXJkKSB7XG4gICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMub25LZXlib2FyZENsaWNrKEN1c3RvbUlucHV0U2VydmljZS5jbGlja1ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRGb3VuZCAmJiAhaXNJbnB1dCAmJiAhaXNLZXlib2FyZCAmJiAhaXNDbGVhciAmJiAhdGhpcy5fc2V0Rm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NldEZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLm9uQmx1ci5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIEN1c3RvbUlucHV0U2VydmljZS5oaWRlS2V5Ym9hcmQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRGYWtlSW5wdXRDbHMoKTtcbiAgfVxuXG4gIHJlbW92ZUJsdXJMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9CbHVyLCBmYWxzZSk7XG4gIH1cblxuICBhZGRCbHVyTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvQmx1ciwgZmFsc2UpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIgPSB2YWx1ZSA9PiB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuc2V0RmFrZUlucHV0Q2xzKCk7XG4gICAgdGhpcy5vbkJsdXIuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgQ3VzdG9tSW5wdXRTZXJ2aWNlLmhpZGVLZXlib2FyZCgpO1xuICB9XG5cbiAgb25JbnB1dEZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMub25Gb2N1cy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLl9zZXRGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuc2V0RmFrZUlucHV0Q2xzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBDdXN0b21JbnB1dFNlcnZpY2Uuc2hvd0tleWJvYXJkKCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHNldEZha2VJbnB1dENscyA9ICgpID0+IHtcbiAgICB0aGlzLmZha2VJbnB1dENscyA9IHtcbiAgICAgIFtgZmFrZS1pbnB1dGBdOiB0cnVlLFxuICAgICAgWydmYWtlLWlucHV0LWRpc2FibGVkJ106IHRoaXMuX2Rpc2FibGVkLFxuICAgICAgWydmb2N1cyddOiB0aGlzLmZvY3VzXG4gICAgfTtcbiAgfVxuXG4gIHNldENvbnRhaW5lckNscyA9ICgpID0+IHtcbiAgICB0aGlzLmNsc0Zha2VDb250YWluZXJMZWZ0ID0gdGhpcy5fbW9uZXlLZXlib2FyZEFsaWduID09PSAnbGVmdCc7XG4gIH1cblxuICBvbktleWJvYXJkQ2xpY2sgPSBrZXlib2FyZEl0ZW1WYWx1ZSA9PiB7XG4gICAgbGV0IHZhbHVlQWZ0ZXJDaGFuZ2U7XG4gICAgLy8g5Yig6Zmk6ZSuXG4gICAgaWYgKGtleWJvYXJkSXRlbVZhbHVlID09PSAnZGVsZXRlJykge1xuICAgICAgdmFsdWVBZnRlckNoYW5nZSA9IHRoaXMuX3ZhbHVlLnN1YnN0cmluZygwLCB0aGlzLl92YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZUFmdGVyQ2hhbmdlKTtcbiAgICAgIC8vIOehruiupOmUrlxuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRJdGVtVmFsdWUgPT09ICdjb25maXJtJykge1xuICAgICAgdmFsdWVBZnRlckNoYW5nZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHZhbHVlQWZ0ZXJDaGFuZ2UpO1xuICAgICAgdGhpcy5vbklucHV0Qmx1cih0aGlzLl92YWx1ZSk7XG4gICAgICAvLyDmlLbotbfplK5cbiAgICB9IGVsc2UgaWYgKGtleWJvYXJkSXRlbVZhbHVlID09PSAnaGlkZScpIHtcbiAgICAgIHZhbHVlQWZ0ZXJDaGFuZ2UgPSB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMub25JbnB1dEJsdXIodmFsdWVBZnRlckNoYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fbWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgK3RoaXMuX21heExlbmd0aCA+PSAwICYmXG4gICAgICAgICh0aGlzLl92YWx1ZSArIGtleWJvYXJkSXRlbVZhbHVlKS5sZW5ndGggPiB0aGlzLl9tYXhMZW5ndGhcbiAgICAgICkge1xuICAgICAgICB2YWx1ZUFmdGVyQ2hhbmdlID0gKHRoaXMuX3ZhbHVlICsga2V5Ym9hcmRJdGVtVmFsdWUpLnN1YnN0cigwLCB0aGlzLl9tYXhMZW5ndGgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodmFsdWVBZnRlckNoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUFmdGVyQ2hhbmdlID0gdGhpcy5fdmFsdWUgKyBrZXlib2FyZEl0ZW1WYWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHZhbHVlQWZ0ZXJDaGFuZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWVBZnRlckNoYW5nZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3ByZXZlbnRLZXlib2FyZCA9IHRoaXMuX2Rpc2FibGVkIHx8ICF0aGlzLl9lZGl0YWJsZTtcbiAgICB0aGlzLnNldEZha2VJbnB1dENscygpO1xuICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUJsdXJMaXN0ZW5lcigpO1xuICAgIGlmIChDdXN0b21JbnB1dFNlcnZpY2UpIHtcbiAgICAgIEN1c3RvbUlucHV0U2VydmljZS5oaWRlS2V5Ym9hcmQoKTtcbiAgICAgIEN1c3RvbUlucHV0U2VydmljZS5jb21wUmVmID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5rZXlib2FyZFByZWZpeENsc30tY29udGFpbmVyYCk7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19