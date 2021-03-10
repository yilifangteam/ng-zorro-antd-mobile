import { Component, forwardRef, Input, ElementRef, TemplateRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class StepComponent {
    constructor(_el) {
        this._el = _el;
        this.prefixCls = 'am-steps';
        this.stepItemCls = {};
        this.iconCls = {
            [`${this.prefixCls}-icon`]: true
        };
        this.isIconString = true;
        this.outStatus = 'process';
        this.isCustomStatus = false;
        this.isCustomIcon = false;
        this.title = null;
        this.description = null;
        this._currentIndex = 0;
        this.clsStepItem = true;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        if (value) {
            this._status = value;
            this.isCustomStatus = true;
            this.setIcon();
            this.setClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value) {
            this._icon = value;
            this.isCustomIcon = true;
            this.setClass();
        }
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.stepNumber ? StepStatusEnum.FINISH : current === this.stepNumber ?
                this.outStatus || '' : StepStatusEnum.WAIT;
            this.setIcon();
            this.setClass();
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    setClass() {
        this.stepItemCls = {
            [`${this.prefixCls}-item-${this.status}`]: true,
            [`${this.prefixCls}-item-custom`]: this.isCustomIcon || (this.icon && this._currentIndex !== this.stepNumber)
        };
    }
    setIcon() {
        if (!this.isCustomIcon) {
            switch (this._status) {
                case StepStatusEnum.FINISH:
                    this._icon = 'check-circle-o';
                    break;
                case StepStatusEnum.ERROR:
                    this._icon = 'cross-circle-o';
                    break;
                case StepStatusEnum.WAIT:
                    this._icon = 'ellipsis';
                    break;
                default:
                    break;
            }
        }
    }
    ngOnInit() { }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'Step, nzm-step',
                template: "<div [ngClass]=\"stepItemCls\">\n  <div class=\"{{ prefixCls }}-item-tail\">\n    {{ tailContent }}\n  </div>\n  <div class=\"{{ prefixCls }}-item-icon\">\n    <span *ngIf=\"isTemplateRef(icon)\" [ngClass]=\"iconCls\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && (status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\">\n      <Icon [type]=\"icon\" [size]=\"iconSize\"> </Icon>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && !(status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\"\n      >{{ stepNumber }}\n    </span>\n  </div>\n  <div class=\"{{ prefixCls }}-item-content\">\n    <div class=\"{{ prefixCls }}-item-title\">\n      <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n    </div>\n    <div *ngIf=\"description\" class=\"{{ prefixCls }}-item-description\">\n      <ng-container *ngIf=\"!isTemplateRef(description); else descriptionTemplate\">{{ description }}</ng-container>\n    </div>\n  </div>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"description\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => StepComponent),
                        multi: true
                    }
                ]
            },] }
];
StepComponent.ctorParameters = () => [
    { type: ElementRef }
];
StepComponent.propDecorators = {
    status: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    icon: [{ type: Input }],
    clsStepItem: [{ type: HostBinding, args: ['class.am-steps-item',] }]
};
export var StepStatusEnum;
(function (StepStatusEnum) {
    StepStatusEnum["WAIT"] = "wait";
    StepStatusEnum["PROCESS"] = "process";
    StepStatusEnum["FINISH"] = "finish";
    StepStatusEnum["ERROR"] = "error";
})(StepStatusEnum || (StepStatusEnum = {}));
export var StepDirectionEnum;
(function (StepDirectionEnum) {
    StepDirectionEnum["VERTICAL"] = "vertical";
    StepDirectionEnum["HORIZONTAL"] = "horizontal";
})(StepDirectionEnum || (StepDirectionEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInN0ZXBzL3N0ZXAvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWNuRCxNQUFNLE9BQU8sYUFBYTtJQTREeEIsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUEzRG5DLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFXO1lBQ2hCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUMsRUFBRSxJQUFJO1NBQ2pDLENBQUM7UUFHRixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSWQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFlN0IsVUFBSyxHQUE4QixJQUFJLENBQUM7UUFFeEMsZ0JBQVcsR0FBOEIsSUFBSSxDQUFDO1FBdUJ0QyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUcxQixnQkFBVyxHQUFZLElBQUksQ0FBQztJQUVXLENBQUM7SUEzQ3hDLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBcUI7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMs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RCxNQUFNLENBQU4sSUFBWSxpQkFHWDtBQUhELFdBQVksaUJBQWlCO0lBQzNCLDBDQUFxQixDQUFBO0lBQ3JCLDhDQUF5QixDQUFBO0FBQzNCLENBQUMsRUFIVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1N0ZXAsIG56bS1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0ZXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZpeENscyA9ICdhbS1zdGVwcyc7XG4gIHN0ZXBJdGVtQ2xzID0ge307XG4gIGljb25DbHM6IG9iamVjdCA9IHtcbiAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gXTogdHJ1ZVxuICB9O1xuICB0YWlsQ29udGVudDogc3RyaW5nO1xuICBzdGVwTnVtYmVyOiBudW1iZXI7XG4gIGlzSWNvblN0cmluZzogYm9vbGVhbiA9IHRydWU7XG4gIGljb25TaXplOiBzdHJpbmc7XG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcblxuICBwcml2YXRlIF9zdGF0dXM6IFN0ZXBTdGF0dXNFbnVtO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgaXNDdXN0b21JY29uID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0YXR1cygpOiBTdGVwU3RhdHVzRW51bSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuICBzZXQgc3RhdHVzKHZhbHVlOiBTdGVwU3RhdHVzRW51bSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcbiAgQElucHV0KClcbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNDdXN0b21JY29uID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBzZXQgY3VycmVudEluZGV4KGN1cnJlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tU3RhdHVzKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSBjdXJyZW50ID4gdGhpcy5zdGVwTnVtYmVyID8gU3RlcFN0YXR1c0VudW0uRklOSVNIIDogY3VycmVudCA9PT0gdGhpcy5zdGVwTnVtYmVyID9cbiAgICAgICAgdGhpcy5vdXRTdGF0dXMgfHwgKCcnIGFzIGFueSkgOiBTdGVwU3RhdHVzRW51bS5XQUlUO1xuICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXN0ZXBzLWl0ZW0nKVxuICBjbHNTdGVwSXRlbTogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHNldENsYXNzKCkge1xuICAgIHRoaXMuc3RlcEl0ZW1DbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWl0ZW0tJHt0aGlzLnN0YXR1c31gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taXRlbS1jdXN0b21gXTogdGhpcy5pc0N1c3RvbUljb24gfHwgKHRoaXMuaWNvbiAmJiB0aGlzLl9jdXJyZW50SW5kZXggIT09IHRoaXMuc3RlcE51bWJlcilcbiAgICB9O1xuICB9XG5cbiAgc2V0SWNvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21JY29uKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuX3N0YXR1cykge1xuICAgICAgICBjYXNlIFN0ZXBTdGF0dXNFbnVtLkZJTklTSDpcbiAgICAgICAgICB0aGlzLl9pY29uID0gJ2NoZWNrLWNpcmNsZS1vJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGVwU3RhdHVzRW51bS5FUlJPUjpcbiAgICAgICAgICB0aGlzLl9pY29uID0gJ2Nyb3NzLWNpcmNsZS1vJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGVwU3RhdHVzRW51bS5XQUlUOlxuICAgICAgICAgIHRoaXMuX2ljb24gPSAnZWxsaXBzaXMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0dXNFbnVtIHtcbiAgV0FJVCA9ICd3YWl0JyxcbiAgUFJPQ0VTUyA9ICdwcm9jZXNzJyxcbiAgRklOSVNIID0gJ2ZpbmlzaCcsXG4gIEVSUk9SID0gJ2Vycm9yJ1xufVxuZXhwb3J0IGVudW0gU3RlcERpcmVjdGlvbkVudW0ge1xuICBWRVJUSUNBTCA9ICd2ZXJ0aWNhbCcsXG4gIEhPUklaT05UQUwgPSAnaG9yaXpvbnRhbCdcbn1cbiJdfQ==