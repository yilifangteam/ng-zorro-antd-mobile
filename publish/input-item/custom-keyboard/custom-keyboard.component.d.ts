import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LocaleProviderService } from '../../locale-provider/locale-provider.service';
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
}
