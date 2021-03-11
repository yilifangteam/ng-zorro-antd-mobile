import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionService } from '../accordion.service';
import { isTemplateRef } from '../../core/util/check';
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
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFxQnRELE1BQU0sT0FBTyx1QkFBdUI7SUF1QmxDLFlBQW9CLGlCQUFtQyxFQUFVLElBQXVCO1FBQXBFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQXRCeEYsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFPNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRWlCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDUCxhQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBRTJDLENBQUM7SUFFNUYsY0FBYztRQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsc0JBQXNCLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSztRQUN0QixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLHNxQkFBK0M7Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDZixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNqQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQ3ZCLE9BQU8sQ0FDTCxHQUFHLEVBQ0gsS0FBSyxDQUFDO2dDQUNKLE1BQU0sRUFBRSxHQUFHOzZCQUNaLENBQUMsQ0FDSDt5QkFDRixDQUFDO3FCQUNILENBQUM7aUJBQ0g7YUFDRjs7O1lBckJRLGdCQUFnQjtZQVJ2QixpQkFBaUI7OztrQkFpQ2hCLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsTUFBTTtzQkFFTixNQUFNO3VCQUVOLE1BQU07cUJBSU4sV0FBVyxTQUFDLHlCQUF5Qjt1QkFDckMsV0FBVyxTQUFDLGdDQUFnQztvQkFDNUMsV0FBVyxTQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0QmluZGluZyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLi9hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vLi4vY29yZS91dGlsL2NoZWNrJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FjY29yZGlvblBhbmVsLCBuem0tYWNjb3JkaW9uLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZScsIFtcbiAgICAgIHN0YXRlKCd1cCcsIHN0eWxlKHsgaGVpZ2h0OiAwIH0pKSxcbiAgICAgIHN0YXRlKCdkb3duJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdkb3duID0+IHVwJywgW2FuaW1hdGUoMjAwLCBzdHlsZSh7IGhlaWdodDogMCB9KSldKSxcbiAgICAgIHRyYW5zaXRpb24oJ3VwID0+IGRvd24nLCBbXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIGhlaWdodDogJyonXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IHtcbiAgaXNTaG93Q2hpbGQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGtleTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICBpc09wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWFjY29yZGlvbi1pdGVtJykgcHVibGljIGFtSXRlbSA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYWNjb3JkaW9uLWl0ZW0tYWN0aXZlJykgcHVibGljIGlzQWN0aXZlID0gdGhpcy5pc09wZW5lZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hZGRvbicpIHB1YmxpYyBhZGRvbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBjaGVja0FuZFRvZ2dsZSgpIHtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgZ2V0IHNsaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuZWQgPyAnZG93bicgOiAndXAnO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNTaG93Q2hpbGQgPSB0cnVlO1xuICAgIGNvbnN0IGlzT3BlbmVkQmVmb3JlV2VDaGFuZ2UgPSB0aGlzLmlzT3BlbmVkO1xuICAgIGlmICh0aGlzLl9hY2NvcmRpb25TZXJ2aWNlLmFjY29yZGlvbikge1xuICAgICAgdGhpcy5fYWNjb3JkaW9uU2VydmljZS5jb21wb25lbnQuY2xvc2VBbGwoKTtcbiAgICB9XG4gICAgdGhpcy5pc09wZW5lZCA9ICFpc09wZW5lZEJlZm9yZVdlQ2hhbmdlO1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbmVkKTtcbiAgfVxuXG4gIG9wZW5PbkluaXRpYWxpemF0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgc2xpZGVBbmltYXRpb25Eb2VuKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSA9PT0gJ2Rvd24nICYmIGV2ZW50LnRvU3RhdGUgPT09ICd1cCcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzU2hvd0NoaWxkID0gZmFsc2U7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==