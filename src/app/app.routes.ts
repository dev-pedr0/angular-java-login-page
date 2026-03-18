import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Authenticated } from './pages/authenticated/authenticated';
import { AuthGuard } from './services/auth-guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path: "user",
        component: Authenticated,
        canActivate: [AuthGuard]
    }
];
