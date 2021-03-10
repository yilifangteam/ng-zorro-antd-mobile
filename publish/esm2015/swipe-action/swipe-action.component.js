import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
export class SwipeActionComponent {
    constructor() {
        this.prefixCls = 'am-swipe';
        this.wrapCls = {};
        this._swiping = false;
        this._openedLeft = false;
        this._openedRight = false;
        this.left = [];
        this.right = [];
        this.autoClose = false;
        this.disabled = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onCloseSwipe = ev => {
            if (!(this._openedLeft || this._openedRight)) {
                return;
            }
            const pNode = ev.target.closest(`.${this.prefixCls}-actions`);
            if (!pNode) {
                this.close();
            }
        };
    }
    setClassMap() {
        this.wrapCls = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-swiping`]: this._swiping
        };
    }
    close() {
        if (this._openedLeft || this._openedRight) {
            this.onClose.emit();
        }
        this.setBtnStyle(0);
        this._openedLeft = false;
        this._openedRight = false;
    }
    setBtnStyle(value) {
        if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
            this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
            this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        }
        const limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
        const contentLeft = this.getContentEasing(value, limit);
        this.content.nativeElement.style.left = `${contentLeft}px`;
        this.cover.nativeElement.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        this.cover.nativeElement.style.left = `${contentLeft}px`;
    }
    getContentEasing(value, limit) {
        return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
    }
    onTouchStart(e) {
        this._startX = e.changedTouches[0].clientX;
        this._swiping = true;
    }
    onTouchMove(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        this._needShowRight = deltaX < -5 && this.right.length > 0;
        this._needShowLeft = deltaX > 5 && this.left.length > 0;
        if (this.leftBtnRef) {
            this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? 'hidden' : 'visible';
        }
        if (this.rightBtnRef) {
            this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? 'hidden' : 'visible';
        }
        this.setBtnStyle(deltaX);
    }
    onTouchEnd(e) {
        const deltaX = e.changedTouches[0].clientX - this._startX;
        const needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
        const needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;
        if (needOpenRight) {
            this.doOpenRight();
        }
        else if (needOpenLeft) {
            this.doOpenLeft();
        }
        else {
            this.close();
        }
        this._swiping = false;
        this._needShowLeft = false;
        this._needShowRight = false;
    }
    doOpenLeft() {
        this.open(this._btnsLeftWidth, true, false);
    }
    doOpenRight() {
        this.open(-this._btnsRightWidth, false, true);
    }
    onBtnClick(ev, btn) {
        const onPress = btn.onPress;
        if (onPress) {
            onPress(ev);
        }
        if (this.autoClose) {
            this.close();
        }
    }
    open(value, openedLeft, openedRight) {
        this.onOpen.emit();
        this._openedLeft = openedLeft;
        this._openedRight = openedRight;
        this.setBtnStyle(value);
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
        this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
        document.body.addEventListener('touchstart', this.onCloseSwipe, true);
    }
    ngOnDestroy() {
        document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
    }
}
SwipeActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'SwipeAction, nzm-swipe-action',
                template: "<div *ngIf=\"(left.length != 0 || right.length != 0) && !disabled\" [ngClass]=\"wrapCls\">\n  <div class=\"{{ prefixCls }}-cover\" #coverRef></div>\n  <div *ngIf=\"left && left.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-left\" #leftBtnRef>\n    <div\n      *ngFor=\"let btn of left\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"right && right.length > 0\" class=\"{{ prefixCls }}-actions {{ prefixCls }}-actions-right\" #rightBtnRef>\n    <div\n      *ngFor=\"let btn of right\"\n      class=\"{{ prefixCls }}-btn {{ btn.className }}\"\n      [ngStyle]=\"btn.style\"\n      role=\"button\"\n      (click)=\"onBtnClick($event, btn)\"\n    >\n      <div class=\"{{ prefixCls }}-btn-text\">\n        {{ btn.text || 'Click' }}\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"{{ prefixCls }}-content\"\n    #contentRef\n    (touchstart)=\"onTouchStart($event)\"\n    (touchmove)=\"onTouchMove($event)\"\n    (touchend)=\"onTouchEnd($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  </div>\n</div>\n<div *ngIf=\"!((left.length != 0 || right.length != 0) && !disabled)\" class=\"{{ prefixCls }}-content\" #contentRef>\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
SwipeActionComponent.ctorParameters = () => [];
SwipeActionComponent.propDecorators = {
    leftBtnRef: [{ type: ViewChild, args: ['leftBtnRef',] }],
    rightBtnRef: [{ type: ViewChild, args: ['rightBtnRef',] }],
    content: [{ type: ViewChild, args: ['contentRef',] }],
    cover: [{ type: ViewChild, args: ['coverRef',] }],
    left: [{ type: Input }],
    right: [{ type: Input }],
    autoClose: [{ type: Input }],
    disabled: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE1BQU0sT0FBTyxvQkFBb0I7SUFtQy9CO1FBbENBLGNBQVMsR0FBVyxVQUFVLENBQUM7UUFDL0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUViLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFpQnRDLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBRXpCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBRTFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBV3JELGlCQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzVDLE9BQU87YUFDUjtZQUNELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQTtJQWpCYyxDQUFDO0lBRWhCLFdBQVc7UUFDVCxJQUFJ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QUN6RixRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUE3SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLGdqREFBNEM7Z0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O3lCQWNFLFNBQVMsU0FBQyxZQUFZOzBCQUV0QixTQUFTLFNBQUMsYUFBYTtzQkFFdkIsU0FBUyxTQUFDLFlBQVk7b0JBRXRCLFNBQVMsU0FBQyxVQUFVO21CQUdwQixLQUFLO29CQUVMLEtBQUs7d0JBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLE1BQU07c0JBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnU3dpcGVBY3Rpb24sIG56bS1zd2lwZS1hY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcGUtYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tc3dpcGUnO1xuICB3cmFwQ2xzOiBvYmplY3QgPSB7fTtcblxuICBwcml2YXRlIF9zd2lwaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW5lZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb3BlbmVkUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYnRuc0xlZnRXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIF9idG5zUmlnaHRXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIF9uZWVkU2hvd0xlZnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX25lZWRTaG93UmlnaHQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N0YXJ0WDogbnVtYmVyO1xuXG4gIEBWaWV3Q2hpbGQoJ2xlZnRCdG5SZWYnKVxuICBsZWZ0QnRuUmVmO1xuICBAVmlld0NoaWxkKCdyaWdodEJ0blJlZicpXG4gIHJpZ2h0QnRuUmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50UmVmJylcbiAgY29udGVudDtcbiAgQFZpZXdDaGlsZCgnY292ZXJSZWYnKVxuICBjb3ZlcjtcblxuICBASW5wdXQoKVxuICBsZWZ0OiBBcnJheTxvYmplY3Q+ID0gW107XG4gIEBJbnB1dCgpXG4gIHJpZ2h0OiBBcnJheTxvYmplY3Q+ID0gW107XG4gIEBJbnB1dCgpXG4gIGF1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25PcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0Q2xhc3NNYXAoKSB7XG4gICAgdGhpcy53cmFwQ2xzID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpcGluZ2BdOiB0aGlzLl9zd2lwaW5nXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xvc2VTd2lwZSA9IGV2ID0+IHtcbiAgICBpZiAoISh0aGlzLl9vcGVuZWRMZWZ0IHx8IHRoaXMuX29wZW5lZFJpZ2h0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwTm9kZSA9IGV2LnRhcmdldC5jbG9zZXN0KGAuJHt0aGlzLnByZWZpeENsc30tYWN0aW9uc2ApO1xuICAgIGlmICghcE5vZGUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkTGVmdCB8fCB0aGlzLl9vcGVuZWRSaWdodCkge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRCdG5TdHlsZSgwKTtcbiAgICB0aGlzLl9vcGVuZWRMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5fb3BlbmVkUmlnaHQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldEJ0blN0eWxlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2J0bnNMZWZ0V2lkdGggPT09IDAgfHwgdGhpcy5fYnRuc1JpZ2h0V2lkdGggPT09IDApIHtcbiAgICAgIHRoaXMuX2J0bnNMZWZ0V2lkdGggPSB0aGlzLmxlZnRCdG5SZWYgPyB0aGlzLmxlZnRCdG5SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IDA7XG4gICAgICB0aGlzLl9idG5zUmlnaHRXaWR0aCA9IHRoaXMucmlnaHRCdG5SZWYgPyB0aGlzLnJpZ2h0QnRuUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiAwO1xuICAgIH1cbiAgICBjb25zdCBsaW1pdCA9IHZhbHVlID4gMCA/IHRoaXMuX2J0bnNMZWZ0V2lkdGggOiAtdGhpcy5fYnRuc1JpZ2h0V2lkdGg7XG4gICAgY29uc3QgY29udGVudExlZnQgPSB0aGlzLmdldENvbnRlbnRFYXNpbmcodmFsdWUsIGxpbWl0KTtcbiAgICB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7Y29udGVudExlZnR9cHhgO1xuICAgIHRoaXMuY292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gTWF0aC5hYnModmFsdWUpID4gMCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgdGhpcy5jb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtjb250ZW50TGVmdH1weGA7XG4gIH1cblxuICBnZXRDb250ZW50RWFzaW5nKHZhbHVlLCBsaW1pdCkge1xuICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSkgLSBNYXRoLmFicyhsaW1pdCkgPiAwID8gbGltaXQgOiB2YWx1ZTtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydChlKSB7XG4gICAgdGhpcy5fc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHRoaXMuX3N3aXBpbmcgPSB0cnVlO1xuICB9XG5cbiAgb25Ub3VjaE1vdmUoZSkge1xuICAgIGNvbnN0IGRlbHRhWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX3N0YXJ0WDtcbiAgICB0aGlzLl9uZWVkU2hvd1JpZ2h0ID0gZGVsdGFYIDwgLTUgJiYgdGhpcy5yaWdodC5sZW5ndGggPiAwO1xuICAgIHRoaXMuX25lZWRTaG93TGVmdCA9IGRlbHRhWCA+IDUgJiYgdGhpcy5sZWZ0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKHRoaXMubGVmdEJ0blJlZikge1xuICAgICAgdGhpcy5sZWZ0QnRuUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuX25lZWRTaG93UmlnaHQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmlnaHRCdG5SZWYpIHtcbiAgICAgIHRoaXMucmlnaHRCdG5SZWYubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5fbmVlZFNob3dMZWZ0ID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgfVxuICAgIHRoaXMuc2V0QnRuU3R5bGUoZGVsdGFYKTtcbiAgfVxuXG4gIG9uVG91Y2hFbmQoZSkge1xuICAgIGNvbnN0IGRlbHRhWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX3N0YXJ0WDtcblxuICAgIGNvbnN0IG5lZWRPcGVuUmlnaHQgPSB0aGlzLl9uZWVkU2hvd1JpZ2h0ICYmIE1hdGguYWJzKGRlbHRhWCkgPiB0aGlzLl9idG5zUmlnaHRXaWR0aCAvIDI7XG4gICAgY29uc3QgbmVlZE9wZW5MZWZ0ID0gdGhpcy5fbmVlZFNob3dMZWZ0ICYmIE1hdGguYWJzKGRlbHRhWCkgPiB0aGlzLl9idG5zTGVmdFdpZHRoIC8gMjtcblxuICAgIGlmIChuZWVkT3BlblJpZ2h0KSB7XG4gICAgICB0aGlzLmRvT3BlblJpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChuZWVkT3BlbkxlZnQpIHtcbiAgICAgIHRoaXMuZG9PcGVuTGVmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX3N3aXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9uZWVkU2hvd0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLl9uZWVkU2hvd1JpZ2h0ID0gZmFsc2U7XG4gIH1cblxuICBkb09wZW5MZWZ0KCkge1xuICAgIHRoaXMub3Blbih0aGlzLl9idG5zTGVmdFdpZHRoLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICBkb09wZW5SaWdodCgpIHtcbiAgICB0aGlzLm9wZW4oLXRoaXMuX2J0bnNSaWdodFdpZHRoLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBvbkJ0bkNsaWNrKGV2LCBidG4pIHtcbiAgICBjb25zdCBvblByZXNzID0gYnRuLm9uUHJlc3M7XG4gICAgaWYgKG9uUHJlc3MpIHtcbiAgICAgIG9uUHJlc3MoZXYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKHZhbHVlLCBvcGVuZWRMZWZ0LCBvcGVuZWRSaWdodCkge1xuICAgIHRoaXMub25PcGVuLmVtaXQoKTtcbiAgICB0aGlzLl9vcGVuZWRMZWZ0ID0gb3BlbmVkTGVmdDtcbiAgICB0aGlzLl9vcGVuZWRSaWdodCA9IG9wZW5lZFJpZ2h0O1xuICAgIHRoaXMuc2V0QnRuU3R5bGUodmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2J0bnNMZWZ0V2lkdGggPSB0aGlzLmxlZnRCdG5SZWYgPyB0aGlzLmxlZnRCdG5SZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IDA7XG4gICAgdGhpcy5fYnRuc1JpZ2h0V2lkdGggPSB0aGlzLnJpZ2h0QnRuUmVmID8gdGhpcy5yaWdodEJ0blJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogMDtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xvc2VTd2lwZSwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xvc2VTd2lwZSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==