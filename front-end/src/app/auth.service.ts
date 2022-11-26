import { HttpClient, HttpHeaders  } from '@angular/common/http';
import  {Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  token: any;
  user: any;


  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    registerUser(user: any) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/reg', user,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    authUser(user: any ) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/auth', user,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    storeUser(token: any, user: any){
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      this.token = token
      this.user = user
    }

    logout() {
      this.token = null;
      this.user = null
      localStorage.clear()
    }

    isAuthenticated(){
      return !!this.token;
    }

    registerPost(post: any) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/dashboard', post,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    getAllPost() {
      return this.http.get('http://localhost:3000').pipe(map((res: any)  => res) )
    }

    getPostById(id: any) {
      return this.http.get(`http://localhost:3000/post/${id}`).pipe(map((res: any)  => res) )
    }

    deletePost(id: any) {
      return this.http.delete(`http://localhost:3000/post/${id}`).pipe(map((res: any)  => res) )
    }

}
