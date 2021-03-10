import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ResultComponent {
    prefixCls: string;
    isTitleString: boolean;
    isMessageString: boolean;
    private _title;
    private _message;
    get title(): string | TemplateRef<any>;
    set title(value: string | TemplateRef<any>);
    imgUrl: string;
    buttonText: string;
    buttonType: string;
    img: TemplateRef<any>;
    get message(): string | TemplateRef<any>;
    set message(value: string | TemplateRef<any>);
    onButtonClick: EventEmitter<any>;
    role: string;
    amResult: boolean;
    constructor();
    buttonClick(event: any): void;
    isTemplateRef(value: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ResultComponent, "Result, nzm-result", never, { "title": "title"; "message": "message"; "imgUrl": "imgUrl"; "buttonText": "buttonText"; "buttonType": "buttonType"; "img": "img"; }, { "onButtonClick": "onButtonClick"; }, never, never>;
}

//# sourceMappingURL=result.component.d.ts.map