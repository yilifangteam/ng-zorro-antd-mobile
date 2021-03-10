import { Pipe } from '@angular/core';
import { LocaleProviderService } from './locale-provider.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './locale-provider.service';
export class LocaleProviderPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(keyPath) {
        return this._locale.getLocaleValue(keyPath);
    }
}
LocaleProviderPipe.ɵfac = function LocaleProviderPipe_Factory(t) { return new (t || LocaleProviderPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LocaleProviderService)); };
LocaleProviderPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "localeProvider", type: LocaleProviderPipe, pure: true });
LocaleProviderPipe.ctorParameters = () => [
    { type: LocaleProviderService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LocaleProviderPipe, [{
        type: Pipe,
        args: [{
                name: 'localeProvider'
            }]
    }], function () { return [{ type: ɵngcc1.LocaleProviderService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLXByb3ZpZGVyLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbG9jYWxlLXByb3ZpZGVyL2xvY2FsZS1wcm92aWRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBQ2hDLFlBQW9CLE9BQThCO0FBQUksUUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7QUFBQyxJQUFFLENBQUM7QUFDeEQsSUFDRSxTQUFTLENBQUMsT0FBZTtBQUFJLFFBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsSUFBRSxDQUFDO0FBQ0g7OENBVEMsSUFBSSxTQUFDLGtCQUNKLElBQUksRUFBRSxnQkFBZ0IsY0FDdkI7aUhBQ0k7QUFBQztBQUE0QyxZQUx6QyxxQkFBcUI7QUFBRzs7Ozs7O3NGQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuL2xvY2FsZS1wcm92aWRlci5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbG9jYWxlUHJvdmlkZXInXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsZVByb3ZpZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IExvY2FsZVByb3ZpZGVyU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldExvY2FsZVZhbHVlKGtleVBhdGgpO1xuICB9XG59XG4iXX0=