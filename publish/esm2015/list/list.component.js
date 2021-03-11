import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';
export class ListComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list'
        };
        this.renderHeaderType = '';
        this.renderFooterType = '';
        this._renderHeader = '';
        this._renderFooter = '';
        this._className = '';
    }
    set className(value) {
        this._className = value;
    }
    get renderHeader() {
        return this._renderHeader;
    }
    set renderHeader(value) {
        if (value instanceof TemplateRef) {
            this.renderHeaderType = 'templateRef';
        }
        else {
            this.renderHeaderType = typeof value;
        }
        this._renderHeader = value;
    }
    get renderFooter() {
        return this._renderFooter;
    }
    set renderFooter(value) {
        if (value instanceof TemplateRef) {
            this.renderFooterType = 'templateRef';
        }
        else {
            this.renderFooterType = typeof value;
        }
        this._renderFooter = value;
    }
    get hostClassName() {
        return 'am-list ' + this._className;
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'List, nzm-list',
                template: "<div\n  *ngIf=\"renderHeader && renderHeaderType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-header\"\n  [innerHTML]=\"renderHeader\"\n></div>\n<div *ngIf=\"renderHeader && renderHeaderType === 'function'\" class=\"{{ defaultProps.prefixCls }}-header\">\n  {{ renderHeader() }}\n</div>\n<ng-template *ngIf=\"renderHeader && renderHeaderType === 'templateRef'\" [ngTemplateOutlet]=\"renderHeader\">\n</ng-template>\n<div class=\"{{ defaultProps.prefixCls }}-body\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"renderFooter && renderFooterType === 'string'\"\n  class=\"{{ defaultProps.prefixCls }}-footer\"\n  [innerHTML]=\"renderFooter\"\n></div>\n<div *ngIf=\"renderFooter && renderFooterType === 'function'\" class=\"{{ defaultProps.prefixCls }}-footer\">\n  {{ renderFooter() }}\n</div>\n<ng-template *ngIf=\"renderFooter && renderFooterType === 'templateRef'\" [ngTemplateOutlet]=\"renderFooter\">\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    className: [{ type: Input }],
    renderHeader: [{ type: Input }],
    renderFooter: [{ type: Input }],
    hostClassName: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU85RixNQUFNLE9BQU8sYUFBYTtJQWdEeEI7UUEvQ0EsaUJBQVksR0FBUTtZQUNsQixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUV0QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBc0NqQixDQUFDO0lBcENoQixJQUNJLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7U0FDdkM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLEtBQUssQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7U0FDdkM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLEtBQUssQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUNJLGFBQWE7UUFDZixPQUFPLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsdzdCQUFvQztnQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7d0JBYUUsS0FBSzsyQkFJTCxLQUFLOzJCQWFMLEtBQUs7NEJBY0wsV0FBVyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0xpc3QsIG56bS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHM6IGFueSA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1saXN0J1xuICB9O1xuXG4gIHJlbmRlckhlYWRlclR5cGU6IHN0cmluZyA9ICcnO1xuICByZW5kZXJGb290ZXJUeXBlOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIF9yZW5kZXJIZWFkZXI6IGFueSA9ICcnO1xuICBwcml2YXRlIF9yZW5kZXJGb290ZXI6IGFueSA9ICcnO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGFzc05hbWUodmFsdWUpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcmVuZGVySGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJIZWFkZXI7XG4gIH1cbiAgc2V0IHJlbmRlckhlYWRlcih2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVySGVhZGVyVHlwZSA9ICd0ZW1wbGF0ZVJlZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVySGVhZGVyVHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJIZWFkZXIgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcmVuZGVyRm9vdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJGb290ZXI7XG4gIH1cbiAgc2V0IHJlbmRlckZvb3Rlcih2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyRm9vdGVyVHlwZSA9ICd0ZW1wbGF0ZVJlZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyRm9vdGVyVHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJGb290ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYW0tbGlzdCAnICsgdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19