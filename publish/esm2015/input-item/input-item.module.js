import { NgModule } from '@angular/core';
import { InputItemComponent } from './input-item.component';
import { CustomKeyboardComponent } from './custom-keyboard/custom-keyboard.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export class InputItemModule {
}
InputItemModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputItemModule });
InputItemModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputItemModule_Factory(t) { return new (t || InputItemModule)(); }, imports: [[CommonModule, FormsModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputItemModule, { declarations: function () { return [InputItemComponent, CustomKeyboardComponent, CustomInputComponent]; }, imports: function () { return [CommonModule, FormsModule, ReactiveFormsModule]; }, exports: function () { return [InputItemComponent, CustomKeyboardComponent, CustomInputComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputItemModule, [{
        type: NgModule,
        args: [{
                exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
                imports: [CommonModule, FormsModule, ReactiveFormsModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQtaXRlbS9pbnB1dC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBT2xFLE1BQU0sT0FBTyxlQUFlO0FBQUc7MkNBTDlCLFFBQVEsU0FBQztHQUNSLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLGtCQUM1RSxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDakY7R0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxjQUMxRDs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2lucHV0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20ta2V5Ym9hcmQvY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLWlucHV0L2N1c3RvbS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbSW5wdXRJdGVtQ29tcG9uZW50LCBDdXN0b21LZXlib2FyZENvbXBvbmVudCwgQ3VzdG9tSW5wdXRDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dEl0ZW1Db21wb25lbnQsIEN1c3RvbUtleWJvYXJkQ29tcG9uZW50LCBDdXN0b21JbnB1dENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEl0ZW1Nb2R1bGUge31cbiJdfQ==