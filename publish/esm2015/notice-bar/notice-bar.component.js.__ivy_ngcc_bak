import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconHandler } from '../core/util/icon';
import * as util from './util';
export class NoticeBarComponent {
    constructor(_iconHandler) {
        this._iconHandler = _iconHandler;
        this.visiable = false;
        this.marqueeScroll = 'scrolling';
        this.style = {};
        this._option = {
            mode: '',
            icon: '',
            action: '',
            content: '',
            fontSize: '14px',
            scrolling: true,
            marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} }
        };
        this.onClick = new EventEmitter();
        this._iconHandler.load();
    }
    get option() {
        return this._option;
    }
    set option(value) {
        Object.assign(this._option, value);
        this.dataProcess();
        if (this._option.scrolling) {
            this.marqueeScroll = 'scrolling';
        }
        else {
            this.marqueeScroll = 'scrolling-stop';
        }
    }
    click() {
        this.onClick.emit(this._option.mode);
        if (this._option.mode === 'closable') {
            this.visiable = false;
        }
    }
    dataProcess() {
        this.visiable = true;
        this.style = {
            width: '200%'
        };
        this._width = util.getTextWidth(this._option.content, this._option.fontSize);
        if (util.getWidthHeight().width < this._width) {
            const count = this._option.marqueeProps.loop ? 'infinite' : 1;
            let animationName = `noticebarmarquee_${this._width}`;
            this.style = {
                width: this._width * 2 + 'px',
                'animation-name': animationName,
                'animation-delay': `${this._option.marqueeProps.leading}ms`,
                'animation-duration': `${(((1 / this._option.marqueeProps.fps) * this._width) / util.getWidthHeight().width) *
                    1000}s`,
                'animation-iteration-count': `${count}`
            };
            this.marqueeScroll = 'scrolling';
            this.insetKeyframe(animationName);
        }
        else {
            this.marqueeScroll = 'scrolling-stop';
        }
    }
    insetKeyframe(animationName) {
        util.insertKeyFrame(`@keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        util.insertKeyFrame(`@-webkit-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        util.insertKeyFrame(`@-moz-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
        util.insertKeyFrame(`@-o-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, 'notice_bar_animation_cls');
    }
    ngOnInit() {
        document.addEventListener('touchstart', () => {
            this.marqueeScroll = 'scrolling-stop';
        });
        document.addEventListener('touchend', () => {
            this.marqueeScroll = 'scrolling';
        });
    }
    ngOnDestroy() {
        util.deleteKeyFrame('notice_bar_animation_cls');
    }
}
NoticeBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'NoticeBar, nzm-notice-bar',
                template: "<div role=\"alert\" *ngIf=\"visiable\" class=\"am-notice-bar\" (click)=\"click()\">\n  <div *ngIf=\"option.icon !== null\" class=\"am-notice-bar-icon\">\n    <ng-template [ngTemplateOutlet]=\"option.icon || voice\"></ng-template>\n  </div>\n  <div class=\"am-notice-bar-content\">\n    <div class=\"marquee\">\n      <div [ngClass]=\"marqueeScroll\" [ngStyle]=\"style\">\n        <span>{{ option.content }}</span>\n        <span>{{ option.content }}</span>\n      </div>\n    </div>\n  </div>\n  <div role=\"button\" *ngIf=\"option.mode && option.action !== null\" class=\"am-notice-bar-operation\">\n    <ng-template *ngIf=\"option.mode === 'closable'\" [ngTemplateOutlet]=\"option.action || cross\"></ng-template>\n    <ng-template *ngIf=\"option.mode === 'link'\" [ngTemplateOutlet]=\"option.action || right\"></ng-template>\n  </div>\n</div>\n\n<ng-template #voice>\n  <Icon [type]=\"'voice'\" [size]=\"'xxs'\"></Icon>\n</ng-template>\n<ng-template #cross>\n  <Icon [type]=\"'cross'\" [size]=\"'md'\"></Icon>\n</ng-template>\n<ng-template #right>\n  <Icon [type]=\"'right'\" [size]=\"'md'\"></Icon>\n</ng-template>\n",
                providers: [IconHandler]
            },] }
];
NoticeBarComponent.ctorParameters = () => [
    { type: IconHandler }
];
NoticeBarComponent.propDecorators = {
    option: [{ type: Input }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbIm5vdGljZS1iYXIvbm90aWNlLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxLQUFLLElBQUksTUFBTSxRQUFRLENBQUM7QUFNL0IsTUFBTSxPQUFPLGtCQUFrQjtJQThCN0IsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUE3QjdDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVILFlBQU8sR0FBRztZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1NBQ2hGLENBQUM7UUFlRixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBbEJELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSztRQUNkLE1BQU0sQ0FB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M0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBakhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw0bUNBQTBDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7OztZQU5RLFdBQVc7OztxQkFxQmpCLEtBQUs7c0JBYUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkhhbmRsZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvaWNvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdOb3RpY2VCYXIsIG56bS1ub3RpY2UtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGljZS1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtJY29uSGFuZGxlcl1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWNlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB2aXNpYWJsZSA9IGZhbHNlO1xuICBtYXJxdWVlU2Nyb2xsID0gJ3Njcm9sbGluZyc7XG4gIHN0eWxlID0ge307XG4gIHByaXZhdGUgX3dpZHRoO1xuICBwcml2YXRlIF9vcHRpb24gPSB7XG4gICAgbW9kZTogJycsXG4gICAgaWNvbjogJycsXG4gICAgYWN0aW9uOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIHNjcm9sbGluZzogdHJ1ZSxcbiAgICBtYXJxdWVlUHJvcHM6IHsgbG9vcDogdHJ1ZSwgbGVhZGluZzogNTAwLCB0cmFpbGluZzogODAwMCwgZnBzOiAyMDAsIHN0eWxlOiB7fSB9XG4gIH07XG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbjtcbiAgfVxuICBzZXQgb3B0aW9uKHZhbHVlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb24sIHZhbHVlKTtcbiAgICB0aGlzLmRhdGFQcm9jZXNzKCk7XG4gICAgaWYgKHRoaXMuX29wdGlvbi5zY3JvbGxpbmcpIHtcbiAgICAgIHRoaXMubWFycXVlZVNjcm9sbCA9ICdzY3JvbGxpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nLXN0b3AnO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KClcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaWNvbkhhbmRsZXI6IEljb25IYW5kbGVyKSB7XG4gICAgdGhpcy5faWNvbkhhbmRsZXIubG9hZCgpO1xuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQodGhpcy5fb3B0aW9uLm1vZGUpO1xuICAgIGlmICh0aGlzLl9vcHRpb24ubW9kZSA9PT0gJ2Nsb3NhYmxlJykge1xuICAgICAgdGhpcy52aXNpYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRhdGFQcm9jZXNzKCkge1xuICAgIHRoaXMudmlzaWFibGUgPSB0cnVlO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzIwMCUnXG4gICAgfTtcbiAgICB0aGlzLl93aWR0aCA9IHV0aWwuZ2V0VGV4dFdpZHRoKHRoaXMuX29wdGlvbi5jb250ZW50LCB0aGlzLl9vcHRpb24uZm9udFNpemUpO1xuICAgIGlmICh1dGlsLmdldFdpZHRoSGVpZ2h0KCkud2lkdGggPCB0aGlzLl93aWR0aCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLl9vcHRpb24ubWFycXVlZVByb3BzLmxvb3AgPyAnaW5maW5pdGUnIDogMTtcbiAgICAgIGxldCBhbmltYXRpb25OYW1lID0gYG5vdGljZWJhcm1hcnF1ZWVfJHt0aGlzLl93aWR0aH1gO1xuICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoICogMiArICdweCcsXG4gICAgICAgICdhbmltYXRpb24tbmFtZSc6IGFuaW1hdGlvbk5hbWUsXG4gICAgICAgICdhbmltYXRpb24tZGVsYXknOiBgJHt0aGlzLl9vcHRpb24ubWFycXVlZVByb3BzLmxlYWRpbmd9bXNgLFxuICAgICAgICAnYW5pbWF0aW9uLWR1cmF0aW9uJzogYCR7KCgoMSAvIHRoaXMuX29wdGlvbi5tYXJxdWVlUHJvcHMuZnBzKSAqIHRoaXMuX3dpZHRoKSAvIHV0aWwuZ2V0V2lkdGhIZWlnaHQoKS53aWR0aCkgKlxuICAgICAgICAgIDEwMDB9c2AsXG4gICAgICAgICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JzogYCR7Y291bnR9YFxuICAgICAgfTtcbiAgICAgIHRoaXMubWFycXVlZVNjcm9sbCA9ICdzY3JvbGxpbmcnO1xuICAgICAgdGhpcy5pbnNldEtleWZyYW1lKGFuaW1hdGlvbk5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nLXN0b3AnO1xuICAgIH1cbiAgfVxuXG4gIGluc2V0S2V5ZnJhbWUoYW5pbWF0aW9uTmFtZSkge1xuICAgIHV0aWwuaW5zZXJ0S2V5RnJhbWUoXG4gICAgICBgQGtleWZyYW1lcyAke2FuaW1hdGlvbk5hbWV9IHtcbiAgICAgIDAlIHsgbGVmdDogMHB4OyB9XG4gICAgICAxMDAlIHsgbGVmdDogLSR7dGhpcy5fd2lkdGh9cHggfVxuICAgIH1gLFxuICAgICAgJ25vdGljZV9iYXJfYW5pbWF0aW9uX2NscydcbiAgICApO1xuICAgIHV0aWwuaW5zZXJ0S2V5RnJhbWUoXG4gICAgICBgQC13ZWJraXQta2V5ZnJhbWVzICR7YW5pbWF0aW9uTmFtZX0ge1xuICAgICAgMCUgeyBsZWZ0OiAwcHg7IH1cbiAgICAgIDEwMCUgeyBsZWZ0OiAtJHt0aGlzLl93aWR0aH1weCB9XG4gICAgfWAsXG4gICAgICAnbm90aWNlX2Jhcl9hbmltYXRpb25fY2xzJ1xuICAgICk7XG4gICAgdXRpbC5pbnNlcnRLZXlGcmFtZShcbiAgICAgIGBALW1vei1rZXlmcmFtZXMgJHthbmltYXRpb25OYW1lfSB7XG4gICAgICAwJSB7IGxlZnQ6IDBweDsgfVxuICAgICAgMTAwJSB7IGxlZnQ6IC0ke3RoaXMuX3dpZHRofXB4IH1cbiAgICB9YCxcbiAgICAgICdub3RpY2VfYmFyX2FuaW1hdGlvbl9jbHMnXG4gICAgKTtcbiAgICB1dGlsLmluc2VydEtleUZyYW1lKFxuICAgICAgYEAtby1rZXlmcmFtZXMgJHthbmltYXRpb25OYW1lfSB7XG4gICAgICAwJSB7IGxlZnQ6IDBweDsgfVxuICAgICAgMTAwJSB7IGxlZnQ6IC0ke3RoaXMuX3dpZHRofXB4IH1cbiAgICB9YCxcbiAgICAgICdub3RpY2VfYmFyX2FuaW1hdGlvbl9jbHMnXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nLXN0b3AnO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nJztcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHV0aWwuZGVsZXRlS2V5RnJhbWUoJ25vdGljZV9iYXJfYW5pbWF0aW9uX2NscycpO1xuICB9XG59XG4iXX0=