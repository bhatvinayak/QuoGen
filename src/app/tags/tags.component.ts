import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response4 } from './tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  response : Response4[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getTags().subscribe(data => this.response = data);
  }

}
