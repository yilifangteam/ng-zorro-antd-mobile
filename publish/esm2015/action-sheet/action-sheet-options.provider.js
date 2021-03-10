import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class ActionSheetOptions {
    constructor() {
        this.prefixCls = 'am-action-sheet';
        this.maskClosable = true;
        this.transitionName = 'am-slide-up';
        this.maskTransitionName = 'am-fade';
    }
}
ActionSheetOptions.ɵfac = function ActionSheetOptions_Factory(t) { return new (t || ActionSheetOptions)(); };
ActionSheetOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ActionSheetOptions, factory: ActionSheetOptions.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActionSheetOptions, [{
        type: Injectable
    }], function () { return []; }, null); })();
export class ShareOption {
}
ShareOption.ɵfac = function ShareOption_Factory(t) { return new (t || ShareOption)(); };
ShareOption.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ShareOption, factory: ShareOption.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ShareOption, [{
        type: Injectable
    }], null, null); })();
export class ShareActionSheetWithOptions extends ActionSheetOptions {
    constructor() {
        super(...arguments);
        this.cancelButtonText = 'Cancel';
    }
}
ShareActionSheetWithOptions.ɵfac = function ShareActionSheetWithOptions_Factory(t) { return ɵShareActionSheetWithOptions_BaseFactory(t || ShareActionSheetWithOptions); };
ShareActionSheetWithOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ShareActionSheetWithOptions, factory: ShareActionSheetWithOptions.ɵfac });
const ɵShareActionSheetWithOptions_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(ShareActionSheetWithOptions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ShareActionSheetWithOptions, [{
        type: Injectable
    }], null, null); })();
export class ActionSheetWithOptions extends ActionSheetOptions {
}
ActionSheetWithOptions.ɵfac = function ActionSheetWithOptions_Factory(t) { return ɵActionSheetWithOptions_BaseFactory(t || ActionSheetWithOptions); };
ActionSheetWithOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ActionSheetWithOptions, factory: ActionSheetWithOptions.ɵfac });
const ɵActionSheetWithOptions_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(ActionSheetWithOptions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActionSheetWithOptions, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0LW9wdGlvbnMucHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9uLXNoZWV0L2FjdGlvbi1zaGVldC1vcHRpb25zLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBR3hELE1BQU0sT0FBTyxrQkFBa0I7QUFDL0IsSUFGQTtBQUNFLFFBQ0EsY0FBUyxHQUFZLGlCQUFpQixDQUFDO0FBQ3pDLFFBQUUsaUJBQVksR0FBYSxJQUFJLENBQUM7QUFDaEMsUUFLRSxtQkFBYyxHQUFZLGFBQWEsQ0FBQztBQUMxQyxRQUFFLHVCQUFrQixHQUFZLFNBQVMsQ0FBQztBQUMxQyxJQUVBLENBQUM7QUFDRDs4Q0FkQyxVQUFVOzs7O2dEQUNUO0FBZUYsTUFBTSxPQUFPLFdBQVc7QUFDeEI7dUNBRkMsVUFBVTs7OzswQkFDVDtBQU1GLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxrQkFBa0I7QUFDbkUsSUFGQTtBQUNFO0FBQTZCLFFBRTdCLHFCQUFnQixHQUFZLFFBQVEsQ0FBQztBQUN2QyxJQUFBLENBQUM7QUFDRDt1REFMQyxVQUFVOzs7OzswQkFDVDtBQU1GLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7QUFDOUQ7a0RBRkMsVUFBVTs7Ozs7MEJBQ1Q7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldE9wdGlvbnMge1xuICBwcmVmaXhDbHM/OiBzdHJpbmcgPSAnYW0tYWN0aW9uLXNoZWV0JztcbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhbiA9IHRydWU7XG4gIGNhbmNlbEJ1dHRvbkluZGV4PzogbnVtYmVyO1xuICBkZXN0cnVjdGl2ZUJ1dHRvbkluZGV4PzogbnVtYmVyO1xuICB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb25OYW1lPzogc3RyaW5nID0gJ2FtLXNsaWRlLXVwJztcbiAgbWFza1RyYW5zaXRpb25OYW1lPzogc3RyaW5nID0gJ2FtLWZhZGUnO1xuICBsb2NhbGU/O1xuICBjbG9zZT86ICgpID0+IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZU9wdGlvbiB7XG4gIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZUFjdGlvblNoZWV0V2l0aE9wdGlvbnMgZXh0ZW5kcyBBY3Rpb25TaGVldE9wdGlvbnMge1xuICBvcHRpb25zOiBTaGFyZU9wdGlvbltdIHwgU2hhcmVPcHRpb25bXVtdO1xuICBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nID0gJ0NhbmNlbCc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldFdpdGhPcHRpb25zIGV4dGVuZHMgQWN0aW9uU2hlZXRPcHRpb25zIHtcbiAgb3B0aW9uczogc3RyaW5nW107XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNhbGxCYWNrID0gKGluZGV4OiBudW1iZXIsIHJvd0luZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+IHwgdm9pZDtcbiJdfQ==