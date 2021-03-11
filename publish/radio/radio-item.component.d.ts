import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class RadioItemComponent {
    private cdr;
    select$: Subject<RadioItemComponent>;
    prefixCls: string;
    private _checked;
    private _disabled;
    get checked(): boolean;
    set checked(value: boolean);
    name: string;
    value: string;
    arrow: string;
    thumb: string | TemplateRef<any>;
    wrap: boolean;
    error: boolean;
    multipleLine: boolean;
    platform: string;
    align: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    constructor(cdr: ChangeDetectorRef);
    onRadioItemClick(event: any): void;
    change(event: any): void;
    markForCheck(): void;
}
