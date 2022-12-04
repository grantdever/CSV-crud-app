import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllgroupComponent } from './view-allgroup.component';

describe('ViewAllgroupComponent', () => {
  let component: ViewAllgroupComponent;
  let fixture: ComponentFixture<ViewAllgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
