import { ElementRef, TemplateRef, EventEmitter } from '@angular/core';
import { ModalOptions } from './modal-options.provider';
import { Observable } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { ModalRef } from './modal-ref.class';
import * as ɵngcc0 from '@angular/core';
export declare class ModalComponent<T = any, R = any> extends ModalRef<T, R> implements ControlValueAccessor {
    option: ModalOptions;
    elementRef: ElementRef;
    autoFocus: {
        focus: boolean;
        date: Date;
    };
    transitionName: string;
    maskTransitionName: string;
    wrapCls: object;
    cls: object;
    btnGroupClass: object;
    data: {
        text: string;
        password: string;
    };
    onChanged: (visiable: boolean) => {};
    onTouched: () => {};
    set title(value: string | TemplateRef<any>);
    set closable(value: boolean);
    set maskClosable(value: boolean);
    set popup(value: boolean);
    set animationType(value: string);
    set transparent(value: boolean);
    set footer(value: Array<any>);
    set platform(value: string);
    set className(value: string);
    set wrapClassName(value: string);
    set actions(value: Array<any>);
    set defaultValue(value: Array<string>);
    set type(value: string);
    set placeholders(value: Array<string>);
    set operation(value: boolean);
    onClose: EventEmitter<any>;
    afterOpenEmitter: EventEmitter<any>;
    afterCloseEmitter: EventEmitter<any>;
    panend(event: any): void;
    constructor(option: ModalOptions, elementRef: ElementRef);
    isTemplateRef(value: string | TemplateRef<any>): boolean;
    isNoTitle(value: string | TemplateRef<any>): boolean;
    setTransitionName(visible: boolean): void;
    setActiveName(name: string): string;
    setLeaveActiveName(name: string): string;
    setClassMap(): void;
    inputChange(type: string, value: string): void;
    leaveAnimation(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    get afterOpen(): Observable<void>;
    get afterClose(): Observable<R>;
    getInstance(): ModalComponent;
    getElement(): HTMLElement;
    close(): void;
    triggerOk(): void;
    triggerCancel(): void;
    destroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalComponent<any, any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalComponent<any, any>, "Modal", never, { "title": "title"; "closable": "closable"; "maskClosable": "maskClosable"; "popup": "popup"; "animationType": "animationType"; "transparent": "transparent"; "footer": "footer"; "platform": "platform"; "className": "className"; "wrapClassName": "wrapClassName"; "actions": "actions"; "defaultValue": "defaultValue"; "type": "type"; "placeholders": "placeholders"; "operation": "operation"; }, { "onClose": "onClose"; "afterOpenEmitter": "afterOpenEmitter"; "afterCloseEmitter": "afterCloseEmitter"; }, never, ["*"]>;
}
export declare class ModalServiceComponent extends ModalComponent {
    option: ModalOptions;
    elementRef: ElementRef;
    constructor(option: ModalOptions, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalServiceComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalServiceComponent, "ModalService", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=modal.component.d.ts.map