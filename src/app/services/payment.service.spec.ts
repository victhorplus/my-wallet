import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';


describe('PaymentService', () => {
  let service: PaymentService;
  let httpStub: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpStub }]
    });
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
