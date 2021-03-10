import { PipeTransform } from '@angular/core';
import { LocaleProviderService } from './locale-provider.service';
import * as ɵngcc0 from '@angular/core';
export declare class LocaleProviderPipe implements PipeTransform {
    private _locale;
    constructor(_locale: LocaleProviderService);
    transform(keyPath: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocaleProviderPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<LocaleProviderPipe, "localeProvider">;
}

//# sourceMappingURL=locale-provider.pipe.d.ts.map