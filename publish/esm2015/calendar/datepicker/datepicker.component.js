import { Component, HostBinding, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import { CalendarDatePickerBaseComponent } from './datepicker.base.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../week-panel/week-panel.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../single-month/single-month.component';

const _c0 = ["layout"];
const _c1 = ["panel"];
function CalendarDatePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.props.locale.loadPrevMonth);
} }
function CalendarDatePickerComponent_CalendarSingleMonth_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "CalendarSingleMonth", 9);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("data", item_r4.component);
} }
const _c2 = function (a0) { return { transform: a0 }; };
export class CalendarDatePickerComponent extends CalendarDatePickerBaseComponent {
    constructor() {
        super();
        this.transform = '';
        this._initDelta = 0;
        this._lastY = 0;
        this._delta = this._initDelta;
        this.amCalendar = true;
        this.datePicker = true;
        this.genMonthComponent = (data) => {
            if (!data) {
                return;
            }
            return {
                monthData: data,
                locale: this.props.locale,
                rowSize: this.props.rowSize,
                onCellClick: this.baseOnCellClick,
                getDateExtra: this.props.getDateExtra,
                ref: dom => {
                    data.componentRef = dom || data.componentRef || undefined;
                    data.updateLayout = () => {
                        this.computeHeight(data, dom);
                    };
                    data.updateLayout();
                }
            };
        };
        this.computeHeight = (data, singleMonth) => {
            if (singleMonth && singleMonth.wrapperDivDOM) {
                if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
                    setTimeout(() => this.computeHeight(data, singleMonth), 500);
                    return;
                }
                data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
                data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
            }
        };
        this.setLayout = (dom) => {
            if (dom) {
                const { onLayout } = this.props;
                if (onLayout) {
                    onLayout(dom.clientHeight);
                }
                const scrollHandler = this.createOnScroll();
                dom.onscroll = evt => {
                    scrollHandler({
                        client: dom.clientHeight,
                        full: evt.currentTarget.clientHeight,
                        top: evt.currentTarget.scrollTop
                    });
                };
            }
        };
        this.setPanel = (dom) => {
            this._panel = dom;
        };
    }
    set onCellClick(value) {
        this.props.onCellClick = value;
    }
    set endDate(value) {
        const oldProps = Object.assign({}, this.props);
        this.props.endDate = value;
        this.receiveProps(oldProps, this.props);
    }
    set startDate(value) {
        const oldProps = Object.assign({}, this.props);
        this.props.startDate = value;
        this.receiveProps(oldProps, this.props);
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    set onSelectHasDisableDate(value) {
        this.props.onSelectHasDisableDate = value;
    }
    set onLayout(value) {
        this.props.onLayout = value;
    }
    onTouchStart(event) {
        this._lastY = event.touches[0].screenY || event.touches[0].pageY;
        this._delta = this._initDelta;
    }
    onTouchMove(event) {
        const ele = event.currentTarget;
        const isReachTop = ele.scrollTop === 0;
        if (isReachTop) {
            this._delta = (event.touches[0].screenY || event.touches[0].pageY) - this._lastY;
            if (this._delta > 0) {
                event.preventDefault();
                if (this._delta > 80) {
                    this._delta = 80;
                }
            }
            else {
                this._delta = 0;
            }
            this.setTransform(this._panel.style, `translate3d(0,${this._delta}px,0)`);
        }
    }
    onTouchEnd(event) {
        this.onFinish();
    }
    onFinish() {
        if (this._delta > 40 && this.canLoadPrev()) {
            this.genMonthData(this.state.months[0].firstDate, -1);
            this.visibleMonth = this.state.months.slice(0, this.props.initalMonths);
            this.state.months.forEach(m => {
                if (m.updateLayout) {
                    m.updateLayout();
                }
            });
        }
        this.setTransform(this._panel.style, `translate3d(0,0,0)`);
        this.setTransition(this._panel.style, '.3s');
        setTimeout(() => {
            if (this._panel) {
                this.setTransition(this._panel.style, '');
            }
        }, 300);
    }
    setTransform(nodeStyle, value) {
        this.transform = value;
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
    }
    setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
    }
    ngOnInit() {
        this.init();
        this.setLayout(this.layoutDom.nativeElement);
        this.setPanel(this.panelDom.nativeElement);
    }
}
CalendarDatePickerComponent.ɵfac = function CalendarDatePickerComponent_Factory(t) { return new (t || CalendarDatePickerComponent)(); };
CalendarDatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarDatePickerComponent, selectors: [["CalendarDatePicker"], ["nzm-calendar-date-picker"]], viewQuery: function CalendarDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
        ɵngcc0.ɵɵviewQuery(_c1, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.layoutDom = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panelDom = _t.first);
    } }, hostVars: 4, hostBindings: function CalendarDatePickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-calendar", ctx.amCalendar)("date-picker", ctx.datePicker);
    } }, inputs: { onCellClick: "onCellClick", endDate: "endDate", startDate: "startDate", propsData: "propsData", onSelectHasDisableDate: "onSelectHasDisableDate", onLayout: "onLayout" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [[3, "locale"], [1, "wrapper", 2, "overflow-x", "hidden", "overflow-y", "visible", "-webkit-overflow-scrolling", "touch", 3, "touchstart", "touchmove", "touchend"], ["layout", ""], [3, "ngStyle"], ["panel", ""], ["class", "load-tip", 4, "ngIf"], [1, "months"], ["style", "display: block;", 3, "data", 4, "ngFor", "ngForOf"], [1, "load-tip"], [2, "display", "block", 3, "data"]], template: function CalendarDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "CalendarWeekPanel", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵlistener("touchstart", function CalendarDatePickerComponent_Template_div_touchstart_1_listener($event) { return ctx.onTouchStart($event); })("touchmove", function CalendarDatePickerComponent_Template_div_touchmove_1_listener($event) { return ctx.onTouchMove($event); })("touchend", function CalendarDatePickerComponent_Template_div_touchend_1_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵtemplate(5, CalendarDatePickerComponent_div_5_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵtemplate(7, CalendarDatePickerComponent_CalendarSingleMonth_7_Template, 1, 1, "CalendarSingleMonth", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("locale", ctx.props.locale);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c2, ctx.transform));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.canLoadPrev());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.visibleMonth);
    } }, directives: [ɵngcc1.CalendarWeekPanelComponent, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc3.CalendarSingleMonthComponent], encapsulation: 2 });
