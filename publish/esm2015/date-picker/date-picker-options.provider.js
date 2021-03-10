import { EventEmitter, Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class DatePickerOptions {
    constructor() {
        this.mode = 'date';
        this.value = new Date();
        this.minDate = new Date(2000, 6, 1, 0, 0, 0);
        this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
        this.use12Hours = false;
        this.minuteStep = 1;
        this.data = [];
        this.mask = true;
        this.title = '';
        this.okText = '确定';
        this.dismissText = '取消';
        this.disabled = false;
        this.appendToBody = false;
        this.showErrorToast = true;
        this.showErrorToastInterval = 2000;
        this.onOk = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onValueChange = new EventEmitter();
        this.onChange = new EventEmitter();
    }
}
DatePickerOptions.ɵfac = function DatePickerOptions_Factory(t) { return new (t || DatePickerOptions)(); };
DatePickerOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DatePickerOptions, factory: DatePickerOptions.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DatePickerOptions, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItb3B0aW9ucy5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci1vcHRpb25zLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXFCekQsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBRGpDO0FBQ0UsUUFDQSxTQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2hCLFFBQUUsVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDckIsUUFBRSxZQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxRQUFFLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLFFBQUUsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUNyQixRQUFFLGVBQVUsR0FBRyxDQUFDLENBQUM7QUFDakIsUUFBRSxTQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1osUUFBRSxTQUFJLEdBQVksSUFBSSxDQUFDO0FBQ3ZCLFFBQUUsVUFBSyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUUsV0FBTSxHQUFHLElBQUksQ0FBQztBQUNoQixRQUFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFFBQUUsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUNuQixRQUNFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLFFBQUUsbUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDeEIsUUFBRSwyQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFDaEMsUUFBRSxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0MsUUFBRSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEQsUUFBRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hELFFBQUUsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25ELElBRUEsQ0FBQztBQUNEOzZDQXpCQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpoX0NOIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZSc7XG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgbW9kZTogc3RyaW5nO1xuICB2YWx1ZTogRGF0ZTtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgdXNlMTJIb3VyczogYm9vbGVhbjtcbiAgbWludXRlU3RlcDogTnVtYmVyO1xuICBsb2NhbGU6IGFueTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1hc2s6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9rVGV4dDogc3RyaW5nO1xuICBkaXNtaXNzVGV4dDogc3RyaW5nO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIHNob3dFcnJvclRvYXN0OiBib29sZWFuO1xuICBzaG93RXJyb3JUb2FzdEludGVydmFsOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyT3B0aW9ucyBpbXBsZW1lbnRzIERhdGVQaWNrZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgbW9kZSA9ICdkYXRlJztcbiAgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICBtaW5EYXRlID0gbmV3IERhdGUoMjAwMCwgNiwgMSwgMCwgMCwgMCk7XG4gIG1heERhdGUgPSBuZXcgRGF0ZSgyMDMwLCAxLCAxLCAyMywgNTksIDU5KTtcbiAgdXNlMTJIb3VycyA9IGZhbHNlO1xuICBtaW51dGVTdGVwID0gMTtcbiAgZGF0YSA9IFtdO1xuICBtYXNrOiBib29sZWFuID0gdHJ1ZTtcbiAgdGl0bGUgPSAnJztcbiAgb2tUZXh0ID0gJ+ehruWumic7XG4gIGRpc21pc3NUZXh0ID0gJ+WPlua2iCc7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGxvY2FsZTtcbiAgYXBwZW5kVG9Cb2R5ID0gZmFsc2U7XG4gIHNob3dFcnJvclRvYXN0ID0gdHJ1ZTtcbiAgc2hvd0Vycm9yVG9hc3RJbnRlcnZhbCA9IDIwMDA7XG4gIG9uT2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvbkRpc21pc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvblZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBoaWRlUGlja2VyOiAoKSA9PiB2b2lkO1xuICB1cGRhdGVOZ01vZGVsPzogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xufVxuIl19