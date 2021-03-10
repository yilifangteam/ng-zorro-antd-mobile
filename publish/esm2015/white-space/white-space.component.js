import { Component, Input, HostBinding } from '@angular/core';
export class WhiteSpaceComponent {
    constructor() {
        this.prefixCls = 'am-whitespace';
        this.size = 'md';
        this.amWhiteSpace = true;
    }
    get amWhitespaceXs() {
        return this.size === 'xs';
    }
    get amWhitespaceSm() {
        return this.size === 'sm';
    }
    get amWhitespaceMd() {
        return this.size === 'md';
    }
    get amWhitespaceLg() {
        return this.size === 'lg';
    }
    get amWhitespaceXl() {
        return this.size === 'xl';
    }
}
WhiteSpaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'WhiteSpace, nzm-whitespace',
                template: ``
            },] }
];
WhiteSpaceComponent.ctorParameters = () => [];
WhiteSpaceComponent.propDecorators = {
    size: [{ type: Input }],
    amWhiteSpace: [{ type: HostBinding, args: ['class.am-whitespace',] }],
    amWhitespaceXs: [{ type: HostBinding, args: ['class.am-whitespace-xs',] }],
    amWhitespaceSm: [{ type: HostBinding, args: ['class.am-whitespace-sm',] }],
    amWhitespaceMd: [{ type: HostBinding, args: ['class.am-whitespace-md',] }],
    amWhitespaceLg: [{ type: HostBinding, args: ['class.am-whitespace-lg',] }],
    amWhitespaceXl: [{ type: HostBinding, args: ['class.am-whitespace-xl',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGUtc3BhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJ3aGl0ZS1zcGFjZS93aGl0ZS1zcGFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTlELE1BQU0sT0FBTyxtQkFBbUI7SUE2QjlCO1FBNUJBLGNBQVMsR0FBVyxlQUFlLENBQUM7UUFHcEMsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFHaEMsaUJBQVksR0FBWSxJQUFJLENBQUM7SUFzQmQsQ0FBQztJQXJCaEIsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OzttQkFJRSxLQUFLOzJCQUdMLFdBQVcsU0FBQyxxQkFBcUI7NkJBRWpDLFdBQVcsU0FBQyx3QkFBd0I7NkJBSXBDLFdBQVcsU0FBQyx3QkFBd0I7NkJBSXBDLFdBQVcsU0FBQyx3QkFBd0I7NkJBSXBDLFdBQVcsU0FBQyx3QkFBd0I7NkJBSXBDLFdBQVcsU0FBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBXaGl0ZVNwYWNlU2l6ZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnV2hpdGVTcGFjZSwgbnptLXdoaXRlc3BhY2UnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgV2hpdGVTcGFjZUNvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXdoaXRlc3BhY2UnO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6IFdoaXRlU3BhY2VTaXplVHlwZSA9ICdtZCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlJylcbiAgYW1XaGl0ZVNwYWNlOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlLXhzJylcbiAgZ2V0IGFtV2hpdGVzcGFjZVhzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICd4cyc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlLXNtJylcbiAgZ2V0IGFtV2hpdGVzcGFjZVNtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlLW1kJylcbiAgZ2V0IGFtV2hpdGVzcGFjZU1kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlLWxnJylcbiAgZ2V0IGFtV2hpdGVzcGFjZUxnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsZyc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS13aGl0ZXNwYWNlLXhsJylcbiAgZ2V0IGFtV2hpdGVzcGFjZVhsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICd4bCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=