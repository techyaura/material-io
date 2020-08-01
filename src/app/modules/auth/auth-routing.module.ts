import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthLoginComponent,
        data: {
          header_title: 'app_dir'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
