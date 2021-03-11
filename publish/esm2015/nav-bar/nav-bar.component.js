import { Component, Input, TemplateRef, Output, EventEmitter, HostBinding } from '@angular/core';
export class NavBarComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-navbar',
            mode: 'dark',
            onLeftClick: () => { }
        };
        this.navbarCls = {};
        this.isIconString = true;
        this.isLeftContentString = true;
        this.isRightContentString = true;
        this.onLeftClick = new EventEmitter();
        this.amNavbar = true;
    }
    set mode(value) {
        this.defaultProps.mode = value;
        this.amNavbarLight = this.defaultProps.mode === 'light';
        this.amNavbardark = this.defaultProps.mode === 'dark';
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.isIconString = false;
        }
        else {
            this.isIconString = true;
        }
        this._icon = value;
    }
    get leftContent() {
        return this._leftContent;
    }
    set leftContent(value) {
        if (value instanceof TemplateRef) {
            this.isLeftContentString = false;
        }
        else {
            this.isLeftContentString = true;
        }
        this._leftContent = value;
    }
    get rightContent() {
        return this._rightContent;
    }
    set rightContent(value) {
        if (value instanceof TemplateRef) {
            this.isRightContentString = false;
        }
        else {
            this.isRightContentString = true;
        }
        this._rightContent = value;
    }
    click(event) {
        this.onLeftClick.emit(event);
    }
}
NavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'Navbar, nzm-nav-bar',
                template: "<div role=\"button\" class=\"{{ defaultProps.prefixCls }}-left\" (click)=\"click($event)\">\n  <ng-template *ngIf=\"!isLeftContentString\" [ngTemplateOutlet]=\"leftContent\"></ng-template>\n  <span *ngIf=\"icon\" class=\"{{ defaultProps.prefixCls }}-left-icon\" aria-hidden=\"true\">\n    <Icon *ngIf=\"isIconString\" [type]=\"icon\"></Icon>\n    <ng-template *ngIf=\"!isIconString\" [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  {{ isLeftContentString ? leftContent : null }}\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-title\">\n  <ng-content></ng-content>\n</div>\n<div class=\"{{ defaultProps.prefixCls }}-right\">\n  {{ isRightContentString ? rightContent : null }}\n  <ng-template *ngIf=\"!isRightContentString\" [ngTemplateOutlet]=\"rightContent\"></ng-template>\n</div>\n"
            },] }
];
NavBarComponent.ctorParameters = () => [];
NavBarComponent.propDecorators = {
    mode: [{ type: Input }],
    icon: [{ type: Input }],
    leftContent: [{ type: Input }],
    rightContent: [{ type: Input }],
    onLeftClick: [{ type: Output }],
    amNavbar: [{ type: HostBinding, args: ['class.am-navbar',] }],
    amNavbarLight: [{ type: HostBinding, args: ['class.am-navbar-light',] }],
    amNavbardark: [{ type: HostBinding, args: ['class.am-navbar-dark',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbIm5hdi1iYXIvbmF2LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpHLE1BQU0sT0FBTyxlQUFlO0lBbUUxQjtRQWxFQSxpQkFBWSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFdBQVc7WUFDdEIsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztTQUN0QixDQUFDO1FBQ0YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHdCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwQyx5QkFBb0IsR0FBWSxJQUFJLENBQUM7UUFpRHJDLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0MsYUFBUSxHQUFHLElBQUksQ0FBQztJQU1SLENBQUM7SUFwRGhCLElBQ0ksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBZ0M7UUFDdkMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWdDO1FBQzlDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBZ0M7UUFDL0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBYUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHl5QkFBdUM7YUFDeEM7Ozs7bUJBZ0JFLEtBQUs7bUJBTUwsS0FBSzswQkFZTCxLQUFLOzJCQVlMLEtBQUs7MEJBWUwsTUFBTTt1QkFHTixXQUFXLFNBQUMsaUJBQWlCOzRCQUU3QixXQUFXLFNBQUMsdUJBQXVCOzJCQUVuQyxXQUFXLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdOYXZiYXIsIG56bS1uYXYtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1iYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5hdkJhckNvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1uYXZiYXInLFxuICAgIG1vZGU6ICdkYXJrJyxcbiAgICBvbkxlZnRDbGljazogKCkgPT4ge31cbiAgfTtcbiAgbmF2YmFyQ2xzID0ge307XG4gIGlzSWNvblN0cmluZzogYm9vbGVhbiA9IHRydWU7XG4gIGlzTGVmdENvbnRlbnRTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBpc1JpZ2h0Q29udGVudFN0cmluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfbGVmdENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX3JpZ2h0Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLm1vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLmFtTmF2YmFyTGlnaHQgPSB0aGlzLmRlZmF1bHRQcm9wcy5tb2RlID09PSAnbGlnaHQnO1xuICAgIHRoaXMuYW1OYXZiYXJkYXJrID0gdGhpcy5kZWZhdWx0UHJvcHMubW9kZSA9PT0gJ2RhcmsnO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuaXNJY29uU3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBsZWZ0Q29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbGVmdENvbnRlbnQ7XG4gIH1cbiAgc2V0IGxlZnRDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuaXNMZWZ0Q29udGVudFN0cmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTGVmdENvbnRlbnRTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9sZWZ0Q29udGVudCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCByaWdodENvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q29udGVudDtcbiAgfVxuICBzZXQgcmlnaHRDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuaXNSaWdodENvbnRlbnRTdHJpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1JpZ2h0Q29udGVudFN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3JpZ2h0Q29udGVudCA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkxlZnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1uYXZiYXInKVxuICBwdWJsaWMgYW1OYXZiYXIgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLW5hdmJhci1saWdodCcpXG4gIHB1YmxpYyBhbU5hdmJhckxpZ2h0O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLW5hdmJhci1kYXJrJylcbiAgcHVibGljIGFtTmF2YmFyZGFyaztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLm9uTGVmdENsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=