import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
SliderTrackComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderTrack, nzm-slider-track',
                template: "<div *ngIf=\"included\" [ngClass]=\"className\" [ngStyle]=\"elStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2xpZGVyL3NsaWRlci10cmFjay9zbGlkZXItdHJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLG9CQUFvQjtJQXFDL0IsWUFBb0IsSUFBZ0IsRUFBVSxVQUF3QjtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQXBDdEUsY0FBUyxHQUFHLFdBQVcsQ0FBQztRQUloQixjQUFTLEdBQVksSUFBSSxDQUFDO0lBZ0N1QyxDQUFDO0lBM0IxRSxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBSUQsV0FBVztRQUNULE1BQU0sWUFBWSxHQUFHO1lBQ25CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDeEIsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRztTQUMxQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sbUNBQ1AsSUFBSSxDQUFDLE1BQU0sR0FDWCxZQUFZLENBQ2hCLENBQUM7SUFDSixDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDBGQUE0QztnQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQVBtQixVQUFVO1lBQ3JCLFlBQVk7Ozt3QkFpQmxCLEtBQUs7dUJBT0wsS0FBSztxQkFPTCxLQUFLO3FCQUlMLEtBQUs7b0JBSUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTbGlkZXJUcmFjaywgbnptLXNsaWRlci10cmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJlZml4Q2xzID0gJ2FtLXNsaWRlcic7XG4gIGVsU3R5bGU6IG9iamVjdDtcblxuICBwcml2YXRlIF9jbGFzc05hbWU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX3N0eWxlOiBvYmplY3Q7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNsYXNzTmFtZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWU7XG4gIH1cbiAgc2V0IGNsYXNzTmFtZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuICBzZXQgaW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xlbmd0aCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fc3R5bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgcG9zaXRvblN0eWxlID0ge1xuICAgICAgbGVmdDogYCR7dGhpcy5fb2Zmc2V0fSVgLFxuICAgICAgd2lkdGg6IGAke3RoaXMuX2xlbmd0aH0lYFxuICAgIH07XG4gICAgdGhpcy5lbFN0eWxlID0ge1xuICAgICAgLi4udGhpcy5fc3R5bGUsXG4gICAgICAuLi5wb3NpdG9uU3R5bGVcbiAgICB9O1xuICB9XG59XG4iXX0=