import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
SliderComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3pFLE1BQU0sT0FBTyxlQUFlO0lBb0gxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBbkhwQyxjQUFTLEdBQUcsV0FBVyxDQUFDO1FBSXhCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVYLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBSSxHQUFXLEdBQUcsQ0FBQztRQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUF3RmpDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUduQyxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUV4QixxQkFBZ0IsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3JELHNCQUFpQixHQUE0QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFdkIsQ0FBQztJQS9GeEMsSUFDSSxHQUFHO1FBQ0ws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QVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O1lBbEJDLFVBQVU7OztrQkF3Q1QsS0FBSztrQkFPTCxLQUFLO21CQU9MLEtBQUs7b0JBT0wsS0FBSzsyQkFPTCxLQUFLO3VCQUtMLEtBQUs7b0JBUUwsS0FBSzttQkFPTCxLQUFLO3VCQU9MLEtBQUs7MEJBT0wsS0FBSzt5QkFPTCxLQUFLO3dCQU9MLEtBQUs7NEJBUUwsTUFBTTt1QkFFTixNQUFNOzhCQUdOLFdBQVcsU0FBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmcsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NsaWRlciAsIG56bS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByZWZpeENscyA9ICdhbS1zbGlkZXInO1xuICBzbGlkZXJMZW5ndGg6IG51bWJlcjtcbiAgc2xpZGVyU3RhcnQ6IG51bWJlcjtcbiAgc2xpZGVyQ2xzOiBvYmplY3Q7XG4gIG9mZnNldDogbnVtYmVyID0gMDtcbiAgbGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbWF4OiBudW1iZXIgPSAxMDA7XG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWFya3M6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIF9kb3RzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGFuZGxlU3R5bGU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfdHJhY2tTdHlsZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgX3JhaWxTdHlsZTogb2JqZWN0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IG1hcmtzKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzO1xuICB9XG4gIHNldCBtYXJrcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fbWFya3MgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuICBzZXQgZG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG4gIHNldCBpbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGhhbmRsZVN0eWxlKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZVN0eWxlO1xuICB9XG4gIHNldCBoYW5kbGVTdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5faGFuZGxlU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdHJhY2tTdHlsZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl90cmFja1N0eWxlO1xuICB9XG4gIHNldCB0cmFja1N0eWxlKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl90cmFja1N0eWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHJhaWxTdHlsZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9yYWlsU3R5bGU7XG4gIH1cbiAgc2V0IHJhaWxTdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fcmFpbFN0eWxlID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgb25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXNsaWRlci13cmFwcGVyJylcbiAgYW1TbGlkZXJXcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX25nTW9kZWxPblRvdWNoZWQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHNldENscygpIHtcbiAgICB0aGlzLnNsaWRlckNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5fZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhY2soZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IGU7XG4gICAgfSwgMTApO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChlKTtcbiAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UoZSk7XG4gIH1cblxuICBoYW5kbGVBZnRlckNoYW5nZShlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYWNrKGUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgIH0sIDEwKTtcbiAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlUmFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlIDwgdGhpcy5fbWluKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX21pbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlID4gdGhpcy5fbWF4KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX21heDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIGNvbnN0IHNsaWRlckNvb3JkcyA9IHRoaXMuX2VsZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FtLXNsaWRlcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2xpZGVyTGVuZ3RoID0gc2xpZGVyQ29vcmRzLndpZHRoO1xuICAgIHRoaXMuc2xpZGVyU3RhcnQgPSBzbGlkZXJDb29yZHMubGVmdDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IG51bWJlciwgaXNXcml0ZVZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAodmFsdWUgPT09IDAgfHwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlUmFuZ2UoKTtcbiAgICB0aGlzLnNldFRyYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7XG4gICAgICB0aGlzLl9uZ01vZGVsT25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VHJhY2soZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmxlbmd0aCA9ICgoZSAtIHRoaXMuX21pbikgKiAxMDApIC8gKHRoaXMuX21heCAtIHRoaXMuX21pbik7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=