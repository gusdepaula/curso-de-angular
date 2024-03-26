import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-forms></app-forms>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  public addValue: number = 10;

  public getDados: { nome: string; idade: number } | undefined;

  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
