import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DiscoverComponent }]),
    MatButtonModule
  ]
})
export class DiscoverModule { }
