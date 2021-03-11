import { Component, ViewEncapsulation, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
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
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'Pagination, nzm-pagination',
                template: "<div class=\"{{ prefixCls }} {{ prefixCls }}-align-center\">\n  <Flex *ngIf=\"mode === 'button'\">\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-prev\">\n      <a Button [inline]=\"true\" [disabled]=\"current <= 1 || disabled\" (onClick)=\"onClick(current - 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.prevText)\">\n          {{ locale.prevText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.prevText)\" [ngTemplateOutlet]=\"locale.prevText\"></ng-template>\n      </a>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap\" aria-live=\"assertive\" *ngIf=\"!simple\">\n      <span class=\"active\">{{ current }}</span\n      >/\n      <span>{{ total }}</span>\n    </FlexItem>\n    <FlexItem class=\"{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-next\">\n      <a Button [inline]=\"true\" [disabled]=\"current >= total || disabled\" (onClick)=\"onClick(current + 1)\">\n        <ng-container *ngIf=\"!isTemplateRef(locale.nextText)\">\n          {{ locale.nextText }}\n        </ng-container>\n        <ng-template *ngIf=\"isTemplateRef(locale.nextText)\" [ngTemplateOutlet]=\"locale.nextText\"></ng-template>\n      </a>\n    </FlexItem>\n  </Flex>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'number'\">\n    <span class=\"active\">{{ current }}</span\n    >/<span>{{ total }}</span>\n  </div>\n\n  <div class=\"{{ prefixCls }}-wrap\" *ngIf=\"mode === 'pointer'\">\n    <div\n      *ngFor=\"let number of getNumber(total); let i = index\"\n      class=\"{{ prefixCls }}-wrap-dot {{ current === i + 1 ? prefixCls + '-wrap-dot-active' : '' }}\"\n    >\n      <span></span>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBV25GLE1BQU0sT0FBTyxtQkFBbUI7SUFpQzlCLFlBQW9CLHNCQUE2QztRQUE3QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBaENqRSxjQUFTLEdBQUcsZUFBZSxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBZ0I7WUFDN0IsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDTSxrQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRzNELFNBQUksR0FBVyxRQUFRLENBQUM7UUFFeEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVkxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFYyxDQUFDO0lBYnJFLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBTUQsYUFBYSxDQUFDLEdBQUc7UUFDZixPQUFZLEdBQUcsWUFBWSxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2pCLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFnQixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLG9yREFBMEM7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7WUFWUSxxQkFBcUI7OzttQkFxQjNCLEtBQUs7c0JBRUwsS0FBSztvQkFFTCxLQUFLO3FCQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLO3VCQVVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9sb2NhbGUtcHJvdmlkZXIuc2VydmljZSc7XG5cbmludGVyZmFjZSBMb2NhbGVWYWx1ZSB7XG4gIHByZXZUZXh0OiBzdHJpbmc7XG4gIG5leHRUZXh0OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdQYWdpbmF0aW9uLCBuem0tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcmVmaXhDbHMgPSAnYW0tcGFnaW5hdGlvbic7XG5cbiAgcHJpdmF0ZSBoYXNTZXRMb2NhbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBMb2NhbGVWYWx1ZSA9IHtcbiAgICBwcmV2VGV4dDogJycsXG4gICAgbmV4dFRleHQ6ICcnXG4gIH07XG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgbW9kZTogc3RyaW5nID0gJ2J1dHRvbic7XG4gIEBJbnB1dCgpXG4gIGN1cnJlbnQ6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpXG4gIHRvdGFsOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICBzaW1wbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG4gIHNldCBsb2NhbGUodikge1xuICAgIHRoaXMuX2xvY2FsZSA9IHY7XG4gICAgdGhpcy5oYXNTZXRMb2NhbGUgPSB0cnVlO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZVByb3ZpZGVyU2VydmljZTogTG9jYWxlUHJvdmlkZXJTZXJ2aWNlKSB7fVxuXG4gIGlzVGVtcGxhdGVSZWYoa2V5KSB7XG4gICAgcmV0dXJuIDxhbnk+a2V5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBvbkNsaWNrKHA6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudCA9IHA7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHApO1xuICB9XG5cbiAgZ2V0TnVtYmVyKHA6IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgQXJyYXkocCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9sb2NhbGVQcm92aWRlclNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIGlmICghdGhpcy5oYXNTZXRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gPExvY2FsZVZhbHVlPnRoaXMuX2xvY2FsZVByb3ZpZGVyU2VydmljZS5nZXRMb2NhbGVTdWJPYmooJ1BhZ2luYXRpb24nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==