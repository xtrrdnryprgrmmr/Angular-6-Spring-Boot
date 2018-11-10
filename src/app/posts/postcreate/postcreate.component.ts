import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../api.service';
import {PostlistComponent} from '../postlist/postlist.component';
import {Post} from '../../post';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']
})
export class PostcreateComponent implements OnInit {


  posts: Post = new Post();
  submitted = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  newPost(): void {
    this.submitted = false;
    this.posts = new Post();

  }
  save() {
    this.apiService.createPost(this.posts)
      .subscribe( data => console.log(data) , error => console.log(error));
    this.posts = new Post();
  }



  onSubmit() {
    this.submitted = true;
    this.save();

  }




}
