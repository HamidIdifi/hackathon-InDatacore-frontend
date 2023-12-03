import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarChartComponentComponent } from './stacked-bar-chart-component.component';

describe('StackedBarChartComponentComponent', () => {
  let component: StackedBarChartComponentComponent;
  let fixture: ComponentFixture<StackedBarChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedBarChartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBarChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
