import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from 'environments/environment';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ConsumeServiceComponent],
  template: `<h1>Curso de Angular</h1>
    <app-consume-service /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
