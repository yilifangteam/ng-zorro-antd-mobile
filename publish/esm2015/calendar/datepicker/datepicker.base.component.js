import { DateModels } from '../date/DataTypes';
import { formatDate } from '../util';
import defaultLocale from '../locale/zh_CN';
export class CalendarDatePickerBaseComponent {
    constructor() {
        this.props = {
            prefixCls: 'rmc-calendar',
            infinite: false,
            infiniteOpt: false,
            defaultDate: new Date(),
            initalMonths: 6,
            locale: defaultLocale
        };
        this.state = {
            months: []
        };
        this.visibleMonth = [];
        this.getDateWithoutTime = (date) => {
            if (!date) {
                return 0;
            }
            return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };
        this.genWeekData = (firstDate) => {
            const minDateTime = this.getDateWithoutTime(this.props.minDate);
            const maxDateTime = this.getDateWithoutTime(this.props.maxDate) || Number.POSITIVE_INFINITY;
            const weeks = [];
            const nextMonth = this.getMonthDate(firstDate, 1).firstDate;
            let currentDay = firstDate;
            let currentWeek = [];
            weeks.push(currentWeek);
            let startWeekday = currentDay.getDay();
            if (startWeekday > 0) {
                for (let i = 0; i < startWeekday; i++) {
                    currentWeek.push({});
                }
            }
            while (currentDay < nextMonth) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }
                const dayOfMonth = currentDay.getDate();
                const tick = +currentDay;
                currentWeek.push({
                    tick,
                    dayOfMonth,
                    selected: DateModels.SelectType.None,
                    isFirstOfMonth: dayOfMonth === 1,
                    isLastOfMonth: false,
                    outOfDate: tick < minDateTime || tick > maxDateTime
                });
                currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
            }
            currentWeek[currentWeek.length - 1].isLastOfMonth = true;
            return weeks;
        };
        this.selectDateRange = (startDate, endDate, clear = false) => {
            const { getDateExtra, type, onSelectHasDisableDate } = this.props;
            if (type === 'one') {
                endDate = undefined;
            }
            const time1 = this.getDateWithoutTime(startDate), time2 = this.getDateWithoutTime(endDate);
            const startDateTick = !time2 || time1 < time2 ? time1 : time2;
            const endDateTick = time2 && time1 > time2 ? time1 : time2;
            const startMonthDate = this.getMonthDate(new Date(startDateTick)).firstDate;
            const endMonthDate = endDateTick ? new Date(endDateTick) : this.getMonthDate(new Date(startDateTick)).lastDate;
            let unuseable = [], needUpdate = false;
            this.state.months
                .filter(m => {
                return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
            })
                .forEach(m => {
                m.weeks.forEach(w => w
                    .filter(d => {
                    if (!endDateTick) {
                        return d.tick && this.inDate(startDateTick, d.tick);
                    }
                    else {
                        return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
                    }
                })
                    .forEach(d => {
                    const oldValue = d.selected;
                    if (clear) {
                        d.selected = DateModels.SelectType.None;
                    }
                    else {
                        const info = (getDateExtra && getDateExtra(new Date(d.tick))) || {};
                        if (d.outOfDate || info.disable) {
                            unuseable.push(d.tick);
                        }
                        if (this.inDate(startDateTick, d.tick)) {
                            if (type === 'one') {
                                d.selected = DateModels.SelectType.Single;
                            }
                            else if (!endDateTick) {
                                d.selected = DateModels.SelectType.Only;
                            }
                            else if (startDateTick !== endDateTick) {
                                d.selected = DateModels.SelectType.Start;
                            }
                            else {
                                d.selected = DateModels.SelectType.All;
                            }
                        }
                        else if (this.inDate(endDateTick, d.tick)) {
                            d.selected = DateModels.SelectType.End;
                        }
                        else {
                            d.selected = DateModels.SelectType.Middle;
                        }
                    }
                    needUpdate = needUpdate || d.selected !== oldValue;
                }));
                if (needUpdate && m.componentRef) {
                    m.componentRef.updateWeeks();
                }
            });
            if (unuseable.length > 0) {
                if (onSelectHasDisableDate) {
                    onSelectHasDisableDate(unuseable.map(tick => new Date(tick)));
                }
                else {
                    console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
                }
            }
        };
        this.computeVisible = (clientHeight, scrollTop) => {
            let needUpdate = false;
            const MAX_VIEW_PORT = clientHeight * 2;
            const MIN_VIEW_PORT = clientHeight;
            // 大缓冲区外过滤规则
            const filterFunc = (vm) => vm.y &&
                vm.height &&
                (vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT);
            if (this.props.infiniteOpt && this.visibleMonth.length > 12) {
                this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate);
            }
            // 当小缓冲区不满时填充
            if (this.visibleMonth.length > 0) {
                const last = this.visibleMonth[this.visibleMonth.length - 1];
                if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
                    const lastIndex = this.state.months.indexOf(last);
                    for (let i = 1; i <= 2; i++) {
                        const index = lastIndex + i;
                        if (index < this.state.months.length && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
                            this.visibleMonth.push(this.state.months[index]);
                        }
                        else {
                            if (this.canLoadNext()) {
                                this.genMonthData(undefined, 1);
                            }
                        }
                    }
                    needUpdate = true;
                }
                const first = this.visibleMonth[0];
                if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
                    const firstIndex = this.state.months.indexOf(first);
                    for (let i = 1; i <= 2; i++) {
                        const index = firstIndex - i;
                        if (index >= 0 && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
                            this.visibleMonth.unshift(this.state.months[index]);
                            needUpdate = true;
                        }
                    }
                }
            }
            else if (this.state.months.length > 0) {
                this.visibleMonth = this.state.months.filter(filterFunc);
                needUpdate = true;
            }
            return needUpdate;
        };
        this.createOnScroll = () => {
            // let timer: any;
            let clientHeight = 0, scrollTop = 0;
            return (data) => {
                const { client, top } = data;
                clientHeight = client;
                scrollTop = top;
                this.computeVisible(clientHeight, scrollTop);
                // 以上方法目前无问题，如果后续有性能问题，改用如下方法，但以下方法会导致刷新稍微延迟现象
                // if (timer) {
                //   return;
                // }
                //
                // timer = setTimeout(() => {
                //   timer = undefined;
                //
                //   if (this.computeVisible(clientHeight, scrollTop)) {
                //     console.log('update dom');
                //   }
                // }, 50);
            };
        };
        this.baseOnCellClick = (day) => {
            if (!day.tick) {
                return;
            }
            if (this.props.onCellClick) {
                this.props.onCellClick(new Date(day.tick));
            }
        };
    }
    init() {
        const { initalMonths = 6, defaultDate } = this.props;
        for (let i = 0; i < initalMonths; i++) {
            if (this.canLoadNext()) {
                this.genMonthData(defaultDate, i);
            }
        }
        this.visibleMonth = [...this.state.months];
    }
    receiveProps(oldValue, newValue) {
        if (oldValue && newValue) {
            if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
                if (oldValue.startDate) {
                    this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
                }
                if (newValue.startDate) {
                    this.selectDateRange(newValue.startDate, newValue.endDate);
                }
            }
        }
    }
    getMonthDate(date = new Date(), addMonth = 0) {
        const y = date.getFullYear(), m = date.getMonth();
        return {
            firstDate: new Date(y, m + addMonth, 1),
            lastDate: new Date(y, m + 1 + addMonth, 0)
        };
    }
    canLoadPrev() {
        const { minDate } = this.props;
        return (!minDate ||
            this.state.months.length <= 0 ||
            +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate);
    }
    canLoadNext() {
        const { maxDate } = this.props;
        return (!maxDate ||
            this.state.months.length <= 0 ||
            +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate);
    }
    genMonthData(date, addMonth = 0) {
        if (!date) {
            date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
        }
        if (!date) {
            date = new Date();
        }
        const { locale } = this.props;
        const { firstDate, lastDate } = this.getMonthDate(date, addMonth);
        const weeks = this.genWeekData(firstDate);
        const title = formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
        const data = {
            title,
            firstDate,
            lastDate,
            weeks
        };
        data.component = this.genMonthComponent(data);
        if (addMonth >= 0) {
            this.state.months.push(data);
        }
        else {
            this.state.months.unshift(data);
        }
        const { startDate, endDate } = this.props;
        if (startDate) {
            this.selectDateRange(startDate, endDate);
        }
        return data;
    }
    inDate(date, tick) {
        return date <= tick && tick < date + 24 * 3600000;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sYUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBTTVDLE1BQU0sT0FBTywrQkFBK0I7SUFpQjFDO1FBaEJBLFVBQUssR0FBRztZQUNOLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3ZCLFlBQVksRUFBRSxDQUFDO1lBQ2YsTUFBTSxFQUFFLGFBQWE7U0FDQyxDQUFDO1FBRXpCLFVBQUssR0FBUTtZQUNYLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUVGLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQztRQXVEMUMsdUJBQWtCLEdBQUcsQ0FBQyxJQUFXLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUE7UUFFRCxnQkFBVyxHQUFHLENBQUMsU0FBZSxFQUFFLEVBQUU7WUFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsTUFBTSxXQUFXLEdBQUcs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RUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRixNQUFNLElBQUksR0FBRztZQUNYLEtBQUs7WUFDTCxTQUFTO1lBQ1QsUUFBUTtZQUNSLEtBQUs7U0FDa0IsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFDRCxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUMvQixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3BELENBQUM7Q0FnS0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclByb3BzVHlwZSB9IGZyb20gJy4vZGF0ZXBpY2tlci5wcm9wcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vbG9jYWxlL3poX0NOJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyU3RhdGVUeXBlIHtcbiAgbW9udGhzOiBEYXRlTW9kZWxzLk1vbnRoRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXRlUGlja2VyQmFzZUNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHByZWZpeENsczogJ3JtYy1jYWxlbmRhcicsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGluZmluaXRlT3B0OiBmYWxzZSxcbiAgICBkZWZhdWx0RGF0ZTogbmV3IERhdGUoKSxcbiAgICBpbml0YWxNb250aHM6IDYsXG4gICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlXG4gIH0gYXMgRGF0ZXBpY2tlclByb3BzVHlwZTtcblxuICBzdGF0ZTogYW55ID0ge1xuICAgIG1vbnRoczogW11cbiAgfTtcblxuICB2aXNpYmxlTW9udGg6IERhdGVNb2RlbHMuTW9udGhEYXRhW10gPSBbXTtcbiAgZ2VuTW9udGhDb21wb25lbnQ6IChkYXRhKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB7IGluaXRhbE1vbnRocyA9IDYsIGRlZmF1bHREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGFsTW9udGhzOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNhbkxvYWROZXh0KCkpIHtcbiAgICAgICAgdGhpcy5nZW5Nb250aERhdGEoZGVmYXVsdERhdGUsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZpc2libGVNb250aCA9IFsuLi50aGlzLnN0YXRlLm1vbnRoc107XG4gIH1cblxuICByZWNlaXZlUHJvcHMob2xkVmFsdWU6IERhdGVwaWNrZXJQcm9wc1R5cGUsIG5ld1ZhbHVlOiBEYXRlcGlja2VyUHJvcHNUeXBlKSB7XG4gICAgaWYgKG9sZFZhbHVlICYmIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAob2xkVmFsdWUuc3RhcnREYXRlICE9PSBuZXdWYWx1ZS5zdGFydERhdGUgfHwgb2xkVmFsdWUuZW5kRGF0ZSAhPT0gbmV3VmFsdWUuZW5kRGF0ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUuc3RhcnREYXRlKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3REYXRlUmFuZ2Uob2xkVmFsdWUuc3RhcnREYXRlLCBvbGRWYWx1ZS5lbmREYXRlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUuc3RhcnREYXRlKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3REYXRlUmFuZ2UobmV3VmFsdWUuc3RhcnREYXRlLCBuZXdWYWx1ZS5lbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldE1vbnRoRGF0ZShkYXRlID0gbmV3IERhdGUoKSwgYWRkTW9udGggPSAwKSB7XG4gICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG0gPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0RGF0ZTogbmV3IERhdGUoeSwgbSArIGFkZE1vbnRoLCAxKSxcbiAgICAgIGxhc3REYXRlOiBuZXcgRGF0ZSh5LCBtICsgMSArIGFkZE1vbnRoLCAwKVxuICAgIH07XG4gIH1cblxuICBjYW5Mb2FkUHJldigpIHtcbiAgICBjb25zdCB7IG1pbkRhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICFtaW5EYXRlIHx8XG4gICAgICB0aGlzLnN0YXRlLm1vbnRocy5sZW5ndGggPD0gMCB8fFxuICAgICAgK3RoaXMuZ2V0TW9udGhEYXRlKG1pbkRhdGUpLmZpcnN0RGF0ZSA8ICt0aGlzLnN0YXRlLm1vbnRoc1swXS5maXJzdERhdGVcbiAgICApO1xuICB9XG5cbiAgY2FuTG9hZE5leHQoKSB7XG4gICAgY29uc3QgeyBtYXhEYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAhbWF4RGF0ZSB8fFxuICAgICAgdGhpcy5zdGF0ZS5tb250aHMubGVuZ3RoIDw9IDAgfHxcbiAgICAgICt0aGlzLmdldE1vbnRoRGF0ZShtYXhEYXRlKS5maXJzdERhdGUgPiArdGhpcy5zdGF0ZS5tb250aHNbdGhpcy5zdGF0ZS5tb250aHMubGVuZ3RoIC0gMV0uZmlyc3REYXRlXG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGVXaXRob3V0VGltZSA9IChkYXRlPzogRGF0ZSkgPT4ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiArbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgfVxuXG4gIGdlbldlZWtEYXRhID0gKGZpcnN0RGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IG1pbkRhdGVUaW1lID0gdGhpcy5nZXREYXRlV2l0aG91dFRpbWUodGhpcy5wcm9wcy5taW5EYXRlKTtcbiAgICBjb25zdCBtYXhEYXRlVGltZSA9IHRoaXMuZ2V0RGF0ZVdpdGhvdXRUaW1lKHRoaXMucHJvcHMubWF4RGF0ZSkgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgY29uc3Qgd2Vla3M6IERhdGVNb2RlbHMuQ2VsbERhdGFbXVtdID0gW107XG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXRNb250aERhdGUoZmlyc3REYXRlLCAxKS5maXJzdERhdGU7XG4gICAgbGV0IGN1cnJlbnREYXkgPSBmaXJzdERhdGU7XG4gICAgbGV0IGN1cnJlbnRXZWVrOiBEYXRlTW9kZWxzLkNlbGxEYXRhW10gPSBbXTtcbiAgICB3ZWVrcy5wdXNoKGN1cnJlbnRXZWVrKTtcblxuICAgIGxldCBzdGFydFdlZWtkYXkgPSBjdXJyZW50RGF5LmdldERheSgpO1xuICAgIGlmIChzdGFydFdlZWtkYXkgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0V2Vla2RheTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRXZWVrLnB1c2goe30gYXMgRGF0ZU1vZGVscy5DZWxsRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChjdXJyZW50RGF5IDwgbmV4dE1vbnRoKSB7XG4gICAgICBpZiAoY3VycmVudFdlZWsubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIGN1cnJlbnRXZWVrID0gW107XG4gICAgICAgIHdlZWtzLnB1c2goY3VycmVudFdlZWspO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF5T2ZNb250aCA9IGN1cnJlbnREYXkuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgdGljayA9ICtjdXJyZW50RGF5O1xuICAgICAgY3VycmVudFdlZWsucHVzaCh7XG4gICAgICAgIHRpY2ssXG4gICAgICAgIGRheU9mTW9udGgsXG4gICAgICAgIHNlbGVjdGVkOiBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuTm9uZSxcbiAgICAgICAgaXNGaXJzdE9mTW9udGg6IGRheU9mTW9udGggPT09IDEsXG4gICAgICAgIGlzTGFzdE9mTW9udGg6IGZhbHNlLFxuICAgICAgICBvdXRPZkRhdGU6IHRpY2sgPCBtaW5EYXRlVGltZSB8fCB0aWNrID4gbWF4RGF0ZVRpbWVcbiAgICAgIH0pO1xuICAgICAgY3VycmVudERheSA9IG5ldyBEYXRlKGN1cnJlbnREYXkuZ2V0VGltZSgpICsgMzYwMCAqIDI0ICogMTAwMCk7XG4gICAgfVxuICAgIGN1cnJlbnRXZWVrW2N1cnJlbnRXZWVrLmxlbmd0aCAtIDFdLmlzTGFzdE9mTW9udGggPSB0cnVlO1xuICAgIHJldHVybiB3ZWVrcztcbiAgfVxuXG4gIGdlbk1vbnRoRGF0YShkYXRlPzogRGF0ZSwgYWRkTW9udGg6IG51bWJlciA9IDApIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIGRhdGUgPSBhZGRNb250aCA+PSAwID8gdGhpcy5zdGF0ZS5tb250aHNbdGhpcy5zdGF0ZS5tb250aHMubGVuZ3RoIC0gMV0uZmlyc3REYXRlIDogdGhpcy5zdGF0ZS5tb250aHNbMF0uZmlyc3REYXRlO1xuICAgIH1cbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCB7IGxvY2FsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZpcnN0RGF0ZSwgbGFzdERhdGUgfSA9IHRoaXMuZ2V0TW9udGhEYXRlKGRhdGUsIGFkZE1vbnRoKTtcbiAgICBjb25zdCB3ZWVrcyA9IHRoaXMuZ2VuV2Vla0RhdGEoZmlyc3REYXRlKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1hdERhdGUoZmlyc3REYXRlLCBsb2NhbGUgPyBsb2NhbGUubW9udGhUaXRsZSA6ICd5eXl5L01NJywgdGhpcy5wcm9wcy5sb2NhbGUpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGZpcnN0RGF0ZSxcbiAgICAgIGxhc3REYXRlLFxuICAgICAgd2Vla3NcbiAgICB9IGFzIERhdGVNb2RlbHMuTW9udGhEYXRhO1xuICAgIGRhdGEuY29tcG9uZW50ID0gdGhpcy5nZW5Nb250aENvbXBvbmVudChkYXRhKTtcbiAgICBpZiAoYWRkTW9udGggPj0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5tb250aHMucHVzaChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5tb250aHMudW5zaGlmdChkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgdGhpcy5zZWxlY3REYXRlUmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpbkRhdGUoZGF0ZTogbnVtYmVyLCB0aWNrOiBudW1iZXIpIHtcbiAgICByZXR1cm4gZGF0ZSA8PSB0aWNrICYmIHRpY2sgPCBkYXRlICsgMjQgKiAzNjAwMDAwO1xuICB9XG5cbiAgc2VsZWN0RGF0ZVJhbmdlID0gKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZT86IERhdGUsIGNsZWFyID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IGdldERhdGVFeHRyYSwgdHlwZSwgb25TZWxlY3RIYXNEaXNhYmxlRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZSA9PT0gJ29uZScpIHtcbiAgICAgIGVuZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRpbWUxID0gdGhpcy5nZXREYXRlV2l0aG91dFRpbWUoc3RhcnREYXRlKSxcbiAgICAgIHRpbWUyID0gdGhpcy5nZXREYXRlV2l0aG91dFRpbWUoZW5kRGF0ZSk7XG4gICAgY29uc3Qgc3RhcnREYXRlVGljayA9ICF0aW1lMiB8fCB0aW1lMSA8IHRpbWUyID8gdGltZTEgOiB0aW1lMjtcbiAgICBjb25zdCBlbmREYXRlVGljayA9IHRpbWUyICYmIHRpbWUxID4gdGltZTIgPyB0aW1lMSA6IHRpbWUyO1xuXG4gICAgY29uc3Qgc3RhcnRNb250aERhdGUgPSB0aGlzLmdldE1vbnRoRGF0ZShuZXcgRGF0ZShzdGFydERhdGVUaWNrKSkuZmlyc3REYXRlO1xuICAgIGNvbnN0IGVuZE1vbnRoRGF0ZSA9IGVuZERhdGVUaWNrID8gbmV3IERhdGUoZW5kRGF0ZVRpY2spIDogdGhpcy5nZXRNb250aERhdGUobmV3IERhdGUoc3RhcnREYXRlVGljaykpLmxhc3REYXRlO1xuXG4gICAgbGV0IHVudXNlYWJsZTogbnVtYmVyW10gPSBbXSxcbiAgICAgIG5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLm1vbnRoc1xuICAgICAgLmZpbHRlcihtID0+IHtcbiAgICAgICAgcmV0dXJuIG0uZmlyc3REYXRlID49IHN0YXJ0TW9udGhEYXRlICYmIG0uZmlyc3REYXRlIDw9IGVuZE1vbnRoRGF0ZTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChtID0+IHtcbiAgICAgICAgbS53ZWVrcy5mb3JFYWNoKHcgPT5cbiAgICAgICAgICB3XG4gICAgICAgICAgICAuZmlsdGVyKGQgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWVuZERhdGVUaWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudGljayAmJiB0aGlzLmluRGF0ZShzdGFydERhdGVUaWNrLCBkLnRpY2spO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnRpY2sgJiYgZC50aWNrID49IHN0YXJ0RGF0ZVRpY2sgJiYgZC50aWNrIDw9IGVuZERhdGVUaWNrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZC5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgaWYgKGNsZWFyKSB7XG4gICAgICAgICAgICAgICAgZC5zZWxlY3RlZCA9IERhdGVNb2RlbHMuU2VsZWN0VHlwZS5Ob25lO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSAoZ2V0RGF0ZUV4dHJhICYmIGdldERhdGVFeHRyYShuZXcgRGF0ZShkLnRpY2spKSkgfHwge307XG4gICAgICAgICAgICAgICAgaWYgKGQub3V0T2ZEYXRlIHx8IGluZm8uZGlzYWJsZSkge1xuICAgICAgICAgICAgICAgICAgdW51c2VhYmxlLnB1c2goZC50aWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5EYXRlKHN0YXJ0RGF0ZVRpY2ssIGQudGljaykpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnb25lJykge1xuICAgICAgICAgICAgICAgICAgICBkLnNlbGVjdGVkID0gRGF0ZU1vZGVscy5TZWxlY3RUeXBlLlNpbmdsZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWVuZERhdGVUaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGQuc2VsZWN0ZWQgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuT25seTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhcnREYXRlVGljayAhPT0gZW5kRGF0ZVRpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgZC5zZWxlY3RlZCA9IERhdGVNb2RlbHMuU2VsZWN0VHlwZS5TdGFydDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGQuc2VsZWN0ZWQgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuQWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkRhdGUoZW5kRGF0ZVRpY2ssIGQudGljaykpIHtcbiAgICAgICAgICAgICAgICAgIGQuc2VsZWN0ZWQgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuRW5kO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkLnNlbGVjdGVkID0gRGF0ZU1vZGVscy5TZWxlY3RUeXBlLk1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IG5lZWRVcGRhdGUgfHwgZC5zZWxlY3RlZCAhPT0gb2xkVmFsdWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBpZiAobmVlZFVwZGF0ZSAmJiBtLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgIG0uY29tcG9uZW50UmVmLnVwZGF0ZVdlZWtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGlmICh1bnVzZWFibGUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKG9uU2VsZWN0SGFzRGlzYWJsZURhdGUpIHtcbiAgICAgICAgb25TZWxlY3RIYXNEaXNhYmxlRGF0ZSh1bnVzZWFibGUubWFwKHRpY2sgPT4gbmV3IERhdGUodGljaykpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVW51c2FibGUgZGF0ZS4gWW91IGNhbiBoYW5kbGUgYnkgb25TZWxlY3RIYXNEaXNhYmxlRGF0ZS4nLCB1bnVzZWFibGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVWaXNpYmxlID0gKGNsaWVudEhlaWdodDogbnVtYmVyLCBzY3JvbGxUb3A6IG51bWJlcikgPT4ge1xuICAgIGxldCBuZWVkVXBkYXRlID0gZmFsc2U7XG4gICAgY29uc3QgTUFYX1ZJRVdfUE9SVCA9IGNsaWVudEhlaWdodCAqIDI7XG4gICAgY29uc3QgTUlOX1ZJRVdfUE9SVCA9IGNsaWVudEhlaWdodDtcblxuICAgIC8vIOWkp+e8k+WGsuWMuuWklui/h+a7pOinhOWImVxuICAgIGNvbnN0IGZpbHRlckZ1bmMgPSAodm06IERhdGVNb2RlbHMuTW9udGhEYXRhKSA9PlxuICAgICAgdm0ueSAmJlxuICAgICAgdm0uaGVpZ2h0ICYmXG4gICAgICAodm0ueSArIHZtLmhlaWdodCA+IHNjcm9sbFRvcCAtIE1BWF9WSUVXX1BPUlQgJiYgdm0ueSA8IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCArIE1BWF9WSUVXX1BPUlQpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGVPcHQgJiYgdGhpcy52aXNpYmxlTW9udGgubGVuZ3RoID4gMTIpIHtcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0gdGhpcy52aXNpYmxlTW9udGguZmlsdGVyKGZpbHRlckZ1bmMpLnNvcnQoKGEsIGIpID0+ICthLmZpcnN0RGF0ZSAtICtiLmZpcnN0RGF0ZSk7XG4gICAgfVxuXG4gICAgLy8g5b2T5bCP57yT5Yay5Yy65LiN5ruh5pe25aGr5YWFXG4gICAgaWYgKHRoaXMudmlzaWJsZU1vbnRoLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnZpc2libGVNb250aFt0aGlzLnZpc2libGVNb250aC5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0LnkgIT09IHVuZGVmaW5lZCAmJiBsYXN0LmhlaWdodCAmJiBsYXN0LnkgKyBsYXN0LmhlaWdodCA8IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCArIE1JTl9WSUVXX1BPUlQpIHtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zdGF0ZS5tb250aHMuaW5kZXhPZihsYXN0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBsYXN0SW5kZXggKyBpO1xuICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMuc3RhdGUubW9udGhzLmxlbmd0aCAmJiB0aGlzLnZpc2libGVNb250aC5pbmRleE9mKHRoaXMuc3RhdGUubW9udGhzW2luZGV4XSkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVNb250aC5wdXNoKHRoaXMuc3RhdGUubW9udGhzW2luZGV4XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkxvYWROZXh0KCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZW5Nb250aERhdGEodW5kZWZpbmVkLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy52aXNpYmxlTW9udGhbMF07XG4gICAgICBpZiAoZmlyc3QueSAhPT0gdW5kZWZpbmVkICYmIGZpcnN0LmhlaWdodCAmJiBmaXJzdC55ID4gc2Nyb2xsVG9wIC0gTUlOX1ZJRVdfUE9SVCkge1xuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gdGhpcy5zdGF0ZS5tb250aHMuaW5kZXhPZihmaXJzdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlyc3RJbmRleCAtIGk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgdGhpcy52aXNpYmxlTW9udGguaW5kZXhPZih0aGlzLnN0YXRlLm1vbnRoc1tpbmRleF0pIDwgMCkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGgudW5zaGlmdCh0aGlzLnN0YXRlLm1vbnRoc1tpbmRleF0pO1xuICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vbnRocy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHRoaXMuc3RhdGUubW9udGhzLmZpbHRlcihmaWx0ZXJGdW5jKTtcbiAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZWVkVXBkYXRlO1xuICB9XG5cbiAgY3JlYXRlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgLy8gbGV0IHRpbWVyOiBhbnk7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IDAsXG4gICAgICBzY3JvbGxUb3AgPSAwO1xuXG4gICAgcmV0dXJuIChkYXRhOiB7IGZ1bGw6IG51bWJlcjsgY2xpZW50OiBudW1iZXI7IHRvcDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY2xpZW50LCB0b3AgfSA9IGRhdGE7XG4gICAgICBjbGllbnRIZWlnaHQgPSBjbGllbnQ7XG4gICAgICBzY3JvbGxUb3AgPSB0b3A7XG5cbiAgICAgIHRoaXMuY29tcHV0ZVZpc2libGUoY2xpZW50SGVpZ2h0LCBzY3JvbGxUb3ApO1xuXG4gICAgICAvLyDku6XkuIrmlrnms5Xnm67liY3ml6Dpl67popjvvIzlpoLmnpzlkI7nu63mnInmgKfog73pl67popjvvIzmlLnnlKjlpoLkuIvmlrnms5XvvIzkvYbku6XkuIvmlrnms5XkvJrlr7zoh7TliLfmlrDnqI3lvq7lu7bov5/njrDosaFcblxuICAgICAgLy8gaWYgKHRpbWVyKSB7XG4gICAgICAvLyAgIHJldHVybjtcbiAgICAgIC8vIH1cbiAgICAgIC8vXG4gICAgICAvLyB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gICB0aW1lciA9IHVuZGVmaW5lZDtcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmICh0aGlzLmNvbXB1dGVWaXNpYmxlKGNsaWVudEhlaWdodCwgc2Nyb2xsVG9wKSkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgZG9tJyk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sIDUwKTtcbiAgICB9O1xuICB9XG5cbiAgYmFzZU9uQ2VsbENsaWNrID0gKGRheTogRGF0ZU1vZGVscy5DZWxsRGF0YSkgPT4ge1xuICAgIGlmICghZGF5LnRpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25DZWxsQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2sobmV3IERhdGUoZGF5LnRpY2spKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==