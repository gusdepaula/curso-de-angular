import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicosPrestadosComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #router = inject(Router);

  public getId = signal<null | string>(null);
  @Input() set id(id: string) {
    this.getId.set(id);
  }

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id']);
    this.#route.params.subscribe((res) => console.log(res['id']));

    console.log(this.#route.snapshot.queryParams['name']);
    console.log(this.#route.snapshot.queryParams['age']);

    this.#route.queryParamMap.subscribe({
      next: (next) => {
        console.log(next.get('name'));
        console.log(next.get('age'));
      },
    });

    setTimeout(() => this.#router.navigate(['/curso']), 3000);
  }
}
