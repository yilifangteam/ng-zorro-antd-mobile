import { EventEmitter } from '@angular/core';
import { SegmentedControlOnChangeEvent } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class SegmentedControlComponent {
    prefixCls: string;
    tintColor: string;
    disabled: boolean;
    selectedIndex: number;
    values: Array<string>[];
    onChange: EventEmitter<SegmentedControlOnChangeEvent>;
    role: string;
    amSegment: boolean;
    get amDisabled(): boolean;
    constructor();
    onClick(index: number, value: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SegmentedControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SegmentedControlComponent, "SegmentedControl, nz-segmented-control", never, { "tintColor": "tintColor"; "disabled": "disabled"; "selectedIndex": "selectedIndex"; "values": "values"; }, { "onChange": "onChange"; }, never, never>;
}

//# sourceMappingURL=segmented-control.component.d.ts.map