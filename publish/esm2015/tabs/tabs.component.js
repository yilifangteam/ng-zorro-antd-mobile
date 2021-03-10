import { Component, Input, Output, QueryList, ViewChild, ElementRef, HostBinding, TemplateRef, EventEmitter, ContentChildren, ViewEncapsulation } from '@angular/core';
import { TabPaneComponent } from './tab-pane.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './tab-pane-body.component';
import * as ɵngcc3 from './default-tab-bar.component';

const _c0 = ["TabContent"];
const _c1 = ["DefaultTabBar"];
function TabsComponent_1_ng_template_0_Template(rf, ctx) { }
function TabsComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabsComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.renderTabBar || _r4);
} }
function TabsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} if (rf & 2) {
    const tabPane_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("content", tabPane_r7.content)("active", i_r8 === ctx_r2.selectedKey)("prerender", ctx_r2.prerenderingSiblingsNumber < 0 || ctx_r2.selectedKey - i_r8 <= ctx_r2.prerenderingSiblingsNumber && ctx_r2.selectedKey - i_r8 + ctx_r2.prerenderingSiblingsNumber >= 0);
} }
function TabsComponent_5_ng_template_0_Template(rf, ctx) { }
function TabsComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabsComponent_5_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.renderTabBar || _r4);
} }
function TabsComponent_ng_template_6_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tabPane_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", tabPane_r12.title, " ");
} }
function TabsComponent_ng_template_6_div_2_ng_template_3_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_6_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabsComponent_ng_template_6_div_2_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const tabPane_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tabPane_r12.title);
} }
const _c2 = function (a0, a1) { return { "am-tabs-default-bar-tab-active": a0, "am-tabs-default-bar-tab-disabled": a1 }; };
function TabsComponent_ng_template_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10, 11);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_ng_template_6_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const i_r13 = ctx.index; const ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.clickTab(i_r13); });
    ɵngcc0.ɵɵtemplate(2, TabsComponent_ng_template_6_div_2_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(3, TabsComponent_ng_template_6_div_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tabPane_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const _r16 = ɵngcc0.ɵɵreference(4);
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-default-bar-tab");
    ɵngcc0.ɵɵstyleProp("color", i_r13 === ctx_r11.selectedKey ? ctx_r11.tabBarActiveTextColor : ctx_r11.tabBarInactiveTextColor);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c2, i_r13 === ctx_r11.selectedKey, tabPane_r12.disabled))("ngStyle", ctx_r11.tabBarTextStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", tabPane_r12.isTitleString)("ngIfElse", _r16);
} }
function TabsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "DefaultTabBar", 7, 8);
    ɵngcc0.ɵɵtemplate(2, TabsComponent_ng_template_6_div_2_Template, 5, 12, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("page", ctx_r5.page)("animated", ctx_r5.animated)("activeTab", ctx_r5.selectedKey)("tabTitleSize", ctx_r5.tabTitleSize)("tabBarPosition", ctx_r5.tabBarPosition)("tabBarUnderlineStyle", ctx_r5.tabBarUnderlineStyle)("tabBarBackgroundColor", ctx_r5.tabBarBackgroundColor);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.getCurrentTabPanes());
} }
const _c3 = function (a0) { return { "am-tabs-content-wrap-animated": a0 }; };
const _c4 = function (a0, a1) { return { transform: a0, webkitTransform: a1 }; };
export class TabsComponent {
    constructor() {
        this.prefixCls = 'am-tabs';
        this.selectedKey = 0;
        this.keyToSelect = 0;
        this.paneMoveStyle = 'translate3d(0, 0, 0)';
        this._startTime = 0;
        this._startPosition = 0;
        this._velocityThreshold = 0.3;
        this._tabDirection = 'horizontal';
        this._tabBarPosition = 'top';
        this.page = 5;
        this.swipeable = true;
        this.useOnPan = true;
        this.animated = true;
        this.distanceToChangeTab = 0.3;
        this.tabTitleSize = 0;
        this.tabBarActiveTextColor = '';
        this.tabBarInactiveTextColor = '';
        this.renderTabBar = null;
        this.tabBarBackgroundColor = '#FFF';
        this.prerenderingSiblingsNumber = -1;
        this.tabBarTextStyle = {};
        /** should be removed when https://github.com/angular/angular/issues/20810 resolved **/
        this.tabPanesContent = null;
        this.onChange = new EventEmitter();
        this.onTabClick = new EventEmitter();
        this.amTabs = true;
        this.amTabsTop = true;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        this.amTabsVertical = false;
        this.amTabsHorizontal = true;
    }
    get activeTab() {
        return this.selectedKey;
    }
    set activeTab(value) {
        this.keyToSelect = value;
    }
    get tabBarPosition() {
        return this._tabBarPosition;
    }
    set tabBarPosition(position) {
        this._tabBarPosition = position;
        switch (position) {
            case 'top':
                this.amTabsTop = true;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'left':
                this.amTabsTop = false;
                this.amTabsLeft = true;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'bottom':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = true;
                break;
            case 'right':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = true;
                this.amTabsBottom = false;
                break;
            default:
                break;
        }
    }
    get tabDirection() {
        return this._tabDirection;
    }
    set tabDirection(direction) {
        this._tabDirection = direction;
        switch (direction) {
            case 'horizontal':
                this.amTabsHorizontal = true;
                this.amTabsVertical = false;
                break;
            case 'vertical':
                this.amTabsHorizontal = false;
                this.amTabsVertical = true;
                break;
            default:
                break;
        }
    }
    clickTab(index) {
        if (this.selectedKey !== index) {
            this.keyToSelect = index;
            this.onTabClick.emit({ index: this.keyToSelect });
        }
    }
    getCurrentTabPanes() {
        return this.tabPanesContent || this.tabPanes;
    }
    onTouchStart(event) {
        this._startTime = event.timeStamp;
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            }
            else if ('vertical' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
            }
        }
    }
    onTouchMove(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                // velocity 小于阈值才认为是pan操作
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px), 0, 0 )';
                }
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(0, calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px, 0 )';
                }
            }
        }
    }
    onTouchEnd(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(-' + this.selectedKey * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(0, -' + this.selectedKey * 100 + '%, 0 )';
            }
        }
    }
    ngAfterContentInit() {
        this.selectTabPane(this.keyToSelect);
        this.selectedKey = this.keyToSelect;
    }
    ngDoCheck() {
        if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            this.selectTabPane(this.keyToSelect);
            this.selectedKey = this.keyToSelect;
            this.onChange.emit({ index: this.selectedKey });
        }
    }
    selectTabPane(index) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            const actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
            if ('horizontal' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(-' + actualKeyToSelect * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(0, -' + actualKeyToSelect * 100 + '%, 0 )';
            }
        }
    }
    getVelocity(deltaDistance, deltaTime) {
        return Math.abs(deltaDistance / deltaTime);
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsComponent, selectors: [["Tabs"], ["nzm-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabPaneComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabPanes = _t);
    } }, viewQuery: function TabsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
        ɵngcc0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabContent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.defaultTabBar = _t.first);
    } }, hostVars: 14, hostBindings: function TabsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-tabs", ctx.amTabs)("am-tabs-top", ctx.amTabsTop)("am-tabs-left", ctx.amTabsLeft)("am-tabs-right", ctx.amTabsRight)("am-tabs-bottom", ctx.amTabsBottom)("am-tabs-vertical", ctx.amTabsVertical)("am-tabs-horizontal", ctx.amTabsHorizontal);
    } }, inputs: { page: "page", swipeable: "swipeable", useOnPan: "useOnPan", animated: "animated", distanceToChangeTab: "distanceToChangeTab", tabTitleSize: "tabTitleSize", tabBarActiveTextColor: "tabBarActiveTextColor", tabBarInactiveTextColor: "tabBarInactiveTextColor", renderTabBar: "renderTabBar", tabBarBackgroundColor: "tabBarBackgroundColor", prerenderingSiblingsNumber: "prerenderingSiblingsNumber", tabBarTextStyle: "tabBarTextStyle", tabPanesContent: "tabPanesContent", activeTab: "activeTab", tabBarPosition: "tabBarPosition", tabDirection: "tabDirection", tabBarUnderlineStyle: "tabBarUnderlineStyle" }, outputs: { onChange: "onChange", onTabClick: "onTabClick" }, decls: 8, vars: 13, consts: [[4, "ngIf"], [3, "ngClass", "ngStyle", "touchstart", "touchmove", "touchend"], ["TabContent", ""], ["tab-pane-body", "", 3, "content", "active", "prerender", 4, "ngFor", "ngForOf"], ["renderDefaultTabBar", ""], [3, "ngTemplateOutlet"], ["tab-pane-body", "", 3, "content", "active", "prerender"], [3, "page", "animated", "activeTab", "tabTitleSize", "tabBarPosition", "tabBarUnderlineStyle", "tabBarBackgroundColor"], ["DefaultTabBar", ""], [3, "class", "ngClass", "ngStyle", "color", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "click"], ["TabTitle", ""], [4, "ngIf", "ngIfElse"], ["titleTemplate", ""]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0);
        ɵngcc0.ɵɵtemplate(1, TabsComponent_1_Template, 1, 1, undefined, 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1, 2);
        ɵngcc0.ɵɵlistener("touchstart", function TabsComponent_Template_div_touchstart_2_listener($event) { return ctx.onTouchStart($event); })("touchmove", function TabsComponent_Template_div_touchmove_2_listener($event) { return ctx.onTouchMove($event); })("touchend", function TabsComponent_Template_div_touchend_2_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵtemplate(4, TabsComponent_div_4_Template, 1, 3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, TabsComponent_5_Template, 1, 1, undefined, 0);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(6, TabsComponent_ng_template_6_Template, 3, 8, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", "top" === ctx.tabBarPosition || "left" === ctx.tabBarPosition);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content-wrap");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c3, ctx.animated))("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c4, ctx.paneMoveStyle, ctx.paneMoveStyle));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getCurrentTabPanes());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", "bottom" === ctx.tabBarPosition || "right" === ctx.tabBarPosition);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.TabPaneBodyComponent, ɵngcc3.DefaultTabBarComponent], encapsulation: 2 });
