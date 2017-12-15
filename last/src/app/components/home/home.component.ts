import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../../core/services/admin/admin.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter:number = 1;
  limit:number = 0;
  posts: Array<any>;
  constructor(private http: AdminServices) { }

  ngOnInit() {
    this.loadePosts();
  }


  loadePosts() {
    let body = {}
    this.http.allPost(body).subscribe(data=>{
      console.log(data);
      if(data['success']) {
        this.posts = data['posts'];
      }
    })
  }
}
