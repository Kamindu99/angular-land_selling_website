import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdialogboxComponent } from './viewdialogbox.component';

describe('ViewdialogboxComponent', () => {
  let component: ViewdialogboxComponent;
  let fixture: ComponentFixture<ViewdialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdialogboxComponent]
    });
    fixture = TestBed.createComponent(ViewdialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
