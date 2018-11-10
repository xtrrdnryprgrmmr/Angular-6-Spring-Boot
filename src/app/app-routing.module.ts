import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { UserscreateComponent} from './users/userscreate/userscreate.component';
import {UserlistComponent} from './users/userlist/userlist.component';
import {PostcreateComponent} from './posts/postcreate/postcreate.component';
import {PostlistComponent} from './posts/postlist/postlist.component';

const routes: Routes = [


  {
    path: 'users',
    component: UsersComponent ,

    children : [
   {
        path: 'add',
        component: UserscreateComponent

      },
      {   path: 'list',
  component: UserlistComponent
},

    ]
  },



  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    children : [
      {
        path: 'add',
        component: PostcreateComponent

      }   ,
      {
        path: 'list',
        component: PostlistComponent
      }
    ]
  },

{
  path: 'comments',
  component: CommentsComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
