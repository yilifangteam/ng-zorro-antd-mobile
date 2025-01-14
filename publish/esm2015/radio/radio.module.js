import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { ListModule } from '../list/list.module';
import { RadioItemGroupComponent } from './radio-item-group.component';
import { RadioItemComponent } from './radio-item.component';
import { CommonModule } from '@angular/common';
export class RadioModule {
}
RadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ListModule],
                declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
                exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJyYWRpby9yYWRpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsTUFBTSxPQUFPLFdBQVc7OztZQUx2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7Z0JBQ2hELFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQztnQkFDM0UsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDO2FBQ3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBSYWRpb0l0ZW1Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8taXRlbS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1JhZGlvQ29tcG9uZW50LCBSYWRpb0l0ZW1Db21wb25lbnQsIFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JhZGlvQ29tcG9uZW50LCBSYWRpb0l0ZW1Db21wb25lbnQsIFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb01vZHVsZSB7fVxuIl19