import { Component, OnInit } from '@angular/core';
import { BookServices } from '../../../core/services/book.service';
import { BookModel } from '../../../core/models/view-models/books-view-model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [BookServices]
})
export class BooksListComponent implements OnInit {
  public books: BookModel[]
  constructor(private bookService: BookServices) { }

  ngOnInit() {
    console.log(123)
    this.books = this.bookService.getAllBook()
  }

}
