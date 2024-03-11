import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-input [contator]="addValue"></app-input>
    <button (click)="add()">Add</button>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  public addValue: number = 10;

  public add() {
    this.addValue += 1;
  }
}
