import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { CalendarComponent } from './calendar.component';
import { CalendarHeaderComponent } from './header/header.component';
import { CalendarWeekPanelComponent } from './week-panel/week-panel.component';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { CalendarTimePickerComponent } from './timepicker/timepicker.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerViewModule } from '../date-picker-view/date-picker-view.module';
import { CalendarSingleMonthComponent } from './single-month/single-month.component';
import { CalendarConfirmPanelComponent } from './confirm-panel/confirm-panel.component';
import { CalendarShortcutPanelComponent } from './shortcut-panel/shortcut-panel.component';
import * as ɵngcc0 from '@angular/core';
export class CalendarModule {
}
CalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarModule });
CalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarModule, { declarations: function () { return [CalendarComponent,
        CalendarHeaderComponent,
        CalendarWeekPanelComponent,
        CalendarDatePickerComponent,
        CalendarTimePickerComponent,
        CalendarSingleMonthComponent,
        CalendarConfirmPanelComponent,
        CalendarShortcutPanelComponent]; }, imports: function () { return [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule]; }, exports: function () { return [CalendarComponent,
        CalendarHeaderComponent,
        CalendarWeekPanelComponent,
        CalendarDatePickerComponent,
        CalendarTimePickerComponent,
        CalendarSingleMonthComponent,
        CalendarConfirmPanelComponent,
        CalendarShortcutPanelComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
                declarations: [
                    CalendarComponent,
                    CalendarHeaderComponent,
                    CalendarWeekPanelComponent,
                    CalendarDatePickerComponent,
                    CalendarTimePickerComponent,
                    CalendarSingleMonthComponent,
                    CalendarConfirmPanelComponent,
                    CalendarShortcutPanelComponent
                ],
                exports: [
                    CalendarComponent,
                    CalendarHeaderComponent,
                    CalendarWeekPanelComponent,
                    CalendarDatePickerComponent,
                    CalendarTimePickerComponent,
                    CalendarSingleMonthComponent,
                    CalendarConfirmPanelComponent,
                    CalendarShortcutPanelComponent
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDckYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBeUIzRixNQUFNLE9BQU8sY0FBYztBQUFHOzBDQXZCN0IsUUFBUSxTQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDL0UsWUFBWSxFQUFFLHNCQUNaLGlCQUFpQixzQkFDakIsdUJBQXVCO0VBQ3ZCLDBCQUEwQixzQkFDMUIsMkJBQTJCLHNCQUMzQiwyQkFBMkIsc0JBQzNCO1dBQTRCO0FBQzVCLDZCQUE2QjtlQUM3QjtRQUE4QixrQkFDL0I7T0FDRCxPQUFPLEVBQUU7QUFDUCxpQkFBaUI7QUFDakIsdUJBQXVCLHNCQUN2QiwwQkFBMEIsc0JBQzFCLDJCQUEyQixzQkFDM0IsMkJBQTJCLHNCQUMzQjtvQkFBNEI7U0FDNUI7RUFBNkIsc0JBQzdCO2lCQUE4QixrQkFDL0I7WUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vd2Vlay1wYW5lbC93ZWVrLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclZpZXdNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXBpY2tlci12aWV3L2RhdGUtcGlja2VyLXZpZXcubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyU2luZ2xlTW9udGhDb21wb25lbnQgfSBmcm9tICcuL3NpbmdsZS1tb250aC9zaW5nbGUtbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlybVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLXBhbmVsL2NvbmZpcm0tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyU2hvcnRjdXRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc2hvcnRjdXQtcGFuZWwvc2hvcnRjdXQtcGFuZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZSwgRGF0ZVBpY2tlclZpZXdNb2R1bGUsIExvY2FsZVByb3ZpZGVyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrUGFuZWxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIENhbGVuZGFyVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhclNpbmdsZU1vbnRoQ29tcG9uZW50LFxuICAgIENhbGVuZGFyQ29uZmlybVBhbmVsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyU2hvcnRjdXRQYW5lbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrUGFuZWxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIENhbGVuZGFyVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhclNpbmdsZU1vbnRoQ29tcG9uZW50LFxuICAgIENhbGVuZGFyQ29uZmlybVBhbmVsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyU2hvcnRjdXRQYW5lbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kdWxlIHt9XG4iXX0=