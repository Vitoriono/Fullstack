import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  LogoutUser(){
    this.authServise.logout()
    alert('You are logged out!');
    this.router.navigate(['/auth'])
  }

  logout(event: Event){
    event.preventDefault()
    this.authServise.logout()
    this.router.navigate(['auth'])
  }
}
