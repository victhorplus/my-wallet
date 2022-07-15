import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let router: Router;
  let userService: UserService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router }]
    });
    service = new AuthGuard(router, userService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
