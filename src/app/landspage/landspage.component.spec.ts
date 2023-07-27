import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandspageComponent } from './landspage.component';

describe('LandspageComponent', () => {
  let component: LandspageComponent;
  let fixture: ComponentFixture<LandspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandspageComponent]
    });
    fixture = TestBed.createComponent(LandspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
