export declare class DotIndicatorComponent {
    items: {
        active: boolean;
    }[];
    private _page;
    private _pageCount;
    set page(p: number);
    set pageCount(p: number);
    dotStyle: object;
    dotActiveStyle: object;
    dotColor: string;
    dotIndicator: boolean;
    private updateItems;
    private updateSelected;
}
