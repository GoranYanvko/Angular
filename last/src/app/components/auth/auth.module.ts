import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import { authComponents } from './index';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations:[...authComponents]
})

export class AuthComponentModule {

}