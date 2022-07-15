import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from 'src/app/models/payment.model';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.scss']
})
export class DeletePaymentComponent implements OnInit {
  @Input() payment: Payment;
  @Output() close = new EventEmitter()
  @Output() submit = new EventEmitter<Payment>();
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelDeletePayment(): void{
    this.close.emit();
  }

  onSubmit(): void{
    this.submit.emit(this.payment);
  }

}
