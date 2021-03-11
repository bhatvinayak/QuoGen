import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'authors',
    component : AuthorsComponent,
    pathMatch: 'full'
  },
  {
    path : 'quotes',
    component : QuotesComponent,
    pathMatch: 'full'
  },
  {
    path : 'tags',
    component : TagsComponent,
    pathMatch: 'full'
  },
  {
    path : 'quotesbyauthor',
    component : AuthorQuotesComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
