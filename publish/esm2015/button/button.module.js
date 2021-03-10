import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ListModule } from '../list/list.module';
import * as ɵngcc0 from '@angular/core';
export const NZ_BUTTON_DIRECTIVES = [ButtonComponent];
export class ButtonModule {
}
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonComponent]; }, imports: function () { return [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]; }, exports: function () { return [ButtonComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: NZ_BUTTON_DIRECTIVES,
                exports: NZ_BUTTON_DIRECTIVES,
                imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ2pELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7QUFPbEUsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FMM0IsUUFBUSxTQUFDO01BQ1IsWUFBWSxFQUFFLG9CQUFvQixrQkFDbEMsT0FBTyxFQUFFLG9CQUFvQixrQkFDN0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLGNBQ25GOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFdpbmdCbGFua01vZHVsZSB9IGZyb20gJy4uL3dpbmctYmxhbmsvd2luZy1ibGFuay5tb2R1bGUnO1xuaW1wb3J0IHsgV2hpdGVTcGFjZU1vZHVsZSB9IGZyb20gJy4uL3doaXRlLXNwYWNlL3doaXRlLXNwYWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5leHBvcnQgY29uc3QgTlpfQlVUVE9OX0RJUkVDVElWRVM6IEFycmF5PGFueT4gPSBbQnV0dG9uQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBOWl9CVVRUT05fRElSRUNUSVZFUyxcbiAgZXhwb3J0czogTlpfQlVUVE9OX0RJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEljb25Nb2R1bGUsIFdpbmdCbGFua01vZHVsZSwgV2hpdGVTcGFjZU1vZHVsZSwgTGlzdE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHt9XG4iXX0=