import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
  ],
  template: `<h1>Curso de Angular</h1>
    <app-template-driven-forms />
    <app-reactive-forms /> `,
})
export class AppComponent {}
