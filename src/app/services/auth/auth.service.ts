import { Injectable } from '@angular/core';
import { Observable, catchError, from, tap, throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // register

  signUp(params: SignUp): Observable<any> {
    return from(
      this.auth.createUserWithEmailAndPassword(params.email, params.password)
    ).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  // signUp(params: SignUp): Observable<any> {
  //   const { email, password, labelName } = params;
  //   return from(
  //     this.auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((credential) => {
  //         // User successfully created, now store additional information in the database
  //         return this.firestore
  //           .collection('users')
  //           .doc(credential.user?.uid)
  //           .set({ labelName });
  //       })
  //   ).pipe(
  //     catchError((error: FirebaseError) =>
  //       throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
  //     )
  //   );
  // }

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

  // password recovery

  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email)).pipe(
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
      return 'email already exist';
    }
    if (code === 'auth/invalid-credential') {
      return 'Unrecognized username or password.';
    }
    return message;
  }
}

// reusable types to not define everytime

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
};
