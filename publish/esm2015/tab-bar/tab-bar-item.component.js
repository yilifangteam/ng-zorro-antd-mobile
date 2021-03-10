import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TabPaneComponent } from '../tabs/tab-pane.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../badge/badge.component';

const _c0 = ["tabBarTab"];
function TabBarItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function TabBarItemComponent_ng_template_2_Badge_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabBarItemComponent_ng_template_2_Badge_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Badge", 7);
    ɵngcc0.ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    const _r4 = ɵngcc0.ɵɵreference(5);
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r8.prefixCls, "-badge tab-badge");
    ɵngcc0.ɵɵproperty("text", ctx_r8.badge);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.selected ? ctx_r8.selectedIcon : ctx_r8.icon))("ngIfThen", _r4)("ngIfElse", _r6);
} }
function TabBarItemComponent_ng_template_2_Badge_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabBarItemComponent_ng_template_2_Badge_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Badge", 9);
    ɵngcc0.ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    const _r4 = ɵngcc0.ɵɵreference(5);
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r9.prefixCls, "-badge tab-badge");
    ɵngcc0.ɵɵproperty("dot", ctx_r9.dot);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.isTemplateRef(ctx_r9.selected ? ctx_r9.selectedIcon : ctx_r9.icon))("ngIfThen", _r4)("ngIfElse", _r6);
} }
function TabBarItemComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabBarItemComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabBarItemComponent_ng_template_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    const _r4 = ɵngcc0.ɵɵreference(5);
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.isTemplateRef(ctx_r10.selected ? ctx_r10.selectedIcon : ctx_r10.icon))("ngIfThen", _r4)("ngIfElse", _r6);
} }
function TabBarItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_1_Template, 2, 5, "Badge", 4);
    ɵngcc0.ɵɵtemplate(2, TabBarItemComponent_ng_template_2_Badge_2_Template, 2, 5, "Badge", 5);
    ɵngcc0.ɵɵtemplate(3, TabBarItemComponent_ng_template_2_ng_container_3_Template, 2, 3, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-icon");
    ɵngcc0.ɵɵstyleProp("color", ctx_r3.selected ? ctx_r3.tintColor : ctx_r3.unselectedTintColor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.badge);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.dot);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.badge && !ctx_r3.dot);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-title");
    ɵngcc0.ɵɵstyleProp("color", ctx_r3.selected ? ctx_r3.tintColor : ctx_r3.unselectedTintColor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.title, " ");
} }
function TabBarItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function TabBarItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabBarItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 10);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.selected ? ctx_r5.selectedIcon : ctx_r5.icon);
} }
function TabBarItemComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 11);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r7.selected ? ctx_r7.selectedIcon : ctx_r7.icon, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", ctx_r7.title);
} }
const _c1 = ["*"];
export class TabBarItemComponent extends TabPaneComponent {
    constructor() {
        super();
        this.prefixCls = 'am-tab-bar-tab';
        this.selected = false;
        this.tintColor = '#108ee9';
        this.unselectedTintColor = '#888';
        this.key = '';
        this.dot = false;
        this.badge = null;
        this.icon = null;
        this.selectedIcon = null;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
TabBarItemComponent.ɵfac = function TabBarItemComponent_Factory(t) { return new (t || TabBarItemComponent)(); };
TabBarItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabBarItemComponent, selectors: [["TabBarItem"], ["nzm-tab-bar-item"]], viewQuery: function TabBarItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabBarTab = _t.first);
    } }, inputs: { key: "key", dot: "dot", badge: "badge", icon: "icon", selectedIcon: "selectedIcon" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 8, vars: 0, consts: [["content", ""], ["tabBarTab", ""], ["domTemplate", ""], ["imgTemplate", ""], [3, "className", "text", 4, "ngIf"], [3, "className", "dot", 4, "ngIf"], [4, "ngIf"], [3, "className", "text"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "className", "dot"], [3, "ngTemplateOutlet"], [3, "src", "alt"]], template: function TabBarItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabBarItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, TabBarItemComponent_ng_template_2_Template, 6, 14, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, TabBarItemComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, TabBarItemComponent_ng_template_6_Template, 1, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.BadgeComponent, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TabBarItemComponent.ctorParameters = () => [];
TabBarItemComponent.propDecorators = {
    tabBarTab: [{ type: ViewChild, args: ['tabBarTab', { static: true },] }],
    key: [{ type: Input }],
    dot: [{ type: Input }],
    badge: [{ type: Input }],
    icon: [{ type: Input }],
    selectedIcon: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabBarItemComponent, [{
        type: Component,
        args: [{
                selector: 'TabBarItem, nzm-tab-bar-item',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #tabBarTab>\n  <div class=\"{{ prefixCls }}-icon\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    <Badge *ngIf=\"badge\" className=\"{{ prefixCls }}-badge tab-badge\" [text]=\"badge\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <Badge className=\"{{ prefixCls }}-badge tab-badge\" [dot]=\"dot\" *ngIf=\"dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <ng-container *ngIf=\"!badge && !dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </ng-container>\n  </div>\n  <p class=\"{{ prefixCls }}-title\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    {{ title }}\n  </p>\n</ng-template>\n\n<ng-template #domTemplate>\n  <ng-template [ngTemplateOutlet]=\"selected ? selectedIcon : icon\"></ng-template>\n</ng-template>\n\n<ng-template #imgTemplate>\n  <img src=\"{{ selected ? selectedIcon : icon }}\" alt=\"{{ title }}\" />\n</ng-template>\n"
            }]
    }], function () { return []; }, { key: [{
            type: Input
        }], dot: [{
            type: Input
        }], badge: [{
            type: Input
        }], icon: [{
            type: Input
        }], selectedIcon: [{
            type: Input
        }], tabBarTab: [{
            type: ViewChild,
            args: ['tabBarTab', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy90YWItYmFyL3RhYi1iYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtBQUN6RCxJQW1CRTtBQUNGLFFBQUksS0FBSyxFQUFFLENBQUM7QUFDWixRQXJCRSxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7QUFDdkMsUUFBRSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQzVCLFFBQUUsY0FBUyxHQUFXLFNBQVMsQ0FBQztBQUNoQyxRQUFFLHdCQUFtQixHQUFXLE1BQU0sQ0FBQztBQUN2QyxRQUtFLFFBQUcsR0FBVyxFQUFFLENBQUM7QUFDbkIsUUFDRSxRQUFHLEdBQVksS0FBSyxDQUFDO0FBQ3ZCLFFBQ0UsVUFBSyxHQUFvQixJQUFJLENBQUM7QUFDaEMsUUFDRSxTQUFJLEdBQStCLElBQUksQ0FBQztBQUMxQyxRQUNFLGlCQUFZLEdBQStCLElBQUksQ0FBQztBQUNsRCxJQUdFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxLQUFLO0FBQ3JCLFFBQUksT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNIOytDQS9CQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1VBQThCLGtCQUN4Qzs7Ozs7Ozs7O21GQUE0QyxjQUM3Qzs7d0dBQ0k7QUFBQztBQUErQztBQUNyQix3QkFLN0IsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDckMsa0JBRUYsS0FBSztBQUNOLGtCQUNDLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04sbUJBQ0MsS0FBSztBQUNOLDJCQUNDLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYlBhbmVDb21wb25lbnQgfSBmcm9tICcuLi90YWJzL3RhYi1wYW5lLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RhYkJhckl0ZW0sIG56bS10YWItYmFyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLWJhci1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJCYXJJdGVtQ29tcG9uZW50IGV4dGVuZHMgVGFiUGFuZUNvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXRhYi1iYXItdGFiJztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGludENvbG9yOiBzdHJpbmcgPSAnIzEwOGVlOSc7XG4gIHVuc2VsZWN0ZWRUaW50Q29sb3I6IHN0cmluZyA9ICcjODg4JztcblxuICBAVmlld0NoaWxkKCd0YWJCYXJUYWInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICB0YWJCYXJUYWI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGtleTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIGRvdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBiYWRnZTogbnVtYmVyIHwgc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSBudWxsO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=