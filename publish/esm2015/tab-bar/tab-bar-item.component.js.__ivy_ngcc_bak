import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TabPaneComponent } from '../tabs/tab-pane.component';
export class TabBarItemComponent extends TabPaneComponent {
    constructor() {
        super();
        this.prefixCls = 'am-tab-bar-tab';
        this.selected = false;
        this.tintColor = '#108ee9';
        this.unselectedTintColor = '#888';
        this.key = '';
        this.dot = false;
        this.badge = null;
        this.icon = null;
        this.selectedIcon = null;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
TabBarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'TabBarItem, nzm-tab-bar-item',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #tabBarTab>\n  <div class=\"{{ prefixCls }}-icon\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    <Badge *ngIf=\"badge\" className=\"{{ prefixCls }}-badge tab-badge\" [text]=\"badge\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <Badge className=\"{{ prefixCls }}-badge tab-badge\" [dot]=\"dot\" *ngIf=\"dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </Badge>\n    <ng-container *ngIf=\"!badge && !dot\">\n      <ng-container *ngIf=\"isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate\">\n      </ng-container>\n    </ng-container>\n  </div>\n  <p class=\"{{ prefixCls }}-title\" [style.color]=\"selected ? tintColor : unselectedTintColor\">\n    {{ title }}\n  </p>\n</ng-template>\n\n<ng-template #domTemplate>\n  <ng-template [ngTemplateOutlet]=\"selected ? selectedIcon : icon\"></ng-template>\n</ng-template>\n\n<ng-template #imgTemplate>\n  <img src=\"{{ selected ? selectedIcon : icon }}\" alt=\"{{ title }}\" />\n</ng-template>\n"
            },] }
];
TabBarItemComponent.ctorParameters = () => [];
TabBarItemComponent.propDecorators = {
    tabBarTab: [{ type: ViewChild, args: ['tabBarTab', { static: true },] }],
    key: [{ type: Input }],
    dot: [{ type: Input }],
    badge: [{ type: Input }],
    icon: [{ type: Input }],
    selectedIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidGFiLWJhci90YWItYmFyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNOUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQW9CdkQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXBCVixjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHdCQUFtQixHQUFXLE1BQU0sQ0FBQztRQU1yQyxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsVUFBSyxHQUFvQixJQUFJLENBQUM7UUFFOUIsU0FBSSxHQUErQixJQUFJLENBQUM7UUFFeEMsaUJBQVksR0FBK0IsSUFBSSxDQUFDO0lBSWhELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxreENBQTRDO2FBQzdDOzs7O3dCQU9FLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2tCQUd2QyxLQUFLO2tCQUVMLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLOzJCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFicy90YWItcGFuZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUYWJCYXJJdGVtLCBuem0tdGFiLWJhci1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1iYXItaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFiQmFySXRlbUNvbXBvbmVudCBleHRlbmRzIFRhYlBhbmVDb21wb25lbnQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10YWItYmFyLXRhYic7XG4gIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHRpbnRDb2xvcjogc3RyaW5nID0gJyMxMDhlZTknO1xuICB1bnNlbGVjdGVkVGludENvbG9yOiBzdHJpbmcgPSAnIzg4OCc7XG5cbiAgQFZpZXdDaGlsZCgndGFiQmFyVGFiJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgdGFiQmFyVGFiOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkb3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYmFkZ2U6IG51bWJlciB8IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gbnVsbDtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19