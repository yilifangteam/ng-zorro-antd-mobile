import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { AccordionService } from '../accordion.service';
import { isTemplateRef } from '../../core/util/check';
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
}
