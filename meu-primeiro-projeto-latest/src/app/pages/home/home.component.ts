import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hom',
  standalone: true,
  imports: [],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
