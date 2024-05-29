import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments!: Array<Investiments>;

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe((res) => {
      console.log(res);
      this.investiments = res;
    });
  }
}
