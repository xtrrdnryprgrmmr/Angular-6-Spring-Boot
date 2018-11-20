import {User} from '../user';
import {Post} from '../post';



export function  equalsIds(post: Post, user: User) {

  if (user.id === post.userId) {
return post.userId;
  } else {
  return 'this values doesnt equal';
  }

}

