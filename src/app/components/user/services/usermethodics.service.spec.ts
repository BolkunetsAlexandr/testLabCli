import { TestBed, inject } from '@angular/core/testing';

import { UsermethodicsService } from './usermethodics.service';

describe('UsermethodicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermethodicsService]
    });
  });

  it('should be created', inject([UsermethodicsService], (service: UsermethodicsService) => {
    expect(service).toBeTruthy();
  }));
});
