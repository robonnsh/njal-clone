import { Injectable } from '@angular/core';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // register - save name and email in collections

  signUp(params: SignUp): Observable<any> {
    const { email, password, labelName } = params;
    return from(
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then((credential) => {
          return this.firestore
            .collection('users')
            .doc(credential.user?.uid)
            .set({ labelName, email });
        })
    ).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  //login

  signIn(params: SignIn): Observable<any> {
    return from(
      this.auth.signInWithEmailAndPassword(params.email, params.password)
    ).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  // password recovery - check if email exist

  recoverPassword(email: string): Observable<any> {
    return this.firestore
      .collection('users', (ref) => ref.where('email', '==', email))
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((users) => {
          if (users.length > 0) {
            return from(this.auth.sendPasswordResetEmail(email));
          } else {
            return throwError(() => new Error('Email not found.'));
          }
        }),
        catchError((error: FirebaseError) =>
          throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
        )
      );
  }

  // error messages

  private translateFirebaseErrorMessage({ code, message }: FirebaseError) {
    if (code === 'auth/user-not-found') {
      return 'User not found.';
    }
    if (code === 'auth/wrong-password') {
      return 'Wrong password';
    }
    if (code === 'auth/email-already-in-use') {
      return 'Email already exist';
    }
    if (code === 'auth/invalid-credential') {
      return 'Unrecognized username or password.';
    }
    if (code === 'auth/missing-email') {
      return 'Please enter valid email';
    }
    if (code === 'auth/invalid-email') {
      return 'Please enter valid email';
    }

    return message;
  }
}

// reusable types

type SignIn = {
  email: string;
  password: string;
};

type FirebaseError = {
  code: string;
  message: string;
};
type SignUp = {
  email: string;
  password: string;
  labelName: string;
};
