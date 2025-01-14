import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
interface LocaleValue {
    prevText: string;
    nextText: string;
}
export declare class PaginationComponent implements OnInit, OnDestroy {
    private _localeProviderService;
    prefixCls: string;
    private hasSetLocale;
    private _locale;
    private _unsubscribe$;
    mode: string;
    current: number;
    total: number;
    simple: boolean;
    disabled: boolean;
    get locale(): LocaleValue;
    set locale(v: LocaleValue);
    onChange: EventEmitter<any>;
    constructor(_localeProviderService: LocaleProviderService);
    isTemplateRef(key: any): boolean;
    onClick(p: number): void;
    getNumber(p: number): Array<number>;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export {};
