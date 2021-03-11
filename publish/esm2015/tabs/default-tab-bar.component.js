import { Component, Input, QueryList, Renderer2, ViewChild, ElementRef, HostBinding, ContentChildren, ChangeDetectorRef } from '@angular/core';
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
DefaultTabBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'DefaultTabBar, nzm-default-tab-bar',
                template: "<div\n  class=\"{{ prefixCls }} {{ prefixCls }}-{{ tabBarPosition }}\"\n  [ngClass]=\"{ 'am-tabs-default-bar-animated': animated }\"\n  [ngStyle]=\"{ backgroundColor: tabBarBackgroundColor || '#FFF' }\"\n>\n  <div *ngIf=\"showPrev\" class=\"{{ prefixCls }}-prevpage\"></div>\n  <div\n    #TabsBarSwipe\n    class=\"{{ prefixCls }}-content\"\n    [ngStyle]=\"tabsBarStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (cdkObserveContent)=\"onContentChange()\"\n  >\n    <ng-content></ng-content>\n    <div class=\"{{ prefixCls }}-underline\" [ngStyle]=\"inkBarStyle\"></div>\n  </div>\n  <div *ngIf=\"showNext\" class=\"{{ prefixCls }}-nextpage\"></div>\n</div>\n"
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10YWItYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidGFicy9kZWZhdWx0LXRhYi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBRVgsZUFBZSxFQUNmLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sc0JBQXNCO0lBaURqQyxZQUFvQixTQUFvQixFQUFVLElBQXVCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQWhEekUsY0FBUyxHQUFXLHFCQUFxQixDQUFDO1FBQzFDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBVyxDQUFDLENBQUM7UUFDcEMsNkJBQXdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBU25DLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUl6QiwwQkFBcUIsR0FBVyxNQUFNLENBQUM7UUFFdkMsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsbUJBQWMsR0FBdUIsS0FBSyxDQUFDO1FBZ0IzQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBK01WLGVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFH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SztvQ0FFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQWNMLFdBQVcsU0FBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiQmFyUG9zaXRpb25UeXBlIH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdEZWZhdWx0VGFiQmFyLCBuem0tZGVmYXVsdC10YWItYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQtdGFiLWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRhYkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10YWJzLWRlZmF1bHQtYmFyJztcbiAgaW5rQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICB0YWJzQmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICBzaG93UHJldjogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93TmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RlZEtleTogbnVtYmVyID0gMDtcbiAgaW5rQmFyT2ZmU2V0OiBudW1iZXIgPSAwO1xuICBpbmtCYXJMZW5ndGg6IG51bWJlciA9IDA7XG4gIHRhYkJhck5hdlN3aXBlZFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICB0YWJCYXJOYXZTd2lwaW5nUG9zaXRpb246IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICBAQ29udGVudENoaWxkcmVuKCdUYWJUaXRsZScpXG4gIHRhYlRpdGxlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBWaWV3Q2hpbGQoJ1RhYnNCYXJTd2lwZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRhYnNCYXJTd2lwZTogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBwYWdlOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKVxuICBhbmltYXRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclVuZGVybGluZVN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpXG4gIHRhYkJhckJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyNGRkYnO1xuICBASW5wdXQoKVxuICB0YWJUaXRsZVNpemU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclBvc2l0aW9uOiBUYWJCYXJQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZVRhYigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkS2V5O1xuICB9XG4gIHNldCBhY3RpdmVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEtleSA9IGluZGV4O1xuICAgICAgaWYgKHRoaXMudGFiVGl0bGVzICYmIHRoaXMudGFiVGl0bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRUYWJCYXJTdHlsZUNlbnRlcigpO1xuICAgICAgICB0aGlzLnNldElua0JhclN0YXR1cyh0aGlzLnNlbGVjdGVkS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtdGFiLWJhci13cmFwJylcbiAgdGFiQmFyV3JhcCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPiAwICYmXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplICogdGhpcy50YWJUaXRsZXMubGVuZ3RoID5cbiAgICAgICAgICAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb25cbiAgICAgICAgICAgID8gdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkpIHx8XG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPD0gMCAmJiB0aGlzLnBhZ2UgPCB0aGlzLnRhYlRpdGxlcy5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgZXZlbnQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPVxuICAgICAgICAgIGV2ZW50ICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChcbiAgICAgICh0aGlzLnRhYlRpdGxlU2l6ZSA+IDAgJiZcbiAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgKiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggPlxuICAgICAgICAgICgndG9wJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbiB8fCAnYm90dG9tJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvblxuICAgICAgICAgICAgPyB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgICAgICA6IHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSkgfHxcbiAgICAgICh0aGlzLnRhYlRpdGxlU2l6ZSA8PSAwICYmIHRoaXMucGFnZSA8IHRoaXMudGFiVGl0bGVzLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICgndG9wJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbiB8fCAnYm90dG9tJyA9PT0gdGhpcy50YWJCYXJQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNldFRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbihcbiAgICAgICAgICBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fc3RhcnRQb3NpdGlvbixcbiAgICAgICAgICB0aGlzLnRhYlRpdGxlcy5maXJzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJzBtcycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uICsgJ3B4LCAwcHgsIDBweCknLFxuICAgICAgICAgIHdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiArICdweCwgMHB4LCAwcHgpJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRUYWJCYXJOYXZTd2lwaW5nUG9zaXRpb24oXG4gICAgICAgICAgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuX3N0YXJ0UG9zaXRpb24sXG4gICAgICAgICAgdGhpcy50YWJUaXRsZXMuZmlyc3QubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJzBtcycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgJyArIHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uICsgJ3B4LCAwcHgpJyxcbiAgICAgICAgICB3ZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb24gKyAncHgsIDBweCknXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZCgpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPiAwICYmXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplICogdGhpcy50YWJUaXRsZXMubGVuZ3RoID5cbiAgICAgICAgICAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb25cbiAgICAgICAgICAgID8gdGhpcy50YWJzQmFyU3dpcGUubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkpIHx8XG4gICAgICAodGhpcy50YWJUaXRsZVNpemUgPD0gMCAmJiB0aGlzLnBhZ2UgPCB0aGlzLnRhYlRpdGxlcy5sZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlKCkge1xuICAgIHRoaXMuc2V0VGFic1N0eWxlKCk7XG4gICAgdGhpcy5zZXRJbmtCYXJTdGF0dXModGhpcy5zZWxlY3RlZEtleSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZXRUYWJzU3R5bGUoKTtcbiAgICB0aGlzLnNldFRhYkJhclN0eWxlQ2VudGVyKCk7XG4gICAgdGhpcy5zZXRJbmtCYXJTdGF0dXModGhpcy5zZWxlY3RlZEtleSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRhYnNTdHlsZSgpIHtcbiAgICBpZiAodGhpcy50YWJUaXRsZXMgJiYgdGhpcy50YWJUaXRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCd0b3AnID09PSB0aGlzLnRhYkJhclBvc2l0aW9uIHx8ICdib3R0b20nID09PSB0aGlzLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMudGFiVGl0bGVzLmZvckVhY2goKHRhYlRpdGxlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRhYlRpdGxlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnd2lkdGgnLFxuICAgICAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgPiAwID8gdGhpcy50YWJUaXRsZVNpemUgKyAncHgnIDogdGhpcy5nZXRUYWJTaXplKHRoaXMucGFnZSwgdGhpcy50YWJUaXRsZXMubGVuZ3RoKSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJUaXRsZXMuZm9yRWFjaCgodGFiVGl0bGU6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGFiVGl0bGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy50YWJUaXRsZVNpemUgPiAwID8gdGhpcy50YWJUaXRsZVNpemUgKyAncHgnIDogdGhpcy5nZXRUYWJTaXplKHRoaXMucGFnZSwgdGhpcy50YWJUaXRsZXMubGVuZ3RoKSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFiQmFyU3R5bGVDZW50ZXIoKSB7XG4gICAgaWYgKCd0b3AnID09PSB0aGlzLnRhYkJhclBvc2l0aW9uIHx8ICdib3R0b20nID09PSB0aGlzLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKFxuICAgICAgICB0aGlzLnRhYlRpdGxlU2l6ZSA+IDBcbiAgICAgICAgICA/IHRoaXMudGFiVGl0bGVTaXplXG4gICAgICAgICAgOiB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpLFxuICAgICAgICB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICApO1xuICAgICAgdGhpcy50YWJzQmFyU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgJ3B4LCAwcHgsIDBweCknLFxuICAgICAgICB3ZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiArICcsIDBweCwgMHB4KSdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VGFiQmFyTmF2U3dpcGVkUG9zaXRpb24oXG4gICAgICAgIHRoaXMudGFiVGl0bGVTaXplID4gMFxuICAgICAgICAgID8gdGhpcy50YWJUaXRsZVNpemVcbiAgICAgICAgICA6IHRoaXMudGFic0JhclN3aXBlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpLFxuICAgICAgICB0aGlzLnRhYnNCYXJTd2lwZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgKTtcbiAgICAgIHRoaXMudGFic0JhclN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiArICdweCwgMHB4KScsXG4gICAgICAgIHdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsICcgKyB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgJ3B4LCAwcHgpJ1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldElua0JhclN0YXR1cyhrZXk6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYlRpdGxlcyAmJiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoJ3RvcCcgPT09IHRoaXMudGFiQmFyUG9zaXRpb24gfHwgJ2JvdHRvbScgPT09IHRoaXMudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5pbmtCYXJPZmZTZXQgPSB0aGlzLnRhYlRpdGxlcy50b0FycmF5KClba2V5XS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMuaW5rQmFyTGVuZ3RoID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgdGhpcy5pbmtCYXJTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5pbmtCYXJMZW5ndGgsXG4gICAgICAgICAgbGVmdDpcbiAgICAgICAgICAgIHRoaXMudGFiVGl0bGVTaXplID4gMFxuICAgICAgICAgICAgICA/IHRoaXMuc2VsZWN0ZWRLZXkgKiB0aGlzLnRhYlRpdGxlU2l6ZSArICdweCdcbiAgICAgICAgICAgICAgOiAodGhpcy5zZWxlY3RlZEtleSAqIDEwMCkgLyBNYXRoLm1pbih0aGlzLnRhYlRpdGxlcy5sZW5ndGgsIHRoaXMucGFnZSkgKyAnJSdcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmlua0JhclN0eWxlLCB0aGlzLnRhYkJhclVuZGVybGluZVN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5rQmFyT2ZmU2V0ID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuaW5rQmFyTGVuZ3RoID0gdGhpcy50YWJUaXRsZXMudG9BcnJheSgpW2tleV0ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5rQmFyU3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmlua0Jhckxlbmd0aCxcbiAgICAgICAgICB0b3A6XG4gICAgICAgICAgICB0aGlzLnRhYlRpdGxlU2l6ZSA+IDBcbiAgICAgICAgICAgICAgPyB0aGlzLnNlbGVjdGVkS2V5ICogdGhpcy50YWJUaXRsZVNpemUgKyAncHgnXG4gICAgICAgICAgICAgIDogKHRoaXMuc2VsZWN0ZWRLZXkgKiAxMDApIC8gTWF0aC5taW4odGhpcy50YWJUaXRsZXMubGVuZ3RoLCB0aGlzLnBhZ2UpICsgJyUnXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5pbmtCYXJTdHlsZSwgdGhpcy50YWJCYXJVbmRlcmxpbmVTdHlsZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uKHN3aXBpbmdEaXN0YW5jZTogbnVtYmVyLCBzd2lwaW5nSXRlbUxlbmd0aDogbnVtYmVyLCB2aWV3cG9ydExlbmd0aDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2UgPiAwKSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiA9IDA7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2UgPFxuICAgICAgdmlld3BvcnRMZW5ndGggLSBzd2lwaW5nSXRlbUxlbmd0aCAqIHRoaXMudGFiVGl0bGVzLmxlbmd0aFxuICAgICkge1xuICAgICAgdGhpcy50YWJCYXJOYXZTd2lwaW5nUG9zaXRpb24gPSB2aWV3cG9ydExlbmd0aCAtIHN3aXBpbmdJdGVtTGVuZ3RoICogdGhpcy50YWJUaXRsZXMubGVuZ3RoO1xuICAgICAgdGhpcy5zaG93TmV4dCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYkJhck5hdlN3aXBpbmdQb3NpdGlvbiA9IHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gKyBzd2lwaW5nRGlzdGFuY2U7XG4gICAgICB0aGlzLnNob3dOZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiQmFyTmF2U3dpcGluZ1Bvc2l0aW9uIDwgMCkge1xuICAgICAgdGhpcy5zaG93UHJldiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1ByZXYgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKHN3aXBpbmdJdGVtTGVuZ3RoOiBudW1iZXIsIHZpZXdwb3J0TGVuZ3RoOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEtleSAqIHN3aXBpbmdJdGVtTGVuZ3RoICsgdGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiA8PSAwKSB7XG4gICAgICBpZiAoMCA9PT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gPSAoMSAtIHRoaXMuc2VsZWN0ZWRLZXkpICogc3dpcGluZ0l0ZW1MZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEtleSArIDEpICogc3dpcGluZ0l0ZW1MZW5ndGggPj0gdmlld3BvcnRMZW5ndGggLSB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy50YWJUaXRsZXMubGVuZ3RoIC0gMSA9PT0gdGhpcy5zZWxlY3RlZEtleSkge1xuICAgICAgICB0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uID0gKHZpZXdwb3J0TGVuZ3RoIC8gc3dpcGluZ0l0ZW1MZW5ndGggLSB0aGlzLnNlbGVjdGVkS2V5IC0gMSkgKiBzd2lwaW5nSXRlbUxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiQmFyTmF2U3dpcGVkUG9zaXRpb24gPSAodmlld3BvcnRMZW5ndGggLyBzd2lwaW5nSXRlbUxlbmd0aCAtIHRoaXMuc2VsZWN0ZWRLZXkgLSAyKSAqIHN3aXBpbmdJdGVtTGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50YWJCYXJOYXZTd2lwZWRQb3NpdGlvbiA8IDApIHtcbiAgICAgIHRoaXMuc2hvd1ByZXYgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcmV2ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYkJhck5hdlN3aXBlZFBvc2l0aW9uICsgc3dpcGluZ0l0ZW1MZW5ndGggKiB0aGlzLnRhYlRpdGxlcy5sZW5ndGggLSB2aWV3cG9ydExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2hvd05leHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dOZXh0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYWJTaXplID0gKHBhZ2U6IG51bWJlciwgdGFiTGVuZ3RoOiBudW1iZXIpID0+IDEwMCAvIE1hdGgubWluKHBhZ2UsIHRhYkxlbmd0aCk7XG59XG4iXX0=