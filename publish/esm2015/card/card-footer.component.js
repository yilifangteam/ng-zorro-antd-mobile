import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CardFooterComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.content);
} }
function CardFooterComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.extra);
} }
function CardFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, CardFooterComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-extra");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.isTemplateRef(ctx_r1.extra))("ngIfElse", _r4);
} }
function CardFooterComponent_ng_template_3_ng_template_0_Template(rf, ctx) { }
function CardFooterComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CardFooterComponent_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.content);
} }
function CardFooterComponent_ng_template_5_ng_template_0_Template(rf, ctx) { }
function CardFooterComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CardFooterComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.extra);
} }
export class CardFooterComponent {
    constructor() {
        this.prefixCls = 'am-card-footer';
        this.content = null;
        this.extra = null;
        this.cardFooterWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) { return new (t || CardFooterComponent)(); };
CardFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardFooterComponent, selectors: [["CardFooter"], ["nzm-card-footer"]], hostVars: 2, hostBindings: function CardFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-card-footer", ctx.cardFooterWrapper);
    } }, inputs: { content: "content", extra: "extra" }, decls: 7, vars: 6, consts: [[4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["contentTemplate", ""], ["extraTemplate", ""], [3, "ngTemplateOutlet"]], template: function CardFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, CardFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, CardFooterComponent_div_2_Template, 2, 5, "div", 1);
        ɵngcc0.ɵɵtemplate(3, CardFooterComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, CardFooterComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.content))("ngIfElse", _r2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extra);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
CardFooterComponent.ctorParameters = () => [];
CardFooterComponent.propDecorators = {
    content: [{ type: Input }],
    extra: [{ type: Input }],
    cardFooterWrapper: [{ type: HostBinding, args: ['class.am-card-footer',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardFooterComponent, [{
        type: Component,
        args: [{
                selector: 'CardFooter, nzm-card-footer',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <ng-container *ngIf=\"!isTemplateRef(content); else contentTemplate\">{{ content }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #contentTemplate>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { content: [{
            type: Input
        }], extra: [{
            type: Input
        }], cardFooterWrapper: [{
            type: HostBinding,
            args: ['class.am-card-footer']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NhcmQvY2FyZC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlGLE1BQU0sT0FBTyxtQkFBbUI7QUFDaEMsSUFVRTtBQUFnQixRQVZoQixjQUFTLEdBQVcsZ0JBQWdCLENBQUM7QUFDdkMsUUFFRSxZQUFPLEdBQStCLElBQUksQ0FBQztBQUM3QyxRQUNFLFVBQUssR0FBK0IsSUFBSSxDQUFDO0FBQzNDLFFBRUUsc0JBQWlCLEdBQVksSUFBSSxDQUFDO0FBQ3BDLElBQ2lCLENBQUM7QUFDbEIsSUFDRSxhQUFhLENBQUMsS0FBSztBQUNyQixRQUFJLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSDsrQ0FyQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUE2QixrQkFDdkM7OytRQUEyQztPQUMzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7R0FBSSxjQUN0Qzs7Ozs7Ozs7Ozs7O2lGQUNJO0FBQUM7QUFDWTtBQUdiLHNCQURGLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04sZ0NBRUMsV0FBVyxTQUFDLHNCQUFzQjtBQUNqQzs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhcmRGb290ZXIsIG56bS1jYXJkLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZvb3RlckNvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLWNhcmQtZm9vdGVyJztcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYXJkLWZvb3RlcicpXG4gIGNhcmRGb290ZXJXcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=