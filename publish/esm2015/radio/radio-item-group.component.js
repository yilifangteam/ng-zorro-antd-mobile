import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Output, QueryList, forwardRef, EventEmitter, ContentChildren, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RadioItemComponent } from './radio-item.component';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
export const RADIO_ITEM_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioItemGroupComponent),
    multi: true
};
export class RadioItemGroupComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = new EventEmitter();
    }
    updateChildrenStatus() {
        if (this.radioItems && typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
            Promise.resolve().then(() => {
                this.radioItems.forEach(radioItem => {
                    radioItem.checked = radioItem.value === this.selectedValue;
                    radioItem.markForCheck();
                });
            });
        }
    }
    ngAfterContentInit() {
        this.radioItems.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radioItems.map(radioItem => radioItem.select$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(radioItem => {
                if (typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
                    this.selectedValue = radioItem.value;
                    this._ngModelOnChange(radioItem.value);
                    this.updateChildrenStatus();
                    if (this.onChange) {
                        this.onChange.emit({ name: radioItem.name, value: radioItem.value });
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        if (typeof value !== 'undefined' && null !== value) {
            this.selectedValue = value;
            this.updateChildrenStatus();
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this._ngModelOnChange = fn;
    }
    registerOnTouched(fn) {
        this._ngModelOnTouched = fn;
    }
}
RadioItemGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'RadioItemGroup, nzm-radio-item-group',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
            },] }
];
RadioItemGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioItemGroupComponent.propDecorators = {
    radioItems: [{ type: ContentChildren, args: [forwardRef(() => RadioItemComponent),] }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInJhZGlvL3JhZGlvLWl0ZW0tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFHTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVNGLE1BQU0sT0FBTyx1QkFBdUI7SUFhbEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYbEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFTakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFFRSxDQUFDO0lBRTlDLG9CQUFvQjtRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvRixPQUFPLENBQUMsT0FB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Qzt1QkFFcEQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgZm9yd2FyZFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYWRpb0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSYWRpb1N0YXR1cyB9IGZyb20gJy4vUHJvcHNUeXBlJztcblxuZXhwb3J0IGNvbnN0IFJBRElPX0lURU1fR1JPVVBfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1JhZGlvSXRlbUdyb3VwLCBuem0tcmFkaW8taXRlbS1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1pdGVtLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1JBRElPX0lURU1fR1JPVVBfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvSXRlbUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBzZWxlY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9uZ01vZGVsT25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiB7fTtcbiAgcHJpdmF0ZSBfbmdNb2RlbE9uVG91Y2hlZDogKCkgPT4ge307XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFJhZGlvSXRlbUNvbXBvbmVudCkpIHJhZGlvSXRlbXM6IFF1ZXJ5TGlzdDxSYWRpb0l0ZW1Db21wb25lbnQ+O1xuXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmFkaW9TdGF0dXM+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHVwZGF0ZUNoaWxkcmVuU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLnJhZGlvSXRlbXMgJiYgdHlwZW9mIHRoaXMuc2VsZWN0ZWRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbnVsbCAhPT0gdGhpcy5zZWxlY3RlZFZhbHVlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yYWRpb0l0ZW1zLmZvckVhY2gocmFkaW9JdGVtID0+IHtcbiAgICAgICAgICByYWRpb0l0ZW0uY2hlY2tlZCA9IHJhZGlvSXRlbS52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIHJhZGlvSXRlbS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5yYWRpb0l0ZW1zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9JdGVtcy5tYXAocmFkaW9JdGVtID0+IHJhZGlvSXRlbS5zZWxlY3QkKSlcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZShyYWRpb0l0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG51bGwgIT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSByYWRpb0l0ZW0udmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuX25nTW9kZWxPbkNoYW5nZShyYWRpb0l0ZW0udmFsdWUpO1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgbmFtZTogcmFkaW9JdGVtLm5hbWUsIHZhbHVlOiByYWRpb0l0ZW0udmFsdWUgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbnVsbCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fbmdNb2RlbE9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=