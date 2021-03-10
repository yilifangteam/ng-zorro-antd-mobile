import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CardHeaderComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.thumb, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.thumbStyle);
} }
function CardHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.thumb);
} }
function CardHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.title);
} }
function CardHeaderComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.extra);
} }
function CardHeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, CardHeaderComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-extra");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.isTemplateRef(ctx_r3.extra))("ngIfElse", _r6);
} }
function CardHeaderComponent_ng_template_5_ng_template_0_Template(rf, ctx) { }
function CardHeaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CardHeaderComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.title);
} }
function CardHeaderComponent_ng_template_7_ng_template_0_Template(rf, ctx) { }
function CardHeaderComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CardHeaderComponent_ng_template_7_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.extra);
} }
export class CardHeaderComponent {
    constructor() {
        this.prefixCls = 'am-card-header';
        this.thumb = null;
        this.thumbStyle = null;
        this.title = null;
        this.extra = null;
        this.cardBodyWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) { return new (t || CardHeaderComponent)(); };
CardHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardHeaderComponent, selectors: [["CardHeader"], ["nzm-card-header"]], hostVars: 2, hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-card-header", ctx.cardBodyWrapper);
    } }, inputs: { thumb: "thumb", thumbStyle: "thumbStyle", title: "title", extra: "extra" }, decls: 9, vars: 8, consts: [[3, "src", "ngStyle", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["titleTemplate", ""], ["extraTemplate", ""], [3, "src", "ngStyle"], [3, "ngTemplateOutlet"]], template: function CardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, CardHeaderComponent_img_1_Template, 1, 2, "img", 0);
        ɵngcc0.ɵɵtemplate(2, CardHeaderComponent_ng_container_2_Template, 1, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, CardHeaderComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, CardHeaderComponent_div_4_Template, 2, 5, "div", 3);
        ɵngcc0.ɵɵtemplate(5, CardHeaderComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, CardHeaderComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r4 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumb && !ctx.isTemplateRef(ctx.thumb));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumb && ctx.isTemplateRef(ctx.thumb));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.title))("ngIfElse", _r4);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extra);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
CardHeaderComponent.ctorParameters = () => [];
CardHeaderComponent.propDecorators = {
    thumb: [{ type: Input }],
    thumbStyle: [{ type: Input }],
    title: [{ type: Input }],
    extra: [{ type: Input }],
    cardBodyWrapper: [{ type: HostBinding, args: ['class.am-card-header',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'CardHeader, nzm-card-header',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <img *ngIf=\"thumb && !isTemplateRef(thumb)\" src=\"{{ thumb }}\" [ngStyle]=\"thumbStyle\" />\n  <ng-container *ngIf=\"thumb && isTemplateRef(thumb)\" [ngTemplateOutlet]=\"thumb\"></ng-container>\n  <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { thumb: [{
            type: Input
        }], thumbStyle: [{
            type: Input
        }], title: [{
            type: Input
        }], extra: [{
            type: Input
        }], cardBodyWrapper: [{
            type: HostBinding,
            args: ['class.am-card-header']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NhcmQvY2FyZC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RixNQUFNLE9BQU8sbUJBQW1CO0FBQ2hDLElBY0U7QUFBZ0IsUUFkaEIsY0FBUyxHQUFXLGdCQUFnQixDQUFDO0FBQ3ZDLFFBRUUsVUFBSyxHQUErQixJQUFJLENBQUM7QUFDM0MsUUFDRSxlQUFVLEdBQVcsSUFBSSxDQUFDO0FBQzVCLFFBQ0UsVUFBSyxHQUErQixJQUFJLENBQUM7QUFDM0MsUUFDRSxVQUFLLEdBQStCLElBQUksQ0FBQztBQUMzQyxRQUVFLG9CQUFlLEdBQVksSUFBSSxDQUFDO0FBQ2xDLElBQ2lCLENBQUM7QUFDbEIsSUFDRSxhQUFhLENBQUMsS0FBSztBQUNyQixRQUFJLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSDsrQ0F6QkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUE2QixrQkFDdkM7Ozs7VUFBMkMsa0JBQzNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUdBQ0k7QUFBQztBQUNZO0FBR2Isb0JBREYsS0FBSztBQUNOLHlCQUNDLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLDhCQUVDLFdBQVcsU0FBQyxzQkFBc0I7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBIb3N0QmluZGluZywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FyZEhlYWRlciwgbnptLWNhcmQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tY2FyZC1oZWFkZXInO1xuXG4gIEBJbnB1dCgpXG4gIHRodW1iOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHRodW1iU3R5bGU6IG9iamVjdCA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYXJkLWhlYWRlcicpXG4gIGNhcmRCb2R5V3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19