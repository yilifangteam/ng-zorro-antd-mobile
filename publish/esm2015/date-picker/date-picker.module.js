import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerOptions } from './date-picker-options.provider';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { ToastModule } from '../toast/toast.module';
export class DatePickerModule {
}
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
                exports: [DatePickerComponent, DatePickerDirective],
                declarations: [DatePickerComponent, DatePickerDirective],
                providers: [DatePickerOptions]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFONUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO2dCQUN2RSxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuL2RhdGUtcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBUb2FzdE1vZHVsZSB9IGZyb20gJy4uL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExvY2FsZVByb3ZpZGVyTW9kdWxlLCBUb2FzdE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbRGF0ZVBpY2tlckNvbXBvbmVudCwgRGF0ZVBpY2tlckRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0RhdGVQaWNrZXJDb21wb25lbnQsIERhdGVQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtEYXRlUGlja2VyT3B0aW9uc11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7fVxuIl19