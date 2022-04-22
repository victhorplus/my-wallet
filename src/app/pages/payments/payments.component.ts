import { Component, OnInit } from '@angular/core';
import { CustomApi } from 'src/app/models/custom-api.model';
import { Payment } from 'src/app/models/payment.model';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'action'];
  paginator: any;
  blur: boolean = false;
  addPaymentPopup = false;
  editPaymentPopup = false;
  deletePaymentPopup = false;
  payments: Payment[];
  current_payment: Payment;
  sort: any;
  params: CustomApi;

  constructor(private paymentService: PaymentService) {
    this.paginator = JSON.parse(localStorage.getItem('paginator')) || {
      label: 'Exibir',
      length: 100,
      pageSize: 5,
      pageSizeOptions: [5, 10, 25, 50],
      pageIndex: 1
    }
    
    this.sort = JSON.parse(localStorage.getItem('sort')) || {}

    this.params = {};
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.getPayments();
  }
  
  changePaginator(paginator){
    this.paginator = paginator;
    localStorage.setItem('paginator', JSON.stringify(this.paginator));
    this.getPayments();
  }

  getPayments(){
    this.params._page = this.paginator.pageIndex;
    this.params._limit = this.paginator.pageSize;
    this.params._sort = this.sort.field;
    this.params._order = this.sort.order;

    let subscribe = this.paymentService.getPayments(this.params)
    .subscribe( payments => {
      this.payments = payments;
      subscribe.unsubscribe();
    });
  }

  sortBy(field, order){
    if(JSON.stringify(this.sort) == JSON.stringify({ field, order })){
      this.sort = { field: '', sort: ''};
    }else{
      this.sort = { field,  order };
    }

    localStorage.setItem('sort', JSON.stringify(this.sort));
    this.getPayments();
  }

  clearSort(){
    this.sort = {
      name: false,
      title: false,
      date: false,
      value: false,
      isPayed: false,
      asc: false,
      desc: false
    }
    localStorage.setItem('sort', JSON.stringify(this.sort));
  }

  openAddPaymentPopup(){
    this.blur = true;
    this.addPaymentPopup = true;
  }

  addPayment(value){
    console.log("Add Payment", value)
  }
 
  openEditPaymentPopup(payment){
    this.current_payment = payment;
    this.blur = true;
    this.editPaymentPopup = true;
  }

  editPayment(value){
    console.log("edit Payment", value)
  }
  
  openDeletePaymentPopup(payment){
    this.current_payment = payment;
    this.blur = true;
    this.deletePaymentPopup = true;
  }

  deletePayment(value){
    console.log("delete Payment", value)
  }
  
  closePopup(){
    this.blur = false;
    this.addPaymentPopup = false;
    this.editPaymentPopup = false;
    this.deletePaymentPopup = false;
  }

}
