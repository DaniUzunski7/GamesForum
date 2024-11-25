import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TopGamesComponent } from './top-games/top-games.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},

    {path: 'login', component: LoginPageComponent},

    {path: 'register', component: RegisterPageComponent},

    {path: 'top-games', component: TopGamesComponent}
];
