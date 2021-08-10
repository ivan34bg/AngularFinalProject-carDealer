import { TestBed } from '@angular/core/testing';

import { CarAdService } from './car-ad.service';

describe('CarAdService', () => {
  let service: CarAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
