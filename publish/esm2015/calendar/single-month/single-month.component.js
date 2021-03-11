import { Component, ViewEncapsulation, HostBinding, Input, ElementRef } from '@angular/core';
import { DateModels } from '../date/DataTypes';
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
CalendarSingleMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarSingleMonth, nzm-single-month',
                template: "<div class=\"month-title\">\n  {{ props.monthData.title }}\n</div>\n<div class=\"date\">\n  <div *ngFor=\"let row of state.weekComponents; let i = index\" [ngClass]=\"row.rowCls\">\n    <div\n      *ngFor=\"let cell of row.weeksDataList; let j = index\"\n      class=\"{{ 'cell ' + ((cell.extra && cell.extra.cellCls) || '') }}\"\n      (click)=\"onClickCell(cell)\"\n    >\n      <div *ngIf=\"row.extra && row.extra.cellRender\">test</div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" class=\"date-wrapper\">\n        <span [ngClass]=\"cell.lCls\"></span>\n        <div [ngClass]=\"cell.cls\">\n          {{ (cell.day && cell.day.dayOfMonth) || '' }}\n        </div>\n        <span [ngClass]=\"cell.rCls\"></span>\n      </div>\n      <div *ngIf=\"!row.extra || (row.extra && row.extra.cellRender)\" [ngClass]=\"cell.infoCls\">\n        {{ cell.info }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarSingleMonthComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalendarSingleMonthComponent.propDecorators = {
    data: [{ type: Input }],
    singleMonth: [{ type: HostBinding, args: ['class.single-month',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIvc2luZ2xlLW1vbnRoL3NpbmdsZS1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUS9DLE1BQU0sT0FBTyw0QkFBNEI7SUFxQnZDLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBcEIzQyxVQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsUUFBUTtTQUNjLENBQUM7UUFFbEMsVUFBSyxHQUFHO1lBQ04sY0FBYyxFQUFFLEVBQUU7U0FDbkIsQ0FBQztRQVlpQyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUkvRCxZQUFPLEdBQUcsQ0FBQyxTQUFnQyxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQzVELE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3RSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEIsTUFBTSxJQUFJLFNBQVMsQ0FBQzthQUNyQjtZQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sS0FBSyxHQUFHLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVB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dWxhdGlvbiwgSG9zdEJpbmRpbmcsIElucHV0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTaW5nbGVNb250aFByb3BzVHlwZSB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJTaW5nbGVNb250aCwgbnptLXNpbmdsZS1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW5nbGUtbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2luZ2xlTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm9wcyA9IHtcbiAgICByb3dTaXplOiAnbm9ybWFsJ1xuICB9IGFzIENhbGVuZGFyU2luZ2xlTW9udGhQcm9wc1R5cGU7XG5cbiAgc3RhdGUgPSB7XG4gICAgd2Vla0NvbXBvbmVudHM6IFtdXG4gIH07XG4gIHJlZjogKGRvbSkgPT4gdm9pZDtcbiAgd3JhcHBlckRpdkRPTTogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpbmdsZS1tb250aCcpIHNpbmdsZU1vbnRoOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIGdlbldlZWsgPSAod2Vla3NEYXRhOiBEYXRlTW9kZWxzLkNlbGxEYXRhW10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGdldERhdGVFeHRyYSwgbW9udGhEYXRhLCBvbkNlbGxDbGljaywgbG9jYWxlLCByb3dTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCByb3dDbHMgPSAncm93JztcbiAgICBsZXQgd2Vla3NEYXRhTGlzdCA9IFtdO1xuICAgIGlmIChyb3dTaXplID09PSAneGwnKSB7XG4gICAgICByb3dDbHMgKz0gJyByb3cteGwnO1xuICAgIH1cblxuICAgIHdlZWtzRGF0YS5mb3JFYWNoKChkYXksIGRheU9mV2VlaykgPT4ge1xuICAgICAgY29uc3QgZXh0cmEgPSAoZ2V0RGF0ZUV4dHJhICYmIGdldERhdGVFeHRyYShuZXcgRGF0ZShkYXkudGljaykpKSB8fCB7fTtcbiAgICAgIGxldCBpbmZvID0gZXh0cmEuaW5mbztcbiAgICAgIGNvbnN0IGRpc2FibGUgPSBleHRyYS5kaXNhYmxlIHx8IGRheS5vdXRPZkRhdGU7XG5cbiAgICAgIGxldCBjbHMgPSAnZGF0ZSc7XG4gICAgICBsZXQgbENscyA9ICdsZWZ0JztcbiAgICAgIGxldCByQ2xzID0gJ3JpZ2h0JztcbiAgICAgIGxldCBpbmZvQ2xzID0gJ2luZm8nO1xuXG4gICAgICBpZiAoZGF5T2ZXZWVrID09PSAwIHx8IGRheU9mV2VlayA9PT0gNikge1xuICAgICAgICBjbHMgKz0gJyBncmV5JztcbiAgICAgIH1cblxuICAgICAgaWYgKGRpc2FibGUpIHtcbiAgICAgICAgY2xzICs9ICcgZGlzYWJsZSc7XG4gICAgICB9IGVsc2UgaWYgKGluZm8pIHtcbiAgICAgICAgY2xzICs9ICcgaW1wb3J0YW50JztcbiAgICAgIH1cblxuICAgICAgaWYgKGRheS5zZWxlY3RlZCkge1xuICAgICAgICBjbHMgKz0gJyBkYXRlLXNlbGVjdGVkJztcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IGRheS5zZWxlY3RlZDtcbiAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5Pbmx5OlxuICAgICAgICAgICAgaW5mbyA9IGxvY2FsZS5iZWdpbjtcbiAgICAgICAgICAgIGluZm9DbHMgKz0gJyBkYXRlLXNlbGVjdGVkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRGF0ZU1vZGVscy5TZWxlY3RUeXBlLkFsbDpcbiAgICAgICAgICAgIGluZm8gPSBsb2NhbGUuYmVnaW5fb3ZlcjtcbiAgICAgICAgICAgIGluZm9DbHMgKz0gJyBkYXRlLXNlbGVjdGVkJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuU3RhcnQ6XG4gICAgICAgICAgICBpbmZvID0gbG9jYWxlLmJlZ2luO1xuICAgICAgICAgICAgaW5mb0NscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgaWYgKGRheU9mV2VlayA9PT0gNiB8fCBkYXkuaXNMYXN0T2ZNb250aCkge1xuICAgICAgICAgICAgICBzdHlsZVR5cGUgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuQWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuTWlkZGxlOlxuICAgICAgICAgICAgaWYgKGRheU9mV2VlayA9PT0gMCB8fCBkYXkuaXNGaXJzdE9mTW9udGgpIHtcbiAgICAgICAgICAgICAgaWYgKGRheS5pc0xhc3RPZk1vbnRoIHx8IGRheU9mV2VlayA9PT0gNikge1xuICAgICAgICAgICAgICAgIHN0eWxlVHlwZSA9IERhdGVNb2RlbHMuU2VsZWN0VHlwZS5BbGw7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUeXBlID0gRGF0ZU1vZGVscy5TZWxlY3RUeXBlLlN0YXJ0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gNiB8fCBkYXkuaXNMYXN0T2ZNb250aCkge1xuICAgICAgICAgICAgICBzdHlsZVR5cGUgPSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuRW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuRW5kOlxuICAgICAgICAgICAgaW5mbyA9IGxvY2FsZS5vdmVyO1xuICAgICAgICAgICAgaW5mb0NscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgaWYgKGRheU9mV2VlayA9PT0gMCB8fCBkYXkuaXNGaXJzdE9mTW9udGgpIHtcbiAgICAgICAgICAgICAgc3R5bGVUeXBlID0gRGF0ZU1vZGVscy5TZWxlY3RUeXBlLkFsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5TaW5nbGU6XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuT25seTpcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5BbGw6XG4gICAgICAgICAgICBjbHMgKz0gJyBzZWxlY3RlZC1zaW5nbGUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuU3RhcnQ6XG4gICAgICAgICAgICBjbHMgKz0gJyBzZWxlY3RlZC1zdGFydCc7XG4gICAgICAgICAgICByQ2xzICs9ICcgZGF0ZS1zZWxlY3RlZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERhdGVNb2RlbHMuU2VsZWN0VHlwZS5NaWRkbGU6XG4gICAgICAgICAgICBjbHMgKz0gJyBzZWxlY3RlZC1taWRkbGUnO1xuICAgICAgICAgICAgbENscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgckNscyArPSAnIGRhdGUtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEYXRlTW9kZWxzLlNlbGVjdFR5cGUuRW5kOlxuICAgICAgICAgICAgY2xzICs9ICcgc2VsZWN0ZWQtZW5kJztcbiAgICAgICAgICAgIGxDbHMgKz0gJyBkYXRlLXNlbGVjdGVkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdlZWtzRGF0YUxpc3RbZGF5T2ZXZWVrXSA9IHtcbiAgICAgICAgbENscyxcbiAgICAgICAgY2xzLFxuICAgICAgICBkYXksXG4gICAgICAgIHJDbHMsXG4gICAgICAgIGluZm9DbHMsXG4gICAgICAgIGluZm8sXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBkaXNhYmxlLFxuICAgICAgICBvbkNlbGxDbGljazogb25DZWxsQ2xpY2ssXG4gICAgICAgIG1vbnRoRGF0YVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhdGUud2Vla0NvbXBvbmVudHNbaW5kZXhdID0ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgcm93Q2xzLFxuICAgICAgd2Vla3NEYXRhTGlzdFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVXZWVrcyA9IChtb250aERhdGE/OiBEYXRlTW9kZWxzLk1vbnRoRGF0YSkgPT4ge1xuICAgIChtb250aERhdGEgfHwgdGhpcy5wcm9wcy5tb250aERhdGEpLndlZWtzLmZvckVhY2goKHdlZWssIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmdlbldlZWsod2VlaywgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0V2FycHBlciA9IChkb206IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyRGl2RE9NID0gZG9tO1xuICB9XG5cbiAgb25DbGlja0NlbGwoaXRlbSkge1xuICAgIGlmICghaXRlbS5kaXNhYmxlICYmIGl0ZW0ub25DZWxsQ2xpY2spIHtcbiAgICAgIGl0ZW0ub25DZWxsQ2xpY2soaXRlbS5kYXksIGl0ZW0ubW9udGhEYXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFdhcnBwZXIodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnByb3BzLm1vbnRoRGF0YS53ZWVrcy5mb3JFYWNoKCh3ZWVrLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5nZW5XZWVrKHdlZWssIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZiA9IHRoaXMucHJvcHMucmVmO1xuICAgIHRoaXMucmVmKHRoaXMpO1xuICB9XG59XG4iXX0=