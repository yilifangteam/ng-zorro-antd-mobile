import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { formatDate } from '../util/index';
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
CalendarConfirmPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarConfirmPanel, nzm-calendar-confirm-panel',
                template: "<div *ngIf=\"props.type === 'range'\" class=\"info\">\n  <p>\n    {{ props.locale.start }}: <span class=\"{{ !props.startDateTime ? 'grey' : '' }}\">{{ startTimeStr }}</span>\n  </p>\n  <p>\n    {{ props.locale.end }}: <span class=\"{{ !props.endDateTime ? 'grey' : '' }}\">{{ endTimeStr }}</span>\n  </p>\n</div>\n<div [ngClass]=\"btnCls\" (click)=\"triggerConfirm()\">\n  {{ props.locale.confirm }}\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL2NvbmZpcm0tcGFuZWwvY29uZmlybS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsTUFBTSxPQUFPLDZCQUE2QjtJQXdDeEM7UUF2Q0EsVUFBSyxHQUFHO1lBQ04sU0FBUyxFQUFFLGtCQUFrQjtTQUNHLENBQUM7UUFtQ0MsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFzQmhFLG1CQUFjLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUE7SUF6QmMsQ0FBQztJQWhDaEIsSUFDSSxTQUFTLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsS0FBSyxHQUNWLEtBQUssQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNELElBQ0ksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUNJLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFDSSxhQUFhLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUNJLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQ0ksU0FBUyxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFNRCxVQUFVO1FBQ1IsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxhQUFhLElBQUksV0FBVyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ2pFLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQztZQUMxQixhQUFhLEdBQUcsV0FBVyxDQUFDO1lBQzVCLFdBQVcsR0FBRyxHQUFHLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuRixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDN0QsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxjQUFjLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBU0QsY0FBYyxDQUFDLElBQVU7UUFDdkIsTUFBTSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtEQUFrRDtnQkFDNUQsc2FBQTZDO2dCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7Ozt3QkFTRSxLQUFLO3lCQU9MLEtBQUs7d0JBSUwsS0FBSzs0QkFJTCxLQUFLOzBCQUtMLEtBQUs7d0JBS0wsS0FBSzswQkFLTCxXQUFXLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vdXRpbC9pbmRleCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpcm1QYW5lbFByb3BzVHlwZSB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJDb25maXJtUGFuZWwsIG56bS1jYWxlbmRhci1jb25maXJtLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29uZmlybVBhbmVsQ29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgZm9ybWF0U3RyOiAneXl5eS1NTS1kZCBoaDptbSdcbiAgfSBhcyBDYWxlbmRhckNvbmZpcm1QYW5lbFByb3BzVHlwZTtcbiAgc3RhcnRUaW1lU3RyOiBzdHJpbmc7XG4gIGVuZFRpbWVTdHI6IHN0cmluZztcbiAgYnRuQ2xzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHByb3BzRGF0YSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4udmFsdWVcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlQnRuKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlQnRuID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1hdFN0cih2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZm9ybWF0U3RyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHN0YXJ0RGF0ZVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLnN0YXJ0RGF0ZVRpbWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZvcm1hdFRpbWUoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZW5kRGF0ZVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmVuZERhdGVUaW1lID0gdmFsdWU7XG4gICAgdGhpcy5mb3JtYXRUaW1lKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9uQ29uZmlybSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25Db25maXJtID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbmZpcm0tcGFuZWwnKSBjb25maXJtUGFuZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGZvcm1hdFRpbWUoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBsb2NhbGUsIGRpc2FibGVCdG4gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgc3RhcnREYXRlVGltZSwgZW5kRGF0ZVRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHN0YXJ0RGF0ZVRpbWUgJiYgZW5kRGF0ZVRpbWUgJiYgK3N0YXJ0RGF0ZVRpbWUgPiArZW5kRGF0ZVRpbWUpIHtcbiAgICAgIGNvbnN0IHRtcCA9IHN0YXJ0RGF0ZVRpbWU7XG4gICAgICBzdGFydERhdGVUaW1lID0gZW5kRGF0ZVRpbWU7XG4gICAgICBlbmREYXRlVGltZSA9IHRtcDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0VGltZVN0ciA9IHN0YXJ0RGF0ZVRpbWUgPyB0aGlzLnNlbGZGb3JtYXREYXRlKHN0YXJ0RGF0ZVRpbWUpIDogbG9jYWxlLm5vQ2hvb3NlO1xuICAgIHRoaXMuZW5kVGltZVN0ciA9IGVuZERhdGVUaW1lID8gdGhpcy5zZWxmRm9ybWF0RGF0ZShlbmREYXRlVGltZSkgOiBsb2NhbGUubm9DaG9vc2U7XG4gICAgbGV0IGJ0bkNscyA9IGRpc2FibGVCdG4gPyAnYnV0dG9uIGJ1dHRvbi1kaXNhYmxlJyA6ICdidXR0b24nO1xuICAgIGlmICh0eXBlID09PSAnb25lJykge1xuICAgICAgYnRuQ2xzICs9ICcgYnV0dG9uLWZ1bGwnO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNscyA9IGJ0bkNscztcbiAgfVxuXG4gIHRyaWdnZXJDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Db25maXJtLCBkaXNhYmxlQnRuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZGlzYWJsZUJ0bikge1xuICAgICAgb25Db25maXJtKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZkZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0U3RyID0gJycsIGxvY2FsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRTdHIsIGxvY2FsZSk7XG4gIH1cbn1cbiJdfQ==