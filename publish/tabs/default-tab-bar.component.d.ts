import { QueryList, Renderer2, ElementRef, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { TabBarPositionType } from './PropsType';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultTabBarComponent implements AfterContentInit {
    private _renderer;
    private _ref;
    prefixCls: string;
    inkBarStyle: object;
    tabsBarStyle: object;
    showPrev: boolean;
    showNext: boolean;
    selectedKey: number;
    inkBarOffSet: number;
    inkBarLength: number;
    tabBarNavSwipedPosition: number;
    tabBarNavSwipingPosition: number;
    private _startPosition;
    tabTitles: QueryList<ElementRef>;
    tabsBarSwipe: ElementRef;
    page: number;
    animated: boolean;
    tabBarUnderlineStyle: object;
    tabBarBackgroundColor: string;
    tabTitleSize: number;
    tabBarPosition: TabBarPositionType;
    get activeTab(): number;
    set activeTab(index: number);
    tabBarWrap: boolean;
    constructor(_renderer: Renderer2, _ref: ChangeDetectorRef);
    onTouchStart(event: any): void;
    onTouchMove(event: any): void;
    onTouchEnd(): void;
    onContentChange(): void;
    ngAfterContentInit(): void;
    private setTabsStyle;
    private setTabBarStyleCenter;
    private setInkBarStatus;
    private setTabBarNavSwipingPosition;
    private setTabBarNavSwipedPosition;
    private getTabSize;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultTabBarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DefaultTabBarComponent, "DefaultTabBar, nzm-default-tab-bar", never, { "page": "page"; "animated": "animated"; "tabBarBackgroundColor": "tabBarBackgroundColor"; "tabTitleSize": "tabTitleSize"; "tabBarPosition": "tabBarPosition"; "activeTab": "activeTab"; "tabBarUnderlineStyle": "tabBarUnderlineStyle"; }, {}, ["tabTitles"], ["*"]>;
}

//# sourceMappingURL=default-tab-bar.component.d.ts.map