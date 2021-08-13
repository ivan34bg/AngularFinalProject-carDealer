import { TestBed } from '@angular/core/testing';

import { RightUserGuardGuard } from './right-user-guard.guard';

describe('RightUserGuardGuard', () => {
  let guard: RightUserGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RightUserGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
