import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SportsComponent } from './sports/sports.component';
import { GenresComponent } from './genres/genres.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'movies', component: MoviesComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '**', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
