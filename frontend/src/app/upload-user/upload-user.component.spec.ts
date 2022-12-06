import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUserComponent } from './upload-user.component';

describe('UploadUserComponent', () => {
  let component: UploadUserComponent;
  let fixture: ComponentFixture<UploadUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
