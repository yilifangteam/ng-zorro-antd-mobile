import { TemplateRef } from '@angular/core';
import { TabPaneComponent } from '../tabs/tab-pane.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabBarItemComponent extends TabPaneComponent {
    prefixCls: string;
    selected: boolean;
    tintColor: string;
    unselectedTintColor: string;
    tabBarTab: TemplateRef<void>;
    key: string;
    dot: boolean;
    badge: number | string;
    icon: string | TemplateRef<void>;
    selectedIcon: string | TemplateRef<void>;
    constructor();
    isTemplateRef(value: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabBarItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabBarItemComponent, "TabBarItem, nzm-tab-bar-item", never, { "key": "key"; "dot": "dot"; "badge": "badge"; "icon": "icon"; "selectedIcon": "selectedIcon"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=tab-bar-item.component.d.ts.map