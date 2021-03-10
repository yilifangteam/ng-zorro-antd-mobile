import { Input, Output, Injector, Directive, forwardRef, EventEmitter, HostListener, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerOptions } from './date-picker-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
DatePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[DatePicker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerDirective),
                        multi: true
                    }
                ]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUdSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFJWixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVd6RSxNQUFNLE9BQU8sbUJBQW1CO0lBeUQ5QixZQUNVLGlCQUFtQyxFQUNuQyxlQUFrQyxFQUNsQyxJQUE4QjtRQUY5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUEwQjtRQXpEaEMsb0JBQWUsR0FBc0IsRUFBRSxDQUFDO1FBZWhELGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsVUFBSyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFvQnpCLG9CQUFlLEdBQTBCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWUvQyxDQUFDO0lBWkosWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEVB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QUNGOzs7WUFmQyxnQkFBZ0I7WUFJVCxpQkFBaUI7WUFIeEIsd0JBQXdCOzs7cUJBc0J2QixLQUFLO21CQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSztxQ0FFTCxLQUFLOzhCQUVMLE1BQU07NEJBRU4sTUFBTTttQkFFTixNQUFNO3dCQUVOLE1BQU07MkJBR04sWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEluamVjdG9yLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ29tcG9uZW50UmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuL2RhdGUtcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW0RhdGVQaWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHBpY2tlcjogQ29tcG9uZW50UmVmPERhdGVQaWNrZXJDb21wb25lbnQ+O1xuICBhcHBlbmRUb0JvZHlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIHByaXZhdGUgX25nTW9kZWxPbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB7fTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uVG91Y2hlZDogKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgaXNPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWF4RGF0ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1c2UxMkhvdXJzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtaW51dGVTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKVxuICB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpXG4gIG1hc2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNtaXNzVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Vycm9yVG9hc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dFcnJvclRvYXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgQE91dHB1dCgpXG4gIG9uVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgQE91dHB1dCgpXG4gIG9uVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25PazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvbkRpc21pc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdG9nZ2xlUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5waWNrZXIpIHtcbiAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBEYXRlUGlja2VyT3B0aW9ucyxcbiAgICBwcml2YXRlIF9jZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHt9XG5cbiAgc2hvd1BpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gbmV3IERhdGVQaWNrZXJPcHRpb25zKCk7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuX2RlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIGhpZGVQaWNrZXI6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVOZ01vZGVsOiAodmFsdWU6IERhdGUpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fbmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBBcnJheTxrZXlvZiBEYXRlUGlja2VyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ21vZGUnLFxuICAgICAgICAnbWluRGF0ZScsXG4gICAgICAgICdtYXhEYXRlJyxcbiAgICAgICAgJ21pbnV0ZVN0ZXAnLFxuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnbWFzaycsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICdva1RleHQnLFxuICAgICAgICAnZGlzbWlzc1RleHQnLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnbG9jYWxlJyxcbiAgICAgICAgJ2FwcGVuZFRvQm9keScsXG4gICAgICAgICdzaG93RXJyb3JUb2FzdCcsXG4gICAgICAgICdzaG93RXJyb3JUb2FzdEludGVydmFsJyxcbiAgICAgICAgJ29uT2snLFxuICAgICAgICAnb25EaXNtaXNzJyxcbiAgICAgICAgJ29uVmFsdWVDaGFuZ2UnXG4gICAgICBdO1xuICAgICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgKG9wdGlvbnMgYXMgYW55KVtwYXJhbV0gPSB0aGlzW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PERhdGVQaWNrZXJDb21wb25lbnQ+ID0gdGhpcy5fY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBEYXRlUGlja2VyQ29tcG9uZW50XG4gICAgICApO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYXRlUGlja2VyT3B0aW9ucyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAgIHRoaXMucGlja2VyID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYubGVuZ3RoLFxuICAgICAgICBjaGlsZEluamVjdG9yXG4gICAgICApO1xuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waWNrZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5waWNrZXI7XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogRGF0ZSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICBpZiAoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gIH1cbn1cbiJdfQ==