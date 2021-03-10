import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface PickerOptionsInterface {
    data?: Array<any>;
    cols?: number;
    mask?: boolean;
    title?: string;
    okText?: string;
    dismissText?: string;
    disabled?: boolean;
    cascade?: boolean;
    appendToBody?: boolean;
}
export declare class PickerOptions implements PickerOptionsInterface {
    data?: Array<any>;
    value?: Array<any>;
    cols?: number;
    mask?: boolean;
    title?: string;
    okText?: string;
    dismissText?: string;
    disabled?: boolean;
    cascade?: boolean;
    appendToBody?: boolean;
    onDismiss?: EventEmitter<any>;
    onPickerChange?: EventEmitter<any>;
    indicatorStyle?: object;
    hidePicker?: () => void;
    confirm?: (result: any) => void;
    cancel?: () => void;
    updateNgModel?: (value: any[]) => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PickerOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PickerOptions>;
}
export declare type PickerCallBack = (result?: any) => PromiseLike<any> | void;

//# sourceMappingURL=picker-options.provider.d.ts.map