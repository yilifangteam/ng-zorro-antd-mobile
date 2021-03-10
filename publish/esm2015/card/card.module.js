import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import * as ɵngcc0 from '@angular/core';
export class CardModule {
}
CardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CardModule, { declarations: function () { return [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
                exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBTzlELE1BQU0sT0FBTyxVQUFVO0FBQUc7c0NBTHpCLFFBQVEsU0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO01BQzFGLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxjQUN0Rjs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtZm9vdGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJkQ29tcG9uZW50LCBDYXJkSGVhZGVyQ29tcG9uZW50LCBDYXJkQm9keUNvbXBvbmVudCwgQ2FyZEZvb3RlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJkQ29tcG9uZW50LCBDYXJkSGVhZGVyQ29tcG9uZW50LCBDYXJkQm9keUNvbXBvbmVudCwgQ2FyZEZvb3RlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1vZHVsZSB7fVxuIl19