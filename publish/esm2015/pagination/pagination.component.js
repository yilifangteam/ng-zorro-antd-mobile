import { Component, ViewEncapsulation, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../locale-provider/locale-provider.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../flex/flex.component';
import * as ɵngcc4 from '../button/button.component';

function PaginationComponent_Flex_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.locale.prevText, " ");
} }
function PaginationComponent_Flex_1_4_ng_template_0_Template(rf, ctx) { }
function PaginationComponent_Flex_1_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PaginationComponent_Flex_1_4_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.locale.prevText);
} }
function PaginationComponent_Flex_1_FlexItem_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "FlexItem", 5);
    ɵngcc0.ɵɵelementStart(1, "span", 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3, "/ ");
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-wrap");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.current);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.total);
} }
function PaginationComponent_Flex_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.locale.nextText, " ");
} }
function PaginationComponent_Flex_1_9_ng_template_0_Template(rf, ctx) { }
function PaginationComponent_Flex_1_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PaginationComponent_Flex_1_9_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.locale.nextText);
} }
function PaginationComponent_Flex_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "Flex");
    ɵngcc0.ɵɵelementStart(1, "FlexItem");
    ɵngcc0.ɵɵelementStart(2, "a", 2);
    ɵngcc0.ɵɵlistener("onClick", function PaginationComponent_Flex_1_Template_a_onClick_2_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onClick(ctx_r10.current - 1); });
    ɵngcc0.ɵɵtemplate(3, PaginationComponent_Flex_1_ng_container_3_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(4, PaginationComponent_Flex_1_4_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PaginationComponent_Flex_1_FlexItem_5_Template, 6, 5, "FlexItem", 3);
    ɵngcc0.ɵɵelementStart(6, "FlexItem");
    ɵngcc0.ɵɵelementStart(7, "a", 2);
    ɵngcc0.ɵɵlistener("onClick", function PaginationComponent_Flex_1_Template_a_onClick_7_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onClick(ctx_r12.current + 1); });
    ɵngcc0.ɵɵtemplate(8, PaginationComponent_Flex_1_ng_container_8_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(9, PaginationComponent_Flex_1_9_Template, 1, 1, undefined, 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-wrap-btn ", ctx_r0.prefixCls, "-wrap-btn-prev");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("inline", true)("disabled", ctx_r0.current <= 1 || ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.locale.prevText));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.locale.prevText));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.simple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-wrap-btn ", ctx_r0.prefixCls, "-wrap-btn-next");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("inline", true)("disabled", ctx_r0.current >= ctx_r0.total || ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.locale.nextText));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.locale.nextText));
} }
function PaginationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "span", 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3, "/");
    ɵngcc0.ɵɵelementStart(4, "span");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-wrap");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.current);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.total);
} }
function PaginationComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "span");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r13.prefixCls, "-wrap-dot ", ctx_r13.current === i_r15 + 1 ? ctx_r13.prefixCls + "-wrap-dot-active" : "", "");
} }
function PaginationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, PaginationComponent_div_3_div_1_Template, 2, 4, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-wrap");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.getNumber(ctx_r2.total));
} }
export class PaginationComponent {
    constructor(_localeProviderService) {
        this._localeProviderService = _localeProviderService;
        this.prefixCls = 'am-pagination';
        this.hasSetLocale = false;
        this._locale = {
            prevText: '',
            nextText: ''
        };
        this._unsubscribe$ = new Subject();
        this.mode = 'button';
        this.current = 1;
        this.total = 0;
        this.simple = false;
        this.disabled = false;
        this.onChange = new EventEmitter();
    }
    get locale() {
        return this._locale;
    }
    set locale(v) {
        this._locale = v;
        this.hasSetLocale = true;
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
    isTemplateRef(key) {
        return key instanceof TemplateRef;
    }
    onClick(p) {
        this.current = p;
        this.onChange.emit(p);
    }
    getNumber(p) {
        return new Array(p);
    }
    ngOnInit() {
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            if (!this.hasSetLocale) {
                this._locale = this._localeProviderService.getLocaleSubObj('Pagination');
            }
        });
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
PaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["Pagination"], ["nzm-pagination"]], inputs: { mode: "mode", current: "current", total: "total", simple: "simple", disabled: "disabled", locale: "locale" }, outputs: { onChange: "onChange" }, decls: 4, vars: 7, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], ["Button", "", 3, "inline", "disabled", "onClick"], ["aria-live", "assertive", 3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["aria-live", "assertive"], [1, "active"], [3, "class", 4, "ngFor", "ngForOf"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, PaginationComponent_Flex_1_Template, 10, 17, "Flex", 0);
        ɵngcc0.ɵɵtemplate(2, PaginationComponent_div_2_Template, 6, 5, "div", 1);
        ɵngcc0.ɵɵtemplate(3, PaginationComponent_div_3_Template, 2, 4, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-align-center");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "button");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "number");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "pointer");
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.FlexComponent, ɵngcc3.FlexItemComponent, ɵngcc4.ButtonComponent, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf], encapsulation: 2 });
PaginationComponent.ctorParameters = () => [
    { type: LocaleProviderService }
];
PaginationComponent.propDecorators = {
    mode: [{ type: Input }],
    current: [{ type: Input }],
    total: [{ type: Input }],
    simple: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    onChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: 'Pagination, nzm-pagination',
                template: "<div class=\"{{ prefixCls }} {{ prefixCls }}-align-center\">\n  <Flex *ngIf=\"mode === 'button'\">\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-prev\">\n      <a Button [inline]=\"true\" [disabled]=\"current <= 1 || disabled\" (onClick)=\"onClick(current - 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.prevText)\">\n          {{ locale.prevText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.prevText)\" [ngTemplateOutlet]=\"locale.prevText\"></ng-template>\n      </a>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap\" aria-live=\"assertive\" *ngIf=\"!simple\">\n      <span class=\"active\">{{ current }}</span\n      >/\n      <span>{{ total }}</span>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-next\">\n      <a Button [inline]=\"true\" [disabled]=\"current >= total || disabled\" (onClick)=\"onClick(current + 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.nextText)\">\n          {{ locale.nextText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.nextText)\" [ngTemplateOutlet]=\"locale.nextText\"></ng-template>\n      </a>\n    </FlexItem>\n  </Flex>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'number'\">\n    <span class=\"active\">{{ current }}</span\n    >/<span>{{ total }}</span>\n  </div>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'pointer'\">\n    <div\n      *ngFor=\"let number of getNumber(total); let i = index\"\n      class=\"{{ prefixCls }}-wrap-dot {{ current === i + 1 ? prefixCls + '-wrap-dot-active' : '' }}\"\n    >\n      <span></span>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }]; }, { mode: [{
            type: Input
        }], current: [{
            type: Input
        }], total: [{
            type: Input
        }], simple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onChange: [{
            type: Output
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25GLE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQWlDakMsWUFBb0Isc0JBQTZDO0FBQUksUUFBakQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtBQUFDLFFBaENsRSxjQUFTLEdBQUcsZUFBZSxDQUFDO0FBQzlCLFFBQ1UsaUJBQVksR0FBRyxLQUFLLENBQUM7QUFDL0IsUUFBVSxZQUFPLEdBQWdCO0FBQ2pDLFlBQUksUUFBUSxFQUFFLEVBQUU7QUFDaEIsWUFBSSxRQUFRLEVBQUUsRUFBRTtBQUNoQixTQUFHLENBQUM7QUFDSixRQUFVLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7QUFDN0QsUUFFRSxTQUFJLEdBQVcsUUFBUSxDQUFDO0FBQzFCLFFBQ0UsWUFBTyxHQUFXLENBQUMsQ0FBQztBQUN0QixRQUNFLFVBQUssR0FBVyxDQUFDLENBQUM7QUFDcEIsUUFDRSxXQUFNLEdBQVksS0FBSyxDQUFDO0FBQzFCLFFBQ0UsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUM1QixRQVdFLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQUN4RCxJQUNzRSxDQUFDO0FBQ3ZFLElBZEUsSUFDSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ2QsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0gsSUFLRSxhQUFhLENBQUMsR0FBRztBQUNuQixRQUFJLE9BQVksR0FBRyxZQUFZLFdBQVcsQ0FBQztBQUMzQyxJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU8sQ0FBQyxDQUFTO0FBQ25CLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDckIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FBQyxDQUFTO0FBQUksUUFDckIsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDL0YsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUM5QixnQkFBUSxJQUFJLENBQUMsT0FBTyxHQUFnQixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlGLGFBQU87QUFDUCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSDsrQ0FqRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw0QkFBNEIsa0JBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7eUtBR0c7QUFBQztBQUE2QyxZQVgxQyxxQkFBcUI7QUFBRztBQUFHO0FBQXVDLG1CQXFCeEUsS0FBSztBQUNOLHNCQUNDLEtBQUs7RUFmb0Msa0JBQzFDLHBCQWVBLG9CQUNDLEtBQUs7R0FoQk8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLDNCQWlCckMscUJBQ0MsS0FBSztVQWpCUCxWQWtCQyx1QkFDQyxLQUFLO0FBQ04scUJBQ0MsS0FBSztBQUNOLHVCQVNDLE1BQU07QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgTG9jYWxlVmFsdWUge1xuICBwcmV2VGV4dDogc3RyaW5nO1xuICBuZXh0VGV4dDogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUGFnaW5hdGlvbiwgbnptLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4Q2xzID0gJ2FtLXBhZ2luYXRpb24nO1xuXG4gIHByaXZhdGUgaGFzU2V0TG9jYWxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvY2FsZTogTG9jYWxlVmFsdWUgPSB7XG4gICAgcHJldlRleHQ6ICcnLFxuICAgIG5leHRUZXh0OiAnJ1xuICB9O1xuICBwcml2YXRlIF91bnN1YnNjcmliZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIG1vZGU6IHN0cmluZyA9ICdidXR0b24nO1xuICBASW5wdXQoKVxuICBjdXJyZW50OiBudW1iZXIgPSAxO1xuICBASW5wdXQoKVxuICB0b3RhbDogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgc2ltcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuICBzZXQgbG9jYWxlKHYpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSB2O1xuICAgIHRoaXMuaGFzU2V0TG9jYWxlID0gdHJ1ZTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICBpc1RlbXBsYXRlUmVmKGtleSkge1xuICAgIHJldHVybiA8YW55PmtleSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgb25DbGljayhwOiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBwO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChwKTtcbiAgfVxuXG4gIGdldE51bWJlcihwOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IEFycmF5KHApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICBpZiAoIXRoaXMuaGFzU2V0TG9jYWxlKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IDxMb2NhbGVWYWx1ZT50aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UuZ2V0TG9jYWxlU3ViT2JqKCdQYWdpbmF0aW9uJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=