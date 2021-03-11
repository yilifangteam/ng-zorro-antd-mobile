import { Component, Input, Output, ContentChildren, QueryList, HostBinding, EventEmitter } from '@angular/core';
import { TabBarItemComponent } from './tab-bar-item.component';
export class TabBarComponent {
    constructor() {
        this.prefixCls = 'am-tab-bar';
        this._activeTab = 0;
        this._tintColor = '#108ee9';
        this._unselectedTintColor = '#888';
        this.hidden = false;
        this.prerenderingSiblingsNumber = -1;
        this.barTintColor = 'white';
        this.tabBarPosition = 'bottom';
        this.onPress = new EventEmitter();
        this.tabBar = true;
    }
    get activeTab() {
        return this._activeTab;
    }
    set activeTab(tab) {
        this._activeTab = tab;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.selectTabBarItem(tab);
        }
    }
    get tintColor() {
        return this._tintColor;
    }
    set tintColor(color) {
        this._tintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
            });
        }
    }
    get unselectedTintColor() {
        return this._unselectedTintColor;
    }
    set unselectedTintColor(color) {
        this._unselectedTintColor = color;
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
    }
    selectTabBarItem(index) {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.selected = false;
            });
            this.tabBarItems.toArray()[index].selected = true;
        }
    }
    tabBarTabOnPress(pressParam) {
        this.onPress.emit(pressParam);
    }
    ngAfterContentInit() {
        if (this.tabBarItems && this.tabBarItems.length > 0) {
            this.tabBarItems.forEach((tabBarItem) => {
                tabBarItem.tintColor = this._tintColor;
                tabBarItem.unselectedTintColor = this._unselectedTintColor;
            });
        }
        this.selectTabBarItem(this.activeTab);
    }
}
TabBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'TabBar, nzm-tab-bar',
                template: "<Tabs\n  [animated]=\"false\"\n  [useOnPan]=\"false\"\n  [swipeable]=\"false\"\n  [activeTab]=\"activeTab\"\n  [renderTabBar]=\"TabBarBar\"\n  [tabDirection]=\"'horizontal'\"\n  [tabPanesContent]=\"tabBarItems\"\n  [tabBarPosition]=\"tabBarPosition\"\n  [prerenderingSiblingsNumber]=\"prerenderingSiblingsNumber\"\n></Tabs>\n\n<ng-template #TabBarBar>\n  <div class=\"am-tabs-tab-bar-wrap\">\n    <div\n      class=\"{{ prefixCls }}-bar\"\n      [ngClass]=\"{\n        'am-tab-bar-bar-hidden-top': 'top' === tabBarPosition && hidden,\n        'am-tab-bar-bar-hidden-bottom': 'bottom' === tabBarPosition && hidden\n      }\"\n      [style.background-color]=\"barTintColor\"\n    >\n      <div\n        class=\"am-tab-bar-tab\"\n        *ngFor=\"let tabBarItem of tabBarItems; let i = index\"\n        (click)=\"tabBarTabOnPress({ index: i, key: tabBarItem.key, title: tabBarItem.title })\"\n      >\n        <ng-container [ngTemplateOutlet]=\"tabBarItem.tabBarTab\"></ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
            },] }
];
TabBarComponent.ctorParameters = () => [];
TabBarComponent.propDecorators = {
    tabBarItems: [{ type: ContentChildren, args: [TabBarItemComponent, { descendants: true },] }],
    hidden: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    activeTab: [{ type: Input }],
    barTintColor: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tintColor: [{ type: Input }],
    unselectedTintColor: [{ type: Input }],
    onPress: [{ type: Output }],
    tabBar: [{ type: HostBinding, args: ['class.am-tab-bar',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRhYi1iYXIvdGFiLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLGVBQWUsRUFDZixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWEvRCxNQUFNLE9BQU8sZUFBZTtJQXlEMUI7UUF4REEsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUN6QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFDL0IseUJBQW9CLEdBQVcsTUFBTSxDQUFDO1FBTTlDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsK0JBQTBCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFZeEMsaUJBQVksR0FBVyxPQUFPLENBQUM7UUFFL0IsbUJBQWMsR0FBMEIsUUFBUSxDQUFDO1FBMEJqRCxZQUFPLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FBR25GLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFFUixDQUFDO0lBNUNoQixJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBS0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUErQixFQUFFLEVBQUU7Z0JBQzNELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELElBQ0ksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBK0IsRUFBRSxFQUFFO2dCQUMzRCxVQUFVLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBU0QsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBK0IsRUFBRSxFQUFFO2dCQUMzRCxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUE4QjtRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUErQixFQUFFLEVBQUU7Z0JBQzNELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHNoQ0FBdUM7YUFDeEM7Ozs7MEJBT0UsZUFBZSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtxQkFHMUQsS0FBSzt5Q0FFTCxLQUFLO3dCQUVMLEtBQUs7MkJBVUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7a0NBWUwsS0FBSztzQkFZTCxNQUFNO3FCQUdOLFdBQVcsU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBIb3N0QmluZGluZyxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiQmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWJhci1pdGVtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIFRhYkJhclRhYlBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbSc7XG5leHBvcnQgaW50ZXJmYWNlIFRhYkJhck9uUHJlc3NFdmVudCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUYWJCYXIsIG56bS10YWItYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1iYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS10YWItYmFyJztcbiAgcHJpdmF0ZSBfYWN0aXZlVGFiOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90aW50Q29sb3I6IHN0cmluZyA9ICcjMTA4ZWU5JztcbiAgcHJpdmF0ZSBfdW5zZWxlY3RlZFRpbnRDb2xvcjogc3RyaW5nID0gJyM4ODgnO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQmFySXRlbUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICB0YWJCYXJJdGVtczogUXVlcnlMaXN0PFRhYkJhckl0ZW1Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwcmVyZW5kZXJpbmdTaWJsaW5nc051bWJlcjogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVUYWIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFiO1xuICB9XG4gIHNldCBhY3RpdmVUYWIodGFiOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hY3RpdmVUYWIgPSB0YWI7XG4gICAgaWYgKHRoaXMudGFiQmFySXRlbXMgJiYgdGhpcy50YWJCYXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFRhYkJhckl0ZW0odGFiKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgYmFyVGludENvbG9yOiBzdHJpbmcgPSAnd2hpdGUnO1xuICBASW5wdXQoKVxuICB0YWJCYXJQb3NpdGlvbjogVGFiQmFyVGFiUG9zaXRpb25UeXBlID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpXG4gIGdldCB0aW50Q29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGludENvbG9yO1xuICB9XG4gIHNldCB0aW50Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbnRDb2xvciA9IGNvbG9yO1xuICAgIGlmICh0aGlzLnRhYkJhckl0ZW1zICYmIHRoaXMudGFiQmFySXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50YWJCYXJJdGVtcy5mb3JFYWNoKCh0YWJCYXJJdGVtOiBUYWJCYXJJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRhYkJhckl0ZW0udGludENvbG9yID0gdGhpcy5fdGludENvbG9yO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB1bnNlbGVjdGVkVGludENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Vuc2VsZWN0ZWRUaW50Q29sb3I7XG4gIH1cbiAgc2V0IHVuc2VsZWN0ZWRUaW50Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3Vuc2VsZWN0ZWRUaW50Q29sb3IgPSBjb2xvcjtcbiAgICBpZiAodGhpcy50YWJCYXJJdGVtcyAmJiB0aGlzLnRhYkJhckl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudGFiQmFySXRlbXMuZm9yRWFjaCgodGFiQmFySXRlbTogVGFiQmFySXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgICB0YWJCYXJJdGVtLnVuc2VsZWN0ZWRUaW50Q29sb3IgPSB0aGlzLl91bnNlbGVjdGVkVGludENvbG9yO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKVxuICBvblByZXNzOiBFdmVudEVtaXR0ZXI8VGFiQmFyT25QcmVzc0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiQmFyT25QcmVzc0V2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGFiLWJhcicpXG4gIHRhYkJhcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNlbGVjdFRhYkJhckl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYkJhckl0ZW1zICYmIHRoaXMudGFiQmFySXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50YWJCYXJJdGVtcy5mb3JFYWNoKCh0YWJCYXJJdGVtOiBUYWJCYXJJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRhYkJhckl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YWJCYXJJdGVtcy50b0FycmF5KClbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0YWJCYXJUYWJPblByZXNzKHByZXNzUGFyYW06IFRhYkJhck9uUHJlc3NFdmVudCkge1xuICAgIHRoaXMub25QcmVzcy5lbWl0KHByZXNzUGFyYW0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLnRhYkJhckl0ZW1zICYmIHRoaXMudGFiQmFySXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50YWJCYXJJdGVtcy5mb3JFYWNoKCh0YWJCYXJJdGVtOiBUYWJCYXJJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRhYkJhckl0ZW0udGludENvbG9yID0gdGhpcy5fdGludENvbG9yO1xuICAgICAgICB0YWJCYXJJdGVtLnVuc2VsZWN0ZWRUaW50Q29sb3IgPSB0aGlzLl91bnNlbGVjdGVkVGludENvbG9yO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0VGFiQmFySXRlbSh0aGlzLmFjdGl2ZVRhYik7XG4gIH1cbn1cbiJdfQ==