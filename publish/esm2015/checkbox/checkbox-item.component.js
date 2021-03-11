import { Component, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CheckboxItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.prefixCls = 'am-checkbox';
        this.checked = false;
        this._disabled = false;
        this.wrap = false;
        this.error = false;
        this.multipleLine = false;
        this.platform = 'ios';
        this.align = 'middle';
        this.onChange = new EventEmitter();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    onCheckboxClick(event) { }
    change(event) {
        this.checked = event.checked;
        this._ngModelOnChange(event.checked);
        this.onChange.emit(event);
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
CheckboxItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'CheckboxItem, nzm-checkbox-item',
                template: "<ListItem\n  [className]=\"'am-checkbox-item ' + (disabled ? 'am-checkbox-item-disabled' : '')\"\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"extra\"\n  [thumb]=\"checkbox\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  (onClick)=\"onCheckboxClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #checkbox>\n  <label Checkbox [name]=\"name\" [value]=\"value\" [checked]=\"checked\" [disabled]=\"disabled\" (onChange)=\"change($event)\">\n  </label>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxItemComponent),
                        multi: true
                    }
                ]
            },] }
];
CheckboxItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    arrow: [{ type: Input }],
    extra: [{ type: Input }],
    wrap: [{ type: Input }],
    error: [{ type: Input }],
    multipleLine: [{ type: Input }],
    platform: [{ type: Input }],
    align: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNoZWNrYm94L2NoZWNrYm94LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUV2QixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdCekUsTUFBTSxPQUFPLHFCQUFxQjtJQW1DaEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFsQzFDLGNBQVMsR0FBRyxhQUFhLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBYW5DLFNBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBVyxRQUFRLENBQUM7UUFTekIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBRUQsQ0FBQztJQVY5QyxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQU1ELGVBQWUsQ0FBQyxLQUFLLElBQUcsQ0FBQztJQUV6QixNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQjtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxtbEJBQTZDO2dCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7WUFsQkMsaUJBQWlCOzs7bUJBMEJoQixLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSzsyQkFFTCxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQU9MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDaGVja2JveFN0YXR1cyB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2hlY2tib3hJdGVtLCBuem0tY2hlY2tib3gtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hJdGVtQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJlZml4Q2xzID0gJ2FtLWNoZWNrYm94JztcbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4ge307XG4gIHByaXZhdGUgX25nTW9kZWxPblRvdWNoZWQ6ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYXJyb3c6IHN0cmluZztcbiAgQElucHV0KClcbiAgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHdyYXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbXVsdGlwbGVMaW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYXRmb3JtOiBzdHJpbmcgPSAnaW9zJztcbiAgQElucHV0KClcbiAgYWxpZ246IHN0cmluZyA9ICdtaWRkbGUnO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGVja2JveFN0YXR1cz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50KSB7fVxuXG4gIGNoYW5nZShldmVudCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKGV2ZW50LmNoZWNrZWQpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19