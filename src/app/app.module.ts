import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {CommonModule} from '@angular/common';


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
import { PostdetailComponent } from './posts/postdetail/postdetail.component';
import { MyPipePipe } from './posts/postcreate/my-pipe.pipe';
import { ApiService } from './api.service';

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
     PostdetailComponent,
     MyPipePipe

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
     FormsModule ,
     ReactiveFormsModule,
     CommonModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
