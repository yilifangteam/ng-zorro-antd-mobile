import { Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import * as ɵngcc0 from '@angular/core';
export declare class PopupService {
    _overlay: Overlay;
    overlay: Overlay;
    overlayRef: OverlayRef;
    currentServiceName: any;
    serviceArray: any;
    constructor(_overlay: Overlay);
    showPopup(component: any, childInjector?: Injector, hasBackdrop?: boolean, positionStrategy?: GlobalPositionStrategy): ComponentRef<any>;
    hidePopup(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PopupService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PopupService>;
}

//# sourceMappingURL=popup.service.d.ts.map