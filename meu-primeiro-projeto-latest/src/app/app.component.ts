import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalsComponent],
  template: `<h1>Curso de Angular</h1>
    <app-signals /> `,
})
export class AppComponent {}
