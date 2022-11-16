import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './logging/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomepageNoAdminComponent } from './homepage-no-admin/homepage-no-admin.component';
import { IncidentPageComponent } from './incidents/incident-page/incident-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'homepage', component: HomepageNoAdminComponent },
  { path: 'create-incident', component: IncidentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
