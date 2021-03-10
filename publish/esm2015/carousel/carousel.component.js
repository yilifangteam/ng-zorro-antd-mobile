import { Component, ContentChildren, HostBinding, Input, Output, HostListener, QueryList, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as touchEvent from '../core/util/touch-event';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './dotindicator/dotindicator.component';

function CarouselComponent_DotIndicator_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "DotIndicator", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("page", ctx_r0.page)("dotStyle", ctx_r0.dotStyle)("pageCount", ctx_r0.pageCount)("dotActiveStyle", ctx_r0.dotActiveStyle);
} }
const _c0 = function (a0) { return { overflow: a0 }; };
const _c1 = ["*"];
export class CarouselComponent {
    constructor(_ele) {
        this._ele = _ele;
        this.style = {
            height: 'auto',
            width: '100%',
            transform: 'translate3d(0px, 0px, 0px)',
            margin: ''
        };
        this.lastIndex = 0;
        this.currentSelectedIndex = 0;
        this._nodeArr = [];
        this._isMouseDown = false;
        this._rationWidth = 0;
        this._currentSlideWidth = 0;
        this._currentSlideHeight = 0;
        this._transition = '';
        this._spaceWidth = 0;
        this._dragging = true;
        this._selectedIndex = 0;
        this.speed = 500;
        this.dots = true;
        this.vertical = false;
        this.autoplay = false;
        this.autoplayInterval = 3000;
        this.infinite = false;
        this.dotStyle = {};
        this.dotActiveStyle = {};
        this.frameOverflow = 'hidden';
        this.cellSpacing = 0;
        this.slideWidth = 1;
        this.swipeSpeed = 12;
        this.dragging = true;
        this.afterChange = new EventEmitter();
        this.beforeChange = new EventEmitter();
        this.carouselWrapper = true;
        this.carouselwrap = true;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        if (typeof value === 'undefined') {
            value = 0;
        }
        this._selectedIndex = Math.abs(value);
        if (this._nodeArr.length > 0) {
            this.carousel(1);
        }
    }
    panstart(event) {
        event.stopPropagation();
        if (!this._dragging) {
            return;
        }
        this.stopTimer();
        this._isMouseDown = true;
        this.touchObject = {
            startX: touchEvent.getEventTarget(event).pageX,
            startY: touchEvent.getEventTarget(event).pageY,
            direction: this.touchObject.direction
        };
    }
    panmove(event) {
        event.stopPropagation();
        if (!this._dragging || !this._isMouseDown) {
            return;
        }
        const { direction } = this.swipeDirection(this.touchObject.startX, touchEvent.getEventTarget(event).pageX, this.touchObject.startY, touchEvent.getEventTarget(event).pageY);
        if (direction === 0) {
            return;
        }
        const length = this.vertical
            ? Math.abs(touchEvent.getEventTarget(event).pageY - this.touchObject.startY)
            : Math.abs(touchEvent.getEventTarget(event).pageX - this.touchObject.startX);
        const offset = -this.touchObject.direction * length - this.currentSelectedIndex * this._rationWidth;
        this.touchObject = {
            startX: this.touchObject.startX,
            startY: this.touchObject.startY,
            endX: touchEvent.getEventTarget(event).pageX,
            endY: touchEvent.getEventTarget(event).pageY,
            length,
            direction,
            offset
        };
        if (direction !== 0) {
            this.setSlideStyles(this.currentSelectedIndex, this.touchObject.direction);
        }
        this.getListStyles(offset);
    }
    panend(event) {
        event.stopPropagation();
        if (!this._dragging || !this._isMouseDown || !this.touchObject.length || this.touchObject.length === undefined) {
            this._isMouseDown = false;
            return;
        }
        this._isMouseDown = false;
        if (this.touchObject.length > this.swipeSpeed) {
            this.carousel(this.touchObject.direction);
        }
        else {
            this.getListStyles(this.touchObject.direction * this.touchObject.length + this.touchObject.offset);
            this.style['transition'] = this._transition;
        }
        setTimeout(() => {
            this.startTimer();
        }, this.speed);
    }
    cancel() {
        setTimeout(() => {
            this.startTimer();
        }, this.speed);
    }
    resize() {
        if (this._resizeTimer) {
            clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = setTimeout(() => {
            this.ngAfterViewInit();
            clearTimeout(this._resizeTimer);
        }, 200);
    }
    initCarouselSize() {
        const nativeElement = this._ele.nativeElement;
        this.slideHeight = nativeElement.querySelector('carouselslide').clientHeight;
        this._currentSlideHeight = this.slideHeight * this.slideWidth;
        this._currentSlideWidth = nativeElement.clientWidth;
        this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
        this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
    }
    carouselInit(items) {
        this.infinite = this.infinite || true;
        this._nodeArr = items['_results'];
        const shouldDragging = this._nodeArr.length > 1;
        this._dragging = this.dragging && shouldDragging ? true : false;
        if (this._nodeArr.length > 1) {
            this.lastIndex = this._nodeArr.length - 1;
            setTimeout(() => {
                this._nodeArr.forEach((v, index) => {
                    v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
                    v.left = this.vertical ? 0 : index === this.lastIndex ? -this._rationWidth : index * this._rationWidth;
                    v.top = this.vertical ? (index === this.lastIndex ? -this._rationWidth : index * this._rationWidth) : 0;
                    v.margin = this.vertical ? `${this.cellSpacing / 2}px auto` : `auto ${this.cellSpacing / 2}px`;
                });
                this.startTimer();
            }, 0);
        }
        else if (this._nodeArr.length === 1) {
            setTimeout(() => {
                this._nodeArr.forEach(v => {
                    v.width = this.vertical ? 'auto' : this._rationWidth - this.cellSpacing;
                    v.left = 0;
                    v.top = 0;
                    v.margin = `auto ${this.cellSpacing / 2}px`;
                });
            }, 0);
        }
    }
    startTimer() {
        if (!this.autoplay) {
            return;
        }
        this.stopTimer();
        this._timer = this.autoplayInterval
            ? setInterval(() => {
                if (document.getElementsByTagName('carousel').length === 0) {
                    return;
                }
                this.carousel(1);
            }, this.autoplayInterval)
            : 0;
    }
    stopTimer() {
        clearInterval(this._timer);
    }
    carousel(moveDirection) {
        if (this.vertical) {
            if (moveDirection === 1) {
                this.moveUp();
            }
            else if (moveDirection === -1) {
                this.moveDown();
            }
        }
        else {
            if (moveDirection === 1) {
                this.moveLeft();
            }
            else if (moveDirection === -1) {
                this.moveRight();
            }
        }
        this.style['transition'] = this._transition;
    }
    moveUp() {
        this.gotoCarousel(this.getAfterNode(false));
    }
    moveDown() {
        this.gotoCarousel(this.getAfterNode(true));
    }
    moveLeft() {
        this.gotoCarousel(this.getAfterNode(false));
    }
    moveRight() {
        this.gotoCarousel(this.getAfterNode(true));
    }
    getAfterNode(pre) {
        let nextIndex;
        if (pre) {
            if (this.currentSelectedIndex <= 0) {
                this.getListStyles(this._rationWidth);
                setTimeout(() => {
                    this._nodeArr.forEach((v, tempIndex) => {
                        if (tempIndex === 0) {
                            v.left = this.vertical ? 0 : this._nodeArr.length * this._rationWidth;
                            v.top = this.vertical ? this._nodeArr.length * this._rationWidth : 0;
                        }
                        else {
                            v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
                            v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                        }
                    });
                    this.getListStyles(-this._rationWidth * (this.items.length - 1));
                }, this.speed);
                nextIndex = !this.infinite ? null : this.lastIndex;
                this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
                return nextIndex;
            }
            nextIndex = this.currentSelectedIndex - 1;
            this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
            this._nodeArr.forEach((v, tempIndex) => {
                if (0 === tempIndex && nextIndex === this._nodeArr.length - 2) {
                    v.left = 0;
                    v.top = 0;
                }
            });
            this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
            return nextIndex;
        }
        else {
            if (this.currentSelectedIndex >= this.lastIndex) {
                this.setSlideStyles(this.currentSelectedIndex, 1);
                this.getListStyles(-(this.lastIndex + 1) * this._rationWidth);
                nextIndex = !this.infinite ? null : 0;
                this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
                return nextIndex;
            }
            nextIndex = this.currentSelectedIndex + 1;
            this.setSlideStyles(this.currentSelectedIndex, 1);
            this.getListStyles(-nextIndex * this._rationWidth);
            this.beforeChange.emit({ from: this.currentSelectedIndex, to: nextIndex });
            return nextIndex;
        }
    }
    caculateDirectionLeftCurrentIndex() {
        const previousIndex = this.currentSelectedIndex;
        this.currentSelectedIndex = (previousIndex + 1) % this.items.length;
    }
    caculateDirectionRightCurrentIndex() {
        if (this.currentSelectedIndex === 0) {
            this.currentSelectedIndex = this.items.length;
        }
        const previousIndex = this.currentSelectedIndex;
        this.currentSelectedIndex = (previousIndex - 1) % this.items.length;
    }
    gotoCarousel(afterIndex) {
        if (afterIndex === null) {
            return;
        }
        this.getCurrentIndex();
        if (afterIndex === 0) {
            setTimeout(() => {
                this._nodeArr.forEach((v, index) => {
                    if (index === this._nodeArr.length - 1) {
                        v.left = this.vertical ? 0 : -this._rationWidth;
                        v.top = this.vertical ? -this._rationWidth : 0;
                    }
                    else {
                        v.left = this.vertical ? 0 : index * this._rationWidth;
                        v.top = this.vertical ? index * this._rationWidth : 0;
                    }
                });
                this.startTimer();
                this.getListStyles(0);
            }, this.speed);
        }
        this.currentSelectedIndex = afterIndex;
        this.afterChange.emit(this.currentSelectedIndex);
    }
    getCurrentIndex() {
        if (this.touchObject.direction === 1) {
            this.caculateDirectionLeftCurrentIndex();
        }
        else {
            this.caculateDirectionRightCurrentIndex();
        }
    }
    setSlideStyles(index, direction, xDist = 0) {
        if (direction === 1) {
            this._nodeArr.forEach((v, tempIndex) => {
                if (index < this._nodeArr.length && index - 1 === tempIndex) {
                    if (xDist === 0 || xDist > this._spaceWidth) {
                        v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                        v.top = this.vertical ? (this._nodeArr.length + tempIndex) * this._rationWidth : 0;
                    }
                }
                else if (this._nodeArr.length - 1 === tempIndex && index !== 2) {
                    if (xDist === 0 || xDist > this._spaceWidth) {
                        v.left = this.vertical ? 0 : (this._nodeArr.length - 1) * this._rationWidth;
                        v.top = this.vertical ? (this._nodeArr.length - 1) * this._rationWidth : 0;
                    }
                }
                else if (index === this._nodeArr.length - 1 && tempIndex === 1 && this.autoplay) {
                    v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
                else if (index === this._nodeArr.length - 1 && tempIndex === 0 && !this.autoplay) {
                    v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
            });
        }
        else if (direction === -1) {
            this._nodeArr.forEach((v, tempIndex) => {
                if (index === 0 && this._nodeArr.length - 1 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index === this._nodeArr.length - 2 && index + 1 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index === 1 && 0 === tempIndex) {
                    v.left = this.vertical ? 0 : direction * this._rationWidth * tempIndex;
                    v.top = this.vertical ? direction * this._rationWidth : 0;
                }
                else if (index > 1) {
                    v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
                    v.top = this.vertical ? tempIndex * this._rationWidth : 0;
                }
            });
        }
    }
    getListStyles(offset = 0) {
        const positionOffset = offset +
            (this.vertical
                ? (this.slideHeight - this._currentSlideHeight) / 2
                : (this._currentSlideWidth - this._rationWidth) / 2) -
            this.cellSpacing;
        this.style = {
            height: this._currentSlideHeight + 'px',
            width: '100%',
            transform: this.vertical
                ? `translate3d(0px, ${positionOffset}px, 0px)`
                : `translate3d(${positionOffset}px, 0px, 0px)`,
            margin: this.vertical ? `${(this.cellSpacing / 2) * -1}px 0px` : `0px ${(this.cellSpacing / 2) * -1}px`
        };
    }
    swipeDirection(x1, x2, y1, y2) {
        const xDist = x1 - x2;
        const yDist = y1 - y2;
        const r = Math.atan2(yDist, xDist);
        let swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return {
                direction: 1,
                xDist: xDist
            };
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return {
                direction: 1,
                xDist: xDist
            };
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return {
                direction: -1,
                xDist: xDist
            };
        }
        if (this.vertical === true) {
            if (swipeAngle >= 35 + 33 && swipeAngle <= 135) {
                return {
                    direction: 1,
                    xDist: xDist
                };
            }
            else {
                return {
                    direction: -1,
                    xDist: xDist
                };
            }
        }
        return {
            direction: 0,
            xDist: xDist
        };
    }
    get page() {
        return this.dots ? this.currentSelectedIndex : 0;
    }
    get pageCount() {
        return this.dots ? this.items.length : 0;
    }
    get dotindicatorStatus() {
        return this.dots ? this.items.length > 1 : this.dots;
    }
    ngAfterViewInit() {
        this.touchObject = { direction: 1 };
        this._transition = `transform ${this.speed / 1000}s`;
        this.items.changes.subscribe(items => {
            this.carouselInit(items);
        });
        this.initCarouselSize();
        if (!this._resizeTimer) {
            this.selectedIndex = this.items.length - 1 < this.selectedIndex ? 0 : this.selectedIndex;
            setTimeout(() => {
                this.currentSelectedIndex = this.selectedIndex;
            }, 0);
        }
        const selectedIndex = this._resizeTimer ? this.currentSelectedIndex : this.selectedIndex;
        const index = this.items.length > 1 ? (this.items.length - 1 === selectedIndex ? -1 : selectedIndex) : 0;
        this.getListStyles(-index * this._rationWidth);
        this.carouselInit(this.items);
        const nativeElement = this._ele.nativeElement;
        const targetNode = nativeElement.querySelector('carouselslide');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type == 'attributes') {
                    if (this.slideHeight !== nativeElement.querySelector('carouselslide').clientHeight) {
                        this.initCarouselSize();
                        this.getListStyles(-index * this._rationWidth);
                        this.carouselInit(this.items);
                    }
                }
            }
        };
        if (this._observer) {
            this._observer.disconnect();
        }
        this._observer = new MutationObserver(callback);
        this._observer.observe(targetNode, config);
    }
    ngOnDestroy() {
        this._observer.disconnect();
        this._observer = null;
        this.stopTimer();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["Carousel"], ["nzm-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CarouselSlideComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostVars: 4, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function CarouselComponent_mousedown_HostBindingHandler($event) { return ctx.panstart($event); })("touchstart", function CarouselComponent_touchstart_HostBindingHandler($event) { return ctx.panstart($event); })("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) { return ctx.panmove($event); })("touchmove", function CarouselComponent_touchmove_HostBindingHandler($event) { return ctx.panmove($event); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.panend($event); })("mouseup", function CarouselComponent_mouseup_HostBindingHandler($event) { return ctx.panend($event); })("touchend", function CarouselComponent_touchend_HostBindingHandler($event) { return ctx.panend($event); })("touchcancel", function CarouselComponent_touchcancel_HostBindingHandler() { return ctx.cancel(); })("resize", function CarouselComponent_resize_HostBindingHandler() { return ctx.resize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-carousel", ctx.carouselWrapper)("carousel", ctx.carouselwrap);
    } }, inputs: { speed: "speed", dots: "dots", vertical: "vertical", autoplay: "autoplay", autoplayInterval: "autoplayInterval", infinite: "infinite", dotStyle: "dotStyle", dotActiveStyle: "dotActiveStyle", frameOverflow: "frameOverflow", cellSpacing: "cellSpacing", slideWidth: "slideWidth", swipeSpeed: "swipeSpeed", dragging: "dragging", selectedIndex: "selectedIndex" }, outputs: { afterChange: "afterChange", beforeChange: "beforeChange" }, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "slider-frame", 3, "ngStyle"], [1, "slider-list", 3, "ngStyle"], ["class", "am-carousel-wrap-dot", 3, "page", "dotStyle", "pageCount", "dotActiveStyle", 4, "ngIf"], [1, "am-carousel-wrap-dot", 3, "page", "dotStyle", "pageCount", "dotActiveStyle"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, CarouselComponent_DotIndicator_3_Template, 1, 4, "DotIndicator", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx.frameOverflow));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dotindicatorStatus);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.DotIndicatorComponent], encapsulation: 2 });
CarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];
CarouselComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [CarouselSlideComponent,] }],
    speed: [{ type: Input }],
    dots: [{ type: Input }],
    vertical: [{ type: Input }],
    autoplay: [{ type: Input }],
    autoplayInterval: [{ type: Input }],
    infinite: [{ type: Input }],
    dotStyle: [{ type: Input }],
    dotActiveStyle: [{ type: Input }],
    frameOverflow: [{ type: Input }],
    cellSpacing: [{ type: Input }],
    slideWidth: [{ type: Input }],
    swipeSpeed: [{ type: Input }],
    dragging: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    afterChange: [{ type: Output }],
    beforeChange: [{ type: Output }],
    carouselWrapper: [{ type: HostBinding, args: ['class.am-carousel',] }],
    carouselwrap: [{ type: HostBinding, args: ['class.carousel',] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }],
    cancel: [{ type: HostListener, args: ['touchcancel',] }],
    resize: [{ type: HostListener, args: ['window:resize',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'Carousel, nzm-carousel',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"slider-frame\" [ngStyle]=\"{ overflow: frameOverflow }\">\n  <ul class=\"slider-list\" [ngStyle]=\"style\">\n    <ng-content></ng-content>\n  </ul>\n</div>\n<DotIndicator\n  *ngIf=\"dotindicatorStatus\"\n  class=\"am-carousel-wrap-dot\"\n  [page]=\"page\"\n  [dotStyle]=\"dotStyle\"\n  [pageCount]=\"pageCount\"\n  [dotActiveStyle]=\"dotActiveStyle\"\n></DotIndicator>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { speed: [{
            type: Input
        }], dots: [{
            type: Input
        }], vertical: [{
            type: Input
        }], autoplay: [{
            type: Input
        }], autoplayInterval: [{
            type: Input
        }], infinite: [{
            type: Input
        }], dotStyle: [{
            type: Input
        }], dotActiveStyle: [{
            type: Input
        }], frameOverflow: [{
            type: Input
        }], cellSpacing: [{
            type: Input
        }], slideWidth: [{
            type: Input
        }], swipeSpeed: [{
            type: Input
        }], dragging: [{
            type: Input
        }], afterChange: [{
            type: Output
        }], beforeChange: [{
            type: Output
        }], carouselWrapper: [{
            type: HostBinding,
            args: ['class.am-carousel']
        }], carouselwrap: [{
            type: HostBinding,
            args: ['class.carousel']
        }], selectedIndex: [{
            type: Input
        }], panstart: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }, {
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], panmove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }, {
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], panend: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['touchend', ['$event']]
        }], cancel: [{
            type: HostListener,
            args: ['touchcancel']
        }], resize: [{
            type: HostListener,
            args: ['window:resize']
        }], items: [{
            type: ContentChildren,
            args: [CarouselSlideComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFFWixVQUFVLEVBRVYsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFPdkQsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBd0svQixZQUFvQixJQUFnQjtBQUFJLFFBQXBCLFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQXJLckMsVUFBSyxHQUFHO0FBQ1YsWUFBSSxNQUFNLEVBQUUsTUFBTTtBQUNsQixZQUFJLEtBQUssRUFBRSxNQUFNO0FBQ2pCLFlBQUksU0FBUyxFQUFFLDRCQUE0QjtBQUMzQyxZQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsU0FBRyxDQUFDO0FBQ0osUUFBRSxjQUFTLEdBQVcsQ0FBQyxDQUFDO0FBQ3hCLFFBQUUseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO0FBQ25DLFFBR1UsYUFBUSxHQUFlLEVBQUUsQ0FBQztBQUNwQyxRQUFVLGlCQUFZLEdBQVksS0FBSyxDQUFDO0FBQ3hDLFFBQVUsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDbkMsUUFBVSx1QkFBa0IsR0FBVyxDQUFDLENBQUM7QUFDekMsUUFBVSx3QkFBbUIsR0FBVyxDQUFDLENBQUM7QUFDMUMsUUFBVSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztBQUNuQyxRQUFVLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0FBQ2xDLFFBQ1UsY0FBUyxHQUFZLElBQUksQ0FBQztBQUNw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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDaEcsd0JBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRixxQkFBVztBQUNYLGlCQUFTO0FBQUMscUJBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDMUUsb0JBQVUsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3ZELHdCQUFZLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDeEYsd0JBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RixxQkFBVztBQUNYLGlCQUFTO0FBQUMscUJBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzRixvQkFBVSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQzlGLG9CQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxpQkFBUztBQUFDLHFCQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUM1RixvQkFBVSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQzlGLG9CQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxpQkFBUztBQUNULFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQUMsYUFBSyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNqQyxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFO0FBQzdDLGdCQUFRLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLG9CQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUNyRSxvQkFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsaUJBQVM7QUFBQyxxQkFBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDbEYsb0JBQVUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ3JFLG9CQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxpQkFBUztBQUFDLHFCQUFLLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25ELG9CQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDakYsb0JBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLGlCQUFTO0FBQUMscUJBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQzlCLG9CQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUNyRSxvQkFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsaUJBQVM7QUFDVCxZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYSxDQUFDLFNBQWlCLENBQUM7QUFDbEMsUUFBSSxNQUFNLGNBQWMsR0FDbEIsTUFBTTtBQUNaLFlBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtBQUNwQixnQkFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7QUFDM0QsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUQsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRztBQUNqQixZQUFNLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSTtBQUM3QyxZQUFNLEtBQUssRUFBRSxNQUFNO0FBQ25CLFlBQU0sU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzlCLGdCQUFRLENBQUMsQ0FBQyxvQkFBb0IsY0FBYyxVQUFVO0FBQ3RELGdCQUFRLENBQUMsQ0FBQyxlQUFlLGNBQWMsZUFBZTtBQUN0RCxZQUFNLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtBQUM3RyxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQy9CLFFBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMxQixRQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFDSSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2QyxRQUFJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELFFBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ3hCLFlBQU0sVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxJQUFJLEVBQUUsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO0FBQzdDLFlBQU0sT0FBTztBQUNiLGdCQUFRLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLGdCQUFRLEtBQUssRUFBRSxLQUFLO0FBQ3BCLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxJQUFJLEdBQUcsSUFBSSxVQUFVLElBQUksR0FBRyxFQUFFO0FBQ2hELFlBQU0sT0FBTztBQUNiLGdCQUFRLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLGdCQUFRLEtBQUssRUFBRSxLQUFLO0FBQ3BCLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxJQUFJLEdBQUcsSUFBSSxVQUFVLElBQUksR0FBRyxFQUFFO0FBQ2hELFlBQU0sT0FBTztBQUNiLGdCQUFRLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDckIs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VyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3BDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDbEMscUJBa0NGLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDckMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNsQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2pDLHFCQWtCRixZQUFZLFNBQUMsYUFBYTtBQUN4QixxQkFNRixZQUFZLFNBQUMsZUFBZTtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFF1ZXJ5TGlzdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIHRvdWNoRXZlbnQgZnJvbSAnLi4vY29yZS91dGlsL3RvdWNoLWV2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2Fyb3VzZWwsIG56bS1jYXJvdXNlbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzbGlkZUhlaWdodDogbnVtYmVyO1xuICB0b3VjaE9iamVjdDtcbiAgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KScsXG4gICAgbWFyZ2luOiAnJ1xuICB9O1xuICBsYXN0SW5kZXg6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3Jlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX25vZGVBcnI6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmF0aW9uV2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2N1cnJlbnRTbGlkZVdpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jdXJyZW50U2xpZGVIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RyYW5zaXRpb246IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zcGFjZVdpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9vYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSBfZHJhZ2dpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudClcbiAgaXRlbXM6IFF1ZXJ5TGlzdDxDYXJvdXNlbFNsaWRlQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzcGVlZDogbnVtYmVyID0gNTAwO1xuICBASW5wdXQoKVxuICBkb3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b3BsYXlJbnRlcnZhbDogYW55ID0gMzAwMDtcbiAgQElucHV0KClcbiAgaW5maW5pdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZG90U3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKVxuICBkb3RBY3RpdmVTdHlsZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpXG4gIGZyYW1lT3ZlcmZsb3c6IHN0cmluZyA9ICdoaWRkZW4nO1xuICBASW5wdXQoKVxuICBjZWxsU3BhY2luZzogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgc2xpZGVXaWR0aDogbnVtYmVyID0gMTtcbiAgQElucHV0KClcbiAgc3dpcGVTcGVlZDogbnVtYmVyID0gMTI7XG4gIEBJbnB1dCgpXG4gIGRyYWdnaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gTWF0aC5hYnModmFsdWUpO1xuICAgIGlmICh0aGlzLl9ub2RlQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWwoMSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBhZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBiZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2Fyb3VzZWwnKVxuICBjYXJvdXNlbFdyYXBwZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsJylcbiAgY2Fyb3VzZWx3cmFwOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgcGFuc3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy5faXNNb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMudG91Y2hPYmplY3QgPSB7XG4gICAgICBzdGFydFg6IHRvdWNoRXZlbnQuZ2V0RXZlbnRUYXJnZXQoZXZlbnQpLnBhZ2VYLFxuICAgICAgc3RhcnRZOiB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5fZHJhZ2dpbmcgfHwgIXRoaXMuX2lzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZGlyZWN0aW9uIH0gPSB0aGlzLnN3aXBlRGlyZWN0aW9uKFxuICAgICAgdGhpcy50b3VjaE9iamVjdC5zdGFydFgsXG4gICAgICB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWCxcbiAgICAgIHRoaXMudG91Y2hPYmplY3Quc3RhcnRZLFxuICAgICAgdG91Y2hFdmVudC5nZXRFdmVudFRhcmdldChldmVudCkucGFnZVlcbiAgICApO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy52ZXJ0aWNhbFxuICAgICAgPyBNYXRoLmFicyh0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSAtIHRoaXMudG91Y2hPYmplY3Quc3RhcnRZKVxuICAgICAgOiBNYXRoLmFicyh0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWCAtIHRoaXMudG91Y2hPYmplY3Quc3RhcnRYKTtcbiAgICBjb25zdCBvZmZzZXQgPSAtdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb24gKiBsZW5ndGggLSB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGg7XG4gICAgdGhpcy50b3VjaE9iamVjdCA9IHtcbiAgICAgIHN0YXJ0WDogdGhpcy50b3VjaE9iamVjdC5zdGFydFgsXG4gICAgICBzdGFydFk6IHRoaXMudG91Y2hPYmplY3Quc3RhcnRZLFxuICAgICAgZW5kWDogdG91Y2hFdmVudC5nZXRFdmVudFRhcmdldChldmVudCkucGFnZVgsXG4gICAgICBlbmRZOiB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSxcbiAgICAgIGxlbmd0aCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIG9mZnNldFxuICAgIH07XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgdGhpcy5zZXRTbGlkZVN0eWxlcyh0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0aGlzLnRvdWNoT2JqZWN0LmRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRMaXN0U3R5bGVzKG9mZnNldCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9kcmFnZ2luZyB8fCAhdGhpcy5faXNNb3VzZURvd24gfHwgIXRoaXMudG91Y2hPYmplY3QubGVuZ3RoIHx8IHRoaXMudG91Y2hPYmplY3QubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG91Y2hPYmplY3QubGVuZ3RoID4gdGhpcy5zd2lwZVNwZWVkKSB7XG4gICAgICB0aGlzLmNhcm91c2VsKHRoaXMudG91Y2hPYmplY3QuZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKHRoaXMudG91Y2hPYmplY3QuZGlyZWN0aW9uICogdGhpcy50b3VjaE9iamVjdC5sZW5ndGggKyB0aGlzLnRvdWNoT2JqZWN0Lm9mZnNldCk7XG4gICAgICB0aGlzLnN0eWxlWyd0cmFuc2l0aW9uJ10gPSB0aGlzLl90cmFuc2l0aW9uO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0sIHRoaXMuc3BlZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnKVxuICBjYW5jZWwoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9LCB0aGlzLnNwZWVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICByZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZXIpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZTogRWxlbWVudFJlZikge31cblxuICBpbml0Q2Fyb3VzZWxTaXplKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGUubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnNsaWRlSGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdjYXJvdXNlbHNsaWRlJykuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuX2N1cnJlbnRTbGlkZUhlaWdodCA9IHRoaXMuc2xpZGVIZWlnaHQgKiB0aGlzLnNsaWRlV2lkdGg7XG4gICAgdGhpcy5fY3VycmVudFNsaWRlV2lkdGggPSBuYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3JhdGlvbldpZHRoID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMuX2N1cnJlbnRTbGlkZUhlaWdodCA6IHRoaXMuX2N1cnJlbnRTbGlkZVdpZHRoICogdGhpcy5zbGlkZVdpZHRoO1xuICAgIHRoaXMuX3NwYWNlV2lkdGggPSAoKHRoaXMudmVydGljYWwgPyB0aGlzLnNsaWRlSGVpZ2h0IDogdGhpcy5fY3VycmVudFNsaWRlV2lkdGgpIC0gdGhpcy5fcmF0aW9uV2lkdGgpIC8gMjtcbiAgfVxuXG4gIGNhcm91c2VsSW5pdChpdGVtcykge1xuICAgIHRoaXMuaW5maW5pdGUgPSB0aGlzLmluZmluaXRlIHx8IHRydWU7XG4gICAgdGhpcy5fbm9kZUFyciA9IGl0ZW1zWydfcmVzdWx0cyddO1xuICAgIGNvbnN0IHNob3VsZERyYWdnaW5nID0gdGhpcy5fbm9kZUFyci5sZW5ndGggPiAxO1xuICAgIHRoaXMuX2RyYWdnaW5nID0gdGhpcy5kcmFnZ2luZyAmJiBzaG91bGREcmFnZ2luZyA/IHRydWUgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5fbm9kZUFyci5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdi53aWR0aCA9IHRoaXMudmVydGljYWwgPyAnYXV0bycgOiB0aGlzLl9yYXRpb25XaWR0aCAtIHRoaXMuY2VsbFNwYWNpbmc7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBpbmRleCA9PT0gdGhpcy5sYXN0SW5kZXggPyAtdGhpcy5fcmF0aW9uV2lkdGggOiBpbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IChpbmRleCA9PT0gdGhpcy5sYXN0SW5kZXggPyAtdGhpcy5fcmF0aW9uV2lkdGggOiBpbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoKSA6IDA7XG4gICAgICAgICAgdi5tYXJnaW4gPSB0aGlzLnZlcnRpY2FsID8gYCR7dGhpcy5jZWxsU3BhY2luZyAvIDJ9cHggYXV0b2AgOiBgYXV0byAke3RoaXMuY2VsbFNwYWNpbmcgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9ub2RlQXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX25vZGVBcnIuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICB2LndpZHRoID0gdGhpcy52ZXJ0aWNhbCA/ICdhdXRvJyA6IHRoaXMuX3JhdGlvbldpZHRoIC0gdGhpcy5jZWxsU3BhY2luZztcbiAgICAgICAgICB2LmxlZnQgPSAwO1xuICAgICAgICAgIHYudG9wID0gMDtcbiAgICAgICAgICB2Lm1hcmdpbiA9IGBhdXRvICR7dGhpcy5jZWxsU3BhY2luZyAvIDJ9cHhgO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9wbGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy5fdGltZXIgPSB0aGlzLmF1dG9wbGF5SW50ZXJ2YWxcbiAgICAgID8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2Fyb3VzZWwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYXJvdXNlbCgxKTtcbiAgICAgICAgfSwgdGhpcy5hdXRvcGxheUludGVydmFsKVxuICAgICAgOiAwO1xuICB9XG5cbiAgc3RvcFRpbWVyKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgY2Fyb3VzZWwobW92ZURpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgfSBlbHNlIGlmIChtb3ZlRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZURpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdHlsZVsndHJhbnNpdGlvbiddID0gdGhpcy5fdHJhbnNpdGlvbjtcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLmdvdG9DYXJvdXNlbCh0aGlzLmdldEFmdGVyTm9kZShmYWxzZSkpO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy5nb3RvQ2Fyb3VzZWwodGhpcy5nZXRBZnRlck5vZGUodHJ1ZSkpO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy5nb3RvQ2Fyb3VzZWwodGhpcy5nZXRBZnRlck5vZGUoZmFsc2UpKTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLmdvdG9DYXJvdXNlbCh0aGlzLmdldEFmdGVyTm9kZSh0cnVlKSk7XG4gIH1cblxuICBnZXRBZnRlck5vZGUocHJlKSB7XG4gICAgbGV0IG5leHRJbmRleDtcbiAgICBpZiAocHJlKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA8PSAwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdFN0eWxlcyh0aGlzLl9yYXRpb25XaWR0aCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX25vZGVBcnIuZm9yRWFjaCgodiwgdGVtcEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogdGhpcy5fbm9kZUFyci5sZW5ndGggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgICAgdi50b3AgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5fbm9kZUFyci5sZW5ndGggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKC10aGlzLl9yYXRpb25XaWR0aCAqICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgfSwgdGhpcy5zcGVlZCk7XG4gICAgICAgIG5leHRJbmRleCA9ICF0aGlzLmluZmluaXRlID8gbnVsbCA6IHRoaXMubGFzdEluZGV4O1xuICAgICAgICB0aGlzLmJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbTogdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCwgdG86IG5leHRJbmRleCB9KTtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgIH1cbiAgICAgIG5leHRJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggLSAxO1xuICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKG5leHRJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoICogdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb24pO1xuICAgICAgdGhpcy5fbm9kZUFyci5mb3JFYWNoKCh2LCB0ZW1wSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKDAgPT09IHRlbXBJbmRleCAmJiBuZXh0SW5kZXggPT09IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMikge1xuICAgICAgICAgIHYubGVmdCA9IDA7XG4gICAgICAgICAgdi50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0bzogbmV4dEluZGV4IH0pO1xuICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPj0gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZVN0eWxlcyh0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKC0odGhpcy5sYXN0SW5kZXggKyAxKSAqIHRoaXMuX3JhdGlvbldpZHRoKTtcbiAgICAgICAgbmV4dEluZGV4ID0gIXRoaXMuaW5maW5pdGUgPyBudWxsIDogMDtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb206IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXgsIHRvOiBuZXh0SW5kZXggfSk7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4ICsgMTtcbiAgICAgIHRoaXMuc2V0U2xpZGVTdHlsZXModGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCwgMSk7XG4gICAgICB0aGlzLmdldExpc3RTdHlsZXMoLW5leHRJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoKTtcbiAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0bzogbmV4dEluZGV4IH0pO1xuICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICB9XG4gIH1cblxuICBjYWN1bGF0ZURpcmVjdGlvbkxlZnRDdXJyZW50SW5kZXgoKSB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IChwcmV2aW91c0luZGV4ICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGNhY3VsYXRlRGlyZWN0aW9uUmlnaHRDdXJyZW50SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IChwcmV2aW91c0luZGV4IC0gMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdvdG9DYXJvdXNlbChhZnRlckluZGV4KSB7XG4gICAgaWYgKGFmdGVySW5kZXggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRDdXJyZW50SW5kZXgoKTtcblxuICAgIGlmIChhZnRlckluZGV4ID09PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbm9kZUFyci5mb3JFYWNoKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IC10aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IC10aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogaW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IGluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGggOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB0aGlzLmdldExpc3RTdHlsZXMoMCk7XG4gICAgICB9LCB0aGlzLnNwZWVkKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IGFmdGVySW5kZXg7XG4gICAgdGhpcy5hZnRlckNoYW5nZS5lbWl0KHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4KCkge1xuICAgIGlmICh0aGlzLnRvdWNoT2JqZWN0LmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgdGhpcy5jYWN1bGF0ZURpcmVjdGlvbkxlZnRDdXJyZW50SW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWN1bGF0ZURpcmVjdGlvblJpZ2h0Q3VycmVudEluZGV4KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2xpZGVTdHlsZXMoaW5kZXgsIGRpcmVjdGlvbiwgeERpc3Q6IG51bWJlciA9IDApIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIHRlbXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9ub2RlQXJyLmxlbmd0aCAmJiBpbmRleCAtIDEgPT09IHRlbXBJbmRleCkge1xuICAgICAgICAgIGlmICh4RGlzdCA9PT0gMCB8fCB4RGlzdCA+IHRoaXMuX3NwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgICAgdi50b3AgPSB0aGlzLnZlcnRpY2FsID8gKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbm9kZUFyci5sZW5ndGggLSAxID09PSB0ZW1wSW5kZXggJiYgaW5kZXggIT09IDIpIHtcbiAgICAgICAgICBpZiAoeERpc3QgPT09IDAgfHwgeERpc3QgPiB0aGlzLl9zcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6ICh0aGlzLl9ub2RlQXJyLmxlbmd0aCAtIDEpICogdGhpcy5fcmF0aW9uV2lkdGg7XG4gICAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyAodGhpcy5fbm9kZUFyci5sZW5ndGggLSAxKSAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMSAmJiB0ZW1wSW5kZXggPT09IDEgJiYgdGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxICYmIHRlbXBJbmRleCA9PT0gMCAmJiAhdGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIHRlbXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxID09PSB0ZW1wSW5kZXgpIHtcbiAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IGRpcmVjdGlvbiAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IGRpcmVjdGlvbiAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAyICYmIGluZGV4ICsgMSA9PT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgMCA9PT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCAqIHRlbXBJbmRleDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAxKSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldExpc3RTdHlsZXMob2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgY29uc3QgcG9zaXRpb25PZmZzZXQgPVxuICAgICAgb2Zmc2V0ICtcbiAgICAgICh0aGlzLnZlcnRpY2FsXG4gICAgICAgID8gKHRoaXMuc2xpZGVIZWlnaHQgLSB0aGlzLl9jdXJyZW50U2xpZGVIZWlnaHQpIC8gMlxuICAgICAgICA6ICh0aGlzLl9jdXJyZW50U2xpZGVXaWR0aCAtIHRoaXMuX3JhdGlvbldpZHRoKSAvIDIpIC1cbiAgICAgIHRoaXMuY2VsbFNwYWNpbmc7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5fY3VycmVudFNsaWRlSGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2Zvcm06IHRoaXMudmVydGljYWxcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMHB4LCAke3Bvc2l0aW9uT2Zmc2V0fXB4LCAwcHgpYFxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uT2Zmc2V0fXB4LCAwcHgsIDBweClgLFxuICAgICAgbWFyZ2luOiB0aGlzLnZlcnRpY2FsID8gYCR7KHRoaXMuY2VsbFNwYWNpbmcgLyAyKSAqIC0xfXB4IDBweGAgOiBgMHB4ICR7KHRoaXMuY2VsbFNwYWNpbmcgLyAyKSAqIC0xfXB4YFxuICAgIH07XG4gIH1cblxuICBzd2lwZURpcmVjdGlvbih4MSwgeDIsIHkxLCB5Mikge1xuICAgIGNvbnN0IHhEaXN0ID0geDEgLSB4MjtcbiAgICBjb25zdCB5RGlzdCA9IHkxIC0geTI7XG5cbiAgICBjb25zdCByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuICAgIGxldCBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZCgociAqIDE4MCkgLyBNYXRoLlBJKTtcbiAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPD0gNDUgJiYgc3dpcGVBbmdsZSA+PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPD0gMzYwICYmIHN3aXBlQW5nbGUgPj0gMzE1KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPj0gMTM1ICYmIHN3aXBlQW5nbGUgPD0gMjI1KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IC0xLFxuICAgICAgICB4RGlzdDogeERpc3RcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAoc3dpcGVBbmdsZSA+PSAzNSArIDMzICYmIHN3aXBlQW5nbGUgPD0gMTM1KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaXJlY3Rpb246IC0xLFxuICAgICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgeERpc3Q6IHhEaXN0XG4gICAgfTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRvdHMgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4IDogMDtcbiAgfVxuXG4gIGdldCBwYWdlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG90cyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIGdldCBkb3RpbmRpY2F0b3JTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG90cyA/IHRoaXMuaXRlbXMubGVuZ3RoID4gMSA6IHRoaXMuZG90cztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRvdWNoT2JqZWN0ID0geyBkaXJlY3Rpb246IDEgfTtcbiAgICB0aGlzLl90cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAke3RoaXMuc3BlZWQgLyAxMDAwfXNgO1xuICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuICAgICAgdGhpcy5jYXJvdXNlbEluaXQoaXRlbXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5pdENhcm91c2VsU2l6ZSgpO1xuICAgIGlmICghdGhpcy5fcmVzaXplVGltZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA8IHRoaXMuc2VsZWN0ZWRJbmRleCA/IDAgOiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5fcmVzaXplVGltZXIgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4IDogdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggPiAxID8gKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA9PT0gc2VsZWN0ZWRJbmRleCA/IC0xIDogc2VsZWN0ZWRJbmRleCkgOiAwO1xuICAgIHRoaXMuZ2V0TGlzdFN0eWxlcygtaW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCk7XG4gICAgdGhpcy5jYXJvdXNlbEluaXQodGhpcy5pdGVtcyk7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuX2VsZS5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRhcmdldE5vZGUgPSBuYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Nhcm91c2Vsc2xpZGUnKTtcbiAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gbXV0YXRpb25zTGlzdCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2xpZGVIZWlnaHQgIT09IG5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignY2Fyb3VzZWxzbGlkZScpLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Q2Fyb3VzZWxTaXplKCk7XG4gICAgICAgICAgICB0aGlzLmdldExpc3RTdHlsZXMoLWluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbEluaXQodGhpcy5pdGVtcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICB9XG59XG4iXX0=