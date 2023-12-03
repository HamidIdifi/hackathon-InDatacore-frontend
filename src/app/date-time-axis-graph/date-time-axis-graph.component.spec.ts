import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeAxisGraphComponent } from './date-time-axis-graph.component';

describe('DateTimeAxisGraphComponent', () => {
  let component: DateTimeAxisGraphComponent;
  let fixture: ComponentFixture<DateTimeAxisGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeAxisGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeAxisGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
