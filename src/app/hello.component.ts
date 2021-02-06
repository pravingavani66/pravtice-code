import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{ name }}</h1>
  <app-test-component></app-test-component>`,
})
export class HelloComponent {
  name: string = 'John Smith';
}
