import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["content"];
function TabPaneComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c1 = ["*"];
export class TabPaneComponent {
    constructor() {
        this.isTitleString = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
}
TabPaneComponent.ɵfac = function TabPaneComponent_Factory(t) { return new (t || TabPaneComponent)(); };
TabPaneComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPaneComponent, selectors: [["TabPane"], ["nzm-tab-pane"]], viewQuery: function TabPaneComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["content", ""]], template: function TabPaneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabPaneComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
TabPaneComponent.ctorParameters = () => [];
TabPaneComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content', { static: true },] }],
    title: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabPaneComponent, [{
        type: Component,
        args: [{
                selector: 'TabPane, nzm-tab-pane',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLXBhbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBTXpFLE1BQU0sT0FBTyxnQkFBZ0I7QUFDN0IsSUFlRTtBQUFnQixRQWZULGtCQUFhLEdBQVksSUFBSSxDQUFDO0FBQ3ZDLElBY2lCLENBQUM7QUFDbEIsSUFWRSxJQUNJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksS0FBSyxDQUFDLEtBQWlDO0FBQzdDLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0g7NENBbkJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBdUIsa0JBQ2pDLGlGQUF3QyxjQUN6Qzs7Ozs7Ozs7NkJBQ0k7QUFBQztBQUNZO0FBRUwsc0JBRVYsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFBTyxvQkFFNUMsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGFiUGFuZSwgbnptLXRhYi1wYW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYW5lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJQYW5lQ29tcG9uZW50IHtcbiAgcHVibGljIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==