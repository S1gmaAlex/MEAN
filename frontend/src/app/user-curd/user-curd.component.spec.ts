import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCURDComponent } from './user-curd.component';

describe('UserCURDComponent', () => {
  let component: UserCURDComponent;
  let fixture: ComponentFixture<UserCURDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCURDComponent]
    });
    fixture = TestBed.createComponent(UserCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
