import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Gustavo de Paula', idade: 40 },
    { nome: 'Gabriel de Paula', idade: 2 },
    { nome: 'Guilherme de Paula', idade: 35 },
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
