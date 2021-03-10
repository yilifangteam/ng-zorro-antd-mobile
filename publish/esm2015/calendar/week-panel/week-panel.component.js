import { Component, HostBinding, ViewEncapsulation, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class CalendarWeekPanelComponent {
    constructor() {
        this.week = ['日', '一', '二', '三', '四', '五', '六'];
        this.weekPanel = true;
    }
    set locale(value) {
        this._locale = value;
    }
    ngOnInit() {
        this.week = this._locale.week;
    }
}
CalendarWeekPanelComponent.ɵfac = function CalendarWeekPanelComponent_Factory(t) { return new (t || CalendarWeekPanelComponent)(); };
CalendarWeekPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekPanelComponent, selectors: [["CalendarWeekPanel"], ["nzm-calendar-week-panel"]], hostVars: 2, hostBindings: function CalendarWeekPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("week-panel", ctx.weekPanel);
    } }, inputs: { locale: "locale" }, decls: 14, vars: 7, consts: [[1, "cell", "cell-grey"], [1, "cell"]], template: function CalendarWeekPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 1);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 1);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 1);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 1);
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 0);
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[0]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[1]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[2]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[3]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[4]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[5]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.week[6]);
    } }, encapsulation: 2 });
CalendarWeekPanelComponent.ctorParameters = () => [];
CalendarWeekPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    weekPanel: [{ type: HostBinding, args: ['class.week-panel',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarWeekPanelComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarWeekPanel, nzm-calendar-week-panel',
                template: "<div class=\"cell cell-grey\">{{ week[0] }}</div>\n<div class=\"cell\">{{ week[1] }}</div>\n<div class=\"cell\">{{ week[2] }}</div>\n<div class=\"cell\">{{ week[3] }}</div>\n<div class=\"cell\">{{ week[4] }}</div>\n<div class=\"cell\">{{ week[5] }}</div>\n<div class=\"cell cell-grey\">{{ week[6] }}</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { weekPanel: [{
            type: HostBinding,
            args: ['class.week-panel']
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FsZW5kYXIvd2Vlay1wYW5lbC93ZWVrLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUXpGLE1BQU0sT0FBTywwQkFBMEI7QUFBRyxJQUN4QztBQUFnQixRQUVoQixTQUFJLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxRQVFtQyxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQzdELElBWmlCLENBQUM7QUFDbEIsSUFLRSxJQUNJLE1BQU0sQ0FBQyxLQUFLO0FBQ2xCLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFHRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNIO3NEQXRCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1VBQTRDLGtCQUN0RDs7NkJBQTBDLGtCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUFDO0FBQ047QUFFMEIscUJBSXZCLEtBQUs7QUFDTix3QkFJQyxXQUFXLFNBQUMsa0JBQWtCO0FBQU07Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDYWxlbmRhcldlZWtQYW5lbCwgbnptLWNhbGVuZGFyLXdlZWstcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2Vlay1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgd2Vlazogc3RyaW5nW10gPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddO1xuXG4gIHByaXZhdGUgX2xvY2FsZTogRGF0ZU1vZGVscy5Mb2NhbGU7XG5cbiAgQElucHV0KClcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy53ZWVrLXBhbmVsJykgd2Vla1BhbmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndlZWsgPSB0aGlzLl9sb2NhbGUud2VlaztcbiAgfVxufVxuIl19