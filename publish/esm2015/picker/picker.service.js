import { Injectable, Injector } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';
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
PickerService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInBpY2tlci9waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzlELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUQvQzs7UUFFRSxXQUFNLEdBQWtDLElBQUksQ0FBQztRQUM3QyxtQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBcUN0RCxDQUFDO0lBbkNDLFVBQVUsQ0FDUixTQUF3QixJQUFJLENBQUMsY0FBYyxFQUMzQyxlQUFnQyxFQUNoQyxjQUErQjtRQUUvQixNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtZQUM3QixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQVEsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQVEsRUFBRTtnQkFDdkIsSUFBSSxlQUFlLEVBQUU7b0JBQ25CLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDO1lBQ0QsTUFBTSxFQUFFLEdBQVMsRUFBRTtnQkFDakIsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLGNBQWMsRUFBRSxDQUFDO2lCQUNsQjtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BDO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixRQUFRLEVBQUUsT0FBTzthQUNsQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXZDRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY2tlckNhbGxCYWNrLCBQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9waWNrZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBQb3B1cFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGlja2VyU2VydmljZSBleHRlbmRzIFBvcHVwU2VydmljZSB7XG4gIGNvbVJlZjogQ29tcG9uZW50UmVmPFBpY2tlckNvbXBvbmVudD4gPSBudWxsO1xuICBkZWZhdWx0T3B0aW9uczogUGlja2VyT3B0aW9ucyA9IG5ldyBQaWNrZXJPcHRpb25zKCk7XG5cbiAgc2hvd1BpY2tlcihcbiAgICBjb25maWc6IFBpY2tlck9wdGlvbnMgPSB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgIGNvbmZpcm1DYWxsYmFjaz86IFBpY2tlckNhbGxCYWNrLFxuICAgIGNhbmNlbENhbGxiYWNrPzogUGlja2VyQ2FsbEJhY2tcbiAgKTogYW55IHtcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFBpY2tlck9wdGlvbnMoKTtcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGNvbmZpZywge1xuICAgICAgaGlkZVBpY2tlcjogKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpcm06IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoY29uZmlybUNhbGxiYWNrKSB7XG4gICAgICAgICAgY29uZmlybUNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNhbmNlbDogKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoY2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogUGlja2VyT3B0aW9ucyxcbiAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgIH1cbiAgICBdKTtcbiAgICB0aGlzLmNvbVJlZiA9IHRoaXMuc2hvd1BvcHVwKFBpY2tlckNvbXBvbmVudCwgY2hpbGRJbmplY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuY29tUmVmICYmIHRoaXMuY29tUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgaGlkZVBpY2tlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVQb3B1cCgpO1xuICB9XG59XG4iXX0=