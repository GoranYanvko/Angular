import {Injectable} from '@angular/core';
import {UserLoginModel} from './../../models/input-models/login-input-model'
import {HttpClientService} from './../http-client.service';
import {Observable} from 'rxjs/Observable';
import {httpConfig} from './../../../config/http.config'
import {HttpHeaders} from '@angular/common/http'
import {tokenNotExpired} from 'angular2-jwt'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { AdminServices } from '../admin/admin.services';

const url = httpConfig;

@Injectable()
export class GardServices {
    isAdminModule = false;
    constructor(private http : AdminServices,
         private router : Router,
          private flashMsg : FlashMessagesService) {}

    isTokenLive() {
        console.log(tokenNotExpired())
        return tokenNotExpired();
    }

    isAdmin() {
       return localStorage.getItem('rolle')==='admin'
    }
}