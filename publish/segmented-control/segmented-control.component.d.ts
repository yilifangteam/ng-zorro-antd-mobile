import { EventEmitter } from '@angular/core';
import { SegmentedControlOnChangeEvent } from './PropsType';
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
}
