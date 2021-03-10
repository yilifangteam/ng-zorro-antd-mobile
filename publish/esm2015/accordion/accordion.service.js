import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class AccordionService {
    constructor() {
        this.accordion = false;
    }
    getComponent(component) {
        this.accordion = component.accordion;
        this.component = component;
    }
}
AccordionService.ɵfac = function AccordionService_Factory(t) { return new (t || AccordionService)(); };
AccordionService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AccordionService, factory: AccordionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7QUFDN0IsSUFGQTtBQUNFLFFBRUEsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUM3QixJQUlBLENBQUM7QUFDRCxJQUxFLFlBQVksQ0FBQyxTQUFTO0FBQ3hCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ3pDLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0g7NENBUkMsVUFBVTs7OztnREFDVDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uU2VydmljZSB7XG4gIGNvbXBvbmVudDtcbiAgYWNjb3JkaW9uOiBib29sZWFuID0gZmFsc2U7XG4gIGdldENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmFjY29yZGlvbiA9IGNvbXBvbmVudC5hY2NvcmRpb247XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cbn1cbiJdfQ==