TabsComponent.ctorParameters = () => [];
TabsComponent.propDecorators = {
    tabPanes: [{ type: ContentChildren, args: [TabPaneComponent, { descendants: false },] }],
    tabContent: [{ type: ViewChild, args: ['TabContent', { static: true },] }],
    defaultTabBar: [{ type: ViewChild, args: ['DefaultTabBar',] }],
    page: [{ type: Input }],
    swipeable: [{ type: Input }],
    useOnPan: [{ type: Input }],
    animated: [{ type: Input }],
    tabBarUnderlineStyle: [{ type: Input }],
    distanceToChangeTab: [{ type: Input }],
    tabTitleSize: [{ type: Input }],
    tabBarActiveTextColor: [{ type: Input }],
    tabBarInactiveTextColor: [{ type: Input }],
    renderTabBar: [{ type: Input }],
    tabBarBackgroundColor: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    tabBarTextStyle: [{ type: Input }],
    tabPanesContent: [{ type: Input }],
    activeTab: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tabDirection: [{ type: Input }],
    onChange: [{ type: Output }],
    onTabClick: [{ type: Output }],
    amTabs: [{ type: HostBinding, args: ['class.am-tabs',] }],
    amTabsTop: [{ type: HostBinding, args: ['class.am-tabs-top',] }],
    amTabsLeft: [{ type: HostBinding, args: ['class.am-tabs-left',] }],
    amTabsRight: [{ type: HostBinding, args: ['class.am-tabs-right',] }],
    amTabsBottom: [{ type: HostBinding, args: ['class.am-tabs-bottom',] }],
    amTabsVertical: [{ type: HostBinding, args: ['class.am-tabs-vertical',] }],
    amTabsHorizontal: [{ type: HostBinding, args: ['class.am-tabs-horizontal',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsComponent, [{
        type: Component,
        args: [{
                selector: 'Tabs, nzm-tabs',
                template: "<ng-container>\n  <ng-template\n    *ngIf=\"'top' === tabBarPosition || 'left' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  >\n  </ng-template>\n  <div\n    #TabContent\n    class=\"{{ prefixCls }}-content-wrap\"\n    [ngClass]=\"{ 'am-tabs-content-wrap-animated': animated }\"\n    [ngStyle]=\"{ transform: paneMoveStyle, webkitTransform: paneMoveStyle }\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <div\n      tab-pane-body\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      [content]=\"tabPane.content\"\n      [active]=\"i === selectedKey\"\n      [prerender]=\"\n        prerenderingSiblingsNumber < 0 ||\n        (selectedKey - i <= prerenderingSiblingsNumber && selectedKey - i + prerenderingSiblingsNumber >= 0)\n      \"\n    ></div>\n  </div>\n  <ng-template\n    *ngIf=\"'bottom' === tabBarPosition || 'right' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  ></ng-template>\n</ng-container>\n\n<ng-template #renderDefaultTabBar>\n  <DefaultTabBar\n    #DefaultTabBar\n    [page]=\"page\"\n    [animated]=\"animated\"\n    [activeTab]=\"selectedKey\"\n    [tabTitleSize]=\"tabTitleSize\"\n    [tabBarPosition]=\"tabBarPosition\"\n    [tabBarUnderlineStyle]=\"tabBarUnderlineStyle\"\n    [tabBarBackgroundColor]=\"tabBarBackgroundColor\"\n  >\n    <div\n      #TabTitle\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      class=\"{{ prefixCls }}-default-bar-tab\"\n      [ngClass]=\"{\n        'am-tabs-default-bar-tab-active': i === selectedKey,\n        'am-tabs-default-bar-tab-disabled': tabPane.disabled\n      }\"\n      [ngStyle]=\"tabBarTextStyle\"\n      [style.color]=\"i === selectedKey ? tabBarActiveTextColor : tabBarInactiveTextColor\"\n      (click)=\"clickTab(i)\"\n    >\n      <ng-container *ngIf=\"tabPane.isTitleString; else titleTemplate\">\n        {{ tabPane.title }}\n      </ng-container>\n      <ng-template #titleTemplate>\n        <ng-template [ngTemplateOutlet]=\"tabPane.title\"></ng-template>\n      </ng-template>\n    </div>\n  </DefaultTabBar>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { page: [{
            type: Input
        }], swipeable: [{
            type: Input
        }], useOnPan: [{
            type: Input
        }], animated: [{
            type: Input
        }], distanceToChangeTab: [{
            type: Input
        }], tabTitleSize: [{
            type: Input
        }], tabBarActiveTextColor: [{
            type: Input
        }], tabBarInactiveTextColor: [{
            type: Input
        }], renderTabBar: [{
            type: Input
        }], tabBarBackgroundColor: [{
            type: Input
        }], prerenderingSiblingsNumber: [{
            type: Input
        }], tabBarTextStyle: [{
            type: Input
        }], tabPanesContent: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onTabClick: [{
            type: Output
        }], amTabs: [{
            type: HostBinding,
            args: ['class.am-tabs']
        }], amTabsTop: [{
            type: HostBinding,
            args: ['class.am-tabs-top']
        }], amTabsLeft: [{
            type: HostBinding,
            args: ['class.am-tabs-left']
        }], amTabsRight: [{
            type: HostBinding,
            args: ['class.am-tabs-right']
        }], amTabsBottom: [{
            type: HostBinding,
            args: ['class.am-tabs-bottom']
        }], amTabsVertical: [{
            type: HostBinding,
            args: ['class.am-tabs-vertical']
        }], amTabsHorizontal: [{
            type: HostBinding,
            args: ['class.am-tabs-horizontal']
        }], activeTab: [{
            type: Input
        }], tabBarPosition: [{
            type: Input
        }], tabDirection: [{
            type: Input
        }], tabPanes: [{
            type: ContentChildren,
            args: [TabPaneComponent, { descendants: false }]
        }], tabContent: [{
            type: ViewChild,
            args: ['TabContent', { static: true }]
        }], defaultTabBar: [{
            type: ViewChild,
            args: ['DefaultTabBar']
        }], tabBarUnderlineStyle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osZUFBZSxFQUNmLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4RCxNQUFNLE9BQU8sYUFBYTtBQUFHLElBa0kzQjtBQUFnQixRQWpJaEIsY0FBUyxHQUFXLFNBQVMsQ0FBQztBQUNoQyxRQUFFLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0FBQzFCLFFBQUUsZ0JBQVcsR0FBVyxDQUFDLENBQUM7QUFDMUIsUUFBRSxrQkFBYSxHQUFXLHNCQUFzQixDQUFDO0FBQ2pELFFBQ1UsZUFBVSxHQUFXLENBQUMsQ0FBQztBQUNqQyxRQUFVLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQ3JDLFFBQVUsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO0FBQzNDLFFBQVUsa0JBQWEsR0FBaUIsWUFBWSxDQUFDO0FBQ3JELFFBQVUsb0JBQWUsR0FBdUIsS0FBSyxDQUFDO0FBQ3RELFFBVUUsU0FBSSxHQUFXLENBQUMsQ0FBQztBQUNuQixRQUNFLGNBQVMsR0FBWSxJQUFJLENBQUM7QUFDNUIsUUFDRSxhQUFRLEdBQVksSUFBSSxDQUFDO0FBQzNCLFFBQ0UsYUFBUSxHQUFZLElBQUksQ0FBQztBQUMzQixRQUdFLHdCQUFtQixHQUFXLEdBQUcsQ0FBQztBQUNwQyxRQUNFLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0FB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XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRG9DaGVjayxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYkRpcmVjdGlvbiwgVGFiQmFyUG9zaXRpb25UeXBlLCBUYWJzT25DaGFuZ2VFdmVudCB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGFicywgbnptLXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10YWJzJztcbiAgc2VsZWN0ZWRLZXk6IG51bWJlciA9IDA7XG4gIGtleVRvU2VsZWN0OiBudW1iZXIgPSAwO1xuICBwYW5lTW92ZVN0eWxlOiBzdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwgMCwgMCknO1xuXG4gIHByaXZhdGUgX3N0YXJ0VGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdmVsb2NpdHlUaHJlc2hvbGQ6IG51bWJlciA9IDAuMztcbiAgcHJpdmF0ZSBfdGFiRGlyZWN0aW9uOiBUYWJEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIHByaXZhdGUgX3RhYkJhclBvc2l0aW9uOiBUYWJCYXJQb3NpdGlvblR5cGUgPSAndG9wJztcblxuICBAQ29udGVudENoaWxkcmVuKFRhYlBhbmVDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIHRhYlBhbmVzOiBRdWVyeUxpc3Q8VGFiUGFuZUNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnVGFiQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ0RlZmF1bHRUYWJCYXInKVxuICBkZWZhdWx0VGFiQmFyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHBhZ2U6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpXG4gIHN3aXBlYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHVzZU9uUGFuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYW5pbWF0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICB0YWJCYXJVbmRlcmxpbmVTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKVxuICBkaXN0YW5jZVRvQ2hhbmdlVGFiOiBudW1iZXIgPSAwLjM7XG4gIEBJbnB1dCgpXG4gIHRhYlRpdGxlU2l6ZTogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgdGFiQmFyQWN0aXZlVGV4dENvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgdGFiQmFySW5hY3RpdmVUZXh0Q29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICByZW5kZXJUYWJCYXI6IFRlbXBsYXRlUmVmPHZvaWQ+ID0gbnVsbDtcbiAgQElucHV0KClcbiAgdGFiQmFyQmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnI0ZGRic7XG4gIEBJbnB1dCgpXG4gIHByZXJlbmRlcmluZ1NpYmxpbmdzTnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KClcbiAgdGFiQmFyVGV4dFN0eWxlOiBvYmplY3QgPSB7fTtcbiAgLyoqIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA4MTAgcmVzb2x2ZWQgKiovXG4gIEBJbnB1dCgpXG4gIHRhYlBhbmVzQ29udGVudDogUXVlcnlMaXN0PFRhYlBhbmVDb21wb25lbnQ+ID0gbnVsbDtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZVRhYigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkS2V5O1xuICB9XG4gIHNldCBhY3RpdmVUYWIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMua2V5VG9TZWxlY3QgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdGFiQmFyUG9zaXRpb24oKTogVGFiQmFyUG9zaXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiQmFyUG9zaXRpb247XG4gIH1cbiAgc2V0IHRhYkJhclBvc2l0aW9uKHBvc2l0aW9uOiBUYWJCYXJQb3NpdGlvblR5cGUpIHtcbiAgICB0aGlzLl90YWJCYXJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRoaXMuYW1UYWJzVG9wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbVRhYnNMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNCb3R0b20gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5hbVRhYnNUb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbVRhYnNSaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRoaXMuYW1UYWJzVG9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzQm90dG9tID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMuYW1UYWJzVG9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbVRhYnNCb3R0b20gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRhYkRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiRGlyZWN0aW9uO1xuICB9XG4gIHNldCB0YWJEaXJlY3Rpb24oZGlyZWN0aW9uOiBUYWJEaXJlY3Rpb24pIHtcbiAgICB0aGlzLl90YWJEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICB0aGlzLmFtVGFic0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFtVGFic1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICB0aGlzLmFtVGFic0hvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNWZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRhYnNPbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFic09uQ2hhbmdlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvblRhYkNsaWNrOiBFdmVudEVtaXR0ZXI8VGFic09uQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJzT25DaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMnKVxuICBhbVRhYnM6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtdG9wJylcbiAgYW1UYWJzVG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWJzLWxlZnQnKVxuICBhbVRhYnNMZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGFicy1yaWdodCcpXG4gIGFtVGFic1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGFicy1ib3R0b20nKVxuICBhbVRhYnNCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWJzLXZlcnRpY2FsJylcbiAgYW1UYWJzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWJzLWhvcml6b250YWwnKVxuICBhbVRhYnNIb3Jpem9udGFsOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY2xpY2tUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkS2V5ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5rZXlUb1NlbGVjdCA9IGluZGV4O1xuICAgICAgdGhpcy5vblRhYkNsaWNrLmVtaXQoeyBpbmRleDogdGhpcy5rZXlUb1NlbGVjdCB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50VGFiUGFuZXMoKTogUXVlcnlMaXN0PFRhYlBhbmVDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy50YWJQYW5lc0NvbnRlbnQgfHwgdGhpcy50YWJQYW5lcztcbiAgfVxuXG4gIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKSAmJiB0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICgnaG9yaXpvbnRhbCcgPT09IHRoaXMuX3RhYkRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLl9zdGFydFBvc2l0aW9uID1cbiAgICAgICAgICBldmVudCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgfSBlbHNlIGlmICgndmVydGljYWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgZXZlbnQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCdob3Jpem9udGFsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX3N0YXJ0UG9zaXRpb247XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDAgJiYgdGhpcy5hY3RpdmVUYWIgPT09IHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiYgdGhpcy5hY3RpdmVUYWIgPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmVsb2NpdHkg5bCP5LqO6ZiI5YC85omN6K6k5Li65pivcGFu5pON5L2cXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmdldFZlbG9jaXR5KGRpc3RhbmNlLCBldmVudC50aW1lU3RhbXAgLSB0aGlzLl9zdGFydFRpbWUpIDw9IHRoaXMuX3ZlbG9jaXR5VGhyZXNob2xkICYmXG4gICAgICAgICAgdGhpcy51c2VPblBhbiAmJlxuICAgICAgICAgIHRoaXMuc3dpcGVhYmxlICYmXG4gICAgICAgICAgdGhpcy5hbmltYXRlZFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnBhbmVNb3ZlU3R5bGUgPSAndHJhbnNsYXRlM2QoY2FsYygtJyArIHRoaXMuc2VsZWN0ZWRLZXkgKiAxMDAgKyAnJSArICcgKyBkaXN0YW5jZSArICdweCksIDAsIDAgKSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJ3ZlcnRpY2FsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuX3N0YXJ0UG9zaXRpb247XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDAgJiYgdGhpcy5hY3RpdmVUYWIgPT09IHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiYgdGhpcy5hY3RpdmVUYWIgPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPD0gdGhpcy5fdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICB0aGlzLnVzZU9uUGFuICYmXG4gICAgICAgICAgdGhpcy5zd2lwZWFibGUgJiZcbiAgICAgICAgICB0aGlzLmFuaW1hdGVkXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucGFuZU1vdmVTdHlsZSA9ICd0cmFuc2xhdGUzZCgwLCBjYWxjKC0nICsgdGhpcy5zZWxlY3RlZEtleSAqIDEwMCArICclICsgJyArIGRpc3RhbmNlICsgJ3B4LCAwICknO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCdob3Jpem9udGFsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX3N0YXJ0UG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCA9IHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5kaXN0YW5jZVRvQ2hhbmdlVGFiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPD0gdGhpcy5fdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICAgICh0aGlzLnVzZU9uUGFuICYmIHRoaXMuc3dpcGVhYmxlICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCkpIHx8XG4gICAgICAgICAgKHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPiB0aGlzLl92ZWxvY2l0eVRocmVzaG9sZCAmJlxuICAgICAgICAgICAgKHRoaXMuc3dpcGVhYmxlICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCAvIDIpKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwICYmIHRoaXMuYWN0aXZlVGFiIDwgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmtleVRvU2VsZWN0Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiYgdGhpcy5hY3RpdmVUYWIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmtleVRvU2VsZWN0LS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZU1vdmVTdHlsZSA9ICd0cmFuc2xhdGUzZCgtJyArIHRoaXMuc2VsZWN0ZWRLZXkgKiAxMDAgKyAnJSwgMCwgMCApJztcbiAgICAgIH0gZWxzZSBpZiAoJ3ZlcnRpY2FsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuX3N0YXJ0UG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCA9IHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAqIHRoaXMuZGlzdGFuY2VUb0NoYW5nZVRhYjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0aGlzLmdldFZlbG9jaXR5KGRpc3RhbmNlLCBldmVudC50aW1lU3RhbXAgLSB0aGlzLl9zdGFydFRpbWUpIDw9IHRoaXMuX3ZlbG9jaXR5VGhyZXNob2xkICYmXG4gICAgICAgICAgICAodGhpcy51c2VPblBhbiAmJiB0aGlzLnN3aXBlYWJsZSAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBkaXN0YW5jZVRvQ2hhbmdlVGFiUHgpKSB8fFxuICAgICAgICAgICh0aGlzLmdldFZlbG9jaXR5KGRpc3RhbmNlLCBldmVudC50aW1lU3RhbXAgLSB0aGlzLl9zdGFydFRpbWUpID4gdGhpcy5fdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICAgICh0aGlzLnN3aXBlYWJsZSAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBkaXN0YW5jZVRvQ2hhbmdlVGFiUHggLyAyKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCAmJiB0aGlzLmFjdGl2ZVRhYiA8IHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5rZXlUb1NlbGVjdCsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPiAwICYmIHRoaXMuYWN0aXZlVGFiID4gMCkge1xuICAgICAgICAgICAgdGhpcy5rZXlUb1NlbGVjdC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVNb3ZlU3R5bGUgPSAndHJhbnNsYXRlM2QoMCwgLScgKyB0aGlzLnNlbGVjdGVkS2V5ICogMTAwICsgJyUsIDAgKSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2VsZWN0VGFiUGFuZSh0aGlzLmtleVRvU2VsZWN0KTtcbiAgICB0aGlzLnNlbGVjdGVkS2V5ID0gdGhpcy5rZXlUb1NlbGVjdDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5rZXlUb1NlbGVjdCAhPT0gdGhpcy5zZWxlY3RlZEtleSAmJiB0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWxlY3RUYWJQYW5lKHRoaXMua2V5VG9TZWxlY3QpO1xuICAgICAgdGhpcy5zZWxlY3RlZEtleSA9IHRoaXMua2V5VG9TZWxlY3Q7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBpbmRleDogdGhpcy5zZWxlY3RlZEtleSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFRhYlBhbmUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWN0dWFsS2V5VG9TZWxlY3QgPSBNYXRoLm1pbih0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpLmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcbiAgICAgIGlmICgnaG9yaXpvbnRhbCcgPT09IHRoaXMuX3RhYkRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnBhbmVNb3ZlU3R5bGUgPSAndHJhbnNsYXRlM2QoLScgKyBhY3R1YWxLZXlUb1NlbGVjdCAqIDEwMCArICclLCAwLCAwICknO1xuICAgICAgfSBlbHNlIGlmICgndmVydGljYWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wYW5lTW92ZVN0eWxlID0gJ3RyYW5zbGF0ZTNkKDAsIC0nICsgYWN0dWFsS2V5VG9TZWxlY3QgKiAxMDAgKyAnJSwgMCApJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFZlbG9jaXR5KGRlbHRhRGlzdGFuY2UsIGRlbHRhVGltZSkge1xuICAgIHJldHVybiBNYXRoLmFicyhkZWx0YURpc3RhbmNlIC8gZGVsdGFUaW1lKTtcbiAgfVxufVxuIl19