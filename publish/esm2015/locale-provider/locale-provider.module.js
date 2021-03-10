import { NgModule } from '@angular/core';
import zh_CN from './locale/zh_CN';
import { LocaleProviderPipe } from './locale-provider.pipe';
import { LOCAL_PROVIDER_TOKEN } from './locale-provider.token';
import { LOCALE_PROVIDER_SERVICE_PROVIDER } from './locale-provider.service';
import * as ɵngcc0 from '@angular/core';
const ɵ0 = zh_CN;
export class LocaleProviderModule {
}
LocaleProviderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LocaleProviderModule });
LocaleProviderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LocaleProviderModule_Factory(t) { return new (t || LocaleProviderModule)(); }, providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: ɵ0 }, LOCALE_PROVIDER_SERVICE_PROVIDER], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LocaleProviderModule, { declarations: function () { return [LocaleProviderPipe]; }, exports: function () { return [LocaleProviderPipe]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LocaleProviderModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [LocaleProviderPipe],
                exports: [LocaleProviderPipe],
                providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: ɵ0 }, LOCALE_PROVIDER_SERVICE_PROVIDER]
            }]
    }], null, null); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLXByb3ZpZGVyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9sb2NhbGUtcHJvdmlkZXIvbG9jYWxlLXByb3ZpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUM3RSxXQUt5RCxLQUFLO0FBRTlELE1BQU0sT0FBTyxvQkFBb0I7QUFBRztnREFObkMsUUFBUSxTQUFDLGtCQUNSO0tBQU8sRUFBRSxFQUFFLGtCQUNYLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDLGtCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFDN0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxJQUFPLEVBQUUsRUFBRSxnQ0FBZ0MsQ0FBQyxjQUNsRzs7Ozs7Ozs7OzswQkFDSTtBQUFDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHpoX0NOIGZyb20gJy4vbG9jYWxlL3poX0NOJztcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyUGlwZSB9IGZyb20gJy4vbG9jYWxlLXByb3ZpZGVyLnBpcGUnO1xuaW1wb3J0IHsgTE9DQUxfUFJPVklERVJfVE9LRU4gfSBmcm9tICcuL2xvY2FsZS1wcm92aWRlci50b2tlbic7XG5pbXBvcnQgeyBMT0NBTEVfUFJPVklERVJfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbG9jYWxlLXByb3ZpZGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9jYWxlUHJvdmlkZXJQaXBlXSxcbiAgZXhwb3J0czogW0xvY2FsZVByb3ZpZGVyUGlwZV0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTE9DQUxfUFJPVklERVJfVE9LRU4sIHVzZVZhbHVlOiB6aF9DTiB9LCBMT0NBTEVfUFJPVklERVJfU0VSVklDRV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxlUHJvdmlkZXJNb2R1bGUge31cbiJdfQ==