import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <NoticeBar [option]="{ content: '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！', font: '14px' }">
    </NoticeBar>
    <NoticeBar
      [option]="{ content: '我是小黄条，小黄条的小，小黄条的黄！！！', font: '14px', mode: 'link' }"
      (onClick)="onClick()"
    >
    </NoticeBar>
    <NoticeBar [option]="{ content: '我是小黄条，小黄条的小，小黄条的黄！！！', icon: null, mode: 'closable' }">
    </NoticeBar>
    <NoticeBar
      [option]="{
        content: '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
        icon: icon,
        mode: 'closable'
      }"
      (onClick)="onClick()"
    >
      <ng-template #icon>
        <Icon [type]="'check-circle-o'" [size]="'xxs'"></Icon>
      </ng-template>
    </NoticeBar>
    <NoticeBar
      [option]="{
        content: '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
        action: action,
        mode: 'closable'
      }"
    >
      <ng-template #action>
        <div style="color: #a1a1a1">不再提示</div>
      </ng-template>
    </NoticeBar>
    <NoticeBar
      [option]="{
        content: '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
        action: action1,
        mode: 'link'
      }"
    >
      <ng-template #action1>
        <div>去看看</div>
      </ng-template>
    </NoticeBar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onClick() {
    console.log('1');
  }
}
