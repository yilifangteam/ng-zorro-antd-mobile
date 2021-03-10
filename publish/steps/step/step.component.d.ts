import { OnInit, ElementRef, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class StepComponent implements OnInit {
    private _el;
    prefixCls: string;
    stepItemCls: {};
    iconCls: object;
    tailContent: string;
    stepNumber: number;
    isIconString: boolean;
    iconSize: string;
    outStatus: string;
    private _status;
    private _icon;
    private isCustomStatus;
    private isCustomIcon;
    get status(): StepStatusEnum;
    set status(value: StepStatusEnum);
    title: string | TemplateRef<any>;
    description: string | TemplateRef<any>;
    get icon(): string | TemplateRef<any>;
    set icon(value: string | TemplateRef<any>);
    set currentIndex(current: number);
    private _currentIndex;
    clsStepItem: boolean;
    constructor(_el: ElementRef);
    isTemplateRef(value: any): boolean;
    setClass(): void;
    setIcon(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StepComponent, "Step, nzm-step", never, { "title": "title"; "description": "description"; "status": "status"; "icon": "icon"; }, {}, never, never>;
}
export declare enum StepStatusEnum {
    WAIT = "wait",
    PROCESS = "process",
    FINISH = "finish",
    ERROR = "error"
}
export declare enum StepDirectionEnum {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

//# sourceMappingURL=step.component.d.ts.map