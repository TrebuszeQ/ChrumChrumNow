import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
