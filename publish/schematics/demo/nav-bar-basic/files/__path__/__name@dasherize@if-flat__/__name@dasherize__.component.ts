import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <Navbar [icon]="icon" [rightContent]="rightContent" [mode]="'light'" (onLeftClick)="onLeftClick()">
      NavBar
    </Navbar>
    <Navbar [leftContent]="'Back'" [rightContent]="rightContent" (onLeftClick)="onLeftClick()">
      NavBar
    </Navbar>

    <ng-template #icon>
      <Icon [type]="'left'"></Icon>
    </ng-template>

    <ng-template #rightContent>
      <Icon [type]="'search'" [ngStyle]="{ marginRight: '16px' }"></Icon>
      <Icon [type]="'ellipsis'"></Icon>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onLeftClick() {
    console.log('onLeftClick');
  }
}
