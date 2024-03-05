import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {
    if (isPlatformBrowser(this.plataformId)) {
      console.log(1, localStorage.getItem('value'));
    }

    if (isPlatformServer(this.plataformId)) {
      console.log(2, 'Gusta');
    }
  }
}
