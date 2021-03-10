import { Injectable } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import { ActionSheetOptions, ShareActionSheetWithOptions } from './action-sheet-options.provider';
import { PopupService } from '../core/services/popup.service';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() { }
export class ActionSheetService extends PopupService {
    constructor() {
        super(...arguments);
        this.compRef = null;
        this._actionSheetCompFactory = null;
        this.appRef = null;
        this.comRef = null;
        this.instance = null;
    }
    _initConfig(config, options = {}) {
        const props = new ActionSheetOptions();
        const optionalParams = [
            'prefixCls',
            'maskClosable',
            'cancelButtonText',
            'cancelButtonIndex',
            'destructiveButtonIndex',
            'title',
            'message',
            'className',
            'transitionName',
            'maskTransitionName',
            'options',
            'locale',
            'close'
        ];
        const self = this;
        config = Object.assign(options, config, {
            close: () => {
                if (config.maskClosable) {
                    self.closeWithAnimation(config.transitionName, config.maskTransitionName);
                }
            }
        });
        optionalParams.forEach(key => {
            if (config[key] !== undefined) {
                props[key] = config[key];
            }
        });
        return props;
    }
    _open(props) {
        this.comRef = this.showPopup(ActionSheetComponent);
        this.comRef.instance.option = props;
        return this.comRef && this.comRef.instance;
    }
    createActionSheet(flag, config, callback) {
        const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
        const transitionName = config.transitionName ? config.transitionName : options.transitionName;
        options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
        const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
        options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
        const props = this._initConfig(config, options);
        Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => { } });
        const self = this;
        function cb(index, rowIndex = 0, event) {
            event.stopPropagation();
            const res = callback(index, rowIndex);
            if (res && res.then) {
                res.then(() => {
                    self.closeWithAnimation(transitionName, maskTransitionName);
                });
            }
            else {
                self.closeWithAnimation(transitionName, maskTransitionName);
            }
        }
        return this._open(props);
    }
    closeWithAnimation(transitionName, maskTransitionName) {
        this.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
        this.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
        setTimeout(() => {
            this.close();
        }, 200);
    }
    showActionSheetWithOptions(config, callback = noop) {
        return this.createActionSheet(NORMAL, config, callback);
    }
    showShareActionSheetWithOptions(config, callback = noop) {
        return this.createActionSheet(SHARE, config, callback);
    }
    close() {
        this.hidePopup();
    }
}
ActionSheetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActionSheetService_Factory() { return new i1.ActionSheet(i0.ɵɵinject(i2.Overlay)); }, token: i1.ActionSheet, providedIn: "root" });
ActionSheetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImFjdGlvbi1zaGVldC9hY3Rpb24tc2hlZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrRCxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBRUwsa0JBQWtCLEVBRWxCLDJCQUEyQixFQUM1QixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUU5RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLFNBQVMsSUFBSSxLQUFJLENBQUM7QUFJbEIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFIcEQ7O1FBSUUsWUFBTyxHQUFzQixJQUFJLENBQUM7UUFDbEMsNEJBQXVCLEdBQTJDLElBQUksQ0FBQztRQUN2RSxXQUFNLEdBQW1CLElBQUksQ0FBQztRQUM5QixXQUFNLEdBQXVDLElBQUksQ0FBQztRQUVsRCxhQUFRLEdBQUcsSUFBSSxDQUFDO0tBdUZqQjtJQXJGQyxXQUFXLENBQUMsTUFBMEIsRUFBRSxVQUFrQixFQUFFO1FBQzFELE1BQU0sS0FBSyxHQUF1QixJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDM0QsTUFBTSxjQUFjLEdBQWE7WUFDL0IsV0FBVztZQUNYLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixPQUFPO1lBQ1AsU0FBUztZQUNULFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsT0FBTztTQUNSLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENB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SSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsY0FBYyxFQUFFLGtCQUFrQjtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLEdBQUcsY0FBYyxVQUFVLGNBQWMsZUFBZSxDQUFDO1FBQ3RHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLGtCQUFrQixVQUFVLGtCQUFrQixlQUFlLENBQUM7UUFDbEgsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxNQUE4QixFQUFFLFdBQTJCLElBQUk7UUFDeEYsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQStCLENBQUMsTUFBbUMsRUFBRSxXQUEyQixJQUFJO1FBQ2xHLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztZQS9GRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIENvbXBvbmVudEZhY3RvcnksIEFwcGxpY2F0aW9uUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25TaGVldENvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLXNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBBY3Rpb25DYWxsQmFjayxcbiAgQWN0aW9uU2hlZXRPcHRpb25zLFxuICBBY3Rpb25TaGVldFdpdGhPcHRpb25zLFxuICBTaGFyZUFjdGlvblNoZWV0V2l0aE9wdGlvbnNcbn0gZnJvbSAnLi9hY3Rpb24tc2hlZXQtb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBQb3B1cFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UnO1xuXG5jb25zdCBOT1JNQUwgPSAnTk9STUFMJztcbmNvbnN0IFNIQVJFID0gJ1NIQVJFJztcbmZ1bmN0aW9uIG5vb3AoKSB7fVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uU2hlZXRTZXJ2aWNlIGV4dGVuZHMgUG9wdXBTZXJ2aWNlIHtcbiAgY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuICBfYWN0aW9uU2hlZXRDb21wRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxBY3Rpb25TaGVldENvbXBvbmVudD4gPSBudWxsO1xuICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmID0gbnVsbDtcbiAgY29tUmVmOiBDb21wb25lbnRSZWY8QWN0aW9uU2hlZXRDb21wb25lbnQ+ID0gbnVsbDtcblxuICBpbnN0YW5jZSA9IG51bGw7XG5cbiAgX2luaXRDb25maWcoY29uZmlnOiBBY3Rpb25TaGVldE9wdGlvbnMsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogQWN0aW9uU2hlZXRPcHRpb25zIHtcbiAgICBjb25zdCBwcm9wczogQWN0aW9uU2hlZXRPcHRpb25zID0gbmV3IEFjdGlvblNoZWV0T3B0aW9ucygpO1xuICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBzdHJpbmdbXSA9IFtcbiAgICAgICdwcmVmaXhDbHMnLFxuICAgICAgJ21hc2tDbG9zYWJsZScsXG4gICAgICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgICAnY2FuY2VsQnV0dG9uSW5kZXgnLFxuICAgICAgJ2Rlc3RydWN0aXZlQnV0dG9uSW5kZXgnLFxuICAgICAgJ3RpdGxlJyxcbiAgICAgICdtZXNzYWdlJyxcbiAgICAgICdjbGFzc05hbWUnLFxuICAgICAgJ3RyYW5zaXRpb25OYW1lJyxcbiAgICAgICdtYXNrVHJhbnNpdGlvbk5hbWUnLFxuICAgICAgJ29wdGlvbnMnLFxuICAgICAgJ2xvY2FsZScsXG4gICAgICAnY2xvc2UnXG4gICAgXTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGNvbmZpZywge1xuICAgICAgY2xvc2U6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICBzZWxmLmNsb3NlV2l0aEFuaW1hdGlvbihjb25maWcudHJhbnNpdGlvbk5hbWUsIGNvbmZpZy5tYXNrVHJhbnNpdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGNvbmZpZ1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIF9vcGVuKHByb3BzOiBBY3Rpb25TaGVldE9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbVJlZiA9IHRoaXMuc2hvd1BvcHVwKEFjdGlvblNoZWV0Q29tcG9uZW50KTtcbiAgICB0aGlzLmNvbVJlZi5pbnN0YW5jZS5vcHRpb24gPSBwcm9wcztcbiAgICByZXR1cm4gdGhpcy5jb21SZWYgJiYgdGhpcy5jb21SZWYuaW5zdGFuY2U7XG4gIH1cblxuICBjcmVhdGVBY3Rpb25TaGVldChcbiAgICBmbGFnOiBzdHJpbmcsXG4gICAgY29uZmlnOiBBY3Rpb25TaGVldFdpdGhPcHRpb25zIHwgU2hhcmVBY3Rpb25TaGVldFdpdGhPcHRpb25zLFxuICAgIGNhbGxiYWNrOiBBY3Rpb25DYWxsQmFja1xuICApIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmxhZyA9PT0gTk9STUFMID8gbmV3IEFjdGlvblNoZWV0T3B0aW9ucygpIDogbmV3IFNoYXJlQWN0aW9uU2hlZXRXaXRoT3B0aW9ucygpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25OYW1lID0gY29uZmlnLnRyYW5zaXRpb25OYW1lID8gY29uZmlnLnRyYW5zaXRpb25OYW1lIDogb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICBvcHRpb25zLnRyYW5zaXRpb25OYW1lID0gYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyICR7dHJhbnNpdGlvbk5hbWV9LWVudGVyLWFjdGl2ZWA7XG4gICAgY29uc3QgbWFza1RyYW5zaXRpb25OYW1lID0gY29uZmlnLm1hc2tUcmFuc2l0aW9uTmFtZSA/IGNvbmZpZy5tYXNrVHJhbnNpdGlvbk5hbWUgOiBvcHRpb25zLm1hc2tUcmFuc2l0aW9uTmFtZTtcbiAgICBvcHRpb25zLm1hc2tUcmFuc2l0aW9uTmFtZSA9IGAke21hc2tUcmFuc2l0aW9uTmFtZX0tZW50ZXIgJHttYXNrVHJhbnNpdGlvbk5hbWV9LWVudGVyLWFjdGl2ZWA7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLl9pbml0Q29uZmlnKGNvbmZpZywgb3B0aW9ucyk7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9wcywgeyBvblByZXNzOiBjYiB9LCB7IGZsYWc6IGZsYWcgfSwgeyBtYXNrQ2xvc2U6IHByb3BzLm1hc2tDbG9zYWJsZSA/IGNiIDogKCkgPT4ge30gfSk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gY2IoaW5kZXg6IGFueSwgcm93SW5kZXggPSAwLCBldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCByZXMgPSBjYWxsYmFjayhpbmRleCwgcm93SW5kZXgpO1xuICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xuICAgICAgICByZXMudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VsZi5jbG9zZVdpdGhBbmltYXRpb24odHJhbnNpdGlvbk5hbWUsIG1hc2tUcmFuc2l0aW9uTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5jbG9zZVdpdGhBbmltYXRpb24odHJhbnNpdGlvbk5hbWUsIG1hc2tUcmFuc2l0aW9uTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vcGVuKHByb3BzKTtcbiAgfVxuXG4gIGNsb3NlV2l0aEFuaW1hdGlvbih0cmFuc2l0aW9uTmFtZSwgbWFza1RyYW5zaXRpb25OYW1lKSB7XG4gICAgdGhpcy5jb21SZWYuaW5zdGFuY2Uub3B0aW9uLnRyYW5zaXRpb25OYW1lID0gYCR7dHJhbnNpdGlvbk5hbWV9LWxlYXZlICR7dHJhbnNpdGlvbk5hbWV9LWxlYXZlLWFjdGl2ZWA7XG4gICAgdGhpcy5jb21SZWYuaW5zdGFuY2Uub3B0aW9uLm1hc2tUcmFuc2l0aW9uTmFtZSA9IGAke21hc2tUcmFuc2l0aW9uTmFtZX0tbGVhdmUgJHttYXNrVHJhbnNpdGlvbk5hbWV9LWxlYXZlLWFjdGl2ZWA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHNob3dBY3Rpb25TaGVldFdpdGhPcHRpb25zKGNvbmZpZzogQWN0aW9uU2hlZXRXaXRoT3B0aW9ucywgY2FsbGJhY2s6IEFjdGlvbkNhbGxCYWNrID0gbm9vcCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0KE5PUk1BTCwgY29uZmlnLCBjYWxsYmFjayk7XG4gIH1cblxuICBzaG93U2hhcmVBY3Rpb25TaGVldFdpdGhPcHRpb25zKGNvbmZpZzogU2hhcmVBY3Rpb25TaGVldFdpdGhPcHRpb25zLCBjYWxsYmFjazogQWN0aW9uQ2FsbEJhY2sgPSBub29wKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uU2hlZXQoU0hBUkUsIGNvbmZpZywgY2FsbGJhY2spO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlUG9wdXAoKTtcbiAgfVxufVxuIl19