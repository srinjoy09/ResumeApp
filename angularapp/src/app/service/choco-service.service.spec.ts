import { TestBed } from '@angular/core/testing';

import { ChocoServiceService } from './choco-service.service';

describe('ChocoServiceService', () => {
  let service: ChocoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
