import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
export class CardComponent {
    constructor() {
        this.full = false;
        this.cardWrapper = true;
    }
    get cardFull() {
        return this.full;
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'Card, nzm-card',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    full: [{ type: Input }],
    cardWrapper: [{ type: HostBinding, args: ['class.am-card',] }],
    cardFull: [{ type: HostBinding, args: ['class.am-card-full',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU0sT0FBTyxhQUFhO0lBV3hCO1FBVEEsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUd0QixnQkFBVyxHQUFZLElBQUksQ0FBQztJQU1iLENBQUM7SUFMaEIsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix1Q0FBb0M7Z0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O21CQUVFLEtBQUs7MEJBR0wsV0FBVyxTQUFDLGVBQWU7dUJBRTNCLFdBQVcsU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FyZCwgbnptLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGZ1bGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWNhcmQnKVxuICBjYXJkV3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tY2FyZC1mdWxsJylcbiAgZ2V0IGNhcmRGdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZ1bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=