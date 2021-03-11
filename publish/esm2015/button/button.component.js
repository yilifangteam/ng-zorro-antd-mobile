import { Component, ViewEncapsulation, Input, Output, ElementRef, HostListener, EventEmitter, Renderer2, TemplateRef } from '@angular/core';
export class ButtonComponent {
    constructor(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.prefixCls = 'am-button';
        this.ngTemplate = false;
        this._className = '';
        this._classList = [];
        this._size = 'large';
        this._loading = false;
        this._active = false;
        this._inline = false;
        this._disabled = false;
        this._icon = '';
        this._userAgent = navigator.userAgent || navigator.vendor || window.opera;
        this.onClick = new EventEmitter();
        this._el = this._elementRef.nativeElement;
        this._render.addClass(this._el, this.prefixCls);
        this._className = this._el.className;
    }
    get type() {
        return this._type;
    }
    get size() {
        return this._size;
    }
    get disabled() {
        return this._disabled;
    }
    get loading() {
        return this._loading;
    }
    get inline() {
        return this._inline;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        if (value instanceof TemplateRef) {
            this.ngTemplate = true;
            this._icon = value;
        }
        else {
            this.ngTemplate = false;
            this._icon = value;
            this.setClassMap();
        }
    }
    set className(v) {
        this._className = this._className + ' ' + v;
        this.setClassMap();
    }
    touchStart(event) {
        if (this._disabled) {
            return;
        }
        this._active = true;
        this.setClassMap();
    }
    touchEnd(event) {
        if (this._disabled) {
            return;
        }
        this._active = false;
        this.setClassMap();
    }
    click(event) {
        if (this._disabled) {
            return;
        }
        this.onClick.emit();
    }
    isTemplateRef(value) {
        if (value) {
            return value instanceof TemplateRef;
        }
        return false;
    }
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    set disabled(value) {
        this._disabled = value;
        this.setClassMap();
    }
    set loading(value) {
        this._loading = value;
        if (this._el.querySelector('icon')) {
            const icon = this._el.querySelector('icon');
            icon.style.display = value ? '' : 'none';
        }
        this.setClassMap();
    }
    set size(value) {
        this._size = value;
        this.setClassMap();
    }
    set inline(value) {
        this._inline = value;
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this._el.querySelector('img')) {
            const amSize = this._size === 'small' ? 'am-icon-xxs' : 'am-icon-md';
            this._el.querySelector('img').setAttribute('class', `am-icon ${this.prefixCls}-icon ${amSize}`);
            this._render.addClass(this._el, `${this.prefixCls}-icon`);
        }
    }
    setClassMap() {
        this.iconType = this._loading ? 'loading' : this._icon;
        this._classList = [
            this._type && `${this.prefixCls}-${this._type}`,
            this._size === 'small' && `${this.prefixCls}-${this._size}`,
            this._disabled && `${this.prefixCls}-disabled`,
            this._loading && `${this.prefixCls}-loading`,
            this.iconType && `${this.prefixCls}-icon`,
            this._active && `${this.prefixCls}-active`,
            this._inline && `${this.prefixCls}-inline`
        ].filter(item => {
            return !!item;
        });
        this._el.className = this._className + ' ' + this._classList.join(' ');
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[Button], nzm-button',
                encapsulation: ViewEncapsulation.None,
                template: "<Icon\n  *ngIf=\"!ngTemplate\"\n  class=\"{{ prefixCls }}-icon\"\n  [type]=\"iconType\"\n  [size]=\"size === 'small' ? 'xxs' : 'md'\"\n></Icon>\n<ng-template *ngIf=\"ngTemplate\" [ngTemplateOutlet]=\"icon\"></ng-template>\n<ng-content select=\"img\"></ng-content>\n<div class=\"{{ prefixCls }}-content\">\n  <span>\n    <ng-content></ng-content>\n  </span>\n</div>\n"
            },] }
];
ButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    loading: [{ type: Input }],
    inline: [{ type: Input }],
    icon: [{ type: Input }],
    className: [{ type: Input }],
    onClick: [{ type: Output }],
    touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] }],
    touchEnd: [{ type: HostListener, args: ['touchend', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }, { type: HostListener, args: ['touchmove', ['$event'],] }, { type: HostListener, args: ['mousemove', ['$event'],] }, { type: HostListener, args: ['touchcancel', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE1BQU0sT0FBTyxlQUFlO0lBeUYxQixZQUFvQixXQUF1QixFQUFVLE9BQWtCO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQXhGdkUsY0FBUyxHQUFXLFdBQVcsQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBSXBCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDdEMsZUFBVSxHQUFTLFNBQVUsQ0FBQyxTQUFTLElBQVUsU0FBVSxDQUFDLE1BQU0sSUFBVSxNQUFPLENBQUMsS0FBSyxDQUFDO1FBMENsRyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFpQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUs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QUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQVN0QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tCdXR0b25dLCBuem0tYnV0dG9uJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FtLWJ1dHRvbic7XG4gIG5nVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWNvblR5cGU6IGFueTtcblxuICBwcml2YXRlIF9lbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2NsYXNzTmFtZSA9ICcnO1xuICBwcml2YXRlIF9jbGFzc0xpc3Q6IGFueSA9IFtdO1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemUgPSAnbGFyZ2UnO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmxpbmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICcnO1xuICBwcml2YXRlIF91c2VyQWdlbnQgPSAoPGFueT5uYXZpZ2F0b3IpLnVzZXJBZ2VudCB8fCAoPGFueT5uYXZpZ2F0b3IpLnZlbmRvciB8fCAoPGFueT53aW5kb3cpLm9wZXJhO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBpbmxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lubGluZTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ljb24gPSA8c3RyaW5nPnZhbHVlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY2xhc3NOYW1lKHYpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl9jbGFzc05hbWUgKyAnICcgKyB2O1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIHRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBbJyRldmVudCddKVxuICB0b3VjaEVuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX2VsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3JlbmRlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5wcmVmaXhDbHMpO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMuX2VsLmNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3IoJ2ljb24nKSkge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3IoJ2ljb24nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0IGlubGluZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lubGluZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZWwucXVlcnlTZWxlY3RvcignaW1nJykpIHtcbiAgICAgIGNvbnN0IGFtU2l6ZSA9IHRoaXMuX3NpemUgPT09ICdzbWFsbCcgPyAnYW0taWNvbi14eHMnIDogJ2FtLWljb24tbWQnO1xuICAgICAgdGhpcy5fZWwucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBhbS1pY29uICR7dGhpcy5wcmVmaXhDbHN9LWljb24gJHthbVNpemV9YCk7XG4gICAgICB0aGlzLl9yZW5kZXIuYWRkQ2xhc3ModGhpcy5fZWwsIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmljb25UeXBlID0gdGhpcy5fbG9hZGluZyA/ICdsb2FkaW5nJyA6IHRoaXMuX2ljb247XG4gICAgdGhpcy5fY2xhc3NMaXN0ID0gW1xuICAgICAgdGhpcy5fdHlwZSAmJiBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLl90eXBlfWAsXG4gICAgICB0aGlzLl9zaXplID09PSAnc21hbGwnICYmIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuX3NpemV9YCxcbiAgICAgIHRoaXMuX2Rpc2FibGVkICYmIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAsXG4gICAgICB0aGlzLl9sb2FkaW5nICYmIGAke3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYCxcbiAgICAgIHRoaXMuaWNvblR5cGUgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gLFxuICAgICAgdGhpcy5fYWN0aXZlICYmIGAke3RoaXMucHJlZml4Q2xzfS1hY3RpdmVgLFxuICAgICAgdGhpcy5faW5saW5lICYmIGAke3RoaXMucHJlZml4Q2xzfS1pbmxpbmVgXG4gICAgXS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gISFpdGVtO1xuICAgIH0pO1xuICAgIHRoaXMuX2VsLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZSArICcgJyArIHRoaXMuX2NsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==