import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserAPIService {
  constructor(private http: HttpClient, private router: Router) { }
  Login(value: any) {
    this.http.post('http://localhost:3000/api/auth/login', value)
      .subscribe({
        next: (res: any) => {
          sessionStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId)
          localStorage.setItem('role', res.role)
          this.router.navigate(['/homePage'])
          console.log('Logged in successfully!');
        },
        error: err => {
          alert('User not found')
          this.router.navigate(['/auth'])
        }
      });
  }

  Register(value: any) {
    this.http.post('http://localhost:3000/api/auth/register', value)
      .subscribe({
        next: (res: any) => {
          console.log('Sign in successfully!');
          sessionStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId)
          localStorage.setItem('role', res.role)
          this.router.navigate(['/homePage'])
        },
        error: err => {
          alert('register failed');
        }
      });
  }

  getUserById(userId: string) {
    return this.http.get<User>(`http://localhost:3000/api/users/${userId}`)
  }
}
