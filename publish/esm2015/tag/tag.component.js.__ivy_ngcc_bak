import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
export class TagComponent {
    constructor() {
        this.prefixCls = 'am-tag';
        this.closed = false;
        this.wrapCls = {};
        this._small = false;
        this._closable = false;
        this._selected = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.afterClose = new EventEmitter();
    }
    get small() {
        return this._small;
    }
    set small(v) {
        this._small = v;
        this.setClassMap();
    }
    get closable() {
        return this._closable;
    }
    set closable(v) {
        this._closable = v;
        this.setClassMap();
    }
    set selected(v) {
        this._selected = v;
        this.setClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(v) {
        this._disabled = v;
        this.setClassMap();
    }
    onClick() {
        if (this._disabled) {
            return;
        }
        this._selected = !this._selected;
        this.onChange.emit(this._selected);
        this.setClassMap();
    }
    onTagClose() {
        this.onClose.emit();
        this.closed = true;
        this.afterClose.emit();
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-normal`]: !this._disabled && (!this._selected || this._small || this._closable),
            [`${this.prefixCls}-small`]: this._small,
            [`${this.prefixCls}-active`]: this._selected && !this._disabled && !this._small && !this._closable,
            [`${this.prefixCls}-disabled`]: this._disabled,
            [`${this.prefixCls}-closable`]: this._closable
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'Tag, nzm-tag',
                template: "<div *ngIf=\"!closed\" [ngClass]=\"wrapCls\" (click)=\"onClick()\">\n  <div class=\"{{ prefixCls }}-text\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"closable && !disabled && !small\"\n    role=\"button\"\n    class=\"{{ prefixCls }}-close\"\n    aria-label=\"remove tag\"\n    (click)=\"onTagClose()\"\n  >\n    <Icon aria-hidden=\"true\" [type]=\"'cross-circle'\" [size]=\"'xs'\"></Icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TagComponent.ctorParameters = () => [];
TagComponent.propDecorators = {
    small: [{ type: Input }],
    closable: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    afterClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidGFnL3RhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9sRyxNQUFNLE9BQU8sWUFBWTtJQThDdkI7UUE3Q0EsY0FBUyxHQUFXLFFBQVEsQ0FBQztRQUM3QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFVixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBZ0NuQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUV6QyxDQUFDO0lBcENoQixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFDSSxRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFVRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtZQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDeEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUM5QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHliQUFtQztnQkFDbkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7b0JBV0UsS0FBSzt1QkFRTCxLQUFLO3VCQVFMLEtBQUs7dUJBS0wsS0FBSzt1QkFRTCxNQUFNO3NCQUVOLE1BQU07eUJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RhZywgbnptLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXRhZyc7XG4gIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB3cmFwQ2xzOiBhbnkgPSB7fTtcblxuICBwcml2YXRlIF9zbWFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbG9zYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21hbGw7XG4gIH1cbiAgc2V0IHNtYWxsKHYpIHtcbiAgICB0aGlzLl9zbWFsbCA9IHY7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2FibGU7XG4gIH1cbiAgc2V0IGNsb3NhYmxlKHYpIHtcbiAgICB0aGlzLl9jbG9zYWJsZSA9IHY7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZCh2KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2O1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2O1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgYWZ0ZXJDbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBvblRhZ0Nsb3NlKCkge1xuICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuYWZ0ZXJDbG9zZS5lbWl0KCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpIHtcbiAgICB0aGlzLndyYXBDbHMgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub3JtYWxgXTogIXRoaXMuX2Rpc2FibGVkICYmICghdGhpcy5fc2VsZWN0ZWQgfHwgdGhpcy5fc21hbGwgfHwgdGhpcy5fY2xvc2FibGUpLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zbWFsbGBdOiB0aGlzLl9zbWFsbCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYWN0aXZlYF06IHRoaXMuX3NlbGVjdGVkICYmICF0aGlzLl9kaXNhYmxlZCAmJiAhdGhpcy5fc21hbGwgJiYgIXRoaXMuX2Nsb3NhYmxlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2xvc2FibGVgXTogdGhpcy5fY2xvc2FibGVcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=