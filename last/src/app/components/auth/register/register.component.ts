import { Component, OnInit } from '@angular/core';
import { UserRegisterModel } from '../../../core/models/input-models/register-input-model';
import { AuthServices } from '../../../core/services/auth.services';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: UserRegisterModel
  constructor(
        private http:AuthServices, 
        private router: Router,
        private flashMsg: FlashMessagesService
      ) { }

  ngOnInit() {
    if(this.http.isTokenLive()) {
      this.router.navigate([''])
    }
    this.registerForm = new UserRegisterModel('','','','')
  }

  onSubmit() {
    console.log(this.registerForm)
    this.http.register(this.registerForm).subscribe(data=>{
      console.log(data);
      if(!data.success) {
        this.registerForm = new UserRegisterModel('','','','');
       this.flashMsg.show('Грешно потребителско име или парола', { cssClass: 'alert-danger', timeout: 3000 } )
      } else {
        this.flashMsg.show('Успешна регистрация', { cssClass: 'alert-success', timeout: 3000 } )
        this.http.login(this.registerForm).subscribe(data=>{
             if(data['success']) {
                 this.http.successLogin(data);
             }
      })
      }
    })
  }
}
