import { ElementRef, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SliderTrackComponent implements OnChanges {
    private _elf;
    private _sanitizer;
    prefixCls: string;
    elStyle: object;
    private _className;
    private _included;
    private _offset;
    private _length;
    private _style;
    get className(): object;
    set className(value: object);
    get included(): boolean;
    set included(value: boolean);
    set offset(value: number);
    set length(value: number);
    set style(value: object);
    constructor(_elf: ElementRef, _sanitizer: DomSanitizer);
    ngOnChanges(): void;
}
