import { Component, Input, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ActivityIndicatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelement(2, "span", 1);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.spinnerClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-toast");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.text);
} }
function ActivityIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelement(2, "span", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.spinnerClass);
} }
function ActivityIndicatorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "span", 3);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.spinnerClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-tip");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.text);
} }
function ActivityIndicatorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.spinnerClass);
} }
export class ActivityIndicatorComponent {
    constructor() {
        this.prefixCls = 'am-activity-indicator';
        this.spinnerClass = {};
        this._size = 'small';
        this._toast = false;
        this._animating = true;
        this.clsActIndicator = true;
    }
    get animating() {
        return this._animating;
    }
    set animating(v) {
        this._animating = v;
        this.setClass();
    }
    set size(v) {
        this._size = v;
        this.setClass();
    }
    get toast() {
        return this._toast;
    }
    set toast(v) {
        this._toast = v;
        this.setClass();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
    }
    setClass() {
        if (this._animating) {
            this.clsActIndicator = true;
            this.clsActIndicatorToast = !!this._toast;
            this.clsActIndicatorLg = this._size === 'large';
            this.clsActIndicatorSm = this._size === 'small';
            this.spinnerClass = {
                [`${this.prefixCls}-spinner`]: true,
                [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === 'large'
            };
        }
        else {
            this.clsActIndicator = false;
            this.clsActIndicatorLg = false;
            this.clsActIndicatorSm = false;
            this.clsActIndicatorToast = false;
        }
    }
    ngOnInit() {
        this.setClass();
    }
}
ActivityIndicatorComponent.ɵfac = function ActivityIndicatorComponent_Factory(t) { return new (t || ActivityIndicatorComponent)(); };
ActivityIndicatorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ActivityIndicatorComponent, selectors: [["ActivityIndicator"], ["nzm-ctivity-indicator"]], hostVars: 8, hostBindings: function ActivityIndicatorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-activity-indicator", ctx.clsActIndicator)("am-activity-indicator-toast", ctx.clsActIndicatorToast)("am-activity-indicator-lg", ctx.clsActIndicatorLg)("am-activity-indicator-sm", ctx.clsActIndicatorSm);
    } }, inputs: { animating: "animating", size: "size", toast: "toast", text: "text" }, decls: 4, vars: 4, consts: [[4, "ngIf"], ["aria-hidden", "'true'", 3, "ngClass"], ["aria-label", "'Loading'", 3, "ngClass"], ["aria-hidden", "true", 3, "ngClass"], ["aria-label", "'loading'", 3, "ngClass"]], template: function ActivityIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ActivityIndicatorComponent_div_0_Template, 5, 8, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ActivityIndicatorComponent_div_1_Template, 3, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(2, ActivityIndicatorComponent_div_2_Template, 4, 5, "div", 0);
        ɵngcc0.ɵɵtemplate(3, ActivityIndicatorComponent_div_3_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.animating && ctx.toast && ctx.text && ctx.text.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.animating && ctx.toast && !ctx.text);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.animating && !ctx.toast && ctx.text && ctx.text.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.animating && !ctx.toast && !ctx.text);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2 });
