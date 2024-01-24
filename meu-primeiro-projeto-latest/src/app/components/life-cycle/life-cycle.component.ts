import { CommonModule } from '@angular/common';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck {
  @Input() public myNumber = 0;
  public myText = signal('Gusta');

  // Construtor ou inicializador
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
