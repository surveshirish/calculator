import { TestBed } from '@angular/core/testing';

import { CalculatorAuthGuardGuard } from './calculator-auth-guard.guard';

describe('CalculatorAuthGuardGuard', () => {
  let guard: CalculatorAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CalculatorAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
