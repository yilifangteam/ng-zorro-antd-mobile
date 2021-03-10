import { Component, ViewChild, ElementRef, HostListener, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { PickerOptions } from './picker-options.provider';
import * as velocity from '../core/util/velocity';
import * as touchEvent from '../core/util/touch-event';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PickerRef } from './picker-ref.class';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './picker-options.provider';
import * as ɵngcc2 from '../locale-provider/locale-provider.service';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["picker"];
function PickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("click", function PickerComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.cancel(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("am-picker-popup-mask ", ctx_r0.maskTransitionName, "");
} }
function PickerComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", val_r8.label ? val_r8.label : val_r8, " ");
} }
function PickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "div", 13);
    ɵngcc0.ɵɵelement(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "div", 15);
    ɵngcc0.ɵɵtemplate(4, PickerComponent_div_14_div_4_Template, 2, 2, "div", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.options.indicatorStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("id", i_r6);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", item_r5);
} }
export class PickerComponent extends PickerRef {
    constructor(elementRef, options, _localeProviderService) {
        super();
        this.elementRef = elementRef;
        this.options = options;
        this._localeProviderService = _localeProviderService;
        this.transitionName = 'am-slide-up-enter am-slide-up-enter-active';
        this.maskTransitionName = 'am-fade-enter am-fade-enter-active';
        this.startY = 0;
        this.differY = 0;
        this.currentY = 0;
        this.len = 0;
        this.dom = null;
        this.index = 0;
        this.maxY = 0;
        this.lineHeight = 34;
        this.dataForRender = [];
        this.selectedTarget = [];
        this.isMouseDown = false;
        this.Velocity = velocity.getVelocity();
        this._unsubscribe$ = new Subject();
        this.onChange = (_) => { };
    }
    panstart(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || this.options.disabled) {
            return;
        }
        this.isMouseDown = true;
        event.preventDefault();
        this.dom = touchEvent.getEventTarget(event).target.parentElement.children[2];
        this.len = this.dom.children.length;
        this.maxY = -(this.len - 1);
        if (this.dom.style.transform === 'translateY(0px)') {
            this.currentY = 0;
            this.maxY = -(this.len - 1);
        }
        else if (this.selectedTarget.length > 0) {
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    this.currentY = item.currentY;
                }
            });
        }
        this.startY = touchEvent.getEventTarget(event).clientY;
    }
    panmove(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
            return;
        }
        event.preventDefault();
        const ev = touchEvent.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        this.Velocity.record(this.differY);
        this.dom.style.transition = 'transform 0s';
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
    }
    panend(event) {
        if (!event.target.classList.contains('am-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
            return;
        }
        this.isMouseDown = false;
        event.preventDefault();
        const ev = touchEvent.getEventTarget(event);
        this.differY = ev.clientY - this.startY;
        let time = 0.3;
        const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
        if (velocity) {
            this.differY = velocityTemp * 40 + this.differY;
            time = Math.abs(velocityTemp) * 0.1;
        }
        this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
        if (this.differY <= -this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY <= this.maxY) {
                this.currentY = this.maxY;
            }
        }
        else if (this.differY >= this.lineHeight / 2) {
            this.currentY += Math.floor(this.differY / this.lineHeight);
            if (this.currentY >= 0) {
                this.currentY = 0;
            }
        }
        if (this.selectedTarget.length > 0) {
            let hasKey = false;
            this.selectedTarget.forEach(item => {
                if (item.targetId === event.target.id) {
                    hasKey = true;
                    item.targetId = event.target.id;
                    item.currentY = this.currentY;
                }
                else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
                    item.currentY = 0;
                }
            });
            if (!hasKey) {
                this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
            }
        }
        else {
            this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
        }
        this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
        this.index = Math.floor(Math.abs(this.currentY / 1));
        this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
        if (this.options.value !== this.combineReslut()) {
            this.options.onPickerChange.emit(this.combineReslut());
            this.onChange(this.combineReslut());
        }
    }
    init() {
        if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
            this.dataForRender.push(this.generateArrayData(this.options.data));
        }
        if (this.options.value.length > 0) {
            this.getInitValueIndex(this.dataForRender);
        }
        else {
            this.checkArrayDeep(this.options.data[0]);
            for (let index = 0; index < this.dataForRender.length; index++) {
                this.selectedTarget.push({ targetId: `${index}`, currentY: 0 });
            }
        }
    }
    getInitValueIndex(dataTemp) {
        const self = this;
        self.selectedTarget = [];
        self.options.value.forEach((element, i) => {
            dataTemp.forEach((item, j) => {
                item.forEach((item1, k) => {
                    if ((element === item1.label || element === item1.value || element === item1) && i === j) {
                        self.checkArrayDeep(self.dataForRender[i][k], false);
                        self.selectedTarget.push({ targetId: `${i}`, currentY: -k });
                    }
                });
            });
        });
    }
    reloadPicker() {
        if (!this._picker || this._picker === undefined) {
            return;
        }
        this.currentPicker = this._picker.element.nativeElement;
        if (this.currentPicker && this.currentPicker.children.length > 0) {
            const self = this;
            setTimeout(() => {
                self.selectedTarget.forEach((item, i) => {
                    self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
                    const index = parseInt(item.currentY, 0);
                    self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
                });
            }, 0);
        }
    }
    generateArrayData(targetArr) {
        const tempArr = [];
        if (targetArr instanceof Array) {
            targetArr.forEach((item, i) => {
                if (item instanceof Array) {
                    const keys = Object.keys(item);
                    const element = {};
                    keys.forEach(key => {
                        element[key] = targetArr[i][key] || targetArr[i];
                    });
                    tempArr.push(element);
                }
                else {
                    tempArr.push(item);
                }
            });
            return tempArr;
        }
        return [];
    }
    checkArrayDeep(parent, init = true) {
        if (parent instanceof Object && parent.children && parent.children.length > 0) {
            if (this.generateArrayData(parent.children).length > 0 && this.dataForRender.length < this.options.cols) {
                let hasValue = false;
                this.dataForRender.filter((item, index) => {
                    if (JSON.stringify(item) === JSON.stringify(parent.children)) {
                        hasValue = true;
                    }
                });
                if (!hasValue) {
                    this.dataForRender.push(this.generateArrayData(parent.children));
                }
                if (init) {
                    this.checkArrayDeep(parent.children[0]);
                }
            }
        }
    }
    ok() {
        if (this.options.updateNgModel) {
            this.options.updateNgModel(this.combineReslut());
        }
        if (this.options.confirm) {
            this.options.confirm(this.combineReslut());
        }
        this.setTransitionName();
    }
    combineReslut() {
        const result = [];
        const self = this;
        self.selectedTarget.forEach(item => {
            if (self.dataForRender.length > 0 && self.dataForRender.length >= parseInt(item.targetId, 0) + 1) {
                const curItem = self.dataForRender[parseInt(item.targetId, 0)][-item.currentY];
                if (curItem !== undefined) {
                    result.push(curItem);
                }
            }
        });
        return result;
    }
    cancel() {
        this.setTransitionName();
        this.options.onDismiss.emit();
        if (this.options.cancel) {
            this.options.cancel();
        }
    }
    setTransitionName() {
        this.transitionName = 'am-slide-up-leave am-slide-up-leave-active';
        this.maskTransitionName = 'am-fade-leave am-fade-leave-active';
        setTimeout(() => {
            this.options.hidePicker();
        }, 200);
    }
    setCurrentSelected(target, index) {
        if (!this.options.cascade) {
            return;
        }
        const a = this.dataForRender.slice(0, target + 1);
        this.dataForRender = a;
        this.checkArrayDeep(this.dataForRender[target][index]);
        if (this.selectedTarget.length > 0 && this.selectedTarget.length < this.dataForRender.length) {
            for (let i = 0; i < this.dataForRender.length; i++) {
                if (i > target) {
                    if (i < this.selectedTarget.length) {
                        this.selectedTarget[i] = { targetId: `${i}`, currentY: 0 };
                    }
                    else {
                        this.selectedTarget.push({ targetId: `${i}`, currentY: 0 });
                    }
                }
            }
        }
        setTimeout(() => {
            this.dataForRender.forEach((item, i) => {
                if (target !== `${i}` && i > target) {
                    this._picker.element.nativeElement.children[i].children[2].style.transition = 'transform .3s';
                    this._picker.element.nativeElement.children[i].children[2].style.transform = 'translateY(0px)';
                }
            });
        }, 0);
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.options.hidePicker) {
            this.options.hidePicker();
        }
    }
    destroy() {
        this.close();
    }
    ngOnInit() {
        this.init();
        this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
            const locale = this._localeProviderService.getLocaleSubObj('Picker');
            this.options.okText = this.options.okText === '确定' ? locale.okText : this.options.okText;
            this.options.dismissText = this.options.dismissText === '取消' ? locale.dismissText : this.options.dismissText;
        });
    }
    ngAfterViewInit() {
        this.reloadPicker();
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
PickerComponent.ɵfac = function PickerComponent_Factory(t) { return new (t || PickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PickerOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.LocaleProviderService)); };
PickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PickerComponent, selectors: [["Picker"]], viewQuery: function PickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._picker = _t.first);
    } }, hostBindings: function PickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function PickerComponent_mousedown_HostBindingHandler($event) { return ctx.panstart($event); })("touchstart", function PickerComponent_touchstart_HostBindingHandler($event) { return ctx.panstart($event); })("mousemove", function PickerComponent_mousemove_HostBindingHandler($event) { return ctx.panmove($event); })("touchmove", function PickerComponent_touchmove_HostBindingHandler($event) { return ctx.panmove($event); })("mouseup", function PickerComponent_mouseup_HostBindingHandler($event) { return ctx.panend($event); })("mouseleave", function PickerComponent_mouseleave_HostBindingHandler($event) { return ctx.panend($event); })("touchend", function PickerComponent_touchend_HostBindingHandler($event) { return ctx.panend($event); });
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 15, vars: 8, consts: [[3, "class", "click", 4, "ngIf"], [2, "min-height", "280px"], [1, "am-picker-popup-content"], [1, "am-picker-popup-body"], [1, "am-picker-popup-header"], [1, "am-picker-popup-item", "am-picker-popup-header-left", 3, "click"], [1, "am-picker-popup-item", "am-picker-popup-title"], [1, "am-picker-popup-item", "am-picker-popup-header-right", 3, "click"], [1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [3, "click"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px", 3, "ngStyle"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]], template: function PickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, PickerComponent_div_0_Template, 1, 3, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div");
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵlistener("click", function PickerComponent_Template_div_click_6_listener() { return ctx.cancel(); });
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵlistener("click", function PickerComponent_Template_div_click_10_listener() { return ctx.ok(); });
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 8, 9);
        ɵngcc0.ɵɵtemplate(14, PickerComponent_div_14_Template, 5, 3, "div", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.mask);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("am-picker-popup am-picker-popup-wrap ", ctx.transitionName, "");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.options.dismissText, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.options.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.options.okText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dataForRender);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgStyle], encapsulation: 2 });
PickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: PickerOptions },
    { type: LocaleProviderService }
];
PickerComponent.propDecorators = {
    _picker: [{ type: ViewChild, args: ['picker', { read: ViewContainerRef, static: true },] }],
    panstart: [{ type: HostListener, args: ['mousedown', ['$event'],] }, { type: HostListener, args: ['touchstart', ['$event'],] }],
    panmove: [{ type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }],
    panend: [{ type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['mouseleave', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerComponent, [{
        type: Component,
        args: [{
                selector: 'Picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup am-picker-popup-wrap {{ transitionName }}\" style=\" min-height: 280px\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">{{ options.okText }}</div>\n        </div>\n        <div class=\"am-picker\" style=\"flex-direction: row; align-items: center;\" #picker>\n          <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"options.indicatorStyle\"></div>\n            <div class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\" id=\"{{ i }}\"></div>\n            <div class=\"am-picker-col-content\">\n              <div *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\" id=\"{{ i }}\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.PickerOptions }, { type: ɵngcc2.LocaleProviderService }]; }, { panstart: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }, {
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], panmove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }, {
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], panend: [{
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }, {
            type: HostListener,
            args: ['touchend', ['$event']]
        }], _picker: [{
            type: ViewChild,
            args: ['picker', { read: ViewContainerRef, static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUVaLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sS0FBSyxRQUFRLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxLQUFLLFVBQVUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0MsTUFBTSxPQUFPLGVBQWtDLFNBQVEsU0FBZTtBQUFHLElBb0h2RSxZQUNTLFVBQXNCLEVBQ3RCLE9BQXNCLEVBQ3JCLHNCQUE2QztBQUN0RCxRQUNDLEtBQUssRUFBRSxDQUFDO0FBQ1osUUFMVyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtBQUFDLFFBQ3RCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7QUFDekQsUUF2SEUsbUJBQWMsR0FBVyw0Q0FBNEMsQ0FBQztBQUN4RSxRQUFFLHVCQUFrQixHQUFXLG9DQUFvQyxDQUFDO0FBQ3BFLFFBQUUsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUNyQixRQUFFLFlBQU8sR0FBVyxDQUFDLENBQUM7QUFDdEIsUUFB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QUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSDsyQ0EvVEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxRQUFRLGtCQUNsQjs7Ozs7Ozs7b0tBQXNDLGtCQUN0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBQ0k7QUFBQztBQUF5QyxZQW5CN0MsVUFBVTtBQUNWLFlBS08sYUFBYTtBQUFJLFlBR2pCLHFCQUFxQjtBQUFHO0FBQUc7QUFBbUMsc0JBNkJwRSxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDMUQsdUJBRUYsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ25DLHNCQXVCRixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3BDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDbEMscUJBWUYsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNsQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3JDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9waWNrZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgKiBhcyB2ZWxvY2l0eSBmcm9tICcuLi9jb3JlL3V0aWwvdmVsb2NpdHknO1xuaW1wb3J0ICogYXMgdG91Y2hFdmVudCBmcm9tICcuLi9jb3JlL3V0aWwvdG91Y2gtZXZlbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBpY2tlclJlZiB9IGZyb20gJy4vcGlja2VyLXJlZi5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1BpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIFBpY2tlclJlZjxULCBSPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgdHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1zbGlkZS11cC1lbnRlciBhbS1zbGlkZS11cC1lbnRlci1hY3RpdmUnO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1mYWRlLWVudGVyIGFtLWZhZGUtZW50ZXItYWN0aXZlJztcbiAgc3RhcnRZOiBudW1iZXIgPSAwO1xuICBkaWZmZXJZOiBudW1iZXIgPSAwO1xuICBjdXJyZW50WTogbnVtYmVyID0gMDtcbiAgbGVuOiBudW1iZXIgPSAwO1xuICBkb206IGFueSA9IG51bGw7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBtYXhZOiBudW1iZXIgPSAwO1xuICBsaW5lSGVpZ2h0OiBudW1iZXIgPSAzNDtcbiAgZGF0YUZvclJlbmRlcjogYW55W10gPSBbXTtcbiAgc2VsZWN0ZWRUYXJnZXQ6IGFueVtdID0gW107XG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIFZlbG9jaXR5ID0gdmVsb2NpdHkuZ2V0VmVsb2NpdHkoKTtcbiAgY3VycmVudFBpY2tlcjogYW55O1xuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgncGlja2VyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBfcGlja2VyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICBwYW5zdGFydChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykgfHwgdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kb20gPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuZG9tLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG5cbiAgICBpZiAodGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID09PSAndHJhbnNsYXRlWSgwcHgpJykge1xuICAgICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gICAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0SWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFkgPSBpdGVtLmN1cnJlbnRZO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zdGFydFkgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5jbGllbnRZO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykgfHwgIXRoaXMuaXNNb3VzZURvd24gfHwgdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZXYgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICB0aGlzLmRpZmZlclkgPSBldi5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgdGhpcy5WZWxvY2l0eS5yZWNvcmQodGhpcy5kaWZmZXJZKTtcbiAgICB0aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwcyc7XG4gICAgdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0aGlzLmN1cnJlbnRZICogdGhpcy5saW5lSGVpZ2h0ICsgdGhpcy5kaWZmZXJZfXB4KWA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbS1waWNrZXItY29sLW1hc2snKSB8fCAhdGhpcy5pc01vdXNlRG93biB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZXYgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICB0aGlzLmRpZmZlclkgPSBldi5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgbGV0IHRpbWUgPSAwLjM7XG4gICAgY29uc3QgdmVsb2NpdHlUZW1wID0gdGhpcy5WZWxvY2l0eS5nZXRWZWxvY2l0eSh0aGlzLmRpZmZlclkpICogNDtcbiAgICBpZiAodmVsb2NpdHkpIHtcbiAgICAgIHRoaXMuZGlmZmVyWSA9IHZlbG9jaXR5VGVtcCAqIDQwICsgdGhpcy5kaWZmZXJZO1xuICAgICAgdGltZSA9IE1hdGguYWJzKHZlbG9jaXR5VGVtcCkgKiAwLjE7XG4gICAgfVxuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyAodGltZSA8IDAuMyA/IDAuMyA6IHRpbWUpICsgJ3MnO1xuICAgIGlmICh0aGlzLmRpZmZlclkgPD0gLXRoaXMubGluZUhlaWdodCAvIDIpIHtcbiAgICAgIHRoaXMuY3VycmVudFkgKz0gTWF0aC5mbG9vcih0aGlzLmRpZmZlclkgLyB0aGlzLmxpbmVIZWlnaHQpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFkgPD0gdGhpcy5tYXhZKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB0aGlzLm1heFk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpZmZlclkgPj0gdGhpcy5saW5lSGVpZ2h0IC8gMikge1xuICAgICAgdGhpcy5jdXJyZW50WSArPSBNYXRoLmZsb29yKHRoaXMuZGlmZmVyWSAvIHRoaXMubGluZUhlaWdodCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50WSA+PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgaGFzS2V5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRhcmdldElkID09PSBldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgICBoYXNLZXkgPSB0cnVlO1xuICAgICAgICAgIGl0ZW0udGFyZ2V0SWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgaXRlbS5jdXJyZW50WSA9IHRoaXMuY3VycmVudFk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoaXRlbS50YXJnZXRJZCwgMCkgPiBwYXJzZUludChldmVudC50YXJnZXQuaWQsIDApICYmIHRoaXMub3B0aW9ucy5jYXNjYWRlKSB7XG4gICAgICAgICAgaXRlbS5jdXJyZW50WSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5wdXNoKHsgdGFyZ2V0SWQ6IGV2ZW50LnRhcmdldC5pZCwgY3VycmVudFk6IHRoaXMuY3VycmVudFkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBldmVudC50YXJnZXQuaWQsIGN1cnJlbnRZOiB0aGlzLmN1cnJlbnRZIH0pO1xuICAgIH1cbiAgICB0aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFkgKiB0aGlzLmxpbmVIZWlnaHR9cHgpYDtcbiAgICB0aGlzLmluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmN1cnJlbnRZIC8gMSkpO1xuICAgIHRoaXMuc2V0Q3VycmVudFNlbGVjdGVkKHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCwgMCksIHRoaXMuaW5kZXgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsdWUgIT09IHRoaXMuY29tYmluZVJlc2x1dCgpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25QaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbWJpbmVSZXNsdXQoKSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY29tYmluZVJlc2x1dCgpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgb3B0aW9uczogUGlja2VyT3B0aW9ucyxcbiAgICBwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55W10pID0+IHt9O1xuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGggPT09IDAgJiYgdGhpcy5nZW5lcmF0ZUFycmF5RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLnB1c2godGhpcy5nZW5lcmF0ZUFycmF5RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0SW5pdFZhbHVlSW5kZXgodGhpcy5kYXRhRm9yUmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja0FycmF5RGVlcCh0aGlzLm9wdGlvbnMuZGF0YVswXSk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kYXRhRm9yUmVuZGVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogYCR7aW5kZXh9YCwgY3VycmVudFk6IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5pdFZhbHVlSW5kZXgoZGF0YVRlbXApIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0ID0gW107XG4gICAgc2VsZi5vcHRpb25zLnZhbHVlLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGRhdGFUZW1wLmZvckVhY2goKGl0ZW0sIGopID0+IHtcbiAgICAgICAgaXRlbS5mb3JFYWNoKChpdGVtMSwgaykgPT4ge1xuICAgICAgICAgIGlmICgoZWxlbWVudCA9PT0gaXRlbTEubGFiZWwgfHwgZWxlbWVudCA9PT0gaXRlbTEudmFsdWUgfHwgZWxlbWVudCA9PT0gaXRlbTEpICYmIGkgPT09IGopIHtcbiAgICAgICAgICAgIHNlbGYuY2hlY2tBcnJheURlZXAoc2VsZi5kYXRhRm9yUmVuZGVyW2ldW2tdLCBmYWxzZSk7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogYCR7aX1gLCBjdXJyZW50WTogLWsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVsb2FkUGlja2VyKCkge1xuICAgIGlmICghdGhpcy5fcGlja2VyIHx8IHRoaXMuX3BpY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFBpY2tlciA9IHRoaXMuX3BpY2tlci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuY3VycmVudFBpY2tlciAmJiB0aGlzLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgc2VsZi5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4zcyc7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChpdGVtLmN1cnJlbnRZLCAwKTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIHNlbGYubGluZUhlaWdodH1weClgO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQXJyYXlEYXRhKHRhcmdldEFycikge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBpZiAodGFyZ2V0QXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRhcmdldEFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaXRlbSk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHt9O1xuICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdGFyZ2V0QXJyW2ldW2tleV0gfHwgdGFyZ2V0QXJyW2ldO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRlbXBBcnIucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wQXJyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRlbXBBcnI7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNoZWNrQXJyYXlEZWVwKHBhcmVudCwgaW5pdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgT2JqZWN0ICYmIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVBcnJheURhdGEocGFyZW50LmNoaWxkcmVuKS5sZW5ndGggPiAwICYmIHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGggPCB0aGlzLm9wdGlvbnMuY29scykge1xuICAgICAgICBsZXQgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHBhcmVudC5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLnB1c2godGhpcy5nZW5lcmF0ZUFycmF5RGF0YShwYXJlbnQuY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tBcnJheURlZXAocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9rKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCkge1xuICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZU5nTW9kZWwodGhpcy5jb21iaW5lUmVzbHV0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpcm0pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb25maXJtKHRoaXMuY29tYmluZVJlc2x1dCgpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uTmFtZSgpO1xuICB9XG5cbiAgY29tYmluZVJlc2x1dCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoc2VsZi5kYXRhRm9yUmVuZGVyLmxlbmd0aCA+IDAgJiYgc2VsZi5kYXRhRm9yUmVuZGVyLmxlbmd0aCA+PSBwYXJzZUludChpdGVtLnRhcmdldElkLCAwKSArIDEpIHtcbiAgICAgICAgY29uc3QgY3VySXRlbSA9IHNlbGYuZGF0YUZvclJlbmRlcltwYXJzZUludChpdGVtLnRhcmdldElkLCAwKV1bLWl0ZW0uY3VycmVudFldO1xuICAgICAgICBpZiAoY3VySXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VySXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICB0aGlzLm9wdGlvbnMub25EaXNtaXNzLmVtaXQoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhbmNlbCkge1xuICAgICAgdGhpcy5vcHRpb25zLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbk5hbWUgPSAnYW0tc2xpZGUtdXAtbGVhdmUgYW0tc2xpZGUtdXAtbGVhdmUtYWN0aXZlJztcbiAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9ICdhbS1mYWRlLWxlYXZlIGFtLWZhZGUtbGVhdmUtYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5oaWRlUGlja2VyKCk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRTZWxlY3RlZCh0YXJnZXQsIGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FzY2FkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhID0gdGhpcy5kYXRhRm9yUmVuZGVyLnNsaWNlKDAsIHRhcmdldCArIDEpO1xuICAgIHRoaXMuZGF0YUZvclJlbmRlciA9IGE7XG4gICAgdGhpcy5jaGVja0FycmF5RGVlcCh0aGlzLmRhdGFGb3JSZW5kZXJbdGFyZ2V0XVtpbmRleF0pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGggPCB0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+IHRhcmdldCkge1xuICAgICAgICAgIGlmIChpIDwgdGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXRbaV0gPSB7IHRhcmdldElkOiBgJHtpfWAsIGN1cnJlbnRZOiAwIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBgJHtpfWAsIGN1cnJlbnRZOiAwIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YUZvclJlbmRlci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IGAke2l9YCAmJiBpID4gdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fcGlja2VyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuM3MnO1xuICAgICAgICAgIHRoaXMuX3BpY2tlci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogUGlja2VyQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZGVQaWNrZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5oaWRlUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsZTogYW55ID0gdGhpcy5fbG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmdldExvY2FsZVN1Yk9iaignUGlja2VyJyk7XG4gICAgICB0aGlzLm9wdGlvbnMub2tUZXh0ID0gdGhpcy5vcHRpb25zLm9rVGV4dCA9PT0gJ+ehruWumicgPyBsb2NhbGUub2tUZXh0IDogdGhpcy5vcHRpb25zLm9rVGV4dDtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNtaXNzVGV4dCA9IHRoaXMub3B0aW9ucy5kaXNtaXNzVGV4dCA9PT0gJ+WPlua2iCcgPyBsb2NhbGUuZGlzbWlzc1RleHQgOiB0aGlzLm9wdGlvbnMuZGlzbWlzc1RleHQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWxvYWRQaWNrZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==