import { TemplateRef, EventEmitter } from '@angular/core';
import { DateModels } from '../date/DataTypes';
export declare class CalendarHeaderComponent {
    title: string;
    closeIcon_component: boolean;
    clearIcon: any;
    private _locale;
    private _showClear;
    private _closeIcon;
    get locale(): DateModels.Locale;
    set locale(value: DateModels.Locale);
    get closeIcon(): string | TemplateRef<any>;
    set closeIcon(value: string | TemplateRef<any>);
    get showClear(): boolean;
    set showClear(value: boolean);
    onCancel: EventEmitter<any>;
    onClear: EventEmitter<any>;
    header: boolean;
    constructor();
    triggerCancel(): void;
    triggerClear(): void;
}
