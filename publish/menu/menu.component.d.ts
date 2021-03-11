import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
interface LocaleValue {
    okText: string;
    cancelText: string;
}
export declare class MenuComponent implements OnInit, OnDestroy {
    private _localeProviderService;
    prefixCls: string;
    subMenuPrefixCls: string;
    radioPrefixCls: string;
    multiSelectMenuBtnsCls: string;
    menuSelectContanerPrefixCls: string;
    firstLevelSelectValue: number | string;
    heightStyle: object;
    subMenuData: Array<any>;
    showSelect: boolean;
    subSelInitItem: object;
    locale: LocaleValue;
    private _data;
    private _unsubscribe$;
    get data(): any[];
    set data(v: any[]);
    level: number;
    value: Array<any>;
    height: number;
    multiSelect: boolean;
    onChange: EventEmitter<any>;
    onOk: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    constructor(_localeProviderService: LocaleProviderService);
    onMenuOk(): void;
    onMenuCancel(): void;
    getNewFsv(): string;
    onClickFirstLevelItem(dataItem: any): void;
    onClickSubMenuItem(dataItem: any): void;
    getSelectValue(dataItem: any): any[];
    initData(): void;
    getClass(dataItem: any): string;
    dataItemSelected(dataItem: any): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export {};
