import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  constructor(translate: TranslateService){
    let lang = localStorage.getItem("language") || 'pt';
    translate.use(lang)
  }

  ngOnInit() {
   this.title = 'Desafio Picpay Front-end';
  }
}
