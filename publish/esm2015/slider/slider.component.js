import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './slider-track/slider-track.component';
import * as ɵngcc3 from './slider-steps/slider-steps.component';
import * as ɵngcc4 from './slider-handle/slider-handle.component';
import * as ɵngcc5 from './slider-marks/slider-marks.component';
export class SliderComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.offset = 0;
        this.length = 0;
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._defaultValue = 0;
        this._disabled = false;
        this._marks = {};
        this._dots = false;
        this._included = true;
        this._trackStyle = {};
        this.onAfterChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.amSliderWrapper = true;
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
        this.setValue(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.setCls();
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
    handleChange(e) {
        setTimeout(() => {
            this.setTrack(e);
            this._value = e;
        }, 10);
        this.onChange.emit(e);
        this._ngModelOnChange(e);
    }
    handleAfterChange(e) {
        setTimeout(() => {
            this.setTrack(e);
            this._value = e;
        }, 10);
        this.onAfterChange.emit(e);
    }
    valueRange() {
        if (this._value < this._min) {
            this._value = this._min;
        }
        if (this._value > this._max) {
            this._value = this._max;
        }
    }
    ngOnInit() {
        this.setCls();
        this.setValue(this._value);
        const sliderCoords = this._elf.nativeElement.getElementsByClassName('am-slider')[0].getBoundingClientRect();
        this.sliderLength = sliderCoords.width;
        this.sliderStart = sliderCoords.left;
    }
    writeValue(value) {
        this.setValue(value, true);
    }
    setValue(value, isWriteValue = false) {
        if (value === 0 || value) {
            this._value = value;
        }
        else {
            this._value = this._defaultValue;
        }
        this.valueRange();
        this.setTrack(this._value);
        if (isWriteValue) {
            this._ngModelOnChange(this._value);
        }
        else {
            this.onAfterChange.emit(this._value);
        }
    }
    setTrack(e) {
        this.offset = 0;
        this.length = ((e - this._min) * 100) / (this._max - this._min);
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["Slider"], ["nzm-slider"]], hostVars: 2, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-slider-wrapper", ctx.amSliderWrapper);
    } }, inputs: { min: "min", max: "max", step: "step", value: "value", defaultValue: "defaultValue", disabled: "disabled", marks: "marks", dots: "dots", included: "included", handleStyle: "handleStyle", trackStyle: "trackStyle", railStyle: "railStyle" }, outputs: { onAfterChange: "onAfterChange", onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SliderComponent),
                multi: true
            }
        ])], decls: 6, vars: 30, consts: [[1, "am-slider", 3, "ngClass"], [1, "am-slider-rail", 3, "ngStyle"], [3, "className", "offset", "length", "included"], [3, "max", "min", "dots", "step", "marks", "lowerBound", "upperBound", "included"], [3, "max", "min", "value", "step", "disabled", "handleStyle", "sliderStart", "sliderLength", "onChange", "onAfterChange"], [3, "max", "min", "marks", "lowerBound", "upperBound", "included"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "SliderTrack", 2);
        ɵngcc0.ɵɵelement(3, "SliderSteps", 3);
        ɵngcc0.ɵɵelementStart(4, "SliderHandle", 4);
        ɵngcc0.ɵɵlistener("onChange", function SliderComponent_Template_SliderHandle_onChange_4_listener($event) { return ctx.handleChange($event); })("onAfterChange", function SliderComponent_Template_SliderHandle_onAfterChange_4_listener($event) { return ctx.handleAfterChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "SliderMarks", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.sliderCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.railStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.trackStyle);
        ɵngcc0.ɵɵproperty("className", "am-slider-track")("offset", ctx.offset)("length", ctx.length)("included", ctx.included);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("max", ctx.max)("min", ctx.min)("dots", ctx.dots)("step", ctx.step)("marks", ctx.marks)("lowerBound", ctx.min)("upperBound", ctx.value)("included", ctx.included);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("max", ctx.max)("min", ctx.min)("value", ctx.value)("step", ctx.step)("disabled", ctx.disabled)("handleStyle", ctx.handleStyle)("sliderStart", ctx.sliderStart)("sliderLength", ctx.sliderLength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("max", ctx.max)("min", ctx.min)("marks", ctx.marks)("lowerBound", ctx.min)("upperBound", ctx.value)("included", ctx.included);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.SliderTrackComponent, ɵngcc3.SliderStepsComponent, ɵngcc4.SliderHandleComponent, ɵngcc5.SliderMarksComponent], encapsulation: 2 });
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    defaultValue: [{ type: Input }],
    disabled: [{ type: Input }],
    marks: [{ type: Input }],
    dots: [{ type: Input }],
    included: [{ type: Input }],
    handleStyle: [{ type: Input }],
    trackStyle: [{ type: Input }],
    railStyle: [{ type: Input }],
    onAfterChange: [{ type: Output }],
    onChange: [{ type: Output }],
    amSliderWrapper: [{ type: HostBinding, args: ['class.am-slider-wrapper',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: 'Slider , nzm-slider',
                template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    [className]=\"'am-slider-track'\"\n    [style]=\"trackStyle\"\n    [offset]=\"offset\"\n    [length]=\"length\"\n    [included]=\"included\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderSteps>\n  <SliderHandle\n    [max]=\"max\"\n    [min]=\"min\"\n    [value]=\"value\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [handleStyle]=\"handleStyle\"\n    [sliderStart]=\"sliderStart\"\n    [sliderLength]=\"sliderLength\"\n    (onChange)=\"handleChange($event)\"\n    (onAfterChange)=\"handleAfterChange($event)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [lowerBound]=\"min\"\n    [upperBound]=\"value\"\n    [included]=\"included\"\n  ></SliderMarks>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SliderComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onAfterChange: [{
            type: Output
        }], onChange: [{
            type: Output
        }], amSliderWrapper: [{
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
        }], handleStyle: [{
            type: Input
        }], trackStyle: [{
            type: Input
        }], railStyle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFjekUsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQW9IN0IsWUFBb0IsSUFBZ0I7QUFBSSxRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFZO0FBQUMsUUFuSHJDLGNBQVMsR0FBRyxXQUFXLENBQUM7QUFDMUIsUUFHRSxXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUUsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUNyQixRQUNVLFNBQUksR0FBVyxDQUFDLENBQUM7QUFDM0IsUUFBVSxTQUFJLEdBQVcsR0FBRyxDQUFDO0FBQzdCLFFBQVUsVUFBSyxHQUFXLENBQUMsQ0FBQztBQUM1QixRQUNVLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLFdBQU0sR0FBVyxFQUFFLENBQUM7QUFDOUIsUUFBVSxVQUFLLEdBQVksS0FBSyxDQUFDO0FBQ2pDLFFBQVUsY0FBUyxHQUFZLElBQUksQ0FBQztBQUNwQyxRQUNVLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0FBQ25DLFFBdUZFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUMxQyxRQUNFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3JDLFFBRUUsb0JBQWUsR0FBWSxJQUFJLENBQUM7QUFDbEMsUUFDVSxxQkFBZ0IsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxD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Q1o7R0FDRixjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z01BQ0k7QUFBQztBQUF5QyxZQW5CN0MsVUFBVTtBQUNYO0FBQUc7QUFFRCxrQkFxQ0EsS0FBSztBQUNOLGtCQU1DLEtBQUs7QUFDTixtQkFNQyxLQUFLO0FBQ04sb0JBTUMsS0FBSztBQUNOLDJCQU1DLEtBQUs7QUFDTix1QkFJQyxLQUFLO0FBQ04sb0JBT0MsS0FBSztBQUNOLG1CQU1DLEtBQUs7QUFDTix1QkFNQyxLQUFLO0FBQ04sMEJBTUMsS0FBSztBQUNOLHlCQU1DLEtBQUs7QUFDTix3QkFNQyxLQUFLO0FBQ04sNEJBT0MsTUFBTTtBQUNQLHVCQUNDLE1BQU07QUFDUCw4QkFFQyxXQUFXLFNBQUMseUJBQXlCO0FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmcsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NsaWRlciAsIG56bS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENscyA9ICdhbS1zbGlkZXInO1xuICBzbGlkZXJMZW5ndGg6IG51bWJlcjtcbiAgc2xpZGVyU3RhcnQ6IG51bWJlcjtcbiAgc2xpZGVyQ2xzOiBvYmplY3Q7XG4gIG9mZnNldDogbnVtYmVyID0gMDtcbiAgbGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbWF4OiBudW1iZXIgPSAxMDA7XG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWFya3M6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIF9kb3RzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGFuZGxlU3R5bGU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfdHJhY2tTdHlsZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgX3JhaWxTdHlsZTogb2JqZWN0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzO1xuICB9XG4gIHNldCBtYXJrcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fbWFya3MgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuICBzZXQgZG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG4gIHNldCBpbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGhhbmRsZVN0eWxlKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZVN0eWxlO1xuICB9XG4gIHNldCBoYW5kbGVTdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5faGFuZGxlU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdHJhY2tTdHlsZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl90cmFja1N0eWxlO1xuICB9XG4gIHNldCB0cmFja1N0eWxlKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl90cmFja1N0eWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJhaWxTdHlsZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9yYWlsU3R5bGU7XG4gIH1cbiAgc2V0IHJhaWxTdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fcmFpbFN0eWxlID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgb25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXNsaWRlci13cmFwcGVyJylcbiAgYW1TbGlkZXJXcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX25nTW9kZWxPblRvdWNoZWQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHNldENscygpIHtcbiAgICB0aGlzLnNsaWRlckNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5fZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhY2soZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IGU7XG4gICAgfSwgMTApO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChlKTtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UoZSk7XG4gIH1cblxuICBoYW5kbGVBZnRlckNoYW5nZShlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYWNrKGUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgIH0sIDEwKTtcbiAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlUmFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlIDwgdGhpcy5fbWluKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX21pbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlID4gdGhpcy5fbWF4KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX21heDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIGNvbnN0IHNsaWRlckNvb3JkcyA9IHRoaXMuX2VsZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FtLXNsaWRlcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2xpZGVyTGVuZ3RoID0gc2xpZGVyQ29vcmRzLndpZHRoO1xuICAgIHRoaXMuc2xpZGVyU3RhcnQgPSBzbGlkZXJDb29yZHMubGVmdDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IG51bWJlciwgaXNXcml0ZVZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAodmFsdWUgPT09IDAgfHwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlUmFuZ2UoKTtcbiAgICB0aGlzLnNldFRyYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7XG4gICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VHJhY2soZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmxlbmd0aCA9ICgoZSAtIHRoaXMuX21pbikgKiAxMDApIC8gKHRoaXMuX21heCAtIHRoaXMuX21pbik7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=