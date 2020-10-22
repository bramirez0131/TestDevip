import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  currentPost:Post = null;
  message = "";
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = "";
    this.getPost(this.route.snapshot.paramMap.get("id"));
  }

  getPost(id): void{
    this.postService.getPost(id)
    .subscribe(data => {
      this.currentPost = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  updatePost(): void {
    const post:Post = {
      id: this.currentPost.id,
      userId: this.currentPost.userId,
      title: this.currentPost.title,
      body:this.currentPost.body
    };

    this.postService.updatePost(post).
    subscribe(response => {
      console.log(response);
      this.message = "el post se ha actualizado correctamente.";
    },
    error => {
      console.log(error);
    });
  }
  
  deletePost(): void {
    this.postService.deletePost(this.currentPost.id)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/Posts']);
    },
    error => {
      console.log(error);
    })
  }

}
