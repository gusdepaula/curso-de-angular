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
  template: `<app-diretivas-atributos>
      <h1>Aulas de diretiva atributo</h1>
      <hr /></app-diretivas-atributos
    ><router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
