import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';

function SliderTrackComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.className)("ngStyle", ctx_r0.elStyle);
} }
export class SliderTrackComponent {
    constructor(_elf, _sanitizer) {
        this._elf = _elf;
        this._sanitizer = _sanitizer;
        this.prefixCls = 'am-slider';
        this._included = true;
    }
    get className() {
        return this._className;
    }
    set className(value) {
        this._className = value;
    }
    get included() {
        return this._included;
    }
    set included(value) {
        this._included = value;
    }
    set offset(value) {
        this._offset = value;
    }
    set length(value) {
        this._length = value;
    }
    set style(value) {
        this._style = value;
    }
    ngOnChanges() {
        const positonStyle = {
            left: `${this._offset}%`,
            width: `${this._length}%`
        };
        this.elStyle = Object.assign(Object.assign({}, this._style), positonStyle);
    }
}
SliderTrackComponent.ɵfac = function SliderTrackComponent_Factory(t) { return new (t || SliderTrackComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SliderTrackComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderTrackComponent, selectors: [["SliderTrack"], ["nzm-slider-track"]], inputs: { className: "className", included: "included", offset: "offset", length: "length", style: "style" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]], template: function SliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SliderTrackComponent_div_0_Template, 1, 2, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.included);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle], encapsulation: 2 });
SliderTrackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
SliderTrackComponent.propDecorators = {
    className: [{ type: Input }],
    included: [{ type: Input }],
    offset: [{ type: Input }],
    length: [{ type: Input }],
    style: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderTrackComponent, [{
        type: Component,
        args: [{
                selector: 'SliderTrack, nzm-slider-track',
                template: "<div *ngIf=\"included\" [ngClass]=\"className\" [ngStyle]=\"elStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }]; }, { className: [{
            type: Input
        }], included: [{
            type: Input
        }], offset: [{
            type: Input
        }], length: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLXRyYWNrL3NsaWRlci10cmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFPekQsTUFBTSxPQUFPLG9CQUFvQjtBQUFHLElBcUNsQyxZQUFvQixJQUFnQixFQUFVLFVBQXdCO0FBQUksUUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBWTtBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBYztBQUFDLFFBcEN2RSxjQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzFCLFFBR1UsY0FBUyxHQUFZLElBQUksQ0FBQztBQUNwQyxJQStCMkUsQ0FBQztBQUM1RSxJQTVCRSxJQUNJLFNBQVM7QUFBSyxRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFNBQVMsQ0FBQyxLQUFhO0FBQzdCLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksTUFBTSxDQUFDLEtBQWE7QUFDMUIsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksTUFBTSxDQUFDLEtBQWE7QUFDMUIsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksS0FBSyxDQUFDLEtBQWE7QUFDekIsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUdFLFdBQVc7QUFDYixRQUFJLE1BQU0sWUFBWSxHQUFHO0FBQ3pCLFlBQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRztBQUM5QixZQUFNLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUc7QUFDL0IsU0FBSyxDQUFDO0FBQ04sUUFBSSxJQUFJLENBQUMsT0FBTyxtQ0FDUCxJQUFJLENBQUMsTUFBTSxHQUNYLFlBQVksQ0FDaEIsQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIO2dEQXREQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLCtCQUErQixrQkFDekM7MkJBQTRDLGtCQUM1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozt3RkFDSTtBQUFDO0FBQThDLFlBUmhDLFVBQVU7QUFBSSxZQUN6QixZQUFZO0FBQUc7QUFBRztBQUVuQix3QkFlTCxLQUFLO0FBQ04sdUJBTUMsS0FBSztBQUNOLHFCQU1DLEtBQUs7QUFDTixxQkFHQyxLQUFLO0FBQ04sb0JBR0MsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTbGlkZXJUcmFjaywgbnptLXNsaWRlci10cmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJlZml4Q2xzID0gJ2FtLXNsaWRlcic7XG4gIGVsU3R5bGU6IG9iamVjdDtcblxuICBwcml2YXRlIF9jbGFzc05hbWU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX3N0eWxlOiBvYmplY3Q7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNsYXNzTmFtZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWU7XG4gIH1cbiAgc2V0IGNsYXNzTmFtZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuICBzZXQgaW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xlbmd0aCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fc3R5bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgcG9zaXRvblN0eWxlID0ge1xuICAgICAgbGVmdDogYCR7dGhpcy5fb2Zmc2V0fSVgLFxuICAgICAgd2lkdGg6IGAke3RoaXMuX2xlbmd0aH0lYFxuICAgIH07XG4gICAgdGhpcy5lbFN0eWxlID0ge1xuICAgICAgLi4udGhpcy5fc3R5bGUsXG4gICAgICAuLi5wb3NpdG9uU3R5bGVcbiAgICB9O1xuICB9XG59XG4iXX0=