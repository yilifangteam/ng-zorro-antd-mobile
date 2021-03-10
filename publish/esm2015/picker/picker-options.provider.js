import { EventEmitter, Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class PickerOptions {
    constructor() {
        this.data = [];
        this.value = [];
        this.cols = 3;
        this.mask = true;
        this.title = '';
        this.okText = '确定';
        this.dismissText = '取消';
        this.disabled = false;
        this.cascade = true;
        this.appendToBody = false;
        this.onDismiss = new EventEmitter();
        this.onPickerChange = new EventEmitter();
        this.indicatorStyle = {};
    }
}
PickerOptions.ɵfac = function PickerOptions_Factory(t) { return new (t || PickerOptions)(); };
PickerOptions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PickerOptions, factory: PickerOptions.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PickerOptions, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW9wdGlvbnMucHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlci1vcHRpb25zLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWN6RCxNQUFNLE9BQU8sYUFBYTtBQUFHLElBRDdCO0FBQ0UsUUFDQSxTQUFJLEdBQWdCLEVBQUUsQ0FBQztBQUN6QixRQUFFLFVBQUssR0FBZ0IsRUFBRSxDQUFDO0FBQzFCLFFBQUUsU0FBSSxHQUFZLENBQUMsQ0FBQztBQUNwQixRQUFFLFNBQUksR0FBYSxJQUFJLENBQUM7QUFDeEIsUUFBRSxVQUFLLEdBQVksRUFBRSxDQUFDO0FBQ3RCLFFBQUUsV0FBTSxHQUFZLElBQUksQ0FBQztBQUN6QixRQUFFLGdCQUFXLEdBQVksSUFBSSxDQUFDO0FBQzlCLFFBQUUsYUFBUSxHQUFhLEtBQUssQ0FBQztBQUM3QixRQUFFLFlBQU8sR0FBYSxJQUFJLENBQUM7QUFDM0IsUUFBRSxpQkFBWSxHQUFhLEtBQUssQ0FBQztBQUNqQyxRQUFFLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNyRCxRQUFFLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDMUQsUUFBRSxtQkFBYyxHQUFZLEVBQUUsQ0FBQztBQUMvQixJQUlBLENBQUM7QUFDRDt5Q0FwQkMsVUFBVTs7OztnREFDVDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIFBpY2tlck9wdGlvbnNJbnRlcmZhY2Uge1xuICBkYXRhPzogQXJyYXk8YW55PjtcbiAgY29scz86IG51bWJlcjtcbiAgbWFzaz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBva1RleHQ/OiBzdHJpbmc7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNhc2NhZGU/OiBib29sZWFuO1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGlja2VyT3B0aW9ucyBpbXBsZW1lbnRzIFBpY2tlck9wdGlvbnNJbnRlcmZhY2Uge1xuICBkYXRhPzogQXJyYXk8YW55PiA9IFtdO1xuICB2YWx1ZT86IEFycmF5PGFueT4gPSBbXTtcbiAgY29scz86IG51bWJlciA9IDM7XG4gIG1hc2s/OiBib29sZWFuID0gdHJ1ZTtcbiAgdGl0bGU/OiBzdHJpbmcgPSAnJztcbiAgb2tUZXh0Pzogc3RyaW5nID0gJ+ehruWumic7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nID0gJ+WPlua2iCc7XG4gIGRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBjYXNjYWRlPzogYm9vbGVhbiA9IHRydWU7XG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgb25EaXNtaXNzPzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG9uUGlja2VyQ2hhbmdlPzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGluZGljYXRvclN0eWxlPzogb2JqZWN0ID0ge307XG4gIGhpZGVQaWNrZXI/OiAoKSA9PiB2b2lkO1xuICBjb25maXJtPzogKHJlc3VsdCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgdXBkYXRlTmdNb2RlbD86ICh2YWx1ZTogYW55W10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIFBpY2tlckNhbGxCYWNrID0gKHJlc3VsdD86IGFueSkgPT4gUHJvbWlzZUxpa2U8YW55PiB8IHZvaWQ7XG4iXX0=