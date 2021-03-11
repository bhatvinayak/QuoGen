import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TagsComponent } from './tags/tags.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    QuotesComponent,
    TagsComponent,
    NavbarComponent,
    HomeComponent,
    AuthorQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
