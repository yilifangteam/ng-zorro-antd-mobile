import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../slider/slider-steps/slider-steps.component';
import * as ɵngcc3 from '../slider/slider-marks/slider-marks.component';
import * as ɵngcc4 from '../slider/slider-track/slider-track.component';
import * as ɵngcc5 from '../slider/slider-handle/slider-handle.component';

function RangeComponent_SliderTrack_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "SliderTrack", 6);
} if (rf & 2) {
    const off_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r0.trackStyle[i_r3]);
    ɵngcc0.ɵɵproperty("className", "am-slider-track")("included", ctx_r0.included)("offset", off_r2)("length", ctx_r0.length[i_r3]);
} }
function RangeComponent_SliderHandle_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "SliderHandle", 7);
    ɵngcc0.ɵɵlistener("onChange", function RangeComponent_SliderHandle_4_Template_SliderHandle_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.handleChange($event, i_r5); })("onAfterChange", function RangeComponent_SliderHandle_4_Template_SliderHandle_onAfterChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.handleAfterChange($event, i_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("max", ctx_r1.max)("min", ctx_r1.min)("maxBound", ctx_r1.maxBound[i_r5])("minBound", ctx_r1.minBound[i_r5])("value", val_r4)("step", ctx_r1.step)("disabled", ctx_r1.disabled)("sliderLength", ctx_r1.sliderLength)("sliderStart", ctx_r1.sliderStart)("handleStyle", ctx_r1.handleStyle[i_r5]);
} }
export class RangeComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.offset = [];
        this.length = [];
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._defaultValue = [0, 0, 0];
        this._disabled = false;
        this._marks = {};
        this._dots = false;
        this._included = true;
        this._count = 1;
        this._allowCross = true;
        this._handleStyle = [];
        this._trackStyle = [];
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
        this.amWrapper = true;
        this._ngModelOnChange = () => { };
        this._ngModelOnTouched = () => { };
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.setValue(value);
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this._value = this._defaultValue;
        this.setValue(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get marks() {
        return this._marks;
    }
    set marks(value) {
        this._marks = value;
    }
    get dots() {
        return this._dots;
    }
    set dots(value) {
        this._dots = value;
    }
    get included() {
        return this._included;
    }
    set included(value) {
        this._included = value;
    }
    set count(value) {
        this._count = value;
    }
    set allowCross(value) {
        this._allowCross = value;
        this.setValueBound();
    }
    set pushable(value) {
        this._pushable = value;
        if (this.verifyPushable()) {
            this.setValueBound();
        }
    }
    get handleStyle() {
        return this._handleStyle;
    }
    set handleStyle(value) {
        this._handleStyle = value;
    }
    get trackStyle() {
        return this._trackStyle;
    }
    set trackStyle(value) {
        this._trackStyle = value;
    }
    get railStyle() {
        return this._railStyle;
    }
    set railStyle(value) {
        this._railStyle = value;
    }
    setCls() {
        this.sliderCls = {
            [`${this.prefixCls}-disabled`]: this._disabled
        };
    }
    initialValue() {
        const minTemp = this._min;
        if (!this.verifyPushable()) {
            this._pushable = 0;
            console.warn('pushable设置无效，已大于有些value间隔，被强制设为0');
        }
        const initialValue = Array.apply(null, Array(this._count + 1)).map(function () {
            return minTemp;
        });
        this._defaultValue = this._defaultValue !== undefined ? this._defaultValue : initialValue;
        this._value = this._value !== undefined ? this._value : this._defaultValue;
        // 验证count值
        this._count = this._value.length - 1;
        // 验证value区间
        for (let i = 0; i < this._value.length; i++) {
            if (this._value[i] < this._min) {
                this._value[i] = this._min;
            }
            else if (this._value[i] > this._max) {
                this._value[i] = this._max;
            }
        }
        if (this._count > 0) {
            this.upperBound = Math.max(...this._value);
            this.lowerBound = Math.min(...this._value);
        }
    }
    handleChange(e, i) {
        let temp = [...this._value];
        temp[i] = e;
        this.upperBound = Math.max(...temp);
        this.lowerBound = Math.min(...temp);
        this.setTrackStyle(temp);
        this.onChange.emit(temp);
    }
    handleAfterChange(e, i) {
        setTimeout(() => {
            this._value[i] = e;
            this.upperBound = Math.max(...this._value);
            this.lowerBound = Math.min(...this._value);
            this.setTrackStyle(this._value);
            this.onAfterChange.emit(this._value);
            this._ngModelOnChange(this._value);
            this.setValueBound();
        }, 0);
    }
    setTrackStyle(value) {
        if (value && value.length === this._count + 1) {
            value.sort((a, b) => a - b);
            for (let i = 0; i < this._count; i++) {
                this.offset[i] = (value[i] * 100) / (this._max - this._min);
                this.length[i] = ((value[i + 1] - value[i]) * 100) / (this._max - this._min);
            }
        }
    }
    setValueBound() {
        this.maxBound = [];
        this.minBound = [];
        if ((this._allowCross && this._pushable === undefined) || this._handleCount <= 1) {
            for (let i = 0; i < this._handleCount; i++) {
                this.maxBound[i] = this._max;
                this.minBound[i] = this._min;
            }
        }
        else {
            if (this._pushable === undefined) {
                this._pushable = 0;
            }
            for (let i = 0; i < this._handleCount; i++) {
                this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
                this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
            }
        }
    }
    verifyPushable() {
        for (let i = 1; i < this._handleCount; i++) {
            const diff = this._value[i] - this._value[i - 1];
            if (diff < this._pushable) {
                return false;
            }
        }
        return true;
    }
    writeValue(value) {
        this.setValue(value, true);
    }
    setValue(value, isWriteValue = false) {
        if (value) {
            this._value = value;
            this._handleCount = this._value.length + 1;
            this.initialValue();
            this.setValueBound();
            this.setCls();
            this.setTrackStyle(this._value);
            if (isWriteValue) {
                this._ngModelOnChange(this._value);
            }
            else {
                this.onAfterChange.emit(this._value);
            }
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
    ngOnInit() {
        this.initialValue();
        this.setValueBound();
        this._handleCount = this._count + 1;
        this.setCls();
        const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
        this.sliderLength = sliderCoords.width;
        this.sliderStart = sliderCoords.left;
    }
}
RangeComponent.ɵfac = function RangeComponent_Factory(t) { return new (t || RangeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RangeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RangeComponent, selectors: [["Range"], ["nzm-range"]], hostVars: 2, hostBindings: function RangeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-slider-wrapper", ctx.amWrapper);
    } }, inputs: { min: "min", max: "max", step: "step", value: "value", defaultValue: "defaultValue", disabled: "disabled", marks: "marks", dots: "dots", included: "included", count: "count", allowCross: "allowCross", pushable: "pushable", handleStyle: "handleStyle", trackStyle: "trackStyle", railStyle: "railStyle" }, outputs: { onChange: "onChange", onAfterChange: "onAfterChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RangeComponent),
                multi: true
            }
        ])], decls: 6, vars: 16, consts: [[1, "am-slider", 3, "ngClass"], [1, "am-slider-rail", 3, "ngStyle"], [3, "className", "included", "style", "offset", "length", 4, "ngFor", "ngForOf"], [3, "max", "min", "dots", "step", "marks", "upperBound", "lowerBound"], [3, "max", "min", "maxBound", "minBound", "value", "step", "disabled", "sliderLength", "sliderStart", "handleStyle", "onChange", "onAfterChange", 4, "ngFor", "ngForOf"], [3, "max", "min", "marks", "upperBound", "lowerBound"], [3, "className", "included", "offset", "length"], [3, "max", "min", "maxBound", "minBound", "value", "step", "disabled", "sliderLength", "sliderStart", "handleStyle", "onChange", "onAfterChange"]], template: function RangeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, RangeComponent_SliderTrack_2_Template, 1, 6, "SliderTrack", 2);
        ɵngcc0.ɵɵelement(3, "SliderSteps", 3);
        ɵngcc0.ɵɵtemplate(4, RangeComponent_SliderHandle_4_Template, 1, 10, "SliderHandle", 4);
        ɵngcc0.ɵɵelement(5, "SliderMarks", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.sliderCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.railStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.offset);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("max", ctx.max)("min", ctx.min)("dots", ctx.dots)("step", ctx.step)("marks", ctx.marks)("upperBound", ctx.upperBound)("lowerBound", ctx.lowerBound);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("max", ctx.max)("min", ctx.min)("marks", ctx.marks)("upperBound", ctx.upperBound)("lowerBound", ctx.lowerBound);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc2.SliderStepsComponent, ɵngcc3.SliderMarksComponent, ɵngcc4.SliderTrackComponent, ɵngcc5.SliderHandleComponent], encapsulation: 2 });
