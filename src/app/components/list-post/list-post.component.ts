import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service'
import { Post } from 'src/app/interfaces/post'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:Post[];
  currentPost = null;
  currentIndex = -1;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(): void {
    this.postService.getAllPosts()
    .subscribe(data => {
      this.posts = data;
      console.log(data);
    },
    error => {
      console.log(error)
    })
  }

  refreshList(): void {
    this.getAllPost();
    this.currentIndex = -1;
    this.currentPost = null;
  }

  setActivePost(post, index): void {
    this.currentIndex = index;
    this.currentPost = post;   
  }
}
