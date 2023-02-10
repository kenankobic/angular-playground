import { Routes } from "@angular/router";
import { PlaygroundRoutes } from "../core/constants/playgroud-routes";
import { PublicGuard } from "../core/guards/public.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { PublicLayoutComponent } from "./layout/public-layout/public-layout.component";

export const PublicRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        canActivate: [PublicGuard],
        data: { performRedirection: false, isParentRoute: true },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: PlaygroundRoutes.LOGIN
            },
            {
                path: PlaygroundRoutes.LOGIN,
                component: LoginComponent,
                data: { performRedirection: true }
            },
            {
                path: PlaygroundRoutes.REGISTRATION,
                component: RegistrationComponent,
                data: { performRedirection: true }
            },
        ]
    },
]