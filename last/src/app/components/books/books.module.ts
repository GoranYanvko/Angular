import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {BooksComponents} from './index'
import { BookServices } from '../../core/services/book.service';

import {bookRouts} from './books.router'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(bookRouts)
    ],
    declarations:[...BooksComponents],
    providers:[
        BookServices
    ]
})

export class BookComponentModule {
}