import { QueryList, AfterContentInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AccordionService } from './accordion.service';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
export declare class AccordionComponent implements AfterContentInit, OnDestroy, OnChanges {
    private _accordionService;
    private _oldGroups;
    private _subscription;
    private groupsSubscription;
    private isFirstChange;
    groups: QueryList<AccordionGroupComponent>;
    expandAll: boolean;
    activeKey: Array<string> | string;
    defaultActiveKey: string;
    openAnimation: {};
    accordion: boolean;
    onChange: any;
    amAccordion: boolean;
    click(): void;
    constructor(_accordionService: AccordionService);
    closeAll(): void;
    init(): void;
    toArray(activeKey: any): any;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
