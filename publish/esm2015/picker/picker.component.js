import { Component, ViewChild, ElementRef, HostListener, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { PickerOptions } from './picker-options.provider';
import * as velocity from '../core/util/velocity';
import * as touchEvent from '../core/util/touch-event';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PickerRef } from './picker-ref.class';
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
PickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'Picker',
                template: "<div *ngIf=\"options.mask\" class=\"am-picker-popup-mask {{ maskTransitionName }}\" (click)=\"cancel()\"></div>\n<div class=\"am-picker-popup am-picker-popup-wrap {{ transitionName }}\" style=\" min-height: 280px\">\n  <div class=\"am-picker-popup-content\">\n    <div class=\"am-picker-popup-body\">\n      <div>\n        <div class=\"am-picker-popup-header\">\n          <div class=\"am-picker-popup-item am-picker-popup-header-left\" (click)=\"cancel()\">\n            {{ options.dismissText }}\n          </div>\n          <div class=\"am-picker-popup-item am-picker-popup-title\">{{ options.title }}</div>\n          <div class=\"am-picker-popup-item am-picker-popup-header-right\" (click)=\"ok()\">{{ options.okText }}</div>\n        </div>\n        <div class=\"am-picker\" style=\"flex-direction: row; align-items: center;\" #picker>\n          <div *ngFor=\"let item of dataForRender; let i = index\" class=\"am-picker-col\">\n            <div class=\"am-picker-col-indicator \" style=\"top: 102px;\" [ngStyle]=\"options.indicatorStyle\"></div>\n            <div class=\"am-picker-col-mask\" style=\"background-size: 100% 102px;\" id=\"{{ i }}\"></div>\n            <div class=\"am-picker-col-content\">\n              <div *ngFor=\"let val of item; let i = index\" class=\"am-picker-col-item\" id=\"{{ i }}\">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicGlja2VyL3BpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFFWixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEtBQUssUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxlQUFrQyxTQUFRLFNBQWU7SUFvSHBFLFlBQ1MsVUFBc0IsRUFDdEIsT0FBc0IsRUFDckIsc0JBQTZDO1FBRXJELEtBQUssRUFBRSxDQUFDO1FBSkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3JCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUF0SHZELG1CQUFjLEdBQVcsNENBQTRDLENBQUM7UUFDdEUsdUJBQWtCLEdBQVcsb0NBQW9DLENBQUM7UUFDbEUsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVEsSUFBSSxDQUFDO1FBQ2hC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LFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3JDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9waWNrZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgKiBhcyB2ZWxvY2l0eSBmcm9tICcuLi9jb3JlL3V0aWwvdmVsb2NpdHknO1xuaW1wb3J0ICogYXMgdG91Y2hFdmVudCBmcm9tICcuLi9jb3JlL3V0aWwvdG91Y2gtZXZlbnQnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBpY2tlclJlZiB9IGZyb20gJy4vcGlja2VyLXJlZi5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1BpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIFBpY2tlclJlZjxULCBSPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgdHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1zbGlkZS11cC1lbnRlciBhbS1zbGlkZS11cC1lbnRlci1hY3RpdmUnO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICdhbS1mYWRlLWVudGVyIGFtLWZhZGUtZW50ZXItYWN0aXZlJztcbiAgc3RhcnRZOiBudW1iZXIgPSAwO1xuICBkaWZmZXJZOiBudW1iZXIgPSAwO1xuICBjdXJyZW50WTogbnVtYmVyID0gMDtcbiAgbGVuOiBudW1iZXIgPSAwO1xuICBkb206IGFueSA9IG51bGw7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBtYXhZOiBudW1iZXIgPSAwO1xuICBsaW5lSGVpZ2h0OiBudW1iZXIgPSAzNDtcbiAgZGF0YUZvclJlbmRlcjogYW55W10gPSBbXTtcbiAgc2VsZWN0ZWRUYXJnZXQ6IGFueVtdID0gW107XG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIFZlbG9jaXR5ID0gdmVsb2NpdHkuZ2V0VmVsb2NpdHkoKTtcbiAgY3VycmVudFBpY2tlcjogYW55O1xuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgncGlja2VyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBfcGlja2VyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICBwYW5zdGFydChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykgfHwgdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kb20gPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuZG9tLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG5cbiAgICBpZiAodGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID09PSAndHJhbnNsYXRlWSgwcHgpJykge1xuICAgICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gICAgICB0aGlzLm1heFkgPSAtKHRoaXMubGVuIC0gMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGFyZ2V0SWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFkgPSBpdGVtLmN1cnJlbnRZO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zdGFydFkgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KS5jbGllbnRZO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgcGFubW92ZShldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYW0tcGlja2VyLWNvbC1tYXNrJykgfHwgIXRoaXMuaXNNb3VzZURvd24gfHwgdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZXYgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICB0aGlzLmRpZmZlclkgPSBldi5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgdGhpcy5WZWxvY2l0eS5yZWNvcmQodGhpcy5kaWZmZXJZKTtcbiAgICB0aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwcyc7XG4gICAgdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0aGlzLmN1cnJlbnRZICogdGhpcy5saW5lSGVpZ2h0ICsgdGhpcy5kaWZmZXJZfXB4KWA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbS1waWNrZXItY29sLW1hc2snKSB8fCAhdGhpcy5pc01vdXNlRG93biB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZXYgPSB0b3VjaEV2ZW50LmdldEV2ZW50VGFyZ2V0KGV2ZW50KTtcbiAgICB0aGlzLmRpZmZlclkgPSBldi5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgbGV0IHRpbWUgPSAwLjM7XG4gICAgY29uc3QgdmVsb2NpdHlUZW1wID0gdGhpcy5WZWxvY2l0eS5nZXRWZWxvY2l0eSh0aGlzLmRpZmZlclkpICogNDtcbiAgICBpZiAodmVsb2NpdHkpIHtcbiAgICAgIHRoaXMuZGlmZmVyWSA9IHZlbG9jaXR5VGVtcCAqIDQwICsgdGhpcy5kaWZmZXJZO1xuICAgICAgdGltZSA9IE1hdGguYWJzKHZlbG9jaXR5VGVtcCkgKiAwLjE7XG4gICAgfVxuICAgIHRoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyAodGltZSA8IDAuMyA/IDAuMyA6IHRpbWUpICsgJ3MnO1xuICAgIGlmICh0aGlzLmRpZmZlclkgPD0gLXRoaXMubGluZUhlaWdodCAvIDIpIHtcbiAgICAgIHRoaXMuY3VycmVudFkgKz0gTWF0aC5mbG9vcih0aGlzLmRpZmZlclkgLyB0aGlzLmxpbmVIZWlnaHQpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFkgPD0gdGhpcy5tYXhZKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB0aGlzLm1heFk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpZmZlclkgPj0gdGhpcy5saW5lSGVpZ2h0IC8gMikge1xuICAgICAgdGhpcy5jdXJyZW50WSArPSBNYXRoLmZsb29yKHRoaXMuZGlmZmVyWSAvIHRoaXMubGluZUhlaWdodCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50WSA+PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgaGFzS2V5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRhcmdldElkID09PSBldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgICBoYXNLZXkgPSB0cnVlO1xuICAgICAgICAgIGl0ZW0udGFyZ2V0SWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgaXRlbS5jdXJyZW50WSA9IHRoaXMuY3VycmVudFk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoaXRlbS50YXJnZXRJZCwgMCkgPiBwYXJzZUludChldmVudC50YXJnZXQuaWQsIDApICYmIHRoaXMub3B0aW9ucy5jYXNjYWRlKSB7XG4gICAgICAgICAgaXRlbS5jdXJyZW50WSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhcmdldC5wdXNoKHsgdGFyZ2V0SWQ6IGV2ZW50LnRhcmdldC5pZCwgY3VycmVudFk6IHRoaXMuY3VycmVudFkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBldmVudC50YXJnZXQuaWQsIGN1cnJlbnRZOiB0aGlzLmN1cnJlbnRZIH0pO1xuICAgIH1cbiAgICB0aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuY3VycmVudFkgKiB0aGlzLmxpbmVIZWlnaHR9cHgpYDtcbiAgICB0aGlzLmluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmN1cnJlbnRZIC8gMSkpO1xuICAgIHRoaXMuc2V0Q3VycmVudFNlbGVjdGVkKHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCwgMCksIHRoaXMuaW5kZXgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsdWUgIT09IHRoaXMuY29tYmluZVJlc2x1dCgpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25QaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbWJpbmVSZXNsdXQoKSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY29tYmluZVJlc2x1dCgpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgb3B0aW9uczogUGlja2VyT3B0aW9ucyxcbiAgICBwcml2YXRlIF9sb2NhbGVQcm92aWRlclNlcnZpY2U6IExvY2FsZVByb3ZpZGVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55W10pID0+IHt9O1xuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGggPT09IDAgJiYgdGhpcy5nZW5lcmF0ZUFycmF5RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLnB1c2godGhpcy5nZW5lcmF0ZUFycmF5RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0SW5pdFZhbHVlSW5kZXgodGhpcy5kYXRhRm9yUmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja0FycmF5RGVlcCh0aGlzLm9wdGlvbnMuZGF0YVswXSk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kYXRhRm9yUmVuZGVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogYCR7aW5kZXh9YCwgY3VycmVudFk6IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5pdFZhbHVlSW5kZXgoZGF0YVRlbXApIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0ID0gW107XG4gICAgc2VsZi5vcHRpb25zLnZhbHVlLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGRhdGFUZW1wLmZvckVhY2goKGl0ZW0sIGopID0+IHtcbiAgICAgICAgaXRlbS5mb3JFYWNoKChpdGVtMSwgaykgPT4ge1xuICAgICAgICAgIGlmICgoZWxlbWVudCA9PT0gaXRlbTEubGFiZWwgfHwgZWxlbWVudCA9PT0gaXRlbTEudmFsdWUgfHwgZWxlbWVudCA9PT0gaXRlbTEpICYmIGkgPT09IGopIHtcbiAgICAgICAgICAgIHNlbGYuY2hlY2tBcnJheURlZXAoc2VsZi5kYXRhRm9yUmVuZGVyW2ldW2tdLCBmYWxzZSk7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LnB1c2goeyB0YXJnZXRJZDogYCR7aX1gLCBjdXJyZW50WTogLWsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVsb2FkUGlja2VyKCkge1xuICAgIGlmICghdGhpcy5fcGlja2VyIHx8IHRoaXMuX3BpY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFBpY2tlciA9IHRoaXMuX3BpY2tlci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuY3VycmVudFBpY2tlciAmJiB0aGlzLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zZWxlY3RlZFRhcmdldC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgc2VsZi5jdXJyZW50UGlja2VyLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4zcyc7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChpdGVtLmN1cnJlbnRZLCAwKTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRQaWNrZXIuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtpbmRleCAqIHNlbGYubGluZUhlaWdodH1weClgO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQXJyYXlEYXRhKHRhcmdldEFycikge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBpZiAodGFyZ2V0QXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRhcmdldEFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaXRlbSk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHt9O1xuICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdGFyZ2V0QXJyW2ldW2tleV0gfHwgdGFyZ2V0QXJyW2ldO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRlbXBBcnIucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wQXJyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRlbXBBcnI7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNoZWNrQXJyYXlEZWVwKHBhcmVudCwgaW5pdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgT2JqZWN0ICYmIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVBcnJheURhdGEocGFyZW50LmNoaWxkcmVuKS5sZW5ndGggPiAwICYmIHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGggPCB0aGlzLm9wdGlvbnMuY29scykge1xuICAgICAgICBsZXQgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHBhcmVudC5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhRm9yUmVuZGVyLnB1c2godGhpcy5nZW5lcmF0ZUFycmF5RGF0YShwYXJlbnQuY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tBcnJheURlZXAocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9rKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlTmdNb2RlbCkge1xuICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZU5nTW9kZWwodGhpcy5jb21iaW5lUmVzbHV0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpcm0pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb25maXJtKHRoaXMuY29tYmluZVJlc2x1dCgpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uTmFtZSgpO1xuICB9XG5cbiAgY29tYmluZVJlc2x1dCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNlbGVjdGVkVGFyZ2V0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoc2VsZi5kYXRhRm9yUmVuZGVyLmxlbmd0aCA+IDAgJiYgc2VsZi5kYXRhRm9yUmVuZGVyLmxlbmd0aCA+PSBwYXJzZUludChpdGVtLnRhcmdldElkLCAwKSArIDEpIHtcbiAgICAgICAgY29uc3QgY3VySXRlbSA9IHNlbGYuZGF0YUZvclJlbmRlcltwYXJzZUludChpdGVtLnRhcmdldElkLCAwKV1bLWl0ZW0uY3VycmVudFldO1xuICAgICAgICBpZiAoY3VySXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VySXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICB0aGlzLm9wdGlvbnMub25EaXNtaXNzLmVtaXQoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhbmNlbCkge1xuICAgICAgdGhpcy5vcHRpb25zLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbk5hbWUgPSAnYW0tc2xpZGUtdXAtbGVhdmUgYW0tc2xpZGUtdXAtbGVhdmUtYWN0aXZlJztcbiAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9ICdhbS1mYWRlLWxlYXZlIGFtLWZhZGUtbGVhdmUtYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5oaWRlUGlja2VyKCk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRTZWxlY3RlZCh0YXJnZXQsIGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FzY2FkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhID0gdGhpcy5kYXRhRm9yUmVuZGVyLnNsaWNlKDAsIHRhcmdldCArIDEpO1xuICAgIHRoaXMuZGF0YUZvclJlbmRlciA9IGE7XG4gICAgdGhpcy5jaGVja0FycmF5RGVlcCh0aGlzLmRhdGFGb3JSZW5kZXJbdGFyZ2V0XVtpbmRleF0pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFyZ2V0Lmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGggPCB0aGlzLmRhdGFGb3JSZW5kZXIubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YUZvclJlbmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+IHRhcmdldCkge1xuICAgICAgICAgIGlmIChpIDwgdGhpcy5zZWxlY3RlZFRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXRbaV0gPSB7IHRhcmdldElkOiBgJHtpfWAsIGN1cnJlbnRZOiAwIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYXJnZXQucHVzaCh7IHRhcmdldElkOiBgJHtpfWAsIGN1cnJlbnRZOiAwIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YUZvclJlbmRlci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IGAke2l9YCAmJiBpID4gdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fcGlja2VyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXS5jaGlsZHJlblsyXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuM3MnO1xuICAgICAgICAgIHRoaXMuX3BpY2tlci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogUGlja2VyQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZGVQaWNrZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5oaWRlUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsZTogYW55ID0gdGhpcy5fbG9jYWxlUHJvdmlkZXJTZXJ2aWNlLmdldExvY2FsZVN1Yk9iaignUGlja2VyJyk7XG4gICAgICB0aGlzLm9wdGlvbnMub2tUZXh0ID0gdGhpcy5vcHRpb25zLm9rVGV4dCA9PT0gJ+ehruWumicgPyBsb2NhbGUub2tUZXh0IDogdGhpcy5vcHRpb25zLm9rVGV4dDtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNtaXNzVGV4dCA9IHRoaXMub3B0aW9ucy5kaXNtaXNzVGV4dCA9PT0gJ+WPlua2iCcgPyBsb2NhbGUuZGlzbWlzc1RleHQgOiB0aGlzLm9wdGlvbnMuZGlzbWlzc1RleHQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWxvYWRQaWNrZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==