import { Input, Output, NgZone, Injector, Renderer2, Directive, ElementRef, forwardRef, HostListener, EventEmitter, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class PickerDirective {
    constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer, _zone) {
        this._viewContainerRef = _viewContainerRef;
        this._elm = _elm;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._zone = _zone;
        this._eventListeners = [];
        this.onVisibleChange = new EventEmitter(true);
        this.onPickerChange = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    togglePicker() {
        if (!this.picker) {
            this.showPicker();
        }
        else {
            this.hidePicker();
        }
    }
    ngOnInit() {
        this.onVisibleChange.emit(false);
    }
    ngOnChanges(value) {
        if (value.cols && this.picker) {
            this.picker.instance.options.cols = value.cols.currentValue;
        }
        if (value.data && this.picker) {
            if (!this.isPickerDataEqual(this.picker.instance.options.data, value.data.currentValue)) {
                this.picker.instance.options.data = value.data.currentValue;
                this.showPicker();
            }
        }
    }
    ngOnDestroy() {
        this.hidePicker();
    }
    onDocumentClick(event) {
        if (this.picker &&
            !this._elm.nativeElement.contains(event.target) &&
            !this.picker.location.nativeElement.contains(event.target)) {
            this.hidePicker();
        }
    }
    showPicker() {
        if (this.picker) {
            this._zone.run(() => {
                this.picker.instance.init();
            });
        }
        else if (!this.picker && !this.disabled) {
            setTimeout(() => {
                this._eventListeners = [
                    this._renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event))
                ];
            });
            const options = new PickerOptions();
            Object.assign(options, this._defaultOptions, {
                hidePicker: (event) => {
                    this.hidePicker();
                },
                updateNgModel: (value) => {
                    this.value = value;
                    this.onChange(value);
                }
            });
            const optionalParams = [
                'data',
                'value',
                'cols',
                'mask',
                'title',
                'okText',
                'dismissText',
                'disabled',
                'cascade',
                'appendToBody',
                'indicatorStyle',
                'onPickerChange',
                'onVisibleChange',
                'onDismiss'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(PickerComponent);
            const childInjector = Injector.create([
                {
                    provide: PickerOptions,
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
        this.value = Array.isArray(value) ? value : [];
        if (this.picker) {
            this.picker.instance.options.value = this.value;
            this.showPicker();
            this.picker.instance.reloadPicker();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    isPickerDataEqual(data1, data2) {
        if (!data1 && !data2) {
            return true;
        }
        if (!Array.isArray(data1) || !Array.isArray(data2) || data1.length !== data2.length) {
            return false;
        }
        for (let i = 0; i < data1.length; i++) {
            const item1 = data1[i];
            const item2 = data2[i];
            if ((item1 && !item2) || (!item1 && item2)) {
                return false;
            }
            if (item1.value !== item2.value) {
                return false;
            }
            if (item1.label !== item2.label) {
                return false;
            }
            if (item1.children && item2.children) {
                return this.isPickerDataEqual(item1.children, item2.children);
            }
        }
        return true;
    }
}
PickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Picker], [nzm-picker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PickerDirective),
                        multi: true
                    }
                ]
            },] }
];
PickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: PickerOptions },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NgZone }
];
PickerDirective.propDecorators = {
    data: [{ type: Input }],
    cols: [{ type: Input }],
    mask: [{ type: Input }],
    title: [{ type: Input }],
    visible: [{ type: Input }],
    okText: [{ type: Input }],
    dismissText: [{ type: Input }],
    disabled: [{ type: Input }],
    cascade: [{ type: Input }],
    appendToBody: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onPickerChange: [{ type: Output }],
    onDismiss: [{ type: Output }],
    togglePicker: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicGlja2VyL3BpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBR1QsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFFWixnQkFBZ0IsRUFFaEIsd0JBQXdCLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWXpFLE1BQU0sT0FBTyxlQUFlO0lBK0MxQixZQUNVLGlCQUFtQyxFQUNuQyxJQUFnQixFQUNoQixlQUE4QixFQUM5QixJQUE4QixFQUM5QixTQUFvQixFQUNwQixLQUFhO1FBTGIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQTBCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQWpEZixvQkFBZSxHQUFzQixFQUFFLENBQUM7UUF5QmhELG9CQUFlLEdBQTBCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxELGFBQVEsR0FBMkIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzlDLGNBQVMsR0FBZSxH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QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTNORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7WUFqQkMsZ0JBQWdCO1lBTGhCLFVBQVU7WUFVSCxhQUFhO1lBSHBCLHdCQUF3QjtZQVh4QixTQUFTO1lBRlQsTUFBTTs7O21CQW1DTCxLQUFLO21CQUVMLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLO3NCQUVMLEtBQUs7cUJBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUVMLEtBQUs7c0JBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7OEJBRUwsTUFBTTs2QkFFTixNQUFNO3dCQUVOLE1BQU07MkJBTU4sWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE5nWm9uZSxcbiAgSW5qZWN0b3IsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY2tlck9wdGlvbnMgfSBmcm9tICcuL3BpY2tlci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1BpY2tlcl0sIFtuem0tcGlja2VyXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGlja2VyRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcGlja2VyOiBDb21wb25lbnRSZWY8UGlja2VyQ29tcG9uZW50PjtcbiAgYXBwZW5kVG9Cb2R5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHZhbHVlOiBBcnJheTxhbnk+O1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICBjb2xzOiBOdW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1hc2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG9rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNtaXNzVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY2FzY2FkZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpbmRpY2F0b3JTdHlsZTogb2JqZWN0O1xuICBAT3V0cHV0KClcbiAgb25WaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBAT3V0cHV0KClcbiAgb25QaWNrZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25EaXNtaXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnlbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBpY2tlcikge1xuICAgICAgdGhpcy5zaG93UGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBQaWNrZXJPcHRpb25zLFxuICAgIHByaXZhdGUgX2NmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmNvbHMgJiYgdGhpcy5waWNrZXIpIHtcbiAgICAgIHRoaXMucGlja2VyLmluc3RhbmNlLm9wdGlvbnMuY29scyA9IHZhbHVlLmNvbHMuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuZGF0YSAmJiB0aGlzLnBpY2tlcikge1xuICAgICAgaWYgKCF0aGlzLmlzUGlja2VyRGF0YUVxdWFsKHRoaXMucGlja2VyLmluc3RhbmNlLm9wdGlvbnMuZGF0YSwgdmFsdWUuZGF0YS5jdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHRoaXMucGlja2VyLmluc3RhbmNlLm9wdGlvbnMuZGF0YSA9IHZhbHVlLmRhdGEuY3VycmVudFZhbHVlO1xuICAgICAgICB0aGlzLnNob3dQaWNrZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMucGlja2VyICYmXG4gICAgICAhdGhpcy5fZWxtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgIXRoaXMucGlja2VyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93UGlja2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBpY2tlcikge1xuICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBpY2tlci5pbnN0YW5jZS5pbml0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnBpY2tlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uRG9jdW1lbnRDbGljayhldmVudCkpLFxuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uRG9jdW1lbnRDbGljayhldmVudCkpXG4gICAgICAgIF07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQaWNrZXJPcHRpb25zKCk7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuX2RlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIGhpZGVQaWNrZXI6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVOZ01vZGVsOiAodmFsdWU6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJhbXM6IEFycmF5PGtleW9mIFBpY2tlckRpcmVjdGl2ZT4gPSBbXG4gICAgICAgICdkYXRhJyxcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ2NvbHMnLFxuICAgICAgICAnbWFzaycsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICdva1RleHQnLFxuICAgICAgICAnZGlzbWlzc1RleHQnLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnY2FzY2FkZScsXG4gICAgICAgICdhcHBlbmRUb0JvZHknLFxuICAgICAgICAnaW5kaWNhdG9yU3R5bGUnLFxuICAgICAgICAnb25QaWNrZXJDaGFuZ2UnLFxuICAgICAgICAnb25WaXNpYmxlQ2hhbmdlJyxcbiAgICAgICAgJ29uRGlzbWlzcydcbiAgICAgIF07XG4gICAgICBvcHRpb25hbFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAob3B0aW9ucyBhcyBhbnkpW3BhcmFtXSA9IHRoaXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGlja2VyQ29tcG9uZW50PiA9IHRoaXMuX2Nmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShQaWNrZXJDb21wb25lbnQpO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQaWNrZXJPcHRpb25zLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgICAgdGhpcy5waWNrZXIgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgIGNoaWxkSW5qZWN0b3JcbiAgICAgICk7XG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBpY2tlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50KTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBpY2tlcikge1xuICAgICAgdGhpcy5waWNrZXIuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucGlja2VyO1xuICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW107XG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnBpY2tlci5pbnN0YW5jZS5vcHRpb25zLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgICAgdGhpcy5waWNrZXIuaW5zdGFuY2UucmVsb2FkUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnlbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgaXNQaWNrZXJEYXRhRXF1YWwoZGF0YTEsIGRhdGEyKSB7XG4gICAgaWYgKCFkYXRhMSAmJiAhZGF0YTIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YTEpIHx8ICFBcnJheS5pc0FycmF5KGRhdGEyKSB8fCBkYXRhMS5sZW5ndGggIT09IGRhdGEyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGExLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtMSA9IGRhdGExW2ldO1xuICAgICAgY29uc3QgaXRlbTIgPSBkYXRhMltpXTtcbiAgICAgIGlmICgoaXRlbTEgJiYgIWl0ZW0yKSB8fCAoIWl0ZW0xICYmIGl0ZW0yKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbTEudmFsdWUgIT09IGl0ZW0yLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtMS5sYWJlbCAhPT0gaXRlbTIubGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0xLmNoaWxkcmVuICYmIGl0ZW0yLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUGlja2VyRGF0YUVxdWFsKGl0ZW0xLmNoaWxkcmVuLCBpdGVtMi5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=