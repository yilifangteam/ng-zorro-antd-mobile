import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';
export class SegmentedControlComponent {
    constructor() {
        this.prefixCls = 'am-segment';
        this.tintColor = '#2DB7F5';
        this.disabled = false;
        this.selectedIndex = 0;
        this.onChange = new EventEmitter();
        this.role = 'tablist';
        this.amSegment = true;
    }
    get amDisabled() {
        return this.disabled;
    }
    onClick(index, value) {
        if (!this.disabled && index !== this.selectedIndex) {
            this.selectedIndex = index;
            this.onChange.emit({ selectedIndex: index, value: value });
        }
    }
}
SegmentedControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'SegmentedControl, nz-segmented-control',
                template: "<div\n  role=\"tab\"\n  *ngFor=\"let value of values; let i = index\"\n  class=\"{{ prefixCls }}-item\"\n  [ngClass]=\"{ 'am-segment-item-selected': i === selectedIndex }\"\n  [ngStyle]=\"{\n    'border-color': tintColor,\n    color: i === selectedIndex ? '#fff' : tintColor,\n    'background-color': i === selectedIndex ? tintColor : 'transparent'\n  }\"\n  (click)=\"onClick(i, value)\"\n>\n  <div\n    class=\"{{ prefixCls }}-item-inner\"\n    [ngStyle]=\"{ 'background-color': i === selectedIndex ? tintColor : 'transparent' }\"\n  ></div>\n  {{ value }}\n</div>\n"
            },] }
];
SegmentedControlComponent.ctorParameters = () => [];
SegmentedControlComponent.propDecorators = {
    tintColor: [{ type: Input }],
    disabled: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    values: [{ type: Input }],
    onChange: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amSegment: [{ type: HostBinding, args: ['class.am-segment',] }],
    amDisabled: [{ type: HostBinding, args: ['class.am-segment-disabled',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPcEYsTUFBTSxPQUFPLHlCQUF5QjtJQXVCcEM7UUF0QkEsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUdqQyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFJMUIsYUFBUSxHQUFnRCxJQUFJLFlBQVksRUFBaUMsQ0FBQztRQUcxRyxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBRWpCLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFNWCxDQUFDO0lBTGhCLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBSUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsb2tCQUFpRDthQUNsRDs7Ozt3QkFJRSxLQUFLO3VCQUVMLEtBQUs7NEJBRUwsS0FBSztxQkFFTCxLQUFLO3VCQUVMLE1BQU07bUJBR04sV0FBVyxTQUFDLFdBQVc7d0JBRXZCLFdBQVcsU0FBQyxrQkFBa0I7eUJBRTlCLFdBQVcsU0FBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlZ21lbnRlZENvbnRyb2xPbkNoYW5nZUV2ZW50IH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTZWdtZW50ZWRDb250cm9sLCBuei1zZWdtZW50ZWQtY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudGVkQ29udHJvbENvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXNlZ21lbnQnO1xuXG4gIEBJbnB1dCgpXG4gIHRpbnRDb2xvcjogc3RyaW5nID0gJyMyREI3RjUnO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICB2YWx1ZXM6IEFycmF5PHN0cmluZz5bXTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U2VnbWVudGVkQ29udHJvbE9uQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWdtZW50ZWRDb250cm9sT25DaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGUgPSAndGFibGlzdCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tc2VnbWVudCcpXG4gIGFtU2VnbWVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tc2VnbWVudC1kaXNhYmxlZCcpXG4gIGdldCBhbURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IHNlbGVjdGVkSW5kZXg6IGluZGV4LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=