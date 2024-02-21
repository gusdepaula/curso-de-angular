import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from 'environments/environment';
import { TranslateComponent } from '@components/translate/translate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateComponent],
  template: `<h1>Curso de Angular</h1>
    <app-translate />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
