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
  loading: boolean =false;


  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    registerUser(user: any) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('https://pure-river-50317.herokuapp.com/account/reg', user,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    authUser(user: any ) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('https://pure-river-50317.herokuapp.com/account/auth', user,
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
      return this.http.post('https://pure-river-50317.herokuapp.com/account/dashboard', post,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    getAllPost() {
      return this.http.get('https://pure-river-50317.herokuapp.com/').pipe(map((res: any)  => res) )
    }

    getPostById(id: any) {
      return (this.http.get(`https://pure-river-50317.herokuapp.com/post/${id}`).pipe(map((res: any)  => res) ))
    }

    deletePost(id: any) {
      return this.http.delete(`https://pure-river-50317.herokuapp.com/post/${id}`).pipe(map((res: any)  => res) )
    }

}
