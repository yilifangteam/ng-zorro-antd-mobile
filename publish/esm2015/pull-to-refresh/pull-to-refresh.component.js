import { Input, Output, Component, ViewChild, forwardRef, TemplateRef, HostBinding, EventEmitter, HostListener, ViewContainerRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["pullToRefresh"];
function PullToRefreshComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function PullToRefreshComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PullToRefreshComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.headerIndicator[ctx_r4.state.currentState]);
} }
function PullToRefreshComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.headerIndicator[ctx_r5.state.currentState]);
} }
function PullToRefreshComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, PullToRefreshComponent_div_2_1_Template, 1, 1, undefined, 6);
    ɵngcc0.ɵɵtemplate(2, PullToRefreshComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.headerIndicator[ctx_r0.state.currentState]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.headerIndicator[ctx_r0.state.currentState]));
} }
function PullToRefreshComponent_div_6_1_ng_template_0_Template(rf, ctx) { }
function PullToRefreshComponent_div_6_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PullToRefreshComponent_div_6_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.footerIndicator[ctx_r7.state.currentState]);
} }
function PullToRefreshComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.footerIndicator[ctx_r8.state.currentState]);
} }
function PullToRefreshComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, PullToRefreshComponent_div_6_1_Template, 1, 1, undefined, 6);
    ɵngcc0.ɵɵtemplate(2, PullToRefreshComponent_div_6_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isTemplateRef(ctx_r2.footerIndicator[ctx_r2.state.currentState]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footerIndicator[ctx_r2.state.currentState]));
} }
function PullToRefreshComponent_div_7_1_ng_template_0_Template(rf, ctx) { }
function PullToRefreshComponent_div_7_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PullToRefreshComponent_div_7_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.footerIndicator[ctx_r10.state.currentState]);
} }
function PullToRefreshComponent_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.footerIndicator[ctx_r11.state.currentState]);
} }
function PullToRefreshComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, PullToRefreshComponent_div_7_1_Template, 1, 1, undefined, 6);
    ɵngcc0.ɵɵtemplate(2, PullToRefreshComponent_div_7_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isTemplateRef(ctx_r3.footerIndicator[ctx_r3.state.currentState]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.isTemplateRef(ctx_r3.footerIndicator[ctx_r3.state.currentState]));
} }
const _c1 = ["*"];
export class PullToRefreshComponent {
    constructor(ele) {
        this.ele = ele;
        this.transtionCls = {};
        this.style = {
            '-webkit-transform': 'translate3d( 0, 0, 0 )',
            transform: 'translate3d( 0, 0, 0 )'
        };
        this.state = {
            currentState: 'deactivate',
            drag: false
        };
        this._headerIndicator = {
            activate: '松开立即刷新',
            deactivate: '下拉可以刷新',
            release: '刷新中。。。',
            finish: '完成刷新'
        };
        this._footerIndicator = {
            activate: '松开立即刷新',
            deactivate: '上拉可以刷新',
            release: '刷新中。。。',
            finish: '完成刷新'
        };
        this._startTime = 0;
        this._endTime = 0;
        this._endReach = false;
        this._direction = '';
        this._clientHeight = 0;
        this._currentContentHeight = 0;
        this._lastContentOffset = 0;
        this.distanceToRefresh = 25; //触发刷新距离
        this.damping = 100; // 下拉的最大距离
        this.endReachedRefresh = false;
        this.refreshing = false;
        this.onRefresh = new EventEmitter();
        this.refresh = true;
        this.container = true;
        this.refreshUp = this._direction === 'up' || this._direction === '';
        this.refreshDown = this._direction === 'down' || this._direction === '';
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
        this.refreshUp = this._direction === 'up' || this._direction === '';
        this.refreshDown = this._direction === 'down' || this._direction === '';
    }
    get headerIndicator() {
        return this._headerIndicator;
    }
    set headerIndicator(value) {
        Object.assign(this._headerIndicator, value);
    }
    get footerIndicator() {
        return this._footerIndicator;
    }
    set footerIndicator(value) {
        Object.assign(this._footerIndicator, value);
    }
    touchstart(e) {
        this._startTime = Date.now();
        if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
            if (this.ele.nativeElement.scrollTop > 0) {
                this.startY = undefined;
                return;
            }
            this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
            this.state.drag = undefined;
        }
        else {
            this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
            this._clientHeight = this._pullToRefresh.element.nativeElement.clientHeight;
            this._currentContentHeight = this.ele.nativeElement.clientHeight;
        }
        this.transtionCls = '';
    }
    touchmove(e) {
        if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
            if (this.ele.nativeElement.scrollTop > 0) {
                return;
            }
            let distanceY = e.changedTouches[0].clientY - this.startY;
            this.state.drag = distanceY >= 0;
            if (this.state.drag) {
                // 禁止滚动
                if (e.cancelable) {
                    e.preventDefault();
                }
            }
            else {
                return;
            }
            if (distanceY > this.damping) {
                //当超过设定阈值是，缓慢增加
                distanceY = (distanceY / (distanceY + this.damping)) * this.damping * 2;
            }
            else if (distanceY < 0) {
                distanceY = 0;
            }
            if (distanceY > this.distanceToRefresh) {
                this.state.currentState = 'activate';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            this.style = {
                '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
                transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
            };
        }
        else {
            let distanceY = e.changedTouches[0].clientY - this.startY;
            //向上拉动的时候，如果当前窗口内容没有滚到最后，则不实现拖动的动作；向下滚动不实现拖动动作
            if (Math.abs(this._lastContentOffset) < this._clientHeight - this._currentContentHeight - this.distanceToRefresh ||
                distanceY > 0) {
                // 滚动
                this.state.drag = false;
            }
            else {
                // 上拉
                this.state.drag = true;
            }
            if (this.state.drag) {
                // 禁止滚动
                if (e.cancelable) {
                    e.preventDefault();
                }
            }
            else {
                return;
            }
            //如果滑动到底部了，滑动距离随着拉动的距离增加缓慢增加
            distanceY = -(distanceY / (distanceY - this.damping)) * this.damping;
            if (Math.abs(distanceY) > this.distanceToRefresh) {
                this.state.currentState = 'activate';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            this.style = {
                '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
                transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
            };
        }
    }
    touchend(e) {
        if (!this.startY || this.state.drag === false) {
            return;
        }
        const distanceY = e.changedTouches[0].clientY - this.startY;
        if (Math.abs(distanceY) >= this.distanceToRefresh) {
            this.state.currentState = 'release';
            if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
                this.translateY(this.distanceToRefresh + 1);
            }
            else {
                this.translateY(-this.distanceToRefresh - 1);
            }
            if (this._ngModelOnChange) {
                this._ngModelOnChange(this.state);
            }
            setTimeout(() => {
                this.state.currentState = 'finish';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
                if (this._direction === 'down' || (this._direction === '' && !this._endReach)) {
                    this.onRefresh.emit('down');
                }
                else {
                    this.translateY(-this.distanceToRefresh - 1);
                    this.onRefresh.emit('up');
                }
                setTimeout(() => {
                    this.state.currentState = 'deactivate';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                    this.translateY(0);
                }, 0);
            }, 500);
        }
        else {
            this.translateY(0);
        }
    }
    touchcancel() {
        this.translateY(0);
    }
    scroll(evt) {
        this._endTime = Date.now();
        const contentOffset = evt.target.scrollTop;
        this._lastContentOffset = contentOffset;
        if (this._direction === '') {
            if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight === evt.target.scrollHeight) {
                setTimeout(() => {
                    this._endReach = true;
                }, 100);
            }
            else {
                this._endReach = false;
            }
        }
        if (!this.endReachedRefresh || this._direction !== 'down') {
            return;
        }
        if (contentOffset > 0 &&
            evt.target.scrollTop + this.ele.nativeElement.clientHeight > evt.target.scrollHeight - this.distanceToRefresh &&
            this._endTime - this._startTime >= 100) {
            this._startTime = this._endTime;
            if (this.refreshing) {
                this.state.currentState = 'release';
                if (this._ngModelOnChange) {
                    this._ngModelOnChange(this.state);
                }
            }
            setTimeout(() => {
                if (this.endReachedRefresh) {
                    this.onRefresh.emit('endReachedRefresh');
                }
                if (this.refreshing) {
                    this.state.currentState = 'finish';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                }
            }, 500);
        }
        else {
            setTimeout(() => {
                if (this.refreshing) {
                    this.state.currentState = 'finish';
                    if (this._ngModelOnChange) {
                        this._ngModelOnChange(this.state);
                    }
                }
            }, 500);
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    translateY(distanceY) {
        this.transtionCls = 'am-pull-to-refresh-transition';
        this.style = {
            '-webkit-transform': 'translate3d( 0, ' + distanceY + 'px, 0 )',
            transform: 'translate3d( 0, ' + distanceY + 'px, 0 )'
        };
    }
    writeValue(value) {
        if (value !== null) {
            this.state = value;
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
PullToRefreshComponent.ɵfac = function PullToRefreshComponent_Factory(t) { return new (t || PullToRefreshComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
PullToRefreshComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PullToRefreshComponent, selectors: [["PullToRefresh"], ["nzm-pull-to-refresh"]], viewQuery: function PullToRefreshComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._pullToRefresh = _t.first);
    } }, hostVars: 8, hostBindings: function PullToRefreshComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function PullToRefreshComponent_touchstart_HostBindingHandler($event) { return ctx.touchstart($event); })("touchmove", function PullToRefreshComponent_touchmove_HostBindingHandler($event) { return ctx.touchmove($event); })("touchend", function PullToRefreshComponent_touchend_HostBindingHandler($event) { return ctx.touchend($event); })("touchcancel", function PullToRefreshComponent_touchcancel_HostBindingHandler() { return ctx.touchcancel(); })("scroll", function PullToRefreshComponent_scroll_HostBindingHandler($event) { return ctx.scroll($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-pull-to-refresh", ctx.refresh)("super-container", ctx.container)("am-pull-to-refresh-up", ctx.refreshUp)("am-pull-to-refresh-down", ctx.refreshDown);
    } }, inputs: { distanceToRefresh: "distanceToRefresh", damping: "damping", endReachedRefresh: "endReachedRefresh", refreshing: "refreshing", direction: "direction", headerIndicator: "headerIndicator", footerIndicator: "footerIndicator" }, outputs: { onRefresh: "onRefresh" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PullToRefreshComponent),
                multi: true
            }
        ])], ngContentSelectors: _c1, decls: 8, vars: 5, consts: [[1, "am-pull-to-refresh-content-wrapper"], [1, "am-pull-to-refresh-content", 3, "ngClass", "ngStyle"], ["class", "am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator", 4, "ngIf"], ["pullToRefresh", ""], ["class", "am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator", 4, "ngIf"], [1, "am-pull-to-refresh-indicator", "am-pull-to-refresh-header-indicator"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "am-pull-to-refresh-indicator", "am-pull-to-refresh-footer-indicator"]], template: function PullToRefreshComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, PullToRefreshComponent_div_2_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", null, 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵtemplate(6, PullToRefreshComponent_div_6_Template, 3, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, PullToRefreshComponent_div_7_Template, 3, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.transtionCls)("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.refreshDown);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.direction === "down" && ctx.endReachedRefresh);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.refreshUp);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
