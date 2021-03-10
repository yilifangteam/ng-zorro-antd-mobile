import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '../tabs/tabs.module';
import { TabBarComponent } from './tab-bar.component';
import { BadgeModule } from '../badge/badge.module';
import { TabBarItemComponent } from './tab-bar-item.component';
import * as ɵngcc0 from '@angular/core';
export class TabBarModule {
}
TabBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabBarModule });
TabBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabBarModule_Factory(t) { return new (t || TabBarModule)(); }, providers: [], imports: [[CommonModule, TabsModule, BadgeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabBarModule, { declarations: function () { return [TabBarComponent, TabBarItemComponent]; }, imports: function () { return [CommonModule, TabsModule, BadgeModule]; }, exports: function () { return [TabBarComponent, TabBarItemComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TabsModule, BadgeModule],
                exports: [TabBarComponent, TabBarItemComponent],
                declarations: [TabBarComponent, TabBarItemComponent],
                providers: []
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFiLWJhci90YWItYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFRL0QsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FOM0IsUUFBUSxTQUFDO01BQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsa0JBQ2hELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxrQkFDL0MsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO1VBQ3BELFNBQVMsRUFBRSxFQUFFLGNBQ2Q7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnLi4vdGFicy90YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJCYXJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IFRhYkJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1iYXItaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUYWJzTW9kdWxlLCBCYWRnZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUYWJCYXJDb21wb25lbnQsIFRhYkJhckl0ZW1Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJCYXJDb21wb25lbnQsIFRhYkJhckl0ZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRhYkJhck1vZHVsZSB7fVxuIl19