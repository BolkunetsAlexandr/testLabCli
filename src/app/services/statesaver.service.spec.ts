import { TestBed, inject } from '@angular/core/testing';

import { StatesaverService } from './statesaver.service';

describe('StatesaverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatesaverService]
    });
  });

  it('should be created', inject([StatesaverService], (service: StatesaverService) => {
    expect(service).toBeTruthy();
  }));
});
