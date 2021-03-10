import { Component, Input, Output, EventEmitter, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ResultComponent_div_0_ng_template_1_Template(rf, ctx) { }
function ResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ResultComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-pic");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.img);
} }
const _c0 = function (a0) { return { backgroundImage: a0 }; };
function ResultComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-pic");
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c0, "url(" + ctx_r1.imgUrl + ")"));
} }
function ResultComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function ResultComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ResultComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.title);
} }
function ResultComponent_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.title);
} }
function ResultComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ResultComponent_div_2_1_Template, 1, 1, undefined, 3);
    ɵngcc0.ɵɵtemplate(2, ResultComponent_div_2_span_2_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.isTitleString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isTitleString);
} }
function ResultComponent_4_ng_template_0_Template(rf, ctx) { }
function ResultComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ResultComponent_4_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.message);
} }
function ResultComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.message);
} }
function ResultComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "a", 6);
    ɵngcc0.ɵɵlistener("click", function ResultComponent_div_6_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.buttonClick($event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-button");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", ctx_r5.buttonType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.buttonText, " ");
} }
export class ResultComponent {
    constructor() {
        this.prefixCls = 'am-result';
        this.isTitleString = true;
        this.isMessageString = true;
        this.onButtonClick = new EventEmitter();
        this.role = 'alert';
        this.amResult = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (this.isTemplateRef(value)) {
            this.isTitleString = false;
        }
        else {
            this.isTitleString = true;
        }
        this._title = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (this.isTemplateRef(value)) {
            this.isMessageString = false;
        }
        else {
            this.isMessageString = true;
        }
        this._message = value;
    }
    buttonClick(event) {
        this.onButtonClick.emit(event);
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(); };
ResultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ResultComponent, selectors: [["Result"], ["nzm-result"]], hostVars: 3, hostBindings: function ResultComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role);
        ɵngcc0.ɵɵclassProp("am-result", ctx.amResult);
    } }, inputs: { title: "title", message: "message", imgUrl: "imgUrl", buttonText: "buttonText", buttonType: "buttonType", img: "img" }, outputs: { onButtonClick: "onButtonClick" }, decls: 7, vars: 7, consts: [[3, "class", 4, "ngIf"], [3, "class", "ngStyle", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [3, "ngTemplateOutlet"], [3, "ngStyle"], ["Button", "", 3, "type", "click"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ResultComponent_div_0_Template, 2, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ResultComponent_div_1_Template, 1, 6, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ResultComponent_div_2_Template, 3, 5, "div", 0);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, ResultComponent_4_Template, 1, 1, undefined, 3);
        ɵngcc0.ɵɵtemplate(5, ResultComponent_span_5_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, ResultComponent_div_6_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.img);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.img && ctx.imgUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.prefixCls + "-message");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isMessageString);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMessageString);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.buttonText);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgStyle], encapsulation: 2 });
ResultComponent.ctorParameters = () => [];
ResultComponent.propDecorators = {
    title: [{ type: Input }],
    imgUrl: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonType: [{ type: Input }],
    img: [{ type: Input }],
    message: [{ type: Input }],
    onButtonClick: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amResult: [{ type: HostBinding, args: ['class.am-result',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResultComponent, [{
        type: Component,
        args: [{
                selector: 'Result, nzm-result',
                template: "<div *ngIf=\"img\" class=\"{{ prefixCls }}-pic\">\n  <ng-template [ngTemplateOutlet]=\"img\"></ng-template>\n</div>\n<div *ngIf=\"!img && imgUrl\" class=\"{{ prefixCls }}-pic\" [ngStyle]=\"{ backgroundImage: 'url(' + imgUrl + ')' }\"></div>\n<div *ngIf=\"title\" class=\"{{ prefixCls }}-title\">\n  <ng-template *ngIf=\"!isTitleString\" [ngTemplateOutlet]=\"title\"></ng-template>\n  <span *ngIf=\"isTitleString\">{{ title }}</span>\n</div>\n<div [ngClass]=\"prefixCls + '-message'\">\n  <ng-template *ngIf=\"!isMessageString\" [ngTemplateOutlet]=\"message\"></ng-template>\n  <span *ngIf=\"isMessageString\">{{ message }}</span>\n</div>\n<div *ngIf=\"buttonText\" class=\"{{ prefixCls }}-button\">\n  <a Button [type]=\"buttonType\" (click)=\"buttonClick($event)\">\n    {{ buttonText }}\n  </a>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onButtonClick: [{
            type: Output
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], amResult: [{
            type: HostBinding,
            args: ['class.am-result']
        }], title: [{
            type: Input
        }], message: [{
            type: Input
        }], imgUrl: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], buttonType: [{
            type: Input
        }], img: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wSCxNQUFNLE9BQU8sZUFBZTtBQUM1QixJQStDRTtBQUFnQixRQS9DaEIsY0FBUyxHQUFXLFdBQVcsQ0FBQztBQUNsQyxRQUFFLGtCQUFhLEdBQVksSUFBSSxDQUFDO0FBQ2hDLFFBQUUsb0JBQWUsR0FBWSxJQUFJLENBQUM7QUFDbEMsUUFxQ0Usa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4RCxRQUVFLFNBQUksR0FBVyxPQUFPLENBQUM7QUFDekIsUUFDRSxhQUFRLEdBQVksSUFBSSxDQUFDO0FBQzNCLElBQ2lCLENBQUM7QUFDbEIsSUF6Q0UsSUFDSSxLQUFLO0FBQUssUUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFnQztBQUM1QyxRQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNuQyxZQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNoQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQVFFLElBQ0ksT0FBTztBQUFLLFFBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxPQUFPLENBQUMsS0FBZ0M7QUFDOUMsUUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbkMsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUNuQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDbEMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFVRSxXQUFXLENBQUMsS0FBSztBQUNuQixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYSxDQUFDLEtBQUs7QUFDckIsUUFBSSxJQUFJLEtBQUssRUFBRTtBQUNmLFlBQU0sT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLElBQUUsQ0FBQztBQUNIOzJDQWpFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1FBQW9CLGtCQUM5Qjs7Ozs7WUFBc0Msa0JBQ3RDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO0dBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFDSTtBQUFDO0FBQ1k7QUFDQSxvQkFNZixLQUFLO0FBQ04scUJBV0MsS0FBSztBQUNOLHlCQUNDLEtBQUs7QUFDTix5QkFDQyxLQUFLO0FBQ04sa0JBQ0MsS0FBSztBQUNOLHNCQUNDLEtBQUs7QUFDTiw0QkFXQyxNQUFNO0FBQ1AsbUJBRUMsV0FBVyxTQUFDLFdBQVc7QUFDckIsdUJBQ0YsV0FBVyxTQUFDLGlCQUFpQjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUmVzdWx0LCBuem0tcmVzdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tcmVzdWx0JztcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbiA9IHRydWU7XG4gIGlzTWVzc2FnZVN0cmluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodGhpcy5pc1RlbXBsYXRlUmVmKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgaW1nVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWc6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHRoaXMuaXNUZW1wbGF0ZVJlZih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNNZXNzYWdlU3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNNZXNzYWdlU3RyaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGU6IHN0cmluZyA9ICdhbGVydCc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcmVzdWx0JylcbiAgYW1SZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBidXR0b25DbGljayhldmVudCkge1xuICAgIHRoaXMub25CdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==