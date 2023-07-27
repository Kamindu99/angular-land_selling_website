import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentspageComponent } from './apartmentspage.component';

describe('ApartmentspageComponent', () => {
  let component: ApartmentspageComponent;
  let fixture: ComponentFixture<ApartmentspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentspageComponent]
    });
    fixture = TestBed.createComponent(ApartmentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
