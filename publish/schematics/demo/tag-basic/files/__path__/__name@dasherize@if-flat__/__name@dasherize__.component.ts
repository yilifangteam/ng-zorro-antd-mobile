import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="tag-container">
      <Tag data-seed="logId">Basic</Tag>
      <Tag [selected]="true">Selected</Tag>
      <Tag [disabled]="true">Disabled</Tag>
      <Tag (onChange)="onChange($event)">Callback</Tag>
      <Tag [closable]="true" (onClose)="onClose()" (afterClose)="afterClose()"> Closable</Tag>
      <Tag [small]="true">Small and Readonly</Tag>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .tag-container {
        display: flex;
        padding-top: 9px;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .tag-container > tag {
        margin-left: 9px;
        margin-bottom: 9px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  onChange(selected) {
    console.log(`tag selected: ${selected}`);
  }

  onClose() {
    console.log('onClose');
  }

  afterClose() {
    console.log('afterClose');
  }
}
