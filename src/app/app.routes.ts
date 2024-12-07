import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { UserProfilePageComponent } from './user/user-profile-page/user-profile-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},

    {path: 'login', component: LoginPageComponent},

    {path: 'register', component: RegisterPageComponent},

    {path: 'top-games', component: TopGamesComponent},

    {path: 'profile', component: UserProfilePageComponent},
    
    {path: '404', component: Error404PageComponent},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];
