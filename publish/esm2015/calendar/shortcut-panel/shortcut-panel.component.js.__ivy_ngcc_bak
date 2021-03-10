import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
export class CalendarShortcutPanelComponent {
    constructor() {
        this.props = {};
        this.shortcutPanel = true;
        this.onClick = (type) => {
            const { onSelect } = this.props;
            const today = new Date();
            switch (type) {
                case 'today':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'yesterday':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12));
                    break;
                case 'lastweek':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'lastmonth':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
            }
        };
    }
    set locale(value) {
        this.props.locale = value;
    }
    set onSelect(value) {
        this.props.onSelect = value;
    }
}
CalendarShortcutPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarShortcutPanel, nzm-calendar-shortcut-panel',
                template: "<div class=\"item\" (click)=\"onClick('today')\">{{ props.locale.today }}</div>\n<div class=\"item\" (click)=\"onClick('yesterday')\">{{ props.locale.yesterday }}</div>\n<div class=\"item\" (click)=\"onClick('lastweek')\">{{ props.locale.lastWeek }}</div>\n<div class=\"item\" (click)=\"onClick('lastmonth')\">{{ props.locale.lastMonth }}</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarShortcutPanelComponent.ctorParameters = () => [];
CalendarShortcutPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    onSelect: [{ type: Input }],
    shortcutPanel: [{ type: HostBinding, args: ['class.shortcut-panel',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjYWxlbmRhci9zaG9ydGN1dC1wYW5lbC9zaG9ydGN1dC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpGLE1BQU0sT0FBTyw4QkFBOEI7SUFjekM7UUFiQSxVQUFLLEdBQUcsRUFBb0MsQ0FBQztRQVdSLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSW5FLFlBQU8sR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFekIsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxPQUFPO29CQUNWLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbkUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3JFLENBQUM7b0JBQ0YsTUFBTTtnQkFFUixLQUFLLFdBQVc7b0JBQ2QsUUFBUSxDQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUN6RSxDQUFDO29CQUNGLE1BQU07Z0JBRVIsS0FBSyxVQUFVO29CQUNiLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyRSxDQUFDO29CQUNGLE1BQU07Z0JBRVIsS0FBSyxXQUFXO29CQUNkLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3hFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyRSxDQUFDO29CQUNGLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQTtJQW5DYyxDQUFDO0lBWGhCLElBQ0ksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQ0ksUUFBUSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0RBQW9EO2dCQUM5RCxzV0FBOEM7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O3FCQUlFLEtBQUs7dUJBSUwsS0FBSzs0QkFLTCxXQUFXLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNob3J0Y3V0UGFuZWxQcm9wc1R5cGUgfSBmcm9tICcuL1Byb3BzVHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbGVuZGFyU2hvcnRjdXRQYW5lbCwgbnptLWNhbGVuZGFyLXNob3J0Y3V0LXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3J0Y3V0LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNob3J0Y3V0UGFuZWxDb21wb25lbnQge1xuICBwcm9wcyA9IHt9IGFzIENhbGVuZGFyU2hvcnRjdXRQYW5lbFByb3BzVHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5sb2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb25TZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3J0Y3V0LXBhbmVsJykgc2hvcnRjdXRQYW5lbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uQ2xpY2sgPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgb25TZWxlY3QoXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpLCAwKSxcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCksIDEyKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAneWVzdGVyZGF5JzpcbiAgICAgICAgb25TZWxlY3QoXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gMSwgMCksXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gMSwgMTIpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsYXN0d2Vlayc6XG4gICAgICAgIG9uU2VsZWN0KFxuICAgICAgICAgIG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSAtIDYsIDApLFxuICAgICAgICAgIG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSwgMTIpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsYXN0bW9udGgnOlxuICAgICAgICBvblNlbGVjdChcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgLSAyOSwgMCksXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpLCAxMilcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=