import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {


  name!: string;
  login!: string;
  email!: string;
  password!: string;



  constructor(
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }


    if(!user.name ){
      alert('Enter your name');
      return false

    } else if (!user.login) {
      alert('Enter you login');
      return false

    } else if (!user.email) {
      alert('Enter your email')
      return false;

    } else if (!user.password) {
      alert('Enter your password');
      return false
    }

    console.log(user);

    this.authServise.registerUser(user).subscribe(data => {
      if(!data.success) {
        alert(data.msg);
        this.router.navigate(['/reg'])
      } else {
        alert(data.msg);
        this.router.navigate(['/auth'])
      }
    })

    return false

  }

}
