import { Component, Input, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["tab-pane-body", ""];
function TabPaneBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function TabPaneBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabPaneBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
export class TabPaneBodyComponent {
    constructor() {
        this._prerender = false;
        this.active = false;
        this.loaded = false;
        this.paneWrap = true;
    }
    get prerender() {
        return this._prerender;
    }
    set prerender(value) {
        this._prerender = value;
        if (value) {
            this.loaded = true;
        }
    }
    get wrapActive() {
        return this.active;
    }
    get wrapInactive() {
        return !this.active;
    }
    ngOnInit() { }
}
TabPaneBodyComponent.ɵfac = function TabPaneBodyComponent_Factory(t) { return new (t || TabPaneBodyComponent)(); };
TabPaneBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPaneBodyComponent, selectors: [["", "tab-pane-body", ""]], hostVars: 6, hostBindings: function TabPaneBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-tabs-pane-wrap", ctx.paneWrap)("am-tabs-pane-wrap-active", ctx.wrapActive)("am-tabs-pane-wrap-inactive", ctx.wrapInactive);
    } }, inputs: { active: "active", loaded: "loaded", prerender: "prerender", content: "content" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function TabPaneBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TabPaneBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.loaded || ctx.prerender);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TabPaneBodyComponent.ctorParameters = () => [];
TabPaneBodyComponent.propDecorators = {
    active: [{ type: Input }],
    loaded: [{ type: Input }],
    content: [{ type: Input }],
    prerender: [{ type: Input }],
    paneWrap: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap',] }],
    wrapActive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-active',] }],
    wrapInactive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-inactive',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabPaneBodyComponent, [{
        type: Component,
        args: [{
                selector: '[tab-pane-body]',
                template: "<ng-container *ngIf=\"loaded || prerender\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { active: [{
            type: Input
        }], loaded: [{
            type: Input
        }], paneWrap: [{
            type: HostBinding,
            args: ['class.am-tabs-pane-wrap']
        }], prerender: [{
            type: Input
        }], wrapActive: [{
            type: HostBinding,
            args: ['class.am-tabs-pane-wrap-active']
        }], wrapInactive: [{
            type: HostBinding,
            args: ['class.am-tabs-pane-wrap-inactive']
        }], content: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy90YWItcGFuZS1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFPdEcsTUFBTSxPQUFPLG9CQUFvQjtBQUFHLElBNEJsQztBQUFnQixRQTNCUixlQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3RDLFFBQ1csV0FBTSxHQUFZLEtBQUssQ0FBQztBQUNuQyxRQUFXLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbkMsUUFhRSxhQUFRLEdBQVksSUFBSSxDQUFDO0FBQzNCLElBU2lCLENBQUM7QUFDbEIsSUF2QkUsSUFDSSxTQUFTO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxTQUFTLENBQUMsS0FBYztBQUM5QixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQUksSUFBSSxLQUFLLEVBQUU7QUFDZixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUdFLElBQ0ksVUFBVTtBQUFLLFFBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksWUFBWTtBQUFLLFFBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBR0UsUUFBUSxLQUFJLENBQUM7QUFDZjtnREFwQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDM0IseUlBQTZDLGtCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtDQUN0Qzs7Ozs7aUZBQ0k7QUFBQztBQUNOO0FBRUEscUJBQUcsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUNOLHVCQVVDLFdBQVcsU0FBQyx5QkFBeUI7QUFDbkMseUJBQ0YsV0FBVyxTQUFDLGdDQUFnQztBQUMxQywyQkFHRixXQUFXLFNBQUMsa0NBQWtDO0FBQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RhYi1wYW5lLWJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYW5lLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhbmVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcHJlcmVuZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgZ2V0IHByZXJlbmRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlcmVuZGVyO1xuICB9XG4gIHNldCBwcmVyZW5kZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcmVyZW5kZXIgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwJylcbiAgcGFuZVdyYXA6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwLWFjdGl2ZScpXG4gIGdldCB3cmFwQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwLWluYWN0aXZlJylcbiAgZ2V0IHdyYXBJbmFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==