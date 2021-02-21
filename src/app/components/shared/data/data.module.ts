import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [DataComponent]
})
export class DataModule { }
