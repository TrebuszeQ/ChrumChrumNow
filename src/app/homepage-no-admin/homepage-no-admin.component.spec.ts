import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageNoAdminComponent } from './homepage-no-admin.component';

describe('HomepageNoAdminComponent', () => {
  let component: HomepageNoAdminComponent;
  let fixture: ComponentFixture<HomepageNoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageNoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
