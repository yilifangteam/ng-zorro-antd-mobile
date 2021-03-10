import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListModule } from '../list/list.module';
import { CheckboxComponent } from './checkbox.component';
import { AgreeItemComponent } from './agree-item.component';
import { CheckboxItemComponent } from './checkbox-item.component';
import * as ɵngcc0 from '@angular/core';
export class CheckboxModule {
}
CheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[CommonModule, FormsModule, ListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: function () { return [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]; }, imports: function () { return [CommonModule, FormsModule, ListModule]; }, exports: function () { return [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ListModule],
                declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
                exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQU9sRSxNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUw3QixRQUFRLFNBQUM7SUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxrQkFDaEQsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsa0JBQzVFLE9BQU8sRUFBRSxDQUFDO0dBQWlCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsY0FDeEU7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZ3JlZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FncmVlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrYm94Q29tcG9uZW50LCBDaGVja2JveEl0ZW1Db21wb25lbnQsIEFncmVlSXRlbUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja2JveENvbXBvbmVudCwgQ2hlY2tib3hJdGVtQ29tcG9uZW50LCBBZ3JlZUl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94TW9kdWxlIHt9XG4iXX0=