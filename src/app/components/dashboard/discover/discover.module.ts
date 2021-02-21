import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '@sha/data/data.module';


@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DiscoverComponent }]),
    DataModule
  ]
})
export class DiscoverModule { }
