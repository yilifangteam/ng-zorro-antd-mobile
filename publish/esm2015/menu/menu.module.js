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
export class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0I3QyxNQUFNLE9BQU8sVUFBVTs7O1lBZHRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxjQUFjO29CQUNkLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDMUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TW9kdWxlIH0gZnJvbSAnLi4vZmxleC9mbGV4Lm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBSYWRpb01vZHVsZSB9IGZyb20gJy4uL3JhZGlvL3JhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdWItbWVudS9zdWItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGbGV4TW9kdWxlLFxuICAgIExpc3RNb2R1bGUsXG4gICAgUmFkaW9Nb2R1bGUsXG4gICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIExvY2FsZVByb3ZpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtNZW51Q29tcG9uZW50LCBTdWJNZW51Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTWVudUNvbXBvbmVudCwgU3ViTWVudUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudU1vZHVsZSB7fVxuIl19