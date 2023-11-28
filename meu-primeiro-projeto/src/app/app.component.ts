import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-title title="Olá Mundo" *ngIf="destruir"></app-title>
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <button (click)="destruirComponente()">Destruir componente</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;

  public destruir: boolean = true;

  public adicionar(): number {
    return (this.valor += 1);
  }

  public destruirComponente() {
    this.destruir = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}
