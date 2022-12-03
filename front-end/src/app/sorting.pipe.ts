import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(posts: Array<IPost>, category = ''): Array<Object | string> {
    if (!category) {
      return posts
    }
    return posts.filter((posts) => {

      return posts.category.toLowerCase() == category.toLowerCase()
    })
  }

}
