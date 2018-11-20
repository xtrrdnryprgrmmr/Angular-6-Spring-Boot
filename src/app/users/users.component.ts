import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { User } from '../user';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

 /*  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
*/
  })
export class UsersComponent implements OnInit {


 /// users: User = new User ();
//  submitted = false;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {

  }
/*
  newUser(): void {
    this.submitted = false;
    this.users = new User();
  }
  save() {
    this.apiservice.createUser(this.users)
      .subscribe( data => console.log(data)  ,  error => console.log(error));
    this.users = new User();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
*/
}
/*users$: Object;
  constructor(private data:  DataService) { }

  ngOnInit() {
	  this.data.getUsers().subscribe(


	  data=> this.users$=data
	  );
  }*/
