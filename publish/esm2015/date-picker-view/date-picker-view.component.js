import { Input, Output, Component, forwardRef, HostBinding, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DatePickerOptions } from '../date-picker/date-picker-options.provider';
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
DatePickerViewComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLXZpZXcvZGF0ZS1waWNrZXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUdaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFlaEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQWJoRTs7UUFnQkUsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUV0QixZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5QyxZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqRCxVQUFLLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBVzVCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLDJCQUFzQixHQUFXLElBQUksQ0FBQztRQUV0QyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGFBQVEsR0FBRyxJQUFJLENBQUM7SUF3RmxCLENBQUM7SUF6R0MsSUFDSSxN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QWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQy9DO2dCQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzVGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7OztZQW5JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQscWZBQWdEO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3RELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELGlCQUFpQjtpQkFDbEI7YUFDRjs7O21CQUdFLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxLQUFLO3FCQUVMLEtBQUs7NkJBU0wsS0FBSztxQ0FFTCxLQUFLOzRCQUVMLE1BQU07dUJBR04sV0FBVyxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgQ29tcG9uZW50LFxuICBPbkNoYW5nZXMsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyT3B0aW9ucyB9IGZyb20gJy4uL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdEYXRlUGlja2VyVmlldywgbnptLWRhdGUtcGlja2VyLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXItdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlclZpZXdDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIERhdGVQaWNrZXJPcHRpb25zXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgRGF0ZVBpY2tlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IHN0cmluZyA9ICdkYXRlJztcbiAgQElucHV0KClcbiAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKDIwMDAsIDUsIDEsIDAsIDAsIDApO1xuICBASW5wdXQoKVxuICBtYXhEYXRlOiBEYXRlID0gbmV3IERhdGUoMjAzMCwgMSwgMSwgMjMsIDU5LCA1OSk7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaW5kaWNhdG9yU3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKVxuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9jYWxlO1xuICB9XG4gIHNldCBsb2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMubG9jYWxlID0gdmFsdWU7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2hvd0Vycm9yVG9hc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzaG93RXJyb3JUb2FzdEludGVydmFsOiBudW1iZXIgPSAyMDAwO1xuICBAT3V0cHV0KClcbiAgb25WYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1waWNrZXInKVxuICBhbVBpY2tlciA9IHRydWU7XG5cbiAgcmVsb2FkUGlja2VyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQaWNrZXIpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWRUYXJnZXQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHNlbGYuY3VycmVudFBpY2tlci5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuM3MnO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoaXRlbS5jdXJyZW50WSwgMCk7XG4gICAgICAgICAgc2VsZi5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7aW5kZXggKiBzZWxmLmxpbmVIZWlnaHR9cHgpYDtcbiAgICAgICAgfSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9wdGlvbkluaXQoKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBEYXRlKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMubmdNb2RlbE9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kZWxPblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgb3B0aW9uSW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMubW9kZSA9IHRoaXMubW9kZTtcbiAgICB0aGlzLm9wdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIHRoaXMub3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICB0aGlzLm9wdGlvbnMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMub3B0aW9ucy5zaG93RXJyb3JUb2FzdCA9IHRoaXMuc2hvd0Vycm9yVG9hc3Q7XG4gICAgdGhpcy5vcHRpb25zLnNob3dFcnJvclRvYXN0SW50ZXJ2YWwgPSB0aGlzLnNob3dFcnJvclRvYXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5vcHRpb25zLm9uVmFsdWVDaGFuZ2UgPSB0aGlzLm9uVmFsdWVDaGFuZ2U7XG4gICAgdGhpcy5jaGVja01vZGUodGhpcy5vcHRpb25zLm1vZGUpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmFuc2Zvcm1EYXRlRm9ybWF0KHRoaXMub3B0aW9ucy52YWx1ZSkuc3BsaXQoJy0nKTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHZhbHVlLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25Jbml0KCk7XG4gICAgdGhpcy5sb2NhbGVQcm92aWRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY3VycmVudFBpY2tlciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVsb2FkUGlja2VyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyYW5zZm9ybURhdGVGb3JtYXQodGhpcy5vcHRpb25zLnZhbHVlKS5zcGxpdCgnLScpO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHZhbHVlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5jdXJyZW50VGltZSwgdGhpcy5yZXN1bHRBcnIsIHRoaXMucmVzdWx0QXJyLmxlbmd0aCkgfHxcbiAgICAgICAgdGhpcy5qdWRnZUVxdWFsQXJyYXkodGhpcy5jdXJyZW50VGltZSwgdGhpcy5taW5fZGF0ZSwgdGhpcy5jdXJyZW50VGltZS5sZW5ndGgpIHx8XG4gICAgICAgIHRoaXMuanVkZ2VUaW1lKHRoaXMuY3VycmVudFRpbWUsIHRoaXMubWF4X2RhdGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5vcHRpb25Jbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1vZGUgfHwgY2hhbmdlcy5taW5EYXRlIHx8IGNoYW5nZXMubWF4RGF0ZSB8fCBjaGFuZ2VzLmRpc2FibGVkIHx8IGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICB0aGlzLm9wdGlvbkluaXQoKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19