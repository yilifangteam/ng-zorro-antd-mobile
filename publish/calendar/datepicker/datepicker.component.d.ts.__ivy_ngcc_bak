import { OnInit, ElementRef } from '@angular/core';
import { DateModels } from '../date/DataTypes';
import { CalendarDatePickerBaseComponent } from './datepicker.base.component';
export declare class CalendarDatePickerComponent extends CalendarDatePickerBaseComponent implements OnInit {
    constructor();
    transform: string;
    private _panel;
    private _initDelta;
    private _lastY;
    private _delta;
    layoutDom: ElementRef;
    panelDom: ElementRef;
    set onCellClick(value: any);
    set endDate(value: any);
    set startDate(value: any);
    set propsData(value: any);
    set onSelectHasDisableDate(value: any);
    set onLayout(value: any);
    amCalendar: boolean;
    datePicker: boolean;
    genMonthComponent: (data?: DateModels.MonthData) => {
        monthData: DateModels.MonthData;
        locale: DateModels.Locale;
        rowSize: "normal" | "xl";
        onCellClick: (day: DateModels.CellData) => void;
        getDateExtra: (date: Date) => DateModels.ExtraData;
        ref: (dom: any) => void;
    };
    computeHeight: (data: DateModels.MonthData, singleMonth: any) => void;
    setLayout: (dom: HTMLDivElement) => void;
    setPanel: (dom: HTMLDivElement) => void;
    onTouchStart(event: any): void;
    onTouchMove(event: any): void;
    onTouchEnd(event: any): void;
    onFinish(): void;
    setTransform(nodeStyle: CSSStyleDeclaration, value: any): void;
    setTransition(nodeStyle: CSSStyleDeclaration, value: any): void;
    ngOnInit(): void;
}
