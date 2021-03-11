import { OnInit, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
export declare class SliderMarksComponent implements OnInit, AfterViewInit {
    private _elf;
    markArray: Array<any>;
    private _min;
    private _max;
    private _marks;
    private _included;
    private _className;
    private _upperBound;
    private _lowerBound;
    private _range;
    private _markWidth;
    set min(value: number);
    set max(value: number);
    set marks(value: object);
    set included(value: boolean);
    set upperBound(value: number);
    set lowerBound(value: number);
    onChange: EventEmitter<any>;
    onAfterChange: EventEmitter<any>;
    get class(): string;
    constructor(_elf: ElementRef);
    getMarks(marksKeys: any): void;
    setActiveCls(): void;
    setMarksLable(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
