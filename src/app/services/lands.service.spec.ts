import { TestBed } from '@angular/core/testing';

import { LandsService } from './lands.service';

describe('LandsService', () => {
  let service: LandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
