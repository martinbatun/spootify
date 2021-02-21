import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@dash/dashboard.component';


const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('@sha/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'discover' },
      {
        path: 'discover',
        loadChildren: () => import('@dash/discover/discover.module').then(m => m.DiscoverModule)
      },
      {
        path: 'search',
        loadChildren: () => import('@dash/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('@dash/favorites/favorites.module').then(m => m.FavoritesModule)
      },
      {
        path: 'playlists',
        loadChildren: () => import('@dash/playlists/playlists.module').then(m => m.PlaylistsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('@dash/charts/charts.module').then(m => m.ChartsModule)
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
