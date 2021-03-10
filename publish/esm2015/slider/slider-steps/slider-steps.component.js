import { Component, ElementRef, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function SliderStepsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.stepClass)("ngStyle", item_r1.stepStyle);
} }
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
SliderStepsComponent.ɵfac = function SliderStepsComponent_Factory(t) { return new (t || SliderStepsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SliderStepsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderStepsComponent, selectors: [["SliderSteps"], ["nzm-slider-steps"]], hostVars: 2, hostBindings: function SliderStepsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
    } }, inputs: { min: "min", max: "max", marks: "marks", step: "step", included: "included", dots: "dots", upperBound: "upperBound", lowerBound: "lowerBound" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle"]], template: function SliderStepsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SliderStepsComponent_span_0_Template, 1, 2, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.stepArray);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderStepsComponent, [{
        type: Component,
        args: [{
                selector: 'SliderSteps, nzm-slider-steps',
                template: "<span *ngFor=\"let item of stepArray\" [ngClass]=\"item.stepClass\" [ngStyle]=\"item.stepStyle\"> </span>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { min: [{
            type: Input
        }], max: [{
            type: Input
        }], marks: [{
            type: Input
        }], step: [{
            type: Input
        }], included: [{
            type: Input
        }], dots: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], lowerBound: [{
            type: Input
        }], class: [{
            type: HostBinding
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN0ZXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLXN0ZXBzL3NsaWRlci1zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQU9yRyxNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUErRGxDLFlBQW9CLElBQWdCO0FBQUksUUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtBQUFDLFFBOURyQyxjQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzFCLFFBQUUsY0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNqQixRQUNVLFNBQUksR0FBVyxDQUFDLENBQUM7QUFDM0IsUUFBVSxTQUFJLEdBQVcsR0FBRyxDQUFDO0FBQzdCLFFBQ1UsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUM5QixRQUFVLGNBQVMsR0FBWSxJQUFJLENBQUM7QUFDcEMsUUFFVSxVQUFLLEdBQVksS0FBSyxDQUFDO0FBQ2pDLElBbUR5QyxDQUFDO0FBQzFDLElBakRFLElBQ0ksR0FBRyxDQUFDLEtBQWE7QUFDdkIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksR0FBRyxDQUFDLEtBQWE7QUFDdkIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksS0FBSyxDQUFDLEtBQWE7QUFDekIsUUFB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QUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRixZQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHO0FBQ3BDLGdCQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxNQUFNLENBQUMsRUFBRSxJQUFJO0FBQ3ZDLGdCQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxhQUFhLENBQUMsRUFBRSxTQUFTO0FBQ25ELGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0g7Z0RBaElDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsK0JBQStCLGtCQUN6Qzt1R0FBNEMsa0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7MkZBQ0k7QUFBQztBQUE4QyxZQVB4QixVQUFVO0FBQUc7QUFBRztBQUF3QyxrQkFzQmpGLEtBQUs7QUFDTixrQkFLQyxLQUFLO0FBQ04sb0JBS0MsS0FBSztBQUNOLG1CQUdDLEtBQUs7QUFDTix1QkFHQyxLQUFLO0FBQ04sbUJBR0MsS0FBSztBQUNOLHlCQUdDLEtBQUs7QUFDTix5QkFNQyxLQUFLO0FBQ04sb0JBT0MsV0FBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnU2xpZGVyU3RlcHMsIG56bS1zbGlkZXItc3RlcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLXN0ZXBzLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZpeENscyA9ICdhbS1zbGlkZXInO1xuICBzdGVwQXJyYXkgPSBbXTtcblxuICBwcml2YXRlIF9taW46IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX21heDogbnVtYmVyID0gMTAwO1xuICBwcml2YXRlIF9zdGVwOiBudW1iZXI7XG4gIHByaXZhdGUgX21hcmtzOiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF91cHBlckJvdW5kOiBudW1iZXI7XG4gIHByaXZhdGUgX2xvd2VyQm91bmQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZG90czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kb3RTdHlsZTogb2JqZWN0O1xuICBwcml2YXRlIF9hY3RpdmVEb3RTdHlsZTogb2JqZWN0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA8PSB0aGlzLl9tYXgpIHtcbiAgICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPj0gdGhpcy5fbWluKSB7XG4gICAgICB0aGlzLl9tYXggPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1hcmtzKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl9tYXJrcyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXBwZXJCb3VuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMuX3VwcGVyQm91bmQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlQ2xzKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsb3dlckJvdW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdGhpcy5sb3dlckJvdW5kKSB7XG4gICAgICB0aGlzLl9sb3dlckJvdW5kID0gdmFsdWU7XG4gICAgICB0aGlzLnNldEFjdGl2ZUNscygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIGdldCBjbGFzcygpIHtcbiAgICByZXR1cm4gJ2FtLXNsaWRlci1zdGVwJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZjogRWxlbWVudFJlZikge31cblxuICBjYWxQb2ludHMoKSB7XG4gICAgY29uc3QgcG9pbnRzID0gT2JqZWN0LmtleXModGhpcy5fbWFya3MpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBpZiAodGhpcy5fZG90cykge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX21pbjsgaSA8PSB0aGlzLl9tYXg7IGkgPSBpICsgdGhpcy5fc3RlcCkge1xuICAgICAgICBpZiAocG9pbnRzLmluZGV4T2YoaSkgPCAwKSB7XG4gICAgICAgICAgcG9pbnRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxuXG4gIGdldFN0ZXBzKHBvaW50cykge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5fbWF4IC0gdGhpcy5fbWluO1xuICAgIHRoaXMuc3RlcEFycmF5ID0gW107XG4gICAgcG9pbnRzLm1hcChwb2ludCA9PiB7XG4gICAgICBjb25zdCBzdGVwSXRlbSA9IHtcbiAgICAgICAgc3RlcFN0eWxlOiB7fSxcbiAgICAgICAgc3RlcENsYXNzOiB7fSxcbiAgICAgICAgcG9pbnQ6IG51bGxcbiAgICAgIH07XG4gICAgICBjb25zdCBvZmZzZXQgPSBgJHsoTWF0aC5hYnMocG9pbnQgLSB0aGlzLl9taW4pIC8gcmFuZ2UpICogMTAwfSVgO1xuICAgICAgY29uc3QgaXNBY3RpdmVkID1cbiAgICAgICAgKCF0aGlzLl9pbmNsdWRlZCAmJiBwb2ludCA9PT0gdGhpcy5fdXBwZXJCb3VuZCkgfHxcbiAgICAgICAgKHRoaXMuX2luY2x1ZGVkICYmIHBvaW50IDw9IHRoaXMuX3VwcGVyQm91bmQgJiYgcG9pbnQgPj0gdGhpcy5fbG93ZXJCb3VuZCk7XG4gICAgICBsZXQgc3R5bGUgPSB7IGxlZnQ6IG9mZnNldCwgLi4udGhpcy5fZG90U3R5bGUgfTtcbiAgICAgIGlmIChpc0FjdGl2ZWQpIHtcbiAgICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi50aGlzLl9hY3RpdmVEb3RTdHlsZSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwb2ludENsYXNzTmFtZSA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3RgXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3QtYWN0aXZlYF06IGlzQWN0aXZlZFxuICAgICAgfTtcbiAgICAgIHN0ZXBJdGVtLnBvaW50ID0gcG9pbnQ7XG4gICAgICBzdGVwSXRlbS5zdGVwU3R5bGUgPSBzdHlsZTtcbiAgICAgIHN0ZXBJdGVtLnN0ZXBDbGFzcyA9IHBvaW50Q2xhc3NOYW1lO1xuICAgICAgdGhpcy5zdGVwQXJyYXkucHVzaChzdGVwSXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBY3RpdmVDbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ZXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnN0ZXBBcnJheVtpXS5wb2ludDtcbiAgICAgIGNvbnN0IGlzQWN0aXZlZCA9XG4gICAgICAgICghdGhpcy5faW5jbHVkZWQgJiYgcG9pbnQgPT09IHRoaXMuX3VwcGVyQm91bmQpIHx8XG4gICAgICAgICh0aGlzLl9pbmNsdWRlZCAmJiBwb2ludCA8PSB0aGlzLl91cHBlckJvdW5kICYmIHBvaW50ID49IHRoaXMuX2xvd2VyQm91bmQpO1xuICAgICAgdGhpcy5zdGVwQXJyYXlbaV0uc3RlcENsYXNzID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRvdGBdOiB0cnVlLFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRvdC1hY3RpdmVgXTogaXNBY3RpdmVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuY2FsUG9pbnRzKCk7XG4gICAgdGhpcy5nZXRTdGVwcyhwb2ludHMpO1xuICB9XG59XG4iXX0=