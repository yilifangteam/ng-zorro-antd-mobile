import { Component, Input, Output, EventEmitter, HostBinding, HostListener, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["Checkbox", ""];
const _c1 = ["*"];
export class CheckboxComponent {
    constructor() {
        this.prefixCls = 'am-checkbox';
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: false,
            [`${this.prefixCls}-disabled`]: false
        };
        this._checked = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.checkBoxWrapper = true;
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
        if (!this._disabled) {
            this.updateValue(!this.checked);
        }
    }
    updateValue(value) {
        this.checked = value;
        this.onChange.emit({
            name: this.name,
            value: this.value,
            checked: value
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
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["", "Checkbox", ""], ["", "nzm-checkbox", ""]], hostVars: 2, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CheckboxComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-checkbox-wrapper", ctx.checkBoxWrapper);
    } }, inputs: { checked: "checked", disabled: "disabled", name: "name", value: "value" }, outputs: { onChange: "onChange" }, attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 11, consts: [[3, "ngClass"], ["type", "checkbox", 3, "checked", "disabled"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
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
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    checkBoxWrapper: [{ type: HostBinding, args: ['class.am-checkbox-wrapper',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[Checkbox], [nzm-checkbox]',
                template: "<span [ngClass]=\"classMap\">\n  <input\n    type=\"checkbox\"\n    class=\"{{ prefixCls }}-input\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n  />\n  <span class=\"{{ prefixCls }}-inner\"></span>\n</span>\n<ng-content></ng-content>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { onChange: [{
            type: Output
        }], checkBoxWrapper: [{
            type: HostBinding,
            args: ['class.am-checkbox-wrapper']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXZCLE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQTRDL0I7QUFBZ0IsUUEzQ2hCLGNBQVMsR0FBVyxhQUFhLENBQUM7QUFDcEMsUUFBRSxhQUFRLEdBQVc7QUFDckIsWUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJO0FBQzFCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFFLEtBQUs7QUFDeEMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFDLEVBQUUsS0FBSztBQUN6QyxTQUFHLENBQUM7QUFDSixRQUFVLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDcEMsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBc0JFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztBQUN2RCxRQUVFLG9CQUFlLEdBQVksSUFBSSxDQUFDO0FBQ2xDLElBU2lCLENBQUM7QUFDbEIsSUEvQkUsSUFDSSxPQUFPO0FBQUssUUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFjO0FBQzVCLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDMUIsUUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQU9FLE9BQU8sQ0FBQyxLQUFLO0FBQUksUUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBR0UsV0FBVyxDQUFDLEtBQWM7QUFBSSxRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLFlBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQ3JCLFlBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ3ZCLFlBQU0sT0FBTyxFQUFFLEtBQUs7QUFDcEIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNVLGNBQWM7QUFDeEIsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHO0FBQ3BCLFlBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtBQUM1QixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztBQUNqRCxZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUTtBQUNuRCxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDs2Q0F6RUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtZQUE0QixrQkFDdEM7a0hBQXdDO0dBQ3hDO0VBQW1CLEVBQUUsS0FBSyxrQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7VUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sY0FDaEQ7Ozs7Ozs7Ozs7Ozs7OzsrRUFDSTtBQUFDO0FBQ047QUFDQSxtQkFRRyxLQUFLO0FBQ04sb0JBQ0MsS0FBSztBQUNOLHNCQUNDLEtBQUs7QUFDTix1QkFPQyxLQUFLO0FBQ04sdUJBT0MsTUFBTTtBQUNQLDhCQUVDLFdBQVcsU0FBQywyQkFBMkI7QUFDckMsc0JBRUYsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94T25DaGFuZ2VFdmVudCB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW0NoZWNrYm94XSwgW256bS1jaGVja2JveF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1jaGVja2JveCc7XG4gIGNsYXNzTWFwOiBvYmplY3QgPSB7XG4gICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgXTogZmFsc2UsXG4gICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiBmYWxzZVxuICB9O1xuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENoZWNrYm94T25DaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWNoZWNrYm94LXdyYXBwZXInKVxuICBjaGVja0JveFdyYXBwZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjaGVja2VkOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tlZGBdOiB0aGlzLmNoZWNrZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9O1xuICB9XG59XG4iXX0=