import {
  Component,
  Inject,
  PLATFORM_ID,
  afterNextRender,
  afterRender,
  signal,
} from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Angular SSR / SSG</h1>`,
})
export class AppComponent {
  public newValue = signal('');

  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {
    if (isPlatformBrowser(this.plataformId)) {
      console.log(1, localStorage.getItem('value'));
    }

    if (isPlatformServer(this.plataformId)) {
      console.log(2, 'Gusta');
    }

    /*
      afterNextRender – executa uma vez e é semelhante ao AfterViewInit,
      mas não executa na renderização do lado do servidor (SSR)
    */
    afterNextRender(() => {
      console.log(1, 'afterNextRender');
    });

    // afterRender – executa após cada detecção de alteração
    afterRender(() => {
      console.log(2, 'afterRender');
      console.log(3, 'afterRender newValue', this.newValue());
    });
  }
}
