import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Payment } from 'src/app/models/payment.model';

import { EditPaymentComponent } from './edit-payment.component';
import { FormBuilder } from '@angular/forms';

describe('EditPaymentComponent', () => {
  let component: EditPaymentComponent;
  let fixture: ComponentFixture<EditPaymentComponent>;
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
      declarations: [ EditPaymentComponent ],
      providers: [{ provide: FormBuilder }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentComponent);
    component = fixture.componentInstance;
    component.payment = payment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
