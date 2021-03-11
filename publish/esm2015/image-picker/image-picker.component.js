import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
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
ImagePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ImagePicker, nzm-image-picker',
                template: "<div class=\"{{ prefixCls }}-list\" role=\"group\">\n  <Flex *ngFor=\"let rowItem of flexEl; let i = index\">\n    <FlexItem *ngFor=\"let item of rowItem; let j = index\">\n      <div *ngIf=\"item && 'img' === item.type && item.backgroundImage\" class=\"{{ prefixCls }}-item\">\n        <div\n          role=\"button\"\n          *ngIf=\"!disableDelete\"\n          aria-label=\"Click and Remove this image\"\n          class=\"{{ prefixCls }}-item-remove\"\n          (click)=\"removeImage(i * length + j)\"\n        ></div>\n        <div\n          role=\"button\"\n          aria-label=\"Image can be clicked\"\n          class=\"{{ prefixCls }}-item-content\"\n          [ngStyle]=\"{ 'background-image': item.backgroundImage, transform: item.transform }\"\n          (click)=\"imageClick(i * length + j)\"\n        ></div>\n      </div>\n      <div\n        role=\"button\"\n        aria-label=\"Choose and add image\"\n        *ngIf=\"item && 'select' === item.type\"\n        class=\"{{ prefixCls }}-item {{ prefixCls }}-upload-btn\"\n        (click)=\"addImageClick($event)\"\n      >\n        <input\n          #fileSelectorInput\n          type=\"file\"\n          [accept]=\"accept\"\n          [multiple]=\"multiple\"\n          [attr.capture]=\"capture ? capture : null\"\n          (change)=\"fileChange($event)\"\n        />\n      </div>\n      <div *ngIf=\"item && 'white' === item.type\" class=\"{{ prefixCls }}-item-white\"></div>\n    </FlexItem>\n  </Flex>\n</div>\n"
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZcEcsTUFBTSxPQUFPLG9CQUFvQjtJQW9FL0I7UUFuRUEsY0FBUyxHQUFXLGlCQUFpQixDQUFDO1FBQ3RDLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFLMUIsWUFBTyxHQUFxQixLQUFLLENBQUM7UUFDbEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUE4Q3hDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXpDLENBQUM7SUFyRGhCLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJ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O1FBQ0YsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQTlPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsMjlDQUE0QzthQUM3Qzs7OztpQ0FXRSxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7c0JBR3pELEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQVFMLEtBQUs7cUJBUUwsS0FBSzt1QkFZTCxLQUFLO3lCQVFMLEtBQUs7cUJBUUwsTUFBTTt1QkFFTixNQUFNOzJCQUVOLE1BQU07OEJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50VHlwZSB7XG4gIHR5cGU6IHN0cmluZzsgLy8gJ2ltZycgfCAnc2VsZWN0JyB8ICd3aGl0ZSdcbiAgYmFja2dyb3VuZEltYWdlOiBzdHJpbmc7XG4gIHRyYW5zZm9ybTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdJbWFnZVBpY2tlciwgbnptLWltYWdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0taW1hZ2UtcGlja2VyJztcbiAgZmxleEVsOiBFbGVtZW50VHlwZVtdW10gPSBbXTtcblxuICBwcml2YXRlIF9hY2NlcHQ6IHN0cmluZyA9ICdpbWFnZS8qJztcbiAgcHJpdmF0ZSBfY291bnQ6IG51bWJlciA9IDQ7XG4gIHByaXZhdGUgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9maWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVTZWxlY3RvcklucHV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHByaXZhdGUgX2ZpbGVTZWxlY3RvcklucHV0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpIGNhcHR1cmU6IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZURlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzO1xuICB9XG4gIHNldCBmaWxlcyh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX2ZpbGVzID0gdmFsdWU7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBhY2NlcHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXB0O1xuICB9XG4gIHNldCBhY2NlcHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2VwdCA9IHZhbHVlO1xuICAgIHRoaXMuc29ydEl0ZW0oKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG4gIHNldCBsZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gNDtcbiAgICB9XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNvcnRJdGVtKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cbiAgc2V0IHNlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gdmFsdWU7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkZhaWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25JbWFnZUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uQWRkSW1hZ2VDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNvcnRJdGVtKCkge1xuICAgIGlmICghdGhpcy5fZmlsZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoJycgKyB0aGlzLl9jb3VudCwgMTApO1xuICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICBjb3VudCA9IDQ7XG4gICAgfVxuICAgIGxldCBhbGxFbDogRWxlbWVudFR5cGVbXSA9IHRoaXMuX2ZpbGVzLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdpbWcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0udXJsICsgJyknLFxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIHRoaXMuZ2V0Um90YXRpb24oaXRlbS5vcmllbnRhdGlvbikgKyAnZGVnKSdcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGFibGUpIHtcbiAgICAgIGFsbEVsLnB1c2goe1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IGFsbEVsLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSAwICYmIGxlbmd0aCAlIGNvdW50ICE9PSAwKSB7XG4gICAgICBjb25zdCBibGFua0NvdW50ID0gY291bnQgLSAobGVuZ3RoICUgY291bnQpO1xuICAgICAgY29uc3QgZmlsbEJsYW5rRWw6IGFueVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW5rQ291bnQ7IGkrKykge1xuICAgICAgICBmaWxsQmxhbmtFbC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGFsbEVsID0gYWxsRWwuY29uY2F0KGZpbGxCbGFua0VsKTtcbiAgICB9XG4gICAgdGhpcy5mbGV4RWwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEVsLmxlbmd0aCAvIGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0VsID0gYWxsRWwuc2xpY2UoaSAqIGNvdW50LCBpICogY291bnQgKyBjb3VudCk7XG4gICAgICB0aGlzLmZsZXhFbC5wdXNoKHJvd0VsKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbWFnZShpbWdJdGVtOiBhbnkpIHtcbiAgICB0aGlzLl9maWxlcy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbWcnLFxuICAgICAgdXJsOiBpbWdJdGVtLnVybCxcbiAgICAgIG9yaWVudGF0aW9uOiBpbWdJdGVtLm9yaWVudGF0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5zb3J0SXRlbSgpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlczogdGhpcy5fZmlsZXMsXG4gICAgICBvcGVyYXRpb25UeXBlOiAnYWRkJyxcbiAgICAgIGluZGV4OiB0aGlzLl9maWxlcy5sZW5ndGggLSAxXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVJbWFnZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNvcnRJdGVtKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGVzOiB0aGlzLl9maWxlcyxcbiAgICAgIG9wZXJhdGlvblR5cGU6ICdyZW1vdmUnLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cblxuICBpbWFnZUNsaWNrKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLm9uSW1hZ2VDbGljay5lbWl0KHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGZpbGVzOiB0aGlzLl9maWxlc1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSW1hZ2VDbGljayhlKSB7XG4gICAgdGhpcy5vbkFkZEltYWdlQ2xpY2suZW1pdChlKTtcbiAgfVxuXG4gIHBhcnNlRmlsZShmaWxlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgIGNvbnN0IGRhdGFVUkwgPSAoZS50YXJnZXQgYXMgYW55KS5yZXN1bHQ7XG4gICAgICBpZiAoIWRhdGFVUkwpIHtcbiAgICAgICAgdGhpcy5vbkZhaWwuZW1pdChgRmFpbCB0byBnZXQgdGhlICR7aW5kZXh9IGltYWdlYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG9yaWVudGF0aW9uID0gMTtcbiAgICAgIHRoaXMuZ2V0T3JpZW50YXRpb24oZmlsZSwgcmVzID0+IHtcbiAgICAgICAgLy8gLTI6IG5vdCBqcGVnICwgLTE6IG5vdCBkZWZpbmVkXG4gICAgICAgIGlmIChyZXMgPiAwKSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSByZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJbWFnZSh7XG4gICAgICAgICAgdXJsOiBkYXRhVVJMLFxuICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG5cbiAgZmlsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBpZiAoZmlsZUxpc3QgJiYgZmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGFyc2VGaWxlKGZpbGVMaXN0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRSb3RhdGlvbihvcmllbnRhdGlvbiA9IDEpIHtcbiAgICBsZXQgaW1nUm90YXRpb24gPSAwO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1nUm90YXRpb24gPSAxODA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWdSb3RhdGlvbiA9IDkwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1nUm90YXRpb24gPSAyNzA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgcmV0dXJuIGltZ1JvdGF0aW9uO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzU4NDc5NC9hY2Nlc3NpbmctanBlZy1leGlmLXJvdGF0aW9uLWRhdGEtaW4tamF2YXNjcmlwdC1vbi10aGUtY2xpZW50LXNpZGVcbiAgZ2V0T3JpZW50YXRpb24oZmlsZTogYW55LCBjYWxsYmFjazogKF86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldygoZS50YXJnZXQgYXMgYW55KS5yZXN1bHQpO1xuICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKSAhPT0gMHhmZmQ4KSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygtMik7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgICBsZXQgb2Zmc2V0ID0gMjtcbiAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICBpZiAobWFya2VyID09PSAweGZmZTEpIHtcbiAgICAgICAgICBjb25zdCB0bXAgPSB2aWV3LmdldFVpbnQzMigob2Zmc2V0ICs9IDIpLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKHRtcCAhPT0gMHg0NTc4Njk2Nikge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGl0dGxlID0gdmlldy5nZXRVaW50MTYoKG9mZnNldCArPSA2KSwgZmFsc2UpID09PSAweDQ5NDk7XG4gICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDMyKG9mZnNldCArIDQsIGxpdHRsZSk7XG4gICAgICAgICAgY29uc3QgdGFncyA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgbGl0dGxlKTtcbiAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3M7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIGkgKiAxMiwgbGl0dGxlKSA9PT0gMHgwMTEyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyBpICogMTIgKyA4LCBsaXR0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hcmtlciAmIDB4ZmYwMCkgIT09IDB4ZmYwMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKC0xKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlLnNsaWNlKDAsIDY0ICogMTAyNCkpO1xuICB9XG59XG4iXX0=