import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import * as ɵngcc0 from '@angular/core';
export class AccordionModule {
}
AccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[CommonModule, WhiteSpaceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AccordionModule, { declarations: function () { return [AccordionComponent, AccordionGroupComponent]; }, imports: function () { return [CommonModule, WhiteSpaceModule]; }, exports: function () { return [AccordionComponent, AccordionGroupComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, WhiteSpaceModule],
                declarations: [AccordionComponent, AccordionGroupComponent],
                exports: [AccordionComponent, AccordionGroupComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFPckUsTUFBTSxPQUFPLGVBQWU7QUFBRzsyQ0FMOUIsUUFBUSxTQUFDO0dBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLGtCQUN6QyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxrQkFDM0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFBdUIsQ0FBQyxjQUN2RDs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAvYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaGl0ZVNwYWNlTW9kdWxlIH0gZnJvbSAnLi4vd2hpdGUtc3BhY2Uvd2hpdGUtc3BhY2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgV2hpdGVTcGFjZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uR3JvdXBDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25Hcm91cENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTW9kdWxlIHt9XG4iXX0=