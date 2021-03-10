import { Component, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../list/list-item/list-item.component';
import * as ɵngcc2 from './checkbox.component';

function CheckboxItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 2);
    ɵngcc0.ɵɵlistener("onChange", function CheckboxItemComponent_ng_template_2_Template_label_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.change($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("name", ctx_r1.name)("value", ctx_r1.value)("checked", ctx_r1.checked)("disabled", ctx_r1.disabled);
} }
const _c0 = ["*"];
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
CheckboxItemComponent.ɵfac = function CheckboxItemComponent_Factory(t) { return new (t || CheckboxItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CheckboxItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CheckboxItemComponent, selectors: [["CheckboxItem"], ["nzm-checkbox-item"]], inputs: { wrap: "wrap", error: "error", multipleLine: "multipleLine", platform: "platform", align: "align", disabled: "disabled", name: "name", value: "value", arrow: "arrow", extra: "extra" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxItemComponent),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 4, vars: 10, consts: [[3, "className", "wrap", "align", "arrow", "error", "extra", "thumb", "disabled", "platform", "multipleLine", "onClick"], ["checkbox", ""], ["Checkbox", "", 3, "name", "value", "checked", "disabled", "onChange"]], template: function CheckboxItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ListItem", 0);
        ɵngcc0.ɵɵlistener("onClick", function CheckboxItemComponent_Template_ListItem_onClick_0_listener($event) { return ctx.onCheckboxClick($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, CheckboxItemComponent_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("className", "am-checkbox-item " + (ctx.disabled ? "am-checkbox-item-disabled" : ""))("wrap", ctx.wrap)("align", ctx.align)("arrow", ctx.arrow)("error", ctx.error)("extra", ctx.extra)("thumb", _r0)("disabled", ctx.disabled)("platform", ctx.platform)("multipleLine", ctx.multipleLine);
    } }, directives: [ɵngcc1.ListItemComponent, ɵngcc2.CheckboxComponent], encapsulation: 2, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckboxItemComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { wrap: [{
            type: Input
        }], error: [{
            type: Input
        }], multipleLine: [{
            type: Input
        }], platform: [{
            type: Input
        }], align: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], arrow: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBRXZCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFnQnpFLE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQW1DbkMsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBbEMzQyxjQUFTLEdBQUcsYUFBYSxDQUFDO0FBQzVCLFFBQUUsWUFBTyxHQUFZLEtBQUssQ0FBQztBQUMzQixRQUFVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFZRSxTQUFJLEdBQVksS0FBSyxDQUFDO0FBQ3hCLFFBQ0UsVUFBSyxHQUFZLEtBQUssQ0FBQztBQUN6QixRQUNFLGlCQUFZLEdBQVksS0FBSyxDQUFDO0FBQ2hDLFFBQ0UsYUFBUSxHQUFXLEtBQUssQ0FBQztBQUMzQixRQUNFLFVBQUssR0FBVyxRQUFRLENBQUM7QUFDM0IsUUFRRSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7QUFDaEQsSUFDK0MsQ0FBQztBQUNoRCxJQVhFLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsS0FBYztBQUM3QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBS0UsZUFBZSxDQUFDLEtBQUssSUFBRyxDQUFDO0FBQzNCLElBQ0UsTUFBTSxDQUFDLEtBQUs7QUFDZCxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxLQUFjO0FBQUksUUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsRUFBc0I7QUFBSSxRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsRUFBWTtBQUFJLFFBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0g7aURBdEVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUNBQWlDLGtCQUMzQzs7Ozs7O1NBQTZDO2FBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQ3BELEtBQUssRUFBRSxJQUFJLHNCQUNaO2lCQUNGLGNBQ0Y7Ozs7Ozs7OzttSEFDSTtBQUFDO0FBQStDLFlBbkJuRCxpQkFBaUI7QUFDbEI7QUFBRztBQUVILG1CQXVCRSxLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04sbUJBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTiwyQkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTix1QkFDQyxLQUFLO0FBQ04sdUJBTUMsTUFBTTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2hlY2tib3hTdGF0dXMgfSBmcm9tICcuL1Byb3BzVHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NoZWNrYm94SXRlbSwgbnptLWNoZWNrYm94LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94SXRlbUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENscyA9ICdhbS1jaGVja2JveCc7XG4gIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHt9O1xuICBwcml2YXRlIF9uZ01vZGVsT25Ub3VjaGVkOiAoKSA9PiB7fTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGFycm93OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICB3cmFwOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG11bHRpcGxlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGF0Zm9ybTogc3RyaW5nID0gJ2lvcyc7XG4gIEBJbnB1dCgpXG4gIGFsaWduOiBzdHJpbmcgPSAnbWlkZGxlJztcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hlY2tib3hTdGF0dXM+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG9uQ2hlY2tib3hDbGljayhldmVudCkge31cblxuICBjaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBldmVudC5jaGVja2VkO1xuICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZShldmVudC5jaGVja2VkKTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGJvb2xlYW4pID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==