import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IconHandler } from '../core/util/icon';
export class IconComponent {
    constructor(_iconHandler) {
        this._iconHandler = _iconHandler;
        this.clsMap = {};
        this._type = '';
        this._size = 'md';
        this._src = '';
        this.color = '';
        this._iconHandler.load();
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.setClsMap();
    }
    get src() {
        return this._src;
    }
    set src(value) {
        this._src = value;
        this.setClsMap();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this.setClsMap();
    }
    setClsMap() {
        this.clsMap = {
            [`am-icon-${this._type}`]: true,
            [`am-icon-${this._size}`]: true
        };
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'Icon, nzm-icon',
                template: "<svg *ngIf=\"type\" class=\"am-icon\" [ngClass]=\"clsMap\" [ngStyle]=\"{ color: color }\">\n  <use xmlns:xlink=\"https://www.w3.org/1999/xlink\" attr.xlink:href=\"#{{ type }}\"></use>\n</svg>\n<img *ngIf=\"src\" src=\"{{ src }}\" class=\"am-icon\" [ngClass]=\"clsMap\" />\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [IconHandler]
            },] }
];
IconComponent.ctorParameters = () => [
    { type: IconHandler }
];
IconComponent.propDecorators = {
    color: [{ type: Input }],
    type: [{ type: Input }],
    src: [{ type: Input }],
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWhELE1BQU0sT0FBTyxhQUFhO0lBa0N4QixZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQWpDN0MsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUVaLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRzFCLFVBQUssR0FBVyxFQUFFLENBQUM7UUEyQmpCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQTNCRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQU1ELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDL0IsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDaEMsQ0FBQztJQUNKLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsd1RBQW9DO2dCQUNwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7WUFQUSxXQUFXOzs7b0JBZWpCLEtBQUs7bUJBRUwsS0FBSztrQkFRTCxLQUFLO21CQVFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkhhbmRsZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0ljb24sIG56bS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtJY29uSGFuZGxlcl1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIGNsc01hcDogb2JqZWN0ID0ge307XG5cbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZyA9ICdtZCc7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xzTWFwKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNyYygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zcmM7XG4gIH1cbiAgc2V0IHNyYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbHNNYXAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ljb25IYW5kbGVyOiBJY29uSGFuZGxlcikge1xuICAgIHRoaXMuX2ljb25IYW5kbGVyLmxvYWQoKTtcbiAgfVxuXG4gIHNldENsc01hcCgpIHtcbiAgICB0aGlzLmNsc01hcCA9IHtcbiAgICAgIFtgYW0taWNvbi0ke3RoaXMuX3R5cGV9YF06IHRydWUsXG4gICAgICBbYGFtLWljb24tJHt0aGlzLl9zaXplfWBdOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19