import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
export class CardFooterComponent {
    constructor() {
        this.prefixCls = 'am-card-footer';
        this.content = null;
        this.extra = null;
        this.cardFooterWrapper = true;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
CardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'CardFooter, nzm-card-footer',
                template: "<div class=\"{{ prefixCls }}-content\">\n  <ng-container *ngIf=\"!isTemplateRef(content); else contentTemplate\">{{ content }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"{{ prefixCls }}-extra\">\n  <ng-container *ngIf=\"!isTemplateRef(extra); else extraTemplate\">{{ extra }}</ng-container>\n</div>\n<ng-template #contentTemplate>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardFooterComponent.ctorParameters = () => [];
CardFooterComponent.propDecorators = {
    content: [{ type: Input }],
    extra: [{ type: Input }],
    cardFooterWrapper: [{ type: HostBinding, args: ['class.am-card-footer',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYXJkL2NhcmQtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlGLE1BQU0sT0FBTyxtQkFBbUI7SUFXOUI7UUFWQSxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFHckMsWUFBTyxHQUErQixJQUFJLENBQUM7UUFFM0MsVUFBSyxHQUErQixJQUFJLENBQUM7UUFHekMsc0JBQWlCLEdBQVksSUFBSSxDQUFDO0lBRW5CLENBQUM7SUFFaEIsYUFBYSxDQUFDLEtBQUs7UUFDakIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0lBQ3RDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMGhCQUEyQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7c0JBSUUsS0FBSztvQkFFTCxLQUFLO2dDQUdMLFdBQVcsU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhcmRGb290ZXIsIG56bS1jYXJkLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZvb3RlckNvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLWNhcmQtZm9vdGVyJztcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYXJkLWZvb3RlcicpXG4gIGNhcmRGb290ZXJXcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=