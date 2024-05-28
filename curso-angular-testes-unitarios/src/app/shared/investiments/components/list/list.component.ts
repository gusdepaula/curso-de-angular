import { Component } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public investiments: Array<Investiments> = [
    { name: 'itaú', value: 100 },
    { name: 'bb', value: 100 },
    { name: 'nubank', value: 100 },
    { name: 'inter', value: 100 },
  ];
}
