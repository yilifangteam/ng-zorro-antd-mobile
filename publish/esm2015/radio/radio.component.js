import { Component, Input, Output, HostBinding, HostListener, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["Radio", ""];
const _c1 = ["*"];
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
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["", "Radio", ""], ["", "nzm-radio", ""]], hostVars: 2, hostBindings: function RadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function RadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-radio-wrapper", ctx.radioWrapper);
    } }, inputs: { checked: "checked", disabled: "disabled", name: "name", value: "value" }, outputs: { onChange: "onChange" }, attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 11, consts: [[3, "ngClass"], ["type", "radio", 3, "checked", "disabled"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelement(1, "input", 1);
        ɵngcc0.ɵɵelement(2, "span");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("name", ctx.name)("value", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-inner");
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: '[Radio], [nzm-radio]',
                template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"radio\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { onChange: [{
            type: Output
        }], radioWrapper: [{
            type: HostBinding,
            args: ['class.am-radio-wrapper']
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBRU4sV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXZCLE1BQU0sT0FBTyxjQUFjO0FBQUcsSUE0QzVCO0FBQWdCLFFBM0NoQixjQUFTLEdBQVcsVUFBVSxDQUFDO0FBQ2pDLFFBQUUsYUFBUSxHQUFXO0FBQ3JCLFlBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtBQUMxQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztBQUMvQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUTtBQUNqRCxTQUFHLENBQUM7QUFDSixRQUFVLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDcEMsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBc0JFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0FBQzdDLFFBRUUsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDL0IsSUFTaUIsQ0FBQztBQUNsQixJQS9CRSxJQUNJLE9BQU87QUFBSyxRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksT0FBTyxDQUFDLEtBQWM7QUFDNUIsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsS0FBYztBQUM3QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBT0UsT0FBTyxDQUFDLEtBQUs7QUFBSSxRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQyxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBR0UsV0FBVyxDQUFDLFVBQW1CO0FBQUksUUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUN2QixZQUFNLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNyQixZQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN2QixTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQ1UsY0FBYztBQUFLLFFBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUc7QUFDcEIsWUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJO0FBQzVCLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQ2pELFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ25ELFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIOzBDQXhFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1lBQXNCLGtCQUNoQzs7QUFBcUMsa0JBQ3JDO2lCQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRTtRQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGNBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7K0VBQ0k7QUFBQztBQUNOO0FBQ0EsbUJBUUcsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTixzQkFDQyxLQUFLO0FBQ04sdUJBT0MsS0FBSztBQUNOLHVCQU9DLE1BQU07QUFDUCwyQkFFQyxXQUFXLFNBQUMsd0JBQXdCO0FBQ2xDLHNCQUVGLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYWRpb1N0YXR1cyB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW1JhZGlvXSwgW256bS1yYWRpb10nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1yYWRpbyc7XG4gIGNsYXNzTWFwOiBvYmplY3QgPSB7XG4gICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgXTogdGhpcy5jaGVja2VkLFxuICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICB9O1xuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJhZGlvU3RhdHVzPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcmFkaW8td3JhcHBlcicpXG4gIHJhZGlvV3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmICF0aGlzLl9jaGVja2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB1cGRhdGVWYWx1ZShjaGVja1ZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gY2hlY2tWYWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgXTogdGhpcy5jaGVja2VkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gICAgfTtcbiAgfVxufVxuIl19