import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
export class DotIndicatorComponent {
    constructor() {
        this.items = [];
        this._page = 0;
        this._pageCount = 0;
        this.dotStyle = {};
        this.dotActiveStyle = {};
        this.dotColor = 'white';
        this.dotIndicator = true;
    }
    set page(p) {
        this._page = p;
        this.updateSelected();
    }
    set pageCount(p) {
        this._pageCount = p || 0;
        this.updateItems();
    }
    updateItems() {
        this.items = new Array(this._pageCount);
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i] = { active: i == this._page };
        }
    }
    updateSelected() {
        if (this.items.length != this._pageCount) {
            return this.updateItems();
        }
        if (this.items.length == 0) {
            return;
        }
        for (let i = 0; i < this._pageCount; i++) {
            this.items[i].active = false;
        }
        this.items[this._page].active = true;
    }
}
DotIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'DotIndicator, nzm-dot-indicator',
                template: "<div class=\"am-carousel-wrap\">\n  <div *ngFor=\"let item of items\" class=\"am-carousel-wrap-dot\" [class.am-carousel-wrap-dot-active]=\"item.active\">\n    <span [ngStyle]=\"item.active ? dotActiveStyle : dotStyle\"></span>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
DotIndicatorComponent.propDecorators = {
    page: [{ type: Input }],
    pageCount: [{ type: Input }],
    dotStyle: [{ type: Input }],
    dotActiveStyle: [{ type: Input }],
    dotColor: [{ type: Input }],
    dotIndicator: [{ type: HostBinding, args: ['class.dot-indicator',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90aW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvZG90aW5kaWNhdG9yL2RvdGluZGljYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQTBCLEVBQUUsQ0FBQztRQUUxQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQWF2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFHbkIsaUJBQVksR0FBWSxJQUFJLENBQUM7SUFxQi9CLENBQUM7SUF2Q0MsSUFDSSxJQUFJLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFDSSxTQUFTLENBQUMsQ0FBUztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFXTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDUjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxrUUFBNEM7Z0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7bUJBT0UsS0FBSzt3QkFLTCxLQUFLO3VCQUtMLEtBQUs7NkJBRUwsS0FBSzt1QkFFTCxLQUFLOzJCQUdMLFdBQVcsU0FBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRG90SW5kaWNhdG9yLCBuem0tZG90LWluZGljYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb3RpbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERvdEluZGljYXRvckNvbXBvbmVudCB7XG4gIGl0ZW1zOiB7IGFjdGl2ZTogYm9vbGVhbiB9W10gPSBbXTtcblxuICBwcml2YXRlIF9wYWdlID0gMDtcbiAgcHJpdmF0ZSBfcGFnZUNvdW50ID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgcGFnZShwOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gcDtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBhZ2VDb3VudChwOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlQ291bnQgPSBwIHx8IDA7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGRvdFN0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KClcbiAgZG90QWN0aXZlU3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKVxuICBkb3RDb2xvciA9ICd3aGl0ZSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kb3QtaW5kaWNhdG9yJylcbiAgZG90SW5kaWNhdG9yOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIHVwZGF0ZUl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXkodGhpcy5fcGFnZUNvdW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhZ2VDb3VudDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zW2ldID0geyBhY3RpdmU6IGkgPT0gdGhpcy5fcGFnZSB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoICE9IHRoaXMuX3BhZ2VDb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYWdlQ291bnQ7IGkrKykge1xuICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5pdGVtc1t0aGlzLl9wYWdlXS5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG4iXX0=