import { Component, Input, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
WhiteSpaceComponent.ɵfac = function WhiteSpaceComponent_Factory(t) { return new (t || WhiteSpaceComponent)(); };
WhiteSpaceComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WhiteSpaceComponent, selectors: [["WhiteSpace"], ["nzm-whitespace"]], hostVars: 12, hostBindings: function WhiteSpaceComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-whitespace", ctx.amWhiteSpace)("am-whitespace-xs", ctx.amWhitespaceXs)("am-whitespace-sm", ctx.amWhitespaceSm)("am-whitespace-md", ctx.amWhitespaceMd)("am-whitespace-lg", ctx.amWhitespaceLg)("am-whitespace-xl", ctx.amWhitespaceXl);
    } }, inputs: { size: "size" }, decls: 0, vars: 0, template: function WhiteSpaceComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WhiteSpaceComponent, [{
        type: Component,
        args: [{
                selector: 'WhiteSpace, nzm-whitespace',
                template: ``
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }], amWhiteSpace: [{
            type: HostBinding,
            args: ['class.am-whitespace']
        }], amWhitespaceXs: [{
            type: HostBinding,
            args: ['class.am-whitespace-xs']
        }], amWhitespaceSm: [{
            type: HostBinding,
            args: ['class.am-whitespace-sm']
        }], amWhitespaceMd: [{
            type: HostBinding,
            args: ['class.am-whitespace-md']
        }], amWhitespaceLg: [{
            type: HostBinding,
            args: ['class.am-whitespace-lg']
        }], amWhitespaceXl: [{
            type: HostBinding,
            args: ['class.am-whitespace-xl']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGUtc3BhY2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3doaXRlLXNwYWNlL3doaXRlLXNwYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTlELE1BQU0sT0FBTyxtQkFBbUI7QUFDaEMsSUE0QkU7QUFBZ0IsUUE1QmhCLGNBQVMsR0FBVyxlQUFlLENBQUM7QUFDdEMsUUFFRSxTQUFJLEdBQXVCLElBQUksQ0FBQztBQUNsQyxRQUVFLGlCQUFZLEdBQVksSUFBSSxDQUFDO0FBQy9CLElBcUJpQixDQUFDO0FBQ2xCLElBdEJFLElBQ0ksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLGNBQWM7QUFBSyxRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxjQUFjO0FBQUssUUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLGNBQWM7QUFBSyxRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIOytDQWhDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1FBQTRCLGtCQUN0QyxRQUFRLEVBQUUsRUFBRSxjQUNiOzt3SUFDSTtBQUFDO0FBQ1k7QUFHWixtQkFESCxLQUFLO0FBQ04sMkJBRUMsV0FBVyxTQUFDLHFCQUFxQjtBQUMvQiw2QkFDRixXQUFXLFNBQUMsd0JBQXdCO0FBQ2xDLDZCQUdGLFdBQVcsU0FBQyx3QkFBd0I7QUFDbEMsNkJBR0YsV0FBVyxTQUFDLHdCQUF3QjtBQUNsQyw2QkFHRixXQUFXLFNBQUMsd0JBQXdCO0FBQ2xDLDZCQUdGLFdBQVcsU0FBQyx3QkFBd0I7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgV2hpdGVTcGFjZVNpemVUeXBlID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1doaXRlU3BhY2UsIG56bS13aGl0ZXNwYWNlJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIFdoaXRlU3BhY2VDb21wb25lbnQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS13aGl0ZXNwYWNlJztcblxuICBASW5wdXQoKVxuICBzaXplOiBXaGl0ZVNwYWNlU2l6ZVR5cGUgPSAnbWQnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZScpXG4gIGFtV2hpdGVTcGFjZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZS14cycpXG4gIGdldCBhbVdoaXRlc3BhY2VYcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAneHMnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZS1zbScpXG4gIGdldCBhbVdoaXRlc3BhY2VTbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnc20nO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZS1tZCcpXG4gIGdldCBhbVdoaXRlc3BhY2VNZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZS1sZycpXG4gIGdldCBhbVdoaXRlc3BhY2VMZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbGcnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0td2hpdGVzcGFjZS14bCcpXG4gIGdldCBhbVdoaXRlc3BhY2VYbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAneGwnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19