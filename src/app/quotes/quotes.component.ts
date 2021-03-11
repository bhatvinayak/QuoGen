import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response2 } from './quotes.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  response : Response2[];

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getQuotes().subscribe(data => this.response = data);
  }

}
