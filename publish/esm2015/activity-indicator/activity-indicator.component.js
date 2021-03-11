import { Component, Input, HostBinding } from '@angular/core';
export class ActivityIndicatorComponent {
    constructor() {
        this.prefixCls = 'am-activity-indicator';
        this.spinnerClass = {};
        this._size = 'small';
        this._toast = false;
        this._animating = true;
        this.clsActIndicator = true;
    }
    get animating() {
        return this._animating;
    }
    set animating(v) {
        this._animating = v;
        this.setClass();
    }
    set size(v) {
        this._size = v;
        this.setClass();
    }
    get toast() {
        return this._toast;
    }
    set toast(v) {
        this._toast = v;
        this.setClass();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
    }
    setClass() {
        if (this._animating) {
            this.clsActIndicator = true;
            this.clsActIndicatorToast = !!this._toast;
            this.clsActIndicatorLg = this._size === 'large';
            this.clsActIndicatorSm = this._size === 'small';
            this.spinnerClass = {
                [`${this.prefixCls}-spinner`]: true,
                [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === 'large'
            };
        }
        else {
            this.clsActIndicator = false;
            this.clsActIndicatorLg = false;
            this.clsActIndicatorSm = false;
            this.clsActIndicatorToast = false;
        }
    }
    ngOnInit() {
        this.setClass();
    }
}
ActivityIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ActivityIndicator , nzm-ctivity-indicator',
                template: "<div *ngIf=\"animating && toast && text && text.length > 0\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-hidden=\"'true'\"></span>\n    <span class=\"{{ prefixCls }}-toast\">{{ text }}</span>\n  </div>\n</div>\n<div *ngIf=\"animating && toast && !text\">\n  <div class=\"{{ prefixCls }}-content\">\n    <span [ngClass]=\"spinnerClass\" aria-label=\"'Loading'\"></span>\n  </div>\n</div>\n<div *ngIf=\"animating && !toast && text && text.length > 0\">\n  <span [ngClass]=\"spinnerClass\" aria-hidden=\"true\"></span>\n  <span class=\"{{ prefixCls }}-tip\">{{ text }}</span>\n</div>\n<div *ngIf=\"animating && !toast && !text\">\n  <span [ngClass]=\"spinnerClass\" aria-label=\"'loading'\"></span>\n</div>\n"
            },] }
];
ActivityIndicatorComponent.ctorParameters = () => [];
ActivityIndicatorComponent.propDecorators = {
    animating: [{ type: Input }],
    size: [{ type: Input }],
    toast: [{ type: Input }],
    text: [{ type: Input }],
    clsActIndicator: [{ type: HostBinding, args: ['class.am-activity-indicator',] }],
    clsActIndicatorToast: [{ type: HostBinding, args: ['class.am-activity-indicator-toast',] }],
    clsActIndicatorLg: [{ type: HostBinding, args: ['class.am-activity-indicator-lg',] }],
    clsActIndicatorSm: [{ type: HostBinding, args: ['class.am-activity-indicator-sm',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWN0aXZpdHktaW5kaWNhdG9yL2FjdGl2aXR5LWluZGljYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXRFLE1BQU0sT0FBTywwQkFBMEI7SUErQ3JDO1FBOUNBLGNBQVMsR0FBVyx1QkFBdUIsQ0FBQztRQUM1QyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUdsQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQWdDbkMsb0JBQWUsR0FBWSxJQUFJLENBQUM7SUFRakIsQ0FBQztJQXRDaEIsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxDQUFVO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFDSSxJQUFJLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFhRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJO2dCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPO2FBQzFFLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELHd2QkFBa0Q7YUFDbkQ7Ozs7d0JBVUUsS0FBSzttQkFRTCxLQUFLO29CQUtMLEtBQUs7bUJBUUwsS0FBSzs4QkFRTCxXQUFXLFNBQUMsNkJBQTZCO21DQUV6QyxXQUFXLFNBQUMsbUNBQW1DO2dDQUUvQyxXQUFXLFNBQUMsZ0NBQWdDO2dDQUU1QyxXQUFXLFNBQUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBY3Rpdml0eUluZGljYXRvciAsIG56bS1jdGl2aXR5LWluZGljYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpdml0eS1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5SW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tYWN0aXZpdHktaW5kaWNhdG9yJztcbiAgc3Bpbm5lckNsYXNzOiBvYmplY3QgPSB7fTtcblxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZyA9ICdzbWFsbCc7XG4gIHByaXZhdGUgX3RvYXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FuaW1hdGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFuaW1hdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW5nO1xuICB9XG4gIHNldCBhbmltYXRpbmcodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGluZyA9IHY7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2O1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdG9hc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvYXN0O1xuICB9XG4gIHNldCB0b2FzdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdG9hc3QgPSB2O1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHY6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHQgPSB2O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1hY3Rpdml0eS1pbmRpY2F0b3InKVxuICBjbHNBY3RJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjdGl2aXR5LWluZGljYXRvci10b2FzdCcpXG4gIGNsc0FjdEluZGljYXRvclRvYXN0O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjdGl2aXR5LWluZGljYXRvci1sZycpXG4gIGNsc0FjdEluZGljYXRvckxnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjdGl2aXR5LWluZGljYXRvci1zbScpXG4gIGNsc0FjdEluZGljYXRvclNtO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvciA9IHRydWU7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvclRvYXN0ID0gISF0aGlzLl90b2FzdDtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yTGcgPSB0aGlzLl9zaXplID09PSAnbGFyZ2UnO1xuICAgICAgdGhpcy5jbHNBY3RJbmRpY2F0b3JTbSA9IHRoaXMuX3NpemUgPT09ICdzbWFsbCc7XG4gICAgICB0aGlzLnNwaW5uZXJDbGFzcyA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zcGlubmVyYF06IHRydWUsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3Bpbm5lci1sZ2BdOiAhIXRoaXMuX3RvYXN0IHx8IHRoaXMuX3NpemUgPT09ICdsYXJnZSdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xzQWN0SW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvckxnID0gZmFsc2U7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvclNtID0gZmFsc2U7XG4gICAgICB0aGlzLmNsc0FjdEluZGljYXRvclRvYXN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=