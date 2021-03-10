import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ToastModule } from '../toast/toast.module';
import * as ɵngcc0 from '@angular/core';
export class DatePickerModule {
}
DatePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DatePickerModule });
DatePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DatePickerModule_Factory(t) { return new (t || DatePickerModule)(); }, providers: [DatePickerOptions], imports: [[CommonModule, LocaleProviderModule, ToastModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DatePickerModule, { declarations: function () { return [DatePickerComponent, DatePickerDirective]; }, imports: function () { return [CommonModule, LocaleProviderModule, ToastModule, FormsModule]; }, exports: function () { return [DatePickerComponent, DatePickerDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
                exports: [DatePickerComponent, DatePickerDirective],
                declarations: [DatePickerComponent, DatePickerDirective],
                providers: [DatePickerOptions]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNwRCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7NENBTi9CLFFBQVEsU0FBQztFQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLGtCQUN2RSxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxrQkFDbkQsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsa0JBQ3hELFNBQVMsRUFBRSxDQUFDO2NBQWlCLENBQUMsY0FDL0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuL2RhdGUtcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBUb2FzdE1vZHVsZSB9IGZyb20gJy4uL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExvY2FsZVByb3ZpZGVyTW9kdWxlLCBUb2FzdE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbRGF0ZVBpY2tlckNvbXBvbmVudCwgRGF0ZVBpY2tlckRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0RhdGVQaWNrZXJDb21wb25lbnQsIERhdGVQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtEYXRlUGlja2VyT3B0aW9uc11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7fVxuIl19