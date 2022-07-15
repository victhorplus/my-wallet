import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FiltersDialogComponent } from './filters-dialog.component';

describe('FiltersDialogComponent', () => {
  let component: FiltersDialogComponent;
  let fixture: ComponentFixture<FiltersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ FiltersDialogComponent ],
      providers: [{ provide: FormBuilder}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
