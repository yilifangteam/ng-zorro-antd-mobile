import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';
import { PopoverOptions } from './popover-options.provider';
import * as ɵngcc0 from '@angular/core';
export function PopoverOptionsFactory(userOptions) {
    const options = new PopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
export class PopoverModule {
}
PopoverModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PopoverModule, { declarations: function () { return [PopoverDirective, PopoverComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PopoverDirective, PopoverComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                declarations: [PopoverDirective, PopoverComponent],
                imports: [CommonModule],
                exports: [PopoverDirective, PopoverComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRTVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxXQUEyQjtBQUFJLElBQ25FLE1BQU0sT0FBTyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQ3ZELElBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEMsSUFBRSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBT0QsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsa0JBQ2xELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUM7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9wb3Zlck9wdGlvbnNGYWN0b3J5KHVzZXJPcHRpb25zOiBQb3BvdmVyT3B0aW9ucyk6IFBvcG92ZXJPcHRpb25zIHtcbiAgY29uc3Qgb3B0aW9uczogUG9wb3Zlck9wdGlvbnMgPSBuZXcgUG9wb3Zlck9wdGlvbnMoKTtcbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQb3BvdmVyRGlyZWN0aXZlLCBQb3BvdmVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtQb3BvdmVyRGlyZWN0aXZlLCBQb3BvdmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyTW9kdWxlIHt9XG4iXX0=