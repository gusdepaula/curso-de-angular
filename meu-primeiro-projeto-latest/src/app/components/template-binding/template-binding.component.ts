import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name = 'Gustavo de Paula';
  public age = 40;
  public isDisabled = true;
  public srcValue =
    'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000);
  }
}
