import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomApi } from 'src/app/models/custom-api.model';
import { Payment } from 'src/app/models/payment.model';
import { User } from 'src/app/models/user.model';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'action'];
  usernameControl: FormControl = new FormControl('');
  paginator: any;
  blur: boolean = false;
  addPaymentPopup = false;
  editPaymentPopup = false;
  deletePaymentPopup = false;
  user_card = false;
  payments: Payment[];
  current_payment: Payment;
  sort: any;
  params: CustomApi;
  currentUser: Partial<User>;
  showMessageEvent = new EventEmitter();

  constructor(
    private paymentService: PaymentService,
    private userService: UserService,
    private router: Router 
  ) {
    this.paginator = JSON.parse(localStorage.getItem('paginator')) || {
      label: 'Exibir',
      length: 100,
      pageSize: 5,
      pageSizeOptions: [5, 10, 25, 50],
      pageIndex: 1
    }
    this.sort = JSON.parse(localStorage.getItem('sort')) || {}
    this.params = {};
    this.currentUser = this.userService.getUser() || {};
  }
  
  ngOnInit(): void {
    this.getPayments();
    this.usernameControl.valueChanges.subscribe( value => {
      this.params['username_like'] = value;
      this.getPayments();
    })
  }
  
  changePaginator(paginator){
    let pagesLength = paginator.length/paginator.pageSize;
    this.paginator = paginator;
    if(paginator.pageIndex>pagesLength) this.paginator.pageIndex = pagesLength;

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
      this.sort = { field: '', order: ''};
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

  addPayment(payment){
    this.paymentService.addPayment(payment).toPromise().then( (result) => {
      debugger;
      this.showMessageEvent.emit({
        title: 'Pagamento Adicionado.',
        message: `O Pagamento ${result.title} foi adicionado com sucesso!`
      });
      this.getPayments();
    })
  }
 
  openEditPaymentPopup(payment){
    this.current_payment = payment;
    this.blur = true;
    this.editPaymentPopup = true;
  }

  editPayment(value){
    this.paymentService.editPayment(this.current_payment, value).toPromise().then( () => {
      this.showMessageEvent.emit({
        title: 'Pagamento editado.',
        message: `O Pagamento ${this.current_payment.title} foi editado com sucesso!`
      });
      this.getPayments();
    })
  }
  
  openDeletePaymentPopup(payment){
    this.current_payment = payment;
    this.blur = true;
    this.deletePaymentPopup = true;
  }

  deletePayment(){
    this.paymentService.deletePayment(this.current_payment).toPromise().then( () => {
      this.showMessageEvent.emit({
        title: 'Pagamento deletado.',
        message: `O Pagamento ${this.current_payment.title} foi deletado com sucesso!`
      });
      this.getPayments();
    })
  }
  
  closePopup(){
    this.blur = false;
    this.addPaymentPopup = false;
    this.editPaymentPopup = false;
    this.deletePaymentPopup = false;
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('');
  }

}
