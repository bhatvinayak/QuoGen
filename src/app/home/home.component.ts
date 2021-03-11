import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response : Response[];

  constructor (private dataService : DataService) { }

  ngOnInit () : void{
    this.dataService.getQuote().subscribe( data => this.response = data);
  }

  generateQuote(){
    this.dataService.getQuote().subscribe( data => this.response = data);
  }
}
