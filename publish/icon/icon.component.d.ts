import { IconHandler } from '../core/util/icon';
export declare class IconComponent {
    private _iconHandler;
    clsMap: object;
    private _type;
    private _size;
    private _src;
    color: string;
    get type(): string;
    set type(value: string);
    get src(): string;
    set src(value: string);
    get size(): string;
    set size(value: string);
    constructor(_iconHandler: IconHandler);
    setClsMap(): void;
}
