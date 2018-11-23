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
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
 contactPost: FormGroup;
  constructor(private apiService: ApiService  , private fb: FormBuilder) {
}

  ngOnInit() {
  // this.users_s = this.apiService.getUserList();
    this.contactPost =  this.fb.group({
      userId : ['' , Validators.required],
      id : ['', Validators.required],
      title: ['', Validators.required],
     body: ['', Validators.required]
    });

  }
  newPost(): void {
    // this.isEqual = false;
    this.submitted = false;
    this.posts = new Post();

  }

  save() {
    this.apiService.createPost(this.posts)

      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(data => (console.log(data)), error => console.log(error));
this.apiService.getUserIdfromUsers(this.posts.userId); // I tried like this

    this.posts = new Post();

  }

  onSubmit() {

    this.submitted = true;
    this.save();

  }

 /* createFormGroup() {
  this.fb.group({
    userId : ['', Validators.required],
    id : ['', Validators.required],
    title: ['', Validators.required],
   body: ['', Validators.required]
  });*/
   /* return new FormGroup({
      userId: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])

    });*/
  }
/*get userId(){
return this.contactPost.get('userId');
}*/


 /*finduid(pid: number) {
    this.users_s = this.apiService.getUserList();
    this.users_s.subscribe(res => res.filter(key => {
      if (key.id === pid && pid !== null) {
        this.isEqual = true;

      } else {
        console.log('invaliddd!!!');
        this.isEqual = false;
          }

    }));

  }*/



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
