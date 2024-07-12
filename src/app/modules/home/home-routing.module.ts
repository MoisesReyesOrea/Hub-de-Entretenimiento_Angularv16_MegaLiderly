import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { SeriesComponent } from '../series/series.component';
import { SportsComponent } from '../sports/sports.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent, loadChildren: () => import("./../movies/movies.module").then(m=>m.MoviesModule)},
  {path: 'series', component: SeriesComponent, loadChildren: () => import("./../series/series.module").then(m=>m.SeriesModule)},
  {path: 'sports', component: SportsComponent, loadChildren: () => import("./../sports/sports.module").then(m=>m.SportsModule)},
  // {path: 'genres', component: GenresComponent},
  // {path: 'favorites', component: FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
