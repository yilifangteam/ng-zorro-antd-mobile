import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
RangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Range , nzm-range',
                template: "<div class=\"am-slider\" [ngClass]=\"sliderCls\">\n  <div class=\"am-slider-rail\" [ngStyle]=\"railStyle\"></div>\n  <SliderTrack\n    *ngFor=\"let off of offset; let i = index\"\n    [className]=\"'am-slider-track'\"\n    [included]=\"included\"\n    [style]=\"trackStyle[i]\"\n    [offset]=\"off\"\n    [length]=\"length[i]\"\n  ></SliderTrack>\n  <SliderSteps\n    [max]=\"max\"\n    [min]=\"min\"\n    [dots]=\"dots\"\n    [step]=\"step\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderSteps>\n  <SliderHandle\n    *ngFor=\"let val of value; let i = index\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [maxBound]=\"maxBound[i]\"\n    [minBound]=\"minBound[i]\"\n    [value]=\"val\"\n    [step]=\"step\"\n    [disabled]=\"disabled\"\n    [sliderLength]=\"sliderLength\"\n    [sliderStart]=\"sliderStart\"\n    [handleStyle]=\"handleStyle[i]\"\n    (onChange)=\"handleChange($event, i)\"\n    (onAfterChange)=\"handleAfterChange($event, i)\"\n  ></SliderHandle>\n  <SliderMarks\n    [max]=\"max\"\n    [min]=\"min\"\n    [marks]=\"marks\"\n    [upperBound]=\"upperBound\"\n    [lowerBound]=\"lowerBound\"\n  ></SliderMarks>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RangeComponent),
                        multi: true
                    }
                ]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJyYW5nZS9yYW5nZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhekUsTUFBTSxPQUFPLGNBQWM7SUEySXpCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUExSXBDLGNBQVMsR0FBVyxXQUFXLENBQUM7UUFDaEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBU1gsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBd0d6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHeEMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUVsQixxQkFBZ0IsR0FBOEIsR0FBRyxFQUFFLEdBQUUs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QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7WUFid0QsVUFBVTs7O2tCQTJDaEUsS0FBSztrQkFPTCxLQUFLO21CQU9MLEtBQUs7b0JBT0wsS0FBSzsyQkFPTCxLQUFLO3VCQU1MLEtBQUs7b0JBT0wsS0FBSzttQkFPTCxLQUFLO3VCQU9MLEtBQUs7b0JBT0wsS0FBSzt5QkFJTCxLQUFLO3VCQUtMLEtBQUs7MEJBT0wsS0FBSzt5QkFPTCxLQUFLO3dCQU9MLEtBQUs7dUJBT0wsTUFBTTs0QkFFTixNQUFNO3dCQUdOLFdBQVcsU0FBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdSYW5nZSAsIG56bS1yYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tc2xpZGVyJztcbiAgb2Zmc2V0OiBhbnlbXSA9IFtdO1xuICBsZW5ndGg6IGFueVtdID0gW107XG4gIHVwcGVyQm91bmQ6IG51bWJlcjtcbiAgbG93ZXJCb3VuZDogbnVtYmVyO1xuICBtYXhCb3VuZDogbnVtYmVyW107XG4gIG1pbkJvdW5kOiBudW1iZXJbXTtcbiAgc2xpZGVyQ2xzOiBvYmplY3Q7XG4gIHNsaWRlckxlbmd0aDogbnVtYmVyO1xuICBzbGlkZXJTdGFydDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX21pbiA9IDA7XG4gIHByaXZhdGUgX21heCA9IDEwMDtcbiAgcHJpdmF0ZSBfc3RlcCA9IDE7XG4gIHByaXZhdGUgX3ZhbHVlO1xuICBwcml2YXRlIF9kZWZhdWx0VmFsdWUgPSBbMCwgMCwgMF07XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX21hcmtzID0ge307XG4gIHByaXZhdGUgX2RvdHMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSB0cnVlO1xuICBwcml2YXRlIF9jb3VudCA9IDE7XG4gIHByaXZhdGUgX2FsbG93Q3Jvc3MgPSB0cnVlO1xuICBwcml2YXRlIF9wdXNoYWJsZTtcbiAgcHJpdmF0ZSBfaGFuZGxlU3R5bGUgPSBbXTtcbiAgcHJpdmF0ZSBfdHJhY2tTdHlsZSA9IFtdO1xuICBwcml2YXRlIF9yYWlsU3R5bGU7XG4gIHByaXZhdGUgX2hhbmRsZUNvdW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogW251bWJlcl0ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IFtudW1iZXJdKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbWFya3MoKTogb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3M7XG4gIH1cbiAgc2V0IG1hcmtzKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl9tYXJrcyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkb3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb3RzO1xuICB9XG4gIHNldCBkb3RzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZG90cyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBpbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cbiAgc2V0IGluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFsbG93Q3Jvc3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0Nyb3NzID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZUJvdW5kKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHB1c2hhYmxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wdXNoYWJsZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnZlcmlmeVB1c2hhYmxlKCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVCb3VuZCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaGFuZGxlU3R5bGUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9oYW5kbGVTdHlsZTtcbiAgfVxuICBzZXQgaGFuZGxlU3R5bGUodmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5faGFuZGxlU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdHJhY2tTdHlsZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrU3R5bGU7XG4gIH1cbiAgc2V0IHRyYWNrU3R5bGUodmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5fdHJhY2tTdHlsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCByYWlsU3R5bGUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9yYWlsU3R5bGU7XG4gIH1cbiAgc2V0IHJhaWxTdHlsZSh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLl9yYWlsU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXNsaWRlci13cmFwcGVyJylcbiAgYW1XcmFwcGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyW10pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uVG91Y2hlZDogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgc2V0Q2xzKCkge1xuICAgIHRoaXMuc2xpZGVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLl9kaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBpbml0aWFsVmFsdWUoKSB7XG4gICAgY29uc3QgbWluVGVtcCA9IHRoaXMuX21pbjtcbiAgICBpZiAoIXRoaXMudmVyaWZ5UHVzaGFibGUoKSkge1xuICAgICAgdGhpcy5fcHVzaGFibGUgPSAwO1xuICAgICAgY29uc29sZS53YXJuKCdwdXNoYWJsZeiuvue9ruaXoOaViO+8jOW3suWkp+S6juacieS6m3ZhbHVl6Ze06ZqU77yM6KKr5by65Yi26K6+5Li6MCcpO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh0aGlzLl9jb3VudCArIDEpKS5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWluVGVtcDtcbiAgICB9KTtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB0aGlzLl9kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuX2RlZmF1bHRWYWx1ZSA6IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQgPyB0aGlzLl92YWx1ZSA6IHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICAvLyDpqozor4Fjb3VudOWAvFxuICAgIHRoaXMuX2NvdW50ID0gdGhpcy5fdmFsdWUubGVuZ3RoIC0gMTtcbiAgICAvLyDpqozor4F2YWx1ZeWMuumXtFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZVtpXSA8IHRoaXMuX21pbikge1xuICAgICAgICB0aGlzLl92YWx1ZVtpXSA9IHRoaXMuX21pbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmFsdWVbaV0gPiB0aGlzLl9tYXgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVbaV0gPSB0aGlzLl9tYXg7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb3VudCA+IDApIHtcbiAgICAgIHRoaXMudXBwZXJCb3VuZCA9IE1hdGgubWF4KC4uLnRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMubG93ZXJCb3VuZCA9IE1hdGgubWluKC4uLnRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSwgaSkge1xuICAgIGxldCB0ZW1wID0gWy4uLnRoaXMuX3ZhbHVlXTtcbiAgICB0ZW1wW2ldID0gZTtcbiAgICB0aGlzLnVwcGVyQm91bmQgPSBNYXRoLm1heCguLi50ZW1wKTtcbiAgICB0aGlzLmxvd2VyQm91bmQgPSBNYXRoLm1pbiguLi50ZW1wKTtcbiAgICB0aGlzLnNldFRyYWNrU3R5bGUodGVtcCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRlbXApO1xuICB9XG5cbiAgaGFuZGxlQWZ0ZXJDaGFuZ2UoZSwgaSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsdWVbaV0gPSBlO1xuICAgICAgdGhpcy51cHBlckJvdW5kID0gTWF0aC5tYXgoLi4udGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5sb3dlckJvdW5kID0gTWF0aC5taW4oLi4udGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5zZXRUcmFja1N0eWxlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMub25BZnRlckNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLnNldFZhbHVlQm91bmQoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHNldFRyYWNrU3R5bGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSB0aGlzLl9jb3VudCArIDEpIHtcbiAgICAgIHZhbHVlLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLm9mZnNldFtpXSA9ICh2YWx1ZVtpXSAqIDEwMCkgLyAodGhpcy5fbWF4IC0gdGhpcy5fbWluKTtcbiAgICAgICAgdGhpcy5sZW5ndGhbaV0gPSAoKHZhbHVlW2kgKyAxXSAtIHZhbHVlW2ldKSAqIDEwMCkgLyAodGhpcy5fbWF4IC0gdGhpcy5fbWluKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZUJvdW5kKCkge1xuICAgIHRoaXMubWF4Qm91bmQgPSBbXTtcbiAgICB0aGlzLm1pbkJvdW5kID0gW107XG4gICAgaWYgKCh0aGlzLl9hbGxvd0Nyb3NzICYmIHRoaXMuX3B1c2hhYmxlID09PSB1bmRlZmluZWQpIHx8IHRoaXMuX2hhbmRsZUNvdW50IDw9IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faGFuZGxlQ291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLm1heEJvdW5kW2ldID0gdGhpcy5fbWF4O1xuICAgICAgICB0aGlzLm1pbkJvdW5kW2ldID0gdGhpcy5fbWluO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fcHVzaGFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9wdXNoYWJsZSA9IDA7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2hhbmRsZUNvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5tYXhCb3VuZFtpXSA9IGkgPT09IHRoaXMuX2hhbmRsZUNvdW50IC0gMSA/IHRoaXMuX21heCA6IHRoaXMuX3ZhbHVlW2kgKyAxXSAtIHRoaXMuX3B1c2hhYmxlO1xuICAgICAgICB0aGlzLm1pbkJvdW5kW2ldID0gaSA9PT0gMCA/IHRoaXMuX21pbiA6IHRoaXMuX3ZhbHVlW2kgLSAxXSArIHRoaXMuX3B1c2hhYmxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZlcmlmeVB1c2hhYmxlKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5faGFuZGxlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3ZhbHVlW2ldIC0gdGhpcy5fdmFsdWVbaSAtIDFdO1xuICAgICAgaWYgKGRpZmYgPCB0aGlzLl9wdXNoYWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXJbXSwgaXNXcml0ZVZhbHVlID0gZmFsc2UpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9oYW5kbGVDb3VudCA9IHRoaXMuX3ZhbHVlLmxlbmd0aCArIDE7XG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSgpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUJvdW5kKCk7XG4gICAgICB0aGlzLnNldENscygpO1xuICAgICAgdGhpcy5zZXRUcmFja1N0eWxlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIGlmIChpc1dyaXRlVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25BZnRlckNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcltdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9uZ01vZGVsT25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSgpO1xuICAgIHRoaXMuc2V0VmFsdWVCb3VuZCgpO1xuICAgIHRoaXMuX2hhbmRsZUNvdW50ID0gdGhpcy5fY291bnQgKyAxO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgY29uc3Qgc2xpZGVyQ29vcmRzID0gdGhpcy5fZWxmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW0tc2xpZGVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zbGlkZXJMZW5ndGggPSBzbGlkZXJDb29yZHMud2lkdGg7XG4gICAgdGhpcy5zbGlkZXJTdGFydCA9IHNsaWRlckNvb3Jkcy5sZWZ0O1xuICB9XG59XG4iXX0=