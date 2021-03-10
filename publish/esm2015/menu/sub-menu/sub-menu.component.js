import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../list/list.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../../list/list-item/list-item.component';
import * as ɵngcc4 from '../../radio/radio.component';
import * as ɵngcc5 from '../../checkbox/checkbox.component';

function SubMenuComponent_ListItem_1_ng_template_2_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 6);
    ɵngcc0.ɵɵlistener("onChange", function SubMenuComponent_ListItem_1_ng_template_2_label_0_Template_label_onChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const dataItem_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onClick(dataItem_r1); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("checked", dataItem_r1.checked)("disabled", dataItem_r1.disabled);
} }
function SubMenuComponent_ListItem_1_ng_template_2_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("onChange", function SubMenuComponent_ListItem_1_ng_template_2_label_1_Template_label_onChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const dataItem_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onClick(dataItem_r1); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("checked", dataItem_r1.checked)("disabled", dataItem_r1.disabled);
} }
function SubMenuComponent_ListItem_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SubMenuComponent_ListItem_1_ng_template_2_label_0_Template, 1, 2, "label", 4);
    ɵngcc0.ɵɵtemplate(1, SubMenuComponent_ListItem_1_ng_template_2_label_1_Template, 1, 2, "label", 5);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.multiSelect);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.multiSelect);
} }
function SubMenuComponent_ListItem_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ListItem", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, SubMenuComponent_ListItem_1_ng_template_2_Template, 2, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r1 = ctx.$implicit;
    const _r3 = ɵngcc0.ɵɵreference(3);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("className", ctx_r0.getClass(dataItem_r1))("extra", _r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", dataItem_r1.label, " ");
} }
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
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(); };
SubMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["SubMenu"], ["nzm-sub-menu"]], inputs: { subMenuPrefixCls: "subMenuPrefixCls", subMenuData: "subMenuData", multiSelect: "multiSelect", radioPrefixCls: "radioPrefixCls", showSelect: "showSelect", selItem: "selItem" }, outputs: { onSel: "onSel" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [[2, "padding", "0"], ["key", "i", 3, "className", "extra", 4, "ngFor", "ngForOf"], ["key", "i", 3, "className", "extra"], ["extra", ""], ["Radio", "", 3, "checked", "disabled", "onChange", 4, "ngIf"], ["Checkbox", "", 3, "checked", "disabled", "onChange", 4, "ngIf"], ["Radio", "", 3, "checked", "disabled", "onChange"], ["Checkbox", "", 3, "checked", "disabled", "onChange"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "List", 0);
        ɵngcc0.ɵɵtemplate(1, SubMenuComponent_ListItem_1_Template, 4, 3, "ListItem", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.subMenuPrefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.subMenuData);
    } }, directives: [ɵngcc1.ListComponent, ɵngcc2.NgForOf, ɵngcc3.ListItemComponent, ɵngcc2.NgIf, ɵngcc4.RadioComponent, ɵngcc5.CheckboxComponent], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SubMenuComponent, [{
        type: Component,
        args: [{
                selector: 'SubMenu, nzm-sub-menu',
                template: "<List class=\"{{ subMenuPrefixCls }}\" style=\"padding: 0\">\n  <ListItem\n    *ngFor=\"let dataItem of subMenuData; let i = index\"\n    key=\"i\"\n    [className]=\"getClass(dataItem)\"\n    [extra]=\"extra\"\n  >\n    {{ dataItem.label }}\n\n    <ng-template #extra>\n      <label\n        Radio\n        *ngIf=\"!multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n      <label\n        Checkbox\n        *ngIf=\"multiSelect\"\n        [checked]=\"dataItem.checked\"\n        [disabled]=\"dataItem.disabled\"\n        (onChange)=\"onClick(dataItem)\"\n      >\n      </label>\n    </ng-template>\n  </ListItem>\n</List>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onSel: [{
            type: Output
        }], subMenuPrefixCls: [{
            type: Input
        }], subMenuData: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], radioPrefixCls: [{
            type: Input
        }], showSelect: [{
            type: Input
        }], selItem: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL21lbnUvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEgsTUFBTSxPQUFPLGdCQUFnQjtBQUFHLElBc0M5QjtBQUFnQixRQXJDaEIsY0FBUyxHQUFHLGFBQWEsQ0FBQztBQUM1QixRQU1FLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNyRCxJQTZCaUIsQ0FBQztBQUNsQixJQXZCRSxJQUNJLGdCQUFnQjtBQUFLLFFBQ3ZCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFTO0FBQ2hDLFFBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksV0FBVztBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksV0FBVyxDQUFDLENBQU07QUFDeEIsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksV0FBVztBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksV0FBVyxDQUFDLENBQVU7QUFDNUIsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUdFLE9BQU8sQ0FBQyxRQUFRO0FBQ2xCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsUUFBUTtBQUNuQixRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RyxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVEsQ0FBQyxRQUFRO0FBQ25CLFFBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7QUFDOUMsUUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDckYsUUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDL0UsUUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2pDLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSDs0Q0FqRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUF1QixrQkFDakMsNnVCQUF3QyxrQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs7O3lLQUNJO0FBQUM7QUFBNEM7QUFHL0Msb0JBSUEsTUFBTTtBQUNQLDZCQUVDLEtBQUs7QUFDTix5QkFDQyxLQUFLO0FBQ04sc0JBQ0MsS0FBSztBQUNOLCtCQUNDLEtBQUs7QUFDTiwwQkFNQyxLQUFLO0FBQ04sMEJBTUMsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTdWJNZW51LCBuem0tc3ViLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcmVmaXhDbHMgPSAnYW0tc3ViLW1lbnUnO1xuXG4gIHByaXZhdGUgX3N1Yk1lbnVQcmVmaXhDbHM6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3ViTWVudURhdGE7XG4gIHByaXZhdGUgX211bHRpU2VsZWN0PzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb25TZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcmFkaW9QcmVmaXhDbHM6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2hvd1NlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2VsSXRlbTtcbiAgQElucHV0KClcbiAgZ2V0IHN1Yk1lbnVQcmVmaXhDbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViTWVudVByZWZpeENscztcbiAgfVxuICBzZXQgc3ViTWVudVByZWZpeENscyh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJNZW51UHJlZml4Q2xzID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc3ViTWVudURhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc3ViTWVudURhdGE7XG4gIH1cbiAgc2V0IHN1Yk1lbnVEYXRhKHY6IGFueSkge1xuICAgIHRoaXMuX3N1Yk1lbnVEYXRhID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTZWxlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU2VsZWN0O1xuICB9XG4gIHNldCBtdWx0aVNlbGVjdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlTZWxlY3QgPSB2O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uQ2xpY2soZGF0YUl0ZW0pIHtcbiAgICB0aGlzLm9uU2VsLmVtaXQoZGF0YUl0ZW0pO1xuICB9XG5cbiAgc2VsZWN0ZWQoZGF0YUl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U2VsZWN0ICYmICh0aGlzLnNlbEl0ZW0ubGVuZ3RoID4gMCAmJiB0aGlzLnNlbEl0ZW0uaW5kZXhPZihkYXRhSXRlbS52YWx1ZSkgIT09IC0xKTtcbiAgfVxuXG4gIGdldENsYXNzKGRhdGFJdGVtKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLnJhZGlvUHJlZml4Q2xzICsgJy1pdGVtICc7XG4gICAgbmFtZSArPSB0aGlzLnNlbGVjdGVkKGRhdGFJdGVtKSA/IHRoaXMuX3N1Yk1lbnVQcmVmaXhDbHMgKyAnLWl0ZW0tc2VsZWN0ZWQnIDogJyc7XG4gICAgbmFtZSArPSBkYXRhSXRlbS5kaXNhYmxlZCA/IHRoaXMuX3N1Yk1lbnVQcmVmaXhDbHMgKyAnLWl0ZW0tZGlzYWJsZWQnIDogJyc7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fc3ViTWVudURhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gdGhpcy5zZWxlY3RlZChpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIl19