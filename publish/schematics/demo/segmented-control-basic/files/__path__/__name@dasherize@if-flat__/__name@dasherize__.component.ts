import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <WingBlank [size]="'lg'" class="sc-example">
      <p class="sub-title">Simplest</p>
      <SegmentedControl [values]="['Segment1', 'Segment2']"></SegmentedControl>
      <p class="sub-title">Disabled</p>
      <SegmentedControl [values]="['Segment1', 'Segment2']" [disabled]="true"></SegmentedControl>
      <p class="sub-title">SelectedIndex</p>
      <SegmentedControl [selectedIndex]="1" [values]="['Segment1', 'Segment2', 'Segment3']"></SegmentedControl>
      <p class="sub-title">TintColor</p>
      <SegmentedControl
        style="height: 40px; width: 250px"
        [tintColor]="'#ff0000'"
        [values]="['Segment1', 'Segment2', 'Segment3']"
      ></SegmentedControl>
      <p class="sub-title">onChange</p>
      <SegmentedControl [values]="['Segment1', 'Segment2', 'Segment3']" (onChange)="choose($event)"></SegmentedControl>
    </WingBlank>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .sc-example {
        padding-bottom: 13px;
      }

      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
        margin: 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  choose(event) {
    console.log('index: ', event.selectedIndex, 'value: ', event.value);
  }
}
