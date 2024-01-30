import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from '@components/life-cycle/life-cycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LifeCycleComponent],
  template: `<h1>Curso de Angular</h1> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
