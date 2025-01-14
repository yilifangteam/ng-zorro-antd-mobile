import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <Tabs
      style="height: 200px;"
      [page]="3"
      [activeTab]="index"
      (onChange)="onChange($event)"
      (onTabClick)="onTabClick($event)"
    >
      <TabPane [title]="'First Tab'">
        <div
          style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: rgb(255, 255, 255);"
        >
          Content of first tab
        </div>
      </TabPane>
      <TabPane [title]="'Second Tab'">
        <div
          style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: rgb(255, 255, 255);"
        >
          Content of second tab
        </div>
      </TabPane>
      <TabPane [title]="'Third Tab'">
        <div
          style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: rgb(255, 255, 255);"
        >
          Content of third tab
        </div>
      </TabPane>
    </Tabs>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
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
