import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class WingBlankComponent {
    constructor() {
        this.prefixCls = 'am-wingblank';
        this.size = 'lg';
        this.amWingBlank = true;
    }
    get amWingBlnkSm() {
        return this.size === 'sm';
    }
    get amWingBlnkMd() {
        return this.size === 'md';
    }
    get amWingBlnkLg() {
        return this.size === 'lg';
    }
}
WingBlankComponent.ɵfac = function WingBlankComponent_Factory(t) { return new (t || WingBlankComponent)(); };
WingBlankComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WingBlankComponent, selectors: [["WingBlank"], ["nzm-wingblank"]], hostVars: 8, hostBindings: function WingBlankComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-wingblank", ctx.amWingBlank)("am-wingblank-sm", ctx.amWingBlnkSm)("am-wingblank-md", ctx.amWingBlnkMd)("am-wingblank-lg", ctx.amWingBlnkLg);
    } }, inputs: { size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function WingBlankComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
WingBlankComponent.ctorParameters = () => [];
WingBlankComponent.propDecorators = {
    size: [{ type: Input }],
    amWingBlank: [{ type: HostBinding, args: ['class.am-wingblank',] }],
    amWingBlnkSm: [{ type: HostBinding, args: ['class.am-wingblank-sm',] }],
    amWingBlnkMd: [{ type: HostBinding, args: ['class.am-wingblank-md',] }],
    amWingBlnkLg: [{ type: HostBinding, args: ['class.am-wingblank-lg',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WingBlankComponent, [{
        type: Component,
        args: [{
                selector: 'WingBlank, nzm-wingblank',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }], amWingBlank: [{
            type: HostBinding,
            args: ['class.am-wingblank']
        }], amWingBlnkSm: [{
            type: HostBinding,
            args: ['class.am-wingblank-sm']
        }], amWingBlnkMd: [{
            type: HostBinding,
            args: ['class.am-wingblank-md']
        }], amWingBlnkLg: [{
            type: HostBinding,
            args: ['class.am-wingblank-lg']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZy1ibGFuay5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvd2luZy1ibGFuay93aW5nLWJsYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTakYsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQixJQW9CRTtBQUFnQixRQXBCaEIsY0FBUyxHQUFXLGNBQWMsQ0FBQztBQUNyQyxRQUVFLFNBQUksR0FBc0IsSUFBSSxDQUFDO0FBQ2pDLFFBRUUsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDOUIsSUFhaUIsQ0FBQztBQUNsQixJQWRFLElBQ0ksWUFBWTtBQUFLLFFBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxZQUFZO0FBQUssUUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSDs4Q0F6QkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtRQUEwQixrQkFDcEMsdUNBQTBDLGtCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7NkJBQ0k7QUFBQztBQUNZO0FBR1osbUJBREgsS0FBSztBQUNOLDBCQUVDLFdBQVcsU0FBQyxvQkFBb0I7QUFDOUIsMkJBQ0YsV0FBVyxTQUFDLHVCQUF1QjtBQUNqQywyQkFHRixXQUFXLFNBQUMsdUJBQXVCO0FBQ2pDLDJCQUdGLFdBQVcsU0FBQyx1QkFBdUI7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBXaW5nQmxhbmtTaXplVHlwZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnV2luZ0JsYW5rLCBuem0td2luZ2JsYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpbmctYmxhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFdpbmdCbGFua0NvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXdpbmdibGFuayc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogV2luZ0JsYW5rU2l6ZVR5cGUgPSAnbGcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2luZ2JsYW5rJylcbiAgYW1XaW5nQmxhbms6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1zbScpXG4gIGdldCBhbVdpbmdCbG5rU20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1tZCcpXG4gIGdldCBhbVdpbmdCbG5rTWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21kJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1sZycpXG4gIGdldCBhbVdpbmdCbG5rTGcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==