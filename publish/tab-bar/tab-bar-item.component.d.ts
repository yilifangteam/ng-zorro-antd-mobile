import { TemplateRef } from '@angular/core';
import { TabPaneComponent } from '../tabs/tab-pane.component';
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
}
