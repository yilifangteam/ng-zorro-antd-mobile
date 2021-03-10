import { Component, ViewEncapsulation, Input, TemplateRef, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "img", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-thumb");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.thumb_src, ɵngcc0.ɵɵsanitizeUrl);
} }
function ListItemComponent_div_1_ng_template_1_Template(rf, ctx) { }
function ListItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ListItemComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-thumb");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.thumb);
} }
function ListItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.defaultProps.prefixCls, "-extra");
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.extra_title, ɵngcc0.ɵɵsanitizeHtml);
} }
function ListItemComponent_div_6_ng_template_1_Template(rf, ctx) { }
function ListItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ListItemComponent_div_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.defaultProps.prefixCls, "-extra");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extra);
} }
function ListItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.arrowCls);
} }
const _c0 = ["*"];
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
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
ListItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListItemComponent, selectors: [["ListItem"], ["nzm-list-item"]], hostVars: 2, hostBindings: function ListItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ListItemComponent_click_HostBindingHandler($event) { return ctx.click($event); })("touchstart", function ListItemComponent_touchstart_HostBindingHandler() { return ctx.start(); })("touchmove", function ListItemComponent_touchmove_HostBindingHandler() { return ctx.move(); })("touchend", function ListItemComponent_touchend_HostBindingHandler() { return ctx.end(); })("mousedown", function ListItemComponent_mousedown_HostBindingHandler() { return ctx.mouse_start(); })("mouseup", function ListItemComponent_mouseup_HostBindingHandler() { return ctx.mouse_end(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.bingClassName);
    } }, inputs: { extra: "extra", className: "className", arrow: "arrow", multipleLine: "multipleLine", error: "error", wrap: "wrap", align: "align", platform: "platform", disabled: "disabled", thumb: "thumb" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 9, vars: 11, consts: [[3, "class", 4, "ngIf"], [3, "ngClass"], [3, "class", "innerHTML", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "src"], [3, "ngTemplateOutlet"], [3, "innerHTML"], ["aria-hidden", "true", 3, "ngClass"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ListItemComponent_div_0_Template, 2, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ListItemComponent_div_1_Template, 2, 4, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, ListItemComponent_div_5_Template, 1, 4, "div", 2);
        ɵngcc0.ɵɵtemplate(6, ListItemComponent_div_6_Template, 2, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(7, ListItemComponent_div_7_Template, 1, 1, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(8, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumb_src && !ctx.thumb_component);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thumb && ctx.thumb_component);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.lineCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-content");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extra_title && !ctx.extra_component);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extra && ctx.extra_component);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.rippleCls)("ngStyle", ctx.defaultProps.rippleStyle);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ListItemComponent, [{
        type: Component,
        args: [{
                selector: 'ListItem, nzm-list-item',
                template: "<div *ngIf=\"thumb_src && !thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <img src=\"{{ thumb_src }}\" />\n</div>\n<div *ngIf=\"thumb && thumb_component\" class=\"{{ defaultProps.prefixCls }}-thumb\">\n  <ng-template [ngTemplateOutlet]=\"thumb\"></ng-template>\n</div>\n<div [ngClass]=\"lineCls\">\n  <div class=\"{{ defaultProps.prefixCls }}-content\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"extra_title && !extra_component\"\n    class=\"{{ defaultProps.prefixCls }}-extra\"\n    [innerHTML]=\"extra_title\"\n  ></div>\n  <div *ngIf=\"extra && extra_component\" class=\"{{ defaultProps.prefixCls }}-extra\">\n    <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n  </div>\n  <div *ngIf=\"arrow\" [ngClass]=\"arrowCls\" aria-hidden=\"true\"></div>\n</div>\n<div [ngClass]=\"rippleCls\" [ngStyle]=\"defaultProps.rippleStyle\"></div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], extra: [{
            type: Input
        }], className: [{
            type: Input
        }], arrow: [{
            type: Input
        }], multipleLine: [{
            type: Input
        }], error: [{
            type: Input
        }], wrap: [{
            type: Input
        }], align: [{
            type: Input
        }], platform: [{
            type: Input
        }], disabled: [{
            type: Input
        }], thumb: [{
            type: Input
        }], bingClassName: [{
            type: HostBinding,
            args: ['class']
        }], click: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], start: [{
            type: HostListener,
            args: ['touchstart']
        }], move: [{
            type: HostListener,
            args: ['touchmove']
        }], end: [{
            type: HostListener,
            args: ['touchend']
        }], mouse_start: [{
            type: HostListener,
            args: ['mousedown']
        }], mouse_end: [{
            type: HostListener,
            args: ['mouseup']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLEtBQUssRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFFTixXQUFXLEVBQ1gsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QixNQUFNLE9BQU8saUJBQWlCO0FBQUcsSUFtSy9CO0FBQWdCLFFBbEtoQixpQkFBWSxHQUFHO0FBQ2pCLFlBQUksU0FBUyxFQUFFLFNBQVM7QUFDeEIsWUFBSSxLQUFLLEVBQUUsUUFBUTtBQUNuQixZQUFJLEtBQUssRUFBRSxLQUFLO0FBQ2hCLFlBQUksWUFBWSxFQUFFLEtBQUs7QUFDdkIsWUFBSSxJQUFJLEVBQUUsS0FBSztBQUNmLFlBQUksUUFBUSxFQUFFLEtBQUs7QUFDbkIsWUFBSSxXQUFXLEVBQUUsRUFBRTtBQUNuQixTQUFHLENBQUM7QUFDSixRQUFFLGFBQVEsR0FBUSxFQUFFLENBQUM7QUFDckIsUUFBRSxZQUFPLEdBQVEsRUFBRSxDQUFDO0FBQ3BCLFFBQUUsWUFBTyxHQUFXLEVBQUUsQ0FBQztBQUN2QixRQUFFLGNBQVMsR0FBUSxFQUFFLENBQUM7QUFDdEIsUUFBRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztBQUNqQyxRQUVVLHFCQUFnQixHQUFZLEtBQUssQ0FBQztBQUM1QyxRQUNVLGVBQVUsR0FBVyxFQUFFLENBQUM7QUFDbEMsUUFBVSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7QUFDNUMsUUFDVSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUNwQyxRQUFVLFdBQU0sR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFD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SUFBSSxDQUFDLGVBQWUsRUFBRTtBQUM5QixZQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekMsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUNsQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7NkNBclFDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBeUIsa0JBQ25DOzs7O2lDQUF5QyxrQkFDekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lIQUNJO0FBQUM7QUFBNkM7QUFFNUMsb0JBMEJKLEtBQUs7QUFDTix3QkFrQkMsS0FBSztBQUNOLG9CQUlDLEtBQUs7QUFDTiwyQkFPQyxLQUFLO0FBQ04sb0JBSUMsS0FBSztBQUNOLG1CQUlDLEtBQUs7QUFDTixvQkFJQyxLQUFLO0FBQ04sdUJBSUMsS0FBSztBQUNOLHVCQUdDLEtBQUs7QUFDTixvQkFZQyxLQUFLO0FBQ04sc0JBa0JDLE1BQU07QUFDUCw0QkFFQyxXQUFXLFNBQUMsT0FBTztBQUNqQixvQkFHRixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQzlCLG9CQUdGLFlBQVksU0FBQyxZQUFZO0FBQ3ZCLG1CQU1GLFlBQVksU0FBQyxXQUFXO0FBQ3RCLGtCQU1GLFlBQVksU0FBQyxVQUFVO0FBQ3JCLDBCQU1GLFlBQVksU0FBQyxXQUFXO0FBQ3RCLHdCQU1GLFlBQVksU0FBQyxTQUFTO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdMaXN0SXRlbSwgbnptLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tbGlzdCcsXG4gICAgYWxpZ246ICdtaWRkbGUnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBtdWx0aXBsZUxpbmU6IGZhbHNlLFxuICAgIHdyYXA6IGZhbHNlLFxuICAgIHBsYXRmb3JtOiAnaW9zJyxcbiAgICByaXBwbGVTdHlsZToge31cbiAgfTtcbiAgYXJyb3dDbHM6IGFueSA9IHt9O1xuICBsaW5lQ2xzOiBhbnkgPSB7fTtcbiAgd3JhcENsczogc3RyaW5nID0gJyc7XG4gIHJpcHBsZUNsczogYW55ID0ge307XG4gIHJpcHBsZUNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGVib3VuY2VUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfdGh1bWJfY29tcG9uZW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RodW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF90aHVtYl9zcmM6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9leHRyYV9jb21wb25lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX2V4dHJhX3RpdGxlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYXJyb3c6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZXh0cmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhO1xuICB9XG4gIGdldCBleHRyYV9jb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhX2NvbXBvbmVudDtcbiAgfVxuICBnZXQgZXh0cmFfdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhX3RpdGxlO1xuICB9XG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9leHRyYV9jb21wb25lbnQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0cmFfY29tcG9uZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leHRyYV90aXRsZSA9IDxzdHJpbmc+dmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjbGFzc05hbWUodmFsdWUpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBhcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyb3c7XG4gIH1cbiAgc2V0IGFycm93KHZhbHVlKSB7XG4gICAgdGhpcy5fYXJyb3cgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtdWx0aXBsZUxpbmUodmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5tdWx0aXBsZUxpbmUgPSB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZXJyb3IodmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5lcnJvciA9IHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3cmFwKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMud3JhcCA9IHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB0aGlzLnNldENsc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGxhdGZvcm0odmFsdWUpIHtcbiAgICB0aGlzLmRlZmF1bHRQcm9wcy5wbGF0Zm9ybSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdGh1bWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iO1xuICB9XG4gIGdldCB0aHVtYl9jb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iX2NvbXBvbmVudDtcbiAgfVxuICBnZXQgdGh1bWJfc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYl9zcmM7XG4gIH1cbiAgc2V0IHRodW1iKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RodW1iX2NvbXBvbmVudCA9IHRydWU7XG4gICAgICB0aGlzLl90aHVtYiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aHVtYl9jb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RodW1iX3NyYyA9IDxzdHJpbmc+dmFsdWU7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYmluZ0NsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndyYXBDbHM7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGljayhldmVudCkge1xuICAgIHRoaXMub25JdGVtQ2xpY2soZXZlbnQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnKVxuICBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmIHRoaXMub25DbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNobW92ZScpXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnKVxuICBlbmQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgbW91c2Vfc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldENsc01hcCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJylcbiAgbW91c2VfZW5kKCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldENsc01hcCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVMaXN0ID0gdGhpcy5fY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IGNsYXNzTmFtZU9iaiA9IHt9O1xuICAgIHRoaXMud3JhcENscyA9ICcnO1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBjbGFzc05hbWVMaXN0KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY2xhc3NOYW1lT2JqID0ge1xuICAgICAgICAgIC4uLmNsYXNzTmFtZU9iaixcbiAgICAgICAgICAuLi57IFtgJHt2YWx1ZX1gXTogdHJ1ZSB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcENsc09iaiA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW0tZGlzYWJsZWRgXTogdGhpcy5fZGlzYWJsZWQsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtLWFjdGl2ZWBdOiB0aGlzLl9hY3RpdmUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1pdGVtLWVycm9yYF06IHRoaXMuZGVmYXVsdFByb3BzLmVycm9yLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS10b3BgXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICd0b3AnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1taWRkbGVgXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdtaWRkbGUnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30taXRlbS1ib3R0b21gXTogdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdib3R0b20nLFxuICAgICAgLi4uY2xhc3NOYW1lT2JqXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdyYXBDbHNPYmopIHtcbiAgICAgIGlmICh3cmFwQ2xzT2JqW2tleV0pIHtcbiAgICAgICAgdGhpcy53cmFwQ2xzICs9IGAgJHtrZXl9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJpcHBsZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LXJpcHBsZWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tcmlwcGxlLWFuaW1hdGVgXTogdGhpcy5yaXBwbGVDbGlja2VkXG4gICAgfTtcblxuICAgIHRoaXMubGluZUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWxpbmVgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWxpbmUtbXVsdGlwbGVgXTogdGhpcy5kZWZhdWx0UHJvcHMubXVsdGlwbGVMaW5lLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tbGluZS13cmFwYF06IHRoaXMuZGVmYXVsdFByb3BzLndyYXBcbiAgICB9O1xuXG4gICAgdGhpcy5hcnJvd0NscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWFycm93YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1hcnJvdy1ob3Jpem9udGFsYF06IHRoaXMuX2Fycm93ID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbYCR7dGhpcy5kZWZhdWx0UHJvcHMucHJlZml4Q2xzfS1hcnJvdy12ZXJ0aWNhbGBdOiB0aGlzLl9hcnJvdyA9PT0gJ2Rvd24nIHx8IHRoaXMuX2Fycm93ID09PSAndXAnLFxuICAgICAgW2Ake3RoaXMuZGVmYXVsdFByb3BzLnByZWZpeENsc30tYXJyb3ctdmVydGljYWwtdXBgXTogdGhpcy5fYXJyb3cgPT09ICd1cCdcbiAgICB9O1xuICB9XG5cbiAgb25JdGVtQ2xpY2soZXYpIHtcbiAgICBjb25zdCBpc0FuZHJvaWQgPSB0aGlzLmRlZmF1bHRQcm9wcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnO1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBJdGVtID0gZXYuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IFJpcHBsZVdpZHRoID0gTWF0aC5tYXgoSXRlbS5vZmZzZXRIZWlnaHQsIEl0ZW0ub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgQ2xpZW50UmVjdCA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBwb2ludFggPSBldi5jbGllbnRYIC0gQ2xpZW50UmVjdC5sZWZ0IC0gSXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICBjb25zdCBwb2ludFkgPSBldi5jbGllbnRZIC0gQ2xpZW50UmVjdC50b3AgLSBJdGVtLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGNvdmVyUmlwcGxlU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHtSaXBwbGVXaWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7UmlwcGxlV2lkdGh9cHhgLFxuICAgICAgICBsZWZ0OiBgJHtwb2ludFh9cHhgLFxuICAgICAgICB0b3A6IGAke3BvaW50WX1weGBcbiAgICAgIH07XG4gICAgICB0aGlzLmRlZmF1bHRQcm9wcy5yaXBwbGVTdHlsZSA9IGNvdmVyUmlwcGxlU3R5bGU7XG4gICAgICB0aGlzLnJpcHBsZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmlwcGxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcm9wcy5yaXBwbGVTdHlsZSA9IHsgZGlzcGxheTogJ25vbmUnIH07XG4gICAgICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXYpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMucmlwcGxlU3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=