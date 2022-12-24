import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {



  posts: any = [];
  category: any
  loading: boolean = false;


constructor(
    private authServise: AuthService,

  ) { }

ngOnInit() {

    this.loading = true;
    console.log('wait');

    this.authServise.getAllPost().subscribe( (posts ) => this.posts = posts,

       (err: Error) => {},

      () => {
        for (let i = 0; i < this.posts.length; i++) {

          this.posts[i].text = this.posts[i].text.substring(0, 200)

        }
        this.loading = false;
        console.log('complete');
      },


    )


  }



  setCategory(category: any) {
    this.category = category
  };




}
