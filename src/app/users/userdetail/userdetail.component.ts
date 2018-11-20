import {Component, Input, OnInit} from '@angular/core';

import {UserlistComponent} from '../userlist/userlist.component';
import {ApiService} from '../../api.service';
import {User} from '../../user';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  @Input() user: User;

  constructor(private apiService: ApiService , private listComponent: UserlistComponent) { }

  ngOnInit() {

  }

  deleteUsers() {
    this.apiService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.loadUsers();
        },
        error => console.log(error));
  }

updateUsers() {


    this.apiService.updateUser(this.user.id , {name: this.user.name, email: this.user.email}).subscribe(
      data => {
        console.log(data);
        this.user = data as User;
      },
      error => console.log(error)
    );
}

}
