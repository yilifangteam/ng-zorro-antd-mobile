import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
export class CardHeaderComponent {
    constructor() {
        this.prefixCls = 'am-card-header';
        this.thumb = null;
        this.thumbStyle = null;
        this.title = null;
        this.extra = null;
        this.cardBodyWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'CardHeader, nzm-card-header',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <img *ngIf=\"thumb && !isTemplateRef(thumb)\" src=\"{{ thumb }}\" [ngStyle]=\"thumbStyle\" />\n  <ng-container *ngIf=\"thumb && isTemplateRef(thumb)\" [ngTemplateOutlet]=\"thumb\"></ng-container>\n  <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardHeaderComponent.ctorParameters = () => [];
CardHeaderComponent.propDecorators = {
    thumb: [{ type: Input }],
    thumbStyle: [{ type: Input }],
    title: [{ type: Input }],
    extra: [{ type: Input }],
    cardBodyWrapper: [{ type: HostBinding, args: ['class.am-card-header',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYXJkL2NhcmQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlGLE1BQU0sT0FBTyxtQkFBbUI7SUFlOUI7UUFkQSxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFHckMsVUFBSyxHQUErQixJQUFJLENBQUM7UUFFekMsZUFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixVQUFLLEdBQStCLElBQUksQ0FBQztRQUV6QyxVQUFLLEdBQStCLElBQUksQ0FBQztRQUd6QyxvQkFBZSxHQUFZLElBQUksQ0FBQztJQUVqQixDQUFDO0lBRWhCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLHV0QkFBMkM7Z0JBQzNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O29CQUlFLEtBQUs7eUJBRUwsS0FBSztvQkFFTCxLQUFLO29CQUVMLEtBQUs7OEJBR0wsV0FBVyxTQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBIb3N0QmluZGluZywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FyZEhlYWRlciwgbnptLWNhcmQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tY2FyZC1oZWFkZXInO1xuXG4gIEBJbnB1dCgpXG4gIHRodW1iOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHRodW1iU3R5bGU6IG9iamVjdCA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYXJkLWhlYWRlcicpXG4gIGNhcmRCb2R5V3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19