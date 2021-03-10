import { ComponentRef, ComponentFactory, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { CustomKeyboardComponent } from '../custom-keyboard/custom-keyboard.component';
import * as ɵngcc0 from '@angular/core';
export declare class CustomInputService {
    private _appRef;
    private _cfr;
    static compRef: ComponentRef<any>;
    static appRef: ApplicationRef;
    static isShow: boolean;
    static clickValue: any;
    static _inputCompFactory: ComponentFactory<CustomKeyboardComponent>;
    static _keyboardPrefixCls: string;
    constructor(_appRef: ApplicationRef, _cfr: ComponentFactoryResolver);
    static getShowStatus(): boolean;
    static showKeyboard(): void;
    static hideKeyboard(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomInputService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomInputService>;
}

//# sourceMappingURL=custom-input.service.d.ts.map