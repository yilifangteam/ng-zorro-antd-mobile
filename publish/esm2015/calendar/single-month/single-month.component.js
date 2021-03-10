import { Component, ViewEncapsulation, HostBinding, Input, ElementRef } from '@angular/core';
import { DateModels } from '../date/DataTypes';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CalendarSingleMonthComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1, "test");
    ɵngcc0.ɵɵelementEnd();
} }
function CalendarSingleMonthComponent_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelement(1, "span", 3);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", cell_r4.lCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", cell_r4.cls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.day && cell_r4.day.dayOfMonth || "", " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", cell_r4.rCls);
} }
function CalendarSingleMonthComponent_div_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", cell_r4.infoCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.info, " ");
} }
function CalendarSingleMonthComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarSingleMonthComponent_div_3_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const cell_r4 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onClickCell(cell_r4); });
    ɵngcc0.ɵɵtemplate(1, CalendarSingleMonthComponent_div_3_div_1_div_1_Template, 2, 0, "div", 6);
    ɵngcc0.ɵɵtemplate(2, CalendarSingleMonthComponent_div_3_div_1_div_2_Template, 5, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(3, CalendarSingleMonthComponent_div_3_div_1_div_3_Template, 2, 2, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const row_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap("cell " + (cell_r4.extra && cell_r4.extra.cellCls || ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r1.extra && row_r1.extra.cellRender);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !row_r1.extra || row_r1.extra && row_r1.extra.cellRender);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !row_r1.extra || row_r1.extra && row_r1.extra.cellRender);
} }
function CalendarSingleMonthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, CalendarSingleMonthComponent_div_3_div_1_Template, 4, 6, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", row_r1.rowCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r1.weeksDataList);
} }
export class CalendarSingleMonthComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.props = {
            rowSize: 'normal'
        };
        this.state = {
            weekComponents: []
        };
        this.singleMonth = true;
        this.genWeek = (weeksData, index) => {
            const { getDateExtra, monthData, onCellClick, locale, rowSize } = this.props;
            let rowCls = 'row';
            let weeksDataList = [];
            if (rowSize === 'xl') {
                rowCls += ' row-xl';
            }
            weeksData.forEach((day, dayOfWeek) => {
                const extra = (getDateExtra && getDateExtra(new Date(day.tick))) || {};
                let info = extra.info;
                const disable = extra.disable || day.outOfDate;
                let cls = 'date';
                let lCls = 'left';
                let rCls = 'right';
                let infoCls = 'info';
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    cls += ' grey';
                }
                if (disable) {
                    cls += ' disable';
                }
                else if (info) {
                    cls += ' important';
                }
                if (day.selected) {
                    cls += ' date-selected';
                    let styleType = day.selected;
                    switch (styleType) {
                        case DateModels.SelectType.Only:
                            info = locale.begin;
                            infoCls += ' date-selected';
                            break;
                        case DateModels.SelectType.All:
                            info = locale.begin_over;
                            infoCls += ' date-selected';
                            break;
                        case DateModels.SelectType.Start:
                            info = locale.begin;
                            infoCls += ' date-selected';
                            if (dayOfWeek === 6 || day.isLastOfMonth) {
                                styleType = DateModels.SelectType.All;
                            }
                            break;
                        case DateModels.SelectType.Middle:
                            if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                if (day.isLastOfMonth || dayOfWeek === 6) {
                                    styleType = DateModels.SelectType.All;
                                }
                                else {
                                    styleType = DateModels.SelectType.Start;
                                }
                            }
                            else if (dayOfWeek === 6 || day.isLastOfMonth) {
                                styleType = DateModels.SelectType.End;
                            }
                            break;
                        case DateModels.SelectType.End:
                            info = locale.over;
                            infoCls += ' date-selected';
                            if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                styleType = DateModels.SelectType.All;
                            }
                            break;
                    }
                    switch (styleType) {
                        case DateModels.SelectType.Single:
                        case DateModels.SelectType.Only:
                        case DateModels.SelectType.All:
                            cls += ' selected-single';
                            break;
                        case DateModels.SelectType.Start:
                            cls += ' selected-start';
                            rCls += ' date-selected';
                            break;
                        case DateModels.SelectType.Middle:
                            cls += ' selected-middle';
                            lCls += ' date-selected';
                            rCls += ' date-selected';
                            break;
                        case DateModels.SelectType.End:
                            cls += ' selected-end';
                            lCls += ' date-selected';
                            break;
                    }
                }
                weeksDataList[dayOfWeek] = {
                    lCls,
                    cls,
                    day,
                    rCls,
                    infoCls,
                    info,
                    extra,
                    disable,
                    onCellClick: onCellClick,
                    monthData
                };
            });
            this.state.weekComponents[index] = {
                index: index,
                rowCls,
                weeksDataList
            };
        };
        this.updateWeeks = (monthData) => {
            (monthData || this.props.monthData).weeks.forEach((week, index) => {
                this.genWeek(week, index);
            });
        };
        this.setWarpper = (dom) => {
            this.wrapperDivDOM = dom;
        };
    }
    set data(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    onClickCell(item) {
        if (!item.disable && item.onCellClick) {
            item.onCellClick(item.day, item.monthData);
        }
    }
    ngOnInit() {
        this.setWarpper(this._elementRef.nativeElement);
        this.props.monthData.weeks.forEach((week, index) => {
            this.genWeek(week, index);
        });
    }
    ngAfterViewInit() {
        this.ref = this.props.ref;
        this.ref(this);
    }
}
CalendarSingleMonthComponent.ɵfac = function CalendarSingleMonthComponent_Factory(t) { return new (t || CalendarSingleMonthComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CalendarSingleMonthComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarSingleMonthComponent, selectors: [["CalendarSingleMonth"], ["nzm-single-month"]], hostVars: 2, hostBindings: function CalendarSingleMonthComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("single-month", ctx.singleMonth);
    } }, inputs: { data: "data" }, decls: 4, vars: 2, consts: [[1, "month-title"], [1, "date"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], ["class", "date-wrapper", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "date-wrapper"]], template: function CalendarSingleMonthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, CalendarSingleMonthComponent_div_3_Template, 2, 2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.props.monthData.title, "\n");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.state.weekComponents);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2 });
CalendarSingleMonthComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalendarSingleMonthComponent.propDecorators = {
    data: [{ type: Input }],
    singleMonth: [{ type: HostBinding, args: ['class.single-month',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarSingleMonthComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarSingleMonth, nzm-single-month',
                template: "<div class=\"month-title\">\n  {{ props.monthData.title }}\n</div>\n<div class=\"date\">\n  <div *ngFor=\"let row of state.weekComponents; let i = index\" [ngClass]=\"row.rowCls\">\n    <div\n      *ngFor=\"let cell of row.weeksDataList; let j = index\"\n      class=\"{{ 'cell ' + ((cell.extra && cell.extra.cellCls) || '') }}\"\n      (click)=\"onClickCell(cell)\"\n    >\n      <div *ngIf=\"row.extra && row.extra.cellRender\">test</div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" class=\"date-wrapper\">\n        <span [ngClass]=\"cell.lCls\"></span>\n        <div [ngClass]=\"cell.cls\">\n          {{ (cell.day && cell.day.dayOfMonth) || '' }}\n        </div>\n        <span [ngClass]=\"cell.rCls\"></span>\n      </div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" [ngClass]=\"cell.infoCls\">\n        {{ cell.info }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { singleMonth: [{
            type: HostBinding,
            args: ['class.single-month']
        }], data: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9jYWxlbmRhci9zaW5nbGUtbW9udGgvc2luZ2xlLW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0MsTUFBTSxPQUFPLDRCQUE0QjtBQUFHLElBcUIxQyxZQUFvQixXQUF1QjtBQUFJLFFBQTNCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0FBQUMsUUFwQjVDLFVBQUssR0FBRztBQUNWLFlBQUksT0FBTyxFQUFFLFFBQVE7QUFDckIsU0FBbUMsQ0FBQztBQUNwQyxRQUNFLFVBQUssR0FBRztBQUNWLFlBQUksY0FBYyxFQUFFLEVBQUU7QUFDdEIsU0FBRyxDQUFDO0FBQ0osUUFXcUMsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDakUsUUFHRSxZQUFPLEdBQUcsQ0FBQyxTQUFnQyxFQUFFLEtBQWEsRUFBRSxFQUFFO0FBQ2hFLFlBQUksTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2pGLFlBQUksSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLFlBQUksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFlBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO0FBQzFCLGdCQUFNLE1BQU0sSUFBSSxTQUFTLENBQUM7QUFDMUIsYUFBSztBQUNMLFlBQ0ksU0FBUyxDQUFDLE9B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Q2xCLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMzQyxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BELFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUN2RCxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFDakIsUUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixJQUFFLENBQUM7QUFDSDt3REF0S0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx1Q0FBdUMsa0JBQ2pEOzs7Ozs7OztxREFBNEMsa0JBQzVDLGFBQWEsRUFBRTtZQUFpQixDQUFDLElBQUk7QUFDdEM7Ozs7O3dGQUNJO0FBQUM7QUFBc0QsWUFUTyxVQUFVO0FBQUc7QUFBRztBQUNyRSxtQkFtQlgsS0FBSztBQUNOLDBCQU9DLFdBQVcsU0FBQyxvQkFBb0I7QUFBTTs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZywgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVNb2RlbHMgfSBmcm9tICcuLi9kYXRlL0RhdGFUeXBlcyc7XG5pbXBvcnQgeyBDYWxlbmRhclNpbmdsZU1vbnRoUHJvcHNUeXBlIH0gZnJvbSAnLi9Qcm9wc1R5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDYWxlbmRhclNpbmdsZU1vbnRoLCBuem0tc2luZ2xlLW1vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbmdsZS1tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTaW5nbGVNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByb3BzID0ge1xuICAgIHJvd1NpemU6ICdub3JtYWwnXG4gIH0gYXMgQ2FsZW5kYXJTaW5nbGVNb250aFByb3BzVHlwZTtcblxuICBzdGF0ZSA9IHtcbiAgICB3ZWVrQ29tcG9uZW50czogW11cbiAgfTtcbiAgcmVmOiAoZG9tKSA9PiB2b2lkO1xuICB3cmFwcGVyRGl2RE9NOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2luZ2xlLW1vbnRoJykgc2luZ2xlTW9udGg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgZ2VuV2VlayA9ICh3ZWVrc0RhdGE6IERhdGVNb2RlbHMuQ2VsbERhdGFbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgZ2V0RGF0ZUV4dHJhLCBtb250aERhdGEsIG9uQ2VsbENsaWNrLCBsb2NhbGUsIHJvd1NpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHJvd0NscyA9ICdyb3cnO1xuICAgIGxldCB3ZWVrc0RhdGFMaXN0ID0gW107XG4gICAgaWYgKHJvd1NpemUgPT09ICd4bCcpIHtcbiAgICAgIHJvd0NscyArPSAnIHJvdy14bCc7XG4gICAgfVxuXG4gICAgd2Vla3NEYXRhLmZvckVhY2goKGRheSwgZGF5T2ZXZWVrKSA9PiB7XG4gICAgICBjb25zdCBleHRyYSA9IChnZXREYXRlRXh0cmEgJiYgZ2V0RGF0ZUV4dHJhKG5ldyBEYXRlKGRheS50aWNrKSkpIHx8IHt9O1xuICAgICAgbGV0IGluZm8gPSBleHRyYS5pbmZvO1xuICAgICAgY29uc3QgZGlzYWJsZSA9IGV4dHJhLmRpc2FibGUgfHwgZGF5Lm91dE9mRGF0ZTtcblxuICAgICAgbGV0IGNscyA9ICdkYXRlJztcbiAgICAgIGxldCBsQ2xzID0gJ2xlZnQnO1xuICAgICAgbGV0IHJDbHMgPSAncmlnaHQnO1xuICAgICAgbGV0IGluZm9DbHMgPSAnaW5mbyc7XG5cbiAgICAgIGlmIChkYXlPZldlZWsgPT09IDAgfHwgZGF5T2ZXZWVrID09PSA2KSB7XG4gICAgICAgIGNscyArPSAnIGdyZXknO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICBjbHMgKz0gJyBkaXNhYmxlJztcbiAgICAgIH0gZWxzZSBpZiAoaW5mbykge1xuICAgICAgICBjbHMgKz0gJyBpbXBvcnRhbnQnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5LnNlbGVjdGVkKSB7XG4gICAgICAgIGNscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gZGF5LnNlbGVjdGVkO1xuICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkge1xuICAgICAgICAgIGNhc2UgRGF0ZU1vZGVscy5TZWxlY3RUeXBlLk9ubHk6XG4gICAgICAgICAgICBpbmZvID0gbG9jYWxlLmJlZ2luO1xuICAgICAgICAgICAgaW5mb0NscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuQWxsOlxuICAgICAgICAgICAgaW5mbyA9IGxvY2FsZS5iZWdpbl9vdmVyO1xuICAgICAgICAgICAgaW5mb0NscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5TdGFydDpcbiAgICAgICAgICAgIGluZm8gPSBsb2NhbGUuYmVnaW47XG4gICAgICAgICAgICBpbmZvQ2xzICs9ICcgZGF0ZS1zZWxlY3RlZCc7XG4gICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSA2IHx8IGRheS5pc0xhc3RPZk1vbnRoKSB7XG4gICAgICAgICAgICAgIHN0eWxlVHlwZSA9IERhdGVNb2RlbHMuU2VsZWN0VHlwZS5BbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5NaWRkbGU6XG4gICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAwIHx8IGRheS5pc0ZpcnN0T2ZNb250aCkge1xuICAgICAgICAgICAgICBpZiAoZGF5LmlzTGFzdE9mTW9udGggfHwgZGF5T2ZXZWVrID09PSA2KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUeXBlID0gRGF0ZU1vZGVscy5TZWxlY3RUeXBlLkFsbDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVR5cGUgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuU3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSA2IHx8IGRheS5pc0xhc3RPZk1vbnRoKSB7XG4gICAgICAgICAgICAgIHN0eWxlVHlwZSA9IERhdGVNb2RlbHMuU2VsZWN0VHlwZS5FbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5FbmQ6XG4gICAgICAgICAgICBpbmZvID0gbG9jYWxlLm92ZXI7XG4gICAgICAgICAgICBpbmZvQ2xzICs9ICcgZGF0ZS1zZWxlY3RlZCc7XG4gICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAwIHx8IGRheS5pc0ZpcnN0T2ZNb250aCkge1xuICAgICAgICAgICAgICBzdHlsZVR5cGUgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuQWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkge1xuICAgICAgICAgIGNhc2UgRGF0ZU1vZGVscy5TZWxlY3RUeXBlLlNpbmdsZTpcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5Pbmx5OlxuICAgICAgICAgIGNhc2UgRGF0ZU1vZGVscy5TZWxlY3RUeXBlLkFsbDpcbiAgICAgICAgICAgIGNscyArPSAnIHNlbGVjdGVkLXNpbmdsZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5TdGFydDpcbiAgICAgICAgICAgIGNscyArPSAnIHNlbGVjdGVkLXN0YXJ0JztcbiAgICAgICAgICAgIHJDbHMgKz0gJyBkYXRlLXNlbGVjdGVkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRGF0ZU1vZGVscy5TZWxlY3RUeXBlLk1pZGRsZTpcbiAgICAgICAgICAgIGNscyArPSAnIHNlbGVjdGVkLW1pZGRsZSc7XG4gICAgICAgICAgICBsQ2xzICs9ICcgZGF0ZS1zZWxlY3RlZCc7XG4gICAgICAgICAgICByQ2xzICs9ICcgZGF0ZS1zZWxlY3RlZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5FbmQ6XG4gICAgICAgICAgICBjbHMgKz0gJyBzZWxlY3RlZC1lbmQnO1xuICAgICAgICAgICAgbENscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2Vla3NEYXRhTGlzdFtkYXlPZldlZWtdID0ge1xuICAgICAgICBsQ2xzLFxuICAgICAgICBjbHMsXG4gICAgICAgIGRheSxcbiAgICAgICAgckNscyxcbiAgICAgICAgaW5mb0NscyxcbiAgICAgICAgaW5mbyxcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGRpc2FibGUsXG4gICAgICAgIG9uQ2VsbENsaWNrOiBvbkNlbGxDbGljayxcbiAgICAgICAgbW9udGhEYXRhXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGF0ZS53ZWVrQ29tcG9uZW50c1tpbmRleF0gPSB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICByb3dDbHMsXG4gICAgICB3ZWVrc0RhdGFMaXN0XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVdlZWtzID0gKG1vbnRoRGF0YT86IERhdGVNb2RlbHMuTW9udGhEYXRhKSA9PiB7XG4gICAgKG1vbnRoRGF0YSB8fCB0aGlzLnByb3BzLm1vbnRoRGF0YSkud2Vla3MuZm9yRWFjaCgod2VlaywgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZ2VuV2Vlayh3ZWVrLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRXYXJwcGVyID0gKGRvbTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLndyYXBwZXJEaXZET00gPSBkb207XG4gIH1cblxuICBvbkNsaWNrQ2VsbChpdGVtKSB7XG4gICAgaWYgKCFpdGVtLmRpc2FibGUgJiYgaXRlbS5vbkNlbGxDbGljaykge1xuICAgICAgaXRlbS5vbkNlbGxDbGljayhpdGVtLmRheSwgaXRlbS5tb250aERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0V2FycHBlcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucHJvcHMubW9udGhEYXRhLndlZWtzLmZvckVhY2goKHdlZWssIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmdlbldlZWsod2VlaywgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVmID0gdGhpcy5wcm9wcy5yZWY7XG4gICAgdGhpcy5yZWYodGhpcyk7XG4gIH1cbn1cbiJdfQ==