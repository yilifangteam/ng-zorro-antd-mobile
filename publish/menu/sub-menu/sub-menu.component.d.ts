import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SubMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SubMenuComponent, "SubMenu, nzm-sub-menu", never, { "subMenuPrefixCls": "subMenuPrefixCls"; "subMenuData": "subMenuData"; "multiSelect": "multiSelect"; "radioPrefixCls": "radioPrefixCls"; "showSelect": "showSelect"; "selItem": "selItem"; }, { "onSel": "onSel"; }, never, never>;
}

//# sourceMappingURL=sub-menu.component.d.ts.map