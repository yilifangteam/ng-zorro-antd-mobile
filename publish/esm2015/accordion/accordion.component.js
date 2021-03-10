import { ContentChildren, Component, QueryList, Input, forwardRef, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';
import { AccordionService } from './accordion.service';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './accordion.service';

const _c0 = ["*"];
export class AccordionComponent {
    constructor(_accordionService) {
        this._accordionService = _accordionService;
        this.isFirstChange = true;
        this.expandAll = false;
        this.openAnimation = {};
        this.accordion = false;
        this.onChange = new EventEmitter();
        this.amAccordion = true;
        this._accordionService.getComponent(this);
    }
    click() {
        let result = [];
        this.groups.toArray().forEach(group => {
            if (group.isOpened) {
                if (this.accordion) {
                    result = group.key;
                }
                else {
                    result.push(group.key);
                }
            }
        });
        this.onChange.emit(result);
    }
    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }
    init() {
        if (this.expandAll && this.groups && this.groups.length > 0) {
            this._oldGroups = this.groups.toArray();
            this._oldGroups.forEach(group => {
                group.openOnInitialization();
            });
            this._subscription = this.groups.changes.subscribe(change => {
                const newGroups = this.groups.toArray().filter(group => {
                    return this._oldGroups.indexOf(group) === -1;
                });
                newGroups.forEach(group => {
                    group.openOnInitialization();
                });
                this._oldGroups = this.groups.toArray();
            });
        }
        let currentActiveKey = [];
        if (this.activeKey && this.activeKey.length > 0) {
            currentActiveKey = this.toArray(this.activeKey);
            if (this.accordion) {
                currentActiveKey = currentActiveKey.slice(0, 1);
            }
        }
        else if (this.defaultActiveKey) {
            currentActiveKey = [this.defaultActiveKey];
        }
        if (this.groups && this.groups.length > 0) {
            this.groups.forEach((group, index) => {
                currentActiveKey.forEach(key => {
                    if (index === parseInt(key, 0)) {
                        setTimeout(() => {
                            group.isOpened = true;
                            group.openOnInitialization();
                        }, 0);
                    }
                });
            });
        }
    }
    toArray(activeKey) {
        let currentActiveKey = activeKey;
        if (!Array.isArray(currentActiveKey)) {
            currentActiveKey = currentActiveKey !== undefined && currentActiveKey !== '' ? [currentActiveKey] : [];
        }
        return currentActiveKey;
    }
    ngOnChanges(changes) {
        if (changes.accordion) {
            this._accordionService.getComponent(this);
        }
        if (changes.expandAll || changes.accordion) {
            this.init();
        }
    }
    ngAfterContentInit() {
        if (this.groups && this.groups.length > 0) {
            this.init();
        }
        else {
            this.groupsSubscription = this.groups.changes.subscribe(group => {
                if (this.isFirstChange) {
                    this.init();
                }
                this.isFirstChange = false;
            });
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this.groupsSubscription) {
            this.groupsSubscription.unsubscribe();
        }
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AccordionService)); };
AccordionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["Accordion"], ["nzm-accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AccordionGroupComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.groups = _t);
    } }, hostVars: 2, hostBindings: function AccordionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function AccordionComponent_click_HostBindingHandler() { return ctx.click(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("am-accordion", ctx.amAccordion);
    } }, inputs: { expandAll: "expandAll", openAnimation: "openAnimation", accordion: "accordion", activeKey: "activeKey", defaultActiveKey: "defaultActiveKey" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([AccordionService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
AccordionComponent.ctorParameters = () => [
    { type: AccordionService }
];
AccordionComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [forwardRef(() => AccordionGroupComponent),] }],
    expandAll: [{ type: Input }],
    activeKey: [{ type: Input }],
    defaultActiveKey: [{ type: Input }],
    openAnimation: [{ type: Input }],
    accordion: [{ type: Input }],
    onChange: [{ type: Output }],
    amAccordion: [{ type: HostBinding, args: ['class.am-accordion',] }],
    click: [{ type: HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{
                selector: 'Accordion, nzm-accordion',
                template: "<ng-content></ng-content>\n",
                providers: [AccordionService]
            }]
    }], function () { return [{ type: ɵngcc1.AccordionService }]; }, { expandAll: [{
            type: Input
        }], openAnimation: [{
            type: Input
        }], accordion: [{
            type: Input
        }], onChange: [{
            type: Output
        }], amAccordion: [{
            type: HostBinding,
            args: ['class.am-accordion']
        }], click: [{
            type: HostListener,
            args: ['click']
        }], groups: [{
            type: ContentChildren,
            args: [forwardRef(() => AccordionGroupComponent)]
        }], activeKey: [{
            type: Input
        }], defaultActiveKey: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFHVixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFHWixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBUXRGLE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQXdDaEMsWUFBb0IsaUJBQW1DO0FBQ3pELFFBRHNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQXBDaEQsa0JBQWEsR0FBWSxJQUFJLENBQUM7QUFDeEMsUUFLRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFFBS0Usa0JBQWEsR0FBRyxFQUFFLENBQUM7QUFDckIsUUFDRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFFBQ0UsYUFBUSxHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7QUFDckMsUUFFRSxnQkFBVyxHQUFZLElBQUksQ0FBQztBQUM5QixRQWlCSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLElBQUUsQ0FBQztBQUNILElBakJFLEtBQUs7QUFDUCxRQUFJLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzFDLFlBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzFCLGdCQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFB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QUFDLG9CQUFvQjtBQUM5QixvQkFFRixZQUFZLFNBQUMsT0FBTztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29tcG9uZW50LFxuICBRdWVyeUxpc3QsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0FjY29yZGlvbiwgbnptLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtBY2NvcmRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX29sZEdyb3VwczogQWNjb3JkaW9uR3JvdXBDb21wb25lbnRbXTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZ3JvdXBzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaXNGaXJzdENoYW5nZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KSlcbiAgZ3JvdXBzOiBRdWVyeUxpc3Q8QWNjb3JkaW9uR3JvdXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIGV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhY3RpdmVLZXk6IEFycmF5PHN0cmluZz4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRBY3RpdmVLZXk6IHN0cmluZztcbiAgQElucHV0KClcbiAgb3BlbkFuaW1hdGlvbiA9IHt9O1xuICBASW5wdXQoKVxuICBhY2NvcmRpb24gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1hY2NvcmRpb24nKVxuICBhbUFjY29yZGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBjbGljaygpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSBbXTtcbiAgICB0aGlzLmdyb3Vwcy50b0FycmF5KCkuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAuaXNPcGVuZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZ3JvdXAua2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGdyb3VwLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLl9hY2NvcmRpb25TZXJ2aWNlLmdldENvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuZ3JvdXBzLnRvQXJyYXkoKS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGdyb3VwLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmV4cGFuZEFsbCAmJiB0aGlzLmdyb3VwcyAmJiB0aGlzLmdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9vbGRHcm91cHMgPSB0aGlzLmdyb3Vwcy50b0FycmF5KCk7XG4gICAgICB0aGlzLl9vbGRHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGdyb3VwLm9wZW5PbkluaXRpYWxpemF0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZ3JvdXBzLmNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IHRoaXMuZ3JvdXBzLnRvQXJyYXkoKS5maWx0ZXIoZ3JvdXAgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbGRHcm91cHMuaW5kZXhPZihncm91cCkgPT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3R3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgIGdyb3VwLm9wZW5PbkluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vbGRHcm91cHMgPSB0aGlzLmdyb3Vwcy50b0FycmF5KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudEFjdGl2ZUtleTogQXJyYXk8YW55PiA9IFtdO1xuICAgIGlmICh0aGlzLmFjdGl2ZUtleSAmJiB0aGlzLmFjdGl2ZUtleS5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50QWN0aXZlS2V5ID0gdGhpcy50b0FycmF5KHRoaXMuYWN0aXZlS2V5KTtcbiAgICAgIGlmICh0aGlzLmFjY29yZGlvbikge1xuICAgICAgICBjdXJyZW50QWN0aXZlS2V5ID0gY3VycmVudEFjdGl2ZUtleS5zbGljZSgwLCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdEFjdGl2ZUtleSkge1xuICAgICAgY3VycmVudEFjdGl2ZUtleSA9IFt0aGlzLmRlZmF1bHRBY3RpdmVLZXldO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncm91cHMgJiYgdGhpcy5ncm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVLZXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gcGFyc2VJbnQoa2V5LCAwKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGdyb3VwLmlzT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ3JvdXAub3Blbk9uSW5pdGlhbGl6YXRpb24oKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b0FycmF5KGFjdGl2ZUtleSkge1xuICAgIGxldCBjdXJyZW50QWN0aXZlS2V5ID0gYWN0aXZlS2V5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjdXJyZW50QWN0aXZlS2V5KSkge1xuICAgICAgY3VycmVudEFjdGl2ZUtleSA9IGN1cnJlbnRBY3RpdmVLZXkgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50QWN0aXZlS2V5ICE9PSAnJyA/IFtjdXJyZW50QWN0aXZlS2V5XSA6IFtdO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudEFjdGl2ZUtleTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY2NvcmRpb24pIHtcbiAgICAgIHRoaXMuX2FjY29yZGlvblNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmV4cGFuZEFsbCB8fCBjaGFuZ2VzLmFjY29yZGlvbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmdyb3VwcyAmJiB0aGlzLmdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncm91cHNTdWJzY3JpcHRpb24gPSB0aGlzLmdyb3Vwcy5jaGFuZ2VzLnN1YnNjcmliZShncm91cCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRmlyc3RDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncm91cHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ3JvdXBzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=