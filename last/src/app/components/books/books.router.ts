import { BooksListComponent } from "./books-list/books-list.component";
import { BooksDetailsComponent } from "./books-details/books-details.component";

export const bookRouts = [
    {path:'', component:BooksListComponent},
    {path:'details/:id', component: BooksDetailsComponent}
]