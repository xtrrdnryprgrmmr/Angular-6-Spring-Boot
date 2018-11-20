import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../api.service';
import {PostlistComponent} from '../postlist/postlist.component';
import {Post} from '../../post';
import {UserscreateComponent} from '../../users/userscreate/userscreate.component';
import {User} from '../../user';
import {Observable, throwError} from 'rxjs';
import { async } from 'q';
import { map, catchError, switchMap } from 'rxjs/operators';
import { error } from 'util';
import { isNgTemplate } from '@angular/compiler';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']

})
export class PostcreateComponent implements OnInit {

  users_s: Observable<User[]>;
  posts: Post = new Post();
  submitted = false;
  isEqual = false;
  errormessage = 'error has happened!!!';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
// this.users_s = this.apiService.getUserList();
  }

  newPost(): void {
this.isEqual = false;
    this.submitted = false;
    this.posts = new Post();

  }

  save() {
    this.apiService.createPost(this.posts)

      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(data => (console.log(data)), error => console.log(error));
this.finduid(this.posts.userId);
    this.posts = new Post();

  }

  onSubmit() {
this.isEqual = true;
    this.submitted = true;
    this.save();

  }




 finduid(pid: number) {
    this.users_s = this.apiService.getUserList();
    this.users_s.subscribe(res => res.filter(key => {
      if (key.id === pid && pid !== null) {
        this.isEqual = true;

      } else {
        console.log('invaliddd!!!');
        this.isEqual = false;
          }

    }));

  }



 /* compareto(id: number) {
    console.log('my value is : ' + id);
    this.users_s = this.apiService.getUserList();
    this.users_s.pipe(map(
      items => {
        return items.filter(item => {
          if (item.id === id && id !== null) { this.isEqual = true; console.log(this.isEqual); } else { this.isEqual = false;
             console.log(this.errormessage); }
        });
      }
    ));
  }
  */

}
