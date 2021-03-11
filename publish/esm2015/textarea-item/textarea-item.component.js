import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRleHRhcmVhLWl0ZW0vdGV4dGFyZWEtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBR1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWF6RSxNQUFNLE9BQU8scUJBQXFCO0lBbUxoQyxZQUFvQixPQUFtQixFQUFVLE1BQWlCO1FBQTlDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbExsRSxjQUFTLEdBQVcsYUFBYSxDQUFDO1FBT2xDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGNBQVMsR0FBVyxRQUFRLENBQUM7UUFHckIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFFM0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBaUkxQyxhQUFRLEdBQXNCLElB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SyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7O1lBbFRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1Qyx5aUNBQTZDO2dCQUM3QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O1lBZkMsVUFBVTtZQUNWLFNBQVM7OztzQkE4Q1IsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBR2xDLEtBQUs7MkJBYUwsS0FBSzswQkFTTCxLQUFLO3VCQU9MLEtBQUs7dUJBT0wsS0FBSztvQkFRTCxLQUFLO21CQU9MLEtBQUs7b0JBUUwsS0FBSzswQkFRTCxLQUFLO29CQUtMLEtBQUs7NEJBU0wsS0FBSzttQkFRTCxLQUFLO3lCQUtMLEtBQUs7b0JBSUwsS0FBSztvQkFXTCxLQUFLO3dCQU9MLEtBQUs7dUJBT0wsTUFBTTtxQkFFTixNQUFNO3NCQUVOLE1BQU07MkJBRU4sTUFBTTtzQkFHTixXQUFXLFNBQUMsd0JBQXdCOzBCQUVwQyxXQUFXLFNBQUMsNEJBQTRCO3VCQUV4QyxXQUFXLFNBQUMseUJBQXlCO3VCQUVyQyxXQUFXLFNBQUMseUJBQXlCOzRCQUVyQyxXQUFXLFNBQUMsb0NBQW9DOzBCQUVoRCxXQUFXLFNBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGV4dGFyZWFJdGVtICwgbnptLXRleHRhcmVhLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGV4dGFyZWFJdGVtQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10ZXh0YXJlYSc7XG4gIHdyYXBDbHM6IG9iamVjdDtcbiAgbGFiZWxDbHM6IG9iamVjdDtcbiAgY29udHJvbENsczogb2JqZWN0O1xuICBjbGVhckNsczogb2JqZWN0O1xuICBoYXNDb3VudDogYm9vbGVhbjtcbiAgY2hhcmFjdGVyTGVuZ3RoOiBudW1iZXI7XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBtYXhMZW5ndGg6IG51bWJlciA9IEluZmluaXR5O1xuXG4gIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9wcmVmaXhMaXN0Q2xzID0gJ2FtLWxpc3QnO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcm93czogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfY291bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXV0b0hlaWdodDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGFiZWxOdW1iZXI6IG51bWJlciA9IDU7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNDbGlja2luZ0NsZWFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgndGV4dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRleHRSZWY7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB9XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gIH1cbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGFibGU7XG4gIH1cbiAgc2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdGFibGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgY2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFyO1xuICB9XG4gIHNldCBjbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsZWFyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJvd3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgfVxuICBzZXQgcm93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93cyA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGVycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxhYmVsTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sYWJlbE51bWJlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG4gIHNldCBjb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICB0aGlzLnNldENoYXJhY3Rlckxlbmd0aCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwcmVmaXhMaXN0Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeExpc3RDbHM7XG4gIH1cbiAgc2V0IHByZWZpeExpc3RDbHModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeExpc3RDbHMgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgdGhpcy50ZXh0UmVmLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHRoaXMuX25hbWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGF1dG9IZWlnaHQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvSGVpZ2h0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9jdXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuZm9jdXMpIHtcbiAgICAgIHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmlucHV0Rm9jdXMoJycpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkVycm9yQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10ZXh0YXJlYS1pdGVtJylcbiAgY2xzSXRlbTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtZGlzYWJsZWQnKVxuICBjbHNEaXNhYmxlZDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10ZXh0YXJlYS1lcnJvcicpXG4gIGNsc0Vycm9yOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRleHRhcmVhLWZvY3VzJylcbiAgY2xzRm9jdXM6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtaXRlbS1zaW5nbGUtbGluZScpXG4gIGNsc1NpbmdsZUxpbmU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGV4dGFyZWEtaGFzLWNvdW50JylcbiAgY2xzSGFzQ291bnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fZWwgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICBzZXRDbHMoKSB7XG4gICAgdGhpcy5oYXNDb3VudCA9IHRoaXMuX2NvdW50ID4gMCAmJiB0aGlzLl9yb3dzID4gMTtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5fcHJlZml4TGlzdENscyArICctaXRlbScpO1xuICAgIHRoaXMuY2xzU2luZ2xlTGluZSA9IHRoaXMuX3Jvd3MgPT09IDEgJiYgIXRoaXMuX2F1dG9IZWlnaHQ7XG4gICAgdGhpcy5jbHNEaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xuICAgIHRoaXMuY2xzRXJyb3IgPSB0aGlzLl9lcnJvcjtcbiAgICB0aGlzLmNsc0ZvY3VzID0gdGhpcy5fZm9jdXM7XG4gICAgdGhpcy5jbHNIYXNDb3VudCA9IHRoaXMuaGFzQ291bnQ7XG4gICAgdGhpcy5sYWJlbENscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWxgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtMmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtM2BdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gMyxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNGBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNWBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtNmBdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gNixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFiZWwtN2BdOiB0aGlzLl9sYWJlbE51bWJlciA9PT0gN1xuICAgIH07XG4gICAgdGhpcy5jb250cm9sQ2xzID0geyBbYCR7dGhpcy5wcmVmaXhDbHN9LWNvbnRyb2xgXTogdHJ1ZSB9O1xuICAgIHRoaXMuY2xlYXJDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNsZWFyLWFjdGl2ZWBdOiB0aGlzLl9pc0NsaWNraW5nQ2xlYXJcbiAgICB9O1xuICB9XG4gIHNldENoYXJhY3Rlckxlbmd0aCgpIHtcbiAgICB0aGlzLmNoYXJhY3Rlckxlbmd0aCA9IHRoaXMuY291bnRTeW1ib2xzKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAodGhpcy5fY291bnQgPiAwKSB7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuX2NvdW50IC0gdGhpcy5jaGFyYWN0ZXJMZW5ndGggKyAodGhpcy5fdmFsdWUgPyB0aGlzLl92YWx1ZS5sZW5ndGggOiAwKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgIHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJMZW5ndGgoKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIGlucHV0Rm9jdXModmFsdWUpIHtcbiAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkZvY3VzLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Qmx1cih2YWx1ZSwgZXZlbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgICAgdGhpcy5vbkJsdXIuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLl9pc0NsZWFyID0gZmFsc2U7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5faXNDbGlja2luZ0NsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UoJycpO1xuICAgICAgdGhpcy5pbnB1dEZvY3VzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX2lzQ2xpY2tpbmdDbGVhciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHMoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGVycm9yQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLm9uRXJyb3JDbGljaykge1xuICAgICAgdGhpcy5vbkVycm9yQ2xpY2suZW1pdChlKTtcbiAgICB9XG4gIH1cbiAgcmVBbGlnbkhlaWdodCgpIHtcbiAgICBjb25zdCB0ZXh0YXJlYURvbSA9IHRoaXMudGV4dFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRleHRhcmVhRG9tLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRleHRhcmVhRG9tLnN0eWxlLmhlaWdodCA9IGAke3RleHRhcmVhRG9tLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cblxuICBjb3VudFN5bWJvbHModGV4dCA9ICcnKSB7XG4gICAgY29uc3QgcmVnZXhBc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18XFxuL2c7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleEFzdHJhbFN5bWJvbHMsICdfJykubGVuZ3RoO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2hhcmFjdGVyTGVuZ3RoKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRleHRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJMZW5ndGgoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5fYXV0b0hlaWdodCkge1xuICAgICAgdGhpcy5yZUFsaWduSGVpZ2h0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=