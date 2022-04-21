import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment.models';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  @Output() close = new EventEmitter()
  @Output() submit = new EventEmitter<Partial<Payment>>();
  paymentForm: FormGroup;
  payment: Partial<Payment>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      user:   [null, [Validators.required]],
      value:  [null, [Validators.required]],
      date:   [null, [Validators.required]],
      title:  [null]
    });
  }

  cancelPayment(){
    this.close.emit();
  }
  onSubmit(){
    if(this.paymentForm.status){
      this.payment = this.paymentForm.value;
      this.submit.emit(this.payment);
    }
  }
}
