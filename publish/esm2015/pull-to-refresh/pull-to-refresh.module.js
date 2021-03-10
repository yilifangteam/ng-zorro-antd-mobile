import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullToRefreshComponent } from './pull-to-refresh.component';
import { IconModule } from '../icon/icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export class PullToRefreshModule {
}
PullToRefreshModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PullToRefreshModule });
PullToRefreshModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PullToRefreshModule_Factory(t) { return new (t || PullToRefreshModule)(); }, imports: [[CommonModule, IconModule, FormsModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PullToRefreshModule, { declarations: function () { return [PullToRefreshComponent]; }, imports: function () { return [CommonModule, IconModule, FormsModule, ReactiveFormsModule]; }, exports: function () { return [PullToRefreshComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PullToRefreshModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
                exports: [PullToRefreshComponent],
                declarations: [PullToRefreshComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsbC10by1yZWZyZXNoLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9wdWxsLXRvLXJlZnJlc2gvcHVsbC10by1yZWZyZXNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU9sRSxNQUFNLE9BQU8sbUJBQW1CO0FBQUc7K0NBTGxDLFFBQVEsU0FBQyxrQkFDUjtNQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxrQkFDckUsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsa0JBQ2pDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLGNBQ3ZDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHVsbFRvUmVmcmVzaENvbXBvbmVudCB9IGZyb20gJy4vcHVsbC10by1yZWZyZXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbUHVsbFRvUmVmcmVzaENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1B1bGxUb1JlZnJlc2hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFB1bGxUb1JlZnJlc2hNb2R1bGUge31cbiJdfQ==