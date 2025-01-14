import { Component } from '@angular/core';
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ImagePicker
      [files]="files"
      [multiple]="multiple"
      [selectable]="files.length < 5"
      [accept]="'image/gif,image/jpeg,image/jpg,image/png'"
      (onChange)="fileChange($event)"
      (onImageClick)="imageClick($event)"
      (onImageChange)="ImageChange($event)"
    ></ImagePicker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  files = data.slice(0);
  multiple = false;
  multipleTab = 0;

  ImageChange(params) {
    const { files, type, index } = params;
    this.files = files;
  }

  fileChange(event) {
    console.log(event);
  }

  imageClick(params) {
    console.log(params);
  }
}
