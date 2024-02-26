import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnimationsComponent } from '@components/animations/animations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnimationsComponent],
  template: `<h1>Curso de Angular</h1>
    <app-animations />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
