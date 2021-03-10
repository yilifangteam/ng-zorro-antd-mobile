import { ComponentRef } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';
import * as ɵngcc0 from '@angular/core';
export declare class PickerService extends PopupService {
    comRef: ComponentRef<PickerComponent>;
    defaultOptions: PickerOptions;
    showPicker(config?: PickerOptions, confirmCallback?: PickerCallBack, cancelCallback?: PickerCallBack): any;
    hidePicker(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PickerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PickerService>;
}

//# sourceMappingURL=picker.service.d.ts.map