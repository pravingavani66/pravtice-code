import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { ChildComponent } from 'src/app/child/child.component';
import { TimerComponent } from 'src/app/timer/timer.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit, AfterContentInit {
  @Input() header: string;
  isShown: boolean = false;
  // @ContentChild('goSomewhere') goSomewhereButton: ElementRef;

  @ContentChildren(TimerComponent, { descendants: true })
  timerComps: QueryList<TimerComponent>;

  constructor() {}
  ngAfterContentInit(): void {
    console.log(
      'Inside ngAfterContentInit AccordianComponent ',
      this.timerComps.toArray()
    );

    window.setInterval(() => {
      this.timerComps.toArray().forEach((x) => (x.currentTime = new Date()));
    }, 1000);
  }
  // ngAfterContentChecked(): void {
  //   console.log('Inside ngAfterContentChecked AccordianComponent ');
  // }

  ngOnInit(): void {
    console.log('Inside OnInit AccordianComponent ', this.timerComps);
  }
}
