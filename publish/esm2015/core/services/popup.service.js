import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
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
PopupService.ɵfac = function PopupService_Factory(t) { return new (t || PopupService)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay)); };
PopupService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PopupService, factory: PopupService.ɵfac, providedIn: 'root' });
PopupService.decorators = [ { type: Injectable }
];
PopupService.ctorParameters = () => [
    { type: Overlay }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PopupService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: Injectable
    }], function () { return [{ type: ɵngcc1.Overlay }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQXNDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFLdEQsTUFBTSxPQUFPLFlBQVk7QUFDekIsSUFLRSxZQUFtQixRQUFpQjtBQUN0QyxRQURxQixhQUFRLEdBQVIsUUFBUSxDQUFTO0FBQUMsUUFMckMsWUFBTyxHQUFZLElBQUksQ0FBQztBQUMxQixRQUFFLGVBQVUsR0FBZSxJQUFJLENBQUM7QUFDaEMsUUFBRSx1QkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFBRSxpQkFBWSxHQUFRLEVBQUUsQ0FBQztBQUN6QixRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FDUCxTQUFTLEVBQ1QsYUFBd0IsRUFDeEIsV0FBcUIsRUFDckIsbUJBQTJDLElBQUksQ0FBQyxPQUFPO0FBQzNELFNBQU8sUUFBUSxFQUFFO0FBQ2pCLFNBQU8sTUFBTSxFQUFFO0FBQ2YsU0FBTyxnQkFBZ0IsRUFBRTtBQUN6QixTQUFPLGtCQUFrQixFQUFFO0FBQ3hCLFFBQ0MsSUFBSSxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM1QyxRQUFJLGFBQWEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQzVDLFFBQUksYUFBYSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RELFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNuRCxZQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUM1RixJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVM7QUFBSyxRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzt3SEFBQztBQUNELHdDQXhDQyxiQUdNLFNBQU4sVUFBVTtDQUhBLERBSVg7T0FKWSxrQkFDVixVQUFVLEVBQUUsckNBR1g7S0FIaUIsY0FDbkIsbkJBR1ksWUFQSixPQUFPO0FBQUc7Ozs7Ozs7O3dFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmLCBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3B1cFNlcnZpY2Uge1xuICBvdmVybGF5OiBPdmVybGF5ID0gbnVsbDtcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IG51bGw7XG4gIGN1cnJlbnRTZXJ2aWNlTmFtZSA9IG51bGw7XG4gIHNlcnZpY2VBcnJheTogYW55ID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9vdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5vdmVybGF5ID0gdGhpcy5fb3ZlcmxheTtcbiAgfVxuXG4gIHNob3dQb3B1cChcbiAgICBjb21wb25lbnQsXG4gICAgY2hpbGRJbmplY3Rvcj86IEluamVjdG9yLFxuICAgIGhhc0JhY2tkcm9wPzogYm9vbGVhbixcbiAgICBwb3NpdGlvblN0cmF0ZWd5OiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmdsb2JhbCgpXG4gICAgICAuY2VudGVyVmVydGljYWxseSgpXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gaGFzQmFja2Ryb3A7XG4gICAgb3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVBvcHVwKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIHVuZGVmaW5lZCwgY2hpbGRJbmplY3RvcikpO1xuICB9XG5cbiAgaGlkZVBvcHVwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=