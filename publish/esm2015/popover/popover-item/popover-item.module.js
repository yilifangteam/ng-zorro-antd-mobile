import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverItemComponent } from './popover-item.component';
import { IconModule } from '../../icon/icon.module';
export class PopoverItemModule {
}
PopoverItemModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule],
                exports: [PopoverItemComponent],
                declarations: [PopoverItemComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1pdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicG9wb3Zlci9wb3BvdmVyLWl0ZW0vcG9wb3Zlci1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPcEQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTDdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcG92ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtQb3BvdmVySXRlbUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1BvcG92ZXJJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVySXRlbU1vZHVsZSB7fVxuIl19