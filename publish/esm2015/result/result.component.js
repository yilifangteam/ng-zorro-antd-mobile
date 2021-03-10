import { Component, Input, Output, EventEmitter, HostBinding, TemplateRef, ViewEncapsulation } from '@angular/core';
export class ResultComponent {
    constructor() {
        this.prefixCls = 'am-result';
        this.isTitleString = true;
        this.isMessageString = true;
        this.onButtonClick = new EventEmitter();
        this.role = 'alert';
        this.amResult = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (this.isTemplateRef(value)) {
            this.isTitleString = false;
        }
        else {
            this.isTitleString = true;
        }
        this._title = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (this.isTemplateRef(value)) {
            this.isMessageString = false;
        }
        else {
            this.isMessageString = true;
        }
        this._message = value;
    }
    buttonClick(event) {
        this.onButtonClick.emit(event);
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
}
ResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'Result, nzm-result',
                template: "<div *ngIf=\"img\" class=\"{{ prefixCls }}-pic\">\n  <ng-template [ngTemplateOutlet]=\"img\"></ng-template>\n</div>\n<div *ngIf=\"!img && imgUrl\" class=\"{{ prefixCls }}-pic\" [ngStyle]=\"{ backgroundImage: 'url(' + imgUrl + ')' }\"></div>\n<div *ngIf=\"title\" class=\"{{ prefixCls }}-title\">\n  <ng-template *ngIf=\"!isTitleString\" [ngTemplateOutlet]=\"title\"></ng-template>\n  <span *ngIf=\"isTitleString\">{{ title }}</span>\n</div>\n<div [ngClass]=\"prefixCls + '-message'\">\n  <ng-template *ngIf=\"!isMessageString\" [ngTemplateOutlet]=\"message\"></ng-template>\n  <span *ngIf=\"isMessageString\">{{ message }}</span>\n</div>\n<div *ngIf=\"buttonText\" class=\"{{ prefixCls }}-button\">\n  <a Button [type]=\"buttonType\" (click)=\"buttonClick($event)\">\n    {{ buttonText }}\n  </a>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ResultComponent.ctorParameters = () => [];
ResultComponent.propDecorators = {
    title: [{ type: Input }],
    imgUrl: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonType: [{ type: Input }],
    img: [{ type: Input }],
    message: [{ type: Input }],
    onButtonClick: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    amResult: [{ type: HostBinding, args: ['class.am-result',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicmVzdWx0L3Jlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3BILE1BQU0sT0FBTyxlQUFlO0lBZ0QxQjtRQS9DQSxjQUFTLEdBQVcsV0FBVyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBc0NoQyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELFNBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsYUFBUSxHQUFZLElBQUksQ0FBQztJQUVWLENBQUM7SUF4Q2hCLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFTRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWdDO1FBQzFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBV0QsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7U0FDckM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsa3pCQUFzQztnQkFDdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7b0JBU0UsS0FBSztxQkFZTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSztrQkFFTCxLQUFLO3NCQUVMLEtBQUs7NEJBWUwsTUFBTTttQkFHTixXQUFXLFNBQUMsV0FBVzt1QkFFdkIsV0FBVyxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1Jlc3VsdCwgbnptLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLXJlc3VsdCc7XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBpc01lc3NhZ2VTdHJpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHRoaXMuaXNUZW1wbGF0ZVJlZih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIGltZ1VybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW1nOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh0aGlzLmlzVGVtcGxhdGVSZWYodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzTWVzc2FnZVN0cmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTWVzc2FnZVN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25CdXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICByb2xlOiBzdHJpbmcgPSAnYWxlcnQnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXJlc3VsdCcpXG4gIGFtUmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLm9uQnV0dG9uQ2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=