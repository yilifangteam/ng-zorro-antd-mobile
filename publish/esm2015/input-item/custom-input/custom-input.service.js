import { Injectable, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { CustomKeyboardComponent } from '../custom-keyboard/custom-keyboard.component';
import * as ɵngcc0 from '@angular/core';
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
CustomInputService.ɵfac = function CustomInputService_Factory(t) { return new (t || CustomInputService)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver)); };
CustomInputService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CustomInputService, factory: CustomInputService.ɵfac });
CustomInputService.compRef = null;
CustomInputService.appRef = null;
CustomInputService.isShow = false;
CustomInputService.clickValue = null;
CustomInputService._inputCompFactory = null;
CustomInputService._keyboardPrefixCls = 'am-number-keyboard';
CustomInputService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomInputService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.ComponentFactoryResolver }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWlucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQtaXRlbS9jdXN0b20taW5wdXQvY3VzdG9tLWlucHV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0MsY0FBYyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQUd2RixNQUFNLE9BQU8sa0JBQWtCO0FBQy9CLElBT0UsWUFBb0IsT0FBdUIsRUFBVSxJQUE4QjtBQUNyRixRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtBQUFDLFFBQVMsU0FBSSxHQUFKLElBQUksQ0FBMEI7QUFBQyxRQUNsRixrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM3QyxRQUFJLGtCQUFrQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RyxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxhQUFhO0FBQ3RCLFFBQUksT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxNQUFNLENBQUMsWUFBWTtBQUNyQixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RCLFlBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3hCLGdCQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRztBQUMzQyxvQkFBVSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsSUFBSTtBQUM5QyxpQkFBUyxDQUFDO0FBQ1YsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLENBQUM7QUFDeEYsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN4QixvQkFBVSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxvQkFBVSxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLENBQUM7QUFDL0Usb0JBQVUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0Msb0JBQVUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdkcsb0JBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JGLG9CQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDdEQsd0JBQVksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDaEMsb0JBQVUsQ0FBQyxDQUFDLENBQUM7QUFDYixpQkFBUztBQUNULGFBQU87QUFDUCxZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxZQUFZO0FBQ3JCLFFBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckMsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMxQixZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRztBQUN6QyxnQkFBUSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsSUFBSTtBQUM1QyxnQkFBUSxDQUFDLGlDQUFpQyxDQUFDLEVBQUUsSUFBSTtBQUNqRCxhQUFPLENBQUM7QUFDUixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7O3NIQUFDO0FBaERRLDBCQUFPLEdBQXNCLElBQUksQ0FBQztBQUNsQyx5QkFBTSxHQUFtQixJQUFJLENBQUM7QUFDOUIseUJBQU0sR0FBRyxLQUFLLENBQUM7QUFDZiw2QkFBVSxHQUFHLElBQUksQ0FBQztBQUNsQixvQ0FBaUIsR0FBOEMsSUFBSSxDQUFDO0FBQ3BFLHFDQUFrQixHQUFHLG9CQUFvQixDQUFDLEFBTmpEO0FBQUM7RUFERixVQUFVLFpBRUUsWUFMd0MsY0FBYztBQUFJLFlBQUYsd0JBQXdCO0FBQUc7OzswSEFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5LCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21LZXlib2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2N1c3RvbS1rZXlib2FyZC9jdXN0b20ta2V5Ym9hcmQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUlucHV0U2VydmljZSB7XG4gIHN0YXRpYyBjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG4gIHN0YXRpYyBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmID0gbnVsbDtcbiAgc3RhdGljIGlzU2hvdyA9IGZhbHNlO1xuICBzdGF0aWMgY2xpY2tWYWx1ZSA9IG51bGw7XG4gIHN0YXRpYyBfaW5wdXRDb21wRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDdXN0b21LZXlib2FyZENvbXBvbmVudD4gPSBudWxsO1xuICBzdGF0aWMgX2tleWJvYXJkUHJlZml4Q2xzID0gJ2FtLW51bWJlci1rZXlib2FyZCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZiwgcHJpdmF0ZSBfY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICBDdXN0b21JbnB1dFNlcnZpY2UuYXBwUmVmID0gdGhpcy5fYXBwUmVmO1xuICAgIEN1c3RvbUlucHV0U2VydmljZS5faW5wdXRDb21wRmFjdG9yeSA9IHRoaXMuX2Nmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDdXN0b21LZXlib2FyZENvbXBvbmVudCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U2hvd1N0YXR1cygpIHtcbiAgICByZXR1cm4gQ3VzdG9tSW5wdXRTZXJ2aWNlLmlzU2hvdztcbiAgfVxuXG4gIHN0YXRpYyBzaG93S2V5Ym9hcmQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvdykge1xuICAgICAgaWYgKHRoaXMuY29tcFJlZikge1xuICAgICAgICB0aGlzLmNvbXBSZWYuaW5zdGFuY2Uud3JhcHBlckNscyA9IHtcbiAgICAgICAgICBbYGFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyYF06IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9rZXlib2FyZFByZWZpeENsc30tY29udGFpbmVyYCk7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLl9rZXlib2FyZFByZWZpeENsc30tY29udGFpbmVyYCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KEN1c3RvbUlucHV0U2VydmljZS5faW5wdXRDb21wRmFjdG9yeS5zZWxlY3RvcikpO1xuICAgICAgICAgIHRoaXMuY29tcFJlZiA9IHRoaXMuYXBwUmVmLmJvb3RzdHJhcChDdXN0b21JbnB1dFNlcnZpY2UuX2lucHV0Q29tcEZhY3RvcnkpO1xuICAgICAgICAgIHRoaXMuY29tcFJlZi5pbnN0YW5jZS5vbkNsaWNrLnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tWYWx1ZSA9IGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGlkZUtleWJvYXJkKCkge1xuICAgIGlmICh0aGlzLmNvbXBSZWYgJiYgdGhpcy5pc1Nob3cpIHtcbiAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbXBSZWYuaW5zdGFuY2Uud3JhcHBlckNscyA9IHtcbiAgICAgICAgW2BhbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlcmBdOiB0cnVlLFxuICAgICAgICBbYGFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyLWhpZGVgXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==