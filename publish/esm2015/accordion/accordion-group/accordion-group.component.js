import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionService } from '../accordion.service';
import { isTemplateRef } from '../../core/util/check';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../accordion.service';
import * as ɵngcc2 from '@angular/common';

function AccordionGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.header);
} }
function AccordionGroupComponent_3_ng_template_0_Template(rf, ctx) { }
function AccordionGroupComponent_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, AccordionGroupComponent_3_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.header);
} }
function AccordionGroupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "am-accordion-content-active": a0 }; };
const _c1 = ["*"];
export class AccordionGroupComponent {
    constructor(_accordionService, _cdr) {
        this._accordionService = _accordionService;
        this._cdr = _cdr;
        this.isShowChild = true;
        this.isOpened = false;
        this.disabled = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onChange = new EventEmitter();
        this.isTemplateRef = isTemplateRef;
        this.amItem = true;
        this.isActive = this.isOpened;
        this.addon = true;
    }
    checkAndToggle() {
        this.toggle();
    }
    get slide() {
        return this.isOpened ? 'down' : 'up';
    }
    toggle() {
        if (this.disabled) {
            return;
        }
        this.isShowChild = true;
        const isOpenedBeforeWeChange = this.isOpened;
        if (this._accordionService.accordion) {
            this._accordionService.component.closeAll();
        }
        this.isOpened = !isOpenedBeforeWeChange;
        if (this.isOpened) {
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
        this.onChange.emit(this.isOpened);
    }
    openOnInitialization() {
        setTimeout(() => {
            this.isOpened = true;
            this._cdr.detectChanges();
        }, 0);
    }
    slideAnimationDoen(event) {
        if (event.fromState === 'down' && event.toState === 'up') {
            setTimeout(() => {
                this.isShowChild = false;
            }, 0);
        }
    }
}
AccordionGroupComponent.ɵfac = function AccordionGroupComponent_Factory(t) { return new (t || AccordionGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AccordionService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AccordionGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionGroupComponent, selectors: [["AccordionPanel"], ["nzm-accordion-panel"]], hostVars: 6, hostBindings: function AccordionGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-accordion-item", ctx.amItem)("am-accordion-item-active", ctx.isActive)("addon", ctx.addon);
    } }, inputs: { isOpened: "isOpened", disabled: "disabled", key: "key", header: "header" }, outputs: { onOpen: "onOpen", onClose: "onClose", onChange: "onChange" }, ngContentSelectors: _c1, decls: 6, vars: 8, consts: [["role", "tab", "data-scale", "true", 1, "am-accordion-header", 3, "click"], [1, "arrow"], [4, "ngIf"], ["role", "tabpanel", 1, "am-accordion-content", 3, "ngClass"], ["class", "am-accordion-content-box", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "am-accordion-content-box"]], template: function AccordionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function AccordionGroupComponent_Template_div_click_0_listener() { return ctx.checkAndToggle(); });
        ɵngcc0.ɵɵelement(1, "i", 1);
        ɵngcc0.ɵɵtemplate(2, AccordionGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, AccordionGroupComponent_3_Template, 1, 1, undefined, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵlistener("@slide.done", function AccordionGroupComponent_Template_div_animation_slide_done_4_listener($event) { return ctx.slideAnimationDoen($event); });
        ɵngcc0.ɵɵtemplate(5, AccordionGroupComponent_div_5_Template, 2, 0, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isOpened);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.header));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.header));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c0, ctx.isOpened))("@slide", ctx.slide);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isShowChild);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgTemplateOutlet], encapsulation: 2, data: { animation: [
            trigger('slide', [
                state('up', style({ height: 0 })),
                state('down', style({ height: '*' })),
                transition('down => up', [animate(200, style({ height: 0 }))]),
                transition('up => down', [
                    animate(200, style({
                        height: '*'
                    }))
                ])
            ])
        ] } });
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: ChangeDetectorRef }
];
AccordionGroupComponent.propDecorators = {
    key: [{ type: Input }],
    header: [{ type: Input }],
    isOpened: [{ type: Input }],
    disabled: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onChange: [{ type: Output }],
    amItem: [{ type: HostBinding, args: ['class.am-accordion-item',] }],
    isActive: [{ type: HostBinding, args: ['class.am-accordion-item-active',] }],
    addon: [{ type: HostBinding, args: ['class.addon',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'AccordionPanel, nzm-accordion-panel',
                template: "<div\n  role=\"tab\"\n  class=\"am-accordion-header\"\n  data-scale=\"true\"\n  [attr.aria-expanded]=\"isOpened\"\n  (click)=\"checkAndToggle()\"\n>\n  <i class=\"arrow\"></i>\n  <ng-container *ngIf=\"!isTemplateRef(header)\">{{ header }}</ng-container>\n  <ng-template *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"header\"></ng-template>\n</div>\n<div\n  role=\"tabpanel\"\n  class=\"am-accordion-content\"\n  [ngClass]=\"{ 'am-accordion-content-active': isOpened }\"\n  [@slide]=\"slide\"\n  (@slide.done)=\"slideAnimationDoen($event)\"\n>\n  <div *ngIf=\"isShowChild\" class=\"am-accordion-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('slide', [
                        state('up', style({ height: 0 })),
                        state('down', style({ height: '*' })),
                        transition('down => up', [animate(200, style({ height: 0 }))]),
                        transition('up => down', [
                            animate(200, style({
                                height: '*'
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: ɵngcc1.AccordionService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { isOpened: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onOpen: [{
            type: Output
        }], onClose: [{
            type: Output
        }], onChange: [{
            type: Output
        }], amItem: [{
            type: HostBinding,
            args: ['class.am-accordion-item']
        }], isActive: [{
            type: HostBinding,
            args: ['class.am-accordion-item-active']
        }], addon: [{
            type: HostBinding,
            args: ['class.addon']
        }], key: [{
            type: Input
        }], header: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdEQsTUFBTSxPQUFPLHVCQUF1QjtBQUNwQyxJQXNCRSxZQUFvQixpQkFBbUMsRUFBVSxJQUF1QjtBQUFJLFFBQXhFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQUFTLFNBQUksR0FBSixJQUFJLENBQW1CO0FBQUMsUUF0QnpGLGdCQUFXLEdBQVksSUFBSSxDQUFDO0FBQzlCLFFBTUUsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUM1QixRQUNFLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDNUIsUUFDRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5QixRQUNFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9CLFFBQ0UsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDaEMsUUFBRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztBQUNoQyxRQUNpRCxXQUFNLEdBQUcsSUFBSSxDQUFDO0FBQy9ELFFBQXdELGFBQVEsR0FBRyxJQUFJ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dkJQLGdCQUFnQjtBQUFJLFlBUjNCLGlCQUFpQjtBQUNsQjtBQUFHO0FBR0osa0JBNkJHLEtBQUs7QUFDTixxQkFDQyxLQUFLO0FBQ04sdUJBQ0MsS0FBSztBQUNOLHVCQUNDLEtBQUs7QUFDTixxQkFDQyxNQUFNO0FBQ1Asc0JBQ0MsTUFBTTtBQUNQLHVCQUNDLE1BQU07QUFDUCxxQkFHQyxXQUFXLFNBQUMseUJBQXlCO0FBQU8sdUJBQzVDLFdBQVcsU0FBQyxnQ0FBZ0M7QUFBTyxvQkFDbkQsV0FBVyxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmcsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbC9jaGVjayc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdBY2NvcmRpb25QYW5lbCwgbnptLWFjY29yZGlvbi1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGUnLCBbXG4gICAgICBzdGF0ZSgndXAnLCBzdHlsZSh7IGhlaWdodDogMCB9KSksXG4gICAgICBzdGF0ZSgnZG93bicsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZG93biA9PiB1cCcsIFthbmltYXRlKDIwMCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXSksXG4gICAgICB0cmFuc2l0aW9uKCd1cCA9PiBkb3duJywgW1xuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBoZWlnaHQ6ICcqJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCB7XG4gIGlzU2hvd0NoaWxkOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgaXNPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1hY2NvcmRpb24taXRlbScpIHB1YmxpYyBhbUl0ZW0gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjY29yZGlvbi1pdGVtLWFjdGl2ZScpIHB1YmxpYyBpc0FjdGl2ZSA9IHRoaXMuaXNPcGVuZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWRkb24nKSBwdWJsaWMgYWRkb24gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgY2hlY2tBbmRUb2dnbGUoKSB7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIGdldCBzbGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlzT3BlbmVkID8gJ2Rvd24nIDogJ3VwJztcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd0NoaWxkID0gdHJ1ZTtcbiAgICBjb25zdCBpc09wZW5lZEJlZm9yZVdlQ2hhbmdlID0gdGhpcy5pc09wZW5lZDtcbiAgICBpZiAodGhpcy5fYWNjb3JkaW9uU2VydmljZS5hY2NvcmRpb24pIHtcbiAgICAgIHRoaXMuX2FjY29yZGlvblNlcnZpY2UuY29tcG9uZW50LmNsb3NlQWxsKCk7XG4gICAgfVxuICAgIHRoaXMuaXNPcGVuZWQgPSAhaXNPcGVuZWRCZWZvcmVXZUNoYW5nZTtcbiAgICBpZiAodGhpcy5pc09wZW5lZCkge1xuICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5pc09wZW5lZCk7XG4gIH1cblxuICBvcGVuT25Jbml0aWFsaXphdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHNsaWRlQW5pbWF0aW9uRG9lbihldmVudCkge1xuICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICdkb3duJyAmJiBldmVudC50b1N0YXRlID09PSAndXAnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc1Nob3dDaGlsZCA9IGZhbHNlO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG59XG4iXX0=