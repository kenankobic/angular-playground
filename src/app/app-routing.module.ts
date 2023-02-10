import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutes } from './public/public.routes';

const routes: Routes = [
  ...PublicRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
