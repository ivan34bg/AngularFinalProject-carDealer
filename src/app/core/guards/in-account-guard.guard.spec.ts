import { TestBed } from '@angular/core/testing';

import { InAccountGuardGuard } from './in-account-guard.guard';

describe('InAccountGuardGuard', () => {
  let guard: InAccountGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InAccountGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
