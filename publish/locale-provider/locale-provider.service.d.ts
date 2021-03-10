import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LocaleProviderService {
    private _locale;
    private _change;
    constructor(locale: any);
    get localeChange(): Observable<any>;
    getLocaleValue(keyPath: string): string;
    getLocaleSubObj(keyPath: string): object;
    setLocale(locale: any): void;
    getLocaleId(): string;
    getLocale(): any;
    private _getObjectPath;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocaleProviderService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LocaleProviderService>;
}
export declare function LOCALE_PROVIDER_SERVICE_FACTORY(exist: LocaleProviderService, locale: any): LocaleProviderService;
export declare const LOCALE_PROVIDER_SERVICE_PROVIDER: Provider;

//# sourceMappingURL=locale-provider.service.d.ts.map