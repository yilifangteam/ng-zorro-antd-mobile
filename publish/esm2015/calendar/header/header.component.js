import { Component, ViewEncapsulation, Input, Output, HostBinding, TemplateRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CalendarHeaderComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_span_0_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.triggerCancel(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.closeIcon, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarHeaderComponent_span_1_ng_template_1_Template(rf, ctx) { }
function CalendarHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_span_1_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.triggerCancel(); });
    ɵngcc0.ɵɵtemplate(1, CalendarHeaderComponent_span_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIcon);
} }
function CalendarHeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵlistener("click", function CalendarHeaderComponent_span_4_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.triggerClear(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.clearIcon || ctx_r2.locale.clear);
} }
export class CalendarHeaderComponent {
    constructor() {
        this.closeIcon_component = false;
        this._closeIcon = 'X';
        this.onCancel = new EventEmitter();
        this.onClear = new EventEmitter();
        this.header = true;
    }
    get locale() {
        return this._locale;
    }
    set locale(value) {
        this._locale = value;
    }
    get closeIcon() {
        return this._closeIcon;
    }
    set closeIcon(value) {
        if (value instanceof TemplateRef) {
            this._closeIcon = value;
            this.closeIcon_component = true;
        }
        else {
            this._closeIcon = value;
            this.closeIcon_component = false;
        }
    }
    get showClear() {
        return this._showClear;
    }
    set showClear(value) {
        this._showClear = value;
    }
    triggerCancel() {
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }
    triggerClear() {
        if (this.onClear) {
            this.onClear.emit();
        }
    }
}
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(); };
CalendarHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarHeaderComponent, selectors: [["CalendarHeader"], ["nzm-calendar-header"]], hostVars: 2, hostBindings: function CalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("header", ctx.header);
    } }, inputs: { locale: "locale", closeIcon: "closeIcon", showClear: "showClear" }, outputs: { onCancel: "onCancel", onClear: "onClear" }, decls: 5, vars: 4, consts: [["class", "left", 3, "innerHTML", "click", 4, "ngIf"], ["class", "left", 3, "click", 4, "ngIf"], [1, "title"], ["class", "right", 3, "click", 4, "ngIf"], [1, "left", 3, "innerHTML", "click"], [1, "left", 3, "click"], [3, "ngTemplateOutlet"], [1, "right", 3, "click"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarHeaderComponent_span_0_Template, 1, 1, "span", 0);
        ɵngcc0.ɵɵtemplate(1, CalendarHeaderComponent_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, CalendarHeaderComponent_span_4_Template, 2, 1, "span", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closeIcon_component);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.closeIcon_component);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.title || ctx.locale.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showClear);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
CalendarHeaderComponent.ctorParameters = () => [];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    closeIcon: [{ type: Input }],
    showClear: [{ type: Input }],
    onCancel: [{ type: Output }],
    onClear: [{ type: Output }],
    header: [{ type: HostBinding, args: ['class.header',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'CalendarHeader, nzm-calendar-header',
                template: "<span *ngIf=\"!closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\" [innerHTML]=\"closeIcon\"></span>\n<span *ngIf=\"closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\">\n  <ng-template [ngTemplateOutlet]=\"closeIcon\"></ng-template>\n</span>\n<span class=\"title\">{{ title || locale.title }}</span>\n<span *ngIf=\"showClear\" class=\"right\" (click)=\"triggerClear()\">{{ clearIcon || locale.clear }}</span>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onCancel: [{
            type: Output
        }], onClear: [{
            type: Output
        }], header: [{
            type: HostBinding,
            args: ['class.header']
        }], locale: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], showClear: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9jYWxlbmRhci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwSCxNQUFNLE9BQU8sdUJBQXVCO0FBQ3BDLElBMENFO0FBQWdCLFFBekNoQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFJVSxlQUFVLEdBQVEsR0FBRyxDQUFDO0FBQ2hDLFFBNkJFLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUN4RCxRQUNFLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUN2RCxRQUMrQixXQUFNLEdBQVksSUFBSSxDQUFDO0FBQ3RELElBQ2lCLENBQUM7QUFDbEIsSUFuQ0UsSUFDSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLO0FBQ2xCLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFNBQVM7QUFDZixRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksU0FBUyxDQUFDLEtBQWdDO0FBQ2hELFFBQUksSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFXLEtBQUssQ0FBQztBQUN0QyxZQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxTQUFTO0FBQ2YsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFNBQVMsQ0FBQyxLQUFLO0FBQ3JCLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFTRSxhQUFhO0FBQ2YsUUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVk7QUFDZCxRQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO21EQTdEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1NBQXFDLGtCQUMvQzs7b0xBQXNDLGtCQUN0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs7O2lGQUNJO0FBQUM7QUFFTDtBQUNHLHFCQU1ELEtBQUs7QUFDTix3QkFNQyxLQUFLO0FBQ04sd0JBWUMsS0FBSztBQUNOLHVCQU1DLE1BQU07QUFDUCxzQkFDQyxNQUFNO0FBQ1AscUJBRUMsV0FBVyxTQUFDLGNBQWM7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZU1vZGVscyB9IGZyb20gJy4uL2RhdGUvRGF0YVR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQ2FsZW5kYXJIZWFkZXIsIG56bS1jYWxlbmRhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckhlYWRlckNvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsb3NlSWNvbl9jb21wb25lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2xlYXJJY29uOiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9jYWxlOiBEYXRlTW9kZWxzLkxvY2FsZTtcbiAgcHJpdmF0ZSBfc2hvd0NsZWFyOiBib29sZWFuO1xuICBwcml2YXRlIF9jbG9zZUljb246IGFueSA9ICdYJztcblxuICBASW5wdXQoKVxuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zZUljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlSWNvbjtcbiAgfVxuICBzZXQgY2xvc2VJY29uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2Nsb3NlSWNvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5jbG9zZUljb25fY29tcG9uZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xvc2VJY29uID0gPHN0cmluZz52YWx1ZTtcbiAgICAgIHRoaXMuY2xvc2VJY29uX2NvbXBvbmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc2hvd0NsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2xlYXI7XG4gIH1cbiAgc2V0IHNob3dDbGVhcih2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDbGVhciA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oZWFkZXInKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0cmlnZ2VyQ2FuY2VsKCkge1xuICAgIGlmICh0aGlzLm9uQ2FuY2VsKSB7XG4gICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyQ2xlYXIoKSB7XG4gICAgaWYgKHRoaXMub25DbGVhcikge1xuICAgICAgdGhpcy5vbkNsZWFyLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==