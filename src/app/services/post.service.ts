import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../interfaces/post'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private path = `${environment.apiUrl}/posts/`;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.path);
  }
  
  getPost(id: string): Observable<Post>{
    const req = `${this.path}/${id}`;
    return this.http.get<Post>(req);
  }

  createPost(post: Post): Observable<any>{
    return this.http.post(this.path, post);
  }

  updatePost(post: Post): Observable<any>{
    const req = `${this.path}/${post.id}`;
    return this.http.put<Post>(this.path, post);
  }

  deletePost(id: string): Observable<any>{
    const req = `${this.path}/${id}`;
    return this.http.delete(req);
  }
}
