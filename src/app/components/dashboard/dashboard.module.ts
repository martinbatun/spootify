import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DashboardComponent } from '@dash/dashboard.component';
import { SidebarModule } from '@sha/sidebar/sidebar.module';
import { LoaderModule } from '@sha/loader/loader.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    LoaderModule,
    ScrollingModule,
  ]
})
export class DashboardModule { }
