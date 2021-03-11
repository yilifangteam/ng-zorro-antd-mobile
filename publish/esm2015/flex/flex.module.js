import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent, FlexItemComponent } from './flex.component';
export class FlexModule {
}
FlexModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [FlexComponent, FlexItemComponent],
                declarations: [FlexComponent, FlexItemComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImZsZXgvZmxleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT3BFLE1BQU0sT0FBTyxVQUFVOzs7WUFMdEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDO2dCQUMzQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZsZXhDb21wb25lbnQsIEZsZXhJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9mbGV4LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbRmxleENvbXBvbmVudCwgRmxleEl0ZW1Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtGbGV4Q29tcG9uZW50LCBGbGV4SXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmxleE1vZHVsZSB7fVxuIl19