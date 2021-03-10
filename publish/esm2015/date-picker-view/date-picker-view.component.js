import { Input, Output, Component, forwardRef, HostBinding, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DatePickerOptions } from '../date-picker/date-picker-options.provider';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DatePickerViewComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", val_r4.label ? val_r4.label : val_r4, " ");
} }
function DatePickerViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵelement(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵtemplate(4, DatePickerViewComponent_div_0_div_4_Template, 2, 2, "div", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.indicatorStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", item_r1);
} }
export class DatePickerViewComponent extends DatePickerComponent {
    constructor() {
        super(...arguments);
        this.mode = 'date';
        this.minDate = new Date(2000, 5, 1, 0, 0, 0);
        this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
        this.value = new Date();
        this.disabled = false;
        this.indicatorStyle = {};
        this.showErrorToast = true;
        this.showErrorToastInterval = 2000;
        this.onValueChange = new EventEmitter();
        this.amPicker = true;
    }
    get locale() {
        return this.options.locale;
    }
    set locale(value) {
        this.options.locale = value;
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    reloadPicker() {
        if (this.currentPicker) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    writeValue(value) {
        if (value) {
            this.value = value;
            this.optionInit();
            this.init();
        }
    }
    registerOnChange(fn) {
        this.ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this.ngModelOnTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    optionInit() {
        this.options.mode = this.mode;
        this.options.minDate = this.minDate;
        this.options.maxDate = this.maxDate;
        this.options.disabled = this.disabled;
        this.options.locale = this.locale;
        this.options.value = this.value;
        this.options.showErrorToast = this.showErrorToast;
        this.options.showErrorToastInterval = this.showErrorToastInterval;
        this.options.onValueChange = this.onValueChange;
        this.checkMode(this.options.mode);
        const value = this.transformDateFormat(this.options.value).split('-');
        if (value.length > 0) {
            this.currentTime = value.map(item => {
                return parseInt(item, 0);
            });
        }
    }
    ngOnInit() {
        this.optionInit();
        this.localeProvider();
    }
    ngAfterViewInit() {
        this.currentPicker = this.elementRef.nativeElement;
        this.reloadPicker();
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.options.value = changes.value.currentValue;
            const value = this.transformDateFormat(this.options.value).split('-');
            if (value.length > 0) {
                this.currentTime = value.map(item => {
                    return parseInt(item, 0);
                });
            }
            if (!this.judgeEqualArray(this.currentTime, this.resultArr, this.resultArr.length) ||
                this.judgeEqualArray(this.currentTime, this.min_date, this.currentTime.length) ||
                this.judgeTime(this.currentTime, this.max_date)) {
                this.optionInit();
                this.init();
            }
        }
        if (changes.mode || changes.minDate || changes.maxDate || changes.disabled || changes.locale) {
            this.optionInit();
            this.init();
        }
    }
}
DatePickerViewComponent.ɵfac = function DatePickerViewComponent_Factory(t) { return ɵDatePickerViewComponent_BaseFactory(t || DatePickerViewComponent); };
DatePickerViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatePickerViewComponent, selectors: [["DatePickerView"], ["nzm-date-picker-view"]], hostVars: 2, hostBindings: function DatePickerViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-picker", ctx.amPicker);
    } }, inputs: { mode: "mode", minDate: "minDate", maxDate: "maxDate", value: "value", disabled: "disabled", indicatorStyle: "indicatorStyle", showErrorToast: "showErrorToast", showErrorToastInterval: "showErrorToastInterval", locale: "locale" }, outputs: { onValueChange: "onValueChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DatePickerViewComponent),
                multi: true
            },
            DatePickerOptions
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "am-picker-col", 4, "ngFor", "ngForOf"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px", 3, "ngStyle"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]], template: function DatePickerViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DatePickerViewComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dataWithStr);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2 });
DatePickerViewComponent.propDecorators = {
    mode: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    locale: [{ type: Input }],
    showErrorToast: [{ type: Input }],
    showErrorToastInterval: [{ type: Input }],
    onValueChange: [{ type: Output }],
    amPicker: [{ type: HostBinding, args: ['class.am-picker',] }]
};
const ɵDatePickerViewComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DatePickerViewComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerViewComponent, [{
        type: Component,
        args: [{
                selector: 'DatePickerView, nzm-date-picker-view',
                template: "<div *ngFor=\"let item of dataWithStr; let i = index\" class=\"am-picker-col\">\n  <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"indicatorStyle\"></div>\n  <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n  <div class=\"am-picker-col-content\">\n    <div id=\"{{ i }}\" *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\">\n      {{ val.label ? val.label : val }}\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerViewComponent),
                        multi: true
                    },
                    DatePickerOptions
                ]
            }]
    }], null, { mode: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], indicatorStyle: [{
            type: Input
        }], showErrorToast: [{
            type: Input
        }], showErrorToastInterval: [{
            type: Input
        }], onValueChange: [{
            type: Output
        }], amPicker: [{
            type: HostBinding,
            args: ['class.am-picker']
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItdmlldy9kYXRlLXBpY2tlci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBR1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVoRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1CO0FBQzlELElBZEY7QUFDRztBQUE2QixRQWU5QixTQUFJLEdBQVcsTUFBTSxDQUFDO0FBQ3hCLFFBQ0UsWUFBTyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsUUFDRSxZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNuRCxRQUNFLFVBQUssR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzNCLFFBQ0UsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUM1QixRQUNFLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0FBQzlCLFFBVUUsbUJBQWMsR0FBWSxJQUFJLENBQUM7QUFDakMsUUFDRSwyQkFBc0IsR0FBVyxJQUFJLENBQUM7QUFDeEMsUUFDRSxrQkFBYSxHQUFz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QUNMLElBQUUsQ0FBQztBQUNIO21EQXBJQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQ7OztzTUFBZ0Qsa0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxTQUFTLEVBQUUsc0JBQ1QsMEJBQ0U7SUFBTyxFQUFFO1NBQWlCLDBCQUMxQjtFQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLDBCQUN0RDtJQUFLLEVBQUUsSUFBSTtJQUNaO1dBQ0QsaUJBQWlCO2dCQUNsQixjQUNGOzs7OzJFQUNJO0FBQUM7QUFBMkMsbUJBRTlDLEtBQUs7QUFDTixzQkFDQyxLQUFLO0FBQ04sc0JBQ0MsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTix1QkFDQyxLQUFLO0FBQ04sNkJBQ0MsS0FBSztBQUNOLHFCQUNDLEtBQUs7QUFDTiw2QkFRQyxLQUFLO0FBQ04scUNBQ0MsS0FBSztBQUNOLDRCQUNDLE1BQU07QUFDUCx1QkFFQyxXQUFXLFNBQUMsaUJBQWlCO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci1vcHRpb25zLnByb3ZpZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRGF0ZVBpY2tlclZpZXcsIG56bS1kYXRlLXBpY2tlci12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJWaWV3Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBEYXRlUGlja2VyT3B0aW9uc1xuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyVmlld0NvbXBvbmVudCBleHRlbmRzIERhdGVQaWNrZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBtb2RlOiBzdHJpbmcgPSAnZGF0ZSc7XG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgyMDAwLCA1LCAxLCAwLCAwLCAwKTtcbiAgQElucHV0KClcbiAgbWF4RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKDIwMzAsIDEsIDEsIDIzLCA1OSwgNTkpO1xuICBASW5wdXQoKVxuICB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGluZGljYXRvclN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvY2FsZTtcbiAgfVxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLmxvY2FsZSA9IHZhbHVlO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNob3dFcnJvclRvYXN0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2hvd0Vycm9yVG9hc3RJbnRlcnZhbDogbnVtYmVyID0gMjAwMDtcbiAgQE91dHB1dCgpXG4gIG9uVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcGlja2VyJylcbiAgYW1QaWNrZXIgPSB0cnVlO1xuXG4gIHJlbG9hZFBpY2tlcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGlja2VyKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjNzJztcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uY3VycmVudFksIDApO1xuICAgICAgICAgIHNlbGYuY3VycmVudFBpY2tlci5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2luZGV4ICogc2VsZi5saW5lSGVpZ2h0fXB4KWA7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vcHRpb25Jbml0KCk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogRGF0ZSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kZWxPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5uZ01vZGVsT25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG9wdGlvbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zLm1vZGUgPSB0aGlzLm1vZGU7XG4gICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgdGhpcy5vcHRpb25zLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgdGhpcy5vcHRpb25zLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICB0aGlzLm9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgdGhpcy5vcHRpb25zLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMuc2hvd0Vycm9yVG9hc3QgPSB0aGlzLnNob3dFcnJvclRvYXN0O1xuICAgIHRoaXMub3B0aW9ucy5zaG93RXJyb3JUb2FzdEludGVydmFsID0gdGhpcy5zaG93RXJyb3JUb2FzdEludGVydmFsO1xuICAgIHRoaXMub3B0aW9ucy5vblZhbHVlQ2hhbmdlID0gdGhpcy5vblZhbHVlQ2hhbmdlO1xuICAgIHRoaXMuY2hlY2tNb2RlKHRoaXMub3B0aW9ucy5tb2RlKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJhbnNmb3JtRGF0ZUZvcm1hdCh0aGlzLm9wdGlvbnMudmFsdWUpLnNwbGl0KCctJyk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB2YWx1ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9uSW5pdCgpO1xuICAgIHRoaXMubG9jYWxlUHJvdmlkZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRQaWNrZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbG9hZFBpY2tlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudmFsdWUgPSBjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmFuc2Zvcm1EYXRlRm9ybWF0KHRoaXMub3B0aW9ucy52YWx1ZSkuc3BsaXQoJy0nKTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB2YWx1ZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMuY3VycmVudFRpbWUsIHRoaXMucmVzdWx0QXJyLCB0aGlzLnJlc3VsdEFyci5sZW5ndGgpIHx8XG4gICAgICAgIHRoaXMuanVkZ2VFcXVhbEFycmF5KHRoaXMuY3VycmVudFRpbWUsIHRoaXMubWluX2RhdGUsIHRoaXMuY3VycmVudFRpbWUubGVuZ3RoKSB8fFxuICAgICAgICB0aGlzLmp1ZGdlVGltZSh0aGlzLmN1cnJlbnRUaW1lLCB0aGlzLm1heF9kYXRlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMub3B0aW9uSW5pdCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5tb2RlIHx8IGNoYW5nZXMubWluRGF0ZSB8fCBjaGFuZ2VzLm1heERhdGUgfHwgY2hhbmdlcy5kaXNhYmxlZCB8fCBjaGFuZ2VzLmxvY2FsZSkge1xuICAgICAgdGhpcy5vcHRpb25Jbml0KCk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==