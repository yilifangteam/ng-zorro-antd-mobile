import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Output, QueryList, forwardRef, EventEmitter, ContentChildren, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RadioItemComponent } from './radio-item.component';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export const RADIO_ITEM_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioItemGroupComponent),
    multi: true
};
export class RadioItemGroupComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = new EventEmitter();
    }
    updateChildrenStatus() {
        if (this.radioItems && typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
            Promise.resolve().then(() => {
                this.radioItems.forEach(radioItem => {
                    radioItem.checked = radioItem.value === this.selectedValue;
                    radioItem.markForCheck();
                });
            });
        }
    }
    ngAfterContentInit() {
        this.radioItems.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radioItems.map(radioItem => radioItem.select$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(radioItem => {
                if (typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
                    this.selectedValue = radioItem.value;
                    this._ngModelOnChange(radioItem.value);
                    this.updateChildrenStatus();
                    if (this.onChange) {
                        this.onChange.emit({ name: radioItem.name, value: radioItem.value });
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        if (typeof value !== 'undefined' && null !== value) {
            this.selectedValue = value;
            this.updateChildrenStatus();
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
RadioItemGroupComponent.ɵfac = function RadioItemGroupComponent_Factory(t) { return new (t || RadioItemGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
RadioItemGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioItemGroupComponent, selectors: [["RadioItemGroup"], ["nzm-radio-item-group"]], contentQueries: function RadioItemGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, RadioItemComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.radioItems = _t);
    } }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_ITEM_GROUP_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function RadioItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
RadioItemGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemGroupComponent.propDecorators = {
    radioItems: [{ type: ContentChildren, args: [forwardRef(() => RadioItemComponent),] }],
    onChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioItemGroupComponent, [{
        type: Component,
        args: [{
                selector: 'RadioItemGroup, nzm-radio-item-group',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], radioItems: [{
            type: ContentChildren,
            args: [forwardRef(() => RadioItemComponent)]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8taXRlbS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUd0RCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBUTtBQUNwRCxJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0FBQ3hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFTRixNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUFhckMsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBWG5DLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ25DLFFBUUUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7QUFDN0MsSUFDK0MsQ0FBQztBQUNoRCxJQUNFLG9CQUFvQjtBQUN0QixRQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxJQUFJLElBQUks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SUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUNoQyxJQUFFLENBQUM7QUFDSDttREEvRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQ0FBc0Msa0JBQ2hEO2lCQUFnRCxrQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxjQUM3Qzs7Ozs7Ozs7aURBQ0k7QUFBQztBQUFpRCxZQXZCckQsaUJBQWlCO0FBQ2xCO0FBQUc7QUFFSix5QkE0QkcsZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztBQUFPLHVCQUUzRCxNQUFNO0FBQ1I7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZGlvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8taXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJhZGlvU3RhdHVzIH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5leHBvcnQgY29uc3QgUkFESU9fSVRFTV9HUk9VUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9JdGVtR3JvdXBDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUmFkaW9JdGVtR3JvdXAsIG56bS1yYWRpby1pdGVtLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWl0ZW0tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbUkFESU9fSVRFTV9HUk9VUF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9JdGVtR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHNlbGVjdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX25nTW9kZWxPbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHt9O1xuICBwcml2YXRlIF9uZ01vZGVsT25Ub3VjaGVkOiAoKSA9PiB7fTtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gUmFkaW9JdGVtQ29tcG9uZW50KSkgcmFkaW9JdGVtczogUXVlcnlMaXN0PFJhZGlvSXRlbUNvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSYWRpb1N0YXR1cz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgdXBkYXRlQ2hpbGRyZW5TdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9JdGVtcyAmJiB0eXBlb2YgdGhpcy5zZWxlY3RlZFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBudWxsICE9PSB0aGlzLnNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJhZGlvSXRlbXMuZm9yRWFjaChyYWRpb0l0ZW0gPT4ge1xuICAgICAgICAgIHJhZGlvSXRlbS5jaGVja2VkID0gcmFkaW9JdGVtLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkVmFsdWU7XG4gICAgICAgICAgcmFkaW9JdGVtLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnJhZGlvSXRlbXMuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5yYWRpb0l0ZW1zLm1hcChyYWRpb0l0ZW0gPT4gcmFkaW9JdGVtLnNlbGVjdCQpKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJhZGlvSXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbnVsbCAhPT0gdGhpcy5zZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHJhZGlvSXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHJhZGlvSXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBuYW1lOiByYWRpb0l0ZW0ubmFtZSwgdmFsdWU6IHJhZGlvSXRlbS52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBudWxsICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==