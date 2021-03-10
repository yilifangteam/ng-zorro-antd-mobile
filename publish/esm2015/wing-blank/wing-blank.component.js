import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
export class WingBlankComponent {
    constructor() {
        this.prefixCls = 'am-wingblank';
        this.size = 'lg';
        this.amWingBlank = true;
    }
    get amWingBlnkSm() {
        return this.size === 'sm';
    }
    get amWingBlnkMd() {
        return this.size === 'md';
    }
    get amWingBlnkLg() {
        return this.size === 'lg';
    }
}
WingBlankComponent.decorators = [
    { type: Component, args: [{
                selector: 'WingBlank, nzm-wingblank',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
WingBlankComponent.ctorParameters = () => [];
WingBlankComponent.propDecorators = {
    size: [{ type: Input }],
    amWingBlank: [{ type: HostBinding, args: ['class.am-wingblank',] }],
    amWingBlnkSm: [{ type: HostBinding, args: ['class.am-wingblank-sm',] }],
    amWingBlnkMd: [{ type: HostBinding, args: ['class.am-wingblank-md',] }],
    amWingBlnkLg: [{ type: HostBinding, args: ['class.am-wingblank-lg',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZy1ibGFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbIndpbmctYmxhbmsvd2luZy1ibGFuay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pGLE1BQU0sT0FBTyxrQkFBa0I7SUFxQjdCO1FBcEJBLGNBQVMsR0FBVyxjQUFjLENBQUM7UUFHbkMsU0FBSSxHQUFzQixJQUFJLENBQUM7UUFHL0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7SUFjYixDQUFDO0lBYmhCLElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyx1Q0FBMEM7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O21CQUlFLEtBQUs7MEJBR0wsV0FBVyxTQUFDLG9CQUFvQjsyQkFFaEMsV0FBVyxTQUFDLHVCQUF1QjsyQkFJbkMsV0FBVyxTQUFDLHVCQUF1QjsyQkFJbkMsV0FBVyxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBXaW5nQmxhbmtTaXplVHlwZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnV2luZ0JsYW5rLCBuem0td2luZ2JsYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpbmctYmxhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFdpbmdCbGFua0NvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXdpbmdibGFuayc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogV2luZ0JsYW5rU2l6ZVR5cGUgPSAnbGcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2luZ2JsYW5rJylcbiAgYW1XaW5nQmxhbms6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1zbScpXG4gIGdldCBhbVdpbmdCbG5rU20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1tZCcpXG4gIGdldCBhbVdpbmdCbG5rTWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21kJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXdpbmdibGFuay1sZycpXG4gIGdldCBhbVdpbmdCbG5rTGcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==