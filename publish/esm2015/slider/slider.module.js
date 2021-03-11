import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderHandleComponent } from './slider-handle/slider-handle.component';
import { SliderMarksComponent } from './slider-marks/slider-marks.component';
import { SliderStepsComponent } from './slider-steps/slider-steps.component';
import { SliderTrackComponent } from './slider-track/slider-track.component';
export class SliderModule {
}
SliderModule.decorators = [
    { type: NgModule, args: [{
                exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
                declarations: [
                    SliderComponent,
                    SliderHandleComponent,
                    SliderMarksComponent,
                    SliderStepsComponent,
                    SliderTrackComponent
                ],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2xpZGVyL3NsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBYTdFLE1BQU0sT0FBTyxZQUFZOzs7WUFYeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztnQkFDbkgsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci1oYW5kbGUvc2xpZGVyLWhhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyTWFya3NDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci1tYXJrcy9zbGlkZXItbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlclN0ZXBzQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXItc3RlcHMvc2xpZGVyLXN0ZXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJUcmFja0NvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLXRyYWNrL3NsaWRlci10cmFjay5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbU2xpZGVyQ29tcG9uZW50LCBTbGlkZXJIYW5kbGVDb21wb25lbnQsIFNsaWRlck1hcmtzQ29tcG9uZW50LCBTbGlkZXJTdGVwc0NvbXBvbmVudCwgU2xpZGVyVHJhY2tDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgU2xpZGVySGFuZGxlQ29tcG9uZW50LFxuICAgIFNsaWRlck1hcmtzQ29tcG9uZW50LFxuICAgIFNsaWRlclN0ZXBzQ29tcG9uZW50LFxuICAgIFNsaWRlclRyYWNrQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlck1vZHVsZSB7fVxuIl19