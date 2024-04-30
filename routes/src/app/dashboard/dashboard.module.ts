import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule, HomeComponent],
})
export class DashboardModule {}
