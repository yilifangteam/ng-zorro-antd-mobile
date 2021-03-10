import { Input, Output, Injector, Directive, forwardRef, EventEmitter, HostListener, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerOptions } from './date-picker-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker-options.provider';
export class DatePickerDirective {
    constructor(_viewContainerRef, _defaultOptions, _cfr) {
        this._viewContainerRef = _viewContainerRef;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._eventListeners = [];
        this.minuteStep = 1;
        this.value = new Date();
        this.onVisibleChange = new EventEmitter(true);
        this.onValueChange = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onDismiss = new EventEmitter();
    }
    togglePicker() {
        if (!this.picker) {
            this.showPicker();
        }
        else {
            this.hidePicker();
        }
    }
    showPicker() {
        if (!this.picker && !this.disabled) {
            setTimeout(() => {
                this._eventListeners = [];
            });
            const options = new DatePickerOptions();
            Object.assign(options, this._defaultOptions, {
                hidePicker: (event) => {
                    this.hidePicker();
                },
                updateNgModel: (value) => {
                    if (this._ngModelOnChange) {
                        this.value = value;
                        this._ngModelOnChange(value);
                    }
                }
            });
            const optionalParams = [
                'mode',
                'minDate',
                'maxDate',
                'minuteStep',
                'value',
                'mask',
                'title',
                'okText',
                'dismissText',
                'disabled',
                'locale',
                'appendToBody',
                'showErrorToast',
                'showErrorToastInterval',
                'onOk',
                'onDismiss',
                'onValueChange'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(DatePickerComponent);
            const childInjector = Injector.create([
                {
                    provide: DatePickerOptions,
                    useValue: options
                }
            ]);
            this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
            }
            this.onVisibleChange.emit(true);
        }
    }
    hidePicker() {
        if (this.appendToBodyElement) {
            document.body.removeChild(this.appendToBodyElement);
            this.appendToBodyElement = null;
        }
        if (this.picker) {
            this.picker.destroy();
            delete this.picker;
            this.onVisibleChange.emit(false);
            this._eventListeners.forEach(fn => fn());
            this._eventListeners = [];
        }
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnInit() {
        this.onVisibleChange.emit(false);
    }
    ngOnChanges(changes) {
        if (changes.isOpen) {
            if (changes.isOpen.currentValue === true) {
                this.showPicker();
            }
            else {
                this.hidePicker();
            }
        }
    }
    ngOnDestroy() {
        this.hidePicker();
    }
}
DatePickerDirective.ɵfac = function DatePickerDirective_Factory(t) { return new (t || DatePickerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DatePickerOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver)); };
DatePickerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DatePickerDirective, selectors: [["", "DatePicker", ""]], hostBindings: function DatePickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function DatePickerDirective_click_HostBindingHandler() { return ctx.togglePicker(); });
    } }, inputs: { minuteStep: "minuteStep", value: "value", disabled: "disabled", isOpen: "isOpen", mode: "mode", minDate: "minDate", maxDate: "maxDate", use12Hours: "use12Hours", mask: "mask", title: "title", okText: "okText", dismissText: "dismissText", locale: "locale", appendToBody: "appendToBody", showErrorToast: "showErrorToast", showErrorToastInterval: "showErrorToastInterval" }, outputs: { onVisibleChange: "onVisibleChange", onValueChange: "onValueChange", onOk: "onOk", onDismiss: "onDismiss" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DatePickerDirective),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
DatePickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: DatePickerOptions },
    { type: ComponentFactoryResolver }
];
DatePickerDirective.propDecorators = {
    isOpen: [{ type: Input }],
    mode: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    use12Hours: [{ type: Input }],
    minuteStep: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    title: [{ type: Input }],
    okText: [{ type: Input }],
    dismissText: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    appendToBody: [{ type: Input }],
    showErrorToast: [{ type: Input }],
    showErrorToastInterval: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onValueChange: [{ type: Output }],
    onOk: [{ type: Output }],
    onDismiss: [{ type: Output }],
    togglePicker: [{ type: HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerDirective, [{
        type: Directive,
        args: [{
                selector: '[DatePicker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc1.DatePickerOptions }, { type: ɵngcc0.ComponentFactoryResolver }]; }, { minuteStep: [{
            type: Input
        }], value: [{
            type: Input
        }], onVisibleChange: [{
            type: Output
        }], onValueChange: [{
            type: Output
        }], onOk: [{
            type: Output
        }], onDismiss: [{
            type: Output
        }], togglePicker: [{
            type: HostListener,
            args: ['click']
        }], disabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], mode: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], use12Hours: [{
            type: Input
        }], mask: [{
            type: Input
        }], title: [{
            type: Input
        }], okText: [{
            type: Input
        }], dismissText: [{
            type: Input
        }], locale: [{
            type: Input
        }], appendToBody: [{
            type: Input
        }], showErrorToast: [{
            type: Input
        }], showErrorToastInterval: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBR1IsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUlaLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDekIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFXekUsTUFBTSxPQUFPLG1CQUFtQjtBQUFHLElBeURqQyxZQUNVLGlCQUFtQyxFQUNuQyxlQUFrQyxFQUNsQyxJQUE4QjtBQUN2QyxRQUhTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7QUFBQyxRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUEwQjtBQUMxQyxRQTFEVSxvQkFBZSxHQUFzQixFQUFFLENBQUM7QUFDbEQsUUFjRSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ3pCLFFBQ0UsVUFBSyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7QUFDM0IsUUFtQkUsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEUsUUFDRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hELFFBQ0UsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9DLFFBQ0UsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3BELElBY0ssQ0FBQztBQUNOLElBYkUsWUFBWTtBQUFLLFFB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NkJBQ0MsS0FBSztBQUNOLHFDQUNDLEtBQUs7QUFDTiw4QkFDQyxNQUFNO0FBQ1AsNEJBQ0MsTUFBTTtBQUNQLG1CQUNDLE1BQU07QUFDUCx3QkFDQyxNQUFNO0FBQ1AsMkJBRUMsWUFBWSxTQUFDLE9BQU87QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEluamVjdG9yLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ29tcG9uZW50UmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuL2RhdGUtcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW0RhdGVQaWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHBpY2tlcjogQ29tcG9uZW50UmVmPERhdGVQaWNrZXJDb21wb25lbnQ+O1xuICBhcHBlbmRUb0JvZHlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIHByaXZhdGUgX25nTW9kZWxPbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB7fTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uVG91Y2hlZDogKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgaXNPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWF4RGF0ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1c2UxMkhvdXJzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtaW51dGVTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKVxuICB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpXG4gIG1hc2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNtaXNzVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Vycm9yVG9hc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dFcnJvclRvYXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgQE91dHB1dCgpXG4gIG9uVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgQE91dHB1dCgpXG4gIG9uVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25PazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvbkRpc21pc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdG9nZ2xlUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5waWNrZXIpIHtcbiAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBEYXRlUGlja2VyT3B0aW9ucyxcbiAgICBwcml2YXRlIF9jZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHt9XG5cbiAgc2hvd1BpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gbmV3IERhdGVQaWNrZXJPcHRpb25zKCk7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuX2RlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIGhpZGVQaWNrZXI6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVOZ01vZGVsOiAodmFsdWU6IERhdGUpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fbmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBBcnJheTxrZXlvZiBEYXRlUGlja2VyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ21vZGUnLFxuICAgICAgICAnbWluRGF0ZScsXG4gICAgICAgICdtYXhEYXRlJyxcbiAgICAgICAgJ21pbnV0ZVN0ZXAnLFxuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnbWFzaycsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICdva1RleHQnLFxuICAgICAgICAnZGlzbWlzc1RleHQnLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnbG9jYWxlJyxcbiAgICAgICAgJ2FwcGVuZFRvQm9keScsXG4gICAgICAgICdzaG93RXJyb3JUb2FzdCcsXG4gICAgICAgICdzaG93RXJyb3JUb2FzdEludGVydmFsJyxcbiAgICAgICAgJ29uT2snLFxuICAgICAgICAnb25EaXNtaXNzJyxcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2UnXG4gICAgICBdO1xuICAgICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgKG9wdGlvbnMgYXMgYW55KVtwYXJhbV0gPSB0aGlzW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PERhdGVQaWNrZXJDb21wb25lbnQ+ID0gdGhpcy5fY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBEYXRlUGlja2VyQ29tcG9uZW50XG4gICAgICApO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYXRlUGlja2VyT3B0aW9ucyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAgIHRoaXMucGlja2VyID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYubGVuZ3RoLFxuICAgICAgICBjaGlsZEluamVjdG9yXG4gICAgICApO1xuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waWNrZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5waWNrZXI7XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogRGF0ZSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICBpZiAoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gIH1cbn1cbiJdfQ==