import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, InjectionToken } from '@angular/core';
export const INTERFACE_TOKEN = new InjectionToken('InterfaceToken');
export class TouchFeedbackDirective {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.activeStyle = true;
        this.clickStart = new EventEmitter();
        this.clickEnd = new EventEmitter();
    }
    addClass(className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }
    removeClass(className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
    ngOnInit() {
        this._className = this.className;
    }
    touchStart() {
        if (this.activeStyle) {
            this.addClass(this._className);
            this.clickStart.emit();
        }
    }
    touchEnd() {
        if (this.activeStyle) {
            this.removeClass(this._className);
            this.clickEnd.emit();
        }
    }
}
TouchFeedbackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[TouchFeedbackDirective]'
            },] }
];
TouchFeedbackDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TouchFeedbackDirective.propDecorators = {
    className: [{ type: Input }],
    activeStyle: [{ type: Input }],
    clickStart: [{ type: Output }],
    clickEnd: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart',] }, { type: HostListener, args: ['mousedown',] }],
    touchEnd: [{ type: HostListener, args: ['touchend',] }, { type: HostListener, args: ['mouseup',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2gtZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb3JlL2RpcmVjdGl2ZS90b3VjaC1mZWVkYmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUVWLFNBQVMsRUFDVCxjQUFjLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFNLGdCQUFnQixDQUFDLENBQUM7QUFLekUsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQyxZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUpoRSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWlCLENBQUM7SUFFckUsUUFBUSxDQUFDLFNBQWlCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxXQUFXLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUlELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7OztZQVZDLFVBQVU7WUFFVixTQUFTOzs7d0JBV1IsS0FBSzswQkFDTCxLQUFLO3lCQUNMLE1BQU07dUJBQ04sTUFBTTt5QkFnQk4sWUFBWSxTQUFDLFlBQVksY0FDekIsWUFBWSxTQUFDLFdBQVc7dUJBUXhCLFlBQVksU0FBQyxVQUFVLGNBQ3ZCLFlBQVksU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgSU5URVJGQUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ0ludGVyZmFjZVRva2VuJyk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tUb3VjaEZlZWRiYWNrRGlyZWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgVG91Y2hGZWVkYmFja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTtcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBhY3RpdmVTdHlsZSA9IHRydWU7XG4gIEBPdXRwdXQoKSBjbGlja1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsaWNrRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgdG91Y2hTdGFydCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdHlsZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9jbGFzc05hbWUpO1xuICAgICAgdGhpcy5jbGlja1N0YXJ0LmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcpXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKVxuICB0b3VjaEVuZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdHlsZSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyh0aGlzLl9jbGFzc05hbWUpO1xuICAgICAgdGhpcy5jbGlja0VuZC5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=