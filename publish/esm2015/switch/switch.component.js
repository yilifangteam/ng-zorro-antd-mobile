import { Component, ViewEncapsulation, Input, Output, EventEmitter, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
SwitchComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3dpdGNoL3N3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWN6RSxNQUFNLE9BQU8sZUFBZTtJQTJEMUI7UUExREEsY0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN4QixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUc7WUFDWixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQixDQUFDO1FBQ0YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV2QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDL0IsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFzQ3ZDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXZDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBR3RDLFlBQU8sR0FBWSxJQUFJLENBQUM7SUFFVCxDQUFDO0lBM0NoQixJQUNJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUtELElBQ0ksUUFB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IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1N3aXRjaCwgbnptLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN3aXRjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQge1xuICBwcmVmaXhDbHMgPSAnYW0tc3dpdGNoJztcbiAgd3JhcENscyA9ICdhbS1zd2l0Y2gnO1xuICBjaGVja2JveENscyA9IHtcbiAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiBmYWxzZSxcbiAgICAnY2hlY2tib3gtYWN0aXZlJzogZmFsc2UsXG4gICAgJ2NoZWNrYm94LWluYWN0aXZlJzogdHJ1ZVxuICB9O1xuICBjb2xvclN0eWxlID0ge307XG4gIHN3aXRjaENoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgb25DaGFuZ2VkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIHRoaXMuY29sb3JTdHlsZSA9IHsgYmFja2dyb3VuZDogdGhpcy5fY29sb3IgfTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgcGxhdGZvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMud3JhcENscyA9IHZhbHVlID09PSAnYW5kcm9pZCcgPyBgJHt0aGlzLnByZWZpeENsc30tYW5kcm9pZGAgOiB0aGlzLnByZWZpeENscztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3dpdGNoQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tib3hDbHMgPSB7XG4gICAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgICdjaGVja2JveC1hY3RpdmUnOiB0aGlzLnN3aXRjaENoZWNrZWQsXG4gICAgICAnY2hlY2tib3gtaW5hY3RpdmUnOiAhdGhpcy5zd2l0Y2hDaGVja2VkXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yU3R5bGUgPSB7IGJhY2tncm91bmQ6IHZhbHVlID8gdGhpcy5fY29sb3IgOiAnJyB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrYm94Q2xzID0ge1xuICAgICAgJ2NoZWNrYm94LWRpc2FibGVkJzogdmFsdWUsXG4gICAgICAnY2hlY2tib3gtYWN0aXZlJzogdGhpcy5zd2l0Y2hDaGVja2VkLFxuICAgICAgJ2NoZWNrYm94LWluYWN0aXZlJzogIXRoaXMuc3dpdGNoQ2hlY2tlZFxuICAgIH07XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KClcbiAgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBkaXNwYWx5OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY2hhbmdlU3dpdGNoKGNoZWNrZWRWYWx1ZSkge1xuICAgIHRoaXMub25DaGFuZ2VkKGNoZWNrZWRWYWx1ZSk7XG4gICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gY2hlY2tlZFZhbHVlO1xuICAgIHRoaXMuY2hlY2tib3hDbHMgPSB7XG4gICAgICAnY2hlY2tib3gtZGlzYWJsZWQnOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgICdjaGVja2JveC1hY3RpdmUnOiB0aGlzLnN3aXRjaENoZWNrZWQsXG4gICAgICAnY2hlY2tib3gtaW5hY3RpdmUnOiAhdGhpcy5zd2l0Y2hDaGVja2VkXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yU3R5bGUgPSB7IGJhY2tncm91bmQ6IGNoZWNrZWRWYWx1ZSA/IHRoaXMuX2NvbG9yIDogJycgfTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoY2hlY2tlZFZhbHVlKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHRoaXMuc3dpdGNoQ2hlY2tlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19