import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DateModels } from '../date/DataTypes';
import { CalendarSingleMonthPropsType } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarSingleMonthComponent implements OnInit, AfterViewInit {
    private _elementRef;
    props: CalendarSingleMonthPropsType;
    state: {
        weekComponents: any[];
    };
    ref: (dom: any) => void;
    wrapperDivDOM: HTMLDivElement | null;
    set data(value: any);
    singleMonth: boolean;
    constructor(_elementRef: ElementRef);
    genWeek: (weeksData: DateModels.CellData[], index: number) => void;
    updateWeeks: (monthData?: DateModels.MonthData) => void;
    setWarpper: (dom: HTMLDivElement) => void;
    onClickCell(item: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarSingleMonthComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarSingleMonthComponent, "CalendarSingleMonth, nzm-single-month", never, { "data": "data"; }, {}, never, never>;
}

//# sourceMappingURL=single-month.component.d.ts.map