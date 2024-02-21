import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OptImageComponent } from '@components/opt-image/opt-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OptImageComponent],
  template: `<h1>Curso de Angular</h1>
    <app-opt-image />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
