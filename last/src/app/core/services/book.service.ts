import {Injectable} from '@angular/core';
import { BookModel } from '../models/view-models/books-view-model';


@Injectable()

export class BookServices {
    private book: BookModel[] = [
        new BookModel(1,'Pyrva', '111'),
        new BookModel(2,'Vrora', '111sss'),
        new BookModel(3,'treata', '11sss1'),
    ]
    
    constructor() {}

    getAllBook():BookModel[] {
        return this.book;
    }

    getBookById(Bookid: number):BookModel {
        return this.book.find(b => b.id === Bookid);
    }
}