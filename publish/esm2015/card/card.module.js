import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
export class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
                exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhcmQvY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTzlELE1BQU0sT0FBTyxVQUFVOzs7WUFMdEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO2dCQUMxRixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7YUFDdEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQm9keUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLWZvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudCwgQ2FyZEhlYWRlckNvbXBvbmVudCwgQ2FyZEJvZHlDb21wb25lbnQsIENhcmRGb290ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FyZENvbXBvbmVudCwgQ2FyZEhlYWRlckNvbXBvbmVudCwgQ2FyZEJvZHlDb21wb25lbnQsIENhcmRGb290ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRNb2R1bGUge31cbiJdfQ==