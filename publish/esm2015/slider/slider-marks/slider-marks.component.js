import { Component, ElementRef, Input, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function SliderMarksComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.className)("ngStyle", item_r1.style);
} }
export class SliderMarksComponent {
    constructor(_elf) {
        this._elf = _elf;
        this.markArray = [];
        this._min = 0;
        this._max = 100;
        this._marks = {};
        this._included = true;
        this._className = 'am-slider-mark';
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
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
    set included(value) {
        this._included = value;
    }
    set upperBound(value) {
        if (value && value !== this._upperBound) {
            this._upperBound = value;
            this.setActiveCls();
        }
    }
    set lowerBound(value) {
        if (value && value !== this.lowerBound) {
            this._lowerBound = value;
            this.setActiveCls();
        }
    }
    get class() {
        return this._className;
    }
    getMarks(marksKeys) {
        this.markArray = [];
        marksKeys
            .map(parseFloat)
            .sort((a, b) => a - b)
            .map(point => {
            const markItem = {
                markLabel: '',
                point: '',
                className: {},
                style: {}
            };
            const markPoint = this._marks[point];
            const markPointIsObject = typeof markPoint === 'object';
            const markLabel = markPointIsObject ? markPoint.label : markPoint;
            if (!markLabel && markLabel !== 0) {
                return null;
            }
            const isActive = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            const markClassName = {
                [`${this._className}-text`]: true,
                [`${this._className}-text-active`]: isActive
            };
            const bottomStyle = {
                marginBottom: '-50%',
                bottom: `${((point - this._min) / this._range) * 100}%`
            };
            const leftStyle = {
                width: `${this._markWidth}%`,
                marginLeft: `${-this._markWidth / 2}%`,
                left: `${((point - this._min) / this._range) * 100}%`
            };
            const style = leftStyle;
            const markStyle = markPointIsObject ? Object.assign(Object.assign({}, style), markPoint.style) : style;
            markItem.markLabel = markLabel;
            markItem.point = point;
            markItem.className = Object.keys(markClassName).join(' ');
            markItem.style = markStyle;
            this.markArray.push(markItem);
        });
    }
    setActiveCls() {
        for (let i = 0; i < this.markArray.length; i++) {
            const point = this.markArray[i].point;
            const isActive = (!this._included && point === this._upperBound) ||
                (this._included && point <= this._upperBound && point >= this._lowerBound);
            this.markArray[i].className = {
                [`${this._className}-text`]: true,
                [`${this._className}-text-active`]: isActive
            };
        }
    }
    setMarksLable() {
        for (let i = 0; i < this.markArray.length; i++) {
            const markEle = this._elf.nativeElement.getElementsByClassName(this._className + '-text')[i];
            markEle.innerHTML = this.markArray[i].markLabel;
        }
    }
    ngOnInit() {
        const marksKeys = Object.keys(this._marks);
        const marksCount = marksKeys.length;
        const unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
        this._markWidth = unit * 0.9;
        this._range = this._max - this._min;
        this.getMarks(marksKeys);
    }
    ngAfterViewInit() {
        this.setMarksLable();
    }
}
SliderMarksComponent.ɵfac = function SliderMarksComponent_Factory(t) { return new (t || SliderMarksComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SliderMarksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderMarksComponent, selectors: [["SliderMarks"], ["nzm-slider-marks"]], hostVars: 2, hostBindings: function SliderMarksComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
    } }, inputs: { min: "min", max: "max", marks: "marks", included: "included", upperBound: "upperBound", lowerBound: "lowerBound" }, outputs: { onChange: "onChange", onAfterChange: "onAfterChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle"]], template: function SliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SliderMarksComponent_span_0_Template, 1, 2, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.markArray);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
SliderMarksComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderMarksComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    marks: [{ type: Input }],
    included: [{ type: Input }],
    upperBound: [{ type: Input }],
    lowerBound: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    class: [{ type: HostBinding }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderMarksComponent, [{
        type: Component,
        args: [{
                selector: 'SliderMarks, nzm-slider-marks',
                template: "<span *ngFor=\"let item of markArray\" [ngClass]=\"item.className\" [ngStyle]=\"item.style\"> </span>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onChange: [{
            type: Output
        }], onAfterChange: [{
            type: Output
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], marks: [{
            type: Input
        }], included: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], lowerBound: [{
            type: Input
        }], class: [{
            type: HostBinding
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLW1hcmtzL3NsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQU92QixNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUF5RGxDLFlBQW9CLElBQWdCO0FBQUksUUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtBQUFDLFFBeERyQyxjQUFTLEdBQWUsRUFBRSxDQUFDO0FBQzdCLFFBQ1UsU0FBSSxHQUFXLENBQUMsQ0FBQztBQUMzQixRQUFVLFNBQUksR0FBVyxHQUFHLENBQUM7QUFDN0IsUUFBVSxXQUFNLEdBQVcsRUFBRSxDQUFDO0FBQzlCLFFBQVUsY0FBUyxHQUFZLElBQUksQ0FBQztBQUNwQyxRQUFVLGVBQVUsR0FBVyxnQkFBZ0IsQ0FBQztBQUNoRCxRQXdDRSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUNyQyxRQUNFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUMxQyxJQU15QyxDQUFDO0FBQzFDLElBN0NFLElBQ0ksR0FBRyxDQUFDLEtBQWE7QUFDdkIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksR0FBRyxDQUFDLEtBQWE7QUFDdkIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksS0FBSyxDQUFDLEtBQWE7QUFDekIsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksVUFBVSxDQUFDLEtBQWE7QUFDOUIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM3QyxZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFlBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksVUFBVSxDQUFDLEtBQWE7QUFDOUIsUUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM1QyxZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFlBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUtFLElBQ0ksS0FBSztBQUNYLFFBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBR0UsUUFBUSxDQUFDLFNBQVM7QUFDcEIsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN4QixRQUFJLFNBQVM7QUFDYixhQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDdEIsYUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLGFBQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25CLFlBQVEsTUFBTSxRQUFRLEdBQUc7QUFDekIsZ0JBQVUsU0FBUyxFQUFFLEVBQUU7QUFDdkIsZ0JBQVUsS0FBSyxFQUFFLEVBQUU7QUFDbkIsZ0JBQVUsU0FBUyxFQUFFLEVBQUU7QUFDdkIsZ0JBQVUsS0FBSyxFQUFFLEVBQUU7QUFDbkIsYUFBUyxDQUFDO0FBQ1YsWUFBUSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLFlBQVEsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUM7QUFDaEUsWUFBUSxNQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzFFLFlBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO0FBQzNDLGdCQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RCLGFBQVM7QUFDVCxZQUFRLE1BQU0sUUFBUSxHQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3pELGdCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JGLFlBQVEsTUFBTSxhQUFhLEdBQUc7QUFDOUIsZ0JBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDM0MsZ0JBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLGNBQWMsQ0FBQyxFQUFFLFFBQVE7QUFDdEQsYUFBUyxDQUFDO0FBQ1YsWUFBUSxNQUFNLFdBQVcsR0FBRztBQUM1QixnQkFBVSxZQUFZLEVBQUUsTUFBTTtBQUM5QixnQkFBVSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHO0FBQ2pFLGFBQVMsQ0FBQztBQUNWLFlBQVEsTUFBTSxTQUFTLEdBQUc7QUFDMUIsZ0JBQVUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRztBQUN0QyxnQkFBVSxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHO0FBQ2hELGdCQUFVLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUc7QUFDL0QsYUFBUyxDQUFDO0FBQ1YsWUFBUSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDaEMsWUFBUSxNQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLGlDQUFNLEtBQUssR0FBSyxTQUFTLENBQUMsS0FBSyxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkYsWUFBUSxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUN2QyxZQUFRLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFlBQVEsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRSxZQUFRLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ25DLFlBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEMsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULElBQUUsQ0FBQztBQUNILElBQ0UsWUFBWTtBQUNkLFFBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BELFlBQU0sTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDNUMsWUFBTSxNQUFNLFFBQVEsR0FDWixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUN2RCxnQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRixZQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHO0FBQ3BDLGdCQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3pDLGdCQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxjQUFjLENBQUMsRUFBRSxRQUFRO0FBQ3BELGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWE7QUFDZixRQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwRCxZQUFNLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkcsWUFBTSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3RELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLFFBQUksTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUN4QyxRQUFJLE1BQU0sSUFBSSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQy9ELFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pDLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUNqQixRQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSDtnREE1SUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwrQkFBK0Isa0JBQ3pDO21HQUE0QyxrQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7OzsyRkFDSTtBQUFDO0FBQThDLFlBZGxELFVBQVU7QUFDWDtBQUFHO0FBR0ssa0JBdUJOLEtBQUs7QUFDTixrQkFLQyxLQUFLO0FBQ04sb0JBS0MsS0FBSztBQUNOLHVCQUdDLEtBQUs7QUFDTix5QkFHQyxLQUFLO0FBQ04seUJBTUMsS0FBSztBQUNOLHVCQU1DLE1BQU07QUFDUCw0QkFDQyxNQUFNO0FBQ1Asb0JBRUMsV0FBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTbGlkZXJNYXJrcywgbnptLXNsaWRlci1tYXJrcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgbWFya0FycmF5OiBBcnJheTxhbnk+ID0gW107XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDEwMDtcbiAgcHJpdmF0ZSBfbWFya3M6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIF9pbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJ2FtLXNsaWRlci1tYXJrJztcbiAgcHJpdmF0ZSBfdXBwZXJCb3VuZDogbnVtYmVyO1xuICBwcml2YXRlIF9sb3dlckJvdW5kOiBudW1iZXI7XG4gIHByaXZhdGUgX3JhbmdlOiBudW1iZXI7XG4gIHByaXZhdGUgX21hcmtXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA8PSB0aGlzLl9tYXgpIHtcbiAgICAgIHRoaXMuX21pbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPj0gdGhpcy5fbWluKSB7XG4gICAgICB0aGlzLl9tYXggPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1hcmtzKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl9tYXJrcyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVwcGVyQm91bmQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gdGhpcy5fdXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy5fdXBwZXJCb3VuZCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRBY3RpdmVDbHMoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxvd2VyQm91bmQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gdGhpcy5sb3dlckJvdW5kKSB7XG4gICAgICB0aGlzLl9sb3dlckJvdW5kID0gdmFsdWU7XG4gICAgICB0aGlzLnNldEFjdGl2ZUNscygpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoKVxuICBnZXQgY2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZjogRWxlbWVudFJlZikge31cblxuICBnZXRNYXJrcyhtYXJrc0tleXMpIHtcbiAgICB0aGlzLm1hcmtBcnJheSA9IFtdO1xuICAgIG1hcmtzS2V5c1xuICAgICAgLm1hcChwYXJzZUZsb2F0KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgLm1hcChwb2ludCA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtJdGVtID0ge1xuICAgICAgICAgIG1hcmtMYWJlbDogJycsXG4gICAgICAgICAgcG9pbnQ6ICcnLFxuICAgICAgICAgIGNsYXNzTmFtZToge30sXG4gICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hcmtQb2ludCA9IHRoaXMuX21hcmtzW3BvaW50XTtcbiAgICAgICAgY29uc3QgbWFya1BvaW50SXNPYmplY3QgPSB0eXBlb2YgbWFya1BvaW50ID09PSAnb2JqZWN0JztcbiAgICAgICAgY29uc3QgbWFya0xhYmVsID0gbWFya1BvaW50SXNPYmplY3QgPyBtYXJrUG9pbnQubGFiZWwgOiBtYXJrUG9pbnQ7XG4gICAgICAgIGlmICghbWFya0xhYmVsICYmIG1hcmtMYWJlbCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAoIXRoaXMuX2luY2x1ZGVkICYmIHBvaW50ID09PSB0aGlzLl91cHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLl9pbmNsdWRlZCAmJiBwb2ludCA8PSB0aGlzLl91cHBlckJvdW5kICYmIHBvaW50ID49IHRoaXMuX2xvd2VyQm91bmQpO1xuICAgICAgICBjb25zdCBtYXJrQ2xhc3NOYW1lID0ge1xuICAgICAgICAgIFtgJHt0aGlzLl9jbGFzc05hbWV9LXRleHRgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5fY2xhc3NOYW1lfS10ZXh0LWFjdGl2ZWBdOiBpc0FjdGl2ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBib3R0b21TdHlsZSA9IHtcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgICAgICBib3R0b206IGAkeygocG9pbnQgLSB0aGlzLl9taW4pIC8gdGhpcy5fcmFuZ2UpICogMTAwfSVgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxlZnRTdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aDogYCR7dGhpcy5fbWFya1dpZHRofSVgLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGAkey10aGlzLl9tYXJrV2lkdGggLyAyfSVgLFxuICAgICAgICAgIGxlZnQ6IGAkeygocG9pbnQgLSB0aGlzLl9taW4pIC8gdGhpcy5fcmFuZ2UpICogMTAwfSVgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gbGVmdFN0eWxlO1xuICAgICAgICBjb25zdCBtYXJrU3R5bGUgPSBtYXJrUG9pbnRJc09iamVjdCA/IHsgLi4uc3R5bGUsIC4uLm1hcmtQb2ludC5zdHlsZSB9IDogc3R5bGU7XG4gICAgICAgIG1hcmtJdGVtLm1hcmtMYWJlbCA9IG1hcmtMYWJlbDtcbiAgICAgICAgbWFya0l0ZW0ucG9pbnQgPSBwb2ludDtcbiAgICAgICAgbWFya0l0ZW0uY2xhc3NOYW1lID0gT2JqZWN0LmtleXMobWFya0NsYXNzTmFtZSkuam9pbignICcpO1xuICAgICAgICBtYXJrSXRlbS5zdHlsZSA9IG1hcmtTdHlsZTtcbiAgICAgICAgdGhpcy5tYXJrQXJyYXkucHVzaChtYXJrSXRlbSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZUNscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwb2ludCA9IHRoaXMubWFya0FycmF5W2ldLnBvaW50O1xuICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAoIXRoaXMuX2luY2x1ZGVkICYmIHBvaW50ID09PSB0aGlzLl91cHBlckJvdW5kKSB8fFxuICAgICAgICAodGhpcy5faW5jbHVkZWQgJiYgcG9pbnQgPD0gdGhpcy5fdXBwZXJCb3VuZCAmJiBwb2ludCA+PSB0aGlzLl9sb3dlckJvdW5kKTtcbiAgICAgIHRoaXMubWFya0FycmF5W2ldLmNsYXNzTmFtZSA9IHtcbiAgICAgICAgW2Ake3RoaXMuX2NsYXNzTmFtZX0tdGV4dGBdOiB0cnVlLFxuICAgICAgICBbYCR7dGhpcy5fY2xhc3NOYW1lfS10ZXh0LWFjdGl2ZWBdOiBpc0FjdGl2ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzZXRNYXJrc0xhYmxlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmtFbGUgPSB0aGlzLl9lbGYubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuX2NsYXNzTmFtZSArICctdGV4dCcpW2ldO1xuICAgICAgbWFya0VsZS5pbm5lckhUTUwgPSB0aGlzLm1hcmtBcnJheVtpXS5tYXJrTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbWFya3NLZXlzID0gT2JqZWN0LmtleXModGhpcy5fbWFya3MpO1xuICAgIGNvbnN0IG1hcmtzQ291bnQgPSBtYXJrc0tleXMubGVuZ3RoO1xuICAgIGNvbnN0IHVuaXQgPSBtYXJrc0NvdW50ID4gMSA/IDEwMCAvIChtYXJrc0NvdW50IC0gMSkgOiAxMDA7XG4gICAgdGhpcy5fbWFya1dpZHRoID0gdW5pdCAqIDAuOTtcbiAgICB0aGlzLl9yYW5nZSA9IHRoaXMuX21heCAtIHRoaXMuX21pbjtcbiAgICB0aGlzLmdldE1hcmtzKG1hcmtzS2V5cyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zZXRNYXJrc0xhYmxlKCk7XG4gIH1cbn1cbiJdfQ==