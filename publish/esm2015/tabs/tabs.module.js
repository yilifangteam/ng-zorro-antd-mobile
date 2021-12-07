import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { TabsComponent } from './tabs.component';
import { TabPaneComponent } from './tab-pane.component';
import { TabPaneBodyComponent } from './tab-pane-body.component';
import { DefaultTabBarComponent } from './default-tab-bar.component';
export { TabPaneComponent } from './tab-pane.component';
export class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ObserversModule],
                declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRhYnMvdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF4RCxNQUFNLE9BQU8sVUFBVTs7O1lBTnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzdGLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDeEYsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiUGFuZUJvZHlDb21wb25lbnQgfSBmcm9tICcuL3RhYi1wYW5lLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRUYWJCYXJDb21wb25lbnQgfSBmcm9tICcuL2RlZmF1bHQtdGFiLWJhci5jb21wb25lbnQnO1xuXG5leHBvcnQgeyBUYWJQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJQYW5lQ29tcG9uZW50LCBUYWJzQ29tcG9uZW50LCBUYWJQYW5lQm9keUNvbXBvbmVudCwgRGVmYXVsdFRhYkJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUYWJQYW5lQ29tcG9uZW50LCBUYWJzQ29tcG9uZW50LCBUYWJQYW5lQm9keUNvbXBvbmVudCwgRGVmYXVsdFRhYkJhckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7fVxuIl19