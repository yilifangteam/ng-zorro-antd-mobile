import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
export class CarouselSlideComponent {
    constructor() {
        this.container = true;
        this.height = 'auto';
        this.overflow = 'hidden';
    }
}
CarouselSlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'CarouselSlide, nzm-carousel-slide',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CarouselSlideComponent.propDecorators = {
    container: [{ type: HostBinding, args: ['class.am-carousel-container',] }],
    width: [{ type: HostBinding, args: ['style.width.px',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    left: [{ type: HostBinding, args: ['style.left.px',] }],
    top: [{ type: HostBinding, args: ['style.top.px',] }],
    margin: [{ type: HostBinding, args: ['style.margin',] }],
    overflow: [{ type: HostBinding, args: ['style.overflow',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYXJvdXNlbC9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU9FLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJakIsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQVFoQixhQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3RCLENBQUM7OztZQXBCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsdUNBQThDO2dCQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3dCQUVFLFdBQVcsU0FBQyw2QkFBNkI7b0JBRXpDLFdBQVcsU0FBQyxnQkFBZ0I7cUJBRTVCLFdBQVcsU0FBQyxjQUFjO21CQUUxQixXQUFXLFNBQUMsZUFBZTtrQkFFM0IsV0FBVyxTQUFDLGNBQWM7cUJBRTFCLFdBQVcsU0FBQyxjQUFjO3VCQUUxQixXQUFXLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2Fyb3VzZWxTbGlkZSwgbnptLWNhcm91c2VsLXNsaWRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNsaWRlQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYXJvdXNlbC1jb250YWluZXInKVxuICBjb250YWluZXIgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgd2lkdGg7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgaGVpZ2h0ID0gJ2F1dG8nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQucHgnKVxuICBsZWZ0O1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRvcC5weCcpXG4gIHRvcDtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKVxuICBtYXJnaW47XG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKVxuICBvdmVyZmxvdyA9ICdoaWRkZW4nO1xufVxuIl19