import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomepageNoAdminComponent } from './homepage-no-admin/homepage-no-admin.component';
import { IncidentPageComponent } from './incident-page/incident-page.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    DashboardPageComponent,
    HomepageNoAdminComponent,
    IncidentPageComponent,
    IncidentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
