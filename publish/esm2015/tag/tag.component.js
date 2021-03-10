import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';

function TagComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("click", function TagComponent_div_0_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(2); return ctx_r2.onTagClose(); });
    ɵngcc0.ɵɵelement(1, "Icon", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-close");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "cross-circle")("size", "xs");
} }
function TagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function TagComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick(); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, TagComponent_div_0_div_3_Template, 2, 5, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-text");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.closable && !ctx_r0.disabled && !ctx_r0.small);
} }
const _c0 = ["*"];
export class TagComponent {
    constructor() {
        this.prefixCls = 'am-tag';
        this.closed = false;
        this.wrapCls = {};
        this._small = false;
        this._closable = false;
        this._selected = false;
        this._disabled = false;
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.afterClose = new EventEmitter();
    }
    get small() {
        return this._small;
    }
    set small(v) {
        this._small = v;
        this.setClassMap();
    }
    get closable() {
        return this._closable;
    }
    set closable(v) {
        this._closable = v;
        this.setClassMap();
    }
    set selected(v) {
        this._selected = v;
        this.setClassMap();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(v) {
        this._disabled = v;
        this.setClassMap();
    }
    onClick() {
        if (this._disabled) {
            return;
        }
        this._selected = !this._selected;
        this.onChange.emit(this._selected);
        this.setClassMap();
    }
    onTagClose() {
        this.onClose.emit();
        this.closed = true;
        this.afterClose.emit();
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-normal`]: !this._disabled && (!this._selected || this._small || this._closable),
            [`${this.prefixCls}-small`]: this._small,
            [`${this.prefixCls}-active`]: this._selected && !this._disabled && !this._small && !this._closable,
            [`${this.prefixCls}-disabled`]: this._disabled,
            [`${this.prefixCls}-closable`]: this._closable
        };
    }
    ngOnInit() {
        this.setClassMap();
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TagComponent, selectors: [["Tag"], ["nzm-tag"]], inputs: { small: "small", closable: "closable", selected: "selected", disabled: "disabled" }, outputs: { onChange: "onChange", onClose: "onClose", afterClose: "afterClose" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["role", "button", "aria-label", "remove tag", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "remove tag", 3, "click"], ["aria-hidden", "true", 3, "type", "size"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TagComponent_div_0_Template, 4, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.IconComponent], encapsulation: 2 });
TagComponent.ctorParameters = () => [];
TagComponent.propDecorators = {
    small: [{ type: Input }],
    closable: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    afterClose: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TagComponent, [{
        type: Component,
        args: [{
                selector: 'Tag, nzm-tag',
                template: "<div *ngIf=\"!closed\" [ngClass]=\"wrapCls\" (click)=\"onClick()\">\n  <div class=\"{{ prefixCls }}-text\">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf=\"closable && !disabled && !small\"\n    role=\"button\"\n    class=\"{{ prefixCls }}-close\"\n    aria-label=\"remove tag\"\n    (click)=\"onTagClose()\"\n  >\n    <Icon aria-hidden=\"true\" [type]=\"'cross-circle'\" [size]=\"'xs'\"></Icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onChange: [{
            type: Output
        }], onClose: [{
            type: Output
        }], afterClose: [{
            type: Output
        }], small: [{
            type: Input
        }], closable: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRyxNQUFNLE9BQU8sWUFBWTtBQUFHLElBOEMxQjtBQUFnQixRQTdDaEIsY0FBUyxHQUFXLFFBQVEsQ0FBQztBQUMvQixRQUFFLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDMUIsUUFBRSxZQUFPLEdBQVEsRUFBRSxDQUFDO0FBQ3BCLFFBQ1UsV0FBTSxHQUFZLEtBQUssQ0FBQztBQUNsQyxRQUFVLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQStCRSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7QUFDeEQsUUFDRSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7QUFDdkQsUUFDRSxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7QUFDMUQsSUFDaUIsQ0FBQztBQUNsQixJQXJDRSxJQUNJLEtBQUs7QUFDWCxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksS0FBSyxDQUFDLENBQUM7QUFDYixRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFB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OlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGFnLCBuem0tdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tdGFnJztcbiAgY2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHdyYXBDbHM6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgX3NtYWxsOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Nsb3NhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNtYWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9zbWFsbDtcbiAgfVxuICBzZXQgc21hbGwodikge1xuICAgIHRoaXMuX3NtYWxsID0gdjtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNsb3NhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9zYWJsZTtcbiAgfVxuICBzZXQgY2xvc2FibGUodikge1xuICAgIHRoaXMuX2Nsb3NhYmxlID0gdjtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkKHYpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHY7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHYpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHY7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlckNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLl9zZWxlY3RlZDtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG9uVGFnQ2xvc2UoKSB7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5hZnRlckNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCkge1xuICAgIHRoaXMud3JhcENscyA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vcm1hbGBdOiAhdGhpcy5fZGlzYWJsZWQgJiYgKCF0aGlzLl9zZWxlY3RlZCB8fCB0aGlzLl9zbWFsbCB8fCB0aGlzLl9jbG9zYWJsZSksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNtYWxsYF06IHRoaXMuX3NtYWxsLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmVgXTogdGhpcy5fc2VsZWN0ZWQgJiYgIXRoaXMuX2Rpc2FibGVkICYmICF0aGlzLl9zbWFsbCAmJiAhdGhpcy5fY2xvc2FibGUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMuX2Rpc2FibGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jbG9zYWJsZWBdOiB0aGlzLl9jbG9zYWJsZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==