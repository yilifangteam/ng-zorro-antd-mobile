import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-header");
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.renderHeader, ɵngcc0.ɵɵsanitizeHtml);
} }
function ListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.renderHeader(), "\n");
} }
function ListComponent_2_ng_template_0_Template(rf, ctx) { }
function ListComponent_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ListComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.renderHeader);
} }
function ListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.defaultProps.prefixCls, "-footer");
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.renderFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function ListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.defaultProps.prefixCls, "-footer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.renderFooter(), "\n");
} }
function ListComponent_7_ng_template_0_Template(rf, ctx) { }
function ListComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ListComponent_7_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.renderFooter);
} }
const _c0 = ["*"];
export class ListComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list'
        };
        this.renderHeaderType = '';
        this.renderFooterType = '';
        this._renderHeader = '';
        this._renderFooter = '';
        this._className = '';
    }
    set className(value) {
        this._className = value;
    }
    get renderHeader() {
        return this._renderHeader;
    }
    set renderHeader(value) {
        if (value instanceof TemplateRef) {
            this.renderHeaderType = 'templateRef';
        }
        else {
            this.renderHeaderType = typeof value;
        }
        this._renderHeader = value;
    }
    get renderFooter() {
        return this._renderFooter;
    }
    set renderFooter(value) {
        if (value instanceof TemplateRef) {
            this.renderFooterType = 'templateRef';
        }
        else {
            this.renderFooterType = typeof value;
        }
        this._renderFooter = value;
    }
    get hostClassName() {
        return 'am-list ' + this._className;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListComponent, selectors: [["List"], ["nzm-list"]], hostVars: 2, hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.hostClassName);
    } }, inputs: { className: "className", renderHeader: "renderHeader", renderFooter: "renderFooter" }, ngContentSelectors: _c0, decls: 8, vars: 9, consts: [[3, "class", "innerHTML", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], [3, "ngTemplateOutlet"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ListComponent_div_0_Template, 1, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ListComponent_div_1_Template, 2, 4, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ListComponent_2_Template, 1, 1, undefined, 2);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, ListComponent_div_5_Template, 1, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(6, ListComponent_div_6_Template, 2, 4, "div", 1);
        ɵngcc0.ɵɵtemplate(7, ListComponent_7_Template, 1, 1, undefined, 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "string");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "function");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "templateRef");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "string");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "function");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "templateRef");
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    className: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderFooter: [{ type: Input }],
    hostClassName: [{ type: HostBinding, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'List, nzm-list',
                template: "<div\n  *ngIf=\"renderHeader && renderHeaderType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-header\"\n  [innerHTML]=\"renderHeader\"\n></div>\n<div *ngIf=\"renderHeader && renderHeaderType === 'function'\" class=\"{{ defaultProps.prefixCls }}-header\">\n  {{ renderHeader() }}\n</div>\n<ng-template *ngIf=\"renderHeader && renderHeaderType === 'templateRef'\" [ngTemplateOutlet]=\"renderHeader\">\n</ng-template>\n<div class=\"{{ defaultProps.prefixCls }}-body\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"renderFooter && renderFooterType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-footer\"\n  [innerHTML]=\"renderFooter\"\n></div>\n<div *ngIf=\"renderFooter && renderFooterType === 'function'\" class=\"{{ defaultProps.prefixCls }}-footer\">\n  {{ renderFooter() }}\n</div>\n<ng-template *ngIf=\"renderFooter && renderFooterType === 'templateRef'\" [ngTemplateOutlet]=\"renderFooter\">\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { className: [{
            type: Input
        }], renderHeader: [{
            type: Input
        }], renderFooter: [{
            type: Input
        }], hostClassName: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RixNQUFNLE9BQU8sYUFBYTtBQUMxQixJQStDRTtBQUFnQixRQS9DaEIsaUJBQVksR0FBUTtBQUN0QixZQUFJLFNBQVMsRUFBRSxTQUFTO0FBQ3hCLFNBQUcsQ0FBQztBQUNKLFFBQ0UscUJBQWdCLEdBQVcsRUFBRSxDQUFDO0FBQ2hDLFFBQUUscUJBQWdCLEdBQVcsRUFBRSxDQUFDO0FBQ2hDLFFBQ1Usa0JBQWEsR0FBUSxFQUFFLENBQUM7QUFDbEMsUUFBVSxrQkFBYSxHQUFRLEVBQUUsQ0FBQztBQUNsQyxRQUFVLGVBQVUsR0FBVyxFQUFFLENBQUM7QUFDbEMsSUFxQ2lCLENBQUM7QUFDbEIsSUFyQ0UsSUFDSSxTQUFTLENBQUMsS0FBSztBQUNyQixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxZQUFZO0FBQ2xCLFFBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxZQUFZLENBQUMsS0FBVTtBQUM3QixRQUFJLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDNUMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLEtBQUssQ0FBQztBQUMzQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksWUFBWTtBQUNsQixRQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksWUFBWSxDQUFDLEtBQVU7QUFDN0IsUUFBSSxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7QUFDdEMsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO0FBQzVDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxLQUFLLENBQUM7QUFDM0MsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLGFBQWE7QUFBSyxRQUNwQixPQUFPLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNIO3lDQXBEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1FBQWdCLGtCQUMxQjs7Ozs7Ozs7OzsyQkFBb0Msa0JBQ3BDLGFBQWEsRUFBRTtDQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBQ0k7QUFBQztBQUNZO0FBRWhCLHdCQVNDLEtBQUs7QUFDTiwyQkFHQyxLQUFLO0FBQ04sMkJBWUMsS0FBSztBQUNOLDRCQWFDLFdBQVcsU0FBQyxPQUFPO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdMaXN0LCBuem0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzOiBhbnkgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tbGlzdCdcbiAgfTtcblxuICByZW5kZXJIZWFkZXJUeXBlOiBzdHJpbmcgPSAnJztcbiAgcmVuZGVyRm9vdGVyVHlwZTogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBfcmVuZGVySGVhZGVyOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBfcmVuZGVyRm9vdGVyOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJlbmRlckhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVySGVhZGVyO1xuICB9XG4gIHNldCByZW5kZXJIZWFkZXIodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnJlbmRlckhlYWRlclR5cGUgPSAndGVtcGxhdGVSZWYnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckhlYWRlclR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVySGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJlbmRlckZvb3RlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyRm9vdGVyO1xuICB9XG4gIHNldCByZW5kZXJGb290ZXIodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnJlbmRlckZvb3RlclR5cGUgPSAndGVtcGxhdGVSZWYnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckZvb3RlclR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyRm9vdGVyID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FtLWxpc3QgJyArIHRoaXMuX2NsYXNzTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==