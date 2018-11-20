import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/user';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'myPipe',
  pure: true
})
export class MyPipePipe implements PipeTransform {
  isEqual = false;

  constructor(private api: ApiService) { }
  transform(userId: number, users: Observable<User[]>): any {
    users = this.api.getUserList();
    users.subscribe(res => res.filter(ress => {
      if (ress.id === userId && userId !== null) {
        console.log('successs');

        return this.isEqual = true;

      } else if (ress.id !== userId && userId !== null) {
        console.log('invaliddd!!!not equal');
        return this.isEqual = false;

      } else  if (userId === null ) {
console.log('nulll');
return  this.isEqual = false;
      }
    }
    ));
  }
   /* users = this.api.getUserList();
    users.pipe(map(user => {
      user.filter(userss => {
        if (userss.id === userId && userId !== null) { return this.isEqual = true; } else {
          console.log(' ' + ' hataa');
          return this.isEqual = false;

        }
      });
    }));*/


}
