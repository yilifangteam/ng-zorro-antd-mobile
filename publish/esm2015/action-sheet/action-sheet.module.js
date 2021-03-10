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
import * as ɵngcc0 from '@angular/core';
export class ActionSheetModule {
}
ActionSheetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ActionSheetModule });
ActionSheetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ActionSheetModule_Factory(t) { return new (t || ActionSheetModule)(); }, providers: [PopupService, ActionSheetService], imports: [[
            CommonModule,
            OverlayModule,
            NgZorroAntdMobilePipesModule,
            ListModule,
            WhiteSpaceModule,
            WingBlankModule,
            LocaleProviderModule,
            TouchFeedbackModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ActionSheetModule, { declarations: function () { return [ActionSheetComponent]; }, imports: function () { return [CommonModule,
        OverlayModule,
        NgZorroAntdMobilePipesModule,
        ListModule,
        WhiteSpaceModule,
        WingBlankModule,
        LocaleProviderModule,
        TouchFeedbackModule]; }, exports: function () { return [ActionSheetComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActionSheetModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY3Rpb24tc2hlZXQvYWN0aW9uLXNoZWV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBaUI1RCxNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBZmhDLFFBQVEsU0FBQztDQUNSLE9BQU8sRUFBRSxzQkFDUCxZQUFZLHNCQUNaLGFBQWEsc0JBQ2IsNEJBQTRCLHNCQUM1QixVQUFVLHNCQUNWLGdCQUFnQjtvQkFDaEI7U0FBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7aUJBQ3BCO0tBQ0QsWUFBWSxFQUFFLENBQUM7V0FBb0IsQ0FBQyxrQkFDcEM7R0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDL0I7T0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLGNBQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vYmlsZVBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvbmctem9ycm8tYW50ZC1tb2JpbGUucGlwZXMubW9kdWxlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tc2hlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmdCbGFua01vZHVsZSB9IGZyb20gJy4uL3dpbmctYmxhbmsvd2luZy1ibGFuay5tb2R1bGUnO1xuaW1wb3J0IHsgV2hpdGVTcGFjZU1vZHVsZSB9IGZyb20gJy4uL3doaXRlLXNwYWNlL3doaXRlLXNwYWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlck1vZHVsZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIubW9kdWxlJztcbmltcG9ydCB7IFRvdWNoRmVlZGJhY2tNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2RpcmVjdGl2ZS90b3VjaC1mZWVkYmFjay5tb2R1bGUnO1xuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0U2VydmljZSB9IGZyb20gJy4vYWN0aW9uLXNoZWV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2JpbGVQaXBlc01vZHVsZSxcbiAgICBMaXN0TW9kdWxlLFxuICAgIFdoaXRlU3BhY2VNb2R1bGUsXG4gICAgV2luZ0JsYW5rTW9kdWxlLFxuICAgIExvY2FsZVByb3ZpZGVyTW9kdWxlLFxuICAgIFRvdWNoRmVlZGJhY2tNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWN0aW9uU2hlZXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWN0aW9uU2hlZXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQb3B1cFNlcnZpY2UsIEFjdGlvblNoZWV0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uU2hlZXRNb2R1bGUge31cbiJdfQ==