import { Injectable } from '@angular/core';
export class AccordionService {
    constructor() {
        this.accordion = false;
    }
    getComponent(component) {
        this.accordion = component.accordion;
        this.component = component;
    }
}
AccordionService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi9hY2NvcmRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHRSxjQUFTLEdBQVksS0FBSyxDQUFDO0lBSzdCLENBQUM7SUFKQyxZQUFZLENBQUMsU0FBUztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs7O1lBUEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblNlcnZpY2Uge1xuICBjb21wb25lbnQ7XG4gIGFjY29yZGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXRDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdGhpcy5hY2NvcmRpb24gPSBjb21wb25lbnQuYWNjb3JkaW9uO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG59XG4iXX0=