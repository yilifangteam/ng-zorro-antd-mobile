import { Component, forwardRef, Input, Output, EventEmitter, HostBinding, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './checkbox.component';

const _c0 = ["*"];
export class AgreeItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.prefixCls = 'am-checkbox';
        this.checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.checkboxAgree = true;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
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
AgreeItemComponent.ɵfac = function AgreeItemComponent_Factory(t) { return new (t || AgreeItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AgreeItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AgreeItemComponent, selectors: [["AgreeItem"], ["nzm-agree-item"]], hostVars: 2, hostBindings: function AgreeItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-checkbox-agree", ctx.checkboxAgree);
    } }, inputs: { disabled: "disabled", name: "name", value: "value" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AgreeItemComponent),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 2, vars: 7, consts: [["Checkbox", "", 3, "name", "value", "checked", "disabled", "onChange"]], template: function AgreeItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵlistener("onChange", function AgreeItemComponent_Template_label_onChange_0_listener($event) { return ctx.change($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-agree-label");
        ɵngcc0.ɵɵproperty("name", ctx.name)("value", ctx.value)("checked", ctx.checked)("disabled", ctx.disabled);
    } }, directives: [ɵngcc1.CheckboxComponent], encapsulation: 2, changeDetection: 0 });
AgreeItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
AgreeItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    checkboxAgree: [{ type: HostBinding, args: ['class.am-checkbox-agree',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgreeItemComponent, [{
        type: Component,
        args: [{
                selector: 'AgreeItem, nzm-agree-item',
                template: "<label\n  Checkbox\n  class=\"{{ prefixCls }}-agree-label\"\n  [name]=\"name\"\n  [value]=\"value\"\n  [checked]=\"checked\"\n  [disabled]=\"disabled\"\n  (onChange)=\"change($event)\"\n>\n  <ng-content></ng-content>\n</label>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AgreeItemComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], checkboxAgree: [{
            type: HostBinding,
            args: ['class.am-checkbox-agree']
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdyZWUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvYWdyZWUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFnQnpFLE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQXlCaEMsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBeEIzQyxjQUFTLEdBQVcsYUFBYSxDQUFDO0FBQ3BDLFFBQUUsWUFBTyxHQUFZLEtBQUssQ0FBQztBQUMzQixRQUFVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFnQkUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0FBQ2hELFFBRUUsa0JBQWEsR0FBWSxJQUFJLENBQUM7QUFDaEMsSUFDK0MsQ0FBQztBQUNoRCxJQWRFLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsS0FBYztBQUM3QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBUUUsTUFBTSxDQUFDLEtBQUs7QUFDZCxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxLQUFjO0FBQUksUUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsRUFBc0I7QUFBSSxRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsRUFBWTtBQUFJLFFBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0g7OENBMURDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsMkJBQTJCLGtCQUNyQzt5TkFBMEM7ZUFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7RUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFNBQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUU7S0FBaUI7aUJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsMEJBQ2pELEtBQUssRUFBRSxJQUFJO2NBQ1o7SUFDRjtJQUNGOzs7Ozs7Ozs7eUZBQ0k7QUFBQztBQUE0QyxZQXBCaEQsaUJBQWlCO0FBQ2xCO0FBQUc7QUFDaUIsbUJBMEJsQixLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLHVCQUNDLEtBQUs7QUFDTix1QkFNQyxNQUFNO0FBQ1AsNEJBRUMsV0FBVyxTQUFDLHlCQUF5QjtBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDaGVja2JveFN0YXR1cyB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQWdyZWVJdGVtLCBuem0tYWdyZWUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZ3JlZS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWdyZWVJdGVtQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFncmVlSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tY2hlY2tib3gnO1xuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbmdNb2RlbE9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHt9O1xuICBwcml2YXRlIF9uZ01vZGVsT25Ub3VjaGVkOiAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENoZWNrYm94U3RhdHVzPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2hlY2tib3gtYWdyZWUnKVxuICBjaGVja2JveEFncmVlOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgY2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jaGVja2VkID0gZXZlbnQuY2hlY2tlZDtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UoZXZlbnQuY2hlY2tlZCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=