import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class ModalBaseOptions {
    constructor() {
        this.visible = false;
        this.focus = true;
        this.prefixCls = 'am-modal';
        this.animated = true;
        this.closable = false;
        this.maskClosable = true;
        this.transparent = false;
        this.popup = false;
        this.animationType = 'slide-down';
        this.footer = [];
        this.platform = 'ios';
        this.defaultValue = [];
        this.placeholders = [];
        this.transitionName = 'am-zoom';
        this.maskTransitionName = 'am-fade';
    }
}
export class ModalOptions extends ModalBaseOptions {
    constructor() {
        super(...arguments);
        this.transitionName = 'am-fade';
        this.maskTransitionName = 'am-fade';
    }
}
ModalOptions.ɵfac = function ModalOptions_Factory(t) { return ɵModalOptions_BaseFactory(t || ModalOptions); };
ModalOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ModalOptions, factory: ModalOptions.ɵfac });
const ɵModalOptions_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(ModalOptions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalOptions, [{
        type: Injectable
    }], null, null); })();
export class AlertOptions extends ModalBaseOptions {
}
AlertOptions.ɵfac = function AlertOptions_Factory(t) { return ɵAlertOptions_BaseFactory(t || AlertOptions); };
AlertOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AlertOptions, factory: AlertOptions.ɵfac });
const ɵAlertOptions_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(AlertOptions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertOptions, [{
        type: Injectable
    }], null, null); })();
export class Action {
}
Action.ɵfac = function Action_Factory(t) { return new (t || Action)(); };
Action.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: Action, factory: Action.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Action, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1vcHRpb25zLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBRXhELE1BQU0sT0FBTyxnQkFBZ0I7QUFDN0IsSUFEQTtBQUFnQixRQUNkLFlBQU8sR0FBYSxLQUFLLENBQUM7QUFDNUIsUUFBRSxVQUFLLEdBQWEsSUFBSSxDQUFDO0FBQ3pCLFFBQUUsY0FBUyxHQUFZLFVBQVUsQ0FBQztBQUNsQyxRQUFFLGFBQVEsR0FBYSxJQUFJLENBQUM7QUFDNUIsUUFBRSxhQUFRLEdBQWEsS0FBSyxDQUFDO0FBQzdCLFFBQUUsaUJBQVksR0FBYSxJQUFJLENBQUM7QUFDaEMsUUFDRSxnQkFBVyxHQUFhLEtBQUssQ0FBQztBQUNoQyxRQUFFLFVBQUssR0FBYSxLQUFLLENBQUM7QUFDMUIsUUFBRSxrQkFBYSxHQUFZLFlBQVksQ0FBQztBQUN4QyxRQUNFLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0FBQzNCLFFBQUUsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUM1QixRQU1FLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztBQUNwQyxRQUFFLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztBQUNwQyxRQUNFLG1CQUFjLEdBQVksU0FBUyxDQUFDO0FBQ3RDLFFBQUUsdUJBQWtCLEdBQVksU0FBUyxDQUFDO0FBQzFDLElBRUEsQ0FBQztBQUNELENBREM7QUFHRCxNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtBQUNsRCxJQUZBO0FBQ0U7QUFBNkIsUUFDN0IsbUJBQWMsR0FBWSxTQUFTLENBQUM7QUFDdEMsUUFBRSx1QkFBa0IsR0FBWSxTQUFTLENBQUM7QUFDMUMsSUFBQSxDQUFDO0FBQ0Q7d0NBTEMsVUFBVTs7Ozs7MEJBQ1Q7QUFNRixNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtBQUNsRDt3Q0FGQyxVQUFVOzs7OzswQkFDVDtBQU1GLE1BQU0sT0FBTyxNQUFNO0FBQ25CO2tDQUZDLFVBQVU7Ozs7MEJBQ1Q7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbEJhc2VPcHRpb25zIHtcbiAgdmlzaWJsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgZm9jdXM/OiBib29sZWFuID0gdHJ1ZTtcbiAgcHJlZml4Q2xzPzogc3RyaW5nID0gJ2FtLW1vZGFsJztcbiAgYW5pbWF0ZWQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgY2xvc2FibGU/OiBib29sZWFuID0gZmFsc2U7XG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW4gPSB0cnVlO1xuICBvbkNsb3NlPzogYW55O1xuICB0cmFuc3BhcmVudD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9wdXA/OiBib29sZWFuID0gZmFsc2U7XG4gIGFuaW1hdGlvblR5cGU/OiBzdHJpbmcgPSAnc2xpZGUtZG93bic7XG4gIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgZm9vdGVyPzogQXJyYXk8YW55PiA9IFtdO1xuICBwbGF0Zm9ybT86IHN0cmluZyA9ICdpb3MnO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHdyYXBDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBhY3Rpb25zPzogQXJyYXk8YW55PjtcbiAgY2FsbGJhY2tPckFjdGlvbnM/OiBBcnJheTxhbnk+O1xuICB0eXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHBsYWNlaG9sZGVycz86IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgb3BlcmF0aW9uPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbk5hbWU/OiBzdHJpbmcgPSAnYW0tem9vbSc7XG4gIG1hc2tUcmFuc2l0aW9uTmFtZT86IHN0cmluZyA9ICdhbS1mYWRlJztcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XG4gIGNsb3NlV2l0aEFuaW1hdGlvbjogKCkgPT4gdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyBleHRlbmRzIE1vZGFsQmFzZU9wdGlvbnMge1xuICB0cmFuc2l0aW9uTmFtZT86IHN0cmluZyA9ICdhbS1mYWRlJztcbiAgbWFza1RyYW5zaXRpb25OYW1lPzogc3RyaW5nID0gJ2FtLWZhZGUnO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRPcHRpb25zIGV4dGVuZHMgTW9kYWxCYXNlT3B0aW9ucyB7XG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBhY3Rpb25zPzogQXJyYXk8YW55Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbiB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIG9uUHJlc3M/OiBGdW5jdGlvbjtcbiAgc3R5bGU/OiB7fTtcbn1cbiJdfQ==