import { TemplateRef, EventEmitter } from '@angular/core';
export declare class NavBarComponent {
    defaultProps: {
        prefixCls: string;
        mode: string;
        onLeftClick: () => void;
    };
    navbarCls: {};
    isIconString: boolean;
    isLeftContentString: boolean;
    isRightContentString: boolean;
    private _icon;
    private _leftContent;
    private _rightContent;
    set mode(value: any);
    get icon(): string | TemplateRef<any>;
    set icon(value: string | TemplateRef<any>);
    get leftContent(): string | TemplateRef<any>;
    set leftContent(value: string | TemplateRef<any>);
    get rightContent(): string | TemplateRef<any>;
    set rightContent(value: string | TemplateRef<any>);
    onLeftClick: EventEmitter<any>;
    amNavbar: boolean;
    amNavbarLight: any;
    amNavbardark: any;
    constructor();
    click(event: any): void;
}
