import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router }]
    });
    service = new AuthGuard(router)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
