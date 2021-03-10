import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerViewComponent } from './date-picker-view.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { ToastModule } from '../toast/toast.module';
import * as ɵngcc0 from '@angular/core';
export class DatePickerViewModule {
}
DatePickerViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DatePickerViewModule });
DatePickerViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DatePickerViewModule_Factory(t) { return new (t || DatePickerViewModule)(); }, imports: [[CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DatePickerViewModule, { declarations: function () { return [DatePickerViewComponent]; }, imports: function () { return [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule]; }, exports: function () { return [DatePickerViewComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
                exports: [DatePickerViewComponent],
                declarations: [DatePickerViewComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItdmlldy5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItdmlldy9kYXRlLXBpY2tlci12aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU9wRCxNQUFNLE9BQU8sb0JBQW9CO0FBQUc7Z0RBTG5DLFFBQVEsU0FBQyxrQkFDUjtLQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxrQkFDekYsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUMsa0JBQ2xDLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDLGNBQ3hDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRlUGlja2VyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIubW9kdWxlJztcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAnLi4vdG9hc3QvdG9hc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGF0ZVBpY2tlck1vZHVsZSwgTG9jYWxlUHJvdmlkZXJNb2R1bGUsIFRvYXN0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtEYXRlUGlja2VyVmlld0NvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0RhdGVQaWNrZXJWaWV3Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyVmlld01vZHVsZSB7fVxuIl19