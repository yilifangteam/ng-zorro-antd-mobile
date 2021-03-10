import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerViewComponent } from './picker-view.component';
import { PickerModule } from '../picker/picker.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import * as ɵngcc0 from '@angular/core';
export class PickerViewModule {
}
PickerViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PickerViewModule });
PickerViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PickerViewModule_Factory(t) { return new (t || PickerViewModule)(); }, imports: [[FormsModule, CommonModule, PickerModule, LocaleProviderModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PickerViewModule, { declarations: function () { return [PickerViewComponent]; }, imports: function () { return [FormsModule, CommonModule, PickerModule, LocaleProviderModule]; }, exports: function () { return [PickerViewComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerViewModule, [{
        type: NgModule,
        args: [{
                imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
                exports: [PickerViewComponent],
                declarations: [PickerViewComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXZpZXcubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3BpY2tlci12aWV3L3BpY2tlci12aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQU1qRixNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7NENBTC9CLFFBQVEsU0FBQztFQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDLGtCQUN4RSxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFDOUIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUMsY0FDcEM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBpY2tlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9waWNrZXIvcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlck1vZHVsZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIubW9kdWxlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBQaWNrZXJNb2R1bGUsIExvY2FsZVByb3ZpZGVyTW9kdWxlXSxcbiAgZXhwb3J0czogW1BpY2tlclZpZXdDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtQaWNrZXJWaWV3Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJWaWV3TW9kdWxlIHt9XG4iXX0=