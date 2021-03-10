import { Component, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function BadgeComponent_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "sup", 1);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.scrollNumberCls)("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.text);
} }
const _c0 = ["*"];
export class BadgeComponent {
    constructor(_ref, render) {
        this._ref = _ref;
        this.render = render;
        this.prefixCls = 'am-badge';
        this.scrollNumberCls = {};
        this.style = {};
        this._size = 'small';
        this._dot = false;
        this._hot = false;
        this._corner = false;
        this._children = false;
        this._overflowCount = 99;
        this.clsBadge = true;
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    set size(v) {
        this._size = v;
        this.setCls();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
        this.setCls();
    }
    set corner(v) {
        this._corner = v;
        this.setCls();
    }
    get dot() {
        return this._dot;
    }
    set dot(v) {
        this._dot = v;
        if (this._dot) {
            this._text = '';
        }
        this.setCls();
    }
    set overflowCount(v) {
        this._overflowCount = v;
    }
    set hot(v) {
        this._hot = v;
        this.setCls();
    }
    set setStyle(v) {
        this.style = v;
    }
    set className(v) {
        this._setClass = v;
        const clsArr = this._setClass.split(' ');
        clsArr.forEach(cls => {
            this.render.addClass(this._ref.nativeElement, cls);
        });
    }
    setCls() {
        this.scrollNumberCls = {
            [`${this.prefixCls}-dot`]: this._dot,
            [`${this.prefixCls}-dot-large`]: this._dot && this._size === 'large',
            [`${this.prefixCls}-text`]: !this._dot && !this._corner,
            [`${this.prefixCls}-corner`]: this._corner,
            [`${this.prefixCls}-corner-large`]: this._corner && this._size === 'large'
        };
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    ngOnChanges() {
        if (typeof this._text === 'number' && this._text > this._overflowCount) {
            this._text = this._overflowCount + '+';
        }
    }
    ngOnInit() {
        this.setCls();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this._ref.nativeElement.children.length > 1 ||
                (this._ref.nativeElement.children.length === 1 && !this.dot && !this.text)) {
                this._children = true;
                this.setCls();
            }
        }, 10);
    }
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
BadgeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BadgeComponent, selectors: [["Badge"], ["nzm-badge"]], hostVars: 10, hostBindings: function BadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-badge", ctx.clsBadge)("am-badge-not-a-wrapper", ctx.clsBadgeWrp)("am-badge-corner-wrapper", ctx.clsBadgeCornerWrp)("am-badge-hot", ctx.clsBadgeHot)("am-badge-corner-wrapper-large", ctx.clsBadgeCornerWrpLg);
    } }, inputs: { size: "size", text: "text", corner: "corner", dot: "dot", overflowCount: "overflowCount", hot: "hot", setStyle: "setStyle", className: "className" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, BadgeComponent_sup_1_Template, 3, 3, "sup", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dot || ctx.text);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
BadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BadgeComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    corner: [{ type: Input }],
    dot: [{ type: Input }],
    overflowCount: [{ type: Input }],
    hot: [{ type: Input }],
    setStyle: [{ type: Input }],
    className: [{ type: Input }],
    clsBadge: [{ type: HostBinding, args: ['class.am-badge',] }],
    clsBadgeWrp: [{ type: HostBinding, args: ['class.am-badge-not-a-wrapper',] }],
    clsBadgeCornerWrp: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper',] }],
    clsBadgeHot: [{ type: HostBinding, args: ['class.am-badge-hot',] }],
    clsBadgeCornerWrpLg: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper-large',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BadgeComponent, [{
        type: Component,
        args: [{
                selector: 'Badge, nzm-badge',
                template: "<ng-content></ng-content>\n<sup *ngIf=\"dot || text\" [ngClass]=\"scrollNumberCls\" [ngStyle]=\"style\">\n  <span>{{ text }}</span>\n</sup>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { clsBadge: [{
            type: HostBinding,
            args: ['class.am-badge']
        }], clsBadgeWrp: [{
            type: HostBinding,
            args: ['class.am-badge-not-a-wrapper']
        }], clsBadgeCornerWrp: [{
            type: HostBinding,
            args: ['class.am-badge-corner-wrapper']
        }], clsBadgeHot: [{
            type: HostBinding,
            args: ['class.am-badge-hot']
        }], clsBadgeCornerWrpLg: [{
            type: HostBinding,
            args: ['class.am-badge-corner-wrapper-large']
        }], size: [{
            type: Input
        }], text: [{
            type: Input
        }], corner: [{
            type: Input
        }], dot: [{
            type: Input
        }], overflowCount: [{
            type: Input
        }], hot: [{
            type: Input
        }], setStyle: [{
            type: Input
        }], className: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZILE1BQU0sT0FBTyxjQUFjO0FBQUcsSUE0RTVCLFlBQW9CLElBQWdCLEVBQVUsTUFBaUI7QUFBSSxRQUEvQyxTQUFJLEdBQUosSUFBSSxDQUFZO0FBQUMsUUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsUUEzRWhFLGNBQVMsR0FBVyxVQUFVLENBQUM7QUFDakMsUUFBRSxvQkFBZSxHQUFXLEVBQUUsQ0FBQztBQUMvQixRQUFFLFVBQUssR0FBVyxFQUFFLENBQUM7QUFDckIsUUFHVSxVQUFLLEdBQVcsT0FBTyxDQUFDO0FBQ2xDLFFBQVUsU0FBSSxHQUFZLEtBQUssQ0FBQztBQUNoQyxRQUFVLFNBQUksR0FBWSxLQUFLLENBQUM7QUFDaEMsUUFBVSxZQUFPLEdBQVksS0FBSyxDQUFDO0FBQ25DLFFBQVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFVLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0FBQ3RDLFFBcURFLGFBQVEsR0FBWSxJQUFJLENBQUM7QUFDM0IsUUFDRSxnQkFBVyxHQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN6QyxRQUNFLHNCQUFpQixHQUFZLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDNUMsUUFDRSxnQkFBVyxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JDLFFBQ0Usd0JBQW1CLEdBQVksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQztBQUN4RSxJQUNvRSxDQUFDO0FBQ3JFLElBL0RFLElBQ0ksSUFB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LElBQUUsQ0FBQztBQUNIOzBDQXJIQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUI7NEZBQXFDLGNBQ3RDOzs7Ozs7Ozs7d0ZBQ0k7QUFBQztBQUF3QyxZQU5hLFVBQVU7QUFBSSxZQUFhLFNBQVM7QUFBRztBQUFHO0FBR3BHLG1CQWlCRSxLQUFLO0FBQ04sbUJBSUMsS0FBSztBQUNOLHFCQU9DLEtBQUs7QUFDTixrQkFJQyxLQUFLO0FBQ04sNEJBVUMsS0FBSztBQUNOLGtCQUdDLEtBQUs7QUFDTix1QkFJQyxLQUFLO0FBQ04sd0JBR0MsS0FBSztBQUNOLHVCQVFDLFdBQVcsU0FBQyxnQkFBZ0I7QUFDMUIsMEJBQ0YsV0FBVyxTQUFDLDhCQUE4QjtBQUN4QyxnQ0FDRixXQUFXLFNBQUMsK0JBQStCO0FBQ3pDLDBCQUNGLFdBQVcsU0FBQyxvQkFBb0I7QUFDOUIsa0NBQ0YsV0FBVyxTQUFDLHFDQUFxQztBQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0JhZGdlLCBuem0tYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1iYWRnZSc7XG4gIHNjcm9sbE51bWJlckNsczogb2JqZWN0ID0ge307XG4gIHN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NldENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZyA9ICdzbWFsbCc7XG4gIHByaXZhdGUgX2RvdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ob3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29ybmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX292ZXJmbG93Q291bnQ6IG51bWJlciA9IDk5O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2O1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0ID0gdjtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjb3JuZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Nvcm5lciA9IHY7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZG90KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb3Q7XG4gIH1cbiAgc2V0IGRvdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZG90ID0gdjtcbiAgICBpZiAodGhpcy5fZG90KSB7XG4gICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG92ZXJmbG93Q291bnQodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fb3ZlcmZsb3dDb3VudCA9IHY7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGhvdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faG90ID0gdjtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZXRTdHlsZSh2OiBvYmplY3QpIHtcbiAgICB0aGlzLnN0eWxlID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NldENsYXNzID0gdjtcbiAgICBjb25zdCBjbHNBcnIgPSB0aGlzLl9zZXRDbGFzcy5zcGxpdCgnICcpO1xuICAgIGNsc0Fyci5mb3JFYWNoKGNscyA9PiB7XG4gICAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9yZWYubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2UnKVxuICBjbHNCYWRnZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2Utbm90LWEtd3JhcHBlcicpXG4gIGNsc0JhZGdlV3JwOiBib29sZWFuID0gIXRoaXMuX2NoaWxkcmVuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWJhZGdlLWNvcm5lci13cmFwcGVyJylcbiAgY2xzQmFkZ2VDb3JuZXJXcnA6IGJvb2xlYW4gPSB0aGlzLl9jb3JuZXI7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2UtaG90JylcbiAgY2xzQmFkZ2VIb3Q6IGJvb2xlYW4gPSAhIXRoaXMuX2hvdDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1iYWRnZS1jb3JuZXItd3JhcHBlci1sYXJnZScpXG4gIGNsc0JhZGdlQ29ybmVyV3JwTGc6IGJvb2xlYW4gPSB0aGlzLl9jb3JuZXIgJiYgdGhpcy5fc2l6ZSA9PT0gJ2xhcmdlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgc2V0Q2xzKCkge1xuICAgIHRoaXMuc2Nyb2xsTnVtYmVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3RgXTogdGhpcy5fZG90LFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3QtbGFyZ2VgXTogdGhpcy5fZG90ICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRleHRgXTogIXRoaXMuX2RvdCAmJiAhdGhpcy5fY29ybmVyLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb3JuZXJgXTogdGhpcy5fY29ybmVyLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb3JuZXItbGFyZ2VgXTogdGhpcy5fY29ybmVyICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZSdcbiAgICB9O1xuICAgIHRoaXMuY2xzQmFkZ2VXcnAgPSAhdGhpcy5fY2hpbGRyZW47XG4gICAgdGhpcy5jbHNCYWRnZUNvcm5lcldycCA9IHRoaXMuX2Nvcm5lcjtcbiAgICB0aGlzLmNsc0JhZGdlSG90ID0gISF0aGlzLl9ob3Q7XG4gICAgdGhpcy5jbHNCYWRnZUNvcm5lcldycExnID0gdGhpcy5fY29ybmVyICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3RleHQgPT09ICdudW1iZXInICYmIHRoaXMuX3RleHQgPiB0aGlzLl9vdmVyZmxvd0NvdW50KSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fb3ZlcmZsb3dDb3VudCArICcrJztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9yZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAxIHx8XG4gICAgICAgICh0aGlzLl9yZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgIXRoaXMuZG90ICYmICF0aGlzLnRleHQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNldENscygpO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxufVxuIl19