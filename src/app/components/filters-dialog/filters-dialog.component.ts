import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomApi } from 'src/app/models/custom-api.model';
import { Payment } from 'src/app/models/payment.model';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-filters-dialog',
  templateUrl: './filters-dialog.component.html',
  styleUrls: ['./filters-dialog.component.scss']
})
export class FiltersDialogComponent implements OnInit {
  @Output() close = new EventEmitter()
  @Output() submit = new EventEmitter<Partial<CustomApi>>();
  paymentForm: FormGroup;
  payment: Partial<Payment>;
  titles: string[];

  constructor(private fb: FormBuilder, private paymentService: PaymentService) {
    let saveFilter = <any>JSON.parse(localStorage.getItem('filters')) || {
      title:        '',
      date_gte:     [null],
      date_lte:     [null],
      value_gte:    [null],
      value_lte:    [null],
      isPayed:      [null]
    };
    this.paymentForm = this.fb.group(saveFilter);
    localStorage.setItem('filters', JSON.stringify(this.paymentForm.value));
  }

  ngOnInit(): void {
    this.getTitles();
  }

  closeFilters(): void{
    this.close.emit();
  }

  onSubmit(): void{
    if(this.paymentForm.status){
      this.payment = this.paymentForm.value;
      this.submit.emit(this.payment);
      localStorage.setItem('filters', JSON.stringify(this.paymentForm.value));
    }
  }

  clear(): void{
    this.paymentForm.setValue({
      title:        null,
      date_gte:     null,
      date_lte:     null,
      value_gte:    null,
      value_lte:    null,
      isPayed:      null
    })

    localStorage.setItem('filters', JSON.stringify(this.paymentForm.value));
    this.submit.emit(this.paymentForm.value);
  }

  getTitles(){
    this.paymentService.getPayments().subscribe(payments => {
      let titles: string[] = payments.map(payment => payment.title);
      titles = Array.from(new Set(titles)); // Retorna os titles sem valores duplicados
      this.titles = [null, ...titles];
    });
  }

}
