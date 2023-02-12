import { Routes } from "@angular/router";
import { PlaygroundRoutes } from "../core/constants/playgroud-routes";
import { PublicGuard } from "../core/guards/public.guard";
import { AboutMeComponent } from "./about-me/about-me/about-me.component";
import { AngularAnimationsComponent } from "./angular/angular-animations/angular-animations.component";
import { AngularComponentsComponent } from "./angular/angular-components/angular-components.component";
import { AngularPipesComponent } from "./angular/angular-pipes/angular-pipes.component";
import { AngularStylesComponent } from "./angular/angular-styles/angular-styles.component";
import { AngularComponent } from "./angular/angular/angular.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PublicLayoutComponent } from "./layout/public-layout/public-layout.component";
import { ReactComponent } from "./react/react.component";

export const PublicRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        canActivate: [PublicGuard],
        data: { performRedirection: false, isParentRoute: true },
        children: [
            {
                path: '',
                component: HomepageComponent,
                data: { performRedirection: false }
            },
            {
                path: PlaygroundRoutes.LOGIN,
                component: LoginComponent,
                data: { performRedirection: false }
            },
            {
                path: PlaygroundRoutes.ANGULAR,
                component: AngularComponent,
                data: { performRedirection: false },
                children: [
                    {
                        path: PlaygroundRoutes.PIPES,
                        component: AngularPipesComponent,
                        data: { performRedirection: false }
                    },
                    {
                        path: PlaygroundRoutes.COMPONENTS,
                        component: AngularComponentsComponent,
                        data: { performRedirection: false }
                    },
                    {
                        path: PlaygroundRoutes.ANIMATIONS,
                        component: AngularAnimationsComponent,
                        data: { performRedirection: false }
                    },
                    {
                        path: PlaygroundRoutes.STYLES,
                        component: AngularStylesComponent,
                        data: { performRedirection: false }
                    },
                ]
            },
            {
                path: PlaygroundRoutes.REACT,
                component: ReactComponent,
                data: { performRedirection: false }
            },
            {
                path: PlaygroundRoutes.ABOUT_ME,
                component: AboutMeComponent,
                data: { performRedirection: false }
            },

        ]
    },
]