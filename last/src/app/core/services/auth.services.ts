import {Injectable} from '@angular/core';
import {UserLoginModel} from './../models/input-models/login-input-model'
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import {httpConfig} from './../../config/http.config'
import {  HttpHeaders} from '@angular/common/http'
import {tokenNotExpired} from 'angular2-jwt'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


const url = httpConfig;

@Injectable()
export class AuthServices {
    constructor(private http: HttpClientService,
          private router: Router,
          private flashMsg: FlashMessagesService  ) {}

    login(body):Observable<Object>{
        console.log(body);
        let httpUrl:string = url.http + url.login;
        let headers = new HttpHeaders();
        headers.set('Content-Type','application/json')
        return this.http.post(httpUrl, body, headers);
    }

    register(userInfo) {
        let httpUrl:string = url.http + url.register
        let headers = new HttpHeaders();
        headers.set('Content-Type','application/json')
        return this.http.post(httpUrl, userInfo, headers);
    }

    isTokenLive() {
        return tokenNotExpired();
    }

    successLogin(data) {
        localStorage.setItem('token', data['token'])
        localStorage.setItem('username', data['user'].username)
        if(data['user'].rolle.find(x=>x==='AdminRolle')) {
            localStorage.setItem('rolle' , 'admin')
        }
       
        this.flashMsg.show('Успешна регистрация', { cssClass: 'alert-success', timeout: 3000 } )
        this.router.navigate(['/'])
    }

}

