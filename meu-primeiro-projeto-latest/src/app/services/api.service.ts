import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Novo
  public name = signal('Gustavo de Paula');

  //Antigo
  public name$ = new BehaviorSubject('Gustavo de Paula $');

  constructor() {}
}
