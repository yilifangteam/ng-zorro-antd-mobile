import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { AccordionService } from '../accordion.service';
import { isTemplateRef } from '../../core/util/check';
import * as ɵngcc0 from '@angular/core';
export declare class AccordionGroupComponent {
    private _accordionService;
    private _cdr;
    isShowChild: boolean;
    key: string;
    header: string | TemplateRef<void>;
    isOpened: boolean;
    disabled: boolean;
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onChange: EventEmitter<any>;
    isTemplateRef: typeof isTemplateRef;
    amItem: boolean;
    isActive: boolean;
    addon: boolean;
    constructor(_accordionService: AccordionService, _cdr: ChangeDetectorRef);
    checkAndToggle(): void;
    get slide(): string;
    toggle(): void;
    openOnInitialization(): void;
    slideAnimationDoen(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AccordionGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AccordionGroupComponent, "AccordionPanel, nzm-accordion-panel", never, { "isOpened": "isOpened"; "disabled": "disabled"; "key": "key"; "header": "header"; }, { "onOpen": "onOpen"; "onClose": "onClose"; "onChange": "onChange"; }, never, ["*"]>;
}

//# sourceMappingURL=accordion-group.component.d.ts.map