import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class FlexComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        // _wrapCls = {};
        this._direction = '';
        this._justify = '';
        this._alignContent = '';
        this.amFlexbox = true;
    }
    set direction(value) {
        this._direction = value;
    }
    set wrap(value) {
        this._wrap = value;
    }
    set justify(value) {
        this._justify = value;
    }
    set align(value) {
        this.defaultProps.align = value;
    }
    set alignContent(value) {
        this._alignContent = value;
    }
    get amFlexboxDirRow() {
        return this._direction === 'row';
    }
    get amFlexboxDirRowReverse() {
        return this._direction === 'row-reverse';
    }
    get amFlexboxDirColumn() {
        return this._direction === 'column';
    }
    get amFlexboxDirColumnReverse() {
        return this._direction === 'column-reverse';
    }
    get amFlexboxNowrap() {
        return this._wrap === 'nowrap';
    }
    get amFlexboxWrap() {
        return this._wrap === 'wrap';
    }
    get amFlexboxWrapReverse() {
        return this._wrap === 'wrap-reverse';
    }
    get amFlexboxJustifyStart() {
        return this._justify === 'start';
    }
    get amFlexboxJustifyCenter() {
        return this._justify === 'center';
    }
    get amFlexboxJustifyEnd() {
        return this._justify === 'end';
    }
    get amFlexboxJustifyBetween() {
        return this._justify === 'between';
    }
    get amFlexboxAlignAround() {
        return this._justify === 'around';
    }
    get amFlexboxAlignStart() {
        return this.defaultProps.align === 'start';
    }
    get amFlexboxAlignCenter() {
        return this.defaultProps.align === 'center';
    }
    get amFlexboxAlignEnd() {
        return this.defaultProps.align === 'end';
    }
    get amFlexboxAlignBaseline() {
        return this.defaultProps.align === 'baseline';
    }
    get amFlexboxAlignStretch() {
        return this.defaultProps.align === 'stretch';
    }
    get amFlexboxAlignContentStart() {
        return this._alignContent === 'start';
    }
    get amFlexboxAlignCotentCenter() {
        return this._alignContent === 'center';
    }
    get amFlexboxAlignContentEnd() {
        return this._alignContent === 'end';
    }
    get amFlexboxAlignContentBetween() {
        return this._alignContent === 'between';
    }
    get amFlexboxAlignContentAround() {
        return this._alignContent === 'around';
    }
    get amFlexboxAlignContentStretch() {
        return this._alignContent === 'stretch';
    }
}
FlexComponent.ɵfac = function FlexComponent_Factory(t) { return new (t || FlexComponent)(); };
FlexComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FlexComponent, selectors: [["Flex"], ["nzm-flex"]], hostVars: 48, hostBindings: function FlexComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-flexbox", ctx.amFlexbox)("am-flexbox-dir-row", ctx.amFlexboxDirRow)("am-flexbox-dir-row-reverse", ctx.amFlexboxDirRowReverse)("am-flexbox-dir-column", ctx.amFlexboxDirColumn)("am-flexbox-dir-column-reverse", ctx.amFlexboxDirColumnReverse)("am-flexbox-nowrap", ctx.amFlexboxNowrap)("am-flexbox-wrap", ctx.amFlexboxWrap)("am-flexbox-wrap-reverse", ctx.amFlexboxWrapReverse)("am-flexbox-justify-start", ctx.amFlexboxJustifyStart)("am-flexbox-justify-center", ctx.amFlexboxJustifyCenter)("am-flexbox-justify-end", ctx.amFlexboxJustifyEnd)("am-flexbox-justify-between", ctx.amFlexboxJustifyBetween)("am-flexbox-justify-around", ctx.amFlexboxAlignAround)("am-flexbox-align-start", ctx.amFlexboxAlignStart)("am-flexbox-align-center", ctx.amFlexboxAlignCenter)("am-flexbox-align-end", ctx.amFlexboxAlignEnd)("am-flexbox-align-baseline", ctx.amFlexboxAlignBaseline)("am-flexbox-align-stretch", ctx.amFlexboxAlignStretch)("am-flexbox-align-content-start", ctx.amFlexboxAlignContentStart)("am-flexbox-align-content-center", ctx.amFlexboxAlignCotentCenter)("am-flexbox-align-content-end", ctx.amFlexboxAlignContentEnd)("am-flexbox-align-content-between", ctx.amFlexboxAlignContentBetween)("am-flexbox-align-content-around", ctx.amFlexboxAlignContentAround)("am-flexbox-align-content-stretch", ctx.amFlexboxAlignContentStretch);
    } }, inputs: { direction: "direction", wrap: "wrap", justify: "justify", align: "align", alignContent: "alignContent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function FlexComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
FlexComponent.ctorParameters = () => [];
FlexComponent.propDecorators = {
    direction: [{ type: Input }],
    wrap: [{ type: Input }],
    justify: [{ type: Input }],
    align: [{ type: Input }],
    alignContent: [{ type: Input }],
    amFlexbox: [{ type: HostBinding, args: ['class.am-flexbox',] }],
    amFlexboxDirRow: [{ type: HostBinding, args: ['class.am-flexbox-dir-row',] }],
    amFlexboxDirRowReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-row-reverse',] }],
    amFlexboxDirColumn: [{ type: HostBinding, args: ['class.am-flexbox-dir-column',] }],
    amFlexboxDirColumnReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-column-reverse',] }],
    amFlexboxNowrap: [{ type: HostBinding, args: ['class.am-flexbox-nowrap',] }],
    amFlexboxWrap: [{ type: HostBinding, args: ['class.am-flexbox-wrap',] }],
    amFlexboxWrapReverse: [{ type: HostBinding, args: ['class.am-flexbox-wrap-reverse',] }],
    amFlexboxJustifyStart: [{ type: HostBinding, args: ['class.am-flexbox-justify-start',] }],
    amFlexboxJustifyCenter: [{ type: HostBinding, args: ['class.am-flexbox-justify-center',] }],
    amFlexboxJustifyEnd: [{ type: HostBinding, args: ['class.am-flexbox-justify-end',] }],
    amFlexboxJustifyBetween: [{ type: HostBinding, args: ['class.am-flexbox-justify-between',] }],
    amFlexboxAlignAround: [{ type: HostBinding, args: ['class.am-flexbox-justify-around',] }],
    amFlexboxAlignStart: [{ type: HostBinding, args: ['class.am-flexbox-align-start',] }],
    amFlexboxAlignCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-center',] }],
    amFlexboxAlignEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-end',] }],
    amFlexboxAlignBaseline: [{ type: HostBinding, args: ['class.am-flexbox-align-baseline',] }],
    amFlexboxAlignStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-stretch',] }],
    amFlexboxAlignContentStart: [{ type: HostBinding, args: ['class.am-flexbox-align-content-start',] }],
    amFlexboxAlignCotentCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-content-center',] }],
    amFlexboxAlignContentEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-content-end',] }],
    amFlexboxAlignContentBetween: [{ type: HostBinding, args: ['class.am-flexbox-align-content-between',] }],
    amFlexboxAlignContentAround: [{ type: HostBinding, args: ['class.am-flexbox-align-content-around',] }],
    amFlexboxAlignContentStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-content-stretch',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FlexComponent, [{
        type: Component,
        args: [{
                selector: 'Flex, nzm-flex',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { amFlexbox: [{
            type: HostBinding,
            args: ['class.am-flexbox']
        }], direction: [{
            type: Input
        }], wrap: [{
            type: Input
        }], justify: [{
            type: Input
        }], align: [{
            type: Input
        }], alignContent: [{
            type: Input
        }], amFlexboxDirRow: [{
            type: HostBinding,
            args: ['class.am-flexbox-dir-row']
        }], amFlexboxDirRowReverse: [{
            type: HostBinding,
            args: ['class.am-flexbox-dir-row-reverse']
        }], amFlexboxDirColumn: [{
            type: HostBinding,
            args: ['class.am-flexbox-dir-column']
        }], amFlexboxDirColumnReverse: [{
            type: HostBinding,
            args: ['class.am-flexbox-dir-column-reverse']
        }], amFlexboxNowrap: [{
            type: HostBinding,
            args: ['class.am-flexbox-nowrap']
        }], amFlexboxWrap: [{
            type: HostBinding,
            args: ['class.am-flexbox-wrap']
        }], amFlexboxWrapReverse: [{
            type: HostBinding,
            args: ['class.am-flexbox-wrap-reverse']
        }], amFlexboxJustifyStart: [{
            type: HostBinding,
            args: ['class.am-flexbox-justify-start']
        }], amFlexboxJustifyCenter: [{
            type: HostBinding,
            args: ['class.am-flexbox-justify-center']
        }], amFlexboxJustifyEnd: [{
            type: HostBinding,
            args: ['class.am-flexbox-justify-end']
        }], amFlexboxJustifyBetween: [{
            type: HostBinding,
            args: ['class.am-flexbox-justify-between']
        }], amFlexboxAlignAround: [{
            type: HostBinding,
            args: ['class.am-flexbox-justify-around']
        }], amFlexboxAlignStart: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-start']
        }], amFlexboxAlignCenter: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-center']
        }], amFlexboxAlignEnd: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-end']
        }], amFlexboxAlignBaseline: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-baseline']
        }], amFlexboxAlignStretch: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-stretch']
        }], amFlexboxAlignContentStart: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-start']
        }], amFlexboxAlignCotentCenter: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-center']
        }], amFlexboxAlignContentEnd: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-end']
        }], amFlexboxAlignContentBetween: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-between']
        }], amFlexboxAlignContentAround: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-around']
        }], amFlexboxAlignContentStretch: [{
            type: HostBinding,
            args: ['class.am-flexbox-align-content-stretch']
        }] }); })();
