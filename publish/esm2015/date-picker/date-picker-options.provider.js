import { EventEmitter, Injectable } from '@angular/core';
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
DatePickerOptions.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItb3B0aW9ucy5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXItb3B0aW9ucy5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCekQsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVFLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxVQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbkQsQ0FBQzs7O1lBeEJBLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpoX0NOIH0gZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2xvY2FsZSc7XG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgbW9kZTogc3RyaW5nO1xuICB2YWx1ZTogRGF0ZTtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgdXNlMTJIb3VyczogYm9vbGVhbjtcbiAgbWludXRlU3RlcDogTnVtYmVyO1xuICBsb2NhbGU6IGFueTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1hc2s6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9rVGV4dDogc3RyaW5nO1xuICBkaXNtaXNzVGV4dDogc3RyaW5nO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIHNob3dFcnJvclRvYXN0OiBib29sZWFuO1xuICBzaG93RXJyb3JUb2FzdEludGVydmFsOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyT3B0aW9ucyBpbXBsZW1lbnRzIERhdGVQaWNrZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgbW9kZSA9ICdkYXRlJztcbiAgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICBtaW5EYXRlID0gbmV3IERhdGUoMjAwMCwgNiwgMSwgMCwgMCwgMCk7XG4gIG1heERhdGUgPSBuZXcgRGF0ZSgyMDMwLCAxLCAxLCAyMywgNTksIDU5KTtcbiAgdXNlMTJIb3VycyA9IGZhbHNlO1xuICBtaW51dGVTdGVwID0gMTtcbiAgZGF0YSA9IFtdO1xuICBtYXNrOiBib29sZWFuID0gdHJ1ZTtcbiAgdGl0bGUgPSAnJztcbiAgb2tUZXh0ID0gJ+ehruWumic7XG4gIGRpc21pc3NUZXh0ID0gJ+WPlua2iCc7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGxvY2FsZTtcbiAgYXBwZW5kVG9Cb2R5ID0gZmFsc2U7XG4gIHNob3dFcnJvclRvYXN0ID0gdHJ1ZTtcbiAgc2hvd0Vycm9yVG9hc3RJbnRlcnZhbCA9IDIwMDA7XG4gIG9uT2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvbkRpc21pc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvblZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBoaWRlUGlja2VyOiAoKSA9PiB2b2lkO1xuICB1cGRhdGVOZ01vZGVsPzogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xufVxuIl19