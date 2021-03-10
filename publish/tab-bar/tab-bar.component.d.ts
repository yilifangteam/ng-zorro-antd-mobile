import { AfterContentInit, QueryList, EventEmitter } from '@angular/core';
import { TabBarItemComponent } from './tab-bar-item.component';
import * as ɵngcc0 from '@angular/core';
export declare type TabBarTabPositionType = 'top' | 'bottom';
export interface TabBarOnPressEvent {
    index: number;
    title: string;
    key: string;
}
export declare class TabBarComponent implements AfterContentInit {
    prefixCls: string;
    private _activeTab;
    private _tintColor;
    private _unselectedTintColor;
    tabBarItems: QueryList<TabBarItemComponent>;
    hidden: boolean;
    prerenderingSiblingsNumber: number;
    get activeTab(): number;
    set activeTab(tab: number);
    barTintColor: string;
    tabBarPosition: TabBarTabPositionType;
    get tintColor(): string;
    set tintColor(color: string);
    get unselectedTintColor(): string;
    set unselectedTintColor(color: string);
    onPress: EventEmitter<TabBarOnPressEvent>;
    tabBar: boolean;
    constructor();
    selectTabBarItem(index: number): void;
    tabBarTabOnPress(pressParam: TabBarOnPressEvent): void;
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabBarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabBarComponent, "TabBar, nzm-tab-bar", never, { "hidden": "hidden"; "prerenderingSiblingsNumber": "prerenderingSiblingsNumber"; "barTintColor": "barTintColor"; "tabBarPosition": "tabBarPosition"; "activeTab": "activeTab"; "tintColor": "tintColor"; "unselectedTintColor": "unselectedTintColor"; }, { "onPress": "onPress"; }, ["tabBarItems"], never>;
}

//# sourceMappingURL=tab-bar.component.d.ts.map