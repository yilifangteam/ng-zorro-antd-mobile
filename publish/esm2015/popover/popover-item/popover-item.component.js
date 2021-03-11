import { Component, Input, Output, ElementRef, TemplateRef, HostBinding, HostListener, EventEmitter, ViewEncapsulation } from '@angular/core';
export class PopoverItemComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.defaultProps = {
            prefixCls: 'am-popover',
            disabled: false
        };
        this.isActive = false;
        this.select = new EventEmitter();
        this.amPopoverItem = true;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
    }
    get style() {
        return this._style;
    }
    set style(value) {
        this._style = value;
    }
    set disabled(value) {
        this.defaultProps.disabled = value;
    }
    get amPopoverItemActive() {
        return this.isActive;
    }
    get amPopoverItemDisabled() {
        return this.defaultProps.disabled;
    }
    touchStart(e) {
        this.select.emit();
        this.isActive = true;
    }
    ngAfterContentInit() { }
}
PopoverItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'PopoverItem, nzm-popover-item',
                template: "<div class=\"{{ defaultProps.prefixCls }}-item-container\">\n  <span class=\"{{ defaultProps.prefixCls }}-item-icon\" aria-hidden=\"true\">\n    <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n  </span>\n  <span class=\"{{ defaultProps.prefixCls }}-item-content\">\n    <ng-content></ng-content>\n  </span>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
PopoverItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
PopoverItemComponent.propDecorators = {
    icon: [{ type: Input }],
    style: [{ type: Input }],
    disabled: [{ type: Input }],
    select: [{ type: Output }],
    amPopoverItem: [{ type: HostBinding, args: ['class.am-popover-item',] }],
    amPopoverItemActive: [{ type: HostBinding, args: ['class.am-popover-item-active',] }],
    amPopoverItemDisabled: [{ type: HostBinding, args: ['class.am-popover-item-disabled',] }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsicG9wb3Zlci9wb3BvdmVyLWl0ZW0vcG9wb3Zlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFPdkIsTUFBTSxPQUFPLG9CQUFvQjtJQWlEL0IsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFoRDNDLGlCQUFZLEdBQUc7WUFDYixTQUFTLEVBQUUsWUFBWTtZQUN2QixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBQ0YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQXdCakIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9DLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBaUJnQixDQUFDO0lBdkMvQyxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFDSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQU1ELElBQ0ksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFDSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBSUQsVUFBVSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFJRCxrQkFBa0IsS0FBSSxDQUFDOzs7WUF4RHhCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxpVkFBNEM7Z0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7WUFaQyxVQUFVOzs7bUJBdUJULEtBQUs7b0JBT0wsS0FBSzt1QkFPTCxLQUFLO3FCQUlMLE1BQU07NEJBR04sV0FBVyxTQUFDLHVCQUF1QjtrQ0FFbkMsV0FBVyxTQUFDLDhCQUE4QjtvQ0FJMUMsV0FBVyxTQUFDLGdDQUFnQzt5QkFLNUMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNyQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnUG9wb3Zlckl0ZW0sIG56bS1wb3BvdmVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tcG9wb3ZlcicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH07XG4gIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc3R5bGU7XG4gIHByaXZhdGUgX2ljb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsdWU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZTtcbiAgfVxuICBzZXQgc3R5bGUodmFsdWUpIHtcbiAgICB0aGlzLl9zdHlsZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuZGVmYXVsdFByb3BzLmRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wb3BvdmVyLWl0ZW0nKVxuICBhbVBvcG92ZXJJdGVtOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wb3BvdmVyLWl0ZW0tYWN0aXZlJylcbiAgZ2V0IGFtUG9wb3Zlckl0ZW1BY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wb3BvdmVyLWl0ZW0tZGlzYWJsZWQnKVxuICBnZXQgYW1Qb3BvdmVySXRlbURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICB0b3VjaFN0YXJ0KGUpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG59XG4iXX0=