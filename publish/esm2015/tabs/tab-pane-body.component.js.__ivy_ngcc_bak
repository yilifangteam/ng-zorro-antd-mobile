import { Component, Input, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';
export class TabPaneBodyComponent {
    constructor() {
        this._prerender = false;
        this.active = false;
        this.loaded = false;
        this.paneWrap = true;
    }
    get prerender() {
        return this._prerender;
    }
    set prerender(value) {
        this._prerender = value;
        if (value) {
            this.loaded = true;
        }
    }
    get wrapActive() {
        return this.active;
    }
    get wrapInactive() {
        return !this.active;
    }
    ngOnInit() { }
}
TabPaneBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[tab-pane-body]',
                template: "<ng-container *ngIf=\"loaded || prerender\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TabPaneBodyComponent.ctorParameters = () => [];
TabPaneBodyComponent.propDecorators = {
    active: [{ type: Input }],
    loaded: [{ type: Input }],
    content: [{ type: Input }],
    prerender: [{ type: Input }],
    paneWrap: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap',] }],
    wrapActive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-active',] }],
    wrapInactive: [{ type: HostBinding, args: ['class.am-tabs-pane-wrap-inactive',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRhYnMvdGFiLXBhbmUtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU90RyxNQUFNLE9BQU8sb0JBQW9CO0lBNEIvQjtRQTNCUSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQWNqQyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBVVYsQ0FBQztJQXRCaEIsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBSUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUNJLFlBQVk7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQW5DZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IseUlBQTZDO2dCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztxQkFJRSxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQVdMLFdBQVcsU0FBQyx5QkFBeUI7eUJBRXJDLFdBQVcsU0FBQyxnQ0FBZ0M7MkJBSTVDLFdBQVcsU0FBQyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RhYi1wYW5lLWJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYW5lLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhbmVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcHJlcmVuZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgZ2V0IHByZXJlbmRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlcmVuZGVyO1xuICB9XG4gIHNldCBwcmVyZW5kZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcmVyZW5kZXIgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwJylcbiAgcGFuZVdyYXA6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwLWFjdGl2ZScpXG4gIGdldCB3cmFwQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtcGFuZS13cmFwLWluYWN0aXZlJylcbiAgZ2V0IHdyYXBJbmFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==