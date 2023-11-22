import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './views/download/download.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './views/register/register.component';
import { DocsComponent } from './views/docs/docs.component';
import { IntroductionComponent } from './components/docs-components/introduction/introduction.component';
import { HardwareComponent } from './components/docs-components/hardware/hardware.component';
import { RepositoryComponent } from './components/docs-components/repository/repository.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'download',
    component: DownloadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      {
        path:'overview',
        component: IntroductionComponent
      },
      {
        path:'requirements',
        component: HardwareComponent
      },
      {
        path:'repository',
        component: RepositoryComponent
      }
    ]
  },
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
