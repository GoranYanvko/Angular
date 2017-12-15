import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../../core/services/user/user.services';
import { UserViewModel } from '../../../core/models/view-models/user-view-model';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class UserProfilComponent implements OnInit {
  user: UserViewModel;
  isValid: boolean = false;
  constructor(
    private http: UserServices 
  ) { }

  ngOnInit() {
    this.http.getUserInfo().subscribe(data=>{
     // console.log(data);
      this.user = data.user;
      this.isValid = true;
      console.log(data.user)
    }) 
  }
}
