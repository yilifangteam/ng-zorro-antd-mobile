import { Component, ViewEncapsulation, Input, forwardRef } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PickerViewComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r7);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r5.itemStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", val_r6.label ? val_r6.label : val_r6, " ");
} }
function PickerViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", 4, 5);
    ɵngcc0.ɵɵelement(3, "div", 6);
    ɵngcc0.ɵɵelementStart(4, "div", 7);
    ɵngcc0.ɵɵtemplate(5, PickerViewComponent_div_2_div_5_Template, 2, 3, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.indicatorStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", item_r2);
} }
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
PickerViewComponent.ɵfac = function PickerViewComponent_Factory(t) { return ɵPickerViewComponent_BaseFactory(t || PickerViewComponent); };
PickerViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PickerViewComponent, selectors: [["PickerView"], ["nzm-picker-view"]], inputs: { data: "data", cols: "cols", indicatorStyle: "indicatorStyle", itemStyle: "itemStyle", cascade: "cascade" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PickerViewComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [[1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 3, "ngStyle"], ["indicator", ""], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", "ngStyle", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id", "ngStyle"]], template: function PickerViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, PickerViewComponent_div_2_Template, 6, 3, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dataForRender);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2 });
PickerViewComponent.propDecorators = {
    data: [{ type: Input }],
    cols: [{ type: Input }],
    cascade: [{ type: Input }],
    indicatorStyle: [{ type: Input }],
    itemStyle: [{ type: Input }]
};
const ɵPickerViewComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(PickerViewComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerViewComponent, [{
        type: Component,
        args: [{
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
            }]
    }], null, { data: [{
            type: Input
        }], cols: [{
            type: Input
        }], indicatorStyle: [{
            type: Input
        }], itemStyle: [{
            type: Input
        }], cascade: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3BpY2tlci12aWV3L3BpY2tlci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFpQixLQUFLLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhekUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7QUFBRyxJQVozRDtBQUNHO0FBQTZCLFFBYzlCLFNBQUksR0FBZSxFQUFFLENBQUM7QUFDeEIsUUFDRSxTQUFJLEdBQVcsQ0FBQyxDQUFDO0FBQ25CLFFBR0UsbUJBQWMsR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFDRSxjQUFTLEdBQVcsRUFBRSxDQUFDO0FBQ3pCLElBdURBLENBQUM7QUFDRCxJQXZERSxjQUFjO0FBQ2hCLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbEMsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hDLFFBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSTtBQUNOLFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMs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dWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vcGlja2VyL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUGlja2VyVmlldywgbnptLXBpY2tlci12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQaWNrZXJWaWV3Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlclZpZXdDb21wb25lbnQgZXh0ZW5kcyBQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBvcHRpb25zO1xuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGNvbHM6IG51bWJlciA9IDM7XG4gIEBJbnB1dCgpXG4gIGNhc2NhZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGluZGljYXRvclN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgaXRlbVN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBwaWNrZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMuY29scyA9IHRoaXMuY29scztcbiAgICB0aGlzLm9wdGlvbnMuY2FzY2FkZSA9IHRoaXMuY2FzY2FkZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhcmdldCA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoID09PSAwICYmIHRoaXMuZ2VuZXJhdGVBcnJheURhdGEodGhpcy5vcHRpb25zLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0YUZvclJlbmRlci5wdXNoKHRoaXMuZ2VuZXJhdGVBcnJheURhdGEodGhpcy5vcHRpb25zLmRhdGEpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmdldEluaXRWYWx1ZUluZGV4KHRoaXMuZGF0YUZvclJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBgJHtpbmRleH1gLCBjdXJyZW50WTogMCB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbG9hZFBpY2tlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueVtdKTogdm9pZCB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGlja2VyVmlld0luaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xzKSB7XG4gICAgICB0aGlzLmRhdGFGb3JSZW5kZXIgPSBbXTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSB8fCBjaGFuZ2VzLmNvbHMpIHtcbiAgICAgIHRoaXMucGlja2VyVmlld0luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGlja2VyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZWxvYWRQaWNrZXIoKTtcbiAgfVxufVxuIl19