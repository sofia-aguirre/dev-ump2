import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleGetComponent } from './role-get.component';

describe('RoleGetComponent', () => {
  let component: RoleGetComponent;
  let fixture: ComponentFixture<RoleGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
