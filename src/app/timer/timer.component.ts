import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  currentTime;
  constructor() {}

  ngOnInit(): void {
    this.currentTime = new Date();
  }
}
