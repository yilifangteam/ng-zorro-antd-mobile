import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
export class PopupService {
    constructor(_overlay) {
        this._overlay = _overlay;
        this.overlay = null;
        this.overlayRef = null;
        this.currentServiceName = null;
        this.serviceArray = [];
        this.overlay = this._overlay;
    }
    showPopup(component, childInjector, hasBackdrop, positionStrategy = this.overlay
        .position()
        .global()
        .centerVertically()
        .centerHorizontally()) {
        let overlayConfig = new OverlayConfig();
        overlayConfig.hasBackdrop = hasBackdrop;
        overlayConfig.positionStrategy = positionStrategy;
        this.overlayRef = this.overlay.create(overlayConfig);
        this.overlayRef.backdropClick().subscribe(() => {
            this.hidePopup();
        });
        return this.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
    }
    hidePopup() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
}
PopupService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
    { type: Injectable }
];
PopupService.ctorParameters = () => [
    { type: Overlay }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29yZS9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFzQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt0RCxNQUFNLE9BQU8sWUFBWTtJQU12QixZQUFtQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBTHBDLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBVSxHQUFlLElBQUksQ0FBQztRQUM5Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQ1AsU0FBUyxFQUNULGFBQXdCLEVBQ3hCLFdBQXFCLEVBQ3JCLG1CQUEyQyxJQUFJLENBQUMsT0FBTztTQUNwRCxRQUFRLEVBQUU7U0FDVixNQUFNLEVBQUU7U0FDUixnQkFBZ0IsRUFBRTtTQUNsQixrQkFBa0IsRUFBRTtRQUV2QixJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBdENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjtZQUNBLFVBQVU7OztZQUxGLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmLCBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3B1cFNlcnZpY2Uge1xuICBvdmVybGF5OiBPdmVybGF5ID0gbnVsbDtcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IG51bGw7XG4gIGN1cnJlbnRTZXJ2aWNlTmFtZSA9IG51bGw7XG4gIHNlcnZpY2VBcnJheTogYW55ID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9vdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5vdmVybGF5ID0gdGhpcy5fb3ZlcmxheTtcbiAgfVxuXG4gIHNob3dQb3B1cChcbiAgICBjb21wb25lbnQsXG4gICAgY2hpbGRJbmplY3Rvcj86IEluamVjdG9yLFxuICAgIGhhc0JhY2tkcm9wPzogYm9vbGVhbixcbiAgICBwb3NpdGlvblN0cmF0ZWd5OiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmdsb2JhbCgpXG4gICAgICAuY2VudGVyVmVydGljYWxseSgpXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gaGFzQmFja2Ryb3A7XG4gICAgb3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVBvcHVwKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIHVuZGVmaW5lZCwgY2hpbGRJbmplY3RvcikpO1xuICB9XG5cbiAgaGlkZVBvcHVwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=