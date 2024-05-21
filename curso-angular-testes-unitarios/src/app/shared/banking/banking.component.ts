import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss',
})
export class BankingComponent {
  private poupanca: number = 10;
  private carteira: number = 50;

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number {
    return this.carteira;
  }

  public setSacar(value: string): any {
    const sacar = Number(value);
    console.log(sacar);
  }

  public setDepositar(value: string): any {
    const depositar = Number(value);
    console.log(depositar);
  }
}
