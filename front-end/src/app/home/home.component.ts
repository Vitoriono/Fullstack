import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   posts: Array<IPost> = [];
   ipost!: IPost;

constructor(
    private authServise: AuthService,
  ) { }

  ngOnInit(): void {

    this.authServise.getAllPost().subscribe( (posts ) =>
      this.posts = posts,

      (err: Error) => {},

      () => {
        for (let i = 0; i < this.posts.length; i++) {

        this.posts[i].text = this.posts[i].text.substring(0, 250)

        }
      }
    )
  }

  setCategory(category: string): void {
    this.ipost.category = category
  }

}
