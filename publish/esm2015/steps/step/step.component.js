import { Component, forwardRef, Input, ElementRef, TemplateRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../icon/icon.component';

function StepComponent_span_4_ng_template_1_Template(rf, ctx) { }
function StepComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 0);
    ɵngcc0.ɵɵtemplate(1, StepComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.iconCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.icon);
} }
function StepComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 0);
    ɵngcc0.ɵɵelement(1, "Icon", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.iconCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", ctx_r1.icon)("size", ctx_r1.iconSize);
} }
function StepComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.iconCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r2.stepNumber, " ");
} }
function StepComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.title);
} }
function StepComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.description);
} }
function StepComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, StepComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    const _r7 = ɵngcc0.ɵɵreference(14);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-item-description");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.isTemplateRef(ctx_r4.description))("ngIfElse", _r7);
} }
function StepComponent_ng_template_11_ng_template_0_Template(rf, ctx) { }
function StepComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, StepComponent_ng_template_11_ng_template_0_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.title);
} }
function StepComponent_ng_template_13_ng_template_0_Template(rf, ctx) { }
function StepComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, StepComponent_ng_template_13_ng_template_0_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.description);
} }
export class StepComponent {
    constructor(_el) {
        this._el = _el;
        this.prefixCls = 'am-steps';
        this.stepItemCls = {};
        this.iconCls = {
            [`${this.prefixCls}-icon`]: true
        };
        this.isIconString = true;
        this.outStatus = 'process';
        this.isCustomStatus = false;
        this.isCustomIcon = false;
        this.title = null;
        this.description = null;
        this._currentIndex = 0;
        this.clsStepItem = true;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        if (value) {
            this._status = value;
            this.isCustomStatus = true;
            this.setIcon();
            this.setClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value) {
            this._icon = value;
            this.isCustomIcon = true;
            this.setClass();
        }
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.stepNumber ? StepStatusEnum.FINISH : current === this.stepNumber ?
                this.outStatus || '' : StepStatusEnum.WAIT;
            this.setIcon();
            this.setClass();
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    setClass() {
        this.stepItemCls = {
            [`${this.prefixCls}-item-${this.status}`]: true,
            [`${this.prefixCls}-item-custom`]: this.isCustomIcon || (this.icon && this._currentIndex !== this.stepNumber)
        };
    }
    setIcon() {
        if (!this.isCustomIcon) {
            switch (this._status) {
                case StepStatusEnum.FINISH:
                    this._icon = 'check-circle-o';
                    break;
                case StepStatusEnum.ERROR:
                    this._icon = 'cross-circle-o';
                    break;
                case StepStatusEnum.WAIT:
                    this._icon = 'ellipsis';
                    break;
                default:
                    break;
            }
        }
    }
    ngOnInit() { }
}
StepComponent.ɵfac = function StepComponent_Factory(t) { return new (t || StepComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
StepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StepComponent, selectors: [["Step"], ["nzm-step"]], hostVars: 2, hostBindings: function StepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-steps-item", ctx.clsStepItem);
    } }, inputs: { title: "title", description: "description", status: "status", icon: "icon" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => StepComponent),
                multi: true
            }
        ])], decls: 15, vars: 20, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["titleTemplate", ""], ["descriptionTemplate", ""], [3, "ngTemplateOutlet"], [3, "type", "size"]], template: function StepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵtemplate(4, StepComponent_span_4_Template, 2, 2, "span", 1);
        ɵngcc0.ɵɵtemplate(5, StepComponent_span_5_Template, 2, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(6, StepComponent_span_6_Template, 2, 2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div");
        ɵngcc0.ɵɵelementStart(8, "div");
        ɵngcc0.ɵɵtemplate(9, StepComponent_ng_container_9_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, StepComponent_div_10_Template, 2, 5, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, StepComponent_ng_template_11_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(13, StepComponent_ng_template_13_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r5 = ɵngcc0.ɵɵreference(12);
        ɵngcc0.ɵɵproperty("ngClass", ctx.stepItemCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-tail");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.tailContent, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-icon");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.icon));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.icon) && (ctx.status === "error" || ctx.status === "finish" || ctx.status === "wait"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.icon) && !(ctx.status === "error" || ctx.status === "finish" || ctx.status === "wait"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-content");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-title");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.title))("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.description);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.IconComponent], encapsulation: 2 });
StepComponent.ctorParameters = () => [
    { type: ElementRef }
];
StepComponent.propDecorators = {
    status: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    icon: [{ type: Input }],
    clsStepItem: [{ type: HostBinding, args: ['class.am-steps-item',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepComponent, [{
        type: Component,
        args: [{
                selector: 'Step, nzm-step',
                template: "<div [ngClass]=\"stepItemCls\">\n  <div class=\"{{ prefixCls }}-item-tail\">\n    {{ tailContent }}\n  </div>\n  <div class=\"{{ prefixCls }}-item-icon\">\n    <span *ngIf=\"isTemplateRef(icon)\" [ngClass]=\"iconCls\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && (status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\">\n      <Icon [type]=\"icon\" [size]=\"iconSize\"> </Icon>\n    </span>\n    <span *ngIf=\"!isTemplateRef(icon) && !(status === 'error' || status === 'finish' || status === 'wait')\" [ngClass]=\"iconCls\"\n      >{{ stepNumber }}\n    </span>\n  </div>\n  <div class=\"{{ prefixCls }}-item-content\">\n    <div class=\"{{ prefixCls }}-item-title\">\n      <ng-container *ngIf=\"!isTemplateRef(title); else titleTemplate\">{{ title }}</ng-container>\n    </div>\n    <div *ngIf=\"description\" class=\"{{ prefixCls }}-item-description\">\n      <ng-container *ngIf=\"!isTemplateRef(description); else descriptionTemplate\">{{ description }}</ng-container>\n    </div>\n  </div>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"title\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"description\"></ng-template>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => StepComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { title: [{
            type: Input
        }], description: [{
            type: Input
        }], clsStepItem: [{
            type: HostBinding,
            args: ['class.am-steps-item']
        }], status: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
export var StepStatusEnum;
(function (StepStatusEnum) {
    StepStatusEnum["WAIT"] = "wait";
    StepStatusEnum["PROCESS"] = "process";
    StepStatusEnum["FINISH"] = "finish";
    StepStatusEnum["ERROR"] = "error";
})(StepStatusEnum || (StepStatusEnum = {}));
export var StepDirectionEnum;
(function (StepDirectionEnum) {
    StepDirectionEnum["VERTICAL"] = "vertical";
    StepDirectionEnum["HORIZONTAL"] = "horizontal";
})(StepDirectionEnum || (StepDirectionEnum = {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3RlcHMvc3RlcC9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25ELE1BQU0sT0FBTyxhQUFhO0FBQUcsSUE0RDNCLFlBQW9CLEdBQWU7QUFBSSxRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFZO0FBQUMsUUEzRHBDLGNBQVMsR0FBRyxVQUFVLENBQUM7QUFDekIsUUFBRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFFLFlBQU8sR0FBVztBQUNwQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3BDLFNBQUcsQ0FBQztBQUNKLFFBRUUsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDL0IsUUFDRSxjQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLFFBR1UsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDakMsUUFBVSxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUMvQixRQWNFLFVBQUssR0FBOEIsSUFBSSxDQUFDO0FBQzFDLFFBQ0UsZ0JBQVcsR0FBOEIsSUFBSSxDQUFDO0FBQ2hELFFBc0JVLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLFFBRUUsZ0JBQVcsR0FBWSxJQUFJLENBQUM7QUFDOUIsSUFDeUMsQ0FBQztBQUMxQyxJQTVDRSxJQUNJLE1BQU07QUFBSyxRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksTUFBTSxDQUFDLEtBQXFCO0FBQ2xDLFFBQUksSUFBSSxLQUFLLEVBQUU7QUFDZixZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDakMsWUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckIsWUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBSUUsSUFDSSxJQUFJO0FBQUssUUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLElBQUksQ0FBQyxLQUFnQztBQUMzQyxRQUFJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN6QixZQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFlBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksWUFBWSxDQUFDLE9BQWU7QUFDbEMsUUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzlCLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0RyxnQkFBUSxJQUFJLENBQUMsU0FBUyxJQUFLLEVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztBQUM1RCxZQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixZQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0QixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFRRSxhQUFhLENBQUMsS0FBSztBQUNyQixRQUFJLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxXQUFXLEdBQUc7QUFDdkIsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJO0FBQ3JELFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNuSCxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU87QUFDVCxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQzVCLFlBQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzVCLGdCQUFRLEtBQUssY0FBYyxDQUFDLE1BQU07QUFDbEMsb0JBQVUsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztBQUN4QyxvQkFBVSxNQUFNO0FBQ2hCLGdCQUFRLEtBQUssY0FBYyxDQUFDLEtBQUs7QUFDakMsb0JBQVUsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztBQUN4QyxvQkFBVSxNQUFNO0FBQ2hCLGdCQUFRLEtBQUssY0FBYyxDQUFDLElBQUk7QUFDaEMsb0JBQVUsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDbEMsb0JBQVUsTUFBTTtBQUNoQixnQkFBUTtBQUNSLG9CQUFVLE1BQU07QUFDaEIsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVEsS0FBSyxDQUFDO0FBQ2hCO3lDQXhHQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQW9DO0tBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztDQUFJLGtCQUNyQyxTQUFTLEVBQUUsc0JBQ1QsMEJBQ0UsT0FBTyxFQUFFO1VBQWlCO0tBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLDBCQUM1QztFQUFLLEVBQUUsSUFBSSxzQkFDWjtpQkFDRjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VIQUNJO0FBQUM7QUFBdUMsWUFuQjNDLFVBQVU7QUFDWDtBQUFHO0FBRUgscUJBaUNFLEtBQUs7QUFDTixvQkFXQyxLQUFLO0FBQ04sMEJBQ0MsS0FBSztBQUNOLG1CQUNDLEtBQUs7QUFDTiwwQkF1QkMsV0FBVyxTQUFDLHFCQUFxQjtBQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFvQ04sTUFBTSxDQUFOLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztBQUN6QixJQUFDLCtCQUFhLENBQUE7QUFBQyxJQUNkLHFDQUFtQixDQUFBO0FBQUMsSUFDcEIsbUNBQWlCLENBQUE7QUFBQyxJQUNsQixpQ0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQUNELE1BQU0sQ0FBTixJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7QUFDNUIsSUFBQywwQ0FBcUIsQ0FBQTtBQUFDLElBQ3RCLDhDQUF5QixDQUFBO0FBQzNCLENBQUMsRUFIVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRzVCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnU3RlcCwgbnptLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RlcENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZml4Q2xzID0gJ2FtLXN0ZXBzJztcbiAgc3RlcEl0ZW1DbHMgPSB7fTtcbiAgaWNvbkNsczogb2JqZWN0ID0ge1xuICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbmBdOiB0cnVlXG4gIH07XG4gIHRhaWxDb250ZW50OiBzdHJpbmc7XG4gIHN0ZXBOdW1iZXI6IG51bWJlcjtcbiAgaXNJY29uU3RyaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgaWNvblNpemU6IHN0cmluZztcbiAgb3V0U3RhdHVzID0gJ3Byb2Nlc3MnO1xuXG4gIHByaXZhdGUgX3N0YXR1czogU3RlcFN0YXR1c0VudW07XG4gIHByaXZhdGUgX2ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0N1c3RvbUljb24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgc3RhdHVzKCk6IFN0ZXBTdGF0dXNFbnVtIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IFN0ZXBTdGF0dXNFbnVtKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuICBASW5wdXQoKVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0N1c3RvbUljb24gPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IGN1cnJlbnQgPiB0aGlzLnN0ZXBOdW1iZXIgPyBTdGVwU3RhdHVzRW51bS5GSU5JU0ggOiBjdXJyZW50ID09PSB0aGlzLnN0ZXBOdW1iZXIgP1xuICAgICAgICB0aGlzLm91dFN0YXR1cyB8fCAoJycgYXMgYW55KSA6IFN0ZXBTdGF0dXNFbnVtLldBSVQ7XG4gICAgICB0aGlzLnNldEljb24oKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jdXJyZW50SW5kZXggPSAwO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tc3RlcHMtaXRlbScpXG4gIGNsc1N0ZXBJdGVtOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgc2V0Q2xhc3MoKSB7XG4gICAgdGhpcy5zdGVwSXRlbUNscyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taXRlbS0ke3RoaXMuc3RhdHVzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pdGVtLWN1c3RvbWBdOiB0aGlzLmlzQ3VzdG9tSWNvbiB8fCAodGhpcy5pY29uICYmIHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gdGhpcy5zdGVwTnVtYmVyKVxuICAgIH07XG4gIH1cblxuICBzZXRJY29uKCkge1xuICAgIGlmICghdGhpcy5pc0N1c3RvbUljb24pIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgU3RlcFN0YXR1c0VudW0uRklOSVNIOlxuICAgICAgICAgIHRoaXMuX2ljb24gPSAnY2hlY2stY2lyY2xlLW8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0ZXBTdGF0dXNFbnVtLkVSUk9SOlxuICAgICAgICAgIHRoaXMuX2ljb24gPSAnY3Jvc3MtY2lyY2xlLW8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0ZXBTdGF0dXNFbnVtLldBSVQ6XG4gICAgICAgICAgdGhpcy5faWNvbiA9ICdlbGxpcHNpcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbn1cblxuZXhwb3J0IGVudW0gU3RlcFN0YXR1c0VudW0ge1xuICBXQUlUID0gJ3dhaXQnLFxuICBQUk9DRVNTID0gJ3Byb2Nlc3MnLFxuICBGSU5JU0ggPSAnZmluaXNoJyxcbiAgRVJST1IgPSAnZXJyb3InXG59XG5leHBvcnQgZW51bSBTdGVwRGlyZWN0aW9uRW51bSB7XG4gIFZFUlRJQ0FMID0gJ3ZlcnRpY2FsJyxcbiAgSE9SSVpPTlRBTCA9ICdob3Jpem9udGFsJ1xufVxuIl19