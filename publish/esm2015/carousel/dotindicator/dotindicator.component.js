import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DotIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelement(1, "span", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("am-carousel-wrap-dot-active", item_r1.active);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", item_r1.active ? ctx_r0.dotActiveStyle : ctx_r0.dotStyle);
} }
export class DotIndicatorComponent {
    constructor() {
        this.items = [];
        this._page = 0;
        this._pageCount = 0;
        this.dotStyle = {};
        this.dotActiveStyle = {};
        this.dotColor = 'white';
        this.dotIndicator = true;
    }
    set page(p) {
        this._page = p;
        this.updateSelected();
    }
    set pageCount(p) {
        this._pageCount = p || 0;
        this.updateItems();
    }
    updateItems() {
        this.items = new Array(this._pageCount);
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i] = { active: i == this._page };
        }
    }
    updateSelected() {
        if (this.items.length != this._pageCount) {
            return this.updateItems();
        }
        if (this.items.length == 0) {
            return;
        }
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i].active = false;
        }
        this.items[this._page].active = true;
    }
}
DotIndicatorComponent.ɵfac = function DotIndicatorComponent_Factory(t) { return new (t || DotIndicatorComponent)(); };
DotIndicatorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DotIndicatorComponent, selectors: [["DotIndicator"], ["nzm-dot-indicator"]], hostVars: 2, hostBindings: function DotIndicatorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dot-indicator", ctx.dotIndicator);
    } }, inputs: { dotStyle: "dotStyle", dotActiveStyle: "dotActiveStyle", dotColor: "dotColor", page: "page", pageCount: "pageCount" }, decls: 2, vars: 1, consts: [[1, "am-carousel-wrap"], ["class", "am-carousel-wrap-dot", 3, "am-carousel-wrap-dot-active", 4, "ngFor", "ngForOf"], [1, "am-carousel-wrap-dot"], [3, "ngStyle"]], template: function DotIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DotIndicatorComponent_div_1_Template, 2, 3, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2 });
DotIndicatorComponent.propDecorators = {
    page: [{ type: Input }],
    pageCount: [{ type: Input }],
    dotStyle: [{ type: Input }],
    dotActiveStyle: [{ type: Input }],
    dotColor: [{ type: Input }],
    dotIndicator: [{ type: HostBinding, args: ['class.dot-indicator',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DotIndicatorComponent, [{
        type: Component,
        args: [{
                selector: 'DotIndicator, nzm-dot-indicator',
                template: "<div class=\"am-carousel-wrap\">\n  <div *ngFor=\"let item of items\" class=\"am-carousel-wrap-dot\" [class.am-carousel-wrap-dot-active]=\"item.active\">\n    <span [ngStyle]=\"item.active ? dotActiveStyle : dotStyle\"></span>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { dotStyle: [{
            type: Input
        }], dotActiveStyle: [{
            type: Input
        }], dotColor: [{
            type: Input
        }], dotIndicator: [{
            type: HostBinding,
            args: ['class.dot-indicator']
        }], page: [{
            type: Input
        }], pageCount: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90aW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9jYXJvdXNlbC9kb3RpbmRpY2F0b3IvZG90aW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQU9qRixNQUFNLE9BQU8scUJBQXFCO0FBQ2xDLElBTkE7QUFDRyxRQUtELFVBQUssR0FBMEIsRUFBRSxDQUFDO0FBQ3BDLFFBQ1UsVUFBSyxHQUFHLENBQUMsQ0FBQztBQUNwQixRQUFVLGVBQVUsR0FBRyxDQUFDLENBQUM7QUFDekIsUUFZRSxhQUFRLEdBQVcsRUFBRSxDQUFDO0FBQ3hCLFFBQ0UsbUJBQWMsR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFDRSxhQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3JCLFFBRUUsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDL0IsSUFvQkEsQ0FBQztBQUNELElBeENFLElBQ0ksSUFBSSxDQUFDLENBQVM7QUFDcEIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNuQixRQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksU0FBUyxDQUFDLENBQVM7QUFDekIsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFVVSxXQUFXO0FBQ3JCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsUUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QyxZQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDVSxjQUFjO0FBQ3hCLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzlDLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDaEMsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUMsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDbkMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSDtpREFsREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUFpQyxrQkFDM0M7a0RBQTRDO0tBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7OzJFQUNJO0FBQUM7QUFDSSxtQkFLUCxLQUFLO0FBQ04sd0JBSUMsS0FBSztBQUNOLHVCQUlDLEtBQUs7QUFDTiw2QkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLDJCQUVDLFdBQVcsU0FBQyxxQkFBcUI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0RvdEluZGljYXRvciwgbnptLWRvdC1pbmRpY2F0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZG90aW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEb3RJbmRpY2F0b3JDb21wb25lbnQge1xuICBpdGVtczogeyBhY3RpdmU6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgcHJpdmF0ZSBfcGFnZSA9IDA7XG4gIHByaXZhdGUgX3BhZ2VDb3VudCA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IHBhZ2UocDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwYWdlQ291bnQocDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZUNvdW50ID0gcCB8fCAwO1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBkb3RTdHlsZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpXG4gIGRvdEFjdGl2ZVN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgZG90Q29sb3IgPSAnd2hpdGUnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZG90LWluZGljYXRvcicpXG4gIGRvdEluZGljYXRvcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5KHRoaXMuX3BhZ2VDb3VudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYWdlQ291bnQ7IGkrKykge1xuICAgICAgdGhpcy5pdGVtc1tpXSA9IHsgYWN0aXZlOiBpID09IHRoaXMuX3BhZ2UgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCAhPSB0aGlzLl9wYWdlQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFnZUNvdW50OyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXRlbXNbdGhpcy5fcGFnZV0uYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuIl19