import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
   <button (click)="titleChanges.emit(title)">Emit Value to parent</button>
  `,
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  title = Math.random();

  titleChanges = new EventEmitter();

  ngOnInit(): void {

  }

}
