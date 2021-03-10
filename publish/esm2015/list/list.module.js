import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BriefComponent } from './brief/brief.component';
import * as ɵngcc0 from '@angular/core';
export class ListModule {
}
ListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListModule });
ListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListModule_Factory(t) { return new (t || ListModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListModule, { declarations: function () { return [ListComponent, ListItemComponent, BriefComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [ListComponent, ListItemComponent, BriefComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [ListComponent, ListItemComponent, BriefComponent],
                declarations: [ListComponent, ListItemComponent, BriefComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPekQsTUFBTSxPQUFPLFVBQVU7QUFBRztzQ0FMekIsUUFBUSxTQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxrQkFDcEMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxrQkFDM0QsWUFBWSxFQUFFLENBQUM7R0FBYSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxjQUNqRTs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJpZWZDb21wb25lbnQgfSBmcm9tICcuL2JyaWVmL2JyaWVmLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW0xpc3RDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBCcmllZkNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0xpc3RDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBCcmllZkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdE1vZHVsZSB7fVxuIl19