import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
    canActivate:[AuthGuard]
  },
  {
    path: 'movie',
    component: MovieComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'movie-details', component: MovieDetailsComponent ,
  
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '', 
    redirectTo: '/movie', 
    pathMatch: 'full',
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





