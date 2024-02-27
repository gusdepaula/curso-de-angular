import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state(
        'move-left',
        style({
          opacity: 0,
          transform: 'scale(1) translateX(0) rotate(0deg)',
        })
      ),
      state(
        'move-right',
        style({
          opacity: 1,
          transform: 'scale(0.7) translateX(500px) rotate(360deg)',
        })
      ),
      transition('move-left <=> move-right', animate('1s')),
      transition(':enter', animate('1s')),
      transition(':leave', animate('2s')),
      transition('* => move-right', animate('5s 1s ease-in-out')),
      transition('* => move-left', animate('1s')),
    ]),
  ],
})
export class AnimationsComponent {
  public moveIn = signal('');
}
