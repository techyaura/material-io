import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AppLoginLayoutComponent } from './layouts/app-login-layout/app-login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
