import { TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ModalBaseOptions {
    visible?: boolean;
    focus?: boolean;
    prefixCls?: string;
    animated?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    onClose?: any;
    transparent?: boolean;
    popup?: boolean;
    animationType?: string;
    title?: string | TemplateRef<any>;
    footer?: Array<any>;
    platform?: string;
    className?: string;
    wrapClassName?: string;
    message?: string | TemplateRef<any>;
    actions?: Array<any>;
    callbackOrActions?: Array<any>;
    type?: string;
    defaultValue?: Array<string>;
    placeholders?: Array<string>;
    operation?: boolean;
    transitionName?: string;
    maskTransitionName?: string;
    close: () => void;
    closeWithAnimation: () => void;
}
export declare class ModalOptions extends ModalBaseOptions {
    transitionName?: string;
    maskTransitionName?: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalOptions>;
}
export declare class AlertOptions extends ModalBaseOptions {
    message?: string | TemplateRef<any>;
    actions?: Array<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AlertOptions>;
}
export declare class Action {
    text?: string;
    onPress?: Function;
    style?: {};
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Action, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Action>;
}

//# sourceMappingURL=modal-options.provider.d.ts.map