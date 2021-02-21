import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '@sha/data/data.module';


@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlaylistsComponent }]),
    DataModule
  ]
})
export class PlaylistsModule { }
