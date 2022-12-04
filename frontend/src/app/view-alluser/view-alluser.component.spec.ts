import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlluserComponent } from './view-alluser.component';

describe('ViewAlluserComponent', () => {
  let component: ViewAlluserComponent;
  let fixture: ComponentFixture<ViewAlluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAlluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAlluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
