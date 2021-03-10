import { NgModule } from '@angular/core';
import { TextareaItemComponent } from './textarea-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export class TextareaItemModule {
}
TextareaItemModule.decorators = [
    { type: NgModule, args: [{
                exports: [TextareaItemComponent],
                declarations: [TextareaItemComponent],
                imports: [CommonModule, FormsModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRleHRhcmVhLWl0ZW0vdGV4dGFyZWEtaXRlbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTyxrQkFBa0I7OztZQUw5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRhcmVhSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbVGV4dGFyZWFJdGVtQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbVGV4dGFyZWFJdGVtQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhSXRlbU1vZHVsZSB7fVxuIl19