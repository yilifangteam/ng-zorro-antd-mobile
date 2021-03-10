import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LocaleProviderService } from '../../locale-provider/locale-provider.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomKeyboardComponent implements OnInit, OnDestroy {
    private _localeProvider;
    prefixCls: string;
    wrapCls: object;
    okText: string;
    wrapperCls: object;
    private _locale;
    private _unsubscribe$;
    onClick: EventEmitter<any>;
    constructor(_localeProvider: LocaleProviderService);
    tdClick(e: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomKeyboardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CustomKeyboardComponent, "CustomKeyboard", never, {}, { "onClick": "onClick"; }, never, never>;
}

//# sourceMappingURL=custom-keyboard.component.d.ts.map