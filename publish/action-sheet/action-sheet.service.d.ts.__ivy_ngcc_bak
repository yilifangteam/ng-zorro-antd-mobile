import { ComponentRef, ComponentFactory, ApplicationRef } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import { ActionCallBack, ActionSheetOptions, ActionSheetWithOptions, ShareActionSheetWithOptions } from './action-sheet-options.provider';
import { PopupService } from '../core/services/popup.service';
export declare class ActionSheetService extends PopupService {
    compRef: ComponentRef<any>;
    _actionSheetCompFactory: ComponentFactory<ActionSheetComponent>;
    appRef: ApplicationRef;
    comRef: ComponentRef<ActionSheetComponent>;
    instance: any;
    _initConfig(config: ActionSheetOptions, options?: Object): ActionSheetOptions;
    _open(props: ActionSheetOptions): ActionSheetComponent<any, any>;
    createActionSheet(flag: string, config: ActionSheetWithOptions | ShareActionSheetWithOptions, callback: ActionCallBack): ActionSheetComponent<any, any>;
    closeWithAnimation(transitionName: any, maskTransitionName: any): void;
    showActionSheetWithOptions(config: ActionSheetWithOptions, callback?: ActionCallBack): ActionSheetComponent<any, any>;
    showShareActionSheetWithOptions(config: ShareActionSheetWithOptions, callback?: ActionCallBack): ActionSheetComponent<any, any>;
    close(): void;
}
