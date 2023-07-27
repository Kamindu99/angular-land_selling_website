import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousespageComponent } from './housespage.component';

describe('HousespageComponent', () => {
  let component: HousespageComponent;
  let fixture: ComponentFixture<HousespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousespageComponent]
    });
    fixture = TestBed.createComponent(HousespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
