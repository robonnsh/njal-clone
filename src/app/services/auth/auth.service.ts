import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { User } from '../../interfaces/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private jsonUrl = 'http://localhost:3000';
  // constructor(private http: HttpClient) {}
  // registerUser(userDetails: User) {
  //   return this.http.post(`${this.jsonUrl}/users`, userDetails);
  // }
  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.jsonUrl}/users?email=${email}`);
  // }

  constructor() {}
  signIn(params: SignIn): Observable<any> {
    return of({});
  }
}
type SignIn = {
  email: string;
  password: string;
};
