import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activedRoute.params.subscribe((res) =>
    //   // console.log(res.id, res.username, res)
    // );
    this.activedRoute.queryParams.subscribe((res) => console.log(res));
  }
}
