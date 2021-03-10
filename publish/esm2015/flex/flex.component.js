import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
export class FlexComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        // _wrapCls = {};
        this._direction = '';
        this._justify = '';
        this._alignContent = '';
        this.amFlexbox = true;
    }
    set direction(value) {
        this._direction = value;
    }
    set wrap(value) {
        this._wrap = value;
    }
    set justify(value) {
        this._justify = value;
    }
    set align(value) {
        this.defaultProps.align = value;
    }
    set alignContent(value) {
        this._alignContent = value;
    }
    get amFlexboxDirRow() {
        return this._direction === 'row';
    }
    get amFlexboxDirRowReverse() {
        return this._direction === 'row-reverse';
    }
    get amFlexboxDirColumn() {
        return this._direction === 'column';
    }
    get amFlexboxDirColumnReverse() {
        return this._direction === 'column-reverse';
    }
    get amFlexboxNowrap() {
        return this._wrap === 'nowrap';
    }
    get amFlexboxWrap() {
        return this._wrap === 'wrap';
    }
    get amFlexboxWrapReverse() {
        return this._wrap === 'wrap-reverse';
    }
    get amFlexboxJustifyStart() {
        return this._justify === 'start';
    }
    get amFlexboxJustifyCenter() {
        return this._justify === 'center';
    }
    get amFlexboxJustifyEnd() {
        return this._justify === 'end';
    }
    get amFlexboxJustifyBetween() {
        return this._justify === 'between';
    }
    get amFlexboxAlignAround() {
        return this._justify === 'around';
    }
    get amFlexboxAlignStart() {
        return this.defaultProps.align === 'start';
    }
    get amFlexboxAlignCenter() {
        return this.defaultProps.align === 'center';
    }
    get amFlexboxAlignEnd() {
        return this.defaultProps.align === 'end';
    }
    get amFlexboxAlignBaseline() {
        return this.defaultProps.align === 'baseline';
    }
    get amFlexboxAlignStretch() {
        return this.defaultProps.align === 'stretch';
    }
    get amFlexboxAlignContentStart() {
        return this._alignContent === 'start';
    }
    get amFlexboxAlignCotentCenter() {
        return this._alignContent === 'center';
    }
    get amFlexboxAlignContentEnd() {
        return this._alignContent === 'end';
    }
    get amFlexboxAlignContentBetween() {
        return this._alignContent === 'between';
    }
    get amFlexboxAlignContentAround() {
        return this._alignContent === 'around';
    }
    get amFlexboxAlignContentStretch() {
        return this._alignContent === 'stretch';
    }
}
FlexComponent.decorators = [
    { type: Component, args: [{
                selector: 'Flex, nzm-flex',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
FlexComponent.ctorParameters = () => [];
FlexComponent.propDecorators = {
    direction: [{ type: Input }],
    wrap: [{ type: Input }],
    justify: [{ type: Input }],
    align: [{ type: Input }],
    alignContent: [{ type: Input }],
    amFlexbox: [{ type: HostBinding, args: ['class.am-flexbox',] }],
    amFlexboxDirRow: [{ type: HostBinding, args: ['class.am-flexbox-dir-row',] }],
    amFlexboxDirRowReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-row-reverse',] }],
    amFlexboxDirColumn: [{ type: HostBinding, args: ['class.am-flexbox-dir-column',] }],
    amFlexboxDirColumnReverse: [{ type: HostBinding, args: ['class.am-flexbox-dir-column-reverse',] }],
    amFlexboxNowrap: [{ type: HostBinding, args: ['class.am-flexbox-nowrap',] }],
    amFlexboxWrap: [{ type: HostBinding, args: ['class.am-flexbox-wrap',] }],
    amFlexboxWrapReverse: [{ type: HostBinding, args: ['class.am-flexbox-wrap-reverse',] }],
    amFlexboxJustifyStart: [{ type: HostBinding, args: ['class.am-flexbox-justify-start',] }],
    amFlexboxJustifyCenter: [{ type: HostBinding, args: ['class.am-flexbox-justify-center',] }],
    amFlexboxJustifyEnd: [{ type: HostBinding, args: ['class.am-flexbox-justify-end',] }],
    amFlexboxJustifyBetween: [{ type: HostBinding, args: ['class.am-flexbox-justify-between',] }],
    amFlexboxAlignAround: [{ type: HostBinding, args: ['class.am-flexbox-justify-around',] }],
    amFlexboxAlignStart: [{ type: HostBinding, args: ['class.am-flexbox-align-start',] }],
    amFlexboxAlignCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-center',] }],
    amFlexboxAlignEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-end',] }],
    amFlexboxAlignBaseline: [{ type: HostBinding, args: ['class.am-flexbox-align-baseline',] }],
    amFlexboxAlignStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-stretch',] }],
    amFlexboxAlignContentStart: [{ type: HostBinding, args: ['class.am-flexbox-align-content-start',] }],
    amFlexboxAlignCotentCenter: [{ type: HostBinding, args: ['class.am-flexbox-align-content-center',] }],
    amFlexboxAlignContentEnd: [{ type: HostBinding, args: ['class.am-flexbox-align-content-end',] }],
    amFlexboxAlignContentBetween: [{ type: HostBinding, args: ['class.am-flexbox-align-content-between',] }],
    amFlexboxAlignContentAround: [{ type: HostBinding, args: ['class.am-flexbox-align-content-around',] }],
    amFlexboxAlignContentStretch: [{ type: HostBinding, args: ['class.am-flexbox-align-content-stretch',] }]
};
export class FlexItemComponent {
    constructor() {
        this.defaultProps = {
            prefixCls: 'am-flexbox',
            align: 'center'
        };
        this.flexboxItem = true;
    }
}
FlexItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'FlexItem, nzm-flex-item',
                template: `
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None
            },] }
];
FlexItemComponent.propDecorators = {
    flexboxItem: [{ type: HostBinding, args: ['class.am-flexbox-item',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImZsZXgvZmxleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU0sT0FBTyxhQUFhO0lBZ0l4QjtRQS9IQSxpQkFBWSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFlBQVk7WUFDdkIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQztRQUVGLGlCQUFpQjtRQUNULGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQXdCbkMsY0FBUyxHQUFZLElBQUksQ0FBQztJQThGWCxDQUFDO0lBcEhoQixJQUNJLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUNJLElBQUksQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQ0ksT0FBTyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFDSSxLQUFLLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFDSSxZQUFZLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBSUQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQ0ksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxD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cUM7OEJBSWpELFdBQVcsU0FBQyx5QkFBeUI7NEJBSXJDLFdBQVcsU0FBQyx1QkFBdUI7bUNBSW5DLFdBQVcsU0FBQywrQkFBK0I7b0NBSTNDLFdBQVcsU0FBQyxnQ0FBZ0M7cUNBSTVDLFdBQVcsU0FBQyxpQ0FBaUM7a0NBSTdDLFdBQVcsU0FBQyw4QkFBOEI7c0NBSTFDLFdBQVcsU0FBQyxrQ0FBa0M7bUNBSTlDLFdBQVcsU0FBQyxpQ0FBaUM7a0NBSTdDLFdBQVcsU0FBQyw4QkFBOEI7bUNBSTFDLFdBQVcsU0FBQywrQkFBK0I7Z0NBSTNDLFdBQVcsU0FBQyw0QkFBNEI7cUNBSXhDLFdBQVcsU0FBQyxpQ0FBaUM7b0NBSTdDLFdBQVcsU0FBQyxnQ0FBZ0M7eUNBSTVDLFdBQVcsU0FBQyxzQ0FBc0M7eUNBSWxELFdBQVcsU0FBQyx1Q0FBdUM7dUNBSW5ELFdBQVcsU0FBQyxvQ0FBb0M7MkNBSWhELFdBQVcsU0FBQyx3Q0FBd0M7MENBSXBELFdBQVcsU0FBQyx1Q0FBdUM7MkNBSW5ELFdBQVcsU0FBQyx3Q0FBd0M7O0FBZXZELE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFRRSxpQkFBWSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFlBQVk7WUFDdkIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQztRQUdGLGdCQUFXLEdBQVksSUFBSSxDQUFDO0lBQzlCLENBQUM7OztZQWZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OzswQkFPRSxXQUFXLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0ZsZXgsIG56bS1mbGV4JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZsZXguY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZsZXhDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW0tZmxleGJveCcsXG4gICAgYWxpZ246ICdjZW50ZXInXG4gIH07XG5cbiAgLy8gX3dyYXBDbHMgPSB7fTtcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfd3JhcDogc3RyaW5nO1xuICBwcml2YXRlIF9qdXN0aWZ5OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYWxpZ25Db250ZW50OiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgZGlyZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdyYXAodmFsdWUpIHtcbiAgICB0aGlzLl93cmFwID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGp1c3RpZnkodmFsdWUpIHtcbiAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFsaWduKHZhbHVlKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYWxpZ25Db250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5fYWxpZ25Db250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gnKVxuICBhbUZsZXhib3g6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtZGlyLXJvdycpXG4gIGdldCBhbUZsZXhib3hEaXJSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbiA9PT0gJ3Jvdyc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWRpci1yb3ctcmV2ZXJzZScpXG4gIGdldCBhbUZsZXhib3hEaXJSb3dSZXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb24gPT09ICdyb3ctcmV2ZXJzZSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWRpci1jb2x1bW4nKVxuICBnZXQgYW1GbGV4Ym94RGlyQ29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb24gPT09ICdjb2x1bW4nO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1kaXItY29sdW1uLXJldmVyc2UnKVxuICBnZXQgYW1GbGV4Ym94RGlyQ29sdW1uUmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1ub3dyYXAnKVxuICBnZXQgYW1GbGV4Ym94Tm93cmFwKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwID09PSAnbm93cmFwJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtd3JhcCcpXG4gIGdldCBhbUZsZXhib3hXcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwID09PSAnd3JhcCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LXdyYXAtcmV2ZXJzZScpXG4gIGdldCBhbUZsZXhib3hXcmFwUmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcCA9PT0gJ3dyYXAtcmV2ZXJzZSc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWp1c3RpZnktc3RhcnQnKVxuICBnZXQgYW1GbGV4Ym94SnVzdGlmeVN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5ID09PSAnc3RhcnQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1qdXN0aWZ5LWNlbnRlcicpXG4gIGdldCBhbUZsZXhib3hKdXN0aWZ5Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5ID09PSAnY2VudGVyJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtanVzdGlmeS1lbmQnKVxuICBnZXQgYW1GbGV4Ym94SnVzdGlmeUVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeSA9PT0gJ2VuZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWp1c3RpZnktYmV0d2VlbicpXG4gIGdldCBhbUZsZXhib3hKdXN0aWZ5QmV0d2VlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeSA9PT0gJ2JldHdlZW4nO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1qdXN0aWZ5LWFyb3VuZCcpXG4gIGdldCBhbUZsZXhib3hBbGlnbkFyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeSA9PT0gJ2Fyb3VuZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLXN0YXJ0JylcbiAgZ2V0IGFtRmxleGJveEFsaWduU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnc3RhcnQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1jZW50ZXInKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25DZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnY2VudGVyJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tZW5kJylcbiAgZ2V0IGFtRmxleGJveEFsaWduRW5kKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcm9wcy5hbGlnbiA9PT0gJ2VuZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWJhc2VsaW5lJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQmFzZWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb3BzLmFsaWduID09PSAnYmFzZWxpbmUnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1zdHJldGNoJylcbiAgZ2V0IGFtRmxleGJveEFsaWduU3RyZXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJvcHMuYWxpZ24gPT09ICdzdHJldGNoJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY29udGVudC1zdGFydCcpXG4gIGdldCBhbUZsZXhib3hBbGlnbkNvbnRlbnRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50ID09PSAnc3RhcnQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1jb250ZW50LWNlbnRlcicpXG4gIGdldCBhbUZsZXhib3hBbGlnbkNvdGVudENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50ID09PSAnY2VudGVyJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY29udGVudC1lbmQnKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25Db250ZW50RW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbkNvbnRlbnQgPT09ICdlbmQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1hbGlnbi1jb250ZW50LWJldHdlZW4nKVxuICBnZXQgYW1GbGV4Ym94QWxpZ25Db250ZW50QmV0d2VlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50ID09PSAnYmV0d2Vlbic7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1mbGV4Ym94LWFsaWduLWNvbnRlbnQtYXJvdW5kJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQ29udGVudEFyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50ID09PSAnYXJvdW5kJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLWZsZXhib3gtYWxpZ24tY29udGVudC1zdHJldGNoJylcbiAgZ2V0IGFtRmxleGJveEFsaWduQ29udGVudFN0cmV0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduQ29udGVudCA9PT0gJ3N0cmV0Y2gnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdGbGV4SXRlbSwgbnptLWZsZXgtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtQ29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLWZsZXhib3gnLFxuICAgIGFsaWduOiAnY2VudGVyJ1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tZmxleGJveC1pdGVtJylcbiAgZmxleGJveEl0ZW06IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19