import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { RegisterPageComponent } from './user/register-page/register-page.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { UserProfilePageComponent } from './user/user-profile-page/user-profile-page.component';
import { AuthGuard } from './guards/authentication.guard';
import { NewThemeComponent } from './themes/new-theme/new-theme.component';
import { ReviewsPageComponent } from './themes/reviews-page/reviews-page.component';
import { ThemeComponent } from './themes/theme-details/theme.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},

    {path: 'login', component: LoginPageComponent},

    {path: 'register', component: RegisterPageComponent},

    {path: 'top-games', component: TopGamesComponent},

    {path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard]},

    {path: 'newtheme', component: NewThemeComponent, canActivate: [AuthGuard]},

    {path: 'reviews', component: ReviewsPageComponent, canActivate: [AuthGuard]},
    
    {path: '404', component: Error404PageComponent},

    {path: 'reviews/:id', component: ThemeComponent, canActivate: [AuthGuard]},

    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];
