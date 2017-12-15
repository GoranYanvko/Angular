import {Injectable} from '@angular/core';
import {UserLoginModel} from './../../models/input-models/login-input-model'
import {HttpClientService} from './../http-client.service';
import {Observable} from 'rxjs/Observable';
import {httpConfig} from './../../../config/http.config'
import {HttpHeaders} from '@angular/common/http'
import {tokenNotExpired} from 'angular2-jwt'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

const url = httpConfig;

@Injectable()
export class UserServices {
    constructor(
        private http : HttpClientService, 
        private router : Router, 
        private flashMsg : FlashMessagesService) {}

    getUserInfo() {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/x-www-form-urlencoded'
          })
     return this.http.get(url.http+ url.profile, {headers:headers})
    }
}
