import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    console.log('Parent Component Initiated');
  }
}
