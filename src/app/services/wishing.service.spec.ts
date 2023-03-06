import { TestBed } from '@angular/core/testing';

import { WishingService } from './wishing.service';

describe('WishingService', () => {
  let service: WishingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
