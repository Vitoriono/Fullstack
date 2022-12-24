import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post$: any;
  login: any;
  loading: boolean = false;
  params: any;

  constructor(
    private authServise: AuthService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    console.log('expect')

    if(this.authServise.isAuthenticated()) {
      this.login = JSON.parse(localStorage.getItem('user') || '{}').login
    }

    this.post$ = this.router.params.pipe(switchMap( (params : Params) => {
      return this.authServise.getPostById(params['id'])
    }, ))

    this.post$.subscribe(
      () => {

        this.loading = false;
        console.log('completed')
      }
    );
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
