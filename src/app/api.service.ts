import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from './user';
import { resolve } from 'dns';
import { Post } from './post';
import { promise } from 'protractor';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private GET_USERS = 'http://localhost:8080/api/users';
  private GET_POSTS = 'http://localhost:8080/api/posts' ;
  private user_id  = User;
  constructor(private http: HttpClient) { }
get _user_id (): User {
return this._user_id;
}
set _user_id(value: User) {
this._user_id =  value;
}

  createUser(users: Object ): Observable<Object> {
    return this.http.post(  this.GET_USERS + '/create', users)
      .pipe(catchError(this.errorhandler));
  }
  getUserList(): Observable<any> {
    return this.http.get( this.GET_USERS + '/list');
  }

  getUserById(id: number): Observable <any> {
    return this.http.get( this.GET_USERS + '/list/id/' + id );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete( this.GET_USERS + '/list/ ' + id , { responseType: 'text' });
  }

  getPosts(): Observable<any> {
    return this.http.get(this.GET_POSTS + '/list');
  }
  createPost(posts: Object): Observable<Object> {
    return this.http.post(this.GET_POSTS + '/create' , posts);
 }

  errorhandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  getPostById(id: number): Observable<any> {
    return this.http.get(this.GET_POSTS + '/list/id/' + id);
  }
  deletePosts(id: number): Observable<any> {
    return this.http.delete(this.GET_POSTS + '/list/'  + id , { responseType : 'text'});
  }
updateUser(id: number, value: any): Observable<Object> {
  return this.http.put(this.GET_USERS + '/list/id/' + id , value);
}
updatePost(id: number , value: any): Observable<Object> {

    return this.http.put(this.GET_USERS + '/list/id/' + id , value);
}
  getUserIdfromUsers(id: number): any {


    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      return this.getUserList().subscribe(
        respose => {
          this._user_id = respose.data.find(x => x.id === id);
          return resolve(this._user_id);
        }, (err: HttpErrorResponse) => {
          return reject(err);
        });

    });
    return promise;
  }
}
