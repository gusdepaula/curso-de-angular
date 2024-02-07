import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from 'app/services/api.service';
import { error } from 'console';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public getListTask = this.#apiService.getTaskList;

  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;

  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskListError = this.#apiService.getTaskListError;
  public getTaskUpdateError = this.#apiService.getTaskUpdateError;
  public getTaskDeleteError = this.#apiService.getTaskDeleteError;

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$('3ikEwlP7ZLqk5sIhw3a7').subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(
        concatMap(() => {
          return this.#apiService.httpTaskList$();
        })
      )
      .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(
        concatMap(() => {
          return this.#apiService.httpTaskList$();
        })
      )
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(
        concatMap(() => {
          return this.#apiService.httpTaskList$();
        })
      )
      .subscribe();
  }
}
