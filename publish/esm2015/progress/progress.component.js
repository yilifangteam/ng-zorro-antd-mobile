import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class ProgressComponent {
    constructor() {
        this.prefixCls = 'am-progress';
        this._percent = 0;
        this._exceedance = false;
        this.unfilled = true;
        this.position = 'fixed';
        this.barStyle = {};
        this.max = 100;
        this.amProgress = true;
        this.outer = true;
    }
    get percent() {
        return this._percent;
    }
    set percent(value) {
        this._percent = value;
        if (value > 100) {
            this._exceedance = true;
        }
        else {
            this._exceedance = false;
        }
    }
    get value() {
        return this.percent;
    }
    get fixOuter() {
        return 'fixed' === this.position;
    }
    get hideOuter() {
        return !this.unfilled && !this._exceedance;
    }
    get exceedance() {
        return this._exceedance;
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressComponent, selectors: [["Progress"], ["nzm-progress"]], hostVars: 12, hostBindings: function ProgressComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("max", ctx.max)("value", ctx.value);
        ɵngcc0.ɵɵclassProp("am-progress", ctx.amProgress)("am-progress-outer", ctx.outer)("am-progress-fixed-outer", ctx.fixOuter)("am-progress-hide-outer", ctx.hideOuter)("am-progress-exceedance", ctx.exceedance);
    } }, inputs: { unfilled: "unfilled", position: "position", barStyle: "barStyle", percent: "percent" }, decls: 1, vars: 6, consts: [[3, "ngStyle"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-bar");
        ɵngcc0.ɵɵstyleProp("width", ctx.percent <= 100 ? ctx.percent : 10000 / ctx.percent, "%");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.barStyle);
    } }, directives: [ɵngcc1.NgStyle], encapsulation: 2 });
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    unfilled: [{ type: Input }],
    position: [{ type: Input }],
    barStyle: [{ type: Input }],
    percent: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }],
    value: [{ type: HostBinding, args: ['attr.value',] }],
    amProgress: [{ type: HostBinding, args: ['class.am-progress',] }],
    outer: [{ type: HostBinding, args: ['class.am-progress-outer',] }],
    fixOuter: [{ type: HostBinding, args: ['class.am-progress-fixed-outer',] }],
    hideOuter: [{ type: HostBinding, args: ['class.am-progress-hide-outer',] }],
    exceedance: [{ type: HostBinding, args: ['class.am-progress-exceedance',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ProgressComponent, [{
        type: Component,
        args: [{
                selector: 'Progress, nzm-progress',
                template: "<div\n  class=\"{{ prefixCls }}-bar\"\n  [ngStyle]=\"barStyle\"\n  [style.width.%]=\"percent <= 100 ? percent : 10000 / percent\"\n></div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { unfilled: [{
            type: Input
        }], position: [{
            type: Input
        }], barStyle: [{
            type: Input
        }], max: [{
            type: HostBinding,
            args: ['attr.max']
        }], amProgress: [{
            type: HostBinding,
            args: ['class.am-progress']
        }], outer: [{
            type: HostBinding,
            args: ['class.am-progress-outer']
        }], percent: [{
            type: Input
        }], value: [{
            type: HostBinding,
            args: ['attr.value']
        }], fixOuter: [{
            type: HostBinding,
            args: ['class.am-progress-fixed-outer']
        }], hideOuter: [{
            type: HostBinding,
            args: ['class.am-progress-hide-outer']
        }], exceedance: [{
            type: HostBinding,
            args: ['class.am-progress-exceedance']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFqRixNQUFNLE9BQU8saUJBQWlCO0FBQzlCLElBZ0RFO0FBQWdCLFFBaERoQixjQUFTLEdBQVcsYUFBYSxDQUFDO0FBQ3BDLFFBQ1UsYUFBUSxHQUFXLENBQUMsQ0FBQztBQUMvQixRQUFVLGdCQUFXLEdBQVksS0FBSyxDQUFDO0FBQ3ZDLFFBRUUsYUFBUSxHQUFZLElBQUksQ0FBQztBQUMzQixRQUNFLGFBQVEsR0FBaUIsT0FBTyxDQUFDO0FBQ25DLFFBQ0UsYUFBUSxHQUFXLEVBQUUsQ0FBQztBQUN4QixRQWNFLFFBQUcsR0FBVyxHQUFHLENBQUM7QUFDcEIsUUFNRSxlQUFVLEdBQVksSUFBSSxDQUFDO0FBQzdCLFFBQ0UsVUFBSyxHQUFZLElBQUksQ0FBQztBQUN4QixJQWFpQixDQUFDO0FBQ2xCLElBdENFLElBQ0ksT0FBTztBQUFLLFFBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxPQUFPLENBQUMsS0FBYTtBQUMzQixRQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQ3JCLFlBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDOUIsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUdFLElBQ0ksS0FBSztBQUFLLFFBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBS0UsSUFDSSxRQUFRO0FBQUssUUFDZixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxTQUFTO0FBQUssUUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQy9DLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxVQUFVO0FBQUssUUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNIOzZDQXJEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1FBQXdCLGtCQUNsQyx3SkFBd0Msa0JBQ3hDLGFBQWEsRUFBRTthQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs7OzJEQUNJO0FBQUM7QUFDWTtBQUVELHVCQUdkLEtBQUs7QUFDTix1QkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLHNCQUNDLEtBQUs7QUFDTixrQkFZQyxXQUFXLFNBQUMsVUFBVTtBQUNwQixvQkFDRixXQUFXLFNBQUMsWUFBWTtBQUN0Qix5QkFJRixXQUFXLFNBQUMsbUJBQW1CO0FBQzdCLG9CQUNGLFdBQVcsU0FBQyx5QkFBeUI7QUFDbkMsdUJBQ0YsV0FBVyxTQUFDLCtCQUErQjtBQUN6Qyx3QkFHRixXQUFXLFNBQUMsOEJBQThCO0FBQ3hDLHlCQUdGLFdBQVcsU0FBQyw4QkFBOEI7QUFDekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IHR5cGUgUG9zaXRpb25UeXBlID0gJ25vcm1hbCcgfCAnZml4ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQcm9ncmVzcywgbnptLXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXByb2dyZXNzJztcblxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9leGNlZWRhbmNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgdW5maWxsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwb3NpdGlvbjogUG9zaXRpb25UeXBlID0gJ2ZpeGVkJztcbiAgQElucHV0KClcbiAgYmFyU3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKVxuICBnZXQgcGVyY2VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIHNldCBwZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID4gMTAwKSB7XG4gICAgICB0aGlzLl9leGNlZWRhbmNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXhjZWVkYW5jZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBtYXg6IG51bWJlciA9IDEwMDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnZhbHVlJylcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGVyY2VudDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHJvZ3Jlc3MnKVxuICBhbVByb2dyZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wcm9ncmVzcy1vdXRlcicpXG4gIG91dGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wcm9ncmVzcy1maXhlZC1vdXRlcicpXG4gIGdldCBmaXhPdXRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gJ2ZpeGVkJyA9PT0gdGhpcy5wb3NpdGlvbjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXByb2dyZXNzLWhpZGUtb3V0ZXInKVxuICBnZXQgaGlkZU91dGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy51bmZpbGxlZCAmJiAhdGhpcy5fZXhjZWVkYW5jZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXByb2dyZXNzLWV4Y2VlZGFuY2UnKVxuICBnZXQgZXhjZWVkYW5jZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjZWVkYW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==