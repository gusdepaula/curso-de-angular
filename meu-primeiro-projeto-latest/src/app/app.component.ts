import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateDeferrableViewsComponent],
  template: `<h1>Curso de Angular</h1>
    <app-template-deferrable-views /> `,
})
export class AppComponent {}
