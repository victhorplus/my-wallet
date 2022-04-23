import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment.model';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {
  @Input() payment: Payment;
  @Output() close = new EventEmitter()
  @Output() submit = new EventEmitter<Payment>();
  paymentForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      user:   [this.payment.username, [Validators.required]],
      value:  [this.payment.value, [Validators.required]],
      date:   [this.payment.date, [Validators.required]],
      title:  [this.payment.title]
    });
  }

  cancelEditPayment(): void{
    this.close.emit();
  }

  onSubmit(){
    if(this.paymentForm.status){
      this.payment = this.paymentForm.value;
      this.submit.emit(this.payment);
    }
  }

}
