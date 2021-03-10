import { Component, ViewEncapsulation } from '@angular/core';
import { PopoverComponentOptions } from './popover-component-options.provider';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './popover-component-options.provider';
import * as ɵngcc2 from '@angular/common';

function PopoverComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-arrow");
} }
function PopoverComponent_ng_template_7_Template(rf, ctx) { }
const _c0 = function (a0) { return { options: a0 }; };
const _c1 = ["*"];
export class PopoverComponent {
    constructor(options) {
        this.options = options;
        this.defaultProps = {
            prefixCls: 'am-popover'
        };
        this.maskCls = {};
        this.popoverCls = {};
    }
    setClassMap() {
        this.maskCls = {
            [`${this.defaultProps.prefixCls}-mask`]: this.options.mask,
            [`${this.defaultProps.prefixCls}-mask-hidden`]: !this.options.mask
        };
        this.popoverCls = {
            [`${this.defaultProps.prefixCls}`]: true,
            [`${this.defaultProps.prefixCls}-placement-${this.options.placement}`]: true,
            [`${this.defaultProps.prefixCls}-${this.options.className}`]: true
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PopoverComponentOptions)); };
PopoverComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["Popover"]], ngContentSelectors: _c1, decls: 8, vars: 16, consts: [[3, "ngClass", "click"], [2, "color", "currentcolor", 3, "ngClass"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵlistener("click", function PopoverComponent_Template_div_click_1_listener() { return ctx.options.hidePopover(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵtemplate(4, PopoverComponent_div_4_Template, 1, 3, "div", 2);
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵelementStart(6, "div");
        ɵngcc0.ɵɵtemplate(7, PopoverComponent_ng_template_7_Template, 0, 0, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.maskCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.popoverCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.showArrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-inner");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-inner-wrapper");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.options.overlay)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c0, ctx.options));
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
PopoverComponent.ctorParameters = () => [
    { type: PopoverComponentOptions }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PopoverComponent, [{
        type: Component,
        args: [{
                selector: 'Popover',
                template: "<ng-content></ng-content>\n<div [ngClass]=\"maskCls\" (click)=\"options.hidePopover()\"></div>\n<div [ngClass]=\"popoverCls\" style=\"color: currentcolor;\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <div *ngIf=\"options.showArrow\" class=\"{{ defaultProps.prefixCls }}-arrow\"></div>\n    <div class=\"{{ defaultProps.prefixCls }}-inner\">\n      <div class=\"{{ defaultProps.prefixCls }}-inner-wrapper\">\n        <ng-template [ngTemplateOutlet]=\"options.overlay\" [ngTemplateOutletContext]=\"{ options: options }\">\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.PopoverComponentOptions }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFPL0UsTUFBTSxPQUFPLGdCQUFnQjtBQUFHLElBTzlCLFlBQW1CLE9BQWdDO0FBQUksUUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7QUFBQyxRQU5wRCxpQkFBWSxHQUFRO0FBQ3RCLFlBQUksU0FBUyxFQUFFLFlBQVk7QUFDM0IsU0FBRyxDQUFDO0FBQ0osUUFBRSxZQUFPLEdBQVEsRUFBRSxDQUFDO0FBQ3BCLFFBQUUsZUFBVSxHQUFRLEVBQUUsQ0FBQztBQUN2QixJQUN3RCxDQUFDO0FBQ3pELElBQ0UsV0FBVztBQUNiLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRztBQUNuQixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0FBQ2hFLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUN4RSxTQUFLLENBQUM7QUFDTixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUc7QUFDdEIsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDOUMsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDbEYsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDeEUsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxlQUFlO0FBQUssUUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSDs0Q0FoQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxTQUFTLGtCQUNuQjs7Ozs7K0ZBQXVDLGtCQUN2QyxhQUFhLEVBQUU7WUFBaUIsQ0FBQyxJQUFJO0FBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lHQUNJO0FBQUM7QUFBMEMsWUFQdkMsdUJBQXVCO0FBQUc7Ozs7Ozs7O3dGQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi9wb3BvdmVyLWNvbXBvbmVudC1vcHRpb25zLnByb3ZpZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUG9wb3ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgZGVmYXVsdFByb3BzOiBhbnkgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tcG9wb3ZlcidcbiAgfTtcbiAgbWFza0NsczogYW55ID0ge307XG4gIHBvcG92ZXJDbHM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBQb3BvdmVyQ29tcG9uZW50T3B0aW9ucykge31cblxuICBzZXRDbGFzc01hcCgpIHtcbiAgICB0aGlzLm1hc2tDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1tYXNrYF06IHRoaXMub3B0aW9ucy5tYXNrLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tbWFzay1oaWRkZW5gXTogIXRoaXMub3B0aW9ucy5tYXNrXG4gICAgfTtcbiAgICB0aGlzLnBvcG92ZXJDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tcGxhY2VtZW50LSR7dGhpcy5vcHRpb25zLnBsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LSR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucy5vbkFmdGVyVmlld0luaXQoKTtcbiAgfVxufVxuIl19