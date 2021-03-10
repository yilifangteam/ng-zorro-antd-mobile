import { Component, ViewEncapsulation, Input, Output, ElementRef, HostListener, EventEmitter, Renderer2, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';

const _c0 = ["Button", ""];
function ButtonComponent_Icon_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-icon");
    ɵngcc0.ɵɵproperty("type", ctx_r0.iconType)("size", ctx_r0.size === "small" ? "xxs" : "md");
} }
function ButtonComponent_1_ng_template_0_Template(rf, ctx) { }
function ButtonComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ButtonComponent_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.icon);
} }
const _c1 = [[["img"]], "*"];
const _c2 = ["img", "*"];
export class ButtonComponent {
    constructor(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.prefixCls = 'am-button';
        this.ngTemplate = false;
        this._className = '';
        this._classList = [];
        this._size = 'large';
        this._loading = false;
        this._active = false;
        this._inline = false;
        this._disabled = false;
        this._icon = '';
        this._userAgent = navigator.userAgent || navigator.vendor || window.opera;
        this.onClick = new EventEmitter();
        this._el = this._elementRef.nativeElement;
        this._render.addClass(this._el, this.prefixCls);
        this._className = this._el.className;
    }
    get type() {
        return this._type;
    }
    get size() {
        return this._size;
    }
    get disabled() {
        return this._disabled;
    }
    get loading() {
        return this._loading;
    }
    get inline() {
        return this._inline;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.ngTemplate = true;
            this._icon = value;
        }
        else {
            this.ngTemplate = false;
            this._icon = value;
            this.setClassMap();
        }
    }
    set className(v) {
        this._className = this._className + ' ' + v;
        this.setClassMap();
    }
    touchStart(event) {
        if (this._disabled) {
            return;
        }
        this._active = true;
        this.setClassMap();
    }
    touchEnd(event) {
        if (this._disabled) {
            return;
        }
        this._active = false;
        this.setClassMap();
    }
    click(event) {
        if (this._disabled) {
            return;
        }
        this.onClick.emit();
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    set disabled(value) {
        this._disabled = value;
        this.setClassMap();
    }
    set loading(value) {
        this._loading = value;
        if (this._el.querySelector('icon')) {
            const icon = this._el.querySelector('icon');
            icon.style.display = value ? '' : 'none';
        }
        this.setClassMap();
    }
    set size(value) {
        this._size = value;
        this.setClassMap();
    }
    set inline(value) {
        this._inline = value;
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this._el.querySelector('img')) {
            const amSize = this._size === 'small' ? 'am-icon-xxs' : 'am-icon-md';
            this._el.querySelector('img').setAttribute('class', `am-icon ${this.prefixCls}-icon ${amSize}`);
            this._render.addClass(this._el, `${this.prefixCls}-icon`);
        }
    }
    setClassMap() {
        this.iconType = this._loading ? 'loading' : this._icon;
        this._classList = [
            this._type && `${this.prefixCls}-${this._type}`,
            this._size === 'small' && `${this.prefixCls}-${this._size}`,
            this._disabled && `${this.prefixCls}-disabled`,
            this._loading && `${this.prefixCls}-loading`,
            this.iconType && `${this.prefixCls}-icon`,
            this._active && `${this.prefixCls}-active`,
            this._inline && `${this.prefixCls}-inline`
        ].filter(item => {
            return !!item;
        });
        this._el.className = this._className + ' ' + this._classList.join(' ');
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["", "Button", ""], ["nzm-button"]], hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function ButtonComponent_touchstart_HostBindingHandler($event) { return ctx.touchStart($event); })("mousedown", function ButtonComponent_mousedown_HostBindingHandler($event) { return ctx.touchStart($event); })("touchend", function ButtonComponent_touchend_HostBindingHandler($event) { return ctx.touchEnd($event); })("mouseup", function ButtonComponent_mouseup_HostBindingHandler($event) { return ctx.touchEnd($event); })("touchmove", function ButtonComponent_touchmove_HostBindingHandler($event) { return ctx.touchEnd($event); })("mousemove", function ButtonComponent_mousemove_HostBindingHandler($event) { return ctx.touchEnd($event); })("touchcancel", function ButtonComponent_touchcancel_HostBindingHandler($event) { return ctx.touchEnd($event); })("click", function ButtonComponent_click_HostBindingHandler($event) { return ctx.click($event); });
    } }, inputs: { type: "type", size: "size", disabled: "disabled", loading: "loading", inline: "inline", icon: "icon", className: "className" }, outputs: { onClick: "onClick" }, attrs: _c0, ngContentSelectors: _c2, decls: 6, vars: 5, consts: [[3, "class", "type", "size", 4, "ngIf"], [4, "ngIf"], [3, "type", "size"], [3, "ngTemplateOutlet"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, ButtonComponent_Icon_0_Template, 1, 5, "Icon", 0);
        ɵngcc0.ɵɵtemplate(1, ButtonComponent_1_Template, 1, 1, undefined, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵprojection(5, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.ngTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.ngTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.IconComponent, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
ButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    loading: [{ type: Input }],
    inline: [{ type: Input }],
    icon: [{ type: Input }],
    className: [{ type: Input }],
    onClick: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }],
    touchEnd: [{ type: HostListener, args: ['touchend', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }, { type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchcancel', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: '[Button], nzm-button',
                encapsulation: ViewEncapsulation.None,
                template: "<Icon\n  *ngIf=\"!ngTemplate\"\n  class=\"{{ prefixCls }}-icon\"\n  [type]=\"iconType\"\n  [size]=\"size === 'small' ? 'xxs' : 'md'\"\n></Icon>\n<ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"icon\"></ng-template>\n<ng-content select=\"img\"></ng-content>\n<div class=\"{{ prefixCls }}-content\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { onClick: [{
            type: Output
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }], disabled: [{
            type: Input
        }], loading: [{
            type: Input
        }], inline: [{
            type: Input
        }], icon: [{
            type: Input
        }], className: [{
            type: Input
        }], touchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }, {
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], touchEnd: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['touchmove', ['$event']]
        }, {
            type: HostListener,
            args: ['mousemove', ['$event']]
        }, {
            type: HostListener,
            args: ['touchcancel', ['$event']]
        }], click: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkIsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQXlGN0IsWUFBb0IsV0FBdUIsRUFBVSxPQUFrQjtBQUN6RSxRQURzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtBQUFDLFFBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBVztBQUFDLFFBeEZ4RSxjQUFTLEdBQVcsV0FBVyxDQUFDO0FBQ2xDLFFBQUUsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUM5QixRQUdVLGVBQVUsR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFBVSxlQUFVLEdBQVEsRUFBRSxDQUFDO0FBQy9CLFFBQ1UsVUFBSyxHQUFHLE9BQU8sQ0FBQztBQUMxQixRQUFVLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQVUsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUMxQixRQUFVLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBVSxVQUFLLEdBQThCLEVBQUUsQ0FBQztBQUNoRCxRQUFVLGVBQVUsR0FBUyxTQUFVLENBQUMsU0FBUyxJQUFVLFNBQVUsQ0FBQyxNQUFNLElBQVUsTUFBTyxDQUFDLEtBQUssQ0FBQztBQUNwRyxRQXlDRSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbEQsUUFnQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUM5QyxRQUFJLElBQUks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b3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tCdXR0b25dLCBuem0tYnV0dG9uJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLWJ1dHRvbic7XG4gIG5nVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWNvblR5cGU6IGFueTtcblxuICBwcml2YXRlIF9lbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2NsYXNzTmFtZSA9ICcnO1xuICBwcml2YXRlIF9jbGFzc0xpc3Q6IGFueSA9IFtdO1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemUgPSAnbGFyZ2UnO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmxpbmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICcnO1xuICBwcml2YXRlIF91c2VyQWdlbnQgPSAoPGFueT5uYXZpZ2F0b3IpLnVzZXJBZ2VudCB8fCAoPGFueT5uYXZpZ2F0b3IpLnZlbmRvciB8fCAoPGFueT53aW5kb3cpLm9wZXJhO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBpbmxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lubGluZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ljb24gPSA8c3RyaW5nPnZhbHVlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHYpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl9jbGFzc05hbWUgKyAnICcgKyB2O1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIHRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBbJyRldmVudCddKVxuICB0b3VjaEVuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX2VsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3JlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5wcmVmaXhDbHMpO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMuX2VsLmNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3IoJ2ljb24nKSkge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3IoJ2ljb24nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0IGlubGluZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lubGluZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZWwucXVlcnlTZWxlY3RvcignaW1nJykpIHtcbiAgICAgIGNvbnN0IGFtU2l6ZSA9IHRoaXMuX3NpemUgPT09ICdzbWFsbCcgPyAnYW0taWNvbi14eHMnIDogJ2FtLWljb24tbWQnO1xuICAgICAgdGhpcy5fZWwucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBhbS1pY29uICR7dGhpcy5wcmVmaXhDbHN9LWljb24gJHthbVNpemV9YCk7XG4gICAgICB0aGlzLl9yZW5kZXIuYWRkQ2xhc3ModGhpcy5fZWwsIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmljb25UeXBlID0gdGhpcy5fbG9hZGluZyA/ICdsb2FkaW5nJyA6IHRoaXMuX2ljb247XG4gICAgdGhpcy5fY2xhc3NMaXN0ID0gW1xuICAgICAgdGhpcy5fdHlwZSAmJiBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLl90eXBlfWAsXG4gICAgICB0aGlzLl9zaXplID09PSAnc21hbGwnICYmIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuX3NpemV9YCxcbiAgICAgIHRoaXMuX2Rpc2FibGVkICYmIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAsXG4gICAgICB0aGlzLl9sb2FkaW5nICYmIGAke3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYCxcbiAgICAgIHRoaXMuaWNvblR5cGUgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gLFxuICAgICAgdGhpcy5fYWN0aXZlICYmIGAke3RoaXMucHJlZml4Q2xzfS1hY3RpdmVgLFxuICAgICAgdGhpcy5faW5saW5lICYmIGAke3RoaXMucHJlZml4Q2xzfS1pbmxpbmVgXG4gICAgXS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gISFpdGVtO1xuICAgIH0pO1xuICAgIHRoaXMuX2VsLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZSArICcgJyArIHRoaXMuX2NsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==