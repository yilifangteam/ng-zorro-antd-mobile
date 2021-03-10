import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
export class SafeHTMLPipe {
    constructor(_sanitized) {
        this._sanitized = _sanitized;
    }
    transform(value) {
        return this._sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHTMLPipe.ɵfac = function SafeHTMLPipe_Factory(t) { return new (t || SafeHTMLPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SafeHTMLPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "safeHTML", type: SafeHTMLPipe, pure: true });
SafeHTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SafeHTMLPipe, [{
        type: Pipe,
        args: [{ name: 'safeHTML' }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1odG1sLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3BpcGVzL3NhdmUtaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUd6RCxNQUFNLE9BQU8sWUFBWTtBQUFHLElBQzFCLFlBQW9CLFVBQXdCO0FBQUksUUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBYztBQUFDLElBQUUsQ0FBQztBQUNsRCxJQUNFLFNBQVMsQ0FBQyxLQUFLO0FBQUksUUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFELElBQUUsQ0FBQztBQUNIO3dDQVBDLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7K0ZBQ3JCO0FBQUM7QUFBc0MsWUFIbkMsWUFBWTtBQUFHOzs7OzZFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoeyBuYW1lOiAnc2FmZUhUTUwnIH0pXG5leHBvcnQgY2xhc3MgU2FmZUhUTUxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplZDogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==