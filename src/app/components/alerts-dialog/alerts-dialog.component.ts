import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alerts-dialog',
  templateUrl: './alerts-dialog.component.html',
  styleUrls: ['./alerts-dialog.component.scss']
})
export class AlertsDialogComponent implements OnInit {
  @Input() icon: string = 'done';
  @Input() color: string = '#198754';
  @Input() title: string = 'Edição de pagamento';
  @Input() message: string = 'Pagamento editado com sucesso!';
  @Input() showMessage = new EventEmitter();
  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.showMessage.subscribe(params => {
      if(params.icon) this.icon = params.icon;
      if(params.color) this.color = params.color;
      if(params.title) this.title = params.title;
      if(params.message) this.message = params.message;
      this.hide = false;
      setTimeout(()=> this.hide = true, 2000)
    });
  }

}
