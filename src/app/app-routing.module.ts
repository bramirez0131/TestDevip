import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'Posts', pathMatch: 'full'},
  { path: 'Posts', component: ListPostComponent },
  { path: 'Posts/:id', component: DetailPostComponent },
  { path: 'Create', component: CreatePostComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
