import { Component, ViewEncapsulation, Input, TemplateRef, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';

function ToastComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-text-info");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.content);
} }
function ToastComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "Icon", 2);
    ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_div_2_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-text ", ctx_r0.prefixCls, "-text-icon");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", ctx_r0.iconType)("size", "lg");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isContentString);
} }
function ToastComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-text-info");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.content);
} }
function ToastComponent_div_3_2_ng_template_0_Template(rf, ctx) { }
function ToastComponent_div_3_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ToastComponent_div_3_2_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.content);
} }
function ToastComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, ToastComponent_div_3_div_1_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵtemplate(2, ToastComponent_div_3_2_Template, 1, 1, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isContentString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.isContentString);
} }
export class ToastComponent {
    constructor(_zone) {
        this._zone = _zone;
        this.prefixCls = 'am-toast';
        this.isContentString = true;
        this.transitionName = 'am-fade-enter am-fade-enter-active';
        this._iconType = '';
        this._content = '';
        this.mask = true;
        this.position = 'middle';
    }
    get content() {
        return this._content;
    }
    set content(value) {
        if (value instanceof TemplateRef) {
            this.isContentString = false;
        }
        else {
            this.isContentString = true;
        }
        this._zone.run(() => {
            this._content = value;
        });
    }
    get iconType() {
        return this._iconType;
    }
    set iconType(value) {
        this._zone.run(() => {
            this._iconType = value;
        });
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ToastComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["Toast"]], hostVars: 18, hostBindings: function ToastComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-toast", true)("am-toast-mask", ctx.mask)("am-toast-mask-top", ctx.mask && ctx.position === "top")("am-toast-mask-middle", ctx.mask && ctx.position === "middle")("am-toast-mask-bottom", ctx.mask && ctx.position === "bottom")("am-toast-nomask", !ctx.mask)("am-toast-nomask-top", !ctx.mask && ctx.position === "top")("am-toast-nomask-middle", !ctx.mask && ctx.position === "middle")("am-toast-nomask-bottom", !ctx.mask && ctx.position === "bottom");
    } }, inputs: { mask: "mask", position: "position", content: "content", iconType: "iconType" }, decls: 6, vars: 16, consts: [["role", "alert", "aria-live", "assertive", 3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "assertive"], [3, "type", "size"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_Template, 3, 7, "div", 0);
        ɵngcc0.ɵɵtemplate(3, ToastComponent_div_3_Template, 3, 5, "div", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "a");
        ɵngcc0.ɵɵelement(5, "span");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-notice ", ctx.prefixCls, "-notice-closable ", ctx.transitionName, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.iconType);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.iconType);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-close");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-close-x");
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.IconComponent, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
ToastComponent.ctorParameters = () => [
    { type: NgZone }
];
ToastComponent.propDecorators = {
    mask: [{ type: Input }],
    content: [{ type: Input }],
    iconType: [{ type: Input }],
    position: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 'Toast',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"{{ prefixCls }}-notice {{ prefixCls }}-notice-closable {{ transitionName }}\">\n  <div class=\"{{ prefixCls }}-notice-content\">\n    <div role=\"alert\" *ngIf=\"iconType\" class=\"{{ prefixCls }}-text {{ prefixCls }}-text-icon\" aria-live=\"assertive\">\n      <Icon [type]=\"iconType\" [size]=\"'lg'\"></Icon>\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n    </div>\n    <div *ngIf=\"!iconType\" class=\"{{ prefixCls }}-text\" role=\"alert\" aria-live=\"assertive\">\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n      <ng-template *ngIf=\"!isContentString\" [ngTemplateOutlet]=\"content\"></ng-template>\n    </div>\n  </div>\n  <a class=\"{{ prefixCls }}-notice-close\">\n    <span class=\"{{ prefixCls }}-notice-close-x\"></span>\n  </a>\n</div>\n",
                host: {
                    '[class.am-toast]': 'true',
                    '[class.am-toast-mask]': 'mask',
                    '[class.am-toast-mask-top]': `mask && position === 'top'`,
                    '[class.am-toast-mask-middle]': `mask && position === 'middle'`,
                    '[class.am-toast-mask-bottom]': `mask && position === 'bottom'`,
                    '[class.am-toast-nomask]': '!mask',
                    '[class.am-toast-nomask-top]': `!mask && position === 'top'`,
                    '[class.am-toast-nomask-middle]': `!mask && position === 'middle'`,
                    '[class.am-toast-nomask-bottom]': `!mask && position === 'bottom'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, { mask: [{
            type: Input
        }], position: [{
            type: Input
        }], content: [{
            type: Input
        }], iconType: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J6RixNQUFNLE9BQU8sY0FBYztBQUMzQixJQW9DRSxZQUFvQixLQUFhO0FBQUksUUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBUTtBQUFDLFFBcENsQyxjQUFTLEdBQVcsVUFBVSxDQUFDO0FBQ2pDLFFBQUUsb0JBQWUsR0FBWSxJQUFJLENBQUM7QUFDbEMsUUFDRSxtQkFBYyxHQUFHLG9DQUFvQyxDQUFDO0FBQ3hELFFBQ1UsY0FBUyxHQUFXLEVBQUUsQ0FBQztBQUNqQyxRQUFVLGFBQVEsR0FBOEIsRUFBRSxDQUFDO0FBQ25ELFFBRUUsU0FBSSxHQUFZLElBQUksQ0FBQztBQUN2QixRQXdCRSxhQUFRLEdBQVcsUUFBUSxDQUFDO0FBQzlCLElBQ3NDLENBQUM7QUFDdkMsSUEzQkUsSUFDSSxPQUFPO0FBQUssUUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFnQztBQUM5QyxRQUFJLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ25DLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLEtBQWE7QUFDNUIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUM3QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0g7MENBbERDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsT0FBTyxrQkFDakIsYUFBYSxFQUFFO1FBQWlCLENBQUMsSUFBSSxrQkFDckM7O29QQUFxQyxrQkFDckMsSUFBSSxFQUFFLHNCQUNKLGtCQUFrQixFQUFFLE1BQU0sc0JBQzFCLHVCQUF1QixFQUFFLE1BQU0sc0JBQy9CO3dCQUEyQixFQUFFO2FBQTRCLHNCQUN6RDt3QkFBOEIsRUFBRSwrQkFBK0I7RUFDL0QsOEJBQThCLEVBQUUsK0JBQStCO1VBQy9EO0lBQXlCLEVBQUUsT0FBTyxzQkFDbEM7eUJBQTZCLEVBQUU7bUJBQTZCO1VBQzVEO1dBQWdDLEVBQUU7eUJBQWdDLHNCQUNsRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0M7Q0FDbkUsY0FDRjs7Ozs7Ozs7Ozt1R0FDSTtBQUFDO0FBQ1UsWUFuQjJDLE1BQU07QUFBRztBQUFHO0FBR3RFLG1CQXdCRSxLQUFLO0FBQ04sc0JBQ0MsS0FBSztBQUNOLHVCQWFDLEtBQUs7QUFDTix1QkFRQyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIFRlbXBsYXRlUmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVG9hc3QnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbS10b2FzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1tYXNrXSc6ICdtYXNrJyxcbiAgICAnW2NsYXNzLmFtLXRvYXN0LW1hc2stdG9wXSc6IGBtYXNrICYmIHBvc2l0aW9uID09PSAndG9wJ2AsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1tYXNrLW1pZGRsZV0nOiBgbWFzayAmJiBwb3NpdGlvbiA9PT0gJ21pZGRsZSdgLFxuICAgICdbY2xhc3MuYW0tdG9hc3QtbWFzay1ib3R0b21dJzogYG1hc2sgJiYgcG9zaXRpb24gPT09ICdib3R0b20nYCxcbiAgICAnW2NsYXNzLmFtLXRvYXN0LW5vbWFza10nOiAnIW1hc2snLFxuICAgICdbY2xhc3MuYW0tdG9hc3Qtbm9tYXNrLXRvcF0nOiBgIW1hc2sgJiYgcG9zaXRpb24gPT09ICd0b3AnYCxcbiAgICAnW2NsYXNzLmFtLXRvYXN0LW5vbWFzay1taWRkbGVdJzogYCFtYXNrICYmIHBvc2l0aW9uID09PSAnbWlkZGxlJ2AsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1ub21hc2stYm90dG9tXSc6IGAhbWFzayAmJiBwb3NpdGlvbiA9PT0gJ2JvdHRvbSdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10b2FzdCc7XG4gIGlzQ29udGVudFN0cmluZzogYm9vbGVhbiA9IHRydWU7XG4gIG1hc2tDbGFzc01hcDtcbiAgdHJhbnNpdGlvbk5hbWUgPSAnYW0tZmFkZS1lbnRlciBhbS1mYWRlLWVudGVyLWFjdGl2ZSc7XG5cbiAgcHJpdmF0ZSBfaWNvblR5cGU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG5cbiAgQElucHV0KClcbiAgbWFzazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG4gIHNldCBjb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50U3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNDb250ZW50U3RyaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBpY29uVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uVHlwZTtcbiAgfVxuICBzZXQgaWNvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2ljb25UeXBlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgcG9zaXRpb246IHN0cmluZyA9ICdtaWRkbGUnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cbn1cbiJdfQ==