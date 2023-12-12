import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
  styles: [
    `
      h2 {
        color: purple;
      }
    `,
  ],
})
export class NewComponent {}
