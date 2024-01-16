import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './rootComponent/home/home.component';
import { AbcComponent } from './rootComponent/abc/abc.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { DashHomeComponent } from './dashboard/components/dash-home/dash-home.component';
import { EmployeeInfoComponent } from './dashboard/components/employee-info/employee-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'abc', component: AbcComponent},

  // {
  //   path: 'auth',
  //   children: [
  //     {path: '', component: LoginComponent},
  //     {path: 'login', component: LoginComponent},
  //     {path: 'signup', component: SignUpComponent},
  //   ]
  // },
  // {
  //   path: 'dashboard',
  //   children: [
  //     {path: '', component: DashHomeComponent},
  //     {path: 'dashhome', component: DashHomeComponent},
  //     {path: 'employeeInfo', component: EmployeeInfoComponent},
  //   ]
  // }

  {path: 'auth', loadChildren:() =>import('./auth/auth.module').then(x=>x.AuthModule)},
  {path: 'dashboard', component: DashboardComponent, loadChildren:() =>import('./dashboard/dashboard.module').then(x=>x.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
