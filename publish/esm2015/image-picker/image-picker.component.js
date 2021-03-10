import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../flex/flex.component';

const _c0 = ["fileSelectorInput"];
function ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const j_r5 = ɵngcc0.ɵɵnextContext(2).index; const i_r2 = ɵngcc0.ɵɵnextContext().index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.removeImage(i_r2 * ctx_r10.length + j_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-item-remove");
} }
const _c1 = function (a0, a1) { return { "background-image": a0, transform: a1 }; };
function ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template, 1, 3, "div", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r16); const j_r5 = ɵngcc0.ɵɵnextContext().index; const i_r2 = ɵngcc0.ɵɵnextContext().index; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.imageClick(i_r2 * ctx_r14.length + j_r5); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.disableDelete);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-item-content");
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(8, _c1, item_r4.backgroundImage, item_r4.transform));
} }
function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.addImageClick($event); });
    ɵngcc0.ɵɵelementStart(1, "input", 8, 9);
    ɵngcc0.ɵɵlistener("change", function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template_input_change_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r22 = ɵngcc0.ɵɵnextContext(3); return ctx_r22.fileChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r7.prefixCls, "-item ", ctx_r7.prefixCls, "-upload-btn");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("accept", ctx_r7.accept)("multiple", ctx_r7.multiple);
    ɵngcc0.ɵɵattribute("capture", ctx_r7.capture ? ctx_r7.capture : null);
} }
function ImagePickerComponent_Flex_1_FlexItem_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.prefixCls, "-item-white");
} }
function ImagePickerComponent_Flex_1_FlexItem_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "FlexItem");
    ɵngcc0.ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template, 3, 11, "div", 2);
    ɵngcc0.ɵɵtemplate(2, ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template, 3, 7, "div", 3);
    ɵngcc0.ɵɵtemplate(3, ImagePickerComponent_Flex_1_FlexItem_1_div_3_Template, 1, 3, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r4 && "img" === item_r4.type && item_r4.backgroundImage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r4 && "select" === item_r4.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r4 && "white" === item_r4.type);
} }
function ImagePickerComponent_Flex_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "Flex");
    ɵngcc0.ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_Template, 4, 3, "FlexItem", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const rowItem_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", rowItem_r1);
} }
export class ImagePickerComponent {
    constructor() {
        this.prefixCls = 'am-image-picker';
        this.flexEl = [];
        this._accept = 'image/*';
        this._count = 4;
        this._selectable = true;
        this._files = [];
        this._multiple = false;
        this.capture = false;
        this.disableDelete = false;
        this.onFail = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onImageClick = new EventEmitter();
        this.onAddImageClick = new EventEmitter();
    }
    get files() {
        return this._files;
    }
    set files(value) {
        this._files = value;
        this.sortItem();
    }
    get accept() {
        return this._accept;
    }
    set accept(value) {
        this._accept = value;
        this.sortItem();
    }
    get length() {
        return this._count;
    }
    set length(value) {
        if (value > 0) {
            this._count = value;
        }
        else {
            this._count = 4;
        }
        this.sortItem();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = value;
        this.sortItem();
    }
    get selectable() {
        return this._selectable;
    }
    set selectable(value) {
        this._selectable = value;
        this.sortItem();
    }
    sortItem() {
        if (!this._files) {
            return;
        }
        let count = parseInt('' + this._count, 10);
        if (count <= 0) {
            count = 4;
        }
        let allEl = this._files.map(item => {
            return {
                type: 'img',
                backgroundImage: 'url(' + item.url + ')',
                transform: 'rotate(' + this.getRotation(item.orientation) + 'deg)'
            };
        });
        if (this._selectable) {
            allEl.push({
                type: 'select',
                backgroundImage: '',
                transform: ''
            });
        }
        const length = allEl.length;
        if (length !== 0 && length % count !== 0) {
            const blankCount = count - (length % count);
            const fillBlankEl = [];
            for (let i = 0; i < blankCount; i++) {
                fillBlankEl.push({
                    type: 'white',
                    backgroundImage: '',
                    transform: ''
                });
            }
            allEl = allEl.concat(fillBlankEl);
        }
        this.flexEl = [];
        for (let i = 0; i < allEl.length / count; i++) {
            const rowEl = allEl.slice(i * count, i * count + count);
            this.flexEl.push(rowEl);
        }
    }
    addImage(imgItem) {
        this._files.push({
            type: 'img',
            url: imgItem.url,
            orientation: imgItem.orientation
        });
        this.sortItem();
        this.onChange.emit({
            files: this._files,
            operationType: 'add',
            index: this._files.length - 1
        });
    }
    removeImage(index) {
        this._files.splice(index, 1);
        this.sortItem();
        this.onChange.emit({
            files: this._files,
            operationType: 'remove',
            index: index
        });
    }
    imageClick(index) {
        this.onImageClick.emit({
            index: index,
            files: this._files
        });
    }
    addImageClick(e) {
        this.onAddImageClick.emit(e);
    }
    parseFile(file, index) {
        const reader = new FileReader();
        reader.onload = e => {
            const dataURL = e.target.result;
            if (!dataURL) {
                this.onFail.emit(`Fail to get the ${index} image`);
                return;
            }
            let orientation = 1;
            this.getOrientation(file, res => {
                // -2: not jpeg , -1: not defined
                if (res > 0) {
                    orientation = res;
                }
                this.addImage({
                    url: dataURL,
                    orientation,
                    file
                });
            });
        };
        reader.readAsDataURL(file);
    }
    fileChange(event) {
        const fileList = event.target.files;
        if (fileList && fileList.length) {
            for (let i = 0; i < fileList.length; i++) {
                this.parseFile(fileList[i], i);
            }
        }
    }
    getRotation(orientation = 1) {
        let imgRotation = 0;
        switch (orientation) {
            case 3:
                imgRotation = 180;
                break;
            case 6:
                imgRotation = 90;
                break;
            case 8:
                imgRotation = 270;
                break;
            default:
        }
        return imgRotation;
    }
    // https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
    getOrientation(file, callback) {
        const reader = new FileReader();
        reader.onload = e => {
            const view = new DataView(e.target.result);
            if (view.getUint16(0, false) !== 0xffd8) {
                return callback(-2);
            }
            const length = view.byteLength;
            let offset = 2;
            while (offset < length) {
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xffe1) {
                    const tmp = view.getUint32((offset += 2), false);
                    if (tmp !== 0x45786966) {
                        return callback(-1);
                    }
                    const little = view.getUint16((offset += 6), false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                        if (view.getUint16(offset + i * 12, little) === 0x0112) {
                            return callback(view.getUint16(offset + i * 12 + 8, little));
                        }
                    }
                }
                else if ((marker & 0xff00) !== 0xff00) {
                    break;
                }
                else {
                    offset += view.getUint16(offset, false);
                }
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }
}
ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(); };
ImagePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["ImagePicker"], ["nzm-image-picker"]], viewQuery: function ImagePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._fileSelectorInput = _t.first);
    } }, inputs: { capture: "capture", disableDelete: "disableDelete", files: "files", accept: "accept", length: "length", multiple: "multiple", selectable: "selectable" }, outputs: { onFail: "onFail", onChange: "onChange", onImageClick: "onImageClick", onAddImageClick: "onAddImageClick" }, decls: 2, vars: 4, consts: [["role", "group"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["role", "button", "aria-label", "Choose and add image", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "Click and Remove this image", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "Image can be clicked", 3, "ngStyle", "click"], ["role", "button", "aria-label", "Click and Remove this image", 3, "click"], ["role", "button", "aria-label", "Choose and add image", 3, "click"], ["type", "file", 3, "accept", "multiple", "change"], ["fileSelectorInput", ""]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ImagePickerComponent_Flex_1_Template, 2, 1, "Flex", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-list");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.flexEl);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc2.FlexComponent, ɵngcc2.FlexItemComponent, ɵngcc1.NgIf, ɵngcc1.NgStyle], encapsulation: 2 });
ImagePickerComponent.ctorParameters = () => [];
ImagePickerComponent.propDecorators = {
    _fileSelectorInput: [{ type: ViewChild, args: ['fileSelectorInput', { read: ViewContainerRef },] }],
    capture: [{ type: Input }],
    disableDelete: [{ type: Input }],
    files: [{ type: Input }],
    accept: [{ type: Input }],
    length: [{ type: Input }],
    multiple: [{ type: Input }],
    selectable: [{ type: Input }],
    onFail: [{ type: Output }],
    onChange: [{ type: Output }],
    onImageClick: [{ type: Output }],
    onAddImageClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ImagePickerComponent, [{
        type: Component,
        args: [{
                selector: 'ImagePicker, nzm-image-picker',
                template: "<div class=\"{{ prefixCls }}-list\" role=\"group\">\n  <Flex *ngFor=\"let rowItem of flexEl; let i = index\">\n    <FlexItem *ngFor=\"let item of rowItem; let j = index\">\n      <div *ngIf=\"item && 'img' === item.type && item.backgroundImage\" class=\"{{ prefixCls }}-item\">\n        <div\n          role=\"button\"\n          *ngIf=\"!disableDelete\"\n          aria-label=\"Click and Remove this image\"\n          class=\"{{ prefixCls }}-item-remove\"\n          (click)=\"removeImage(i * length + j)\"\n        ></div>\n        <div\n          role=\"button\"\n          aria-label=\"Image can be clicked\"\n          class=\"{{ prefixCls }}-item-content\"\n          [ngStyle]=\"{ 'background-image': item.backgroundImage, transform: item.transform }\"\n          (click)=\"imageClick(i * length + j)\"\n        ></div>\n      </div>\n      <div\n        role=\"button\"\n        aria-label=\"Choose and add image\"\n        *ngIf=\"item && 'select' === item.type\"\n        class=\"{{ prefixCls }}-item {{ prefixCls }}-upload-btn\"\n        (click)=\"addImageClick($event)\"\n      >\n        <input\n          #fileSelectorInput\n          type=\"file\"\n          [accept]=\"accept\"\n          [multiple]=\"multiple\"\n          [attr.capture]=\"capture ? capture : null\"\n          (change)=\"fileChange($event)\"\n        />\n      </div>\n      <div *ngIf=\"item && 'white' === item.type\" class=\"{{ prefixCls }}-item-white\"></div>\n    </FlexItem>\n  </Flex>\n</div>\n"
            }]
    }], function () { return []; }, { capture: [{
            type: Input
        }], disableDelete: [{
            type: Input
        }], onFail: [{
            type: Output
        }], onChange: [{
            type: Output
        }], onImageClick: [{
            type: Output
        }], onAddImageClick: [{
            type: Output
        }], files: [{
            type: Input
        }], accept: [{
            type: Input
        }], length: [{
            type: Input
        }], multiple: [{
            type: Input
        }], selectable: [{
            type: Input
        }], _fileSelectorInput: [{
            type: ViewChild,
            args: ['fileSelectorInput', { read: ViewContainerRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9pbWFnZS1waWNrZXIvaW1hZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlwRyxNQUFNLE9BQU8sb0JBQW9CO0FBQ2pDLElBbUVFO0FBQWdCLFFBbkVoQixjQUFTLEdBQVcsaUJBQWlCLENBQUM7QUFDeEMsUUFBRSxXQUFNLEdBQW9CLEVBQUUsQ0FBQztBQUMvQixRQUNVLFlBQU8sR0FBVyxTQUFTLENBQUM7QUFDdEMsUUFBVSxXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQzdCLFFBQVUsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDdEMsUUFBVSxXQUFNLEdBQWUsRUFBRSxDQUFDO0FBQ2xDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUlXLFlBQU8sR0FBcUIsS0FBSyxDQUFDO0FBQzdDLFFBQVcsa0JBQWEsR0FBWSxLQUFLLENBQUM7QUFDMUMsUUE2Q0UsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pELFFBQ0UsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25ELFFBQ0UsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN2RCxRQUNFLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDMUQsSUFDaUIsQ0FBQztBQUNsQixJQXRERSxJQUNJLEtBQUs7QUFDWCxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJ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QyxxQkFBSyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLE1BQU0sRUFBRTtBQUNqRCxvQkFBVSxNQUFNO0FBQ2hCLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsWUFBTSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFFBQUksQ0FBQyxDQUFDO0FBQ04sUUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkQsSUFBRSxDQUFDO0FBQ0g7Z0RBL09DLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBK0Isa0JBQ3pDOzs7Ozs7Ozs7YUFBNEM7T0FDN0M7Ozt3SUFDSTtBQUFDO0FBQ1k7QUFDRCxpQ0FRZCxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdkQsc0JBRUYsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQ04scUJBT0MsS0FBSztBQUNOLHFCQU9DLEtBQUs7QUFDTix1QkFXQyxLQUFLO0FBQ04seUJBT0MsS0FBSztBQUNOLHFCQU9DLE1BQU07QUFDUCx1QkFDQyxNQUFNO0FBQ1AsMkJBQ0MsTUFBTTtBQUNQLDhCQUNDLE1BQU07QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50VHlwZSB7XG4gIHR5cGU6IHN0cmluZzsgLy8gJ2ltZycgfCAnc2VsZWN0JyB8ICd3aGl0ZSdcbiAgYmFja2dyb3VuZEltYWdlOiBzdHJpbmc7XG4gIHRyYW5zZm9ybTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdJbWFnZVBpY2tlciwgbnptLWltYWdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0taW1hZ2UtcGlja2VyJztcbiAgZmxleEVsOiBFbGVtZW50VHlwZVtdW10gPSBbXTtcblxuICBwcml2YXRlIF9hY2NlcHQ6IHN0cmluZyA9ICdpbWFnZS8qJztcbiAgcHJpdmF0ZSBfY291bnQ6IG51bWJlciA9IDQ7XG4gIHByaXZhdGUgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9maWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVTZWxlY3RvcklucHV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHByaXZhdGUgX2ZpbGVTZWxlY3RvcklucHV0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpIGNhcHR1cmU6IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZURlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzO1xuICB9XG4gIHNldCBmaWxlcyh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX2ZpbGVzID0gdmFsdWU7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBhY2NlcHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXB0O1xuICB9XG4gIHNldCBhY2NlcHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2VwdCA9IHZhbHVlO1xuICAgIHRoaXMuc29ydEl0ZW0oKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG4gIHNldCBsZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gNDtcbiAgICB9XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNvcnRJdGVtKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cbiAgc2V0IHNlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gdmFsdWU7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkZhaWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25JbWFnZUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uQWRkSW1hZ2VDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNvcnRJdGVtKCkge1xuICAgIGlmICghdGhpcy5fZmlsZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoJycgKyB0aGlzLl9jb3VudCwgMTApO1xuICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICBjb3VudCA9IDQ7XG4gICAgfVxuICAgIGxldCBhbGxFbDogRWxlbWVudFR5cGVbXSA9IHRoaXMuX2ZpbGVzLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdpbWcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0udXJsICsgJyknLFxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIHRoaXMuZ2V0Um90YXRpb24oaXRlbS5vcmllbnRhdGlvbikgKyAnZGVnKSdcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGFibGUpIHtcbiAgICAgIGFsbEVsLnB1c2goe1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IGFsbEVsLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSAwICYmIGxlbmd0aCAlIGNvdW50ICE9PSAwKSB7XG4gICAgICBjb25zdCBibGFua0NvdW50ID0gY291bnQgLSAobGVuZ3RoICUgY291bnQpO1xuICAgICAgY29uc3QgZmlsbEJsYW5rRWw6IGFueVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW5rQ291bnQ7IGkrKykge1xuICAgICAgICBmaWxsQmxhbmtFbC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGFsbEVsID0gYWxsRWwuY29uY2F0KGZpbGxCbGFua0VsKTtcbiAgICB9XG4gICAgdGhpcy5mbGV4RWwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEVsLmxlbmd0aCAvIGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0VsID0gYWxsRWwuc2xpY2UoaSAqIGNvdW50LCBpICogY291bnQgKyBjb3VudCk7XG4gICAgICB0aGlzLmZsZXhFbC5wdXNoKHJvd0VsKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbWFnZShpbWdJdGVtOiBhbnkpIHtcbiAgICB0aGlzLl9maWxlcy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbWcnLFxuICAgICAgdXJsOiBpbWdJdGVtLnVybCxcbiAgICAgIG9yaWVudGF0aW9uOiBpbWdJdGVtLm9yaWVudGF0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlczogdGhpcy5fZmlsZXMsXG4gICAgICBvcGVyYXRpb25UeXBlOiAnYWRkJyxcbiAgICAgIGluZGV4OiB0aGlzLl9maWxlcy5sZW5ndGggLSAxXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVJbWFnZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNvcnRJdGVtKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGVzOiB0aGlzLl9maWxlcyxcbiAgICAgIG9wZXJhdGlvblR5cGU6ICdyZW1vdmUnLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cblxuICBpbWFnZUNsaWNrKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLm9uSW1hZ2VDbGljay5lbWl0KHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGZpbGVzOiB0aGlzLl9maWxlc1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSW1hZ2VDbGljayhlKSB7XG4gICAgdGhpcy5vbkFkZEltYWdlQ2xpY2suZW1pdChlKTtcbiAgfVxuXG4gIHBhcnNlRmlsZShmaWxlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgIGNvbnN0IGRhdGFVUkwgPSAoZS50YXJnZXQgYXMgYW55KS5yZXN1bHQ7XG4gICAgICBpZiAoIWRhdGFVUkwpIHtcbiAgICAgICAgdGhpcy5vbkZhaWwuZW1pdChgRmFpbCB0byBnZXQgdGhlICR7aW5kZXh9IGltYWdlYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG9yaWVudGF0aW9uID0gMTtcbiAgICAgIHRoaXMuZ2V0T3JpZW50YXRpb24oZmlsZSwgcmVzID0+IHtcbiAgICAgICAgLy8gLTI6IG5vdCBqcGVnICwgLTE6IG5vdCBkZWZpbmVkXG4gICAgICAgIGlmIChyZXMgPiAwKSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSByZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJbWFnZSh7XG4gICAgICAgICAgdXJsOiBkYXRhVVJMLFxuICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG5cbiAgZmlsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBpZiAoZmlsZUxpc3QgJiYgZmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGFyc2VGaWxlKGZpbGVMaXN0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRSb3RhdGlvbihvcmllbnRhdGlvbiA9IDEpIHtcbiAgICBsZXQgaW1nUm90YXRpb24gPSAwO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1nUm90YXRpb24gPSAxODA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWdSb3RhdGlvbiA9IDkwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1nUm90YXRpb24gPSAyNzA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgcmV0dXJuIGltZ1JvdGF0aW9uO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzU4NDc5NC9hY2Nlc3NpbmctanBlZy1leGlmLXJvdGF0aW9uLWRhdGEtaW4tamF2YXNjcmlwdC1vbi10aGUtY2xpZW50LXNpZGVcbiAgZ2V0T3JpZW50YXRpb24oZmlsZTogYW55LCBjYWxsYmFjazogKF86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldygoZS50YXJnZXQgYXMgYW55KS5yZXN1bHQpO1xuICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKSAhPT0gMHhmZmQ4KSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygtMik7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgICBsZXQgb2Zmc2V0ID0gMjtcbiAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICBpZiAobWFya2VyID09PSAweGZmZTEpIHtcbiAgICAgICAgICBjb25zdCB0bXAgPSB2aWV3LmdldFVpbnQzMigob2Zmc2V0ICs9IDIpLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKHRtcCAhPT0gMHg0NTc4Njk2Nikge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGl0dGxlID0gdmlldy5nZXRVaW50MTYoKG9mZnNldCArPSA2KSwgZmFsc2UpID09PSAweDQ5NDk7XG4gICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDMyKG9mZnNldCArIDQsIGxpdHRsZSk7XG4gICAgICAgICAgY29uc3QgdGFncyA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgbGl0dGxlKTtcbiAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3M7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIGkgKiAxMiwgbGl0dGxlKSA9PT0gMHgwMTEyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyBpICogMTIgKyA4LCBsaXR0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hcmtlciAmIDB4ZmYwMCkgIT09IDB4ZmYwMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKC0xKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlLnNsaWNlKDAsIDY0ICogMTAyNCkpO1xuICB9XG59XG4iXX0=