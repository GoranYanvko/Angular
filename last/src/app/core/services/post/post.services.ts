import {Injectable} from '@angular/core';
import {HttpClientService} from './../http-client.service';
import {Observable} from 'rxjs/Observable';
import {httpConfig} from './../../../config/http.config'
import {HttpHeaders} from '@angular/common/http'

const url = httpConfig;
const token = localStorage.getItem('token')
@Injectable()
export class PostServices {
    constructor(
        private http : HttpClientService
    ) {}

    getSingelPost(body) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
          })
     return this.http.post(url.http+ url.getPost, body, {headers:headers})
    }

    addComment(body) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
          })
     return this.http.post(url.http+ url.addComment, body, {headers:headers})
    }
}