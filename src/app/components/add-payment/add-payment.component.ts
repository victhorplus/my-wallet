import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment.model';

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
      username:   [null, [Validators.required]],
      value:  [null, [Validators.required]],
      date:   [null, [Validators.required]],
      title:  [null]
    });
  }

  cancelPayment(): void{
    this.close.emit();
  }

  onSubmit(): void{
    if(this.paymentForm.status){
      this.payment = this.paymentForm.value;
      this.payment.isPayed = false;
      this.payment.image = "assets/images/user.png"
      this.submit.emit(this.payment);
    }
  }
}
