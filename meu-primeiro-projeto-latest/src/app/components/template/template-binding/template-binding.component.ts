import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000);
  }
}
