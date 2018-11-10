import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../api.service';
import {Post} from '../../post';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = this.apiService.getPosts();
  }


}
