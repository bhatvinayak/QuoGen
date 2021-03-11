import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "quogen";
  response : Response[];

  constructor (private dataService : DataService) { }

  ngOnInit () : void{
    this.dataService.getQuote().subscribe( data => this.response = data);
  }

  generateQuote(){
    this.dataService.getQuote().subscribe( data => this.response = data);
  }
}
