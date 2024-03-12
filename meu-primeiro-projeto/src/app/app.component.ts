import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-output></app-output>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  public addValue: number = 10;

  public add() {
    this.addValue += 1;
  }
}
