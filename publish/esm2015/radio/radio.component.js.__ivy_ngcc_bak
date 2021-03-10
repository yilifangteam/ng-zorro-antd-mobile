import { Component, Input, Output, HostBinding, HostListener, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
export class RadioComponent {
    constructor() {
        this.prefixCls = 'am-radio';
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
        };
        this._checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.radioWrapper = true;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.updateClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.updateClassMap();
    }
    onClick(event) {
        event.preventDefault();
        if (!this._disabled && !this._checked) {
            this.updateValue(true);
        }
    }
    updateValue(checkValue) {
        this.checked = checkValue;
        this.onChange.emit({
            name: this.name,
            value: this.value
        });
    }
    ngOnInit() {
        this.updateClassMap();
    }
    updateClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
        };
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: '[Radio], [nzm-radio]',
                template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"radio\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
RadioComponent.ctorParameters = () => [];
RadioComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    radioWrapper: [{ type: HostBinding, args: ['class.am-radio-wrapper',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJyYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLGNBQWM7SUE0Q3pCO1FBM0NBLGNBQVMsR0FBVyxVQUFVLENBQUM7UUFDL0IsYUFBUSxHQUFXO1lBQ2pCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUM5QyxDQUFDO1FBQ00sYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBdUJuQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUczQyxpQkFBWSxHQUFZLElBQUksQ0FBQztJQVVkLENBQUM7SUE5QmhCLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVFELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUlELFdBQVcsQ0FBQyxVQUFtQjtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUM5QyxDQUFDO0lBQ0osQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx1VEFBcUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OzttQkFXRSxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzt1QkFRTCxLQUFLO3VCQVFMLE1BQU07MkJBR04sV0FBVyxTQUFDLHdCQUF3QjtzQkFHcEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZGlvU3RhdHVzIH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbUmFkaW9dLCBbbnptLXJhZGlvXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXJhZGlvJztcbiAgY2xhc3NNYXA6IG9iamVjdCA9IHtcbiAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tlZGBdOiB0aGlzLmNoZWNrZWQsXG4gICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gIH07XG4gIHByaXZhdGUgX2NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmFkaW9TdGF0dXM+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1yYWRpby13cmFwcGVyJylcbiAgcmFkaW9XcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgIXRoaXMuX2NoZWNrZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHVwZGF0ZVZhbHVlKGNoZWNrVmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBjaGVja1ZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tlZGBdOiB0aGlzLmNoZWNrZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9O1xuICB9XG59XG4iXX0=