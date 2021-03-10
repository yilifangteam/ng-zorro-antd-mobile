import { ComponentRef, ComponentFactory, ApplicationRef, NgZone, ComponentFactoryResolver } from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastOptions } from './toast-options.provider';
export interface ConfigInterface {
    content?: any;
    iconType?: string;
    mask?: boolean;
}
export declare class ToastService {
    private _appRef;
    private _cfr;
    private _zone;
    timeout: any;
    zone: NgZone;
    compRef: ComponentRef<any>;
    insertElement: HTMLElement;
    toastCompFactory: ComponentFactory<ToastComponent>;
    appRef: ApplicationRef;
    constructor(_appRef: ApplicationRef, _cfr: ComponentFactoryResolver, _zone: NgZone);
    _initConfig(config: Object, options: ToastOptions): Object;
    notice(config: ConfigInterface, type: any, timeInterval: number, onClose: any, mask?: boolean, position?: string): any;
    /**
     * Open info dialog
     */
    info(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string): any;
    /**
     * Open success dialog
     */
    success(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string): any;
    show(content?: string, timeInterval?: number, mask?: boolean, position?: string): any;
    fail(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string): any;
    offline(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string): any;
    loading(content?: string, timeInterval?: number, onClose?: () => void, mask?: boolean, position?: string): any;
    hide(): void;
}
