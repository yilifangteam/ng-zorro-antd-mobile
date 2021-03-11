import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalServiceComponent } from './modal.component';
import { ModalService } from './modal.service';
import { ListModule } from '../list/list.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ButtonModule } from '../button/button.module';
import { InputItemModule } from '../input-item/input-item.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertOptions } from './modal-options.provider';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupService } from '../core/services/popup.service';
export class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ListModule,
                    WingBlankModule,
                    WhiteSpaceModule,
                    ButtonModule,
                    InputItemModule,
                    FormsModule,
                    ReactiveFormsModule,
                    OverlayModule
                ],
                exports: [ModalComponent, ModalServiceComponent],
                declarations: [ModalComponent, ModalServiceComponent],
                providers: [AlertOptions, ModalService, PopupService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBaUI5RCxNQUFNLE9BQU8sV0FBVzs7O1lBaEJ2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQztnQkFDaEQsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQsIE1vZGFsU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBXaW5nQmxhbmtNb2R1bGUgfSBmcm9tICcuLi93aW5nLWJsYW5rL3dpbmctYmxhbmsubW9kdWxlJztcbmltcG9ydCB7IFdoaXRlU3BhY2VNb2R1bGUgfSBmcm9tICcuLi93aGl0ZS1zcGFjZS93aGl0ZS1zcGFjZS5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRJdGVtTW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtaXRlbS9pbnB1dC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFsZXJ0T3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTGlzdE1vZHVsZSxcbiAgICBXaW5nQmxhbmtNb2R1bGUsXG4gICAgV2hpdGVTcGFjZU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgSW5wdXRJdGVtTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTW9kYWxDb21wb25lbnQsIE1vZGFsU2VydmljZUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW01vZGFsQ29tcG9uZW50LCBNb2RhbFNlcnZpY2VDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBbGVydE9wdGlvbnMsIE1vZGFsU2VydmljZSwgUG9wdXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7fVxuIl19