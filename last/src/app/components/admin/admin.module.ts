import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { AdminComponents } from './index';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import { AllPostComponent } from './all-post/all-post.component';


@NgModule({
    declarations:[...AdminComponents, AddFormComponent, AllPostComponent],
    imports:[CommonModule, FormsModule]
})

export class AdminComponentsModule {

}