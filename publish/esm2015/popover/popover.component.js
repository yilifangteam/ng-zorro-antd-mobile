import { Component, ViewEncapsulation } from '@angular/core';
import { PopoverComponentOptions } from './popover-component-options.provider';
export class PopoverComponent {
    constructor(options) {
        this.options = options;
        this.defaultProps = {
            prefixCls: 'am-popover'
        };
        this.maskCls = {};
        this.popoverCls = {};
    }
    setClassMap() {
        this.maskCls = {
            [`${this.defaultProps.prefixCls}-mask`]: this.options.mask,
            [`${this.defaultProps.prefixCls}-mask-hidden`]: !this.options.mask
        };
        this.popoverCls = {
            [`${this.defaultProps.prefixCls}`]: true,
            [`${this.defaultProps.prefixCls}-placement-${this.options.placement}`]: true,
            [`${this.defaultProps.prefixCls}-${this.options.className}`]: true
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'Popover',
                template: "<ng-content></ng-content>\n<div [ngClass]=\"maskCls\" (click)=\"options.hidePopover()\"></div>\n<div [ngClass]=\"popoverCls\" style=\"color: currentcolor;\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <div *ngIf=\"options.showArrow\" class=\"{{ defaultProps.prefixCls }}-arrow\"></div>\n    <div class=\"{{ defaultProps.prefixCls }}-inner\">\n      <div class=\"{{ defaultProps.prefixCls }}-inner-wrapper\">\n        <ng-template [ngTemplateOutlet]=\"options.overlay\" [ngTemplateOutletContext]=\"{ options: options }\">\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PopoverComponent.ctorParameters = () => [
    { type: PopoverComponentOptions }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInBvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsaUJBQWlCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPL0UsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQU5uRCxpQkFBWSxHQUFRO1lBQ2xCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUM7UUFDRixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFFaUMsQ0FBQztJQUV2RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzFELENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7U0FDbkUsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsY0FBYyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUM1RSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw0bUJBQXVDO2dCQUN2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O1lBTlEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJy4vcG9wb3Zlci1jb21wb25lbnQtb3B0aW9ucy5wcm92aWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1BvcG92ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRlZmF1bHRQcm9wczogYW55ID0ge1xuICAgIHByZWZpeENsczogJ2FtLXBvcG92ZXInXG4gIH07XG4gIG1hc2tDbHM6IGFueSA9IHt9O1xuICBwb3BvdmVyQ2xzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogUG9wb3ZlckNvbXBvbmVudE9wdGlvbnMpIHt9XG5cbiAgc2V0Q2xhc3NNYXAoKSB7XG4gICAgdGhpcy5tYXNrQ2xzID0ge1xuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tbWFza2BdOiB0aGlzLm9wdGlvbnMubWFzayxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LW1hc2staGlkZGVuYF06ICF0aGlzLm9wdGlvbnMubWFza1xuICAgIH07XG4gICAgdGhpcy5wb3BvdmVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc31gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LXBsYWNlbWVudC0ke3RoaXMub3B0aW9ucy5wbGFjZW1lbnR9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS0ke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMub25BZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiJdfQ==