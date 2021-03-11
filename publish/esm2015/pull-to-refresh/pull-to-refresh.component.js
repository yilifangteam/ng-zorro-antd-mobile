import { Input, Output, Component, ViewChild, forwardRef, TemplateRef, HostBinding, EventEmitter, HostListener, ViewContainerRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
PullToRefreshComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsbC10by1yZWZyZXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicHVsbC10by1yZWZyZXNoL3B1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CekUsTUFBTSxPQUFPLHNCQUFzQjtJQXFRakMsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFwUW5DLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBVztZQUNkLG1CQUFtQixFQUFFLHdCQUF3QjtZQUM3QyxTQUFTLEVBQUUsd0JBQXdCO1NBQ3BDLENBQUM7UUFFRixVQUFLLEdBQVE7WUFDWCxZQUFZLEVBQUUsWUFBWTtZQUMxQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7UUFFTSxxQkFBZ0IsR0FBYztZQUNwQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsUUFBUTtZQUNqQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFTSxxQkFBZ0IsR0FBYztZQUNwQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsUUFBUTtZQUNqQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFTSxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFZLEtBQUssQ0FB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QUFRLENBQUM7d0JBaUJyQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQW1FcEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkF1Q25DLFlBQVksU0FBQyxhQUFhO3FCQUkxQixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBIb3N0QmluZGluZyxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3Ige1xuICBhY3RpdmF0ZT86IGFueTtcbiAgZGVhY3RpdmF0ZT86IGFueTtcbiAgcmVsZWFzZT86IGFueTtcbiAgZmluaXNoPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQdWxsVG9SZWZyZXNoLCBuem0tcHVsbC10by1yZWZyZXNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3B1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHVsbFRvUmVmcmVzaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQdWxsVG9SZWZyZXNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB0cmFuc3Rpb25DbHM6IGFueSA9IHt9O1xuICBzdHlsZTogb2JqZWN0ID0ge1xuICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCggMCwgMCwgMCApJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCggMCwgMCwgMCApJ1xuICB9O1xuICBzdGFydFk6IG51bWJlcjtcbiAgc3RhdGU6IGFueSA9IHtcbiAgICBjdXJyZW50U3RhdGU6ICdkZWFjdGl2YXRlJyxcbiAgICBkcmFnOiBmYWxzZVxuICB9O1xuXG4gIHByaXZhdGUgX2hlYWRlckluZGljYXRvcjogSW5kaWNhdG9yID0ge1xuICAgIGFjdGl2YXRlOiAn5p2+5byA56uL5Y2z5Yi35pawJyxcbiAgICBkZWFjdGl2YXRlOiAn5LiL5ouJ5Y+v5Lul5Yi35pawJyxcbiAgICByZWxlYXNlOiAn5Yi35paw5Lit44CC44CC44CCJyxcbiAgICBmaW5pc2g6ICflrozmiJDliLfmlrAnXG4gIH07XG5cbiAgcHJpdmF0ZSBfZm9vdGVySW5kaWNhdG9yOiBJbmRpY2F0b3IgPSB7XG4gICAgYWN0aXZhdGU6ICfmnb7lvIDnq4vljbPliLfmlrAnLFxuICAgIGRlYWN0aXZhdGU6ICfkuIrmi4nlj6/ku6XliLfmlrAnLFxuICAgIHJlbGVhc2U6ICfliLfmlrDkuK3jgILjgILjgIInLFxuICAgIGZpbmlzaDogJ+WujOaIkOWIt+aWsCdcbiAgfTtcblxuICBwcml2YXRlIF9zdGFydFRpbWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2VuZFJlYWNoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2NsaWVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY3VycmVudENvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2xhc3RDb250ZW50T2Zmc2V0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogb2JqZWN0KSA9PiB7fTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uVG91Y2hlZDogKCkgPT4ge307XG5cbiAgQFZpZXdDaGlsZCgncHVsbFRvUmVmcmVzaCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgX3B1bGxUb1JlZnJlc2g6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgZGlzdGFuY2VUb1JlZnJlc2g6IG51bWJlciA9IDI1OyAvL+inpuWPkeWIt+aWsOi3neemu1xuICBASW5wdXQoKVxuICBkYW1waW5nOiBudW1iZXIgPSAxMDA7IC8vIOS4i+aLieeahOacgOWkp+i3neemu1xuICBASW5wdXQoKVxuICBlbmRSZWFjaGVkUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaFVwID0gdGhpcy5fZGlyZWN0aW9uID09PSAndXAnIHx8IHRoaXMuX2RpcmVjdGlvbiA9PT0gJyc7XG4gICAgdGhpcy5yZWZyZXNoRG93biA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8IHRoaXMuX2RpcmVjdGlvbiA9PT0gJyc7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGhlYWRlckluZGljYXRvcigpOiBJbmRpY2F0b3Ige1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJJbmRpY2F0b3I7XG4gIH1cbiAgc2V0IGhlYWRlckluZGljYXRvcih2YWx1ZTogSW5kaWNhdG9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9oZWFkZXJJbmRpY2F0b3IsIHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZm9vdGVySW5kaWNhdG9yKCk6IEluZGljYXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlckluZGljYXRvcjtcbiAgfVxuICBzZXQgZm9vdGVySW5kaWNhdG9yKHZhbHVlOiBJbmRpY2F0b3IpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2Zvb3RlckluZGljYXRvciwgdmFsdWUpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHVsbC10by1yZWZyZXNoJylcbiAgcmVmcmVzaDogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3VwZXItY29udGFpbmVyJylcbiAgY29udGFpbmVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wdWxsLXRvLXJlZnJlc2gtdXAnKVxuICByZWZyZXNoVXA6IGJvb2xlYW4gPSB0aGlzLl9kaXJlY3Rpb24gPT09ICd1cCcgfHwgdGhpcy5fZGlyZWN0aW9uID09PSAnJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wdWxsLXRvLXJlZnJlc2gtZG93bicpXG4gIHJlZnJlc2hEb3duOiBib29sZWFuID0gdGhpcy5fZGlyZWN0aW9uID09PSAnZG93bicgfHwgdGhpcy5fZGlyZWN0aW9uID09PSAnJztcblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgdG91Y2hzdGFydChlKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnZG93bicgfHwgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJycgJiYgIXRoaXMuX2VuZFJlYWNoKSkge1xuICAgICAgaWYgKHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICB0aGlzLnN0YXJ0WSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydFkgPSBlICYmIGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB0aGlzLnN0YXRlLmRyYWcgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhcnRZID0gZSAmJiBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0gJiYgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgdGhpcy5fY2xpZW50SGVpZ2h0ID0gdGhpcy5fcHVsbFRvUmVmcmVzaC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgdGhpcy5fY3VycmVudENvbnRlbnRIZWlnaHQgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgdGhpcy50cmFuc3Rpb25DbHMgPSAnJztcbiAgfVxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKVxuICB0b3VjaG1vdmUoZSkge1xuICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICdkb3duJyB8fCAodGhpcy5fZGlyZWN0aW9uID09PSAnJyAmJiAhdGhpcy5fZW5kUmVhY2gpKSB7XG4gICAgICBpZiAodGhpcy5lbGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBkaXN0YW5jZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgICAgIHRoaXMuc3RhdGUuZHJhZyA9IGRpc3RhbmNlWSA+PSAwO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZHJhZykge1xuICAgICAgICAvLyDnpoHmraLmu5rliqhcbiAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGRpc3RhbmNlWSA+IHRoaXMuZGFtcGluZykge1xuICAgICAgICAvL+W9k+i2hei/h+iuvuWumumYiOWAvOaYr++8jOe8k+aFouWinuWKoFxuICAgICAgICBkaXN0YW5jZVkgPSAoZGlzdGFuY2VZIC8gKGRpc3RhbmNlWSArIHRoaXMuZGFtcGluZykpICogdGhpcy5kYW1waW5nICogMjtcbiAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VZIDwgMCkge1xuICAgICAgICBkaXN0YW5jZVkgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGRpc3RhbmNlWSA+IHRoaXMuZGlzdGFuY2VUb1JlZnJlc2gpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSAnYWN0aXZhdGUnO1xuICAgICAgICBpZiAodGhpcy5fbmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoIDAsICcgKyBkaXN0YW5jZVkgKyAncHgsIDAgKScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCAwLCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwICknXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGlzdGFuY2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgICAvL+WQkeS4iuaLieWKqOeahOaXtuWAme+8jOWmguaenOW9k+WJjeeql+WPo+WGheWuueayoeaciea7muWIsOacgOWQju+8jOWImeS4jeWunueOsOaLluWKqOeahOWKqOS9nO+8m+WQkeS4i+a7muWKqOS4jeWunueOsOaLluWKqOWKqOS9nFxuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyh0aGlzLl9sYXN0Q29udGVudE9mZnNldCkgPCB0aGlzLl9jbGllbnRIZWlnaHQgLSB0aGlzLl9jdXJyZW50Q29udGVudEhlaWdodCAtIHRoaXMuZGlzdGFuY2VUb1JlZnJlc2ggfHxcbiAgICAgICAgZGlzdGFuY2VZID4gMFxuICAgICAgKSB7XG4gICAgICAgIC8vIOa7muWKqFxuICAgICAgICB0aGlzLnN0YXRlLmRyYWcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOS4iuaLiVxuICAgICAgICB0aGlzLnN0YXRlLmRyYWcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuZHJhZykge1xuICAgICAgICAvLyDnpoHmraLmu5rliqhcbiAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy/lpoLmnpzmu5HliqjliLDlupXpg6jkuobvvIzmu5Hliqjot53nprvpmo/nnYDmi4nliqjnmoTot53nprvlop7liqDnvJPmhaLlop7liqBcbiAgICAgIGRpc3RhbmNlWSA9IC0oZGlzdGFuY2VZIC8gKGRpc3RhbmNlWSAtIHRoaXMuZGFtcGluZykpICogdGhpcy5kYW1waW5nO1xuICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPiB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2FjdGl2YXRlJztcbiAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCAwLCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwICknLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCggMCwgJyArIGRpc3RhbmNlWSArICdweCwgMCApJ1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICB0b3VjaGVuZChlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0WSB8fCB0aGlzLnN0YXRlLmRyYWcgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRpc3RhbmNlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpID49IHRoaXMuZGlzdGFuY2VUb1JlZnJlc2gpIHtcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ3JlbGVhc2UnO1xuICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8ICh0aGlzLl9kaXJlY3Rpb24gPT09ICcnICYmICF0aGlzLl9lbmRSZWFjaCkpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb1JlZnJlc2ggKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSgtdGhpcy5kaXN0YW5jZVRvUmVmcmVzaCAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSAnZmluaXNoJztcbiAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnZG93bicgfHwgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJycgJiYgIXRoaXMuX2VuZFJlYWNoKSkge1xuICAgICAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoJ2Rvd24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoLXRoaXMuZGlzdGFuY2VUb1JlZnJlc2ggLSAxKTtcbiAgICAgICAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCd1cCcpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2RlYWN0aXZhdGUnO1xuICAgICAgICAgIGlmICh0aGlzLl9uZ01vZGVsT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVZKDApO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnKVxuICB0b3VjaGNhbmNlbCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgc2Nyb2xsKGV2dCkge1xuICAgIHRoaXMuX2VuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSBldnQudGFyZ2V0LnNjcm9sbFRvcDtcbiAgICB0aGlzLl9sYXN0Q29udGVudE9mZnNldCA9IGNvbnRlbnRPZmZzZXQ7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIGlmIChjb250ZW50T2Zmc2V0ID4gMCAmJiBldnQudGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSBldnQudGFyZ2V0LnNjcm9sbEhlaWdodCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbmRSZWFjaCA9IHRydWU7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbmRSZWFjaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZW5kUmVhY2hlZFJlZnJlc2ggfHwgdGhpcy5fZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY29udGVudE9mZnNldCA+IDAgJiZcbiAgICAgIGV2dC50YXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5lbGUubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiBldnQudGFyZ2V0LnNjcm9sbEhlaWdodCAtIHRoaXMuZGlzdGFuY2VUb1JlZnJlc2ggJiZcbiAgICAgIHRoaXMuX2VuZFRpbWUgLSB0aGlzLl9zdGFydFRpbWUgPj0gMTAwXG4gICAgKSB7XG4gICAgICB0aGlzLl9zdGFydFRpbWUgPSB0aGlzLl9lbmRUaW1lO1xuICAgICAgaWYgKHRoaXMucmVmcmVzaGluZykge1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9ICdyZWxlYXNlJztcbiAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmVuZFJlYWNoZWRSZWZyZXNoKSB7XG4gICAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdCgnZW5kUmVhY2hlZFJlZnJlc2gnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSAnZmluaXNoJztcbiAgICAgICAgICBpZiAodGhpcy5fbmdNb2RlbE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaGluZykge1xuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gJ2ZpbmlzaCc7XG4gICAgICAgICAgaWYgKHRoaXMuX25nTW9kZWxPbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZTogRWxlbWVudFJlZikge31cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICB0cmFuc2xhdGVZKGRpc3RhbmNlWSkge1xuICAgIHRoaXMudHJhbnN0aW9uQ2xzID0gJ2FtLXB1bGwtdG8tcmVmcmVzaC10cmFuc2l0aW9uJztcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCAwLCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwICknLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoIDAsICcgKyBkaXN0YW5jZVkgKyAncHgsIDAgKSdcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogb2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0YXRlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG9iamVjdCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19