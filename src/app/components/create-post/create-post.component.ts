import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service'
import { Post } from 'src/app/interfaces/post'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  submitted = false;
  post:Post = {
    userId: '',
    title: '',
    body: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  createPost(): void {
    const post:Post = {
      userId: this.post.userId,
      title: this.post.title,
      body: this.post.body
    };
    this.postService.createPost(post)
    .subscribe((response) => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error)
    });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      userId: '1',
      title: '',
      body: ''
    }
  }
}
