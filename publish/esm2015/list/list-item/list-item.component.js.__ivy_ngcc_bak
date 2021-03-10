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
                template: "<div *ngIf=\"thumb_src && !thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <img src=\"{{ thumb_src }}\" />\n</div>\n<div *ngIf=\"thumb && thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <ng-template [ngTemplateOutlet]=\"thumb\"></ng-template>\n</div>\n<div [ngClass]=\"lineCls\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"extra_title && !extra_component\"\n    class=\"{{ defaultProps.prefixCls }}-extra\"\n    [innerHTML]=\"extra_title\"\n  ></div>\n  <div *ngIf=\"extra && extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\">\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n  <div *ngIf=\"arrow\" [ngClass]=\"arrowCls\" aria-hidden=\"true\"></div>\n</div>\n<div [ngClass]=\"rippleCls\" [ngStyle]=\"defaultProps.rippleStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    extra: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUVqQixLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBRU4sV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8saUJBQWlCO0lBbUs1QjtRQWxLQSxpQkFBWSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFNBQVM7WUFDcEIsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsS0FBSztZQUNaLFlBQVksRUFBRSxLQUFLO1lBQ25CLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEtBQUs7WUFDZixXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBQ0YsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUd2QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQTJGakMsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBOEN0QyxDQUFDO0lBdkloQixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFN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SUFBSTthQUN0Qzs7OztvQkE2QkUsS0FBSzt3QkFtQkwsS0FBSztvQkFLTCxLQUFLOzJCQVFMLEtBQUs7b0JBS0wsS0FBSzttQkFLTCxLQUFLO29CQUtMLEtBQUs7dUJBS0wsS0FBSzt1QkFJTCxLQUFLO29CQWFMLEtBQUs7c0JBbUJMLE1BQU07NEJBR04sV0FBVyxTQUFDLE9BQU87b0JBSW5CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBSWhDLFlBQVksU0FBQyxZQUFZO21CQU96QixZQUFZLFNBQUMsV0FBVztrQkFPeEIsWUFBWSxTQUFDLFVBQVU7MEJBT3ZCLFlBQVksU0FBQyxXQUFXO3dCQU94QixZQUFZLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdMaXN0SXRlbSwgbnptLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tbGlzdCcsXG4gICAgYWxpZ246ICdtaWRkbGUnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBtdWx0aXBsZUxpbmU6IGZhbHNlLFxuICAgIHdyYXA6IGZhbHNlLFxuICAgIHBsYXRmb3JtOiAnaW9zJyxcbiAgICByaXBwbGVTdHlsZToge31cbiAgfTtcbiAgYXJyb3dDbHM6IGFueSA9IHt9O1xuICBsaW5lQ2xzOiBhbnkgPSB7fTtcbiAgd3JhcENsczogc3RyaW5nID0gJyc7XG4gIHJpcHBsZUNsczogYW55ID0ge307XG4gIHJpcHBsZUNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGVib3VuY2VUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfdGh1bWJfY29tcG9uZW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RodW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF90aHVtYl9zcmM6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9leHRyYV9jb21wb25lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX2V4dHJhX3RpdGxlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYXJyb3c6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZXh0cmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhO1xuICB9XG4gIGdldCBleHRyYV9jb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhX2NvbXBvbmVudDtcbiAgfVxuICBnZXQgZXh0cmFfdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhX3RpdGxlO1xuICB9XG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9leHRyYV9jb21wb25lbnQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0cmFfY29tcG9uZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leHRyYV90aXRsZSA9IDxzdHJpbmc+dmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjbGFzc05hbWUodmFsdWUpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBhcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyb3c7XG4gIH1cbiAgc2V0IGFycm93KHZhbHVlKSB7XG4gICAgdGhpcy5fYXJyb3cgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZUxpbmUodmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5tdWx0aXBsZUxpbmUgPSB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZXJyb3IodmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5lcnJvciA9IHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3cmFwKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMud3JhcCA9IHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGxhdGZvcm0odmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5wbGF0Zm9ybSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdGh1bWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iO1xuICB9XG4gIGdldCB0aHVtYl9jb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iX2NvbXBvbmVudDtcbiAgfVxuICBnZXQgdGh1bWJfc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYl9zcmM7XG4gIH1cbiAgc2V0IHRodW1iKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RodW1iX2NvbXBvbmVudCA9IHRydWU7XG4gICAgICB0aGlzLl90aHVtYiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aHVtYl9jb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RodW1iX3NyYyA9IDxzdHJpbmc+dmFsdWU7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYmluZ0NsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndyYXBDbHM7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGljayhldmVudCkge1xuICAgIHRoaXMub25JdGVtQ2xpY2soZXZlbnQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnKVxuICBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmIHRoaXMub25DbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNobW92ZScpXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnKVxuICBlbmQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgbW91c2Vfc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldENsc01hcCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJylcbiAgbW91c2VfZW5kKCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldENsc01hcCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVMaXN0ID0gdGhpcy5fY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IGNsYXNzTmFtZU9iaiA9IHt9O1xuICAgIHRoaXMud3JhcENscyA9ICcnO1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBjbGFzc05hbWVMaXN0KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY2xhc3NOYW1lT2JqID0ge1xuICAgICAgICAgIC4uLmNsYXNzTmFtZU9iaixcbiAgICAgICAgICAuLi57IFtgJHt2YWx1ZX1gXTogdHJ1ZSB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcENsc09iaiA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW0tZGlzYWJsZWRgXTogdGhpcy5fZGlzYWJsZWQsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtLWFjdGl2ZWBdOiB0aGlzLl9hY3RpdmUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtLWVycm9yYF06IHRoaXMuZGVmYXVsdFByb3BzLmVycm9yLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS10b3BgXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICd0b3AnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1taWRkbGVgXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdtaWRkbGUnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1ib3R0b21gXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdib3R0b20nLFxuICAgICAgLi4uY2xhc3NOYW1lT2JqXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdyYXBDbHNPYmopIHtcbiAgICAgIGlmICh3cmFwQ2xzT2JqW2tleV0pIHtcbiAgICAgICAgdGhpcy53cmFwQ2xzICs9IGAgJHtrZXl9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJpcHBsZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LXJpcHBsZWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tcmlwcGxlLWFuaW1hdGVgXTogdGhpcy5yaXBwbGVDbGlja2VkXG4gICAgfTtcblxuICAgIHRoaXMubGluZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWxpbmVgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWxpbmUtbXVsdGlwbGVgXTogdGhpcy5kZWZhdWx0UHJvcHMubXVsdGlwbGVMaW5lLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tbGluZS13cmFwYF06IHRoaXMuZGVmYXVsdFByb3BzLndyYXBcbiAgICB9O1xuXG4gICAgdGhpcy5hcnJvd0NscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWFycm93YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1hcnJvdy1ob3Jpem9udGFsYF06IHRoaXMuX2Fycm93ID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1hcnJvdy12ZXJ0aWNhbGBdOiB0aGlzLl9hcnJvdyA9PT0gJ2Rvd24nIHx8IHRoaXMuX2Fycm93ID09PSAndXAnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tYXJyb3ctdmVydGljYWwtdXBgXTogdGhpcy5fYXJyb3cgPT09ICd1cCdcbiAgICB9O1xuICB9XG5cbiAgb25JdGVtQ2xpY2soZXYpIHtcbiAgICBjb25zdCBpc0FuZHJvaWQgPSB0aGlzLmRlZmF1bHRQcm9wcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnO1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBJdGVtID0gZXYuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IFJpcHBsZVdpZHRoID0gTWF0aC5tYXgoSXRlbS5vZmZzZXRIZWlnaHQsIEl0ZW0ub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgQ2xpZW50UmVjdCA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBwb2ludFggPSBldi5jbGllbnRYIC0gQ2xpZW50UmVjdC5sZWZ0IC0gSXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICBjb25zdCBwb2ludFkgPSBldi5jbGllbnRZIC0gQ2xpZW50UmVjdC50b3AgLSBJdGVtLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGNvdmVyUmlwcGxlU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHtSaXBwbGVXaWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7UmlwcGxlV2lkdGh9cHhgLFxuICAgICAgICBsZWZ0OiBgJHtwb2ludFh9cHhgLFxuICAgICAgICB0b3A6IGAke3BvaW50WX1weGBcbiAgICAgIH07XG4gICAgICB0aGlzLmRlZmF1bHRQcm9wcy5yaXBwbGVTdHlsZSA9IGNvdmVyUmlwcGxlU3R5bGU7XG4gICAgICB0aGlzLnJpcHBsZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmlwcGxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcm9wcy5yaXBwbGVTdHlsZSA9IHsgZGlzcGxheTogJ25vbmUnIH07XG4gICAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXYpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMucmlwcGxlU3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=