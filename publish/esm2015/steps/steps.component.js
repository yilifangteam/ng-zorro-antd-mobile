import { Component, Input, ContentChildren, QueryList, HostBinding, Renderer2, ElementRef } from '@angular/core';
import { StepStatusEnum, StepDirectionEnum } from './step/step.component';
import { StepComponent } from './step/step.component';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class StepsComponent {
    constructor(_elf, _render) {
        this._elf = _elf;
        this._render = _render;
        this.prefixCls = 'am-steps';
        this._current = 0;
        this._status = StepStatusEnum.PROCESS;
        this._direction = StepDirectionEnum.VERTICAL;
        this.clsSteps = true;
    }
    set current(value) {
        if (value >= 0) {
            this._current = value;
            if (this.stepItems) {
                this.setStepStyle();
            }
        }
    }
    set size(value) {
        this._size = value;
        this.setCls();
    }
    set status(value) {
        this._status = value;
        if (this.stepItems) {
            this.setStepStyle();
        }
    }
    set direction(value) {
        this._direction = value;
        this.setCls();
    }
    setStepStyle() {
        const itemCount = this.stepItems.length;
        const itemArr = this.stepItems['_results'];
        for (let index = 0; index < itemCount; index++) {
            const step = itemArr[index];
            step.stepNumber = index + 1;
            step.outStatus = this._status;
            step.currentIndex = this._current + 1;
            step.iconSize = this._size === 'small' ? (this._status === StepStatusEnum.WAIT ? 'xxs' : 'xs') : 'md';
            if (index < itemCount - 1 && itemArr[index + 1].status === StepStatusEnum.ERROR) {
                step.stepItemCls = step.stepItemCls
                    ? Object.assign(step.stepItemCls, { 'error-tail': true })
                    : { 'error-tail': true };
            }
        }
    }
    setCls() {
        if (this._direction === StepDirectionEnum.HORIZONTAL) {
            this.clsStepsLabelVtl = true;
            this.clsStepsHztl = true;
            this.clsStepsVtl = false;
        }
        else if (this._direction === StepDirectionEnum.VERTICAL) {
            this.clsStepsVtl = true;
            this.clsStepsHztl = false;
        }
        if (this._size === 'small') {
            this.clsStepsSmall = true;
        }
        else {
            this.clsStepsSmall = false;
        }
    }
    ngOnInit() {
        this.setCls();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.setStepStyle();
        }, 0);
        this.stepItems.changes.subscribe(change => {
            setTimeout(() => {
                this.setStepStyle();
            }, 0);
        });
    }
}
StepsComponent.ɵfac = function StepsComponent_Factory(t) { return new (t || StepsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
StepsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StepsComponent, selectors: [["Steps"], ["nzm-steps"]], contentQueries: function StepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, StepComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepItems = _t);
    } }, hostVars: 10, hostBindings: function StepsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-steps", ctx.clsSteps)("am-steps-label-vertical", ctx.clsStepsLabelVtl)("am-steps-horizontal", ctx.clsStepsHztl)("am-steps-vertical", ctx.clsStepsVtl)("am-steps-small", ctx.clsStepsSmall);
    } }, inputs: { current: "current", size: "size", status: "status", direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function StepsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
StepsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
StepsComponent.propDecorators = {
    stepItems: [{ type: ContentChildren, args: [StepComponent,] }],
    current: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    direction: [{ type: Input }],
    clsSteps: [{ type: HostBinding, args: ['class.am-steps',] }],
    clsStepsSmall: [{ type: HostBinding, args: ['class.am-steps-small',] }],
    clsStepsLabelVtl: [{ type: HostBinding, args: ['class.am-steps-label-vertical',] }],
    clsStepsVtl: [{ type: HostBinding, args: ['class.am-steps-vertical',] }],
    clsStepsHztl: [{ type: HostBinding, args: ['class.am-steps-horizontal',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepsComponent, [{
        type: Component,
        args: [{
                selector: 'Steps,nzm-steps',
                template: "<ng-content></ng-content>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { clsSteps: [{
            type: HostBinding,
            args: ['class.am-steps']
        }], current: [{
            type: Input
        }], size: [{
            type: Input
        }], status: [{
            type: Input
        }], direction: [{
            type: Input
        }], clsStepsLabelVtl: [{
            type: HostBinding,
            args: ['class.am-steps-label-vertical']
        }], clsStepsHztl: [{
            type: HostBinding,
            args: ['class.am-steps-horizontal']
        }], clsStepsVtl: [{
            type: HostBinding,
            args: ['class.am-steps-vertical']
        }], clsStepsSmall: [{
            type: HostBinding,
            args: ['class.am-steps-small']
        }], stepItems: [{
            type: ContentChildren,
            args: [StepComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFNdEQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQWlENUIsWUFBb0IsSUFBZ0IsRUFBVSxPQUFrQjtBQUFJLFFBQWhELFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVc7QUFBQyxRQWhEakUsY0FBUyxHQUFXLFVBQVUsQ0FBQztBQUNqQyxRQUNVLGFBQVEsR0FBVyxDQUFDLENBQUM7QUFDL0IsUUFDVSxZQUFPLEdBQW1CLGNBQWMsQ0FBQyxPQUFPLENBQUM7QUFDM0QsUUFBVSxlQUFVLEdBQXNCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztBQUNyRSxRQWdDRSxhQUFRLEdBQVksSUFBSSxDQUFDO0FBQzNCLElBU3NFLENBQUM7QUFDdkUsSUF2Q0UsSUFDSSxPQUFPLENBQUMsS0FBSztBQUNuQixRQUFJLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFlBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzFCLGdCQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQUUsSUFDSSxJQUFJLENBQUMsS0FBSztBQUNoQixRQUFJLElBQUks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dCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBIb3N0QmluZGluZyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcFN0YXR1c0VudW0sIFN0ZXBEaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdTdGVwcyxuem0tc3RlcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tc3RlcHMnO1xuXG4gIHByaXZhdGUgX2N1cnJlbnQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdHVzOiBTdGVwU3RhdHVzRW51bSA9IFN0ZXBTdGF0dXNFbnVtLlBST0NFU1M7XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogU3RlcERpcmVjdGlvbkVudW0gPSBTdGVwRGlyZWN0aW9uRW51bS5WRVJUSUNBTDtcblxuICBAQ29udGVudENoaWxkcmVuKFN0ZXBDb21wb25lbnQpXG4gIHN0ZXBJdGVtczogUXVlcnlMaXN0PFN0ZXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnN0ZXBJdGVtcykge1xuICAgICAgICB0aGlzLnNldFN0ZXBTdHlsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzdGF0dXModmFsdWU6IFN0ZXBTdGF0dXNFbnVtKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuc3RlcEl0ZW1zKSB7XG4gICAgICB0aGlzLnNldFN0ZXBTdHlsZSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGlyZWN0aW9uKHZhbHVlOiBTdGVwRGlyZWN0aW9uRW51bSkge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXN0ZXBzJylcbiAgY2xzU3RlcHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXN0ZXBzLXNtYWxsJylcbiAgY2xzU3RlcHNTbWFsbDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zdGVwcy1sYWJlbC12ZXJ0aWNhbCcpXG4gIGNsc1N0ZXBzTGFiZWxWdGw6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tc3RlcHMtdmVydGljYWwnKVxuICBjbHNTdGVwc1Z0bDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1zdGVwcy1ob3Jpem9udGFsJylcbiAgY2xzU3RlcHNIenRsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIHNldFN0ZXBTdHlsZSgpIHtcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLnN0ZXBJdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgaXRlbUFyciA9IHRoaXMuc3RlcEl0ZW1zWydfcmVzdWx0cyddO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBpdGVtQXJyW2luZGV4XTtcbiAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4ICsgMTtcbiAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5fc3RhdHVzO1xuICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50ICsgMTtcbiAgICAgIHN0ZXAuaWNvblNpemUgPSB0aGlzLl9zaXplID09PSAnc21hbGwnID8gKHRoaXMuX3N0YXR1cyA9PT0gU3RlcFN0YXR1c0VudW0uV0FJVCA/ICd4eHMnIDogJ3hzJykgOiAnbWQnO1xuICAgICAgaWYgKGluZGV4IDwgaXRlbUNvdW50IC0gMSAmJiBpdGVtQXJyW2luZGV4ICsgMV0uc3RhdHVzID09PSBTdGVwU3RhdHVzRW51bS5FUlJPUikge1xuICAgICAgICBzdGVwLnN0ZXBJdGVtQ2xzID0gc3RlcC5zdGVwSXRlbUNsc1xuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihzdGVwLnN0ZXBJdGVtQ2xzLCB7ICdlcnJvci10YWlsJzogdHJ1ZSB9KVxuICAgICAgICAgIDogeyAnZXJyb3ItdGFpbCc6IHRydWUgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDbHMoKSB7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gU3RlcERpcmVjdGlvbkVudW0uSE9SSVpPTlRBTCkge1xuICAgICAgdGhpcy5jbHNTdGVwc0xhYmVsVnRsID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xzU3RlcHNIenRsID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xzU3RlcHNWdGwgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gU3RlcERpcmVjdGlvbkVudW0uVkVSVElDQUwpIHtcbiAgICAgIHRoaXMuY2xzU3RlcHNWdGwgPSB0cnVlO1xuICAgICAgdGhpcy5jbHNTdGVwc0h6dGwgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NpemUgPT09ICdzbWFsbCcpIHtcbiAgICAgIHRoaXMuY2xzU3RlcHNTbWFsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xzU3RlcHNTbWFsbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0ZXBTdHlsZSgpO1xuICAgIH0sIDApO1xuICAgIHRoaXMuc3RlcEl0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGVwU3R5bGUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==