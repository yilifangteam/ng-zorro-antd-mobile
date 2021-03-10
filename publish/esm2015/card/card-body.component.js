import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class CardBodyComponent {
    constructor() {
        this.cardBodyWrapper = true;
    }
}
CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) { return new (t || CardBodyComponent)(); };
CardBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardBodyComponent, selectors: [["CardBody"], ["nzm-card-body"]], hostVars: 2, hostBindings: function CardBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-card-body", ctx.cardBodyWrapper);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CardBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
CardBodyComponent.ctorParameters = () => [];
CardBodyComponent.propDecorators = {
    cardBodyWrapper: [{ type: HostBinding, args: ['class.am-card-body',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardBodyComponent, [{
        type: Component,
        args: [{
                selector: 'CardBody, nzm-card-body',
                template: `
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { cardBodyWrapper: [{
            type: HostBinding,
            args: ['class.am-card-body']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9jYXJkL2NhcmQtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTMUUsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QixJQUVFO0FBQWdCLFFBRm1CLG9CQUFlLEdBQVksSUFBSSxDQUFDO0FBQ3JFLElBQ2lCLENBQUM7QUFDbEI7NkNBWEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUF5QixrQkFDbkMsUUFBUSxFQUFFLG1DQUVULGtCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs2QkFDSTtBQUFDO0FBQ1k7QUFBcUMsOEJBQXBELFdBQVcsU0FBQyxvQkFBb0I7QUFBTTs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FyZEJvZHksIG56bS1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQm9keUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2FyZC1ib2R5JykgY2FyZEJvZHlXcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=