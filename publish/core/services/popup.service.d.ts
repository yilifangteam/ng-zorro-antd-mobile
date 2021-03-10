import { Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
export declare class PopupService {
    _overlay: Overlay;
    overlay: Overlay;
    overlayRef: OverlayRef;
    currentServiceName: any;
    serviceArray: any;
    constructor(_overlay: Overlay);
    showPopup(component: any, childInjector?: Injector, hasBackdrop?: boolean, positionStrategy?: GlobalPositionStrategy): ComponentRef<any>;
    hidePopup(): void;
}
