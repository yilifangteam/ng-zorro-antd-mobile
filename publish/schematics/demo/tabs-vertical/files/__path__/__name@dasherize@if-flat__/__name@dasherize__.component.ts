import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <Tabs
      style="height: 200px;"
      [page]="3"
      [activeTab]="index"
      [tabBarPosition]="'left'"
      [tabDirection]="'vertical'"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane [title]="'First Tab'">
        <div
          style="display: flex; height: 200px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of first tab
        </div>
      </TabPane>
      <TabPane [title]="'Second Tab'">
        <div
          style="display: flex; height: 200px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of second tab
        </div>
      </TabPane>
      <TabPane [title]="'Third Tab'">
        <div
          style="display: flex; height: 200px; width: 100%; background-color: white;align-items: center;justify-content: center;"
        >
          Content of third tab
        </div>
      </TabPane>
    </Tabs>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      /deep/ .am-badge {
        text-align: right;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }
}
