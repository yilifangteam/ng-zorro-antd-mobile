import { Component, Input, Output, ElementRef, TemplateRef, HostBinding, HostListener, EventEmitter, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PopoverItemComponent_ng_template_2_Template(rf, ctx) { }
const _c0 = ["*"];
export class PopoverItemComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.defaultProps = {
            prefixCls: 'am-popover',
            disabled: false
        };
        this.isActive = false;
        this.select = new EventEmitter();
        this.amPopoverItem = true;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
    }
    get style() {
        return this._style;
    }
    set style(value) {
        this._style = value;
    }
    set disabled(value) {
        this.defaultProps.disabled = value;
    }
    get amPopoverItemActive() {
        return this.isActive;
    }
    get amPopoverItemDisabled() {
        return this.defaultProps.disabled;
    }
    touchStart(e) {
        this.select.emit();
        this.isActive = true;
    }
    ngAfterContentInit() { }
}
PopoverItemComponent.ɵfac = function PopoverItemComponent_Factory(t) { return new (t || PopoverItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
PopoverItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PopoverItemComponent, selectors: [["PopoverItem"], ["nzm-popover-item"]], hostVars: 6, hostBindings: function PopoverItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function PopoverItemComponent_touchstart_HostBindingHandler($event) { return ctx.touchStart($event); })("mousedown", function PopoverItemComponent_mousedown_HostBindingHandler($event) { return ctx.touchStart($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-popover-item", ctx.amPopoverItem)("am-popover-item-active", ctx.amPopoverItemActive)("am-popover-item-disabled", ctx.amPopoverItemDisabled);
    } }, inputs: { icon: "icon", style: "style", disabled: "disabled" }, outputs: { select: "select" }, ngContentSelectors: _c0, decls: 5, vars: 10, consts: [["aria-hidden", "true"], [3, "ngTemplateOutlet"]], template: function PopoverItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "span", 0);
        ɵngcc0.ɵɵtemplate(2, PopoverItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span");
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-container");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-icon");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-content");
    } }, directives: [ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
PopoverItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
PopoverItemComponent.propDecorators = {
    icon: [{ type: Input }],
    style: [{ type: Input }],
    disabled: [{ type: Input }],
    select: [{ type: Output }],
    amPopoverItem: [{ type: HostBinding, args: ['class.am-popover-item',] }],
    amPopoverItemActive: [{ type: HostBinding, args: ['class.am-popover-item-active',] }],
    amPopoverItemDisabled: [{ type: HostBinding, args: ['class.am-popover-item-disabled',] }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PopoverItemComponent, [{
        type: Component,
        args: [{
                selector: 'PopoverItem, nzm-popover-item',
                template: "<div class=\"{{ defaultProps.prefixCls }}-item-container\">\n  <span class=\"{{ defaultProps.prefixCls }}-item-icon\" aria-hidden=\"true\">\n    <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  <span class=\"{{ defaultProps.prefixCls }}-item-content\">\n    <ng-content></ng-content>\n  </span>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { select: [{
            type: Output
        }], amPopoverItem: [{
            type: HostBinding,
            args: ['class.am-popover-item']
        }], icon: [{
            type: Input
        }], style: [{
            type: Input
        }], disabled: [{
            type: Input
        }], amPopoverItemActive: [{
            type: HostBinding,
            args: ['class.am-popover-item-active']
        }], amPopoverItemDisabled: [{
            type: HostBinding,
            args: ['class.am-popover-item-disabled']
        }], touchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }, {
            type: HostListener,
            args: ['mousedown', ['$event']]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXItaXRlbS9wb3BvdmVyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3ZCLE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQWlEbEMsWUFBb0IsV0FBdUI7QUFBSSxRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtBQUFDLFFBaEQ1QyxpQkFBWSxHQUFHO0FBQ2pCLFlBQUksU0FBUyxFQUFFLFlBQVk7QUFDM0IsWUFBSSxRQUFRLEVBQUUsS0FBSztBQUNuQixTQUFHLENBQUM7QUFDSixRQUFFLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDbkIsUUF1QkUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pELFFBRUUsa0JBQWEsR0FBWSxJQUFJLENBQUM7QUFDaEMsSUFnQmdELENBQUM7QUFDakQsSUF4Q0UsSUFDSSxJQUFJO0FBQUssUUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLElBQUksQ0FBQyxLQUF1QjtBQUNsQyxRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxLQUFLO0FBQ1gsUUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLO0FBQ2pCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVEsQ0FBQyxLQUFLO0FBQ3BCLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLElBQUUsQ0FBQztBQUNILElBS0UsSUFDSSxtQkFBbUI7QUFBSyxRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLHFCQUFxQjtBQUFLLFFBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFHRSxVQUFVLENBQUMsQ0FBQztBQUNkLFFBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixRQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBR0Usa0JBQWtCLEtBQUksQ0FBQztBQUN6QjtnREF6REMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwrQkFBK0Isa0JBQ3pDOzsyRkFBNEMsa0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBQ0k7QUFBQztBQUE4QyxZQWJsRCxVQUFVO0FBQ1g7QUFBRztBQUVVLG1CQW9CWCxLQUFLO0FBQ04sb0JBTUMsS0FBSztBQUNOLHVCQU1DLEtBQUs7QUFDTixxQkFHQyxNQUFNO0FBQ1AsNEJBRUMsV0FBVyxTQUFDLHVCQUF1QjtBQUNqQyxrQ0FDRixXQUFXLFNBQUMsOEJBQThCO0FBQ3hDLG9DQUdGLFdBQVcsU0FBQyxnQ0FBZ0M7QUFDMUMseUJBSUYsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNyQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQb3BvdmVySXRlbSwgbnptLXBvcG92ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1wb3BvdmVyJyxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfTtcbiAgaXNBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIF9zdHlsZTtcbiAgcHJpdmF0ZSBfaWNvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xuICB9XG4gIHNldCBzdHlsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3N0eWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXBvcG92ZXItaXRlbScpXG4gIGFtUG9wb3Zlckl0ZW06IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXBvcG92ZXItaXRlbS1hY3RpdmUnKVxuICBnZXQgYW1Qb3BvdmVySXRlbUFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXBvcG92ZXItaXRlbS1kaXNhYmxlZCcpXG4gIGdldCBhbVBvcG92ZXJJdGVtRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmRpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIHRvdWNoU3RhcnQoZSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge31cbn1cbiJdfQ==