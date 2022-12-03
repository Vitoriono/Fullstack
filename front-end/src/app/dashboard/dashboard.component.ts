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

    postype!: IPost

  constructor(
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createPost() {


    const post = {
      category: this.postype.category,
      title: this.postype.title,
      photo: this.postype.photo,
      text: this.postype.text,
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
