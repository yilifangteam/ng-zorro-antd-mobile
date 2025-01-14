import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <WhiteSpace [size]="'xs'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'sm'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'xl'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

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
