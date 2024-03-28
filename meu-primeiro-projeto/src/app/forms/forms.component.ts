import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public listComida: Array<{ comida: string; preco: string }> = [
    { comida: 'X-Salada', preco: 'R$10,00' },
    { comida: 'X-Egg', preco: 'R$13,00' },
    { comida: 'X-Bacon', preco: 'R$15,00' },
  ];

  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
