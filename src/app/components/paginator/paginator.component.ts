import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Paginator } from 'src/app/models/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input('paginator') paginator: Paginator = {
    label: 'Exibir',
    length: 50,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
    pageIndex: 1
  };
  @Output() change = new EventEmitter<Paginator>();
  pageNumbers: Array<number>;
  pageSizeControl = new FormControl();
  
  constructor() {
    this.calcPageLength();
    this.pageSizeControl.setValue(this.paginator.pageSize);

    this.pageSizeControl.valueChanges.subscribe(value => {
      this.paginator = {...this.paginator, pageSize: value };
      this.calcPageLength();
      this.change.emit(this.paginator);
    });

  }

  ngOnInit(): void {
    this.pageSizeControl.setValue(this.paginator.pageSize);
    this.calcPageLength();
  }

  ngOnChange(): void{

  }

  calcPageLength(){
    let pagesLength = Math.ceil(this.paginator.length/this.paginator.pageSize);
    this.pageNumbers = Array(pagesLength).fill(0).map( (x, i) => i+1 );
  }

  goToPage(pageIndex){
    if(pageIndex > this.pageNumbers.length || pageIndex < 1) return;
    this.paginator.pageIndex = pageIndex;
    this.change.emit(this.paginator);
  }

}
