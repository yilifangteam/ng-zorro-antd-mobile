export declare type WhiteSpaceSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare class WhiteSpaceComponent {
    prefixCls: string;
    size: WhiteSpaceSizeType;
    amWhiteSpace: boolean;
    get amWhitespaceXs(): boolean;
    get amWhitespaceSm(): boolean;
    get amWhitespaceMd(): boolean;
    get amWhitespaceLg(): boolean;
    get amWhitespaceXl(): boolean;
    constructor();
}
