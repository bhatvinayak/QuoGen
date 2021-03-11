import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response2 } from '../quotes/quotes.model';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.scss']
})
export class AuthorQuotesComponent implements OnInit {

  response : Response2[];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }


}
