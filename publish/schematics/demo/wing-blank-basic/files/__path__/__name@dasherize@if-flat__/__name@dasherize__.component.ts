import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="padding: 15px 0">
      <WingBlank>
        <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
      </WingBlank>

      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <WingBlank [size]="'md'">
        <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
      </WingBlank>

      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <WingBlank [size]="'sm'">
        <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
      </WingBlank>

      <ng-template #placeHolder>
        <div class="placeholder">Block</div>
      </ng-template>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .placeholder {
        background-color: #ebebef;
        color: #bbb;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {}
