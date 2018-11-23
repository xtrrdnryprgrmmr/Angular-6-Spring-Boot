import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { PostlistComponent} from './postlist/postlist.component';
import { ApiService} from '../api.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
 // comments$: Object;
 // posts$: Object;
 // users$: Object;
//  @Input() post: Post;



  constructor( private apiService: ApiService    )   {
}

ngOnInit() {
//  this.data.getComments().subscribe(data => (this.comments$ = data));
 // this.data.getPosts().subscribe(data => (this.posts$ = data));
  // this.data.getUsers().subscribe(data => (this.users$ = data));
}

 /* deletePosts() {
    this.apiService.deletePosts(this.post.id)
      .subscribe(
        data => {
          console.log(data);
          this.postListComponent.loadPosts();
        },
        error => console.log(error));
  }
*/

}
