import { Component, ElementRef, Input, Output, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';
export class SliderHandleComponent {
    constructor(_elf, _sanitizer) {
        this._elf = _elf;
        this._sanitizer = _sanitizer;
        this._disabled = false;
        this._marks = {};
        this._isDraging = false;
        this.onChange = new EventEmitter();
        this.onAfterChange = new EventEmitter();
        this.mouseDown = event => {
            if (!this._disabled && this.isMouseTarget(event)) {
                this._startX = event.clientX;
                this._handleStatus = 'start';
                this._isDraging = true;
                document.addEventListener('mousemove', this.mouseMove, false);
                document.addEventListener('mouseup', this.mouseUp, false);
                this.pauseEvent(event);
            }
        };
        this.mouseMove = event => {
            if (!this._disabled && this._isDraging) {
                this.pauseEvent(event);
                const pos = event.clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                if (this._oldValue !== this._value) {
                    this._oldValue = this._value;
                    this.onChange.emit(this._value);
                }
            }
        };
        this.mouseUp = event => {
            if (!this._disabled && this._isDraging) {
                this._handleStatus = 'end';
                this._isDraging = false;
                const pos = event.clientX;
                this._value = Math.round(this.calcValueByPos(pos));
                this.left = this.calcOffset(this._value);
                this.onAfterChange.emit(this._value);
            }
        };
    }
    set min(value) {
        this._min = value;
    }
    set max(value) {
        this._max = value;
    }
    set minBound(value) {
        this._minBound = value;
    }
    set maxBound(value) {
        this._maxBound = value;
    }
    set step(value) {
        this._step = value;
    }
    set value(value) {
        this._value = value;
        if (this._value) {
            this.left = this.calcOffset(this._value);
        }
    }
    set disabled(value) {
        this._disabled = value;
    }
    set sliderLength(value) {
        this._sliderLength = value;
    }
    set sliderStart(value) {
        this._sliderStart = value;
    }
    get handleStyle() {
        return this._handleStyle;
    }
    set handleStyle(value) {
        this._handleStyle = value;
    }
    /* 手势操作 */
    panstart(event) {
        // event.preventDefault();
        if (!this._disabled) {
            this._startX = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
            this._handleStatus = 'start';
            this._isDraging = true;
        }
    }
    panmove(event) {
        event.preventDefault();
        if (!this._disabled && this._isDraging) {
            const pos = event.changedTouches[0].clientX;
            this._value = Math.round(this.calcValueByPos(pos));
            this.left = this.calcOffset(this._value);
            if (this._oldValue !== this._value) {
                this._oldValue = this._value;
                this.onChange.emit(this._value);
            }
        }
    }
    panend(event) {
        event.preventDefault();
        if (!this._disabled && this._isDraging) {
            this._handleStatus = 'end';
            this._isDraging = false;
            const pos = event.changedTouches[0].clientX;
            this._value = Math.round(this.calcValueByPos(pos));
            this.left = this.calcOffset(this._value);
            this.onAfterChange.emit(this._value);
        }
    }
    calcValueByPos(pos) {
        const offset = pos - this._sliderStart;
        let value = this.calcValue(offset);
        if (value <= this._minBound) {
            value = this._minBound;
        }
        if (value >= this._maxBound) {
            value = this._maxBound;
        }
        const closestPoint = this.getClosestPoint(value);
        return this._step === null ? closestPoint : parseFloat(closestPoint.toFixed(this.getPrecision(this._step)));
    }
    calcValue(offset) {
        const ratio = Math.abs(Math.max(offset, 0) / this._sliderLength);
        const value = ratio * (this._max - this._min) + this._min;
        return value;
    }
    getClosestPoint(val) {
        const points = Object.keys(this._marks).map(parseFloat);
        if (this._step !== null) {
            const closestStep = Math.round((val - this._min) / this._step) * this._step + this._min;
            points.push(closestStep);
        }
        const diffs = points.map(function (point) {
            return Math.abs(val - point);
        });
        return points[diffs.indexOf(Math.min.apply(Math, this.toConsumableArray(diffs)))];
    }
    getPrecision(step) {
        const stepString = step.toString();
        let precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }
        return precision;
    }
    calcOffset(value) {
        const ratio = (value - this._min) / (this._max - this._min);
        return ratio * 100;
    }
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    isMouseTarget(event) {
        let target = event.target;
        let parentFound = false;
        while (target !== null && !parentFound) {
            if (target === this._elf.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        return parentFound;
    }
    toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            const arr2 = Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        }
    }
    ngOnInit() {
        const self = this;
        this._elf.nativeElement.addEventListener('mousedown', this.mouseDown, false);
        this._handleOffsetX = this._elf.nativeElement.getBoundingClientRect().x;
        this.left = this.calcOffset(this._value);
        this._minBound = this._minBound === undefined ? this._min : this._minBound;
        this._maxBound = this._maxBound === undefined ? this._max : this._maxBound;
    }
    ngOnDestroy() {
        document.removeEventListener('mousemove', this.mouseMove, false);
        document.removeEventListener('mouseup', this.mouseUp, false);
    }
}
SliderHandleComponent.ɵfac = function SliderHandleComponent_Factory(t) { return new (t || SliderHandleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SliderHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderHandleComponent, selectors: [["SliderHandle"], ["nzm-slider-handle"]], hostBindings: function SliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function SliderHandleComponent_touchstart_HostBindingHandler($event) { return ctx.panstart($event); })("touchmove", function SliderHandleComponent_touchmove_HostBindingHandler($event) { return ctx.panmove($event); })("touchend", function SliderHandleComponent_touchend_HostBindingHandler($event) { return ctx.panend($event); });
    } }, inputs: { min: "min", max: "max", minBound: "minBound", maxBound: "maxBound", step: "step", value: "value", disabled: "disabled", sliderLength: "sliderLength", sliderStart: "sliderStart", handleStyle: "handleStyle" }, outputs: { onChange: "onChange", onAfterChange: "onAfterChange" }, decls: 1, vars: 3, consts: [["role", "slider", 1, "am-slider-handle", 3, "ngStyle"]], template: function SliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("left", ctx.left, "%");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.handleStyle);
    } }, directives: [ɵngcc2.NgStyle], encapsulation: 2 });
SliderHandleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
SliderHandleComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    minBound: [{ type: Input }],
    maxBound: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    sliderLength: [{ type: Input }],
    sliderStart: [{ type: Input }],
    handleStyle: [{ type: Input }],
    onChange: [{ type: Output }],
    onAfterChange: [{ type: Output }],
    panstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['touchend', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderHandleComponent, [{
        type: Component,
        args: [{
                selector: 'SliderHandle, nzm-slider-handle',
                template: "<div role=\"slider\" class=\"am-slider-handle\" [ngStyle]=\"handleStyle\" [style.left.%]=\"left\"></div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }]; }, { onChange: [{
            type: Output
        }], onAfterChange: [{
            type: Output
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], minBound: [{
            type: Input
        }], maxBound: [{
            type: Input
        }], step: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], sliderLength: [{
            type: Input
        }], sliderStart: [{
            type: Input
        }], handleStyle: [{
            type: Input
        }], 
    /* 手势操作 */
    panstart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], panmove: [{
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], panend: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci1oYW5kbGUvc2xpZGVyLWhhbmRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUVaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFPekQsTUFBTSxPQUFPLHFCQUFxQjtBQUFHLElBNEduQyxZQUFvQixJQUFnQixFQUFVLFVBQXdCO0FBQUksUUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBWTtBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBYztBQUFDLFFBckcvRCxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVUsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUM5QixRQU1VLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFtREUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7QUFDckMsUUFDRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7QUFDMUMsUUF3Q0UsY0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ3RCLFlBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN0RCxnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDbkMsZ0JBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7QUFDbkMsZ0JBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDN0IsZ0JBQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMs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Q0FBQztBQUNILElBQ0UsV0FBVztBQUNiLFFBQUksUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JFLFFBQUksUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLElBQUUsQ0FBQztBQUNIO2lEQTNPQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlDQUFpQyxrQkFDM0M7dURBQTZDLGtCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7OzsyREFDSTtBQUFDO0FBQStDLFlBZm5ELFVBQVU7QUFDVixZQU9PLFlBQVk7QUFBRztBQUFHO0FBRWxCLGtCQXlCTixLQUFLO0FBQ04sa0JBR0MsS0FBSztBQUNOLHVCQUdDLEtBQUs7QUFDTix1QkFHQyxLQUFLO0FBQ04sbUJBR0MsS0FBSztBQUNOLG9CQUdDLEtBQUs7QUFDTix1QkFNQyxLQUFLO0FBQ04sMkJBR0MsS0FBSztBQUNOLDBCQUdDLEtBQUs7QUFDTiwwQkFHQyxLQUFLO0FBQ04sdUJBTUMsTUFBTTtBQUNQLDRCQUNDLE1BQU07QUFDUCx1QkFHQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ25DLHNCQVNGLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDbEMscUJBWUYsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1NsaWRlckhhbmRsZSwgbnptLXNsaWRlci1oYW5kbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsZWZ0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbWluOiBudW1iZXI7XG4gIHByaXZhdGUgX21heDogbnVtYmVyO1xuICBwcml2YXRlIF9zdGVwOiBudW1iZXI7XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX21hcmtzOiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBfaGFuZGxlU3R5bGU6IG9iamVjdDtcbiAgcHJpdmF0ZSBfc2xpZGVyTGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX3NsaWRlclN0YXJ0OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkJvdW5kOiBudW1iZXI7XG4gIHByaXZhdGUgX21heEJvdW5kOiBudW1iZXI7XG4gIHByaXZhdGUgX3N0YXJ0WDogbnVtYmVyO1xuICBwcml2YXRlIF9pc0RyYWdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGFuZGxlU3RhdHVzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hhbmRsZU9mZnNldFg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfb2xkVmFsdWU6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbWluQm91bmQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbkJvdW5kID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG1heEJvdW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhCb3VuZCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jYWxjT2Zmc2V0KHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2xpZGVyTGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zbGlkZXJMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2xpZGVyU3RhcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NsaWRlclN0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGhhbmRsZVN0eWxlKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZVN0eWxlO1xuICB9XG4gIHNldCBoYW5kbGVTdHlsZSh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5faGFuZGxlU3R5bGUgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiDmiYvlir/mk43kvZwgKi9cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIHBhbnN0YXJ0KGV2ZW50KSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9zdGFydFggPSBldmVudCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgdGhpcy5faGFuZGxlU3RhdHVzID0gJ3N0YXJ0JztcbiAgICAgIHRoaXMuX2lzRHJhZ2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLl9pc0RyYWdpbmcpIHtcbiAgICAgIGNvbnN0IHBvcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB0aGlzLl92YWx1ZSA9IE1hdGgucm91bmQodGhpcy5jYWxjVmFsdWVCeVBvcyhwb3MpKTtcbiAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FsY09mZnNldCh0aGlzLl92YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fb2xkVmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29sZFZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmIHRoaXMuX2lzRHJhZ2luZykge1xuICAgICAgdGhpcy5faGFuZGxlU3RhdHVzID0gJ2VuZCc7XG4gICAgICB0aGlzLl9pc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHBvcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB0aGlzLl92YWx1ZSA9IE1hdGgucm91bmQodGhpcy5jYWxjVmFsdWVCeVBvcyhwb3MpKTtcbiAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2FsY09mZnNldCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBtb3VzZURvd24gPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLmlzTW91c2VUYXJnZXQoZXZlbnQpKSB7XG4gICAgICB0aGlzLl9zdGFydFggPSBldmVudC5jbGllbnRYO1xuICAgICAgdGhpcy5faGFuZGxlU3RhdHVzID0gJ3N0YXJ0JztcbiAgICAgIHRoaXMuX2lzRHJhZ2luZyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCwgZmFsc2UpO1xuICAgICAgdGhpcy5wYXVzZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLl9pc0RyYWdpbmcpIHtcbiAgICAgIHRoaXMucGF1c2VFdmVudChldmVudCk7XG4gICAgICBjb25zdCBwb3MgPSBldmVudC5jbGllbnRYO1xuICAgICAgdGhpcy5fdmFsdWUgPSBNYXRoLnJvdW5kKHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zKSk7XG4gICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbGNPZmZzZXQodGhpcy5fdmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX29sZFZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICB0aGlzLl9vbGRWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlVXAgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLl9pc0RyYWdpbmcpIHtcbiAgICAgIHRoaXMuX2hhbmRsZVN0YXR1cyA9ICdlbmQnO1xuICAgICAgdGhpcy5faXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBwb3MgPSBldmVudC5jbGllbnRYO1xuICAgICAgdGhpcy5fdmFsdWUgPSBNYXRoLnJvdW5kKHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zKSk7XG4gICAgICB0aGlzLmxlZnQgPSB0aGlzLmNhbGNPZmZzZXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5vbkFmdGVyQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNWYWx1ZUJ5UG9zKHBvcykge1xuICAgIGNvbnN0IG9mZnNldCA9IHBvcyAtIHRoaXMuX3NsaWRlclN0YXJ0O1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlKG9mZnNldCk7XG4gICAgaWYgKHZhbHVlIDw9IHRoaXMuX21pbkJvdW5kKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX21pbkJvdW5kO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPj0gdGhpcy5fbWF4Qm91bmQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fbWF4Qm91bmQ7XG4gICAgfVxuICAgIGNvbnN0IGNsb3Nlc3RQb2ludCA9IHRoaXMuZ2V0Q2xvc2VzdFBvaW50KHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5fc3RlcCA9PT0gbnVsbCA/IGNsb3Nlc3RQb2ludCA6IHBhcnNlRmxvYXQoY2xvc2VzdFBvaW50LnRvRml4ZWQodGhpcy5nZXRQcmVjaXNpb24odGhpcy5fc3RlcCkpKTtcbiAgfVxuXG4gIGNhbGNWYWx1ZShvZmZzZXQpIHtcbiAgICBjb25zdCByYXRpbyA9IE1hdGguYWJzKE1hdGgubWF4KG9mZnNldCwgMCkgLyB0aGlzLl9zbGlkZXJMZW5ndGgpO1xuICAgIGNvbnN0IHZhbHVlID0gcmF0aW8gKiAodGhpcy5fbWF4IC0gdGhpcy5fbWluKSArIHRoaXMuX21pbjtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRDbG9zZXN0UG9pbnQodmFsKSB7XG4gICAgY29uc3QgcG9pbnRzID0gT2JqZWN0LmtleXModGhpcy5fbWFya3MpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBpZiAodGhpcy5fc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2xvc2VzdFN0ZXAgPSBNYXRoLnJvdW5kKCh2YWwgLSB0aGlzLl9taW4pIC8gdGhpcy5fc3RlcCkgKiB0aGlzLl9zdGVwICsgdGhpcy5fbWluO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdFN0ZXApO1xuICAgIH1cbiAgICBjb25zdCBkaWZmcyA9IHBvaW50cy5tYXAoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh2YWwgLSBwb2ludCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvaW50c1tkaWZmcy5pbmRleE9mKE1hdGgubWluLmFwcGx5KE1hdGgsIHRoaXMudG9Db25zdW1hYmxlQXJyYXkoZGlmZnMpKSldO1xuICB9XG5cbiAgZ2V0UHJlY2lzaW9uKHN0ZXApIHtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC50b1N0cmluZygpO1xuICAgIGxldCBwcmVjaXNpb24gPSAwO1xuICAgIGlmIChzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgICBwcmVjaXNpb24gPSBzdGVwU3RyaW5nLmxlbmd0aCAtIHN0ZXBTdHJpbmcuaW5kZXhPZignLicpIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWNpc2lvbjtcbiAgfVxuXG4gIGNhbGNPZmZzZXQodmFsdWUpIHtcbiAgICBjb25zdCByYXRpbyA9ICh2YWx1ZSAtIHRoaXMuX21pbikgLyAodGhpcy5fbWF4IC0gdGhpcy5fbWluKTtcbiAgICByZXR1cm4gcmF0aW8gKiAxMDA7XG4gIH1cblxuICBwYXVzZUV2ZW50KGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlzTW91c2VUYXJnZXQoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBwYXJlbnRGb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlICh0YXJnZXQgIT09IG51bGwgJiYgIXBhcmVudEZvdW5kKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLl9lbGYubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBwYXJlbnRGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudEZvdW5kO1xuICB9XG5cbiAgdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgY29uc3QgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2VsZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duLCBmYWxzZSk7XG4gICAgdGhpcy5faGFuZGxlT2Zmc2V0WCA9IHRoaXMuX2VsZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5jYWxjT2Zmc2V0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLl9taW5Cb3VuZCA9IHRoaXMuX21pbkJvdW5kID09PSB1bmRlZmluZWQgPyB0aGlzLl9taW4gOiB0aGlzLl9taW5Cb3VuZDtcbiAgICB0aGlzLl9tYXhCb3VuZCA9IHRoaXMuX21heEJvdW5kID09PSB1bmRlZmluZWQgPyB0aGlzLl9tYXggOiB0aGlzLl9tYXhCb3VuZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCwgZmFsc2UpO1xuICB9XG59XG4iXX0=