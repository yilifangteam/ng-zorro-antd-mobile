import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LocaleProviderService } from '../../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class CustomKeyboardComponent {
    constructor(_localeProvider) {
        this._localeProvider = _localeProvider;
        this.prefixCls = 'am-number-keyboard';
        this.okText = '';
        this._locale = {};
        this._unsubscribe$ = new Subject();
        this.onClick = new EventEmitter();
    }
    tdClick(e) {
        this.onClick.emit(e);
    }
    ngOnInit() {
        this.wrapCls = {
            [`${this.prefixCls}-item`]: true
        };
        this.wrapperCls = {
            [`${this.prefixCls}-wrapper`]: true
        };
        this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            this._locale = this._localeProvider.getLocaleSubObj('InputItem');
            this.okText = this._locale.confirmLabel;
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
CustomKeyboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'CustomKeyboard',
                template: "<div [ngClass]=\"wrapperCls\">\n  <table>\n    <tbody>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(1)\">1</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(2)\">2</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(3)\">3</td>\n        <td class=\"keyboard-delete\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('delete')\"></td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(4)\">4</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(5)\">5</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(6)\">6</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(7)\">7</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(8)\">8</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(9)\">9</td>\n        <td class=\"keyboard-confirm\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('confirm')\">{{ okText }}</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick('.')\">.</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(0)\">0</td>\n        <td class=\"keyboard-hide\" [ngClass]=\"wrapCls\" (click)=\"tdClick('hide')\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [LocaleProviderService]
            },] }
];
CustomKeyboardComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
CustomKeyboardComponent.propDecorators = {
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiaW5wdXQtaXRlbS9jdXN0b20ta2V5Ym9hcmQvY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUS9CLE1BQU0sT0FBTyx1QkFBdUI7SUFZbEMsWUFBb0IsZUFBc0M7UUFBdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBWDFELGNBQVMsR0FBVyxvQkFBb0IsQ0FBQztRQUV6QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHNUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFMkIsQ0FBQztJQUU5RCxPQUFPLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUMsRUFBRSxJQUFJO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJO1NBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG91Q0FBK0M7Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7O1lBVFEscUJBQXFCOzs7c0JBbUIzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ3VzdG9tS2V5Ym9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbTG9jYWxlUHJvdmlkZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21LZXlib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tbnVtYmVyLWtleWJvYXJkJztcbiAgd3JhcENsczogb2JqZWN0O1xuICBva1RleHQ6IHN0cmluZyA9ICcnO1xuICB3cmFwcGVyQ2xzOiBvYmplY3Q7XG5cbiAgcHJpdmF0ZSBfbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZVByb3ZpZGVyOiBMb2NhbGVQcm92aWRlclNlcnZpY2UpIHt9XG5cbiAgdGRDbGljayhlKSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyYXBDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy53cmFwcGVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS13cmFwcGVyYF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMuX2xvY2FsZVByb3ZpZGVyLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLl9sb2NhbGVQcm92aWRlci5nZXRMb2NhbGVTdWJPYmooJ0lucHV0SXRlbScpO1xuICAgICAgdGhpcy5va1RleHQgPSB0aGlzLl9sb2NhbGUuY29uZmlybUxhYmVsO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19