import { CalendarConfirmPanelPropsType } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarConfirmPanelComponent {
    props: CalendarConfirmPanelPropsType;
    startTimeStr: string;
    endTimeStr: string;
    btnCls: string;
    set propsData(value: any);
    set disableBtn(value: any);
    set formatStr(value: any);
    set startDateTime(value: any);
    set endDateTime(value: any);
    set onConfirm(value: any);
    confirmPane: boolean;
    constructor();
    formatTime(): void;
    triggerConfirm: () => void;
    selfFormatDate(date: Date): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarConfirmPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarConfirmPanelComponent, "CalendarConfirmPanel, nzm-calendar-confirm-panel", never, { "propsData": "propsData"; "disableBtn": "disableBtn"; "formatStr": "formatStr"; "startDateTime": "startDateTime"; "endDateTime": "endDateTime"; "onConfirm": "onConfirm"; }, {}, never, never>;
}

//# sourceMappingURL=confirm-panel.component.d.ts.map