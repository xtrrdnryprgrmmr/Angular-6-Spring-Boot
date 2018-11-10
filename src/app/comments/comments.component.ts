import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$: Object;
  posts$: Object;
  users$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getComments().subscribe(data => (this.comments$ = data));
    this.data.getPosts().subscribe(data => (this.posts$ = data));
    this.data.getUsers().subscribe(data => (this.users$ = data));
  }

}
