import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IconHandler } from '../core/util/icon';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../core/util/icon';
import * as ɵngcc2 from '@angular/common';

const _c0 = function (a0) { return { color: a0 }; };
function IconComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "svg", 2);
    ɵngcc0.ɵɵelement(1, "use", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.clsMap)("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r0.color));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattributeInterpolate1("href", "#", ctx_r0.type, "", null, "xlink");
} }
function IconComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r1.src, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.clsMap);
} }
const _c1 = ["*"];
export class IconComponent {
    constructor(_iconHandler) {
        this._iconHandler = _iconHandler;
        this.clsMap = {};
        this._type = '';
        this._size = 'md';
        this._src = '';
        this.color = '';
        this._iconHandler.load();
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.setClsMap();
    }
    get src() {
        return this._src;
    }
    set src(value) {
        this._src = value;
        this.setClsMap();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this.setClsMap();
    }
    setClsMap() {
        this.clsMap = {
            [`am-icon-${this._type}`]: true,
            [`am-icon-${this._size}`]: true
        };
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.IconHandler)); };
IconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: IconComponent, selectors: [["Icon"], ["nzm-icon"]], inputs: { color: "color", type: "type", src: "src", size: "size" }, features: [ɵngcc0.ɵɵProvidersFeature([IconHandler])], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["class", "am-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "am-icon", 3, "src", "ngClass", 4, "ngIf"], [1, "am-icon", 3, "ngClass", "ngStyle"], [0, "xmlns", "xlink", "https://www.w3.org/1999/xlink"], [1, "am-icon", 3, "src", "ngClass"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, IconComponent__svg_svg_0_Template, 2, 5, "svg", 0);
        ɵngcc0.ɵɵtemplate(1, IconComponent_img_1_Template, 1, 2, "img", 1);
        ɵngcc0.ɵɵprojection(2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle], encapsulation: 2 });
IconComponent.ctorParameters = () => [
    { type: IconHandler }
];
IconComponent.propDecorators = {
    color: [{ type: Input }],
    type: [{ type: Input }],
    src: [{ type: Input }],
    size: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'Icon, nzm-icon',
                template: "<svg *ngIf=\"type\" class=\"am-icon\" [ngClass]=\"clsMap\" [ngStyle]=\"{ color: color }\">\n  <use xmlns:xlink=\"https://www.w3.org/1999/xlink\" attr.xlink:href=\"#{{ type }}\"></use>\n</svg>\n<img *ngIf=\"src\" src=\"{{ src }}\" class=\"am-icon\" [ngClass]=\"clsMap\" />\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [IconHandler]
            }]
    }], function () { return [{ type: ɵngcc1.IconHandler }]; }, { color: [{
            type: Input
        }], type: [{
            type: Input
        }], src: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEQsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFpQ0UsWUFBb0IsWUFBeUI7QUFDL0MsUUFEc0IsaUJBQVksR0FBWixZQUFZLENBQWE7QUFBQyxRQWpDOUMsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUN0QixRQUNVLFVBQUssR0FBVyxFQUFFLENBQUM7QUFDN0IsUUFBVSxVQUFLLEdBQVcsSUFBSSxDQUFDO0FBQy9CLFFBQVUsU0FBSSxHQUFXLEVBQUUsQ0FBQztBQUM1QixRQUVFLFVBQUssR0FBVyxFQUFFLENBQUM7QUFDckIsUUEwQkksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQTVCRSxJQUNJLElBQUk7QUFBSyxRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksSUFBSSxDQUFDLEtBQUs7QUFDaEIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN2QixRQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksR0FBRztBQUFLLFFBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxHQUFHLENBQUMsS0FBYTtBQUN2QixRQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFFBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxJQUFJO0FBQUssUUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLElBQUksQ0FBQyxLQUFhO0FBQ3hCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsUUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckIsSUFBRSxDQUFDO0FBQ0gsSUFLRSxTQUFTO0FBQ1gsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHO0FBQ2xCLFlBQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDckMsWUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUNyQyxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDt5Q0FsREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0Isa0JBQzFCO3NTQUFvQyxrQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUN6Qjs7Ozs7Ozs7O3dGQUNJO0FBQUM7QUFDVSxZQVRQLFdBQVc7QUFBRztBQUFHO0FBRWpCLG9CQWFOLEtBQUs7QUFDTixtQkFDQyxLQUFLO0FBQ04sa0JBT0MsS0FBSztBQUNOLG1CQU9DLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uSGFuZGxlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnSWNvbiwgbnptLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW0ljb25IYW5kbGVyXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgY2xzTWFwOiBvYmplY3QgPSB7fTtcblxuICBwcml2YXRlIF90eXBlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nID0gJ21kJztcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc3JjKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgfVxuICBzZXQgc3JjKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaWNvbkhhbmRsZXI6IEljb25IYW5kbGVyKSB7XG4gICAgdGhpcy5faWNvbkhhbmRsZXIubG9hZCgpO1xuICB9XG5cbiAgc2V0Q2xzTWFwKCkge1xuICAgIHRoaXMuY2xzTWFwID0ge1xuICAgICAgW2BhbS1pY29uLSR7dGhpcy5fdHlwZX1gXTogdHJ1ZSxcbiAgICAgIFtgYW0taWNvbi0ke3RoaXMuX3NpemV9YF06IHRydWVcbiAgICB9O1xuICB9XG59XG4iXX0=