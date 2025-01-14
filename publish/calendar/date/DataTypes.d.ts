export declare namespace DateModels {
    enum SelectType {
        None = 0,
        Single = 1,
        All = 2,
        Only = 3,
        Start = 4,
        Middle = 5,
        End = 6
    }
    interface Locale {
        title: string;
        today: string;
        month: string;
        year: string;
        am: string;
        pm: string;
        dateFormat: string;
        dateTimeFormat: string;
        noChoose: string;
        week: string[];
        clear: string;
        selectTime: string;
        selectStartTime: string;
        selectEndTime: string;
        start: string;
        end: string;
        begin: string;
        over: string;
        begin_over: string;
        confirm: string;
        monthTitle: string;
        loadPrevMonth: string;
        yesterday: string;
        lastWeek: string;
        lastMonth: string;
    }
    interface CellData {
        tick: number;
        dayOfMonth: number;
        selected: SelectType;
        isFirstOfMonth: boolean;
        isLastOfMonth: boolean;
        outOfDate: boolean;
    }
    interface ExtraData {
        info?: string;
        disable?: boolean;
        cellCls?: any;
        cellRender?: any;
    }
    interface MonthData {
        title: string;
        firstDate: Date;
        lastDate: Date;
        weeks: DateModels.CellData[][];
        component?: any;
        height?: number;
        y?: number;
        updateLayout?: Function;
        componentRef?: any;
    }
}
