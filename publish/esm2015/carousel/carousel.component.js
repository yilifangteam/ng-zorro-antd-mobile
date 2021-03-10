import { Component, ContentChildren, HostBinding, Input, Output, HostListener, QueryList, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as touchEvent from '../core/util/touch-event';
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
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'Carousel, nzm-carousel',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"slider-frame\" [ngStyle]=\"{ overflow: frameOverflow }\">\n  <ul class=\"slider-list\" [ngStyle]=\"style\">\n    <ng-content></ng-content>\n  </ul>\n</div>\n<DotIndicator\n  *ngIf=\"dotindicatorStatus\"\n  class=\"am-carousel-wrap-dot\"\n  [page]=\"page\"\n  [dotStyle]=\"dotStyle\"\n  [pageCount]=\"pageCount\"\n  [dotActiveStyle]=\"dotActiveStyle\"\n></DotIndicator>\n"
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBRVosVUFBVSxFQUVWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEtBQUssVUFBVSxNQUFNLDBCQUEwQixDQUFDO0FBT3ZELE1BQU0sT0FBTyxpQkFBaUI7SUF3SzVCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFyS3BDLFVBQUssR0FBRztZQUNOLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixTQUFTLEVBQUUsNEJBQTRCO1lBQ3ZDLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUNGLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBSXpCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBTW5DLFVBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFRLEdB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QyxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDekQsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUMzRCxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDeEUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUMzRCxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUN6QyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO29CQUN2RSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FB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QUFLOzRCQUVMLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7dUJBRUwsS0FBSzs0QkFFTCxLQUFLOzBCQWFMLE1BQU07MkJBRU4sTUFBTTs4QkFHTixXQUFXLFNBQUMsbUJBQW1COzJCQUUvQixXQUFXLFNBQUMsZ0JBQWdCO3VCQUc1QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3BDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBZXJDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDcEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFtQ3BDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDckMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNsQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQW1CbkMsWUFBWSxTQUFDLGFBQWE7cUJBTzFCLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFF1ZXJ5TGlzdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIHRvdWNoRXZlbnQgZnJvbSAnLi4vY29yZS91dGlsL3RvdWNoLWV2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2Fyb3VzZWwsIG56bS1jYXJvdXNlbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzbGlkZUhlaWdodDogbnVtYmVyO1xuICB0b3VjaE9iamVjdDtcbiAgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KScsXG4gICAgbWFyZ2luOiAnJ1xuICB9O1xuICBsYXN0SW5kZXg6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3Jlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX25vZGVBcnI6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmF0aW9uV2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2N1cnJlbnRTbGlkZVdpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jdXJyZW50U2xpZGVIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RyYW5zaXRpb246IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zcGFjZVdpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9vYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSBfZHJhZ2dpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudClcbiAgaXRlbXM6IFF1ZXJ5TGlzdDxDYXJvdXNlbFNsaWRlQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzcGVlZDogbnVtYmVyID0gNTAwO1xuICBASW5wdXQoKVxuICBkb3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b3BsYXlJbnRlcnZhbDogYW55ID0gMzAwMDtcbiAgQElucHV0KClcbiAgaW5maW5pdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZG90U3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKVxuICBkb3RBY3RpdmVTdHlsZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpXG4gIGZyYW1lT3ZlcmZsb3c6IHN0cmluZyA9ICdoaWRkZW4nO1xuICBASW5wdXQoKVxuICBjZWxsU3BhY2luZzogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgc2xpZGVXaWR0aDogbnVtYmVyID0gMTtcbiAgQElucHV0KClcbiAgc3dpcGVTcGVlZDogbnVtYmVyID0gMTI7XG4gIEBJbnB1dCgpXG4gIGRyYWdnaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gTWF0aC5hYnModmFsdWUpO1xuICAgIGlmICh0aGlzLl9ub2RlQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWwoMSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBhZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBiZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2Fyb3VzZWwnKVxuICBjYXJvdXNlbFdyYXBwZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsJylcbiAgY2Fyb3VzZWx3cmFwOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgcGFuc3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy5faXNNb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMudG91Y2hPYmplY3QgPSB7XG4gICAgICBzdGFydFg6IHRvdWNoRXZlbnQuZ2V0RXZlbnRUYXJnZXQoZXZlbnQpLnBhZ2VYLFxuICAgICAgc3RhcnRZOiB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5fZHJhZ2dpbmcgfHwgIXRoaXMuX2lzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZGlyZWN0aW9uIH0gPSB0aGlzLnN3aXBlRGlyZWN0aW9uKFxuICAgICAgdGhpcy50b3VjaE9iamVjdC5zdGFydFgsXG4gICAgICB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWCxcbiAgICAgIHRoaXMudG91Y2hPYmplY3Quc3RhcnRZLFxuICAgICAgdG91Y2hFdmVudC5nZXRFdmVudFRhcmdldChldmVudCkucGFnZVlcbiAgICApO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy52ZXJ0aWNhbFxuICAgICAgPyBNYXRoLmFicyh0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSAtIHRoaXMudG91Y2hPYmplY3Quc3RhcnRZKVxuICAgICAgOiBNYXRoLmFicyh0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWCAtIHRoaXMudG91Y2hPYmplY3Quc3RhcnRYKTtcbiAgICBjb25zdCBvZmZzZXQgPSAtdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb24gKiBsZW5ndGggLSB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGg7XG4gICAgdGhpcy50b3VjaE9iamVjdCA9IHtcbiAgICAgIHN0YXJ0WDogdGhpcy50b3VjaE9iamVjdC5zdGFydFgsXG4gICAgICBzdGFydFk6IHRoaXMudG91Y2hPYmplY3Quc3RhcnRZLFxuICAgICAgZW5kWDogdG91Y2hFdmVudC5nZXRFdmVudFRhcmdldChldmVudCkucGFnZVgsXG4gICAgICBlbmRZOiB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5wYWdlWSxcbiAgICAgIGxlbmd0aCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIG9mZnNldFxuICAgIH07XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgdGhpcy5zZXRTbGlkZVN0eWxlcyh0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0aGlzLnRvdWNoT2JqZWN0LmRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRMaXN0U3R5bGVzKG9mZnNldCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9kcmFnZ2luZyB8fCAhdGhpcy5faXNNb3VzZURvd24gfHwgIXRoaXMudG91Y2hPYmplY3QubGVuZ3RoIHx8IHRoaXMudG91Y2hPYmplY3QubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG91Y2hPYmplY3QubGVuZ3RoID4gdGhpcy5zd2lwZVNwZWVkKSB7XG4gICAgICB0aGlzLmNhcm91c2VsKHRoaXMudG91Y2hPYmplY3QuZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKHRoaXMudG91Y2hPYmplY3QuZGlyZWN0aW9uICogdGhpcy50b3VjaE9iamVjdC5sZW5ndGggKyB0aGlzLnRvdWNoT2JqZWN0Lm9mZnNldCk7XG4gICAgICB0aGlzLnN0eWxlWyd0cmFuc2l0aW9uJ10gPSB0aGlzLl90cmFuc2l0aW9uO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0sIHRoaXMuc3BlZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnKVxuICBjYW5jZWwoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9LCB0aGlzLnNwZWVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICByZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZXIpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZTogRWxlbWVudFJlZikge31cblxuICBpbml0Q2Fyb3VzZWxTaXplKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGUubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnNsaWRlSGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdjYXJvdXNlbHNsaWRlJykuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuX2N1cnJlbnRTbGlkZUhlaWdodCA9IHRoaXMuc2xpZGVIZWlnaHQgKiB0aGlzLnNsaWRlV2lkdGg7XG4gICAgdGhpcy5fY3VycmVudFNsaWRlV2lkdGggPSBuYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3JhdGlvbldpZHRoID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMuX2N1cnJlbnRTbGlkZUhlaWdodCA6IHRoaXMuX2N1cnJlbnRTbGlkZVdpZHRoICogdGhpcy5zbGlkZVdpZHRoO1xuICAgIHRoaXMuX3NwYWNlV2lkdGggPSAoKHRoaXMudmVydGljYWwgPyB0aGlzLnNsaWRlSGVpZ2h0IDogdGhpcy5fY3VycmVudFNsaWRlV2lkdGgpIC0gdGhpcy5fcmF0aW9uV2lkdGgpIC8gMjtcbiAgfVxuXG4gIGNhcm91c2VsSW5pdChpdGVtcykge1xuICAgIHRoaXMuaW5maW5pdGUgPSB0aGlzLmluZmluaXRlIHx8IHRydWU7XG4gICAgdGhpcy5fbm9kZUFyciA9IGl0ZW1zWydfcmVzdWx0cyddO1xuICAgIGNvbnN0IHNob3VsZERyYWdnaW5nID0gdGhpcy5fbm9kZUFyci5sZW5ndGggPiAxO1xuICAgIHRoaXMuX2RyYWdnaW5nID0gdGhpcy5kcmFnZ2luZyAmJiBzaG91bGREcmFnZ2luZyA/IHRydWUgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5fbm9kZUFyci5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdi53aWR0aCA9IHRoaXMudmVydGljYWwgPyAnYXV0bycgOiB0aGlzLl9yYXRpb25XaWR0aCAtIHRoaXMuY2VsbFNwYWNpbmc7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBpbmRleCA9PT0gdGhpcy5sYXN0SW5kZXggPyAtdGhpcy5fcmF0aW9uV2lkdGggOiBpbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IChpbmRleCA9PT0gdGhpcy5sYXN0SW5kZXggPyAtdGhpcy5fcmF0aW9uV2lkdGggOiBpbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoKSA6IDA7XG4gICAgICAgICAgdi5tYXJnaW4gPSB0aGlzLnZlcnRpY2FsID8gYCR7dGhpcy5jZWxsU3BhY2luZyAvIDJ9cHggYXV0b2AgOiBgYXV0byAke3RoaXMuY2VsbFNwYWNpbmcgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9ub2RlQXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX25vZGVBcnIuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICB2LndpZHRoID0gdGhpcy52ZXJ0aWNhbCA/ICdhdXRvJyA6IHRoaXMuX3JhdGlvbldpZHRoIC0gdGhpcy5jZWxsU3BhY2luZztcbiAgICAgICAgICB2LmxlZnQgPSAwO1xuICAgICAgICAgIHYudG9wID0gMDtcbiAgICAgICAgICB2Lm1hcmdpbiA9IGBhdXRvICR7dGhpcy5jZWxsU3BhY2luZyAvIDJ9cHhgO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9wbGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy5fdGltZXIgPSB0aGlzLmF1dG9wbGF5SW50ZXJ2YWxcbiAgICAgID8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2Fyb3VzZWwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYXJvdXNlbCgxKTtcbiAgICAgICAgfSwgdGhpcy5hdXRvcGxheUludGVydmFsKVxuICAgICAgOiAwO1xuICB9XG5cbiAgc3RvcFRpbWVyKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgY2Fyb3VzZWwobW92ZURpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgfSBlbHNlIGlmIChtb3ZlRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZURpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdHlsZVsndHJhbnNpdGlvbiddID0gdGhpcy5fdHJhbnNpdGlvbjtcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLmdvdG9DYXJvdXNlbCh0aGlzLmdldEFmdGVyTm9kZShmYWxzZSkpO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy5nb3RvQ2Fyb3VzZWwodGhpcy5nZXRBZnRlck5vZGUodHJ1ZSkpO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy5nb3RvQ2Fyb3VzZWwodGhpcy5nZXRBZnRlck5vZGUoZmFsc2UpKTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLmdvdG9DYXJvdXNlbCh0aGlzLmdldEFmdGVyTm9kZSh0cnVlKSk7XG4gIH1cblxuICBnZXRBZnRlck5vZGUocHJlKSB7XG4gICAgbGV0IG5leHRJbmRleDtcbiAgICBpZiAocHJlKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA8PSAwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdFN0eWxlcyh0aGlzLl9yYXRpb25XaWR0aCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX25vZGVBcnIuZm9yRWFjaCgodiwgdGVtcEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogdGhpcy5fbm9kZUFyci5sZW5ndGggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgICAgdi50b3AgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5fbm9kZUFyci5sZW5ndGggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKC10aGlzLl9yYXRpb25XaWR0aCAqICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgfSwgdGhpcy5zcGVlZCk7XG4gICAgICAgIG5leHRJbmRleCA9ICF0aGlzLmluZmluaXRlID8gbnVsbCA6IHRoaXMubGFzdEluZGV4O1xuICAgICAgICB0aGlzLmJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbTogdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCwgdG86IG5leHRJbmRleCB9KTtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgIH1cbiAgICAgIG5leHRJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggLSAxO1xuICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKG5leHRJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoICogdGhpcy50b3VjaE9iamVjdC5kaXJlY3Rpb24pO1xuICAgICAgdGhpcy5fbm9kZUFyci5mb3JFYWNoKCh2LCB0ZW1wSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKDAgPT09IHRlbXBJbmRleCAmJiBuZXh0SW5kZXggPT09IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMikge1xuICAgICAgICAgIHYubGVmdCA9IDA7XG4gICAgICAgICAgdi50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0bzogbmV4dEluZGV4IH0pO1xuICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPj0gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZVN0eWxlcyh0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5nZXRMaXN0U3R5bGVzKC0odGhpcy5sYXN0SW5kZXggKyAxKSAqIHRoaXMuX3JhdGlvbldpZHRoKTtcbiAgICAgICAgbmV4dEluZGV4ID0gIXRoaXMuaW5maW5pdGUgPyBudWxsIDogMDtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb206IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXgsIHRvOiBuZXh0SW5kZXggfSk7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4ICsgMTtcbiAgICAgIHRoaXMuc2V0U2xpZGVTdHlsZXModGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCwgMSk7XG4gICAgICB0aGlzLmdldExpc3RTdHlsZXMoLW5leHRJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoKTtcbiAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4LCB0bzogbmV4dEluZGV4IH0pO1xuICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICB9XG4gIH1cblxuICBjYWN1bGF0ZURpcmVjdGlvbkxlZnRDdXJyZW50SW5kZXgoKSB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IChwcmV2aW91c0luZGV4ICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGNhY3VsYXRlRGlyZWN0aW9uUmlnaHRDdXJyZW50SW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IChwcmV2aW91c0luZGV4IC0gMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdvdG9DYXJvdXNlbChhZnRlckluZGV4KSB7XG4gICAgaWYgKGFmdGVySW5kZXggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRDdXJyZW50SW5kZXgoKTtcblxuICAgIGlmIChhZnRlckluZGV4ID09PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbm9kZUFyci5mb3JFYWNoKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IC10aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IC10aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogaW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IGluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGggOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB0aGlzLmdldExpc3RTdHlsZXMoMCk7XG4gICAgICB9LCB0aGlzLnNwZWVkKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IGFmdGVySW5kZXg7XG4gICAgdGhpcy5hZnRlckNoYW5nZS5lbWl0KHRoaXMuY3VycmVudFNlbGVjdGVkSW5kZXgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4KCkge1xuICAgIGlmICh0aGlzLnRvdWNoT2JqZWN0LmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgdGhpcy5jYWN1bGF0ZURpcmVjdGlvbkxlZnRDdXJyZW50SW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWN1bGF0ZURpcmVjdGlvblJpZ2h0Q3VycmVudEluZGV4KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2xpZGVTdHlsZXMoaW5kZXgsIGRpcmVjdGlvbiwgeERpc3Q6IG51bWJlciA9IDApIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIHRlbXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9ub2RlQXJyLmxlbmd0aCAmJiBpbmRleCAtIDEgPT09IHRlbXBJbmRleCkge1xuICAgICAgICAgIGlmICh4RGlzdCA9PT0gMCB8fCB4RGlzdCA+IHRoaXMuX3NwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgICAgdi50b3AgPSB0aGlzLnZlcnRpY2FsID8gKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbm9kZUFyci5sZW5ndGggLSAxID09PSB0ZW1wSW5kZXggJiYgaW5kZXggIT09IDIpIHtcbiAgICAgICAgICBpZiAoeERpc3QgPT09IDAgfHwgeERpc3QgPiB0aGlzLl9zcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6ICh0aGlzLl9ub2RlQXJyLmxlbmd0aCAtIDEpICogdGhpcy5fcmF0aW9uV2lkdGg7XG4gICAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyAodGhpcy5fbm9kZUFyci5sZW5ndGggLSAxKSAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRoaXMuX25vZGVBcnIubGVuZ3RoIC0gMSAmJiB0ZW1wSW5kZXggPT09IDEgJiYgdGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxICYmIHRlbXBJbmRleCA9PT0gMCAmJiAhdGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgIHYubGVmdCA9IHRoaXMudmVydGljYWwgPyAwIDogKHRoaXMuX25vZGVBcnIubGVuZ3RoICsgdGVtcEluZGV4KSAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IHRlbXBJbmRleCAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICB0aGlzLl9ub2RlQXJyLmZvckVhY2goKHYsIHRlbXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgdGhpcy5fbm9kZUFyci5sZW5ndGggLSAxID09PSB0ZW1wSW5kZXgpIHtcbiAgICAgICAgICB2LmxlZnQgPSB0aGlzLnZlcnRpY2FsID8gMCA6IGRpcmVjdGlvbiAqIHRoaXMuX3JhdGlvbldpZHRoO1xuICAgICAgICAgIHYudG9wID0gdGhpcy52ZXJ0aWNhbCA/IGRpcmVjdGlvbiAqIHRoaXMuX3JhdGlvbldpZHRoIDogMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5fbm9kZUFyci5sZW5ndGggLSAyICYmIGluZGV4ICsgMSA9PT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEgJiYgMCA9PT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCAqIHRlbXBJbmRleDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyBkaXJlY3Rpb24gKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAxKSB7XG4gICAgICAgICAgdi5sZWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IDAgOiB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aDtcbiAgICAgICAgICB2LnRvcCA9IHRoaXMudmVydGljYWwgPyB0ZW1wSW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCA6IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldExpc3RTdHlsZXMob2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgY29uc3QgcG9zaXRpb25PZmZzZXQgPVxuICAgICAgb2Zmc2V0ICtcbiAgICAgICh0aGlzLnZlcnRpY2FsXG4gICAgICAgID8gKHRoaXMuc2xpZGVIZWlnaHQgLSB0aGlzLl9jdXJyZW50U2xpZGVIZWlnaHQpIC8gMlxuICAgICAgICA6ICh0aGlzLl9jdXJyZW50U2xpZGVXaWR0aCAtIHRoaXMuX3JhdGlvbldpZHRoKSAvIDIpIC1cbiAgICAgIHRoaXMuY2VsbFNwYWNpbmc7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5fY3VycmVudFNsaWRlSGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2Zvcm06IHRoaXMudmVydGljYWxcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMHB4LCAke3Bvc2l0aW9uT2Zmc2V0fXB4LCAwcHgpYFxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uT2Zmc2V0fXB4LCAwcHgsIDBweClgLFxuICAgICAgbWFyZ2luOiB0aGlzLnZlcnRpY2FsID8gYCR7KHRoaXMuY2VsbFNwYWNpbmcgLyAyKSAqIC0xfXB4IDBweGAgOiBgMHB4ICR7KHRoaXMuY2VsbFNwYWNpbmcgLyAyKSAqIC0xfXB4YFxuICAgIH07XG4gIH1cblxuICBzd2lwZURpcmVjdGlvbih4MSwgeDIsIHkxLCB5Mikge1xuICAgIGNvbnN0IHhEaXN0ID0geDEgLSB4MjtcbiAgICBjb25zdCB5RGlzdCA9IHkxIC0geTI7XG5cbiAgICBjb25zdCByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuICAgIGxldCBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZCgociAqIDE4MCkgLyBNYXRoLlBJKTtcbiAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPD0gNDUgJiYgc3dpcGVBbmdsZSA+PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPD0gMzYwICYmIHN3aXBlQW5nbGUgPj0gMzE1KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHN3aXBlQW5nbGUgPj0gMTM1ICYmIHN3aXBlQW5nbGUgPD0gMjI1KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3Rpb246IC0xLFxuICAgICAgICB4RGlzdDogeERpc3RcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAoc3dpcGVBbmdsZSA+PSAzNSArIDMzICYmIHN3aXBlQW5nbGUgPD0gMTM1KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaXJlY3Rpb246IC0xLFxuICAgICAgICAgIHhEaXN0OiB4RGlzdFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgeERpc3Q6IHhEaXN0XG4gICAgfTtcbiAgfVxuXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmRvdHMgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4IDogMDtcbiAgfVxuXG4gIGdldCBwYWdlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG90cyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIGdldCBkb3RpbmRpY2F0b3JTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG90cyA/IHRoaXMuaXRlbXMubGVuZ3RoID4gMSA6IHRoaXMuZG90cztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRvdWNoT2JqZWN0ID0geyBkaXJlY3Rpb246IDEgfTtcbiAgICB0aGlzLl90cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAke3RoaXMuc3BlZWQgLyAxMDAwfXNgO1xuICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuICAgICAgdGhpcy5jYXJvdXNlbEluaXQoaXRlbXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5pdENhcm91c2VsU2l6ZSgpO1xuICAgIGlmICghdGhpcy5fcmVzaXplVGltZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA8IHRoaXMuc2VsZWN0ZWRJbmRleCA/IDAgOiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5fcmVzaXplVGltZXIgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEluZGV4IDogdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggPiAxID8gKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA9PT0gc2VsZWN0ZWRJbmRleCA/IC0xIDogc2VsZWN0ZWRJbmRleCkgOiAwO1xuICAgIHRoaXMuZ2V0TGlzdFN0eWxlcygtaW5kZXggKiB0aGlzLl9yYXRpb25XaWR0aCk7XG4gICAgdGhpcy5jYXJvdXNlbEluaXQodGhpcy5pdGVtcyk7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuX2VsZS5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRhcmdldE5vZGUgPSBuYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Nhcm91c2Vsc2xpZGUnKTtcbiAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gbXV0YXRpb25zTGlzdCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2xpZGVIZWlnaHQgIT09IG5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignY2Fyb3VzZWxzbGlkZScpLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Q2Fyb3VzZWxTaXplKCk7XG4gICAgICAgICAgICB0aGlzLmdldExpc3RTdHlsZXMoLWluZGV4ICogdGhpcy5fcmF0aW9uV2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbEluaXQodGhpcy5pdGVtcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICB9XG59XG4iXX0=