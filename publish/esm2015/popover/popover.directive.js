import { Directive, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef, Injector, ComponentFactoryResolver, Renderer2, TemplateRef } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverOptions } from './popover-options.provider';
import { PopoverComponentOptions } from './popover-component-options.provider';
import * as Positioning from '../core/util/position';
export class PopoverDirective {
    constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer) {
        this._viewContainerRef = _viewContainerRef;
        this._elm = _elm;
        this._defaultOptions = _defaultOptions;
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._eventListeners = [];
        this.onVisibleChange = new EventEmitter(true);
        this.onSelect = new EventEmitter();
    }
    togglePopover() {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    }
    positionMap(placement) {
        switch (placement) {
            case 'topLeft':
                return 'top-left';
            case 'topRight':
                return 'top-right';
            case 'bottomLeft':
                return 'bottom-left';
            case 'bottomRight':
                return 'bottom-right';
            case 'leftTop':
                return 'left-top';
            case 'leftBottom':
                return 'left-bottom';
            case 'rightTop':
                return 'right-top';
            case 'rightBottom':
                return 'right-bottom';
            case 'fullScreen':
            case 'landScape':
                return 'bottom';
            default:
                return placement;
        }
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            setTimeout(() => {
                this.showPopover();
            }, 0);
        }
        else {
            setTimeout(() => {
                this.hidePopover();
            }, 0);
        }
    }
    ngOnDestroy() {
        this.hidePopover();
    }
    onDocumentClick(event) {
        if (this.popover &&
            !this._elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target)) {
            this.hidePopover();
        }
    }
    showPopover() {
        if (!this.popover) {
            setTimeout(() => {
                this._eventListeners = [
                    this._renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event)),
                    this._renderer.listen('window', 'resize', () => this.positionPopover())
                ];
            });
            const options = new PopoverComponentOptions();
            options.placement = this.placement;
            Object.assign(options, this._defaultOptions, {
                hidePopover: (event) => {
                    this.hidePopover();
                },
                onAfterViewInit: () => {
                    this.positionPopover();
                    const children = document.getElementsByClassName('am-popover-inner-wrapper')[0].children;
                    if (children.length > 0) {
                        // 首先我们检查它是否包含子节点
                        for (let i = 0; i < children.length; i++) {
                            children[i].id = `${i}`;
                            children[i].addEventListener('click', () => {
                                if (this.onSelect) {
                                    this.onSelect.emit(children[i]);
                                    if (options.autoClose) {
                                        this.hidePopover();
                                    }
                                }
                            }, false);
                        }
                    }
                }
            });
            const optionalParams = [
                'mask',
                'showArrow',
                'placement',
                'appendToBody',
                'overlay',
                'className',
                'autoClose'
            ];
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this._cfr.resolveComponentFactory(PopoverComponent);
            const childInjector = Injector.create([
                {
                    provide: PopoverComponentOptions,
                    useValue: options
                }
            ], this._viewContainerRef.parentInjector);
            this.popover = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                this.appendToBodyElement = document.body.appendChild(this.popover.location.nativeElement);
            }
            this.onVisibleChange.emit(true);
        }
    }
    positionPopover() {
        if (this.popover) {
            const popoverElement = this.popover.location.nativeElement.children[1];
            const popoverPosition = Positioning.getPositionElements(this._elm.nativeElement, popoverElement, this.positionMap(this.placement) || this._defaultOptions.placement, this.appendToBody || this._defaultOptions.appendToBody);
            if (this.placement === 'landScape') {
                this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
                this._renderer.setStyle(popoverElement, 'left', `0px`);
                this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
                this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
            }
            else if (this.placement === 'fullScreen') {
                this._renderer.setStyle(popoverElement, 'top', `${0}px`);
                this._renderer.setStyle(popoverElement, 'left', `0px`);
                this._renderer.setStyle(popoverElement, 'width', `${window.innerWidth}px`);
                this._renderer.setStyle(popoverElement, 'max-height', `${window.innerHeight - popoverPosition.height}px`);
            }
            else {
                this._renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
                this._renderer.setStyle(popoverElement, 'left', `${popoverPosition.left}px`);
            }
        }
    }
    hidePopover() {
        if (this.appendToBodyElement) {
            document.body.removeChild(this.appendToBodyElement);
            this.appendToBodyElement = null;
        }
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.onVisibleChange.emit(false);
            this._eventListeners.forEach(fn => fn());
            this._eventListeners = [];
        }
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Popover], [nzm-popover]',
                providers: [PopoverOptions]
            },] }
];
PopoverDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: PopoverOptions },
    { type: ComponentFactoryResolver },
    { type: Renderer2 }
];
PopoverDirective.propDecorators = {
    mask: [{ type: Input }],
    showArrow: [{ type: Input }],
    visible: [{ type: Input }],
    placement: [{ type: Input }],
    overlay: [{ type: Input }],
    onVisibleChange: [{ type: Output }],
    onSelect: [{ type: Output }],
    appendToBody: [{ type: Input }],
    className: [{ type: Input }],
    autoClose: [{ type: Input }],
    togglePopover: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInBvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osZ0JBQWdCLEVBR2hCLFVBQVUsRUFFVixRQUFRLEVBQ1Isd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxXQUFXLEVBSVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sS0FBSyxXQUFXLE1BQU0sdUJBQXVCLENBQUM7QUFNckQsTUFBTSxPQUFPLGdCQUFnQjtJQW1DM0IsWUFDVSxpQkFBbUMsRUFDbkMsSUFBZ0IsRUFDaEIsZUFBK0IsRUFDL0IsSUFBOEIsRUFDOUIsU0FBb0I7UUFKcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixTQUFJLEdBQUosSUFBSSxDQUEwQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBckN0QixvQkFBZSxHQUFzQixFQUFFLENBQUM7UUFhaEQsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEUsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBdUI5QyxDQUFDO0lBZEosYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjthQUFN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biAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudE9wdGlvbnMgfSBmcm9tICcuL3BvcG92ZXItY29tcG9uZW50LW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0ICogYXMgUG9zaXRpb25pbmcgZnJvbSAnLi4vY29yZS91dGlsL3Bvc2l0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1BvcG92ZXJdLCBbbnptLXBvcG92ZXJdJyxcbiAgcHJvdmlkZXJzOiBbUG9wb3Zlck9wdGlvbnNdXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcG9wb3ZlcjogQ29tcG9uZW50UmVmPFBvcG92ZXJDb21wb25lbnQ+O1xuICBhcHBlbmRUb0JvZHlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgQElucHV0KClcbiAgbWFzazogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgb3ZlcmxheTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQE91dHB1dCgpXG4gIG9uVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KClcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgYXV0b0Nsb3NlOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdG9nZ2xlUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3Zlcikge1xuICAgICAgdGhpcy5zaG93UG9wb3ZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9lbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IFBvcG92ZXJPcHRpb25zLFxuICAgIHByaXZhdGUgX2NmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIHBvc2l0aW9uTWFwKHBsYWNlbWVudCk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICByZXR1cm4gJ3RvcC1sZWZ0JztcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgcmV0dXJuICd0b3AtcmlnaHQnO1xuICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgIHJldHVybiAnYm90dG9tLWxlZnQnO1xuICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICByZXR1cm4gJ2JvdHRvbS1yaWdodCc7XG4gICAgICBjYXNlICdsZWZ0VG9wJzpcbiAgICAgICAgcmV0dXJuICdsZWZ0LXRvcCc7XG4gICAgICBjYXNlICdsZWZ0Qm90dG9tJzpcbiAgICAgICAgcmV0dXJuICdsZWZ0LWJvdHRvbSc7XG4gICAgICBjYXNlICdyaWdodFRvcCc6XG4gICAgICAgIHJldHVybiAncmlnaHQtdG9wJztcbiAgICAgIGNhc2UgJ3JpZ2h0Qm90dG9tJzpcbiAgICAgICAgcmV0dXJuICdyaWdodC1ib3R0b20nO1xuICAgICAgY2FzZSAnZnVsbFNjcmVlbic6XG4gICAgICBjYXNlICdsYW5kU2NhcGUnOlxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSAmJiBjaGFuZ2VzLnZpc2libGUuY3VycmVudFZhbHVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93UG9wb3ZlcigpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnBvcG92ZXIgJiZcbiAgICAgICF0aGlzLl9lbG0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhdGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd1BvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpKSxcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpKSxcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpKVxuICAgICAgICBdO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgUG9wb3ZlckNvbXBvbmVudE9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnMucGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQ7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuX2RlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIGhpZGVQb3BvdmVyOiAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQWZ0ZXJWaWV3SW5pdDogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25Qb3BvdmVyKCk7XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbS1wb3BvdmVyLWlubmVyLXdyYXBwZXInKVswXS5jaGlsZHJlbjtcbiAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g6aaW5YWI5oiR5Lus5qOA5p+l5a6D5piv5ZCm5YyF5ZCr5a2Q6IqC54K5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuW2ldLmlkID0gYCR7aX1gO1xuICAgICAgICAgICAgICBjaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBBcnJheTxrZXlvZiBQb3BvdmVyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ21hc2snLFxuICAgICAgICAnc2hvd0Fycm93JyxcbiAgICAgICAgJ3BsYWNlbWVudCcsXG4gICAgICAgICdhcHBlbmRUb0JvZHknLFxuICAgICAgICAnb3ZlcmxheScsXG4gICAgICAgICdjbGFzc05hbWUnLFxuICAgICAgICAnYXV0b0Nsb3NlJ1xuICAgICAgXTtcbiAgICAgIG9wdGlvbmFsUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcGFyYW1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIChvcHRpb25zIGFzIGFueSlbcGFyYW1dID0gdGhpc1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5fY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFBvcG92ZXJDb21wb25lbnQpO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFBvcG92ZXJDb21wb25lbnRPcHRpb25zLFxuICAgICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucGFyZW50SW5qZWN0b3JcbiAgICAgICk7XG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgIGNoaWxkSW5qZWN0b3JcbiAgICAgICk7XG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Qb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHBvcG92ZXJFbGVtZW50ID0gdGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICBjb25zdCBwb3BvdmVyUG9zaXRpb24gPSBQb3NpdGlvbmluZy5nZXRQb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICB0aGlzLl9lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgcG9wb3ZlckVsZW1lbnQsXG4gICAgICAgIHRoaXMucG9zaXRpb25NYXAodGhpcy5wbGFjZW1lbnQpIHx8IHRoaXMuX2RlZmF1bHRPcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgfHwgdGhpcy5fZGVmYXVsdE9wdGlvbnMuYXBwZW5kVG9Cb2R5XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAnbGFuZFNjYXBlJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ3RvcCcsIGAke3BvcG92ZXJQb3NpdGlvbi50b3B9cHhgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocG9wb3ZlckVsZW1lbnQsICdsZWZ0JywgYDBweGApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ3dpZHRoJywgYCR7d2luZG93LmlubmVyV2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocG9wb3ZlckVsZW1lbnQsICdtYXgtaGVpZ2h0JywgYCR7d2luZG93LmlubmVySGVpZ2h0IC0gcG9wb3ZlclBvc2l0aW9uLmhlaWdodH1weGApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ2Z1bGxTY3JlZW4nKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHBvcG92ZXJFbGVtZW50LCAndG9wJywgYCR7MH1weGApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ2xlZnQnLCBgMHB4YCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHBvcG92ZXJFbGVtZW50LCAnd2lkdGgnLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSBwb3BvdmVyUG9zaXRpb24uaGVpZ2h0fXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ3RvcCcsIGAke3BvcG92ZXJQb3NpdGlvbi50b3B9cHhgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocG9wb3ZlckVsZW1lbnQsICdsZWZ0JywgYCR7cG9wb3ZlclBvc2l0aW9uLmxlZnR9cHhgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keUVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5hcHBlbmRUb0JvZHlFbGVtZW50KTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5RWxlbWVudCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMucG9wb3Zlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5wb3BvdmVyO1xuICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==