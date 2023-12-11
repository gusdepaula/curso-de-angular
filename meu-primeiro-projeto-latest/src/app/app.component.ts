import { Component } from '@angular/core';
import { NewComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NewComponent],
  standalone: true,
  template: `<h1>Curso de Angular</h1> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
