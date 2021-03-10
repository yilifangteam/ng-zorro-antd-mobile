import { Component, Input, Output, EventEmitter, TemplateRef, HostBinding } from '@angular/core';
export class GridComponent {
    constructor() {
        this.wrapCls = {};
        this.itemCls = {};
        this.carouselProps = {
            dots: false,
            dragging: false
        };
        this.defaultProps = {
            data: [],
            hasLine: true,
            isCarousel: false,
            columnNum: 4,
            carouselMaxRow: 2,
            prefixCls: 'am-grid',
            square: true,
            itemStyle: {}
        };
        this.carouselData = [];
        this.carouselDataTmp = [];
        this.gridData = [];
        this._data = [];
        this.itemStyle = {};
        this.square = true;
        this.hasLine = true;
        this.activeStyle = true;
        this.onClick = new EventEmitter();
        this.amGrid = true;
    }
    get columnNum() {
        return this.defaultProps.columnNum;
    }
    set columnNum(value) {
        if (typeof value === 'number') {
            this.defaultProps.columnNum = value;
            this.init();
        }
    }
    get carouselMaxRow() {
        return this.defaultProps.carouselMaxRow;
    }
    set carouselMaxRow(value) {
        if (typeof value === 'number') {
            this.defaultProps.carouselMaxRow = value;
            this.init();
        }
    }
    get isCarousel() {
        return this.defaultProps.isCarousel;
    }
    set isCarousel(value) {
        this.defaultProps.isCarousel = value;
        this.init();
    }
    set data(value) {
        this._data = value;
        this.init();
    }
    get amGridSquare() {
        return true === this.square;
    }
    get amGridLine() {
        return true === this.hasLine;
    }
    get amGridCarousel() {
        return true === this.isCarousel;
    }
    getContentType(value) {
        if ((value.indexOf('http') >= 0 || value.indexOf('assets') >= 0) && value.indexOf('<') < 0) {
            return 'url';
        }
        else if (value.indexOf('<') >= 0) {
            return 'innerHTML';
        }
        else if (value instanceof TemplateRef) {
            return 'TemplateRef';
        }
        else {
            return 'icon';
        }
    }
    init() {
        const dataLength = (this._data && this._data.length) || 0;
        let rowCount = Math.ceil(dataLength / this.columnNum);
        let rowsArr;
        if (this.defaultProps.isCarousel) {
            if (rowCount % this.carouselMaxRow !== 0) {
                rowCount = rowCount + this.carouselMaxRow - (rowCount % this.carouselMaxRow);
            }
            const pageCount = Math.ceil(rowCount / this.carouselMaxRow);
            rowsArr = this.getRows(rowCount, dataLength);
            if (pageCount <= 1) {
                this.carouselProps = {
                    dots: false,
                    dragging: false
                };
            }
            else {
                this.carouselProps = {
                    dots: true,
                    dragging: true
                };
            }
            this.carouselDataTmp = this.getCarouselData(rowsArr, pageCount, rowCount);
        }
        else {
            this.gridData = this.getRows(rowCount, dataLength);
        }
    }
    getCarouselData(rowsArr, pageCount, rowCount) {
        const pagesArr = [];
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
            const pageRows = [];
            for (let ii = 0; ii < this.carouselMaxRow; ii++) {
                const rowIndex = pageIndex * this.carouselMaxRow + ii;
                if (rowIndex < rowCount) {
                    pageRows.push(rowsArr[rowIndex]);
                }
                else {
                    // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                    pageRows.push(null);
                }
            }
            pagesArr.push(pageRows);
        }
        return pagesArr;
    }
    getRows(rowCount, dataLength) {
        const columnNum = this.columnNum;
        const rowArr = new Array();
        for (let i = 0; i < rowCount; i++) {
            rowArr[i] = new Array();
            for (let j = 0; j < columnNum; j++) {
                const dataIndex = i * columnNum + j;
                if (dataIndex < dataLength) {
                    rowArr[i][j] = this._data[dataIndex];
                }
                else {
                    rowArr[i][j] = null;
                }
            }
        }
        return rowArr;
    }
    click(data, index) {
        const outputData = {
            data: data,
            index: index
        };
        this.onClick.emit(outputData);
    }
    ngOnInit() {
        this.itemCls = {
            [`${this.defaultProps.prefixCls}-item`]: true,
            [`${this.defaultProps.prefixCls}-active-item`]: false
        };
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'Grid, nzm-grid',
                template: "<ng-container *ngIf=\"!isCarousel\">\n  <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n    <FlexItem\n      TouchFeedbackDirective\n      *ngFor=\"let subItem of item; let j = index\"\n      [ngClass]=\"itemCls\"\n      [ngStyle]=\"itemStyle\"\n      [className]=\"['am-grid-item-active']\"\n      [activeStyle]=\"activeStyle\"\n    >\n      <div\n        *ngIf=\"subItem !== null\"\n        class=\"{{ defaultProps.prefixCls }}-item-content\"\n        (click)=\"click(subItem, i * columnNum + j)\"\n      >\n        <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-{{ columnNum }}\">\n          <img\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'url'\"\n            src=\"{{ subItem.icon }}\"\n            class=\"{{ defaultProps.prefixCls }}-icon\"\n          />\n          <Icon\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'icon'\"\n            [type]=\"subItem.icon\"\n            [size]=\"subItem.size\"\n          ></Icon>\n          <div\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'innerHTML'\"\n            [innerHTML]=\"subItem.icon | safeHTML\"\n          ></div>\n          <ng-template\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'TemplateRef'\"\n            [ngTemplateOutlet]=\"subItem.icon\"\n          ></ng-template>\n          <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n        </div>\n      </div>\n      <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n    </FlexItem>\n  </Flex>\n  <ng-content></ng-content>\n</ng-container>\n\n<Carousel\n  *ngIf=\"isCarousel && carouselDataTmp.length > 0\"\n  [autoplay]=\"false\"\n  [infinite]=\"true\"\n  [selectedIndex]=\"0\"\n  [autoplayInterval]=\"3000\"\n  [dots]=\"carouselProps.dots\"\n  [dragging]=\"carouselProps.dragging\"\n>\n  <CarouselSlide\n    *ngFor=\"let gridData of carouselDataTmp\"\n    class=\"{{ defaultProps.prefixCls }}-carousel-page\"\n    style=\"display: block;\"\n  >\n    <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n      <FlexItem\n        TouchFeedbackDirective\n        *ngFor=\"let subItem of item; let j = index\"\n        class=\"{{ defaultProps.prefixCls }}-item\"\n        [ngStyle]=\"itemStyle\"\n        [className]=\"['am-grid-item-active']\"\n      >\n        <div\n          *ngIf=\"subItem !== null\"\n          class=\"{{ defaultProps.prefixCls }}-item-content\"\n          (click)=\"click(subItem, i * columnNum + j)\"\n        >\n          <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-4\">\n            <img class=\"{{ defaultProps.prefixCls }}-icon\" src=\"{{ subItem.icon }}\" />\n            <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n          </div>\n        </div>\n        <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n      </FlexItem>\n    </Flex>\n  </CarouselSlide>\n</Carousel>\n"
            },] }
];
GridComponent.ctorParameters = () => [];
GridComponent.propDecorators = {
    columnNum: [{ type: Input }],
    carouselMaxRow: [{ type: Input }],
    itemStyle: [{ type: Input }],
    square: [{ type: Input }],
    hasLine: [{ type: Input }],
    isCarousel: [{ type: Input }],
    activeStyle: [{ type: Input }],
    data: [{ type: Input }],
    onClick: [{ type: Output }],
    amGrid: [{ type: HostBinding, args: ['class.am-grid',] }],
    amGridSquare: [{ type: HostBinding, args: ['class.am-grid-square',] }],
    amGridLine: [{ type: HostBinding, args: ['class.am-grid-line',] }],
    amGridCarousel: [{ type: HostBinding, args: ['class.am-grid-carousel',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXpHLE1BQU0sT0FBTyxhQUFhO0lBa0Z4QjtRQWpGQSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUc7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFDRixpQkFBWSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLElBQUk7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRU4sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQXVCbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFVeEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFPNUIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hELFdBQU0sR0FBWSxJQUFJLENBQUM7SUFjUixDQUFDO0lBM0RoQixJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO0lB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QWMsQ0FBQyxFQUFFLEtBQUs7U0FDdEQsQ0FBQztJQUNKLENBQUM7OztZQS9LRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNGlHQUFvQzthQUNyQzs7Ozt3QkF3QkUsS0FBSzs2QkFVTCxLQUFLO3dCQVVMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7MEJBUUwsS0FBSzttQkFFTCxLQUFLO3NCQUtMLE1BQU07cUJBR04sV0FBVyxTQUFDLGVBQWU7MkJBRTNCLFdBQVcsU0FBQyxzQkFBc0I7eUJBSWxDLFdBQVcsU0FBQyxvQkFBb0I7NkJBSWhDLFdBQVcsU0FBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnR3JpZCwgbnptLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdyYXBDbHMgPSB7fTtcbiAgaXRlbUNscyA9IHt9O1xuICBjYXJvdXNlbFByb3BzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGRyYWdnaW5nOiBmYWxzZVxuICB9O1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YTogW10sXG4gICAgaGFzTGluZTogdHJ1ZSxcbiAgICBpc0Nhcm91c2VsOiBmYWxzZSxcbiAgICBjb2x1bW5OdW06IDQsXG4gICAgY2Fyb3VzZWxNYXhSb3c6IDIsXG4gICAgcHJlZml4Q2xzOiAnYW0tZ3JpZCcsXG4gICAgc3F1YXJlOiB0cnVlLFxuICAgIGl0ZW1TdHlsZToge31cbiAgfTtcbiAgY2Fyb3VzZWxEYXRhID0gW107XG4gIGNhcm91c2VsRGF0YVRtcCA9IFtdO1xuICBncmlkRGF0YSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGEgPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgY29sdW1uTnVtKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmNvbHVtbk51bTtcbiAgfVxuICBzZXQgY29sdW1uTnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5kZWZhdWx0UHJvcHMuY29sdW1uTnVtID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNhcm91c2VsTWF4Um93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmNhcm91c2VsTWF4Um93O1xuICB9XG4gIHNldCBjYXJvdXNlbE1heFJvdyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3BzLmNhcm91c2VsTWF4Um93ID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgaXRlbVN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgc3F1YXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgaGFzTGluZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGdldCBpc0Nhcm91c2VsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5pc0Nhcm91c2VsO1xuICB9XG4gIHNldCBpc0Nhcm91c2VsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMuaXNDYXJvdXNlbCA9IHZhbHVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZVN0eWxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZ3JpZCcpXG4gIGFtR3JpZDogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZ3JpZC1zcXVhcmUnKVxuICBnZXQgYW1HcmlkU3F1YXJlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLnNxdWFyZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWdyaWQtbGluZScpXG4gIGdldCBhbUdyaWRMaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmhhc0xpbmU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1ncmlkLWNhcm91c2VsJylcbiAgZ2V0IGFtR3JpZENhcm91c2VsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmlzQ2Fyb3VzZWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0Q29udGVudFR5cGUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCh2YWx1ZS5pbmRleE9mKCdodHRwJykgPj0gMCB8fCB2YWx1ZS5pbmRleE9mKCdhc3NldHMnKSA+PSAwKSAmJiB2YWx1ZS5pbmRleE9mKCc8JykgPCAwKSB7XG4gICAgICByZXR1cm4gJ3VybCc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCc8JykgPj0gMCkge1xuICAgICAgcmV0dXJuICdpbm5lckhUTUwnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgcmV0dXJuICdUZW1wbGF0ZVJlZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaWNvbic7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5sZW5ndGgpIHx8IDA7XG4gICAgbGV0IHJvd0NvdW50ID0gTWF0aC5jZWlsKGRhdGFMZW5ndGggLyB0aGlzLmNvbHVtbk51bSk7XG4gICAgbGV0IHJvd3NBcnI7XG4gICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmlzQ2Fyb3VzZWwpIHtcbiAgICAgIGlmIChyb3dDb3VudCAlIHRoaXMuY2Fyb3VzZWxNYXhSb3cgIT09IDApIHtcbiAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCArIHRoaXMuY2Fyb3VzZWxNYXhSb3cgLSAocm93Q291bnQgJSB0aGlzLmNhcm91c2VsTWF4Um93KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChyb3dDb3VudCAvIHRoaXMuY2Fyb3VzZWxNYXhSb3cpO1xuICAgICAgcm93c0FyciA9IHRoaXMuZ2V0Um93cyhyb3dDb3VudCwgZGF0YUxlbmd0aCk7XG4gICAgICBpZiAocGFnZUNvdW50IDw9IDEpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbFByb3BzID0ge1xuICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbFByb3BzID0ge1xuICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgZHJhZ2dpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2Fyb3VzZWxEYXRhVG1wID0gdGhpcy5nZXRDYXJvdXNlbERhdGEocm93c0FyciwgcGFnZUNvdW50LCByb3dDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZERhdGEgPSB0aGlzLmdldFJvd3Mocm93Q291bnQsIGRhdGFMZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcm91c2VsRGF0YShyb3dzQXJyOiBhbnlbXSwgcGFnZUNvdW50OiBudW1iZXIsIHJvd0NvdW50OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlc0FycjogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCBwYWdlSW5kZXggPSAwOyBwYWdlSW5kZXggPCBwYWdlQ291bnQ7IHBhZ2VJbmRleCsrKSB7XG4gICAgICBjb25zdCBwYWdlUm93czogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCB0aGlzLmNhcm91c2VsTWF4Um93OyBpaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gcGFnZUluZGV4ICogdGhpcy5jYXJvdXNlbE1heFJvdyArIGlpO1xuICAgICAgICBpZiAocm93SW5kZXggPCByb3dDb3VudCkge1xuICAgICAgICAgIHBhZ2VSb3dzLnB1c2gocm93c0Fycltyb3dJbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOepuuiKgueCueS4uuS6huehruS/neacq+WwvumhteeahOacgOWQjuacquWIsOW6leeahOihjOacieW6lee6vyjmoLflvI/kuK1sYXN0LWNoaWxk5Lya5rKh57q/KVxuICAgICAgICAgIHBhZ2VSb3dzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhZ2VzQXJyLnB1c2gocGFnZVJvd3MpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXNBcnI7XG4gIH1cblxuICBnZXRSb3dzKHJvd0NvdW50OiBudW1iZXIsIGRhdGFMZW5ndGg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbHVtbk51bSA9IHRoaXMuY29sdW1uTnVtO1xuICAgIGNvbnN0IHJvd0FyciA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xuICAgICAgcm93QXJyW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbk51bTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGkgKiBjb2x1bW5OdW0gKyBqO1xuICAgICAgICBpZiAoZGF0YUluZGV4IDwgZGF0YUxlbmd0aCkge1xuICAgICAgICAgIHJvd0FycltpXVtqXSA9IHRoaXMuX2RhdGFbZGF0YUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dBcnJbaV1bal0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3dBcnI7XG4gIH1cblxuICBjbGljayhkYXRhLCBpbmRleCkge1xuICAgIGNvbnN0IG91dHB1dERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdChvdXRwdXREYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXRlbUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWFjdGl2ZS1pdGVtYF06IGZhbHNlXG4gICAgfTtcbiAgfVxufVxuIl19