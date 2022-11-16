

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

//Components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './logging/login-page/login-page.component';
import { LoginFormComponent } from './logging/login-form/login-form.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomepageNoAdminComponent } from './homepage-no-admin/homepage-no-admin.component';
import { IncidentPageComponent } from './incidents/incident-page/incident-page.component';
import { IncidentFormComponent } from './incidents/incident-form/incident-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        LoginPageComponent,
        LoginFormComponent,
        DashboardPageComponent,
        HomepageNoAdminComponent,
        IncidentPageComponent,
        IncidentFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chrumchrumnow'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chrumchrumnow');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chrumchrumnow app is running!');
  });
});
