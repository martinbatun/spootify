import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlaylistsComponent }]),
  ]
})
export class PlaylistsModule { }
