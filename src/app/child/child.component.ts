import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  currentTime;
  constructor() {}

  ngOnInit(): void {
    this.currentTime = new Date();
  }

  logFromChild() {
    console.log('Logging from Child Component');
  }
}
