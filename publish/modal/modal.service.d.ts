import { ComponentRef, TemplateRef } from '@angular/core';
import { ModalServiceComponent } from './modal.component';
import { ModalBaseOptions } from './modal-options.provider';
import { PopupService } from '../core/services/popup.service';
import * as ɵngcc0 from '@angular/core';
export declare class ModalService extends PopupService {
    modalRef: ComponentRef<ModalServiceComponent>;
    _initConfig(config: ModalBaseOptions, options: any): ModalBaseOptions;
    _open(props: ModalBaseOptions): any;
    closeWithAnimation(): void;
    alert(title?: string | TemplateRef<any>, message?: string | TemplateRef<any>, actions?: Array<any>, platform?: string): any;
    prompt(title?: string | TemplateRef<any>, message?: string | TemplateRef<any>, callbackOrActions?: any, type?: string, defaultValue?: Array<string>, placeholders?: Array<any>, platform?: string): any;
    operation(actions?: any, platform?: string): any;
    close(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalService>;
}

//# sourceMappingURL=modal.service.d.ts.map