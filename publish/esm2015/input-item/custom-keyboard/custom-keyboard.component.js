import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LocaleProviderService } from '../../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../locale-provider/locale-provider.service';
import * as ɵngcc2 from '@angular/common';
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
CustomKeyboardComponent.ɵfac = function CustomKeyboardComponent_Factory(t) { return new (t || CustomKeyboardComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
CustomKeyboardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CustomKeyboardComponent, selectors: [["CustomKeyboard"]], outputs: { onClick: "onClick" }, features: [ɵngcc0.ɵɵProvidersFeature([LocaleProviderService])], decls: 33, vars: 18, consts: [[3, "ngClass"], [3, "ngClass", "click"], [1, "keyboard-delete", 3, "rowSpan", "ngClass", "click"], [1, "keyboard-confirm", 3, "rowSpan", "ngClass", "click"], [1, "keyboard-hide", 3, "ngClass", "click"]], template: function CustomKeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "table");
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵelementStart(3, "tr");
        ɵngcc0.ɵɵelementStart(4, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_4_listener() { return ctx.tdClick(1); });
        ɵngcc0.ɵɵtext(5, "1");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_6_listener() { return ctx.tdClick(2); });
        ɵngcc0.ɵɵtext(7, "2");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_8_listener() { return ctx.tdClick(3); });
        ɵngcc0.ɵɵtext(9, "3");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "td", 2);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_10_listener() { return ctx.tdClick("delete"); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "tr");
        ɵngcc0.ɵɵelementStart(12, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_12_listener() { return ctx.tdClick(4); });
        ɵngcc0.ɵɵtext(13, "4");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_14_listener() { return ctx.tdClick(5); });
        ɵngcc0.ɵɵtext(15, "5");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_16_listener() { return ctx.tdClick(6); });
        ɵngcc0.ɵɵtext(17, "6");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "tr");
        ɵngcc0.ɵɵelementStart(19, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_19_listener() { return ctx.tdClick(7); });
        ɵngcc0.ɵɵtext(20, "7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_21_listener() { return ctx.tdClick(8); });
        ɵngcc0.ɵɵtext(22, "8");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_23_listener() { return ctx.tdClick(9); });
        ɵngcc0.ɵɵtext(24, "9");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "td", 3);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_25_listener() { return ctx.tdClick("confirm"); });
        ɵngcc0.ɵɵtext(26);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "tr");
        ɵngcc0.ɵɵelementStart(28, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_28_listener() { return ctx.tdClick("."); });
        ɵngcc0.ɵɵtext(29, ".");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(30, "td", 1);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_30_listener() { return ctx.tdClick(0); });
        ɵngcc0.ɵɵtext(31, "0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(32, "td", 4);
        ɵngcc0.ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_32_listener() { return ctx.tdClick("hide"); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapperCls);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("rowSpan", 2)("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("rowSpan", 2)("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.okText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapCls);
    } }, directives: [ɵngcc2.NgClass], encapsulation: 2 });
CustomKeyboardComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
CustomKeyboardComponent.propDecorators = {
    onClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomKeyboardComponent, [{
        type: Component,
        args: [{
                selector: 'CustomKeyboard',
                template: "<div [ngClass]=\"wrapperCls\">\n  <table>\n    <tbody>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(1)\">1</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(2)\">2</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(3)\">3</td>\n        <td class=\"keyboard-delete\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('delete')\"></td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(4)\">4</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(5)\">5</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(6)\">6</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(7)\">7</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(8)\">8</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(9)\">9</td>\n        <td class=\"keyboard-confirm\" [rowSpan]=\"2\" [ngClass]=\"wrapCls\" (click)=\"tdClick('confirm')\">{{ okText }}</td>\n      </tr>\n      <tr>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick('.')\">.</td>\n        <td [ngClass]=\"wrapCls\" (click)=\"tdClick(0)\">0</td>\n        <td class=\"keyboard-hide\" [ngClass]=\"wrapCls\" (click)=\"tdClick('hide')\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [LocaleProviderService]
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }]; }, { onClick: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9pbnB1dC1pdGVtL2N1c3RvbS1rZXlib2FyZC9jdXN0b20ta2V5Ym9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFRL0IsTUFBTSxPQUFPLHVCQUF1QjtBQUFHLElBWXJDLFlBQW9CLGVBQXNDO0FBQUksUUFBMUMsb0JBQWUsR0FBZixlQUFlLENBQXVCO0FBQUMsUUFYM0QsY0FBUyxHQUFXLG9CQUFvQixDQUFDO0FBQzNDLFFBQ0UsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUN0QixRQUVVLFlBQU8sR0FBUSxFQUFFLENBQUM7QUFDNUIsUUFBVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDOUMsUUFFRSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNwQyxJQUMrRCxDQUFDO0FBQ2hFLElBQ0UsT0FBTyxDQUFDLENBQUM7QUFDWCxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRztBQUNuQixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RDLFNBQUssQ0FBQztBQUNOLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRztBQUN0QixZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJO0FBQ3pDLFNBQUssQ0FBQztBQUNOLFFBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDeEYsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZFLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUM5QyxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSDttREF6Q0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0Isa0JBQzFCOzs7Ozs7Ozs7Ozs7OztzQ0FBK0M7YUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLGNBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBQ0k7QUFBQztBQUFpRCxZQVY5QyxxQkFBcUI7QUFBRztBQUFHO0FBQTJDLHNCQW1CNUUsTUFBTTtBQUNSOzs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ3VzdG9tS2V5Ym9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWtleWJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbTG9jYWxlUHJvdmlkZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21LZXlib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tbnVtYmVyLWtleWJvYXJkJztcbiAgd3JhcENsczogb2JqZWN0O1xuICBva1RleHQ6IHN0cmluZyA9ICcnO1xuICB3cmFwcGVyQ2xzOiBvYmplY3Q7XG5cbiAgcHJpdmF0ZSBfbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZVByb3ZpZGVyOiBMb2NhbGVQcm92aWRlclNlcnZpY2UpIHt9XG5cbiAgdGRDbGljayhlKSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyYXBDbHMgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy53cmFwcGVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS13cmFwcGVyYF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMuX2xvY2FsZVByb3ZpZGVyLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICB0aGlzLl9sb2NhbGUgPSB0aGlzLl9sb2NhbGVQcm92aWRlci5nZXRMb2NhbGVTdWJPYmooJ0lucHV0SXRlbScpO1xuICAgICAgdGhpcy5va1RleHQgPSB0aGlzLl9sb2NhbGUuY29uZmlybUxhYmVsO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19