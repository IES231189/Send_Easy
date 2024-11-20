import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | null = null;


  login(username: string, password: string): Observable<User> {
    const user: User = { username, role: username === 'admin' ? 'admin' : 'user' };
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
    return of(user);
  }

  getUser(): User | null{
    if(!this.currentUser){
      const storedUser = localStorage.getItem('user');
      this.currentUser = storedUser ? JSON.parse(storedUser):null;
    }
    return this.currentUser;
  }

}
