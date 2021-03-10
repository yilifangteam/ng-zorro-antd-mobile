import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { ListModule } from '../list/list.module';
import { RadioItemGroupComponent } from './radio-item-group.component';
import { RadioItemComponent } from './radio-item.component';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class RadioModule {
}
RadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RadioModule });
RadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RadioModule_Factory(t) { return new (t || RadioModule)(); }, imports: [[CommonModule, FormsModule, ListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioModule, { declarations: function () { return [RadioComponent, RadioItemComponent, RadioItemGroupComponent]; }, imports: function () { return [CommonModule, FormsModule, ListModule]; }, exports: function () { return [RadioComponent, RadioItemComponent, RadioItemGroupComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ListModule],
                declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
                exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLFdBQVc7QUFBRzt1Q0FMMUIsUUFBUSxTQUFDO09BQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsa0JBQ2hELFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxrQkFDM0UsT0FBTyxFQUFFLENBQUM7V0FBYyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLGNBQ3ZFOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBSYWRpb0l0ZW1Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8taXRlbS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1JhZGlvQ29tcG9uZW50LCBSYWRpb0l0ZW1Db21wb25lbnQsIFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JhZGlvQ29tcG9uZW50LCBSYWRpb0l0ZW1Db21wb25lbnQsIFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb01vZHVsZSB7fVxuIl19