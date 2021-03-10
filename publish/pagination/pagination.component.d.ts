import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaginationComponent, "Pagination, nzm-pagination", never, { "mode": "mode"; "current": "current"; "total": "total"; "simple": "simple"; "disabled": "disabled"; "locale": "locale"; }, { "onChange": "onChange"; }, never, never>;
}
export {};

//# sourceMappingURL=pagination.component.d.ts.map