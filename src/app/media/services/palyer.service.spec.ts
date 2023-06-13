import { TestBed } from '@angular/core/testing';

import { PalyerService } from './palyer.service';

describe('PalyerService', () => {
  let service: PalyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
