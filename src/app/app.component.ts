import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-root',
  template: `
  <h3>{{ title }}</h3>
  <div class="ui search">
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search...">
      <i class="search icon"></i>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  content = [
    { title: 'red' },
    { title: 'green' },
    { title: 'blue' }
  ];

  ngOnInit(): void {
    jQuery('.ui.search').search({
      source: this.content
    });
  }
}
