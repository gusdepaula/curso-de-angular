import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2></ng-template
    ><app-output (enviarDados)="setDados($event)"></app-output>`,
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
