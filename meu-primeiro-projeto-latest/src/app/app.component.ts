import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateVariablesComponent],
  template: `<h1>Curso de Angular</h1>
    <app-template-variables />`,
})
export class AppComponent {}
