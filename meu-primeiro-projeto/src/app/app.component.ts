import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-food-add></app-food-add><app-food-list></app-food-list>`,
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
