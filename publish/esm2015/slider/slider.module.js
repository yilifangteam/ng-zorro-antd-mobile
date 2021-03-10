import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderHandleComponent } from './slider-handle/slider-handle.component';
import { SliderMarksComponent } from './slider-marks/slider-marks.component';
import { SliderStepsComponent } from './slider-steps/slider-steps.component';
import { SliderTrackComponent } from './slider-track/slider-track.component';
import * as ɵngcc0 from '@angular/core';
export class SliderModule {
}
SliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SliderModule });
SliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SliderModule_Factory(t) { return new (t || SliderModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SliderModule, { declarations: function () { return [SliderComponent,
        SliderHandleComponent,
        SliderMarksComponent,
        SliderStepsComponent,
        SliderTrackComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderModule, [{
        type: NgModule,
        args: [{
                exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
                declarations: [
                    SliderComponent,
                    SliderHandleComponent,
                    SliderMarksComponent,
                    SliderStepsComponent,
                    SliderTrackComponent
                ],
                imports: [CommonModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBYTdFLE1BQU0sT0FBTyxZQUFZO0FBQUc7d0NBWDNCLFFBQVEsU0FBQztNQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDbkgsWUFBWSxFQUFFO2tCQUNaLGVBQWUsc0JBQ2YscUJBQXFCLHNCQUNyQixvQkFBb0Isc0JBQ3BCLG9CQUFvQjtxQkFDcEI7VUFBb0Isa0JBQ3JCO2dCQUNELE9BQU8sRUFBRSxDQUFDO1FBQVksQ0FBQyxjQUN4Qjs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLWhhbmRsZS9zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJNYXJrc0NvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLW1hcmtzL3NsaWRlci1tYXJrcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyU3RlcHNDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci1zdGVwcy9zbGlkZXItc3RlcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlclRyYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXItdHJhY2svc2xpZGVyLXRyYWNrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtTbGlkZXJDb21wb25lbnQsIFNsaWRlckhhbmRsZUNvbXBvbmVudCwgU2xpZGVyTWFya3NDb21wb25lbnQsIFNsaWRlclN0ZXBzQ29tcG9uZW50LCBTbGlkZXJUcmFja0NvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICBTbGlkZXJIYW5kbGVDb21wb25lbnQsXG4gICAgU2xpZGVyTWFya3NDb21wb25lbnQsXG4gICAgU2xpZGVyU3RlcHNDb21wb25lbnQsXG4gICAgU2xpZGVyVHJhY2tDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyTW9kdWxlIHt9XG4iXX0=