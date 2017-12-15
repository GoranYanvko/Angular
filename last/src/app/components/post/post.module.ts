import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import { PostComponents } from './index';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations:[PostComponent]
})

export class PostComponentModule {

}