import { Component, ElementRef, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { ActionSheetRef } from './action-sheet-ref.class';
export class ActionSheetComponent extends ActionSheetRef {
    constructor(localeProviderService, elementRef) {
        super();
        this.localeProviderService = localeProviderService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
    }
    ngOnInit() {
        this.localeProvider();
    }
    localeProvider() {
        const self = this;
        if (self.option.locale || self.option.locale !== undefined) {
            self.localeProviderService.setLocale(self.option.locale);
        }
        self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
            if (self.option.cancelButtonText) {
                self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj('ActionSheet')['dismissText'];
            }
        });
    }
    onPress(index, rowIndex = 0, event) { }
    showShare(option) {
        const cls = { [`${option.prefixCls}-share`]: option.flag === 'SHARE' };
        return cls;
    }
    setActiveClassName(option, suffix) {
        return [`${option.prefixCls}-${suffix}-active`];
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isArray(options, value) {
        if (options.length > 0 && value) {
            return value instanceof Array;
        }
        return false;
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.close) {
            this.option.close();
        }
    }
    destroy() {
        this.close();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ActionSheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ActionSheet',
                template: "<div class=\"{{ option.prefixCls }}-mask {{ option.maskTransitionName }}\"></div>\n<div\n  role=\"dialog\"\n  class=\"{{ option.prefixCls }}-wrap {{ option.transitionName }}\"\n  (click)=\"option.maskClose(-1, 0, $event)\"\n>\n  <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"showShare(option)\">\n    <div class=\"{{ option.prefixCls }}-content\">\n      <button aria-label=\"Close\" class=\"{{ option.prefixCls }}-close\">\n        <span class=\"{{ option.prefixCls }}-close-x\"></span>\n      </button>\n      <div class=\"{{ option.prefixCls }}-body\">\n        <div>\n          <ng-container *ngIf=\"!isNoTitle(option.title)\">\n            <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n            <h3 *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</h3>\n          </ng-container>\n          <ng-container *ngIf=\"!isNoTitle(option.message)\">\n            <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n            <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-message\">\n              {{ option.message }}\n            </div>\n          </ng-container>\n          <ng-container [ngSwitch]=\"option.flag\">\n            <div *ngSwitchCase=\"'NORMAL'\" class=\"{{ option.prefixCls }}-button-list\" role=\"group\">\n              <ng-container *ngFor=\"let item of option.options; let i = index\">\n                <div\n                  TouchFeedbackDirective\n                  class=\"{{ option.prefixCls }}-button-list-item\"\n                  [className]=\"setActiveClassName(option, 'button-list-item')\"\n                >\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex !== i && option.cancelButtonIndex !== i\"\n                    class=\"{{ option.prefixCls }}-button-list-item\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-destructive-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.cancelButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-cancel-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                    <span class=\"{{ option.prefixCls }}-cancel-button-mask\"></span>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div *ngSwitchCase=\"'SHARE'\" class=\"{{ option.prefixCls }}-share {{ option.prefixCls }}-share-content\">\n              <div *ngIf=\"!isArray(option.options, option.options[0])\" class=\"{{ option.prefixCls }}-share-list\">\n                <ng-container *ngFor=\"let item of option.options; let i = index\">\n                  <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, 0, $event)\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                      <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                      <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                    </div>\n                    <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                  </div>\n                </ng-container>\n              </div>\n              <ng-container *ngIf=\"isArray(option.options, option.options[0])\">\n                <div\n                  *ngFor=\"let items of option.options; let rowIndex = index\"\n                  class=\"{{ option.prefixCls }}-share-list\"\n                >\n                  <ng-container *ngFor=\"let item of items; let i = index\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, rowIndex, $event)\">\n                      <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                        <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                        <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                      </div>\n                      <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                    </div>\n                  </ng-container>\n                </div>\n              </ng-container>\n              <div\n                TouchFeedbackDirective\n                [className]=\"setActiveClassName(option, 'share-cancel-button')\"\n                class=\"{{ option.prefixCls }}-share-cancel-button\"\n              >\n                {{ option.cancelButtonText }}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ActionSheetComponent.ctorParameters = () => [
    { type: LocaleProviderService },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWN0aW9uLXNoZWV0L2FjdGlvbi1zaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFVLFNBQVMsRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU0xRCxNQUFNLE9BQU8sb0JBQXVDLFNBQVEsY0FBb0I7SUFHOUUsWUFBb0IscUJBQTRDLEVBQVMsVUFBc0I7UUFDN0YsS0FBSyxFQUFFLENBQUM7UUFEVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYvRixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFJbkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN6RztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUcsQ0FBQztJQUMzQyxTQUFTLENBQUMsTUFBTTtRQUNkLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLENBQUM7UUFDdkUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU07UUFDL0IsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBZ0M7UUFDeEMsT0FBTyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBWSxFQUFFLEtBQVU7UUFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDL0IsT0FBTyxLQUFLLFlBQVksS0FBSyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDMUQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHl1S0FBNEM7Z0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7WUFOUSxxQkFBcUI7WUFIUyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXRSZWYgfSBmcm9tICcuL2FjdGlvbi1zaGVldC1yZWYuY2xhc3MnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQWN0aW9uU2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLXNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIEFjdGlvblNoZWV0UmVmPFQsIFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBvcHRpb246IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZSwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2NhbGVQcm92aWRlcigpO1xuICB9XG5cbiAgbG9jYWxlUHJvdmlkZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYub3B0aW9uLmxvY2FsZSB8fCBzZWxmLm9wdGlvbi5sb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZi5sb2NhbGVQcm92aWRlclNlcnZpY2Uuc2V0TG9jYWxlKHNlbGYub3B0aW9uLmxvY2FsZSk7XG4gICAgfVxuICAgIHNlbGYubG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbChzZWxmLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIGlmIChzZWxmLm9wdGlvbi5jYW5jZWxCdXR0b25UZXh0KSB7XG4gICAgICAgIHNlbGYub3B0aW9uLmNhbmNlbEJ1dHRvblRleHQgPSBzZWxmLmxvY2FsZVByb3ZpZGVyU2VydmljZS5nZXRMb2NhbGVTdWJPYmooJ0FjdGlvblNoZWV0JylbJ2Rpc21pc3NUZXh0J107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblByZXNzKGluZGV4OiBhbnksIHJvd0luZGV4ID0gMCwgZXZlbnQpIHt9XG4gIHNob3dTaGFyZShvcHRpb24pIHtcbiAgICBjb25zdCBjbHMgPSB7IFtgJHtvcHRpb24ucHJlZml4Q2xzfS1zaGFyZWBdOiBvcHRpb24uZmxhZyA9PT0gJ1NIQVJFJyB9O1xuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICBzZXRBY3RpdmVDbGFzc05hbWUob3B0aW9uLCBzdWZmaXgpIHtcbiAgICByZXR1cm4gW2Ake29wdGlvbi5wcmVmaXhDbHN9LSR7c3VmZml4fS1hY3RpdmVgXTtcbiAgfVxuXG4gIGlzTm9UaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIGlzQXJyYXkob3B0aW9uczogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMCAmJiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IEFjdGlvblNoZWV0Q29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb24uY2xvc2UpIHtcbiAgICAgIHRoaXMub3B0aW9uLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19