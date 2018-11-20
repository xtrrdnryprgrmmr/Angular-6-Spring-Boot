import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';


import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../user';
import {ApiService} from '../../api.service';
import {UsersComponent} from '../users.component';

@Component({
  selector: 'app-userscreate',
  templateUrl: './userscreate.component.html',
  styleUrls: ['./userscreate.component.scss']
})
export class UserscreateComponent implements OnInit {

/*
userForm = new FormGroup(


{
  id : new FormControl('id'),
  name: new FormControl(''),
  email: new FormControl(''),
  address: new FormGroup(
    {
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl('')
    }
  ),
  phone: new FormControl(''),
  website: new FormControl('')
}
);

*/


   users: User = new User ();
 // users: User = { id : 0, name: '', email : '' , address: {street : '', suite: '' , city: '' , zipcode: '' }, phone: '', website: ''};
submitted = false;


  constructor(private apiService: ApiService ) { }

  ngOnInit() {

  }

  newUser(): void {
    this.submitted = false;
    this.users = new User();
  }
  save() {
    this.apiService.createUser(this.users)
      .subscribe( data => console.log(data)  ,  error => console.log(error));
    this.users = new User();
 }
 onSubmit() {
    this.submitted = true;
    this.save();
}

}
