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
import * as ɵngcc0 from '@angular/core';
export class ModalModule {
}
ModalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ModalModule });
ModalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, providers: [AlertOptions, ModalService, PopupService], imports: [[
            CommonModule,
            ListModule,
            WingBlankModule,
            WhiteSpaceModule,
            ButtonModule,
            InputItemModule,
            FormsModule,
            ReactiveFormsModule,
            OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ModalModule, { declarations: function () { return [ModalComponent, ModalServiceComponent]; }, imports: function () { return [CommonModule,
        ListModule,
        WingBlankModule,
        WhiteSpaceModule,
        ButtonModule,
        InputItemModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule]; }, exports: function () { return [ModalComponent, ModalServiceComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBaUI5RCxNQUFNLE9BQU8sV0FBVztBQUFHO3VDQWhCMUIsUUFBUSxTQUFDO09BQ1IsT0FBTyxFQUFFLHNCQUNQLFlBQVksc0JBQ1osVUFBVSxzQkFDVixlQUFlLHNCQUNmLGdCQUFnQixzQkFDaEI7QUFBWSxzQkFDWjtXQUFlO1NBQ2YsV0FBVzthQUNYO0VBQW1CLHNCQUNuQjtXQUFhO0FBQ2Qsa0JBQ0Q7QUFBTyxFQUFFLENBQUMsY0FBYyxFQUFFO09BQXFCLENBQUM7QUFDaEQsWUFBWSxFQUFFO0FBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDLGtCQUNyRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxjQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50LCBNb2RhbFNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgV2luZ0JsYW5rTW9kdWxlIH0gZnJvbSAnLi4vd2luZy1ibGFuay93aW5nLWJsYW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBXaGl0ZVNwYWNlTW9kdWxlIH0gZnJvbSAnLi4vd2hpdGUtc3BhY2Uvd2hpdGUtc3BhY2UubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IElucHV0SXRlbU1vZHVsZSB9IGZyb20gJy4uL2lucHV0LWl0ZW0vaW5wdXQtaXRlbS5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbGVydE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvcG9wdXAuc2VydmljZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExpc3RNb2R1bGUsXG4gICAgV2luZ0JsYW5rTW9kdWxlLFxuICAgIFdoaXRlU3BhY2VNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIElucHV0SXRlbU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW01vZGFsQ29tcG9uZW50LCBNb2RhbFNlcnZpY2VDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtNb2RhbENvbXBvbmVudCwgTW9kYWxTZXJ2aWNlQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQWxlcnRPcHRpb25zLCBNb2RhbFNlcnZpY2UsIFBvcHVwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge31cbiJdfQ==