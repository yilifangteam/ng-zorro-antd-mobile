import { EventEmitter } from '@angular/core';
export interface ElementType {
    type: string;
    backgroundImage: string;
    transform: string;
}
export declare class ImagePickerComponent {
    prefixCls: string;
    flexEl: ElementType[][];
    private _accept;
    private _count;
    private _selectable;
    private _files;
    private _multiple;
    private _fileSelectorInput;
    capture: boolean | string;
    disableDelete: boolean;
    get files(): Array<any>;
    set files(value: Array<any>);
    get accept(): string;
    set accept(value: string);
    get length(): number;
    set length(value: number);
    get multiple(): boolean;
    set multiple(value: boolean);
    get selectable(): boolean;
    set selectable(value: boolean);
    onFail: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onImageClick: EventEmitter<any>;
    onAddImageClick: EventEmitter<any>;
    constructor();
    sortItem(): void;
    addImage(imgItem: any): void;
    removeImage(index: number): void;
    imageClick(index: number): void;
    addImageClick(e: any): void;
    parseFile(file: any, index: number): void;
    fileChange(event: any): void;
    getRotation(orientation?: number): number;
    getOrientation(file: any, callback: (_: number) => void): void;
}
