import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  login!: string;
  password!: string;



  constructor(
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    const user = {
      login: this.login,
      password: this.password
    }

     if (!user.login) {
      alert('Enter you login');
      return false
    }
      else if (!user.password) {
      alert('Enter your password');
      return false
    }

    this.authServise.authUser(user).subscribe(data => {
      if(!data.success) {
        alert(data.msg);
      } else {
        alert('You have successfully logged in!');
        this.router.navigate(['/dashboard'])
        this.authServise.storeUser(data.token, data.user)
      }
    })
    return false

  }

}
