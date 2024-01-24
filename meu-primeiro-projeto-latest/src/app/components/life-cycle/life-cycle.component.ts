import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
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
export class LifeCycleComponent
  implements OnChanges, OnInit, DoCheck, AfterViewInit
{
  @Input() public myNumber = 0;
  public myText = signal('Gusta');

  @ViewChild('content') public content!: ElementRef;

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

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerText = 'Life Cycle 2';
    console.log(this.content.nativeElement.innerText);
  }
}