RangeComponent.ctorParameters = () => [
    { type: ElementRef }
];
RangeComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    disabled: [{ type: Input }],
    marks: [{ type: Input }],
    dots: [{ type: Input }],
    included: [{ type: Input }],
    count: [{ type: Input }],
    allowCross: [{ type: Input }],
    pushable: [{ type: Input }],
    handleStyle: [{ type: Input }],
    trackStyle: [{ type: Input }],
    railStyle: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    amWrapper: [{ type: HostBinding, args: ['class.am-slider-wrapper',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RangeComponent, [{
        type: Component,
        args: [{
                selector: 'Range , nzm-range',
                template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    *ngFor=\"let off of offset; let i = index\"\n    [className]=\"'am-slider-track'\"\n    [included]=\"included\"\n    [style]=\"trackStyle[i]\"\n    [offset]=\"off\"\n    [length]=\"length[i]\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderSteps>\n  <SliderHandle\n    *ngFor=\"let val of value; let i = index\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [maxBound]=\"maxBound[i]\"\n    [minBound]=\"minBound[i]\"\n    [value]=\"val\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [sliderLength]=\"sliderLength\"\n    [sliderStart]=\"sliderStart\"\n    [handleStyle]=\"handleStyle[i]\"\n    (onChange)=\"handleChange($event, i)\"\n    (onAfterChange)=\"handleAfterChange($event, i)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderMarks>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RangeComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onChange: [{
            type: Output
        }], onAfterChange: [{
            type: Output
        }], amWrapper: [{
            type: HostBinding,
            args: ['class.am-slider-wrapper']
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], step: [{
            type: Input
        }], value: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], disabled: [{
            type: Input
        }], marks: [{
            type: Input
        }], dots: [{
            type: Input
        }], included: [{
            type: Input
        }], count: [{
            type: Input
        }], allowCross: [{
            type: Input
        }], pushable: [{
            type: Input
        }], handleStyle: [{
            type: Input
        }], trackStyle: [{
            type: Input
        }], railStyle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3JhbmdlL3JhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF6RSxNQUFNLE9BQU8sY0FBYztBQUFHLElBMkk1QixZQUFvQixJQUFnQjtBQUFJLFFBQXBCLFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQTFJckMsY0FBUyxHQUFXLFdBQVcsQ0FBQztBQUNsQyxRQUFFLFdBQU0sR0FBVSxFQUFFLENBQUM7QUFDckIsUUFBRSxXQUFNLEdBQVUsRUFBRSxDQUFDO0FBQ3JCLFFBUVUsU0FBSSxHQUFHLENBQUMsQ0FBQztBQUNuQixRQUFVLFNBQUksR0FBRyxHQUFHLENBQUM7QUFDckIsUUFBVSxVQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQ1Usa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsUUFBVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQVUsV0FBTSxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFVLFVBQUssR0FBRyxLQUFLLENBQUM7QUFDeEIsUUFBVSxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLFFBQVUsV0FBTSxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFVLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQ1UsaUJBQVksR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBVSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUMzQixRQXVHRSxhQUFRLEdBQUcsSUFBSSxZQUFZ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QUFDaEgsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDM0MsUUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0g7MENBMVJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsbUJBQW1CLGtCQUM3Qjs7Ozs7Ozs7OzJVQUFxQyxrQkFDckMsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLDBCQUM3QyxLQUFLLEVBQUUsSUFBSSxzQkFDWixrQkFDRixjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFDO0FBQXdDLFlBZFcsVUFBVTtBQUFHO0FBQUc7QUFBa0Msa0JBMkN4RyxLQUFLO0FBQ04sa0JBTUMsS0FBSztBQUNOLG1CQU1DLEtBQUs7QUFDTixvQkFNQyxLQUFLO0FBQ04sMkJBTUMsS0FBSztBQUNOLHVCQUtDLEtBQUs7QUFDTixvQkFNQyxLQUFLO0FBQ04sbUJBTUMsS0FBSztBQUNOLHVCQU1DLEtBQUs7QUFDTixvQkFNQyxLQUFLO0FBQ04seUJBR0MsS0FBSztBQUNOLHVCQUlDLEtBQUs7QUFDTiwwQkFNQyxLQUFLO0FBQ04seUJBTUMsS0FBSztBQUNOLHdCQU1DLEtBQUs7QUFDTix1QkFNQyxNQUFNO0FBQ1AsNEJBQ0MsTUFBTTtBQUNQLHdCQUVDLFdBQVcsU0FBQyx5QkFBeUI7QUFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUmFuZ2UgLCBuem0tcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXNsaWRlcic7XG4gIG9mZnNldDogYW55W10gPSBbXTtcbiAgbGVuZ3RoOiBhbnlbXSA9IFtdO1xuICB1cHBlckJvdW5kOiBudW1iZXI7XG4gIGxvd2VyQm91bmQ6IG51bWJlcjtcbiAgbWF4Qm91bmQ6IG51bWJlcltdO1xuICBtaW5Cb3VuZDogbnVtYmVyW107XG4gIHNsaWRlckNsczogb2JqZWN0O1xuICBzbGlkZXJMZW5ndGg6IG51bWJlcjtcbiAgc2xpZGVyU3RhcnQ6IG51bWJlcjtcblxuICBwcml2YXRlIF9taW4gPSAwO1xuICBwcml2YXRlIF9tYXggPSAxMDA7XG4gIHByaXZhdGUgX3N0ZXAgPSAxO1xuICBwcml2YXRlIF92YWx1ZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdFZhbHVlID0gWzAsIDAsIDBdO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9tYXJrcyA9IHt9O1xuICBwcml2YXRlIF9kb3RzID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY291bnQgPSAxO1xuICBwcml2YXRlIF9hbGxvd0Nyb3NzID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcHVzaGFibGU7XG4gIHByaXZhdGUgX2hhbmRsZVN0eWxlID0gW107XG4gIHByaXZhdGUgX3RyYWNrU3R5bGUgPSBbXTtcbiAgcHJpdmF0ZSBfcmFpbFN0eWxlO1xuICBwcml2YXRlIF9oYW5kbGVDb3VudDtcblxuICBASW5wdXQoKVxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICB9XG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IFtudW1iZXJdIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBbbnVtYmVyXSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZWZhdWx0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzO1xuICB9XG4gIHNldCBtYXJrcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fbWFya3MgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuICBzZXQgZG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG4gIHNldCBpbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhbGxvd0Nyb3NzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dDcm9zcyA9IHZhbHVlO1xuICAgIHRoaXMuc2V0VmFsdWVCb3VuZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwdXNoYWJsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHVzaGFibGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy52ZXJpZnlQdXNoYWJsZSgpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlQm91bmQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGhhbmRsZVN0eWxlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlU3R5bGU7XG4gIH1cbiAgc2V0IGhhbmRsZVN0eWxlKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuX2hhbmRsZVN0eWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRyYWNrU3R5bGUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl90cmFja1N0eWxlO1xuICB9XG4gIHNldCB0cmFja1N0eWxlKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuX3RyYWNrU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcmFpbFN0eWxlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmFpbFN0eWxlO1xuICB9XG4gIHNldCByYWlsU3R5bGUodmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5fcmFpbFN0eWxlID0gdmFsdWU7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBvbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zbGlkZXItd3JhcHBlcicpXG4gIGFtV3JhcHBlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfbmdNb2RlbE9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcltdKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX25nTW9kZWxPblRvdWNoZWQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHNldENscygpIHtcbiAgICB0aGlzLnNsaWRlckNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5fZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgaW5pdGlhbFZhbHVlKCkge1xuICAgIGNvbnN0IG1pblRlbXAgPSB0aGlzLl9taW47XG4gICAgaWYgKCF0aGlzLnZlcmlmeVB1c2hhYmxlKCkpIHtcbiAgICAgIHRoaXMuX3B1c2hhYmxlID0gMDtcbiAgICAgIGNvbnNvbGUud2FybigncHVzaGFibGXorr7nva7ml6DmlYjvvIzlt7LlpKfkuo7mnInkupt2YWx1ZemXtOmalO+8jOiiq+W8uuWItuiuvuS4ujAnKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodGhpcy5fY291bnQgKyAxKSkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1pblRlbXA7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdGhpcy5fZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgPyB0aGlzLl9kZWZhdWx0VmFsdWUgOiBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5fdmFsdWUgOiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgLy8g6aqM6K+BY291bnTlgLxcbiAgICB0aGlzLl9jb3VudCA9IHRoaXMuX3ZhbHVlLmxlbmd0aCAtIDE7XG4gICAgLy8g6aqM6K+BdmFsdWXljLrpl7RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fdmFsdWVbaV0gPCB0aGlzLl9taW4pIHtcbiAgICAgICAgdGhpcy5fdmFsdWVbaV0gPSB0aGlzLl9taW47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZhbHVlW2ldID4gdGhpcy5fbWF4KSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlW2ldID0gdGhpcy5fbWF4O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fY291bnQgPiAwKSB7XG4gICAgICB0aGlzLnVwcGVyQm91bmQgPSBNYXRoLm1heCguLi50aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLmxvd2VyQm91bmQgPSBNYXRoLm1pbiguLi50aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUsIGkpIHtcbiAgICBsZXQgdGVtcCA9IFsuLi50aGlzLl92YWx1ZV07XG4gICAgdGVtcFtpXSA9IGU7XG4gICAgdGhpcy51cHBlckJvdW5kID0gTWF0aC5tYXgoLi4udGVtcCk7XG4gICAgdGhpcy5sb3dlckJvdW5kID0gTWF0aC5taW4oLi4udGVtcCk7XG4gICAgdGhpcy5zZXRUcmFja1N0eWxlKHRlbXApO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0ZW1wKTtcbiAgfVxuXG4gIGhhbmRsZUFmdGVyQ2hhbmdlKGUsIGkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlW2ldID0gZTtcbiAgICAgIHRoaXMudXBwZXJCb3VuZCA9IE1hdGgubWF4KC4uLnRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMubG93ZXJCb3VuZCA9IE1hdGgubWluKC4uLnRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuc2V0VHJhY2tTdHlsZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUJvdW5kKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzZXRUcmFja1N0eWxlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gdGhpcy5fY291bnQgKyAxKSB7XG4gICAgICB2YWx1ZS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5vZmZzZXRbaV0gPSAodmFsdWVbaV0gKiAxMDApIC8gKHRoaXMuX21heCAtIHRoaXMuX21pbik7XG4gICAgICAgIHRoaXMubGVuZ3RoW2ldID0gKCh2YWx1ZVtpICsgMV0gLSB2YWx1ZVtpXSkgKiAxMDApIC8gKHRoaXMuX21heCAtIHRoaXMuX21pbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWVCb3VuZCgpIHtcbiAgICB0aGlzLm1heEJvdW5kID0gW107XG4gICAgdGhpcy5taW5Cb3VuZCA9IFtdO1xuICAgIGlmICgodGhpcy5fYWxsb3dDcm9zcyAmJiB0aGlzLl9wdXNoYWJsZSA9PT0gdW5kZWZpbmVkKSB8fCB0aGlzLl9oYW5kbGVDb3VudCA8PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2hhbmRsZUNvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5tYXhCb3VuZFtpXSA9IHRoaXMuX21heDtcbiAgICAgICAgdGhpcy5taW5Cb3VuZFtpXSA9IHRoaXMuX21pbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3B1c2hhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fcHVzaGFibGUgPSAwO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9oYW5kbGVDb3VudDsgaSsrKSB7XG4gICAgICAgIHRoaXMubWF4Qm91bmRbaV0gPSBpID09PSB0aGlzLl9oYW5kbGVDb3VudCAtIDEgPyB0aGlzLl9tYXggOiB0aGlzLl92YWx1ZVtpICsgMV0gLSB0aGlzLl9wdXNoYWJsZTtcbiAgICAgICAgdGhpcy5taW5Cb3VuZFtpXSA9IGkgPT09IDAgPyB0aGlzLl9taW4gOiB0aGlzLl92YWx1ZVtpIC0gMV0gKyB0aGlzLl9wdXNoYWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2ZXJpZnlQdXNoYWJsZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2hhbmRsZUNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLl92YWx1ZVtpXSAtIHRoaXMuX3ZhbHVlW2kgLSAxXTtcbiAgICAgIGlmIChkaWZmIDwgdGhpcy5fcHVzaGFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyW10sIGlzV3JpdGVWYWx1ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5faGFuZGxlQ291bnQgPSB0aGlzLl92YWx1ZS5sZW5ndGggKyAxO1xuICAgICAgdGhpcy5pbml0aWFsVmFsdWUoKTtcbiAgICAgIHRoaXMuc2V0VmFsdWVCb3VuZCgpO1xuICAgICAgdGhpcy5zZXRDbHMoKTtcbiAgICAgIHRoaXMuc2V0VHJhY2tTdHlsZSh0aGlzLl92YWx1ZSk7XG4gICAgICBpZiAoaXNXcml0ZVZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBudW1iZXJbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUoKTtcbiAgICB0aGlzLnNldFZhbHVlQm91bmQoKTtcbiAgICB0aGlzLl9oYW5kbGVDb3VudCA9IHRoaXMuX2NvdW50ICsgMTtcbiAgICB0aGlzLnNldENscygpO1xuICAgIGNvbnN0IHNsaWRlckNvb3JkcyA9IHRoaXMuX2VsZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FtLXNsaWRlcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2xpZGVyTGVuZ3RoID0gc2xpZGVyQ29vcmRzLndpZHRoO1xuICAgIHRoaXMuc2xpZGVyU3RhcnQgPSBzbGlkZXJDb29yZHMubGVmdDtcbiAgfVxufVxuIl19