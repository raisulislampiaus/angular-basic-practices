import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancelogComponent } from './attendancelog.component';

describe('AttendancelogComponent', () => {
  let component: AttendancelogComponent;
  let fixture: ComponentFixture<AttendancelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendancelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
