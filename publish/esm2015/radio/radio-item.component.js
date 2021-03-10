import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../list/list-item/list-item.component';
import * as ɵngcc2 from './radio.component';

function RadioItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 2);
    ɵngcc0.ɵɵlistener("onChange", function RadioItemComponent_ng_template_2_Template_label_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.change($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("name", ctx_r1.name)("value", ctx_r1.value)("checked", ctx_r1.checked)("disabled", ctx_r1.disabled);
} }
const _c0 = ["*"];
export class RadioItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.select$ = new Subject();
        this.prefixCls = 'am-radio';
        this._checked = false;
        this._disabled = false;
        this.wrap = false;
        this.error = false;
        this.multipleLine = false;
        this.platform = 'ios';
        this.align = 'middle';
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.cdr.markForCheck();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.cdr.markForCheck();
    }
    onRadioItemClick(event) { }
    change(event) {
        if (!this.disabled && !this.checked) {
            this.select$.next(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
}
RadioItemComponent.ɵfac = function RadioItemComponent_Factory(t) { return new (t || RadioItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
RadioItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioItemComponent, selectors: [["RadioItem"], ["nzm-radio-item"]], inputs: { wrap: "wrap", error: "error", multipleLine: "multipleLine", platform: "platform", align: "align", disabled: "disabled", name: "name", value: "value", arrow: "arrow", thumb: "thumb" }, ngContentSelectors: _c0, decls: 4, vars: 10, consts: [[3, "wrap", "align", "arrow", "error", "extra", "thumb", "disabled", "platform", "multipleLine", "className", "onClick"], ["radio", ""], ["Radio", "", 3, "name", "value", "checked", "disabled", "onChange"]], template: function RadioItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ListItem", 0);
        ɵngcc0.ɵɵlistener("onClick", function RadioItemComponent_Template_ListItem_onClick_0_listener($event) { return ctx.onRadioItemClick($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, RadioItemComponent_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("wrap", ctx.wrap)("align", ctx.align)("arrow", ctx.arrow)("error", ctx.error)("extra", _r0)("thumb", ctx.thumb)("disabled", ctx.disabled)("platform", ctx.platform)("multipleLine", ctx.multipleLine)("className", "am-radio-item " + (ctx.disabled ? "am-radio-item-disabled" : ""));
    } }, directives: [ɵngcc1.ListItemComponent, ɵngcc2.RadioComponent], encapsulation: 2, changeDetection: 0 });
RadioItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    arrow: [{ type: Input }],
    thumb: [{ type: Input }],
    wrap: [{ type: Input }],
    error: [{ type: Input }],
    multipleLine: [{ type: Input }],
    platform: [{ type: Input }],
    align: [{ type: Input }],
    disabled: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioItemComponent, [{
        type: Component,
        args: [{
                selector: 'RadioItem, nzm-radio-item',
                template: "<ListItem\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"radio\"\n  [thumb]=\"thumb\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  [className]=\"'am-radio-item ' + (disabled ? 'am-radio-item-disabled' : '')\"\n  (onClick)=\"onRadioItemClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #radio>\n  <label\n    Radio\n    [name]=\"name\"\n    [value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    (onChange)=\"change($event)\"\n  ></label>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
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
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], arrow: [{
            type: Input
        }], thumb: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBUS9CLE1BQU0sT0FBTyxrQkFBa0I7QUFDL0IsSUF3Q0UsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBeEMzQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQXNCLENBQUM7QUFDOUMsUUFBRSxjQUFTLEdBQVcsVUFBVSxDQUFDO0FBQ2pDLFFBQVUsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNwQyxRQUFVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFrQkUsU0FBSSxHQUFZLEtBQUssQ0FBQztBQUN4QixRQUNFLFVBQUssR0FBWSxLQUFLLENBQUM7QUFDekIsUUFDRSxpQkFBWSxHQUFZLEtBQUssQ0FBQztBQUNoQyxRQUNFLGFBQVEsR0FBVyxLQUFLLENBQUM7QUFDM0IsUUFDRSxVQUFLLEdBQVcsUUFBUSxDQUFDO0FBQzNCLElBUytDLENBQUM7QUFDaEQsSUFwQ0UsSUFBSSxPQUFPO0FBQUssUUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFjO0FBQzVCLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDMUIsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBbUJFLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsS0FBYztBQUM3QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUdFLGdCQUFnQixDQUFDLEtBQUssSUFBRyxDQUFDO0FBQzVCLElBQ0UsTUFBTSxDQUFDLEtBQUs7QUFDZCxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN6QyxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVk7QUFBSyxRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7OENBNURDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsMkJBQTJCLGtCQUNyQzs0a0JBQTBDLGtCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtNQUNyQyxlQUFlLEVBQUU7WUFBdUIsQ0FBQyxNQUFNLGNBQ2hEOzs7Ozs7OztnSEFDSTtBQUFDO0FBQ1UsWUFmZCxpQkFBaUI7QUFDbEI7QUFBRztBQUVjLG1CQXlCZixLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04sbUJBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTiwyQkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTix1QkFDQyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUmFkaW9JdGVtLCBuem0tcmFkaW8taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9JdGVtQ29tcG9uZW50IHtcbiAgc2VsZWN0JCA9IG5ldyBTdWJqZWN0PFJhZGlvSXRlbUNvbXBvbmVudD4oKTtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tcmFkaW8nO1xuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgc2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGFycm93OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRodW1iOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICB3cmFwOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG11bHRpcGxlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGF0Zm9ybTogc3RyaW5nID0gJ2lvcyc7XG4gIEBJbnB1dCgpXG4gIGFsaWduOiBzdHJpbmcgPSAnbWlkZGxlJztcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG9uUmFkaW9JdGVtQ2xpY2soZXZlbnQpIHt9XG5cbiAgY2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0JC5uZXh0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19