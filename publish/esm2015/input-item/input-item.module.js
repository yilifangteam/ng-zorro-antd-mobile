import { NgModule } from '@angular/core';
import { InputItemComponent } from './input-item.component';
import { CustomKeyboardComponent } from './custom-keyboard/custom-keyboard.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class InputItemModule {
}
InputItemModule.decorators = [
    { type: NgModule, args: [{
                exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                imports: [CommonModule, FormsModule, ReactiveFormsModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImlucHV0LWl0ZW0vaW5wdXQtaXRlbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT2xFLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDO2dCQUM1RSxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztnQkFDakYsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQzthQUMxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2lucHV0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20ta2V5Ym9hcmQvY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLWlucHV0L2N1c3RvbS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbSW5wdXRJdGVtQ29tcG9uZW50LCBDdXN0b21LZXlib2FyZENvbXBvbmVudCwgQ3VzdG9tSW5wdXRDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dEl0ZW1Db21wb25lbnQsIEN1c3RvbUtleWJvYXJkQ29tcG9uZW50LCBDdXN0b21JbnB1dENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEl0ZW1Nb2R1bGUge31cbiJdfQ==