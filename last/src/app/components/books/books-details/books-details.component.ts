import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../../core/models/view-models/books-view-model';
import { BookServices } from '../../../core/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  book: BookModel;
  constructor(private bookService:BookServices, private routID: ActivatedRoute) { }

  ngOnInit() {
    let id = Number(this.routID.snapshot.params['id'])
    
    this.book = this.bookService.getBookById(id);
    console.log(this.book)
  }

}
