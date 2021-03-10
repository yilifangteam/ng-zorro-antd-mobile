import { TemplateRef, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ToastComponent {
    private _zone;
    prefixCls: string;
    isContentString: boolean;
    maskClassMap: any;
    transitionName: string;
    private _iconType;
    private _content;
    mask: boolean;
    get content(): string | TemplateRef<any>;
    set content(value: string | TemplateRef<any>);
    get iconType(): string;
    set iconType(value: string);
    position: string;
    constructor(_zone: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastComponent, "Toast", never, { "mask": "mask"; "position": "position"; "content": "content"; "iconType": "iconType"; }, {}, never, never>;
}

//# sourceMappingURL=toast.component.d.ts.map