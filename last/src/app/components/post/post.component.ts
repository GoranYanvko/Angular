import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServices } from '../../core/services/post/post.services';
import { CommentModel } from '../../core/models/input-models/comment-input-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Object;
  commentText: CommentModel;
  allComments: any;
  commentTemplate: Array<Object>;
  user: boolean;
  constructor(private route: ActivatedRoute, private http: PostServices) { }

  ngOnInit() { 
    this.loadPost()
  }

  addComment() {
    let id = this.route.snapshot.url[1].path;
    let comment = this.commentText.text
    let body = {id, username:localStorage.getItem('username'), comment }
    console.log(body)
    this.http.addComment(body).subscribe(data=>{
      this.loadPost();
    })
  }

  loadPost() {
    if(localStorage.getItem('token')) {
      this.user = true;
    }
    this.commentText = new CommentModel('');
    let id = this.route.snapshot.url[1].path;
    this.http.getSingelPost({id}).subscribe(postInfo=>{
      if(postInfo.success) {
        this.post = postInfo.post
        this.commentTemplate = postInfo.post.comments
        console.log(this.commentTemplate)
      } else {
      }
    })
  }

}
