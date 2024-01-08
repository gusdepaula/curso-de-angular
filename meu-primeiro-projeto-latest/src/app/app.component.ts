import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PaiOuMaeComponent],
  template: `<h1>Curso de Angular</h1>
    <app-pai-ou-mae /> `,
})
export class AppComponent {}
