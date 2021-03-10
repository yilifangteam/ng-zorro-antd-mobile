import { Injectable, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { CustomKeyboardComponent } from '../custom-keyboard/custom-keyboard.component';
export class CustomInputService {
    constructor(_appRef, _cfr) {
        this._appRef = _appRef;
        this._cfr = _cfr;
        CustomInputService.appRef = this._appRef;
        CustomInputService._inputCompFactory = this._cfr.resolveComponentFactory(CustomKeyboardComponent);
    }
    static getShowStatus() {
        return CustomInputService.isShow;
    }
    static showKeyboard() {
        if (!this.isShow) {
            if (this.compRef) {
                this.compRef.instance.wrapperCls = {
                    [`am-number-keyboard-wrapper`]: true
                };
            }
            else {
                let container = document.querySelector(`#${this._keyboardPrefixCls}-container`);
                if (!container) {
                    container = document.createElement('div');
                    container.setAttribute('id', `${this._keyboardPrefixCls}-container`);
                    document.body.appendChild(container);
                    container.appendChild(document.createElement(CustomInputService._inputCompFactory.selector));
                    this.compRef = this.appRef.bootstrap(CustomInputService._inputCompFactory);
                    this.compRef.instance.onClick.subscribe(e => {
                        this.clickValue = e;
                    });
                }
            }
            this.isShow = true;
        }
    }
    static hideKeyboard() {
        if (this.compRef && this.isShow) {
            this.isShow = false;
            this.compRef.instance.wrapperCls = {
                [`am-number-keyboard-wrapper`]: true,
                [`am-number-keyboard-wrapper-hide`]: true
            };
        }
    }
}
CustomInputService.compRef = null;
CustomInputService.appRef = null;
CustomInputService.isShow = false;
CustomInputService.clickValue = null;
CustomInputService._inputCompFactory = null;
CustomInputService._keyboardPrefixCls = 'am-number-keyboard';
CustomInputService.decorators = [
    { type: Injectable }
];
CustomInputService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWlucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImlucHV0LWl0ZW0vY3VzdG9tLWlucHV0L2N1c3RvbS1pbnB1dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtDLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd2RixNQUFNLE9BQU8sa0JBQWtCO0lBUTdCLFlBQW9CLE9BQXVCLEVBQVUsSUFBOEI7UUFBL0QsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUEwQjtRQUNqRixrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxrQkFBa0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhO1FBQ2xCLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRztvQkFDakMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLElBQUk7aUJBQ3JDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixZQUFZLENBQUMsQ0FBQztnQkFDaEYsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLFlBQVksQ0FBQyxDQUFDO29CQUNyRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDckMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzdGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUc7Z0JBQ2pDLENBQUMsNEJBQTRCLENBQUMsRUFBRSxJQUFJO2dCQUNwQyxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsSUFBSTthQUMxQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOztBQS9DTSwwQkFBTyxHQUFzQixJQUFJLENBQUM7QUFDbEMseUJBQU0sR0FBbUIsSUFBSSxDQUFDO0FBQzlCLHlCQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2YsNkJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsb0NBQWlCLEdBQThDLElBQUksQ0FBQztBQUNwRSxxQ0FBa0IsR0FBRyxvQkFBb0IsQ0FBQzs7WUFQbEQsVUFBVTs7O1lBSDBDLGNBQWM7WUFBRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnksIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vY3VzdG9tLWtleWJvYXJkL2N1c3RvbS1rZXlib2FyZC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSW5wdXRTZXJ2aWNlIHtcbiAgc3RhdGljIGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIGFwcFJlZjogQXBwbGljYXRpb25SZWYgPSBudWxsO1xuICBzdGF0aWMgaXNTaG93ID0gZmFsc2U7XG4gIHN0YXRpYyBjbGlja1ZhbHVlID0gbnVsbDtcbiAgc3RhdGljIF9pbnB1dENvbXBGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEN1c3RvbUtleWJvYXJkQ29tcG9uZW50PiA9IG51bGw7XG4gIHN0YXRpYyBfa2V5Ym9hcmRQcmVmaXhDbHMgPSAnYW0tbnVtYmVyLWtleWJvYXJkJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIF9jZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgIEN1c3RvbUlucHV0U2VydmljZS5hcHBSZWYgPSB0aGlzLl9hcHBSZWY7XG4gICAgQ3VzdG9tSW5wdXRTZXJ2aWNlLl9pbnB1dENvbXBGYWN0b3J5ID0gdGhpcy5fY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEN1c3RvbUtleWJvYXJkQ29tcG9uZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTaG93U3RhdHVzKCkge1xuICAgIHJldHVybiBDdXN0b21JbnB1dFNlcnZpY2UuaXNTaG93O1xuICB9XG5cbiAgc3RhdGljIHNob3dLZXlib2FyZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93KSB7XG4gICAgICBpZiAodGhpcy5jb21wUmVmKSB7XG4gICAgICAgIHRoaXMuY29tcFJlZi5pbnN0YW5jZS53cmFwcGVyQ2xzID0ge1xuICAgICAgICAgIFtgYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXJgXTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2tleWJvYXJkUHJlZml4Q2xzfS1jb250YWluZXJgKTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMuX2tleWJvYXJkUHJlZml4Q2xzfS1jb250YWluZXJgKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoQ3VzdG9tSW5wdXRTZXJ2aWNlLl9pbnB1dENvbXBGYWN0b3J5LnNlbGVjdG9yKSk7XG4gICAgICAgICAgdGhpcy5jb21wUmVmID0gdGhpcy5hcHBSZWYuYm9vdHN0cmFwKEN1c3RvbUlucHV0U2VydmljZS5faW5wdXRDb21wRmFjdG9yeSk7XG4gICAgICAgICAgdGhpcy5jb21wUmVmLmluc3RhbmNlLm9uQ2xpY2suc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGlja1ZhbHVlID0gZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoaWRlS2V5Ym9hcmQoKSB7XG4gICAgaWYgKHRoaXMuY29tcFJlZiAmJiB0aGlzLmlzU2hvdykge1xuICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29tcFJlZi5pbnN0YW5jZS53cmFwcGVyQ2xzID0ge1xuICAgICAgICBbYGFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyYF06IHRydWUsXG4gICAgICAgIFtgYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXItaGlkZWBdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19