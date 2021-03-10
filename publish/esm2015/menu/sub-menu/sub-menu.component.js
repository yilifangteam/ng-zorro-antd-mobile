import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
export class SubMenuComponent {
    constructor() {
        this.prefixCls = 'am-sub-menu';
        this.onSel = new EventEmitter();
    }
    get subMenuPrefixCls() {
        return this._subMenuPrefixCls;
    }
    set subMenuPrefixCls(v) {
        this._subMenuPrefixCls = v;
    }
    get subMenuData() {
        return this._subMenuData;
    }
    set subMenuData(v) {
        this._subMenuData = v;
    }
    get multiSelect() {
        return this._multiSelect;
    }
    set multiSelect(v) {
        this._multiSelect = v;
    }
    onClick(dataItem) {
        this.onSel.emit(dataItem);
    }
    selected(dataItem) {
        return this.showSelect && (this.selItem.length > 0 && this.selItem.indexOf(dataItem.value) !== -1);
    }
    getClass(dataItem) {
        let name = this.radioPrefixCls + '-item ';
        name += this.selected(dataItem) ? this._subMenuPrefixCls + '-item-selected' : '';
        name += dataItem.disabled ? this._subMenuPrefixCls + '-item-disabled' : '';
        return name;
    }
    ngOnChanges(changes) {
        this._subMenuData.map(item => {
            item.checked = this.selected(item);
        });
    }
}
SubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'SubMenu, nzm-sub-menu',
                template: "<List class=\"{{ subMenuPrefixCls }}\" style=\"padding: 0\">\n  <ListItem\n    *ngFor=\"let dataItem of subMenuData; let i = index\"\n    key=\"i\"\n    [className]=\"getClass(dataItem)\"\n    [extra]=\"extra\"\n  >\n    {{ dataItem.label }}\n\n    <ng-template #extra>\n      <label\n        Radio\n        *ngIf=\"!multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n      <label\n        Checkbox\n        *ngIf=\"multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n    </ng-template>\n  </ListItem>\n</List>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SubMenuComponent.ctorParameters = () => [];
SubMenuComponent.propDecorators = {
    onSel: [{ type: Output }],
    radioPrefixCls: [{ type: Input }],
    showSelect: [{ type: Input }],
    selItem: [{ type: Input }],
    subMenuPrefixCls: [{ type: Input }],
    subMenuData: [{ type: Input }],
    multiSelect: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJtZW51L3N1Yi1tZW51L3N1Yi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQU9wSCxNQUFNLE9BQU8sZ0JBQWdCO0lBc0MzQjtRQXJDQSxjQUFTLEdBQUcsYUFBYSxDQUFDO1FBTzFCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQThCcEMsQ0FBQztJQXRCaEIsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsQ0FBUztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLENBQU07UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsQ0FBVTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBSUQsT0FBTyxDQUFDLFFBQVE7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFRO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDMUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pGLElBQUksSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2dUJBQXdDO2dCQUN4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztvQkFRRSxNQUFNOzZCQUdOLEtBQUs7eUJBRUwsS0FBSztzQkFFTCxLQUFLOytCQUVMLEtBQUs7MEJBT0wsS0FBSzswQkFPTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnU3ViTWVudSwgbnptLXN1Yi1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJlZml4Q2xzID0gJ2FtLXN1Yi1tZW51JztcblxuICBwcml2YXRlIF9zdWJNZW51UHJlZml4Q2xzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3N1Yk1lbnVEYXRhO1xuICBwcml2YXRlIF9tdWx0aVNlbGVjdD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHJhZGlvUHJlZml4Q2xzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNob3dTZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNlbEl0ZW07XG4gIEBJbnB1dCgpXG4gIGdldCBzdWJNZW51UHJlZml4Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Yk1lbnVQcmVmaXhDbHM7XG4gIH1cbiAgc2V0IHN1Yk1lbnVQcmVmaXhDbHModjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3ViTWVudVByZWZpeENscyA9IHY7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHN1Yk1lbnVEYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Yk1lbnVEYXRhO1xuICB9XG4gIHNldCBzdWJNZW51RGF0YSh2OiBhbnkpIHtcbiAgICB0aGlzLl9zdWJNZW51RGF0YSA9IHY7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNlbGVjdDtcbiAgfVxuICBzZXQgbXVsdGlTZWxlY3QodjogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpU2VsZWN0ID0gdjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkNsaWNrKGRhdGFJdGVtKSB7XG4gICAgdGhpcy5vblNlbC5lbWl0KGRhdGFJdGVtKTtcbiAgfVxuXG4gIHNlbGVjdGVkKGRhdGFJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1NlbGVjdCAmJiAodGhpcy5zZWxJdGVtLmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxJdGVtLmluZGV4T2YoZGF0YUl0ZW0udmFsdWUpICE9PSAtMSk7XG4gIH1cblxuICBnZXRDbGFzcyhkYXRhSXRlbSkge1xuICAgIGxldCBuYW1lID0gdGhpcy5yYWRpb1ByZWZpeENscyArICctaXRlbSAnO1xuICAgIG5hbWUgKz0gdGhpcy5zZWxlY3RlZChkYXRhSXRlbSkgPyB0aGlzLl9zdWJNZW51UHJlZml4Q2xzICsgJy1pdGVtLXNlbGVjdGVkJyA6ICcnO1xuICAgIG5hbWUgKz0gZGF0YUl0ZW0uZGlzYWJsZWQgPyB0aGlzLl9zdWJNZW51UHJlZml4Q2xzICsgJy1pdGVtLWRpc2FibGVkJyA6ICcnO1xuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX3N1Yk1lbnVEYXRhLm1hcChpdGVtID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHRoaXMuc2VsZWN0ZWQoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==