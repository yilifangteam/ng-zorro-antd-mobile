import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from '../tabs/tabs.module';
import { TabBarComponent } from './tab-bar.component';
import { BadgeModule } from '../badge/badge.module';
import { TabBarItemComponent } from './tab-bar-item.component';
export class TabBarModule {
}
TabBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TabsModule, BadgeModule],
                exports: [TabBarComponent, TabBarItemComponent],
                declarations: [TabBarComponent, TabBarItemComponent],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRhYi1iYXIvdGFiLWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFRL0QsTUFBTSxPQUFPLFlBQVk7OztZQU54QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztnQkFDL0MsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNwRCxTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnLi4vdGFicy90YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJCYXJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IFRhYkJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1iYXItaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUYWJzTW9kdWxlLCBCYWRnZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUYWJCYXJDb21wb25lbnQsIFRhYkJhckl0ZW1Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJCYXJDb21wb25lbnQsIFRhYkJhckl0ZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRhYkJhck1vZHVsZSB7fVxuIl19