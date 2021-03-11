import { Component, ViewEncapsulation, Input, forwardRef } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class PickerViewComponent extends PickerComponent {
    constructor() {
        super(...arguments);
        this.data = [];
        this.cols = 3;
        this.indicatorStyle = {};
        this.itemStyle = {};
    }
    pickerViewInit() {
        this.options.data = this.data;
        this.options.cols = this.cols;
        this.options.cascade = this.cascade;
        this.init();
    }
    init() {
        this.selectedTarget = [];
        if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
            this.dataForRender.push(this.generateArrayData(this.options.data));
        }
        if (this.options.value.length > 0) {
            this.getInitValueIndex(this.dataForRender);
        }
        else {
            for (let index = 0; index < this.dataForRender.length; index++) {
                this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
            }
        }
        setTimeout(() => {
            this.reloadPicker();
        });
    }
    writeValue(value) {
        if (value) {
            this.options.value = value;
            this.init();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { }
    ngOnInit() {
        this.pickerViewInit();
    }
    ngOnChanges(changes) {
        if (changes.cols) {
            this.dataForRender = [];
        }
        if (changes.data || changes.cols) {
            this.pickerViewInit();
        }
    }
    ngAfterViewInit() {
        this.currentPicker = this.elementRef.nativeElement;
        this.reloadPicker();
    }
}
PickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'PickerView, nzm-picker-view',
                template: "<div #picker class=\"am-picker\" style=\"flex-direction: row; align-items: center;\">\n  <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n    <div #indicator class=\"am-picker-col-indicator \" [ngStyle]=\"indicatorStyle\"></div>\n    <div id=\"{{ i }}\" class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\"></div>\n    <div class=\"am-picker-col-content\">\n      <div *ngFor=\"let val of item; let i = index\" id=\"{{ i }}\" class=\"am-picker-col-item\" [ngStyle]=\"itemStyle\">\n        {{ val.label ? val.label : val }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PickerViewComponent),
                        multi: true
                    }
                ]
            },] }
];
PickerViewComponent.propDecorators = {
    data: [{ type: Input }],
    cols: [{ type: Input }],
    cascade: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    itemStyle: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJwaWNrZXItdmlldy9waWNrZXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBaUIsS0FBSyxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWF6RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTtJQVp4RDs7UUFlRSxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBRXRCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFJakIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQXdEekIsQ0FBQztJQXREQyxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXNCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFTLElBQVMsQ0FBQztJQUVyQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLHFuQkFBMkM7Z0JBQzNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O21CQUdFLEtBQUs7bUJBRUwsS0FBSztzQkFFTCxLQUFLOzZCQUVMLEtBQUs7d0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vcGlja2VyL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUGlja2VyVmlldywgbnptLXBpY2tlci12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQaWNrZXJWaWV3Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlclZpZXdDb21wb25lbnQgZXh0ZW5kcyBQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBvcHRpb25zO1xuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGNvbHM6IG51bWJlciA9IDM7XG4gIEBJbnB1dCgpXG4gIGNhc2NhZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGluZGljYXRvclN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgaXRlbVN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBwaWNrZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMuY29scyA9IHRoaXMuY29scztcbiAgICB0aGlzLm9wdGlvbnMuY2FzY2FkZSA9IHRoaXMuY2FzY2FkZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoID09PSAwICYmIHRoaXMuZ2VuZXJhdGVBcnJheURhdGEodGhpcy5vcHRpb25zLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0YUZvclJlbmRlci5wdXNoKHRoaXMuZ2VuZXJhdGVBcnJheURhdGEodGhpcy5vcHRpb25zLmRhdGEpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldEluaXRWYWx1ZUluZGV4KHRoaXMuZGF0YUZvclJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBgJHtpbmRleH1gLCBjdXJyZW50WTogMCB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbG9hZFBpY2tlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueVtdKTogdm9pZCB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGlja2VyVmlld0luaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xzKSB7XG4gICAgICB0aGlzLmRhdGFGb3JSZW5kZXIgPSBbXTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSB8fCBjaGFuZ2VzLmNvbHMpIHtcbiAgICAgIHRoaXMucGlja2VyVmlld0luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGlja2VyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZWxvYWRQaWNrZXIoKTtcbiAgfVxufVxuIl19