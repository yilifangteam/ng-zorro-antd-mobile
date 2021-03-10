import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FlexModule } from '../flex/flex.module';
import { CarouselModule } from '../carousel/carousel.module';
import { IconModule } from '../icon/icon.module';
import { TouchFeedbackModule } from '../core/directive/touch-feedback.module';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';
import * as ɵngcc0 from '@angular/core';
export class GridModule {
}
GridModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GridModule });
GridModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GridModule, { declarations: function () { return [GridComponent]; }, imports: function () { return [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule]; }, exports: function () { return [GridComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GridModule, [{
        type: NgModule,
        args: [{
                imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
                exports: [GridComponent],
                declarations: [GridComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBTTFGLE1BQU0sT0FBTyxVQUFVO0FBQUc7c0NBTHpCLFFBQVEsU0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsQ0FBQyxrQkFDbEgsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FDOUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGbGV4TW9kdWxlIH0gZnJvbSAnLi4vZmxleC9mbGV4Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4uL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBUb3VjaEZlZWRiYWNrTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9kaXJlY3RpdmUvdG91Y2gtZmVlZGJhY2subW9kdWxlJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9iaWxlUGlwZXNNb2R1bGUgfSBmcm9tICcuLi9waXBlcy9uZy16b3Jyby1hbnRkLW1vYmlsZS5waXBlcy5tb2R1bGUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0ZsZXhNb2R1bGUsIEljb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgQ2Fyb3VzZWxNb2R1bGUsIFRvdWNoRmVlZGJhY2tNb2R1bGUsIE5nWm9ycm9BbnRkTW9iaWxlUGlwZXNNb2R1bGVdLFxuICBleHBvcnRzOiBbR3JpZENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0dyaWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRNb2R1bGUge31cbiJdfQ==