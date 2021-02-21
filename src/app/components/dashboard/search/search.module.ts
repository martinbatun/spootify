import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputSearchModule } from '@sha/input-search/input-search.module';
import { DataModule } from '@sha/data/data.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SearchComponent }]),
    FormsModule,
    InputSearchModule,
    DataModule
  ]
})
export class SearchModule { }
