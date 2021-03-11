import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FlexModule } from '../flex/flex.module';
import { CarouselModule } from '../carousel/carousel.module';
import { IconModule } from '../icon/icon.module';
import { TouchFeedbackModule } from '../core/directive/touch-feedback.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
export class GridModule {
}
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
                exports: [GridComponent],
                declarations: [GridComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBTTFGLE1BQU0sT0FBTyxVQUFVOzs7WUFMdEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsQ0FBQztnQkFDbEgsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEZsZXhNb2R1bGUgfSBmcm9tICcuLi9mbGV4L2ZsZXgubW9kdWxlJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi4vY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFRvdWNoRmVlZGJhY2tNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2RpcmVjdGl2ZS90b3VjaC1mZWVkYmFjay5tb2R1bGUnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2JpbGVQaXBlc01vZHVsZSB9IGZyb20gJy4uL3BpcGVzL25nLXpvcnJvLWFudGQtbW9iaWxlLnBpcGVzLm1vZHVsZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRmxleE1vZHVsZSwgSWNvbk1vZHVsZSwgQ29tbW9uTW9kdWxlLCBDYXJvdXNlbE1vZHVsZSwgVG91Y2hGZWVkYmFja01vZHVsZSwgTmdab3Jyb0FudGRNb2JpbGVQaXBlc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtHcmlkQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbR3JpZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZE1vZHVsZSB7fVxuIl19