PullToRefreshComponent.ctorParameters = () => [
    { type: ElementRef }
];
PullToRefreshComponent.propDecorators = {
    _pullToRefresh: [{ type: ViewChild, args: ['pullToRefresh', { read: ViewContainerRef, static: true },] }],
    distanceToRefresh: [{ type: Input }],
    damping: [{ type: Input }],
    endReachedRefresh: [{ type: Input }],
    refreshing: [{ type: Input }],
    direction: [{ type: Input }],
    headerIndicator: [{ type: Input }],
    footerIndicator: [{ type: Input }],
    onRefresh: [{ type: Output }],
    refresh: [{ type: HostBinding, args: ['class.am-pull-to-refresh',] }],
    container: [{ type: HostBinding, args: ['class.super-container',] }],
    refreshUp: [{ type: HostBinding, args: ['class.am-pull-to-refresh-up',] }],
    refreshDown: [{ type: HostBinding, args: ['class.am-pull-to-refresh-down',] }],
    touchstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    touchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
    touchend: [{ type: HostListener, args: ['touchend', ['$event'],] }],
    touchcancel: [{ type: HostListener, args: ['touchcancel',] }],
    scroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PullToRefreshComponent, [{
        type: Component,
        args: [{
                selector: 'PullToRefresh, nzm-pull-to-refresh',
                template: "<div class=\"am-pull-to-refresh-content-wrapper\">\n  <div class=\"am-pull-to-refresh-content\" [ngClass]=\"transtionCls\" [ngStyle]=\"style\">\n    <div *ngIf=\"refreshDown\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(headerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"headerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(headerIndicator[state.currentState])\">{{\n        headerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n    <div #pullToRefresh>\n      <ng-content></ng-content>\n      <div\n        *ngIf=\"direction === 'down' && endReachedRefresh\"\n        class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\"\n      >\n        <ng-template\n          *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n          [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n        ></ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n          footerIndicator[state.currentState]\n        }}</ng-container>\n      </div>\n    </div>\n    <div *ngIf=\"refreshUp\" class=\"am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator\">\n      <ng-template\n        *ngIf=\"isTemplateRef(footerIndicator[state.currentState])\"\n        [ngTemplateOutlet]=\"footerIndicator[state.currentState]\"\n      ></ng-template>\n      <ng-container *ngIf=\"!isTemplateRef(footerIndicator[state.currentState])\">{{\n        footerIndicator[state.currentState]\n      }}</ng-container>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PullToRefreshComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { distanceToRefresh: [{
            type: Input
        }], damping: [{
            type: Input
        }], endReachedRefresh: [{
            type: Input
        }], refreshing: [{
            type: Input
        }], onRefresh: [{
            type: Output
        }], refresh: [{
            type: HostBinding,
            args: ['class.am-pull-to-refresh']
        }], container: [{
            type: HostBinding,
            args: ['class.super-container']
        }], refreshUp: [{
            type: HostBinding,
            args: ['class.am-pull-to-refresh-up']
        }], refreshDown: [{
            type: HostBinding,
            args: ['class.am-pull-to-refresh-down']
        }], direction: [{
            type: Input
        }], headerIndicator: [{
            type: Input
        }], footerIndicator: [{
            type: Input
        }], touchstart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], touchmove: [{
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], touchend: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }], touchcancel: [{
            type: HostListener,
            args: ['touchcancel']
        }], scroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }], _pullToRefresh: [{
            type: ViewChild,
            args: ['pullToRefresh', { read: ViewContainerRef, static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsbC10by1yZWZyZXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9wdWxsLXRvLXJlZnJlc2gvcHVsbC10by1yZWZyZXNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnpFLE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQXFRcEMsWUFBb0IsR0FBZTtBQUFJLFFBQW5CLFFBQUcsR0FBSCxHQUFHLENBQVk7QUFBQyxRQXBRcEMsaUJBQVksR0FBUSxFQUFFLENBQUM7QUFDekIsUUFBRSxVQUFLLEdBQVc7QUFDbEIsWUFBSSxtQkFBbUIsRUFBRSx3QkFBd0I7QUFDakQsWUFBSSxTQUFTLEVBQUUsd0JBQXdCO0FBQ3ZDLFNBQUcsQ0FBQztBQUNKLFFBQ0UsVUFBSyxHQUFRO0FBQ2YsWUFBSSxZQUFZLEVBQUUsWUFBWTtBQUM5QixZQUFJLElBQUksRUFBRSxLQUFLO0FBQ2YsU0FBRyxDQUFDO0FBQ0osUUFDVSxxQkFBZ0IsR0FBYztBQUN4QyxZQUFJLFFBQVEsRUFBRSxRQUFRO0FBQ3RCLFlBQUksVUFBVSxFQUFFLFFBQVE7QUFDeEIsWUFBSSxPQUFPLEVBQUUsUUFBUTtBQUNyQixZQUFJLE1BQU0sRUFBRSxNQUFNO0FBQ2xCLFNBQUcsQ0FBQztBQUNKLFFBQ1UscUJBQWdCLEdBQWM7QUFD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ImltcG9ydCB7XG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmV4cG9ydCBpbnRlcmZhY2UgSW5kaWNhdG9yIHtcbiAgYWN0aXZhdGU/OiBhbnk7XG4gIGRlYWN0aXZhdGU/OiBhbnk7XG4gIHJlbGVhc2U/OiBhbnk7XG4gIGZpbmlzaD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUHVsbFRvUmVmcmVzaCwgbnptLXB1bGwtdG8tcmVmcmVzaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wdWxsLXRvLXJlZnJlc2guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFB1bGxUb1JlZnJlc2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHVsbFRvUmVmcmVzaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdHJhbnN0aW9uQ2xzOiBhbnkgPSB7fTtcbiAgc3R5bGU6IG9iamVjdCA9IHtcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoIDAsIDAsIDAgKScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoIDAsIDAsIDAgKSdcbiAgfTtcbiAgc3RhcnRZOiBudW1iZXI7XG4gIHN0YXRlOiBhbnkgPSB7XG4gICAgY3VycmVudFN0YXRlOiAnZGVhY3RpdmF0ZScsXG4gICAgZHJhZzogZmFsc2VcbiAgfTtcblxuICBwcml2YXRlIF9oZWFkZXJJbmRpY2F0b3I6IEluZGljYXRvciA9IHtcbiAgICBhY3RpdmF0ZTogJ+advuW8gOeri+WNs+WIt+aWsCcsXG4gICAgZGVhY3RpdmF0ZTogJ+S4i+aLieWPr+S7peWIt+aWsCcsXG4gICAgcmVsZWFzZTogJ+WIt+aWsOS4reOAguOAguOAgicsXG4gICAgZmluaXNoOiAn5a6M5oiQ5Yi35pawJ1xuICB9O1xuXG4gIHByaXZhdGUgX2Zvb3RlckluZGljYXRvcjogSW5kaWNhdG9yID0ge1xuICAgIGFjdGl2YXRlOiAn5p2+5byA56uL5Y2z5Yi35pawJyxcbiAgICBkZWFjdGl2YXRlOiAn5LiK5ouJ5Y+v5Lul5Yi35pawJyxcbiAgICByZWxlYXNlOiAn5Yi35paw5Lit44CC44CC44CCJyxcbiAgICBmaW5pc2g6ICflrozmiJDliLfmlrAnXG4gIH07XG5cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9lbmRUaW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9lbmRSZWFjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9jbGllbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2N1cnJlbnRDb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9sYXN0Q29udGVudE9mZnNldDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uQ2hhbmdlOiAodmFsdWU6IG9iamVjdCkgPT4ge307XG4gIHByaXZhdGUgX25nTW9kZWxPblRvdWNoZWQ6ICgpID0+IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ3B1bGxUb1JlZnJlc2gnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIF9wdWxsVG9SZWZyZXNoOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGRpc3RhbmNlVG9SZWZyZXNoOiBudW1iZXIgPSAyNTsgLy/op6blj5HliLfmlrDot53nprtcbiAgQElucHV0KClcbiAgZGFtcGluZzogbnVtYmVyID0gMTAwOyAvLyDkuIvmi4nnmoTmnIDlpKfot53nprtcbiAgQElucHV0KClcbiAgZW5kUmVhY2hlZFJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2hVcCA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ3VwJyB8fCB0aGlzLl9kaXJlY3Rpb24gPT09ICcnO1xuICAgIHRoaXMucmVmcmVzaERvd24gPSB0aGlzLl9kaXJlY3Rpb24gPT09ICdkb3duJyB8fCB0aGlzLl9kaXJlY3Rpb24gPT09ICcnO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBoZWFkZXJJbmRpY2F0b3IoKTogSW5kaWNhdG9yIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVySW5kaWNhdG9yO1xuICB9XG4gIHNldCBoZWFkZXJJbmRpY2F0b3IodmFsdWU6IEluZGljYXRvcikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5faGVhZGVySW5kaWNhdG9yLCB2YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGZvb3RlckluZGljYXRvcigpOiBJbmRpY2F0b3Ige1xuICAgIHJldHVybiB0aGlzLl9mb290ZXJJbmRpY2F0b3I7XG4gIH1cbiAgc2V0IGZvb3RlckluZGljYXRvcih2YWx1ZTogSW5kaWNhdG9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9mb290ZXJJbmRpY2F0b3IsIHZhbHVlKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXB1bGwtdG8tcmVmcmVzaCcpXG4gIHJlZnJlc2g6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN1cGVyLWNvbnRhaW5lcicpXG4gIGNvbnRhaW5lcjogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHVsbC10by1yZWZyZXNoLXVwJylcbiAgcmVmcmVzaFVwOiBib29sZWFuID0gdGhpcy5fZGlyZWN0aW9uID09PSAndXAnIHx8IHRoaXMuX2RpcmVjdGlvbiA9PT0gJyc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHVsbC10by1yZWZyZXNoLWRvd24nKVxuICByZWZyZXNoRG93bjogYm9vbGVhbiA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8IHRoaXMuX2RpcmVjdGlvbiA9PT0gJyc7XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIHRvdWNoc3RhcnQoZSkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8ICh0aGlzLl9kaXJlY3Rpb24gPT09ICcnICYmICF0aGlzLl9lbmRSZWFjaCkpIHtcbiAgICAgIGlmICh0aGlzLmVsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgdGhpcy5zdGFydFkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnRZID0gZSAmJiBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0gJiYgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgdGhpcy5zdGF0ZS5kcmFnID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0WSA9IGUgJiYgZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIHRoaXMuX2NsaWVudEhlaWdodCA9IHRoaXMuX3B1bGxUb1JlZnJlc2guZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb250ZW50SGVpZ2h0ID0gdGhpcy5lbGUubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMudHJhbnN0aW9uQ2xzID0gJyc7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgdG91Y2htb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnZG93bicgfHwgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJycgJiYgIXRoaXMuX2VuZFJlYWNoKSkge1xuICAgICAgaWYgKHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZGlzdGFuY2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgICB0aGlzLnN0YXRlLmRyYWcgPSBkaXN0YW5jZVkgPj0gMDtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRyYWcpIHtcbiAgICAgICAgLy8g56aB5q2i5rua5YqoXG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkaXN0YW5jZVkgPiB0aGlzLmRhbXBpbmcpIHtcbiAgICAgICAgLy/lvZPotoXov4forr7lrprpmIjlgLzmmK/vvIznvJPmhaLlop7liqBcbiAgICAgICAgZGlzdGFuY2VZID0gKGRpc3RhbmNlWSAvIChkaXN0YW5jZVkgKyB0aGlzLmRhbXBpbmcpKSAqIHRoaXMuZGFtcGluZyAqIDI7XG4gICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlWSA8IDApIHtcbiAgICAgICAgZGlzdGFuY2VZID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChkaXN0YW5jZVkgPiB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2FjdGl2YXRlJztcbiAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCAwLCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwICknLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCggMCwgJyArIGRpc3RhbmNlWSArICdweCwgMCApJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRpc3RhbmNlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuc3RhcnRZO1xuICAgICAgLy/lkJHkuIrmi4nliqjnmoTml7blgJnvvIzlpoLmnpzlvZPliY3nqpflj6PlhoXlrrnmsqHmnInmu5rliLDmnIDlkI7vvIzliJnkuI3lrp7njrDmi5bliqjnmoTliqjkvZzvvJvlkJHkuIvmu5rliqjkuI3lrp7njrDmi5bliqjliqjkvZxcbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5hYnModGhpcy5fbGFzdENvbnRlbnRPZmZzZXQpIDwgdGhpcy5fY2xpZW50SGVpZ2h0IC0gdGhpcy5fY3VycmVudENvbnRlbnRIZWlnaHQgLSB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoIHx8XG4gICAgICAgIGRpc3RhbmNlWSA+IDBcbiAgICAgICkge1xuICAgICAgICAvLyDmu5rliqhcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmFnID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDkuIrmi4lcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmRyYWcpIHtcbiAgICAgICAgLy8g56aB5q2i5rua5YqoXG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8v5aaC5p6c5ruR5Yqo5Yiw5bqV6YOo5LqG77yM5ruR5Yqo6Led56a76ZqP552A5ouJ5Yqo55qE6Led56a75aKe5Yqg57yT5oWi5aKe5YqgXG4gICAgICBkaXN0YW5jZVkgPSAtKGRpc3RhbmNlWSAvIChkaXN0YW5jZVkgLSB0aGlzLmRhbXBpbmcpKSAqIHRoaXMuZGFtcGluZztcbiAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpID4gdGhpcy5kaXN0YW5jZVRvUmVmcmVzaCkge1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9ICdhY3RpdmF0ZSc7XG4gICAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCggMCwgJyArIGRpc3RhbmNlWSArICdweCwgMCApJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoIDAsICcgKyBkaXN0YW5jZVkgKyAncHgsIDAgKSdcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgdG91Y2hlbmQoZSkge1xuICAgIGlmICghdGhpcy5zdGFydFkgfHwgdGhpcy5zdGF0ZS5kcmFnID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaXN0YW5jZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA+PSB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoKSB7XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9ICdyZWxlYXNlJztcbiAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICdkb3duJyB8fCAodGhpcy5fZGlyZWN0aW9uID09PSAnJyAmJiAhdGhpcy5fZW5kUmVhY2gpKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9SZWZyZXNoICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoLXRoaXMuZGlzdGFuY2VUb1JlZnJlc2ggLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2ZpbmlzaCc7XG4gICAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8ICh0aGlzLl9kaXJlY3Rpb24gPT09ICcnICYmICF0aGlzLl9lbmRSZWFjaCkpIHtcbiAgICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCdkb3duJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVZKC10aGlzLmRpc3RhbmNlVG9SZWZyZXNoIC0gMSk7XG4gICAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCgndXAnKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9ICdkZWFjdGl2YXRlJztcbiAgICAgICAgICBpZiAodGhpcy5fbmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJylcbiAgdG91Y2hjYW5jZWwoKSB7XG4gICAgdGhpcy50cmFuc2xhdGVZKDApO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIHNjcm9sbChldnQpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBjb250ZW50T2Zmc2V0ID0gZXZ0LnRhcmdldC5zY3JvbGxUb3A7XG4gICAgdGhpcy5fbGFzdENvbnRlbnRPZmZzZXQgPSBjb250ZW50T2Zmc2V0O1xuICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICBpZiAoY29udGVudE9mZnNldCA+IDAgJiYgZXZ0LnRhcmdldC5zY3JvbGxUb3AgKyB0aGlzLmVsZS5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA9PT0gZXZ0LnRhcmdldC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZW5kUmVhY2ggPSB0cnVlO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW5kUmVhY2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmVuZFJlYWNoZWRSZWZyZXNoIHx8IHRoaXMuX2RpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNvbnRlbnRPZmZzZXQgPiAwICYmXG4gICAgICBldnQudGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZXZ0LnRhcmdldC5zY3JvbGxIZWlnaHQgLSB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoICYmXG4gICAgICB0aGlzLl9lbmRUaW1lIC0gdGhpcy5fc3RhcnRUaW1lID49IDEwMFxuICAgICkge1xuICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGhpcy5fZW5kVGltZTtcbiAgICAgIGlmICh0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSAncmVsZWFzZSc7XG4gICAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5lbmRSZWFjaGVkUmVmcmVzaCkge1xuICAgICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoJ2VuZFJlYWNoZWRSZWZyZXNoJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2ZpbmlzaCc7XG4gICAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9ICdmaW5pc2gnO1xuICAgICAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGU6IEVsZW1lbnRSZWYpIHt9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgdHJhbnNsYXRlWShkaXN0YW5jZVkpIHtcbiAgICB0aGlzLnRyYW5zdGlvbkNscyA9ICdhbS1wdWxsLXRvLXJlZnJlc2gtdHJhbnNpdGlvbic7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCggMCwgJyArIGRpc3RhbmNlWSArICdweCwgMCApJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCAwLCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwICknXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG9iamVjdCk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBvYmplY3QpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==