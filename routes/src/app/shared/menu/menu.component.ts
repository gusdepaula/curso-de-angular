import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.activedRoute.params.subscribe((res) =>
    //   // console.log(res.id, res.username, res)
    // );
    this.activedRoute.queryParams.subscribe((res) => console.log(res));

    setInterval(() => {
      // this.router.navigate(['404']);
      // this.router.navigateByUrl('404');
    }, 5000);
  }
}
