import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, loadChildren: () => import("./modules/home/home.module").then(m=>m.HomeModule) },
  {path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m=>m.AuthModule)},

  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
