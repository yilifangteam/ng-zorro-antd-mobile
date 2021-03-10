import { Component, Input, Output, ContentChildren, QueryList, HostBinding, EventEmitter } from '@angular/core';
import { TabBarItemComponent } from './tab-bar-item.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../tabs/tabs.component';
import * as ɵngcc2 from '@angular/common';

function TabBarComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function TabBarComponent_ng_template_1_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const i_r4 = ctx.index; const tabBarItem_r3 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.tabBarTabOnPress({ index: i_r4, key: tabBarItem_r3.key, title: tabBarItem_r3.title }); });
    ɵngcc0.ɵɵelementContainer(1, 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tabBarItem_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tabBarItem_r3.tabBarTab);
} }
const _c0 = function (a0, a1) { return { "am-tab-bar-bar-hidden-top": a0, "am-tab-bar-bar-hidden-bottom": a1 }; };
function TabBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, TabBarComponent_ng_template_1_div_2_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-bar");
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r1.barTintColor);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c0, "top" === ctx_r1.tabBarPosition && ctx_r1.hidden, "bottom" === ctx_r1.tabBarPosition && ctx_r1.hidden));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.tabBarItems);
} }
export class TabBarComponent {
    constructor() {
        this.prefixCls = 'am-tab-bar';
        this._activeTab = 0;
        this._tintColor = '#108ee9';
        this._unselectedTintColor = '#888';
        this.hidden = false;
        this.prerenderingSiblingsNumber = -1;
        this.barTintColor = 'white';
        this.tabBarPosition = 'bottom';
        this.onPress = new EventEmitter();
        this.tabBar = true;
    }
    get activeTab() {
        return this._activeTab;
    }
    set activeTab(tab) {
        this._activeTab = tab;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.selectTabBarItem(tab);
        }
    }
    get tintColor() {
        return this._tintColor;
    }
    set tintColor(color) {
        this._tintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
            });
        }
    }
    get unselectedTintColor() {
        return this._unselectedTintColor;
    }
    set unselectedTintColor(color) {
        this._unselectedTintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
    }
    selectTabBarItem(index) {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.selected = false;
            });
            this.tabBarItems.toArray()[index].selected = true;
        }
    }
    tabBarTabOnPress(pressParam) {
        this.onPress.emit(pressParam);
    }
    ngAfterContentInit() {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
        this.selectTabBarItem(this.activeTab);
    }
}
TabBarComponent.ɵfac = function TabBarComponent_Factory(t) { return new (t || TabBarComponent)(); };
TabBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabBarComponent, selectors: [["TabBar"], ["nzm-tab-bar"]], contentQueries: function TabBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabBarItemComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabBarItems = _t);
    } }, hostVars: 2, hostBindings: function TabBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-tab-bar", ctx.tabBar);
    } }, inputs: { hidden: "hidden", prerenderingSiblingsNumber: "prerenderingSiblingsNumber", barTintColor: "barTintColor", tabBarPosition: "tabBarPosition", activeTab: "activeTab", tintColor: "tintColor", unselectedTintColor: "unselectedTintColor" }, outputs: { onPress: "onPress" }, decls: 3, vars: 9, consts: [[3, "animated", "useOnPan", "swipeable", "activeTab", "renderTabBar", "tabDirection", "tabPanesContent", "tabBarPosition", "prerenderingSiblingsNumber"], ["TabBarBar", ""], [1, "am-tabs-tab-bar-wrap"], [3, "ngClass"], ["class", "am-tab-bar-tab", 3, "click", 4, "ngFor", "ngForOf"], [1, "am-tab-bar-tab", 3, "click"], [3, "ngTemplateOutlet"]], template: function TabBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "Tabs", 0);
        ɵngcc0.ɵɵtemplate(1, TabBarComponent_ng_template_1_Template, 3, 10, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("animated", false)("useOnPan", false)("swipeable", false)("activeTab", ctx.activeTab)("renderTabBar", _r0)("tabDirection", "horizontal")("tabPanesContent", ctx.tabBarItems)("tabBarPosition", ctx.tabBarPosition)("prerenderingSiblingsNumber", ctx.prerenderingSiblingsNumber);
    } }, directives: [ɵngcc1.TabsComponent, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
TabBarComponent.ctorParameters = () => [];
TabBarComponent.propDecorators = {
    tabBarItems: [{ type: ContentChildren, args: [TabBarItemComponent, { descendants: true },] }],
    hidden: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    activeTab: [{ type: Input }],
    barTintColor: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tintColor: [{ type: Input }],
    unselectedTintColor: [{ type: Input }],
    onPress: [{ type: Output }],
    tabBar: [{ type: HostBinding, args: ['class.am-tab-bar',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabBarComponent, [{
        type: Component,
        args: [{
                selector: 'TabBar, nzm-tab-bar',
                template: "<Tabs\n  [animated]=\"false\"\n  [useOnPan]=\"false\"\n  [swipeable]=\"false\"\n  [activeTab]=\"activeTab\"\n  [renderTabBar]=\"TabBarBar\"\n  [tabDirection]=\"'horizontal'\"\n  [tabPanesContent]=\"tabBarItems\"\n  [tabBarPosition]=\"tabBarPosition\"\n  [prerenderingSiblingsNumber]=\"prerenderingSiblingsNumber\"\n></Tabs>\n\n<ng-template #TabBarBar>\n  <div class=\"am-tabs-tab-bar-wrap\">\n    <div\n      class=\"{{ prefixCls }}-bar\"\n      [ngClass]=\"{\n        'am-tab-bar-bar-hidden-top': 'top' === tabBarPosition && hidden,\n        'am-tab-bar-bar-hidden-bottom': 'bottom' === tabBarPosition && hidden\n      }\"\n      [style.background-color]=\"barTintColor\"\n    >\n      <div\n        class=\"am-tab-bar-tab\"\n        *ngFor=\"let tabBarItem of tabBarItems; let i = index\"\n        (click)=\"tabBarTabOnPress({ index: i, key: tabBarItem.key, title: tabBarItem.title })\"\n      >\n        <ng-container [ngTemplateOutlet]=\"tabBarItem.tabBarTab\"></ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
            }]
    }], function () { return []; }, { hidden: [{
            type: Input
        }], prerenderingSiblingsNumber: [{
            type: Input
        }], barTintColor: [{
            type: Input
        }], tabBarPosition: [{
            type: Input
        }], onPress: [{
            type: Output
        }], tabBar: [{
            type: HostBinding,
            args: ['class.am-tab-bar']
        }], activeTab: [{
            type: Input
        }], tintColor: [{
            type: Input
        }], unselectedTintColor: [{
            type: Input
        }], tabBarItems: [{
            type: ContentChildren,
            args: [TabBarItemComponent, { descendants: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFiLWJhci90YWItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWEvRCxNQUFNLE9BQU8sZUFBZTtBQUFHLElBeUQ3QjtBQUFnQixRQXhEaEIsY0FBUyxHQUFXLFlBQVksQ0FBQztBQUNuQyxRQUFVLGVBQVUsR0FBVyxDQUFDLENBQUM7QUFDakMsUUFBVSxlQUFVLEdBQVcsU0FBUyxDQUFDO0FBQ3pDLFFBQVUseUJBQW9CLEdBQVcsTUFBTSxDQUFDO0FBQ2hELFFBS0UsV0FBTSxHQUFZLEtBQUssQ0FBQztBQUMxQixRQUNFLCtCQUEwQixHQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFFBV0UsaUJBQVksR0FBVyxPQUFPLENBQUM7QUFDakMsUUFDRSxtQkFBYyxHQUEwQixRQUFRLENBQUM7QUFDbkQsUUF5QkUsWUFBTyxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztBQUNyRixRQUVFLFdBQU0sR0FBWSxJQUFJLENBQUM7QUFDekIsSUFDaUIsQ0FBQztBQUNsQixJQTdDRSxJQUNJLFNBQVM7QUFBSyxRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFXO0FBQzNCLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDMUIsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcs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QUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ3hELHFCQUVGLEtBQUs7QUFDTix5Q0FDQyxLQUFLO0FBQ04sd0JBQ0MsS0FBSztBQUNOLDJCQVNDLEtBQUs7QUFDTiw2QkFDQyxLQUFLO0FBQ04sd0JBQ0MsS0FBSztBQUNOLGtDQVdDLEtBQUs7QUFDTixzQkFXQyxNQUFNO0FBQ1AscUJBRUMsV0FBVyxTQUFDLGtCQUFrQjtBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJCYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItYmFyLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVGFiQmFyVGFiUG9zaXRpb25UeXBlID0gJ3RvcCcgfCAnYm90dG9tJztcbmV4cG9ydCBpbnRlcmZhY2UgVGFiQmFyT25QcmVzc0V2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RhYkJhciwgbnptLXRhYi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFiQmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXRhYi1iYXInO1xuICBwcml2YXRlIF9hY3RpdmVUYWI6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RpbnRDb2xvcjogc3RyaW5nID0gJyMxMDhlZTknO1xuICBwcml2YXRlIF91bnNlbGVjdGVkVGludENvbG9yOiBzdHJpbmcgPSAnIzg4OCc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJCYXJJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIHRhYkJhckl0ZW1zOiBRdWVyeUxpc3Q8VGFiQmFySXRlbUNvbXBvbmVudD47XG5cbiAgQElucHV0KClcbiAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHByZXJlbmRlcmluZ1NpYmxpbmdzTnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZVRhYigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWI7XG4gIH1cbiAgc2V0IGFjdGl2ZVRhYih0YWI6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRhYjtcbiAgICBpZiAodGhpcy50YWJCYXJJdGVtcyAmJiB0aGlzLnRhYkJhckl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0VGFiQmFySXRlbSh0YWIpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBiYXJUaW50Q29sb3I6IHN0cmluZyA9ICd3aGl0ZSc7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclBvc2l0aW9uOiBUYWJCYXJUYWJQb3NpdGlvblR5cGUgPSAnYm90dG9tJztcbiAgQElucHV0KClcbiAgZ2V0IHRpbnRDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aW50Q29sb3I7XG4gIH1cbiAgc2V0IHRpbnRDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGludENvbG9yID0gY29sb3I7XG4gICAgaWYgKHRoaXMudGFiQmFySXRlbXMgJiYgdGhpcy50YWJCYXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRhYkJhckl0ZW1zLmZvckVhY2goKHRhYkJhckl0ZW06IFRhYkJhckl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgICAgdGFiQmFySXRlbS50aW50Q29sb3IgPSB0aGlzLl90aW50Q29sb3I7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHVuc2VsZWN0ZWRUaW50Q29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdW5zZWxlY3RlZFRpbnRDb2xvcjtcbiAgfVxuICBzZXQgdW5zZWxlY3RlZFRpbnRDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5zZWxlY3RlZFRpbnRDb2xvciA9IGNvbG9yO1xuICAgIGlmICh0aGlzLnRhYkJhckl0ZW1zICYmIHRoaXMudGFiQmFySXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50YWJCYXJJdGVtcy5mb3JFYWNoKCh0YWJCYXJJdGVtOiBUYWJCYXJJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRhYkJhckl0ZW0udW5zZWxlY3RlZFRpbnRDb2xvciA9IHRoaXMuX3Vuc2VsZWN0ZWRUaW50Q29sb3I7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uUHJlc3M6IEV2ZW50RW1pdHRlcjxUYWJCYXJPblByZXNzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJCYXJPblByZXNzRXZlbnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWItYmFyJylcbiAgdGFiQmFyOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2VsZWN0VGFiQmFySXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMudGFiQmFySXRlbXMgJiYgdGhpcy50YWJCYXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRhYkJhckl0ZW1zLmZvckVhY2goKHRhYkJhckl0ZW06IFRhYkJhckl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgICAgdGFiQmFySXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRhYkJhckl0ZW1zLnRvQXJyYXkoKVtpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRhYkJhclRhYk9uUHJlc3MocHJlc3NQYXJhbTogVGFiQmFyT25QcmVzc0V2ZW50KSB7XG4gICAgdGhpcy5vblByZXNzLmVtaXQocHJlc3NQYXJhbSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMudGFiQmFySXRlbXMgJiYgdGhpcy50YWJCYXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRhYkJhckl0ZW1zLmZvckVhY2goKHRhYkJhckl0ZW06IFRhYkJhckl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgICAgdGFiQmFySXRlbS50aW50Q29sb3IgPSB0aGlzLl90aW50Q29sb3I7XG4gICAgICAgIHRhYkJhckl0ZW0udW5zZWxlY3RlZFRpbnRDb2xvciA9IHRoaXMuX3Vuc2VsZWN0ZWRUaW50Q29sb3I7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RUYWJCYXJJdGVtKHRoaXMuYWN0aXZlVGFiKTtcbiAgfVxufVxuIl19