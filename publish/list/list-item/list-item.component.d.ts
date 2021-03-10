import { OnInit, TemplateRef, EventEmitter, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ListItemComponent implements OnInit, OnDestroy {
    defaultProps: {
        prefixCls: string;
        align: string;
        error: boolean;
        multipleLine: boolean;
        wrap: boolean;
        platform: string;
        rippleStyle: {};
    };
    arrowCls: any;
    lineCls: any;
    wrapCls: string;
    rippleCls: any;
    rippleClicked: boolean;
    debounceTimeout: any;
    private _thumb_component;
    private _thumb;
    private _thumb_src;
    private _extra_component;
    private _extra;
    private _extra_title;
    private _arrow;
    private _disabled;
    private _className;
    private _active;
    get extra(): string | TemplateRef<any>;
    get extra_component(): boolean;
    get extra_title(): string;
    set extra(value: string | TemplateRef<any>);
    set className(value: any);
    get arrow(): string;
    set arrow(value: string);
    set multipleLine(value: any);
    set error(value: any);
    set wrap(value: any);
    set align(value: any);
    set platform(value: any);
    set disabled(value: any);
    get thumb(): TemplateRef<any>;
    get thumb_component(): boolean;
    get thumb_src(): string;
    set thumb(value: TemplateRef<any>);
    onClick: EventEmitter<any>;
    get bingClassName(): string;
    click(event: any): void;
    start(): void;
    move(): void;
    end(): void;
    mouse_start(): void;
    mouse_end(): void;
    constructor();
    setClsMap(): void;
    onItemClick(ev: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ListItemComponent, "ListItem, nzm-list-item", never, { "extra": "extra"; "className": "className"; "arrow": "arrow"; "multipleLine": "multipleLine"; "error": "error"; "wrap": "wrap"; "align": "align"; "platform": "platform"; "disabled": "disabled"; "thumb": "thumb"; }, { "onClick": "onClick"; }, never, ["*"]>;
}

//# sourceMappingURL=list-item.component.d.ts.map