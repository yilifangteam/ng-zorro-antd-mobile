import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
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
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'Menu, nzm-menu',
                template: "<Flex class=\"{{ prefixCls }}\" [ngStyle]=\"heightStyle\" [direction]=\"'column'\" [align]=\"'stretch'\">\n  <Flex class=\"{{ menuSelectContanerPrefixCls }}\" [align]=\"'start'\">\n    <FlexItem *ngIf=\"level == 2\">\n      <List role=\"tablist\">\n        <ListItem\n          role=\"tab\"\n          *ngFor=\"let dataItem of data; let i = index\"\n          [className]=\"getClass(dataItem)\"\n          (click)=\"onClickFirstLevelItem(dataItem)\"\n        >\n          {{ dataItem.label }}\n        </ListItem>\n      </List>\n    </FlexItem>\n\n    <FlexItem role=\"tabpanel\" aria-hidden=\"false\" class=\"{{ menuSelectContanerPrefixCls }}-submenu\">\n      <SubMenu\n        [subMenuPrefixCls]=\"subMenuPrefixCls\"\n        [radioPrefixCls]=\"radioPrefixCls\"\n        [subMenuData]=\"subMenuData\"\n        [selItem]=\"subSelInitItem\"\n        [showSelect]=\"showSelect\"\n        [multiSelect]=\"multiSelect\"\n        (onSel)=\"onClickSubMenuItem($event)\"\n      >\n      </SubMenu>\n    </FlexItem>\n  </Flex>\n\n  <div *ngIf=\"multiSelect\" class=\"{{ multiSelectMenuBtnsCls }}\">\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" (onClick)=\"onMenuCancel()\">\n      {{ locale.cancelText }}\n    </a>\n    <a Button [className]=\"'am-multi-select-btns-btn'\" [inline]=\"true\" [type]=\"'primary'\" (onClick)=\"onMenuOk()\">\n      {{ locale.okText }}\n    </a>\n  </div>\n</Flex>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVkzQyxNQUFNLE9BQU8sYUFBYTtJQTBDeEIsWUFBb0Isc0JBQTZDO1FBQTdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUF6Q2pFLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsYUFBYSxDQUFDO1FBQ3pDLG1CQUFjLEdBQVcsVUFBVSxDQUFDO1FBQ3BDLDJCQUFzQixHQUFXLHNCQUFzQixDQUFDO1FBQ3hELGdDQUEyQixHQUFXLDBCQUEwQixDQUFDO1FBTWpFLFdBQU0sR0FBZ0I7WUFDcEIsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFFTSxVQUFLLEdBQWUsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFXM0QsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBVyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFM0QsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztR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QUU5QyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7U0FDM0IsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUFoTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHk1Q0FBb0M7Z0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7WUFaUSxxQkFBcUI7OzttQkFnQzNCLEtBQUs7b0JBUUwsS0FBSztvQkFFTCxLQUFLO3FCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxNQUFNO21CQUVOLE1BQU07dUJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBMb2NhbGVWYWx1ZSB7XG4gIG9rVGV4dDogc3RyaW5nO1xuICBjYW5jZWxUZXh0OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ01lbnUsIG56bS1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLW1lbnUnO1xuICBzdWJNZW51UHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tc3ViLW1lbnUnO1xuICByYWRpb1ByZWZpeENsczogc3RyaW5nID0gJ2FtLXJhZGlvJztcbiAgbXVsdGlTZWxlY3RNZW51QnRuc0Nsczogc3RyaW5nID0gJ2FtLW11bHRpLXNlbGVjdC1idG5zJztcbiAgbWVudVNlbGVjdENvbnRhbmVyUHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tbWVudS1zZWxlY3QtY29udGFpbmVyJztcbiAgZmlyc3RMZXZlbFNlbGVjdFZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gIGhlaWdodFN0eWxlOiBvYmplY3Q7XG4gIHN1Yk1lbnVEYXRhOiBBcnJheTxhbnk+O1xuICBzaG93U2VsZWN0OiBib29sZWFuO1xuICBzdWJTZWxJbml0SXRlbTogb2JqZWN0O1xuICBsb2NhbGU6IExvY2FsZVZhbHVlID0ge1xuICAgIG9rVGV4dDogJycsXG4gICAgY2FuY2VsVGV4dDogJydcbiAgfTtcblxuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgc2V0IGRhdGEodikge1xuICAgIHRoaXMuX2RhdGEgPSB2O1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgfVxuICBASW5wdXQoKVxuICBsZXZlbDogbnVtYmVyID0gMjtcbiAgQElucHV0KClcbiAgdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgaGVpZ2h0OiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMjtcbiAgQElucHV0KClcbiAgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25PazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZVByb3ZpZGVyU2VydmljZTogTG9jYWxlUHJvdmlkZXJTZXJ2aWNlKSB7fVxuXG4gIG9uTWVudU9rKCkge1xuICAgIHRoaXMub25Pay5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25NZW51Q2FuY2VsKCkge1xuICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICB9XG5cbiAgZ2V0TmV3RnN2KCkge1xuICAgIGxldCBmaXJzdFZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGZpcnN0VmFsdWUgPSB0aGlzLnZhbHVlWzBdIGFzIHN0cmluZztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5sZW5ndGggJiYgIXRoaXMuX2RhdGFbMF0uaXNMZWFmKSB7XG4gICAgICBmaXJzdFZhbHVlID0gdGhpcy5fZGF0YVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0VmFsdWU7XG4gIH1cblxuICBvbkNsaWNrRmlyc3RMZXZlbEl0ZW0oZGF0YUl0ZW0pIHtcbiAgICB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSA9IGRhdGFJdGVtLnZhbHVlO1xuICAgIGlmIChkYXRhSXRlbS5pc0xlYWYgJiYgdGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KFtkYXRhSXRlbS52YWx1ZV0pO1xuICAgIH1cbiAgICB0aGlzLmluaXREYXRhKCk7XG4gIH1cblxuICBvbkNsaWNrU3ViTWVudUl0ZW0oZGF0YUl0ZW0pIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRTZWxlY3RWYWx1ZShkYXRhSXRlbSk7XG4gICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBnZXRTZWxlY3RWYWx1ZShkYXRhSXRlbSkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDIgJiYgdGhpcy52YWx1ZVswXSAhPT0gdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3RMZXZlbFNlbGVjdFZhbHVlLCBbZGF0YUl0ZW0udmFsdWVdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5sZXZlbCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9zZW5WYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RJbmRleCA9IGNob3NlblZhbHVlcy5pbmRleE9mKGRhdGFJdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChleGlzdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICBjaG9zZW5WYWx1ZXMucHVzaChkYXRhSXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaG9zZW5WYWx1ZXMuc3BsaWNlKGV4aXN0SW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNob3NlblZhbHVlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hvc2VuVmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0SW5kZXggPSBjaG9zZW5WYWx1ZXMuaW5kZXhPZihkYXRhSXRlbS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY2hvc2VuVmFsdWVzLnB1c2goZGF0YUl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hvc2VuVmFsdWVzLnNwbGljZShleGlzdEluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5maXJzdExldmVsU2VsZWN0VmFsdWUsIGNob3NlblZhbHVlc107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gMiA/IFt0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSwgW2RhdGFJdGVtLnZhbHVlXV0gOiBbZGF0YUl0ZW0udmFsdWVdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gMiA/IFt0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSwgZGF0YUl0ZW0udmFsdWVdIDogW2RhdGFJdGVtLnZhbHVlXTtcbiAgfVxuXG4gIGluaXREYXRhKCkge1xuICAgIHRoaXMuc3ViTWVudURhdGEgPSB0aGlzLl9kYXRhO1xuICAgIGlmICh0aGlzLmxldmVsID09PSAyKSB7XG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy5fZGF0YTtcbiAgICAgIGlmICh0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSAmJiB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fZGF0YS5maWx0ZXIoZGF0YUl0ZW0gPT4gZGF0YUl0ZW0udmFsdWUgPT09IHRoaXMuZmlyc3RMZXZlbFNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnRbMF0gJiYgcGFyZW50WzBdLmNoaWxkcmVuICYmIHBhcmVudFswXS5pc0xlYWYgIT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zdWJNZW51RGF0YSA9IHBhcmVudFswXS5jaGlsZHJlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3ViTWVudURhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3ViVmFsdWUgPSAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDAgJiYgWy4uLnRoaXMudmFsdWVdKSB8fCBbXTtcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMiAmJiBzdWJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBzdWJWYWx1ZS5zaGlmdCgpO1xuICAgICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgICAgc3ViVmFsdWUgPSBzdWJWYWx1ZVswXSBhcyBzdHJpbmdbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN1YlNlbEluaXRJdGVtID0gdGhpcy5zdWJNZW51RGF0YVxuICAgICAgLmZpbHRlcihkYXRhSXRlbSA9PiBzdWJWYWx1ZS5pbmRleE9mKGRhdGFJdGVtLnZhbHVlKSAhPT0gLTEpXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgcGFyZW50VmFsdWUgPSB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMSAmJiB0aGlzLmxldmVsID09PSAyID8gdGhpcy52YWx1ZVswXSA6IG51bGw7XG5cbiAgICB0aGlzLnNob3dTZWxlY3QgPSB0cnVlO1xuICAgIGlmICh0aGlzLmxldmVsID09PSAyICYmIHBhcmVudFZhbHVlICE9PSB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSkge1xuICAgICAgdGhpcy5zaG93U2VsZWN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2xhc3MoZGF0YUl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhSXRlbVNlbGVjdGVkKGRhdGFJdGVtKSA/IHRoaXMucHJlZml4Q2xzICsgJy1zZWxlY3RlZCcgOiAnJztcbiAgfVxuXG4gIGRhdGFJdGVtU2VsZWN0ZWQoZGF0YUl0ZW0pIHtcbiAgICByZXR1cm4gZGF0YUl0ZW0udmFsdWUgPT09IHRoaXMuZmlyc3RMZXZlbFNlbGVjdFZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IDxMb2NhbGVWYWx1ZT50aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlU3ViT2JqKCdNZW51Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpcnN0TGV2ZWxTZWxlY3RWYWx1ZSA9IHRoaXMuZ2V0TmV3RnN2KCk7XG5cbiAgICB0aGlzLmhlaWdodFN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCArICdweCdcbiAgICB9O1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==