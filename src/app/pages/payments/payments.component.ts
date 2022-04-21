import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Payment } from 'src/app/models/payment.models';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'action'];
  mock_payments: any = [{
      id: 1,
      name: "Pennie Dumphries",
      username: "pdumphries0",
      title: "Dental Hygienist",
      value: 19.96,
      date: "2020-07-21T05:53:20Z",
      image: "https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1",
      isPayed: true
    },
    {
        id: 2,
        name: "Foster Orthmann",
        username: "forthmann1",
        title: "Professor",
        value: 207.36,
        date: "2021-01-28T14:01:29Z",
        image: "https://robohash.org/quasetqui.png?size=150x150&set=set1",
        isPayed: true
    },
    {
        id: 3,
        name: "Crissie Summerill",
        username: "csummerill2",
        title: "VP Product Management",
        value: 464.54,
        date: "2020-02-09T18:20:32Z",
        image: "https://robohash.org/natusinciduntsapiente.png?size=150x150&set=set1",
        isPayed: false
    },
    {
        id: 4,
        name: "Letitia Crolly",
        username: "lcrolly3",
        title: "Web Developer I",
        value: 183.58,
        date: "2021-07-10T20:39:48Z",
        image: "https://robohash.org/estveniamet.png?size=150x150&set=set1",
        isPayed: false
    },
    {
        id: 5,
        name: "Anthea Pundy",
        username: "apundy4",
        title: "Software Engineer III",
        value: 177.19,
        date: "2021-01-01T14:09:51Z",
        image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
        isPayed: true
    },
    {
        id: 6,
        name: "Hurleigh Malitrott",
        username: "hmalitrott5",
        title: "Developer IV",
        value: 43.62,
        date: "2020-09-19T00:11:00Z",
        image: "https://robohash.org/impeditconsequuntureveniet.png?size=150x150&set=set1",
        isPayed: true
    },
    {
        id: 7,
        name: "Lonna Bonney",
        username: "lbonney6",
        title: "Assistant Media Planner",
        value: 285.86,
        date: "2020-10-02T23:04:57Z",
        image: "https://robohash.org/estquisquamquaerat.png?size=150x150&set=set1",
        isPayed: false
    },
    {
        id: 8,
        name: "Gregorio Deex",
        username: "gdeex7",
        title: "Marketing Assistant",
        value: 354.56,
        date: "2020-09-12T05:18:50Z",
        image: "https://robohash.org/asinthic.png?size=150x150&set=set1",
        isPayed: true
    },
    {
        id: 9,
        name: "Sibelle Domenico",
        username: "sdomenico8",
        title: "Assistant Manager",
        value: 175.59,
        date: "2021-05-12T05:17:48Z",
        image: "https://robohash.org/quismaximefuga.png?size=150x150&set=set1",
        isPayed: true
    },
    {
        id: 10,
        name: "Arlen Letchford",
        username: "aletchford9",
        title: "Mechanical Systems Engineer",
        value: 423.64,
        date: "2020-06-04T18:45:29Z",
        image: "https://robohash.org/possimusautemnecessitatibus.png?size=150x150&set=set1",
        isPayed: false
    }];
  paginator: any;
  blur: boolean = false;
  addPaymentPopup = false;
  editPaymentPopup = false;
  deletePaymentPopup = false;
  payment: Payment;

  constructor() {
    this.paginator = {
      length: 100,
      pageSize: 10,
      pageSizeOptions: [5, 10, 25, 50],
      label: "Exibir"
    }
  }
  
  ngOnInit(): void {
  }

  openAddPaymentPopup(){
    this.blur = true;
    this.addPaymentPopup = true;
  }

  addPayment(value){
    console.log("Add Payment", value)
  }
 
  openEditPaymentPopup(payment){
    this.payment = payment;
    this.blur = true;
    this.editPaymentPopup = true;
  }

  editPayment(value){
    console.log("edit Payment", value)
  }
  
  openDeletePaymentPopup(payment){
    this.payment = payment;
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
