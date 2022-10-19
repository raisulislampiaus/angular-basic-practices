import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternetlogComponent } from './alternetlog.component';

describe('AlternetlogComponent', () => {
  let component: AlternetlogComponent;
  let fixture: ComponentFixture<AlternetlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternetlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternetlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
