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
      [length]="6"
      [selectable]="files.length < 7"
      (onImageClick)="imageClick($event)"
      (onImageChange)="imageChange($event)"
      (onAddImageClick)="addImageClick($event)"
    ></ImagePicker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  files = data.slice(0);
  multiple = false;

  imageChange(params) {
    const { files, type, index } = params;
    this.files = files;
  }

  addImageClick(e) {
    e.preventDefault();
    this.files = this.files.concat({
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
    });
  }

  imageClick(params) {
    console.log(params);
  }
}
