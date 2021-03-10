import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { formatDate } from '../util/index';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CalendarConfirmPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "p");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "p");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementStart(7, "span");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.props.locale.start, ": ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(!ctx_r0.props.startDateTime ? "grey" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.startTimeStr);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.props.locale.end, ": ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(!ctx_r0.props.endDateTime ? "grey" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.endTimeStr);
} }
export class CalendarConfirmPanelComponent {
    constructor() {
        this.props = {
            formatStr: 'yyyy-MM-dd hh:mm'
        };
        this.confirmPane = true;
        this.triggerConfirm = () => {
            const { onConfirm, disableBtn } = this.props;
            if (!disableBtn) {
                onConfirm();
            }
        };
    }
    set propsData(value) {
        this.props = Object.assign(Object.assign({}, this.props), value);
    }
    set disableBtn(value) {
        this.props.disableBtn = value;
    }
    set formatStr(value) {
        this.props.formatStr = value;
    }
    set startDateTime(value) {
        this.props.startDateTime = value;
        this.formatTime();
    }
    set endDateTime(value) {
        this.props.endDateTime = value;
        this.formatTime();
    }
    set onConfirm(value) {
        this.props.onConfirm = value;
    }
    formatTime() {
        const { type, locale, disableBtn } = this.props;
        let { startDateTime, endDateTime } = this.props;
        if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
            const tmp = startDateTime;
            startDateTime = endDateTime;
            endDateTime = tmp;
        }
        this.startTimeStr = startDateTime ? this.selfFormatDate(startDateTime) : locale.noChoose;
        this.endTimeStr = endDateTime ? this.selfFormatDate(endDateTime) : locale.noChoose;
        let btnCls = disableBtn ? 'button button-disable' : 'button';
        if (type === 'one') {
            btnCls += ' button-full';
        }
        this.btnCls = btnCls;
    }
    selfFormatDate(date) {
        const { formatStr = '', locale } = this.props;
        return formatDate(date, formatStr, locale);
    }
}
CalendarConfirmPanelComponent.ɵfac = function CalendarConfirmPanelComponent_Factory(t) { return new (t || CalendarConfirmPanelComponent)(); };
CalendarConfirmPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarConfirmPanelComponent, selectors: [["CalendarConfirmPanel"], ["nzm-calendar-confirm-panel"]], hostVars: 2, hostBindings: function CalendarConfirmPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("confirm-panel", ctx.confirmPane);
    } }, inputs: { propsData: "propsData", disableBtn: "disableBtn", formatStr: "formatStr", startDateTime: "startDateTime", endDateTime: "endDateTime", onConfirm: "onConfirm" }, decls: 3, vars: 3, consts: [["class", "info", 4, "ngIf"], [3, "ngClass", "click"], [1, "info"]], template: function CalendarConfirmPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarConfirmPanelComponent_div_0_Template, 9, 10, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function CalendarConfirmPanelComponent_Template_div_click_1_listener() { return ctx.triggerConfirm(); });
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.props.type === "range");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.btnCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.props.locale.confirm, "\n");
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2 });
CalendarConfirmPanelComponent.ctorParameters = () => [];
CalendarConfirmPanelComponent.propDecorators = {
    propsData: [{ type: Input }],
    disableBtn: [{ type: Input }],
    formatStr: [{ type: Input }],
    startDateTime: [{ type: Input }],
    endDateTime: [{ type: Input }],
    onConfirm: [{ type: Input }],
    confirmPane: [{ type: HostBinding, args: ['class.confirm-panel',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarConfirmPanelComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarConfirmPanel, nzm-calendar-confirm-panel',
                template: "<div *ngIf=\"props.type === 'range'\" class=\"info\">\n  <p>\n    {{ props.locale.start }}: <span class=\"{{ !props.startDateTime ? 'grey' : '' }}\">{{ startTimeStr }}</span>\n  </p>\n  <p>\n    {{ props.locale.end }}: <span class=\"{{ !props.endDateTime ? 'grey' : '' }}\">{{ endTimeStr }}</span>\n  </p>\n</div>\n<div [ngClass]=\"btnCls\" (click)=\"triggerConfirm()\">\n  {{ props.locale.confirm }}\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { confirmPane: [{
            type: HostBinding,
            args: ['class.confirm-panel']
        }], propsData: [{
            type: Input
        }], disableBtn: [{
            type: Input
        }], formatStr: [{
            type: Input
        }], startDateTime: [{
            type: Input
        }], endDateTime: [{
            type: Input
        }], onConfirm: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FsZW5kYXIvY29uZmlybS1wYW5lbC9jb25maXJtLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzQyxNQUFNLE9BQU8sNkJBQTZCO0FBQzFDLElBdUNFO0FBQWdCLFFBdkNoQixVQUFLLEdBQUc7QUFDVixZQUFJLFNBQVMsRUFBRSxrQkFBa0I7QUFDakMsU0FBb0MsQ0FBQztBQUNyQyxRQWtDc0MsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDbEUsUUFxQkUsbUJBQWMsR0FBRyxHQUFHLEVBQUU7QUFDeEIsWUFBSSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDakQsWUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3JCLGdCQUFNLFNBQVMsRUFBRSxDQUFDO0FBQ2xCLGFBQUs7QUFDTCxRQUFFLENBQUMsQ0FBQTtBQUNILElBMUJpQixDQUFDO0FBQ2xCLElBakNFLElBQ0ksU0FBUyxDQUFDLEtBQUs7QUFDckIsUUFBSSxJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsS0FBSyxHQUNWLEtBQUssQ0FDVCxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFVBQVUsQ0FBQyxLQUFLO0FBQ3RCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxTQUFTLENBQUMsS0FBSztBQUNyQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksYUFBYSxDQUFDLEtBQUs7QUFDekIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDckMsUUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFdBQVcsQ0FBQyxLQUFLO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxTQUFTLENBQUMsS0FBSztBQUNyQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUtFLFVBQVU7QUFDWixRQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEQsUUFBSSxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEQsUUFBSSxJQUFJLGFBQWEsSUFBSSxXQUFXLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxXQUFXLEVBQUU7QUFDdkUsWUFBTSxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUM7QUFDaEMsWUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLFlBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN4QixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM3RixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3ZGLFFBQUksSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ2pFLFFBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQ3hCLFlBQU0sTUFBTSxJQUFJLGNBQWMsQ0FBQztBQUMvQixTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQVFFLGNBQWMsQ0FBQyxJQUFVO0FBQzNCLFFBQUksTUFBTSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNsRCxRQUFJLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsSUFBRSxDQUFDO0FBQ0g7eURBNUVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7VUFBa0Qsa0JBQzVEOztnSEFBNkMsa0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7d0VBQ0k7QUFBQztBQUVBO0FBQ2Usd0JBS2xCLEtBQUs7QUFDTix5QkFNQyxLQUFLO0FBQ04sd0JBR0MsS0FBSztBQUNOLDRCQUdDLEtBQUs7QUFDTiwwQkFJQyxLQUFLO0FBQ04sd0JBSUMsS0FBSztBQUNOLDBCQUlDLFdBQVcsU0FBQyxxQkFBcUI7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maXJtUGFuZWxQcm9wc1R5cGUgfSBmcm9tICcuL1Byb3BzVHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyQ29uZmlybVBhbmVsLCBuem0tY2FsZW5kYXItY29uZmlybS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbmZpcm1QYW5lbENvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGZvcm1hdFN0cjogJ3l5eXktTU0tZGQgaGg6bW0nXG4gIH0gYXMgQ2FsZW5kYXJDb25maXJtUGFuZWxQcm9wc1R5cGU7XG4gIHN0YXJ0VGltZVN0cjogc3RyaW5nO1xuICBlbmRUaW1lU3RyOiBzdHJpbmc7XG4gIGJ0bkNsczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwcm9wc0RhdGEodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnZhbHVlXG4gICAgfTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZUJ0bih2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZGlzYWJsZUJ0biA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtYXRTdHIodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmZvcm1hdFN0ciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdGFydERhdGVUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5zdGFydERhdGVUaW1lID0gdmFsdWU7XG4gICAgdGhpcy5mb3JtYXRUaW1lKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGVuZERhdGVUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5lbmREYXRlVGltZSA9IHZhbHVlO1xuICAgIHRoaXMuZm9ybWF0VGltZSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvbkNvbmZpcm0odmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ29uZmlybSA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25maXJtLXBhbmVsJykgY29uZmlybVBhbmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBmb3JtYXRUaW1lKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbG9jYWxlLCBkaXNhYmxlQnRuIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7IHN0YXJ0RGF0ZVRpbWUsIGVuZERhdGVUaW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzdGFydERhdGVUaW1lICYmIGVuZERhdGVUaW1lICYmICtzdGFydERhdGVUaW1lID4gK2VuZERhdGVUaW1lKSB7XG4gICAgICBjb25zdCB0bXAgPSBzdGFydERhdGVUaW1lO1xuICAgICAgc3RhcnREYXRlVGltZSA9IGVuZERhdGVUaW1lO1xuICAgICAgZW5kRGF0ZVRpbWUgPSB0bXA7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydFRpbWVTdHIgPSBzdGFydERhdGVUaW1lID8gdGhpcy5zZWxmRm9ybWF0RGF0ZShzdGFydERhdGVUaW1lKSA6IGxvY2FsZS5ub0Nob29zZTtcbiAgICB0aGlzLmVuZFRpbWVTdHIgPSBlbmREYXRlVGltZSA/IHRoaXMuc2VsZkZvcm1hdERhdGUoZW5kRGF0ZVRpbWUpIDogbG9jYWxlLm5vQ2hvb3NlO1xuICAgIGxldCBidG5DbHMgPSBkaXNhYmxlQnRuID8gJ2J1dHRvbiBidXR0b24tZGlzYWJsZScgOiAnYnV0dG9uJztcbiAgICBpZiAodHlwZSA9PT0gJ29uZScpIHtcbiAgICAgIGJ0bkNscyArPSAnIGJ1dHRvbi1mdWxsJztcbiAgICB9XG4gICAgdGhpcy5idG5DbHMgPSBidG5DbHM7XG4gIH1cblxuICB0cmlnZ2VyQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSwgZGlzYWJsZUJ0biB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRpc2FibGVCdG4pIHtcbiAgICAgIG9uQ29uZmlybSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGZGb3JtYXREYXRlKGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdFN0ciA9ICcnLCBsb2NhbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyLCBsb2NhbGUpO1xuICB9XG59XG4iXX0=