import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
CalendarShortcutPanelComponent.ɵfac = function CalendarShortcutPanelComponent_Factory(t) { return new (t || CalendarShortcutPanelComponent)(); };
CalendarShortcutPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarShortcutPanelComponent, selectors: [["CalendarShortcutPanel"], ["nzm-calendar-shortcut-panel"]], hostVars: 2, hostBindings: function CalendarShortcutPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("shortcut-panel", ctx.shortcutPanel);
    } }, inputs: { locale: "locale", onSelect: "onSelect" }, decls: 8, vars: 4, consts: [[1, "item", 3, "click"]], template: function CalendarShortcutPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_0_listener() { return ctx.onClick("today"); });
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 0);
        ɵngcc0.ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_2_listener() { return ctx.onClick("yesterday"); });
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 0);
        ɵngcc0.ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_4_listener() { return ctx.onClick("lastweek"); });
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 0);
        ɵngcc0.ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_6_listener() { return ctx.onClick("lastmonth"); });
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.props.locale.today);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.props.locale.yesterday);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.props.locale.lastWeek);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.props.locale.lastMonth);
    } }, encapsulation: 2 });
CalendarShortcutPanelComponent.ctorParameters = () => [];
CalendarShortcutPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    onSelect: [{ type: Input }],
    shortcutPanel: [{ type: HostBinding, args: ['class.shortcut-panel',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarShortcutPanelComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarShortcutPanel, nzm-calendar-shortcut-panel',
                template: "<div class=\"item\" (click)=\"onClick('today')\">{{ props.locale.today }}</div>\n<div class=\"item\" (click)=\"onClick('yesterday')\">{{ props.locale.yesterday }}</div>\n<div class=\"item\" (click)=\"onClick('lastweek')\">{{ props.locale.lastWeek }}</div>\n<div class=\"item\" (click)=\"onClick('lastmonth')\">{{ props.locale.lastMonth }}</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { shortcutPanel: [{
            type: HostBinding,
            args: ['class.shortcut-panel']
        }], locale: [{
            type: Input
        }], onSelect: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL3Nob3J0Y3V0LXBhbmVsL3Nob3J0Y3V0LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpGLE1BQU0sT0FBTyw4QkFBOEI7QUFDM0MsSUFhRTtBQUFnQixRQWJoQixVQUFLLEdBQUcsRUFBb0MsQ0FBQztBQUMvQyxRQVV1QyxrQkFBYSxHQUFZLElBQUksQ0FBQztBQUNyRSxRQUdFLFlBQU8sR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0FBQzdCLFlBQUksTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEMsWUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzdCLFlBQ0ksUUFBUSxJQUFJLEVBQUU7QUFDbEIsZ0JBQU0sS0FBSyxPQUFPO0FBQ2xCLG9CQUFRLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbkUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3JFLENBQUM7QUFDVixvQkFBUSxNQUFNO0FBQ2QsZ0JBQ00sS0FBSyxXQUFXO0FBQ3RCLG9CQUFRLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDekUsQ0FBQztBQUNWLG9CQUFRLE1BQU07QUFDZCxnQkFDTSxLQUFLLFVBQVU7QUFDckIsb0JBQVEsUUFBUSxDQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3JFLENBQUM7QUFDVixvQkFBUSxNQUFNO0FBQ2QsZ0JBQ00sS0FBSyxXQUFXO0FBQ3RCLG9CQUFRLFFBQVEsQ0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3hFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyRSxDQUFDO0FBQ1Ysb0JBQVEsTUFBTTtBQUNkLGFBQUs7QUFDTCxRQUFFLENBQUMsQ0FBQTtBQUNILElBcENpQixDQUFDO0FBQ2xCLElBWkUsSUFDSSxNQUFNLENBQUMsS0FBSztBQUNsQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksUUFBUSxDQUFDLEtBQUs7QUFDcEIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0g7MERBaEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7VUFBb0Qsa0JBQzlEOzt3Q0FBOEMsa0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUFDO0FBQ1k7QUFHVixxQkFETCxLQUFLO0FBQ04sdUJBR0MsS0FBSztBQUNOLDRCQUlDLFdBQVcsU0FBQyxzQkFBc0I7QUFBTTs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2hvcnRjdXRQYW5lbFByb3BzVHlwZSB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJTaG9ydGN1dFBhbmVsLCBuem0tY2FsZW5kYXItc2hvcnRjdXQtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvcnRjdXQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2hvcnRjdXRQYW5lbENvbXBvbmVudCB7XG4gIHByb3BzID0ge30gYXMgQ2FsZW5kYXJTaG9ydGN1dFBhbmVsUHJvcHNUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsb2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmxvY2FsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvblNlbGVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvcnRjdXQtcGFuZWwnKSBzaG9ydGN1dFBhbmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljayA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICBvblNlbGVjdChcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCksIDApLFxuICAgICAgICAgIG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSwgMTIpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgICBvblNlbGVjdChcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgLSAxLCAwKSxcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgLSAxLCAxMilcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xhc3R3ZWVrJzpcbiAgICAgICAgb25TZWxlY3QoXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gNiwgMCksXG4gICAgICAgICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpLCAxMilcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xhc3Rtb250aCc6XG4gICAgICAgIG9uU2VsZWN0KFxuICAgICAgICAgIG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSAtIDI5LCAwKSxcbiAgICAgICAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCksIDEyKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==