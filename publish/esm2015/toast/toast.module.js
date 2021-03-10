import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { IconModule } from '../icon/icon.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
export class ToastModule {
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule, WingBlankModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                providers: [ToastService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUWxFLE1BQU0sT0FBTyxXQUFXOzs7WUFOdkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBXaW5nQmxhbmtNb2R1bGUgfSBmcm9tICcuLi93aW5nLWJsYW5rL3dpbmctYmxhbmsubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZSwgV2luZ0JsYW5rTW9kdWxlXSxcbiAgZXhwb3J0czogW1RvYXN0Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtUb2FzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0TW9kdWxlIHt9XG4iXX0=