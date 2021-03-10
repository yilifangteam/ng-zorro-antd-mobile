import { Component, ViewEncapsulation, Input, Output, forwardRef, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
SearchBarComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFzQnpFLE1BQU0sT0FBTyxrQkFBa0I7SUFtSDdCLFlBQW9CLFdBQXVCLEVBQVUsZUFBc0M7UUFBdkUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFsSDNGLGNBQVMsR0FBVyxXQUFXLENBQUM7UUFHaEMsY0FBUyxHQUFXO1lBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsRUFBRSxJQUFJO1NBQ25DLENBQUM7UUFDRixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVaLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0Is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QUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZFLENBQUM7aUJBQ0g7YUFDRjs7O1lBOUJDLFVBQVU7WUFNSCxxQkFBcUI7Ozs4QkFzRDNCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUdwQyxLQUFLO29CQU1MLEtBQUs7MEJBU0wsS0FBSzsrQkFPTCxLQUFLO3lCQVFMLEtBQUs7dUJBVUwsS0FBSzt3QkFPTCxLQUFLO3VCQU9MLEtBQUs7dUJBY0wsTUFBTTt1QkFFTixNQUFNO3NCQUVOLE1BQU07cUJBRU4sTUFBTTt1QkFFTixNQUFNO3NCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NlYXJjaEJhciwgbnptLXNlYXJjaC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VhcmNoQmFyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignY2FuY2VsQnV0dG9uU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHsgd2lkdGg6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT5oaWRkZW4nLCBbYW5pbWF0ZSgzMDAsIHN0eWxlKHsgd2lkdGg6ICcxMDAlJyB9KSldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB2aXNpYmxlJywgW2FuaW1hdGUoMzAwLCBzdHlsZSh7IHdpZHRoOiAnKicgfSkpXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXNlYXJjaCc7XG4gIGNsZWFyQ2xzOiBvYmplY3Q7XG4gIHdyYXBDbHM6IG9iamVjdDtcbiAgY2FuY2VsQ2xzOiBvYmplY3QgPSB7XG4gICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jYW5jZWxgXTogdHJ1ZVxuICB9O1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zaG93Q2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhbmNlbFRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzU3VibWl0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzQ3VzdG9tVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0NsZWFyQ2xpY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3ludGhldGljUGhDb250YWluZXJSZWY6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9zeW50aGV0aWNQaFJlZjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3JpZ2h0QnRuUmVmOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaW5wdXRDb250YWluZXJSZWY6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9yaWdodEJ0bkluaXRNYXJnaW5MZWZ0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2JsdXJGcm9tT25DbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VhcmNoJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgaW5wdXRFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2IHx8ICcnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc2hvd0NhbmNlbEJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NhbmNlbEJ1dHRvbjtcbiAgfVxuICBzZXQgc2hvd0NhbmNlbEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dDYW5jZWxCdXR0b24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsVGV4dDtcbiAgfVxuICBzZXQgY2FuY2VsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2NhbmNlbFRleHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2lzQ3VzdG9tVGV4dCA9IHRydWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heExlbmd0aDtcbiAgfVxuICBzZXQgbWF4TGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2V0Rm9jdXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5mb2N1c1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLl9ibHVyRnJvbU9uQ2xlYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uU2VhcmNoYmFyRm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JsdXJGcm9tT25DbGVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2VhcmNoYmFyQmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbG9jYWxlUHJvdmlkZXI6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICBzZXRDbGFzcygpIHtcbiAgICB0aGlzLndyYXBDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN0YXJ0YF06ICEhKHRoaXMuX2ZvY3VzIHx8ICh0aGlzLl92YWx1ZSAmJiB0aGlzLl92YWx1ZS5sZW5ndGggPiAwKSkgJiYgIXRoaXMuX2Rpc2FibGVkXG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbENscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2FuY2VsYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNhbmNlbC1zaG93YF06XG4gICAgICAgIHRoaXMuX3Nob3dDYW5jZWxCdXR0b24gfHwgdGhpcy5fZm9jdXMgfHwgKHRoaXMuX3ZhbHVlICYmIHRoaXMuX3ZhbHVlLmxlbmd0aCA+IDApLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jYW5jZWwtYW5pbWBdOiB0aGlzLl9mb2N1c1xuICAgIH07XG4gICAgdGhpcy5jbGVhckNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2xlYXJgXTogdGhpcy5fdmFsdWUgJiYgdGhpcy5fdmFsdWUubGVuZ3RoID4gMCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2xlYXItc2hvd2BdOiB0aGlzLl92YWx1ZSAmJiB0aGlzLl92YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLl9pc1N1Ym1pdCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2xlYXItYWN0aXZlYF06IHRoaXMuX2lzQ2xlYXJDbGlja2luZ1xuICAgIH07XG4gIH1cblxuICBzZXRTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5faW5wdXRDb250YWluZXJSZWYuY2xhc3NOYW1lLmluZGV4T2YoYCR7dGhpcy5wcmVmaXhDbHN9LXN0YXJ0YCkgPiAtMSkge1xuICAgICAgY29uc3QgcmVhbFdpZHRoID0gdGhpcy5fc3ludGhldGljUGhDb250YWluZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9zeW50aGV0aWNQaFJlZi5zdHlsZS53aWR0aCA9IE1hdGguY2VpbChyZWFsV2lkdGgpICsgJ3B4JztcbiAgICAgIGlmICghdGhpcy5fc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgICB0aGlzLl9yaWdodEJ0blJlZi5zdHlsZS5tYXJnaW5SaWdodCA9ICcwJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3ludGhldGljUGhSZWYuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBpZiAoIXRoaXMuX3Nob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgdGhpcy5fcmlnaHRCdG5Jbml0TWFyZ2luTGVmdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX3JpZ2h0QnRuUmVmKVsnbWFyZ2luLWxlZnQnXTtcbiAgICAgICAgY29uc3QgYnRuTWFyZ2luUmlnaHQgPSB0aGlzLl9yaWdodEJ0blJlZi5vZmZzZXRXaWR0aCArIHBhcnNlSW50KHRoaXMuX3JpZ2h0QnRuSW5pdE1hcmdpbkxlZnQsIDEwKTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdG5SZWYuc3R5bGUubWFyZ2luUmlnaHQgPSAnLScgKyBidG5NYXJnaW5SaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hiYXJCbHVyKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFzZWxmLl9ibHVyRnJvbU9uQ2xlYXIgJiYgc2VsZi5fdmFsdWUgPT09ICcnICYmIHNlbGYuX2ZvY3VzKSB7XG4gICAgICAgIHNlbGYuX2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gJyc7XG4gICAgICAgIHNlbGYub25CbHVyLmVtaXQoKTtcbiAgICAgICAgc2VsZi5zZXRDbGFzcygpO1xuICAgICAgfVxuICAgICAgc2VsZi5fYmx1ckZyb21PbkNsZWFyID0gZmFsc2U7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgb25TZWFyY2hiYXJGb2N1cygpIHtcbiAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgdGhpcy5faXNTdWJtaXQgPSBmYWxzZTtcbiAgICB0aGlzLm9uRm9jdXMuZW1pdCgpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG9uU2VhcmNoYmFyQ2hhbmdlKGUpIHtcbiAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChlKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4oZSk7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgb25TZWFyY2hTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl92YWx1ZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgIHRoaXMuX2lzU3VibWl0ID0gdHJ1ZTtcbiAgICB0aGlzLm9uU3VibWl0LmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLl9ibHVyRnJvbU9uQ2xlYXIgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgb25TZWFyY2hiYXJDYW5jZWwoKSB7XG4gICAgdGhpcy5fZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG9uU2VhcmNoYmFyQ2xlYXIoKSB7XG4gICAgdGhpcy5fYmx1ckZyb21PbkNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLl9pc0NsZWFyQ2xpY2tpbmcgPSB0cnVlO1xuICAgIHRoaXMub25TZWFyY2hiYXJDaGFuZ2UoJycpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgIHRoaXMuX2lzQ2xlYXJDbGlja2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmx1ckZyb21PbkNsZWFyID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfSwgMTAwKTtcbiAgICB0aGlzLm9uU2VhcmNoYmFyRm9jdXMoKTtcbiAgfVxuXG4gIG9uU2V0Q29tcG9zaXRpb25TdGF0ZShpc0NvbXBvc2luZzogYm9vbGVhbikge1xuICAgIHRoaXMuaXNDb21wb3NpbmcgPSBpc0NvbXBvc2luZztcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuX2xvY2FsZVByb3ZpZGVyLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuX2xvY2FsZVByb3ZpZGVyLmdldExvY2FsZVN1Yk9iaignU2VhcmNoQmFyJyk7XG4gICAgICB0aGlzLl9jYW5jZWxUZXh0ID0gdGhpcy5faXNDdXN0b21UZXh0ID8gdGhpcy5fY2FuY2VsVGV4dCA6IHRoaXMubG9jYWxlLmNhbmNlbFRleHQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fc3ludGhldGljUGhDb250YWluZXJSZWYgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1zeW50aGV0aWMtcGgtY29udGFpbmVyYFxuICAgIClbMF07XG4gICAgdGhpcy5fc3ludGhldGljUGhSZWYgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLnByZWZpeENsc30tc3ludGhldGljLXBoYClbMF07XG4gICAgdGhpcy5fcmlnaHRCdG5SZWYgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FuY2VsJylbMF07XG4gICAgdGhpcy5faW5wdXRDb250YWluZXJSZWYgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLnByZWZpeENsc31gKVswXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=