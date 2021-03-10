import { OnInit, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TabPaneBodyComponent implements OnInit {
    private _prerender;
    active: boolean;
    loaded: boolean;
    content: TemplateRef<void>;
    get prerender(): boolean;
    set prerender(value: boolean);
    paneWrap: boolean;
    get wrapActive(): boolean;
    get wrapInactive(): boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabPaneBodyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabPaneBodyComponent, "[tab-pane-body]", never, { "active": "active"; "loaded": "loaded"; "prerender": "prerender"; "content": "content"; }, {}, never, never>;
}

//# sourceMappingURL=tab-pane-body.component.d.ts.map