import { ContentChildren, Component, QueryList, Input, forwardRef, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';
import { AccordionService } from './accordion.service';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
export class AccordionComponent {
    constructor(_accordionService) {
        this._accordionService = _accordionService;
        this.isFirstChange = true;
        this.expandAll = false;
        this.openAnimation = {};
        this.accordion = false;
        this.onChange = new EventEmitter();
        this.amAccordion = true;
        this._accordionService.getComponent(this);
    }
    click() {
        let result = [];
        this.groups.toArray().forEach(group => {
            if (group.isOpened) {
                if (this.accordion) {
                    result = group.key;
                }
                else {
                    result.push(group.key);
                }
            }
        });
        this.onChange.emit(result);
    }
    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }
    init() {
        if (this.expandAll && this.groups && this.groups.length > 0) {
            this._oldGroups = this.groups.toArray();
            this._oldGroups.forEach(group => {
                group.openOnInitialization();
            });
            this._subscription = this.groups.changes.subscribe(change => {
                const newGroups = this.groups.toArray().filter(group => {
                    return this._oldGroups.indexOf(group) === -1;
                });
                newGroups.forEach(group => {
                    group.openOnInitialization();
                });
                this._oldGroups = this.groups.toArray();
            });
        }
        let currentActiveKey = [];
        if (this.activeKey && this.activeKey.length > 0) {
            currentActiveKey = this.toArray(this.activeKey);
            if (this.accordion) {
                currentActiveKey = currentActiveKey.slice(0, 1);
            }
        }
        else if (this.defaultActiveKey) {
            currentActiveKey = [this.defaultActiveKey];
        }
        if (this.groups && this.groups.length > 0) {
            this.groups.forEach((group, index) => {
                currentActiveKey.forEach(key => {
                    if (index === parseInt(key, 0)) {
                        setTimeout(() => {
                            group.isOpened = true;
                            group.openOnInitialization();
                        }, 0);
                    }
                });
            });
        }
    }
    toArray(activeKey) {
        let currentActiveKey = activeKey;
        if (!Array.isArray(currentActiveKey)) {
            currentActiveKey = currentActiveKey !== undefined && currentActiveKey !== '' ? [currentActiveKey] : [];
        }
        return currentActiveKey;
    }
    ngOnChanges(changes) {
        if (changes.accordion) {
            this._accordionService.getComponent(this);
        }
        if (changes.expandAll || changes.accordion) {
            this.init();
        }
    }
    ngAfterContentInit() {
        if (this.groups && this.groups.length > 0) {
            this.init();
        }
        else {
            this.groupsSubscription = this.groups.changes.subscribe(group => {
                if (this.isFirstChange) {
                    this.init();
                }
                this.isFirstChange = false;
            });
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this.groupsSubscription) {
            this.groupsSubscription.unsubscribe();
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'Accordion, nzm-accordion',
                template: "<ng-content></ng-content>\n",
                providers: [AccordionService]
            },] }
];
AccordionComponent.ctorParameters = () => [
    { type: AccordionService }
];
AccordionComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [forwardRef(() => AccordionGroupComponent),] }],
    expandAll: [{ type: Input }],
    activeKey: [{ type: Input }],
    defaultActiveKey: [{ type: Input }],
    openAnimation: [{ type: Input }],
    accordion: [{ type: Input }],
    onChange: [{ type: Output }],
    amAccordion: [{ type: HostBinding, args: ['class.am-accordion',] }],
    click: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBR1YsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBR1osV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBUXRGLE1BQU0sT0FBTyxrQkFBa0I7SUF3QzdCLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBcEMvQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQU10QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBTWxCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFrQjFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWhCRCxLQUFLO1FBQ0gsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNyRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLGdCQUFnQixHQUFlLEVBQUUsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqRDtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ25DLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTt3QkFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTs0QkFDZCxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDdEIsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7d0JBQy9CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDUDtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQVM7UUFDZixJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3BDLGdCQUFnQixHQUFHLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxnQkFBZ0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ3hHO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO2dCQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBcklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyx1Q0FBeUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzlCOzs7WUFSUSxnQkFBZ0I7OztxQkFldEIsZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFHekQsS0FBSzt3QkFFTCxLQUFLOytCQUVMLEtBQUs7NEJBRUwsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLE1BQU07MEJBR04sV0FBVyxTQUFDLG9CQUFvQjtvQkFHaEMsWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgUXVlcnlMaXN0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0TGlzdGVuZXIsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBY2NvcmRpb24sIG56bS1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQWNjb3JkaW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9vbGRHcm91cHM6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50W107XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGdyb3Vwc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGlzRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb25Hcm91cENvbXBvbmVudCkpXG4gIGdyb3VwczogUXVlcnlMaXN0PEFjY29yZGlvbkdyb3VwQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBleHBhbmRBbGwgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYWN0aXZlS2V5OiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBkZWZhdWx0QWN0aXZlS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wZW5BbmltYXRpb24gPSB7fTtcbiAgQElucHV0KClcbiAgYWNjb3JkaW9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYWNjb3JkaW9uJylcbiAgYW1BY2NvcmRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2soKSB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gW107XG4gICAgdGhpcy5ncm91cHMudG9BcnJheSgpLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgaWYgKGdyb3VwLmlzT3BlbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLmFjY29yZGlvbikge1xuICAgICAgICAgIHJlc3VsdCA9IGdyb3VwLmtleTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChncm91cC5rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHJlc3VsdCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY2NvcmRpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYWNjb3JkaW9uU2VydmljZS5nZXRDb21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLmdyb3Vwcy50b0FycmF5KCkuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBncm91cC5pc09wZW5lZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5leHBhbmRBbGwgJiYgdGhpcy5ncm91cHMgJiYgdGhpcy5ncm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fb2xkR3JvdXBzID0gdGhpcy5ncm91cHMudG9BcnJheSgpO1xuICAgICAgdGhpcy5fb2xkR3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBncm91cC5vcGVuT25Jbml0aWFsaXphdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmdyb3Vwcy5jaGFuZ2VzLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgICBjb25zdCBuZXdHcm91cHMgPSB0aGlzLmdyb3Vwcy50b0FycmF5KCkuZmlsdGVyKGdyb3VwID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb2xkR3JvdXBzLmluZGV4T2YoZ3JvdXApID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICBncm91cC5vcGVuT25Jbml0aWFsaXphdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2xkR3JvdXBzID0gdGhpcy5ncm91cHMudG9BcnJheSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRBY3RpdmVLZXk6IEFycmF5PGFueT4gPSBbXTtcbiAgICBpZiAodGhpcy5hY3RpdmVLZXkgJiYgdGhpcy5hY3RpdmVLZXkubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEFjdGl2ZUtleSA9IHRoaXMudG9BcnJheSh0aGlzLmFjdGl2ZUtleSk7XG4gICAgICBpZiAodGhpcy5hY2NvcmRpb24pIHtcbiAgICAgICAgY3VycmVudEFjdGl2ZUtleSA9IGN1cnJlbnRBY3RpdmVLZXkuc2xpY2UoMCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRBY3RpdmVLZXkpIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVLZXkgPSBbdGhpcy5kZWZhdWx0QWN0aXZlS2V5XTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JvdXBzICYmIHRoaXMuZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICBjdXJyZW50QWN0aXZlS2V5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHBhcnNlSW50KGtleSwgMCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBncm91cC5pc09wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdyb3VwLm9wZW5PbkluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9BcnJheShhY3RpdmVLZXkpIHtcbiAgICBsZXQgY3VycmVudEFjdGl2ZUtleSA9IGFjdGl2ZUtleTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3VycmVudEFjdGl2ZUtleSkpIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVLZXkgPSBjdXJyZW50QWN0aXZlS2V5ICE9PSB1bmRlZmluZWQgJiYgY3VycmVudEFjdGl2ZUtleSAhPT0gJycgPyBbY3VycmVudEFjdGl2ZUtleV0gOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRBY3RpdmVLZXk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuYWNjb3JkaW9uKSB7XG4gICAgICB0aGlzLl9hY2NvcmRpb25TZXJ2aWNlLmdldENvbXBvbmVudCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5leHBhbmRBbGwgfHwgY2hhbmdlcy5hY2NvcmRpb24pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5ncm91cHMgJiYgdGhpcy5ncm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JvdXBzU3Vic2NyaXB0aW9uID0gdGhpcy5ncm91cHMuY2hhbmdlcy5zdWJzY3JpYmUoZ3JvdXAgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2hhbmdlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JvdXBzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmdyb3Vwc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19