import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // encapsulation: ViewEncapsulation.None

})
export class PostComponent implements OnInit {

  post$: any;
  login: any;
  loading: boolean = false;
  params: any;


  editorStyle = {

    'box-shadow': '0.7px 0.5px 10px  rgb(17, 26, 26)'
  }

  constructor(
    private authServise: AuthService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit() {


    if(this.authServise.isAuthenticated()) {
      this.login = JSON.parse(localStorage.getItem('user') || '{}').login
    }


    this.post$ = this.router.params
      .pipe(switchMap( (params : Params) => {
        return this.authServise.getPostById(params['id'])
      } ));
    }

  deletePost(id: any) {
    this.authServise.deletePost(id).subscribe(data => {
      if(!data.success) {
        alert("Post not deleted!");
       } else {
        alert("Post deleted!");
        this.rout.navigate(['/'])
      }
    })
  }

}
