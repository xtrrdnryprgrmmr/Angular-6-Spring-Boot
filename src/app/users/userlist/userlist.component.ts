import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../user';
import {ApiService} from '../../api.service';




@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
 users: Observable<User[]>;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadUsers();

  }


  loadUsers() {
    this.users = this.apiService.getUserList();

  }



}
