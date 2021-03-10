import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../locale-provider/locale-provider.service';
import * as ɵngcc2 from '../flex/flex.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './sub-menu/sub-menu.component';
import * as ɵngcc5 from '../list/list.component';
import * as ɵngcc6 from '../list/list-item/list-item.component';
import * as ɵngcc7 from '../button/button.component';

function MenuComponent_FlexItem_2_ListItem_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ListItem", 8);
    ɵngcc0.ɵɵlistener("click", function MenuComponent_FlexItem_2_ListItem_2_Template_ListItem_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const dataItem_r3 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onClickFirstLevelItem(dataItem_r3); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataItem_r3 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("className", ctx_r2.getClass(dataItem_r3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", dataItem_r3.label, " ");
} }
function MenuComponent_FlexItem_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "FlexItem");
    ɵngcc0.ɵɵelementStart(1, "List", 6);
    ɵngcc0.ɵɵtemplate(2, MenuComponent_FlexItem_2_ListItem_2_Template, 2, 2, "ListItem", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.data);
} }
function MenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "a", 9);
    ɵngcc0.ɵɵlistener("onClick", function MenuComponent_div_5_Template_a_onClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onMenuCancel(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "a", 10);
    ɵngcc0.ɵɵlistener("onClick", function MenuComponent_div_5_Template_a_onClick_3_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onMenuOk(); });
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.multiSelectMenuBtnsCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("className", "am-multi-select-btns-btn")("inline", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.locale.cancelText, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("className", "am-multi-select-btns-btn")("inline", true)("type", "primary");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.locale.okText, " ");
} }
export class MenuComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.prefixCls = 'am-menu';
        this.subMenuPrefixCls = 'am-sub-menu';
        this.radioPrefixCls = 'am-radio';
        this.multiSelectMenuBtnsCls = 'am-multi-select-btns';
        this.menuSelectContanerPrefixCls = 'am-menu-select-container';
        this.locale = {
            okText: '',
            cancelText: ''
        };
        this._data = [];
        this._unsubscribe$ = new Subject();
        this.level = 2;
        this.value = [];
        this.height = document.documentElement.clientHeight / 2;
        this.multiSelect = false;
        this.onChange = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
    }
    get data() {
        return this._data;
    }
    set data(v) {
        this._data = v;
        this.initData();
    }
    onMenuOk() {
        this.onOk.emit(this.value);
    }
    onMenuCancel() {
        this.onCancel.emit();
    }
    getNewFsv() {
        let firstValue = '';
        if (this.value && this.value.length) {
            firstValue = this.value[0];
        }
        else if (this._data && this._data.length && !this._data[0].isLeaf) {
            firstValue = this._data[0].value;
        }
        return firstValue;
    }
    onClickFirstLevelItem(dataItem) {
        this.firstLevelSelectValue = dataItem.value;
        if (dataItem.isLeaf && this.onChange) {
            this.onChange.emit([dataItem.value]);
        }
        this.initData();
    }
    onClickSubMenuItem(dataItem) {
        this.value = this.getSelectValue(dataItem);
        this.initData();
        setTimeout(() => {
            this.onChange.emit(this.value);
        }, 300);
    }
    getSelectValue(dataItem) {
        if (this.multiSelect) {
            if (this.value && this.value.length > 0) {
                if (this.level === 2 && this.value[0] !== this.firstLevelSelectValue) {
                    return [this.firstLevelSelectValue, [dataItem.value]];
                }
                else {
                    if (this.level == 1) {
                        const chosenValues = Array.from(this.value);
                        const existIndex = chosenValues.indexOf(dataItem.value);
                        if (existIndex === -1) {
                            chosenValues.push(dataItem.value);
                        }
                        else {
                            chosenValues.splice(existIndex, 1);
                        }
                        return chosenValues;
                    }
                    else {
                        const chosenValues = Array.from(this.value[1]);
                        const existIndex = chosenValues.indexOf(dataItem.value);
                        if (existIndex === -1) {
                            chosenValues.push(dataItem.value);
                        }
                        else {
                            chosenValues.splice(existIndex, 1);
                        }
                        return [this.firstLevelSelectValue, chosenValues];
                    }
                }
            }
            else {
                return this.level === 2 ? [this.firstLevelSelectValue, [dataItem.value]] : [dataItem.value];
            }
        }
        return this.level === 2 ? [this.firstLevelSelectValue, dataItem.value] : [dataItem.value];
    }
    initData() {
        this.subMenuData = this._data;
        if (this.level === 2) {
            let parent = this._data;
            if (this.firstLevelSelectValue && this.firstLevelSelectValue !== '') {
                parent = this._data.filter(dataItem => dataItem.value === this.firstLevelSelectValue);
            }
            if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                this.subMenuData = parent[0].children;
            }
            else {
                this.subMenuData = [];
            }
        }
        let subValue = (this.value && this.value.length > 0 && [...this.value]) || [];
        if (this.level === 2 && subValue.length > 1) {
            subValue.shift();
            if (this.multiSelect) {
                subValue = subValue[0];
            }
        }
        this.subSelInitItem = this.subMenuData
            .filter(dataItem => subValue.indexOf(dataItem.value) !== -1)
            .map(item => {
            return item.value;
        });
        const parentValue = this.value && this.value.length > 1 && this.level === 2 ? this.value[0] : null;
        this.showSelect = true;
        if (this.level === 2 && parentValue !== this.firstLevelSelectValue) {
            this.showSelect = false;
        }
    }
    getClass(dataItem) {
        return this.dataItemSelected(dataItem) ? this.prefixCls + '-selected' : '';
    }
    dataItemSelected(dataItem) {
        return dataItem.value === this.firstLevelSelectValue;
    }
    ngOnInit() {
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this.locale = this._localeProviderService.getLocaleSubObj('Menu');
        });
        this.firstLevelSelectValue = this.getNewFsv();
        this.heightStyle = {
            height: this.height + 'px'
        };
        this.initData();
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
MenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["Menu"], ["nzm-menu"]], inputs: { level: "level", value: "value", height: "height", multiSelect: "multiSelect", data: "data" }, outputs: { onChange: "onChange", onOk: "onOk", onCancel: "onCancel" }, decls: 6, vars: 21, consts: [[3, "ngStyle", "direction", "align"], [3, "align"], [4, "ngIf"], ["role", "tabpanel", "aria-hidden", "false"], [3, "subMenuPrefixCls", "radioPrefixCls", "subMenuData", "selItem", "showSelect", "multiSelect", "onSel"], [3, "class", 4, "ngIf"], ["role", "tablist"], ["role", "tab", 3, "className", "click", 4, "ngFor", "ngForOf"], ["role", "tab", 3, "className", "click"], ["Button", "", 3, "className", "inline", "onClick"], ["Button", "", 3, "className", "inline", "type", "onClick"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "Flex", 0);
        ɵngcc0.ɵɵelementStart(1, "Flex", 1);
        ɵngcc0.ɵɵtemplate(2, MenuComponent_FlexItem_2_Template, 3, 1, "FlexItem", 2);
        ɵngcc0.ɵɵelementStart(3, "FlexItem", 3);
        ɵngcc0.ɵɵelementStart(4, "SubMenu", 4);
        ɵngcc0.ɵɵlistener("onSel", function MenuComponent_Template_SubMenu_onSel_4_listener($event) { return ctx.onClickSubMenuItem($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, MenuComponent_div_5_Template, 5, 10, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.heightStyle)("direction", "column")("align", "stretch");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.menuSelectContanerPrefixCls);
        ɵngcc0.ɵɵproperty("align", "start");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.menuSelectContanerPrefixCls, "-submenu");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("subMenuPrefixCls", ctx.subMenuPrefixCls)("radioPrefixCls", ctx.radioPrefixCls)("subMenuData", ctx.subMenuData)("selItem", ctx.subSelInitItem)("showSelect", ctx.showSelect)("multiSelect", ctx.multiSelect);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.multiSelect);
    } }, directives: [ɵngcc2.FlexComponent, ɵngcc3.NgStyle, ɵngcc3.NgIf, ɵngcc2.FlexItemComponent, ɵngcc4.SubMenuComponent, ɵngcc5.ListComponent, ɵngcc3.NgForOf, ɵngcc6.ListItemComponent, ɵngcc7.ButtonComponent], encapsulation: 2 });
MenuComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
MenuComponent.propDecorators = {
    data: [{ type: Input }],
    level: [{ type: Input }],
    value: [{ type: Input }],
    height: [{ type: Input }],
    multiSelect: [{ type: Input }],
    onChange: [{ type: Output }],
    onOk: [{ type: Output }],
    onCancel: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'Menu, nzm-menu',
                template: "<Flex class=\"{{ prefixCls }}\" [ngStyle]=\"heightStyle\" [direction]=\"'column'\" [align]=\"'stretch'\">\n  <Flex class=\"{{ menuSelectContanerPrefixCls }}\" [align]=\"'start'\">\n    <FlexItem *ngIf=\"level == 2\">\n      <List role=\"tablist\">\n        <ListItem\n          role=\"tab\"\n          *ngFor=\"let dataItem of data; let i = index\"\n          [className]=\"getClass(dataItem)\"\n          (click)=\"onClickFirstLevelItem(dataItem)\"\n        >\n          {{ dataItem.label }}\n        </ListItem>\n      </List>\n    </FlexItem>\n\n    <FlexItem role=\"tabpanel\" aria-hidden=\"false\" class=\"{{ menuSelectContanerPrefixCls }}-submenu\">\n      <SubMenu\n        [subMenuPrefixCls]=\"subMenuPrefixCls\"\n        [radioPrefixCls]=\"radioPrefixCls\"\n        [subMenuData]=\"subMenuData\"\n        [selItem]=\"subSelInitItem\"\n        [showSelect]=\"showSelect\"\n        [multiSelect]=\"multiSelect\"\n        (onSel)=\"onClickSubMenuItem($event)\"\n      >\n      </SubMenu>\n    </FlexItem>\n  </Flex>\n\n  <div *ngIf=\"multiSelect\" class=\"{{ multiSelectMenuBtnsCls }}\">\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" (onClick)=\"onMenuCancel()\">\n      {{ locale.cancelText }}\n    </a>\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" [type]=\"'primary'\" (onClick)=\"onMenuOk()\">\n      {{ locale.okText }}\n    </a>\n  </div>\n</Flex>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }]; }, { level: [{
            type: Input
        }], value: [{
            type: Input
        }], height: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onOk: [{
            type: Output
        }], onCancel: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTNDLE1BQU0sT0FBTyxhQUFhO0FBQUcsSUEwQzNCLFlBQW9CLHNCQUE2QztBQUFJLFFBQWpELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7QUFBQyxRQXpDbEUsY0FBUyxHQUFXLFNBQVMsQ0FBQztBQUNoQyxRQUFFLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztBQUMzQyxRQUFFLG1CQUFjLEdBQVcsVUFBVSxDQUFDO0FBQ3RDLFFBQUUsMkJBQXNCLEdBQVcsc0JBQXNCLENBQUM7QUFDMUQsUUFBRSxnQ0FBMkIsR0FBVywwQkFBMEIsQ0FBQztBQUNuRSxRQUtFLFdBQU0sR0FBZ0I7QUFDeEIsWUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLFlBQUksVUFBVSxFQUFFLEVBQUU7QUFDbEIsU0FBRyxDQUFDO0FBQ0osUUFDVSxVQUFLLEdBQWUsRUFBRSxDQUFDO0FBQ2pDLFFBQVUsa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUM3RCxRQVVFLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDcEIsUUFDRSxVQUFLLEdBQWUsRUFBRSxDQUFDO0FBQ3pCLFFBQ0UsV0FBTSxHQUFXLFFBQVEsQ0FBQyxlQUFlLENBQUMs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QUNiLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0g7eUNBakxDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQjs7Ozs7Ozs7Ozs7K0JBQW9DLGtCQUNwQyxhQUFhLEVBQUU7SUFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7eU9BQ0k7QUFBQztBQUF1QyxZQWJwQyxxQkFBcUI7QUFBRztBQUFHO0FBQWlDLG1CQWdDbEUsS0FBSztBQUNOLG9CQU9DLEtBQUs7QUFDTixvQkFDQyxLQUFLO0FBQ04scUJBQ0MsS0FBSztBQUNOLDBCQUNDLEtBQUs7QUFDTix1QkFDQyxNQUFNO0FBQ1AsbUJBQ0MsTUFBTTtBQUNQLHVCQUNDLE1BQU07QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgTG9jYWxlVmFsdWUge1xuICBva1RleHQ6IHN0cmluZztcbiAgY2FuY2VsVGV4dDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdNZW51LCBuem0tbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1tZW51JztcbiAgc3ViTWVudVByZWZpeENsczogc3RyaW5nID0gJ2FtLXN1Yi1tZW51JztcbiAgcmFkaW9QcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1yYWRpbyc7XG4gIG11bHRpU2VsZWN0TWVudUJ0bnNDbHM6IHN0cmluZyA9ICdhbS1tdWx0aS1zZWxlY3QtYnRucyc7XG4gIG1lbnVTZWxlY3RDb250YW5lclByZWZpeENsczogc3RyaW5nID0gJ2FtLW1lbnUtc2VsZWN0LWNvbnRhaW5lcic7XG4gIGZpcnN0TGV2ZWxTZWxlY3RWYWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBoZWlnaHRTdHlsZTogb2JqZWN0O1xuICBzdWJNZW51RGF0YTogQXJyYXk8YW55PjtcbiAgc2hvd1NlbGVjdDogYm9vbGVhbjtcbiAgc3ViU2VsSW5pdEl0ZW06IG9iamVjdDtcbiAgbG9jYWxlOiBMb2NhbGVWYWx1ZSA9IHtcbiAgICBva1RleHQ6ICcnLFxuICAgIGNhbmNlbFRleHQ6ICcnXG4gIH07XG5cbiAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF91bnN1YnNjcmliZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBkYXRhKHYpIHtcbiAgICB0aGlzLl9kYXRhID0gdjtcbiAgICB0aGlzLmluaXREYXRhKCk7XG4gIH1cbiAgQElucHV0KClcbiAgbGV2ZWw6IG51bWJlciA9IDI7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGhlaWdodDogbnVtYmVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAvIDI7XG4gIEBJbnB1dCgpXG4gIG11bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uT2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICBvbk1lbnVPaygpIHtcbiAgICB0aGlzLm9uT2suZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uTWVudUNhbmNlbCgpIHtcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgfVxuXG4gIGdldE5ld0ZzdigpIHtcbiAgICBsZXQgZmlyc3RWYWx1ZSA9ICcnO1xuICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICBmaXJzdFZhbHVlID0gdGhpcy52YWx1ZVswXSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEubGVuZ3RoICYmICF0aGlzLl9kYXRhWzBdLmlzTGVhZikge1xuICAgICAgZmlyc3RWYWx1ZSA9IHRoaXMuX2RhdGFbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmaXJzdFZhbHVlO1xuICB9XG5cbiAgb25DbGlja0ZpcnN0TGV2ZWxJdGVtKGRhdGFJdGVtKSB7XG4gICAgdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUgPSBkYXRhSXRlbS52YWx1ZTtcbiAgICBpZiAoZGF0YUl0ZW0uaXNMZWFmICYmIHRoaXMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChbZGF0YUl0ZW0udmFsdWVdKTtcbiAgICB9XG4gICAgdGhpcy5pbml0RGF0YSgpO1xuICB9XG5cbiAgb25DbGlja1N1Yk1lbnVJdGVtKGRhdGFJdGVtKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0U2VsZWN0VmFsdWUoZGF0YUl0ZW0pO1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgZ2V0U2VsZWN0VmFsdWUoZGF0YUl0ZW0pIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAyICYmIHRoaXMudmFsdWVbMF0gIT09IHRoaXMuZmlyc3RMZXZlbFNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFt0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSwgW2RhdGFJdGVtLnZhbHVlXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2hvc2VuVmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0SW5kZXggPSBjaG9zZW5WYWx1ZXMuaW5kZXhPZihkYXRhSXRlbS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY2hvc2VuVmFsdWVzLnB1c2goZGF0YUl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hvc2VuVmFsdWVzLnNwbGljZShleGlzdEluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaG9zZW5WYWx1ZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNob3NlblZhbHVlcyA9IEFycmF5LmZyb20odGhpcy52YWx1ZVsxXSk7XG4gICAgICAgICAgICBjb25zdCBleGlzdEluZGV4ID0gY2hvc2VuVmFsdWVzLmluZGV4T2YoZGF0YUl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNob3NlblZhbHVlcy5wdXNoKGRhdGFJdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNob3NlblZhbHVlcy5zcGxpY2UoZXhpc3RJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3RMZXZlbFNlbGVjdFZhbHVlLCBjaG9zZW5WYWx1ZXNdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWwgPT09IDIgPyBbdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUsIFtkYXRhSXRlbS52YWx1ZV1dIDogW2RhdGFJdGVtLnZhbHVlXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGV2ZWwgPT09IDIgPyBbdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUsIGRhdGFJdGVtLnZhbHVlXSA6IFtkYXRhSXRlbS52YWx1ZV07XG4gIH1cblxuICBpbml0RGF0YSgpIHtcbiAgICB0aGlzLnN1Yk1lbnVEYXRhID0gdGhpcy5fZGF0YTtcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMikge1xuICAgICAgbGV0IHBhcmVudCA9IHRoaXMuX2RhdGE7XG4gICAgICBpZiAodGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUgJiYgdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2RhdGEuZmlsdGVyKGRhdGFJdGVtID0+IGRhdGFJdGVtLnZhbHVlID09PSB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50WzBdICYmIHBhcmVudFswXS5jaGlsZHJlbiAmJiBwYXJlbnRbMF0uaXNMZWFmICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc3ViTWVudURhdGEgPSBwYXJlbnRbMF0uY2hpbGRyZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN1Yk1lbnVEYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN1YlZhbHVlID0gKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwICYmIFsuLi50aGlzLnZhbHVlXSkgfHwgW107XG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDIgJiYgc3ViVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgc3ViVmFsdWUuc2hpZnQoKTtcbiAgICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICAgIHN1YlZhbHVlID0gc3ViVmFsdWVbMF0gYXMgc3RyaW5nW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdWJTZWxJbml0SXRlbSA9IHRoaXMuc3ViTWVudURhdGFcbiAgICAgIC5maWx0ZXIoZGF0YUl0ZW0gPT4gc3ViVmFsdWUuaW5kZXhPZihkYXRhSXRlbS52YWx1ZSkgIT09IC0xKVxuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IHBhcmVudFZhbHVlID0gdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDEgJiYgdGhpcy5sZXZlbCA9PT0gMiA/IHRoaXMudmFsdWVbMF0gOiBudWxsO1xuXG4gICAgdGhpcy5zaG93U2VsZWN0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMiAmJiBwYXJlbnRWYWx1ZSAhPT0gdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGRhdGFJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUl0ZW1TZWxlY3RlZChkYXRhSXRlbSkgPyB0aGlzLnByZWZpeENscyArICctc2VsZWN0ZWQnIDogJyc7XG4gIH1cblxuICBkYXRhSXRlbVNlbGVjdGVkKGRhdGFJdGVtKSB7XG4gICAgcmV0dXJuIGRhdGFJdGVtLnZhbHVlID09PSB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2xvY2FsZVByb3ZpZGVyU2VydmljZS5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fdW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSA8TG9jYWxlVmFsdWU+dGhpcy5fbG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmdldExvY2FsZVN1Yk9iaignTWVudScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUgPSB0aGlzLmdldE5ld0ZzdigpO1xuXG4gICAgdGhpcy5oZWlnaHRTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQgKyAncHgnXG4gICAgfTtcbiAgICB0aGlzLmluaXREYXRhKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=