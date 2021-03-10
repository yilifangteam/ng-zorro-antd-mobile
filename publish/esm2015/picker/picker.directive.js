import { Input, Output, NgZone, Injector, Renderer2, Directive, ElementRef, forwardRef, HostListener, EventEmitter, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './picker-options.provider';
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
PickerDirective.ɵfac = function PickerDirective_Factory(t) { return new (t || PickerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PickerOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
PickerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PickerDirective, selectors: [["", "Picker", ""], ["", "nzm-picker", ""]], hostBindings: function PickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function PickerDirective_click_HostBindingHandler() { return ctx.togglePicker(); });
    } }, inputs: { disabled: "disabled", data: "data", cols: "cols", mask: "mask", title: "title", visible: "visible", okText: "okText", dismissText: "dismissText", cascade: "cascade", appendToBody: "appendToBody", indicatorStyle: "indicatorStyle" }, outputs: { onVisibleChange: "onVisibleChange", onPickerChange: "onPickerChange", onDismiss: "onDismiss" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PickerDirective),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerDirective, [{
        type: Directive,
        args: [{
                selector: '[Picker], [nzm-picker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PickerDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.PickerOptions }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }]; }, { onVisibleChange: [{
            type: Output
        }], onPickerChange: [{
            type: Output
        }], onDismiss: [{
            type: Output
        }], togglePicker: [{
            type: HostListener,
            args: ['click']
        }], disabled: [{
            type: Input
        }], data: [{
            type: Input
        }], cols: [{
            type: Input
        }], mask: [{
            type: Input
        }], title: [{
            type: Input
        }], visible: [{
            type: Input
        }], okText: [{
            type: Input
        }], dismissText: [{
            type: Input
        }], cascade: [{
            type: Input
        }], appendToBody: [{
            type: Input
        }], indicatorStyle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFHVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUVaLGdCQUFnQixFQUVoQix3QkFBd0IsRUFDekIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVl6RSxNQUFNLE9BQU8sZUFBZTtBQUFHLElBK0M3QixZQUNVLGlCQUFtQyxFQUNuQyxJQUFnQixFQUNoQixlQUE4QixFQUM5QixJQUE4QixFQUM5QixTQUFvQixFQUNwQixLQUFhO0FBQ3RCLFFBTlMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtBQUFDLFFBQ3BDLFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtBQUFDLFFBQy9CLFNBQUksR0FBSixJQUFJLENBQTBCO0FBQUMsUUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7QUFDekIsUUFsRFUsb0JBQWUsR0FBc0IsRUFBRSxDQUFDO0FBQ2xELFFBd0JFLG9CQUFlLEdBQTBCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xFLFFBQ0UsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN6RCxRQUNFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNwRCxRQUNFLGFBQVEs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QyxrQkFDVCxRQUFRLEVBQUUsd0JBQXdCLGtCQUNsQyxTQUFTLEVBQUUsc0JBQ1QsMEJBQ0UsT0FBTyxFQUFFLGlCQUFpQiwwQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsMEJBQzlDLEtBQUssRUFBRSxJQUFJLHNCQUNaLGtCQUNGLGNBQ0Y7Ozs7Ozs7Ozs0Q0FDSTtBQUFDO0FBQXlDLFlBbEI3QyxnQkFBZ0I7QUFDaEIsWUFOQSxVQUFVO0FBQ1YsWUFTTyxhQUFhO0FBQUksWUFIeEIsd0JBQXdCO0FBQ3ZCLFlBWkQsU0FBUztBQUNULFlBSEEsTUFBTTtBQUNQO0FBQUc7QUFHSCxtQkErQkUsS0FBSztBQUNOLG1CQUNDLEtBQUs7QUFDTixtQkFDQyxLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLHNCQUNDLEtBQUs7QUFDTixxQkFDQyxLQUFLO0FBQ04sMEJBQ0MsS0FBSztBQUNOLHVCQUNDLEtBQUs7QUFDTixzQkFDQyxLQUFLO0FBQ04sMkJBQ0MsS0FBSztBQUNOLDZCQUNDLEtBQUs7QUFDTiw4QkFDQyxNQUFNO0FBQ1AsNkJBQ0MsTUFBTTtBQUNQLHdCQUNDLE1BQU07QUFDUCwyQkFLQyxZQUFZLFNBQUMsT0FBTztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgTmdab25lLFxuICBJbmplY3RvcixcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyT3B0aW9ucyB9IGZyb20gJy4vcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbUGlja2VyXSwgW256bS1waWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQaWNrZXJEaXJlY3RpdmUpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwaWNrZXI6IENvbXBvbmVudFJlZjxQaWNrZXJDb21wb25lbnQ+O1xuICBhcHBlbmRUb0JvZHlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgdmFsdWU6IEFycmF5PGFueT47XG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIGNvbHM6IE51bWJlcjtcbiAgQElucHV0KClcbiAgbWFzazogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgb2tUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpc21pc3NUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjYXNjYWRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGluZGljYXRvclN0eWxlOiBvYmplY3Q7XG4gIEBPdXRwdXQoKVxuICBvblZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIEBPdXRwdXQoKVxuICBvblBpY2tlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvbkRpc21pc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRvZ2dsZVBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnNob3dQaWNrZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9lbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IFBpY2tlck9wdGlvbnMsXG4gICAgcHJpdmF0ZSBfY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUuY29scyAmJiB0aGlzLnBpY2tlcikge1xuICAgICAgdGhpcy5waWNrZXIuaW5zdGFuY2Uub3B0aW9ucy5jb2xzID0gdmFsdWUuY29scy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5kYXRhICYmIHRoaXMucGlja2VyKSB7XG4gICAgICBpZiAoIXRoaXMuaXNQaWNrZXJEYXRhRXF1YWwodGhpcy5waWNrZXIuaW5zdGFuY2Uub3B0aW9ucy5kYXRhLCB2YWx1ZS5kYXRhLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5waWNrZXIuaW5zdGFuY2Uub3B0aW9ucy5kYXRhID0gdmFsdWUuZGF0YS5jdXJyZW50VmFsdWU7XG4gICAgICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5waWNrZXIgJiZcbiAgICAgICF0aGlzLl9lbG0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhdGhpcy5waWNrZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgKSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucGlja2VyLmluc3RhbmNlLmluaXQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KSksXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KSlcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gbmV3IFBpY2tlck9wdGlvbnMoKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgaGlkZVBpY2tlcjogKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZU5nTW9kZWw6ICh2YWx1ZTogYW55W10pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25hbFBhcmFtczogQXJyYXk8a2V5b2YgUGlja2VyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ2RhdGEnLFxuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnY29scycsXG4gICAgICAgICdtYXNrJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ29rVGV4dCcsXG4gICAgICAgICdkaXNtaXNzVGV4dCcsXG4gICAgICAgICdkaXNhYmxlZCcsXG4gICAgICAgICdjYXNjYWRlJyxcbiAgICAgICAgJ2FwcGVuZFRvQm9keScsXG4gICAgICAgICdpbmRpY2F0b3JTdHlsZScsXG4gICAgICAgICdvblBpY2tlckNoYW5nZScsXG4gICAgICAgICdvblZpc2libGVDaGFuZ2UnLFxuICAgICAgICAnb25EaXNtaXNzJ1xuICAgICAgXTtcbiAgICAgIG9wdGlvbmFsUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcGFyYW1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIChvcHRpb25zIGFzIGFueSlbcGFyYW1dID0gdGhpc1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQaWNrZXJDb21wb25lbnQ+ID0gdGhpcy5fY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBpY2tlckNvbXBvbmVudCk7XG4gICAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBpY2tlck9wdGlvbnMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgICB0aGlzLnBpY2tlciA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBjb21wb25lbnRGYWN0b3J5LFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmxlbmd0aCxcbiAgICAgICAgY2hpbGRJbmplY3RvclxuICAgICAgKTtcbiAgICAgIGlmIChvcHRpb25zLmFwcGVuZFRvQm9keSkge1xuICAgICAgICB0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGlja2VyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZGVQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5waWNrZXI7XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcbiAgICBpZiAodGhpcy5waWNrZXIpIHtcbiAgICAgIHRoaXMucGlja2VyLmluc3RhbmNlLm9wdGlvbnMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5zaG93UGlja2VyKCk7XG4gICAgICB0aGlzLnBpY2tlci5pbnN0YW5jZS5yZWxvYWRQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBpc1BpY2tlckRhdGFFcXVhbChkYXRhMSwgZGF0YTIpIHtcbiAgICBpZiAoIWRhdGExICYmICFkYXRhMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhMSkgfHwgIUFycmF5LmlzQXJyYXkoZGF0YTIpIHx8IGRhdGExLmxlbmd0aCAhPT0gZGF0YTIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YTEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0xID0gZGF0YTFbaV07XG4gICAgICBjb25zdCBpdGVtMiA9IGRhdGEyW2ldO1xuICAgICAgaWYgKChpdGVtMSAmJiAhaXRlbTIpIHx8ICghaXRlbTEgJiYgaXRlbTIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtMS52YWx1ZSAhPT0gaXRlbTIudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0xLmxhYmVsICE9PSBpdGVtMi5sYWJlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbTEuY2hpbGRyZW4gJiYgaXRlbTIuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQaWNrZXJEYXRhRXF1YWwoaXRlbTEuY2hpbGRyZW4sIGl0ZW0yLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==