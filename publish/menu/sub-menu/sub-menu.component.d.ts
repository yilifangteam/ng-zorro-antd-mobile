import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class SubMenuComponent implements OnChanges {
    prefixCls: string;
    private _subMenuPrefixCls;
    private _subMenuData;
    private _multiSelect?;
    onSel: EventEmitter<any>;
    radioPrefixCls: string;
    showSelect: boolean;
    selItem: any;
    get subMenuPrefixCls(): string;
    set subMenuPrefixCls(v: string);
    get subMenuData(): any;
    set subMenuData(v: any);
    get multiSelect(): boolean;
    set multiSelect(v: boolean);
    constructor();
    onClick(dataItem: any): void;
    selected(dataItem: any): boolean;
    getClass(dataItem: any): string;
    ngOnChanges(changes: SimpleChanges): void;
}
