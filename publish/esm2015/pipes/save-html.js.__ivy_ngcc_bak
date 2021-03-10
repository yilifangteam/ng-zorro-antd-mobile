import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class SafeHTMLPipe {
    constructor(_sanitized) {
        this._sanitized = _sanitized;
    }
    transform(value) {
        return this._sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHTML' },] }
];
SafeHTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1odG1sLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJwaXBlcy9zYXZlLWh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3pELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBRyxDQUFDO0lBRWhELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQU5GLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7OztZQUZqQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ3NhZmVIVE1MJyB9KVxuZXhwb3J0IGNsYXNzIFNhZmVIVE1MUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZWQ6IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odmFsdWUpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICB9XG59XG4iXX0=