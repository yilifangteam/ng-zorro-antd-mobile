import { Component, ViewEncapsulation, Input, HostBinding, Output, EventEmitter, ElementRef } from '@angular/core';
export class DrawerComponent {
    constructor(_el) {
        this._el = _el;
        this.prefixCls = 'am-drawer';
        this.sidebarStyleFinal = {};
        this.contentStyleFinal = {};
        this.overlayStyleFinal = {};
        this.sidebarWidth = 0;
        this.sidebarHeight = 0;
        this.sidebarTop = 0;
        this.dragHandleTop = 0;
        this.touchIdentifier = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchCurrentX = null;
        this.touchCurrentY = null;
        this.touchSupported = typeof window === 'object' && 'ontouchstart' in window;
        this._docked = false;
        this._open = false;
        this._position = 'left';
        this.sidebarStyle = {};
        this.contentStyle = {};
        this.overlayStyle = {};
        this.dragHandleStyle = {};
        this.transitions = true;
        this.touch = true;
        this.enableDragHandle = false;
        this.dragToggleDistance = 30;
        this.onOpenChange = new EventEmitter();
        this.am = true;
        this.left = this._position === 'left';
        this.right = this._position === 'right';
        this.top = this._position == 'top';
        this.bottom = this._position == 'bottom';
        this.dockedCls = this._docked;
        this.openCls = this._open;
    }
    get docked() {
        return this._docked;
    }
    set docked(v) {
        this._docked = v;
        this.dockedCls = v;
    }
    get open() {
        return this._open;
    }
    set open(v) {
        this._open = v;
        this.openCls = v;
    }
    set position(v) {
        this._position = v;
        this.right = false;
        this.left = false;
        this.top = false;
        this.bottom = false;
        switch (v) {
            case 'right':
                this.right = true;
                break;
            case 'left':
                this.left = true;
                break;
            case 'top':
                this.top = true;
                break;
            case 'bottom':
                this.bottom = true;
                break;
        }
    }
    onOverlayClicked() {
        if (this._open) {
            this.onOpenChange.emit(true);
        }
    }
    isTouching() {
        return this.touchIdentifier !== null;
    }
    onTouchStart(event) {
        const touch = event.changedTouches[0];
        this.touchIdentifier = touch.identifier;
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.touchCurrentX = touch.clientX;
        this.touchCurrentY = touch.clientY;
    }
    onTouchMove(ev) {
        for (let ind = 0; ind < ev.changedTouches.length; ind++) {
            if (ev.changedTouches[ind].identifier === this.touchIdentifier) {
                this.touchCurrentX = ev.changedTouches[ind].clientX;
                this.touchCurrentY = ev.changedTouches[ind].clientY;
                break;
            }
        }
        this.update();
    }
    onTouchEnd() {
        const touchWidth = this.touchSidebarWidth();
        if (!this._open && touchWidth > this.dragToggleDistance) {
            this.onOpenChange.emit(!this._open);
        }
        const touchHeight = this.touchSidebarHeight();
        if (!this._open && touchHeight > this.dragToggleDistance) {
            this.onOpenChange.emit(!this._open);
        }
        this.touchIdentifier = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchCurrentX = null;
        this.touchCurrentY = null;
        this.update();
    }
    saveSidebarSize() {
        const sidebar = this._el.nativeElement.querySelector('#sidebar');
        const dragHandle = this._el.nativeElement.querySelector('#dragHandle');
        const width = sidebar.offsetWidth;
        const height = sidebar.offsetHeight;
        const sidebarTop = this.getOffset(sidebar).top;
        const dragHandleTop = this.getOffset(dragHandle).top;
        if (width !== this.sidebarWidth) {
            this.sidebarWidth = width;
        }
        if (height !== this.sidebarHeight) {
            this.sidebarHeight = height;
        }
        if (sidebarTop !== this.sidebarTop) {
            this.sidebarTop = sidebarTop;
        }
        if (dragHandleTop !== this.dragHandleTop) {
            this.dragHandleTop = dragHandleTop;
        }
    }
    touchSidebarWidth() {
        if (this._position === 'right') {
            return Math.min(window.innerWidth - this.touchCurrentX, this.sidebarWidth);
        }
        if (this._position === 'left') {
            return Math.min(this.touchCurrentX, this.sidebarWidth);
        }
    }
    touchSidebarHeight() {
        if (this._position === 'bottom') {
            return Math.min(this._el.nativeElement.offsetHeight - this.touchCurrentY + this._el.nativeElement.offsetTop, this.sidebarHeight);
        }
        if (this._position === 'top') {
            return Math.min(this.touchCurrentY - this.dragHandleTop, this.sidebarHeight);
        }
    }
    renderStyle({ sidebarStyle, isTouching, overlayStyle, contentStyle }) {
        if (this._position === 'right' || this._position === 'left') {
            sidebarStyle.transform = `translateX(0%)`;
            sidebarStyle.WebkitTransform = `translateX(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarWidth() / this.sidebarWidth;
                // slide open to what we dragged
                if (this._position === 'right') {
                    sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`;
                }
                if (this._position === 'left') {
                    sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`;
                }
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this._position] = `${this.sidebarWidth}px`;
            }
        }
        if (this._position === 'top' || this._position === 'bottom') {
            sidebarStyle.transform = `translateY(0%)`;
            sidebarStyle.WebkitTransform = `translateY(0%)`;
            if (isTouching) {
                const percentage = this.touchSidebarHeight() / this.sidebarHeight;
                if (this._position === 'bottom') {
                    sidebarStyle.transform = `translateY(${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(${(1 - percentage) * 100}%)`;
                }
                if (this._position === 'top') {
                    sidebarStyle.transform = `translateY(-${(1 - percentage) * 100}%)`;
                    sidebarStyle.WebkitTransform = `translateY(-${(1 - percentage) * 100}%)`;
                }
                overlayStyle.opacity = percentage;
                overlayStyle.visibility = 'visible';
            }
            if (contentStyle) {
                contentStyle[this._position] = `${this.sidebarHeight}px`;
            }
        }
    }
    update() {
        const sidebarStyle = Object.assign({}, this.sidebarStyle);
        const contentStyle = Object.assign({}, this.contentStyle);
        const overlayStyle = Object.assign({}, this.overlayStyle);
        if (this.isTouching()) {
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: true,
                contentStyle: undefined,
                overlayStyle: overlayStyle
            });
        }
        else if (this._docked) {
            this.dockedCls = true;
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: undefined,
                contentStyle: contentStyle,
                overlayStyle: undefined
            });
        }
        else if (this._open) {
            this.openCls = true;
            this.renderStyle({
                sidebarStyle: sidebarStyle,
                isTouching: undefined,
                contentStyle: undefined,
                overlayStyle: undefined
            });
            overlayStyle.opacity = 1;
            overlayStyle.visibility = 'visible';
        }
        if (this.isTouching() || !this.transitions) {
            sidebarStyle.transition = 'none';
            sidebarStyle.WebkitTransition = 'none';
            contentStyle.transition = 'none';
            overlayStyle.transition = 'none';
        }
        this.sidebarStyleFinal = sidebarStyle;
        this.contentStyleFinal = contentStyle;
        this.overlayStyleFinal = overlayStyle;
    }
    getOffset(ele) {
        let el = ele;
        let _x = 0;
        let _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
    ngAfterViewChecked() {
        if (!this.isTouching()) {
            this.saveSidebarSize();
        }
    }
    ngOnChanges() {
        this.update();
    }
}
DrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'Drawer, nzm-drawer',
                template: "<div class=\"am-drawer-sidebar\" [ngStyle]=\"sidebarStyleFinal\" id=\"sidebar\">\n  <ng-template [ngTemplateOutlet]=\"sidebar\"></ng-template>\n</div>\n<div\n  role=\"presentation\"\n  class=\"{{ prefixCls }}-overlay\"\n  ref=\"overlay\"\n  [ngStyle]=\"overlayStyleFinal\"\n  (click)=\"onOverlayClicked()\"\n></div>\n<div class=\"{{ prefixCls }}-content\" [ngStyle]=\"contentStyleFinal\" ref=\"content\">\n  <div\n    *ngIf=\"touch && touchSupported && !open && !docked && enableDragHandle\"\n    id=\"dragHandle\"\n    class=\"{{ prefixCls }}-draghandle\"\n    [ngStyle]=\"dragHandleStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (touchcancle)=\"onTouchEnd()\"\n  ></div>\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DrawerComponent.ctorParameters = () => [
    { type: ElementRef }
];
DrawerComponent.propDecorators = {
    sidebar: [{ type: Input }],
    sidebarStyle: [{ type: Input }],
    contentStyle: [{ type: Input }],
    overlayStyle: [{ type: Input }],
    dragHandleStyle: [{ type: Input }],
    transitions: [{ type: Input }],
    touch: [{ type: Input }],
    enableDragHandle: [{ type: Input }],
    dragToggleDistance: [{ type: Input }],
    docked: [{ type: Input }],
    open: [{ type: Input }],
    position: [{ type: Input }],
    onOpenChange: [{ type: Output }],
    am: [{ type: HostBinding, args: ['class.am-drawer',] }],
    left: [{ type: HostBinding, args: ['class.am-drawer-left',] }],
    right: [{ type: HostBinding, args: ['class.am-drawer-right',] }],
    top: [{ type: HostBinding, args: ['class.am-drawer-top',] }],
    bottom: [{ type: HostBinding, args: ['class.am-drawer-bottom',] }],
    dockedCls: [{ type: HostBinding, args: ['class.am-drawer-docked',] }],
    openCls: [{ type: HostBinding, args: ['class.am-drawer-open',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZHJhd2VyL2RyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFdBQVcsRUFDWCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFHWCxNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sZUFBZTtJQThGMUIsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUE3Rm5DLGNBQVMsR0FBVyxXQUFXLENBQUM7UUFDaEMsc0JBQWlCLEdBQXlCLEVBQUUsQ0FBQztRQUM3QyxzQkFBaUIsR0FBeUIsRUFBRSxDQUFDO1FBQzdDLHNCQUFpQixHQUF5QixFQUFFLENBQUM7UUFDN0MsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixvQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixnQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixnQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFZLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxjQUFjLElBQUksTUFBTSxDQUFDO1FBRXpFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQVcsTUFBTSxDQUFDO1FBS25DLGlCQUFZLEdBQXlCLEVBQUUsQ0FBQztRQUV4QyxpQkFBWSxHQUF5QixFQUFFLENBQUM7UUFFeEMsaUJBQVksR0FBeUIsRUFBRSxDQUFDO1FBRXhDLG9CQUFlLEdB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QUFFLElBQUksRUFBRSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDbEMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDdEI7UUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQTlTRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsc3lCQUFzQztnQkFDdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQVRDLFVBQVU7OztzQkE4QlQsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzs4QkFFTCxLQUFLOzBCQUVMLEtBQUs7b0JBRUwsS0FBSzsrQkFFTCxLQUFLO2lDQUVMLEtBQUs7cUJBRUwsS0FBSzttQkFRTCxLQUFLO3VCQVFMLEtBQUs7MkJBc0JMLE1BQU07aUJBR04sV0FBVyxTQUFDLGlCQUFpQjttQkFFN0IsV0FBVyxTQUFDLHNCQUFzQjtvQkFFbEMsV0FBVyxTQUFDLHVCQUF1QjtrQkFFbkMsV0FBVyxTQUFDLHFCQUFxQjtxQkFFakMsV0FBVyxTQUFDLHdCQUF3Qjt3QkFFcEMsV0FBVyxTQUFDLHdCQUF3QjtzQkFFcEMsV0FBVyxTQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRHJhd2VyLCBuem0tZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzIHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tZHJhd2VyJztcbiAgc2lkZWJhclN0eWxlRmluYWw6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XG4gIGNvbnRlbnRTdHlsZUZpbmFsOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBvdmVybGF5U3R5bGVGaW5hbDogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgc2lkZWJhcldpZHRoOiBudW1iZXIgPSAwO1xuICBzaWRlYmFySGVpZ2h0OiBudW1iZXIgPSAwO1xuICBzaWRlYmFyVG9wOiBudW1iZXIgPSAwO1xuICBkcmFnSGFuZGxlVG9wOiBudW1iZXIgPSAwO1xuICB0b3VjaElkZW50aWZpZXI6IG51bWJlciA9IG51bGw7XG4gIHRvdWNoU3RhcnRYOiBudW1iZXIgPSBudWxsO1xuICB0b3VjaFN0YXJ0WTogbnVtYmVyID0gbnVsbDtcbiAgdG91Y2hDdXJyZW50WDogbnVtYmVyID0gbnVsbDtcbiAgdG91Y2hDdXJyZW50WTogbnVtYmVyID0gbnVsbDtcbiAgdG91Y2hTdXBwb3J0ZWQ6IGJvb2xlYW4gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5cbiAgcHJpdmF0ZSBfZG9ja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IHN0cmluZyA9ICdsZWZ0JztcblxuICBASW5wdXQoKVxuICBzaWRlYmFyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHNpZGViYXJTdHlsZTogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgQElucHV0KClcbiAgY29udGVudFN0eWxlOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBASW5wdXQoKVxuICBvdmVybGF5U3R5bGU6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XG4gIEBJbnB1dCgpXG4gIGRyYWdIYW5kbGVTdHlsZTogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgQElucHV0KClcbiAgdHJhbnNpdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICB0b3VjaDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGVuYWJsZURyYWdIYW5kbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZHJhZ1RvZ2dsZURpc3RhbmNlOiBudW1iZXIgPSAzMDtcbiAgQElucHV0KClcbiAgZ2V0IGRvY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9ja2VkO1xuICB9XG4gIHNldCBkb2NrZWQodikge1xuICAgIHRoaXMuX2RvY2tlZCA9IHY7XG4gICAgdGhpcy5kb2NrZWRDbHMgPSB2O1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBvcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG4gIHNldCBvcGVuKHYpIHtcbiAgICB0aGlzLl9vcGVuID0gdjtcbiAgICB0aGlzLm9wZW5DbHMgPSB2O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2KSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2O1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnRvcCA9IGZhbHNlO1xuICAgIHRoaXMuYm90dG9tID0gZmFsc2U7XG4gICAgc3dpdGNoICh2KSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRoaXMudG9wID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0aGlzLmJvdHRvbSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25PcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZHJhd2VyJylcbiAgYW06IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlci1sZWZ0JylcbiAgbGVmdDogYm9vbGVhbiA9IHRoaXMuX3Bvc2l0aW9uID09PSAnbGVmdCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZHJhd2VyLXJpZ2h0JylcbiAgcmlnaHQ6IGJvb2xlYW4gPSB0aGlzLl9wb3NpdGlvbiA9PT0gJ3JpZ2h0JztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1kcmF3ZXItdG9wJylcbiAgdG9wOiBib29sZWFuID0gdGhpcy5fcG9zaXRpb24gPT0gJ3RvcCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZHJhd2VyLWJvdHRvbScpXG4gIGJvdHRvbTogYm9vbGVhbiA9IHRoaXMuX3Bvc2l0aW9uID09ICdib3R0b20nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlci1kb2NrZWQnKVxuICBkb2NrZWRDbHM6IGJvb2xlYW4gPSB0aGlzLl9kb2NrZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZHJhd2VyLW9wZW4nKVxuICBvcGVuQ2xzOiBib29sZWFuID0gdGhpcy5fb3BlbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBvbk92ZXJsYXlDbGlja2VkKCkge1xuICAgIGlmICh0aGlzLl9vcGVuKSB7XG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzVG91Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG91Y2hJZGVudGlmaWVyICE9PSBudWxsO1xuICB9XG5cbiAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB0aGlzLnRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy50b3VjaEN1cnJlbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLnRvdWNoQ3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXYpIHtcbiAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCBldi5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGluZCsrKSB7XG4gICAgICBpZiAoZXYuY2hhbmdlZFRvdWNoZXNbaW5kXS5pZGVudGlmaWVyID09PSB0aGlzLnRvdWNoSWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLnRvdWNoQ3VycmVudFggPSBldi5jaGFuZ2VkVG91Y2hlc1tpbmRdLmNsaWVudFg7XG4gICAgICAgIHRoaXMudG91Y2hDdXJyZW50WSA9IGV2LmNoYW5nZWRUb3VjaGVzW2luZF0uY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvblRvdWNoRW5kKCkge1xuICAgIGNvbnN0IHRvdWNoV2lkdGggPSB0aGlzLnRvdWNoU2lkZWJhcldpZHRoKCk7XG4gICAgaWYgKCF0aGlzLl9vcGVuICYmIHRvdWNoV2lkdGggPiB0aGlzLmRyYWdUb2dnbGVEaXN0YW5jZSkge1xuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UuZW1pdCghdGhpcy5fb3Blbik7XG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2hIZWlnaHQgPSB0aGlzLnRvdWNoU2lkZWJhckhlaWdodCgpO1xuICAgIGlmICghdGhpcy5fb3BlbiAmJiB0b3VjaEhlaWdodCA+IHRoaXMuZHJhZ1RvZ2dsZURpc3RhbmNlKSB7XG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZS5lbWl0KCF0aGlzLl9vcGVuKTtcbiAgICB9XG4gICAgdGhpcy50b3VjaElkZW50aWZpZXIgPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMudG91Y2hDdXJyZW50WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaEN1cnJlbnRZID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2F2ZVNpZGViYXJTaXplKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgY29uc3QgZHJhZ0hhbmRsZSA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdIYW5kbGUnKTtcblxuICAgIGNvbnN0IHdpZHRoID0gc2lkZWJhci5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBzaWRlYmFyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBzaWRlYmFyVG9wID0gdGhpcy5nZXRPZmZzZXQoc2lkZWJhcikudG9wO1xuICAgIGNvbnN0IGRyYWdIYW5kbGVUb3AgPSB0aGlzLmdldE9mZnNldChkcmFnSGFuZGxlKS50b3A7XG5cbiAgICBpZiAod2lkdGggIT09IHRoaXMuc2lkZWJhcldpZHRoKSB7XG4gICAgICB0aGlzLnNpZGViYXJXaWR0aCA9IHdpZHRoO1xuICAgIH1cbiAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLnNpZGViYXJIZWlnaHQpIHtcbiAgICAgIHRoaXMuc2lkZWJhckhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgaWYgKHNpZGViYXJUb3AgIT09IHRoaXMuc2lkZWJhclRvcCkge1xuICAgICAgdGhpcy5zaWRlYmFyVG9wID0gc2lkZWJhclRvcDtcbiAgICB9XG4gICAgaWYgKGRyYWdIYW5kbGVUb3AgIT09IHRoaXMuZHJhZ0hhbmRsZVRvcCkge1xuICAgICAgdGhpcy5kcmFnSGFuZGxlVG9wID0gZHJhZ0hhbmRsZVRvcDtcbiAgICB9XG4gIH1cblxuICB0b3VjaFNpZGViYXJXaWR0aCgpIHtcbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMudG91Y2hDdXJyZW50WCwgdGhpcy5zaWRlYmFyV2lkdGgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy50b3VjaEN1cnJlbnRYLCB0aGlzLnNpZGViYXJXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgdG91Y2hTaWRlYmFySGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSB0aGlzLnRvdWNoQ3VycmVudFkgKyB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgICAgdGhpcy5zaWRlYmFySGVpZ2h0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnRvdWNoQ3VycmVudFkgLSB0aGlzLmRyYWdIYW5kbGVUb3AsIHRoaXMuc2lkZWJhckhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU3R5bGUoeyBzaWRlYmFyU3R5bGUsIGlzVG91Y2hpbmcsIG92ZXJsYXlTdHlsZSwgY29udGVudFN0eWxlIH0pIHtcbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdyaWdodCcgfHwgdGhpcy5fcG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDAlKWA7XG4gICAgICBzaWRlYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMCUpYDtcbiAgICAgIGlmIChpc1RvdWNoaW5nKSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB0aGlzLnRvdWNoU2lkZWJhcldpZHRoKCkgLyB0aGlzLnNpZGViYXJXaWR0aDtcbiAgICAgICAgLy8gc2xpZGUgb3BlbiB0byB3aGF0IHdlIGRyYWdnZWRcbiAgICAgICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBzaWRlYmFyU3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keygxIC0gcGVyY2VudGFnZSkgKiAxMDB9JSlgO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXlTdHlsZS5vcGFjaXR5ID0gcGVyY2VudGFnZTtcbiAgICAgICAgb3ZlcmxheVN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudFN0eWxlKSB7XG4gICAgICAgIGNvbnRlbnRTdHlsZVt0aGlzLl9wb3NpdGlvbl0gPSBgJHt0aGlzLnNpZGViYXJXaWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5fcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBzaWRlYmFyU3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMCUpYDtcbiAgICAgIHNpZGViYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwJSlgO1xuICAgICAgaWYgKGlzVG91Y2hpbmcpIHtcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMudG91Y2hTaWRlYmFySGVpZ2h0KCkgLyB0aGlzLnNpZGViYXJIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBzaWRlYmFyU3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsoMSAtIHBlcmNlbnRhZ2UpICogMTAwfSUpYDtcbiAgICAgICAgICBzaWRlYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsoMSAtIHBlcmNlbnRhZ2UpICogMTAwfSUpYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0keygxIC0gcGVyY2VudGFnZSkgKiAxMDB9JSlgO1xuICAgICAgICAgIHNpZGViYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHsoMSAtIHBlcmNlbnRhZ2UpICogMTAwfSUpYDtcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5U3R5bGUub3BhY2l0eSA9IHBlcmNlbnRhZ2U7XG4gICAgICAgIG92ZXJsYXlTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnRTdHlsZSkge1xuICAgICAgICBjb250ZW50U3R5bGVbdGhpcy5fcG9zaXRpb25dID0gYCR7dGhpcy5zaWRlYmFySGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgc2lkZWJhclN0eWxlID0geyAuLi50aGlzLnNpZGViYXJTdHlsZSB9O1xuICAgIGNvbnN0IGNvbnRlbnRTdHlsZSA9IHsgLi4udGhpcy5jb250ZW50U3R5bGUgfTtcbiAgICBjb25zdCBvdmVybGF5U3R5bGUgPSB7IC4uLnRoaXMub3ZlcmxheVN0eWxlIH07XG5cbiAgICBpZiAodGhpcy5pc1RvdWNoaW5nKCkpIHtcbiAgICAgIHRoaXMucmVuZGVyU3R5bGUoe1xuICAgICAgICBzaWRlYmFyU3R5bGU6IHNpZGViYXJTdHlsZSxcbiAgICAgICAgaXNUb3VjaGluZzogdHJ1ZSxcbiAgICAgICAgY29udGVudFN0eWxlOiB1bmRlZmluZWQsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogb3ZlcmxheVN0eWxlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RvY2tlZCkge1xuICAgICAgdGhpcy5kb2NrZWRDbHMgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJTdHlsZSh7XG4gICAgICAgIHNpZGViYXJTdHlsZTogc2lkZWJhclN0eWxlLFxuICAgICAgICBpc1RvdWNoaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRlbnRTdHlsZTogY29udGVudFN0eWxlLFxuICAgICAgICBvdmVybGF5U3R5bGU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5DbHMgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJTdHlsZSh7XG4gICAgICAgIHNpZGViYXJTdHlsZTogc2lkZWJhclN0eWxlLFxuICAgICAgICBpc1RvdWNoaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRlbnRTdHlsZTogdW5kZWZpbmVkLFxuICAgICAgICBvdmVybGF5U3R5bGU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBvdmVybGF5U3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBvdmVybGF5U3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1RvdWNoaW5nKCkgfHwgIXRoaXMudHJhbnNpdGlvbnMpIHtcbiAgICAgIHNpZGViYXJTdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgc2lkZWJhclN0eWxlLldlYmtpdFRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICBjb250ZW50U3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIG92ZXJsYXlTdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cbiAgICB0aGlzLnNpZGViYXJTdHlsZUZpbmFsID0gc2lkZWJhclN0eWxlO1xuICAgIHRoaXMuY29udGVudFN0eWxlRmluYWwgPSBjb250ZW50U3R5bGU7XG4gICAgdGhpcy5vdmVybGF5U3R5bGVGaW5hbCA9IG92ZXJsYXlTdHlsZTtcbiAgfVxuXG4gIGdldE9mZnNldChlbGUpIHtcbiAgICBsZXQgZWwgPSBlbGU7XG4gICAgbGV0IF94ID0gMDtcbiAgICBsZXQgX3kgPSAwO1xuICAgIHdoaWxlIChlbCAmJiAhaXNOYU4oZWwub2Zmc2V0TGVmdCkgJiYgIWlzTmFOKGVsLm9mZnNldFRvcCkpIHtcbiAgICAgIF94ICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgX3kgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB7IHRvcDogX3ksIGxlZnQ6IF94IH07XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmlzVG91Y2hpbmcoKSkge1xuICAgICAgdGhpcy5zYXZlU2lkZWJhclNpemUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG59XG4iXX0=