import { PickerComponent } from './picker.component';
export declare abstract class PickerRef<T = any, R = any> {
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    abstract getElement(): HTMLElement;
    abstract getInstance(): PickerComponent;
}
