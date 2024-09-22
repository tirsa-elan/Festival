import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentVenuComponent } from './rent-venu.component';

describe('RentVenuComponent', () => {
  let component: RentVenuComponent;
  let fixture: ComponentFixture<RentVenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentVenuComponent]
    });
    fixture = TestBed.createComponent(RentVenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
