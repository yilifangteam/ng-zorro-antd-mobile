import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["leftBtnRef"];
const _c1 = ["rightBtnRef"];
const _c2 = ["contentRef"];
const _c3 = ["coverRef"];
function SwipeActionComponent_div_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function SwipeActionComponent_div_0_div_3_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const btn_r11 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(3); return ctx_r12.onBtnClick($event, btn_r11); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const btn_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r10.prefixCls, "-btn ", btn_r11.className, "");
    ɵngcc0.ɵɵproperty("ngStyle", btn_r11.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r10.prefixCls, "-btn-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", btn_r11.text || "Click", " ");
} }
function SwipeActionComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", null, 8);
    ɵngcc0.ɵɵtemplate(2, SwipeActionComponent_div_0_div_3_div_2_Template, 3, 9, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r5.prefixCls, "-actions ", ctx_r5.prefixCls, "-actions-left");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.left);
} }
function SwipeActionComponent_div_0_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function SwipeActionComponent_div_0_div_4_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const btn_r16 = ctx.$implicit; const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.onBtnClick($event, btn_r16); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const btn_r16 = ctx.$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r15.prefixCls, "-btn ", btn_r16.className, "");
    ɵngcc0.ɵɵproperty("ngStyle", btn_r16.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r15.prefixCls, "-btn-text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", btn_r16.text || "Click", " ");
} }
function SwipeActionComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", null, 11);
    ɵngcc0.ɵɵtemplate(2, SwipeActionComponent_div_0_div_4_div_2_Template, 3, 9, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r6.prefixCls, "-actions ", ctx_r6.prefixCls, "-actions-right");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.right);
} }
function SwipeActionComponent_div_0_ng_template_7_Template(rf, ctx) { }
function SwipeActionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", null, 4);
    ɵngcc0.ɵɵtemplate(3, SwipeActionComponent_div_0_div_3_Template, 3, 5, "div", 1);
    ɵngcc0.ɵɵtemplate(4, SwipeActionComponent_div_0_div_4_Template, 3, 5, "div", 1);
    ɵngcc0.ɵɵelementStart(5, "div", 5, 6);
    ɵngcc0.ɵɵlistener("touchstart", function SwipeActionComponent_div_0_Template_div_touchstart_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onTouchStart($event); })("touchmove", function SwipeActionComponent_div_0_Template_div_touchmove_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onTouchMove($event); })("touchend", function SwipeActionComponent_div_0_Template_div_touchend_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onTouchEnd($event); });
    ɵngcc0.ɵɵtemplate(7, SwipeActionComponent_div_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-cover");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.left && ctx_r0.left.length > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.right && ctx_r0.right.length > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SwipeActionComponent_div_1_ng_template_2_Template(rf, ctx) { }
function SwipeActionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", null, 6);
    ɵngcc0.ɵɵtemplate(2, SwipeActionComponent_div_1_ng_template_2_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-content");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SwipeActionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c4 = ["*"];
export class SwipeActionComponent {
    constructor() {
        this.prefixCls = 'am-swipe';
        this.wrapCls = {};
        this._swiping = false;
        this._openedLeft = false;
        this._openedRight = false;
        this.left = [];
        this.right = [];
        this.autoClose = false;
        this.disabled = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onCloseSwipe = ev => {
            if (!(this._openedLeft || this._openedRight)) {
                return;
            }
            const pNode = ev.target.closest(`.${this.prefixCls}-actions`);
            if (!pNode) {
                this.close();
            }
        };
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-swiping`]: this._swiping
        };
    }
    close() {
        if (this._openedLeft || this._openedRight) {
            this.onClose.emit();
        }
        this.setBtnStyle(0);
        this._openedLeft = false;
        this._openedRight = false;
    }
    setBtnStyle(value) {
        if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
            this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
            this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        }
        const limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
        const contentLeft = this.getContentEasing(value, limit);
        this.content.nativeElement.style.left = `${contentLeft}px`;
        this.cover.nativeElement.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        this.cover.nativeElement.style.left = `${contentLeft}px`;
    }
    getContentEasing(value, limit) {
        return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
    }
    onTouchStart(e) {
        this._startX = e.changedTouches[0].clientX;
        this._swiping = true;
    }
    onTouchMove(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        this._needShowRight = deltaX < -5 && this.right.length > 0;
        this._needShowLeft = deltaX > 5 && this.left.length > 0;
        if (this.leftBtnRef) {
            this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? 'hidden' : 'visible';
        }
        if (this.rightBtnRef) {
            this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? 'hidden' : 'visible';
        }
        this.setBtnStyle(deltaX);
    }
    onTouchEnd(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        const needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
        const needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;
        if (needOpenRight) {
            this.doOpenRight();
        }
        else if (needOpenLeft) {
            this.doOpenLeft();
        }
        else {
            this.close();
        }
        this._swiping = false;
        this._needShowLeft = false;
        this._needShowRight = false;
    }
    doOpenLeft() {
        this.open(this._btnsLeftWidth, true, false);
    }
    doOpenRight() {
        this.open(-this._btnsRightWidth, false, true);
    }
    onBtnClick(ev, btn) {
        const onPress = btn.onPress;
        if (onPress) {
            onPress(ev);
        }
        if (this.autoClose) {
            this.close();
        }
    }
    open(value, openedLeft, openedRight) {
        this.onOpen.emit();
        this._openedLeft = openedLeft;
        this._openedRight = openedRight;
        this.setBtnStyle(value);
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
        this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        document.body.addEventListener('touchstart', this.onCloseSwipe, true);
    }
    ngOnDestroy() {
        document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
    }
}
SwipeActionComponent.ɵfac = function SwipeActionComponent_Factory(t) { return new (t || SwipeActionComponent)(); };
SwipeActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SwipeActionComponent, selectors: [["SwipeAction"], ["nzm-swipe-action"]], viewQuery: function SwipeActionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
        ɵngcc0.ɵɵviewQuery(_c1, 1);
        ɵngcc0.ɵɵviewQuery(_c2, 1);
        ɵngcc0.ɵɵviewQuery(_c3, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.leftBtnRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rightBtnRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cover = _t.first);
    } }, inputs: { left: "left", right: "right", autoClose: "autoClose", disabled: "disabled" }, outputs: { onOpen: "onOpen", onClose: "onClose" }, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [[3, "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], ["content", ""], [3, "ngClass"], ["coverRef", ""], [3, "touchstart", "touchmove", "touchend"], ["contentRef", ""], [3, "ngTemplateOutlet"], ["leftBtnRef", ""], ["role", "button", 3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["role", "button", 3, "ngStyle", "click"], ["rightBtnRef", ""]], template: function SwipeActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, SwipeActionComponent_div_0_Template, 8, 10, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SwipeActionComponent_div_1_Template, 3, 4, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SwipeActionComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", (ctx.left.length != 0 || ctx.right.length != 0) && !ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !((ctx.left.length != 0 || ctx.right.length != 0) && !ctx.disabled));
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2 });
SwipeActionComponent.ctorParameters = () => [];
SwipeActionComponent.propDecorators = {
    leftBtnRef: [{ type: ViewChild, args: ['leftBtnRef',] }],
    rightBtnRef: [{ type: ViewChild, args: ['rightBtnRef',] }],
    content: [{ type: ViewChild, args: ['contentRef',] }],
    cover: [{ type: ViewChild, args: ['coverRef',] }],
    left: [{ type: Input }],
    right: [{ type: Input }],
    autoClose: [{ type: Input }],
    disabled: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SwipeActionComponent, [{
        type: Component,
        args: [{
                selector: 'SwipeAction, nzm-swipe-action',
                template: "<div *ngIf=\"(left.length != 0 || right.length != 0) && !disabled\" [ngClass]=\"wrapCls\">\n  <div class=\"{{ prefixCls }}-cover\" #coverRef></div>\n  <div *ngIf=\"left && left.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-left\" #leftBtnRef>\n    <div\n      *ngFor=\"let btn of left\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"right && right.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-right\" #rightBtnRef>\n    <div\n      *ngFor=\"let btn of right\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"{{ prefixCls }}-content\"\n    #contentRef\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  </div>\n</div>\n<div *ngIf=\"!((left.length != 0 || right.length != 0) && !disabled)\" class=\"{{ prefixCls }}-content\" #contentRef>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { left: [{
            type: Input
        }], right: [{
            type: Input
        }], autoClose: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onOpen: [{
            type: Output
        }], onClose: [{
            type: Output
        }], leftBtnRef: [{
            type: ViewChild,
            args: ['leftBtnRef']
        }], rightBtnRef: [{
            type: ViewChild,
            args: ['rightBtnRef']
        }], content: [{
            type: ViewChild,
            args: ['contentRef']
        }], cover: [{
            type: ViewChild,
            args: ['coverRef']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCLE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQW1DbEM7QUFBZ0IsUUFsQ2hCLGNBQVMsR0FBVyxVQUFVLENBQUM7QUFDakMsUUFBRSxZQUFPLEdBQVcsRUFBRSxDQUFDO0FBQ3ZCLFFBQ1UsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNwQyxRQUFVLGdCQUFXLEdBQVksS0FBSyxDQUFDO0FBQ3ZDLFFBQVUsaUJBQVksR0FBWSxLQUFLLENBQUM7QUFDeEMsUUFnQkUsU0FBSSxHQUFrQixFQUFFLENBQUM7QUFDM0IsUUFDRSxVQUFLLEdBQWtCLEVBQUUsQ0FBQztBQUM1QixRQUNFLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDN0IsUUFDRSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQzVCLFFBQ0UsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3RELFFBQ0UsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0FBQ3ZELFFBVUUsaUJBQVksR0FBRyxFQUFFLENBQUMsRUFBRTtBQUN0QixZQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQ2xELGdCQUFNLE9BQU87QUFDYixhQUFLO0FBQ0wsWUFBSSxNQUFNLEtBQUss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Q1QsUUFBUSxFQUFFO1NBQStCLGtCQUN6Qzs7Ozs7Ozs7Ozs7Ozs7OytDQUE0QyxrQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7O2lJQUNJO0FBQUM7QUFBZ0Q7QUFDeEMseUJBWVgsU0FBUyxTQUFDLFlBQVk7QUFDcEIsMEJBQ0YsU0FBUyxTQUFDLGFBQWE7QUFDckIsc0JBQ0YsU0FBUyxTQUFDLFlBQVk7QUFDcEIsb0JBQ0YsU0FBUyxTQUFDLFVBQVU7QUFDbEIsbUJBRUYsS0FBSztBQUNOLG9CQUNDLEtBQUs7QUFDTix3QkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLHFCQUNDLE1BQU07QUFDUCxzQkFDQyxNQUFNO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1N3aXBlQWN0aW9uLCBuem0tc3dpcGUtYWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXBlLWFjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXN3aXBlJztcbiAgd3JhcENsczogb2JqZWN0ID0ge307XG5cbiAgcHJpdmF0ZSBfc3dpcGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9vcGVuZWRMZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW5lZFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2J0bnNMZWZ0V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYnRuc1JpZ2h0V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbmVlZFNob3dMZWZ0OiBib29sZWFuO1xuICBwcml2YXRlIF9uZWVkU2hvd1JpZ2h0OiBib29sZWFuO1xuICBwcml2YXRlIF9zdGFydFg6IG51bWJlcjtcblxuICBAVmlld0NoaWxkKCdsZWZ0QnRuUmVmJylcbiAgbGVmdEJ0blJlZjtcbiAgQFZpZXdDaGlsZCgncmlnaHRCdG5SZWYnKVxuICByaWdodEJ0blJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFJlZicpXG4gIGNvbnRlbnQ7XG4gIEBWaWV3Q2hpbGQoJ2NvdmVyUmVmJylcbiAgY292ZXI7XG5cbiAgQElucHV0KClcbiAgbGVmdDogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBASW5wdXQoKVxuICByaWdodDogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBASW5wdXQoKVxuICBhdXRvQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uT3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldENsYXNzTWFwKCkge1xuICAgIHRoaXMud3JhcENscyA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXBpbmdgXTogdGhpcy5fc3dpcGluZ1xuICAgIH07XG4gIH1cblxuICBvbkNsb3NlU3dpcGUgPSBldiA9PiB7XG4gICAgaWYgKCEodGhpcy5fb3BlbmVkTGVmdCB8fCB0aGlzLl9vcGVuZWRSaWdodCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcE5vZGUgPSBldi50YXJnZXQuY2xvc2VzdChgLiR7dGhpcy5wcmVmaXhDbHN9LWFjdGlvbnNgKTtcbiAgICBpZiAoIXBOb2RlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZExlZnQgfHwgdGhpcy5fb3BlbmVkUmlnaHQpIHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuc2V0QnRuU3R5bGUoMCk7XG4gICAgdGhpcy5fb3BlbmVkTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuX29wZW5lZFJpZ2h0ID0gZmFsc2U7XG4gIH1cblxuICBzZXRCdG5TdHlsZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9idG5zTGVmdFdpZHRoID09PSAwIHx8IHRoaXMuX2J0bnNSaWdodFdpZHRoID09PSAwKSB7XG4gICAgICB0aGlzLl9idG5zTGVmdFdpZHRoID0gdGhpcy5sZWZ0QnRuUmVmID8gdGhpcy5sZWZ0QnRuUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiAwO1xuICAgICAgdGhpcy5fYnRuc1JpZ2h0V2lkdGggPSB0aGlzLnJpZ2h0QnRuUmVmID8gdGhpcy5yaWdodEJ0blJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogMDtcbiAgICB9XG4gICAgY29uc3QgbGltaXQgPSB2YWx1ZSA+IDAgPyB0aGlzLl9idG5zTGVmdFdpZHRoIDogLXRoaXMuX2J0bnNSaWdodFdpZHRoO1xuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gdGhpcy5nZXRDb250ZW50RWFzaW5nKHZhbHVlLCBsaW1pdCk7XG4gICAgdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2NvbnRlbnRMZWZ0fXB4YDtcbiAgICB0aGlzLmNvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IE1hdGguYWJzKHZhbHVlKSA+IDAgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIHRoaXMuY292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7Y29udGVudExlZnR9cHhgO1xuICB9XG5cbiAgZ2V0Q29udGVudEVhc2luZyh2YWx1ZSwgbGltaXQpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModmFsdWUpIC0gTWF0aC5hYnMobGltaXQpID4gMCA/IGxpbWl0IDogdmFsdWU7XG4gIH1cblxuICBvblRvdWNoU3RhcnQoZSkge1xuICAgIHRoaXMuX3N0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB0aGlzLl9zd2lwaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBjb25zdCBkZWx0YVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9zdGFydFg7XG4gICAgdGhpcy5fbmVlZFNob3dSaWdodCA9IGRlbHRhWCA8IC01ICYmIHRoaXMucmlnaHQubGVuZ3RoID4gMDtcbiAgICB0aGlzLl9uZWVkU2hvd0xlZnQgPSBkZWx0YVggPiA1ICYmIHRoaXMubGVmdC5sZW5ndGggPiAwO1xuICAgIGlmICh0aGlzLmxlZnRCdG5SZWYpIHtcbiAgICAgIHRoaXMubGVmdEJ0blJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLl9uZWVkU2hvd1JpZ2h0ID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJpZ2h0QnRuUmVmKSB7XG4gICAgICB0aGlzLnJpZ2h0QnRuUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuX25lZWRTaG93TGVmdCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgIH1cbiAgICB0aGlzLnNldEJ0blN0eWxlKGRlbHRhWCk7XG4gIH1cblxuICBvblRvdWNoRW5kKGUpIHtcbiAgICBjb25zdCBkZWx0YVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9zdGFydFg7XG5cbiAgICBjb25zdCBuZWVkT3BlblJpZ2h0ID0gdGhpcy5fbmVlZFNob3dSaWdodCAmJiBNYXRoLmFicyhkZWx0YVgpID4gdGhpcy5fYnRuc1JpZ2h0V2lkdGggLyAyO1xuICAgIGNvbnN0IG5lZWRPcGVuTGVmdCA9IHRoaXMuX25lZWRTaG93TGVmdCAmJiBNYXRoLmFicyhkZWx0YVgpID4gdGhpcy5fYnRuc0xlZnRXaWR0aCAvIDI7XG5cbiAgICBpZiAobmVlZE9wZW5SaWdodCkge1xuICAgICAgdGhpcy5kb09wZW5SaWdodCgpO1xuICAgIH0gZWxzZSBpZiAobmVlZE9wZW5MZWZ0KSB7XG4gICAgICB0aGlzLmRvT3BlbkxlZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zd2lwaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fbmVlZFNob3dMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5fbmVlZFNob3dSaWdodCA9IGZhbHNlO1xuICB9XG5cbiAgZG9PcGVuTGVmdCgpIHtcbiAgICB0aGlzLm9wZW4odGhpcy5fYnRuc0xlZnRXaWR0aCwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgZG9PcGVuUmlnaHQoKSB7XG4gICAgdGhpcy5vcGVuKC10aGlzLl9idG5zUmlnaHRXaWR0aCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgb25CdG5DbGljayhldiwgYnRuKSB7XG4gICAgY29uc3Qgb25QcmVzcyA9IGJ0bi5vblByZXNzO1xuICAgIGlmIChvblByZXNzKSB7XG4gICAgICBvblByZXNzKGV2KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b0Nsb3NlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb3Blbih2YWx1ZSwgb3BlbmVkTGVmdCwgb3BlbmVkUmlnaHQpIHtcbiAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgdGhpcy5fb3BlbmVkTGVmdCA9IG9wZW5lZExlZnQ7XG4gICAgdGhpcy5fb3BlbmVkUmlnaHQgPSBvcGVuZWRSaWdodDtcbiAgICB0aGlzLnNldEJ0blN0eWxlKHZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9idG5zTGVmdFdpZHRoID0gdGhpcy5sZWZ0QnRuUmVmID8gdGhpcy5sZWZ0QnRuUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiAwO1xuICAgIHRoaXMuX2J0bnNSaWdodFdpZHRoID0gdGhpcy5yaWdodEJ0blJlZiA/IHRoaXMucmlnaHRCdG5SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IDA7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsb3NlU3dpcGUsIHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsb3NlU3dpcGUsIHRydWUpO1xuICB9XG59XG4iXX0=