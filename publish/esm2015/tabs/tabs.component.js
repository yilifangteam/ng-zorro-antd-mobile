import { Component, Input, Output, QueryList, ViewChild, ElementRef, HostBinding, TemplateRef, EventEmitter, ContentChildren, ViewEncapsulation } from '@angular/core';
import { TabPaneComponent } from './tab-pane.component';
export class TabsComponent {
    constructor() {
        this.prefixCls = 'am-tabs';
        this.selectedKey = 0;
        this.keyToSelect = 0;
        this.paneMoveStyle = 'translate3d(0, 0, 0)';
        this._startTime = 0;
        this._startPosition = 0;
        this._velocityThreshold = 0.3;
        this._tabDirection = 'horizontal';
        this._tabBarPosition = 'top';
        this.page = 5;
        this.swipeable = true;
        this.useOnPan = true;
        this.animated = true;
        this.distanceToChangeTab = 0.3;
        this.tabTitleSize = 0;
        this.tabBarActiveTextColor = '';
        this.tabBarInactiveTextColor = '';
        this.renderTabBar = null;
        this.tabBarBackgroundColor = '#FFF';
        this.prerenderingSiblingsNumber = -1;
        this.tabBarTextStyle = {};
        /** should be removed when https://github.com/angular/angular/issues/20810 resolved **/
        this.tabPanesContent = null;
        this.onChange = new EventEmitter();
        this.onTabClick = new EventEmitter();
        this.amTabs = true;
        this.amTabsTop = true;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        this.amTabsVertical = false;
        this.amTabsHorizontal = true;
    }
    get activeTab() {
        return this.selectedKey;
    }
    set activeTab(value) {
        this.keyToSelect = value;
    }
    get tabBarPosition() {
        return this._tabBarPosition;
    }
    set tabBarPosition(position) {
        this._tabBarPosition = position;
        switch (position) {
            case 'top':
                this.amTabsTop = true;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'left':
                this.amTabsTop = false;
                this.amTabsLeft = true;
                this.amTabsRight = false;
                this.amTabsBottom = false;
                break;
            case 'bottom':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = false;
                this.amTabsBottom = true;
                break;
            case 'right':
                this.amTabsTop = false;
                this.amTabsLeft = false;
                this.amTabsRight = true;
                this.amTabsBottom = false;
                break;
            default:
                break;
        }
    }
    get tabDirection() {
        return this._tabDirection;
    }
    set tabDirection(direction) {
        this._tabDirection = direction;
        switch (direction) {
            case 'horizontal':
                this.amTabsHorizontal = true;
                this.amTabsVertical = false;
                break;
            case 'vertical':
                this.amTabsHorizontal = false;
                this.amTabsVertical = true;
                break;
            default:
                break;
        }
    }
    clickTab(index) {
        if (this.selectedKey !== index) {
            this.keyToSelect = index;
            this.onTabClick.emit({ index: this.keyToSelect });
        }
    }
    getCurrentTabPanes() {
        return this.tabPanesContent || this.tabPanes;
    }
    onTouchStart(event) {
        this._startTime = event.timeStamp;
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            }
            else if ('vertical' === this._tabDirection) {
                this._startPosition =
                    event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
            }
        }
    }
    onTouchMove(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                // velocity 小于阈值才认为是pan操作
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px), 0, 0 )';
                }
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
                    return;
                }
                else if (distance > 0 && this.activeTab === 0) {
                    return;
                }
                if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    this.useOnPan &&
                    this.swipeable &&
                    this.animated) {
                    this.paneMoveStyle = 'translate3d(0, calc(-' + this.selectedKey * 100 + '% + ' + distance + 'px, 0 )';
                }
            }
        }
    }
    onTouchEnd(event) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            if ('horizontal' === this._tabDirection) {
                const distance = event.changedTouches[0].clientX - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(-' + this.selectedKey * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                const distance = event.changedTouches[0].clientY - this._startPosition;
                const distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
                if ((this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold &&
                    (this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx)) ||
                    (this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold &&
                        (this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2))) {
                    if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
                        this.keyToSelect++;
                    }
                    else if (distance > 0 && this.activeTab > 0) {
                        this.keyToSelect--;
                    }
                }
                this.paneMoveStyle = 'translate3d(0, -' + this.selectedKey * 100 + '%, 0 )';
            }
        }
    }
    ngAfterContentInit() {
        this.selectTabPane(this.keyToSelect);
        this.selectedKey = this.keyToSelect;
    }
    ngDoCheck() {
        if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            this.selectTabPane(this.keyToSelect);
            this.selectedKey = this.keyToSelect;
            this.onChange.emit({ index: this.selectedKey });
        }
    }
    selectTabPane(index) {
        if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
            const actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
            if ('horizontal' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(-' + actualKeyToSelect * 100 + '%, 0, 0 )';
            }
            else if ('vertical' === this._tabDirection) {
                this.paneMoveStyle = 'translate3d(0, -' + actualKeyToSelect * 100 + '%, 0 )';
            }
        }
    }
    getVelocity(deltaDistance, deltaTime) {
        return Math.abs(deltaDistance / deltaTime);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'Tabs, nzm-tabs',
                template: "<ng-container>\n  <ng-template\n    *ngIf=\"'top' === tabBarPosition || 'left' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  >\n  </ng-template>\n  <div\n    #TabContent\n    class=\"{{ prefixCls }}-content-wrap\"\n    [ngClass]=\"{ 'am-tabs-content-wrap-animated': animated }\"\n    [ngStyle]=\"{ transform: paneMoveStyle, webkitTransform: paneMoveStyle }\"\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <div\n      tab-pane-body\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      [content]=\"tabPane.content\"\n      [active]=\"i === selectedKey\"\n      [prerender]=\"\n        prerenderingSiblingsNumber < 0 ||\n        (selectedKey - i <= prerenderingSiblingsNumber && selectedKey - i + prerenderingSiblingsNumber >= 0)\n      \"\n    ></div>\n  </div>\n  <ng-template\n    *ngIf=\"'bottom' === tabBarPosition || 'right' === tabBarPosition\"\n    [ngTemplateOutlet]=\"renderTabBar || renderDefaultTabBar\"\n  ></ng-template>\n</ng-container>\n\n<ng-template #renderDefaultTabBar>\n  <DefaultTabBar\n    #DefaultTabBar\n    [page]=\"page\"\n    [animated]=\"animated\"\n    [activeTab]=\"selectedKey\"\n    [tabTitleSize]=\"tabTitleSize\"\n    [tabBarPosition]=\"tabBarPosition\"\n    [tabBarUnderlineStyle]=\"tabBarUnderlineStyle\"\n    [tabBarBackgroundColor]=\"tabBarBackgroundColor\"\n  >\n    <div\n      #TabTitle\n      *ngFor=\"let tabPane of getCurrentTabPanes(); let i = index\"\n      class=\"{{ prefixCls }}-default-bar-tab\"\n      [ngClass]=\"{\n        'am-tabs-default-bar-tab-active': i === selectedKey,\n        'am-tabs-default-bar-tab-disabled': tabPane.disabled\n      }\"\n      [ngStyle]=\"tabBarTextStyle\"\n      [style.color]=\"i === selectedKey ? tabBarActiveTextColor : tabBarInactiveTextColor\"\n      (click)=\"clickTab(i)\"\n    >\n      <ng-container *ngIf=\"tabPane.isTitleString; else titleTemplate\">\n        {{ tabPane.title }}\n      </ng-container>\n      <ng-template #titleTemplate>\n        <ng-template [ngTemplateOutlet]=\"tabPane.title\"></ng-template>\n      </ng-template>\n    </div>\n  </DefaultTabBar>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
TabsComponent.ctorParameters = () => [];
TabsComponent.propDecorators = {
    tabPanes: [{ type: ContentChildren, args: [TabPaneComponent, { descendants: false },] }],
    tabContent: [{ type: ViewChild, args: ['TabContent', { static: true },] }],
    defaultTabBar: [{ type: ViewChild, args: ['DefaultTabBar',] }],
    page: [{ type: Input }],
    swipeable: [{ type: Input }],
    useOnPan: [{ type: Input }],
    animated: [{ type: Input }],
    tabBarUnderlineStyle: [{ type: Input }],
    distanceToChangeTab: [{ type: Input }],
    tabTitleSize: [{ type: Input }],
    tabBarActiveTextColor: [{ type: Input }],
    tabBarInactiveTextColor: [{ type: Input }],
    renderTabBar: [{ type: Input }],
    tabBarBackgroundColor: [{ type: Input }],
    prerenderingSiblingsNumber: [{ type: Input }],
    tabBarTextStyle: [{ type: Input }],
    tabPanesContent: [{ type: Input }],
    activeTab: [{ type: Input }],
    tabBarPosition: [{ type: Input }],
    tabDirection: [{ type: Input }],
    onChange: [{ type: Output }],
    onTabClick: [{ type: Output }],
    amTabs: [{ type: HostBinding, args: ['class.am-tabs',] }],
    amTabsTop: [{ type: HostBinding, args: ['class.am-tabs-top',] }],
    amTabsLeft: [{ type: HostBinding, args: ['class.am-tabs-left',] }],
    amTabsRight: [{ type: HostBinding, args: ['class.am-tabs-right',] }],
    amTabsBottom: [{ type: HostBinding, args: ['class.am-tabs-bottom',] }],
    amTabsVertical: [{ type: HostBinding, args: ['class.am-tabs-vertical',] }],
    amTabsHorizontal: [{ type: HostBinding, args: ['class.am-tabs-horizontal',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxFQUNaLGVBQWUsRUFDZixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFReEQsTUFBTSxPQUFPLGFBQWE7SUFrSXhCO1FBaklBLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFDOUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxzQkFBc0IsQ0FBQztRQUV2QyxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUNqQyxrQkFBYSxHQUFpQixZQUFZLENBQUM7UUFDM0Msb0JBQWUsR0FBdUIsS0FBSyxDQUFDO1FBV3BELFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFJekIsd0JBQW1CLEdBQVcsR0FBRyxDQUFDO1FBRWxDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQUVuQyw0QkFBdUIsR0FBVyxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBRXZDLDBCQUFxQixHQUFXLE1BQU0sQ0FBQztRQUV2QywrQkFBMEIsR0FBVyxDQUFDLENBQUMsQ0FBQztR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QUVMLEtBQUs7dUJBRUwsS0FBSzttQ0FFTCxLQUFLO2tDQUVMLEtBQUs7MkJBRUwsS0FBSztvQ0FFTCxLQUFLO3NDQUVMLEtBQUs7MkJBRUwsS0FBSztvQ0FFTCxLQUFLO3lDQUVMLEtBQUs7OEJBRUwsS0FBSzs4QkFHTCxLQUFLO3dCQUVMLEtBQUs7NkJBT0wsS0FBSzsyQkFtQ0wsS0FBSzt1QkFtQkwsTUFBTTt5QkFFTixNQUFNO3FCQUdOLFdBQVcsU0FBQyxlQUFlO3dCQUUzQixXQUFXLFNBQUMsbUJBQW1CO3lCQUUvQixXQUFXLFNBQUMsb0JBQW9COzBCQUVoQyxXQUFXLFNBQUMscUJBQXFCOzJCQUVqQyxXQUFXLFNBQUMsc0JBQXNCOzZCQUVsQyxXQUFXLFNBQUMsd0JBQXdCOytCQUVwQyxXQUFXLFNBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEb0NoZWNrLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiRGlyZWN0aW9uLCBUYWJCYXJQb3NpdGlvblR5cGUsIFRhYnNPbkNoYW5nZUV2ZW50IH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUYWJzLCBuem0tdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXRhYnMnO1xuICBzZWxlY3RlZEtleTogbnVtYmVyID0gMDtcbiAga2V5VG9TZWxlY3Q6IG51bWJlciA9IDA7XG4gIHBhbmVNb3ZlU3R5bGU6IHN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSc7XG5cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zdGFydFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF92ZWxvY2l0eVRocmVzaG9sZDogbnVtYmVyID0gMC4zO1xuICBwcml2YXRlIF90YWJEaXJlY3Rpb246IFRhYkRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgcHJpdmF0ZSBfdGFiQmFyUG9zaXRpb246IFRhYkJhclBvc2l0aW9uVHlwZSA9ICd0b3AnO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiUGFuZUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgdGFiUGFuZXM6IFF1ZXJ5TGlzdDxUYWJQYW5lQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKCdUYWJDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgdGFiQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnRGVmYXVsdFRhYkJhcicpXG4gIGRlZmF1bHRUYWJCYXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcGFnZTogbnVtYmVyID0gNTtcbiAgQElucHV0KClcbiAgc3dpcGVhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgdXNlT25QYW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhbmltYXRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHRhYkJhclVuZGVybGluZVN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpXG4gIGRpc3RhbmNlVG9DaGFuZ2VUYWI6IG51bWJlciA9IDAuMztcbiAgQElucHV0KClcbiAgdGFiVGl0bGVTaXplOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICB0YWJCYXJBY3RpdmVUZXh0Q29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICB0YWJCYXJJbmFjdGl2ZVRleHRDb2xvcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIHJlbmRlclRhYkJhcjogVGVtcGxhdGVSZWY8dm9pZD4gPSBudWxsO1xuICBASW5wdXQoKVxuICB0YWJCYXJCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcjRkZGJztcbiAgQElucHV0KClcbiAgcHJlcmVuZGVyaW5nU2libGluZ3NOdW1iZXI6IG51bWJlciA9IC0xO1xuICBASW5wdXQoKVxuICB0YWJCYXJUZXh0U3R5bGU6IG9iamVjdCA9IHt9O1xuICAvKiogc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDgxMCByZXNvbHZlZCAqKi9cbiAgQElucHV0KClcbiAgdGFiUGFuZXNDb250ZW50OiBRdWVyeUxpc3Q8VGFiUGFuZUNvbXBvbmVudD4gPSBudWxsO1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlVGFiKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRLZXk7XG4gIH1cbiAgc2V0IGFjdGl2ZVRhYih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5rZXlUb1NlbGVjdCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCB0YWJCYXJQb3NpdGlvbigpOiBUYWJCYXJQb3NpdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl90YWJCYXJQb3NpdGlvbjtcbiAgfVxuICBzZXQgdGFiQmFyUG9zaXRpb24ocG9zaXRpb246IFRhYkJhclBvc2l0aW9uVHlwZSkge1xuICAgIHRoaXMuX3RhYkJhclBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdGhpcy5hbVRhYnNUb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmFtVGFic0xlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNSaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmFtVGFic1RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic0xlZnQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFtVGFic1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzQm90dG9tID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGhpcy5hbVRhYnNUb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNCb3R0b20gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5hbVRhYnNUb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbVRhYnNMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW1UYWJzUmlnaHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFtVGFic0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdGFiRGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YWJEaXJlY3Rpb247XG4gIH1cbiAgc2V0IHRhYkRpcmVjdGlvbihkaXJlY3Rpb246IFRhYkRpcmVjdGlvbikge1xuICAgIHRoaXMuX3RhYkRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHRoaXMuYW1UYWJzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuYW1UYWJzVmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIHRoaXMuYW1UYWJzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFtVGFic1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFic09uQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJzT25DaGFuZ2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9uVGFiQ2xpY2s6IEV2ZW50RW1pdHRlcjxUYWJzT25DaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYnNPbkNoYW5nZUV2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGFicycpXG4gIGFtVGFiczogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tdGFicy10b3AnKVxuICBhbVRhYnNUb3A6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtbGVmdCcpXG4gIGFtVGFic0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWJzLXJpZ2h0JylcbiAgYW1UYWJzUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS10YWJzLWJvdHRvbScpXG4gIGFtVGFic0JvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtdmVydGljYWwnKVxuICBhbVRhYnNWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXRhYnMtaG9yaXpvbnRhbCcpXG4gIGFtVGFic0hvcml6b250YWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBjbGlja1RhYihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRLZXkgIT09IGluZGV4KSB7XG4gICAgICB0aGlzLmtleVRvU2VsZWN0ID0gaW5kZXg7XG4gICAgICB0aGlzLm9uVGFiQ2xpY2suZW1pdCh7IGluZGV4OiB0aGlzLmtleVRvU2VsZWN0IH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRUYWJQYW5lcygpOiBRdWVyeUxpc3Q8VGFiUGFuZUNvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLnRhYlBhbmVzQ29udGVudCB8fCB0aGlzLnRhYlBhbmVzO1xuICB9XG5cbiAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCdob3Jpem9udGFsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPVxuICAgICAgICAgIGV2ZW50ICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB9IGVsc2UgaWYgKCd2ZXJ0aWNhbCcgPT09IHRoaXMuX3RhYkRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLl9zdGFydFBvc2l0aW9uID1cbiAgICAgICAgICBldmVudCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkgJiYgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoJ2hvcml6b250YWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID4gMCAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB2ZWxvY2l0eSDlsI/kuo7pmIjlgLzmiY3orqTkuLrmmK9wYW7mk43kvZxcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPD0gdGhpcy5fdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICB0aGlzLnVzZU9uUGFuICYmXG4gICAgICAgICAgdGhpcy5zd2lwZWFibGUgJiZcbiAgICAgICAgICB0aGlzLmFuaW1hdGVkXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucGFuZU1vdmVTdHlsZSA9ICd0cmFuc2xhdGUzZChjYWxjKC0nICsgdGhpcy5zZWxlY3RlZEtleSAqIDEwMCArICclICsgJyArIGRpc3RhbmNlICsgJ3B4KSwgMCwgMCApJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgndmVydGljYWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5fc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID4gMCAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5nZXRWZWxvY2l0eShkaXN0YW5jZSwgZXZlbnQudGltZVN0YW1wIC0gdGhpcy5fc3RhcnRUaW1lKSA8PSB0aGlzLl92ZWxvY2l0eVRocmVzaG9sZCAmJlxuICAgICAgICAgIHRoaXMudXNlT25QYW4gJiZcbiAgICAgICAgICB0aGlzLnN3aXBlYWJsZSAmJlxuICAgICAgICAgIHRoaXMuYW5pbWF0ZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5wYW5lTW92ZVN0eWxlID0gJ3RyYW5zbGF0ZTNkKDAsIGNhbGMoLScgKyB0aGlzLnNlbGVjdGVkS2V5ICogMTAwICsgJyUgKyAnICsgZGlzdGFuY2UgKyAncHgsIDAgKSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkgJiYgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoJ2hvcml6b250YWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb0NoYW5nZVRhYlB4ID0gdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLmRpc3RhbmNlVG9DaGFuZ2VUYWI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodGhpcy5nZXRWZWxvY2l0eShkaXN0YW5jZSwgZXZlbnQudGltZVN0YW1wIC0gdGhpcy5fc3RhcnRUaW1lKSA8PSB0aGlzLl92ZWxvY2l0eVRocmVzaG9sZCAmJlxuICAgICAgICAgICAgKHRoaXMudXNlT25QYW4gJiYgdGhpcy5zd2lwZWFibGUgJiYgTWF0aC5hYnMoZGlzdGFuY2UpID4gZGlzdGFuY2VUb0NoYW5nZVRhYlB4KSkgfHxcbiAgICAgICAgICAodGhpcy5nZXRWZWxvY2l0eShkaXN0YW5jZSwgZXZlbnQudGltZVN0YW1wIC0gdGhpcy5fc3RhcnRUaW1lKSA+IHRoaXMuX3ZlbG9jaXR5VGhyZXNob2xkICYmXG4gICAgICAgICAgICAodGhpcy5zd2lwZWFibGUgJiYgTWF0aC5hYnMoZGlzdGFuY2UpID4gZGlzdGFuY2VUb0NoYW5nZVRhYlB4IC8gMikpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDAgJiYgdGhpcy5hY3RpdmVUYWIgPCB0aGlzLmdldEN1cnJlbnRUYWJQYW5lcygpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMua2V5VG9TZWxlY3QrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID4gMCAmJiB0aGlzLmFjdGl2ZVRhYiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMua2V5VG9TZWxlY3QtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lTW92ZVN0eWxlID0gJ3RyYW5zbGF0ZTNkKC0nICsgdGhpcy5zZWxlY3RlZEtleSAqIDEwMCArICclLCAwLCAwICknO1xuICAgICAgfSBlbHNlIGlmICgndmVydGljYWwnID09PSB0aGlzLl90YWJEaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5fc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb0NoYW5nZVRhYlB4ID0gdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogdGhpcy5kaXN0YW5jZVRvQ2hhbmdlVGFiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPD0gdGhpcy5fdmVsb2NpdHlUaHJlc2hvbGQgJiZcbiAgICAgICAgICAgICh0aGlzLnVzZU9uUGFuICYmIHRoaXMuc3dpcGVhYmxlICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCkpIHx8XG4gICAgICAgICAgKHRoaXMuZ2V0VmVsb2NpdHkoZGlzdGFuY2UsIGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZSkgPiB0aGlzLl92ZWxvY2l0eVRocmVzaG9sZCAmJlxuICAgICAgICAgICAgKHRoaXMuc3dpcGVhYmxlICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGRpc3RhbmNlVG9DaGFuZ2VUYWJQeCAvIDIpKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwICYmIHRoaXMuYWN0aXZlVGFiIDwgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmtleVRvU2VsZWN0Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiYgdGhpcy5hY3RpdmVUYWIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmtleVRvU2VsZWN0LS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZU1vdmVTdHlsZSA9ICd0cmFuc2xhdGUzZCgwLCAtJyArIHRoaXMuc2VsZWN0ZWRLZXkgKiAxMDAgKyAnJSwgMCApJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RUYWJQYW5lKHRoaXMua2V5VG9TZWxlY3QpO1xuICAgIHRoaXMuc2VsZWN0ZWRLZXkgPSB0aGlzLmtleVRvU2VsZWN0O1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmtleVRvU2VsZWN0ICE9PSB0aGlzLnNlbGVjdGVkS2V5ICYmIHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkgJiYgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFRhYlBhbmUodGhpcy5rZXlUb1NlbGVjdCk7XG4gICAgICB0aGlzLnNlbGVjdGVkS2V5ID0gdGhpcy5rZXlUb1NlbGVjdDtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGluZGV4OiB0aGlzLnNlbGVjdGVkS2V5IH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0VGFiUGFuZShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkgJiYgdGhpcy5nZXRDdXJyZW50VGFiUGFuZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhY3R1YWxLZXlUb1NlbGVjdCA9IE1hdGgubWluKHRoaXMuZ2V0Q3VycmVudFRhYlBhbmVzKCkubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICAgICAgaWYgKCdob3Jpem9udGFsJyA9PT0gdGhpcy5fdGFiRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGFuZU1vdmVTdHlsZSA9ICd0cmFuc2xhdGUzZCgtJyArIGFjdHVhbEtleVRvU2VsZWN0ICogMTAwICsgJyUsIDAsIDAgKSc7XG4gICAgICB9IGVsc2UgaWYgKCd2ZXJ0aWNhbCcgPT09IHRoaXMuX3RhYkRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnBhbmVNb3ZlU3R5bGUgPSAndHJhbnNsYXRlM2QoMCwgLScgKyBhY3R1YWxLZXlUb1NlbGVjdCAqIDEwMCArICclLCAwICknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVsb2NpdHkoZGVsdGFEaXN0YW5jZSwgZGVsdGFUaW1lKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGRlbHRhRGlzdGFuY2UgLyBkZWx0YVRpbWUpO1xuICB9XG59XG4iXX0=