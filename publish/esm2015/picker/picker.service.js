import { Injectable, Injector } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';
import * as ɵngcc0 from '@angular/core';
export class PickerService extends PopupService {
    constructor() {
        super(...arguments);
        this.comRef = null;
        this.defaultOptions = new PickerOptions();
    }
    showPicker(config = this.defaultOptions, confirmCallback, cancelCallback) {
        const options = new PickerOptions();
        Object.assign(options, config, {
            hidePicker: (event) => {
                this.hidePicker();
            },
            confirm: (event) => {
                if (confirmCallback) {
                    confirmCallback(event);
                }
            },
            cancel: () => {
                if (cancelCallback) {
                    cancelCallback();
                }
            }
        });
        const childInjector = Injector.create([
            {
                provide: PickerOptions,
                useValue: options
            }
        ]);
        this.comRef = this.showPopup(PickerComponent, childInjector);
        return this.comRef && this.comRef.instance;
    }
    hidePicker() {
        this.hidePopup();
    }
}
PickerService.ɵfac = function PickerService_Factory(t) { return ɵPickerService_BaseFactory(t || PickerService); };
PickerService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PickerService, factory: PickerService.ɵfac });
const ɵPickerService_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(PickerService);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerService, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFrQixhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRzlELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtBQUMvQyxJQUZBO0FBQ0U7QUFBNkIsUUFDN0IsV0FBTSxHQUFrQyxJQUFJLENBQUM7QUFDL0MsUUFBRSxtQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3RELElBb0NBLENBQUM7QUFDRCxJQXBDRSxVQUFVLENBQ1IsU0FBd0IsSUFBSSxDQUFDLGNBQWMsRUFDM0MsZUFBZ0MsRUFDaEMsY0FBK0I7QUFDaEMsUUFDQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3hDLFFBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ25DLFlBQU0sVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFRLEVBQUU7QUFDbEMsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFCLFlBQU0sQ0FBQztBQUNQLFlBQU0sT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFRLEVBQUU7QUFDL0IsZ0JBQVEsSUFBSSxlQUFlLEVBQUU7QUFDN0Isb0JBQVUsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFTO0FBQ1QsWUFBTSxDQUFDO0FBQ1AsWUFBTSxNQUFNLEVBQUUsR0FBUyxFQUFFO0FBQ3pCLGdCQUFRLElBQUksY0FBYyxFQUFFO0FBQzVCLG9CQUFVLGNBQWMsRUFBRSxDQUFDO0FBQzNCLGlCQUFTO0FBQ1QsWUFBTSxDQUFDO0FBQ1AsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUNJLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDMUMsWUFBTTtBQUNOLGdCQUFRLE9BQU8sRUFBRSxhQUFhO0FBQzlCLGdCQUFRLFFBQVEsRUFBRSxPQUFPO0FBQ3pCLGFBQU87QUFDUCxTQUFLLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRSxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVU7QUFBSyxRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQixJQUFFLENBQUM7QUFDSDt5Q0F4Q0MsVUFBVTs7Ozs7MEJBQ1Q7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNrZXJDYWxsQmFjaywgUGlja2VyT3B0aW9ucyB9IGZyb20gJy4vcGlja2VyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2UgZXh0ZW5kcyBQb3B1cFNlcnZpY2Uge1xuICBjb21SZWY6IENvbXBvbmVudFJlZjxQaWNrZXJDb21wb25lbnQ+ID0gbnVsbDtcbiAgZGVmYXVsdE9wdGlvbnM6IFBpY2tlck9wdGlvbnMgPSBuZXcgUGlja2VyT3B0aW9ucygpO1xuXG4gIHNob3dQaWNrZXIoXG4gICAgY29uZmlnOiBQaWNrZXJPcHRpb25zID0gdGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICBjb25maXJtQ2FsbGJhY2s/OiBQaWNrZXJDYWxsQmFjayxcbiAgICBjYW5jZWxDYWxsYmFjaz86IFBpY2tlckNhbGxCYWNrXG4gICk6IGFueSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQaWNrZXJPcHRpb25zKCk7XG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBjb25maWcsIHtcbiAgICAgIGhpZGVQaWNrZXI6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICAgIH0sXG4gICAgICBjb25maXJtOiAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm1DYWxsYmFjaykge1xuICAgICAgICAgIGNvbmZpcm1DYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYW5jZWw6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNhbmNlbENhbGxiYWNrKSB7XG4gICAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IFBpY2tlck9wdGlvbnMsXG4gICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICB9XG4gICAgXSk7XG4gICAgdGhpcy5jb21SZWYgPSB0aGlzLnNob3dQb3B1cChQaWNrZXJDb21wb25lbnQsIGNoaWxkSW5qZWN0b3IpO1xuICAgIHJldHVybiB0aGlzLmNvbVJlZiAmJiB0aGlzLmNvbVJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGhpZGVQaWNrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlUG9wdXAoKTtcbiAgfVxufVxuIl19