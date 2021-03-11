import { Component, ViewEncapsulation, Input, TemplateRef, NgZone } from '@angular/core';
export class ToastComponent {
    constructor(_zone) {
        this._zone = _zone;
        this.prefixCls = 'am-toast';
        this.isContentString = true;
        this.transitionName = 'am-fade-enter am-fade-enter-active';
        this._iconType = '';
        this._content = '';
        this.mask = true;
        this.position = 'middle';
    }
    get content() {
        return this._content;
    }
    set content(value) {
        if (value instanceof TemplateRef) {
            this.isContentString = false;
        }
        else {
            this.isContentString = true;
        }
        this._zone.run(() => {
            this._content = value;
        });
    }
    get iconType() {
        return this._iconType;
    }
    set iconType(value) {
        this._zone.run(() => {
            this._iconType = value;
        });
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'Toast',
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"{{ prefixCls }}-notice {{ prefixCls }}-notice-closable {{ transitionName }}\">\n  <div class=\"{{ prefixCls }}-notice-content\">\n    <div role=\"alert\" *ngIf=\"iconType\" class=\"{{ prefixCls }}-text {{ prefixCls }}-text-icon\" aria-live=\"assertive\">\n      <Icon [type]=\"iconType\" [size]=\"'lg'\"></Icon>\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n    </div>\n    <div *ngIf=\"!iconType\" class=\"{{ prefixCls }}-text\" role=\"alert\" aria-live=\"assertive\">\n      <div *ngIf=\"isContentString\" class=\"{{ prefixCls }}-text-info\">{{ content }}</div>\n      <ng-template *ngIf=\"!isContentString\" [ngTemplateOutlet]=\"content\"></ng-template>\n    </div>\n  </div>\n  <a class=\"{{ prefixCls }}-notice-close\">\n    <span class=\"{{ prefixCls }}-notice-close-x\"></span>\n  </a>\n</div>\n",
                host: {
                    '[class.am-toast]': 'true',
                    '[class.am-toast-mask]': 'mask',
                    '[class.am-toast-mask-top]': `mask && position === 'top'`,
                    '[class.am-toast-mask-middle]': `mask && position === 'middle'`,
                    '[class.am-toast-mask-bottom]': `mask && position === 'bottom'`,
                    '[class.am-toast-nomask]': '!mask',
                    '[class.am-toast-nomask-top]': `!mask && position === 'top'`,
                    '[class.am-toast-nomask-middle]': `!mask && position === 'middle'`,
                    '[class.am-toast-nomask-bottom]': `!mask && position === 'bottom'`
                }
            },] }
];
ToastComponent.ctorParameters = () => [
    { type: NgZone }
];
ToastComponent.propDecorators = {
    mask: [{ type: Input }],
    content: [{ type: Input }],
    iconType: [{ type: Input }],
    position: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCekYsTUFBTSxPQUFPLGNBQWM7SUFxQ3pCLFlBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBcENqQyxjQUFTLEdBQVcsVUFBVSxDQUFDO1FBQy9CLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLG1CQUFjLEdBQUcsb0NBQW9DLENBQUM7UUFFOUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQThCLEVBQUUsQ0FBQztRQUdqRCxTQUFJLEdBQVksSUFBSSxDQUFDO1FBeUJyQixhQUFRLEdBQVcsUUFBUSxDQUFDO0lBRVEsQ0FBQztJQTFCckMsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFnQztRQUMxQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsNDJCQUFxQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLE1BQU07b0JBQzFCLHVCQUF1QixFQUFFLE1BQU07b0JBQy9CLDJCQUEyQixFQUFFLDRCQUE0QjtvQkFDekQsOEJBQThCLEVBQUUsK0JBQStCO29CQUMvRCw4QkFBOEIsRUFBRSwrQkFBK0I7b0JBQy9ELHlCQUF5QixFQUFFLE9BQU87b0JBQ2xDLDZCQUE2QixFQUFFLDZCQUE2QjtvQkFDNUQsZ0NBQWdDLEVBQUUsZ0NBQWdDO29CQUNsRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0M7aUJBQ25FO2FBQ0Y7OztZQWpCMEQsTUFBTTs7O21CQTJCOUQsS0FBSztzQkFFTCxLQUFLO3VCQWNMLEtBQUs7dUJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBUZW1wbGF0ZVJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RvYXN0JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW0tdG9hc3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW0tdG9hc3QtbWFza10nOiAnbWFzaycsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1tYXNrLXRvcF0nOiBgbWFzayAmJiBwb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW0tdG9hc3QtbWFzay1taWRkbGVdJzogYG1hc2sgJiYgcG9zaXRpb24gPT09ICdtaWRkbGUnYCxcbiAgICAnW2NsYXNzLmFtLXRvYXN0LW1hc2stYm90dG9tXSc6IGBtYXNrICYmIHBvc2l0aW9uID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1ub21hc2tdJzogJyFtYXNrJyxcbiAgICAnW2NsYXNzLmFtLXRvYXN0LW5vbWFzay10b3BdJzogYCFtYXNrICYmIHBvc2l0aW9uID09PSAndG9wJ2AsXG4gICAgJ1tjbGFzcy5hbS10b2FzdC1ub21hc2stbWlkZGxlXSc6IGAhbWFzayAmJiBwb3NpdGlvbiA9PT0gJ21pZGRsZSdgLFxuICAgICdbY2xhc3MuYW0tdG9hc3Qtbm9tYXNrLWJvdHRvbV0nOiBgIW1hc2sgJiYgcG9zaXRpb24gPT09ICdib3R0b20nYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tdG9hc3QnO1xuICBpc0NvbnRlbnRTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBtYXNrQ2xhc3NNYXA7XG4gIHRyYW5zaXRpb25OYW1lID0gJ2FtLWZhZGUtZW50ZXIgYW0tZmFkZS1lbnRlci1hY3RpdmUnO1xuXG4gIHByaXZhdGUgX2ljb25UeXBlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIG1hc2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuICBzZXQgY29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFN0cmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQ29udGVudFN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaWNvblR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvblR5cGU7XG4gIH1cbiAgc2V0IGljb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLl9pY29uVHlwZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uOiBzdHJpbmcgPSAnbWlkZGxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG59XG4iXX0=