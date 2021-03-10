import { Component, Input, Output, EventEmitter, ViewChild, HostBinding, Renderer2, ElementRef, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isTemplateRef } from '../core/util/check';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImlucHV0LWl0ZW0vaW5wdXQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBY25ELE1BQU0sT0FBTyxrQkFBa0I7SUE4TzdCLFlBQW9CLE9BQW1CLEVBQVUsTUFBaUI7UUFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUE3T2xFLGNBQVMsR0FBVyxVQUFVLENBQUM7UUFJL0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFpQixNQUFNLENBQUM7UUFDakMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUd0QixVQUFLLEdBQWlCLE1BQU0sQ0FBQztRQUU3QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBOEIsRUFBRSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxtQkFBYyxHQUFXLFNBQVMsQ0FBQztRQUVuQyx3QkFBbUIsR0FBVyxPQUFPLENBQUM7UUFFdEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBOEIsRUFBRSxDQUFDO1FBQ3pDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFvTG5CLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUdsQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTFELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHMUQsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVyxHQUFZLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFdEMsYUFBUSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsYUFBUSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsZUFBVSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFNbEMsY0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFIekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUF2TUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQW1CO1FBQzFCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFVBQVUsSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTSxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7SUFDRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxPQUFPLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBQ0QsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNsQztJQUNILENBQUM7SUFDRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQ0ksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFDSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUNJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFDSSxLQUFLLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFnQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQWdDRCxNQUFNO1FBQ0osSUFDRSxJQUFJLENBQUMsUUFBUTtZQUNiLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUM5QyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLEVBQzdCO1lBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsSUFBSTtnQkFDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUM7YUFDdkQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLDhIQUE4SDtRQUM5SCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtnQkFDMUUsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsS0FBSyxVQUFVO29CQUNiLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRSxNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ2hDLEtBQUssR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDcEQ7eUJBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO3dCQUN4QixLQUFLLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzFFO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDakMsTUFBTTthQUNUO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLGFBQWEsWUFBWSxXQUFXLEVBQUU7WUFDcEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjtRQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQUs7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTyxJQUFTLENBQUM7SUFFbkMsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQXZZRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsdWtFQUEwQztnQkFDMUMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7OztZQWxCQyxVQUFVO1lBRFYsU0FBUzs7O3VCQXdEUixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFFMUMsU0FBUyxTQUFDLGNBQWM7eUJBR3hCLEtBQUs7bUJBUUwsS0FBSztvQkFxQkwsS0FBSzsyQkFXTCxLQUFLOzBCQVVMLEtBQUs7dUJBUUwsS0FBSzt1QkFRTCxLQUFLO29CQVFMLEtBQUs7d0JBT0wsS0FBSztvQkFPTCxLQUFLO29CQVFMLEtBQUs7MEJBWUwsS0FBSztnQ0FLTCxLQUFLOzRCQUlMLEtBQUs7bUJBU0wsS0FBSztpQ0FPTCxLQUFLO3FCQU9MLEtBQUs7d0JBSUwsS0FBSztvQkFPTCxLQUFLO3NCQWFMLEtBQUs7Z0NBU0wsS0FBSzt1QkFFTCxNQUFNO3FCQUVOLE1BQU07c0JBRU4sTUFBTTsyQkFFTixNQUFNOzJCQUVOLE1BQU07c0JBR04sV0FBVyxTQUFDLHFCQUFxQjswQkFFakMsV0FBVyxTQUFDLHlCQUF5Qjt1QkFFckMsV0FBVyxTQUFDLHNCQUFzQjt1QkFFbEMsV0FBVyxTQUFDLHNCQUFzQjt5QkFFbEMsV0FBVyxTQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56bUlucHV0VHlwZSB9IGZyb20gJy4vaW5wdXQtaXRlbS5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0lucHV0SXRlbSwgbnptLWlucHV0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRJdGVtQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1pbnB1dCc7XG4gIHdyYXBDbHM6IG9iamVjdDtcbiAgbGFiZWxDbHM6IG9iamVjdDtcbiAgY29udHJvbENsczogb2JqZWN0O1xuICBzZXRGb2N1czogb2JqZWN0ID0ge307XG4gIHBhdHRlcm46IHN0cmluZyA9ICcnO1xuICBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5wdXRUeXBlOiBOem1JbnB1dFR5cGUgPSAndGV4dCc7XG4gIG5nVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG5cbiAgcHJpdmF0ZSBfZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90eXBlOiBOem1JbnB1dFR5cGUgPSAndGV4dCc7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfZWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tYXhMZW5ndGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnJztcbiAgcHJpdmF0ZSBfbGFiZWxOdW1iZXI6IG51bWJlciA9IDEwO1xuICBwcml2YXRlIF91cGRhdGVQbGFjZWhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wcmVmaXhMaXN0Q2xzOiBzdHJpbmcgPSAnYW0tbGlzdCc7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9uZXlLZXlib2FyZEFsaWduOiBzdHJpbmcgPSAncmlnaHQnO1xuICBwcml2YXRlIF9sb2NhbGU7XG4gIHByaXZhdGUgX2ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZm9udENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnJztcbiAgcHJpdmF0ZSBfaW5wdXRMb2NrID0gZmFsc2U7XG4gIHByaXZhdGUgX256UmVxdWlyZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdsYWJsZUNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBsYWJsZVJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JylcbiAgaW5wdXRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuelJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uelJlcXVpcmVkO1xuICB9XG4gIHNldCBuelJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbnpSZXF1aXJlZCA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHR5cGUoKTogTnptSW5wdXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogTnptSW5wdXRUeXBlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5wdXRUeXBlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09ICdiYW5rQ2FyZCcgfHwgdmFsdWUgPT09ICdwaG9uZScpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9ICd0ZWwnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICB0aGlzLl90eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdkaWdpdCcgfHwgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSAnbnVtYmVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5wYXR0ZXJuID0gJ1swLTldKic7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodjogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkZWZhdWx0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICB9XG4gIHNldCBkZWZhdWx0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lZGl0YWJsZTtcbiAgfVxuICBzZXQgZWRpdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0YWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2xzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgY2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFyO1xuICB9XG4gIHNldCBjbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsZWFyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhMZW5ndGg7XG4gIH1cbiAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGVycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICAgIHRoaXMuY2xzRXJyb3IgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZXh0cmEoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhO1xuICB9XG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGFiZWxOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xhYmVsTnVtYmVyID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlUGxhY2Vob2xkZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl91cGRhdGVQbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwcmVmaXhMaXN0Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeExpc3RDbHM7XG4gIH1cbiAgc2V0IHByZWZpeExpc3RDbHModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeExpc3RDbHMgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdmFsdWUgKyAnLWl0ZW0nKTtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdmFsdWUgKyAnLWl0ZW0tbWlkZGxlJyk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtb25leUtleWJvYXJkQWxpZ24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uZXlLZXlib2FyZEFsaWduO1xuICB9XG4gIHNldCBtb25leUtleWJvYXJkQWxpZ24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vbmV5S2V5Ym9hcmRBbGlnbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsb2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZm9udENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9mb250Q29sb3I7XG4gIH1cbiAgc2V0IGZvbnRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udENvbG9yID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmZvY3VzKSB7XG4gICAgICB0aGlzLmF1dG9Gb2N1cyA9IHZhbHVlLmZvY3VzO1xuICAgICAgaWYgKHRoaXMuX3R5cGUgPT09ICdtb25leScpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cyA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5pbnB1dEZvY3VzKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cbiAgc2V0IGNvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl9jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIGNvbXBvc2l0aW9uRmlsdGVyID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25FcnJvckNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25FeHRyYUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0taW5wdXQtaXRlbScpXG4gIGNsc0l0ZW06IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWlucHV0LWRpc2FibGVkJylcbiAgY2xzRGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLl9kaXNhYmxlZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1pbnB1dC1lcnJvcicpXG4gIGNsc0Vycm9yOiBib29sZWFuID0gdGhpcy5fZXJyb3I7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0taW5wdXQtZm9jdXMnKVxuICBjbHNGb2N1czogYm9vbGVhbiA9IHRoaXMuX2ZvY3VzO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWlucHV0LWFuZHJvaWQsJylcbiAgY2xzQW5kcm9pZDogYm9vbGVhbiA9IHRoaXMuX2ZvY3VzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX2VsID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgX29uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbiAgc2V0Q2xzKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMubGFibGVSZWYgJiZcbiAgICAgICh0aGlzLmxhYmxlUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fFxuICAgICAgICAodGhpcy5sYWJsZVJlZi5uYXRpdmVFbGVtZW50ICYmIHRoaXMubGFibGVSZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQgIT09ICcnKSB8fFxuICAgICAgICB0aGlzLl9jb250ZW50ICE9IHVuZGVmaW5lZClcbiAgICApIHtcbiAgICAgIHRoaXMubGFiZWxDbHMgPSB7XG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWxgXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYWJlbC1yZXF1aXJlZGBdOiB0aGlzLm56UmVxdWlyZWQsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtMmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMixcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYWJlbC0zYF06IHRoaXMuX2xhYmVsTnVtYmVyID09PSAzLFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhYmVsLTRgXTogdGhpcy5fbGFiZWxOdW1iZXIgPT09IDQsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNWBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNSxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYWJlbC02YF06IHRoaXMuX2xhYmVsTnVtYmVyID09PSA2LFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhYmVsLTdgXTogdGhpcy5fbGFiZWxOdW1iZXIgPT09IDdcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY29udHJvbENscyA9IHsgW2Ake3RoaXMucHJlZml4Q2xzfS1jb250cm9sYF06IHRydWUgfTtcbiAgfVxuXG4gIGlucHV0Q2hhbmdlKGlucHV0VmFsdWU6IHN0cmluZykge1xuICAgIC8vICdjb21wb3NpdGlvbmVuZCcgaXMgZWFybGllciB0aGFuIG5nTW9kZWxDaGFuZ2UsIFRoZXJlZm9yZSB1c2UgdGltZXIgdG8gbWFrZSBuZ01vZGVsQ2hhbmdlIHJ1bnMgYWZ0ZXIgJ2NvbXBvc2l0aW9uZW5kJyBldmVudFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29tcG9zaXRpb25GaWx0ZXIgJiYgdGhpcy5faW5wdXRMb2NrICYmIHRoaXMuaW5wdXRUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSAnYmFua0NhcmQnOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKS5yZXBsYWNlKC8oLi4uLikoPz0uKS9nLCAnJDEgJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykuc3Vic3RyaW5nKDAsIDExKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZUxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICBpZiAodmFsdWVMZW4gPiAzICYmIHZhbHVlTGVuIDwgOCkge1xuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZS5zdWJzdHIoMCwgMyl9ICR7dmFsdWUuc3Vic3RyKDMpfWA7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA+PSA4KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlLnN1YnN0cigwLCAzKX0gJHt2YWx1ZS5zdWJzdHIoMywgNCl9ICR7dmFsdWUuc3Vic3RyKDcpfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlucHV0VHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgY29tcG9zaXRpb25TdGFydCgpIHtcbiAgICB0aGlzLl9pbnB1dExvY2sgPSB0cnVlO1xuICB9XG5cbiAgY29tcG9zaXRpb25FbmQoKSB7XG4gICAgdGhpcy5faW5wdXRMb2NrID0gZmFsc2U7XG4gIH1cblxuICBpbnB1dEZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0YWJsZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xzRm9jdXMgPSB0cnVlO1xuICAgICAgdGhpcy5jbHNBbmRyb2lkID0gdHJ1ZTtcbiAgICB9LCAxMDApO1xuICAgIHRoaXMub25Gb2N1cy5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGlucHV0Qmx1cih2YWx1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9pc0NsZWFyKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbHNBbmRyb2lkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNDbGVhciA9IGZhbHNlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBjbGVhcklucHV0KCkge1xuICAgIGlmICh0aGlzLl90eXBlICE9PSAncGFzc3dvcmQnICYmIHRoaXMuX3VwZGF0ZVBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuX2lzQ2xlYXIgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRGb2N1cyh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBlcnJvckNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5vbkVycm9yQ2xpY2spIHtcbiAgICAgIHRoaXMub25FcnJvckNsaWNrLmVtaXQoZSk7XG4gICAgfVxuICB9XG5cbiAgZXh0cmFDbGljayhlKSB7XG4gICAgaWYgKHRoaXMub25FeHRyYUNsaWNrKSB7XG4gICAgICB0aGlzLm9uRXh0cmFDbGljay5lbWl0KGUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLl9wcmVmaXhMaXN0Q2xzICsgJy1pdGVtJyk7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMuX3ByZWZpeExpc3RDbHMgKyAnLWl0ZW0tbWlkZGxlJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=