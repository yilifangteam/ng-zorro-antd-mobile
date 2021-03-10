import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class SafeHTMLPipe implements PipeTransform {
    private _sanitized;
    constructor(_sanitized: DomSanitizer);
    transform(value: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SafeHTMLPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SafeHTMLPipe, "safeHTML">;
}

//# sourceMappingURL=save-html.d.ts.map