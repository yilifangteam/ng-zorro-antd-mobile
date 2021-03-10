import { OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SliderStepsComponent implements OnInit {
    private _elf;
    prefixCls: string;
    stepArray: any[];
    private _min;
    private _max;
    private _step;
    private _marks;
    private _included;
    private _upperBound;
    private _lowerBound;
    private _dots;
    private _dotStyle;
    private _activeDotStyle;
    set min(value: number);
    set max(value: number);
    set marks(value: object);
    set step(value: number);
    set included(value: boolean);
    set dots(value: boolean);
    set upperBound(value: number);
    set lowerBound(value: number);
    get class(): string;
    constructor(_elf: ElementRef);
    calPoints(): number[];
    getSteps(points: any): void;
    setActiveCls(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SliderStepsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SliderStepsComponent, "SliderSteps, nzm-slider-steps", never, { "min": "min"; "max": "max"; "marks": "marks"; "step": "step"; "included": "included"; "dots": "dots"; "upperBound": "upperBound"; "lowerBound": "lowerBound"; }, {}, never, never>;
}

//# sourceMappingURL=slider-steps.component.d.ts.map