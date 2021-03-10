import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker.component';
import { PickerDirective } from './picker.directive';
import { PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';
import { PickerService } from './picker.service';
import { OverlayModule } from '@angular/cdk/overlay';
import * as ɵngcc0 from '@angular/core';
export class PickerModule {
}
PickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PickerModule });
PickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PickerModule_Factory(t) { return new (t || PickerModule)(); }, providers: [PickerOptions, PopupService, PickerService], imports: [[CommonModule, OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PickerModule, { declarations: function () { return [PickerComponent, PickerDirective]; }, imports: function () { return [CommonModule, OverlayModule]; }, exports: function () { return [PickerComponent, PickerDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule],
                exports: [PickerComponent, PickerDirective],
                declarations: [PickerComponent, PickerDirective],
                providers: [PickerOptions, PopupService, PickerService]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFRckQsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FOM0IsUUFBUSxTQUFDO01BQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxrQkFDdEMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxrQkFDM0MsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxrQkFDaEQsU0FBUyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVk7Q0FBRSxhQUFhLENBQUMsY0FDeEQ7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBpY2tlck9wdGlvbnMgfSBmcm9tICcuL3BpY2tlci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgZXhwb3J0czogW1BpY2tlckNvbXBvbmVudCwgUGlja2VyRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGlja2VyQ29tcG9uZW50LCBQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtQaWNrZXJPcHRpb25zLCBQb3B1cFNlcnZpY2UsIFBpY2tlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZHVsZSB7fVxuIl19