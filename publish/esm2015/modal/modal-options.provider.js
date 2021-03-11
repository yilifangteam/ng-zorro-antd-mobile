import { Injectable } from '@angular/core';
export class ModalBaseOptions {
    constructor() {
        this.visible = false;
        this.focus = true;
        this.prefixCls = 'am-modal';
        this.animated = true;
        this.closable = false;
        this.maskClosable = true;
        this.transparent = false;
        this.popup = false;
        this.animationType = 'slide-down';
        this.footer = [];
        this.platform = 'ios';
        this.defaultValue = [];
        this.placeholders = [];
        this.transitionName = 'am-zoom';
        this.maskTransitionName = 'am-fade';
    }
}
export class ModalOptions extends ModalBaseOptions {
    constructor() {
        super(...arguments);
        this.transitionName = 'am-fade';
        this.maskTransitionName = 'am-fade';
    }
}
ModalOptions.decorators = [
    { type: Injectable }
];
export class AlertOptions extends ModalBaseOptions {
}
AlertOptions.decorators = [
    { type: Injectable }
];
export class Action {
}
Action.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibW9kYWwvbW9kYWwtb3B0aW9ucy5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXhELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDRSxZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLFVBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFZLFVBQVUsQ0FBQztRQUNoQyxhQUFRLEdBQWEsSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsVUFBSyxHQUFhLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFZLFlBQVksQ0FBQztRQUV0QyxXQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTzFCLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsbUJBQWMsR0FBWSxTQUFTLENBQUM7UUFDcEMsdUJBQWtCLEdBQVksU0FBUyxDQUFDO0lBRzFDLENBQUM7Q0FBQTtBQUdELE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCO0lBRGxEOztRQUVFLG1CQUFjLEdBQVksU0FBUyxDQUFDO1FBQ3BDLHVCQUFrQixHQUFZLFNBQVMsQ0FBQztJQUMxQyxDQUFDOzs7WUFKQSxVQUFVOztBQU9YLE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQWdCOzs7WUFEakQsVUFBVTs7QUFPWCxNQUFNLE9BQU8sTUFBTTs7O1lBRGxCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxCYXNlT3B0aW9ucyB7XG4gIHZpc2libGU/OiBib29sZWFuID0gZmFsc2U7XG4gIGZvY3VzPzogYm9vbGVhbiA9IHRydWU7XG4gIHByZWZpeENscz86IHN0cmluZyA9ICdhbS1tb2RhbCc7XG4gIGFuaW1hdGVkPzogYm9vbGVhbiA9IHRydWU7XG4gIGNsb3NhYmxlPzogYm9vbGVhbiA9IGZhbHNlO1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuID0gdHJ1ZTtcbiAgb25DbG9zZT86IGFueTtcbiAgdHJhbnNwYXJlbnQ/OiBib29sZWFuID0gZmFsc2U7XG4gIHBvcHVwPzogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRpb25UeXBlPzogc3RyaW5nID0gJ3NsaWRlLWRvd24nO1xuICB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIGZvb3Rlcj86IEFycmF5PGFueT4gPSBbXTtcbiAgcGxhdGZvcm0/OiBzdHJpbmcgPSAnaW9zJztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3cmFwQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgYWN0aW9ucz86IEFycmF5PGFueT47XG4gIGNhbGxiYWNrT3JBY3Rpb25zPzogQXJyYXk8YW55PjtcbiAgdHlwZT86IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlPzogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwbGFjZWhvbGRlcnM/OiBBcnJheTxzdHJpbmc+ID0gW107XG4gIG9wZXJhdGlvbj86IGJvb2xlYW47XG4gIHRyYW5zaXRpb25OYW1lPzogc3RyaW5nID0gJ2FtLXpvb20nO1xuICBtYXNrVHJhbnNpdGlvbk5hbWU/OiBzdHJpbmcgPSAnYW0tZmFkZSc7XG4gIGNsb3NlOiAoKSA9PiB2b2lkO1xuICBjbG9zZVdpdGhBbmltYXRpb246ICgpID0+IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMgZXh0ZW5kcyBNb2RhbEJhc2VPcHRpb25zIHtcbiAgdHJhbnNpdGlvbk5hbWU/OiBzdHJpbmcgPSAnYW0tZmFkZSc7XG4gIG1hc2tUcmFuc2l0aW9uTmFtZT86IHN0cmluZyA9ICdhbS1mYWRlJztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsZXJ0T3B0aW9ucyBleHRlbmRzIE1vZGFsQmFzZU9wdGlvbnMge1xuICBtZXNzYWdlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgYWN0aW9ucz86IEFycmF5PGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb24ge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBvblByZXNzPzogRnVuY3Rpb247XG4gIHN0eWxlPzoge307XG59XG4iXX0=