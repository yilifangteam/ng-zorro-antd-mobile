import { Input, Output, Component, forwardRef, ElementRef, TemplateRef, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import { ModalOptions } from './modal-options.provider';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalRef } from './modal-ref.class';
export class ModalComponent extends ModalRef {
    constructor(option, elementRef) {
        super();
        this.option = option;
        this.elementRef = elementRef;
        this.autoFocus = { focus: true, date: new Date() };
        this.transitionName = '';
        this.maskTransitionName = '';
        this.wrapCls = {};
        this.cls = {};
        this.btnGroupClass = {};
        this.data = {
            text: '',
            password: ''
        };
        this.onClose = new EventEmitter();
        this.afterOpenEmitter = new EventEmitter();
        this.afterCloseEmitter = new EventEmitter();
    }
    set title(value) {
        this.option.title = value;
    }
    set closable(value) {
        this.option.closable = value;
    }
    set maskClosable(value) {
        this.option.maskClosable = value;
    }
    set popup(value) {
        this.option.popup = value;
        this.setClassMap();
    }
    set animationType(value) {
        this.option.animationType = value;
        this.setClassMap();
    }
    set transparent(value) {
        this.option.transparent = value;
        this.setClassMap();
    }
    set footer(value) {
        this.option.footer = value;
    }
    set platform(value) {
        this.option.platform = value;
        this.setClassMap();
    }
    set className(value) {
        this.option.className = value;
        this.setClassMap();
    }
    set wrapClassName(value) {
        this.option.wrapClassName = value;
        this.setClassMap();
    }
    set actions(value) {
        this.option.footer = value;
        this.setClassMap();
    }
    set defaultValue(value) {
        this.option.defaultValue = value !== undefined ? value : ['', ''];
    }
    set type(value) {
        this.option.type = value;
    }
    set placeholders(value) {
        this.option.placeholders = value;
    }
    set operation(value) {
        this.option.operation = value;
        this.setClassMap();
    }
    panend(event) {
        if (this.option.closable || this.option.maskClosable) {
            if ((event && event.target && event.target.getAttribute('role') === 'dialog') ||
                event.target.getAttribute('role') === 'close') {
                event.preventDefault();
                event.stopPropagation();
                if (this.option.close) {
                    this.option.close();
                }
                else {
                    this.onClose.emit();
                    this.leaveAnimation();
                }
            }
        }
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isNoTitle(value) {
        return value === '' || value === null || value === undefined;
    }
    setTransitionName(visible) {
        if (!visible) {
            this.leaveAnimation();
        }
        else {
            if (this.option.animated) {
                if (this.option.transparent) {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-fade');
                    }
                }
                else {
                    if (this.setActiveName(this.option.transitionName)) {
                        this.transitionName = this.setActiveName(this.option.transitionName);
                        this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
                    }
                    else {
                        this.transitionName = this.maskTransitionName = this.setActiveName('am-slide-up');
                    }
                }
                if (this.option.popup) {
                    this.transitionName =
                        this.option.animationType === 'slide-up'
                            ? this.setActiveName('am-slide-up')
                            : this.setActiveName('am-slide-down');
                    this.maskTransitionName = this.setActiveName('am-fade');
                }
            }
            this.setClassMap();
        }
    }
    setActiveName(name) {
        return name.length > 0 ? `${name}-enter ${name}-enter-active` : null;
    }
    setLeaveActiveName(name) {
        return name.length > 0 ? `${name}-leave ${name}-leave-active` : null;
    }
    setClassMap() {
        this.wrapCls = {
            [this.option.wrapClassName]: true,
            [`${this.option.prefixCls}-wrap-popup`]: this.option.popup
        };
        this.cls = {
            [this.option.className]: true,
            [`${this.option.prefixCls}-transparent`]: this.option.transparent,
            [`${this.option.prefixCls}-popup`]: this.option.popup,
            [`${this.option.prefixCls}-popup-${this.option.animationType}`]: this.option.popup && this.option.animationType,
            [`${this.option.prefixCls}-android`]: this.option.platform === 'android'
        };
        this.btnGroupClass = {
            [`${this.option.prefixCls}-button-group-${this.option.footer.length === 2 && !this.option.operation ? 'h' : 'v'}`]: true,
            [`${this.option.prefixCls}-button-group-${this.option.operation ? 'operation' : 'normal'}`]: true
        };
    }
    inputChange(type, value) {
        this.data[type] = value;
    }
    leaveAnimation() {
        if (this.option.animated) {
            if (this.option.transparent) {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-fade');
                }
            }
            else {
                if (this.setLeaveActiveName(this.option.transitionName)) {
                    this.transitionName = this.setLeaveActiveName(this.option.transitionName);
                    this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
                }
                else {
                    this.transitionName = this.maskTransitionName = this.setLeaveActiveName('am-slide-up');
                }
            }
            if (this.option.popup) {
                this.transitionName =
                    this.option.animationType === 'slide-up'
                        ? this.setLeaveActiveName('am-slide-up')
                        : this.setLeaveActiveName('am-slide-down');
                this.maskTransitionName = this.setLeaveActiveName('am-fade');
            }
        }
        setTimeout(() => {
            this.option.visible = false;
            if (this.onChanged) {
                this.onChanged(this.option.visible);
            }
        }, 200);
    }
    writeValue(value) {
        if (value) {
            this.option.visible = value;
        }
        this.setTransitionName(value);
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    get afterOpen() {
        return this.afterOpenEmitter.asObservable();
    }
    get afterClose() {
        return this.afterCloseEmitter.asObservable();
    }
    getInstance() {
        return this;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    close() {
        if (this.option.closeWithAnimation) {
            this.option.closeWithAnimation();
        }
        else {
            this.onClose.emit();
            this.leaveAnimation();
        }
    }
    triggerOk() {
        if (this.option.footer.length > 1) {
            const button = this.option.footer[1];
            button.onPress();
        }
    }
    triggerCancel() {
        if (this.option.footer.length > 0) {
            const button = this.option.footer[0];
            button.onPress();
        }
    }
    destroy() {
        this.close();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'Modal',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    ModalOptions,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ModalComponent),
                        multi: true
                    }
                ]
            },] }
];
ModalComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    title: [{ type: Input }],
    closable: [{ type: Input }],
    maskClosable: [{ type: Input }],
    popup: [{ type: Input }],
    animationType: [{ type: Input }],
    transparent: [{ type: Input }],
    footer: [{ type: Input }],
    platform: [{ type: Input }],
    className: [{ type: Input }],
    wrapClassName: [{ type: Input }],
    actions: [{ type: Input }],
    defaultValue: [{ type: Input }],
    type: [{ type: Input }],
    placeholders: [{ type: Input }],
    operation: [{ type: Input }],
    onClose: [{ type: Output }],
    afterOpenEmitter: [{ type: Output }],
    afterCloseEmitter: [{ type: Output }],
    panend: [{ type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchend', ['$event'],] }]
};
export class ModalServiceComponent extends ModalComponent {
    constructor(option, elementRef) {
        super(option, elementRef);
        this.option = option;
        this.elementRef = elementRef;
        this.setTransitionName(this.option.visible);
    }
}
ModalServiceComponent.decorators = [
    { type: Component, args: [{
                selector: 'ModalService',
                template: "<div *ngIf=\"option.visible\">\n  <div class=\"{{ option.prefixCls }}-mask {{ maskTransitionName }}\"></div>\n  <div role=\"dialog\" class=\"{{ option.prefixCls }}-wrap {{ transitionName }}\" [ngClass]=\"wrapCls\">\n    <div role=\"document\" class=\"{{ option.prefixCls }}\" [ngClass]=\"cls\">\n      <div class=\"{{ option.prefixCls }}-content\">\n        <div *ngIf=\"option.closable\" style=\"width: 100%; height: 21px;\">\n          <div role=\"close\" class=\"{{ option.prefixCls }}-close\">\n            <span role=\"close\" class=\"{{ option.prefixCls }}-close-x\"></span>\n          </div>\n        </div>\n        <div *ngIf=\"!isNoTitle(option.title)\" class=\"{{ option.prefixCls }}-header\">\n          <div *ngIf=\"!isTemplateRef(option.title)\" class=\"{{ option.prefixCls }}-title\">{{ option.title }}</div>\n          <ng-template *ngIf=\"isTemplateRef(option.title)\" [ngTemplateOutlet]=\"option.title\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-body\">\n          <ng-content></ng-content>\n          <div *ngIf=\"!isTemplateRef(option.message)\" class=\"{{ option.prefixCls }}-alert-content\">\n            {{ option.message }}\n          </div>\n          <ng-template *ngIf=\"isTemplateRef(option.message)\" [ngTemplateOutlet]=\"option.message\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'default'\" [ngTemplateOutlet]=\"promptDefault\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'secure-text'\" [ngTemplateOutlet]=\"promptSecure\"></ng-template>\n          <ng-template *ngIf=\"option.type === 'login-password'\" [ngTemplateOutlet]=\"promptPassword\"></ng-template>\n        </div>\n        <div class=\"{{ option.prefixCls }}-footer\">\n          <div [ngClass]=\"btnGroupClass\" role=\"group\">\n            <div\n              Button\n              role=\"button\"\n              *ngFor=\"let button of option.footer\"\n              [className]=\"'am-modal-button'\"\n              [ngStyle]=\"button.style\"\n              (onClick)=\"button.onPress()\"\n            >\n              {{ button.text }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #promptPassword>\n  <div class=\"{{ option.prefixCls }}-input-container\">\n    <div class=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[1] || ''\"\n        [(ngModel)]=\"option.defaultValue[1]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptSecure>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'password'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('password', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n<ng-template #promptDefault>\n  <div className=\"{{ option.prefixCls }}-input-container\">\n    <div className=\"{{ option.prefixCls }}-input\">\n      <input\n        #inputElement\n        autofocus\n        [type]=\"'text'\"\n        [placeholder]=\"option.placeholders[0] || ''\"\n        [(ngModel)]=\"option.defaultValue[0]\"\n        (ngModelChange)=\"inputChange('text', $event)\"\n      />\n    </div>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ModalServiceComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBYzdDLE1BQU0sT0FBTyxjQUFpQyxTQUFRLFFBQWM7SUErR2xFLFlBQW1CLE1BQW9CLEVBQVMsVUFBc0I7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTlHdEUsY0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzlDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsU0FBSSxHQUFHO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUEyRUYsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRS9ELHNCQUFpQixHQUFzQixJQUFJ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eEIsaXdIQUFxQztnQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQTlTUSxZQUFZO1lBTm5CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZi5jbGFzcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdNb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIE1vZGFsT3B0aW9ucyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1vZGFsQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTW9kYWxSZWY8VCwgUj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGF1dG9Gb2N1cyA9IHsgZm9jdXM6IHRydWUsIGRhdGU6IG5ldyBEYXRlKCkgfTtcbiAgdHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICcnO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU6IHN0cmluZyA9ICcnO1xuICB3cmFwQ2xzOiBvYmplY3QgPSB7fTtcbiAgY2xzOiBvYmplY3QgPSB7fTtcbiAgYnRuR3JvdXBDbGFzczogb2JqZWN0ID0ge307XG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG4gIH07XG5cbiAgb25DaGFuZ2VkOiAodmlzaWFibGU6IGJvb2xlYW4pID0+IHt9O1xuICBvblRvdWNoZWQ6ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMub3B0aW9uLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5jbG9zYWJsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBtYXNrQ2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5tYXNrQ2xvc2FibGUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcG9wdXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5wb3B1cCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb24uYW5pbWF0aW9uVHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdHJhbnNwYXJlbnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi50cmFuc3BhcmVudCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9vdGVyKHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5vcHRpb24uZm9vdGVyID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBsYXRmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi5wbGF0Zm9ybSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdyYXBDbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9uLndyYXBDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFjdGlvbnModmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLm9wdGlvbi5mb290ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMub3B0aW9uLmRlZmF1bHRWYWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IFsnJywgJyddO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbi50eXBlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVycyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMub3B0aW9uLnBsYWNlaG9sZGVycyA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvcGVyYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wdGlvbi5vcGVyYXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYWZ0ZXJPcGVuRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlckNsb3NlRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgcGFuZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uLmNsb3NhYmxlIHx8IHRoaXMub3B0aW9uLm1hc2tDbG9zYWJsZSkge1xuICAgICAgaWYgKFxuICAgICAgICAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2RpYWxvZycpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2Nsb3NlJ1xuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uY2xvc2UpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbi5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbjogTW9kYWxPcHRpb25zLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBpc05vVGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uTmFtZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmxlYXZlQW5pbWF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbi5hbmltYXRlZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24udHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZXRBY3RpdmVOYW1lKHRoaXMub3B0aW9uLnRyYW5zaXRpb25OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi5tYXNrVHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLWZhZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2V0QWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldEFjdGl2ZU5hbWUodGhpcy5vcHRpb24ubWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRBY3RpdmVOYW1lKCdhbS1zbGlkZS11cCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb24ucG9wdXApIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID1cbiAgICAgICAgICAgIHRoaXMub3B0aW9uLmFuaW1hdGlvblR5cGUgPT09ICdzbGlkZS11cCdcbiAgICAgICAgICAgICAgPyB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLXNsaWRlLXVwJylcbiAgICAgICAgICAgICAgOiB0aGlzLnNldEFjdGl2ZU5hbWUoJ2FtLXNsaWRlLWRvd24nKTtcbiAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0QWN0aXZlTmFtZSgnYW0tZmFkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwID8gYCR7bmFtZX0tZW50ZXIgJHtuYW1lfS1lbnRlci1hY3RpdmVgIDogbnVsbDtcbiAgfVxuXG4gIHNldExlYXZlQWN0aXZlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwID8gYCR7bmFtZX0tbGVhdmUgJHtuYW1lfS1sZWF2ZS1hY3RpdmVgIDogbnVsbDtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCkge1xuICAgIHRoaXMud3JhcENscyA9IHtcbiAgICAgIFt0aGlzLm9wdGlvbi53cmFwQ2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLm9wdGlvbi5wcmVmaXhDbHN9LXdyYXAtcG9wdXBgXTogdGhpcy5vcHRpb24ucG9wdXBcbiAgICB9O1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBbdGhpcy5vcHRpb24uY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLm9wdGlvbi5wcmVmaXhDbHN9LXRyYW5zcGFyZW50YF06IHRoaXMub3B0aW9uLnRyYW5zcGFyZW50LFxuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tcG9wdXBgXTogdGhpcy5vcHRpb24ucG9wdXAsXG4gICAgICBbYCR7dGhpcy5vcHRpb24ucHJlZml4Q2xzfS1wb3B1cC0ke3RoaXMub3B0aW9uLmFuaW1hdGlvblR5cGV9YF06IHRoaXMub3B0aW9uLnBvcHVwICYmIHRoaXMub3B0aW9uLmFuaW1hdGlvblR5cGUsXG4gICAgICBbYCR7dGhpcy5vcHRpb24ucHJlZml4Q2xzfS1hbmRyb2lkYF06IHRoaXMub3B0aW9uLnBsYXRmb3JtID09PSAnYW5kcm9pZCdcbiAgICB9O1xuXG4gICAgdGhpcy5idG5Hcm91cENsYXNzID0ge1xuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tYnV0dG9uLWdyb3VwLSR7XG4gICAgICAgIHRoaXMub3B0aW9uLmZvb3Rlci5sZW5ndGggPT09IDIgJiYgIXRoaXMub3B0aW9uLm9wZXJhdGlvbiA/ICdoJyA6ICd2J1xuICAgICAgfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMub3B0aW9uLnByZWZpeENsc30tYnV0dG9uLWdyb3VwLSR7dGhpcy5vcHRpb24ub3BlcmF0aW9uID8gJ29wZXJhdGlvbicgOiAnbm9ybWFsJ31gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBpbnB1dENoYW5nZSh0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFbdHlwZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGxlYXZlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbi5hbmltYXRlZCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNldExlYXZlQWN0aXZlTmFtZSh0aGlzLm9wdGlvbi50cmFuc2l0aW9uTmFtZSkpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICAgIHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24ubWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID0gdGhpcy5tYXNrVHJhbnNpdGlvbk5hbWUgPSB0aGlzLnNldExlYXZlQWN0aXZlTmFtZSgnYW0tZmFkZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUodGhpcy5vcHRpb24udHJhbnNpdGlvbk5hbWUpKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKHRoaXMub3B0aW9uLnRyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgICB0aGlzLm1hc2tUcmFuc2l0aW9uTmFtZSA9IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKHRoaXMub3B0aW9uLm1hc2tUcmFuc2l0aW9uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUoJ2FtLXNsaWRlLXVwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbi5wb3B1cCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25OYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbi5hbmltYXRpb25UeXBlID09PSAnc2xpZGUtdXAnXG4gICAgICAgICAgICA/IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKCdhbS1zbGlkZS11cCcpXG4gICAgICAgICAgICA6IHRoaXMuc2V0TGVhdmVBY3RpdmVOYW1lKCdhbS1zbGlkZS1kb3duJyk7XG4gICAgICAgIHRoaXMubWFza1RyYW5zaXRpb25OYW1lID0gdGhpcy5zZXRMZWF2ZUFjdGl2ZU5hbWUoJ2FtLWZhZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy5vcHRpb24udmlzaWJsZSk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9uLnZpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uTmFtZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJPcGVuRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLmFmdGVyQ2xvc2VFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTW9kYWxDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbi5jbG9zZVdpdGhBbmltYXRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uLmNsb3NlV2l0aEFuaW1hdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgICAgdGhpcy5sZWF2ZUFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb24uZm9vdGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMub3B0aW9uLmZvb3RlclsxXTtcbiAgICAgIGJ1dHRvbi5vblByZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb24uZm9vdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMub3B0aW9uLmZvb3RlclswXTtcbiAgICAgIGJ1dHRvbi5vblByZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTW9kYWxTZXJ2aWNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2VDb21wb25lbnQgZXh0ZW5kcyBNb2RhbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb246IE1vZGFsT3B0aW9ucywgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihvcHRpb24sIGVsZW1lbnRSZWYpO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbk5hbWUodGhpcy5vcHRpb24udmlzaWJsZSk7XG4gIH1cbn1cbiJdfQ==