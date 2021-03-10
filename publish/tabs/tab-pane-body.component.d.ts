import { OnInit, TemplateRef } from '@angular/core';
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
}
