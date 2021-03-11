import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
export class RadioItemComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.select$ = new Subject();
        this.prefixCls = 'am-radio';
        this._checked = false;
        this._disabled = false;
        this.wrap = false;
        this.error = false;
        this.multipleLine = false;
        this.platform = 'ios';
        this.align = 'middle';
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.cdr.markForCheck();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.cdr.markForCheck();
    }
    onRadioItemClick(event) { }
    change(event) {
        if (!this.disabled && !this.checked) {
            this.select$.next(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'RadioItem, nzm-radio-item',
                template: "<ListItem\n  [wrap]=\"wrap\"\n  [align]=\"align\"\n  [arrow]=\"arrow\"\n  [error]=\"error\"\n  [extra]=\"radio\"\n  [thumb]=\"thumb\"\n  [disabled]=\"disabled\"\n  [platform]=\"platform\"\n  [multipleLine]=\"multipleLine\"\n  [className]=\"'am-radio-item ' + (disabled ? 'am-radio-item-disabled' : '')\"\n  (onClick)=\"onRadioItemClick($event)\"\n>\n  <ng-content></ng-content>\n</ListItem>\n<ng-template #radio>\n  <label\n    Radio\n    [name]=\"name\"\n    [value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    (onChange)=\"change($event)\"\n  ></label>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
RadioItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    arrow: [{ type: Input }],
    thumb: [{ type: Input }],
    wrap: [{ type: Input }],
    error: [{ type: Input }],
    multipleLine: [{ type: Input }],
    platform: [{ type: Input }],
    align: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInJhZGlvL3JhZGlvLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRL0IsTUFBTSxPQUFPLGtCQUFrQjtJQXlDN0IsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF4QzFDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUM1QyxjQUFTLEdBQVcsVUFBVSxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQW1CbkMsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFFekIsVUFBSyxHQUFXLFFBQVEsQ0FBQztJQVVvQixDQUFDO0lBbkM5QyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBb0JELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFJRCxnQkFBZ0IsQ0FBQyxLQUFLLElBQUcsQ0FBQztJQUUxQixNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLG1tQkFBMEM7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBYkMsaUJBQWlCOzs7bUJBNEJoQixLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSzsyQkFFTCxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1JhZGlvSXRlbSwgbnptLXJhZGlvLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvSXRlbUNvbXBvbmVudCB7XG4gIHNlbGVjdCQgPSBuZXcgU3ViamVjdDxSYWRpb0l0ZW1Db21wb25lbnQ+KCk7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXJhZGlvJztcbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBhcnJvdzogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aHVtYjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgd3JhcDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtdWx0aXBsZUxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhdGZvcm06IHN0cmluZyA9ICdpb3MnO1xuICBASW5wdXQoKVxuICBhbGlnbjogc3RyaW5nID0gJ21pZGRsZSc7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvblJhZGlvSXRlbUNsaWNrKGV2ZW50KSB7fVxuXG4gIGNoYW5nZShldmVudCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdCQubmV4dCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==