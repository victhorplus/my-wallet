import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentComponent } from './add-payment.component';
import { FormBuilder } from '@angular/forms';

describe('AddPaymentComponent', () => {
  let component: AddPaymentComponent;
  let fixture: ComponentFixture<AddPaymentComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentComponent ],
      providers: [{ provide: FormBuilder }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
