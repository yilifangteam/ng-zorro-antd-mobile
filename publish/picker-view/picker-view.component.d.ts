import { OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class PickerViewComponent extends PickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
    options: any;
    data: Array<any>;
    cols: number;
    cascade: boolean;
    indicatorStyle: object;
    itemStyle: object;
    pickerViewInit(): void;
    init(): void;
    writeValue(value: any[]): void;
    registerOnChange(fn: (_: any[]) => void): void;
    registerOnTouched(fn: any[]): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PickerViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PickerViewComponent, "PickerView, nzm-picker-view", never, { "data": "data"; "cols": "cols"; "indicatorStyle": "indicatorStyle"; "itemStyle": "itemStyle"; "cascade": "cascade"; }, {}, never, never>;
}

//# sourceMappingURL=picker-view.component.d.ts.map