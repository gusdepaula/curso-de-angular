import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Curso de Angular</h1>
    <h2>Rotas</h2>
    <router-outlet></router-outlet> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
