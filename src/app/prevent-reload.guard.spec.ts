import { TestBed } from '@angular/core/testing';

import { PreventReloadGuard } from './prevent-reload.guard';

describe('PreventReloadGuard', () => {
  let guard: PreventReloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventReloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
