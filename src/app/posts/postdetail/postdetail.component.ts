import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../post';
import {ApiService} from '../../api.service';
import {PostlistComponent} from '../postlist/postlist.component';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
 @Input() post: Post;
  constructor(private apiService: ApiService , private listcomponent: PostlistComponent) { }

  ngOnInit() {
  }
deletePost() {

  this.apiService.deletePosts(this.post.id)
    .subscribe(data => { console.log(data), this.listcomponent.loadPosts(); },
    error => console.log(error));
}
}