export class FlexItemComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        this.flexboxItem = true;
    }
}
FlexItemComponent.ɵfac = function FlexItemComponent_Factory(t) { return new (t || FlexItemComponent)(); };
FlexItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FlexItemComponent, selectors: [["FlexItem"], ["nzm-flex-item"]], hostVars: 2, hostBindings: function FlexItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-flexbox-item", ctx.flexboxItem);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function FlexItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
FlexItemComponent.propDecorators = {
    flexboxItem: [{ type: HostBinding, args: ['class.am-flexbox-item',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FlexItemComponent, [{
        type: Component,
        args: [{
                selector: 'FlexItem, nzm-flex-item',
                template: `
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { flexboxItem: [{
            type: HostBinding,
            args: ['class.am-flexbox-item']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZmxleC9mbGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPakYsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUErSEU7QUFBZ0IsUUEvSGhCLGlCQUFZLEdBQUc7QUFDakIsWUFBSSxTQUFTLEVBQUUsWUFBWTtBQUMzQixZQUFJLEtBQUssRUFBRSxRQUFRO0FBQ25CLFNBQUcsQ0FBQztBQUNKLFFBQ0UsaUJBQWlCO0FBQ25CLFFBQVUsZUFBVSxHQUFXLEVBQUUsQ0FBQztBQUNsQyxRQUNVLGFBQVEsR0FBVyxFQUFFLENBQUM7QUFDaEMsUUFBVSxrQkFBYSxHQUFXLEVBQUUsQ0FBQztBQUNyQyxRQXVCRSxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQzVCLElBNkZpQixDQUFDO0FBQ2xCLElBckhFLElBQ0ksU0FBUyxDQUFDLEtBQUs7QUFDckIsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksSUFBSSxDQUFDLEtBQUs7QUFDaEIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksT0FBTyxDQUFDLEtBQUs7QUFDbkIsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQ0ksS0FBSyxDQUFDLEtBQUs7QUFDakIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLFlBQVksQ0FBQyxLQUFLO0FBQ3hCLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxL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Q0FHRixXQUFXLFNBQUMsZ0NBQWdDO0FBQzFDLHlDQUdGLFdBQVcsU0FBQyxzQ0FBc0M7QUFDaEQseUNBR0YsV0FBVyxTQUFDLHVDQUF1QztBQUNqRCx1Q0FHRixXQUFXLFNBQUMsb0NBQW9DO0FBQzlDLDJDQUdGLFdBQVcsU0FBQyx3Q0FBd0M7QUFDbEQsMENBR0YsV0FBVyxTQUFDLHVDQUF1QztBQUNqRCwyQ0FHRixXQUFXLFNBQUMsd0NBQXdDO0FBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFjTixNQUFNLE9BQU8saUJBQWlCO0FBQzlCLElBUkE7QUFDRyxRQU9ELGlCQUFZLEdBQUc7QUFDakIsWUFBSSxTQUFTLEVBQUUsWUFBWTtBQUMzQixZQUFJLEtBQUssRUFBRSxRQUFRO0FBQ25CLFNBQUcsQ0FBQztBQUNKLFFBRUUsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDOUIsSUFBQSxDQUFDO0FBQ0Q7NkNBaEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7U0FBeUIsa0JBQ25DLFFBQVEsRUFBRSxtQ0FFVCxrQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7NkJBQ0k7QUFBQztBQUNJLDBCQUtQLFdBQVcsU0FBQyx1QkFBdUI7QUFDbEM7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdGbGV4LCBuem0tZmxleCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGV4LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbGV4Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLWZsZXhib3gnLFxuICAgIGFsaWduOiAnY2VudGVyJ1xuICB9O1xuXG4gIC8vIF93cmFwQ2xzID0ge307XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3dyYXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfanVzdGlmeTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2FsaWduQ29udGVudDogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpcmVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3cmFwKHZhbHVlKSB7XG4gICAgdGhpcy5fd3JhcCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBqdXN0aWZ5KHZhbHVlKSB7XG4gICAgdGhpcy5fanVzdGlmeSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFsaWduQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuX2FsaWduQ29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94JylcbiAgYW1GbGV4Ym94OiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWRpci1yb3cnKVxuICBnZXQgYW1GbGV4Ym94RGlyUm93KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb24gPT09ICdyb3cnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1kaXItcm93LXJldmVyc2UnKVxuICBnZXQgYW1GbGV4Ym94RGlyUm93UmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uID09PSAncm93LXJldmVyc2UnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1kaXItY29sdW1uJylcbiAgZ2V0IGFtRmxleGJveERpckNvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uID09PSAnY29sdW1uJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtZGlyLWNvbHVtbi1yZXZlcnNlJylcbiAgZ2V0IGFtRmxleGJveERpckNvbHVtblJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtbm93cmFwJylcbiAgZ2V0IGFtRmxleGJveE5vd3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcCA9PT0gJ25vd3JhcCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LXdyYXAnKVxuICBnZXQgYW1GbGV4Ym94V3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcCA9PT0gJ3dyYXAnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC13cmFwLXJldmVyc2UnKVxuICBnZXQgYW1GbGV4Ym94V3JhcFJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXAgPT09ICd3cmFwLXJldmVyc2UnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1qdXN0aWZ5LXN0YXJ0JylcbiAgZ2V0IGFtRmxleGJveEp1c3RpZnlTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeSA9PT0gJ3N0YXJ0JztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtanVzdGlmeS1jZW50ZXInKVxuICBnZXQgYW1GbGV4Ym94SnVzdGlmeUNlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeSA9PT0gJ2NlbnRlcic7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWp1c3RpZnktZW5kJylcbiAgZ2V0IGFtRmxleGJveEp1c3RpZnlFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnkgPT09ICdlbmQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1qdXN0aWZ5LWJldHdlZW4nKVxuICBnZXQgYW1GbGV4Ym94SnVzdGlmeUJldHdlZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnkgPT09ICdiZXR3ZWVuJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtanVzdGlmeS1hcm91bmQnKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25Bcm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnkgPT09ICdhcm91bmQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1zdGFydCcpXG4gIGdldCBhbUZsZXhib3hBbGlnblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5hbGlnbiA9PT0gJ3N0YXJ0JztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY2VudGVyJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQ2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5hbGlnbiA9PT0gJ2NlbnRlcic7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWVuZCcpXG4gIGdldCBhbUZsZXhib3hBbGlnbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdlbmQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1iYXNlbGluZScpXG4gIGdldCBhbUZsZXhib3hBbGlnbkJhc2VsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5hbGlnbiA9PT0gJ2Jhc2VsaW5lJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tc3RyZXRjaCcpXG4gIGdldCBhbUZsZXhib3hBbGlnblN0cmV0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnc3RyZXRjaCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWNvbnRlbnQtc3RhcnQnKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25Db250ZW50U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduQ29udGVudCA9PT0gJ3N0YXJ0JztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY29udGVudC1jZW50ZXInKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25Db3RlbnRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduQ29udGVudCA9PT0gJ2NlbnRlcic7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWNvbnRlbnQtZW5kJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQ29udGVudEVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50ID09PSAnZW5kJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY29udGVudC1iZXR3ZWVuJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQ29udGVudEJldHdlZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduQ29udGVudCA9PT0gJ2JldHdlZW4nO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1jb250ZW50LWFyb3VuZCcpXG4gIGdldCBhbUZsZXhib3hBbGlnbkNvbnRlbnRBcm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduQ29udGVudCA9PT0gJ2Fyb3VuZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWNvbnRlbnQtc3RyZXRjaCcpXG4gIGdldCBhbUZsZXhib3hBbGlnbkNvbnRlbnRTdHJldGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbkNvbnRlbnQgPT09ICdzdHJldGNoJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRmxleEl0ZW0sIG56bS1mbGV4LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbGV4SXRlbUNvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1mbGV4Ym94JyxcbiAgICBhbGlnbjogJ2NlbnRlcidcbiAgfTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtaXRlbScpXG4gIGZsZXhib3hJdGVtOiBib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==