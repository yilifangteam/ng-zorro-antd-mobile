import { Injectable } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import { ActionSheetOptions, ShareActionSheetWithOptions } from './action-sheet-options.provider';
import { PopupService } from '../core/services/popup.service';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
import * as ɵngcc0 from '@angular/core';
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
ActionSheetService.ɵfac = function ActionSheetService_Factory(t) { return ɵActionSheetService_BaseFactory(t || ActionSheetService); };
ActionSheetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActionSheetService_Factory() { return new i1.ActionSheet(i0.ɵɵinject(i2.Overlay)); }, token: i1.ActionSheet, providedIn: "root" });
const ɵActionSheetService_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(ActionSheetService);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ActionSheetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXNoZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9uLXNoZWV0L2FjdGlvbi1zaGVldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtELE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFFTCxrQkFBa0IsRUFFbEIsMkJBQTJCLEVBQzVCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlEO0FBRVc7QUFFTjs7QUFITCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLFNBQVMsSUFBSSxLQUFJLENBQUM7QUFJbEIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7QUFDcEQsSUFKQTtBQUNFO0FBRUssUUFDTCxZQUFPLEdBQXNCLElBQUksQ0FBQztBQUNwQyxRQUFFLDRCQUF1QixHQUEyQyxJQUFJLENBQUM7QUFDekUsUUFBRSxXQUFNLEdBQW1CLElBQUksQ0FBQztBQUNoQyxRQUFFLFdBQU0sR0FBdUMsSUFBSSxDQUFDO0FBQ3BELFFBQ0UsYUFBUSxHQUFHLElBQUksQ0FBQztBQUNsQixLQXNGQztBQUNELElBdEZFLFdBQVcsQ0FBQyxNQUEwQixFQUFFLFVBQWtCLEVBQUU7QUFBSSxRQUM5RCxNQUFNLEtBQUssR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQy9ELFFBQUksTUFBTSxjQUFjLEdBQWE7QUFDckMsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sY0FBYztBQUNwQixZQUFNLGtCQUFrQjtBQUN4QixZQUFNLG1CQUFtQjtBQUN6QixZQUFNLHdCQUF3QjtBQUM5QixZQUFNLE9BQU87QUFDYixZQUFNLFNBQVM7QUFDZixZQUFNLFdBQVc7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LElBQUk7QUFDdEcsUUFBSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNELElBQUUsQ0FBQztBQUNILElBQ0UsS0FBSztBQUNQLFFBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNIO3NJQUFDO0FBQ0Q7OENBakdDLFVBQVUsU0FBQyxrQkFDVixVQUFVLEVBQUUsTUFBTTtXQUNuQjs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeSwgQXBwbGljYXRpb25SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tc2hlZXQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFjdGlvbkNhbGxCYWNrLFxuICBBY3Rpb25TaGVldE9wdGlvbnMsXG4gIEFjdGlvblNoZWV0V2l0aE9wdGlvbnMsXG4gIFNoYXJlQWN0aW9uU2hlZXRXaXRoT3B0aW9uc1xufSBmcm9tICcuL2FjdGlvbi1zaGVldC1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvcG9wdXAuc2VydmljZSc7XG5cbmNvbnN0IE5PUk1BTCA9ICdOT1JNQUwnO1xuY29uc3QgU0hBUkUgPSAnU0hBUkUnO1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldFNlcnZpY2UgZXh0ZW5kcyBQb3B1cFNlcnZpY2Uge1xuICBjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG51bGw7XG4gIF9hY3Rpb25TaGVldENvbXBGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEFjdGlvblNoZWV0Q29tcG9uZW50PiA9IG51bGw7XG4gIGFwcFJlZjogQXBwbGljYXRpb25SZWYgPSBudWxsO1xuICBjb21SZWY6IENvbXBvbmVudFJlZjxBY3Rpb25TaGVldENvbXBvbmVudD4gPSBudWxsO1xuXG4gIGluc3RhbmNlID0gbnVsbDtcblxuICBfaW5pdENvbmZpZyhjb25maWc6IEFjdGlvblNoZWV0T3B0aW9ucywgb3B0aW9uczogT2JqZWN0ID0ge30pOiBBY3Rpb25TaGVldE9wdGlvbnMge1xuICAgIGNvbnN0IHByb3BzOiBBY3Rpb25TaGVldE9wdGlvbnMgPSBuZXcgQWN0aW9uU2hlZXRPcHRpb25zKCk7XG4gICAgY29uc3Qgb3B0aW9uYWxQYXJhbXM6IHN0cmluZ1tdID0gW1xuICAgICAgJ3ByZWZpeENscycsXG4gICAgICAnbWFza0Nsb3NhYmxlJyxcbiAgICAgICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgICAgICdjYW5jZWxCdXR0b25JbmRleCcsXG4gICAgICAnZGVzdHJ1Y3RpdmVCdXR0b25JbmRleCcsXG4gICAgICAndGl0bGUnLFxuICAgICAgJ21lc3NhZ2UnLFxuICAgICAgJ2NsYXNzTmFtZScsXG4gICAgICAndHJhbnNpdGlvbk5hbWUnLFxuICAgICAgJ21hc2tUcmFuc2l0aW9uTmFtZScsXG4gICAgICAnb3B0aW9ucycsXG4gICAgICAnbG9jYWxlJyxcbiAgICAgICdjbG9zZSdcbiAgICBdO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgY29uZmlnLCB7XG4gICAgICBjbG9zZTogKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLm1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgIHNlbGYuY2xvc2VXaXRoQW5pbWF0aW9uKGNvbmZpZy50cmFuc2l0aW9uTmFtZSwgY29uZmlnLm1hc2tUcmFuc2l0aW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBvcHRpb25hbFBhcmFtcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoY29uZmlnW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1trZXldID0gY29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgX29wZW4ocHJvcHM6IEFjdGlvblNoZWV0T3B0aW9ucykge1xuICAgIHRoaXMuY29tUmVmID0gdGhpcy5zaG93UG9wdXAoQWN0aW9uU2hlZXRDb21wb25lbnQpO1xuICAgIHRoaXMuY29tUmVmLmluc3RhbmNlLm9wdGlvbiA9IHByb3BzO1xuICAgIHJldHVybiB0aGlzLmNvbVJlZiAmJiB0aGlzLmNvbVJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGNyZWF0ZUFjdGlvblNoZWV0KFxuICAgIGZsYWc6IHN0cmluZyxcbiAgICBjb25maWc6IEFjdGlvblNoZWV0V2l0aE9wdGlvbnMgfCBTaGFyZUFjdGlvblNoZWV0V2l0aE9wdGlvbnMsXG4gICAgY2FsbGJhY2s6IEFjdGlvbkNhbGxCYWNrXG4gICkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmbGFnID09PSBOT1JNQUwgPyBuZXcgQWN0aW9uU2hlZXRPcHRpb25zKCkgOiBuZXcgU2hhcmVBY3Rpb25TaGVldFdpdGhPcHRpb25zKCk7XG4gICAgY29uc3QgdHJhbnNpdGlvbk5hbWUgPSBjb25maWcudHJhbnNpdGlvbk5hbWUgPyBjb25maWcudHJhbnNpdGlvbk5hbWUgOiBvcHRpb25zLnRyYW5zaXRpb25OYW1lO1xuICAgIG9wdGlvbnMudHJhbnNpdGlvbk5hbWUgPSBgJHt0cmFuc2l0aW9uTmFtZX0tZW50ZXIgJHt0cmFuc2l0aW9uTmFtZX0tZW50ZXItYWN0aXZlYDtcbiAgICBjb25zdCBtYXNrVHJhbnNpdGlvbk5hbWUgPSBjb25maWcubWFza1RyYW5zaXRpb25OYW1lID8gY29uZmlnLm1hc2tUcmFuc2l0aW9uTmFtZSA6IG9wdGlvbnMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgIG9wdGlvbnMubWFza1RyYW5zaXRpb25OYW1lID0gYCR7bWFza1RyYW5zaXRpb25OYW1lfS1lbnRlciAke21hc2tUcmFuc2l0aW9uTmFtZX0tZW50ZXItYWN0aXZlYDtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuX2luaXRDb25maWcoY29uZmlnLCBvcHRpb25zKTtcbiAgICBPYmplY3QuYXNzaWduKHByb3BzLCB7IG9uUHJlc3M6IGNiIH0sIHsgZmxhZzogZmxhZyB9LCB7IG1hc2tDbG9zZTogcHJvcHMubWFza0Nsb3NhYmxlID8gY2IgOiAoKSA9PiB7fSB9KTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBjYihpbmRleDogYW55LCByb3dJbmRleCA9IDAsIGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHJlcyA9IGNhbGxiYWNrKGluZGV4LCByb3dJbmRleCk7XG4gICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XG4gICAgICAgIHJlcy50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZWxmLmNsb3NlV2l0aEFuaW1hdGlvbih0cmFuc2l0aW9uTmFtZSwgbWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmNsb3NlV2l0aEFuaW1hdGlvbih0cmFuc2l0aW9uTmFtZSwgbWFza1RyYW5zaXRpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wZW4ocHJvcHMpO1xuICB9XG5cbiAgY2xvc2VXaXRoQW5pbWF0aW9uKHRyYW5zaXRpb25OYW1lLCBtYXNrVHJhbnNpdGlvbk5hbWUpIHtcbiAgICB0aGlzLmNvbVJlZi5pbnN0YW5jZS5vcHRpb24udHJhbnNpdGlvbk5hbWUgPSBgJHt0cmFuc2l0aW9uTmFtZX0tbGVhdmUgJHt0cmFuc2l0aW9uTmFtZX0tbGVhdmUtYWN0aXZlYDtcbiAgICB0aGlzLmNvbVJlZi5pbnN0YW5jZS5vcHRpb24ubWFza1RyYW5zaXRpb25OYW1lID0gYCR7bWFza1RyYW5zaXRpb25OYW1lfS1sZWF2ZSAke21hc2tUcmFuc2l0aW9uTmFtZX0tbGVhdmUtYWN0aXZlYDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgc2hvd0FjdGlvblNoZWV0V2l0aE9wdGlvbnMoY29uZmlnOiBBY3Rpb25TaGVldFdpdGhPcHRpb25zLCBjYWxsYmFjazogQWN0aW9uQ2FsbEJhY2sgPSBub29wKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9uU2hlZXQoTk9STUFMLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNob3dTaGFyZUFjdGlvblNoZWV0V2l0aE9wdGlvbnMoY29uZmlnOiBTaGFyZUFjdGlvblNoZWV0V2l0aE9wdGlvbnMsIGNhbGxiYWNrOiBBY3Rpb25DYWxsQmFjayA9IG5vb3ApIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb25TaGVldChTSEFSRSwgY29uZmlnLCBjYWxsYmFjayk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVQb3B1cCgpO1xuICB9XG59XG4iXX0=