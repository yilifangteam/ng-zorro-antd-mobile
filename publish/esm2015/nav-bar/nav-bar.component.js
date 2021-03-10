import { Component, Input, TemplateRef, Output, EventEmitter, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';

function NavBarComponent_1_ng_template_0_Template(rf, ctx) { }
function NavBarComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NavBarComponent_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.leftContent);
} }
function NavBarComponent_span_2_Icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 6);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("type", ctx_r4.icon);
} }
function NavBarComponent_span_2_2_ng_template_0_Template(rf, ctx) { }
function NavBarComponent_span_2_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NavBarComponent_span_2_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.icon);
} }
function NavBarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtemplate(1, NavBarComponent_span_2_Icon_1_Template, 1, 1, "Icon", 5);
    ɵngcc0.ɵɵtemplate(2, NavBarComponent_span_2_2_Template, 1, 1, undefined, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-left-icon");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isIconString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.isIconString);
} }
function NavBarComponent_8_ng_template_0_Template(rf, ctx) { }
function NavBarComponent_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NavBarComponent_8_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.rightContent);
} }
const _c0 = ["*"];
export class NavBarComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-navbar',
            mode: 'dark',
            onLeftClick: () => { }
        };
        this.navbarCls = {};
        this.isIconString = true;
        this.isLeftContentString = true;
        this.isRightContentString = true;
        this.onLeftClick = new EventEmitter();
        this.amNavbar = true;
    }
    set mode(value) {
        this.defaultProps.mode = value;
        this.amNavbarLight = this.defaultProps.mode === 'light';
        this.amNavbardark = this.defaultProps.mode === 'dark';
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.isIconString = false;
        }
        else {
            this.isIconString = true;
        }
        this._icon = value;
    }
    get leftContent() {
        return this._leftContent;
    }
    set leftContent(value) {
        if (value instanceof TemplateRef) {
            this.isLeftContentString = false;
        }
        else {
            this.isLeftContentString = true;
        }
        this._leftContent = value;
    }
    get rightContent() {
        return this._rightContent;
    }
    set rightContent(value) {
        if (value instanceof TemplateRef) {
            this.isRightContentString = false;
        }
        else {
            this.isRightContentString = true;
        }
        this._rightContent = value;
    }
    click(event) {
        this.onLeftClick.emit(event);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["Navbar"], ["nzm-nav-bar"]], hostVars: 6, hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-navbar", ctx.amNavbar)("am-navbar-light", ctx.amNavbarLight)("am-navbar-dark", ctx.amNavbardark);
    } }, inputs: { mode: "mode", icon: "icon", leftContent: "leftContent", rightContent: "rightContent" }, outputs: { onLeftClick: "onLeftClick" }, ngContentSelectors: _c0, decls: 9, vars: 14, consts: [["role", "button", 3, "click"], [4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["aria-hidden", "true"], [3, "type", 4, "ngIf"], [3, "type"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function NavBarComponent_Template_div_click_0_listener($event) { return ctx.click($event); });
        ɵngcc0.ɵɵtemplate(1, NavBarComponent_1_Template, 1, 1, undefined, 1);
        ɵngcc0.ɵɵtemplate(2, NavBarComponent_span_2_Template, 3, 5, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵtemplate(8, NavBarComponent_8_Template, 1, 1, undefined, 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-left");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isLeftContentString);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.isLeftContentString ? ctx.leftContent : null, "\n");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-title");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-right");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.isRightContentString ? ctx.rightContent : null, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isRightContentString);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.IconComponent], encapsulation: 2 });
NavBarComponent.ctorParameters = () => [];
NavBarComponent.propDecorators = {
    mode: [{ type: Input }],
    icon: [{ type: Input }],
    leftContent: [{ type: Input }],
    rightContent: [{ type: Input }],
    onLeftClick: [{ type: Output }],
    amNavbar: [{ type: HostBinding, args: ['class.am-navbar',] }],
    amNavbarLight: [{ type: HostBinding, args: ['class.am-navbar-light',] }],
    amNavbardark: [{ type: HostBinding, args: ['class.am-navbar-dark',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{
                selector: 'Navbar, nzm-nav-bar',
                template: "<div role=\"button\" class=\"{{ defaultProps.prefixCls }}-left\" (click)=\"click($event)\">\n  <ng-template *ngIf=\"!isLeftContentString\" [ngTemplateOutlet]=\"leftContent\"></ng-template>\n  <span *ngIf=\"icon\" class=\"{{ defaultProps.prefixCls }}-left-icon\" aria-hidden=\"true\">\n    <Icon *ngIf=\"isIconString\" [type]=\"icon\"></Icon>\n    <ng-template *ngIf=\"!isIconString\" [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  {{ isLeftContentString ? leftContent : null }}\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-title\">\n  <ng-content></ng-content>\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-right\">\n  {{ isRightContentString ? rightContent : null }}\n  <ng-template *ngIf=\"!isRightContentString\" [ngTemplateOutlet]=\"rightContent\"></ng-template>\n</div>\n"
            }]
    }], function () { return []; }, { onLeftClick: [{
            type: Output
        }], amNavbar: [{
            type: HostBinding,
            args: ['class.am-navbar']
        }], mode: [{
            type: Input
        }], amNavbarLight: [{
            type: HostBinding,
            args: ['class.am-navbar-light']
        }], amNavbardark: [{
            type: HostBinding,
            args: ['class.am-navbar-dark']
        }], icon: [{
            type: Input
        }], leftContent: [{
            type: Input
        }], rightContent: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakcsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUFrRUU7QUFBZ0IsUUFsRWhCLGlCQUFZLEdBQUc7QUFDakIsWUFBSSxTQUFTLEVBQUUsV0FBVztBQUMxQixZQUFJLElBQUksRUFBRSxNQUFNO0FBQ2hCLFlBQUksV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUM7QUFDekIsU0FBRyxDQUFDO0FBQ0osUUFBRSxjQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQUUsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDL0IsUUFBRSx3QkFBbUIsR0FBWSxJQUFJLENBQUM7QUFDdEMsUUFBRSx5QkFBb0IsR0FBWSxJQUFJLENBQUM7QUFDdkMsUUFnREUsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN0RCxRQUVTLGFBQVEsR0FBRyxJQUFJLENBQUM7QUFDekIsSUFLaUIsQ0FBQztBQUNsQixJQXJERSxJQUNJLElBQUksQ0FBQyxLQUFLO0FBQ2hCLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7QUFDNUQsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUMxRCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksSUFBSTtBQUFLLFFBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxJQUFJLENBQUMsS0FBZ0M7QUFDM0MsUUFBSSxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7QUFDdEMsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDL0IsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFdBQVc7QUFBSyxRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFnQztBQUNsRCxRQUFJLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDdEMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFnQztBQUNuRCxRQUFJLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7QUFDeEMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7QUFDdkMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFZRSxLQUFLLENBQUMsS0FBSztBQUNiLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsSUFBRSxDQUFDO0FBQ0g7MkNBNUVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBcUIsa0JBQy9COzs7O2dCQUF1QyxjQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUdBQ0k7QUFBQztBQUNZO0FBRVosbUJBWUgsS0FBSztBQUNOLG1CQUtDLEtBQUs7QUFDTiwwQkFXQyxLQUFLO0FBQ04sMkJBV0MsS0FBSztBQUNOLDBCQVdDLE1BQU07QUFDUCx1QkFFQyxXQUFXLFNBQUMsaUJBQWlCO0FBQzNCLDRCQUNGLFdBQVcsU0FBQyx1QkFBdUI7QUFDakMsMkJBQ0YsV0FBVyxTQUFDLHNCQUFzQjtBQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTmF2YmFyLCBuem0tbmF2LWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tbmF2YmFyJyxcbiAgICBtb2RlOiAnZGFyaycsXG4gICAgb25MZWZ0Q2xpY2s6ICgpID0+IHt9XG4gIH07XG4gIG5hdmJhckNscyA9IHt9O1xuICBpc0ljb25TdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0xlZnRDb250ZW50U3RyaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNSaWdodENvbnRlbnRTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgX2ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX2xlZnRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9yaWdodENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5tb2RlID0gdmFsdWU7XG4gICAgdGhpcy5hbU5hdmJhckxpZ2h0ID0gdGhpcy5kZWZhdWx0UHJvcHMubW9kZSA9PT0gJ2xpZ2h0JztcbiAgICB0aGlzLmFtTmF2YmFyZGFyayA9IHRoaXMuZGVmYXVsdFByb3BzLm1vZGUgPT09ICdkYXJrJztcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbGVmdENvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnRDb250ZW50O1xuICB9XG4gIHNldCBsZWZ0Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmlzTGVmdENvbnRlbnRTdHJpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0xlZnRDb250ZW50U3RyaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fbGVmdENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcmlnaHRDb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9yaWdodENvbnRlbnQ7XG4gIH1cbiAgc2V0IHJpZ2h0Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmlzUmlnaHRDb250ZW50U3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSaWdodENvbnRlbnRTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9yaWdodENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25MZWZ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tbmF2YmFyJylcbiAgcHVibGljIGFtTmF2YmFyID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1uYXZiYXItbGlnaHQnKVxuICBwdWJsaWMgYW1OYXZiYXJMaWdodDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1uYXZiYXItZGFyaycpXG4gIHB1YmxpYyBhbU5hdmJhcmRhcms7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5vbkxlZnRDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19