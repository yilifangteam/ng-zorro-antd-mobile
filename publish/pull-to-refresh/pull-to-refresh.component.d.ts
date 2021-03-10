import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export interface Indicator {
    activate?: any;
    deactivate?: any;
    release?: any;
    finish?: any;
}
export declare class PullToRefreshComponent implements ControlValueAccessor {
    private ele;
    transtionCls: any;
    style: object;
    startY: number;
    state: any;
    private _headerIndicator;
    private _footerIndicator;
    private _startTime;
    private _endTime;
    private _endReach;
    private _direction;
    private _clientHeight;
    private _currentContentHeight;
    private _lastContentOffset;
    private _ngModelOnChange;
    private _ngModelOnTouched;
    private _pullToRefresh;
    distanceToRefresh: number;
    damping: number;
    endReachedRefresh: boolean;
    refreshing: boolean;
    get direction(): string;
    set direction(value: string);
    get headerIndicator(): Indicator;
    set headerIndicator(value: Indicator);
    get footerIndicator(): Indicator;
    set footerIndicator(value: Indicator);
    onRefresh: EventEmitter<any>;
    refresh: boolean;
    container: boolean;
    refreshUp: boolean;
    refreshDown: boolean;
    touchstart(e: any): void;
    touchmove(e: any): void;
    touchend(e: any): void;
    touchcancel(): void;
    scroll(evt: any): void;
    constructor(ele: ElementRef);
    isTemplateRef(value: any): boolean;
    translateY(distanceY: any): void;
    writeValue(value: object): void;
    registerOnChange(fn: (_: object) => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PullToRefreshComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PullToRefreshComponent, "PullToRefresh, nzm-pull-to-refresh", never, { "distanceToRefresh": "distanceToRefresh"; "damping": "damping"; "endReachedRefresh": "endReachedRefresh"; "refreshing": "refreshing"; "direction": "direction"; "headerIndicator": "headerIndicator"; "footerIndicator": "footerIndicator"; }, { "onRefresh": "onRefresh"; }, never, ["*"]>;
}

//# sourceMappingURL=pull-to-refresh.component.d.ts.map