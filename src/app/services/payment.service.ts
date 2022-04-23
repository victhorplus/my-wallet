import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomApi } from '../models/custom-api.model';
import { Payment } from '../models/payment.model';

const LIST_PAYMENTS_URL = "http://localhost:3000/tasks"
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  params: CustomApi;
  payments: Payment[];

  constructor(private http: HttpClient) { }

  getPayments(params?: CustomApi | any): Observable<Payment[]>{
    return this.http.get<Payment[]>(LIST_PAYMENTS_URL, {
      params: params
    });
  }

  addPayment(payment: Payment){
    return this.http.post<Payment>(
      LIST_PAYMENTS_URL,
      payment
    );
  }

  editPayment(oldPayment: Payment, newPayment: Payment): Observable<Payment>{
    return this.http.patch<Payment>(
      `${LIST_PAYMENTS_URL}/${oldPayment.id}`,
      {...oldPayment, ...newPayment}
    );
  }

  deletePayment(payment: Payment): Observable<Payment>{
    return this.http.delete<Payment>(
      `${LIST_PAYMENTS_URL}/${payment.id}`
    );
  }

}
