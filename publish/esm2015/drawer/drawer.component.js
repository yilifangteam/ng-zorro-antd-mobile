import { Component, ViewEncapsulation, Input, HostBinding, Output, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DrawerComponent_ng_template_1_Template(rf, ctx) { }
function DrawerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("touchstart", function DrawerComponent_div_4_Template_div_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onTouchStart($event); })("touchmove", function DrawerComponent_div_4_Template_div_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onTouchMove($event); })("touchend", function DrawerComponent_div_4_Template_div_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onTouchEnd(); })("touchcancle", function DrawerComponent_div_4_Template_div_touchcancle_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onTouchEnd(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-draghandle");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.dragHandleStyle);
} }
const _c0 = ["*"];
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
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DrawerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DrawerComponent, selectors: [["Drawer"], ["nzm-drawer"]], hostVars: 14, hostBindings: function DrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-drawer", ctx.am)("am-drawer-left", ctx.left)("am-drawer-right", ctx.right)("am-drawer-top", ctx.top)("am-drawer-bottom", ctx.bottom)("am-drawer-docked", ctx.dockedCls)("am-drawer-open", ctx.openCls);
    } }, inputs: { sidebarStyle: "sidebarStyle", contentStyle: "contentStyle", overlayStyle: "overlayStyle", dragHandleStyle: "dragHandleStyle", transitions: "transitions", touch: "touch", enableDragHandle: "enableDragHandle", dragToggleDistance: "dragToggleDistance", docked: "docked", open: "open", position: "position", sidebar: "sidebar" }, outputs: { onOpenChange: "onOpenChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 6, vars: 11, consts: [["id", "sidebar", 1, "am-drawer-sidebar", 3, "ngStyle"], [3, "ngTemplateOutlet"], ["role", "presentation", "ref", "overlay", 3, "ngStyle", "click"], ["ref", "content", 3, "ngStyle"], ["id", "dragHandle", 3, "class", "ngStyle", "touchstart", "touchmove", "touchend", "touchcancle", 4, "ngIf"], ["id", "dragHandle", 3, "ngStyle", "touchstart", "touchmove", "touchend", "touchcancle"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DrawerComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("click", function DrawerComponent_Template_div_click_2_listener() { return ctx.onOverlayClicked(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, DrawerComponent_div_4_Template, 1, 4, "div", 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.sidebarStyleFinal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.sidebar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-overlay");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.overlayStyleFinal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.contentStyleFinal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.touch && ctx.touchSupported && !ctx.open && !ctx.docked && ctx.enableDragHandle);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DrawerComponent, [{
        type: Component,
        args: [{
                selector: 'Drawer, nzm-drawer',
                template: "<div class=\"am-drawer-sidebar\" [ngStyle]=\"sidebarStyleFinal\" id=\"sidebar\">\n  <ng-template [ngTemplateOutlet]=\"sidebar\"></ng-template>\n</div>\n<div\n  role=\"presentation\"\n  class=\"{{ prefixCls }}-overlay\"\n  ref=\"overlay\"\n  [ngStyle]=\"overlayStyleFinal\"\n  (click)=\"onOverlayClicked()\"\n></div>\n<div class=\"{{ prefixCls }}-content\" [ngStyle]=\"contentStyleFinal\" ref=\"content\">\n  <div\n    *ngIf=\"touch && touchSupported && !open && !docked && enableDragHandle\"\n    id=\"dragHandle\"\n    class=\"{{ prefixCls }}-draghandle\"\n    [ngStyle]=\"dragHandleStyle\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd()\"\n    (touchcancle)=\"onTouchEnd()\"\n  ></div>\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { sidebarStyle: [{
            type: Input
        }], contentStyle: [{
            type: Input
        }], overlayStyle: [{
            type: Input
        }], dragHandleStyle: [{
            type: Input
        }], transitions: [{
            type: Input
        }], touch: [{
            type: Input
        }], enableDragHandle: [{
            type: Input
        }], dragToggleDistance: [{
            type: Input
        }], onOpenChange: [{
            type: Output
        }], am: [{
            type: HostBinding,
            args: ['class.am-drawer']
        }], left: [{
            type: HostBinding,
            args: ['class.am-drawer-left']
        }], right: [{
            type: HostBinding,
            args: ['class.am-drawer-right']
        }], top: [{
            type: HostBinding,
            args: ['class.am-drawer-top']
        }], bottom: [{
            type: HostBinding,
            args: ['class.am-drawer-bottom']
        }], dockedCls: [{
            type: HostBinding,
            args: ['class.am-drawer-docked']
        }], openCls: [{
            type: HostBinding,
            args: ['class.am-drawer-open']
        }], docked: [{
            type: Input
        }], open: [{
            type: Input
        }], position: [{
            type: Input
        }], sidebar: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUdYLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCLE1BQU0sT0FBTyxlQUFlO0FBQUcsSUE4RjdCLFlBQW9CLEdBQWU7QUFBSSxRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFZO0FBQUMsUUE3RnBDLGNBQVMsR0FBVyxXQUFXLENBQUM7QUFDbEMsUUFBRSxzQkFBaUIsR0FBeUIsRUFBRSxDQUFDO0FBQy9DLFFBQUUsc0JBQWlCLEdBQXlCLEVBQUUsQ0FBQztBQUMvQyxRQUFFLHNCQUFpQixHQUF5QixFQUFFLENBQUM7QUFDL0MsUUFBRSxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUMzQixRQUFFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0FBQzVCLFFBQUUsZUFBVSxHQUFXLENBQUMsQ0FBQztBQUN6QixRQUFFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0FBQzVCLFFBQUUsb0JBQWUsR0FBVyxJQUFJLENBQUM7QUFDakMsUUFBRSxnQkFBVyxHQUFXLElBQUksQ0FBQztBQUM3QixRQUFFLGdCQUFXLEdBQVcsSUFBSSxDQUFDO0FBQzdCLFFBQUUsa0JBQWEsR0FBVyxJQUFJLENBQUM7QUFDL0IsUUFBRSxrQkFBYSxHQUFXLElBQUksQ0FBQztBQUMvQixRQUFFLG1CQUFjLEdBQVksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLGNBQWMsSUFBSSxNQUFNLENBQUM7QUFDbkYsUUFDVSxZQUFPLEdBQVksS0FBSyxDQUFDO0FBQ25DLFFBQVUsVUFBSyxHQUFZLEtBQUssQ0FBQztBQUNqQyxRQUFVLGNBQVMsR0FBVyxNQUFNLENBQUM7QUFDckMsUUFJRSxpQkFBWSxHQUF5QixFQUFFLENBQUM7QUFDMUMsUUFDRSxpQkFBWSxHQUF5QixFQUFFLENBQUM7QUFDMUMsUUFDRSxpQkFBWSxHQUF5QixFQUFFLENBQUM7QUFDMUMsUUFDRSxvQkFBZSxHQUF5QixFQUFFLENBQUM7QUFDN0MsUUFDRSxnQkFBVyxHQUFZLElBQUksQ0FBQztBQUM5QixRQUNFLFVBQUssR0FBWSxJQUFJLENBQUM7QUFDeEIsUUFDRSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7QUFDcEMsUUFDRSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7QUFDbEMsUUF1Q0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUM1RCxRQUVFLE9BQUUsR0FBWSxJQUFJLENBQUM7QUFDckIsUUFDRSxTQUFJLEdBQVksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUM7QUFDNUMsUUFDRSxVQUFLLEdBQVksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUM7QUFDOUMsUUFDRSxRQUFHLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7QUFDekMsUUFDRSxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDL0MsUUFDRSxjQUFTLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNwQyxRQUNFLFlBQU8sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2hDLElBQ3dDLENBQUM7QUFDekMsSUF6REUsSUFDSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ2QsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxJQUFJO0FBQ1YsUUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ1osUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNuQixRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxRQUFRLENBQUMsQ0FBQztBQUNoQixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsUUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN0QixRQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsUUFBSSxRQUFRLENBQUMsRUFBRTtBQUNmLFlBQU0sS0FBSyxPQUFPO0FBQ2xCLGdCQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQzFCLGdCQUFRLE1BQU07QUFDZCxZQUFNLEtBQUssTUFBTTtBQUNqQixnQkFBUSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN6QixnQkFBUSxNQUFNO0FBQ2QsWUFBTSxLQUFLLEtBQUs7QUFDaEIsZ0JBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDeEIsZ0JBQVEsTUFBTTtBQUNkLFlBQU0sS0FBSyxRQUFRO0FBQ25CLGdCQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzNCLGdCQUFRLE1BQU07QUFDZCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFvQkUsZ0JBQWdCO0FBQ2xCLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVTtBQUNaLFFBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVksQ0FBQyxLQUFLO0FBQ3BCLFFBQUksTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxRQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUM1QyxRQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxRQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUN2QyxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxFQUFFO0FBQ2hCLFFBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQzdELFlBQU0sSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQ3RFLGdCQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDNUQsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1RCxnQkFBUSxNQUFNO0FBQ2QsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVU7QUFDWixRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ2hELFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUM3RCxZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxRQUNJLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ2xELFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUM5RCxZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLFFBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQ2pCLFFBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JFLFFBQUksTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNFLFFBQ0ksTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0QyxRQUFJLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDeEMsUUFBSSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNuRCxRQUFJLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELFFBQ0ksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFNBQUs7QUFDTCxRQUFJLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdkMsWUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3hDLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDbkMsU0FBSztBQUNMLFFBQUksSUFBSSxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM5QyxZQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3pDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGlCQUFpQjtBQUNuQixRQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7QUFDcEMsWUFBTSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRixTQUFLO0FBQ0wsUUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO0FBQ25DLFlBQU0sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGtCQUFrQjtBQUNwQixRQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7QUFDckMsWUFBTSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUMzRixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtBQUNsQyxZQUFNLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25GLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTtBQUN0RSxRQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7QUFDakUsWUFBTSxZQUFZLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hELFlBQU0sWUFBWSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUN0RCxZQUFNLElBQUksVUFBVSxFQUFFO0FBQ3RCLGdCQUFRLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDeEUsZ0JBQVEsZ0NBQWdDO0FBQ3hDLGdCQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7QUFDeEMsb0JBQVUsWUFBWSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQzVFLG9CQUFVLFlBQVksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNsRixpQkFBUztBQUNULGdCQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7QUFDdkMsb0JBQVUsWUFBWSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQzdFLG9CQUFVLFlBQVksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNuRixpQkFBUztBQUNULGdCQUFRLFlBQVksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBQzFDLGdCQUFRLFlBQVksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzVDLGFBQU87QUFDUCxZQUFNLElBQUksWUFBWSxFQUFFO0FBQ3hCLGdCQUFRLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUM7QUFDaEUsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7QUFDakUsWUFBTSxZQUFZLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hELFlBQU0sWUFBWSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUN0RCxZQUFNLElBQUksVUFBVSxFQUFFO0FBQ3RCLGdCQUFRLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDMUUsZ0JBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtBQUN6QyxvQkFBVSxZQUFZLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDNUUsb0JBQVUsWUFBWSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2xGLGlCQUFTO0FBQ1QsZ0JBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtBQUN0QyxvQkFBVSxZQUFZLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDN0Usb0JBQVUsWUFBWSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ25GLGlCQUFTO0FBQ1QsZ0JBQVEsWUFBWSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDMUMsZ0JBQVEsWUFBWSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDNUMsYUFBTztBQUNQLFlBQU0sSUFBSSxZQUFZLEVBQUU7QUFDeEIsZ0JBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQztBQUNqRSxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsTUFBTTtBQUNSLFFBQUksTUFBTSxZQUFZLHFCQUFRLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQztBQUNsRCxRQUFJLE1BQU0sWUFBWSxxQkFBUSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7QUFDbEQsUUFBSSxNQUFNLFlBQVkscUJBQVEsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0FBQ2xELFFBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLGdCQUFRLFlBQVksRUFBRSxZQUFZO0FBQ2xDLGdCQUFRLFVBQVUsRUFBRSxJQUFJO0FBQ3hCLGdCQUFRLFlBQVksRUFBRSxTQUFTO0FBQy9CLGdCQUFRLFlBQVksRUFBRSxZQUFZO0FBQ2xDLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUFDLGFBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDNUIsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLGdCQUFRLFlBQVksRUFBRSxZQUFZO0FBQ2xDLGdCQUFRLFVBQVUsRUFBRSxTQUFTO0FBQzdCLGdCQUFRLFlBQVksRUFBRSxZQUFZO0FBQ2xDLGdCQUFRLFlBQVksRUFBRSxTQUFTO0FBQy9CLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUFDLGFBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQzNCLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDMUIsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLGdCQUFRLFlBQVksRUFBRSxZQUFZO0FBQ2xDLGdCQUFRLFVBQVUsRUFBRSxTQUFTO0FBQzdCLGdCQUFRLFlBQVksRUFBRSxTQUFTO0FBQy9CLGdCQUFRLFlBQVksRUFBRSxTQUFTO0FBQy9CLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsWUFBTSxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUMvQixZQUFNLFlBQVksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNoRCxZQUFNLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLFlBQU0sWUFBWSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztBQUM3QyxZQUFNLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLFlBQU0sWUFBWSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDdkMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQztBQUMxQyxRQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUM7QUFDMUMsUUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUyxDQUFDLEdBQUc7QUFDZixRQUFJLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNqQixRQUFJLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNmLFFBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsUUFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ2hFLFlBQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUMxQyxZQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFDeEMsWUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztBQUMzQixTQUFLO0FBQ0wsUUFBSSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDakMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxrQkFBa0I7QUFDcEIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQzVCLFlBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzdCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixJQUFFLENBQUM7QUFDSDsyQ0EvU0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxvQkFBb0Isa0JBQzlCOzs7aVdBQXNDLGtCQUN0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lHQUNJO0FBQUM7QUFBeUMsWUFWN0MsVUFBVTtBQUNYO0FBQUc7QUFFRyxzQkEyQkosS0FBSztBQUNOLDJCQUNDLEtBQUs7QUFDTiwyQkFDQyxLQUFLO0FBQ04sMkJBQ0MsS0FBSztBQUNOLDhCQUNDLEtBQUs7QUFDTiwwQkFDQyxLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLCtCQUNDLEtBQUs7QUFDTixpQ0FDQyxLQUFLO0FBQ04scUJBQ0MsS0FBSztBQUNOLG1CQU9DLEtBQUs7QUFDTix1QkFPQyxLQUFLO0FBQ04sMkJBcUJDLE1BQU07QUFDUCxpQkFFQyxXQUFXLFNBQUMsaUJBQWlCO0FBQzNCLG1CQUNGLFdBQVcsU0FBQyxzQkFBc0I7QUFDaEMsb0JBQ0YsV0FBVyxTQUFDLHVCQUF1QjtBQUNqQyxrQkFDRixXQUFXLFNBQUMscUJBQXFCO0FBQy9CLHFCQUNGLFdBQVcsU0FBQyx3QkFBd0I7QUFDbEMsd0JBQ0YsV0FBVyxTQUFDLHdCQUF3QjtBQUNsQyxzQkFDRixXQUFXLFNBQUMsc0JBQXNCO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyVmlld0NoZWNrZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0RyYXdlciwgbnptLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcyB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLWRyYXdlcic7XG4gIHNpZGViYXJTdHlsZUZpbmFsOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBjb250ZW50U3R5bGVGaW5hbDogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgb3ZlcmxheVN0eWxlRmluYWw6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHNpZGViYXJXaWR0aDogbnVtYmVyID0gMDtcbiAgc2lkZWJhckhlaWdodDogbnVtYmVyID0gMDtcbiAgc2lkZWJhclRvcDogbnVtYmVyID0gMDtcbiAgZHJhZ0hhbmRsZVRvcDogbnVtYmVyID0gMDtcbiAgdG91Y2hJZGVudGlmaWVyOiBudW1iZXIgPSBudWxsO1xuICB0b3VjaFN0YXJ0WDogbnVtYmVyID0gbnVsbDtcbiAgdG91Y2hTdGFydFk6IG51bWJlciA9IG51bGw7XG4gIHRvdWNoQ3VycmVudFg6IG51bWJlciA9IG51bGw7XG4gIHRvdWNoQ3VycmVudFk6IG51bWJlciA9IG51bGw7XG4gIHRvdWNoU3VwcG9ydGVkOiBib29sZWFuID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXG4gIHByaXZhdGUgX2RvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBzdHJpbmcgPSAnbGVmdCc7XG5cbiAgQElucHV0KClcbiAgc2lkZWJhcjogYW55O1xuICBASW5wdXQoKVxuICBzaWRlYmFyU3R5bGU6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnRTdHlsZTogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgQElucHV0KClcbiAgb3ZlcmxheVN0eWxlOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBASW5wdXQoKVxuICBkcmFnSGFuZGxlU3R5bGU6IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XG4gIEBJbnB1dCgpXG4gIHRyYW5zaXRpb25zOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgdG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBlbmFibGVEcmFnSGFuZGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRyYWdUb2dnbGVEaXN0YW5jZTogbnVtYmVyID0gMzA7XG4gIEBJbnB1dCgpXG4gIGdldCBkb2NrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY2tlZDtcbiAgfVxuICBzZXQgZG9ja2VkKHYpIHtcbiAgICB0aGlzLl9kb2NrZWQgPSB2O1xuICAgIHRoaXMuZG9ja2VkQ2xzID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuICBzZXQgb3Blbih2KSB7XG4gICAgdGhpcy5fb3BlbiA9IHY7XG4gICAgdGhpcy5vcGVuQ2xzID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdjtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy50b3AgPSBmYWxzZTtcbiAgICB0aGlzLmJvdHRvbSA9IGZhbHNlO1xuICAgIHN3aXRjaCAodikge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB0aGlzLnRvcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlcicpXG4gIGFtOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1kcmF3ZXItbGVmdCcpXG4gIGxlZnQ6IGJvb2xlYW4gPSB0aGlzLl9wb3NpdGlvbiA9PT0gJ2xlZnQnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlci1yaWdodCcpXG4gIHJpZ2h0OiBib29sZWFuID0gdGhpcy5fcG9zaXRpb24gPT09ICdyaWdodCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZHJhd2VyLXRvcCcpXG4gIHRvcDogYm9vbGVhbiA9IHRoaXMuX3Bvc2l0aW9uID09ICd0b3AnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlci1ib3R0b20nKVxuICBib3R0b206IGJvb2xlYW4gPSB0aGlzLl9wb3NpdGlvbiA9PSAnYm90dG9tJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1kcmF3ZXItZG9ja2VkJylcbiAgZG9ja2VkQ2xzOiBib29sZWFuID0gdGhpcy5fZG9ja2VkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWRyYXdlci1vcGVuJylcbiAgb3BlbkNsczogYm9vbGVhbiA9IHRoaXMuX29wZW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgb25PdmVybGF5Q2xpY2tlZCgpIHtcbiAgICBpZiAodGhpcy5fb3Blbikge1xuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBpc1RvdWNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvdWNoSWRlbnRpZmllciAhPT0gbnVsbDtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgdGhpcy50b3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMudG91Y2hDdXJyZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy50b3VjaEN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2KSB7XG4gICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgZXYuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpbmQrKykge1xuICAgICAgaWYgKGV2LmNoYW5nZWRUb3VjaGVzW2luZF0uaWRlbnRpZmllciA9PT0gdGhpcy50b3VjaElkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy50b3VjaEN1cnJlbnRYID0gZXYuY2hhbmdlZFRvdWNoZXNbaW5kXS5jbGllbnRYO1xuICAgICAgICB0aGlzLnRvdWNoQ3VycmVudFkgPSBldi5jaGFuZ2VkVG91Y2hlc1tpbmRdLmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgb25Ub3VjaEVuZCgpIHtcbiAgICBjb25zdCB0b3VjaFdpZHRoID0gdGhpcy50b3VjaFNpZGViYXJXaWR0aCgpO1xuICAgIGlmICghdGhpcy5fb3BlbiAmJiB0b3VjaFdpZHRoID4gdGhpcy5kcmFnVG9nZ2xlRGlzdGFuY2UpIHtcbiAgICAgIHRoaXMub25PcGVuQ2hhbmdlLmVtaXQoIXRoaXMuX29wZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoSGVpZ2h0ID0gdGhpcy50b3VjaFNpZGViYXJIZWlnaHQoKTtcbiAgICBpZiAoIXRoaXMuX29wZW4gJiYgdG91Y2hIZWlnaHQgPiB0aGlzLmRyYWdUb2dnbGVEaXN0YW5jZSkge1xuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UuZW1pdCghdGhpcy5fb3Blbik7XG4gICAgfVxuICAgIHRoaXMudG91Y2hJZGVudGlmaWVyID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoQ3VycmVudFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hDdXJyZW50WSA9IG51bGw7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVTaWRlYmFyU2l6ZSgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgIGNvbnN0IGRyYWdIYW5kbGUgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnSGFuZGxlJyk7XG5cbiAgICBjb25zdCB3aWR0aCA9IHNpZGViYXIub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2lkZWJhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IHRoaXMuZ2V0T2Zmc2V0KHNpZGViYXIpLnRvcDtcbiAgICBjb25zdCBkcmFnSGFuZGxlVG9wID0gdGhpcy5nZXRPZmZzZXQoZHJhZ0hhbmRsZSkudG9wO1xuXG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLnNpZGViYXJXaWR0aCkge1xuICAgICAgdGhpcy5zaWRlYmFyV2lkdGggPSB3aWR0aDtcbiAgICB9XG4gICAgaWYgKGhlaWdodCAhPT0gdGhpcy5zaWRlYmFySGVpZ2h0KSB7XG4gICAgICB0aGlzLnNpZGViYXJIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGlmIChzaWRlYmFyVG9wICE9PSB0aGlzLnNpZGViYXJUb3ApIHtcbiAgICAgIHRoaXMuc2lkZWJhclRvcCA9IHNpZGViYXJUb3A7XG4gICAgfVxuICAgIGlmIChkcmFnSGFuZGxlVG9wICE9PSB0aGlzLmRyYWdIYW5kbGVUb3ApIHtcbiAgICAgIHRoaXMuZHJhZ0hhbmRsZVRvcCA9IGRyYWdIYW5kbGVUb3A7XG4gICAgfVxuICB9XG5cbiAgdG91Y2hTaWRlYmFyV2lkdGgoKSB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLSB0aGlzLnRvdWNoQ3VycmVudFgsIHRoaXMuc2lkZWJhcldpZHRoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudG91Y2hDdXJyZW50WCwgdGhpcy5zaWRlYmFyV2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoU2lkZWJhckhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gdGhpcy50b3VjaEN1cnJlbnRZICsgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICAgIHRoaXMuc2lkZWJhckhlaWdodFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy50b3VjaEN1cnJlbnRZIC0gdGhpcy5kcmFnSGFuZGxlVG9wLCB0aGlzLnNpZGViYXJIZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclN0eWxlKHsgc2lkZWJhclN0eWxlLCBpc1RvdWNoaW5nLCBvdmVybGF5U3R5bGUsIGNvbnRlbnRTdHlsZSB9KSB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAncmlnaHQnIHx8IHRoaXMuX3Bvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHNpZGViYXJTdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwJSlgO1xuICAgICAgc2lkZWJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDAlKWA7XG4gICAgICBpZiAoaXNUb3VjaGluZykge1xuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy50b3VjaFNpZGViYXJXaWR0aCgpIC8gdGhpcy5zaWRlYmFyV2lkdGg7XG4gICAgICAgIC8vIHNsaWRlIG9wZW4gdG8gd2hhdCB3ZSBkcmFnZ2VkXG4gICAgICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHNpZGViYXJTdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeygxIC0gcGVyY2VudGFnZSkgKiAxMDB9JSlgO1xuICAgICAgICAgIHNpZGViYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeygxIC0gcGVyY2VudGFnZSkgKiAxMDB9JSlgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keygxIC0gcGVyY2VudGFnZSkgKiAxMDB9JSlgO1xuICAgICAgICAgIHNpZGViYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsoMSAtIHBlcmNlbnRhZ2UpICogMTAwfSUpYDtcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5U3R5bGUub3BhY2l0eSA9IHBlcmNlbnRhZ2U7XG4gICAgICAgIG92ZXJsYXlTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnRTdHlsZSkge1xuICAgICAgICBjb250ZW50U3R5bGVbdGhpcy5fcG9zaXRpb25dID0gYCR7dGhpcy5zaWRlYmFyV2lkdGh9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMuX3Bvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDAlKWA7XG4gICAgICBzaWRlYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMCUpYDtcbiAgICAgIGlmIChpc1RvdWNoaW5nKSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB0aGlzLnRvdWNoU2lkZWJhckhlaWdodCgpIC8gdGhpcy5zaWRlYmFySGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5fcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgICAgc2lkZWJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Bvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgIHNpZGViYXJTdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHsoMSAtIHBlcmNlbnRhZ2UpICogMTAwfSUpYDtcbiAgICAgICAgICBzaWRlYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7KDEgLSBwZXJjZW50YWdlKSAqIDEwMH0lKWA7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheVN0eWxlLm9wYWNpdHkgPSBwZXJjZW50YWdlO1xuICAgICAgICBvdmVybGF5U3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50U3R5bGUpIHtcbiAgICAgICAgY29udGVudFN0eWxlW3RoaXMuX3Bvc2l0aW9uXSA9IGAke3RoaXMuc2lkZWJhckhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHNpZGViYXJTdHlsZSA9IHsgLi4udGhpcy5zaWRlYmFyU3R5bGUgfTtcbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSB7IC4uLnRoaXMuY29udGVudFN0eWxlIH07XG4gICAgY29uc3Qgb3ZlcmxheVN0eWxlID0geyAuLi50aGlzLm92ZXJsYXlTdHlsZSB9O1xuXG4gICAgaWYgKHRoaXMuaXNUb3VjaGluZygpKSB7XG4gICAgICB0aGlzLnJlbmRlclN0eWxlKHtcbiAgICAgICAgc2lkZWJhclN0eWxlOiBzaWRlYmFyU3R5bGUsXG4gICAgICAgIGlzVG91Y2hpbmc6IHRydWUsXG4gICAgICAgIGNvbnRlbnRTdHlsZTogdW5kZWZpbmVkLFxuICAgICAgICBvdmVybGF5U3R5bGU6IG92ZXJsYXlTdHlsZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kb2NrZWQpIHtcbiAgICAgIHRoaXMuZG9ja2VkQ2xzID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyU3R5bGUoe1xuICAgICAgICBzaWRlYmFyU3R5bGU6IHNpZGViYXJTdHlsZSxcbiAgICAgICAgaXNUb3VjaGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjb250ZW50U3R5bGU6IGNvbnRlbnRTdHlsZSxcbiAgICAgICAgb3ZlcmxheVN0eWxlOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3Blbikge1xuICAgICAgdGhpcy5vcGVuQ2xzID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyU3R5bGUoe1xuICAgICAgICBzaWRlYmFyU3R5bGU6IHNpZGViYXJTdHlsZSxcbiAgICAgICAgaXNUb3VjaGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjb250ZW50U3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgb3ZlcmxheVN0eWxlOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgICAgb3ZlcmxheVN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgb3ZlcmxheVN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaGluZygpIHx8ICF0aGlzLnRyYW5zaXRpb25zKSB7XG4gICAgICBzaWRlYmFyU3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHNpZGViYXJTdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgY29udGVudFN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICBvdmVybGF5U3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG4gICAgdGhpcy5zaWRlYmFyU3R5bGVGaW5hbCA9IHNpZGViYXJTdHlsZTtcbiAgICB0aGlzLmNvbnRlbnRTdHlsZUZpbmFsID0gY29udGVudFN0eWxlO1xuICAgIHRoaXMub3ZlcmxheVN0eWxlRmluYWwgPSBvdmVybGF5U3R5bGU7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlKSB7XG4gICAgbGV0IGVsID0gZWxlO1xuICAgIGxldCBfeCA9IDA7XG4gICAgbGV0IF95ID0gMDtcbiAgICB3aGlsZSAoZWwgJiYgIWlzTmFOKGVsLm9mZnNldExlZnQpICYmICFpc05hTihlbC5vZmZzZXRUb3ApKSB7XG4gICAgICBfeCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgIF95ICs9IGVsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4geyB0b3A6IF95LCBsZWZ0OiBfeCB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5pc1RvdWNoaW5nKCkpIHtcbiAgICAgIHRoaXMuc2F2ZVNpZGViYXJTaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxufVxuIl19