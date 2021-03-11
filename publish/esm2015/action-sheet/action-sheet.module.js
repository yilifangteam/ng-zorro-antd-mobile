import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ListModule } from '../list/list.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
import { ActionSheetComponent } from './action-sheet.component';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { TouchFeedbackModule } from '../core/directive/touch-feedback.module';
import { PopupService } from '../core/services/popup.service';
import { ActionSheetService } from './action-sheet.service';
export class ActionSheetModule {
}
ActionSheetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    NgZorroAntdMobilePipesModule,
                    ListModule,
                    WhiteSpaceModule,
                    WingBlankModule,
                    LocaleProviderModule,
                    TouchFeedbackModule
                ],
                declarations: [ActionSheetComponent],
                exports: [ActionSheetComponent],
                providers: [PopupService, ActionSheetService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWN0aW9uLXNoZWV0L2FjdGlvbi1zaGVldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBaUI1RCxNQUFNLE9BQU8saUJBQWlCOzs7WUFmN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsNEJBQTRCO29CQUM1QixVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vYmlsZVBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvbmctem9ycm8tYW50ZC1tb2JpbGUucGlwZXMubW9kdWxlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tc2hlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmdCbGFua01vZHVsZSB9IGZyb20gJy4uL3dpbmctYmxhbmsvd2luZy1ibGFuay5tb2R1bGUnO1xuaW1wb3J0IHsgV2hpdGVTcGFjZU1vZHVsZSB9IGZyb20gJy4uL3doaXRlLXNwYWNlL3doaXRlLXNwYWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlck1vZHVsZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIubW9kdWxlJztcbmltcG9ydCB7IFRvdWNoRmVlZGJhY2tNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2RpcmVjdGl2ZS90b3VjaC1mZWVkYmFjay5tb2R1bGUnO1xuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0U2VydmljZSB9IGZyb20gJy4vYWN0aW9uLXNoZWV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2JpbGVQaXBlc01vZHVsZSxcbiAgICBMaXN0TW9kdWxlLFxuICAgIFdoaXRlU3BhY2VNb2R1bGUsXG4gICAgV2luZ0JsYW5rTW9kdWxlLFxuICAgIExvY2FsZVByb3ZpZGVyTW9kdWxlLFxuICAgIFRvdWNoRmVlZGJhY2tNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWN0aW9uU2hlZXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWN0aW9uU2hlZXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQb3B1cFNlcnZpY2UsIEFjdGlvblNoZWV0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uU2hlZXRNb2R1bGUge31cbiJdfQ==