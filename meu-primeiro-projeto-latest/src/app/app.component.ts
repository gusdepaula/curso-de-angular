import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HostElementsComponent } from './components/host-elements/host-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HostElementsComponent],
  template: `<h1>Curso de Angular</h1>
    <app-host-elements />`,
})
export class AppComponent {}
