import { Component, ViewEncapsulation, Input, TemplateRef, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
export class ListItemComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-list',
            align: 'middle',
            error: false,
            multipleLine: false,
            wrap: false,
            platform: 'ios',
            rippleStyle: {}
        };
        this.arrowCls = {};
        this.lineCls = {};
        this.wrapCls = '';
        this.rippleCls = {};
        this.rippleClicked = false;
        this._thumb_component = false;
        this._thumb_src = '';
        this._extra_component = false;
        this._extra_title = '';
        this._arrow = '';
        this._disabled = false;
        this._className = '';
        this._active = false;
        this._extraTip = '';
        this.onClick = new EventEmitter();
    }
    get extra() {
        return this._extra;
    }
    get extra_component() {
        return this._extra_component;
    }
    get extra_title() {
        return this._extra_title;
    }
    set extra(value) {
        if (value instanceof TemplateRef) {
            this._extra_component = true;
            this._extra = value;
        }
        else {
            this._extra_component = false;
            this._extra_title = value;
        }
    }
    set extraTip(v) {
        this._extraTip = v;
    }
    get extraTip() {
        return this._extraTip;
    }
    set className(value) {
        this._className = value;
        this.setClsMap();
    }
    get arrow() {
        return this._arrow;
    }
    set arrow(value) {
        this._arrow = value;
        this.setClsMap();
    }
    set multipleLine(value) {
        this.defaultProps.multipleLine = value === '' ? true : value;
        this.setClsMap();
    }
    set error(value) {
        this.defaultProps.error = value === '' ? true : value;
        this.setClsMap();
    }
    set wrap(value) {
        this.defaultProps.wrap = value === '' ? true : value;
        this.setClsMap();
    }
    set align(value) {
        this.defaultProps.align = value;
        this.setClsMap();
    }
    set platform(value) {
        this.defaultProps.platform = value;
    }
    set disabled(value) {
        if (typeof value === 'boolean') {
            this._disabled = value;
        }
        else {
            if (value === 'true') {
                this._disabled = true;
            }
            else {
                this._disabled = false;
            }
        }
        this.setClsMap();
    }
    get thumb() {
        return this._thumb;
    }
    get thumb_component() {
        return this._thumb_component;
    }
    get thumb_src() {
        return this._thumb_src;
    }
    set thumb(value) {
        if (value instanceof TemplateRef) {
            this._thumb_component = true;
            this._thumb = value;
        }
        else {
            this._thumb_component = false;
            this._thumb_src = value;
        }
    }
    get bingClassName() {
        return this.wrapCls;
    }
    click(event) {
        this.onItemClick(event);
    }
    start() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = true;
            this.setClsMap();
        }
    }
    move() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    end() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    mouse_start() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = true;
            this.setClsMap();
        }
    }
    mouse_end() {
        if (!this._disabled && this.onClick.observers.length > 0) {
            this._active = false;
            this.setClsMap();
        }
    }
    setClsMap() {
        const classNameList = this._className.split(' ');
        let classNameObj = {};
        this.wrapCls = '';
        for (const value of classNameList) {
            if (value) {
                classNameObj = Object.assign(Object.assign({}, classNameObj), { [`${value}`]: true });
            }
        }
        const wrapClsObj = Object.assign({ [`${this.defaultProps.prefixCls}-item`]: true, [`${this.defaultProps.prefixCls}-item-disabled`]: this._disabled, [`${this.defaultProps.prefixCls}-item-active`]: this._active, [`${this.defaultProps.prefixCls}-item-error`]: this.defaultProps.error, [`${this.defaultProps.prefixCls}-item-top`]: this.defaultProps.align === 'top', [`${this.defaultProps.prefixCls}-item-middle`]: this.defaultProps.align === 'middle', [`${this.defaultProps.prefixCls}-item-bottom`]: this.defaultProps.align === 'bottom' }, classNameObj);
        for (const key in wrapClsObj) {
            if (wrapClsObj[key]) {
                this.wrapCls += ` ${key}`;
            }
        }
        this.rippleCls = {
            [`${this.defaultProps.prefixCls}-ripple`]: true,
            [`${this.defaultProps.prefixCls}-ripple-animate`]: this.rippleClicked
        };
        this.lineCls = {
            [`${this.defaultProps.prefixCls}-line`]: true,
            [`${this.defaultProps.prefixCls}-line-multiple`]: this.defaultProps.multipleLine,
            [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap
        };
        this.arrowCls = {
            [`${this.defaultProps.prefixCls}-arrow`]: true,
            [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === 'horizontal',
            [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === 'down' || this._arrow === 'up',
            [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === 'up'
        };
    }
    onItemClick(ev) {
        const isAndroid = this.defaultProps.platform === 'android';
        if (isAndroid) {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            const Item = ev.currentTarget;
            const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
            const ClientRect = ev.currentTarget.getBoundingClientRect();
            const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
            const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
            const coverRippleStyle = {
                width: `${RippleWidth}px`,
                height: `${RippleWidth}px`,
                left: `${pointX}px`,
                top: `${pointY}px`
            };
            this.defaultProps.rippleStyle = coverRippleStyle;
            this.rippleClicked = true;
            this.setClsMap();
            this.debounceTimeout = setTimeout(() => {
                this.rippleClicked = false;
                this.defaultProps.rippleStyle = { display: 'none' };
                this.setClsMap();
            }, 1000);
        }
        this.onClick.emit(ev);
    }
    ngOnInit() {
        this.defaultProps.rippleStyle = { display: 'none' };
        this.setClsMap();
    }
    ngOnDestroy() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
    }
}
ListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ListItem, nzm-list-item',
                template: "<div *ngIf=\"thumb_src && !thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <img src=\"{{ thumb_src }}\" />\n</div>\n<div *ngIf=\"thumb && thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <ng-template [ngTemplateOutlet]=\"thumb\"></ng-template>\n</div>\n<div [ngClass]=\"lineCls\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <ng-content></ng-content>\n  </div>\n  <div *ngIf=\"extra_title && !extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\" [innerHTML]=\"extra_title\">\n  </div>\n  <div *ngIf=\"extra && extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\">\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n  <div *ngIf=\"!extra_title && !extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\" [innerHTML]=\"extraTip\">\n\n  </div>\n  <div *ngIf=\"arrow\" [ngClass]=\"arrowCls\" aria-hidden=\"true\"></div>\n</div>\n<div [ngClass]=\"rippleCls\" [ngStyle]=\"defaultProps.rippleStyle\"></div>",
                encapsulation: ViewEncapsulation.None
            },] }
];
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    extra: [{ type: Input }],
    extraTip: [{ type: Input }],
    className: [{ type: Input }],
    arrow: [{ type: Input }],
    multipleLine: [{ type: Input }],
    error: [{ type: Input }],
    wrap: [{ type: Input }],
    align: [{ type: Input }],
    platform: [{ type: Input }],
    disabled: [{ type: Input }],
    thumb: [{ type: Input }],
    onClick: [{ type: Output }],
    bingClassName: [{ type: HostBinding, args: ['class',] }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }],
    start: [{ type: HostListener, args: ['touchstart',] }],
    move: [{ type: HostListener, args: ['touchmove',] }],
    end: [{ type: HostListener, args: ['touchend',] }],
    mouse_start: [{ type: HostListener, args: ['mousedown',] }],
    mouse_end: [{ type: HostListener, args: ['mouseup',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUVqQixLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBRU4sV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8saUJBQWlCO0lBNks1QjtRQTVLQSxpQkFBWSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFNBQVM7WUFDcEIsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsS0FBSztZQUNaLFlBQVksRUFBRSxLQUFLO1lBQ25CLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEtBQUs7WUFDZixXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBQ0YsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUd2QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBb0cvQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUE4Q3RDLENBQUM7SUFoSmhCLElBQ0ksS0FB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QyxlQUFlLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7OztZQTlRRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMscy9CQUF5QztnQkFDekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7b0JBOEJFLEtBQUs7dUJBb0JMLEtBQUs7d0JBUUwsS0FBSztvQkFLTCxLQUFLOzJCQVFMLEtBQUs7b0JBS0wsS0FBSzttQkFLTCxLQUFLO29CQUtMLEtBQUs7dUJBS0wsS0FBSzt1QkFJTCxLQUFLO29CQWFMLEtBQUs7c0JBbUJMLE1BQU07NEJBR04sV0FBVyxTQUFDLE9BQU87b0JBSW5CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBSWhDLFlBQVksU0FBQyxZQUFZO21CQU96QixZQUFZLFNBQUMsV0FBVztrQkFPeEIsWUFBWSxTQUFDLFVBQVU7MEJBT3ZCLFlBQVksU0FBQyxXQUFXO3dCQU94QixZQUFZLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdMaXN0SXRlbSwgbnptLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tbGlzdCcsXG4gICAgYWxpZ246ICdtaWRkbGUnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBtdWx0aXBsZUxpbmU6IGZhbHNlLFxuICAgIHdyYXA6IGZhbHNlLFxuICAgIHBsYXRmb3JtOiAnaW9zJyxcbiAgICByaXBwbGVTdHlsZToge31cbiAgfTtcbiAgYXJyb3dDbHM6IGFueSA9IHt9O1xuICBsaW5lQ2xzOiBhbnkgPSB7fTtcbiAgd3JhcENsczogc3RyaW5nID0gJyc7XG4gIHJpcHBsZUNsczogYW55ID0ge307XG4gIHJpcHBsZUNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGVib3VuY2VUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfdGh1bWJfY29tcG9uZW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RodW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF90aHVtYl9zcmM6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9leHRyYV9jb21wb25lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX2V4dHJhX3RpdGxlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYXJyb3c6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXh0cmFUaXA6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBleHRyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmE7XG4gIH1cbiAgZ2V0IGV4dHJhX2NvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFfY29tcG9uZW50O1xuICB9XG4gIGdldCBleHRyYV90aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFfdGl0bGU7XG4gIH1cbiAgc2V0IGV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2V4dHJhX2NvbXBvbmVudCA9IHRydWU7XG4gICAgICB0aGlzLl9leHRyYSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leHRyYV9jb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4dHJhX3RpdGxlID0gPHN0cmluZz52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXh0cmFUaXAodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0cmFUaXAgPSB2O1xuICB9XG4gIGdldCBleHRyYVRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFUaXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgYXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fycm93O1xuICB9XG4gIHNldCBhcnJvdyh2YWx1ZSkge1xuICAgIHRoaXMuX2Fycm93ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGVMaW5lKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMubXVsdGlwbGVMaW5lID0gdmFsdWUgPT09ICcnID8gdHJ1ZSA6IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGVycm9yKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMuZXJyb3IgPSB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd3JhcCh2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLndyYXAgPSB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYWxpZ24odmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5hbGlnbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBsYXRmb3JtKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMucGxhdGZvcm0gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRodW1iKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYjtcbiAgfVxuICBnZXQgdGh1bWJfY29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYl9jb21wb25lbnQ7XG4gIH1cbiAgZ2V0IHRodW1iX3NyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJfc3JjO1xuICB9XG4gIHNldCB0aHVtYih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aHVtYl9jb21wb25lbnQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGh1bWIgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGh1bWJfY29tcG9uZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLl90aHVtYl9zcmMgPSA8c3RyaW5nPnZhbHVlO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGJpbmdDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53cmFwQ2xzO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLm9uSXRlbUNsaWNrKGV2ZW50KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JylcbiAgc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldENsc01hcCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnKVxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJylcbiAgZW5kKCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicpXG4gIG1vdXNlX3N0YXJ0KCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpXG4gIG1vdXNlX2VuZCgpIHtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmIHRoaXMub25DbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENsc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRDbHNNYXAoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lTGlzdCA9IHRoaXMuX2NsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGxldCBjbGFzc05hbWVPYmogPSB7fTtcbiAgICB0aGlzLndyYXBDbHMgPSAnJztcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgY2xhc3NOYW1lTGlzdCkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNsYXNzTmFtZU9iaiA9IHtcbiAgICAgICAgICAuLi5jbGFzc05hbWVPYmosXG4gICAgICAgICAgLi4ueyBbYCR7dmFsdWV9YF06IHRydWUgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHdyYXBDbHNPYmogPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtLWRpc2FibGVkYF06IHRoaXMuX2Rpc2FibGVkLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1hY3RpdmVgXTogdGhpcy5fYWN0aXZlLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1lcnJvcmBdOiB0aGlzLmRlZmF1bHRQcm9wcy5lcnJvcixcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW0tdG9wYF06IHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAndG9wJyxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW0tbWlkZGxlYF06IHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnbWlkZGxlJyxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW0tYm90dG9tYF06IHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnYm90dG9tJyxcbiAgICAgIC4uLmNsYXNzTmFtZU9ialxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB3cmFwQ2xzT2JqKSB7XG4gICAgICBpZiAod3JhcENsc09ialtrZXldKSB7XG4gICAgICAgIHRoaXMud3JhcENscyArPSBgICR7a2V5fWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yaXBwbGVDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1yaXBwbGVgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LXJpcHBsZS1hbmltYXRlYF06IHRoaXMucmlwcGxlQ2xpY2tlZFxuICAgIH07XG5cbiAgICB0aGlzLmxpbmVDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1saW5lYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1saW5lLW11bHRpcGxlYF06IHRoaXMuZGVmYXVsdFByb3BzLm11bHRpcGxlTGluZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWxpbmUtd3JhcGBdOiB0aGlzLmRlZmF1bHRQcm9wcy53cmFwXG4gICAgfTtcblxuICAgIHRoaXMuYXJyb3dDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1hcnJvd2BdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tYXJyb3ctaG9yaXpvbnRhbGBdOiB0aGlzLl9hcnJvdyA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tYXJyb3ctdmVydGljYWxgXTogdGhpcy5fYXJyb3cgPT09ICdkb3duJyB8fCB0aGlzLl9hcnJvdyA9PT0gJ3VwJyxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWFycm93LXZlcnRpY2FsLXVwYF06IHRoaXMuX2Fycm93ID09PSAndXAnXG4gICAgfTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGV2KSB7XG4gICAgY29uc3QgaXNBbmRyb2lkID0gdGhpcy5kZWZhdWx0UHJvcHMucGxhdGZvcm0gPT09ICdhbmRyb2lkJztcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgSXRlbSA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBSaXBwbGVXaWR0aCA9IE1hdGgubWF4KEl0ZW0ub2Zmc2V0SGVpZ2h0LCBJdGVtLm9mZnNldFdpZHRoKTtcbiAgICAgIGNvbnN0IENsaWVudFJlY3QgPSBldi5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcG9pbnRYID0gZXYuY2xpZW50WCAtIENsaWVudFJlY3QubGVmdCAtIEl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgY29uc3QgcG9pbnRZID0gZXYuY2xpZW50WSAtIENsaWVudFJlY3QudG9wIC0gSXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICBjb25zdCBjb3ZlclJpcHBsZVN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7UmlwcGxlV2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke1JpcHBsZVdpZHRofXB4YCxcbiAgICAgICAgbGVmdDogYCR7cG9pbnRYfXB4YCxcbiAgICAgICAgdG9wOiBgJHtwb2ludFl9cHhgXG4gICAgICB9O1xuICAgICAgdGhpcy5kZWZhdWx0UHJvcHMucmlwcGxlU3R5bGUgPSBjb3ZlclJpcHBsZVN0eWxlO1xuICAgICAgdGhpcy5yaXBwbGVDbGlja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJpcHBsZUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvcHMucmlwcGxlU3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgICAgICB0aGlzLnNldENsc01hcCgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIHRoaXMub25DbGljay5lbWl0KGV2KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLnJpcHBsZVN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19