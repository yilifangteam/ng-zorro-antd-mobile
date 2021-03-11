import { Component, ElementRef, Input, HostBinding, ViewEncapsulation } from '@angular/core';
export class SliderStepsComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.prefixCls = 'am-slider';
        this.stepArray = [];
        this._min = 0;
        this._max = 100;
        this._marks = {};
        this._included = true;
        this._dots = false;
    }
    set min(value) {
        if (value && value <= this._max) {
            this._min = value;
        }
    }
    set max(value) {
        if (value && value >= this._min) {
            this._max = value;
        }
    }
    set marks(value) {
        this._marks = value;
    }
    set step(value) {
        this._step = value;
    }
    set included(value) {
        this._included = value;
    }
    set dots(value) {
        this._dots = value;
    }
    set upperBound(value) {
        if (value !== undefined && value !== this._upperBound) {
            this._upperBound = value;
            this.setActiveCls();
        }
    }
    set lowerBound(value) {
        if (value !== undefined && value !== this.lowerBound) {
            this._lowerBound = value;
            this.setActiveCls();
        }
    }
    get class() {
        return 'am-slider-step';
    }
    calPoints() {
        const points = Object.keys(this._marks).map(parseFloat);
        if (this._dots) {
            for (let i = this._min; i <= this._max; i = i + this._step) {
                if (points.indexOf(i) < 0) {
                    points.push(i);
                }
            }
        }
        return points;
    }
    getSteps(points) {
        const range = this._max - this._min;
        this.stepArray = [];
        points.map(point => {
            const stepItem = {
                stepStyle: {},
                stepClass: {},
                point: null
            };
            const offset = `${(Math.abs(point - this._min) / range) * 100}%`;
            const isActived = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            let style = Object.assign({ left: offset }, this._dotStyle);
            if (isActived) {
                style = Object.assign(Object.assign({}, style), this._activeDotStyle);
            }
            const pointClassName = {
                [`${this.prefixCls}-dot`]: true,
                [`${this.prefixCls}-dot-active`]: isActived
            };
            stepItem.point = point;
            stepItem.stepStyle = style;
            stepItem.stepClass = pointClassName;
            this.stepArray.push(stepItem);
        });
    }
    setActiveCls() {
        for (let i = 0; i < this.stepArray.length; i++) {
            const point = this.stepArray[i].point;
            const isActived = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            this.stepArray[i].stepClass = {
                [`${this.prefixCls}-dot`]: true,
                [`${this.prefixCls}-dot-active`]: isActived
            };
        }
    }
    ngOnInit() {
        const points = this.calPoints();
        this.getSteps(points);
    }
}
SliderStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'SliderSteps, nzm-slider-steps',
                template: "<span *ngFor=\"let item of stepArray\" [ngClass]=\"item.stepClass\" [ngStyle]=\"item.stepStyle\"> </span>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SliderStepsComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderStepsComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    marks: [{ type: Input }],
    step: [{ type: Input }],
    included: [{ type: Input }],
    dots: [{ type: Input }],
    upperBound: [{ type: Input }],
    lowerBound: [{ type: Input }],
    class: [{ type: HostBinding }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN0ZXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2xpZGVyL3NsaWRlci1zdGVwcy9zbGlkZXItc3RlcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPckcsTUFBTSxPQUFPLG9CQUFvQjtJQStEL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTlEcEMsY0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN4QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRVAsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBRW5CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixVQUFLLEdBQVksS0FBSyxDQUFDO0lBb0RRLENBQUM7SUFoRHhDLElBQ0ksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ0QsSUFDSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtJQUNILENBQUM7SUFDRCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUNJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lB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O2tCQU1MLEtBQUs7b0JBTUwsS0FBSzttQkFJTCxLQUFLO3VCQUlMLEtBQUs7bUJBSUwsS0FBSzt5QkFJTCxLQUFLO3lCQU9MLEtBQUs7b0JBUUwsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NsaWRlclN0ZXBzLCBuem0tc2xpZGVyLXN0ZXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci1zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmaXhDbHMgPSAnYW0tc2xpZGVyJztcbiAgc3RlcEFycmF5ID0gW107XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDEwMDtcbiAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyO1xuICBwcml2YXRlIF9tYXJrczogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgX2luY2x1ZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdXBwZXJCb3VuZDogbnVtYmVyO1xuICBwcml2YXRlIF9sb3dlckJvdW5kOiBudW1iZXI7XG4gIHByaXZhdGUgX2RvdHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZG90U3R5bGU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfYWN0aXZlRG90U3R5bGU6IG9iamVjdDtcblxuICBASW5wdXQoKVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPD0gdGhpcy5fbWF4KSB7XG4gICAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID49IHRoaXMuX21pbikge1xuICAgICAgdGhpcy5fbWF4ID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtYXJrcyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fbWFya3MgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RlcCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRvdHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kb3RzID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVwcGVyQm91bmQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB0aGlzLl91cHBlckJvdW5kKSB7XG4gICAgICB0aGlzLl91cHBlckJvdW5kID0gdmFsdWU7XG4gICAgICB0aGlzLnNldEFjdGl2ZUNscygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbG93ZXJCb3VuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHRoaXMubG93ZXJCb3VuZCkge1xuICAgICAgdGhpcy5fbG93ZXJCb3VuZCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRBY3RpdmVDbHMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoKVxuICBnZXQgY2xhc3MoKSB7XG4gICAgcmV0dXJuICdhbS1zbGlkZXItc3RlcCc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgY2FsUG9pbnRzKCkge1xuICAgIGNvbnN0IHBvaW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX21hcmtzKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgaWYgKHRoaXMuX2RvdHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9taW47IGkgPD0gdGhpcy5fbWF4OyBpID0gaSArIHRoaXMuX3N0ZXApIHtcbiAgICAgICAgaWYgKHBvaW50cy5pbmRleE9mKGkpIDwgMCkge1xuICAgICAgICAgIHBvaW50cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cblxuICBnZXRTdGVwcyhwb2ludHMpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuX21heCAtIHRoaXMuX21pbjtcbiAgICB0aGlzLnN0ZXBBcnJheSA9IFtdO1xuICAgIHBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgY29uc3Qgc3RlcEl0ZW0gPSB7XG4gICAgICAgIHN0ZXBTdHlsZToge30sXG4gICAgICAgIHN0ZXBDbGFzczoge30sXG4gICAgICAgIHBvaW50OiBudWxsXG4gICAgICB9O1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gYCR7KE1hdGguYWJzKHBvaW50IC0gdGhpcy5fbWluKSAvIHJhbmdlKSAqIDEwMH0lYDtcbiAgICAgIGNvbnN0IGlzQWN0aXZlZCA9XG4gICAgICAgICghdGhpcy5faW5jbHVkZWQgJiYgcG9pbnQgPT09IHRoaXMuX3VwcGVyQm91bmQpIHx8XG4gICAgICAgICh0aGlzLl9pbmNsdWRlZCAmJiBwb2ludCA8PSB0aGlzLl91cHBlckJvdW5kICYmIHBvaW50ID49IHRoaXMuX2xvd2VyQm91bmQpO1xuICAgICAgbGV0IHN0eWxlID0geyBsZWZ0OiBvZmZzZXQsIC4uLnRoaXMuX2RvdFN0eWxlIH07XG4gICAgICBpZiAoaXNBY3RpdmVkKSB7XG4gICAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgLi4udGhpcy5fYWN0aXZlRG90U3R5bGUgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9pbnRDbGFzc05hbWUgPSB7XG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZG90YF06IHRydWUsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZG90LWFjdGl2ZWBdOiBpc0FjdGl2ZWRcbiAgICAgIH07XG4gICAgICBzdGVwSXRlbS5wb2ludCA9IHBvaW50O1xuICAgICAgc3RlcEl0ZW0uc3RlcFN0eWxlID0gc3R5bGU7XG4gICAgICBzdGVwSXRlbS5zdGVwQ2xhc3MgPSBwb2ludENsYXNzTmFtZTtcbiAgICAgIHRoaXMuc3RlcEFycmF5LnB1c2goc3RlcEl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0QWN0aXZlQ2xzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGVwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5zdGVwQXJyYXlbaV0ucG9pbnQ7XG4gICAgICBjb25zdCBpc0FjdGl2ZWQgPVxuICAgICAgICAoIXRoaXMuX2luY2x1ZGVkICYmIHBvaW50ID09PSB0aGlzLl91cHBlckJvdW5kKSB8fFxuICAgICAgICAodGhpcy5faW5jbHVkZWQgJiYgcG9pbnQgPD0gdGhpcy5fdXBwZXJCb3VuZCAmJiBwb2ludCA+PSB0aGlzLl9sb3dlckJvdW5kKTtcbiAgICAgIHRoaXMuc3RlcEFycmF5W2ldLnN0ZXBDbGFzcyA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3RgXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3QtYWN0aXZlYF06IGlzQWN0aXZlZFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLmNhbFBvaW50cygpO1xuICAgIHRoaXMuZ2V0U3RlcHMocG9pbnRzKTtcbiAgfVxufVxuIl19