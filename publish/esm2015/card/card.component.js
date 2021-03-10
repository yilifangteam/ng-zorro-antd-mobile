import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class CardComponent {
    constructor() {
        this.full = false;
        this.cardWrapper = true;
    }
    get cardFull() {
        return this.full;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["Card"], ["nzm-card"]], hostVars: 4, hostBindings: function CardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-card", ctx.cardWrapper)("am-card-full", ctx.cardFull);
    } }, inputs: { full: "full" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    full: [{ type: Input }],
    cardWrapper: [{ type: HostBinding, args: ['class.am-card',] }],
    cardFull: [{ type: HostBinding, args: ['class.am-card-full',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'Card, nzm-card',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { full: [{
            type: Input
        }], cardWrapper: [{
            type: HostBinding,
            args: ['class.am-card']
        }], cardFull: [{
            type: HostBinding,
            args: ['class.am-card-full']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPakYsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFVRTtBQUFnQixRQVRoQixTQUFJLEdBQVksS0FBSyxDQUFDO0FBQ3hCLFFBRUUsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDOUIsSUFLaUIsQ0FBQztBQUNsQixJQU5FLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNIO3lDQWZDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7UUFBZ0Isa0JBQzFCLHVDQUFvQyxrQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7OzZCQUNJO0FBQUM7QUFFQztBQUVPLG1CQUhYLEtBQUs7QUFDTiwwQkFFQyxXQUFXLFNBQUMsZUFBZTtBQUN6Qix1QkFDRixXQUFXLFNBQUMsb0JBQW9CO0FBQy9COzs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FyZCwgbnptLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGZ1bGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWNhcmQnKVxuICBjYXJkV3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2FyZC1mdWxsJylcbiAgZ2V0IGNhcmRGdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZ1bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=