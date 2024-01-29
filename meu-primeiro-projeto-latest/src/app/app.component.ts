import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LifeCycleComponent],
  template: `<h1>Curso de Angular</h1>
    @if(boolean) {<app-life-cycle [inputMyNumber]="number">
      <p #text>Text</p> </app-life-cycle
    >} <button (click)="boolean = !boolean">Destroy Component</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public number = signal(1);
  public boolean = true;

  ngOnInit(): void {
    setInterval(
      () =>
        this.number.update((oldValue) => {
          return oldValue + 1;
        }),
      1000
    );
  }
}
