import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response3 } from './authors/authors.model';
import { Response2 } from './quotes/quotes.model';
import { Response4 } from './tags/tags.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "https://api.quotable.io/";

  constructor(private _http : HttpClient) { }

  //returns a random quotes
  getQuote(){
    return this._http.get<Response[]>(this.apiUrl+"random");
  }

  //returns list of quotes
  getQuotes(){
    return this._http.get<Response2[]>(this.apiUrl+"quotes");
  }

  //returns list of authors
  getAuthors(){
    return this._http.get<Response3[]>(this.apiUrl+"authors");
  }

  //returns list of tags
  getTags(){
    return this._http.get<Response4[]>(this.apiUrl+"tags");
  }

  //returns list of quotes by a specific author
  getQuotesByAuthor(id){
    return this._http.get<Response2[]>(this.apiUrl+" /authors/:"+id);
  }
}
