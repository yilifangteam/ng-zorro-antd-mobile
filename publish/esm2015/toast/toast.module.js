import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { IconModule } from '../icon/icon.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import * as ɵngcc0 from '@angular/core';
export class ToastModule {
}
ToastModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastModule });
ToastModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastModule_Factory(t) { return new (t || ToastModule)(); }, providers: [ToastService], imports: [[CommonModule, IconModule, WingBlankModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastModule, { declarations: function () { return [ToastComponent]; }, imports: function () { return [CommonModule, IconModule, WingBlankModule]; }, exports: function () { return [ToastComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToastModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, IconModule, WingBlankModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                providers: [ToastService]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBUWxFLE1BQU0sT0FBTyxXQUFXO0FBQUc7dUNBTjFCLFFBQVEsU0FBQztPQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLGtCQUNwRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFDOUIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQzFCOzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFdpbmdCbGFua01vZHVsZSB9IGZyb20gJy4uL3dpbmctYmxhbmsvd2luZy1ibGFuay5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJY29uTW9kdWxlLCBXaW5nQmxhbmtNb2R1bGVdLFxuICBleHBvcnRzOiBbVG9hc3RDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1RvYXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUge31cbiJdfQ==