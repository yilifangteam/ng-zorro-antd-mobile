import { Component, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
export class BadgeComponent {
    constructor(_ref, render) {
        this._ref = _ref;
        this.render = render;
        this.prefixCls = 'am-badge';
        this.scrollNumberCls = {};
        this.style = {};
        this._size = 'small';
        this._dot = false;
        this._hot = false;
        this._corner = false;
        this._children = false;
        this._overflowCount = 99;
        this.clsBadge = true;
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    set size(v) {
        this._size = v;
        this.setCls();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
        this.setCls();
    }
    set corner(v) {
        this._corner = v;
        this.setCls();
    }
    get dot() {
        return this._dot;
    }
    set dot(v) {
        this._dot = v;
        if (this._dot) {
            this._text = '';
        }
        this.setCls();
    }
    set overflowCount(v) {
        this._overflowCount = v;
    }
    set hot(v) {
        this._hot = v;
        this.setCls();
    }
    set setStyle(v) {
        this.style = v;
    }
    set className(v) {
        this._setClass = v;
        const clsArr = this._setClass.split(' ');
        clsArr.forEach(cls => {
            this.render.addClass(this._ref.nativeElement, cls);
        });
    }
    setCls() {
        this.scrollNumberCls = {
            [`${this.prefixCls}-dot`]: this._dot,
            [`${this.prefixCls}-dot-large`]: this._dot && this._size === 'large',
            [`${this.prefixCls}-text`]: !this._dot && !this._corner,
            [`${this.prefixCls}-corner`]: this._corner,
            [`${this.prefixCls}-corner-large`]: this._corner && this._size === 'large'
        };
        this.clsBadgeWrp = !this._children;
        this.clsBadgeCornerWrp = this._corner;
        this.clsBadgeHot = !!this._hot;
        this.clsBadgeCornerWrpLg = this._corner && this._size === 'large';
    }
    ngOnChanges() {
        if (typeof this._text === 'number' && this._text > this._overflowCount) {
            this._text = this._overflowCount + '+';
        }
    }
    ngOnInit() {
        this.setCls();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this._ref.nativeElement.children.length > 1 ||
                (this._ref.nativeElement.children.length === 1 && !this.dot && !this.text)) {
                this._children = true;
                this.setCls();
            }
        }, 10);
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Badge, nzm-badge',
                template: "<ng-content></ng-content>\n<sup *ngIf=\"dot || text\" [ngClass]=\"scrollNumberCls\" [ngStyle]=\"style\">\n  <span>{{ text }}</span>\n</sup>\n"
            },] }
];
BadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BadgeComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    corner: [{ type: Input }],
    dot: [{ type: Input }],
    overflowCount: [{ type: Input }],
    hot: [{ type: Input }],
    setStyle: [{ type: Input }],
    className: [{ type: Input }],
    clsBadge: [{ type: HostBinding, args: ['class.am-badge',] }],
    clsBadgeWrp: [{ type: HostBinding, args: ['class.am-badge-not-a-wrapper',] }],
    clsBadgeCornerWrp: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper',] }],
    clsBadgeHot: [{ type: HostBinding, args: ['class.am-badge-hot',] }],
    clsBadgeCornerWrpLg: [{ type: HostBinding, args: ['class.am-badge-corner-wrapper-large',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJiYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXZILE1BQU0sT0FBTyxjQUFjO0lBNEV6QixZQUFvQixJQUFnQixFQUFVLE1BQWlCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBM0UvRCxjQUFTLEdBQVcsVUFBVSxDQUFDO1FBQy9CLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJWCxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFzRHBDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVcsR0FBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFdkMsc0JBQWlCLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUxQyxnQkFBVyxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRW5DLHdCQUFtQixHQUFZLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUM7SUFFSixDQUFDO0lBOURuRSxJQUNJLElBQUksQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxJQUNJ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QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDM0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzFFO2dCQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7OztZQXBIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIseUpBQXFDO2FBQ3RDOzs7WUFMMEQsVUFBVTtZQUFpQixTQUFTOzs7bUJBb0I1RixLQUFLO21CQUtMLEtBQUs7cUJBUUwsS0FBSztrQkFLTCxLQUFLOzRCQVdMLEtBQUs7a0JBSUwsS0FBSzt1QkFLTCxLQUFLO3dCQUlMLEtBQUs7dUJBU0wsV0FBVyxTQUFDLGdCQUFnQjswQkFFNUIsV0FBVyxTQUFDLDhCQUE4QjtnQ0FFMUMsV0FBVyxTQUFDLCtCQUErQjswQkFFM0MsV0FBVyxTQUFDLG9CQUFvQjtrQ0FFaEMsV0FBVyxTQUFDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0JhZGdlLCBuem0tYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbS1iYWRnZSc7XG4gIHNjcm9sbE51bWJlckNsczogb2JqZWN0ID0ge307XG4gIHN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBwcml2YXRlIF90ZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NldENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZyA9ICdzbWFsbCc7XG4gIHByaXZhdGUgX2RvdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ob3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29ybmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX292ZXJmbG93Q291bnQ6IG51bWJlciA9IDk5O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2O1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0ID0gdjtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjb3JuZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Nvcm5lciA9IHY7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZG90KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb3Q7XG4gIH1cbiAgc2V0IGRvdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZG90ID0gdjtcbiAgICBpZiAodGhpcy5fZG90KSB7XG4gICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG92ZXJmbG93Q291bnQodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fb3ZlcmZsb3dDb3VudCA9IHY7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGhvdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faG90ID0gdjtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZXRTdHlsZSh2OiBvYmplY3QpIHtcbiAgICB0aGlzLnN0eWxlID0gdjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NldENsYXNzID0gdjtcbiAgICBjb25zdCBjbHNBcnIgPSB0aGlzLl9zZXRDbGFzcy5zcGxpdCgnICcpO1xuICAgIGNsc0Fyci5mb3JFYWNoKGNscyA9PiB7XG4gICAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh0aGlzLl9yZWYubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2UnKVxuICBjbHNCYWRnZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2Utbm90LWEtd3JhcHBlcicpXG4gIGNsc0JhZGdlV3JwOiBib29sZWFuID0gIXRoaXMuX2NoaWxkcmVuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWJhZGdlLWNvcm5lci13cmFwcGVyJylcbiAgY2xzQmFkZ2VDb3JuZXJXcnA6IGJvb2xlYW4gPSB0aGlzLl9jb3JuZXI7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tYmFkZ2UtaG90JylcbiAgY2xzQmFkZ2VIb3Q6IGJvb2xlYW4gPSAhIXRoaXMuX2hvdDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1iYWRnZS1jb3JuZXItd3JhcHBlci1sYXJnZScpXG4gIGNsc0JhZGdlQ29ybmVyV3JwTGc6IGJvb2xlYW4gPSB0aGlzLl9jb3JuZXIgJiYgdGhpcy5fc2l6ZSA9PT0gJ2xhcmdlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgc2V0Q2xzKCkge1xuICAgIHRoaXMuc2Nyb2xsTnVtYmVyQ2xzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3RgXTogdGhpcy5fZG90LFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kb3QtbGFyZ2VgXTogdGhpcy5fZG90ICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRleHRgXTogIXRoaXMuX2RvdCAmJiAhdGhpcy5fY29ybmVyLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb3JuZXJgXTogdGhpcy5fY29ybmVyLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb3JuZXItbGFyZ2VgXTogdGhpcy5fY29ybmVyICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZSdcbiAgICB9O1xuICAgIHRoaXMuY2xzQmFkZ2VXcnAgPSAhdGhpcy5fY2hpbGRyZW47XG4gICAgdGhpcy5jbHNCYWRnZUNvcm5lcldycCA9IHRoaXMuX2Nvcm5lcjtcbiAgICB0aGlzLmNsc0JhZGdlSG90ID0gISF0aGlzLl9ob3Q7XG4gICAgdGhpcy5jbHNCYWRnZUNvcm5lcldycExnID0gdGhpcy5fY29ybmVyICYmIHRoaXMuX3NpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3RleHQgPT09ICdudW1iZXInICYmIHRoaXMuX3RleHQgPiB0aGlzLl9vdmVyZmxvd0NvdW50KSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fb3ZlcmZsb3dDb3VudCArICcrJztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENscygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9yZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAxIHx8XG4gICAgICAgICh0aGlzLl9yZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgIXRoaXMuZG90ICYmICF0aGlzLnRleHQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNldENscygpO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxufVxuIl19