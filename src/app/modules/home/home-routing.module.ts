import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  // {path:"", component: HomeComponent},
  // {path: 'movies', component: MoviesComponent},
  // {path: 'series', component: SeriesComponent},
  // {path: 'sports', component: SportsComponent},
  // {path: 'genres', component: GenresComponent},
  // {path: 'favorites', component: FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
