import { Component, ViewEncapsulation, Input, Output, EventEmitter, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class SwitchComponent {
    constructor() {
        this.prefixCls = 'am-switch';
        this.wrapCls = 'am-switch';
        this.checkboxCls = {
            'checkbox-disabled': false,
            'checkbox-active': false,
            'checkbox-inactive': true
        };
        this.colorStyle = {};
        this.switchChecked = false;
        this._color = '';
        this._disabled = false;
        this.onChanged = Function.prototype;
        this.onTouched = Function.prototype;
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.dispaly = true;
    }
    set color(value) {
        this._color = value;
        this.colorStyle = { background: this._color };
    }
    set platform(value) {
        this.wrapCls = value === 'android' ? `${this.prefixCls}-android` : this.prefixCls;
    }
    set checked(value) {
        this.switchChecked = value;
        this.checkboxCls = {
            'checkbox-disabled': this._disabled,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
        this.colorStyle = { background: value ? this._color : '' };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.checkboxCls = {
            'checkbox-disabled': value,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
    }
    changeSwitch(checkedValue) {
        this.onChanged(checkedValue);
        this.switchChecked = checkedValue;
        this.checkboxCls = {
            'checkbox-disabled': this._disabled,
            'checkbox-active': this.switchChecked,
            'checkbox-inactive': !this.switchChecked
        };
        this.colorStyle = { background: checkedValue ? this._color : '' };
        this.onChange.emit(checkedValue);
    }
    click() {
        this.onClick.emit(this.switchChecked);
    }
    writeValue(value) {
        this.switchChecked = value;
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(); };
SwitchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SwitchComponent, selectors: [["Switch"], ["nzm-switch"]], hostVars: 2, hostBindings: function SwitchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", ctx.dispaly);
    } }, inputs: { color: "color", platform: "platform", checked: "checked", disabled: "disabled", name: "name" }, outputs: { onChange: "onChange", onClick: "onClick" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true
            }
        ])], decls: 4, vars: 12, consts: [[3, "ngClass"], ["type", "checkbox", "name", "name", 3, "checked", "value", "disabled", "change"], ["switchValue", ""], [1, "checkbox", 3, "ngClass", "ngStyle", "click"]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("change", function SwitchComponent_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r1); const _r0 = ɵngcc0.ɵɵreference(2); return ctx.changeSwitch(_r0.checked); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵlistener("click", function SwitchComponent_Template_div_click_3_listener() { return ctx.click(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-checkbox");
        ɵngcc0.ɵɵproperty("checked", ctx.switchChecked)("value", ctx.switchChecked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.checkboxCls)("ngStyle", ctx.colorStyle);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    color: [{ type: Input }],
    name: [{ type: Input }],
    platform: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    onClick: [{ type: Output }],
    dispaly: [{ type: HostBinding, args: ['style.display',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SwitchComponent, [{
        type: Component,
        args: [{
                selector: 'Switch, nzm-switch',
                template: "<label class=\"{{ prefixCls }}\" [ngClass]=\"wrapCls\">\n  <input\n    #switchValue\n    type=\"checkbox\"\n    name=\"name\"\n    class=\"{{ prefixCls }}-checkbox\"\n    [checked]=\"switchChecked\"\n    [value]=\"switchChecked\"\n    [disabled]=\"disabled\"\n    (change)=\"changeSwitch(switchValue.checked)\"\n  />\n  <div class=\"checkbox\" [ngClass]=\"checkboxCls\" [ngStyle]=\"colorStyle\" (click)=\"click()\"></div>\n</label>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SwitchComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { onChange: [{
            type: Output
        }], onClick: [{
            type: Output
        }], dispaly: [{
            type: HostBinding,
            args: ['style.display']
        }], color: [{
            type: Input
        }], platform: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFjekUsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUEwREU7QUFBZ0IsUUExRGhCLGNBQVMsR0FBRyxXQUFXLENBQUM7QUFDMUIsUUFBRSxZQUFPLEdBQUcsV0FBVyxDQUFDO0FBQ3hCLFFBQUUsZ0JBQVcsR0FBRztBQUNoQixZQUFJLG1CQUFtQixFQUFFLEtBQUs7QUFDOUIsWUFBSSxpQkFBaUIsRUFBRSxLQUFLO0FBQzVCLFlBQUksbUJBQW1CLEVBQUUsSUFBSTtBQUM3QixTQUFHLENBQUM7QUFDSixRQUFFLGVBQVUsR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztBQUNqQyxRQUNVLFdBQU0sR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVUsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDekMsUUFBVSxjQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUN6QyxRQXFDRSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUN6QyxRQUNFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ3hDLFFBRUUsWUFBTyxHQUFZLElBQUksQ0FBQztBQUMxQixJQUNpQixDQUFDO0FBQ2xCLElBNUNFLElBQ0ksS0FBSyxDQUFDLEtBQUs7QUFDakIsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FB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Q3RDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztHQUFJLGtCQUNyQyxTQUFTLEVBQUUsc0JBQ1Q7Z0JBQ0UsT0FBTyxFQUFFOztBQUFpQiwwQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsMEJBQzlDLEtBQUssRUFBRSxJQUFJLHNCQUNaLGtCQUNGLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyRUFDSTtBQUFDO0FBQ1k7QUFFakIsb0JBYUUsS0FBSztBQUNOLG1CQUtDLEtBQUs7QUFDTix1QkFFQyxLQUFLO0FBQ04sc0JBR0MsS0FBSztBQUNOLHVCQVNDLEtBQUs7QUFDTix1QkFXQyxNQUFNO0FBQ1Asc0JBQ0MsTUFBTTtBQUNQLHNCQUVDLFdBQVcsU0FBQyxlQUFlO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1N3aXRjaCwgbnptLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN3aXRjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQge1xuICBwcmVmaXhDbHMgPSAnYW0tc3dpdGNoJztcbiAgd3JhcENscyA9ICdhbS1zd2l0Y2gnO1xuICBjaGVja2JveENscyA9IHtcbiAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiBmYWxzZSxcbiAgICAnY2hlY2tib3gtYWN0aXZlJzogZmFsc2UsXG4gICAgJ2NoZWNrYm94LWluYWN0aXZlJzogdHJ1ZVxuICB9O1xuICBjb2xvclN0eWxlID0ge307XG4gIHN3aXRjaENoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgb25DaGFuZ2VkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIHRoaXMuY29sb3JTdHlsZSA9IHsgYmFja2dyb3VuZDogdGhpcy5fY29sb3IgfTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgcGxhdGZvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMud3JhcENscyA9IHZhbHVlID09PSAnYW5kcm9pZCcgPyBgJHt0aGlzLnByZWZpeENsc30tYW5kcm9pZGAgOiB0aGlzLnByZWZpeENscztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3dpdGNoQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tib3hDbHMgPSB7XG4gICAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgICdjaGVja2JveC1hY3RpdmUnOiB0aGlzLnN3aXRjaENoZWNrZWQsXG4gICAgICAnY2hlY2tib3gtaW5hY3RpdmUnOiAhdGhpcy5zd2l0Y2hDaGVja2VkXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yU3R5bGUgPSB7IGJhY2tncm91bmQ6IHZhbHVlID8gdGhpcy5fY29sb3IgOiAnJyB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrYm94Q2xzID0ge1xuICAgICAgJ2NoZWNrYm94LWRpc2FibGVkJzogdmFsdWUsXG4gICAgICAnY2hlY2tib3gtYWN0aXZlJzogdGhpcy5zd2l0Y2hDaGVja2VkLFxuICAgICAgJ2NoZWNrYm94LWluYWN0aXZlJzogIXRoaXMuc3dpdGNoQ2hlY2tlZFxuICAgIH07XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KClcbiAgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBkaXNwYWx5OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY2hhbmdlU3dpdGNoKGNoZWNrZWRWYWx1ZSkge1xuICAgIHRoaXMub25DaGFuZ2VkKGNoZWNrZWRWYWx1ZSk7XG4gICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gY2hlY2tlZFZhbHVlO1xuICAgIHRoaXMuY2hlY2tib3hDbHMgPSB7XG4gICAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgICdjaGVja2JveC1hY3RpdmUnOiB0aGlzLnN3aXRjaENoZWNrZWQsXG4gICAgICAnY2hlY2tib3gtaW5hY3RpdmUnOiAhdGhpcy5zd2l0Y2hDaGVja2VkXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yU3R5bGUgPSB7IGJhY2tncm91bmQ6IGNoZWNrZWRWYWx1ZSA/IHRoaXMuX2NvbG9yIDogJycgfTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoY2hlY2tlZFZhbHVlKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHRoaXMuc3dpdGNoQ2hlY2tlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19