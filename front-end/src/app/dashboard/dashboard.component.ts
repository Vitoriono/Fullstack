import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // category!: string;
  // title!: string;
  // photo!: string;
  // text!: string;
  // author!: string;
  // date!: string;

    post!: IPost

  constructor(
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createPost() {


    const post = {
      category: this.post.category,
      title: this.post.title,
      photo: this.post.photo,
      text: this.post.text,
      author: JSON.parse(localStorage.getItem('user') || '{}').login,
      date: new Date
    }

    if(!post.category ){
      alert('Select a category!');
      return false

    } else if (!post.title) {
      alert('Enter  title!');
      return false

    } else if (!post.photo) {
      alert('Add your photo!')
      return false;

    } else if (!post.text) {
      alert('Enter your text!');
      return false
    }

    this.authServise.registerPost(post).subscribe(data => {
      if(!data.success) {
        alert(data.msg);
      } else {
        alert(data.msg);
        this.router.navigate(['/'])
      }
    })
    return false;
  }
}
