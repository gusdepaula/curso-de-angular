import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LifeCycleComponent],
  template: `<h1>Curso de Angular</h1>
    <app-life-cycle [myNumber]="number" />`,
})
export class AppComponent implements OnInit {
  public number = 1;

  ngOnInit(): void {
    setInterval(() => {
      this.number++;
    }, 1000);
  }
}
