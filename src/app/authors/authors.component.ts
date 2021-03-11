import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response3 } from './authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  response : Response3[];

  constructor(private dataService : DataService) { }

  ngOnInit() : void {
    this.dataService.getAuthors().subscribe( data => this.response = data);
  }

}
