import { CalendarShortcutPanelPropsType } from './PropsType';
export declare class CalendarShortcutPanelComponent {
    props: CalendarShortcutPanelPropsType;
    set locale(value: any);
    set onSelect(value: any);
    shortcutPanel: boolean;
    constructor();
    onClick: (type: string) => void;
}
