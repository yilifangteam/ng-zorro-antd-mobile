import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class CarouselSlideComponent {
    constructor() {
        this.container = true;
        this.height = 'auto';
        this.overflow = 'hidden';
    }
}
CarouselSlideComponent.ɵfac = function CarouselSlideComponent_Factory(t) { return new (t || CarouselSlideComponent)(); };
CarouselSlideComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CarouselSlideComponent, selectors: [["CarouselSlide"], ["nzm-carousel-slide"]], hostVars: 14, hostBindings: function CarouselSlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.height)("overflow", ctx.overflow)("width", ctx.width, "px")("left", ctx.left, "px")("top", ctx.top, "px")("margin", ctx.margin);
        ɵngcc0.ɵɵclassProp("am-carousel-container", ctx.container);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
CarouselSlideComponent.propDecorators = {
    container: [{ type: HostBinding, args: ['class.am-carousel-container',] }],
    width: [{ type: HostBinding, args: ['style.width.px',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    left: [{ type: HostBinding, args: ['style.left.px',] }],
    top: [{ type: HostBinding, args: ['style.top.px',] }],
    margin: [{ type: HostBinding, args: ['style.margin',] }],
    overflow: [{ type: HostBinding, args: ['style.overflow',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CarouselSlideComponent, [{
        type: Component,
        args: [{
                selector: 'CarouselSlide, nzm-carousel-slide',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { container: [{
            type: HostBinding,
            args: ['class.am-carousel-container']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], overflow: [{
            type: HostBinding,
            args: ['style.overflow']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], left: [{
            type: HostBinding,
            args: ['style.left.px']
        }], top: [{
            type: HostBinding,
            args: ['style.top.px']
        }], margin: [{
            type: HostBinding,
            args: ['style.margin']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLXNsaWRlL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8xRSxNQUFNLE9BQU8sc0JBQXNCO0FBQ25DLElBTkE7QUFDRyxRQU1ELGNBQVMsR0FBRyxJQUFJLENBQUM7QUFDbkIsUUFHRSxXQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2xCLFFBT0UsYUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN0QixJQUFBLENBQUM7QUFDRDtrREFyQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUFtQyxrQkFDN0MsdUNBQThDLGtCQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7OzZCQUNJO0FBQUM7QUFDSSx3QkFBUCxXQUFXLFNBQUMsNkJBQTZCO0FBQ3ZDLG9CQUNGLFdBQVcsU0FBQyxnQkFBZ0I7QUFDMUIscUJBQ0YsV0FBVyxTQUFDLGNBQWM7QUFDeEIsbUJBQ0YsV0FBVyxTQUFDLGVBQWU7QUFDekIsa0JBQ0YsV0FBVyxTQUFDLGNBQWM7QUFDeEIscUJBQ0YsV0FBVyxTQUFDLGNBQWM7QUFDeEIsdUJBQ0YsV0FBVyxTQUFDLGdCQUFnQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0Nhcm91c2VsU2xpZGUsIG56bS1jYXJvdXNlbC1zbGlkZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2Fyb3VzZWwtY29udGFpbmVyJylcbiAgY29udGFpbmVyID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIHdpZHRoO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGhlaWdodCA9ICdhdXRvJztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0LnB4JylcbiAgbGVmdDtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3AucHgnKVxuICB0b3A7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJylcbiAgbWFyZ2luO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm92ZXJmbG93JylcbiAgb3ZlcmZsb3cgPSAnaGlkZGVuJztcbn1cbiJdfQ==