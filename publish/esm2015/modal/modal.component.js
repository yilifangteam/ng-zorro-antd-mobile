import { Input, Output, Component, forwardRef, ElementRef, TemplateRef, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import { ModalOptions } from './modal-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalRef } from './modal-ref.class';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal-options.provider';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../button/button.component';
import * as ɵngcc4 from '@angular/forms';

function ModalComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelement(2, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close-x");
} }
function ModalComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.option.title);
} }
function ModalComponent_div_0_div_6_2_ng_template_0_Template(rf, ctx) { }
function ModalComponent_div_0_div_6_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r16.option.title);
} }
function ModalComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ModalComponent_div_0_div_6_div_1_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(2, ModalComponent_div_0_div_6_2_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.option.title));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.option.title));
} }
function ModalComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.option.prefixCls, "-alert-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.option.message, " ");
} }
function ModalComponent_div_0_10_ng_template_0_Template(rf, ctx) { }
function ModalComponent_div_0_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_10_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.option.message);
} }
function ModalComponent_div_0_11_ng_template_0_Template(rf, ctx) { }
function ModalComponent_div_0_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_11_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function ModalComponent_div_0_12_ng_template_0_Template(rf, ctx) { }
function ModalComponent_div_0_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_12_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ModalComponent_div_0_13_ng_template_0_Template(rf, ctx) { }
function ModalComponent_div_0_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_13_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function ModalComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("onClick", function ModalComponent_div_0_div_16_Template_div_onClick_0_listener() { const button_r22 = ctx.$implicit; return button_r22.onPress(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r22 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("className", "am-modal-button")("ngStyle", button_r22.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r22.text, " ");
} }
function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "div");
    ɵngcc0.ɵɵelementStart(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, ModalComponent_div_0_div_5_Template, 3, 6, "div", 6);
    ɵngcc0.ɵɵtemplate(6, ModalComponent_div_0_div_6_Template, 3, 5, "div", 7);
    ɵngcc0.ɵɵelementStart(7, "div");
    ɵngcc0.ɵɵprojection(8);
    ɵngcc0.ɵɵtemplate(9, ModalComponent_div_0_div_9_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(10, ModalComponent_div_0_10_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(11, ModalComponent_div_0_11_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(12, ModalComponent_div_0_12_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(13, ModalComponent_div_0_13_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "div");
    ɵngcc0.ɵɵelementStart(15, "div", 8);
    ɵngcc0.ɵɵtemplate(16, ModalComponent_div_0_div_16_Template, 2, 3, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-mask ", ctx_r0.maskTransitionName, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-wrap ", ctx_r0.transitionName, "");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.option.prefixCls);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.cls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.closable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isNoTitle(ctx_r0.option.title));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "default");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "secure-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "login-password");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-footer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.btnGroupClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.option.footer);
} }
function ModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return (ctx_r26.option.defaultValue[0] = $event); })("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.inputChange("text", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 16);
    ɵngcc0.ɵɵelementStart(5, "input", 17, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return (ctx_r29.option.defaultValue[1] = $event); })("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.inputChange("password", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "text")("placeholder", ctx_r2.option.placeholders[0] || "")("ngModel", ctx_r2.option.defaultValue[0]);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r2.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "password")("placeholder", ctx_r2.option.placeholders[1] || "")("ngModel", ctx_r2.option.defaultValue[1]);
} }
function ModalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return (ctx_r32.option.defaultValue[0] = $event); })("ngModelChange", function ModalComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.inputChange("password", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r4.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r4.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "password")("placeholder", ctx_r4.option.placeholders[0] || "")("ngModel", ctx_r4.option.defaultValue[0]);
} }
function ModalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return (ctx_r36.option.defaultValue[0] = $event); })("ngModelChange", function ModalComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.inputChange("text", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r6.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r6.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "text")("placeholder", ctx_r6.option.placeholders[0] || "")("ngModel", ctx_r6.option.defaultValue[0]);
} }
const _c0 = ["*"];
function ModalServiceComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelement(2, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close-x");
} }
function ModalServiceComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.option.title);
} }
function ModalServiceComponent_div_0_div_6_2_ng_template_0_Template(rf, ctx) { }
function ModalServiceComponent_div_0_div_6_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r16.option.title);
} }
function ModalServiceComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ModalServiceComponent_div_0_div_6_div_1_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(2, ModalServiceComponent_div_0_div_6_2_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.option.title));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.option.title));
} }
function ModalServiceComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.option.prefixCls, "-alert-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.option.message, " ");
} }
function ModalServiceComponent_div_0_10_ng_template_0_Template(rf, ctx) { }
function ModalServiceComponent_div_0_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_10_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.option.message);
} }
function ModalServiceComponent_div_0_11_ng_template_0_Template(rf, ctx) { }
function ModalServiceComponent_div_0_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_11_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function ModalServiceComponent_div_0_12_ng_template_0_Template(rf, ctx) { }
function ModalServiceComponent_div_0_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_12_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ModalServiceComponent_div_0_13_ng_template_0_Template(rf, ctx) { }
function ModalServiceComponent_div_0_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_13_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function ModalServiceComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("onClick", function ModalServiceComponent_div_0_div_16_Template_div_onClick_0_listener() { const button_r22 = ctx.$implicit; return button_r22.onPress(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r22 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("className", "am-modal-button")("ngStyle", button_r22.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r22.text, " ");
} }
function ModalServiceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "div");
    ɵngcc0.ɵɵelementStart(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, ModalServiceComponent_div_0_div_5_Template, 3, 6, "div", 6);
    ɵngcc0.ɵɵtemplate(6, ModalServiceComponent_div_0_div_6_Template, 3, 5, "div", 7);
    ɵngcc0.ɵɵelementStart(7, "div");
    ɵngcc0.ɵɵprojection(8);
    ɵngcc0.ɵɵtemplate(9, ModalServiceComponent_div_0_div_9_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(10, ModalServiceComponent_div_0_10_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(11, ModalServiceComponent_div_0_11_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(12, ModalServiceComponent_div_0_12_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵtemplate(13, ModalServiceComponent_div_0_13_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "div");
    ɵngcc0.ɵɵelementStart(15, "div", 8);
    ɵngcc0.ɵɵtemplate(16, ModalServiceComponent_div_0_div_16_Template, 2, 3, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-mask ", ctx_r0.maskTransitionName, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-wrap ", ctx_r0.transitionName, "");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.option.prefixCls);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.cls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.closable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isNoTitle(ctx_r0.option.title));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "default");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "secure-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.type === "login-password");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-footer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.btnGroupClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.option.footer);
} }
function ModalServiceComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return (ctx_r26.option.defaultValue[0] = $event); })("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.inputChange("text", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 16);
    ɵngcc0.ɵɵelementStart(5, "input", 17, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return (ctx_r29.option.defaultValue[1] = $event); })("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.inputChange("password", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "text")("placeholder", ctx_r2.option.placeholders[0] || "")("ngModel", ctx_r2.option.defaultValue[0]);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r2.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "password")("placeholder", ctx_r2.option.placeholders[1] || "")("ngModel", ctx_r2.option.defaultValue[1]);
} }
function ModalServiceComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return (ctx_r32.option.defaultValue[0] = $event); })("ngModelChange", function ModalServiceComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.inputChange("password", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r4.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r4.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "password")("placeholder", ctx_r4.option.placeholders[0] || "")("ngModel", ctx_r4.option.defaultValue[0]);
} }
function ModalServiceComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "input", 14, 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return (ctx_r36.option.defaultValue[0] = $event); })("ngModelChange", function ModalServiceComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.inputChange("text", $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r6.option.prefixCls, "-input-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate1("className", "", ctx_r6.option.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", "text")("placeholder", ctx_r6.option.placeholders[0] || "")("ngModel", ctx_r6.option.defaultValue[0]);
} }
export class ModalComponent extends ModalRef {
    constructor(option, elementRef) {
        super();
        this.option = option;
        this.elementRef = elementRef;
        this.autoFocus = { focus: true, date: new Date() };
        this.transitionName = '';
        this.maskTransitionName = '';
        this.wrapCls = {};
        this.cls = {};
        this.btnGroupClass = {};
        this.data = {
            text: '',
            password: ''
        };
        this.onClose = new EventEmitter();
        this.afterOpenEmitter = new EventEmitter();
        this.afterCloseEmitter = new EventEmitter();
    }
    set title(value) {
        this.option.title = value;
    }
    set closable(value) {
        this.option.closable = value;
    }
    set maskClosable(value) {
        this.option.maskClosable = value;
    }
    set popup(value) {
        this.option.popup = value;
        this.setClassMap();
    }
    set animationType(value) {
        this.option.animationType = value;
        this.setClassMap();
    }
    set transparent(value) {
        this.option.transparent = value;
        this.setClassMap();
    }
    set footer(value) {
        this.option.footer = value;
    }
    set platform(value) {
        this.option.platform = value;
        this.setClassMap();
    }
    set className(value) {
        this.option.className = value;
        this.setClassMap();
    }
    set wrapClassName(value) {
        this.option.wrapClassName = value;
        this.setClassMap();
    }
    set actions(value) {
        this.option.footer = value;
        this.setClassMap();
    }
    set defaultValue(value) {
        this.option.defaultValue = value !== undefined ? value : ['', ''];
    }
    set type(value) {
        this.option.type = value;
    }
    set placeholders(value) {
        this.option.placeholders = value;
    }
    set operation(value) {
        this.option.operation = value;
        this.setClassMap();
    }
    panend(event) {
        if (this.option.closable || this.option.maskClosable) {
            if ((event && event.target && event.target.getAttribute('role') === 'dialog') ||
                event.target.getAttribute('role') === 'close') {
                event.preventDefault();
                event.stopPropagation();
                if (this.option.close) {
                    this.option.close();
                }
                else {
                    this.onClose.emit();
                    this.leaveAnimation();
                }
            }
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    setTransitionName(visible) {
        if (!visible) {
            this.leaveAnimation();
        }
        else {
            if (this.option.animated) {
                if (this.option.transparent) {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-fade');
                    }
                }
                else {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-slide-up');
                    }
                }
                if (this.option.popup) {
                    this.transitionName =
                        this.option.animationType === 'slide-up'
                            ? this.setActiveName('am-slide-up')
                            : this.setActiveName('am-slide-down');
                    this.maskTransitionName = this.setActiveName('am-fade');
                }
            }
            this.setClassMap();
        }
    }
    setActiveName(name) {
        return name.length > 0 ? `${name}-enter ${name}-enter-active` : null;
    }
    setLeaveActiveName(name) {
        return name.length > 0 ? `${name}-leave ${name}-leave-active` : null;
    }
    setClassMap() {
        this.wrapCls = {
            [this.option.wrapClassName]: true,
            [`${this.option.prefixCls}-wrap-popup`]: this.option.popup
        };
        this.cls = {
            [this.option.className]: true,
            [`${this.option.prefixCls}-transparent`]: this.option.transparent,
            [`${this.option.prefixCls}-popup`]: this.option.popup,
            [`${this.option.prefixCls}-popup-${this.option.animationType}`]: this.option.popup && this.option.animationType,
            [`${this.option.prefixCls}-android`]: this.option.platform === 'android'
        };
        this.btnGroupClass = {
            [`${this.option.prefixCls}-button-group-${this.option.footer.length === 2 && !this.option.operation ? 'h' : 'v'}`]: true,
            [`${this.option.prefixCls}-button-group-${this.option.operation ? 'operation' : 'normal'}`]: true
        };
    }
    inputChange(type, value) {
        this.data[type] = value;
    }
    leaveAnimation() {
        if (this.option.animated) {
            if (this.option.transparent) {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-fade');
                }
            }
            else {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-slide-up');
                }
            }
            if (this.option.popup) {
                this.transitionName =
                    this.option.animationType === 'slide-up'
                        ? this.setLeaveActiveName('am-slide-up')
                        : this.setLeaveActiveName('am-slide-down');
                this.maskTransitionName = this.setLeaveActiveName('am-fade');
            }
        }
        setTimeout(() => {
            this.option.visible = false;
            if (this.onChanged) {
                this.onChanged(this.option.visible);
            }
        }, 200);
    }
    writeValue(value) {
        if (value) {
            this.option.visible = value;
        }
        this.setTransitionName(value);
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    get afterOpen() {
        return this.afterOpenEmitter.asObservable();
    }
    get afterClose() {
        return this.afterCloseEmitter.asObservable();
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.closeWithAnimation) {
            this.option.closeWithAnimation();
        }
        else {
            this.onClose.emit();
            this.leaveAnimation();
        }
    }
    triggerOk() {
        if (this.option.footer.length > 1) {
            const button = this.option.footer[1];
            button.onPress();
        }
    }
    triggerCancel() {
        if (this.option.footer.length > 0) {
            const button = this.option.footer[0];
            button.onPress();
        }
    }
    destroy() {
        this.close();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["Modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseup", function ModalComponent_mouseup_HostBindingHandler($event) { return ctx.panend($event); })("touchend", function ModalComponent_touchend_HostBindingHandler($event) { return ctx.panend($event); });
    } }, inputs: { title: "title", closable: "closable", maskClosable: "maskClosable", popup: "popup", animationType: "animationType", transparent: "transparent", footer: "footer", platform: "platform", className: "className", wrapClassName: "wrapClassName", actions: "actions", defaultValue: "defaultValue", type: "type", placeholders: "placeholders", operation: "operation" }, outputs: { onClose: "onClose", afterOpenEmitter: "afterOpenEmitter", afterCloseEmitter: "afterCloseEmitter" }, features: [ɵngcc0.ɵɵProvidersFeature([
            ModalOptions,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ModalComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[4, "ngIf"], ["promptPassword", ""], ["promptSecure", ""], ["promptDefault", ""], ["role", "dialog", 3, "ngClass"], ["role", "document", 3, "ngClass"], ["style", "width: 100%; height: 21px;", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "group", 3, "ngClass"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "21px"], ["role", "close"], [3, "ngTemplateOutlet"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick"], ["autofocus", "", 3, "type", "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [3, "className"], [3, "type", "placeholder", "ngModel", "ngModelChange"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ModalComponent_div_0_Template, 17, 31, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ModalComponent_ng_template_1_Template, 7, 13, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, ModalComponent_ng_template_3_Template, 4, 5, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, ModalComponent_ng_template_5_Template, 4, 5, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.option.visible);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc3.ButtonComponent, ɵngcc2.NgStyle, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], encapsulation: 2 });
ModalComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    title: [{ type: Input }],
    closable: [{ type: Input }],
    maskClosable: [{ type: Input }],
    popup: [{ type: Input }],
    animationType: [{ type: Input }],
    transparent: [{ type: Input }],
    footer: [{ type: Input }],
    platform: [{ type: Input }],
    className: [{ type: Input }],
    wrapClassName: [{ type: Input }],
    actions: [{ type: Input }],
    defaultValue: [{ type: Input }],
    type: [{ type: Input }],
    placeholders: [{ type: Input }],
    operation: [{ type: Input }],
    onClose: [{ type: Output }],
    afterOpenEmitter: [{ type: Output }],
    afterCloseEmitter: [{ type: Output }],
    panend: [{ type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: 'Modal',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    ModalOptions,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ModalComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc1.ModalOptions }, { type: ɵngcc0.ElementRef }]; }, { onClose: [{
            type: Output
        }], afterOpenEmitter: [{
            type: Output
        }], afterCloseEmitter: [{
            type: Output
        }], title: [{
            type: Input
        }], closable: [{
            type: Input
        }], maskClosable: [{
            type: Input
        }], popup: [{
            type: Input
        }], animationType: [{
            type: Input
        }], transparent: [{
            type: Input
        }], footer: [{
            type: Input
        }], platform: [{
            type: Input
        }], className: [{
            type: Input
        }], wrapClassName: [{
            type: Input
        }], actions: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], type: [{
            type: Input
        }], placeholders: [{
            type: Input
        }], operation: [{
            type: Input
        }], panend: [{
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['touchend', ['$event']]
        }] }); })();
