import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Payment } from 'src/app/models/payment.models';

import { DeletePaymentComponent } from './delete-payment.component';

describe('DeletePaymentComponent', () => {
  let component: DeletePaymentComponent;
  let fixture: ComponentFixture<DeletePaymentComponent>;
  let payment: Payment = {
    id: 1,
    name: "Pennie Dumphries",
    username: "pdumphries0",
    title: "Dental Hygienist",
    value: 19.96,
    date: new Date("2020-07-21T05:53:20Z"),
    image: "https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1",
    isPayed: true
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaymentComponent);
    component = fixture.componentInstance;
    component.payment = payment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
