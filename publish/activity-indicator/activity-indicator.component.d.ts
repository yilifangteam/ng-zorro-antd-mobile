import { OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ActivityIndicatorComponent implements OnInit {
    prefixCls: string;
    spinnerClass: object;
    private _text;
    private _size;
    private _toast;
    private _animating;
    get animating(): boolean;
    set animating(v: boolean);
    set size(v: string);
    get toast(): boolean;
    set toast(v: boolean);
    get text(): string;
    set text(v: string);
    clsActIndicator: boolean;
    clsActIndicatorToast: any;
    clsActIndicatorLg: any;
    clsActIndicatorSm: any;
    constructor();
    setClass(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActivityIndicatorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ActivityIndicatorComponent, "ActivityIndicator , nzm-ctivity-indicator", never, { "animating": "animating"; "size": "size"; "toast": "toast"; "text": "text"; }, {}, never, never>;
}

//# sourceMappingURL=activity-indicator.component.d.ts.map