CalendarDatePickerComponent.ctorParameters = () => [];
CalendarDatePickerComponent.propDecorators = {
    layoutDom: [{ type: ViewChild, args: ['layout', { static: true },] }],
    panelDom: [{ type: ViewChild, args: ['panel', { static: true },] }],
    onCellClick: [{ type: Input }],
    endDate: [{ type: Input }],
    startDate: [{ type: Input }],
    propsData: [{ type: Input }],
    onSelectHasDisableDate: [{ type: Input }],
    onLayout: [{ type: Input }],
    amCalendar: [{ type: HostBinding, args: ['class.am-calendar',] }],
    datePicker: [{ type: HostBinding, args: ['class.date-picker',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarDatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarDatePicker, nzm-calendar-date-picker',
                template: "<CalendarWeekPanel [locale]=\"props.locale\"></CalendarWeekPanel>\n<div\n  #layout\n  class=\"wrapper\"\n  style=\"overflow-x:hidden;overflow-y:visible;-webkit-overflow-scrolling:touch;\"\n  (touchstart)=\"onTouchStart($event)\"\n  (touchmove)=\"onTouchMove($event)\"\n  (touchend)=\"onTouchEnd($event)\"\n>\n  <div #panel [ngStyle]=\"{ transform: transform }\">\n    <div *ngIf=\"canLoadPrev()\" class=\"load-tip\">{{ props.locale.loadPrevMonth }}</div>\n    <div class=\"months\">\n      <CalendarSingleMonth\n        *ngFor=\"let item of visibleMonth; let i = index\"\n        style=\"display: block;\"\n        [data]=\"item.component\"\n      ></CalendarSingleMonth>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { amCalendar: [{
            type: HostBinding,
            args: ['class.am-calendar']
        }], datePicker: [{
            type: HostBinding,
            args: ['class.date-picker']
        }], onCellClick: [{
            type: Input
        }], endDate: [{
            type: Input
        }], startDate: [{
            type: Input
        }], propsData: [{
            type: Input
        }], onSelectHasDisableDate: [{
            type: Input
        }], onLayout: [{
            type: Input
        }], layoutDom: [{
            type: ViewChild,
            args: ['layout', { static: true }]
        }], panelDom: [{
            type: ViewChild,
            args: ['panel', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FsZW5kYXIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSwrQkFBK0I7QUFBRyxJQUNqRjtBQUNGLFFBQUksS0FBSyxFQUFFLENBQUM7QUFDWixRQUVFLGNBQVMsR0FBVyxFQUFFLENBQUM7QUFDekIsUUFDVSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ2pDLFFBQVUsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUM3QixRQUFVLFdBQU0sR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNDLFFBc0NvQyxlQUFVLEdBQVksSUFBSSxDQUFDO0FBQy9ELFFBQW9DLGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDL0QsUUFDRSxzQkFBaUIsR0FBRyxDQUFDLElBQTJCLEVBQUUsRUFBRTtBQUN0RCxZQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDZixnQkFBTSxPQUFPO0FBQ2IsYUFBSztBQUNMLFlBQUksT0FBTztBQUNYLGdCQUFNLFNBQVMsRUFBRSxJQUFJO0FBQ3JCLGdCQUFNLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDL0IsZ0JBQU0sT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztBQUNqQyxnQkFBTSxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWU7QUFDdkMsZ0JBQU0sWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUMzQyxn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QyxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoQixRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRCxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSDt1REE5S0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtVQUE4QyxrQkFDeEQ7Ozs7Ozs7OztnQkFBMEMsa0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dLQUNJO0FBQUM7QUFBdUQ7QUFDdEQsd0JBVUosU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDbEMsdUJBQ0YsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDakMsMEJBRUYsS0FBSztBQUNOLHNCQUdDLEtBQUs7QUFDTix3QkFLQyxLQUFLO0FBQ04sd0JBS0MsS0FBSztBQUNOLHFDQU1DLEtBQUs7QUFDTix1QkFHQyxLQUFLO0FBQ04seUJBSUMsV0FBVyxTQUFDLG1CQUFtQjtBQUFPLHlCQUN0QyxXQUFXLFNBQUMsbUJBQW1CO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlja2VyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci5iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyRGF0ZVBpY2tlciwgbnptLWNhbGVuZGFyLWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENhbGVuZGFyRGF0ZVBpY2tlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdHJhbnNmb3JtOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfcGFuZWw6IGFueTtcbiAgcHJpdmF0ZSBfaW5pdERlbHRhOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9sYXN0WTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZGVsdGE6IG51bWJlciA9IHRoaXMuX2luaXREZWx0YTtcblxuICBAVmlld0NoaWxkKCdsYXlvdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBsYXlvdXREb206IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcGFuZWxEb206IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgc2V0IG9uQ2VsbENsaWNrKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNlbGxDbGljayA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBlbmREYXRlKHZhbHVlKSB7XG4gICAgY29uc3Qgb2xkUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICB0aGlzLnByb3BzLmVuZERhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlY2VpdmVQcm9wcyhvbGRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHN0YXJ0RGF0ZSh2YWx1ZSkge1xuICAgIGNvbnN0IG9sZFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5zdGFydERhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlY2VpdmVQcm9wcyhvbGRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHByb3BzRGF0YSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4udmFsdWVcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvblNlbGVjdEhhc0Rpc2FibGVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdEhhc0Rpc2FibGVEYXRlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9uTGF5b3V0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkxheW91dCA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYWxlbmRhcicpIGFtQ2FsZW5kYXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhdGUtcGlja2VyJykgZGF0ZVBpY2tlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2VuTW9udGhDb21wb25lbnQgPSAoZGF0YT86IERhdGVNb2RlbHMuTW9udGhEYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBtb250aERhdGE6IGRhdGEsXG4gICAgICBsb2NhbGU6IHRoaXMucHJvcHMubG9jYWxlLFxuICAgICAgcm93U2l6ZTogdGhpcy5wcm9wcy5yb3dTaXplLFxuICAgICAgb25DZWxsQ2xpY2s6IHRoaXMuYmFzZU9uQ2VsbENsaWNrLFxuICAgICAgZ2V0RGF0ZUV4dHJhOiB0aGlzLnByb3BzLmdldERhdGVFeHRyYSxcbiAgICAgIHJlZjogZG9tID0+IHtcbiAgICAgICAgZGF0YS5jb21wb25lbnRSZWYgPSBkb20gfHwgZGF0YS5jb21wb25lbnRSZWYgfHwgdW5kZWZpbmVkO1xuICAgICAgICBkYXRhLnVwZGF0ZUxheW91dCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoZGF0YSwgZG9tKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YS51cGRhdGVMYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUhlaWdodCA9IChkYXRhOiBEYXRlTW9kZWxzLk1vbnRoRGF0YSwgc2luZ2xlTW9udGgpID0+IHtcbiAgICBpZiAoc2luZ2xlTW9udGggJiYgc2luZ2xlTW9udGgud3JhcHBlckRpdkRPTSkge1xuICAgICAgaWYgKCFkYXRhLmhlaWdodCAmJiAhc2luZ2xlTW9udGgud3JhcHBlckRpdkRPTS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbXB1dGVIZWlnaHQoZGF0YSwgc2luZ2xlTW9udGgpLCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLmhlaWdodCA9IHNpbmdsZU1vbnRoLndyYXBwZXJEaXZET00uY2xpZW50SGVpZ2h0IHx8IGRhdGEuaGVpZ2h0IHx8IDA7XG4gICAgICBkYXRhLnkgPSBzaW5nbGVNb250aC53cmFwcGVyRGl2RE9NLm9mZnNldFRvcCB8fCBkYXRhLnkgfHwgMDtcbiAgICB9XG4gIH1cblxuICBzZXRMYXlvdXQgPSAoZG9tOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIGlmIChkb20pIHtcbiAgICAgIGNvbnN0IHsgb25MYXlvdXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChvbkxheW91dCkge1xuICAgICAgICBvbkxheW91dChkb20uY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IHRoaXMuY3JlYXRlT25TY3JvbGwoKTtcbiAgICAgIGRvbS5vbnNjcm9sbCA9IGV2dCA9PiB7XG4gICAgICAgIHNjcm9sbEhhbmRsZXIoe1xuICAgICAgICAgIGNsaWVudDogZG9tLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBmdWxsOiAoZXZ0LmN1cnJlbnRUYXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmNsaWVudEhlaWdodCxcbiAgICAgICAgICB0b3A6IChldnQuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzZXRQYW5lbCA9IChkb206IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fcGFuZWwgPSBkb207XG4gIH1cblxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLl9sYXN0WSA9IGV2ZW50LnRvdWNoZXNbMF0uc2NyZWVuWSB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMuX2RlbHRhID0gdGhpcy5faW5pdERlbHRhO1xuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCBlbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGlzUmVhY2hUb3AgPSBlbGUuc2Nyb2xsVG9wID09PSAwO1xuXG4gICAgaWYgKGlzUmVhY2hUb3ApIHtcbiAgICAgIHRoaXMuX2RlbHRhID0gKGV2ZW50LnRvdWNoZXNbMF0uc2NyZWVuWSB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKSAtIHRoaXMuX2xhc3RZO1xuICAgICAgaWYgKHRoaXMuX2RlbHRhID4gMCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5fZGVsdGEgPiA4MCkge1xuICAgICAgICAgIHRoaXMuX2RlbHRhID0gODA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RlbHRhID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKHRoaXMuX3BhbmVsLnN0eWxlLCBgdHJhbnNsYXRlM2QoMCwke3RoaXMuX2RlbHRhfXB4LDApYCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIHRoaXMub25GaW5pc2goKTtcbiAgfVxuXG4gIG9uRmluaXNoKCkge1xuICAgIGlmICh0aGlzLl9kZWx0YSA+IDQwICYmIHRoaXMuY2FuTG9hZFByZXYoKSkge1xuICAgICAgdGhpcy5nZW5Nb250aERhdGEodGhpcy5zdGF0ZS5tb250aHNbMF0uZmlyc3REYXRlLCAtMSk7XG5cbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0gdGhpcy5zdGF0ZS5tb250aHMuc2xpY2UoMCwgdGhpcy5wcm9wcy5pbml0YWxNb250aHMpO1xuXG4gICAgICB0aGlzLnN0YXRlLm1vbnRocy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICBpZiAobS51cGRhdGVMYXlvdXQpIHtcbiAgICAgICAgICBtLnVwZGF0ZUxheW91dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2Zvcm0odGhpcy5fcGFuZWwuc3R5bGUsIGB0cmFuc2xhdGUzZCgwLDAsMClgKTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb24odGhpcy5fcGFuZWwuc3R5bGUsICcuM3MnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wYW5lbCkge1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb24odGhpcy5fcGFuZWwuc3R5bGUsICcnKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgc2V0VHJhbnNmb3JtKG5vZGVTdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgdmFsdWU6IGFueSkge1xuICAgIHRoaXMudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgbm9kZVN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIG5vZGVTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldFRyYW5zaXRpb24obm9kZVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uLCB2YWx1ZTogYW55KSB7XG4gICAgbm9kZVN0eWxlLnRyYW5zaXRpb24gPSB2YWx1ZTtcbiAgICBub2RlU3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zZXRMYXlvdXQodGhpcy5sYXlvdXREb20ubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zZXRQYW5lbCh0aGlzLnBhbmVsRG9tLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=