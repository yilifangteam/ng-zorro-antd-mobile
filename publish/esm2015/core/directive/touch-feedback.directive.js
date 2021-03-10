import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, InjectionToken } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export const INTERFACE_TOKEN = new InjectionToken('InterfaceToken');
export class TouchFeedbackDirective {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.activeStyle = true;
        this.clickStart = new EventEmitter();
        this.clickEnd = new EventEmitter();
    }
    addClass(className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }
    removeClass(className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
    ngOnInit() {
        this._className = this.className;
    }
    touchStart() {
        if (this.activeStyle) {
            this.addClass(this._className);
            this.clickStart.emit();
        }
    }
    touchEnd() {
        if (this.activeStyle) {
            this.removeClass(this._className);
            this.clickEnd.emit();
        }
    }
}
TouchFeedbackDirective.ɵfac = function TouchFeedbackDirective_Factory(t) { return new (t || TouchFeedbackDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
TouchFeedbackDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TouchFeedbackDirective, selectors: [["", "TouchFeedbackDirective", ""]], hostBindings: function TouchFeedbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function TouchFeedbackDirective_touchstart_HostBindingHandler() { return ctx.touchStart(); })("mousedown", function TouchFeedbackDirective_mousedown_HostBindingHandler() { return ctx.touchStart(); })("touchend", function TouchFeedbackDirective_touchend_HostBindingHandler() { return ctx.touchEnd(); })("mouseup", function TouchFeedbackDirective_mouseup_HostBindingHandler() { return ctx.touchEnd(); });
    } }, inputs: { activeStyle: "activeStyle", className: "className" }, outputs: { clickStart: "clickStart", clickEnd: "clickEnd" } });
TouchFeedbackDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TouchFeedbackDirective.propDecorators = {
    className: [{ type: Input }],
    activeStyle: [{ type: Input }],
    clickStart: [{ type: Output }],
    clickEnd: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart',] }, { type: HostListener, args: ['mousedown',] }],
    touchEnd: [{ type: HostListener, args: ['touchend',] }, { type: HostListener, args: ['mouseup',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TouchFeedbackDirective, [{
        type: Directive,
        args: [{
                selector: '[TouchFeedbackDirective]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { activeStyle: [{
            type: Input
        }], clickStart: [{
            type: Output
        }], clickEnd: [{
            type: Output
        }], touchStart: [{
            type: HostListener,
            args: ['touchstart']
        }, {
            type: HostListener,
            args: ['mousedown']
        }], touchEnd: [{
            type: HostListener,
            args: ['touchend']
        }, {
            type: HostListener,
            args: ['mouseup']
        }], className: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2gtZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NvcmUvZGlyZWN0aXZlL3RvdWNoLWZlZWRiYWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBRVYsU0FBUyxFQUNULGNBQWMsRUFDZixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFNLGdCQUFnQixDQUFDLENBQUM7QUFLekUsTUFBTSxPQUFPLHNCQUFzQjtBQUFHLElBT3BDLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7QUFBSSxRQUF6RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtBQUFDLFFBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBSmpFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFFBQVksZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9ELFFBQVksYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELElBQzhFLENBQUM7QUFDL0UsSUFDVSxRQUFRLENBQUMsU0FBaUI7QUFDcEMsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2RSxJQUFFLENBQUM7QUFDSCxJQUNVLFdBQVcsQ0FBQyxTQUFpQjtBQUN2QyxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzFFLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBR0UsVUFBVTtBQUNaLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUdFLFFBQVE7QUFDVixRQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMxQixZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7a0RBekNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsMEJBQTBCLGNBQ3JDOzs7d0lBQ0k7QUFBQztBQUFnRCxZQVhwRCxVQUFVO0FBQ1YsWUFDQSxTQUFTO0FBQ1Y7QUFBRztBQUdBLHdCQU9ELEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUsseUJBQ1YsTUFBTTtBQUFLLHVCQUNYLE1BQU07QUFBSyx5QkFnQlgsWUFBWSxTQUFDLFlBQVksY0FDekIsWUFBWSxTQUFDLFdBQVc7QUFDdEIsdUJBT0YsWUFBWSxTQUFDLFVBQVUsY0FDdkIsWUFBWSxTQUFDLFNBQVM7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBJTlRFUkZBQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignSW50ZXJmYWNlVG9rZW4nKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1RvdWNoRmVlZGJhY2tEaXJlY3RpdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb3VjaEZlZWRiYWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGFjdGl2ZVN0eWxlID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGNsaWNrU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xpY2tFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKVxuICB0b3VjaFN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0eWxlKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgICB0aGlzLmNsaWNrU3RhcnQuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpXG4gIHRvdWNoRW5kKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0eWxlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgICB0aGlzLmNsaWNrRW5kLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==