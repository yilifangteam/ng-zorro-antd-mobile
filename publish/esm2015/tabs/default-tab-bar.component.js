import { Component, Input, QueryList, Renderer2, ViewChild, ElementRef, HostBinding, ContentChildren, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/observers';

const _c0 = ["TabTitle"];
const _c1 = ["TabsBarSwipe"];
function DefaultTabBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-prevpage");
} }
function DefaultTabBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-nextpage");
} }
const _c2 = function (a0) { return { "am-tabs-default-bar-animated": a0 }; };
const _c3 = function (a0) { return { backgroundColor: a0 }; };
const _c4 = ["*"];
export class DefaultTabBarComponent {
    constructor(_renderer, _ref) {
        this._renderer = _renderer;
        this._ref = _ref;
        this.prefixCls = 'am-tabs-default-bar';
        this.inkBarStyle = {};
        this.tabsBarStyle = {};
        this.showPrev = false;
        this.showNext = false;
        this.selectedKey = 0;
        this.inkBarOffSet = 0;
        this.inkBarLength = 0;
        this.tabBarNavSwipedPosition = 0;
        this.tabBarNavSwipingPosition = 0;
        this._startPosition = 0;
        this.page = 5;
        this.animated = true;
        this.tabBarBackgroundColor = '#FFF';
        this.tabTitleSize = 0;
        this.tabBarPosition = 'top';
        this.tabBarWrap = true;
        this.getTabSize = (page, tabLength) => 100 / Math.min(page, tabLength);
    }
    get activeTab() {
        return this.selectedKey;
    }
    set activeTab(index) {
        if (index !== this.selectedKey) {
            this.selectedKey = index;
            if (this.tabTitles && this.tabTitles.length > 0) {
                this.setTabBarStyleCenter();
                this.setInkBarStatus(this.selectedKey);
            }
        }
    }
    onTouchStart(event) {
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            }
            else {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
            }
        }
    }
    onTouchMove(event) {
        event.preventDefault();
        event.stopPropagation();
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.setTabBarNavSwipingPosition(event.changedTouches[0].clientX - this._startPosition, this.tabTitles.first.nativeElement.offsetWidth, this.tabsBarSwipe.nativeElement.offsetWidth);
                this.tabsBarStyle = {
                    transition: '0ms',
                    transform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)',
                    webkitTransform: 'translate3d(' + this.tabBarNavSwipingPosition + 'px, 0px, 0px)'
                };
            }
            else {
                this.setTabBarNavSwipingPosition(event.changedTouches[0].clientY - this._startPosition, this.tabTitles.first.nativeElement.offsetHeight, this.tabsBarSwipe.nativeElement.offsetHeight);
                this.tabsBarStyle = {
                    transition: '0ms',
                    transform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)',
                    webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipingPosition + 'px, 0px)'
                };
            }
        }
    }
    onTouchEnd() {
        if ((this.tabTitleSize > 0 &&
            this.tabTitleSize * this.tabTitles.length >
                ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition
                    ? this.tabsBarSwipe.nativeElement.offsetWidth
                    : this.tabsBarSwipe.nativeElement.offsetHeight)) ||
            (this.tabTitleSize <= 0 && this.page < this.tabTitles.length)) {
            this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
        }
    }
    onContentChange() {
        this.setTabsStyle();
        this.setInkBarStatus(this.selectedKey);
    }
    ngAfterContentInit() {
        this.setTabsStyle();
        this.setTabBarStyleCenter();
        this.setInkBarStatus(this.selectedKey);
    }
    setTabsStyle() {
        if (this.tabTitles && this.tabTitles.length > 0) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.tabTitles.forEach((tabTitle) => {
                    this._renderer.setStyle(tabTitle.nativeElement, 'width', this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%');
                });
            }
            else {
                this.tabTitles.forEach((tabTitle) => {
                    this._renderer.setStyle(tabTitle.nativeElement, 'height', this.tabTitleSize > 0 ? this.tabTitleSize + 'px' : this.getTabSize(this.page, this.tabTitles.length) + '%');
                });
            }
        }
    }
    setTabBarStyleCenter() {
        if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
            this.setTabBarNavSwipedPosition(this.tabTitleSize > 0
                ? this.tabTitleSize
                : this.tabsBarSwipe.nativeElement.offsetWidth / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetWidth);
            this.tabsBarStyle = {
                transform: 'translate3d(' + this.tabBarNavSwipedPosition + 'px, 0px, 0px)',
                webkitTransform: 'translate3d(' + this.tabBarNavSwipedPosition + ', 0px, 0px)'
            };
        }
        else {
            this.setTabBarNavSwipedPosition(this.tabTitleSize > 0
                ? this.tabTitleSize
                : this.tabsBarSwipe.nativeElement.offsetHeight / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetHeight);
            this.tabsBarStyle = {
                transform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)',
                webkitTransform: 'translate3d(0, ' + this.tabBarNavSwipedPosition + 'px, 0px)'
            };
        }
    }
    setInkBarStatus(key) {
        if (this.tabTitles && this.tabTitles.length > 0) {
            if ('top' === this.tabBarPosition || 'bottom' === this.tabBarPosition) {
                this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetLeft;
                this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.width;
                this.inkBarStyle = {
                    width: this.inkBarLength,
                    left: this.tabTitleSize > 0
                        ? this.selectedKey * this.tabTitleSize + 'px'
                        : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
                };
                Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
            }
            else {
                this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetTop;
                this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.height;
                this.inkBarStyle = {
                    height: this.inkBarLength,
                    top: this.tabTitleSize > 0
                        ? this.selectedKey * this.tabTitleSize + 'px'
                        : (this.selectedKey * 100) / Math.min(this.tabTitles.length, this.page) + '%'
                };
                Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
            }
            this._ref.detectChanges();
        }
    }
    setTabBarNavSwipingPosition(swipingDistance, swipingItemLength, viewportLength) {
        if (this.tabBarNavSwipedPosition + swipingDistance > 0) {
            this.tabBarNavSwipingPosition = 0;
        }
        else if (this.tabBarNavSwipedPosition + swipingDistance <
            viewportLength - swipingItemLength * this.tabTitles.length) {
            this.tabBarNavSwipingPosition = viewportLength - swipingItemLength * this.tabTitles.length;
            this.showNext = false;
        }
        else {
            this.tabBarNavSwipingPosition = this.tabBarNavSwipedPosition + swipingDistance;
            this.showNext = true;
        }
        if (this.tabBarNavSwipingPosition < 0) {
            this.showPrev = true;
        }
        else {
            this.showPrev = false;
        }
    }
    setTabBarNavSwipedPosition(swipingItemLength, viewportLength) {
        if (this.selectedKey * swipingItemLength + this.tabBarNavSwipedPosition <= 0) {
            if (0 === this.selectedKey) {
                this.tabBarNavSwipedPosition = 0;
            }
            else {
                this.tabBarNavSwipedPosition = (1 - this.selectedKey) * swipingItemLength;
            }
        }
        else if ((this.selectedKey + 1) * swipingItemLength >= viewportLength - this.tabBarNavSwipedPosition) {
            if (this.tabTitles.length - 1 === this.selectedKey) {
                this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 1) * swipingItemLength;
            }
            else {
                this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 2) * swipingItemLength;
            }
        }
        if (this.tabBarNavSwipedPosition < 0) {
            this.showPrev = true;
        }
        else {
            this.showPrev = false;
        }
        if (this.tabBarNavSwipedPosition + swipingItemLength * this.tabTitles.length - viewportLength > 0) {
            this.showNext = true;
        }
        else {
            this.showNext = false;
        }
    }
}
DefaultTabBarComponent.ɵfac = function DefaultTabBarComponent_Factory(t) { return new (t || DefaultTabBarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DefaultTabBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DefaultTabBarComponent, selectors: [["DefaultTabBar"], ["nzm-default-tab-bar"]], contentQueries: function DefaultTabBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabTitles = _t);
    } }, viewQuery: function DefaultTabBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabsBarSwipe = _t.first);
    } }, hostVars: 2, hostBindings: function DefaultTabBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-tabs-tab-bar-wrap", ctx.tabBarWrap);
    } }, inputs: { page: "page", animated: "animated", tabBarBackgroundColor: "tabBarBackgroundColor", tabTitleSize: "tabTitleSize", tabBarPosition: "tabBarPosition", activeTab: "activeTab", tabBarUnderlineStyle: "tabBarUnderlineStyle" }, ngContentSelectors: _c4, decls: 7, vars: 21, consts: [[3, "ngClass", "ngStyle"], [3, "class", 4, "ngIf"], [3, "ngStyle", "touchstart", "touchmove", "touchend", "cdkObserveContent"], ["TabsBarSwipe", ""], [3, "ngStyle"]], template: function DefaultTabBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DefaultTabBarComponent_div_1_Template, 1, 3, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵlistener("touchstart", function DefaultTabBarComponent_Template_div_touchstart_2_listener($event) { return ctx.onTouchStart($event); })("touchmove", function DefaultTabBarComponent_Template_div_touchmove_2_listener($event) { return ctx.onTouchMove($event); })("touchend", function DefaultTabBarComponent_Template_div_touchend_2_listener() { return ctx.onTouchEnd(); })("cdkObserveContent", function DefaultTabBarComponent_Template_div_cdkObserveContent_2_listener() { return ctx.onContentChange(); });
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelement(5, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, DefaultTabBarComponent_div_6_Template, 1, 3, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate3("", ctx.prefixCls, " ", ctx.prefixCls, "-", ctx.tabBarPosition, "");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c2, ctx.animated))("ngStyle", ɵngcc0.ɵɵpureFunction1(19, _c3, ctx.tabBarBackgroundColor || "#FFF"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showPrev);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.tabsBarStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-underline");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.inkBarStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showNext);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.CdkObserveContent], encapsulation: 2 });
DefaultTabBarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
DefaultTabBarComponent.propDecorators = {
    tabTitles: [{ type: ContentChildren, args: ['TabTitle',] }],
    tabsBarSwipe: [{ type: ViewChild, args: ['TabsBarSwipe', { static: true },] }],
    page: [{ type: Input }],
    animated: [{ type: Input }],
    tabBarUnderlineStyle: [{ type: Input }],
    tabBarBackgroundColor: [{ type: Input }],
    tabTitleSize: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    activeTab: [{ type: Input }],
    tabBarWrap: [{ type: HostBinding, args: ['class.am-tabs-tab-bar-wrap',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DefaultTabBarComponent, [{
        type: Component,
        args: [{
                selector: 'DefaultTabBar, nzm-default-tab-bar',
                template: "<div\n  class=\"{{ prefixCls }} {{ prefixCls }}-{{ tabBarPosition }}\"\n  [ngClass]=\"{ 'am-tabs-default-bar-animated': animated }\"\n  [ngStyle]=\"{ backgroundColor: tabBarBackgroundColor || '#FFF' }\"\n>\n  <div *ngIf=\"showPrev\" class=\"{{ prefixCls }}-prevpage\"></div>\n  <div\n    #TabsBarSwipe\n    class=\"{{ prefixCls }}-content\"\n    [ngStyle]=\"tabsBarStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (cdkObserveContent)=\"onContentChange()\"\n  >\n    <ng-content></ng-content>\n    <div class=\"{{ prefixCls }}-underline\" [ngStyle]=\"inkBarStyle\"></div>\n  </div>\n  <div *ngIf=\"showNext\" class=\"{{ prefixCls }}-nextpage\"></div>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { page: [{
            type: Input
        }], animated: [{
            type: Input
        }], tabBarBackgroundColor: [{
            type: Input
        }], tabTitleSize: [{
            type: Input
        }], tabBarPosition: [{
            type: Input
        }], tabBarWrap: [{
            type: HostBinding,
            args: ['class.am-tabs-tab-bar-wrap']
        }], activeTab: [{
            type: Input
        }], tabTitles: [{
            type: ContentChildren,
            args: ['TabTitle']
        }], tabsBarSwipe: [{
            type: ViewChild,
            args: ['TabsBarSwipe', { static: true }]
        }], tabBarUnderlineStyle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10YWItYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy90YWJzL2RlZmF1bHQtdGFiLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFFWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQWlEcEMsWUFBb0IsU0FBb0IsRUFBVSxJQUF1QjtBQUFJLFFBQXpELGNBQVMsR0FBVCxTQUFTLENBQVc7QUFBQyxRQUFTLFNBQUksR0FBSixJQUFJLENBQW1CO0FBQUMsUUFoRDFFLGNBQVMsR0FBVyxxQkFBcUIsQ0FBQztBQUM1QyxRQUFFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0FBQzNCLFFBQUUsaUJBQVksR0FBVyxFQUFFLENBQUM7QUFDNUIsUUFBRSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQzVCLFFBQUUsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUM1QixRQUFFLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0FBQzFCLFFBQUUsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDM0IsUUFBRSxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUMzQixRQUFFLDRCQUF1QixHQUFXLENBQUMsQ0FBQztBQUN0QyxRQUFFLDZCQUF3QixHQUFXLENBQUMsQ0FBQztBQUN2QyxRQUNVLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQ3JDLFFBUUUsU0FBSSxHQUFXLENBQUMsQ0FBQztBQUNuQixRQUNFLGFBQVEsR0FBWSxJQUFJLENBQUM7QUFDM0IsUUFHRSwwQkFBcUIsR0FBVyxNQUFNLENBQUM7QUFDekMsUUFDRSxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUMzQixRQUNFLG1CQUFj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a0JBQzlDOzs7Ozs7Ozs7OzsrQkFBK0MsY0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tIQUNJO0FBQUM7QUFBZ0QsWUFmcEQsU0FBUztBQUNULFlBS0EsaUJBQWlCO0FBQ2pCO0FBQUc7QUFFaUIsd0JBb0JuQixlQUFlLFNBQUMsVUFBVTtBQUN4QiwyQkFFRixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUN4QyxtQkFFRixLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLG1DQUNDLEtBQUs7QUFDTixvQ0FDQyxLQUFLO0FBQ04sMkJBQ0MsS0FBSztBQUNOLDZCQUNDLEtBQUs7QUFDTix3QkFDQyxLQUFLO0FBQ04seUJBYUMsV0FBVyxTQUFDLDRCQUE0QjtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiQmFyUG9zaXRpb25UeXBlIH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdEZWZhdWx0VGFiQmFyLCBuem0tZGVmYXVsdC10YWItYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQtdGFiLWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRhYkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10YWJzLWRlZmF1bHQtYmFyJztcbiAgaW5rQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICB0YWJzQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICBzaG93UHJldjogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93TmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZEtleTogbnVtYmVyID0gMDtcbiAgaW5rQmFyT2ZmU2V0OiBudW1iZXIgPSAwO1xuICBpbmtCYXJMZW5ndGg6IG51bWJlciA9IDA7XG4gIHRhYkJhck5hdlN3aXBlZFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICB0YWJCYXJOYXZTd2lwaW5nUG9zaXRpb246IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICBAQ29udGVudENoaWxkcmVuKCdUYWJUaXRsZScpXG4gIHRhYlRpdGxlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBWaWV3Q2hpbGQoJ1RhYnNCYXJTd2lwZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRhYnNCYXJTd2lwZTogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBwYWdlOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKVxuICBhbmltYXRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclVuZGVybGluZVN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpXG4gIHRhYkJhckJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyNGRkYnO1xuICBASW5wdXQoKVxuICB0YWJUaXRsZVNpemU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclBvc2l0aW9uOiBUYWJCYXJQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZVRhYigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkS2V5O1xuICB9XG4gIHNldCBhY3RpdmVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEtleSA9IGluZGV4O1xuICAgICAgaWYgKHRoaXMudGFiVGl0bGVzICYmIHRoaXMudGFiVGl0bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRUYWJCYXJTdHlsZUNlbnRlcigpO1xuICAgICAgICB0aGlzLnNldElua0JhclN0YXR1cyh0aGlzLnNlbGVjdGVkS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtdGFiLWJhci13cmFwJylcbiAgdGFiQmFyV3JhcCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPiAwICYmXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplICogdGhpcy50YWJUaXRsZXMubGVuZ3RoID5cbiAgICAgICAgICAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb25cbiAgICAgICAgICAgID8gdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkpIHx8XG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPD0gMCAmJiB0aGlzLnBhZ2UgPCB0aGlzLnRhYlRpdGxlcy5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgZXZlbnQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPVxuICAgICAgICAgIGV2ZW50ICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChcbiAgICAgICh0aGlzLnRhYlRpdGxlU2l6ZSA+IDAgJiZcbiAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgKiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggPlxuICAgICAgICAgICgndG9wJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbiB8fCAnYm90dG9tJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvblxuICAgICAgICAgICAgPyB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgICAgICA6IHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSkgfHxcbiAgICAgICh0aGlzLnRhYlRpdGxlU2l6ZSA8PSAwICYmIHRoaXMucGFnZSA8IHRoaXMudGFiVGl0bGVzLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICgndG9wJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbiB8fCAnYm90dG9tJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNldFRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbihcbiAgICAgICAgICBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fc3RhcnRQb3NpdGlvbixcbiAgICAgICAgICB0aGlzLnRhYlRpdGxlcy5maXJzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJzBtcycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uICsgJ3B4LCAwcHgsIDBweCknLFxuICAgICAgICAgIHdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiArICdweCwgMHB4LCAwcHgpJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRUYWJCYXJOYXZTd2lwaW5nUG9zaXRpb24oXG4gICAgICAgICAgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuX3N0YXJ0UG9zaXRpb24sXG4gICAgICAgICAgdGhpcy50YWJUaXRsZXMuZmlyc3QubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJzBtcycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgJyArIHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uICsgJ3B4LCAwcHgpJyxcbiAgICAgICAgICB3ZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb24gKyAncHgsIDBweCknXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZCgpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPiAwICYmXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplICogdGhpcy50YWJUaXRsZXMubGVuZ3RoID5cbiAgICAgICAgICAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb25cbiAgICAgICAgICAgID8gdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkpIHx8XG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPD0gMCAmJiB0aGlzLnBhZ2UgPCB0aGlzLnRhYlRpdGxlcy5sZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlKCkge1xuICAgIHRoaXMuc2V0VGFic1N0eWxlKCk7XG4gICAgdGhpcy5zZXRJbmtCYXJTdGF0dXModGhpcy5zZWxlY3RlZEtleSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZXRUYWJzU3R5bGUoKTtcbiAgICB0aGlzLnNldFRhYkJhclN0eWxlQ2VudGVyKCk7XG4gICAgdGhpcy5zZXRJbmtCYXJTdGF0dXModGhpcy5zZWxlY3RlZEtleSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRhYnNTdHlsZSgpIHtcbiAgICBpZiAodGhpcy50YWJUaXRsZXMgJiYgdGhpcy50YWJUaXRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCd0b3AnID09PSB0aGlzLnRhYkJhclBvc2l0aW9uIHx8ICdib3R0b20nID09PSB0aGlzLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVzLmZvckVhY2goKHRhYlRpdGxlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRhYlRpdGxlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnd2lkdGgnLFxuICAgICAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgPiAwID8gdGhpcy50YWJUaXRsZVNpemUgKyAncHgnIDogdGhpcy5nZXRUYWJTaXplKHRoaXMucGFnZSwgdGhpcy50YWJUaXRsZXMubGVuZ3RoKSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZXMuZm9yRWFjaCgodGFiVGl0bGU6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGFiVGl0bGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgPiAwID8gdGhpcy50YWJUaXRsZVNpemUgKyAncHgnIDogdGhpcy5nZXRUYWJTaXplKHRoaXMucGFnZSwgdGhpcy50YWJUaXRsZXMubGVuZ3RoKSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFiQmFyU3R5bGVDZW50ZXIoKSB7XG4gICAgaWYgKCd0b3AnID09PSB0aGlzLnRhYkJhclBvc2l0aW9uIHx8ICdib3R0b20nID09PSB0aGlzLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKFxuICAgICAgICB0aGlzLnRhYlRpdGxlU2l6ZSA+IDBcbiAgICAgICAgICA/IHRoaXMudGFiVGl0bGVTaXplXG4gICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpLFxuICAgICAgICB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICApO1xuICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgJ3B4LCAwcHgsIDBweCknLFxuICAgICAgICB3ZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiArICcsIDBweCwgMHB4KSdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VGFiQmFyTmF2U3dpcGVkUG9zaXRpb24oXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplID4gMFxuICAgICAgICAgID8gdGhpcy50YWJUaXRsZVNpemVcbiAgICAgICAgICA6IHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpLFxuICAgICAgICB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgKTtcbiAgICAgIHRoaXMudGFic0JhclN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiArICdweCwgMHB4KScsXG4gICAgICAgIHdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsICcgKyB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgJ3B4LCAwcHgpJ1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldElua0JhclN0YXR1cyhrZXk6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYlRpdGxlcyAmJiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5pbmtCYXJPZmZTZXQgPSB0aGlzLnRhYlRpdGxlcy50b0FycmF5KClba2V5XS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMuaW5rQmFyTGVuZ3RoID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgdGhpcy5pbmtCYXJTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5pbmtCYXJMZW5ndGgsXG4gICAgICAgICAgbGVmdDpcbiAgICAgICAgICAgIHRoaXMudGFiVGl0bGVTaXplID4gMFxuICAgICAgICAgICAgICA/IHRoaXMuc2VsZWN0ZWRLZXkgKiB0aGlzLnRhYlRpdGxlU2l6ZSArICdweCdcbiAgICAgICAgICAgICAgOiAodGhpcy5zZWxlY3RlZEtleSAqIDEwMCkgLyBNYXRoLm1pbih0aGlzLnRhYlRpdGxlcy5sZW5ndGgsIHRoaXMucGFnZSkgKyAnJSdcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmlua0JhclN0eWxlLCB0aGlzLnRhYkJhclVuZGVybGluZVN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5rQmFyT2ZmU2V0ID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuaW5rQmFyTGVuZ3RoID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5rQmFyU3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmlua0Jhckxlbmd0aCxcbiAgICAgICAgICB0b3A6XG4gICAgICAgICAgICB0aGlzLnRhYlRpdGxlU2l6ZSA+IDBcbiAgICAgICAgICAgICAgPyB0aGlzLnNlbGVjdGVkS2V5ICogdGhpcy50YWJUaXRsZVNpemUgKyAncHgnXG4gICAgICAgICAgICAgIDogKHRoaXMuc2VsZWN0ZWRLZXkgKiAxMDApIC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpICsgJyUnXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5pbmtCYXJTdHlsZSwgdGhpcy50YWJCYXJVbmRlcmxpbmVTdHlsZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uKHN3aXBpbmdEaXN0YW5jZTogbnVtYmVyLCBzd2lwaW5nSXRlbUxlbmd0aDogbnVtYmVyLCB2aWV3cG9ydExlbmd0aDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2UgPiAwKSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiA9IDA7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2UgPFxuICAgICAgdmlld3BvcnRMZW5ndGggLSBzd2lwaW5nSXRlbUxlbmd0aCAqIHRoaXMudGFiVGl0bGVzLmxlbmd0aFxuICAgICkge1xuICAgICAgdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb24gPSB2aWV3cG9ydExlbmd0aCAtIHN3aXBpbmdJdGVtTGVuZ3RoICogdGhpcy50YWJUaXRsZXMubGVuZ3RoO1xuICAgICAgdGhpcy5zaG93TmV4dCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiA9IHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2U7XG4gICAgICB0aGlzLnNob3dOZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uIDwgMCkge1xuICAgICAgdGhpcy5zaG93UHJldiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1ByZXYgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKHN3aXBpbmdJdGVtTGVuZ3RoOiBudW1iZXIsIHZpZXdwb3J0TGVuZ3RoOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEtleSAqIHN3aXBpbmdJdGVtTGVuZ3RoICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiA8PSAwKSB7XG4gICAgICBpZiAoMCA9PT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gPSAoMSAtIHRoaXMuc2VsZWN0ZWRLZXkpICogc3dpcGluZ0l0ZW1MZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEtleSArIDEpICogc3dpcGluZ0l0ZW1MZW5ndGggPj0gdmlld3BvcnRMZW5ndGggLSB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy50YWJUaXRsZXMubGVuZ3RoIC0gMSA9PT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gKHZpZXdwb3J0TGVuZ3RoIC8gc3dpcGluZ0l0ZW1MZW5ndGggLSB0aGlzLnNlbGVjdGVkS2V5IC0gMSkgKiBzd2lwaW5nSXRlbUxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gPSAodmlld3BvcnRMZW5ndGggLyBzd2lwaW5nSXRlbUxlbmd0aCAtIHRoaXMuc2VsZWN0ZWRLZXkgLSAyKSAqIHN3aXBpbmdJdGVtTGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiA8IDApIHtcbiAgICAgIHRoaXMuc2hvd1ByZXYgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcmV2ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgc3dpcGluZ0l0ZW1MZW5ndGggKiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggLSB2aWV3cG9ydExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2hvd05leHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dOZXh0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYWJTaXplID0gKHBhZ2U6IG51bWJlciwgdGFiTGVuZ3RoOiBudW1iZXIpID0+IDEwMCAvIE1hdGgubWluKHBhZ2UsIHRhYkxlbmd0aCk7XG59XG4iXX0=