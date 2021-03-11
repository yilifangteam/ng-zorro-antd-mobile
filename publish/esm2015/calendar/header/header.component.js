import { Component, ViewEncapsulation, Input, Output, HostBinding, TemplateRef, EventEmitter } from '@angular/core';
export class CalendarHeaderComponent {
    constructor() {
        this.closeIcon_component = false;
        this._closeIcon = 'X';
        this.onCancel = new EventEmitter();
        this.onClear = new EventEmitter();
        this.header = true;
    }
    get locale() {
        return this._locale;
    }
    set locale(value) {
        this._locale = value;
    }
    get closeIcon() {
        return this._closeIcon;
    }
    set closeIcon(value) {
        if (value instanceof TemplateRef) {
            this._closeIcon = value;
            this.closeIcon_component = true;
        }
        else {
            this._closeIcon = value;
            this.closeIcon_component = false;
        }
    }
    get showClear() {
        return this._showClear;
    }
    set showClear(value) {
        this._showClear = value;
    }
    triggerCancel() {
        if (this.onCancel) {
            this.onCancel.emit();
        }
    }
    triggerClear() {
        if (this.onClear) {
            this.onClear.emit();
        }
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'CalendarHeader, nzm-calendar-header',
                template: "<span *ngIf=\"!closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\" [innerHTML]=\"closeIcon\"></span>\n<span *ngIf=\"closeIcon_component\" class=\"left\" (click)=\"triggerCancel()\">\n  <ng-template [ngTemplateOutlet]=\"closeIcon\"></ng-template>\n</span>\n<span class=\"title\">{{ title || locale.title }}</span>\n<span *ngIf=\"showClear\" class=\"right\" (click)=\"triggerClear()\">{{ clearIcon || locale.clear }}</span>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
CalendarHeaderComponent.ctorParameters = () => [];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    closeIcon: [{ type: Input }],
    showClear: [{ type: Input }],
    onCancel: [{ type: Output }],
    onClear: [{ type: Output }],
    header: [{ type: HostBinding, args: ['class.header',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBILE1BQU0sT0FBTyx1QkFBdUI7SUEyQ2xDO1FBekNBLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUs3QixlQUFVLEdBQVEsR0FBRyxDQUFDO1FBOEI5QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFFckMsQ0FBQztJQWxDaEIsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBZ0M7UUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQVcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBQ0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFVRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxnY0FBc0M7Z0JBQ3RDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O3FCQVVFLEtBQUs7d0JBT0wsS0FBSzt3QkFhTCxLQUFLO3VCQU9MLE1BQU07c0JBRU4sTUFBTTtxQkFHTixXQUFXLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDYWxlbmRhckhlYWRlciwgbnptLWNhbGVuZGFyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2VJY29uX2NvbXBvbmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBjbGVhckljb246IGFueTtcblxuICBwcml2YXRlIF9sb2NhbGU6IERhdGVNb2RlbHMuTG9jYWxlO1xuICBwcml2YXRlIF9zaG93Q2xlYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Nsb3NlSWNvbjogYW55ID0gJ1gnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGNsb3NlSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VJY29uO1xuICB9XG4gIHNldCBjbG9zZUljb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fY2xvc2VJY29uID0gdmFsdWU7XG4gICAgICB0aGlzLmNsb3NlSWNvbl9jb21wb25lbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbG9zZUljb24gPSA8c3RyaW5nPnZhbHVlO1xuICAgICAgdGhpcy5jbG9zZUljb25fY29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzaG93Q2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDbGVhcjtcbiAgfVxuICBzZXQgc2hvd0NsZWFyKHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NsZWFyID0gdmFsdWU7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25DbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlcicpIGhlYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHRyaWdnZXJDYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMub25DYW5jZWwpIHtcbiAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJDbGVhcigpIHtcbiAgICBpZiAodGhpcy5vbkNsZWFyKSB7XG4gICAgICB0aGlzLm9uQ2xlYXIuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19