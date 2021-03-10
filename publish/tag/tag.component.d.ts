import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TagComponent implements OnInit {
    prefixCls: string;
    closed: boolean;
    wrapCls: any;
    private _small;
    private _closable;
    private _selected;
    private _disabled;
    get small(): boolean;
    set small(v: boolean);
    get closable(): boolean;
    set closable(v: boolean);
    set selected(v: any);
    get disabled(): boolean;
    set disabled(v: boolean);
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    afterClose: EventEmitter<any>;
    constructor();
    onClick(): void;
    onTagClose(): void;
    setClassMap(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TagComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TagComponent, "Tag, nzm-tag", never, { "small": "small"; "closable": "closable"; "selected": "selected"; "disabled": "disabled"; }, { "onChange": "onChange"; "onClose": "onClose"; "afterClose": "afterClose"; }, never, ["*"]>;
}

//# sourceMappingURL=tag.component.d.ts.map