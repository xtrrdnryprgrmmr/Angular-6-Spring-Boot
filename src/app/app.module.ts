import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsComponent } from './comments/comments.component';
import { UserscreateComponent } from './users/userscreate/userscreate.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserdetailComponent } from './users/userdetail/userdetail.component';

import { PostcreateComponent } from './posts/postcreate/postcreate.component';
import { PostlistComponent } from './posts/postlist/postlist.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      PostsComponent,
      UsersComponent,
      DetailsComponent,
      CommentsComponent,
      UserscreateComponent,
      UserlistComponent,
      UserdetailComponent,
          PostcreateComponent,
          PostlistComponent,

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
     FormsModule ,
     ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
