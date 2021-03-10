import { Component, HostBinding, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import { CalendarDatePickerBaseComponent } from './datepicker.base.component';
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
CalendarDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarDatePicker, nzm-calendar-date-picker',
                template: "<CalendarWeekPanel [locale]=\"props.locale\"></CalendarWeekPanel>\n<div\n  #layout\n  class=\"wrapper\"\n  style=\"overflow-x:hidden;overflow-y:visible;-webkit-overflow-scrolling:touch;\"\n  (touchstart)=\"onTouchStart($event)\"\n  (touchmove)=\"onTouchMove($event)\"\n  (touchend)=\"onTouchEnd($event)\"\n>\n  <div #panel [ngStyle]=\"{ transform: transform }\">\n    <div *ngIf=\"canLoadPrev()\" class=\"load-tip\">{{ props.locale.loadPrevMonth }}</div>\n    <div class=\"months\">\n      <CalendarSingleMonth\n        *ngFor=\"let item of visibleMonth; let i = index\"\n        style=\"display: block;\"\n        [data]=\"item.component\"\n      ></CalendarSingleMonth>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPOUUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLCtCQUErQjtJQUM5RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBR1YsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUVmLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQXVDUCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFN0Qsc0JBQWlCLEdBQUcsQ0FBQyxJQUEyQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPO2FBQ1I7WUFDRCxPQUFPO2dCQUNMLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDakMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtnQkFDckMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDO29CQUMxRCxJQUFJ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LEtBQVU7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsU0FBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUIsU0FBUyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUE4QixFQUFFLEtBQVU7UUFDdEQsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDN0IsU0FBUyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBN0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCwyc0JBQTBDO2dCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7Ozt3QkFZRSxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFFcEMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBR25DLEtBQUs7c0JBSUwsS0FBSzt3QkFNTCxLQUFLO3dCQU1MLEtBQUs7cUNBT0wsS0FBSzt1QkFJTCxLQUFLO3lCQUtMLFdBQVcsU0FBQyxtQkFBbUI7eUJBQy9CLFdBQVcsU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlja2VyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci5iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyRGF0ZVBpY2tlciwgbnptLWNhbGVuZGFyLWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENhbGVuZGFyRGF0ZVBpY2tlckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgdHJhbnNmb3JtOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfcGFuZWw6IGFueTtcbiAgcHJpdmF0ZSBfaW5pdERlbHRhOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9sYXN0WTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZGVsdGE6IG51bWJlciA9IHRoaXMuX2luaXREZWx0YTtcblxuICBAVmlld0NoaWxkKCdsYXlvdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBsYXlvdXREb206IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcGFuZWxEb206IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgc2V0IG9uQ2VsbENsaWNrKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNlbGxDbGljayA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBlbmREYXRlKHZhbHVlKSB7XG4gICAgY29uc3Qgb2xkUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICB0aGlzLnByb3BzLmVuZERhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlY2VpdmVQcm9wcyhvbGRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHN0YXJ0RGF0ZSh2YWx1ZSkge1xuICAgIGNvbnN0IG9sZFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5zdGFydERhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlY2VpdmVQcm9wcyhvbGRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHByb3BzRGF0YSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4udmFsdWVcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvblNlbGVjdEhhc0Rpc2FibGVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdEhhc0Rpc2FibGVEYXRlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9uTGF5b3V0KHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkxheW91dCA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1jYWxlbmRhcicpIGFtQ2FsZW5kYXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhdGUtcGlja2VyJykgZGF0ZVBpY2tlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgZ2VuTW9udGhDb21wb25lbnQgPSAoZGF0YT86IERhdGVNb2RlbHMuTW9udGhEYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBtb250aERhdGE6IGRhdGEsXG4gICAgICBsb2NhbGU6IHRoaXMucHJvcHMubG9jYWxlLFxuICAgICAgcm93U2l6ZTogdGhpcy5wcm9wcy5yb3dTaXplLFxuICAgICAgb25DZWxsQ2xpY2s6IHRoaXMuYmFzZU9uQ2VsbENsaWNrLFxuICAgICAgZ2V0RGF0ZUV4dHJhOiB0aGlzLnByb3BzLmdldERhdGVFeHRyYSxcbiAgICAgIHJlZjogZG9tID0+IHtcbiAgICAgICAgZGF0YS5jb21wb25lbnRSZWYgPSBkb20gfHwgZGF0YS5jb21wb25lbnRSZWYgfHwgdW5kZWZpbmVkO1xuICAgICAgICBkYXRhLnVwZGF0ZUxheW91dCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoZGF0YSwgZG9tKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YS51cGRhdGVMYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUhlaWdodCA9IChkYXRhOiBEYXRlTW9kZWxzLk1vbnRoRGF0YSwgc2luZ2xlTW9udGgpID0+IHtcbiAgICBpZiAoc2luZ2xlTW9udGggJiYgc2luZ2xlTW9udGgud3JhcHBlckRpdkRPTSkge1xuICAgICAgaWYgKCFkYXRhLmhlaWdodCAmJiAhc2luZ2xlTW9udGgud3JhcHBlckRpdkRPTS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbXB1dGVIZWlnaHQoZGF0YSwgc2luZ2xlTW9udGgpLCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLmhlaWdodCA9IHNpbmdsZU1vbnRoLndyYXBwZXJEaXZET00uY2xpZW50SGVpZ2h0IHx8IGRhdGEuaGVpZ2h0IHx8IDA7XG4gICAgICBkYXRhLnkgPSBzaW5nbGVNb250aC53cmFwcGVyRGl2RE9NLm9mZnNldFRvcCB8fCBkYXRhLnkgfHwgMDtcbiAgICB9XG4gIH1cblxuICBzZXRMYXlvdXQgPSAoZG9tOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIGlmIChkb20pIHtcbiAgICAgIGNvbnN0IHsgb25MYXlvdXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChvbkxheW91dCkge1xuICAgICAgICBvbkxheW91dChkb20uY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IHRoaXMuY3JlYXRlT25TY3JvbGwoKTtcbiAgICAgIGRvbS5vbnNjcm9sbCA9IGV2dCA9PiB7XG4gICAgICAgIHNjcm9sbEhhbmRsZXIoe1xuICAgICAgICAgIGNsaWVudDogZG9tLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBmdWxsOiAoZXZ0LmN1cnJlbnRUYXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmNsaWVudEhlaWdodCxcbiAgICAgICAgICB0b3A6IChldnQuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzZXRQYW5lbCA9IChkb206IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fcGFuZWwgPSBkb207XG4gIH1cblxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLl9sYXN0WSA9IGV2ZW50LnRvdWNoZXNbMF0uc2NyZWVuWSB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMuX2RlbHRhID0gdGhpcy5faW5pdERlbHRhO1xuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCBlbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGlzUmVhY2hUb3AgPSBlbGUuc2Nyb2xsVG9wID09PSAwO1xuXG4gICAgaWYgKGlzUmVhY2hUb3ApIHtcbiAgICAgIHRoaXMuX2RlbHRhID0gKGV2ZW50LnRvdWNoZXNbMF0uc2NyZWVuWSB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKSAtIHRoaXMuX2xhc3RZO1xuICAgICAgaWYgKHRoaXMuX2RlbHRhID4gMCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5fZGVsdGEgPiA4MCkge1xuICAgICAgICAgIHRoaXMuX2RlbHRhID0gODA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RlbHRhID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKHRoaXMuX3BhbmVsLnN0eWxlLCBgdHJhbnNsYXRlM2QoMCwke3RoaXMuX2RlbHRhfXB4LDApYCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIHRoaXMub25GaW5pc2goKTtcbiAgfVxuXG4gIG9uRmluaXNoKCkge1xuICAgIGlmICh0aGlzLl9kZWx0YSA+IDQwICYmIHRoaXMuY2FuTG9hZFByZXYoKSkge1xuICAgICAgdGhpcy5nZW5Nb250aERhdGEodGhpcy5zdGF0ZS5tb250aHNbMF0uZmlyc3REYXRlLCAtMSk7XG5cbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0gdGhpcy5zdGF0ZS5tb250aHMuc2xpY2UoMCwgdGhpcy5wcm9wcy5pbml0YWxNb250aHMpO1xuXG4gICAgICB0aGlzLnN0YXRlLm1vbnRocy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICBpZiAobS51cGRhdGVMYXlvdXQpIHtcbiAgICAgICAgICBtLnVwZGF0ZUxheW91dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2Zvcm0odGhpcy5fcGFuZWwuc3R5bGUsIGB0cmFuc2xhdGUzZCgwLDAsMClgKTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb24odGhpcy5fcGFuZWwuc3R5bGUsICcuM3MnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wYW5lbCkge1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb24odGhpcy5fcGFuZWwuc3R5bGUsICcnKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgc2V0VHJhbnNmb3JtKG5vZGVTdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgdmFsdWU6IGFueSkge1xuICAgIHRoaXMudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgbm9kZVN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIG5vZGVTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldFRyYW5zaXRpb24obm9kZVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uLCB2YWx1ZTogYW55KSB7XG4gICAgbm9kZVN0eWxlLnRyYW5zaXRpb24gPSB2YWx1ZTtcbiAgICBub2RlU3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zZXRMYXlvdXQodGhpcy5sYXlvdXREb20ubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zZXRQYW5lbCh0aGlzLnBhbmVsRG9tLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=