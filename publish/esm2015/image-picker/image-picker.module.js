import { NgModule } from '@angular/core';
import { ImagePickerComponent } from './image-picker.component';
import { FlexModule } from '../flex/flex.module';
import { CommonModule } from '@angular/common';
export class ImagePickerModule {
}
ImagePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ImagePickerComponent],
                exports: [ImagePickerComponent],
                imports: [CommonModule, FlexModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZsZXhNb2R1bGUgfSBmcm9tICcuLi9mbGV4L2ZsZXgubW9kdWxlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ltYWdlUGlja2VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ltYWdlUGlja2VyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRmxleE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXJNb2R1bGUge31cbiJdfQ==