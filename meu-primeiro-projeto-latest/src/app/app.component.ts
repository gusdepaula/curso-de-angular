import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentComponent],
  template: `<h1>Curso de Angular</h1>
    <app-content>
      <header id="header">
        <p>Header</p>
      </header>
      <p text>Text</p>
      <p>Text</p>
      <footer class="footer">
        <p>Footer</p>
      </footer>
    </app-content>`,
})
export class AppComponent {}
