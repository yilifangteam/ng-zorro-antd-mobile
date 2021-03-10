import { ControlValueAccessor } from '@angular/forms';
import { AfterContentInit, OnDestroy, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { RadioItemComponent } from './radio-item.component';
import { RadioStatus } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare const RADIO_ITEM_GROUP_VALUE_ACCESSOR: any;
export declare class RadioItemGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
    private cdr;
    private selectedValue;
    private destroy$;
    private selectSubscription;
    private _ngModelOnChange;
    private _ngModelOnTouched;
    radioItems: QueryList<RadioItemComponent>;
    onChange: EventEmitter<RadioStatus>;
    constructor(cdr: ChangeDetectorRef);
    updateChildrenStatus(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    writeValue(value: string | number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RadioItemGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RadioItemGroupComponent, "RadioItemGroup, nzm-radio-item-group", never, {}, { "onChange": "onChange"; }, ["radioItems"], ["*"]>;
}

//# sourceMappingURL=radio-item-group.component.d.ts.map