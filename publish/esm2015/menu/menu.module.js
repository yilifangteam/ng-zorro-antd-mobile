import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '../flex/flex.module';
import { ListModule } from '../list/list.module';
import { RadioModule } from '../radio/radio.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ButtonModule } from '../button/button.module';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { FormsModule } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export class MenuModule {
}
MenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MenuModule });
MenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            CommonModule,
            FlexModule,
            ListModule,
            RadioModule,
            CheckboxModule,
            ButtonModule,
            LocaleProviderModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MenuModule, { declarations: function () { return [MenuComponent, SubMenuComponent]; }, imports: function () { return [CommonModule,
        FlexModule,
        ListModule,
        RadioModule,
        CheckboxModule,
        ButtonModule,
        LocaleProviderModule,
        FormsModule]; }, exports: function () { return [MenuComponent, SubMenuComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FlexModule,
                    ListModule,
                    RadioModule,
                    CheckboxModule,
                    ButtonModule,
                    LocaleProviderModule,
                    FormsModule
                ],
                exports: [MenuComponent, SubMenuComponent],
                declarations: [MenuComponent, SubMenuComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZ0I3QyxNQUFNLE9BQU8sVUFBVTtBQUFHO3NDQWR6QixRQUFRLFNBQUM7UUFDUixPQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixVQUFVLHNCQUNWLFVBQVU7SUFDVixXQUFXO1dBQ1g7Q0FBYyxzQkFDZDtXQUFZO1FBQ1o7QUFBb0Isc0JBQ3BCO09BQVcsa0JBQ1o7U0FDRCxPQUFPLEVBQUUsQ0FBQztRQUFhLEVBQUU7V0FBZ0IsQ0FBQyxrQkFDMUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLGNBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmxleE1vZHVsZSB9IGZyb20gJy4uL2ZsZXgvZmxleC5tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgUmFkaW9Nb2R1bGUgfSBmcm9tICcuLi9yYWRpby9yYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRmxleE1vZHVsZSxcbiAgICBMaXN0TW9kdWxlLFxuICAgIFJhZGlvTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBMb2NhbGVQcm92aWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWVudUNvbXBvbmVudCwgU3ViTWVudUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW01lbnVDb21wb25lbnQsIFN1Yk1lbnVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVNb2R1bGUge31cbiJdfQ==