import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BankingComponent } from './shared/banking/banking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BankingComponent],
  template: `<app-banking />`,
})
export class AppComponent {}
