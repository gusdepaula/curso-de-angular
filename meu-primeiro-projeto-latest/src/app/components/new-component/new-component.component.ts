import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponent implements OnInit {
  public name = 'New Component';

  #apiService = inject(ApiService);
  // constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    console.log(this.#apiService.name());

    console.log(
      this.#apiService.name$.subscribe({
        next: (next) => console.log('next'),
        error: (error) => console.log('error'),
        complete: () => console.log('complete'),
      })
    );

    this.#apiService.name$.next('Gustavo de Paula $$');

    this.#apiService.name.set('Gustavo de Paula 2');

    setTimeout(() => {
      console.log(this.#apiService.name());
    }, 2000);
  }
}
