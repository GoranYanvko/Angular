import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../../../core/services/admin/admin.services';
const limitUser:number = 5;
@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  counter:number = 1;
  limit:number = 0;
  posts: Array<any>;
  constructor(private http: AdminServices) { }

  ngOnInit() {
    this.loadePosts();
  }


  loadePosts() {
    let body = {
      min: this.limit,
      max: this.limit + limitUser
    }
    this.http.allPost(body).subscribe(data=>{
      console.log(data);
      if(data['success']) {
        this.posts = data['posts'];
      }
    })
  }

  loadeMore() {
    this.limit = this.limit + limitUser;
    this.loadePosts()
  }

}