export class ModalServiceComponent extends ModalComponent {
    constructor(option, elementRef) {
        super(option, elementRef);
        this.option = option;
        this.elementRef = elementRef;
        this.setTransitionName(this.option.visible);
    }
}
ModalServiceComponent.ɵfac = function ModalServiceComponent_Factory(t) { return new (t || ModalServiceComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ModalServiceComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalServiceComponent, selectors: [["ModalService"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[4, "ngIf"], ["promptPassword", ""], ["promptSecure", ""], ["promptDefault", ""], ["role", "dialog", 3, "ngClass"], ["role", "document", 3, "ngClass"], ["style", "width: 100%; height: 21px;", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "group", 3, "ngClass"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "21px"], ["role", "close"], [3, "ngTemplateOutlet"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick"], ["autofocus", "", 3, "type", "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [3, "className"], [3, "type", "placeholder", "ngModel", "ngModelChange"]], template: function ModalServiceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ModalServiceComponent_div_0_Template, 17, 31, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ModalServiceComponent_ng_template_1_Template, 7, 13, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, ModalServiceComponent_ng_template_3_Template, 4, 5, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, ModalServiceComponent_ng_template_5_Template, 4, 5, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.option.visible);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc3.ButtonComponent, ɵngcc2.NgStyle, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], encapsulation: 2 });
ModalServiceComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalServiceComponent, [{
        type: Component,
        args: [{
                selector: 'ModalService',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.ModalOptions }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM3QyxNQUFNLE9BQU8sY0FBaUMsU0FBUSxRQUFjO0FBQUcsSUErR3JFLFlBQW1CLE1BQW9CLEVBQVMsVUFBc0I7QUFDeEUsUUFBSSxLQUFLLEVBQUUs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QUNoRCxJQUFFLENBQUM7QUFDSDtpREFWQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCOzs7Ozs7Ozs7OE5BR0c7QUFBQztBQUErQyxZQS9TNUMsWUFBWTtBQUFJLFlBTnZCLFVBQVU7QUFDWDs7Ozs7bW5EQWlUc0Msa0JBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7MEdBblRFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZi5jbGFzcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdNb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIE1vZGFsT3B0aW9ucyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1vZGFsQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTW9kYWxSZWY8VCwgUj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGF1dG9Gb2N1cyA9IHsgZm9jdXM6IHRydWUsIGRhdGU6IG5ldyBEYXRlKCkgfTtcbiAgdHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICcnO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICcnO1xuICB3cmFwQ2xzOiBvYmplY3QgPSB7fTtcbiAgY2xzOiBvYmplY3QgPSB7fTtcbiAgYnRuR3JvdXBDbGFzczogb2JqZWN0ID0ge307XG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG4gIH07XG5cbiAgb25DaGFuZ2VkOiAodmlzaWFibGU6IGJvb2xlYW4pID0+IHt9O1xuICBvblRvdWNoZWQ6ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMub3B0aW9uLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5jbG9zYWJsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtYXNrQ2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5tYXNrQ2xvc2FibGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcG9wdXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5wb3B1cCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb24uYW5pbWF0aW9uVHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdHJhbnNwYXJlbnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi50cmFuc3BhcmVudCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9vdGVyKHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5vcHRpb24uZm9vdGVyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBsYXRmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi5wbGF0Zm9ybSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdyYXBDbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9uLndyYXBDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFjdGlvbnModmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLm9wdGlvbi5mb290ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMub3B0aW9uLmRlZmF1bHRWYWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IFsnJywgJyddO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi50eXBlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVycyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMub3B0aW9uLnBsYWNlaG9sZGVycyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvcGVyYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5vcGVyYXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYWZ0ZXJPcGVuRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlckNsb3NlRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uLmNsb3NhYmxlIHx8IHRoaXMub3B0aW9uLm1hc2tDbG9zYWJsZSkge1xuICAgICAgaWYgKFxuICAgICAgICAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2RpYWxvZycpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2Nsb3NlJ1xuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uY2xvc2UpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbi5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbjogTW9kYWxPcHRpb25zLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBpc05vVGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uTmFtZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmxlYXZlQW5pbWF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbi5hbmltYXRlZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24udHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZXRBY3RpdmVOYW1lKHRoaXMub3B0aW9uLnRyYW5zaXRpb25OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi5tYXNrVHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLWZhZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUodGhpcy5vcHRpb24ubWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRBY3RpdmVOYW1lKCdhbS1zbGlkZS11cCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb24ucG9wdXApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID1cbiAgICAgICAgICAgIHRoaXMub3B0aW9uLmFuaW1hdGlvblR5cGUgPT09ICdzbGlkZS11cCdcbiAgICAgICAgICAgICAgPyB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLXNsaWRlLXVwJylcbiAgICAgICAgICAgICAgOiB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLXNsaWRlLWRvd24nKTtcbiAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSgnYW0tZmFkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwID8gYCR7bmFtZX0tZW50ZXIgJHtuYW1lfS1lbnRlci1hY3RpdmVgIDogbnVsbDtcbiAgfVxuXG4gIHNldExlYXZlQWN0aXZlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwID8gYCR7bmFtZX0tbGVhdmUgJHtuYW1lfS1sZWF2ZS1hY3RpdmVgIDogbnVsbDtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCkge1xuICAgIHRoaXMud3JhcENscyA9IHtcbiAgICAgIFt0aGlzLm9wdGlvbi53cmFwQ2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLm9wdGlvbi5wcmVmaXhDbHN9LXdyYXAtcG9wdXBgXTogdGhpcy5vcHRpb24ucG9wdXBcbiAgICB9O1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBbdGhpcy5vcHRpb24uY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLm9wdGlvbi5wcmVmaXhDbHN9LXRyYW5zcGFyZW50YF06IHRoaXMub3B0aW9uLnRyYW5zcGFyZW50LFxuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tcG9wdXBgXTogdGhpcy5vcHRpb24ucG9wdXAsXG4gICAgICBbYCR7dGhpcy5vcHRpb24ucHJlZml4Q2xzfS1wb3B1cC0ke3RoaXMub3B0aW9uLmFuaW1hdGlvblR5cGV9YF06IHRoaXMub3B0aW9uLnBvcHVwICYmIHRoaXMub3B0aW9uLmFuaW1hdGlvblR5cGUsXG4gICAgICBbYCR7dGhpcy5vcHRpb24ucHJlZml4Q2xzfS1hbmRyb2lkYF06IHRoaXMub3B0aW9uLnBsYXRmb3JtID09PSAnYW5kcm9pZCdcbiAgICB9O1xuXG4gICAgdGhpcy5idG5Hcm91cENsYXNzID0ge1xuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tYnV0dG9uLWdyb3VwLSR7XG4gICAgICAgIHRoaXMub3B0aW9uLmZvb3Rlci5sZW5ndGggPT09IDIgJiYgIXRoaXMub3B0aW9uLm9wZXJhdGlvbiA/ICdoJyA6ICd2J1xuICAgICAgfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tYnV0dG9uLWdyb3VwLSR7dGhpcy5vcHRpb24ub3BlcmF0aW9uID8gJ29wZXJhdGlvbicgOiAnbm9ybWFsJ31gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBpbnB1dENoYW5nZSh0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFbdHlwZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGxlYXZlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbi5hbmltYXRlZCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNldExlYXZlQWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSkpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgIHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24ubWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldExlYXZlQWN0aXZlTmFtZSgnYW0tZmFkZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKHRoaXMub3B0aW9uLnRyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKHRoaXMub3B0aW9uLm1hc2tUcmFuc2l0aW9uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUoJ2FtLXNsaWRlLXVwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbi5wb3B1cCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbi5hbmltYXRpb25UeXBlID09PSAnc2xpZGUtdXAnXG4gICAgICAgICAgICA/IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKCdhbS1zbGlkZS11cCcpXG4gICAgICAgICAgICA6IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKCdhbS1zbGlkZS1kb3duJyk7XG4gICAgICAgIHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUoJ2FtLWZhZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy5vcHRpb24udmlzaWJsZSk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9uLnZpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uTmFtZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJPcGVuRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLmFmdGVyQ2xvc2VFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTW9kYWxDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbi5jbG9zZVdpdGhBbmltYXRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uLmNsb3NlV2l0aEFuaW1hdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb24uZm9vdGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMub3B0aW9uLmZvb3RlclsxXTtcbiAgICAgIGJ1dHRvbi5vblByZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb24uZm9vdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMub3B0aW9uLmZvb3RlclswXTtcbiAgICAgIGJ1dHRvbi5vblByZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTW9kYWxTZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2VDb21wb25lbnQgZXh0ZW5kcyBNb2RhbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb246IE1vZGFsT3B0aW9ucywgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihvcHRpb24sIGVsZW1lbnRSZWYpO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUodGhpcy5vcHRpb24udmlzaWJsZSk7XG4gIH1cbn1cbiJdfQ==