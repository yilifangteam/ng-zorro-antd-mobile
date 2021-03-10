import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "am-segment-item-selected": a0 }; };
const _c1 = function (a0, a1, a2) { return { "border-color": a0, color: a1, "background-color": a2 }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
function SegmentedControlComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function SegmentedControlComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const value_r1 = ctx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick(i_r2, value_r1); });
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-item");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c0, i_r2 === ctx_r0.selectedIndex))("ngStyle", ɵngcc0.ɵɵpureFunction3(12, _c1, ctx_r0.tintColor, i_r2 === ctx_r0.selectedIndex ? "#fff" : ctx_r0.tintColor, i_r2 === ctx_r0.selectedIndex ? ctx_r0.tintColor : "transparent"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-item-inner");
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(16, _c2, i_r2 === ctx_r0.selectedIndex ? ctx_r0.tintColor : "transparent"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", value_r1, "\n");
} }
export class SegmentedControlComponent {
    constructor() {
        this.prefixCls = 'am-segment';
        this.tintColor = '#2DB7F5';
        this.disabled = false;
        this.selectedIndex = 0;
        this.onChange = new EventEmitter();
        this.role = 'tablist';
        this.amSegment = true;
    }
    get amDisabled() {
        return this.disabled;
    }
    onClick(index, value) {
        if (!this.disabled && index !== this.selectedIndex) {
            this.selectedIndex = index;
            this.onChange.emit({ selectedIndex: index, value: value });
        }
    }
}
SegmentedControlComponent.ɵfac = function SegmentedControlComponent_Factory(t) { return new (t || SegmentedControlComponent)(); };
SegmentedControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SegmentedControlComponent, selectors: [["SegmentedControl"], ["nz-segmented-control"]], hostVars: 5, hostBindings: function SegmentedControlComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role);
        ɵngcc0.ɵɵclassProp("am-segment", ctx.amSegment)("am-segment-disabled", ctx.amDisabled);
    } }, inputs: { tintColor: "tintColor", disabled: "disabled", selectedIndex: "selectedIndex", values: "values" }, outputs: { onChange: "onChange" }, decls: 1, vars: 1, consts: [["role", "tab", 3, "class", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["role", "tab", 3, "ngClass", "ngStyle", "click"], [3, "ngStyle"]], template: function SegmentedControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SegmentedControlComponent_div_0_Template, 3, 18, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.values);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
SegmentedControlComponent.ctorParameters = () => [];
SegmentedControlComponent.propDecorators = {
    tintColor: [{ type: Input }],
    disabled: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    values: [{ type: Input }],
    onChange: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amSegment: [{ type: HostBinding, args: ['class.am-segment',] }],
    amDisabled: [{ type: HostBinding, args: ['class.am-segment-disabled',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SegmentedControlComponent, [{
        type: Component,
        args: [{
                selector: 'SegmentedControl, nz-segmented-control',
                template: "<div\n  role=\"tab\"\n  *ngFor=\"let value of values; let i = index\"\n  class=\"{{ prefixCls }}-item\"\n  [ngClass]=\"{ 'am-segment-item-selected': i === selectedIndex }\"\n  [ngStyle]=\"{\n    'border-color': tintColor,\n    color: i === selectedIndex ? '#fff' : tintColor,\n    'background-color': i === selectedIndex ? tintColor : 'transparent'\n  }\"\n  (click)=\"onClick(i, value)\"\n>\n  <div\n    class=\"{{ prefixCls }}-item-inner\"\n    [ngStyle]=\"{ 'background-color': i === selectedIndex ? tintColor : 'transparent' }\"\n  ></div>\n  {{ value }}\n</div>\n"
            }]
    }], function () { return []; }, { tintColor: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], onChange: [{
            type: Output
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], amSegment: [{
            type: HostBinding,
            args: ['class.am-segment']
        }], amDisabled: [{
            type: HostBinding,
            args: ['class.am-segment-disabled']
        }], values: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEYsTUFBTSxPQUFPLHlCQUF5QjtBQUN0QyxJQXNCRTtBQUFnQixRQXRCaEIsY0FBUyxHQUFXLFlBQVksQ0FBQztBQUNuQyxRQUVFLGNBQVMsR0FBVyxTQUFTLENBQUM7QUFDaEMsUUFDRSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQzVCLFFBQ0Usa0JBQWEsR0FBVyxDQUFDLENBQUM7QUFDNUIsUUFHRSxhQUFRLEdBQWdELElBQUksWUFBWSxFQUFpQyxDQUFDO0FBQzVHLFFBRUUsU0FBSSxHQUFHLFNBQVMsQ0FBQztBQUNuQixRQUNFLGNBQVMsR0FBWSxJQUFJLENBQUM7QUFDNUIsSUFLaUIsQ0FBQztBQUNsQixJQU5FLElBQ0ksVUFBVTtBQUFLLFFBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUdFLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYTtBQUN0QyxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3hELFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDakMsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakUsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3FEQW5DQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1FBQXdDLGtCQUNsRDs7O2tOQUFpRCxjQUNsRDs7OzsyRkFDSTtBQUFDO0FBQ1k7QUFHSCx3QkFEWixLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLDRCQUNDLEtBQUs7QUFDTixxQkFDQyxLQUFLO0FBQ04sdUJBQ0MsTUFBTTtBQUNQLG1CQUVDLFdBQVcsU0FBQyxXQUFXO0FBQ3JCLHdCQUNGLFdBQVcsU0FBQyxrQkFBa0I7QUFDNUIseUJBQ0YsV0FBVyxTQUFDLDJCQUEyQjtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VnbWVudGVkQ29udHJvbE9uQ2hhbmdlRXZlbnQgfSBmcm9tICcuL1Byb3BzVHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NlZ21lbnRlZENvbnRyb2wsIG56LXNlZ21lbnRlZC1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlZ21lbnRlZC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tc2VnbWVudCc7XG5cbiAgQElucHV0KClcbiAgdGludENvbG9yOiBzdHJpbmcgPSAnIzJEQjdGNSc7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpXG4gIHZhbHVlczogQXJyYXk8c3RyaW5nPltdO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWdtZW50ZWRDb250cm9sT25DaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlZ21lbnRlZENvbnRyb2xPbkNoYW5nZUV2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcm9sZSA9ICd0YWJsaXN0JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zZWdtZW50JylcbiAgYW1TZWdtZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zZWdtZW50LWRpc2FibGVkJylcbiAgZ2V0IGFtRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljayhpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgc2VsZWN0ZWRJbmRleDogaW5kZXgsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==