ActivityIndicatorComponent.ctorParameters = () => [];
ActivityIndicatorComponent.propDecorators = {
    animating: [{ type: Input }],
    size: [{ type: Input }],
    toast: [{ type: Input }],
    text: [{ type: Input }],
    clsActIndicator: [{ type: HostBinding, args: ['class.am-activity-indicator',] }],
    clsActIndicatorToast: [{ type: HostBinding, args: ['class.am-activity-indicator-toast',] }],
    clsActIndicatorLg: [{ type: HostBinding, args: ['class.am-activity-indicator-lg',] }],
    clsActIndicatorSm: [{ type: HostBinding, args: ['class.am-activity-indicator-sm',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActivityIndicatorComponent, [{
        type: Component,
        args: [{
                selector: 'ActivityIndicator , nzm-ctivity-indicator',
                template: "<div *ngIf=\"animating && toast && text && text.length > 0\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-hidden=\"'true'\"></span>\n    <span class=\"{{ prefixCls }}-toast\">{{ text }}</span>\n  </div>\n</div>\n<div *ngIf=\"animating && toast && !text\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-label=\"'Loading'\"></span>\n  </div>\n</div>\n<div *ngIf=\"animating && !toast && text && text.length > 0\">\n  <span [ngClass]=\"spinnerClass\" aria-hidden=\"true\"></span>\n  <span class=\"{{ prefixCls }}-tip\">{{ text }}</span>\n</div>\n<div *ngIf=\"animating && !toast && !text\">\n  <span [ngClass]=\"spinnerClass\" aria-label=\"'loading'\"></span>\n</div>\n"
            }]
    }], function () { return []; }, { clsActIndicator: [{
            type: HostBinding,
            args: ['class.am-activity-indicator']
        }], animating: [{
            type: Input
        }], size: [{
            type: Input
        }], toast: [{
            type: Input
        }], text: [{
            type: Input
        }], clsActIndicatorToast: [{
            type: HostBinding,
            args: ['class.am-activity-indicator-toast']
        }], clsActIndicatorLg: [{
            type: HostBinding,
            args: ['class.am-activity-indicator-lg']
        }], clsActIndicatorSm: [{
            type: HostBinding,
            args: ['class.am-activity-indicator-sm']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY3Rpdml0eS1pbmRpY2F0b3IvYWN0aXZpdHktaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFLE1BQU0sT0FBTywwQkFBMEI7QUFBRyxJQStDeEM7QUFBZ0IsUUE5Q2hCLGNBQVMsR0FBVyx1QkFBdUIsQ0FBQztBQUM5QyxRQUFFLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0FBQzVCLFFBRVUsVUFBSyxHQUFXLE9BQU8sQ0FBQztBQUNsQyxRQUFVLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbEMsUUFBVSxlQUFVLEdBQVksSUFBSSxDQUFDO0FBQ3JDLFFBK0JFLG9CQUFlLEdBQVksSUFBSSxDQUFDO0FBQ2xDLElBT2lCLENBQUM7QUFDbEIsSUF2Q0UsSUFDSSxTQUFTO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxTQUFTLENBQUMsQ0FBVTtBQUMxQixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxJQUFJLENBQUMsQ0FBUztBQUNwQixRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxLQUFLO0FBQUssUUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFVO0FBQ3RCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLElBQUk7QUFBSyxRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksSUFBSSxDQUFDLENBQVM7QUFDcEIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNuQixJQUFFLENBQUM7QUFDSCxJQVlFLFFBQVE7QUFDVixRQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2hELFlBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO0FBQ3RELFlBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO0FBQ3RELFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRztBQUMxQixnQkFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUUsSUFBSTtBQUMzQyxnQkFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPO0FBQ2pGLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNuQyxZQUFNLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDckMsWUFBTSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztBQUN4QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0g7c0RBMUVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBMkMsa0JBQ3JEOzt1U0FBa0QsY0FDbkQ7Ozs7Ozs7Ozs7Ozs7d0VBQ0k7QUFBQztBQUNOO0FBQThDLHdCQVEzQyxLQUFLO0FBQ04sbUJBT0MsS0FBSztBQUNOLG9CQUlDLEtBQUs7QUFDTixtQkFPQyxLQUFLO0FBQ04sOEJBT0MsV0FBVyxTQUFDLDZCQUE2QjtBQUN2QyxtQ0FDRixXQUFXLFNBQUMsbUNBQW1DO0FBQzdDLGdDQUNGLFdBQVcsU0FBQyxnQ0FBZ0M7QUFDMUMsZ0NBQ0YsV0FBVyxTQUFDLGdDQUFnQztBQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FjdGl2aXR5SW5kaWNhdG9yICwgbnptLWN0aXZpdHktaW5kaWNhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2aXR5LWluZGljYXRvci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlJbmRpY2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1hY3Rpdml0eS1pbmRpY2F0b3InO1xuICBzcGlubmVyQ2xhc3M6IG9iamVjdCA9IHt9O1xuXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nID0gJ3NtYWxsJztcbiAgcHJpdmF0ZSBfdG9hc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgYW5pbWF0aW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpbmc7XG4gIH1cbiAgc2V0IGFuaW1hdGluZyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gdjtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNpemUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHY7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB0b2FzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9hc3Q7XG4gIH1cbiAgc2V0IHRvYXN0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90b2FzdCA9IHY7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dCA9IHY7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjdGl2aXR5LWluZGljYXRvcicpXG4gIGNsc0FjdEluZGljYXRvcjogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYWN0aXZpdHktaW5kaWNhdG9yLXRvYXN0JylcbiAgY2xzQWN0SW5kaWNhdG9yVG9hc3Q7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYWN0aXZpdHktaW5kaWNhdG9yLWxnJylcbiAgY2xzQWN0SW5kaWNhdG9yTGc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYWN0aXZpdHktaW5kaWNhdG9yLXNtJylcbiAgY2xzQWN0SW5kaWNhdG9yU207XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldENsYXNzKCkge1xuICAgIGlmICh0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yVG9hc3QgPSAhIXRoaXMuX3RvYXN0O1xuICAgICAgdGhpcy5jbHNBY3RJbmRpY2F0b3JMZyA9IHRoaXMuX3NpemUgPT09ICdsYXJnZSc7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvclNtID0gdGhpcy5fc2l6ZSA9PT0gJ3NtYWxsJztcbiAgICAgIHRoaXMuc3Bpbm5lckNsYXNzID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwaW5uZXJgXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zcGlubmVyLWxnYF06ICEhdGhpcy5fdG9hc3QgfHwgdGhpcy5fc2l6ZSA9PT0gJ2xhcmdlJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbHNBY3RJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yTGcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yU20gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yVG9hc3QgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==