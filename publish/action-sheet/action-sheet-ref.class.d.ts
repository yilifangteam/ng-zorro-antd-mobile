import { ActionSheetComponent } from './action-sheet.component';
export declare abstract class ActionSheetRef<T = any, R = any> {
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    abstract getElement(): HTMLElement;
    abstract getInstance(): ActionSheetComponent;
}
