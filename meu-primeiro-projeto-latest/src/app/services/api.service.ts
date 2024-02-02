import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Novo
  public name = signal('Gustavo de Paula');

  //Antigo
  public name$ = new BehaviorSubject('Gustavo de Paula $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(shareReplay());
  }
}
