import { TemplateRef } from '@angular/core';
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
}
export declare class AlertOptions extends ModalBaseOptions {
    message?: string | TemplateRef<any>;
    actions?: Array<any>;
}
export declare class Action {
    text?: string;
    onPress?: Function;
    style?: {};
}
