import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullToRefreshComponent } from './pull-to-refresh.component';
import { IconModule } from '../icon/icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class PullToRefreshModule {
}
PullToRefreshModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
                exports: [PullToRefreshComponent],
                declarations: [PullToRefreshComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsbC10by1yZWZyZXNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicHVsbC10by1yZWZyZXNoL3B1bGwtdG8tcmVmcmVzaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9sRSxNQUFNLE9BQU8sbUJBQW1COzs7WUFML0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFB1bGxUb1JlZnJlc2hDb21wb25lbnQgfSBmcm9tICcuL3B1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEljb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW1B1bGxUb1JlZnJlc2hDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtQdWxsVG9SZWZyZXNoQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQdWxsVG9SZWZyZXNoTW9kdWxlIHt9XG4iXX0=