import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from '../../../core/models/input-models/login-input-model';
import { AuthServices } from '../../../core/services/auth.services';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: UserLoginModel;

  constructor(private http: AuthServices,
    private router: Router,
    private flashMsg: FlashMessagesService  
  ) { }

  ngOnInit() {
    if(this.http.isTokenLive()) {
      this.router.navigate([''])
    }
    this.loginForm = new UserLoginModel('', '')
  }

  onSubmit() {
    console.log(this.loginForm)
    this.http.login(this.loginForm).subscribe(data=>{
      if(!data['success']){
        this.flashMsg.show('Грешно потребителско име или парола', { cssClass: 'alert-danger', timeout: 3000 } )
      } else {
        console.log(data)
        this.http.successLogin(data);
      }
    })
    
  }
}
