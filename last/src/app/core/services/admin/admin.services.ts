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
const token = localStorage.getItem('token')
@Injectable()
export class AdminServices {
    constructor(
        private http : HttpClientService, 
        private router : Router, 
        private flashMsg : FlashMessagesService) {}

    getAdminInfo() {
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/x-www-form-urlencoded'
          })
     return this.http.get(url.http+ url.admin, {headers:headers})
    }

    getAllUsers(body):Observable<Object> {
      
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/json'
          })
         return this.http.post(url.http+ url.allusers, body, {headers:headers})
    }

    deleteUser(body): Observable<Object> {
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/json'
          })
        return this.http.post(url.http+ url.delete, body, {headers:headers})
    }

    addPost(body): Observable<Object> {
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/json'
          })
        return this.http.post(url.http+ url.addPost, body, {headers:headers})
    }

    allPost(body): Observable<Object> {
        let headers = new HttpHeaders({
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': "http://localhost:4200",
            'Content-Type': 'application/json'
          })
        return this.http.post(url.http + url.allPost, body, {headers:headers})
    }
}
