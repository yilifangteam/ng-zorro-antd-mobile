import { ElementRef, TemplateRef, EventEmitter } from '@angular/core';
import { ModalOptions } from './modal-options.provider';
import { Observable } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { ModalRef } from './modal-ref.class';
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
}
export declare class ModalServiceComponent extends ModalComponent {
    option: ModalOptions;
    elementRef: ElementRef;
    constructor(option: ModalOptions, elementRef: ElementRef);
}
