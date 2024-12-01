import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css'
})
export class BookCollectionComponent {
  
  books: any[] =[
    {title: 'Book 1', author: 'Author 1', genre: 'Fiction'},
    {title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction'},
    {title: 'Book 3', author: 'Author 3', genre: 'Science Fiction'},
    {title: 'Book 4', author: 'Author 4', genre: 'Thriller'},
    {title: 'Book 5', author: 'Author 5', genre: 'Mystery'},
    {title: 'Book 6', author: 'Author 6', genre: 'Romance'},
    {title: 'Book 7', author: 'Author 7', genre: 'Adventure'},
    {title: 'Book 9', author: 'Author 8', genre: 'Comedy'},
    {title: 'Book 10', author: 'Author 8', genre: 'Comedy'},
    {title: 'Book 11', author: 'Author 8', genre: 'Comedy'},
    {title: 'Book 12', author: 'Author 8', genre: 'Comedy'},
    {title: 'Book 13', author: 'Author 8', genre: 'Comedy'},

  ]

  visibleBook: any[] = [];
  booksPerPage: number[] =[];

  constructor() {
    this.loadInit()
   }
loadInit(){
  this.visibleBook = this.books.slice(0, 6);    
}

  loadPrevious(){
    const startIndex = this.visibleBook.length - 6;
    this.visibleBook = this.books.slice(startIndex, startIndex + 6);
  }
  loadMore(){}
}
