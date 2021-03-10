import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconHandler } from '../core/util/icon';
import * as util from './util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../core/util/icon';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../icon/icon.component';

function NoticeBarComponent_div_0_div_1_ng_template_1_Template(rf, ctx) { }
function NoticeBarComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NoticeBarComponent_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.option.icon || _r1);
} }
function NoticeBarComponent_div_0_div_9_1_ng_template_0_Template(rf, ctx) { }
function NoticeBarComponent_div_0_div_9_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NoticeBarComponent_div_0_div_9_1_ng_template_0_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.option.action || _r3);
} }
function NoticeBarComponent_div_0_div_9_2_ng_template_0_Template(rf, ctx) { }
function NoticeBarComponent_div_0_div_9_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NoticeBarComponent_div_0_div_9_2_ng_template_0_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    const _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.option.action || _r5);
} }
function NoticeBarComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NoticeBarComponent_div_0_div_9_1_Template, 1, 1, undefined, 13);
    ɵngcc0.ɵɵtemplate(2, NoticeBarComponent_div_0_div_9_2_Template, 1, 1, undefined, 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.option.mode === "closable");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.option.mode === "link");
} }
function NoticeBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("click", function NoticeBarComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.click(); });
    ɵngcc0.ɵɵtemplate(1, NoticeBarComponent_div_0_div_1_Template, 2, 1, "div", 5);
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵelementStart(3, "div", 7);
    ɵngcc0.ɵɵelementStart(4, "div", 8);
    ɵngcc0.ɵɵelementStart(5, "span");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "span");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, NoticeBarComponent_div_0_div_9_Template, 3, 2, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.icon !== null);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.marqueeScroll)("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.content);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.option.mode && ctx_r0.option.action !== null);
} }
function NoticeBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 14);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("type", "voice")("size", "xxs");
} }
function NoticeBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 14);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("type", "cross")("size", "md");
} }
function NoticeBarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "Icon", 14);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("type", "right")("size", "md");
} }
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
NoticeBarComponent.ɵfac = function NoticeBarComponent_Factory(t) { return new (t || NoticeBarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.IconHandler)); };
NoticeBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NoticeBarComponent, selectors: [["NoticeBar"], ["nzm-notice-bar"]], inputs: { option: "option" }, outputs: { onClick: "onClick" }, features: [ɵngcc0.ɵɵProvidersFeature([IconHandler])], decls: 7, vars: 1, consts: [["role", "alert", "class", "am-notice-bar", 3, "click", 4, "ngIf"], ["voice", ""], ["cross", ""], ["right", ""], ["role", "alert", 1, "am-notice-bar", 3, "click"], ["class", "am-notice-bar-icon", 4, "ngIf"], [1, "am-notice-bar-content"], [1, "marquee"], [3, "ngClass", "ngStyle"], ["role", "button", "class", "am-notice-bar-operation", 4, "ngIf"], [1, "am-notice-bar-icon"], [3, "ngTemplateOutlet"], ["role", "button", 1, "am-notice-bar-operation"], [4, "ngIf"], [3, "type", "size"]], template: function NoticeBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NoticeBarComponent_div_0_Template, 10, 6, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NoticeBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NoticeBarComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NoticeBarComponent_ng_template_5_Template, 1, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visiable);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgTemplateOutlet, ɵngcc3.IconComponent], encapsulation: 2 });
NoticeBarComponent.ctorParameters = () => [
    { type: IconHandler }
];
NoticeBarComponent.propDecorators = {
    option: [{ type: Input }],
    onClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NoticeBarComponent, [{
        type: Component,
        args: [{
                selector: 'NoticeBar, nzm-notice-bar',
                template: "<div role=\"alert\" *ngIf=\"visiable\" class=\"am-notice-bar\" (click)=\"click()\">\n  <div *ngIf=\"option.icon !== null\" class=\"am-notice-bar-icon\">\n    <ng-template [ngTemplateOutlet]=\"option.icon || voice\"></ng-template>\n  </div>\n  <div class=\"am-notice-bar-content\">\n    <div class=\"marquee\">\n      <div [ngClass]=\"marqueeScroll\" [ngStyle]=\"style\">\n        <span>{{ option.content }}</span>\n        <span>{{ option.content }}</span>\n      </div>\n    </div>\n  </div>\n  <div role=\"button\" *ngIf=\"option.mode && option.action !== null\" class=\"am-notice-bar-operation\">\n    <ng-template *ngIf=\"option.mode === 'closable'\" [ngTemplateOutlet]=\"option.action || cross\"></ng-template>\n    <ng-template *ngIf=\"option.mode === 'link'\" [ngTemplateOutlet]=\"option.action || right\"></ng-template>\n  </div>\n</div>\n\n<ng-template #voice>\n  <Icon [type]=\"'voice'\" [size]=\"'xxs'\"></Icon>\n</ng-template>\n<ng-template #cross>\n  <Icon [type]=\"'cross'\" [size]=\"'md'\"></Icon>\n</ng-template>\n<ng-template #right>\n  <Icon [type]=\"'right'\" [size]=\"'md'\"></Icon>\n</ng-template>\n",
                providers: [IconHandler]
            }]
    }], function () { return [{ type: ɵngcc1.IconHandler }]; }, { onClick: [{
            type: Output
        }], option: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbm90aWNlLWJhci9ub3RpY2UtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0IsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBOEJoQyxZQUFvQixZQUF5QjtBQUMvQyxRQURzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtBQUFDLFFBN0I5QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQUUsa0JBQWEsR0FBRyxXQUFXLENBQUM7QUFDOUIsUUFBRSxVQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFDVSxZQUFPLEdBQUc7QUFDcEIsWUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNaLFlBQUksSUFBSSxFQUFFLEVBQUU7QUFDWixZQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsWUFBSSxPQUFPLEVBQUUsRUFBRTtBQUNmLFlBQUksUUFBUSxFQUFFLE1BQU07QUFDcEIsWUFBSSxTQUFTLEVBQUUsSUFBSTtBQUNuQixZQUFJLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtBQUNuRixTQUFHLENBQUM7QUFDSixRQWNFLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUs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QUc7QUFDWCxxQkFvQlosS0FBSztBQUNOLHNCQVlDLE1BQU07QUFDUjs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25IYW5kbGVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2ljb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTm90aWNlQmFyLCBuem0tbm90aWNlLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbSWNvbkhhbmRsZXJdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdmlzaWFibGUgPSBmYWxzZTtcbiAgbWFycXVlZVNjcm9sbCA9ICdzY3JvbGxpbmcnO1xuICBzdHlsZSA9IHt9O1xuICBwcml2YXRlIF93aWR0aDtcbiAgcHJpdmF0ZSBfb3B0aW9uID0ge1xuICAgIG1vZGU6ICcnLFxuICAgIGljb246ICcnLFxuICAgIGFjdGlvbjogJycsXG4gICAgY29udGVudDogJycsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBzY3JvbGxpbmc6IHRydWUsXG4gICAgbWFycXVlZVByb3BzOiB7IGxvb3A6IHRydWUsIGxlYWRpbmc6IDUwMCwgdHJhaWxpbmc6IDgwMDAsIGZwczogMjAwLCBzdHlsZToge30gfVxuICB9O1xuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb247XG4gIH1cbiAgc2V0IG9wdGlvbih2YWx1ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9uLCB2YWx1ZSk7XG4gICAgdGhpcy5kYXRhUHJvY2VzcygpO1xuICAgIGlmICh0aGlzLl9vcHRpb24uc2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXJxdWVlU2Nyb2xsID0gJ3Njcm9sbGluZy1zdG9wJztcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpXG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ljb25IYW5kbGVyOiBJY29uSGFuZGxlcikge1xuICAgIHRoaXMuX2ljb25IYW5kbGVyLmxvYWQoKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHRoaXMuX29wdGlvbi5tb2RlKTtcbiAgICBpZiAodGhpcy5fb3B0aW9uLm1vZGUgPT09ICdjbG9zYWJsZScpIHtcbiAgICAgIHRoaXMudmlzaWFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkYXRhUHJvY2VzcygpIHtcbiAgICB0aGlzLnZpc2lhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcyMDAlJ1xuICAgIH07XG4gICAgdGhpcy5fd2lkdGggPSB1dGlsLmdldFRleHRXaWR0aCh0aGlzLl9vcHRpb24uY29udGVudCwgdGhpcy5fb3B0aW9uLmZvbnRTaXplKTtcbiAgICBpZiAodXRpbC5nZXRXaWR0aEhlaWdodCgpLndpZHRoIDwgdGhpcy5fd2lkdGgpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fb3B0aW9uLm1hcnF1ZWVQcm9wcy5sb29wID8gJ2luZmluaXRlJyA6IDE7XG4gICAgICBsZXQgYW5pbWF0aW9uTmFtZSA9IGBub3RpY2ViYXJtYXJxdWVlXyR7dGhpcy5fd2lkdGh9YDtcbiAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCAqIDIgKyAncHgnLFxuICAgICAgICAnYW5pbWF0aW9uLW5hbWUnOiBhbmltYXRpb25OYW1lLFxuICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYCR7dGhpcy5fb3B0aW9uLm1hcnF1ZWVQcm9wcy5sZWFkaW5nfW1zYCxcbiAgICAgICAgJ2FuaW1hdGlvbi1kdXJhdGlvbic6IGAkeygoKDEgLyB0aGlzLl9vcHRpb24ubWFycXVlZVByb3BzLmZwcykgKiB0aGlzLl93aWR0aCkgLyB1dGlsLmdldFdpZHRoSGVpZ2h0KCkud2lkdGgpICpcbiAgICAgICAgICAxMDAwfXNgLFxuICAgICAgICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCc6IGAke2NvdW50fWBcbiAgICAgIH07XG4gICAgICB0aGlzLm1hcnF1ZWVTY3JvbGwgPSAnc2Nyb2xsaW5nJztcbiAgICAgIHRoaXMuaW5zZXRLZXlmcmFtZShhbmltYXRpb25OYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXJxdWVlU2Nyb2xsID0gJ3Njcm9sbGluZy1zdG9wJztcbiAgICB9XG4gIH1cblxuICBpbnNldEtleWZyYW1lKGFuaW1hdGlvbk5hbWUpIHtcbiAgICB1dGlsLmluc2VydEtleUZyYW1lKFxuICAgICAgYEBrZXlmcmFtZXMgJHthbmltYXRpb25OYW1lfSB7XG4gICAgICAwJSB7IGxlZnQ6IDBweDsgfVxuICAgICAgMTAwJSB7IGxlZnQ6IC0ke3RoaXMuX3dpZHRofXB4IH1cbiAgICB9YCxcbiAgICAgICdub3RpY2VfYmFyX2FuaW1hdGlvbl9jbHMnXG4gICAgKTtcbiAgICB1dGlsLmluc2VydEtleUZyYW1lKFxuICAgICAgYEAtd2Via2l0LWtleWZyYW1lcyAke2FuaW1hdGlvbk5hbWV9IHtcbiAgICAgIDAlIHsgbGVmdDogMHB4OyB9XG4gICAgICAxMDAlIHsgbGVmdDogLSR7dGhpcy5fd2lkdGh9cHggfVxuICAgIH1gLFxuICAgICAgJ25vdGljZV9iYXJfYW5pbWF0aW9uX2NscydcbiAgICApO1xuICAgIHV0aWwuaW5zZXJ0S2V5RnJhbWUoXG4gICAgICBgQC1tb3ota2V5ZnJhbWVzICR7YW5pbWF0aW9uTmFtZX0ge1xuICAgICAgMCUgeyBsZWZ0OiAwcHg7IH1cbiAgICAgIDEwMCUgeyBsZWZ0OiAtJHt0aGlzLl93aWR0aH1weCB9XG4gICAgfWAsXG4gICAgICAnbm90aWNlX2Jhcl9hbmltYXRpb25fY2xzJ1xuICAgICk7XG4gICAgdXRpbC5pbnNlcnRLZXlGcmFtZShcbiAgICAgIGBALW8ta2V5ZnJhbWVzICR7YW5pbWF0aW9uTmFtZX0ge1xuICAgICAgMCUgeyBsZWZ0OiAwcHg7IH1cbiAgICAgIDEwMCUgeyBsZWZ0OiAtJHt0aGlzLl93aWR0aH1weCB9XG4gICAgfWAsXG4gICAgICAnbm90aWNlX2Jhcl9hbmltYXRpb25fY2xzJ1xuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5tYXJxdWVlU2Nyb2xsID0gJ3Njcm9sbGluZy1zdG9wJztcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5tYXJxdWVlU2Nyb2xsID0gJ3Njcm9sbGluZyc7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB1dGlsLmRlbGV0ZUtleUZyYW1lKCdub3RpY2VfYmFyX2FuaW1hdGlvbl9jbHMnKTtcbiAgfVxufVxuIl19