import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { TabsComponent } from './tabs.component';
import { TabPaneComponent } from './tab-pane.component';
import { TabPaneBodyComponent } from './tab-pane-body.component';
import { DefaultTabBarComponent } from './default-tab-bar.component';
import * as ɵngcc0 from '@angular/core';
export { TabPaneComponent } from './tab-pane.component';
export class TabsModule {
}
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, providers: [], imports: [[CommonModule, ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent]; }, imports: function () { return [CommonModule, ObserversModule]; }, exports: function () { return [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ObserversModule],
                declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
                providers: []
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF4RCxNQUFNLE9BQU8sVUFBVTtBQUFHO3NDQU56QixRQUFRLFNBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLGtCQUN4QyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLENBQUMsa0JBQzdGO0NBQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxrQkFDeEYsU0FBUyxFQUFFLEVBQUUsY0FDZDs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYlBhbmVCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZS1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0VGFiQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0LXRhYi1iYXIuY29tcG9uZW50JztcblxuZXhwb3J0IHsgVGFiUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT2JzZXJ2ZXJzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFiUGFuZUNvbXBvbmVudCwgVGFic0NvbXBvbmVudCwgVGFiUGFuZUJvZHlDb21wb25lbnQsIERlZmF1bHRUYWJCYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGFiUGFuZUNvbXBvbmVudCwgVGFic0NvbXBvbmVudCwgVGFiUGFuZUJvZHlDb21wb25lbnQsIERlZmF1bHRUYWJCYXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUge31cbiJdfQ==