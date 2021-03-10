import { Component, Input, Output, EventEmitter, TemplateRef, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../flex/flex.component';
import * as ɵngcc3 from '../core/directive/touch-feedback.directive';
import * as ɵngcc4 from '../icon/icon.component';
import * as ɵngcc5 from '../carousel/carousel.component';
import * as ɵngcc6 from '../carousel/carousel-slide/carousel-slide.component';
import * as ɵngcc7 from '../pipes/save-html';

function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 12);
} if (rf & 2) {
    const subItem_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r10.defaultProps.prefixCls, "-icon");
    ɵngcc0.ɵɵpropertyInterpolate("src", subItem_r6.icon, ɵngcc0.ɵɵsanitizeUrl);
} }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 13);
} if (rf & 2) {
    const subItem_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("type", subItem_r6.icon)("size", subItem_r6.size);
} }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 14);
    ɵngcc0.ɵɵpipe(1, "safeHTML");
} if (rf & 2) {
    const subItem_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind1(1, 1, subItem_r6.icon), ɵngcc0.ɵɵsanitizeHtml);
} }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_ng_template_0_Template(rf, ctx) { }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    const subItem_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", subItem_r6.icon);
} }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("click", function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); const subItem_r6 = ctx_r20.$implicit; const j_r7 = ctx_r20.index; const i_r4 = ɵngcc0.ɵɵnextContext().index; const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.click(subItem_r6, i_r4 * ctx_r19.columnNum + j_r7); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_img_2_Template, 1, 4, "img", 9);
    ɵngcc0.ɵɵtemplate(3, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Icon_3_Template, 1, 2, "Icon", 10);
    ɵngcc0.ɵɵtemplate(4, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_div_4_Template, 2, 3, "div", 11);
    ɵngcc0.ɵɵtemplate(5, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementStart(6, "div");
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.defaultProps.prefixCls, "-item-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r8.defaultProps.prefixCls, "-item-inner-content column-num-", ctx_r8.columnNum, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "url");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "icon");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "innerHTML");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "TemplateRef");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.defaultProps.prefixCls, "-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(subItem_r6.text);
} }
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.defaultProps.prefixCls, "-null-item");
} }
const _c0 = function () { return ["am-grid-item-active"]; };
function GridComponent_ng_container_0_Flex_1_FlexItem_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "FlexItem", 5);
    ɵngcc0.ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template, 8, 15, "div", 6);
    ɵngcc0.ɵɵtemplate(2, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_2_Template, 1, 3, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r6 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r5.itemCls)("ngStyle", ctx_r5.itemStyle)("className", ɵngcc0.ɵɵpureFunction0(6, _c0))("activeStyle", ctx_r5.activeStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6 !== null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r6 === null);
} }
function GridComponent_ng_container_0_Flex_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Flex", 3);
    ɵngcc0.ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_FlexItem_1_Template, 3, 7, "FlexItem", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("justify", "center")("align", "stretch");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", item_r3);
} }
function GridComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_Template, 2, 3, "Flex", 2);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.gridData);
} }
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("click", function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r35 = ɵngcc0.ɵɵnextContext(); const subItem_r30 = ctx_r35.$implicit; const j_r31 = ctx_r35.index; const i_r28 = ɵngcc0.ɵɵnextContext().index; const ctx_r34 = ɵngcc0.ɵɵnextContext(3); return ctx_r34.click(subItem_r30, i_r28 * ctx_r34.columnNum + j_r31); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelement(2, "img", 12);
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r30 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r32 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-item-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-item-inner-content column-num-4");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-icon");
    ɵngcc0.ɵɵpropertyInterpolate("src", subItem_r30.icon, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(subItem_r30.text);
} }
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r33 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r33.defaultProps.prefixCls, "-null-item");
} }
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "FlexItem", 20);
    ɵngcc0.ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template, 5, 14, "div", 6);
    ɵngcc0.ɵɵtemplate(2, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_2_Template, 1, 3, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r30 = ctx.$implicit;
    const ctx_r29 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r29.defaultProps.prefixCls, "-item");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r29.itemStyle)("className", ɵngcc0.ɵɵpureFunction0(7, _c0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r30 !== null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", subItem_r30 === null);
} }
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Flex", 3);
    ɵngcc0.ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_Template, 3, 8, "FlexItem", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("justify", "center")("align", "stretch");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", item_r27);
} }
function GridComponent_Carousel_1_CarouselSlide_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "CarouselSlide", 18);
    ɵngcc0.ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_Template, 2, 3, "Flex", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const gridData_r25 = ctx.$implicit;
    const ctx_r24 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r24.defaultProps.prefixCls, "-carousel-page");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", gridData_r25);
} }
function GridComponent_Carousel_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Carousel", 16);
    ɵngcc0.ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Template, 2, 4, "CarouselSlide", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("autoplay", false)("infinite", true)("selectedIndex", 0)("autoplayInterval", 3000)("dots", ctx_r1.carouselProps.dots)("dragging", ctx_r1.carouselProps.dragging);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.carouselDataTmp);
} }
const _c1 = ["*"];
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
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GridComponent, selectors: [["Grid"], ["nzm-grid"]], hostVars: 8, hostBindings: function GridComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-grid", ctx.amGrid)("am-grid-square", ctx.amGridSquare)("am-grid-line", ctx.amGridLine)("am-grid-carousel", ctx.amGridCarousel);
    } }, inputs: { itemStyle: "itemStyle", square: "square", hasLine: "hasLine", activeStyle: "activeStyle", columnNum: "columnNum", carouselMaxRow: "carouselMaxRow", isCarousel: "isCarousel", data: "data" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "autoplay", "infinite", "selectedIndex", "autoplayInterval", "dots", "dragging", 4, "ngIf"], [3, "justify", "align", 4, "ngFor", "ngForOf"], [3, "justify", "align"], ["TouchFeedbackDirective", "", 3, "ngClass", "ngStyle", "className", "activeStyle", 4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "ngClass", "ngStyle", "className", "activeStyle"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], [3, "src", "class", 4, "ngIf"], [3, "type", "size", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "src"], [3, "type", "size"], [3, "innerHTML"], [3, "ngTemplateOutlet"], [3, "autoplay", "infinite", "selectedIndex", "autoplayInterval", "dots", "dragging"], ["style", "display: block;", 3, "class", 4, "ngFor", "ngForOf"], [2, "display", "block"], ["TouchFeedbackDirective", "", 3, "class", "ngStyle", "className", 4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "ngStyle", "className"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, GridComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, GridComponent_Carousel_1_Template, 2, 7, "Carousel", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isCarousel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCarousel && ctx.carouselDataTmp.length > 0);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.FlexComponent, ɵngcc2.FlexItemComponent, ɵngcc3.TouchFeedbackDirective, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc4.IconComponent, ɵngcc1.NgTemplateOutlet, ɵngcc5.CarouselComponent, ɵngcc6.CarouselSlideComponent], pipes: [ɵngcc7.SafeHTMLPipe], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GridComponent, [{
        type: Component,
        args: [{
                selector: 'Grid, nzm-grid',
                template: "<ng-container *ngIf=\"!isCarousel\">\n  <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n    <FlexItem\n      TouchFeedbackDirective\n      *ngFor=\"let subItem of item; let j = index\"\n      [ngClass]=\"itemCls\"\n      [ngStyle]=\"itemStyle\"\n      [className]=\"['am-grid-item-active']\"\n      [activeStyle]=\"activeStyle\"\n    >\n      <div\n        *ngIf=\"subItem !== null\"\n        class=\"{{ defaultProps.prefixCls }}-item-content\"\n        (click)=\"click(subItem, i * columnNum + j)\"\n      >\n        <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-{{ columnNum }}\">\n          <img\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'url'\"\n            src=\"{{ subItem.icon }}\"\n            class=\"{{ defaultProps.prefixCls }}-icon\"\n          />\n          <Icon\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'icon'\"\n            [type]=\"subItem.icon\"\n            [size]=\"subItem.size\"\n          ></Icon>\n          <div\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'innerHTML'\"\n            [innerHTML]=\"subItem.icon | safeHTML\"\n          ></div>\n          <ng-template\n            *ngIf=\"subItem.icon && getContentType(subItem.icon) === 'TemplateRef'\"\n            [ngTemplateOutlet]=\"subItem.icon\"\n          ></ng-template>\n          <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n        </div>\n      </div>\n      <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n    </FlexItem>\n  </Flex>\n  <ng-content></ng-content>\n</ng-container>\n\n<Carousel\n  *ngIf=\"isCarousel && carouselDataTmp.length > 0\"\n  [autoplay]=\"false\"\n  [infinite]=\"true\"\n  [selectedIndex]=\"0\"\n  [autoplayInterval]=\"3000\"\n  [dots]=\"carouselProps.dots\"\n  [dragging]=\"carouselProps.dragging\"\n>\n  <CarouselSlide\n    *ngFor=\"let gridData of carouselDataTmp\"\n    class=\"{{ defaultProps.prefixCls }}-carousel-page\"\n    style=\"display: block;\"\n  >\n    <Flex *ngFor=\"let item of gridData; let i = index\" [justify]=\"'center'\" [align]=\"'stretch'\">\n      <FlexItem\n        TouchFeedbackDirective\n        *ngFor=\"let subItem of item; let j = index\"\n        class=\"{{ defaultProps.prefixCls }}-item\"\n        [ngStyle]=\"itemStyle\"\n        [className]=\"['am-grid-item-active']\"\n      >\n        <div\n          *ngIf=\"subItem !== null\"\n          class=\"{{ defaultProps.prefixCls }}-item-content\"\n          (click)=\"click(subItem, i * columnNum + j)\"\n        >\n          <div class=\"{{ defaultProps.prefixCls }}-item-inner-content column-num-4\">\n            <img class=\"{{ defaultProps.prefixCls }}-icon\" src=\"{{ subItem.icon }}\" />\n            <div class=\"{{ defaultProps.prefixCls }}-text\">{{ subItem.text }}</div>\n          </div>\n        </div>\n        <div *ngIf=\"subItem === null\" class=\"{{ defaultProps.prefixCls }}-null-item\"></div>\n      </FlexItem>\n    </Flex>\n  </CarouselSlide>\n</Carousel>\n"
            }]
    }], function () { return []; }, { itemStyle: [{
            type: Input
        }], square: [{
            type: Input
        }], hasLine: [{
            type: Input
        }], activeStyle: [{
            type: Input
        }], onClick: [{
            type: Output
        }], amGrid: [{
            type: HostBinding,
            args: ['class.am-grid']
        }], columnNum: [{
            type: Input
        }], carouselMaxRow: [{
            type: Input
        }], isCarousel: [{
            type: Input
        }], data: [{
            type: Input
        }], amGridSquare: [{
            type: HostBinding,
            args: ['class.am-grid-square']
        }], amGridLine: [{
            type: HostBinding,
            args: ['class.am-grid-line']
        }], amGridCarousel: [{
            type: HostBinding,
            args: ['class.am-grid-carousel']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekcsTUFBTSxPQUFPLGFBQWE7QUFBRyxJQWtGM0I7QUFBZ0IsUUFqRmhCLFlBQU8sR0FBRyxFQUFFLENBQUM7QUFDZixRQUFFLFlBQU8sR0FBRyxFQUFFLENBQUM7QUFDZixRQUFFLGtCQUFhLEdBQUc7QUFDbEIsWUFBSSxJQUFJLEVBQUUsS0FBSztBQUNmLFlBQUksUUFBUSxFQUFFLEtBQUs7QUFDbkIsU0FBRyxDQUFDO0FBQ0osUUFBRSxpQkFBWSxHQUFHO0FBQ2pCLFlBQUksSUFBSSxFQUFFLEVBQUU7QUFDWixZQUFJLE9BQU8sRUFBRSxJQUFJO0FBQ2pCLFlBQUksVUFBVSxFQUFFLEtBQUs7QUFDckIsWUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQixZQUFJLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLFlBQUksU0FBUyxFQUFFLFNBQVM7QUFDeEIsWUFBSSxNQUFNLEVBQUUsSUFBSTtBQUNoQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQUUsaUJBQVksR0FBRyxFQUFFLENBQUM7QUFDcEIsUUFBRSxvQkFBZSxHQUFHLEVBQUUsQ0FBQztBQUN2QixRQUFFLGFB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QUFTLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDbkQsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxFQUFFLEtBQUs7QUFDM0QsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0g7eUNBaExDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7UUFBZ0Isa0JBQzFCOzs7Ozs7Ozs7OzZUQUVHO0FBQUM7QUFDTjtBQUVDLHdCQW9CRSxLQUFLO0FBQ04sNkJBU0MsS0FBSztBQUNOLHdCQVNDLEtBQUs7QUFDTixxQkFDQyxLQUFLO0FBQ04sc0JBQ0MsS0FBSztBQUNOLHlCQUNDLEtBQUs7QUFDTiwwQkFPQyxLQUFLO0FBQ04sbUJBQ0MsS0FBSztBQUNOLHNCQUlDLE1BQU07QUFDUCxxQkFFQyxXQUFXLFNBQUMsZUFBZTtBQUN6QiwyQkFDRixXQUFXLFNBQUMsc0JBQXNCO0FBQ2hDLHlCQUdGLFdBQVcsU0FBQyxvQkFBb0I7QUFDOUIsNkJBR0YsV0FBVyxTQUFDLHdCQUF3QjtBQUNuQzs4RkFoRmtDLGNBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBK0VLO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnR3JpZCwgbnptLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdyYXBDbHMgPSB7fTtcbiAgaXRlbUNscyA9IHt9O1xuICBjYXJvdXNlbFByb3BzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGRyYWdnaW5nOiBmYWxzZVxuICB9O1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YTogW10sXG4gICAgaGFzTGluZTogdHJ1ZSxcbiAgICBpc0Nhcm91c2VsOiBmYWxzZSxcbiAgICBjb2x1bW5OdW06IDQsXG4gICAgY2Fyb3VzZWxNYXhSb3c6IDIsXG4gICAgcHJlZml4Q2xzOiAnYW0tZ3JpZCcsXG4gICAgc3F1YXJlOiB0cnVlLFxuICAgIGl0ZW1TdHlsZToge31cbiAgfTtcbiAgY2Fyb3VzZWxEYXRhID0gW107XG4gIGNhcm91c2VsRGF0YVRtcCA9IFtdO1xuICBncmlkRGF0YSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGEgPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgY29sdW1uTnVtKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmNvbHVtbk51bTtcbiAgfVxuICBzZXQgY29sdW1uTnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5kZWZhdWx0UHJvcHMuY29sdW1uTnVtID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNhcm91c2VsTWF4Um93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmNhcm91c2VsTWF4Um93O1xuICB9XG4gIHNldCBjYXJvdXNlbE1heFJvdyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3BzLmNhcm91c2VsTWF4Um93ID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgaXRlbVN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgc3F1YXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgaGFzTGluZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGdldCBpc0Nhcm91c2VsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5pc0Nhcm91c2VsO1xuICB9XG4gIHNldCBpc0Nhcm91c2VsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMuaXNDYXJvdXNlbCA9IHZhbHVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZVN0eWxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZ3JpZCcpXG4gIGFtR3JpZDogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZ3JpZC1zcXVhcmUnKVxuICBnZXQgYW1HcmlkU3F1YXJlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLnNxdWFyZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWdyaWQtbGluZScpXG4gIGdldCBhbUdyaWRMaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmhhc0xpbmU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1ncmlkLWNhcm91c2VsJylcbiAgZ2V0IGFtR3JpZENhcm91c2VsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmlzQ2Fyb3VzZWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0Q29udGVudFR5cGUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCh2YWx1ZS5pbmRleE9mKCdodHRwJykgPj0gMCB8fCB2YWx1ZS5pbmRleE9mKCdhc3NldHMnKSA+PSAwKSAmJiB2YWx1ZS5pbmRleE9mKCc8JykgPCAwKSB7XG4gICAgICByZXR1cm4gJ3VybCc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCc8JykgPj0gMCkge1xuICAgICAgcmV0dXJuICdpbm5lckhUTUwnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgcmV0dXJuICdUZW1wbGF0ZVJlZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaWNvbic7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5sZW5ndGgpIHx8IDA7XG4gICAgbGV0IHJvd0NvdW50ID0gTWF0aC5jZWlsKGRhdGFMZW5ndGggLyB0aGlzLmNvbHVtbk51bSk7XG4gICAgbGV0IHJvd3NBcnI7XG4gICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmlzQ2Fyb3VzZWwpIHtcbiAgICAgIGlmIChyb3dDb3VudCAlIHRoaXMuY2Fyb3VzZWxNYXhSb3cgIT09IDApIHtcbiAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCArIHRoaXMuY2Fyb3VzZWxNYXhSb3cgLSAocm93Q291bnQgJSB0aGlzLmNhcm91c2VsTWF4Um93KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChyb3dDb3VudCAvIHRoaXMuY2Fyb3VzZWxNYXhSb3cpO1xuICAgICAgcm93c0FyciA9IHRoaXMuZ2V0Um93cyhyb3dDb3VudCwgZGF0YUxlbmd0aCk7XG4gICAgICBpZiAocGFnZUNvdW50IDw9IDEpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbFByb3BzID0ge1xuICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbFByb3BzID0ge1xuICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgZHJhZ2dpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2Fyb3VzZWxEYXRhVG1wID0gdGhpcy5nZXRDYXJvdXNlbERhdGEocm93c0FyciwgcGFnZUNvdW50LCByb3dDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZERhdGEgPSB0aGlzLmdldFJvd3Mocm93Q291bnQsIGRhdGFMZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENhcm91c2VsRGF0YShyb3dzQXJyOiBhbnlbXSwgcGFnZUNvdW50OiBudW1iZXIsIHJvd0NvdW50OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlc0FycjogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCBwYWdlSW5kZXggPSAwOyBwYWdlSW5kZXggPCBwYWdlQ291bnQ7IHBhZ2VJbmRleCsrKSB7XG4gICAgICBjb25zdCBwYWdlUm93czogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCB0aGlzLmNhcm91c2VsTWF4Um93OyBpaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gcGFnZUluZGV4ICogdGhpcy5jYXJvdXNlbE1heFJvdyArIGlpO1xuICAgICAgICBpZiAocm93SW5kZXggPCByb3dDb3VudCkge1xuICAgICAgICAgIHBhZ2VSb3dzLnB1c2gocm93c0Fycltyb3dJbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOepuuiKgueCueS4uuS6huehruS/neacq+WwvumhteeahOacgOWQjuacquWIsOW6leeahOihjOacieW6lee6vyjmoLflvI/kuK1sYXN0LWNoaWxk5Lya5rKh57q/KVxuICAgICAgICAgIHBhZ2VSb3dzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhZ2VzQXJyLnB1c2gocGFnZVJvd3MpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXNBcnI7XG4gIH1cblxuICBnZXRSb3dzKHJvd0NvdW50OiBudW1iZXIsIGRhdGFMZW5ndGg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbHVtbk51bSA9IHRoaXMuY29sdW1uTnVtO1xuICAgIGNvbnN0IHJvd0FyciA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xuICAgICAgcm93QXJyW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbk51bTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGkgKiBjb2x1bW5OdW0gKyBqO1xuICAgICAgICBpZiAoZGF0YUluZGV4IDwgZGF0YUxlbmd0aCkge1xuICAgICAgICAgIHJvd0FycltpXVtqXSA9IHRoaXMuX2RhdGFbZGF0YUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dBcnJbaV1bal0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3dBcnI7XG4gIH1cblxuICBjbGljayhkYXRhLCBpbmRleCkge1xuICAgIGNvbnN0IG91dHB1dERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdChvdXRwdXREYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXRlbUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWl0ZW1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmRlZmF1bHRQcm9wcy5wcmVmaXhDbHN9LWFjdGl2ZS1pdGVtYF06IGZhbHNlXG4gICAgfTtcbiAgfVxufVxuIl19