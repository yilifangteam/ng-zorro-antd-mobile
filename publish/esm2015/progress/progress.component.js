import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
export class ProgressComponent {
    constructor() {
        this.prefixCls = 'am-progress';
        this._percent = 0;
        this._exceedance = false;
        this.unfilled = true;
        this.position = 'fixed';
        this.barStyle = {};
        this.max = 100;
        this.amProgress = true;
        this.outer = true;
    }
    get percent() {
        return this._percent;
    }
    set percent(value) {
        this._percent = value;
        if (value > 100) {
            this._exceedance = true;
        }
        else {
            this._exceedance = false;
        }
    }
    get value() {
        return this.percent;
    }
    get fixOuter() {
        return 'fixed' === this.position;
    }
    get hideOuter() {
        return !this.unfilled && !this._exceedance;
    }
    get exceedance() {
        return this._exceedance;
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'Progress, nzm-progress',
                template: "<div\n  class=\"{{ prefixCls }}-bar\"\n  [ngStyle]=\"barStyle\"\n  [style.width.%]=\"percent <= 100 ? percent : 10000 / percent\"\n></div>\n",
                encapsulation: ViewEncapsulation.None
            },] }
];
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    unfilled: [{ type: Input }],
    position: [{ type: Input }],
    barStyle: [{ type: Input }],
    percent: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }],
    value: [{ type: HostBinding, args: ['attr.value',] }],
    amProgress: [{ type: HostBinding, args: ['class.am-progress',] }],
    outer: [{ type: HostBinding, args: ['class.am-progress-outer',] }],
    fixOuter: [{ type: HostBinding, args: ['class.am-progress-fixed-outer',] }],
    hideOuter: [{ type: HostBinding, args: ['class.am-progress-hide-outer',] }],
    exceedance: [{ type: HostBinding, args: ['class.am-progress-exceedance',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJwcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpGLE1BQU0sT0FBTyxpQkFBaUI7SUFpRDVCO1FBaERBLGNBQVMsR0FBVyxhQUFhLENBQUM7UUFFMUIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUdyQyxhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQVEsR0FBaUIsT0FBTyxDQUFDO1FBRWpDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFldEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQU9sQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFVBQUssR0FBWSxJQUFJLENBQUM7SUFjUCxDQUFDO0lBckNoQixJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUlELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBTUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx3SkFBd0M7Z0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O3VCQU9FLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7a0JBYUwsV0FBVyxTQUFDLFVBQVU7b0JBRXRCLFdBQVcsU0FBQyxZQUFZO3lCQUt4QixXQUFXLFNBQUMsbUJBQW1CO29CQUUvQixXQUFXLFNBQUMseUJBQXlCO3VCQUVyQyxXQUFXLFNBQUMsK0JBQStCO3dCQUkzQyxXQUFXLFNBQUMsOEJBQThCO3lCQUkxQyxXQUFXLFNBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgdHlwZSBQb3NpdGlvblR5cGUgPSAnbm9ybWFsJyB8ICdmaXhlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1Byb2dyZXNzLCBuem0tcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW0tcHJvZ3Jlc3MnO1xuXG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2V4Y2VlZGFuY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICB1bmZpbGxlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uOiBQb3NpdGlvblR5cGUgPSAnZml4ZWQnO1xuICBASW5wdXQoKVxuICBiYXJTdHlsZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPiAxMDApIHtcbiAgICAgIHRoaXMuX2V4Y2VlZGFuY2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leGNlZWRhbmNlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heCcpXG4gIG1heDogbnVtYmVyID0gMTAwO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudmFsdWUnKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbS1wcm9ncmVzcycpXG4gIGFtUHJvZ3Jlc3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXByb2dyZXNzLW91dGVyJylcbiAgb3V0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFtLXByb2dyZXNzLWZpeGVkLW91dGVyJylcbiAgZ2V0IGZpeE91dGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAnZml4ZWQnID09PSB0aGlzLnBvc2l0aW9uO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHJvZ3Jlc3MtaGlkZS1vdXRlcicpXG4gIGdldCBoaWRlT3V0ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnVuZmlsbGVkICYmICF0aGlzLl9leGNlZWRhbmNlO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW0tcHJvZ3Jlc3MtZXhjZWVkYW5jZScpXG4gIGdldCBleGNlZWRhbmNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leGNlZWRhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19