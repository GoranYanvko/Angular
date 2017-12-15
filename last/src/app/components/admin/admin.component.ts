import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../../core/services/admin/admin.services';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
 

const limitUser:number = 5;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  users: Array<any>;
  counter:number = 1;
  limit:number = 0;

  ads: boolean=false;
  post: boolean = false;
  constructor(
     private http: AdminServices,
     private msg: FlashMessagesService
    ) { }

  ngOnInit() {

  }

  loadeUser() {
    this.post = false;
    this.ads = false;
    let body = {
      min: this.limit,
      max: this.limit + limitUser
    }
    this.http.getAllUsers(body).subscribe(data=>{
      if(data['success']) {
        this.users = data['users']
        this.users = this.users.filter(y => {return y.username !==localStorage.getItem('username')})
      }
    })
  }

  loadeMore() {
    this.limit = this.limit + limitUser;
    this.loadeUser()
  }

  deleteUser(id) {
    let obj = {id}
      this.http.deleteUser(obj).subscribe(info =>{
        if(info['success']) {
          this.loadeUser();
          this.msg.show('Успешна изтрит потребител', { cssClass: 'alert-success', timeout: 3000 } )
        }
      })
  }

  loadePost() {
    this.users = null;
    this.ads = false;
    this.post = true;
  }

  loadeForm() {
    this.users = null;
    this.post = false;
    this.ads = true;
  }
  

}
