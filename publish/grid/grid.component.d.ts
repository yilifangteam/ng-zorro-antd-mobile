import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class GridComponent implements OnInit {
    wrapCls: {};
    itemCls: {};
    carouselProps: {
        dots: boolean;
        dragging: boolean;
    };
    defaultProps: {
        data: any[];
        hasLine: boolean;
        isCarousel: boolean;
        columnNum: number;
        carouselMaxRow: number;
        prefixCls: string;
        square: boolean;
        itemStyle: {};
    };
    carouselData: any[];
    carouselDataTmp: any[];
    gridData: any[];
    private _data;
    get columnNum(): number;
    set columnNum(value: number);
    get carouselMaxRow(): number;
    set carouselMaxRow(value: number);
    itemStyle: object;
    square: boolean;
    hasLine: boolean;
    get isCarousel(): boolean;
    set isCarousel(value: boolean);
    activeStyle: boolean;
    set data(value: Array<any>);
    onClick: EventEmitter<any>;
    amGrid: boolean;
    get amGridSquare(): boolean;
    get amGridLine(): boolean;
    get amGridCarousel(): boolean;
    constructor();
    getContentType(value: any): string;
    init(): void;
    getCarouselData(rowsArr: any[], pageCount: number, rowCount: number): any[];
    getRows(rowCount: number, dataLength: number): any[];
    click(data: any, index: any): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GridComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GridComponent, "Grid, nzm-grid", never, { "itemStyle": "itemStyle"; "square": "square"; "hasLine": "hasLine"; "activeStyle": "activeStyle"; "columnNum": "columnNum"; "carouselMaxRow": "carouselMaxRow"; "isCarousel": "isCarousel"; "data": "data"; }, { "onClick": "onClick"; }, never, ["*"]>;
}

//# sourceMappingURL=grid.component.d.ts.map