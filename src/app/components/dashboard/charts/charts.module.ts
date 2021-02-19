import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ChartsComponent }]),
  ]
})
export class ChartsModule { }
