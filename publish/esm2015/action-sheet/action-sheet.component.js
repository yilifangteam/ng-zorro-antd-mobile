import { Component, ElementRef, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { ActionSheetRef } from './action-sheet-ref.class';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../locale-provider/locale-provider.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../core/directive/touch-feedback.directive';
import * as ɵngcc4 from '../pipes/save-html';

function ActionSheetComponent_ng_container_8_1_ng_template_0_Template(rf, ctx) { }
function ActionSheetComponent_ng_container_8_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ActionSheetComponent_ng_container_8_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.option.title);
} }
function ActionSheetComponent_ng_container_8_h3_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.option.prefixCls, "-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.option.title);
} }
function ActionSheetComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_ng_container_8_1_Template, 1, 1, undefined, 3);
    ɵngcc0.ɵɵtemplate(2, ActionSheetComponent_ng_container_8_h3_2_Template, 2, 4, "h3", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.title));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.title));
} }
function ActionSheetComponent_ng_container_9_1_ng_template_0_Template(rf, ctx) { }
function ActionSheetComponent_ng_container_9_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ActionSheetComponent_ng_container_9_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.option.message);
} }
function ActionSheetComponent_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-message");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r8.option.message, " ");
} }
function ActionSheetComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_ng_container_9_1_Template, 1, 1, undefined, 3);
    ɵngcc0.ɵɵtemplate(2, ActionSheetComponent_ng_container_9_div_2_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isTemplateRef(ctx_r1.option.message));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.isTemplateRef(ctx_r1.option.message));
} }
function ActionSheetComponent_div_11_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const i_r12 = ɵngcc0.ɵɵnextContext().index; const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.option.onPress(i_r12, 0, $event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r13.option.prefixCls, "-button-list-item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function ActionSheetComponent_div_11_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_3_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const i_r12 = ɵngcc0.ɵɵnextContext().index; const ctx_r20 = ɵngcc0.ɵɵnextContext(2); return ctx_r20.option.onPress(i_r12, 0, $event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r14.option.prefixCls, "-button-list-item ", ctx_r14.option.prefixCls, "-destructive-button");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function ActionSheetComponent_div_11_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_4_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const i_r12 = ɵngcc0.ɵɵnextContext().index; const ctx_r24 = ɵngcc0.ɵɵnextContext(2); return ctx_r24.option.onPress(i_r12, 0, $event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelement(2, "span");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r15.option.prefixCls, "-button-list-item ", ctx_r15.option.prefixCls, "-cancel-button");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-cancel-button-mask");
} }
function ActionSheetComponent_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtemplate(2, ActionSheetComponent_div_11_ng_container_1_div_2_Template, 2, 4, "div", 12);
    ɵngcc0.ɵɵtemplate(3, ActionSheetComponent_div_11_ng_container_1_div_3_Template, 2, 5, "div", 12);
    ɵngcc0.ɵɵtemplate(4, ActionSheetComponent_div_11_ng_container_1_div_4_Template, 3, 8, "div", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r10.option.prefixCls, "-button-list-item");
    ɵngcc0.ɵɵproperty("className", ctx_r10.setActiveClassName(ctx_r10.option, "button-list-item"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.option.destructiveButtonIndex !== i_r12 && ctx_r10.option.cancelButtonIndex !== i_r12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.option.destructiveButtonIndex === i_r12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.option.cancelButtonIndex === i_r12);
} }
function ActionSheetComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_div_11_ng_container_1_Template, 5, 7, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-button-list");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.option.options);
} }
function ActionSheetComponent_div_12_div_1_ng_container_1_3_ng_template_0_Template(rf, ctx) { }
function ActionSheetComponent_div_12_div_1_ng_container_1_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ActionSheetComponent_div_12_div_1_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    const item_r31 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r31.icon);
} }
function ActionSheetComponent_div_12_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 15);
    ɵngcc0.ɵɵpipe(1, "safeHTML");
} if (rf & 2) {
    const item_r31 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind1(1, 1, item_r31.icon), ɵngcc0.ɵɵsanitizeHtml);
} }
function ActionSheetComponent_div_12_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_div_12_div_1_ng_container_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const i_r32 = ctx.index; const ctx_r38 = ɵngcc0.ɵɵnextContext(3); return ctx_r38.option.onPress(i_r32, 0, $event); });
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, ActionSheetComponent_div_12_div_1_ng_container_1_3_Template, 1, 1, undefined, 3);
    ɵngcc0.ɵɵtemplate(4, ActionSheetComponent_div_12_div_1_ng_container_1_div_4_Template, 2, 3, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r30 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item-icon");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r30.isTemplateRef(item_r31.icon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r30.isTemplateRef(item_r31.icon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r31.title);
} }
function ActionSheetComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_div_12_div_1_ng_container_1_Template, 7, 12, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r28.option.prefixCls, "-share-list");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r28.option.options);
} }
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_ng_template_0_Template(rf, ctx) { }
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    const item_r44 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r44.icon);
} }
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 15);
    ɵngcc0.ɵɵpipe(1, "safeHTML");
} if (rf & 2) {
    const item_r44 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind1(1, 1, item_r44.icon), ɵngcc0.ɵɵsanitizeHtml);
} }
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const i_r45 = ctx.index; const rowIndex_r42 = ɵngcc0.ɵɵnextContext().index; const ctx_r51 = ɵngcc0.ɵɵnextContext(3); return ctx_r51.option.onPress(i_r45, rowIndex_r42, $event); });
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_Template, 1, 1, undefined, 3);
    ɵngcc0.ɵɵtemplate(4, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_div_4_Template, 2, 3, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const ctx_r43 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item-icon");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r43.isTemplateRef(item_r44.icon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r43.isTemplateRef(item_r44.icon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item-title");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r44.title);
} }
function ActionSheetComponent_div_12_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template, 7, 12, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r41 = ctx.$implicit;
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r40.option.prefixCls, "-share-list");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", items_r41);
} }
function ActionSheetComponent_div_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_div_12_ng_container_2_div_1_Template, 2, 4, "div", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r29.option.options);
} }
function ActionSheetComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, ActionSheetComponent_div_12_div_1_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵtemplate(2, ActionSheetComponent_div_12_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 11);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r3.option.prefixCls, "-share ", ctx_r3.option.prefixCls, "-share-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.isArray(ctx_r3.option.options, ctx_r3.option.options[0]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isArray(ctx_r3.option.options, ctx_r3.option.options[0]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.option.prefixCls, "-share-cancel-button");
    ɵngcc0.ɵɵproperty("className", ctx_r3.setActiveClassName(ctx_r3.option, "share-cancel-button"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.option.cancelButtonText, " ");
} }
export class ActionSheetComponent extends ActionSheetRef {
    constructor(localeProviderService, elementRef) {
        super();
        this.localeProviderService = localeProviderService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
    }
    ngOnInit() {
        this.localeProvider();
    }
    localeProvider() {
        const self = this;
        if (self.option.locale || self.option.locale !== undefined) {
            self.localeProviderService.setLocale(self.option.locale);
        }
        self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
            if (self.option.cancelButtonText) {
                self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj('ActionSheet')['dismissText'];
            }
        });
    }
    onPress(index, rowIndex = 0, event) { }
    showShare(option) {
        const cls = { [`${option.prefixCls}-share`]: option.flag === 'SHARE' };
        return cls;
    }
    setActiveClassName(option, suffix) {
        return [`${option.prefixCls}-${suffix}-active`];
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isArray(options, value) {
        if (options.length > 0 && value) {
            return value instanceof Array;
        }
        return false;
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.close) {
            this.option.close();
        }
    }
    destroy() {
        this.close();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ActionSheetComponent.ɵfac = function ActionSheetComponent_Factory(t) { return new (t || ActionSheetComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ActionSheetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ActionSheetComponent, selectors: [["ActionSheet"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 13, vars: 29, consts: [["role", "dialog", 3, "click"], ["role", "document", 3, "ngClass"], ["aria-label", "Close"], [4, "ngIf"], [3, "ngSwitch"], ["role", "group", 3, "class", 4, "ngSwitchCase"], [3, "class", 4, "ngSwitchCase"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["role", "group"], [4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "className"], [3, "class", "click", 4, "ngIf"], [3, "click"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "class", 4, "ngFor", "ngForOf"]], template: function ActionSheetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵlistener("click", function ActionSheetComponent_Template_div_click_1_listener($event) { return ctx.option.maskClose(-1, 0, $event); });
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵelementStart(4, "button", 2);
        ɵngcc0.ɵɵelement(5, "span");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div");
        ɵngcc0.ɵɵelementStart(7, "div");
        ɵngcc0.ɵɵtemplate(8, ActionSheetComponent_ng_container_8_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(9, ActionSheetComponent_ng_container_9_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵelementContainerStart(10, 4);
        ɵngcc0.ɵɵtemplate(11, ActionSheetComponent_div_11_Template, 2, 4, "div", 5);
        ɵngcc0.ɵɵtemplate(12, ActionSheetComponent_div_12_Template, 5, 11, "div", 6);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.option.prefixCls, "-mask ", ctx.option.maskTransitionName, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.option.prefixCls, "-wrap ", ctx.option.transitionName, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.option.prefixCls);
        ɵngcc0.ɵɵproperty("ngClass", ctx.showShare(ctx.option));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-close");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-close-x");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-body");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isNoTitle(ctx.option.title));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isNoTitle(ctx.option.message));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.option.flag);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "NORMAL");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "SHARE");
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc3.TouchFeedbackDirective], pipes: [ɵngcc4.SafeHTMLPipe], encapsulation: 2 });
ActionSheetComponent.ctorParameters = () => [
    { type: LocaleProviderService },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActionSheetComponent, [{
        type: Component,
        args: [{
                selector: 'ActionSheet',
                template: "<div class=\"{{ option.prefixCls }}-mask {{ option.maskTransitionName }}\"></div>\n<div\n  role=\"dialog\"\n  class=\"{{ option.prefixCls }}-wrap {{ option.transitionName }}\"\n  (click)=\"option.maskClose(-1, 0, $event)\"\n>\n  <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"showShare(option)\">\n    <div class=\"{{ option.prefixCls }}-content\">\n      <button aria-label=\"Close\" class=\"{{ option.prefixCls }}-close\">\n        <span class=\"{{ option.prefixCls }}-close-x\"></span>\n      </button>\n      <div class=\"{{ option.prefixCls }}-body\">\n        <div>\n          <ng-container *ngIf=\"!isNoTitle(option.title)\">\n            <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n            <h3 *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</h3>\n          </ng-container>\n          <ng-container *ngIf=\"!isNoTitle(option.message)\">\n            <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n            <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-message\">\n              {{ option.message }}\n            </div>\n          </ng-container>\n          <ng-container [ngSwitch]=\"option.flag\">\n            <div *ngSwitchCase=\"'NORMAL'\" class=\"{{ option.prefixCls }}-button-list\" role=\"group\">\n              <ng-container *ngFor=\"let item of option.options; let i = index\">\n                <div\n                  TouchFeedbackDirective\n                  class=\"{{ option.prefixCls }}-button-list-item\"\n                  [className]=\"setActiveClassName(option, 'button-list-item')\"\n                >\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex !== i && option.cancelButtonIndex !== i\"\n                    class=\"{{ option.prefixCls }}-button-list-item\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.destructiveButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-destructive-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                  </div>\n                  <div\n                    *ngIf=\"option.cancelButtonIndex === i\"\n                    class=\"{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-cancel-button\"\n                    (click)=\"option.onPress(i, 0, $event)\"\n                  >\n                    {{ item }}\n                    <span class=\"{{ option.prefixCls }}-cancel-button-mask\"></span>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div *ngSwitchCase=\"'SHARE'\" class=\"{{ option.prefixCls }}-share {{ option.prefixCls }}-share-content\">\n              <div *ngIf=\"!isArray(option.options, option.options[0])\" class=\"{{ option.prefixCls }}-share-list\">\n                <ng-container *ngFor=\"let item of option.options; let i = index\">\n                  <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, 0, $event)\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                      <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                      <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                    </div>\n                    <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                  </div>\n                </ng-container>\n              </div>\n              <ng-container *ngIf=\"isArray(option.options, option.options[0])\">\n                <div\n                  *ngFor=\"let items of option.options; let rowIndex = index\"\n                  class=\"{{ option.prefixCls }}-share-list\"\n                >\n                  <ng-container *ngFor=\"let item of items; let i = index\">\n                    <div class=\"{{ option.prefixCls }}-share-list-item\" (click)=\"option.onPress(i, rowIndex, $event)\">\n                      <div class=\"{{ option.prefixCls }}-share-list-item-icon\">\n                        <ng-template *ngIf=\"isTemplateRef(item.icon)\" [ngTemplateOutlet]=\"item.icon\"></ng-template>\n                        <div *ngIf=\"!isTemplateRef(item.icon)\" [innerHTML]=\"item.icon | safeHTML\"></div>\n                      </div>\n                      <div class=\"{{ option.prefixCls }}-share-list-item-title\">{{ item.title }}</div>\n                    </div>\n                  </ng-container>\n                </div>\n              </ng-container>\n              <div\n                TouchFeedbackDirective\n                [className]=\"setActiveClassName(option, 'share-cancel-button')\"\n                class=\"{{ option.prefixCls }}-share-cancel-button\"\n              >\n                {{ option.cancelButtonText }}\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY3Rpb24tc2hlZXQvYWN0aW9uLXNoZWV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsU0FBUyxFQUFhLFVBQVUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFELE1BQU0sT0FBTyxvQkFBdUMsU0FBUSxjQUFvQjtBQUFHLElBR2pGLFlBQW9CLHFCQUE0QyxFQUFTLFVBQXNCO0FBQ2pHLFFBQUksS0FBSyxFQUFFLENBQUM7QUFDWixRQUZzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0FBQUMsUUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFGaEcsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3JDLElBR0UsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNW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Q0g7Z0RBM0VDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsYUFBYSxrQkFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvTkFHRztBQUFDO0FBQThDLFlBUDNDLHFCQUFxQjtBQUFJLFlBSEssVUFBVTtBQUFHOzs7Ozt3akRBT04sa0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7bUhBVHFEO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIENvbXBvbmVudCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3Rpb25TaGVldFJlZiB9IGZyb20gJy4vYWN0aW9uLXNoZWV0LXJlZi5jbGFzcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBY3Rpb25TaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tc2hlZXQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvblNoZWV0Q29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgQWN0aW9uU2hlZXRSZWY8VCwgUj4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG9wdGlvbjogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsZVByb3ZpZGVyU2VydmljZTogTG9jYWxlUHJvdmlkZXJTZXJ2aWNlLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvY2FsZVByb3ZpZGVyKCk7XG4gIH1cblxuICBsb2NhbGVQcm92aWRlcigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5vcHRpb24ubG9jYWxlIHx8IHNlbGYub3B0aW9uLmxvY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxmLmxvY2FsZVByb3ZpZGVyU2VydmljZS5zZXRMb2NhbGUoc2VsZi5vcHRpb24ubG9jYWxlKTtcbiAgICB9XG4gICAgc2VsZi5sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHNlbGYudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgaWYgKHNlbGYub3B0aW9uLmNhbmNlbEJ1dHRvblRleHQpIHtcbiAgICAgICAgc2VsZi5vcHRpb24uY2FuY2VsQnV0dG9uVGV4dCA9IHNlbGYubG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmdldExvY2FsZVN1Yk9iaignQWN0aW9uU2hlZXQnKVsnZGlzbWlzc1RleHQnXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUHJlc3MoaW5kZXg6IGFueSwgcm93SW5kZXggPSAwLCBldmVudCkge31cbiAgc2hvd1NoYXJlKG9wdGlvbikge1xuICAgIGNvbnN0IGNscyA9IHsgW2Ake29wdGlvbi5wcmVmaXhDbHN9LXNoYXJlYF06IG9wdGlvbi5mbGFnID09PSAnU0hBUkUnIH07XG4gICAgcmV0dXJuIGNscztcbiAgfVxuXG4gIHNldEFjdGl2ZUNsYXNzTmFtZShvcHRpb24sIHN1ZmZpeCkge1xuICAgIHJldHVybiBbYCR7b3B0aW9uLnByZWZpeENsc30tJHtzdWZmaXh9LWFjdGl2ZWBdO1xuICB9XG5cbiAgaXNOb1RpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgaXNBcnJheShvcHRpb25zOiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAob3B0aW9ucy5sZW5ndGggPiAwICYmIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogQWN0aW9uU2hlZXRDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbi5jbG9zZSkge1xuICAgICAgdGhpcy5vcHRpb24uY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=